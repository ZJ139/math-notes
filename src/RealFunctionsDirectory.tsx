import type {PublicEntry} from './content';
import {entryUrl} from './model';
import Markdown from './Markdown';

export const realFunctionsUrl = '/math/real-functions/';
export const realFunctionsTitle = '实变函数';

type Chapter = {
  title: string;
  pages: string;
  description: string;
  sections: [title: string, firstPage: number][];
};

const chapters: Chapter[] = [
  {
    title: '集合运算、集合的势、集类', pages: '1–97',
    description: '用可列运算描述点集，用势估计例外点，用完备性和 Cantor 构造研究实函数。',
    sections: [
      ['集合运算及其性质', 1], ['集合的势（基数）、用势研究实函数', 17],
      [String.raw`集类：环、$\sigma$ 环、代数、$\sigma$ 代数、单调类`, 42],
      [String.raw`$\mathbb R^n$ 中的拓扑：开集、闭集、$G_\delta$ 集、$F_\sigma$ 集、Borel 集`, 50],
      ['Baire 定理及其应用', 67], ['闭集上连续函数的延拓定理、Cantor 疏朗三分集、Cantor 函数', 80],
    ],
  },
  {
    title: '测度理论', pages: '98–173',
    description: '从环上的测度出发，经外测度完成延拓，再研究唯一性与具体测度。',
    sections: [
      ['环上的测度、外测度、测度的延拓', 98], [String.raw`$\sigma$ 有限测度、测度延拓的惟一性定理`, 113],
      ['Lebesgue 测度、Lebesgue–Stieltjes 测度', 123],
      ['Jordan 测度、Hausdorff 测度', 147], ['测度的典型实例和应用', 165],
    ],
  },
  {
    title: '积分理论', pages: '174–379',
    description: '§3.1–3.2 建立可测性与函数列收敛的语言。§3.3–3.5 构造积分，研究极限与积分换序，并与 Riemann 积分比较。§3.6–3.9 转向变差、乘积空间、微分与 Stieltjes 积分。',
    sections: [
      ['可测空间、可测函数', 174], ['测度空间、可测函数的收敛性、Lebesgue 可测函数的结构', 185],
      ['积分理论', 208], ['积分收敛定理（Lebesgue 控制收敛定理、Levi 引理、Fatou 引理）', 228],
      ['Lebesgue 可积函数与连续函数、Lebesgue 积分与 Riemann 积分', 244],
      ['单调函数、有界变差函数、Vitali 覆盖定理', 256], ['重积分与累次积分、Fubini 定理', 283],
      ['变上限积分的导数、绝对（全）连续函数与 Newton–Leibniz 公式', 304],
      ['Lebesgue–Stieltjes 积分、Riemann–Stieltjes 积分', 343],
    ],
  },
  {
    title: '函数空间', pages: '380–423',
    description: '把积分用来度量函数之间的距离，再借助内积研究正交展开。',
    sections: [[String.raw`$\mathcal L^p$ 空间`, 380], [String.raw`$\mathcal L^2$ 空间`, 403]],
  },
];

export function RealFunctionsDirectory({items}: {items: PublicEntry[]}) {
  const notes = new Map(items.filter(e => e.sourcePath.startsWith('notes/real-functions/'))
    .map(e => [e.sourcePath, e]));
  return <article className="wrap article-shell">
    <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/math/">数学</a></div>
    <div className="reading-page">
      <header className="article-header"><h1>{realFunctionsTitle}</h1><p>徐森林、薛春华《实变函数论》</p></header>
      <div className="prose">
        <p>前言把学习分为三个层次。本讲义依第三层编写。读完一节应能独立重建主要证明，并用同一种构造处理新问题；一般练习之后，须继续研习各章复习题中的全部难题。页码均指教材印刷页。</p>
        <nav aria-label="全书章节" className="lecture-toc-shortcuts">
          {chapters.map((c, i) => <a key={c.title} href={'#chapter-' + (i + 1)}>第 {i + 1} 章</a>)}
        </nav>
        {chapters.map((c, i) => {
          const n = i + 1;
          const prefix = 'notes/real-functions/ch' + String(n).padStart(2, '0');
          const practice = notes.get(prefix + '-practice.md');
          const sectionCount = c.sections.filter((_, j) => notes.has(prefix + '-s' + (j + 1) + '.md')).length;
          return <section key={n} id={'chapter-' + n}>
            {n === 4 ? <Markdown body={String.raw`## 第 4 章　函数空间 $\mathcal L^p$（$p\geq 1$）`}/> : <h2>第 {n} 章　{c.title}</h2>}
            <p>教材第 {c.pages} 页 · {sectionCount ? sectionCount + ' 节讲义' : '教材目录，讲义待编'}。</p>
            <p>{c.description}</p>
            <Markdown body={c.sections.map(([title, firstPage], j) => {
              const sourcePath = prefix + '-s' + (j+1) + '.md';
              const note = notes.get(sourcePath);
              const number = n + '.' + (j+1);
              const label = '§' + number + (number === '2.4' || number === '3.9' ? '∗' : '') + '　' + title;
              return '- ' + (note ? '[' + label + '](' + entryUrl(note) + '/)' : label) + '（第 ' + firstPage + ' 页）';
            }).join('\n')}/>
            {n === 1 && <Markdown body={String.raw`**贯穿本章的问题**　给定一个函数，它的例外点集能有多大？§1.2 用有理数给单调函数的跳跃点编号，得到至多可数；§1.4 用振幅的水平集描述不连续点，得到 $F_\sigma$ 集；§1.5 加上连续函数列逐点收敛的条件，又得到第一纲。§1.6 的 Cantor 集则有连续势，同时疏朗且长度为零。这些结论分别控制点的数目、拓扑结构和长度。`}/>}
            {n === 2 && <p><strong>贯穿本章的问题</strong>　区间上的长度能决定哪些集合的测度？先检验覆盖费用与分割判据，再追踪延拓所需的有限性。章末用这些结论研究差集的内点、临界值的零测性与导函数的间断点。</p>}
            {practice && <p><a href={entryUrl(practice) + '/'}>{practice.title}</a>
              {' · '}<a href={'/files/notes/real-functions/real-functions-chapter-' + n + '.pdf'} download>下载第{['一','二','三','四'][i]}章讲义 PDF</a></p>}
          </section>;
        })}
        <p className="muted">∗ 沿用教材目录中的选读标记。</p>
      </div>
    </div>
  </article>;
}
