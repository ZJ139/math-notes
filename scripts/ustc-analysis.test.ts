import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {UstcAnalysisDirectory} from '../src/UstcAnalysisDirectory';
import {exerciseChapters} from '../src/ustcExerciseChapters';

test('USTC topics expose their lectures and every exercise section in the correct volume', async () => {
  const items = await loadEntries(fileURLToPath(new URL('../content/', import.meta.url)));
  const html = renderToStaticMarkup(createElement(UstcAnalysisDirectory, {items}));
  const topics = [...html.matchAll(/<section id="([^"]+)"><h3>.*?<\/h3>([\s\S]*?)<\/section>/g)];
  assert.deepEqual(topics.map(match => match[1]), ['limits', 'differentiation', 'integration', 'series', 'fields']);
  const notes = items.filter(entry => entry.section === 'notes' && entry.category.startsWith('ustc-analysis/'));
  assert.ok(notes.filter(note => note.category === 'ustc-analysis/limits').length >= 4);
  for (const [,id,body] of topics) {
    for (const note of notes.filter(note => note.category === 'ustc-analysis/' + id)) {
      assert.ok(body.includes('href="' + entryUrl(note) + '/"'));
    }
  }
  const links = [...html.matchAll(/<a href="([^"]+#page=(\d+))">(\d+)\.(\d+)　/g)];
  const sectionIds = new Set(links.map(([, , ,chapter,section]) => chapter + '.' + section));
  assert.equal(sectionIds.size, links.length);
  assert.equal(links.length, Object.values(exerciseChapters).reduce((n, c) => n + c.sections.length, 0));
  for (const [,href,page,chapter,section] of links) {
    const file = Number(chapter) < 10 ? '科大数分习题-v1.pdf' : '科大数分习题-v2(2).pdf';
    assert.equal(decodeURIComponent(href), '/files/problems/' + file + '#page=' + page);
    assert.equal(Number(page), exerciseChapters[Number(chapter)].sections[Number(section) - 1][1]);
  }
});
