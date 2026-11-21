// Reading aids are progressive enhancements; article text and anchors stay intact.
export function ReadingTools() {
  return <>
    <div className="reading-progress" data-reading-progress="" role="progressbar" aria-label="文章阅读进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} hidden><span/></div>
    <button className="back-to-top" data-back-to-top="" type="button" hidden>回到顶部</button>
  </>;
}

export function ReadingOutline() {
  return <aside className="article-toc" data-article-toc="" hidden>
    <details open>
      <summary>本文目录</summary>
      <nav aria-label="本文章节" data-toc-links=""/>
    </details>
  </aside>;
}
