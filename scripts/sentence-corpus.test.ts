import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {sentenceGroups,SentenceDirectory,SentenceYearPage,sentenceStructureTerms} from '../src/SentenceDirectory';
import Markdown from '../src/Markdown';

const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const review=JSON.parse(await readFile(new URL('../docs/reviews/reading-sentences-2008-2026.json',import.meta.url),'utf8'));

test('every requested article has independently sourced lessons, preserved segmentation and two distinct exercises',()=>{
  const output=execFileSync('python3',[fileURLToPath(new URL('./review-sentence-corpus.py',import.meta.url))],{encoding:'utf8',timeout:60_000});
  assert.ok(output.includes(`${review.sentenceCount} original quotations`));
  assert.equal(review.exerciseCount,review.sentenceCount*2);
  for(let year=2008;year<=2026;year++)for(let text=1;text<=4;text++){
    const article=review.articles.find((row:any)=>row.year===year&&row.text===text);
    assert.ok(article?.sentenceCount>=3,`${year} Text ${text}`);
  }
});

test('updated sentence pages expose full grammar tables, two answered exercises and final vocabulary without duplicate heading ids',()=>{
  for(const row of review.entries){
    const entry=items.find(item=>item.sourcePath===row.path)!;
    assert.ok(entry,row.path);
    const html=renderToStaticMarkup(createElement(Markdown,{body:entry.body}));
    const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
    assert.equal(ids.length,new Set(ids).size,entry.title);
    for(const heading of ['原句','句子拆解','断句','主干读法','逐项分析','理解要点','句子直译','原创拓展','迁移练习-1','迁移练习-2','重要单词']){
      assert.ok(ids.includes(heading),`${entry.title}: ${heading}`);
    }
    assert.ok(html.indexOf('id="重要单词"')>html.indexOf('id="迁移练习-2"'),entry.title);
    assert.ok(html.includes('表格，可横向滚动'),entry.title);
  }
});

test('directory separates full 2008–2026 coverage from older lessons and provides syntax and source-context navigation',()=>{
  const html=renderToStaticMarkup(createElement(SentenceDirectory,{items}));
  assert.ok(html.includes('2008—2026 年 · 阅读精选'));
  assert.ok(html.includes('76 篇阅读'));
  assert.ok(html.includes('早年句库 · 同步精讲'));
  for(const query of ['定语从句','非谓语','倒装','否定','指代']){
    assert.ok(html.includes(`q=${encodeURIComponent('语法：'+query)}`));
  }
  for(const group of sentenceGroups(items))for(const text of group.texts.filter(text=>text.entries.length)){
    const page=renderToStaticMarkup(createElement(SentenceYearPage,{items,year:group.year,text:text.text}));
    assert.ok(page.includes(`/files/english/exams/${group.year}英一.pdf#page=${text.text+1}`));
    assert.ok(page.includes(`/english/translation/years/${group.year}/`));
  }
});

// Common task wording must not misclassify a sentence as nonfinite syntax.
test('grammar navigation indexes lesson focus, not incidental words in exercise prompts',()=>{
 const sample=items.find(e=>e.sourcePath.includes('sentence-v1-f13-'))!;
 const plain={...sample,title:'指代辨析',tags:'["2009年","Text 1","指代"]',body:'请指出主干、从句或非谓语。'};
 assert.equal(sentenceStructureTerms(plain),'语法：指代');
 assert.ok(sentenceStructureTerms({...plain,title:'分词后置定语'}).includes('语法：非谓语'));
});
