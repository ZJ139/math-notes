import type {Element, ElementContent, Root, RootContent} from 'hast';

const textOf = (node: RootContent): string => 'value' in node ? node.value : 'children' in node ? node.children.map(textOf).join('') : '';
const element = (tagName: string, className: string, children: ElementContent[]): Element =>
  ({type: 'element', tagName, properties: {className: className.split(' ')}, children});

// Keep title and statement separate even when Markdown puts both in one paragraph.
// The transform is opt-in and never rebuilds formula nodes or their accessibility data.
export default function rehypeSStyle() {
  return (tree: Root) => {
    for (const node of tree.children) {
      if (node.type !== 'element') continue;
      if (node.tagName === 'p' && textOf(node).startsWith('主线：')) {
        node.properties.className = ['s-lead'];
      }
      if (node.tagName !== 'blockquote') continue;
      const first = node.children.find(child => child.type !== 'text' || child.value.trim());
      if (first?.type !== 'element' || first.tagName !== 'p') continue;
      const title = first.children[0];
      if (title?.type !== 'element' || title.tagName !== 'strong') continue;
      const label = textOf(title);
      const kind = /^(定义|定理|命题|推论|引理|性质|公式)/u.test(label) ? 'theorem'
        : /^例\s/u.test(label) ? 'example'
        : /^(辨析|题意|注意|警示)/u.test(label) ? 'caution' : undefined;
      if (!kind) continue;
      const remainder = first.children.slice(1);
      if (remainder[0]?.type === 'text') remainder[0].value = remainder[0].value.replace(/^\s+/u, '');
      const hasStatement = remainder.some(child => child.type !== 'text' || child.value.trim());
      const body = node.children.flatMap(child => child === first
        ? hasStatement ? [{...first, children: remainder}] : [] : [child]);
      node.tagName = 'div';
      node.properties.className = ['s-box', `s-box-${kind}`];
      node.children = [element('div', 's-box-title', [title]), element('div', 's-box-body', body)];
    }
  };
}
