import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('../public/link-selection.js',import.meta.url),'utf8');

function page(){
  const listeners=new Map<string,((event:any)=>void)[]>();
  class Link {
    href='';isConnected=true;focusVisible=false;attributes=new Map<string,string>();
    closest(){return this.href?this:null;}
    matches(selector:string){return this.focusVisible&&(selector===':focus-visible'||(selector==='a:focus-visible'&&!!this.href));}
    setAttribute(key:string,value:string){this.attributes.set(key,value);}
    removeAttribute(key:string){this.attributes.delete(key);}
    hasAttribute(key:string){return this.attributes.has(key);}
    blur(){this.focusVisible=false;}
  }
  const first=Object.assign(new Link(),{href:'https://example.org/math-notes/english/'});
  const second=Object.assign(new Link(),{href:first.href+'#reading-summary'});
  const blank=new Link();
  const on=(name:string,callback:(event:any)=>void)=>listeners.set(name,[...listeners.get(name)||[],callback]);
  const document={activeElement:blank,addEventListener:on,createElement(){assert.fail('selection must not add a positioned overlay');}};
  vm.runInNewContext(source,{document,addEventListener:on});
  const fire=(name:string,target=blank,extra={})=>{
    document.activeElement=target;
    listeners.get(name)?.forEach(fn=>fn({target,button:0,...extra,preventDefault(){assert.fail('native link action intercepted');}}));
  };
  return {first,second,blank,fire,listeners};
}

test('one clicked link is selected, including existing fragment navigation, and blank clicks cancel it',()=>{
  const p=page();p.fire('click',p.first);
  assert.ok(p.first.hasAttribute('data-link-selected'));
  p.fire('click',p.second,{defaultPrevented:true});
  assert.ok(!p.first.hasAttribute('data-link-selected'));assert.ok(p.second.hasAttribute('data-link-selected'));
  p.fire('click');assert.ok(!p.second.hasAttribute('data-link-selected'));
});

test('touch scrolling preserves selection and never creates a geometry-tracking scroll handler',()=>{
  const p=page();p.fire('click',p.first);
  for(const name of ['pointerdown','pointercancel','touchstart','touchmove','scroll','resize'])p.fire(name,p.second,{pointerType:'touch'});
  assert.ok(p.first.hasAttribute('data-link-selected'));assert.ok(!p.second.hasAttribute('data-link-selected'));
  assert.ok(!p.listeners.has('scroll'));assert.ok(!p.listeners.has('resize'));
  p.fire('pagehide');assert.ok(!p.first.hasAttribute('data-link-selected'));
});

test('Tab and visible keyboard focus clear pointer selection; blank clicks clear remaining visible link focus',()=>{
  const p=page();p.fire('click',p.first);p.fire('keydown',p.first,{key:'Tab'});
  assert.ok(!p.first.hasAttribute('data-link-selected'));
  p.fire('click',p.first);p.second.focusVisible=true;p.fire('focusin',p.second);
  assert.ok(!p.first.hasAttribute('data-link-selected'));
  // A blank click may leave the formerly focused anchor as activeElement.
  const focused=p.second;focused.closest=()=>null as any;p.fire('click',focused);
  assert.equal(focused.focusVisible,false);
});

test('pointer and keyboard frames use the requested native outline, dimensions and fade without borders or transforms',()=>{
  const css=readFileSync(new URL('../public/reading.css',import.meta.url),'utf8');
  assert.match(css,/:root a\[href\]:is\(\[data-link-selected\],:focus-visible\)\{outline:2px solid #D47555;outline-offset:4px;border-radius:8px\}/);
  assert.match(css,/transition:outline-color 150ms ease/);
  assert.doesNotMatch(css,/\.link-selection-ring\{/);
  assert.doesNotMatch(css,/a\[href\][^{}]*\{[^}]*outline:none!important/);
});
