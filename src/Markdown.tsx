import qiuLectureFigureSizes from './qiuLectureFigureSizes.json';
import quadricsFigureSizes from './quadricsFigureSizes.json';
import complexFunctionsFigureSizes from './complexFunctionsFigureSizes.json';
import ReactMarkdown, {type Components} from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkHeadingIds from './headingIds';
import remarkDocumentLabels from './documentLabels';
import remarkTableOfContents from './tableOfContents';
import remarkReadingAnswerLayout from './readingAnswerLayout';
import rehypeCMBeaMath from './cmBeaMath';
import rehypeMathTypography from './mathTypography';
const articleFigureSizes: Record<string,{width:number;height:number}> = {...qiuLectureFigureSizes,...quadricsFigureSizes,...complexFunctionsFigureSizes};
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
    : typeof props.src === 'string' && /^\/figures\/[A-Za-z0-9/_-]+\.(?:svg|png|webp)$/.test(props.src)
    ? <img {...props} {...articleFigureSizes[props.src]} alt={alt || ''} style={props.src in complexFunctionsFigureSizes ? {maxWidth:articleFigureSizes[props.src].width} : undefined} className="article-figure" loading="lazy" decoding="async"/>
    : <span className="muted">{alt ? `[图片：${alt}]` : '[图片]'}</span>,
};
// A standalone sequence of display-style math fragments wraps only at the
// breaks chosen in the exercise text, without shrinking formula glyphs.
const exerciseComponents: Components = {
  ...components,
  p: ({node, children}) => {
    const equation = node?.children.every(part =>
      part.type === 'text' ? !part.value.trim() :
      part.type === 'element' && Array.isArray(part.properties.className) &&
      part.properties.className.includes('katex')
    ) && node.children.filter(part => part.type === 'element').length > 1;
    return <p className={equation ? 'exercise-equation' : undefined}>{children}</p>;
  },
};

const readingSections = [
  ['reading-passage', '01', '原文与直译'], ['reading-questions', '02', '逐题作答'],
  ['reading-summary', '03', '全篇总结'],
];

export default function Markdown({body, readingAnswers = false, exerciseSheet = false, mathFont = 'cm-bea'}: {body: string; readingAnswers?: boolean; exerciseSheet?: boolean; mathFont?: 'cm-bea'}) {
  const structured = readingAnswers && /^## 一、原文/m.test(body);
  return <div data-math-font={mathFont} className={`prose${readingAnswers ? ' reading-answers' : ''}${exerciseSheet ? ' exercise-sheet' : ''}`}>
    {structured && <nav className="reading-section-nav" aria-label="阅读解答章节">
      {readingSections.map(([id, number, label]) => <a key={id} href={`#${id}`}><span>{number}</span>{label}</a>)}
    </nav>}
    <ReactMarkdown skipHtml remarkPlugins={[remarkMath, remarkGfm, remarkHeadingIds, remarkDocumentLabels, remarkTableOfContents,
      ...(structured ? [remarkReadingAnswerLayout] : [])]}
      rehypePlugins={[[rehypeKatex, {throwOnError: false, strict: 'ignore', trust: false}], rehypeCMBeaMath, rehypeMathTypography]}
      components={exerciseSheet ? exerciseComponents : components}>{body}</ReactMarkdown>
  </div>;
}

