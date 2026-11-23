import React from 'react';

export const pendingMathCourses = [
  {title: '抽象代数', url: '/math/abstract-algebra/'},
  {title: '微分几何', url: '/math/differential-geometry/'},
] as const;

export const pendingMathCourseDescription = '栏目已创建，等待上传参考教材后搭建内容。';

export function PendingMathCourse({title}:{title:string}) {
  return <article className="wrap article-shell">
    <div className="breadcrumb"><a href="/">首页</a><span>/</span><a href="/math/">数学</a></div>
    <div className="reading-page">
      <header className="article-header"><h1>{title}</h1><p>等待参考教材</p></header>
      <div className="prose"><p>{pendingMathCourseDescription}</p></div>
      <div className="article-end"><a href="/math/">返回数学总览</a></div>
    </div>
  </article>;
}
