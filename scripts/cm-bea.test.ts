import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {cmBeaMath,copyCMBeaMathAssets,precompileCMBeaMath,formulaSVGPaddingEm} from '../src/cmBeaMath';
import {latexMath} from '../src/latexMath';
import {loadEntries} from '../src/content';
import {LouBatchArticle} from '../src/LouAnalysisDirectory';
import Markdown from '../src/Markdown';

test('CM bea matches classic Beamer math metrics and embedded fonts',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-reference-'));
  const tex=String.raw`f(x)+f'(x)+f''(x)+f'''(x)+f^2(x)+f_n(x)+\sin x+\alpha+\int_0^1 t\,dt`;
  try{
    await writeFile(path.join(work,'reference.tex'),String.raw`\documentclass[10pt]{beamer}
\usepackage[OT1]{fontenc}\renewcommand\sfdefault{cmss}
\usepackage{amsmath,amssymb}
\newsavebox{\sample}\begin{document}
\sbox{\sample}{$\displaystyle ${tex}$}
\typeout{METRICS: \the\wd\sample,\the\ht\sample,\the\dp\sample}
\usebox{\sample}\end{document}`);
    execFileSync('xelatex',['-no-shell-escape','-interaction=batchmode','-halt-on-error','reference.tex'],{cwd:work,stdio:'pipe',timeout:30000});
    const log=await readFile(path.join(work,'reference.log'),'utf8');
    const expected=log.match(/METRICS: ([^\n]+)/)![1].split(',').map(parseFloat);
    const got=cmBeaMath(tex,true);
    [got.width,got.height,got.depth].forEach((v,i)=>assert.ok(Math.abs(v*10-expected[i])<0.001));
    const names=execFileSync('pdffonts',['reference.pdf'],{cwd:work,encoding:'utf8'}).trim().split('\n').slice(2).map(line=>line.split(/\s+/)[0].replace(/^[A-Z]{6}\+/,''));
    assert.deepEqual([...got.fonts].sort(),names.sort());
    assert.ok(got.fonts.some(f=>f.startsWith('CMSSI')));
    assert.ok(got.fonts.includes('CMEX10'));
    assert.notEqual(got.id,latexMath(tex,true).id,'Font variants must not share cache entries');
  }finally{await rm(work,{recursive:true,force:true});}
});

test('CM bea retains italic correction and classic fonts with fontspec already loaded',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-text-fonts-'));
  const tex=String.raw`f'(x)+f''(x)+f^2(x)+f_n(x)`;
  try{
    const style=path.resolve('assets/tex/cm-bea').split(path.sep).join('/');
    await writeFile(path.join(work,'reference.tex'),String.raw`\documentclass[10pt]{article}
\usepackage{fontspec}\setmainfont{Latin Modern Roman}\setsansfont{Latin Modern Sans}
\usepackage{${style}}
\pagestyle{empty}\newsavebox{\sample}\begin{document}
\sbox{\sample}{$\displaystyle ${tex}$}
\typeout{METRICS: \the\wd\sample,\the\ht\sample,\the\dp\sample}
\typeout{FCORRECTION: \the\fontcharic\textfont\sympureletters102}
\noindent\usebox{\sample}\end{document}`);
    execFileSync('xelatex',['-no-shell-escape','-interaction=batchmode','-halt-on-error','reference.tex'],{cwd:work,stdio:'pipe',timeout:30000});
    const log=await readFile(path.join(work,'reference.log'),'utf8');
    const expected=log.match(/METRICS: ([^\n]+)/)![1].split(',').map(parseFloat);
    const got=cmBeaMath(tex,true);
    [got.width,got.height,got.depth].forEach((v,i)=>assert.ok(Math.abs(v*10-expected[i])<0.001));
    assert.ok(parseFloat(log.match(/FCORRECTION: ([^\n]+)/)![1])>0,'Oblique f needs its native italic correction before primes and opening delimiters');
    assert.ok(got.fonts.includes('CMSSI10'));
    assert.ok(got.fonts.includes('CMSS10'));
    assert.ok(got.fonts.every(font=>!font.startsWith('LMSans')&&!font.startsWith('CMR')));
  }finally{await rm(work,{recursive:true,force:true});}
});

test('SVG places primes and opening parentheses after the oblique f overhang',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-f-spacing-'));
  try{
    const f=cmBeaMath('f',false);
    for(const tex of ['f(x)',"f'(x)","f''(x)","f'''(x)"]){
      const math=cmBeaMath(tex,false);
      copyCMBeaMathAssets(work);
      const svg=await readFile(path.join(work,math.id+'.svg'),'utf8');
      const positions=[...svg.matchAll(/<use\b[^>]*\bx="([^"]+)"\s+y="([^"]+)"/g)].map(match=>Number(match[1]));
      assert.ok(positions.length>=2);
      // The previous TU font placed the prime/parenthesis directly at f's
      // advance, on top of its hook. Check the rendered placement, not just
      // the font's advertised italic-correction value.
      assert.ok(positions[1]-positions[0]>=f.width*10*72/72.27-0.05,`Missing italic correction in ${tex}`);
    }
  }finally{await rm(work,{recursive:true,force:true});}
});

