import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import source from './fixtures/2017-reading-source.json';

// Independent transcription of PDF pages 2–5. Ignore only typesetting
// punctuation/whitespace, including line-end hyphenation and curly quotes.
const normalize = (text:string) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

test('2017 reading transcription is tied to the original PDF bytes', async () => {
  const bytes = await readFile(new URL(`../${source.source}`, import.meta.url));
  const sha = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
  assert.equal(sha, source.source_git_blob_sha);
});

for (const text of source.texts) {
  test(`2017 Text ${text.text}: passage, all prompts/options and answer mapping match the reviewed source`, async () => {
    const md = await readFile(new URL(`../content/english/reading-answers/2017-reading-text-${text.text}.md`, import.meta.url), 'utf8');
    const passage = [...md.matchAll(/^> (.+)$/gm)].map(match=>match[1]).join(' ')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*[1-5]°\*\*/g, '');
    assert.equal(normalize(passage), normalize(text.passage), 'complete original passage');
    assert.equal(text.questions.length, 5);
    for (const question of text.questions) {
      const block = md.match(new RegExp(`\\*\\*原题\\*\\*：${question.number}\\. ([\\s\\S]*?)(?=### 第|## 三、|$)`))?.[1];
      assert.ok(block, `Q${question.number}: missing question`);
      assert.equal(normalize(block.split('**（')[0]), normalize(question.prompt), `Q${question.number}: prompt`);
      const options = [...block.matchAll(/- \*\*\[([A-D])\]\*\* (.+)\n([\s\S]*?)(?=\n- \*\*\[|\n#### |$)/g)];
      assert.equal(options.length, 4);
      let correct = '';
      for (const [index, option] of options.entries()) {
        const letter = option[1] as keyof typeof question.options;
        assert.equal(letter, 'ABCD'[index]);
        assert.equal(normalize(option[2]), normalize(question.options[letter]), `Q${question.number} ${letter}`);
        assert.match(option[3], /直译：（.+）/);
        const verdict = option[3].match(/\*\*(正确|错误)｜/);
        assert.ok(verdict);
        if(verdict[1] === '正确') correct += letter;
      }
      assert.equal(correct, question.answer, `Q${question.number}: exactly one reviewed correct option`);
      assert.ok(block.includes(`**答案：${question.answer}。**`));
      assert.ok(md.includes(`${question.number} **${question.answer}**`), 'summary answer');
    }
  });
}
