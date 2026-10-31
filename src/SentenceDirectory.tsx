import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl,tagsOf} from './model';

// Exact source tags avoid mistaking related-entry links or update dates for
// the sentence's year/Text. Ambiguous or untagged material stays accessible.
export function sentenceSource(entry:PublicEntry):{year:number;text:number}|null {
  if(entry.section!=='english'||entry.category!=='sentences')return null;
  const tags=tagsOf(entry);
  const years=[...new Set(tags.flatMap(tag=>/^(?:19|20)\d{2}年$/.test(tag)?[Number(tag.slice(0,4))]:[]))];
  const texts=[...new Set(tags.flatMap(tag=>/^Text [1-4]$/i.test(tag)?[Number(tag.slice(-1))]:[]))];
  return years.length===1&&texts.length===1?{year:years[0],text:texts[0]}:null;
}

export function sentenceGroups(items:readonly PublicEntry[]) {
  const entries=items.flatMap(entry=>{const source=sentenceSource(entry);return source?[{entry,...source}]:[];})
    .sort((a,b)=>b.year-a.year||a.text-b.text||compareSentences(a.entry,b.entry));
  return [...new Set(entries.map(item=>item.year))].sort((a,b)=>b-a).map(year=>({
    year,entries:entries.filter(item=>item.year===year),
    texts:[1,2,3,4].map(text=>({text,entries:entries.filter(item=>item.year===year&&item.text===text).map(item=>item.entry)
      .sort(compareSentences)})),
  }));
}

const sentenceKind=(entry:PublicEntry)=>tagsOf(entry).includes('经典长难句')?'经典长难句':tagsOf(entry).includes('词熟句难')?'词熟句难':'阅读精选';
const compareSentences=(a:PublicEntry,b:PublicEntry)=>['经典长难句','阅读精选','词熟句难'].indexOf(sentenceKind(a))-['经典长难句','阅读精选','词熟句难'].indexOf(sentenceKind(b))||a.title.localeCompare(b.title,'zh-CN')||a.id.localeCompare(b.id);
export const sentenceLessonSections=['原句','句子拆解','句子直译','原创拓展','重要单词'] as const;
const structureQueries=['定语从句','名词性从句','非谓语','倒装','插入语','省略','比较','否定','指代','状语从句','形式主语或宾语','强调句','并列'];
export function sentenceStructureTerms(entry:PublicEntry):string {
  if(!sentenceSource(entry))return '';
  const labels=[entry.title,...tagsOf(entry)].join(' ');
  const patterns=[/定语从句|定从|关系从句|嵌套定语/,/名词性|宾语从句|表语从句|主语从句|同位语从句|内容从句|what 从句/,/非谓语|分词|不定式|动名词/,/倒装/,/插入|同位补充|同位语(?!从句)/,/省略/,/比较|as.*as|too.*to/,/否定|not only|not.*but/,/指代/,/状语从句|让步|条件从句|时间从句|原因从句|目的从句|结果从句/,/形式主语|形式宾语/,/强调句/,/并列/];
  return structureQueries.filter((_,i)=>patterns[i].test(labels)).map(term=>`语法：${term}`).join(' ');
}
export const sentenceYearUrl=(year:number)=>`/english/sentences/years/${year}/`;
export const sentenceTextUrl=(year:number,text:number)=>`${sentenceYearUrl(year)}text-${text}/`;

