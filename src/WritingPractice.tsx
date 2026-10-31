import React from 'react';
import catalog from './writing-practice.json';

export const practiceIndexUrl='/english/writing-practice/';
export const practiceYearUrl=(year:number)=>`${practiceIndexUrl}${year}/`;
export const practiceExams=catalog;

function Breadcrumb({year}:{year?:number}) {
  return <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/english/">英语</a><span>/</span>{year?<><a href={practiceIndexUrl}>考研作文练习</a><span>/</span><span>{year}</span></>:<span>考研作文练习</span>}</div>;
}

export function WritingPracticeIndex(){
  return <section className="wrap collection-page practice-index">
    <header className="page-heading"><Breadcrumb/><h1>考研作文练习</h1><p>2007—2026 · 英语一 · 小作文与大作文</p></header>
    <nav className="practice-years" aria-label="作文练习年份">{practiceExams.map(exam=><a key={exam.year} href={practiceYearUrl(exam.year)}><strong>{exam.year}</strong><span>小作文 · {exam.shortTitle}</span><span>大作文 · {exam.longTitle}</span></a>)}</nav>
    <p className="practice-note">2007—2009 为分卷前考研英语。</p>
    <a className="text-link" href="/english/writing/">作文精讲与范文</a>
  </section>;
}

function AnswerPanel({part,version}:{part:'a'|'b';version:'original'|'revision'}){
  const id=`${part}-${version}`,label=version==='original'?'第一作答区':'第二作答区',kind=part==='a'?'小作文':'大作文';
  return <section className="practice-answer" data-answer={id} aria-labelledby={`${id}-heading`}>
    <header className="answer-heading"><h3 className="sr-only" id={`${id}-heading`}>{kind}{label}</h3><span data-word-count="" aria-label={`${kind}${label}词数`}>0 词</span></header>
    <label className="sr-only" htmlFor={id}>{kind}{label}</label>
    <textarea id={id} className={`answer-paper answer-paper-${part}`} lang="en" spellCheck maxLength={30000} aria-describedby={`${id}-status`} disabled/>
    <div className="answer-controls"><button type="button" className="button" data-save="" aria-label={`保存${kind}${label}`} disabled>保存</button><label className="button upload-handwriting" htmlFor={`${id}-upload`}>上传图片<input id={`${id}-upload`} type="file" aria-label={`上传${kind}${label}手写图片`} accept="image/jpeg,image/png,image/webp,image/gif" multiple disabled/></label></div>
    <p id={`${id}-status`} className="answer-status" data-status="" role="status">正在读取练习……</p>
    <div className="answer-images" data-images="" aria-label={`${kind}${label}手写图片`}/>
  </section>;
}

export function WritingPracticePage({year}:{year:number}){
  const exam=practiceExams.find(item=>item.year===year)!;
  const pdf='/files/'+exam.sourcePdf.split('/').map(encodeURIComponent).join('/')+'#page='+exam.sourcePage;
  return <section className="wrap collection-page practice-page" data-writing-practice="" data-year={year}>
    <header className="page-heading"><Breadcrumb year={year}/><div className="practice-title"><h1>{year} 年 · 考研作文练习</h1><nav aria-label="切换练习年份">{year>2007&&<a href={practiceYearUrl(year-1)}>上一年</a>}<a href={practiceIndexUrl}>全部年份</a>{year<2026&&<a href={practiceYearUrl(year+1)}>下一年</a>}</nav></div></header>
    <div className="practice-toolbar"><button type="button" className="button" data-save-all="" disabled>保存全部</button><button type="button" className="button" data-export="" disabled>导出备份</button><label className="button" htmlFor="practice-import">导入备份<input className="practice-file" id="practice-import" type="file" accept=".json,application/json" disabled/></label><a className="text-link" href={pdf} target="_blank" rel="noopener">查看原卷</a></div>
    <details className="practice-help"><summary>保存与图片说明</summary><p>文字和图片自动保存在当前浏览器。换设备或清理浏览器数据前，请先导出备份。每个作答区最多上传 4 张 JPG、PNG、WebP 或 GIF 图片，每张不超过 5 MB。</p></details>
    <p className="practice-feedback" data-feedback="" role="status" aria-live="polite"/>
    <noscript><p>请启用 JavaScript 后编辑、保存与上传图片；原题与原卷仍可直接阅读。</p></noscript>
    {(['a','b'] as const).map(part=><section className="practice-part" id={`part-${part}`} key={part} aria-labelledby={`part-${part}-heading`}>
      <header className="practice-part-heading"><div><span>Part {part.toUpperCase()} · {part==='a'?'10':'20'} 分</span><h2 id={`part-${part}-heading`}>{part==='a'?'小作文':'大作文'} · {part==='a'?exam.shortTitle:exam.longTitle}</h2></div><span>{part==='a'?(year===2017?'练习参考：约 100 词':'约 100 词'):'160—200 词'}</span></header>
      <div className="practice-prompt"><div className="prompt-copy" lang="en">{part==='a'?exam.shortText:exam.longText}</div>{part==='b'&&<figure className="prompt-figure"><img src={`/writing-prompts/${exam.figureImage}`} alt={exam.figureAlt} width={exam.figureImageSize.width} height={exam.figureImageSize.height} loading="lazy"/></figure>}
        <details className="prompt-scan"><summary>题干影印</summary><img src={`/writing-prompts/${part==='a'?exam.shortPromptImage:exam.longPromptImage}`} alt={`${year}年${part==='a'?'小作文':'大作文'}原题题干影印，文字内容见上方`} width={(part==='a'?exam.shortImageSize:exam.longImageSize).width} height={(part==='a'?exam.shortImageSize:exam.longImageSize).height} loading="lazy"/></details>
      </div>
      <div className="comparison-heading"><button type="button" className="text-button" data-copy={part} aria-label={`将${part==='a'?'小作文':'大作文'}第一作答区复制到第二作答区`} disabled>复制到第二栏</button></div>
      <div className="answer-comparison"><AnswerPanel part={part} version="original"/><AnswerPanel part={part} version="revision"/></div>
    </section>)}
    <p className="year-return"><a href={practiceIndexUrl}>全部年份</a> · <a href="/english/writing/">作文精讲</a></p>
  </section>;
}
