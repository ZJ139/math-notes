import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {cmBeaMath,copyCMBeaMathAssets,precompileCMBeaMath} from '../src/cmBeaMath';
import {latexMath} from '../src/latexMath';
import {loadEntries} from '../src/content';
import {LouBatchArticle} from '../src/LouAnalysisDirectory';
import Markdown from '../src/Markdown';

test('CM bea matches actual Beamer math metrics and embedded fonts',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-reference-'));
  const tex=String.raw`f(x)=x^2+\sin x+\alpha+\int_0^1 t\,dt`;
  try{
    await writeFile(path.join(work,'reference.tex'),String.raw`\documentclass[10pt]{beamer}
\usepackage{amsmath,amssymb}\usepackage{fontspec}
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
    assert.ok(got.fonts.some(f=>f.startsWith('LMSans')));
    assert.ok(got.fonts.includes('CMEX10'));
    assert.notEqual(got.id,latexMath(tex,true).id,'Font variants must not share cache entries');
  }finally{await rm(work,{recursive:true,force:true});}
});

test('CM bea keeps exact glyph scale and depth for short variables',async()=>{
  const work=await mkdtemp(path.join(tmpdir(),'bea-scale-'));
  try{
    for(const tex of ['p','x','f','1']){
      const one=cmBeaMath(tex,false),two=cmBeaMath(`${tex}+${tex}`,false);
      copyCMBeaMathAssets(work);
      const a=await readFile(path.join(work,one.id+'.svg'),'utf8'),b=await readFile(path.join(work,two.id+'.svg'),'utf8');
      assert.equal(a.match(/<path\s+d="([^"]+)"/)?.[1],b.match(/<path\s+d="([^"]+)"/)?.[1]);
      const use=a.match(/<use\b[^>]*\bx="([^"]+)"\s+y="([^"]+)"/)!;
      assert.ok(Math.abs(Number(use[1]))<0.03);
      assert.ok(Math.abs(Number(use[2])-one.height*10*72/72.27)<0.03);
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

test('CM bea is the default for every course, article and problem',async()=>{
  const entries=await loadEntries(new URL('../content',import.meta.url).pathname);
  const selected=entries.filter(e=>e.mathFont==='cm-bea');
  assert.equal(selected.length,entries.length);
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
  assert.ok(formula.fonts.some(font=>font.startsWith('LMSans')));
  const html=renderToStaticMarkup(createElement(Markdown,{body:`文字 $${tex}$，正文。`}));
  assert.match(html,/data-math-font="cm-bea"/);
  assert.ok(html.includes(`/math/${formula.id}.svg`));
  assert.ok(html.includes(`--math-baseline:-${formula.depth}em`));
  assert.match(html,/class="katex-mathml"/);
  assert.match(html,/class="math-inline-group"/);
});
