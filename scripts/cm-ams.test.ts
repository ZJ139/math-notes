import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {cmAmsMath} from '../src/cmAmsMath';
import {cmBeaMath} from '../src/cmBeaMath';

test('CM ams matches article plus AMS math and retains a distinct font cache',()=>{
 const dir=mkdtempSync(path.join(tmpdir(),'cm-ams-'));
 const tex=String.raw`f'(x)+\frac{a^2}{b}+\alpha+\int_0^1 t\,dt+\mathbb R`;
 try {
  writeFileSync(path.join(dir,'reference.tex'),String.raw`\documentclass[10pt]{article}
\usepackage{amsmath,amssymb}
\newsavebox{\sample}\begin{document}
\sbox{\sample}{$\displaystyle ${tex}$}
\typeout{METRICS: \the\wd\sample,\the\ht\sample,\the\dp\sample}
\usebox{\sample}\end{document}`);
  execFileSync('xelatex',['-no-shell-escape','-interaction=batchmode','-halt-on-error','reference.tex'],{cwd:dir,stdio:'pipe',timeout:30000});
  const expected=readFileSync(path.join(dir,'reference.log'),'utf8').match(/METRICS: ([^\n]+)/)![1].split(',').map(parseFloat);
  const got=cmAmsMath(tex,true);
  [got.width,got.height,got.depth].forEach((v,i)=>assert.ok(Math.abs(v*10-expected[i])<.001));
  assert.ok(got.fonts.includes('CMMI10'));
  assert.ok(got.fonts.some(f=>f.startsWith('CMR')));
  assert.ok(got.fonts.every(f=>!f.startsWith('CMSS')));
  assert.notEqual(got.id,cmBeaMath(tex,true).id);
 } finally {rmSync(dir,{recursive:true,force:true});}
});


test('CM ams keeps Chinese labels and fullwidth punctuation in Fandol',()=>{
 const result=cmAmsMath(String.raw`\text{准线：} x=1`,true);
 assert.ok(result.fonts.some(f=>f.startsWith('FandolSong')));
});
