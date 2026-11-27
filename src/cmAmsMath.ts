import {createHash} from 'node:crypto';
import {execFileSync,spawnSync} from 'node:child_process';
import {copyFileSync,existsSync,mkdirSync,mkdtempSync,readFileSync,renameSync,rmSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('..',import.meta.url));
const cache=path.join(root,'.latex-cache');
const beaStyle=readFileSync(path.join(root,'assets/tex/cm-bea.sty'));
const fonts=path.join(root,'assets/fonts/fandol');
const rendererVersion=createHash('sha256').update(readFileSync(fileURLToPath(import.meta.url))).update(beaStyle).update(readFileSync(path.join(fonts,'FandolSong-Regular.otf'))).update(readFileSync(path.join(fonts,'FandolSong-Bold.otf'))).digest('hex');
const stixFile = 'STIXTwoMath-Regular.ttf';
const stixPath = path.join(root, 'assets/fonts/stix-two-math', stixFile);
const stixVersion = createHash('sha256').update(rendererVersion).update(readFileSync(stixPath)).digest('hex');
type ArticleFont = 'cm-ams' | 'stix-two';
const used=new Set<string>();
// TeX reports advance widths, not ink bounds: an oblique f extends almost
// 2pt past its 3pt advance. Keep that ink (and round-glyph overshoot) in the PDF.
export const formulaSVGPaddingEm=0.3;
interface MathImage {id:string;width:number;height:number;depth:number;fonts:string[]}

function formulaId(tex:string,display:boolean,font:ArticleFont):string {
  // Only mathematical input reaches TeX. Disable file access, shell escape,
  // macro definitions and engine primitives in addition to KaTeX validation.
  if(/\\(?:input|include|includegraphics|openin|openout|read|write|special|immediate|def|gdef|edef|xdef|let|futurelet|newcommand|renewcommand|providecommand|csname|catcode|usepackage|documentclass|loop|repeat|shipout|every\w*|directlua|pdf\w*|XeTeX\w*)(?![A-Za-z])/.test(tex)||/(?<!\\)\$|\^\^/.test(tex))throw new Error('公式只允许标准数学 LaTeX 命令');
  return createHash('sha256').update((font==='stix-two'?stixVersion:rendererVersion)+'\0'+display+'\0'+tex).digest('hex');
}

type Formula = readonly [tex:string,display:boolean];

export function cmAmsMath(tex:string,display:boolean,font:ArticleFont='cm-ams'):MathImage {
  const id=formulaId(tex,display,font);
  const metadata=path.join(cache,id+'.json');
  if(!existsSync(metadata)||!existsSync(path.join(cache,id+'.svg')))compileBatch([[tex,display]],font);
  used.add(id);
  return JSON.parse(readFileSync(metadata,'utf8'));
}

// Amortize TeX startup across bounded batches, retaining one cropped page and
// exact box metrics per formula. Only complete, validated results enter cache.
export function precompileCMAmsMath(formulas:readonly Formula[],font:ArticleFont='cm-ams'){
  const missing=new Map<string,Formula>();
  for(const formula of formulas){
    const id=formulaId(...formula,font);
    if(!existsSync(path.join(cache,id+'.json'))||!existsSync(path.join(cache,id+'.svg')))missing.set(id,formula);
  }
  const pending=[...missing.values()];
  for(let i=0;i<pending.length;i+=64){
    const batch=pending.slice(i,i+64);
    try{compileBatch(batch,font);}catch{
      // Report the precise offending equation using the single-formula path.
      for(const [tex,display] of batch)cmAmsMath(tex,display,font);
    }
  }
}

