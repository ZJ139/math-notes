import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {fileURLToPath} from 'node:url';
import {loadEntries} from '../src/content';
import {louProblems,louChapters,louChapterUrl,LouChapterPage,LouAnalysisDirectory} from '../src/LouAnalysisDirectory';
const entries=loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));

test('Lou chapter directory includes each solution once and merges sections across batches',async()=>{
  const items=await entries,problems=louProblems(items);
  assert.equal(problems.length,63);
  assert.equal(new Set(problems.map(p=>p.code)).size,63);
  assert.deepEqual(louChapters(items).map(c=>[c.number,c.problems.length]),[[1,21],[2,42]]);
  const topology=problems.filter(p=>p.section==='2.3');
  assert.deepEqual(topology.map(p=>p.original),[1,2,3,4,5,6]);
  assert.equal(new Set(topology.map(p=>p.entry.id)).size,2);
  const recurrences=problems.filter(p=>p.section==='2.4');
  assert.deepEqual(recurrences.map(p=>p.original),Array.from({length:20},(_,i)=>i+1));
  assert.deepEqual(problems.filter(p=>p.number>=43&&p.number<=49).map(p=>[p.code,p.section,p.original]),Array.from({length:7},(_,i)=>[`B${43+i}`,'2.4',12+i]));
  assert.deepEqual(problems.filter(p=>p.number>=50&&p.number<=56).map(p=>[p.code,p.section,p.original]),[['B50','2.4',19],['B51','2.4',20],...Array.from({length:5},(_,i)=>[`B${52+i}`,'2.5',i+1])]);
  assert.deepEqual(problems.filter(p=>p.number>=57).map(p=>[p.code,p.section,p.original]),[...Array.from({length:3},(_,i)=>[`B${57+i}`,'2.6',i+1]),...Array.from({length:4},(_,i)=>[`B${60+i}`,'2.7',i+1])]);
  for(const p of problems)assert.ok(p.entry.body.includes(`## 问题 ${p.code}\n`));
  assert.throws(()=>louProblems([...items,problems[0].entry]),/题号重复/);
});
test('Lou chapter pages provide section anchors and direct links to existing proofs',async()=>{
  const items=await entries;
  const directory=renderToStaticMarkup(createElement(LouAnalysisDirectory,{items}));
  assert.ok(directory.includes(louChapterUrl(1))&&directory.includes(louChapterUrl(2)));
  assert.match(directory,/<details class="lou-batch-archive"><summary>按原发布批次查阅/);
  for(const c of louChapters(items)){
    const html=renderToStaticMarkup(createElement(LouChapterPage,{items,chapter:c.number}));
    assert.equal((html.match(/class="lou-problem-code"/g)||[]).length,c.problems.length);
    for(const p of c.problems){assert.ok(html.includes(`href="${p.url}"`));assert.ok(html.includes(`id="section-${p.section.replace('.', '-')}-b"`));}
    assert.match(html,/aria-current="page"/);
  }
});
