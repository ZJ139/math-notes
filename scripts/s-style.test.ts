import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import Markdown from '../src/Markdown';

test('S boxes separate soft-line titles from statements and preserve math and anchors', () => {
  const body = '## 3.1.1 判据\n\n> **定理 3.1.1（判据）**\n> 正文 $x>0$。\n>\n> 另一段。\n\n> **例 3.1.1**\n> 例题。\n\n> **题意辨析：条件**\n> 条件。\n\n> 普通引文。';
  const plain = renderToStaticMarkup(createElement(Markdown, {body}));
  const styled = renderToStaticMarkup(createElement(Markdown, {body, pageStyle: 's'}));
  assert.match(styled, /class="s-box-title"><strong>定理 3\.1\.1（判据）<\/strong><\/div><div class="s-box-body">\s*<p>正文/);
  assert.match(styled, /s-box-example/);
  assert.match(styled, /s-box-caution/);
  assert.match(styled, /<blockquote>\s*<p>普通引文。<\/p>\s*<\/blockquote>/);
  assert.equal((styled.match(/另一段。/g) || []).length, 1);
  assert.deepEqual([...styled.matchAll(/<img[^>]+>/g)].map(m=>m[0]), [...plain.matchAll(/<img[^>]+>/g)].map(m=>m[0]));
  assert.deepEqual([...styled.matchAll(/<math[\s\S]*?<\/math>/g)].map(m=>m[0]), [...plain.matchAll(/<math[\s\S]*?<\/math>/g)].map(m=>m[0]));
  assert.deepEqual([...styled.matchAll(/ id="[^"]+"/g)].map(m=>m[0]), [...plain.matchAll(/ id="[^"]+"/g)].map(m=>m[0]));
  assert.doesNotMatch(plain, /class="s-box/);
});

test('S boxes also retain a separately paragraphed statement and leave unrecognized titles alone', () => {
  const body = '> **定义 1**\n>\n> 正文。\n\n> **引用者**\n> 原引文。';
  const html = renderToStaticMarkup(createElement(Markdown, {body, pageStyle: 's'}));
  assert.match(html, /s-box-body">\s*<p>正文。<\/p>/);
  assert.match(html, /<blockquote>\s*<p><strong>引用者<\/strong>\n原引文。<\/p>/);
  assert.doesNotMatch(html, /<p><\/p>/);
});
