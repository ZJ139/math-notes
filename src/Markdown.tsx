import ReactMarkdown, {type Components} from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkHeadingIds from './headingIds';
import remarkDocumentLabels from './documentLabels';
import remarkReadingAnswerLayout from './readingAnswerLayout';
import rehypeLatexMath from './latexMath';
const components: Components = {
  a: ({node, title, children, className, ...props}) => {
    const evidence = title === 'pink-evidence';
    const question = props.href?.match(/^#q(\d+)$/)?.[1];
    return <a {...props} className={[className, evidence ? 'pink-evidence' : '', title === 'PDF 章节直达' ? 'pdf-chapter-link' : ''].filter(Boolean).join(' ') || undefined}
      title={evidence ? (question ? `查看第 ${question} 题解析` : '查看原文对应证据') : title}
      rel="noopener noreferrer">{children}</a>;
  },
  table: ({children}) => <div className="table-scroll" role="region" aria-label="表格，可横向滚动" tabIndex={0}><table>{children}</table></div>,
  img: ({alt, node, ...props}) => Array.isArray(node?.properties.className) && node.properties.className.includes('latex-svg')
    ? <img {...props} alt="" aria-hidden="true"/>
    : <span className="muted">{alt ? `[图片：${alt}]` : '[图片]'}</span>,
};
const readingSections = [
  ['reading-passage', '01', '原文与直译'], ['reading-questions', '02', '逐题作答'],
  ['reading-summary', '03', '全篇总结'],
];

export default function Markdown({body, readingAnswers = false}: {body: string; readingAnswers?: boolean}) {
  const structured = readingAnswers && /^## 一、原文/m.test(body);
  return <div className={`prose${readingAnswers ? ' reading-answers' : ''}`}>
    {structured && <nav className="reading-section-nav" aria-label="阅读解答章节">
      {readingSections.map(([id, number, label]) => <a key={id} href={`#${id}`}><span>{number}</span>{label}</a>)}
    </nav>}
    <ReactMarkdown skipHtml remarkPlugins={[remarkMath, remarkGfm, remarkHeadingIds, remarkDocumentLabels,
      ...(structured ? [remarkReadingAnswerLayout] : [])]}
      rehypePlugins={[[rehypeKatex, {throwOnError: false, strict: 'ignore', trust: false}], rehypeLatexMath]}
      components={components}>{body}</ReactMarkdown>
  </div>;
}

