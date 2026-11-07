import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

// Read the independent repository PDFs, not a copy of the authored answers.
// Ignore line wrapping and typesetting punctuation, but preserve every letter,
// number, question and option order. The source's “you’11” is a visible typo.
const pdf = (path:string) => execFileSync('pdftotext', ['-raw', fileURLToPath(new URL(path, import.meta.url)), '-'], {encoding:'utf8'});
const norm = (text:string) => text.replace(/you[’']11/g, 'you’ll').toLowerCase().replace(/[^a-z0-9]/g, '');
const examPages = pdf('../content/english/exams/2025英一.pdf').split('\f');
const originalPages = pdf('../content/english/translation/2025英一阅读原文.pdf').split('\f');
const reviewedKeys = ['CAABA', 'BDCAC', 'DAACD', 'CBBCD'];
const questionText = (page:string, number:number) => {
  // Poppler may put a line break immediately after a printed question number.
  const boundary = (n:number) => new RegExp(`(?:^|\\n)\\s*${n}\\.\\s*`);
  const raw = page.split(boundary(number))[1]?.split(boundary(number + 1))[0];
  assert.ok(raw, `Q${number}: source question boundary`);
  return raw;
};

for (let text = 1; text <= 4; text++) {
  test(`2025 Text ${text}: complete passage and all five questions match both original repository sources`, () => {
    const md = readFileSync(new URL(`../content/english/reading-answers/2025-reading-text-${text}.md`, import.meta.url), 'utf8');
    const start = 21 + (text - 1) * 5;
    const page = examPages[text];
    const passage = [...md.matchAll(/^> (.+)$/gm)].map(m => m[1]).join(' ')
      .replace(/\[((?:[^\[\]]|\[[^\]]*\])+)\]\(#q\d+ "pink-evidence"\)/g, '$1')
      .replace(/\*\*[1-5]°\*\*/g, '');
    const examPassage = page.split(`Text ${text}\n`)[1].split(`${start}. `)[0];
    const originalPassage = originalPages[text - 1].split(`Text ${text}\n`)[1].replace(/\n\d+\s*$/, '');
    assert.equal(norm(passage), norm(examPassage), 'passage vs original exam');
    assert.equal(norm(passage), norm(originalPassage), 'passage vs reading original');
    for (let offset = 0; offset < 5; offset++) {
      const number = start + offset;
      const raw = questionText(page, number);
      // Reproduce the CI wrapping difference using the actual PDF text.
      const wrappedNumbers = page.replace(/^(\d+)\.[ \t]+/gm, '$1.\n');
      assert.equal(norm(questionText(wrappedNumbers, number)), norm(raw), `Q${number}: wrapped number`);
      const sourceParts = raw.split(/\[[A-D]\]/);
      assert.equal(sourceParts.length, 5, `Q${number}: four source options`);
      const block = md.split(`**原题**：${number}. `)[1].split(/### 第|## 三、/)[0];
      // Q22 has a stray “s” embedded in its printed blank; keep the prose.
      assert.equal(norm(block.split('**（')[0]), norm(sourceParts[0].replace('_s.', '____.')), `Q${number}: prompt`);
      const options = [...block.matchAll(/- \*\*\[([A-D])\]\*\* (.+)\n([\s\S]*?)(?=\n- \*\*\[|\n#### |$)/g)];
      assert.equal(options.length, 4);
      let markedCorrect = '';
      options.forEach((option, index) => {
        assert.equal(option[1], 'ABCD'[index]);
        assert.equal(norm(option[2]), norm(sourceParts[index + 1]), `Q${number} ${option[1]}: option`);
        if (option[3].includes('**正确｜')) markedCorrect += option[1];
      });
      assert.equal(markedCorrect, reviewedKeys[text - 1][offset], `Q${number}: one reviewed answer`);
      assert.ok(block.includes(`**答案：${markedCorrect}。**`));
      assert.ok(md.includes(`第${number}题 ${markedCorrect}`));
    }
  });
}
