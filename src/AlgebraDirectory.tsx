import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';
import Markdown from './Markdown';
import {parseAlgebraIndex} from '../public/algebra-index.js';

export const algebraSources = ['problems/green-algebra-v0.md', 'problems/qws-algebra-v2.md'];
export const isAlgebraIndex = (entry:PublicEntry) => algebraSources.includes(entry.sourcePath);
export const algebraContext = (entry:PublicEntry) => [entry.title,entry.description,entry.subject,entry.tags].join(' ');

export function AlgebraCollectionNav({entry}:{entry:PublicEntry}) {
  const {chapters} = parseAlgebraIndex(entry.body);
  const url = entryUrl(entry) + '/';
  return <section className="algebra-collection" aria-label="高等代数章节目录">
    <p><a className="text-link" href={url}>题号检索与 PDF 下载</a></p>
    <nav className="algebra-chapter-grid" aria-label="按章浏览">{chapters.map(c=><a key={c.number} href={`${url}#${c.anchor}`}>{c.title}<span>{c.groups.length} 组 · {c.groups.reduce((n,g)=>n+g.exercises.length,0)} 题</span></a>)}</nav>
  </section>;
}

export function AlgebraDirectory({entry}:{entry:PublicEntry}) {
  const {intro,chapters} = parseAlgebraIndex(entry.body);
  const total = chapters.reduce((n,c)=>n+c.groups.reduce((n,g)=>n+g.exercises.length,0),0);
  return <div id="algebra-directory" className="algebra-directory" data-algebra-context={algebraContext(entry)}>
    <form className="algebra-filters" hidden role="search" aria-label="检索本习题集的题号">
      <label htmlFor="algebra-chapter">章节<select id="algebra-chapter" name="chapter"><option value="">全部章节</option>{chapters.map(c=><option key={c.number} value={c.number}>{c.title}</option>)}</select></label>
      <label htmlFor="algebra-exercise">组别与主编号<input id="algebra-exercise" name="exercise" type="search" maxLength={200} placeholder="如 8.1 26 或 补充题八 6"/></label>
      <button className="button" type="submit">查找</button><button className="button" type="reset">显示全部</button>
      <p role="status" aria-live="polite" data-algebra-count="">{total} 道主编号题</p>
    </form>
    <details className="algebra-overview" open><summary>章节目录与页码说明</summary><Markdown body={intro}/></details>
    {chapters.map(c=><section key={c.number} data-algebra-chapter={c.number} aria-labelledby={c.anchor}>
      <Markdown body={c.body}/>
      {c.groups.map(g=><section key={g.anchor} data-algebra-group={g.anchor} aria-labelledby={g.anchor}><Markdown body={g.body}/></section>)}
    </section>)}
    <p data-algebra-empty="" hidden>本 PDF 未找到这一组别与主编号。请核对组别、题号，或查看目录中的未收录说明。</p>
  </div>;
}
