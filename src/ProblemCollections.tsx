import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';
import {isAlgebraIndex} from './AlgebraDirectory';
import {cmcSourcePath} from './CmcDirectory';

// Add a collection here and assign its category to content; empty collections stay hidden.
export const problemCollections=[
  {id:'fudan-weekly',title:'复旦大学高等代数每周一题习题解答',description:'A / S 每周一题 · 按年份阅读',category:'fudan-weekly'},
  {id:'final-exams',title:'高等代数期末考试大题解答',description:'按入学年级阅读',category:'final-exams'},
  {id:'ustc-analysis',title:'科大数分习题',description:'数学分析教程 · 上册与下册',category:'ustc-analysis'},
  {id:'xhm-analysis',title:'谢惠民数学分析习题',description:'数学分析习题课讲义 · 上册',category:'xhm-analysis'},
  {id:'green-algebra',title:'高等代数绿皮习题',description:'高等代数学 · 第三版',category:'green-algebra'},
  {id:'lou-analysis',title:'楼红卫数学分析习题',description:'上册与下册',category:'lou-analysis'},
  {id:'qws-algebra',title:'丘维声高等代数习题',description:'大学高等代数课程创新教材 · 下册',category:'qws-algebra'},
  {id:'analytic-geometry',title:'解析几何习题',description:'丘维声 · 第三版前五章',category:'analytic-geometry'},
  {id:'cmc-mathematics',title:'数学类 CMC 真题',description:'第 1—17 届初赛与决赛',category:'cmc-mathematics'},
];
export const collectionRoute=(id:string)=>`/problems/collections/${id}/`;
export const collectionEntries=(items:PublicEntry[],id:string)=>items.filter(e=>e.section==='problems'&&(e.category===id||e.category.startsWith(id+'/')));
export const populatedCollections=(items:PublicEntry[])=>problemCollections.filter(c=>collectionEntries(items,c.category).length);
export const entryCollection=(entry:PublicEntry)=>problemCollections.find(c=>collectionEntries([entry],c.category).length);
// Keep directories that offer a real choice of years, chapters, stages or files.
export function collectionDestination(items:PublicEntry[],id:string){
  const entries=collectionEntries(items,id);
  const directory=id==='fudan-weekly'||id==='final-exams'||entries.some(e=>isAlgebraIndex(e)||e.sourcePath===cmcSourcePath);
  return entries.length===1&&!directory?entryUrl(entries[0])+'/':collectionRoute(id);
}
export function ProblemCollectionCards({items}:{items:PublicEntry[]}){
  return <nav className="problem-collection-grid" aria-label="习题集">{populatedCollections(items).map(c=><a key={c.id} id={c.id==='fudan-weekly'?'problem-years':c.id} href={collectionDestination(items,c.id)}><h2 id={c.id==='fudan-weekly'?'problem-index':undefined}>{c.title}</h2><span>{collectionEntries(items,c.category).length} 份资料</span></a>)}</nav>;
}
