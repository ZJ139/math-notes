import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {Article,ProblemLibrary} from '../src/components';
import {isAlgebraIndex,algebraContext} from '../src/AlgebraDirectory';
import {parseAlgebraIndex,matchesAlgebraExercise,hasAlgebraLocator} from '../public/algebra-index.js';
import {entryUrl} from '../src/model';

const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const entries=items.filter(isAlgebraIndex);
const audit=JSON.parse(await readFile(new URL('../docs/reviews/algebra-exercise-directory.json',import.meta.url),'utf8'));
const exercises=(entry:typeof entries[number])=>parseAlgebraIndex(entry.body).chapters.flatMap(c=>c.groups.flatMap(g=>g.exercises));
const green=entries.find(e=>e.category==='green-algebra')!;
const qws=entries.find(e=>e.category==='qws-algebra')!;
const search=(entry:typeof entries[number],q:string)=>exercises(entry).filter(e=>matchesAlgebraExercise(e,q,algebraContext(entry)));

test('all algebra labels, stars, textbook ranges and PDF links reproduce the unchanged source PDFs',()=>{
  assert.match(execFileSync('python3',[fileURLToPath(new URL('./review-algebra-directory.py',import.meta.url))],{encoding:'utf8',timeout:30_000}),/118 PDF pages \/ 116 groups \/ 1286 main labels/);
  assert.equal(entries.length,2);
  for(const entry of entries){
    const source=audit.files.find((f:any)=>f.entry==='content/'+entry.sourcePath);
    const rows=exercises(entry);
    // Collection data-search is lowercased, including the Markdown PDF labels.
    assert.equal(exercises({...entry,body:entry.body.toLocaleLowerCase()}).length,rows.length);
    assert.equal(rows.length,source.question_count);
    assert.equal(new Set(rows.map(e=>e.key)).size,rows.length);
    assert.deepEqual(rows.map(e=>[e.group,e.number,e.page,e.note.includes('主编号星号')]),source.groups.flatMap((g:any)=>g.exercises.map((e:any)=>[g.label,e.number,e.pdf_page,e.star])));
    for(const row of rows)assert.equal(Number(row.url.split('#page=')[1]),row.page);
  }
});

test('exact group/number searches do not infer gaps or confuse subparts, neighboring groups or page numbers',()=>{
  assert.equal(hasAlgebraLocator('绿皮 提示'),false);
  assert.equal(hasAlgebraLocator('丘维声 7.4 9'),true);
  assert.deepEqual(search(green,'绿皮 习题1.5第4题').map(e=>[e.key,e.page,e.note]),[['习题 1.5 第 4 题',5,'主编号星号']]);
  assert.equal(search(green,'2.4 3').length,0);
  assert.equal(search(green,'习题 2.1').length,0);
  assert.equal(search(qws,'7.4 9').length,0);
  assert.equal(search(qws,'7.4 4').length,1);
  assert.deepEqual(search(qws,'丘维声 8.1 26').map(e=>e.page),[20]);
  assert.deepEqual(search(qws,'8.1 4 星号').map(e=>[e.number,e.note]),[[4,'子题 （2）、（3）带星号']]);
  assert.deepEqual(search(qws,'补充题八 6').map(e=>e.page),[25]);
  assert.deepEqual(search(green,'复习题一 34').map(e=>e.page),[10]);
  assert.equal(search(green,'第1章').length,73);
  assert.equal(search(qws,'第八章').length,73);
  assert.equal(search(qws,'７.１１ ２').length,1); // Full-width input; label touches Chinese in PDF extraction.
  for(const q of ['7.11 2','9.8 1','10.3 9'])assert.equal(search(qws,q).length,1);
  assert.ok(search(qws,'正交投影').length>0);
  assert.equal(search(qws,'不存在的题组 999').length,0);
});

test('all chapter/group anchors and PDFs exist without JavaScript; collections expose chapters and retain downloads',()=>{
  for(const entry of entries){
    const html=renderToStaticMarkup(createElement(Article,{entry}));
    const ids=[...html.matchAll(/\sid="([^"<>]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length);
    for(const match of html.matchAll(/href="#([^"<>]+)"/g))assert.ok(ids.includes(decodeURIComponent(match[1])),match[1]);
    assert.equal((html.match(/href="[^"<>]+#page=\d+"/g)||[]).length,exercises(entry).length);
    assert.match(html,/<form class="algebra-filters" hidden=""/);
    assert.doesNotMatch(html,/data-algebra-(?:chapter|group)="[^"]+"[^>]*hidden/);
    assert.ok(html.includes(`download="${entry.file_name}"`));
    assert.ok(html.includes('原教材页码'));
    const collection=renderToStaticMarkup(createElement(ProblemLibrary,{items,collection:entry.category}));
    for(const c of parseAlgebraIndex(entry.body).chapters)assert.ok(collection.includes(`${entryUrl(entry)}/#${c.anchor}`));
    assert.match(collection,/data-algebra-context=/);
    assert.match(collection,/data-algebra-matches=""/);
  }
});
