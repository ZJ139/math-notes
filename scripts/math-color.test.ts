import test from 'node:test';
import assert from 'node:assert/strict';
import {colorMathSvg,mathTextColor} from '../src/mathColor';

test('formula export reads the body token and rejects missing or unsafe colors',()=>{
  assert.equal(mathTextColor(':root{--ink:#1F1E1D;--heading-ink:#141210;}'),'#1f1e1d');
  assert.throws(()=>mathTextColor(':root{--heading-ink:#141210;}'));
  assert.throws(()=>colorMathSvg('<svg/>','red;opacity:0'));
});

test('only black SVG paint changes; geometry, opacity and special colors survive byte for byte',()=>{
  const svg='<svg width="10pt" height="8pt" viewBox="0 0 10 8"><g fill="rgb(0%, 0%, 0%)" fill-opacity=".8"><path d="M 0 0 L 8 6" style="fill:none;stroke:rgb(0,0,0);stroke-width:.4"/></g><path fill="#000" stroke="#000000"/><g fill="red" stroke="#d47555"/><g style="fill:#000000;stroke:#080808"/><use href="#black" x="1" y="2"/></svg>';
  const expected=svg.replace('fill="rgb(0%, 0%, 0%)"','fill="#1f1e1d"')
    .replace('stroke:rgb(0,0,0)','stroke:#1f1e1d')
    .replace('fill="#000"','fill="#1f1e1d"')
    .replace('stroke="#000000"','stroke="#1f1e1d"')
    .replace('fill:#000000;','fill:#1f1e1d;');
  assert.equal(colorMathSvg(svg,'#1f1e1d'),expected);
});
