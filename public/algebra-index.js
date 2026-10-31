// Shared by server rendering and browser search; Markdown is the only index source.
/** @param {string} value */
export function algebraSlug(value) {
  return value.toLowerCase().trim().replace(/[^\p{L}\p{M}\p{N}_\s-]/gu, '').replace(/\s+/g, '-');
}

/** @param {string} body */
export function parseAlgebraIndex(body) {
  const parts = body.split(/(?=^## 第 \d+ 章 )/m);
  const intro = parts.shift() || '';
  const chapters = parts.map(part => {
    const pieces = part.split(/(?=^### )/m);
    const chapterBody = pieces.shift() || '';
    const title = chapterBody.match(/^## (.+)/)?.[1] || '';
    const number = Number(title.match(/^第 (\d+) 章/)?.[1]);
    const groups = pieces.map(body => {
      const title = body.match(/^### (.+)/)?.[1] || '';
      const anchor = algebraSlug(title);
      const exercises = [...body.matchAll(/^\| ((习题 \d+\.\d+|复习题[一二三四五六七八九十]+|补充题[一二三四五六七八九十]+) 第 (\d+) 题) \| \[PDF 第 (\d+) 页\]\((\/files\/[^\s)]+\.pdf#page=\d+)\) \| ([^|]+) \|$/gmi)].map(m => ({
        key: m[1], group: m[2], number: Number(m[3]), page: Number(m[4]), url: m[5], note: m[6].trim(),
        section: m[2].match(/\d+\.\d+/)?.[0] || '', chapter: number, title, anchor,
      }));
      return {title, anchor, body, exercises};
    });
    return {number, title, anchor: algebraSlug(title), body: chapterBody, groups};
  });
  return {intro, chapters};
}

const cnNumbers = ['一','二','三','四','五','六','七','八','九','十'];
/** @param {string} value */
export function algebraQuery(value) {
  return value.normalize('NFKC').toLowerCase()
    .replace(/第\s*([一二三四五六七八九十]+)\s*章/g, (_, n) => ` 章${cnNumbers.indexOf(n) + 1} `)
    .replace(/第\s*(\d+)\s*章/g, ' 章$1 ')
    .replace(/第\s*(\d+)\s*题/g, ' 题$1 ')
    .replace(/(\d+\.\d+)/g, ' $1 ')
    .replace(/\*/g, ' 星号 ').replace(/习题/g, ' ')
    .trim().split(/\s+/).filter(Boolean);
}

/** @param {string} query */
export function hasAlgebraLocator(query) {
  return algebraQuery(query).some(word=>/^(?:题|章)?\d+(?:\.\d+)?$/.test(word) || /^(?:复习题|补充题)/.test(word) || word==='星号');
}

/**
 * @param {ReturnType<typeof parseAlgebraIndex>['chapters'][number]['groups'][number]['exercises'][number]} exercise
 * @param {string} query
 */
export function matchesAlgebraExercise(exercise, query, context = '') {
  const words = algebraQuery(query);
  const haystack = `${context} ${exercise.title} ${exercise.group} ${exercise.note}`.normalize('NFKC').toLowerCase().replace(/\s+/g, '');
  return words.every(word => {
    if (/^\d+\.\d+$/.test(word)) return exercise.section === word;
    if (/^(?:题)?\d+$/.test(word)) return exercise.number === Number(word.replace('题', ''));
    if (/^章\d+$/.test(word)) return exercise.chapter === Number(word.slice(1));
    if (word === '星号') return exercise.note.includes('星号');
    return haystack.includes(word);
  });
}
