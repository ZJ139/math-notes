import test from 'node:test';
import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import katex from 'katex';
import {loadEntries} from '../src/content';
import remarkStackedFractions,{stackedFractions as fractions} from '../src/stackedFractions';
import {cmBeaMath,formulaSVGPaddingEm} from '../src/cmBeaMath';
import Markdown from '../src/Markdown';

test('division preserves functions, scripts, roots, factorials and derivatives',()=>{
  const cases=[
    [String.raw`f'(x)/g(x)`,String.raw`\frac{f'(x)}{g(x)}`],
    [String.raw`a_n/n^2+1/j!`,String.raw`\frac{a_n}{n^2}+\frac{1}{j!}`],
    [String.raw`x^{1/n}+1/(2\sqrt N)`,String.raw`x^{\frac{1}{n}}+\frac{1}{(2\sqrt N)}`],
    [String.raw`\sin x/x+1/\cos2x`,String.raw`\frac{\sin x}{x}+\frac{1}{\cos2x}`],
    [String.raw`\partial^2w/\partial x_j^2`,String.raw`\frac{\partial^2w}{\partial x_j^2}`],
    [String.raw`\Delta a_n/\Delta b_n+d/dx`,String.raw`\frac{\Delta a_n}{\Delta b_n}+\frac{d}{dx}`],
    [String.raw`\sum_k1/k+\sum a_k/\sum b_k`,String.raw`\sum_k\frac{1}{k}+\frac{\sum a_k}{\sum b_k}`],
    [String.raw`\frac12\int_1^\infty\sin t/\sqrt t\,dt`,String.raw`\frac12\int_1^\infty\frac{\sin t}{\sqrt t}\,dt`],
    [String.raw`\tfrac12(z+1/z)`,String.raw`\tfrac12(z+\frac{1}{z})`],
  ];
  for(const [tex,expected] of cases)assert.equal(fractions(tex),expected,tex);
});

test('division stays inside absolute values, norms, sets and sized groups',()=>{
  for(const [tex,expected] of [
    [String.raw`|a/b|`,String.raw`|\frac{a}{b}|`],
    [String.raw`\|d\boldsymbol r/du\|`,String.raw`\|\frac{d\boldsymbol r}{du}\|`],
    [String.raw`\{1/n:n\in\mathbb N\}`,String.raw`\{\frac{1}{n}:n\in\mathbb N\}`],
    [String.raw`\left(a/b\right)^2`,String.raw`\left(\frac{a}{b}\right)^2`],
    [String.raw`\bigl(a/b\bigr)^2`,String.raw`\bigl(\frac{a}{b}\bigr)^2`],
    [String.raw`a\Big/b`,String.raw`\frac{a}{b}`],
    [String.raw`\lceil kn/(n-1)\rceil`,String.raw`\lceil \frac{kn}{(n-1)}\rceil`],
    [String.raw`2^{-\lfloor n/2\rfloor}`,String.raw`2^{-\lfloor \frac{n}{2}\rfloor}`],
  ])assert.equal(fractions(tex),expected);
});

test('quotient spaces, field extensions and literal slash text retain their meaning',()=>{
  for(const tex of [String.raw`V/W`,String.raw`K/F`,String.raw`\mathbb Z/m\mathbb Z`,String.raw`\mathbb F_p[t]/(t^2-5)`,String.raw`H/\operatorname{im}a`,String.raw`SL(2,\mathbb C)/\{I,-I\}`,String.raw`\text{2026/11/25}`,String.raw`A\setminus B`,String.raw`\frac{a}{b}`])assert.equal(fractions(tex),tex);
  assert.equal(fractions(String.raw`d(t,\mathbb T\setminus J_j)/\delta`),String.raw`\frac{d(t,\mathbb T\setminus J_j)}{\delta}`);
});

test('MathML and the visible SVG use the same stacked fraction and true TeX depth',()=>{
  const tex=String.raw`\frac{f'(x)}{\sqrt{1+x^2}}`;
  const html=renderToStaticMarkup(createElement(Markdown,{body:String.raw`若 $f'(x)/\sqrt{1+x^2}$，则成立。`}));
  const image=cmBeaMath(tex,false);
  assert.match(html,/<mfrac>/);
  assert.ok(html.includes(`/math/${image.id}.svg`));
  assert.ok(html.includes(`--math-baseline:-${image.depth}em`));
  assert.ok(html.includes(`height:${image.height+image.depth+2*formulaSVGPaddingEm}em`));
  assert.match(html,/class="math-inline-group"/);
});

test('Markdown code, URLs and document headings are not fraction input',()=>{
  const html=renderToStaticMarkup(createElement(Markdown,{body:'## a/b\n\n`a/b` [链接](https://example.com/a/b)\n\n$x/2$'}));
  assert.match(html,/<h2 id="ab">a\/b<\/h2>/);
  assert.match(html,/<code>a\/b<\/code>/);
  assert.match(html,/href="https:\/\/example.com\/a\/b"/);
  assert.match(html,/<mfrac>/);
});

test('the entire published corpus normalizes to valid, stable TeX',async()=>{
  let changed=0;
  function validate(){return(tree:any)=>{
    function walk(node:any){
      if(node.type==='inlineMath'||node.type==='math'){
        const converted=fractions(node.value);
        if(converted!==node.value)changed++;
        assert.equal(fractions(converted),converted,'Normalization must be idempotent');
        katex.renderToString(converted,{displayMode:node.type==='math',throwOnError:true,strict:'ignore',trust:false});
      }
      node.children?.forEach(walk);
    }
    walk(tree);
  };}
  for(const entry of await loadEntries(new URL('../content',import.meta.url).pathname)){
    renderToStaticMarkup(createElement(ReactMarkdown,{remarkPlugins:[remarkMath,validate,remarkStackedFractions],children:entry.body}));
  }
  assert.ok(changed>3000,'The global renderer must cover existing course and exercise content');
});
