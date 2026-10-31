import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {entryUrl} from '../src/model';
import {WritingDirectory,writingDirectoryData,writingYear,featuredWritingPath} from '../src/WritingDirectory';
import {WritingLibrary,Article} from '../src/components';

const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
const data=writingDirectoryData(items);

test('writing guide is featured once; all other models follow exam years, then short/long order',()=>{
  assert.equal(data.featured?.sourcePath,featuredWritingPath);
  assert.deepEqual(data.featuredEntries.map(writingYear),[2008,2009,2010,2011,2012,2013,2014]);
  assert.deepEqual(data.groups.map(group=>group.year),Array.from({length:17},(_,i)=>2010+i));
  for(const group of data.groups){
    assert.deepEqual(group.entries.map(entry=>entry.sourcePath.split('/').at(-1)),group.year<=2023
      ?[`article-v0-short-${group.year}.md`,`article-v0-long-${group.year}.md`]
      :[`writing-4000-${group.year}.md`]);
  }
  const arranged=[...data.studyEntries,data.featured!,...data.featuredEntries,...data.groups.flatMap(group=>group.entries),...data.guides];
  assert.equal(data.studyEntries.length,5);
  assert.equal(data.studyEntries[0].sourcePath,'english/writing/writing-2008-2026-patterns.md');
  assert.equal(arranged.length,data.entries.length);
  assert.equal(new Set(arranged.map(entry=>entry.id)).size,data.entries.length);
  assert.deepEqual(arranged.map(entry=>entry.id).sort(),data.entries.map(entry=>entry.id).sort());
  const changed=items.map(entry=>({...entry,updated_at:'2099-01-01T00:00:00.000Z'})).reverse();
  assert.deepEqual(writingDirectoryData(changed).groups.map(group=>group.entries.map(entry=>entry.id)),data.groups.map(group=>group.entries.map(entry=>entry.id)));
  const source=data.featuredEntries[0];
  assert.equal(writingYear({...source,tags:'[]',title:'2008年作文',updated_at:'2026-10-26'}),null);
  assert.equal(writingYear({...source,tags:'["2008年","2014年"]'}),null);
  const untagged={...source,id:'untagged',tags:'[]'};
  assert.ok(writingDirectoryData([untagged]).guides.includes(untagged));
  const withoutHub=writingDirectoryData(items.filter(entry=>entry.sourcePath!==featuredWritingPath));
  assert.equal(withoutHub.featuredEntries.length,0);
  assert.equal(withoutHub.groups.flatMap(group=>group.entries).length,38);
});

test('writing directory is usable without JavaScript, with distinct resources and stable article return links',()=>{
  const html=renderToStaticMarkup(createElement(WritingDirectory,{items,standalone:true}));
  for(const entry of data.entries)assert.equal(html.split(`href="${entryUrl(entry)}/"`).length-1,1,entry.title);
  assert.ok(html.indexOf('writing-patterns-title')<html.indexOf('基础精讲'));
  assert.ok(html.indexOf('基础精讲')<html.indexOf('历年作文'));
  assert.ok(html.indexOf('历年作文')<html.indexOf('分类与训练'));
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(ids.length,new Set(ids).size);
  for(const [,anchor]of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(anchor));
  const page=renderToStaticMarkup(createElement(WritingLibrary,{items}));
  assert.match(page,/data-default-category="writing"/);
  assert.match(page,/data-writing-results="" hidden/);
  assert.doesNotMatch(html,/<time|data-search=/);
  const article=renderToStaticMarkup(createElement(Article,{entry:data.featuredEntries[0]}));
  assert.match(article,/href="\/english\/writing\/">返回作文目录/);
});

test('standalone and legacy writing directories support full-text search, empty results, clearing and history',async()=>{
  const script=await readFile(new URL('../public/site.js',import.meta.url),'utf8');
  for(const standalone of [true,false]){
    const handlers=new Map<string,(event?:any)=>void>();
    const query={value:''},category={value:''},count={textContent:''},empty={hidden:true};
    const directory={hidden:false},results={hidden:true},list={hidden:false};
    const rows=data.entries.map(entry=>({hidden:false,dataset:{category:'writing',entryId:entry.id,search:[entry.title,entry.tags,entry.body].join(' ').toLocaleLowerCase()}}));
    const form={addEventListener:(event:string,fn:(event?:any)=>void)=>handlers.set(event,fn)};
    const collection={dataset:standalone?{defaultCategory:'writing'}:{},
      querySelector:(selector:string)=>({'form':form,'.entry-list':list,'[data-writing-directory]':directory,'[data-writing-results]':standalone?results:null})[selector]||null,
      querySelectorAll:(selector:string)=>selector==='[data-entry]'?rows:[],
    };
    const location=new URL(standalone?'https://local.test/english/writing/':'https://local.test/english/?category=writing');
    vm.runInNewContext(script,{
      document:{querySelector:(selector:string)=>selector==='[data-collection]'?collection:null,getElementById:(id:string)=>({query,category,'result-count':count,'no-results':empty})[id]||null},
      location,URL,URLSearchParams,history:{pushState(_state:unknown,_title:string,url:string){location.href=new URL(url,location).href;}},
      FormData:class{*[Symbol.iterator](){yield ['q',query.value];yield ['category',category.value];}},
      addEventListener:(event:string,fn:()=>void)=>handlers.set(event,fn),
    });
    assert.equal(directory.hidden,false);assert.equal(list.hidden,true);
    const search=(text:string)=>{query.value=text;handlers.get('submit')!({preventDefault(){}});};
    search('2010年小作文');
    assert.equal(directory.hidden,true);assert.equal(list.hidden,false);
    assert.equal(rows.filter(row=>!row.hidden).length,1);
    if(standalone)assert.equal(results.hidden,false);
    search('nonexistent-writing-phrase');assert.equal(empty.hidden,false);
    search('  ');assert.equal(directory.hidden,false);assert.equal(list.hidden,true);
    location.search='?category=writing&q=2012年大作文';handlers.get('popstate')!();
    assert.equal(directory.hidden,true);assert.equal(rows.filter(row=>!row.hidden).length,1);
    if(!standalone){location.search='?category=sentences';handlers.get('popstate')!();assert.equal(directory.hidden,true);assert.equal(list.hidden,false);}
  }
});
