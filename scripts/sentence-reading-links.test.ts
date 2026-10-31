import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {loadEntries} from '../src/content';
import {sentenceSource} from '../src/SentenceDirectory';
import {readingGroups} from '../src/ReadingDirectory';
import {entryUrl} from '../src/model';

const review=JSON.parse(await readFile(new URL('../docs/reviews/sentence-v1-reading-links.json',import.meta.url),'utf8'));
const source=JSON.parse(await readFile(new URL('./fixtures/sentence-v1-source.json',import.meta.url),'utf8'));
const all=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));

test('74 sentence links use the matching translation index and verified Text start, with paragraph and fallback navigation',()=>{
  assert.equal(review.entries.length,74);
  assert.equal(new Set(review.entries.map((row:any)=>row.path)).size,74);
  assert.deepEqual(review.indexes.map((index:any)=>index.year),Array.from({length:29},(_,n)=>1998+n));
  const groups=readingGroups(all);
  const hub=all.find(entry=>entry.sourcePath===source.hub)!;
  for(const row of review.entries){
    const sentence=all.find(entry=>entry.sourcePath===row.path)!;
    assert.deepEqual(sentenceSource(sentence),{year:row.year,text:row.text},row.code);
    const translation=groups.find(group=>group.year===row.year)!.resources.find(resource=>resource.kind==='阅读直译')!.entry;
    assert.equal(translation.sourcePath,row.translationIndex,row.code);
    assert.equal(row.indexHref,`${entryUrl(translation)}/#按文章阅读`);
    assert.equal(row.href,`/files/${translation.attachmentPath}#page=${row.textStartPage}`);
    assert.ok(translation.body.includes(`[Text ${row.text} · 第 ${row.textStartPage} 页](${row.href})`),row.code);
    assert.equal(row.target,'text-start');
    assert.equal(sentence.body.split('[查看同篇阅读直译]').length-1,1,row.code);
    assert.ok(sentence.body.includes(`[查看同篇阅读直译](${row.href})`),row.code);
    assert.ok(sentence.body.includes(`[文章目录与页码](${row.indexHref})`),row.code);
    assert.ok(sentence.body.includes(`PDF 第 ${row.textStartPage} 页（文章起始页）`),row.code);
    assert.ok(sentence.body.includes(`本句见直译资料第 ${row.translationParagraph} 段`),row.code);
    assert.ok(sentence.body.includes('阅读器若未自动跳页'),row.code);
    if(row.sourceParagraph!==row.translationParagraph){
      assert.ok(sentence.body.includes(`（原文 P${row.sourceParagraph}；两份资料分段不同）`),row.code);
    }
    assert.ok(hub.body.includes(`${row.code} · Text ${row.text} · P${row.sourceParagraph}`),row.code);
    assert.ok(sentence.body.indexOf('[查看同篇阅读直译]')<sentence.body.indexOf('## 句子拆解'),row.code);
  }
  for(const code of ['F01','L34'])assert.equal(review.entries.find((row:any)=>row.code===code).textStartPage,1);
  assert.deepEqual(source.entries.filter((row:any)=>row.previousParagraph!==undefined).map((row:any)=>[row.code,row.previousParagraph,row.paragraph]),[
    ['L25',3,2],['L27',5,4],['L33',1,6],['F21',4,7],['F22',4,3],['F24',4,3],['F29',6,2],['F30',4,3],
  ]);
});

test('PDF bytes, all 116 Text starts and all 74 paragraph matches still agree with the audit',()=>{
  const output=execFileSync('python3',[fileURLToPath(new URL('./review-sentence-reading.py',import.meta.url))],{encoding:'utf8',timeout:60_000});
  assert.match(output,/29 translation indexes \/ 116 Text starts \/ 74 quotations/);
});
