import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

// Compare against both independent source PDFs; ignore only line wrapping,
// punctuation and printed blank markers, preserving all letters and numbers.
const pdf = (path: string) => execFileSync('pdftotext', ['-raw', fileURLToPath(new URL(path, import.meta.url)), '-'], {encoding: 'utf8'});
const norm = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g, '');
const examPages = pdf('../content/english/exams/2026英一.pdf').split('\f');
const originalPages = pdf('../content/english/translation/2026英一阅读原文.pdf').split('\f');
// Independently reviewed from the passages; these are not presented as an official key.
const reviewedKeys = ['CDABB', 'DABCA', 'AACBD', 'DCBDC'];
const boundary = (number: number) => new RegExp(`(?:^|\\n)\\s*${number}\\.\\s*`);

for (let text = 1; text <= 4; text++) {
  test(`2026 Text ${text}: passage, question wording and ordered options match the repository PDFs`, () => {
    const md = readFileSync(new URL(`../content/english/reading-answers/2026-reading-text-${text}.md`, import.meta.url), 'utf8');
    const start = 21 + (text - 1) * 5;
    const page = examPages[text];
    const passage = [...md.matchAll(/^> (.+)$/gm)].map(match => match[1]).join(' ')
      .replace(/\[([^\[\]]+)\]\(#q\d+ "pink-evidence"\)/g, '$1')
      .replace(/\*\*[1-5]°\*\*/g, '');
    const examPassage = page.split(`Text ${text}\n`)[1].split(boundary(start))[0];
    const originalPassage = originalPages[text - 1].split(`Text ${text}\n`)[1].replace(/\n\d+\s*$/, '');
    assert.equal(norm(passage), norm(examPassage), 'complete passage vs exam');
    assert.equal(norm(passage), norm(originalPassage), 'complete passage vs reading original');
    for (let offset = 0; offset < 5; offset++) {
      const number = start + offset;
      const raw = page.split(boundary(number))[1]?.split(boundary(number + 1))[0];
      assert.ok(raw, `Q${number}: source boundary`);
      const sourceParts = raw.split(/\[[A-D]\]/);
      assert.equal(sourceParts.length, 5, `Q${number}: four original options`);
      const block = md.split(`**原题**：${number}. `)[1]?.split(/### 第|## 三、/)[0];
      assert.ok(block, `Q${number}: authored question`);
      assert.equal(norm(block.split('**（')[0]), norm(sourceParts[0]), `Q${number}: prompt`);
      const options = [...block.matchAll(/- \*\*\[([A-D])\]\*\* (.+)\n([\s\S]*?)(?=\n- \*\*\[|\n#### |$)/g)];
      assert.equal(options.length, 4);
      let correct = '';
      options.forEach((option, index) => {
        assert.equal(option[1], 'ABCD'[index]);
        assert.equal(norm(option[2]), norm(sourceParts[index + 1]), `Q${number} ${option[1]}: wording`);
        if (option[3].includes('**正确｜')) correct += option[1];
      });
      assert.equal(correct, reviewedKeys[text - 1][offset], `Q${number}: one reviewed answer`);
      assert.ok(block.includes(`**答案：${correct}。**`));
      assert.ok(md.includes(`第${number}题 ${correct}`));
    }
  });
}
