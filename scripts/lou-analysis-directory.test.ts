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
  assert.equal(problems.length,168);
  assert.equal(new Set(problems.map(p=>p.code)).size,168);
  assert.equal(problems.filter(p=>!p.skipped).length,166);
  assert.deepEqual(problems.filter(p=>p.skipped).map(p=>[p.code,p.section,p.original]),[['B116','5.5',1],['B148','6.4',1]]);
  assert.deepEqual(louChapters(items).map(c=>[c.number,c.problems.length]),[[1,21],[2,44],[3,23],[4,19],[5,10],[6,49],[7,2]]);
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
  assert.deepEqual(problems.filter(p=>p.number>=85&&p.number<=91).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B85','3.3',9,false],['B86','3.3',10,false],['B87','3.3',11,false],['B88','3.4',1,false],
    ['B89','4.1',1,false],['B90','4.1',2,false],['B91','4.1',3,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=92&&p.number<=98).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B92','4.1',4,false],['B93','4.1',5,false],['B94','4.1',6,false],['B95','4.1',7,false],
    ['B96','4.2',1,false],['B97','4.2',2,false],['B98','4.2',3,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=99&&p.number<=105).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B99','4.3',1,false],['B100','4.3',2,false],['B101','4.4',1,false],['B102','4.4',2,false],
    ['B103','4.4',3,false],['B104','4.4',4,false],['B105','4.4',5,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=106&&p.number<=112).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B106','4.4',6,false],['B107','4.4',7,false],['B108','5.1',1,false],['B109','5.1',2,false],
    ['B110','5.2',1,false],['B111','5.3',1,false],['B112','5.3',2,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=113&&p.number<=119).map(p=>[p.code,p.section,p.original,p.starred]),[
    ['B113','5.4',1,false],['B114','5.4',2,false],['B115','5.4',3,false],['B116','5.5',1,false],
    ['B117','5.5',2,false],['B118','6.1',1,false],['B119','6.1',2,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=120&&p.number<=126).map(p=>[p.code,p.section,p.original,p.starred]),[
    ...Array.from({length:5},(_,i)=>[`B${120+i}`,'6.1',i+3,false]),
    ['B125','6.2',1,false],['B126','6.2',2,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=127&&p.number<=133).map(p=>[p.code,p.section,p.original,p.starred]),[
    ...Array.from({length:4},(_,i)=>[`B${127+i}`,'6.2',i+3,false]),
    ...Array.from({length:3},(_,i)=>[`B${131+i}`,'6.3',i+1,false]),
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=134&&p.number<=140).map(p=>[p.code,p.section,p.original,p.starred]),
    Array.from({length:7},(_,i)=>[`B${134+i}`,'6.3',i+4,false]));
  assert.deepEqual(problems.filter(p=>p.number>=141&&p.number<=147).map(p=>[p.code,p.section,p.original,p.starred]),
    Array.from({length:7},(_,i)=>[`B${141+i}`,'6.3',i+11,false]));
  assert.deepEqual(problems.filter(p=>p.number>=148&&p.number<=154).map(p=>[p.code,p.section,p.original,p.starred]),[
    ...Array.from({length:6},(_,i)=>[`B${148+i}`,'6.4',i+1,false]),['B154','6.5',1,false],
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=155&&p.number<=161).map(p=>[p.code,p.section,p.original,p.starred]),[
    ...Array.from({length:4},(_,i)=>[`B${155+i}`,'6.5',i+2,false]),
    ...Array.from({length:3},(_,i)=>[`B${159+i}`,'6.6',i+1,false]),
  ]);
  assert.deepEqual(problems.filter(p=>p.number>=162&&p.number<=168).map(p=>[p.code,p.section,p.original,p.starred]),[
    ...Array.from({length:5},(_,i)=>[`B${162+i}`,'6.6',i+4,false]),
    ['B167','7.1',1,false],['B168','7.2',1,false],
  ]);
  for(const p of problems)assert.ok(p.entry.body.includes(`## 问题 ${p.code}\n`));
  assert.throws(()=>louProblems([...items,problems[0].entry]),/题号重复/);
});
test('a temporarily skipped Lou problem keeps its original position without inflating solved totals',async()=>{
  const items=await entries;
  const directory=renderToStaticMarkup(createElement(LouAnalysisDirectory,{items}));
  assert.match(directory,/166 道已作答 · 2 道暂跳过/);
  assert.doesNotMatch(directory,/168 道已作答/);
  const chapter=renderToStaticMarkup(createElement(LouChapterPage,{items,chapter:5}));
  assert.match(chapter,/9 道已作答 · 1 道暂跳过/);
  assert.match(chapter,/1 道已作答 · 1 道暂跳过/);
  assert.match(chapter,/原书第 1 题 · 暂跳过/);
  assert.ok(chapter.indexOf('B115')<chapter.indexOf('B116')&&chapter.indexOf('B116')<chapter.indexOf('B117'));
  assert.ok(chapter.includes('/problems/39d0a20cbb571861ad253766/#问题-b116'));
  const sixth=renderToStaticMarkup(createElement(LouChapterPage,{items,chapter:6}));
  assert.match(sixth,/48 道已作答 · 1 道暂跳过/);
  assert.match(sixth,/原书第 1 题 · 暂跳过/);
  assert.doesNotMatch(sixth,/原书第 2 题 · 暂跳过/);
  assert.ok(sixth.indexOf('B147')<sixth.indexOf('B148')&&sixth.indexOf('B148')<sixth.indexOf('B149'));
  assert.ok(sixth.includes('/problems/cc82a0d37091875a19e034ec/#问题-b148'));
});
test('Lou chapter pages provide section anchors and direct links to existing proofs',async()=>{
  const items=await entries;
  const directory=renderToStaticMarkup(createElement(LouAnalysisDirectory,{items}));
  assert.ok(directory.includes(louChapterUrl(1))&&directory.includes(louChapterUrl(2))&&directory.includes(louChapterUrl(3))&&directory.includes(louChapterUrl(4))&&directory.includes(louChapterUrl(5))&&directory.includes(louChapterUrl(6))&&directory.includes(louChapterUrl(7)));
  assert.match(directory,/<details class="lou-batch-archive"><summary>按原发布批次查阅/);
  for(const c of louChapters(items)){
    const html=renderToStaticMarkup(createElement(LouChapterPage,{items,chapter:c.number}));
    assert.equal((html.match(/class="lou-problem-code"/g)||[]).length,c.problems.length);
    for(const p of c.problems){assert.ok(html.includes(`href="${p.url}"`));assert.ok(html.includes(`id="section-${p.section.replace('.', '-')}-b"`));}
    if(c.number===3){assert.match(html,/原书第 3\* 题/);assert.match(html,/原书第 3 题/);assert.match(html,/原书第 2\* 题/);assert.ok(html.indexOf('B72')<html.indexOf('B73'));assert.match(html,/原书第 2 题/);assert.ok(html.indexOf('B77')<html.indexOf('B78'));assert.match(html,/本章当前收录至习题 3\.4\.B 第 1 题/);}
    if(c.number===4)assert.match(html,/本章当前收录至习题 4\.4\.B 第 7 题/);
    if(c.number===5)assert.match(html,/本章当前收录至习题 5\.5\.B 第 2 题/);
    if(c.number===6)assert.match(html,/本章当前收录至习题 6\.6\.B 第 8 题/);
    if(c.number===7){assert.match(html,/本章当前收录至习题 7\.2\.B 第 1 题/);assert.match(html,/2 道已作答/);}
    assert.match(html,/aria-current="page"/);
  }
});
