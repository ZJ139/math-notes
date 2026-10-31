import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {writingDirectoryData,writingYear,WritingDirectory} from '../src/WritingDirectory';
import Markdown from '../src/Markdown';

const entries=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const comparison=entries.find(e=>e.sourcePath==='english/writing/writing-comparison-2010-2014.md')!;
const normalize=(s:string)=>s.replace(/\s+/g,' ').trim();

test('ten comparisons quote the actual model bodies, with 2–3 pairs per task and all five review dimensions',()=>{
  assert.ok(comparison);
  const groups=[...comparison.body.matchAll(/^## (201[0-4]) (小作文|大作文)：[^\n]+\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
  assert.equal(groups.length,10);
  assert.equal(new Set(groups.map(g=>g[1]+g[2])).size,10);
  let pairs=0;
  for(const [,year,kind,body]of groups){
    const old=entries.find(e=>e.sourcePath===`english/writing/article-v0-${kind==='小作文'?'short':'long'}-${year}.md`)!;
    const recent=entries.find(e=>e.sourcePath===`english/writing/writing-4000-${year}.md`)!;
    assert.ok(body.includes(entryUrl(old)+'/#范文'));
    assert.ok(body.includes(entryUrl(recent)+`/#${kind}`));
    const comparisons=body.split(/^### 对照 \d+：.+\n/gm).slice(1);
    assert.ok(comparisons.length>=2&&comparisons.length<=3,year+kind);
    pairs+=comparisons.length;
    for(const dimension of ['审题完整性','段落逻辑','词汇准确性','句式自然程度','可迁移性'])assert.ok(body.includes(`| ${dimension} |`));
    for(const part of comparisons){
      for(const [label,source]of [['旧版',old],['新版',recent]] as const){
        const quote=part.match(new RegExp(`\\*\\*${label}原句\\*\\*\\n\\n> ([^\\n]+)`))?.[1];
        assert.ok(quote,`${year} ${kind} ${label}`);
        const scope=label==='旧版'?source.body:source.body.split(`\n## ${kind}\n`)[1].split('\n## ')[0];
        const model=scope.match(/(?:^|\n)#{2,3} 范文\n([\s\S]*?)(?=\n#{2,3} |$)/)?.[1];
        assert.ok(model);
        const original=model.split('\n').filter(line=>line.startsWith('>')).map(line=>line.replace(/^> ?/,'')).join(' ');
        assert.ok(normalize(original).includes(normalize(quote)),`${year} ${kind} ${label}: ${quote}`);
      }
      assert.equal((part.match(/^直译：/gm)||[]).length,2);
      assert.match(part,/语法与选择：/);
      assert.match(part,/常用替换：/);
    }
  }
  assert.equal(pairs,23);
  assert.equal((comparison.body.match(/^### 练习 \d+：/gm)||[]).length,6);
  assert.equal((comparison.body.match(/^### 练习 \d+ 参考/gm)||[]).length,6);
});

test('comparison is a single training resource with working task anchors and source links',()=>{
  const data=writingDirectoryData(entries);
  assert.equal(writingYear(comparison),null);
  assert.equal(data.guides.filter(e=>e.id===comparison.id).length,1);
  assert.ok(!data.featuredEntries.includes(comparison));
  assert.equal(data.featuredEntries.length,7); // Seven paired pages: 14 models.
  assert.equal(data.groups.filter(g=>g.year<=2023).flatMap(g=>g.entries).length,28); // Preserve the existing archive.
  assert.equal(data.groups.filter(g=>g.year>=2024).flatMap(g=>g.entries).length,3); // Three paired pages: six new models.
  const html=renderToStaticMarkup(createElement(WritingDirectory,{items:entries,standalone:true}));
  assert.equal(html.split(`href="${entryUrl(comparison)}/"`).length-1,1);
  assert.ok(html.indexOf(`href="${entryUrl(comparison)}/"`)>html.indexOf('id="writing-resources-title"'));
  const article=renderToStaticMarkup(createElement(Markdown,{body:comparison.body}));
  const ids=[...article.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size);
  for(const [,anchor]of article.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(decodeURIComponent(anchor)),anchor);
  const examples=[...comparison.body.matchAll(/原文：\[旧版\]\(([^)]+)\) · \[新版\]\(([^)]+)\)/g)].flatMap(m=>[m[1],m[2]]);
  assert.equal(new Set(examples).size,20);
});
