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
  assert.equal(problems.length,42);
  assert.equal(new Set(problems.map(p=>p.code)).size,42);
  assert.deepEqual(louChapters(items).map(c=>[c.number,c.problems.length]),[[1,21],[2,21]]);
  const topology=problems.filter(p=>p.section==='2.3');
  assert.deepEqual(topology.map(p=>p.original),[1,2,3,4,5,6]);
  assert.equal(new Set(topology.map(p=>p.entry.id)).size,2);
  const recurrences=problems.filter(p=>p.section==='2.4');
  assert.deepEqual(recurrences.map(p=>p.original),Array.from({length:11},(_,i)=>i+1));
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
