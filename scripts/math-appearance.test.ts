import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {cmBeaMath} from '../src/cmBeaMath';
import {screenMathSvg} from '../src/mathAppearance';
import {colorMathSvg} from '../src/mathColor';

test('exported screen weight preserves TeX glyphs, spacing, bleed and rule geometry',async()=>{
  for(const tex of ['f','r','0',String.raw`f'(x)+f''(x)+f_n^2(x)+\int_0^T\frac{1}{x}\,dx`]){
    const formula=cmBeaMath(tex,true);
    const original=await readFile(new URL(`../.latex-cache/${formula.id}.svg`,import.meta.url),'utf8');
    const exported=colorMathSvg(screenMathSvg(original),'#1f1e1d');
    const geometry=(svg:string)=>[...svg.matchAll(/\b(?:d|x|y|width|height|viewBox|transform)="([^"]*)"/g)].map(m=>m[0]);
    assert.deepEqual(geometry(exported),geometry(original));
    assert.doesNotMatch(exported,/<clipPath|<filter|drop-shadow/);
    assert.match(exported,/@media screen\{\.math-screen-glyph\{stroke:currentColor;stroke-width:0\.18/);
    assert.match(exported,/<path class="math-screen-glyph"/);
    assert.match(exported,/color(?:="|:)#1f1e1d/);
    // Rules outside glyph definitions (e.g. fractions) retain their TeX width.
    assert.deepEqual([...exported.matchAll(/stroke-width="[^"]+"/g)].map(m=>m[0]),[...original.matchAll(/stroke-width="[^"]+"/g)].map(m=>m[0]));
  }
});

test('glyph outlines follow special colors in both Cairo paint formats',()=>{
  const svg='<svg><defs><g id="glyph-0-0"><path d="M0 0"/></g></defs><g fill="rgb(100%,0%,0%)"><use/></g><g style="fill:#000000;fill-opacity:1"><use/></g><path fill="none" stroke="#000"/></svg>';
  const result=colorMathSvg(screenMathSvg(svg),'#1f1e1d');
  assert.match(result,/fill="rgb\(100%,0%,0%\)" color="rgb\(100%,0%,0%\)"/);
  assert.match(result,/fill:#1f1e1d;color:#1f1e1d;fill-opacity:1/);
  assert.match(result,/<path fill="none" stroke="#1f1e1d"/);
  assert.doesNotMatch(result,/color[=:]"?none/);
});
