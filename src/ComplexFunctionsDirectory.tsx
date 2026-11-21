import type {PublicEntry} from './content';
import {entryUrl} from './model';
import Markdown from './Markdown';

export const complexFunctionsUrl = '/math/complex-functions/';
export const complexFunctionsTitle = '复变函数';

type Chapter = {title: string; pages: string; description: string; sections: [string, number][]};
export const complexChapters: Chapter[] = [
  {title:'复数与复变函数',pages:'1–26',description:'从复数运算、球面表示和完备性出发，建立紧性、连通性与连续函数的基础。',sections:[['复数的定义及其运算',1],['复数的几何表示',4],['扩充平面与复数的球面表示',11],['复数列的极限',13],['开集、闭集和紧集',15],['曲线和域',21],['复变函数的极限和连续性',24]]},
  {title:'全纯函数',pages:'27–67',description:'复导数把实微分限制为旋转伸缩；Cauchy–Riemann 方程连接分析、几何与初等全纯函数。',sections:[['复变函数的导数',27],['Cauchy–Riemann 方程',29],['导数的几何意义',36],['初等全纯函数',39],['分式线性变换',53]]},
  {title:'全纯函数的积分表示',pages:'68–102',description:'由 Cauchy 积分定理建立积分表示，并进入非齐次公式与一维非齐次 Cauchy–Riemann 方程。',sections:[['复变函数的积分',68],['Cauchy 积分定理',73],['全纯函数的原函数',82],['Cauchy 积分公式',85],['Cauchy 积分公式的一些重要推论',92],['非齐次 Cauchy 积分公式',94],[String.raw`一维 $\bar\partial$ 问题的解`,99]]},
  {title:'全纯函数的 Taylor 展开及其应用',pages:'103–140',description:'用紧集上的一致控制连接函数列、幂级数、零点、辐角原理与最大模原理。',sections:[['Weierstrass 定理',103],['幂级数',110],['全纯函数的 Taylor 展开',118],['辐角原理和 Rouché 定理',124],['最大模原理和 Schwarz 引理',134]]},
  {title:'全纯函数的 Laurent 展开及其应用',pages:'141–193',description:'由局部主部研究奇点和残数，再通过构造解决预定主部、零点及插值问题。',sections:[['全纯函数的 Laurent 展开',141],['孤立奇点',146],['整函数与亚纯函数',151],['残数定理',154],['利用残数定理计算定积分',161],['一般域上的 Mittag–Leffler 定理、Weierstrass 因子分解定理和插值定理',183],['特殊域上的 Mittag–Leffler 定理、Weierstrass 因子分解定理和 Blaschke 乘积',187]]},
  {title:'全纯开拓',pages:'194–209',description:'研究局部函数元如何沿路径延拓，以及路径改变时单值性所需的条件。',sections:[['Schwarz 对称原理',194],['幂级数的全纯开拓',201],['多值全纯函数与单值性定理',206]]},
  {title:'共形映射',pages:'210–234',description:'由正规族的紧性得到 Riemann 映射，再研究边界对应和多边形映射公式。',sections:[['正规族',210],['Riemann 映射定理',214],['边界对应定理',218],['Schwarz–Christoffel 公式',223]]},
  {title:'调和函数与次调和函数',pages:'235–252',description:'以平均值与极值原理为主线，处理边值问题并推广到次调和函数。',sections:[['平均值公式与极值原理',235],['圆盘上的 Dirichlet 问题',240],['上半平面的 Dirichlet 问题',244],['次调和函数',247]]},
  {title:'多复变数全纯函数与全纯映射',pages:'253–278',description:'比较单复变与多复变：从多圆柱积分和幂级数走向全纯映射、自同构与刚性。',sections:[['多复变数全纯函数的定义',253],['多圆柱的 Cauchy 积分公式',258],['全纯函数在 Reinhardt 域上的展开式',262],['全纯映射的导数',267],['Cartan 定理',270],['球的全纯自同构和 Poincaré 定理',273]]},
];

