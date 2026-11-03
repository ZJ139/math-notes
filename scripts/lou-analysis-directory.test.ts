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
  assert.equal(problems.length,91);
  assert.equal(new Set(problems.map(p=>p.code)).size,91);
  assert.deepEqual(louChapters(items).map(c=>[c.number,c.problems.length]),[[1,21],[2,44],[3,23],[4,3]]);
  const topology=problems.filter(p=>p.section==='2.3');
  assert.deepEqual(topology.map(p=>p.original),[1,2,3,4,5,6]);
  assert.equal(new Set(topology.map(p=>p.entry.id)).size,2);
  const recurrences=problems.filter(p=>p.section==='2.4');
  assert.deepEqual(recurrences.map(p=>p.original),Array.from({length:20},(_,i)=>i+1));
  assert.deepEqual(problems.filter(p=>p.number>=43&&p.number<=49).map(p=>[p.code,p.section,p.original]),Array.from({length:7},(_,i)=>[`B${43+i}`,'2.4',12+i]));
  assert.deepEqual(problems.filter(p=>p.number>=50&&p.number<=56).map(p=>[p.code,p.section,p.original]),[['B50','2.4',19],['B51','2.4',20],...Array.from({length:5},(_,i)=>[`B${52+i}`,'2.5',i+1])]);
  assert.deepEqual(problems.filter(p=>p.number>=57&&p.number<=63).map(p=>[p.code,p.section,p.original]),[...Array.from({length:3},(_,i)=>[`B${57+i}`,'2.6',i+1]),...Array.from({length:4},(_,i)=>[`B${60+i}`,'2.7',i+1])]);
  assert.deepEqual(problems.filter(p=>p.number>=64&&p.number<=70).map(p=>[p.code,p.section,p.original]),[['B64','2.7',5],['B65','2.7',6],...Array.from({length:4},(_,i)=>[`B${66+i}`,'3.1',i+1]),['B70','3.2',1]]);
  assert.deepEqual(problems.filter(p=>p.number>=71&&p.number<=77).map(p=>[p.code,p.section,p.original,p.starred]),[['B71','3.2',2,false],['B72','3.2',3,true],['B73','3.2',3,false],['B74','3.2',4,false],['B75','3.2',5,false],['B76','3.3',1,false],['B77','3.3',2,true]]);
  assert.deepEqual(problems.filter(p=>p.number>=78&&p.number<=84).map(p=>[p.code,p.section,p.original,p.starred]),Array.from({length:7},(_,i)=>[`B${78+i}`,'3.3',i+2,false]));
  assert.deepEqual(problems.filter(p=>p.section==='3.3'&&p.original===2).map(p=>[p.code,p.starred]),[['B77',true],['B78',false]]);
  assert.deepEqual(problems.filter(p=>p.number>=85).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B85','3.3',9,false],['B86','3.3',10,false],['B87','3.3',11,false],['B88','3.4',1,false],
    ['B89','4.1',1,false],['B90','4.1',2,false],['B91','4.1',3,false],
  ]);
  for(const p of problems)assert.ok(p.entry.body.includes(`## 问题 ${p.code}\n`));
  assert.throws(()=>louProblems([...items,problems[0].entry]),/题号重复/);
});
test('Lou chapter pages provide section anchors and direct links to existing proofs',async()=>{
  const items=await entries;
  const directory=renderToStaticMarkup(createElement(LouAnalysisDirectory,{items}));
  assert.ok(directory.includes(louChapterUrl(1))&&directory.includes(louChapterUrl(2))&&directory.includes(louChapterUrl(3))&&directory.includes(louChapterUrl(4)));
  assert.match(directory,/<details class="lou-batch-archive"><summary>按原发布批次查阅/);
  for(const c of louChapters(items)){
    const html=renderToStaticMarkup(createElement(LouChapterPage,{items,chapter:c.number}));
    assert.equal((html.match(/class="lou-problem-code"/g)||[]).length,c.problems.length);
    for(const p of c.problems){assert.ok(html.includes(`href="${p.url}"`));assert.ok(html.includes(`id="section-${p.section.replace('.', '-')}-b"`));}
    if(c.number===3){assert.match(html,/原书第 3\* 题/);assert.match(html,/原书第 3 题/);assert.match(html,/原书第 2\* 题/);assert.ok(html.indexOf('B72')<html.indexOf('B73'));assert.match(html,/原书第 2 题/);assert.ok(html.indexOf('B77')<html.indexOf('B78'));assert.match(html,/本章当前收录至习题 3\.4\.B 第 1 题/);}
    if(c.number===4)assert.match(html,/本章当前收录至习题 4\.1\.B 第 3 题/);
    assert.match(html,/aria-current="page"/);
  }
});
