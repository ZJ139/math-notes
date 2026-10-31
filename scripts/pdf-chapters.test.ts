import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {Article, ProblemLibrary} from '../src/components';
import {ProblemCollectionCards, collectionDestination, collectionRoute} from '../src/ProblemCollections';
import {entryUrl} from '../src/model';

const audit = JSON.parse(await readFile(new URL('../docs/reviews/pdf-chapter-navigation.json', import.meta.url), 'utf8'));
const items = await loadEntries(fileURLToPath(new URL('../content/', import.meta.url)));

test('26 chapter links use verified body headings and physical pages, preserving original PDF bytes', () => {
  const result = execFileSync('python3', [fileURLToPath(new URL('./review-pdf-chapters.py', import.meta.url))], {encoding:'utf8', timeout:30_000});
  assert.match(result, /Verified 26 chapter headings/);
});

test('chapter directories render accessible links without JavaScript and remain in existing problem collections', () => {
  const cards = renderToStaticMarkup(createElement(ProblemCollectionCards, {items}));
  for (const source of audit.files) {
    const entry = items.find(e => e.sourcePath === source.entry.replace(/^content\//, ''))!;
    assert.ok(entry);
    assert.equal(entry.category, source.category);
    assert.equal(entry.attachmentPath, source.file.replace(/^content\//, ''));
    const html = renderToStaticMarkup(createElement(Article, {entry, items}));
    const links = [...html.matchAll(/<a href="([^"<>]+)" class="pdf-chapter-link"[^>]*>([^<]+)<\/a>/g)];
    assert.equal(links.length, source.chapters.length);
    for (const [i, link] of links.entries()) {
      const chapter = source.chapters[i];
      assert.equal(decodeURIComponent(link[1]), `/files/${entry.attachmentPath}#page=${chapter.pdf_start}`);
      assert.ok(link[2].includes(chapter.title));
    }
    assert.ok(html.includes(`download="${entry.file_name}"`));
    assert.ok(html.includes('href="/problems/"'));
    assert.ok(cards.includes(`href="${collectionDestination(items, source.category)}"`));
    if (collectionDestination(items, source.category) === collectionRoute(source.category)) {
      const directory = renderToStaticMarkup(createElement(ProblemLibrary, {items, collection:source.category}));
      assert.ok(directory.includes(`href="${entryUrl(entry)}/"`));
      assert.ok(html.includes(collectionRoute(source.category)));
    }
    assert.match(html, /不是原书印刷页码/);
  }
});
