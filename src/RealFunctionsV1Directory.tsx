import type {PublicEntry} from './content';
import {entryUrl} from './model';

export const realFunctionsV1Url = '/math/real-functions-v1/';
export const realFunctionsV1Title = '实变函数-v1';

// Numbering follows the uploaded four-page knowledge framework, not the
// original textbook. Publication state is derived only from real entries.
export const realFunctionsV1Chapters = [
  {title:'集合与点集',sections:[
    ['集合及其运算','集合与表示；子集与幂集；并、交、差、补；De Morgan 公式；直积；集合列上下极限；单调集列；特征函数'],
    ['映射与基数','映射、像与原像；复合与逆映射；对等与势的比较；Cantor–Bernstein 定理；可数集及有理数、代数数；实数不可数性与连续统；Cantor 定理'],
    ['ℝⁿ 中的点集','距离与邻域；有界集、区间与方体；内点、外点、边界点、聚点与孤立点；内部、导集、闭包、边界；开集、闭集、完全集；Bolzano–Weierstrass、Cantor 闭集套与 Heine–Borel 定理；点集间距离'],
    ['点集的结构','直线开集的构成区间；闭集与完全集的余区间；ℝⁿ 中开集；Cantor 三分集；Fσ 集、Gδ 集与 Borel σ-代数'],
    ['点集上的连续函数与纲','点集上的连续函数；Tietze 扩张；稠密与疏朗；第一纲、第二纲；Baire 纲定理'],
  ]},
  {title:'Lebesgue 测度',sections:[
    ['Lebesgue 外测度','定义；非负性、单调性、可数次可加性、平移不变性、距离可加性；区间与方体的外测度'],
    ['可测集','Carathéodory 条件；σ-代数；可数可加性；单调集列的测度连续性；零测集与完备性'],
    ['可测集的结构','Borel 集可测性；开闭集逼近；Gδ 集、Fσ 集；正则性'],
    ['测度的变换性质','平移与反射；相似变换；非奇异线性变换'],
    ['不可测集','选择公理；Vitali 集；非 Borel 的 Lebesgue 可测集'],
  ]},
  {title:'可测函数',sections:[
    ['可测函数的定义与性质','广义实值函数；等价刻画；四则运算、确界、上下极限与极限；复合；几乎处处；简单函数与逼近'],
    ['可测函数列的收敛','几乎处处、一致、近一致与依测度收敛；Egorov 定理；依测度 Cauchy 列；Lebesgue 收敛定理；Riesz 子列定理；收敛关系'],
    ['可测函数的构造','Lusin 定理；连续函数逼近；Borel 可测函数'],
  ]},
  {title:'Lebesgue 积分',sections:[
    ['非负可测函数的积分','简单函数积分；非负积分；Levi 单调收敛；非负级数逐项积分；Fatou 引理'],
    ['一般可测函数的积分','可积性；线性、单调性、绝对可积性、可数可加性；积分绝对连续性；控制收敛、有界收敛；逐项积分；积分号下取极限与求导'],
    ['可积函数的逼近','简单函数、阶梯函数与紧支连续函数逼近；平均连续性；Riemann–Lebesgue 引理'],
    ['与 Riemann 积分的关系','Riemann 可积的 Lebesgue 判据；两种积分的关系；反常积分'],
    ['重积分与累次积分','乘积空间与截面可测性；下方图形；Tonelli、Fubini 定理；交换积分次序；卷积与分布函数'],
  ]},
  {title:'微分与不定积分',sections:[
    ['单调函数的可微性','Vitali 覆盖；Dini 导数；Lebesgue 单调函数可微定理；Fubini 逐项微分'],
    ['有界变差函数','全变差、正负变差；基本性质；Jordan 分解；可微性；可求长曲线'],
    ['不定积分的微分','不定积分可微性；Hardy–Littlewood 极大函数；Lebesgue 微分定理、Lebesgue 点与密度定理'],
    ['绝对连续函数','定义与性质；不定积分；Newton–Leibniz、分部积分与换元；奇异函数与 Cantor 函数；有界变差函数的绝对连续、跳跃与奇异部分'],
  ]},
  {title:'Lᵖ 空间',sections:[
    ['Lᵖ 空间的定义','1≤p<∞ 的 Lᵖ 空间；本性上确界与 L∞；Lᵖ 范数'],
    ['基本不等式','Young、Hölder、Minkowski、Jensen 不等式；Lᵖ 包含关系'],
    ['Lᵖ 空间的性质','范数收敛；Riesz–Fischer 完备性；稠密子集与可分性；收敛关系；卷积与光滑逼近'],
    ['L² 空间','内积与 Hilbert 空间；正交系；Bessel、Parseval；完全正交系；Fourier 系数的 Riesz–Fischer 定理'],
    ['Lᵖ 空间的对偶','有界线性泛函；Riesz 表示与对偶空间'],
  ]},
  {title:'抽象测度与积分',sections:[
    ['集类','环、代数、σ-环、σ-代数；单调类定理；π-λ 定理'],
    ['测度空间','测度空间；外测度与 Carathéodory 条件；扩张定理；完备化；Lebesgue–Stieltjes 测度'],
    ['抽象积分','可测函数；抽象积分；Levi、Fatou 与控制收敛；乘积测度与 Fubini 定理'],
    ['符号测度','Hahn、Jordan 分解；绝对连续与互相奇异；Radon–Nikodym 与 Lebesgue 分解'],
  ]},
] as const;

