import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {cp,mkdir,writeFile,readFile,rm,readdir,stat,rename} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadEntries} from '../src/content';
import {sections,compareRecentEntries,type Section} from '../src/model';
import {Layout,Home,Collection,ProblemLibrary,Article,Manage,About,MathOverview,WritingLibrary} from '../src/components';
import {WritingPracticeIndex,WritingPracticePage,practiceExams} from '../src/WritingPractice';
import config from '../site.config.json';
import {louChapters,louChapterUrl,LouChapterPage} from '../src/LouAnalysisDirectory';
import {loadStorage} from '../src/storage';
import {releaseEntries} from '../src/releases';
import {copyLatexMathAssets} from '../src/latexMath';
import {availableProblemYears,ProblemYearPage} from '../src/ProblemYears';
import {populatedCollections,collectionRoute,collectionDestination} from '../src/ProblemCollections';
import {finalExamEntries,cohortRoute,cohortDestination} from '../src/FinalExamDirectory';
import {sentenceGroups,SentenceYearPage} from '../src/SentenceDirectory';
import {readingGroups,ReadingIndexPage,ReadingYearPage} from '../src/ReadingDirectory';

import {readingAnswerGroups,readingAnswersIndexUrl,readingAnswersYearUrl,ReadingAnswersIndexPage,ReadingAnswersYearPage} from '../src/ReadingAnswersDirectory';

