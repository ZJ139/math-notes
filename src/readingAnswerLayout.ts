// Native two-way fragment links; Markdown still never accepts raw HTML.
type Node = {
  type: string; depth?: number; value?: string; url?: string; title?: string | null;
  children?: Node[];
  data?: {hName?: string; hProperties?: Record<string, unknown>; [key: string]: unknown};
};
type Evidence = {id: string; paragraph: string};
const sectionIds = ['reading-passage', 'reading-questions', 'reading-summary'];
const text = (value: string): Node => ({type: 'text', value});
const textOf = (node: Node): string => node.value ?? node.children?.map(textOf).join('') ?? '';
function props(node: Node, properties: Record<string, unknown>) {
  node.data = {...node.data, hProperties: {...node.data?.hProperties, ...properties}};
}
function link(label: string, target: string, title: string, className?: string): Node {
  const node: Node = {type: 'link', url: `#${target}`, title, children: [text(label)]};
  if (className) props(node, {className});
  return node;
}
function section(children: Node[], className: string): Node {
  const headingId = String(children[0]?.data?.hProperties?.id ?? '');
  // Keep previously shared question/analysis URLs at the combined question block.
  const legacyId = /^q\d+$/.test(headingId) ? `question-${headingId}`
    : headingId === 'reading-questions' ? 'reading-analysis' : undefined;
  return {type: 'blockquote', children, data: {hName: 'section', hProperties: {
    className, 'aria-labelledby': headingId, ...(legacyId ? {id: legacyId, tabIndex: -1} : {}),
  }}};
}

export default function remarkReadingAnswerLayout() {
  return (tree: Node) => {
    const children = tree.children ?? [];
    const headings = children.filter(node => node.type === 'heading' && node.depth === 2);
    if (headings.length !== 3 || !/^一、原文/.test(textOf(headings[0]))) return;
    const questions = children.flatMap(node => {
      const match = node.type === 'heading' && node.depth === 3 && textOf(node).match(/^第\s*(\d+)\s*题/);
      return match ? [Number(match[1])] : [];
    });
    const evidence = new Map<number, Evidence[]>();
    let currentSection = -1;
    let paragraph = '';
    for (const node of children) {
      if (node.type === 'heading' && node.depth === 2) currentSection++;
      if (currentSection !== 0) continue;
      if (node.type === 'heading') paragraph = textOf(node).match(/^P\d+/)?.[0] ?? '';
      function collect(item: Node) {
        const match = item.type === 'link' && item.title === 'pink-evidence' && item.url?.match(/^#q(\d+)$/);
        if (match) {
          const q = Number(match[1]);
          const targets = evidence.get(q) ?? [];
          const id = `evidence-q${q}${targets.length ? `-${targets.length + 1}` : ''}`;
          props(item, {id, className: 'reading-evidence'});
          targets.push({id, paragraph});
          evidence.set(q, targets);
        }
        item.children?.forEach(collect);
      }
      collect(node);
    }
    function markers(node: Node, inPassage: boolean) {
      if (node.type === 'link') {
        if (!inPassage && node.title === 'pink-evidence') {
          const q = Number(node.url?.match(/^#q(\d+)$/)?.[1]);
          if (evidence.has(q)) node.url = `#${evidence.get(q)![0].id}`;
        }
        if (/^[1-5]°(?:\s|｜|·|$)/.test(textOf(node))) props(node, {className: 'reading-marker'});
        return;
      }
      if (!node.children) return;
      node.children = node.children.flatMap(child => {
        if (child.type === 'text' && child.value && !/°[—–-]/.test(child.value)) {
          return child.value.split(/([1-5]°)/).filter(Boolean).map(value => {
            if (!/^[1-5]°$/.test(value)) return text(value);
            const q = questions[Number(value[0]) - 1];
            if (!evidence.has(q)) return text(value);
            return link(value, inPassage ? `q${q}` : evidence.get(q)![0].id,
              `查看第 ${q} 题${inPassage ? '解析' : '原文证据'}`, 'reading-marker');
          });
        }
        markers(child, inPassage);
        return [child];
      });
    }
    function questionLinks(q: number): Node {
      const targets = evidence.get(q) ?? [];
      const links: Node[] = [text('原文定位：')];
      if (targets.length) {
        links.push(link(`${questions.indexOf(q) + 1}°`, targets[0].id, `查看第 ${q} 题原文证据`, 'reading-marker'));
        const seen = new Set<string>();
        for (const target of targets) {
          if (!target.paragraph || seen.has(target.paragraph)) continue;
          seen.add(target.paragraph);
          links.push(text(' · '), link(target.paragraph, target.id, `查看第 ${q} 题在 ${target.paragraph} 的证据`));
        }
      }
      const node: Node = {type: 'paragraph', children: links};
      props(node, {className: 'reading-question-links'});
      return node;
    }
    currentSection = -1;
    const output: Node[] = [];
    for (const node of children) {
      if (node.type === 'heading' && node.depth === 2) {
        currentSection++;
        props(node, {id: sectionIds[currentSection], tabIndex: -1});
      }
      if (node.type === 'heading' && node.depth === 3) {
        const prompt = currentSection === 1 && textOf(node).match(/^第\s*(\d+)\s*题/);
        const q = Number((prompt || [])[1]);
        if (q) {
          props(node, {id: `q${q}`, tabIndex: -1});
          node.children = [text(textOf(node).replace(/｜[1-5]°$/, ''))];
          output.push(node, questionLinks(q));
          continue;
        }
      }
      markers(node, currentSection === 0);
      if (currentSection === 1 && node.type === 'list'
        && node.children?.length === 4
        && node.children.every((item, index) => textOf(item).startsWith(`[${'ABCD'[index]}]`))) {
        props(node, {className: 'reading-options'});
      }
      output.push(node);
    }
    const grouped: Node[] = [];
    let main: Node[] | undefined;
    let subsection: Node[] | undefined;
    const flushSubsection = () => {
      if (subsection) main!.push(section(subsection, 'reading-block'));
      subsection = undefined;
    };
    const flushMain = () => {
      flushSubsection();
      if (main) grouped.push(section(main, 'reading-section'));
    };
    for (const node of output) {
      if (node.type === 'heading' && node.depth === 2) {flushMain(); main = [node];}
      else if (!main) grouped.push(node);
      else if (node.type === 'heading' && node.depth === 3) {flushSubsection(); subsection = [node];}
      else (subsection ?? main).push(node);
    }
    flushMain();
    tree.children = grouped;
  };
}

