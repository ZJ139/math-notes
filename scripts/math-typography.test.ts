import test from 'node:test';
import assert from 'node:assert/strict';
import rehypeMathTypography from '../src/mathTypography';

const text=(value:string)=>({type:'text',value});
const formula=()=>({type:'element',tagName:'span',properties:{className:['katex']},children:[text('p')]});
const plain=(node:any):string=>node.type==='text'?node.value:(node.children||[]).map(plain).join('');

test('inline math keeps adjacent punctuation together without changing text',()=>{
  const math=formula();
  const p={type:'element',tagName:'p',children:[text('若（'),math,text('），则成立。')]};
  const original=plain(p);
  rehypeMathTypography()(p);
  const group:any=p.children[1];
  assert.equal(plain(p),original);
  assert.deepEqual(group.properties.className,['math-inline-group']);
  assert.equal(group.children[0].value,'（');
  assert.equal(group.children[1],math);
  assert.equal(group.children[2].value,'），');
  assert.equal(group.properties.style,'--math-punctuation-width:3em');
});

test('ordinary spaces, display equations and accessible math stay untouched',()=>{
  const p={children:[text('若 '),formula(),text(' 成立。')]};
  const display={properties:{className:['katex-display']},children:[formula()]};
  const tree={children:[p,display]};
  const original=JSON.stringify(tree);
  rehypeMathTypography()(tree);
  assert.equal(JSON.stringify(tree),original);
});
