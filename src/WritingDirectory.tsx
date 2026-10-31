import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl,tagsOf} from './model';
import {practiceIndexUrl} from './WritingPractice';

export const writingIndexUrl='/english/writing/';
// Curated publication, independent of incidental edits to older indexes.
export const featuredWritingPath='english/writing/writing-2008-2014-guide.md';
const featuredSeries='2008—2014写作精讲';
const studyPaths=[
  'writing-2008-2026-patterns.md',
  'writing-patterns-20-clauses.md',
  'writing-patterns-20-focus.md',
  'writing-patterns-20-logic.md',
  'writing-patterns-20-compact.md',
].map(name=>'english/writing/'+name);

export function writingYear(entry:PublicEntry):number|null {
  if(entry.section!=='english'||entry.category!=='writing')return null;
  const years=[...new Set(tagsOf(entry).filter(tag=>/^(?:19|20)\d{2}年$/.test(tag)).map(tag=>Number(tag.slice(0,4))))];
  return years.length===1?years[0]:null;
}

function writingKind(entry:PublicEntry) {
  const tags=tagsOf(entry);
  return tags.includes('小作文')?(tags.includes('大作文')?'大小作文':'小作文'):tags.includes('大作文')?'大作文':'作文';
}

export function compareWritingEntries(a:PublicEntry,b:PublicEntry) {
  const kinds=['小作文','大作文','大小作文','作文'];
  return (writingYear(a)??Infinity)-(writingYear(b)??Infinity)
    ||kinds.indexOf(writingKind(a))-kinds.indexOf(writingKind(b))
    ||a.title.localeCompare(b.title,'zh-CN')||a.id.localeCompare(b.id);
}

export function writingDirectoryData(items:readonly PublicEntry[]) {
  const entries=items.filter(entry=>entry.section==='english'&&entry.category==='writing');
  const studyEntries=studyPaths.flatMap(path=>entries.filter(entry=>entry.sourcePath===path));
  const featured=entries.find(entry=>entry.sourcePath===featuredWritingPath);
  const featuredEntries=featured?entries.filter(entry=>tagsOf(entry).includes(featuredSeries)&&writingYear(entry)!==null).sort(compareWritingEntries):[];
  const featuredIds=new Set([featured?.id,...featuredEntries.map(entry=>entry.id),...studyEntries.map(entry=>entry.id)]);
  const remaining=entries.filter(entry=>!featuredIds.has(entry.id));
  const dated=remaining.filter(entry=>writingYear(entry)!==null).sort(compareWritingEntries);
  const groups=[...new Set(dated.map(entry=>writingYear(entry)!))].map(year=>({year,entries:dated.filter(entry=>writingYear(entry)===year)}));
  const guidePaths=['article-v0-short.md','article-v0-long.md','article-v0-practice.md','article-v0-index.md'];
  const guideOrder=(entry:PublicEntry)=>{const index=guidePaths.indexOf(entry.sourcePath.split('/').at(-1)!);return index<0?guidePaths.length:index;};
  const guides=remaining.filter(entry=>writingYear(entry)===null).sort((a,b)=>guideOrder(a)-guideOrder(b)||a.title.localeCompare(b.title,'zh-CN'));
  return {entries,studyEntries,featured,featuredEntries,groups,guides};
}

export function WritingDirectory({items,standalone=false}:{items:PublicEntry[];standalone?:boolean}) {
  const {entries,studyEntries,featured,featuredEntries,groups,guides}=writingDirectoryData(items);
  return <section className="writing-directory" data-writing-directory="" hidden={!standalone} aria-label="作文学习目录">
    <p><a className="text-link" href={practiceIndexUrl}>考研作文练习 · 2007—2026</a></p>
    {studyEntries.length>0&&<section className="writing-resources" aria-labelledby="writing-patterns-title">
      <h2 id="writing-patterns-title"><a href={entryUrl(studyEntries[0])+'/'}>{studyEntries[0].title}</a></h2>
      <ul>{studyEntries.slice(1).map(entry=><li key={entry.id}><a href={entryUrl(entry)+'/'}>{entry.title.replace(/^考研作文20类句型｜/,'')}</a></li>)}</ul>
    </section>}
    {featured&&<section className="writing-featured" id="writing-featured" aria-labelledby="writing-featured-title">
      <span className="writing-featured-label">基础精讲</span>
      <h2 id="writing-featured-title"><a href={entryUrl(featured)+'/'}>{featured.title.split('｜')[0]}</a></h2>
      <p className="writing-featured-actions">总目录与背诵清单 · 4000 词汇量 · 大小作文精讲</p>
      {featuredEntries.length>0&&<nav className="writing-featured-years" aria-label="基础精讲的作文年份">{featuredEntries.map(entry=><a key={entry.id} href={entryUrl(entry)+'/'} aria-label={`${writingYear(entry)} 年大小作文精讲`}>{writingYear(entry)}<span>年</span></a>)}</nav>}
    </section>}
    {groups.length>0&&<section className="writing-archive" aria-labelledby="writing-archive-title">
      <div className="writing-section-heading"><h2 id="writing-archive-title">历年作文</h2><span>按题目年份 · 从早到晚</span></div>
      <nav className="writing-year-nav" aria-label="历年作文年份">{groups.map(group=><a key={group.year} href={`#writing-year-${group.year}`}>{group.year}</a>)}</nav>
      <div className="writing-year-list">{groups.map(group=><section className="writing-year-row" id={`writing-year-${group.year}`} key={group.year} aria-labelledby={`writing-heading-${group.year}`}>
        <h3 id={`writing-heading-${group.year}`}>{group.year}<small> 年</small></h3>
        <ul>{group.entries.map(entry=><li key={entry.id}><a href={entryUrl(entry)+'/'}><span className="writing-kind">{writingKind(entry)}</span><span>{entry.title.replace(/^(?:19|20)\d{2}年英语一(?:大小作文|小作文|大作文)[｜|：:]/,'')}</span></a></li>)}</ul>
      </section>)}</div>
    </section>}
    {guides.length>0&&<section className="writing-resources" aria-labelledby="writing-resources-title"><h2 id="writing-resources-title">分类与训练</h2><ul>{guides.map(entry=><li key={entry.id}><a href={entryUrl(entry)+'/'}>{entry.title.replace(/^article-v0｜/,'')}</a></li>)}</ul></section>}
    {!entries.length&&<p>暂无作文资料。</p>}
  </section>;
}