function compileBatch(formulas:readonly Formula[],font:ArticleFont){
  mkdirSync(cache,{recursive:true});
  const work=mkdtempSync(path.join(cache,'compile-'));
  try{
    // xdvipdfmx may resolve font paths to absolute names. Keep actual font
    // files inside its allowed temporary directory, rather than symlinking out.
    for(const name of ['FandolSong-Regular.otf','FandolSong-Bold.otf'])copyFileSync(path.join(fonts,name),path.join(work,name));
    if (font === 'stix-two') copyFileSync(stixPath, path.join(work, stixFile));
    const fontSetup = font === 'stix-two'
      ? String.raw`\usepackage{amsmath,unicode-math}
\setmathfont[Path=./]{${stixFile}}`
      : String.raw`\usepackage{amsmath,amssymb}
\usepackage[no-math]{fontspec}`;
    const pages=formulas.map(([tex,display])=>{
      const source=tex.replace(/[\u3000-\u303f\u3400-\u9fff\uff00-\uffef]+/g,s=>`\\text{\\fontencoding{TU}\\Fandol ${s}}`);
      return String.raw`\begin{FormulaPage}%
\sbox{\FormulaBox}{$${display?'\\displaystyle':'\\textstyle'} ${source}$}%
\immediate\write\metrics{\the\wd\FormulaBox,\the\ht\FormulaBox,\the\dp\FormulaBox}%
\usebox{\FormulaBox}%
\end{FormulaPage}%`;
    }).join('\n');
    // Suppress interword spaces around each box, including page boundaries.
    const document=String.raw`\documentclass[10pt,border=${formulaSVGPaddingEm*10}pt,multi=FormulaPage]{standalone}
${fontSetup}
\newfontfamily\Fandol{FandolSong-Regular.otf}[Path=./,BoldFont=FandolSong-Bold.otf]
\newsavebox{\FormulaBox}
\newenvironment{FormulaPage}{}{}
\newwrite\metrics
\begin{document}\rmfamily%
\immediate\openout\metrics=metrics.txt\relax
${pages}
\immediate\closeout\metrics
\end{document}
`;
    writeFileSync(path.join(work,'formula.tex'),document);
    const env={PATH:process.env.PATH,LANG:'C.UTF-8',openin_any:'p',openout_any:'p',TEXMFOUTPUT:work,XDG_CACHE_HOME:path.join(cache,'font-cache')};
    const compiler=spawnSync('xelatex',['-no-shell-escape','-interaction=batchmode','-halt-on-error','formula.tex'],{cwd:work,env,timeout:30_000,encoding:'utf8'});
    if(compiler.error||compiler.status!==0)throw new Error(compiler.stderr||compiler.stdout||String(compiler.error));
    const log=readFileSync(path.join(work,'formula.log'),'utf8');
    if(/Missing character:/.test(log))throw new Error('公式包含字体未覆盖的字符');
    const metrics=readFileSync(path.join(work,'metrics.txt'),'utf8').trim().split('\n');
    if(metrics.length!==formulas.length)throw new Error('LaTeX 公式页数无效');
    for(let index=0;index<formulas.length;index++){
      const [tex,display]=formulas[index];
      const id=formulaId(tex,display,font);
      const [width,height,depth]=metrics[index].split(',').map(parseFloat);
      if(![width,height,depth].every(n=>Number.isFinite(n)&&n>=0)||width===0||height+depth===0)throw new Error('LaTeX 公式尺寸无效');
      // Keep TeX's scale and origin; Cairo's default crop rounding would
      // otherwise shrink short variables and shift their baseline.
      const page=String(index+1);
      const svg=path.join(work,id+'.svg');
      execFileSync('pdftocairo',['-svg','-noshrink','-nocenter','-f',page,'-l',page,'formula.pdf',id+'.svg'],{cwd:work,env,timeout:30_000,stdio:'pipe'});
      const fontReport=execFileSync('pdffonts',['-f',page,'-l',page,'formula.pdf'],{cwd:work,env,timeout:10_000,encoding:'utf8'});
      const fontNames=fontReport.trim().split('\n').slice(2).map(line=>line.split(/\s+/)[0].replace(/^[A-Z]{6}\+/,''));
      if(!fontNames.length||(/[\u3400-\u9fff]/.test(tex)&&!fontNames.some(name=>name.startsWith('FandolSong'))))throw new Error(`公式字体未正确嵌入：${fontNames.join(', ')}`);
      const result={id,width:width/10,height:height/10,depth:depth/10,fonts:fontNames};
      renameSync(svg,path.join(cache,id+'.svg'));
      writeFileSync(path.join(work,'result.json'),JSON.stringify(result));
      renameSync(path.join(work,'result.json'),path.join(cache,id+'.json'));
    }
  }catch(error){
    const log=existsSync(path.join(work,'formula.log'))?readFileSync(path.join(work,'formula.log'),'utf8'):'';
    const detail=log.match(/^!.*(?:\n.*){0,4}/m)?.[0]||String(error);
    throw new Error(`LaTeX 公式编译失败：${formulas[0][0].slice(0,120)}\n${detail}`);
  }finally{rmSync(work,{recursive:true,force:true});}
}

export function copyCMAmsMathAssets(destination:string){
  mkdirSync(destination,{recursive:true});
  for(const id of used)copyFileSync(path.join(cache,id+'.svg'),path.join(destination,id+'.svg'));
}

export default function rehypeCMAmsMath(){ return renderArticleMath('cm-ams'); }
export function rehypeStixTwoMath(){ return renderArticleMath('stix-two'); }

function renderArticleMath(font:ArticleFont){
  return(tree:any)=>{
    const text=(node:any):string=>node.type==='text'?node.value:(node.children||[]).map(text).join('');
    function walk(node:any,display=false){
      const classes=node.properties?.className||[];
      if(classes.includes('katex-error'))throw new Error('无效的 LaTeX 公式：'+text(node));
      display=display||classes.includes('katex-display');
      if(classes.includes('katex')){
        let tex='';
        function find(n:any){if(n.tagName==='annotation'&&n.properties?.encoding==='application/x-tex')tex=text(n);else for(const child of n.children||[])find(child);}
        find(node);
        const result=cmAmsMath(tex,display,font);
        // Keep the accessible MathML, but render the visible formula with TeX.
        node.children=node.children.filter((n:any)=>n.properties?.className?.includes('katex-mathml'));
        // A scrollable inline-block exposes its bottom edge as its baseline.
        // Negative margins remove the SVG's transparent bleed from the layout
        // and its bottom margin edge. TeX's original depth still aligns the
        // baseline; its advance width, glyph scale and line height stay intact.
        node.properties.style=`--math-baseline:-${result.depth}em`;
        node.children.push({type:'element',tagName:'img',properties:{className:['latex-svg'],src:`/math/${result.id}.svg`,alt:'',ariaHidden:'true',style:`width:${result.width+2*formulaSVGPaddingEm}em;height:${result.height+result.depth+2*formulaSVGPaddingEm}em`},children:[]});
        return;
      }
      for(const child of node.children||[])walk(child,display);
    }
    walk(tree);
  };
}
