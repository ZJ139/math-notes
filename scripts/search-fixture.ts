// Minimal text nodes for the existing filter/history VM tests. The actual
// browser tests cover layout, focus, pagination and rendered <mark> elements.
import {readFileSync} from 'node:fs';
export const searchScript=readFileSync(new URL('../public/search-results.js',import.meta.url),'utf8').replace(/^export /gm,'')+'\n';
function textNode(value='') {
  return {textContent:value,hidden:true,children:[] as unknown[],replaceChildren(){this.children=[];},append(...nodes:unknown[]){this.children.push(...nodes);}};
}
export const searchDocument={createElement:()=>textNode(),createTextNode:(text:string)=>textNode(text)};
export function prepareSearchRows<T>(rows:T[]):T[] {
  for(const row of rows as any[]) {
    const original=row.querySelector?.bind(row);
    const title=textNode(row.dataset.search.split('\n')[0]),summary=textNode();
    row.querySelector=(selector:string)=>selector==='h2 a'?title:selector==='[data-search-summary]'?summary:original?.(selector);
  }
  return rows;
}
