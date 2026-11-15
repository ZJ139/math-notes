import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ReadingPracticePage,readingExercises,exerciseUrl} from '../src/ReadingPractice';

test('the first training set preserves all twelve questions, source evidence and option order', async () => {
  const selected = [[2023,3,32,33],[2017,4,37,38],[2019,1,23,24],[2024,3,33,34],[2022,4,39,40],[2026,4,38,39]];
  assert.deepEqual(readingExercises.map(e => [e.year,e.text,...e.questions.map(q => q.number)]),selected);
  for (const exercise of readingExercises) {
    const source = await readFile(new URL(`../content/english/reading-answers/${exercise.year}-reading-text-${exercise.text}.md`,import.meta.url),'utf8');
    const plain = source.replace(/\[([^\]]+)\]\(#[^)]*\)/g,'$1').replace(/\s*\*\*\d+°\*\*/g,'');
    for (const p of exercise.paragraphs) assert.ok(plain.includes(p.parts.map(part => part.text).join('')));
    for (const q of exercise.questions) {
      const block = source.split(`### 第 ${q.number} 题`)[1].split('### 第 ')[0];
      assert.ok(block.includes(q.stem));
      assert.ok(block.includes(`**答案：${q.answer}。**`));
      assert.deepEqual(q.options.map(o => o.letter),['A','B','C','D']);
      for (const o of q.options) assert.ok(block.includes(`**[${o.letter}]** ${o.text}`));
      assert.ok(exercise.paragraphs.some(p => p.parts.some(part => part.question === q.number)));
    }
  }
});

test('the unaided exercise gates review, glossary and bidirectional numbered references', () => {
  for (const exercise of readingExercises) {
    const html = renderToStaticMarkup(createElement(ReadingPracticePage,{exercise}));
    const beforeReview = html.split('<section data-review="" hidden=""')[0];
    assert.ok(beforeReview.length < html.length);
    assert.doesNotMatch(beforeReview,/正确选项|篇末词汇|换个问法/);
    assert.equal((beforeReview.match(/type="radio"/g)||[]).length,8);
    assert.match(html,/必须掌握[\s\S]+值得记忆/);
    const parts = exercise.paragraphs.flatMap(p => p.parts).filter(p => p.mark);
    assert.deepEqual(parts.map(p => p.mark),parts.map((_,i) => i+1));
    for (const part of parts) {
      assert.ok(html.includes(`id="evidence-${part.mark}"`));
      assert.ok(html.includes(`href="#evidence-${part.mark}"`));
      assert.ok(html.includes(`href="#review-${part.question}"`));
    }
    assert.equal((html.match(/data-marker="" hidden=""/g)||[]).length,parts.length);
    assert.ok(exerciseUrl(exercise).endsWith('/'+exercise.id+'/'));
  }
});
