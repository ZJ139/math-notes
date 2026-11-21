import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {RealFunctionsV1Directory,realFunctionsV1Chapters,realFunctionsV1Url} from '../src/RealFunctionsV1Directory';
import {MathNavigation,StudyDirectory} from '../src/StudyDirectory';
import {Article} from '../src/components';

test('v1 keeps the 31-section framework, distinguishes pending sections, and preserves original course navigation',async()=>{
  const items=await loadEntries(new URL('../content/',import.meta.url).pathname);
  const entry=items.find(e=>e.sourcePath==='notes/real-functions-v1/ch01-s1.md')!;
  assert.ok(entry);
  assert.equal(entry.mathFont,'cm-bea');
  assert.equal(entry.attachmentPath,'notes/real-functions-v1/real-functions-v1-1-1.pdf');
  assert.deepEqual(realFunctionsV1Chapters.map(c=>c.sections.length),[5,5,3,5,4,5,4]);
  const html=renderToStaticMarkup(createElement(RealFunctionsV1Directory,{items}));
  assert.equal((html.match(/id="section-/g)||[]).length,31);
  assert.equal((html.match(/待编写/g)||[]).length,30);
  assert.ok(html.includes(`href="${entryUrl(entry)}/"`));
  assert.ok(html.includes('href="#section-1-2"'));
  assert.ok(html.includes('href="/math/real-functions/"'));
  for(const component of [createElement(MathNavigation,{}),createElement(StudyDirectory,{items})])
    assert.ok(renderToStaticMarkup(component).includes(`href="${realFunctionsV1Url}"`));
  const article=renderToStaticMarkup(createElement(Article,{entry,items}));
  assert.equal((article.match(/href="\/math\/real-functions-v1\/#chapter-1"/g)||[]).length,2);
  assert.match(article,/data-math-font="cm-bea"/);
  assert.doesNotMatch(article,/katex-error/);
  const ids=new Set([...article.matchAll(/ id="([^"]+)"/g)].map(m=>m[1]));
  for(const [,href]of article.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(decodeURIComponent(href)),`Missing local anchor: ${href}`);
});
