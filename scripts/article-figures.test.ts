import test from 'node:test';
import assert from 'node:assert/strict';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
import Markdown from '../src/Markdown';

test('local mathematical figures render with accessible descriptions; other images retain the existing fallback',()=>{
  const body='![正五边形及其中心](/figures/analytic-geometry/ch1-18.svg)\n\n![外部图片](https://example.com/test.svg)\n\n![越界路径](/figures/../secret.svg)\n\n![非配图目录](/uploads/test.svg)';
  const html=renderToStaticMarkup(createElement(Markdown,{body}));
  assert.match(html,/<img[^>]+src="\/figures\/analytic-geometry\/ch1-18.svg"[^>]+alt="正五边形及其中心"[^>]+class="article-figure"/);
  assert.equal((html.match(/<img\b/g)||[]).length,1);
  for(const alt of ['外部图片','越界路径','非配图目录'])assert.ok(html.includes(`[图片：${alt}]`));
});
