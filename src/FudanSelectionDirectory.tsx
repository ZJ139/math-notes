import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';

export const selectionIndexPath='essays/fudan-weekly-selection.md';
export function selectionYears(items:PublicEntry[]){
  return items.flatMap(entry=>{
    const match=entry.section==='essays'&&entry.sourcePath.match(/^essays\/fudan-weekly-selection-(20\d{2})\.md$/);
    if(!match)return [];
    const year=Number(match[1]);
    const ids=[...entry.body.matchAll(/^## 问题 (20\d{2}[AS]\d{2})\s*$/gm)].map(m=>m[1]);
    return [{entry,year,ids}];
  }).sort((a,b)=>a.year-b.year);
}

export function FudanSelectionDirectory({items}:{items:PublicEntry[]}){
  const years=selectionYears(items);
  if(!years.length)return null;
  const index=items.find(entry=>entry.sourcePath===selectionIndexPath);
  return <section className="problem-years" aria-labelledby="fudan-selection-heading">
    <div className="section-heading"><h2 id="fudan-selection-heading">每周一题好题选讲</h2>{index&&<a href={entryUrl(index)+'/'}>选题说明与方法索引</a>}</div>
    <p>按原题年份阅读 · {years.reduce((total,year)=>total+year.ids.length,0)} 道精选题</p>
    <nav className="problem-year-grid" aria-label="每周一题好题选讲年份">{years.map(({entry,year,ids})=><a key={year} href={entryUrl(entry)+'/'}><span>{year} 年</span><span>{ids.length} 题</span></a>)}</nav>
  </section>;
}