const root=fileURLToPath(new URL('..',import.meta.url));
const output=path.resolve(root,'dist');
if(output!==path.join(path.resolve(root),'dist'))throw new Error('Invalid output directory');
const {summary:storage,releases}=await loadStorage(path.join(root,'content'),config.repository);
const items=[...await loadEntries(path.join(root,'content')),...releaseEntries(releases,config.repository)].sort(compareRecentEntries);
const site=new URL(config.siteUrl);
if(site.protocol!=='https:'||!site.pathname.endsWith('/'))throw new Error('siteUrl 必须是 HTTPS 且以 / 结尾');
const base=site.pathname.replace(/\/$/,'');
// New HTML must never run an older cached search/filter script after deployment.
// The shared module has no imports; prepend its declarations to keep one classic,
// fingerprinted browser script and preserve the existing progressive enhancement.
const algebraCode=(await readFile(path.join(root,'public/algebra-index.js'),'utf8')).replace(/^export /gm,'');
const fragmentCode=await readFile(path.join(root,'public/fragment-navigation.js'),'utf8');
const siteCode=algebraCode+'\n'+fragmentCode+'\n'+await readFile(path.join(root,'public/site.js'),'utf8');
const siteScript=`site.${createHash('sha256').update(siteCode).digest('hex').slice(0,16)}.js`;
const practiceCode=await readFile(path.join(root,'public/writing-practice.js'),'utf8');
const practiceScript=`writing-practice.${createHash('sha256').update(practiceCode).digest('hex').slice(0,16)}.js`;
const stylesheets=new Map<string,string>();
const prefix=(html:string)=>{
  for(const [source,target]of stylesheets)html=html.replace(`href="/${source}"`,`href="/${target}"`);
  return html.replace('src="/writing-practice.js"',`src="/${practiceScript}"`).replace('src="/site.js"',`src="/${siteScript}"`).replace(/((?:href|src|action)=")\/(?!\/)/g,`$1${base}/`);
};
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await cp(path.join(root,'public'),output,{recursive:true});
await rm(path.join(output,'site.js'));
await writeFile(path.join(output,siteScript),siteCode);
await rename(path.join(output,'writing-practice.js'),path.join(output,practiceScript));
await rm(path.join(output,'algebra-index.js'));
await rm(path.join(output,'fragment-navigation.js'));
const fonts=await readFile(path.join(output,'fonts.css'),'utf8');
await writeFile(path.join(output,'fonts.css'),fonts.replaceAll('/fonts/',`${base}/fonts/`));
// New pages must not reuse cached typography or a different renderer's CSS.
// Keep each stylesheet in its directory so relative font URLs still resolve.
for(const file of ['fonts.css','reading.css','writing-practice.css']){
  const digest=createHash('sha256').update(await readFile(path.join(output,file))).digest('hex').slice(0,16);
  const fingerprinted=file.replace(/\.css$/,`.${digest}.css`);
  await rename(path.join(output,file),path.join(output,fingerprinted));
  stylesheets.set(file,fingerprinted);
}
const urls:string[]=[];
async function page(route:string,title:string,body:React.ReactNode,noindex=false,description?:string){
  const filename=route==='404.html'?route:path.posix.join(route,'index.html');
  const target=path.join(output,filename);
  await mkdir(path.dirname(target),{recursive:true});
  const html='<!doctype html>'+renderToStaticMarkup(<Layout path={route==='404.html'?'/404.html':'/'+route} title={title} noindex={noindex} description={description}>{body}</Layout>);
  await writeFile(target,prefix(html));
  if(!noindex)urls.push(new URL(route,site).href);
}
// Preserve old bookmarks while removing redundant directories from navigation
// and search indexes. The shared script keeps their queries and fragments.
async function redirect(route:string,target:string){
  const filename=path.join(output,route,'index.html');
  await mkdir(path.dirname(filename),{recursive:true});
  const html='<!doctype html>'+renderToStaticMarkup(<Layout path={target} title="打开资料" noindex redirectTo={base+target}><section className="wrap collection-page"><header className="page-heading"><h1>打开资料</h1><a href={target} data-redirect="">继续阅读</a></header></section></Layout>);
  await writeFile(filename,prefix(html));
}
await page('','学习目录',<Home items={items}/>);
await page('math/','数学',<MathOverview items={items}/>);
for(const [section,title]of Object.entries(sections))await page(section+'/',title,<Collection section={section as Section} items={items.filter(e=>e.section===section)}/>);
for(const collection of populatedCollections(items)){
  const route=collectionRoute(collection.id),target=collectionDestination(items,collection.id);
  if(target!==route)await redirect(route.slice(1),target);
  else await page(route.slice(1),collection.title,<ProblemLibrary items={items} collection={collection.id}/>);
}
for(const chapter of louChapters(items))await page(louChapterUrl(chapter.number).slice(1),`${chapter.title} · 楼红卫 B 组解答`,<LouChapterPage items={items} chapter={chapter.number}/>);
for(const cohort of new Set(finalExamEntries(items).map(e=>e.category.slice(-4)))){
  const route=cohortRoute(cohort),target=cohortDestination(items,cohort);
  if(target!==route)await redirect(route.slice(1),target);
  else await page(route.slice(1),`${cohort} 级期末考试解答`,<ProblemLibrary items={items} collection="final-exams" cohort={cohort}/>);
}
for(const year of availableProblemYears(items))await page(`problems/years/${year}/`,`${year} 年高等代数解答`,<ProblemYearPage items={items} year={year}/>);
for(const group of sentenceGroups(items)){
  await page(`english/sentences/years/${group.year}/`,`${group.year} 年长难句`,<SentenceYearPage items={items} year={group.year}/>);
  for(const text of group.texts.filter(text=>text.entries.length))await page(`english/sentences/years/${group.year}/text-${text.text}/`,`${group.year} 年 Text ${text.text} 长难句`,<SentenceYearPage items={items} year={group.year} text={text.text}/>);
}
await page('english/writing/','作文',<WritingLibrary items={items}/>);
await page('english/writing-practice/','考研作文练习',<WritingPracticeIndex/>);
for(const exam of practiceExams)await page(`english/writing-practice/${exam.year}/`,`${exam.year} 年考研作文练习`,<WritingPracticePage year={exam.year}/>);
await page(readingAnswersIndexUrl.slice(1),'真题阅读解答',<ReadingAnswersIndexPage items={items}/>);
for(const group of readingAnswerGroups(items))await page(readingAnswersYearUrl(group.year).slice(1),`${group.year} 年真题阅读解答`,<ReadingAnswersYearPage items={items} year={group.year}/>);
await page('english/translation/','阅读与直译',<ReadingIndexPage items={items}/>);
for(const group of readingGroups(items))await page(`english/translation/years/${group.year}/`,`${group.year} 年阅读与直译`,<ReadingYearPage items={items} year={group.year}/>);
await page('search/','搜索书房',<Collection items={items}/>,true);
await page('manage/','管理资料',<Manage items={items} storage={storage}/>,true);
await page('about/','关于这间书房',<About/>);
await page('404.html','没有找到这页',<section className="wrap collection-page"><header className="page-heading"><h1>这页暂时不在书架上。</h1><p>它可能已被移动，或还没有公开。</p><a className="button" href="/">返回书房</a></header></section>,true);
for(const e of items){
  await page(`${e.section}/${e.id}/`,e.title,<Article entry={e} items={items}/>,false,e.description||e.title);
  if(e.attachmentPath){
    const target=path.join(output,'files',e.attachmentPath);
    await mkdir(path.dirname(target),{recursive:true});
    await cp(path.join(root,'content',e.attachmentPath),target);
  }
}
copyLatexMathAssets(path.join(output,'math'));
const xml=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
await writeFile(path.join(output,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(url=>`<url><loc>${xml(url)}</loc></url>`).join('\n')+'\n</urlset>\n');
await writeFile(path.join(output,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml',site).href}\n`);
await writeFile(path.join(output,'.nojekyll'),'');
await writeFile(path.join(output,'storage.json'),JSON.stringify(storage,null,2)+'\n');
async function outputBytes(dir:string):Promise<number>{let total=0;for(const item of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);total+=item.isDirectory()?await outputBytes(file):(await stat(file)).size;}return total;}
const size=await outputBytes(output);
if(size>900_000_000)throw new Error('网站发布包超过 900 MB 安全阈值，请将 content 内的大附件迁至 Releases 后再发布。');
console.log(`Storage: ${storage.usedBytes} / ${storage.totalBytes} bytes; maximum file: ${storage.maxFileBytes} bytes; site output: ${size} bytes.`);
console.log(`Built ${urls.length+3} pages, ${items.length} published entries → ${config.siteUrl}`);

