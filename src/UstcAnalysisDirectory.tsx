import type {PublicEntry} from './content';
import {entryUrl} from './model';
import {exerciseChapters} from './ustcExerciseChapters';

export const ustcAnalysisUrl = '/math/ustc-analysis/';
export const ustcAnalysisTitle = '数学分析-科大';

const ustcLevels = [
  { title: '第一层　分析理论基础', topics: [
    { id: 'limits', exercises: [1, 2, 8], title: 'Ⅰ　极限、连续性与空间结构' },
  ] },
  { title: '第二层　数学分析核心运算', topics: [
    { id: 'differentiation', exercises: [3, 4, 9], title: 'Ⅱ　微分理论与局部分析' },
    { id: 'integration', exercises: [5, 6, 7, 10, 16, 18], title: 'Ⅲ　积分理论与累积分析' },
  ] },
  { title: '第三层　无穷过程与多元综合理论', topics: [
    { id: 'series', exercises: [14, 15, 17], title: 'Ⅳ　级数、函数逼近与 Fourier 分析' },
    { id: 'fields', exercises: [11, 12, 13], title: 'Ⅴ　几何积分与向量场理论' },
  ] },
];

function ExerciseLinks({chapters}: {chapters: number[]}) {
  return <details className="ustc-exercises">
    <summary>按原节打开配套习题</summary>
    {chapters.map(number => {
      const {title, sections} = exerciseChapters[number];
      const volume = number < 10 ? '上册' : '下册';
      const file = number < 10 ? '科大数分习题-v1.pdf' : '科大数分习题-v2(2).pdf';
      return <div key={number}>
        <h4>{volume} · 第 {number} 章　{title}</h4>
        <ul>{sections.map(([label, page], i) => <li key={i}>
          <a href={'/files/problems/' + encodeURIComponent(file) + '#page=' + page}>
            {number}.{i + 1}　{label}
          </a>
        </li>)}</ul>
      </div>;
    })}
  </details>;
}

export function UstcAnalysisDirectory({items}: {items: PublicEntry[]}) {
  const notes = items.filter(entry => entry.section === 'notes' && entry.category.startsWith('ustc-analysis/'))
    .sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
  return <article className="wrap article-shell">
    <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/math/">数学</a></div>
    <div className="reading-page">
      <header className="article-header"><h1>{ustcAnalysisTitle}</h1>
        <p>常庚哲、史济怀《数学分析教程》第四版</p></header>
      <nav className="prose" aria-label="科大数学分析专题">
        {ustcLevels.map(level => <section key={level.title}><h2>{level.title}</h2>
          {level.topics.map(topic => {
            const chapters = notes.filter(entry => entry.category === 'ustc-analysis/' + topic.id);
            return <section key={topic.id} id={topic.id}><h3>{topic.title}</h3>
              {chapters.length ? <ol>{chapters.map(entry => <li key={entry.id}>
                <a href={entryUrl(entry) + '/'}>{entry.title}</a>
              </li>)}</ol> : <p className="muted">知识讲义待编入</p>}
              <ExerciseLinks chapters={topic.exercises}/>
            </section>;
          })}
        </section>)}
      </nav>
    </div>
  </article>;
}
