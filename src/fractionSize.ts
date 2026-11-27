import katex from 'katex';

type Style = 'display' | 'text' | 'script' | 'scriptscript';
type MathTree = MathNode | MathTree[];
interface MathNode {
  type: string;
  style?: Style;
  body?: MathTree;
  base?: MathTree;
  numer?: {loc?: {start: number}};
  display?: MathTree;
  text?: MathTree | string;
}

// Use the pinned KaTeX parser's argument locations. A textual replacement of
// every fraction would also enlarge exponents, limits and nested fractions.
const parser = katex as typeof katex & {
  __parse(source: string, options: katex.KatexOptions): MathTree;
};

export function readableFractions(source: string, display: boolean): string {
  const commands = /\\t?frac(?![A-Za-z])\s*/g;
  const positions = new Map<number, number>();
  for (const match of source.matchAll(commands)) {
    positions.set(match.index + match[0].length, match.index);
  }
  if (!positions.size) return source;

  const promote = new Set<number>();
  function visit(node: MathTree | undefined, style: Style): void {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(child => visit(child, style));
      return;
    }
    if (node.type === 'genfrac') {
      const arg = node.numer?.loc?.start;
      const start = arg === undefined ? undefined : positions.get(arg);
      if (style === 'text' && start !== undefined) promote.add(start);
      return;
    }
    const current = node.style ?? style;
    if (current === 'script' || current === 'scriptscript') return;
    if (node.type === 'mathchoice') {
      const branch = node[current];
      if (typeof branch !== 'string') visit(branch, current);
      return;
    }
    // Fraction arguments, superscripts, subscripts and radical indices keep
    // their own TeX sizes. Walk the ordinary body/base, including matrix cells.
    visit(node.body, current);
    visit(node.base, current);
  }
  visit(parser.__parse(source, {displayMode: display, strict: 'ignore', trust: false}), display ? 'display' : 'text');
  return source.replace(commands, (command, start: number) =>
    promote.has(start) ? command.replace(/t?frac/, 'dfrac') : command);
}
