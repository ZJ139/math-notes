import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl,tagsOf} from './model';

export const readingAnswersIndexUrl='/english/reading-answers/';
export const readingAnswersYearUrl=(year:number)=>`${readingAnswersIndexUrl}years/${year}/`;

// Use explicit source tags, not dates or years mentioned in the explanation.
export function readingAnswerSource(entry:PublicEntry) {
  if(entry.section!=='english'||entry.category!=='reading-answers')return null;
  const tags=tagsOf(entry);
  const years=[...new Set(tags.filter(tag=>/^(?:19|20)\d{2}年$/.test(tag)).map(tag=>Number(tag.slice(0,4))))];
  const texts=[...new Set(tags.filter(tag=>/^Text [1-4]$/i.test(tag)).map(tag=>Number(tag.slice(-1))))];
  return years.length===1&&texts.length===1?{year:years[0],text:texts[0]}:null;
}

export function readingAnswerGroups(items:readonly PublicEntry[]) {
  const sources=items.flatMap(entry=>{const source=readingAnswerSource(entry);return source?[{entry,...source}]:[];});
  return [...new Set(sources.map(source=>source.year))].sort((a,b)=>b-a).map(year=>({
    year,texts:[1,2,3,4].map(text=>({text,entries:sources.filter(source=>source.year===year&&source.text===text).map(source=>source.entry).sort((a,b)=>a.id.localeCompare(b.id))})),
  }));
}

export function ReadingAnswersDirectory({items,standalone=false}:{items:PublicEntry[];standalone?:boolean}) {
  const groups=readingAnswerGroups(items);
  const other=items.filter(entry=>entry.section==='english'&&entry.category==='reading-answers'&&!readingAnswerSource(entry));
  return <section className="sentence-directory" data-reading-answers-directory="" aria-label="真题阅读解答年份" hidden={!standalone}>
    <header className="sentence-directory-heading">{!standalone&&<h2>真题阅读解答</h2>}<span className="muted">{groups.length} 个年份 · {groups.reduce((sum,group)=>sum+group.texts.filter(text=>text.entries.length).length,0)} 篇阅读</span></header>
    <nav className="sentence-year-grid" aria-label="真题阅读解答年份">{groups.map(group=><a key={group.year} href={readingAnswersYearUrl(group.year)}><strong>{group.year}<small> 年</small></strong><span>{group.texts.filter(text=>text.entries.length).length} 篇阅读解答</span></a>)}</nav>
    {!groups.length&&!other.length&&<p>暂无真题阅读解答。</p>}
    {other.length>0&&<div className="sentence-other"><h3>其他阅读解答</h3>{other.map(entry=><a key={entry.id} href={entryUrl(entry)+'/'}>{entry.title}</a>)}</div>}
  </section>;
}

export function ReadingAnswersIndexPage({items}:{items:PublicEntry[]}) {
  return <section className="wrap collection-page"><header className="page-heading"><div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/english/">英语</a><span>/</span><span>真题阅读解答</span></div><h1>真题阅读解答</h1></header><ReadingAnswersDirectory items={items} standalone/></section>;
}

export function ReadingAnswersYearPage({items,year}:{items:PublicEntry[];year:number}) {
  const groups=readingAnswerGroups(items);
  const group=groups.find(group=>group.year===year);
  if(!group)throw new Error(`没有 ${year} 年真题阅读解答`);
  return <section className="wrap collection-page">
    <header className="page-heading"><div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/english/">英语</a><span>/</span><a href={readingAnswersIndexUrl}>真题阅读解答</a><span>/</span><span>{year} 年</span></div><h1>{year} 年 · 真题阅读解答</h1></header>
    <details className="year-picker"><summary>切换年份</summary><nav className="problem-year-switcher" aria-label="切换阅读解答年份">{groups.map(group=><a key={group.year} href={readingAnswersYearUrl(group.year)} aria-current={group.year===year?'page':undefined}>{group.year} 年</a>)}</nav></details>
    <nav className="sentence-text-grid" aria-label={`${year} 年阅读解答`}>{group.texts.map(({text,entries})=>entries.length?entries.map(entry=><a key={entry.id} href={entryUrl(entry)+'/'}><strong>Text {text}</strong><span>{entries.length===1?'阅读解答':entry.title}</span></a>):<span key={text} className="sentence-text-empty" aria-disabled="true"><strong>Text {text}</strong><span>暂未收录</span></span>)}</nav>
    <p className="year-return"><a href={readingAnswersIndexUrl}>返回全部年份</a></p>
  </section>;
}
