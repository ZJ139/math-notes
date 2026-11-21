// Shared by the static browser bundle and the search regression tests.
export function plainSearchText(value) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*(?:#{1,6}\s+|>\s*|```[^\n]*|~~~[^\n]*)/gm, '')
    .replace(/(\*\*|__)([\s\S]+?)\1/g, '$2')
    .replace(/(^|[\s(])([*_])(?=\S)(.+?\S)\2(?=$|[\s.,!?，。！？)])/gm, '$1$3')
    .replace(/`([^`\n]+)`/g, '$1')
    .replace(/[\t \r]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n').trim();
}

export function searchExcerpt(value, words, context = 20) {
  const source = plainSearchText(value);
  const lower = source.toLocaleLowerCase();
  const hits = words.map(word => lower.indexOf(word.toLocaleLowerCase())).filter(index => index >= 0);
  if (!hits.length) {
    const text = Array.from(source).slice(0, 100).join('');
    return text + (text.length < source.length ? '…' : '');
  }
  const hit = Math.min(...hits);
  // Keep the whole matching sentence, plus twenty Unicode characters on either
  // side. A decimal point inside a number is not a sentence boundary.
  const boundaries = [...source.matchAll(/[。！？!?\n]|\.(?=\s|$)/g)];
  const start = (boundaries.filter(match => match.index < hit).at(-1)?.index ?? -1) + 1;
  const end = (boundaries.find(match => match.index >= hit)?.index ?? source.length - 1) + 1;
  const before = Array.from(source.slice(0, start));
  const after = Array.from(source.slice(end));
  const left = before.slice(-context).join('');
  const right = after.slice(0, context).join('');
  const excerpt = (before.length > context ? '…' : '') + left + source.slice(start, end) + right + (after.length > context ? '…' : '');
  return excerpt.replace(/\s+/g, ' ').trim();
}

export function highlightSearchText(element, value, words) {
  const escaped = [...new Set(words)].filter(Boolean).sort((a,b) => b.length - a.length)
    .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  element.replaceChildren();
  if (!escaped.length) { element.textContent = value; return; }
  const pattern = new RegExp(escaped.join('|'), 'giu');
  let previous = 0;
  for (const match of value.matchAll(pattern)) {
    element.append(document.createTextNode(value.slice(previous, match.index)));
    const mark = document.createElement('mark');
    mark.textContent = match[0];
    element.append(mark);
    previous = match.index + match[0].length;
  }
  element.append(document.createTextNode(value.slice(previous)));
}