export function ComplexFunctionsDirectory({items}:{items:PublicEntry[]}) {
  const notes = new Map(items.filter(e=>e.sourcePath.startsWith('notes/complex-functions/')).map(e=>[e.sourcePath,e]));
  return <article className="wrap article-shell">
    <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/math/">数学</a></div>
    <div className="reading-page">
      <header className="article-header"><h1>{complexFunctionsTitle}</h1><p>史济怀、刘太顺《复变函数》</p></header>
      <div className="prose">
        <p>沿教材九章、四十八节建立讲义。以理解结构、重建证明和独立解决综合题为目标；沿用教材符号，保留定义、定理、性质、推论，定理和性质均给出证明。习题按原节次、原题号归入各章，只列原题；本书没有独立的章末复习题。页码均为上传教材的印刷页。</p>
        <p>全书以 Cauchy 的积分理论、Weierstrass 的级数理论和 Riemann 的几何理论为主线，同时保留教材的一维非齐次 Cauchy–Riemann 方程、次调和函数和多复变内容。各节说明关键构造、适用条件及与前后内容的联系。</p>
        <nav className="lecture-toc-shortcuts" aria-label="全书章节">{complexChapters.map((c,i)=><a key={c.title} href={'#chapter-'+(i+1)}>第 {i+1} 章</a>)}</nav>
        {complexChapters.map((c,i)=>{
          const n=i+1,prefix='notes/complex-functions/ch'+String(n).padStart(2,'0');
          const count=c.sections.filter((_,j)=>notes.has(prefix+'-s'+(j+1)+'.md')).length;
          const practice=notes.get(prefix+'-practice.md');
          const pdf=notes.get(prefix+'-s1.md')?.attachmentPath;
          return <section key={n} id={'chapter-'+n}>
            <h2>第 {n} 章　{c.title}</h2>
            <p>教材第 {c.pages} 页 · {count ? count+' / '+c.sections.length+' 节讲义已编' : '教材目录，讲义待编'}。</p>
            <p>{c.description}</p>
            <Markdown body={c.sections.map(([title,page],j)=>{
              const note=notes.get(prefix+'-s'+(j+1)+'.md');
              const label='§'+n+'.'+(j+1)+'　'+title;
              return '- '+(note?'['+label+']('+entryUrl(note)+'/)' : label)+'（第 '+page+' 页）';
            }).join('\n')}/>
            {practice&&<p><a href={entryUrl(practice)+'/'}>{practice.title}</a>{pdf&&<> · <a href={'/files/'+pdf} download>下载第 {n} 章讲义与习题 PDF</a></>}</p>}
            {n===6&&count>0&&<p>第六章含三节讲义、19 个教材编号条目、28 道原题及九幅教材图，附逐节索引、导航和 PDF。补全可求长曲线拼接、单叶反射的同侧条件、圆环分类与单值性证明；Picard 小定理的两种证明在已发布前六章内闭合。</p>}
            {n===5&&count>0&&<p>第五章含七节讲义、54 个教材编号条目与 58 道原题，另含 31 个积分小题及教材围道图。补证 Picard 大定理，明确主值、分支、一般域与单连通域的区别，以及按围道分组的收敛顺序；附逐节索引和 PDF。</p>}
            {n===4&&count>0&&<p>第四章含五节讲义、47 个教材编号条目和 91 道原题，附定理索引、逐节导航及 PDF。由局部一致收敛建立 Taylor 理论、零点计数和 Schwarz–Pick 估计；全部定理与性质附证明，原题疑义独立校注。</p>}
            {n===3&&count>0&&<p>第三章含七节讲义与 49 道教材原题，附可点击定理索引、逐节导航和 PDF。完整证明积分表示及其推论，补证一般可求长边界与非齐次方程的整体存在性；原书积分收敛条件和数值疑义另列校勘。</p>}
            {n===2&&count>0&&<p>第二章含五节讲义与 74 道教材原题，附定理索引、逐节导航及可下载 PDF。讲义补足 Cauchy–Riemann 判据的正则性、全纯高阶可导的证明、分支条件与广义圆的定向；习题保留原题，疑义另列校勘。</p>}
            {n===1&&count>0&&<p>第一章含七节讲义与 63 道习题。一般 Jordan 曲线定理的补充证明放在 §1.6，并明确列出奇异同调与 Mayer–Vietoris 正合列的前置依赖；其余本章结论在实分析基础上直接证明。</p>}
          </section>;
        })}
      </div>
    </div>
  </article>;
}
