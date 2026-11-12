type Entry = {title:string; id:string};
type Chapter = Entry & {sections:(Entry & {entries:Entry[]})[]};

const anchor = (title:string) => title.toLowerCase().trim()
  .replace(/[^\p{L}\p{M}\p{N}_\s-]/gu, '').replace(/\s+/g, '-');

export default function QiuLectureNavigation({body}:{body:string}) {
  const chapters:Chapter[]=[];
  for (const line of body.split('\n')) {
    const match=line.match(/^(#{2,4})\s+(.+)$/);
    if (!match) continue;
    const [,level,title]=match;
    const item={title,id:anchor(title)};
    if (level==='##') {
      if (/^第[一二三五]章 /.test(title)) chapters.push({...item,sections:[]});
      else if (chapters.length) break;
    } else if (level==='###' && chapters.length) {
      chapters.at(-1)!.sections.push({...item,entries:[]});
    } else if (level==='####' && chapters.at(-1)?.sections.length) {
      chapters.at(-1)!.sections.at(-1)!.entries.push(item);
    }
  }
  return <nav className="lecture-toc" aria-labelledby="讲义目录">
    <h2 id="讲义目录">目录与条目跳转</h2>
    <p>展开章节与小节，可直接跳转到每一条结论。</p>
    <div className="lecture-toc-shortcuts" aria-label="章节直达">
      {chapters.map(ch=><a key={ch.id} href={'#'+ch.id}>{ch.title.split(' ')[0]}</a>)}
      <a href="#配图目录">配图目录</a><a href="#有编号结论索引">教材结论索引</a>
    </div>
    {chapters.map(ch=><details key={ch.id} className="lecture-toc-chapter">
      <summary>{ch.title}</summary>
      <a className="lecture-toc-start" href={'#'+ch.id}>从本章开头阅读</a>
      {ch.sections.map(section=><details key={section.id} className="lecture-toc-section">
        <summary>{section.title}<span>{section.entries.length} 条</span></summary>
        <a className="lecture-toc-start" href={'#'+section.id}>从本节开头阅读</a>
        <ul>{section.entries.map(entry=><li key={entry.id}><a href={'#'+entry.id}>{entry.title}</a></li>)}</ul>
      </details>)}
    </details>)}
  </nav>;
}
