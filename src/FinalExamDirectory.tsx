import React from 'react';
import type {PublicEntry} from './content';
import {entryUrl} from './model';

// Cohorts belong to a separate namespace from A/S problem years.
export const finalExamEntries=(items:PublicEntry[])=>items.filter(e=>e.section==='problems'&&/^final-exams\/20\d{2}$/.test(e.category)&&/\.pdf$/i.test(e.file_name||'')).sort((a,b)=>b.category.localeCompare(a.category)||a.id.localeCompare(b.id));

export const cohortRoute=(cohort:string)=>`/problems/collections/final-exams/${cohort}/`;
export const cohortEntries=(items:PublicEntry[],cohort:string)=>items.filter(e=>e.section==='problems'&&e.category===`final-exams/${cohort}`);
export function cohortDestination(items:PublicEntry[],cohort:string){
  const entries=cohortEntries(items,cohort);
  return entries.length===1?entryUrl(entries[0])+'/':cohortRoute(cohort);
}

export function FinalExamDirectory({items,heading=true}:{items:PublicEntry[];heading?:boolean}){
  const entries=finalExamEntries(items);
  if(!entries.length)return null;
  return <section className="problem-years" id="final-exams" aria-labelledby={heading?'final-exams-heading':undefined} aria-label={heading?undefined:'期末考试解答年级'}>
    {heading&&<h2 id="final-exams-heading">期末考试大题解答</h2>}
    <nav className="problem-year-grid" aria-label="期末考试解答年级">{[...new Set(entries.map(e=>e.category.slice(-4)))].map(cohort=>{
      const count=cohortEntries(items,cohort).length;
      return <a key={cohort} href={cohortDestination(items,cohort)}><span>{cohort} 级</span>{count>1&&<span>{count} 份解答</span>}</a>;
    })}</nav>
  </section>;
}
