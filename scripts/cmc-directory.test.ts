import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {Article,ProblemLibrary} from '../src/components';
import {CmcDirectory,cmcSections,cmcSourcePath} from '../src/CmcDirectory';
import {entryUrl} from '../src/model';

const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const entry=items.find(e=>e.sourcePath===cmcSourcePath)!;
const audit=JSON.parse(await readFile(new URL('../docs/reviews/cmc-paper-directory.json',import.meta.url),'utf8'));

test('CMC original PDF, all 60 titles, page ranges and Markdown links match the source',()=>{
  assert.match(execFileSync('python3',[fileURLToPath(new URL('./review-cmc-directory.py',import.meta.url))],{encoding:'utf8',timeout:30_000}),/Verified 175 pages \/ 60 paper titles/);
});

test('CMC directory preserves 17 editions, actual stage variants and no-JavaScript navigation',()=>{
  const {editions}=cmcSections(entry.body);
  assert.deepEqual(editions.map(e=>e.edition),Array.from({length:17},(_,i)=>i+1));
  for(const {edition,stages} of editions)for(const {stage,count} of stages){
    assert.equal(count,audit.entries.filter((e:any)=>e.edition===edition&&e.stage===stage).length);
  }
  const html=renderToStaticMarkup(createElement(Article,{entry}));
  const ids=[...html.matchAll(/\sid="([^"<>]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length);
  for(const match of html.matchAll(/href="#([^"<>]+)"/g))assert.ok(ids.includes(decodeURIComponent(match[1])),match[1]);
  assert.equal((html.match(/href="[^"<>]+#page=\d+"/g)||[]).length,60);
  assert.equal((html.match(/data-cmc-stage=/g)||[]).length,34);
  assert.doesNotMatch(html,/data-cmc-(?:edition|stage)="[^"]+"[^>]*hidden/);
  assert.match(html,/<details class="cmc-overview" open="">/);
  assert.match(html,/<form class="cmc-filters" hidden=""/);
  assert.match(html,/download="数学类CMC真题汇总.pdf"/);
  for(const row of audit.entries)assert.ok(html.includes(`#page=${row.pdf_start}"`));
  assert.equal(entry.attachmentPath,'problems/数学类CMC真题汇总.pdf');
  assert.ok(entry.body.includes('第 13 届初赛 (补赛) ·数学 A 类'));
  assert.ok(entry.body.includes('第 14 届初赛 (补赛二) ·数学 B 类'));
});

test('CMC collection leads directly to edition/stage anchors and retains search',()=>{
  const html=renderToStaticMarkup(createElement(ProblemLibrary,{items,collection:'cmc-mathematics'}));
  for(let n=1;n<=17;n++)for(const stage of ['初赛','决赛'])assert.ok(html.includes(`${entryUrl(entry)}/#第-${n}-届${stage}`));
  assert.match(html,/17 届 · 60 套试卷/);
  assert.match(html,/data-problem-directory=""/);
  assert.match(html,/data-problem-results="" hidden=""/);
  assert.match(html,/data-entry=""/);
});

test('an explicitly uncollected CMC stage stays visible without a fabricated PDF link',()=>{
  const body='目录\n\n## 第 1 届\n\n### 第 1 届初赛\n\n未收录。\n\n### 第 1 届决赛\n\n- [第 1 届决赛](/files/example.pdf#page=7)\n';
  const html=renderToStaticMarkup(createElement(CmcDirectory,{body}));
  assert.match(html,/data-cmc-stage="初赛" data-cmc-papers="0"/);
  assert.match(html,/未收录/);
  assert.equal((html.match(/#page=/g)||[]).length,1);
  assert.throws(()=>cmcSections(body.replace('### 第 1 届初赛','### 第 2 届初赛')),/不一致/);
});
