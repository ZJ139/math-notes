import React from 'react';
import catalog from './reading-practice.json';

export const readingPracticeUrl = '/english/reading-practice/';
export const readingPracticePdf = '/files/english/reading-practice/distractors-01.pdf';
export const readingExercises = catalog;
type Exercise = (typeof catalog)[number];
export const exerciseUrl = (exercise: Exercise) => readingPracticeUrl + exercise.id + '/';

function Breadcrumb({exercise}: {exercise?: Exercise}) {
  return <div className="breadcrumb">
    <a href="/english/">英语</a><span>/</span>
    {exercise ? <><a href={readingPracticeUrl}>阅读训练</a><span>/</span><span>{exercise.year} 年 · Text {exercise.text}</span></> : <span>阅读训练</span>}
  </div>;
}

export function ReadingPracticeIndex() {
  return <section className="wrap collection-page reading-trainer">
    <header className="page-heading"><Breadcrumb/><h1>阅读训练</h1></header>
    <section aria-labelledby="training-set">
      <h2 id="training-set">高难度阅读干扰项专项训练</h2>
      <p>6 篇 · 12 道真题 · 建议 30 分钟。每篇单独提交，完成后可查看定位句、逐项解析和词汇。</p>
      <ol className="rt-index">{catalog.map(exercise => <li key={exercise.id}>
        <div><span>{exercise.year} 年 · Text {exercise.text}</span><h3>{exercise.title}</h3><small>原题 {exercise.questions.map(q => q.number).join('、')}</small></div>
        <a className="button" href={exerciseUrl(exercise)} aria-label={exercise.title+'，开始作答'}>开始作答</a>
      </li>)}</ol>
      <a href={readingPracticePdf} download>下载完整 PDF（含答案与错因记录表）</a>
    </section>
  </section>;
}

function Vocabulary({exercise}: {exercise: Exercise}) {
  return <section className="rt-vocabulary" aria-labelledby="vocabulary"><h2 id="vocabulary">篇末词汇</h2>
    {(['core','extra'] as const).map(group => <section key={group}>
      <h3>{group === 'core' ? '必须掌握' : '值得记忆'}</h3>
      <dl>{exercise.vocabulary[group].map(([word,meaning,usage]) => <div key={word}>
        <dt lang="en">{word}</dt><dd><strong>{meaning}</strong><br/>{usage}</dd>
      </div>)}</dl>
    </section>)}
  </section>;
}

function Review({exercise}: {exercise: Exercise}) {
  const evidence = exercise.paragraphs.flatMap(p => p.parts.map(part => ({...part,paragraph:p.number})))
    .filter(part => part.mark !== undefined);
  return <section data-review="" hidden aria-labelledby="review-heading">
    <h2 id="review-heading" tabIndex={-1}>作答结果与解析</h2>
    <p className="rt-score" data-score="" role="status"/>
    {exercise.questions.map(q => <section className="rt-analysis" key={q.number} id={'review-'+q.number} tabIndex={-1} data-key={q.answer} data-number={q.number}>
      <h3>第 {q.number} 题</h3>
      <p><span data-your-answer=""/>　正确选项 <strong>{q.answer}</strong></p>
      <p>{q.translation}</p>
      <nav className="rt-evidence-links" aria-label={'第 '+q.number+' 题原文定位'}><strong>原文定位</strong>
        {evidence.filter(part => part.question===q.number).map(part =>
          <a key={part.mark} href={'#evidence-'+part.mark}>{part.mark}° · P{part.paragraph}</a>)}
      </nav>
      <p>{q.logic}</p>
      <ul className="rt-reasons">{q.options.map(option => <li key={option.letter}>
        <strong>{option.letter} · {option.letter===q.answer?'正确':'错误'}</strong>　<span lang="en">{option.text}</span>
        <p>{option.translation} {option.reason}</p>
      </li>)}</ul>
      <p className="rt-contrast"><strong>换个问法</strong>　{q.contrast}</p>
      <a href={exercise.source+'#q'+q.number}>查看本站第 {q.number} 题原解析</a>
    </section>)}
    <Vocabulary exercise={exercise}/>
  </section>;
}

export function ReadingPracticePage({exercise}: {exercise: Exercise}) {
  const next = catalog[catalog.indexOf(exercise)+1];
  return <article className="wrap collection-page reading-trainer" data-reading-exercise={exercise.id}>
    <header className="page-heading"><Breadcrumb exercise={exercise}/><h1>{exercise.title}</h1>
      <p>{exercise.year} 年考研英语一 · Text {exercise.text} · 原题 {exercise.questions.map(q => q.number).join('、')}</p>
    </header>
    <section className="rt-passage" aria-label="真题原文节选">{exercise.paragraphs.map(p => <p key={p.number} lang="en">
      <span className="rt-paragraph">P{p.number}</span>{' '}
      {p.parts.map((part,i) => part.mark ? <span key={i} id={'evidence-'+part.mark} className="rt-evidence" tabIndex={-1}>{part.text}<a
        data-marker="" hidden className="rt-marker" href={'#review-'+part.question}
        aria-label={'定位 '+part.mark+'，返回第 '+part.question+' 题解析'}>{part.mark}°</a></span> : <React.Fragment key={i}>{part.text}</React.Fragment>)}
    </p>)}</section>
    <form className="rt-form" autoComplete="off">
      {exercise.questions.map(q => <fieldset key={q.number} data-question={q.number}>
        <legend lang="en">{q.number}. {q.stem}</legend>
        {q.options.map(option => <label className="rt-option" key={option.letter}>
          <input type="radio" name={'q'+q.number} value={option.letter} required/>
          <span lang="en"><strong>{option.letter}.</strong> {option.text}</span>
        </label>)}
      </fieldset>)}
      <button className="button" type="submit" disabled data-submit="">提交本篇</button>
      <button className="button" type="button" hidden data-retry="">重新作答本篇</button>
      <noscript><p>请启用 JavaScript 后提交作答，或<a href={readingPracticePdf}>打开 PDF 练习</a>。</p></noscript>
    </form>
    <Review exercise={exercise}/>
    <nav className="rt-bottom" aria-label="训练导航"><a href={readingPracticeUrl}>返回阅读训练</a>{next && <a href={exerciseUrl(next)}>下一篇 · {next.year} 年 Text {next.text}</a>}</nav>
  </article>;
}
