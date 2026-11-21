import test from 'node:test';
import assert from 'node:assert/strict';
import {plainSearchText,searchExcerpt,highlightSearchText} from '../public/search-results.js';

test('search excerpt preserves the matching sentence and twenty Unicode characters on each side',()=>{
  const before='前'.repeat(35)+'。';
  const sentence='这里是含有关键词的完整命中句。';
  const after='后'.repeat(35);
  assert.equal(searchExcerpt(before+sentence+after,['关键词']), '…'+before.slice(-20)+sentence+after.slice(0,20)+'…');
  assert.equal(searchExcerpt('🙂'.repeat(25)+'。'+sentence+'🙂'.repeat(25),['关键词']), '…'+'🙂'.repeat(19)+'。'+sentence+'🙂'.repeat(20)+'…');
});

test('search handles case, decimal numbers, Markdown and text without sentence punctuation',()=>{
  assert.equal(searchExcerpt('First sentence. The value is 3.14 today! Last sentence.',['VALUE']), 'First sentence. The value is 3.14 today! Last sentence.');
  assert.equal(plainSearchText('## 标题\n[原文](https://example.org) **重点** `code`'), '标题\n原文 重点 code');
  assert.equal(searchExcerpt('无标点关键词正文',['关键词']), '无标点关键词正文');
  assert.equal(searchExcerpt('',['关键词']), '');
  assert.equal(plainSearchText('some_function **bold** *italic* `code`'), 'some_function bold italic code');
  assert.equal(searchExcerpt('上句。\n\n命中句关键词。\n\n下句。',['关键词']), '上句。 命中句关键词。 下句。');
});

test('highlight treats regex characters and HTML as literal text and marks every case-insensitive hit',()=>{
  class Element {
    textContent=''; children:any[]=[];
    replaceChildren(){this.children=[];}
    append(value:any){this.children.push(value);}
  }
  const previous=(globalThis as any).document;
  (globalThis as any).document={createTextNode:(text:string)=>({textContent:text}),createElement:()=>new Element()};
  try {
    const output=new Element();
    highlightSearchText(output as any,'<img onerror="x"> A+B and a+b [x]',['a+b','[x]']);
    assert.deepEqual(output.children.filter(child=>child instanceof Element).map(child=>child.textContent),['A+B','a+b','[x]']);
    assert.equal(output.children.map(child=>child.textContent).join(''),'<img onerror="x"> A+B and a+b [x]');
  }finally{(globalThis as any).document=previous;}
});
