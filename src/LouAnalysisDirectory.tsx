import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';
import Markdown from './Markdown';

export const louDirectoryUrl='/problems/collections/lou-analysis/';
export const louIndexPath='problems/lou-analysis-v1.md';
export const isLouBatch=(entry:PublicEntry)=>entry.section==='problems'&&/^problems\/lou-analysis-b-\d+\.md$/.test(entry.sourcePath);
export const louChapterUrl=(chapter:number)=>`${louDirectoryUrl}chapters/${chapter}/`;
const chapterNames=['实数','序列极限','函数极限与连续','导数与微分','不定积分','微分中值定理和 Taylor 展开式','微分问题'];
const numerals=['一','二','三','四','五','六','七'];
const chapterTitle=(number:number)=>`第${numerals[number-1]||number}章 ${chapterNames[number-1]||''}`;
const sectionAnchor=(section:string)=>`section-${section.replace('.', '-')}-b`;
export interface LouProblem {
  code:string; number:number; chapter:number; section:string; original:number;
  title:string; anchor:string; url:string; entry:PublicEntry;
}
// Read chapter membership from each problem's original number, rather than its
// seven-question batch. A section can therefore span any number of batches.
export function louProblems(items:PublicEntry[]):LouProblem[]{
  const result:LouProblem[]=[];
  const seen=new Set<string>(),originals=new Set<string>();
  for(const entry of items.filter(isLouBatch)){
    const navigation=new Map([...entry.body.matchAll(/^- \[问题 (B\d+)：(.+?)（\d+\.\d+\.B-\d+）\]\(#问题-b\d+\)/gm)].map(m=>[m[1],m[2]]));
    for(const match of entry.body.matchAll(/^## 问题 (B\d+)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)){
      const code=match[1];
      const source=match[2].match(/\*\*原题号：\*\*\s*习题\s*(\d+\.\d+)\.B\s*第\s*(\d+)\s*题/);
      if(!source||!navigation.has(code))throw new Error(`楼红卫题号或导航缺失：${entry.sourcePath} ${code}`);
      const section=source[1],original=Number(source[2]),key=`${section}.B-${original}`;
      if(seen.has(code)||originals.has(key))throw new Error(`楼红卫题号重复：${code} / ${key}`);
      seen.add(code);originals.add(key);
      const anchor=`问题-${code.toLowerCase()}`;
      result.push({code,number:Number(code.slice(1)),chapter:Number(section.split('.')[0]),section,original,title:navigation.get(code)!,anchor,url:`${entryUrl(entry)}/#${anchor}`,entry});
    }
  }
  return result.sort((a,b)=>a.chapter-b.chapter||Number(a.section.split('.')[1])-Number(b.section.split('.')[1])||a.original-b.original);
}
export function louChapters(items:PublicEntry[]){
  const problems=louProblems(items);
  return [...new Set(problems.map(p=>p.chapter))].map(number=>({number,title:chapterTitle(number),problems:problems.filter(p=>p.chapter===number)}));
}
function sections(problems:LouProblem[]){
  return [...new Set(problems.map(p=>p.section))].map(section=>({section,problems:problems.filter(p=>p.section===section)}));
}
function range(problems:LouProblem[]){return problems.length===1?problems[0].code:`${problems[0].code}—${problems.at(-1)!.code}`;}

export function LouAnalysisDirectory({items,showResources=true}:{items:PublicEntry[];showResources?:boolean}){
  const chapters=louChapters(items),total=chapters.reduce((n,c)=>n+c.problems.length,0);
  const sources=items.filter(e=>e.category==='lou-analysis'&&!isLouBatch(e));
  const batches=items.filter(isLouBatch).sort((a,b)=>a.sourcePath.localeCompare(b.sourcePath));
  return <div className="lou-directory">
    <div className="lou-directory-heading"><h2>B 组习题解答</h2><p>{chapters.length} 章 · {total} 道已作答习题</p></div>
    <nav className="lou-chapter-grid" aria-label="B 组解答章节目录">{chapters.map(c=><a key={c.number} href={louChapterUrl(c.number)}>
      <span className="lou-chapter-number">第{numerals[c.number-1]||c.number}章</span><h3>{chapterNames[c.number-1]||c.title}</h3>
      <p>{sections(c.problems).map(s=>s.section+'.B').join(' · ')}</p><span className="lou-chapter-count">{sections(c.problems).length} 节 · {c.problems.length} 题<span>{range(c.problems)}</span></span>
    </a>)}</nav>
    {showResources&&<section className="lou-resources" aria-labelledby="lou-originals"><h2 id="lou-originals">原题资料</h2><ul>{sources.map(e=><li key={e.id}><a href={entryUrl(e)+'/'}>{e.title}</a><span>{e.sourcePath===louIndexPath?'第 1—7 章':'下册习题'}</span></li>)}</ul></section>}
    {!!batches.length&&<details className="lou-batch-archive"><summary>按原发布批次查阅 · {batches.length} 批</summary><ul>{batches.map(e=>{const problems=louProblems([e]);return <li key={e.id}><a href={entryUrl(e)+'/'}>{range(problems)}</a><span>{[...new Set(problems.map(p=>p.section+'.B'))].join(' · ')}</span></li>;})}</ul></details>}
  </div>;
}
export function LouChapterPage({items,chapter}:{items:PublicEntry[];chapter:number}){
  const chapters=louChapters(items),current=chapters.find(c=>c.number===chapter);
  if(!current)return null;
  const groups=sections(current.problems),latest=current.problems.at(-1)!;
  return <section className="wrap collection-page lou-chapter-page">
    <header className="page-heading"><div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/problems/">题库与作答</a><span>/</span><a href={louDirectoryUrl}>楼红卫 B 组解答</a><span>/</span><span>第{numerals[chapter-1]||chapter}章</span></div>
      <h1>{current.title}</h1><p>B 组习题解答 · {groups.length} 节 · {current.problems.length} 题</p>
    </header>
    <nav className="lou-chapter-switch" aria-label="切换题解章节">{chapters.map(c=><a key={c.number} href={louChapterUrl(c.number)} aria-current={c.number===chapter?'page':undefined}>{c.title}</a>)}</nav>
    <nav className="lou-section-jumps" aria-label="本章节次">{groups.map(g=><a key={g.section} href={'#'+sectionAnchor(g.section)}>{g.section}.B<span>{g.problems.length} 题</span></a>)}</nav>
    {groups.map(g=><section className="lou-section" key={g.section} aria-labelledby={sectionAnchor(g.section)}>
      <header><h2 id={sectionAnchor(g.section)}>习题 {g.section}.B</h2><span>{g.problems.length} 道已作答</span></header>
      <ol className="lou-problem-list">{g.problems.map(p=><li key={p.code}><a href={p.url}><span className="lou-problem-code">{p.code}</span><span className="lou-problem-title">{p.title}</span><span className="lou-original-number">原书第 {p.original} 题</span></a></li>)}</ol>
    </section>)}
    <p className="lou-progress">本章当前收录至习题 {latest.section}.B 第 {latest.original} 题。</p>
    <p className="year-return"><a href={louDirectoryUrl}>返回 B 组章节目录</a></p>
  </section>;
}
export function LouSourceDirectory({entry,items}:{entry:PublicEntry;items:PublicEntry[]}){
  return <><Markdown body={entry.body.split('## B 组逐题解答')[0]}/><LouAnalysisDirectory items={items} showResources={false}/></>;
}
export function LouBatchArticle({entry}:{entry:PublicEntry}){
  const problems=louProblems([entry]);
  const start=entry.body.indexOf('## 题号导航'),firstProblem=entry.body.search(/^## 问题 B\d+/m);
  const intro=entry.body.slice(0,start).replace(/^\*\*批次导航：\*\*.*\n/gm,'');
  const body=entry.body.slice(firstProblem).replaceAll('/problems/41e85e430c9d7f84a0863658/',louDirectoryUrl);
  return <div className="lou-batch-article"><Markdown body={intro}/>
    <nav className="lou-batch-toc" aria-labelledby="题号导航"><h2 id="题号导航">题号导航</h2>
      {sections(problems).map(g=><section key={g.section}><div className="lou-batch-section-heading"><h3>习题 {g.section}.B</h3><a href={louChapterUrl(g.problems[0].chapter)+'#'+sectionAnchor(g.section)}>本节全部题解</a></div><ul>{g.problems.map(p=><li key={p.code}><a href={'#'+p.anchor}>{p.code} · 原书第 {p.original} 题 · {p.title}</a></li>)}</ul></section>)}
      <a className="lou-summary-link" href="#七题方法总结">本批方法总结</a>
    </nav><Markdown body={body}/></div>;
}