// Only preview the explicitly labelled original, never the later training quote.
export function sentenceOriginal(entry:PublicEntry):string|null {
  if(entry.section!=='english'||entry.category!=='sentences')return null;
  const section=entry.body.match(/(?:^|\n)## 原句\r?\n([\s\S]*?)(?=\n## |$)/)?.[1];
  const quote=section?.match(/(?:^|\n)> [^\n]*(?:\n> [^\n]*)*/)?.[0];
  return quote?quote.trim().split('\n').map(line=>line.replace(/^> /,'').trim()).join(' '):null;
}

export function SentencePreview({entry}:{entry:PublicEntry}) {
  const original=sentenceOriginal(entry);
  return original?<div className="sentence-preview"><span className="sentence-label">原句</span><blockquote lang="en">{original}</blockquote></div>:null;
}

export function SentenceDirectory({items}:{items:PublicEntry[]}) {
  const groups=sentenceGroups(items);
  const current=groups.filter(group=>group.year>=2008);
  const earlier=groups.filter(group=>group.year<2008);
  const other=items.filter(entry=>entry.section==='english'&&entry.category==='sentences'&&!sentenceSource(entry));
  return <section className="sentence-directory" data-sentence-directory="" aria-labelledby="sentence-years-heading" hidden>
    <header className="sentence-directory-heading"><div><h2 id="sentence-years-heading">按年份读长难句</h2></div><span className="muted">{groups.length} 个年份 · {groups.reduce((sum,group)=>sum+group.entries.length,0)} 条句子</span></header>
    <p className="sentence-guide">选择年份与 Text，按“原句、断句与逐项语法、直译、两道原创练习、词汇”精读。可搜索英文片段、语法关键词或原有 L／F 编号。</p>
    <nav className="sentence-structure-links" aria-label="按语法结构复习">{structureQueries.map(query=><a key={query} href={`/english/?category=sentences&q=${encodeURIComponent('语法：'+query)}`}>{query}</a>)}</nav>
    {current.length>0&&<section className="sentence-year-section" aria-labelledby="sentence-current-heading"><h3 id="sentence-current-heading">{current.at(-1)!.year}—{current[0].year} 年 · 阅读精选</h3><p>{current.reduce((sum,group)=>sum+group.texts.filter(text=>text.entries.length).length,0)} 篇阅读 · {current.reduce((sum,group)=>sum+group.entries.length,0)} 条句子</p><nav className="sentence-year-grid" aria-label="长难句年份">{current.map(group=><a key={group.year} href={sentenceYearUrl(group.year)}><strong>{group.year}<small> 年</small></strong><span>{group.texts.filter(text=>text.entries.length).length} 篇阅读 · {group.entries.length} 条句子</span></a>)}</nav></section>}
    {earlier.length>0&&<section className="sentence-year-section" aria-labelledby="sentence-earlier-heading"><h3 id="sentence-earlier-heading">早年句库 · 同步精讲</h3><nav className="sentence-year-grid" aria-label="早年长难句年份">{earlier.map(group=><a key={group.year} href={sentenceYearUrl(group.year)}><strong>{group.year}<small> 年</small></strong><span>{group.texts.filter(text=>text.entries.length).length} 篇阅读 · {group.entries.length} 条句子</span></a>)}</nav></section>}
    {other.length>0&&<div className="sentence-other"><h3>句库总览与其他资料</h3>{other.map(entry=><a key={entry.id} href={entryUrl(entry)+'/'}>{entry.title}</a>)}</div>}
  </section>;
}

export function SentenceYearPage({items,year,text}:{items:PublicEntry[];year:number;text?:number}) {
  const groups=sentenceGroups(items);
  const group=groups.find(group=>group.year===year)!;
  const selected=group.texts.find(item=>item.text===text);
  return <section className="wrap collection-page sentence-page">
    <header className="page-heading"><div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/english/">英语</a><span>/</span><a href="/english/?category=sentences">长难句</a><span>/</span>{text?<><a href={sentenceYearUrl(year)}>{year} 年</a><span>/</span><span>Text {text}</span></>:<span>{year} 年</span>}</div><h1>{year} 年 · 长难句{text?` · Text ${text}`:''}</h1></header>
    <div className="sentence-browser sentence-browser-compact">
      <details className="sentence-sidebar year-picker"><summary>切换年份</summary><nav aria-label="切换长难句年份">{groups.map(group=><a key={group.year} href={sentenceYearUrl(group.year)} aria-current={group.year===year?'page':undefined}><span>{group.year} 年</span><small>{group.entries.length} 条</small></a>)}</nav></details>
      <div className="sentence-main"><section aria-labelledby="sentence-text-heading"><h2 id="sentence-text-heading">选择文章</h2><nav className="sentence-text-grid" aria-label={`${year} 年阅读文章`}>{group.texts.map(item=>item.entries.length?<a key={item.text} href={sentenceTextUrl(year,item.text)} aria-current={text===item.text?'page':undefined}><strong>Text {item.text}</strong><span>{item.entries.length} 条句子</span></a>:<span key={item.text} className="sentence-text-empty" aria-disabled="true"><strong>Text {item.text}</strong><span>暂未收录</span></span>)}</nav></section>
        {selected&&<section className="sentence-results" aria-labelledby="sentence-results-heading"><h2 id="sentence-results-heading">Text {text} 的句子</h2><nav className="sentence-context-links" aria-label="同篇阅读资料"><a href={`/files/english/exams/${year}英一.pdf#page=${text!+1}`}>阅读原文上下文</a><a href={`/english/translation/years/${year}/`}>本年原文、直译与单词</a></nav><ul className="sentence-cards">{selected.entries.map(entry=><li key={entry.id}><span className="sentence-kind">{sentenceKind(entry)}</span><h3><a href={entryUrl(entry)+'/'}>{entry.title}</a></h3><SentencePreview entry={entry}/>{sentenceOriginal(entry)?<nav className="sentence-lesson-links" aria-label={`${entry.title} 学习内容`}>{sentenceLessonSections.map(label=><a key={label} href={`${entryUrl(entry)}/#${label}`}>{label}</a>)}</nav>:null}</li>)}</ul></section>}
      </div>
    </div>
  </section>;
}
