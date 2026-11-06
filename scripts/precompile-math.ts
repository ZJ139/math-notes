import {spawn} from 'node:child_process';
import {mkdir,mkdtemp,readFile,rm,writeFile} from 'node:fs/promises';
import {availableParallelism} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import {loadEntries} from '../src/content';
import {latexMath} from '../src/latexMath';

type Formula = [tex:string, display:boolean];
const root=fileURLToPath(new URL('..',import.meta.url));
if(process.argv[2]==='--worker'){
  const [file,indexText,totalText]=process.argv.slice(3);
  const index=Number(indexText),total=Number(totalText);
  if(!file||!Number.isInteger(index)||!Number.isInteger(total)||index<0||total<1||index>=total)throw new Error('Invalid math worker arguments');
  const formulas:Formula[]=JSON.parse(await readFile(file,'utf8'));
  let count=0;
  for(let i=index;i<formulas.length;i+=total){
    latexMath(...formulas[i]);
    if(++count%100===0)console.log(`Math worker ${index+1}/${total}: ${count} formulas prepared`);
  }
}else{
  const formulas=new Map<string,Formula>();
  function collectMath(){
    return(tree:any)=>{
      function visit(node:any){
        if(node.type==='math'||node.type==='inlineMath'){
          const formula:Formula=[node.value,node.type==='math'];
          formulas.set(JSON.stringify(formula),formula);
        }
        for(const child of node.children||[])visit(child);
      }
      visit(tree);
    };
  }
  // Use the same Markdown math parser as the site; fenced code is not math.
  for(const entry of await loadEntries(path.join(root,'content'))){
    renderToStaticMarkup(createElement(ReactMarkdown,{skipHtml:true,remarkPlugins:[remarkMath,collectMath],children:entry.body}));
  }
  await mkdir(path.join(root,'.latex-cache'),{recursive:true});
  const work=await mkdtemp(path.join(root,'.latex-cache/precompile-'));
  const file=path.join(work,'formulas.json');
  const workers=Math.max(1,Math.min(4,availableParallelism()));
  try{
    await writeFile(file,JSON.stringify([...formulas.values()]));
    const results=await Promise.allSettled(Array.from({length:workers},(_,index)=>new Promise<void>((resolve,reject)=>{
      const child=spawn(process.execPath,['--import','tsx',fileURLToPath(import.meta.url),'--worker',file,String(index),String(workers)],{cwd:root,stdio:'inherit'});
      child.once('error',reject);
      child.once('exit',(code,signal)=>code===0?resolve():reject(new Error(`Math worker ${index+1} failed: ${signal||code}`)));
    })));
    const failure=results.find(result=>result.status==='rejected');
    if(failure?.status==='rejected')throw failure.reason;
    console.log(`Prepared ${formulas.size} unique formulas with ${workers} workers.`);
  }finally{await rm(work,{recursive:true,force:true});}
}
