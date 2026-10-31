import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadEntries} from '../src/content';
import {FinalExamDirectory,finalExamEntries} from '../src/FinalExamDirectory';
import {problemYears,yearPDFs} from '../src/ProblemYears';
import {cohortRoute,cohortDestination} from '../src/FinalExamDirectory';
import {entryUrl} from '../src/model';

test('final exams use cohort navigation and never enter A/S year archives',async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const finals=finalExamEntries(items);
  assert.equal(finals.length,9);
  const entry=finals.find(e=>e.category==='final-exams/2014')!;
  assert.equal(entry.category,'final-exams/2014');
  assert.deepEqual(problemYears(entry),[]);
  assert.ok(!yearPDFs(items,2014).some(e=>e.id===entry.id));
  for(const course of ['I','II'])for(const number of ['07','08'])assert.ok(entry.body.includes(`［14级高代 ${course} 期末 ${number}］`));
  const html=renderToStaticMarkup(createElement(FinalExamDirectory,{items}));
  assert.ok(html.includes('id="final-exams"'));
  assert.ok(html.includes(`href="${entryUrl(entry)}/"`));
  assert.ok(html.includes('2014 级'));
  assert.equal(renderToStaticMarkup(createElement(FinalExamDirectory,{items:[]})),'');
  assert.deepEqual(finalExamEntries([{...entry,section:'english'},{...entry,category:'final-exams/unknown'}]),[]);
});

test('grade 16 and 17 finals expose twelve original question numbers without A/S collisions',async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const records=JSON.parse(await readFile(new URL('../docs/reviews/fudan-grade16-grade17-pdfs.json',import.meta.url),'utf8')) as {file:string;pages:number;bytes:number;sha256:string}[];
  assert.equal(records.length,2);
  const html=renderToStaticMarkup(createElement(FinalExamDirectory,{items}));
  for(const [grade,pages,starts] of [[16,6,[1,1,2,3,4,5]],[17,7,[1,2,3,4,5,6]]] as const){
    const matches=items.filter(e=>e.category===`final-exams/20${grade}`);
    assert.equal(matches.length,1);
    const entry=matches[0];
    assert.equal(items.filter(e=>e.attachmentPath===entry.attachmentPath).length,1);
    assert.deepEqual(problemYears(entry),[]);
    assert.deepEqual(entry.problemIds,[]);
    assert.ok(!yearPDFs(items,2000+grade).some(e=>e.id===entry.id));
    const rows=entry.body.split('\n').filter(line=>line.startsWith('| ［'));
    assert.equal(rows.length,6);
    for(const [i,course] of ['I','II'].entries())for(const [j,number] of ['06','07','08'].entries()){
      assert.ok(rows[i*3+j].includes(`［${grade}级高代 ${course} 期末 ${number}］`));
      assert.ok(rows[i*3+j].includes(`#page=${starts[i*3+j]})`));
    }
    assert.ok(html.includes(`href="${entryUrl(entry)}/"`));
    const record=records.find(r=>r.file===entry.file_name)!;
    assert.equal(record.pages,pages);
    const bytes=await readFile(new URL(`../content/problems/${record.file}`,import.meta.url));
    assert.equal(bytes.length,record.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),record.sha256);
  }
  const grade17=items.find(e=>e.category==='final-exams/2017')!;
  assert.match(grade17.body,/有限秩/);
  assert.match(grade17.body,/无限维反例/);
});

test('October 24 PDFs preserve all original bytes and have one entry each',async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const records=JSON.parse(await readFile(new URL('../docs/reviews/fudan-oct24-pdfs.json',import.meta.url),'utf8')) as {file:string;bytes:number;sha256:string}[];
  assert.equal(records.length,3);
  for(const record of records){
    assert.equal(items.filter(e=>e.attachmentPath===`problems/${record.file}`).length,1);
    const bytes=await readFile(new URL(`../content/problems/${record.file}`,import.meta.url));
    assert.equal(bytes.length,record.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),record.sha256);
  }
  assert.deepEqual(yearPDFs(items,2023).flatMap(e=>e.problemIds||[]).filter(id=>id.startsWith('2023')),Array.from({length:15},(_,i)=>`2023S${String(i+1).padStart(2,'0')}`));
});


test('single-cohort links open the solution, while multiple resources retain their directory',async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const entry=items.find(e=>e.category==='final-exams/2019')!;
  const single=renderToStaticMarkup(createElement(FinalExamDirectory,{items}));
  assert.ok(single.includes(`href="${entryUrl(entry)}/"`));
  assert.ok(!single.includes(`href="${cohortRoute('2019')}"`));
  const second={...entry,id:'another-2019-solution',file_name:null};
  const expanded=[...items,second];
  assert.equal(cohortDestination(expanded,'2019'),cohortRoute('2019'));
  const multiple=renderToStaticMarkup(createElement(FinalExamDirectory,{items:expanded}));
  assert.ok(multiple.includes(`href="${cohortRoute('2019')}"`));
  assert.ok(multiple.includes('2 份解答'));
});
