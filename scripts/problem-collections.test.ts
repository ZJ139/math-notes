import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {fileURLToPath} from 'node:url';
import {loadEntries} from '../src/content';
import {populatedCollections,collectionEntries,entryCollection,ProblemCollectionCards,collectionDestination,collectionRoute} from '../src/ProblemCollections';
import {ProblemLibrary,Article} from '../src/components';
import {entryUrl} from '../src/model';
import {problemYears} from '../src/ProblemYears';
const entries=loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
test('every existing problem has exactly one explicit collection and unique collection counts',async()=>{
 const items=await entries;const problems=items.filter(e=>e.section==='problems');
 assert.deepEqual(populatedCollections(items).map(c=>c.id),['fudan-weekly','final-exams','ustc-analysis','xhm-analysis','green-algebra','lou-analysis','qws-algebra','analytic-geometry','cmc-mathematics']);
 assert.equal(collectionEntries(items,'fudan-weekly').length,36);
 assert.equal(collectionEntries(items,'final-exams').length,9);
 for(const e of problems)assert.ok(entryCollection(e),e.sourcePath);
 assert.equal(new Set(populatedCollections(items).flatMap(c=>collectionEntries(items,c.id).map(e=>e.id))).size,problems.length);
 assert.deepEqual(populatedCollections([]),[]);
 const unknown={...problems[0],category:'another-real-collection'};
 assert.equal(entryCollection(unknown),undefined);
 assert.match(renderToStaticMarkup(createElement(ProblemLibrary,{items:[unknown]})),/其他题目与解答/);
 const cards=renderToStaticMarkup(createElement(ProblemCollectionCards,{items}));
 assert.equal((cards.match(/<a /g)||[]).length,9);
 assert.match(cards,/36 份资料/);assert.doesNotMatch(cards,/2023S|14A01/);
});
test('collection, cohort and cross-year articles provide static parent paths',async()=>{
 const items=await entries;
 const root=renderToStaticMarkup(createElement(ProblemLibrary,{items}));
 assert.match(root,/data-problem-results="" hidden=""/);
 const weekly=renderToStaticMarkup(createElement(ProblemLibrary,{items,collection:'fudan-weekly'}));
 assert.match(weekly,/href="\/problems\/years\/2023\/"/);
 assert.match(weekly,/跨年合辑只计一份/);
 const finals=renderToStaticMarkup(createElement(ProblemLibrary,{items,collection:'final-exams'}));
 assert.ok(finals.includes(`href="${entryUrl(items.find(e=>e.category==='final-exams/2014')!)}/"`));
 assert.doesNotMatch(finals,/href="\/problems\/years\//);
 const cohort=renderToStaticMarkup(createElement(ProblemLibrary,{items,collection:'final-exams',cohort:'2014'}));
 assert.doesNotMatch(cohort,/data-problem-results="" hidden/);
 assert.match(cohort,/14级期末大题解答/);
 for(const entry of items.filter(e=>e.section==='problems')){
  const html=renderToStaticMarkup(createElement(Article,{entry,items}));
  const parent=entryCollection(entry)!;
  if(collectionDestination(items,parent.id)===collectionRoute(parent.id))assert.ok(html.includes(collectionRoute(parent.id)));
  else assert.ok(!html.includes(`href="${collectionRoute(parent.id)}"`),'avoid a parent link redirecting back to this article');
  for(const year of problemYears(entry))assert.ok(html.includes(`/problems/years/${year}/`));
  if(entry.category.startsWith('final-exams/')){
   assert.ok(!html.includes(`href="/problems/collections/${entry.category}/"`));
   assert.match(html,/href="\/problems\/collections\/final-exams\/">返回期末考试目录/);
  }
 }
});


test('plain single-file collections open directly; meaningful directories and multi-file collections remain',async()=>{
  const items=await entries;
  const cards=renderToStaticMarkup(createElement(ProblemCollectionCards,{items}));
  for(const id of ['xhm-analysis']){
    const entry=collectionEntries(items,id)[0];
    assert.ok(cards.includes(`href="${entryUrl(entry)}/"`));
    assert.equal(collectionDestination(items,id),entryUrl(entry)+'/');
    assert.equal(collectionDestination([...items,{...entry,id:'second-file'}],id),collectionRoute(id));
  }
  for(const id of ['fudan-weekly','final-exams','ustc-analysis','analytic-geometry','lou-analysis','green-algebra','qws-algebra','cmc-mathematics']){
    assert.ok(cards.includes(`href="${collectionRoute(id)}"`));
  }
});
