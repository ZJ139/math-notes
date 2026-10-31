import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import Markdown from '../src/Markdown';
import {Article} from '../src/components';

const entries = (await loadEntries(fileURLToPath(new URL('../content/', import.meta.url))))
  .filter(entry => entry.category === 'reading-answers');

test('every reading answer places passage first and keeps each option with its translation and reasoning', () => {
  assert.ok(entries.length >= 20);
  for (const entry of entries) {
    const html = renderToStaticMarkup(createElement(Article, {entry}));
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${entry.title}: duplicate fragment`);
    const order = ['reading-passage', 'reading-questions', 'reading-summary']
      .map(id => html.indexOf(`id="${id}"`));
    assert.ok(order.every((index, i) => index >= 0 && (!i || index > order[i - 1])), entry.title);
    const prompts = html.slice(order[1], order[2]);
    assert.equal((prompts.match(/<h3[^>]*id="q\d+"/g) ?? []).length, 5, entry.title);
    for (const letter of ['A', 'B', 'C', 'D']) {
      assert.equal((prompts.match(new RegExp(`<strong>\\[${letter}\\]</strong>`, 'g')) ?? []).length, 5, entry.title);
    }
    const options = [...prompts.matchAll(/<li>\s*<p><strong>\[([A-D])\]<\/strong>([\s\S]*?)<\/li>/g)];
    assert.equal(options.length, 20, `${entry.title}: each option must be a single list item`);
    options.forEach((option, index) => {
      assert.equal(option[1], 'ABCD'[index % 4]);
      assert.match(option[2], /<p>直译：（[^<]+）<\/p>/);
      const reasoning = option[2].match(/<p><strong>(正确|错误)(?:｜[^<]+)?<\/strong>：([\s\S]+?)<\/p>/);
      assert.ok(reasoning && reasoning[2].replace(/<[^>]+>/g, '').trim(), `${entry.title}: missing option reasoning`);
      assert.ok(option[2].indexOf('直译：') < option[2].search(/<strong>(正确|错误)/));
    });
    assert.equal((prompts.match(/class="reading-options"/g) ?? []).length, 5);
    assert.ok(!html.includes('返回题目') && !html.includes('>查看解析</a>'));
    assert.ok(!/<h2[^>]*>Q\d/.test(html));
    for (const match of html.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(ids.includes(decodeURIComponent(match[1])), `${entry.title}: broken #${match[1]}`);
    }
  }
});

test('all questions link to their own original evidence and back, preserving old fragments', () => {
  let total = 0;
  let crossParagraph = false;
  for (const entry of entries) {
    const html = renderToStaticMarkup(createElement(Article, {entry}));
    const passage = html.slice(html.indexOf('id="reading-passage"'), html.indexOf('id="reading-questions"'));
    const questions = [...entry.body.matchAll(/^### 第\s*(\d+)\s*题/gm)].map(match => match[1]);
    assert.equal(questions.length, 5);
    questions.forEach((q, i) => {
      total++;
      assert.ok(passage.includes(`id="evidence-q${q}"`), `${entry.title} Q${q}: original anchor`);
      assert.match(passage, new RegExp(`<a[^>]*href="#q${q}"[^>]*id="evidence-q${q}"[^>]*>`));
      assert.match(html, new RegExp(`<a[^>]*href="#evidence-q${q}"[^>]*>${i + 1}°</a>`));
      assert.match(html, new RegExp(`<h3[^>]*id="q${q}"[^>]*>第 ${q} 题｜`));
      assert.match(html, new RegExp(`<section[^>]*id="question-q${q}"[^>]*>`));
      for (const match of html.matchAll(new RegExp(`<a[^>]*href="#(evidence-q${q}(?:-\\d+)?)"[^>]*>(P\\d+)</a>`, 'g'))) {
        assert.ok(passage.includes(`id="${match[1]}"`));
        if (match[1] !== `evidence-q${q}`) crossParagraph = true;
      }
    });
  }
  assert.ok(total >= 100);
  assert.ok(crossParagraph, 'separate paragraph links must reach later evidence, not always the first sentence');
});

test('reading layout is scoped and does not enable raw HTML or break ordinary Markdown', () => {
  const body = '## Q21\n\n[reference](#q21)\n\n<script>alert(1)</script>';
  const html = renderToStaticMarkup(createElement(Markdown, {body}));
  assert.match(html, /<h2 id="q21">Q21<\/h2>/);
  assert.ok(!html.includes('<script'));
  assert.ok(!html.includes('reading-section-nav'));
});