test('CM bea keeps full short glyphs, exact scale and depth inside padded viewports',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-scale-'));
  try{
    const emToPdfPoints=10*72/72.27;
    const bleed=formulaSVGPaddingEm*emToPdfPoints;
    for(const tex of ['p','x','f','r','0','1','j',String.raw`\hat f`]){
      const one=cmBeaMath(tex,false),two=cmBeaMath(`${tex}+${tex}`,false);
      copyCMBeaMathAssets(work);
      const a=await readFile(path.join(work,one.id+'.svg'),'utf8'),b=await readFile(path.join(work,two.id+'.svg'),'utf8');
      assert.equal(a.match(/<path\s+d="([^"]+)"/)?.[1],b.match(/<path\s+d="([^"]+)"/)?.[1]);
      // Previously f lost its entire hook and 0 lost its curved overshoot:
      // Cairo added a page clip through the glyph. No glyph should need one.
      assert.doesNotMatch(a,/<clipPath\b/,`Clipped ink in ${tex}`);
      const bounds=a.match(/viewBox="([^"]+)"/)![1].split(/\s+/).map(Number);
      assert.ok(Math.abs(bounds[2]-(one.width+2*formulaSVGPaddingEm)*emToPdfPoints)<0.03);
      assert.ok(Math.abs(bounds[3]-(one.height+one.depth+2*formulaSVGPaddingEm)*emToPdfPoints)<0.03);
      const use=a.match(/<use\b[^>]*\bx="([^"]+)"\s+y="([^"]+)"/)!;
      // Accents reposition the first glyph within the box; the other cases
      // retain their original x origin and baseline plus only the PDF bleed.
      if(!tex.startsWith('\\')){
        assert.ok(Math.abs(Number(use[1])-bleed)<0.03);
        assert.ok(Math.abs(Number(use[2])-one.height*emToPdfPoints-bleed)<0.03);
      }
    }
  }finally{await rm(work,{recursive:true,force:true});}
});

test('batched equations retain independent fonts, exact bounds and baselines',async()=>{
  const formulas:[string,boolean][]=[
    ['p+17',false],
    [String.raw`\frac{1}{19}+x_{n_j}`,true],
    [String.raw`\begin{aligned}A&=B\\&=C\end{aligned}\qquad(17)`,true],
    [String.raw`x\quad\text{为奇数}`,false],
  ];
  precompileCMBeaMath(formulas);
  const work=await mkdtemp(path.join(tmpdir(),'bea-batch-'));
  try{
    for(const [tex,display] of formulas){
      const batched=cmBeaMath(tex,display);
      const single=cmBeaMath(tex+'{}',display);
      assert.deepEqual([batched.width,batched.height,batched.depth],[single.width,single.height,single.depth]);
      assert.deepEqual(batched.fonts.sort(),single.fonts.sort());
      copyCMBeaMathAssets(work);
      const a=await readFile(path.join(work,batched.id+'.svg'),'utf8');
      const b=await readFile(path.join(work,single.id+'.svg'),'utf8');
      assert.equal(a.match(/viewBox="[^"]+"/)?.[0],b.match(/viewBox="[^"]+"/)?.[0]);
      assert.deepEqual([...a.matchAll(/<path\s+d="([^"]+)"/g)].map(m=>m[1]),[...b.matchAll(/<path\s+d="([^"]+)"/g)].map(m=>m[1]));
      assert.deepEqual([...a.matchAll(/<use\b[^>]*\bx="([^"]+)"\s+y="([^"]+)"/g)].map(m=>m.slice(1)),[...b.matchAll(/<use\b[^>]*\bx="([^"]+)"\s+y="([^"]+)"/g)].map(m=>m.slice(1)));
    }
    assert.throws(()=>precompileCMBeaMath([[String.raw`\input{/etc/passwd}`,false]]),/只允许标准数学/);
  }finally{await rm(work,{recursive:true,force:true});}
});

test('CM bea remains the default except explicit per-article choices',async()=>{
  const entries=await loadEntries(new URL('../content',import.meta.url).pathname);
  const selected=entries.filter(e=>e.mathFont==='cm-bea');
  const amsPaths=['essays/elementary-diophantine-approximation.md','notes/conics-matrix-coordinate-transformations.md','notes/fourier-series.md'];
  assert.deepEqual(entries.filter(e=>e.mathFont==='cm-ams').map(e=>e.sourcePath).sort(),amsPaths);
  assert.equal(selected.length,entries.length-amsPaths.length);
  const entry=selected.find(e=>e.sourcePath==='problems/lou-analysis-b-40.md')!;assert.equal(entry.attachmentPath,'problems/lou-analysis-b-40-cm-bea.pdf');
  const html=renderToStaticMarkup(createElement(LouBatchArticle,{entry}));
  assert.equal((html.match(/class="latex-svg"/g)||[]).length,269);
  assert.equal((html.match(/class="katex-display"/g)||[]).length,45);
  assert.match(html,/data-math-font="cm-bea"/);
  for(let n=275;n<=281;n++)assert.match(html,new RegExp(`id="问题-b${n}"`));
  assert.doesNotMatch(html,/katex-error/);
});

test('Markdown without font metadata uses real CM bea glyphs and metrics',()=>{
  const tex=String.raw`x_{n_j}+\frac{1}{2}+\alpha`;
  const formula=cmBeaMath(tex,false);
  assert.ok(formula.fonts.some(font=>font.startsWith('CMSSI')));
  const html=renderToStaticMarkup(createElement(Markdown,{body:`文字 $${tex}$，正文。`}));
  assert.match(html,/data-math-font="cm-bea"/);
  assert.ok(html.includes(`/math/${formula.id}.svg`));
  assert.ok(html.includes(`--math-baseline:-${formula.depth}em`));
  assert.match(html,/class="katex-mathml"/);
  assert.match(html,/class="math-inline-group"/);
});
