import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {ComplexFunctionsDirectory,complexChapters,complexFunctionsUrl} from '../src/ComplexFunctionsDirectory';
import {MathNavigation,StudyDirectory} from '../src/StudyDirectory';
import {Article} from '../src/components';

test('complex course keeps nine chapters and links only existing lectures and chapter exercises', async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const notes=items.filter(e=>e.sourcePath.startsWith('notes/complex-functions/'));
  const html=renderToStaticMarkup(createElement(ComplexFunctionsDirectory,{items}));
  assert.equal(complexChapters.length,9);
  assert.equal(complexChapters.reduce((n,c)=>n+c.sections.length,0),48);
  for(let n=1;n<=9;n++)assert.ok(html.includes('id="chapter-'+n+'"'));
  for(const note of notes)assert.ok(html.includes('href="'+entryUrl(note)+'/"'));
  assert.equal(notes.filter(e=>e.sourcePath.match(/ch01-s[1-7]\.md$/)).length,7);
  assert.equal(notes.filter(e=>e.sourcePath.match(/ch02-s[1-5]\.md$/)).length,5);
  assert.equal(notes.filter(e=>e.sourcePath.match(/ch03-s[1-7]\.md$/)).length,7);
  assert.equal(notes.filter(e=>e.sourcePath.match(/ch04-s[1-5]\.md$/)).length,5);
  const chapter4=notes.find(e=>e.sourcePath.endsWith('ch04-practice.md'))!;
  assert.deepEqual(chapter4.body.split(/^## 习题 /m).slice(1).map(section=>[...section.matchAll(/^\*\*\d+\./gm)].length),[14,12,15,18,32]);
  for(const note of notes.filter(e=>e.category==='complex-functions/chapter-4')) {
    assert.equal(note.attachmentPath,'notes/complex-functions/complex-functions-chapter-4.pdf');
    assert.ok(note.body.includes('/math/complex-functions/#chapter-4'));
  }
  const chapter3=notes.find(e=>e.sourcePath.endsWith('ch03-practice.md'))!;
  assert.deepEqual(chapter3.body.split(/^## 习题 /m).slice(1).map(section=>[...section.matchAll(/^\*\*\d+\./gm)].length),[13,6,5,9,8,4,4]);
  for(const note of notes.filter(e=>e.category==='complex-functions/chapter-3')) {
    assert.equal(note.attachmentPath,'notes/complex-functions/complex-functions-chapter-3.pdf');
    assert.ok(note.body.includes('/math/complex-functions/#chapter-3'));
  }
  const chapter2=notes.find(e=>e.sourcePath.endsWith('ch02-practice.md'))!;
  assert.deepEqual(chapter2.body.split(/^## 习题 /m).slice(1).map(section=>[...section.matchAll(/^\*\*\d+\./gm)].length),[4,18,4,27,21]);
  assert.ok(chapter2.body.includes('ch02-exercise-figures.png'));
  const practice=notes.find(e=>e.sourcePath.endsWith('ch01-practice.md'))!;
  assert.deepEqual(practice.body.split(/^## 习题 /m).slice(1).map(section=>[...section.matchAll(/^\*\*\d+\./gm)].length),[8,20,6,5,10,5,9]);
  for(const component of [createElement(MathNavigation,{}),createElement(StudyDirectory,{items})])
    assert.ok(renderToStaticMarkup(component).includes('href="'+complexFunctionsUrl+'"'));
  const article=renderToStaticMarkup(createElement(Article,{entry:practice,items}));
  assert.ok(article.includes('prose exercise-sheet'));
  assert.ok(article.includes('href="'+complexFunctionsUrl+'#chapter-1"'));
  assert.ok(article.includes('class="article-figure"'));
  assert.ok(!article.includes('katex-error'));
});
