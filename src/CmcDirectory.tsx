import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';
import Markdown from './Markdown';

export const cmcSourcePath='problems/cmc-mathematics-papers.md';

// The existing Markdown remains the source of titles, page links and anchors.
// Split only this archive's explicit headings; do not infer stages from keywords.
export function cmcSections(body:string) {
  const parts=body.split(/(?=^## 第 \d+ 届\s*$)/m);
  const intro=parts.shift()||'';
  const editions=parts.map(part=>{
    const edition=Number(part.match(/^## 第 (\d+) 届/)?.[1]);
    const stages=[...part.matchAll(/^### 第 (\d+) 届(初赛|决赛)\s*\n([\s\S]*?)(?=^### |^\[返回届次目录\]|$(?![\s\S]))/gm)].map(match=>{
      if(Number(match[1])!==edition)throw new Error('CMC 届次与阶段标题不一致');
      return {stage:match[2],body:`### 第 ${edition} 届${match[2]}\n\n${match[3].trim()}`,count:(match[3].match(/#page=\d+/g)||[]).length};
    });
    if(!edition||stages.length!==2||stages[0].stage!=='初赛'||stages[1].stage!=='决赛')throw new Error('CMC 目录须明确列出初赛与决赛，缺失阶段写“未收录”');
    return {edition,stages};
  });
  return {intro,editions};
}

export function CmcCollectionNav({entry}:{entry:PublicEntry}) {
  const {editions}=cmcSections(entry.body);
  const url=entryUrl(entry)+'/';
  return <section className="cmc-collection" aria-label="CMC 届次目录">
    <p className="result-count">{editions.length} 届 · {editions.reduce((sum,e)=>sum+e.stages.reduce((n,s)=>n+s.count,0),0)} 套试卷</p>
    <p><a className="text-link" href={url}>完整目录与 PDF 下载</a></p>
    <div className="cmc-edition-grid">{editions.map(({edition,stages})=><section key={edition}>
      <h2><a href={`${url}#第-${edition}-届`}>第 {edition} 届</a></h2>
      <nav aria-label={`第 ${edition} 届比赛阶段`}>{stages.map(({stage,count})=>count?<a key={stage} href={`${url}#第-${edition}-届${stage}`}>{stage} · {count} 套</a>:<span key={stage}>{stage}未收录</span>)}</nav>
    </section>)}</div>
  </section>;
}

export function CmcDirectory({body}:{body:string}) {
  const {intro,editions}=cmcSections(body);
  const total=editions.reduce((sum,e)=>sum+e.stages.reduce((n,s)=>n+s.count,0),0);
  return <div id="cmc-directory" className="cmc-directory" data-cmc-directory="">
    <form className="cmc-filters" hidden aria-label="筛选 CMC 试卷">
      <label htmlFor="cmc-edition">届次<select id="cmc-edition" name="edition"><option value="">全部届次</option>{editions.map(({edition})=><option key={edition} value={edition}>第 {edition} 届</option>)}</select></label>
      <label htmlFor="cmc-stage">比赛阶段<select id="cmc-stage" name="stage"><option value="">初赛与决赛</option><option value="初赛">初赛（含补赛）</option><option value="决赛">决赛</option></select></label>
      <button className="button" type="reset">显示全部</button>
      <p className="result-count" role="status" aria-live="polite" data-cmc-count="">{total} 套试卷</p>
    </form>
    <details className="cmc-overview" open><summary>届次总目录与页码说明</summary><Markdown body={intro}/></details>
    {editions.map(({edition,stages})=><section key={edition} data-cmc-edition={edition} aria-labelledby={`第-${edition}-届`}>
      <Markdown body={`## 第 ${edition} 届`}/>
      {stages.map(({stage,body,count})=><section key={stage} data-cmc-stage={stage} data-cmc-papers={count} aria-labelledby={`第-${edition}-届${stage}`}><Markdown body={body}/></section>)}
      <p className="cmc-return"><a href="#按届次与阶段浏览">返回届次目录</a></p>
    </section>)}
    <p data-cmc-empty="" hidden>当前选择未收录试卷。</p>
  </div>;
}
