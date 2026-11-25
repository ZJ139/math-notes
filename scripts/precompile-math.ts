import {spawn} from 'node:child_process';
import {mkdir,mkdtemp,readFile,rm,writeFile} from 'node:fs/promises';
import {availableParallelism} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkStackedFractions from '../src/stackedFractions';
import katex from 'katex';
import {loadEntries} from '../src/content';
import {precompileCMAmsMath} from '../src/cmAmsMath';
import {precompileCMBeaMath} from '../src/cmBeaMath';

type Formula = [tex:string, display:boolean, font?:'cm-bea'|'cm-ams'];
const root=fileURLToPath(new URL('..',import.meta.url));
if(process.argv[2]==='--worker'){
  const [file,indexText,totalText]=process.argv.slice(3);
  const index=Number(indexText),total=Number(totalText);
  if(!file||!Number.isInteger(index)||!Number.isInteger(total)||index<0||total<1||index>=total)throw new Error('Invalid math worker arguments');
  const formulas:Formula[]=JSON.parse(await readFile(file,'utf8'));
  const assigned:Formula[]=[];
  for(let i=index;i<formulas.length;i+=total){
    // Keep the site's KaTeX validation before handing any source to TeX.
    katex.renderToString(formulas[i][0],{displayMode:formulas[i][1],throwOnError:true,strict:'ignore',trust:false});
    assigned.push(formulas[i]);
  }
  for(let i=0;i<assigned.length;i+=128){
    const batch=assigned.slice(i,i+128);
    precompileCMBeaMath(batch.filter(f=>f[2]!=='cm-ams').map(f=>[f[0],f[1]]));
    precompileCMAmsMath(batch.filter(f=>f[2]==='cm-ams').map(f=>[f[0],f[1]]));
    console.log(`Math worker ${index+1}/${total}: ${Math.min(i+128,assigned.length)}/${assigned.length} formulas prepared`);
  }
}else{
  const formulas=new Map<string,Formula>();
  let selectedFont:'cm-bea'|'cm-ams'='cm-bea';
  function collectMath(){
    return(tree:any)=>{
      function visit(node:any){
        if(node.type==='math'||node.type==='inlineMath'){
          const formula:Formula=[node.value,node.type==='math',selectedFont];
          formulas.set(JSON.stringify(formula),formula);
        }
        for(const child of node.children||[])visit(child);
      }
      visit(tree);
    };
  }
  // Use the same Markdown math parser as the site; fenced code is not math.
  for(const entry of await loadEntries(path.join(root,'content'))){
    selectedFont=entry.mathFont||'cm-bea';
    renderToStaticMarkup(createElement(ReactMarkdown,{skipHtml:true,remarkPlugins:[remarkMath,remarkStackedFractions,collectMath],children:entry.body}));
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
