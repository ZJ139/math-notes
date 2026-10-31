import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {Article} from '../src/components';
import {readingAnswerSource,readingAnswerGroups,readingAnswersYearUrl,ReadingAnswersIndexPage,ReadingAnswersYearPage} from '../src/ReadingAnswersDirectory';

const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const groups=readingAnswerGroups(items);

test('year directory reaches all reading answers through the correct Text and returns to that year',()=>{
  const years=groups.map(group=>group.year);
  assert.deepEqual(years,[...years].sort((a,b)=>b-a));
  for(const year of [2007,2008,2020])assert.ok(years.includes(year),`Missing reading answers for ${year}`);
  const index=renderToStaticMarkup(createElement(ReadingAnswersIndexPage,{items}));
  assert.ok(!index.includes('hidden=""'));
  const reached=new Set<string>();
  for(const group of groups){
    assert.ok(index.includes(`href="${readingAnswersYearUrl(group.year)}"`));
    const html=renderToStaticMarkup(createElement(ReadingAnswersYearPage,{items,year:group.year}));
    assert.deepEqual(group.texts.map(text=>text.text),[1,2,3,4]);
    for(const {text,entries} of group.texts){
      assert.equal(entries.length,1);
      const entry=entries[0];
      assert.ok(entry.title.includes(`${group.year} 年`)&&entry.title.includes(`Text ${text}`));
      assert.ok(html.includes(`href="${entryUrl(entry)}/"><strong>Text ${text}</strong>`));
      const article=renderToStaticMarkup(createElement(Article,{entry,items}));
      assert.ok(article.includes(`href="${readingAnswersYearUrl(group.year)}"`));
      reached.add(entry.id);
    }
  }
  assert.equal(reached.size,items.filter(entry=>entry.category==='reading-answers').length);
  assert.deepEqual(readingAnswerGroups([...items].reverse()),groups);
});

test('untagged or ambiguous answers stay accessible and missing Texts do not become broken links',()=>{
  const sample=groups[0].texts[0].entries[0];
  assert.equal(readingAnswerSource({...sample,category:'sentences'}),null);
  for(const tags of [[],['2020年','2007年','Text 1'],['2020年','Text 1','Text 2']]){
    const unknown={...sample,tags:JSON.stringify(tags)};
    assert.equal(readingAnswerSource(unknown),null);
    assert.ok(renderToStaticMarkup(createElement(ReadingAnswersIndexPage,{items:[unknown]})).includes(`href="${entryUrl(unknown)}/"`));
  }
  const partial=renderToStaticMarkup(createElement(ReadingAnswersYearPage,{items:[sample],year:2020}));
  assert.equal((partial.match(/aria-disabled="true"/g)||[]).length,3);
  assert.equal((partial.match(/>暂未收录</g)||[]).length,3);
});
