import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {cmBeaMath,copyCMBeaMathAssets} from '../src/cmBeaMath';
import {latexMath} from '../src/latexMath';
import {loadEntries} from '../src/content';
import {LouBatchArticle} from '../src/LouAnalysisDirectory';

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

test('only B275–B281 opts into CM bea and retains every equation and PDF',async()=>{
  const entries=await loadEntries(new URL('../content',import.meta.url).pathname);
  const selected=entries.filter(e=>e.mathFont==='cm-bea');
  assert.deepEqual(selected.map(e=>e.sourcePath),['problems/lou-analysis-b-40.md']);
  const entry=selected[0];assert.equal(entry.attachmentPath,'problems/lou-analysis-b-40-cm-bea.pdf');
  const html=renderToStaticMarkup(createElement(LouBatchArticle,{entry}));
  assert.equal((html.match(/class="latex-svg"/g)||[]).length,269);
  assert.equal((html.match(/class="katex-display"/g)||[]).length,45);
  assert.match(html,/data-math-font="cm-bea"/);
  for(let n=275;n<=281;n++)assert.match(html,new RegExp(`id="问题-b${n}"`));
  assert.doesNotMatch(html,/katex-error/);
});