export function RealFunctionsV1Directory({items}:{items:PublicEntry[]}) {
  const notes=new Map(items.filter(e=>e.sourcePath.startsWith('notes/real-functions-v1/')).map(e=>[e.sourcePath,e]));
  const sections=realFunctionsV1Chapters.flatMap((chapter,i)=>chapter.sections.map(([title,topics],j)=>({
    chapter:i+1,number:`${i+1}.${j+1}`,title,topics,
    note:notes.get(`notes/real-functions-v1/ch${String(i+1).padStart(2,'0')}-s${j+1}.md`),
  })));
  const completed=sections.filter(s=>s.note);
  const next=sections.find(s=>!s.note);
  return <article className="wrap article-shell">
    <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/math/">数学</a></div>
    <div className="reading-page">
      <header className="article-header"><h1>{realFunctionsV1Title}</h1><p>以《实变函数知识框架》为目次 · 徐森林、薛春华《实变函数论》</p></header>
      <div className="prose">
        <p>从集合与点集出发，依次学习测度、可测函数、积分、微分、函数空间与抽象测度。每次按目次推进一个编号小节；每节将定义、证明背后的想法、完整证明、教材精选例题及练习连成可独立阅读的讲义。数学公式采用 CM bea，中文正文与标题沿用 Fandol 宋体。</p>
        <p>当前完成 {completed.length} / {sections.length} 节。{next&&<>下一节：<a href={'#section-'+next.number.replace('.','-')}>{next.number} {next.title}</a>。</>}</p>
        <p><a href="/math/real-functions/">对照原“实变函数”栏目</a>。v1 的编号以七章框架为准，教材原编号在各节正文中注明。</p>
        <h2>全书目次</h2>
        <nav className="lecture-toc-shortcuts" aria-label="实变函数-v1章节目次">{realFunctionsV1Chapters.map((c,i)=><a key={c.title} href={'#chapter-'+(i+1)}>第{i+1}章</a>)}</nav>
        {realFunctionsV1Chapters.map((chapter,i)=><section key={chapter.title} id={'chapter-'+(i+1)}>
          <h2>第{i+1}章 {chapter.title}</h2>
          {sections.filter(s=>s.chapter===i+1).map(s=><section key={s.number} id={'section-'+s.number.replace('.','-')}>
            <h3>{s.note?<a href={entryUrl(s.note)+'/'}>{s.number} {s.title}</a>:<>{s.number} {s.title}</>}</h3>
            <p>{s.note?'已完成 · 详细证明、思路与例题':'待编写'}{s.note?.attachmentPath&&<> · <a href={'/files/'+s.note.attachmentPath} download>下载本节 PDF</a></>}</p>
            <p>{s.topics}。</p>
          </section>)}
        </section>)}
      </div>
    </div>
  </article>;
}
