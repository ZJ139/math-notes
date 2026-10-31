import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {WritingPracticeIndex,WritingPracticePage,practiceExams,practiceYearUrl} from '../src/WritingPractice';
import {Home,Collection,Layout} from '../src/components';
import {wordCount,validateImage,validateBackup,maxImageBytes} from '../public/writing-practice.js';

test('twenty real exams retain original PDF provenance, directions, figures and four independent answers',async()=>{
  assert.deepEqual(practiceExams.map(e=>e.year),Array.from({length:20},(_,i)=>2007+i));
  const index=renderToStaticMarkup(createElement(WritingPracticeIndex));
  for(const exam of practiceExams){
    assert.ok(index.includes(`href="${practiceYearUrl(exam.year)}"`));
    const pdf=await readFile(`content/${exam.sourcePdf}`);
    assert.equal(createHash('sha256').update(pdf).digest('hex'),exam.sourceSha256);
    assert.equal(exam.sourcePage,8);
    assert.match(exam.shortText,/51\. Directions:/);
    assert.match(exam.longText,/52\. Directions:/);
    for(const file of [exam.shortPromptImage,exam.longPromptImage,exam.figureImage])assert.ok((await stat(`public/writing-prompts/${file}`)).size>1000);
    const html=renderToStaticMarkup(createElement(WritingPracticePage,{year:exam.year}));
    assert.equal((html.match(/<textarea /g)||[]).length,4);
    for(const key of ['a-original','a-revision','b-original','b-revision'])assert.ok(html.includes(`data-answer="${key}"`));
    assert.equal((html.match(/accept="image\/jpeg,image\/png,image\/webp,image\/gif"/g)||[]).length,4);
    assert.ok(html.includes('当前浏览器'));
    const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(ids.length,new Set(ids).size);
  }
});
test('home and English navigation reach practice without replacing existing study categories',()=>{
  for(const html of [renderToStaticMarkup(createElement(Home,{items:[]})),renderToStaticMarkup(createElement(Collection,{items:[],section:'english'}))])assert.match(html,/href="\/english\/writing-practice\/"/);
  const html=renderToStaticMarkup(createElement(Layout,{children:null,title:'练习',path:practiceYearUrl(2026)}));
  assert.match(html,/type="module" src="\/writing-practice.js"/);
  assert.match(html,/href="\/writing-practice.css"/);
});
test('backup rejects wrong year, duplicate slots, invalid images and oversized text before modifying storage',()=>{
  const backup={format:'math-notes-writing-practice',version:1,year:2026,answers:['a-original','a-revision','b-original','b-revision'].map(key=>({key,text:'Dear Paul,\nThank you.',images:[]}))};
  assert.equal(validateBackup(backup,2026),backup);
  assert.throws(()=>validateBackup(backup,2025));
  assert.throws(()=>validateBackup({...backup,answers:[backup.answers[0],...backup.answers.slice(0,3)]},2026));
  assert.throws(()=>validateBackup({...backup,version:2},2026));
  assert.throws(()=>validateBackup({...backup,answers:backup.answers.map(a=>({...a,text:'a'.repeat(30001)}))},2026));
  for(const data of ['data:image/svg+xml;base64,PHN2Zz4=','https://example.com/image.png','data:image/png;base64,<script>'])assert.throws(()=>validateBackup({...backup,answers:backup.answers.map(a=>({...a,images:[{name:'x',data}]}))},2026));
  assert.throws(()=>validateImage({type:'image/png',size:maxImageBytes+1}));
  assert.throws(()=>validateImage({type:'text/plain',size:100}));
  assert.doesNotThrow(()=>validateImage({type:'image/jpeg',size:100}));
  assert.equal(wordCount("Dear Paul, it's a well-known fact: 46.3%."),7);
});
