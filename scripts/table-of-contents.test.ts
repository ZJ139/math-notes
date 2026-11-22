import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import Markdown from '../src/Markdown';

test('section navigation keeps destinations and uses one section sign without list bullets',()=>{
  const html=renderToStaticMarkup(createElement(Markdown,{body:'## 本节目次\n\n- [1.1.1 集合](#111-集合)\n- [§1.1.2 并集](#112-并集)\n\n## 1.1.1 集合\n\n- 普通论证列表\n- 普通条件'}));
  assert.match(html,/<ul class="toc-list" role="list">/);
  assert.match(html,/href="#111-%E9%9B%86%E5%90%88"[^>]*>§1\.1\.1 集合/);
  assert.match(html,/href="#112-%E5%B9%B6%E9%9B%86"[^>]*>§1\.1\.2 并集/);
  assert.doesNotMatch(html,/§§/);
  assert.match(html,/<ul>\s*<li>普通论证列表<\/li>/);
});

test('course directories and unnumbered navigation preserve their original labels',()=>{
  const html=renderToStaticMarkup(createElement(Markdown,{body:'- [§7.1 正规族](/notes/section/)（第 210 页）\n- §7.2 待编写\n\n## 目录\n\n- [背景](#背景)\n\n## 正文\n\n1. 一个步骤\n2. 下一个步骤'}));
  assert.match(html,/<ul class="toc-list" role="list">/);
  assert.match(html,/§7\.1 正规族/);
  assert.match(html,/>背景<\/a>/);
  assert.match(html,/<ol>\s*<li>一个步骤/);
});
