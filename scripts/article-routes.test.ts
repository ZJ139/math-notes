import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {articleRoute,articleRedirects,rewriteArticleLinks,type ArticleRouteEntry} from '../src/articleRoutes';
import {loadEntries} from '../src/content';

const sample:ArticleRouteEntry={section:'english',id:'a'.repeat(24),category:'reading-answers',sourcePath:'english/reading-answers/2014-reading-text-1.md'};
const site='https://example.org/math-notes/';

test('reading answers use year/Text addresses while other English articles use readable source names',()=>{
  assert.equal(articleRoute(sample),'/english/reading-answers/2014/text-1/');
  assert.equal(articleRoute({...sample,sourcePath:'english/reading-answers/2014-text-1-supplement.md'}),'/english/reading-answers/2014-text-1-supplement/');
  assert.equal(articleRoute({...sample,category:'writing',sourcePath:'english/writing/writing-4000-2024.md'}),'/english/writing/writing-4000-2024/');
  assert.equal(articleRoute({...sample,sourcePath:'english/sentences/句子 01.txt'}),'/english/sentences/句子-01/');
  assert.equal(articleRoute({...sample,section:'notes',sourcePath:'notes/original.md'}),'/notes/'+sample.id+'/');
  assert.throws(()=>articleRoute({...sample,sourcePath:'english/../escape.md'}),/来源路径无效/);
});

test('release reading addresses are stable numeric asset routes and duplicate routes fail before overwriting a page',()=>{
  assert.equal(articleRoute({...sample,sourcePath:'release:123',category:'writing'}),'/english/writing/files/123/');
  assert.throws(()=>articleRedirects([sample,{...sample,id:'b'.repeat(24)}]),/地址重复/);
  assert.throws(()=>articleRedirects([
    {...sample,sourcePath:'english/writing/Hello World.md'},
    {...sample,id:'b'.repeat(24),sourcePath:'english/writing/hello-world.md'},
  ]),/地址重复/);
});

test('rendered old links become canonical without changing text, query parameters, fragments, attachments or external sites',()=>{
  const redirects=articleRedirects([sample]);
  const old='/english/'+sample.id;
  const target=articleRoute(sample);
  const html=`<a href="${old}/?q=two&amp;source=old#q21">原始文字</a>`;
  assert.equal(rewriteArticleLinks(html,redirects,site),`<a href="${target}?q=two&amp;source=old#q21">原始文字</a>`);
  assert.equal(rewriteArticleLinks(`<a href="${old}#中文">定位</a>`,redirects,site),`<a href="${target}#中文">定位</a>`);
  assert.equal(rewriteArticleLinks(`<a href="/math-notes${old}/#q21">内部链接</a>`,redirects,site),`<a href="${target}#q21">内部链接</a>`);
  assert.equal(rewriteArticleLinks(`<a href="https://example.org/math-notes${old}/?from=share#q21">分享</a>`,redirects,site),`<a href="https://example.org/math-notes${target}?from=share#q21">分享</a>`);
  for(const href of [`https://elsewhere.org${old}/#q21`,'/files/english/2014英一.pdf#page=2','#q21','/math-notes/english/%ZZ/']) {
    const unchanged=`<a href="${href}">内容</a>`;
    assert.equal(rewriteArticleLinks(unchanged,redirects,site),unchanged);
  }
});

test('every real English article has one unique readable route; all legacy hashes remain mapped and article data stays unchanged',async()=>{
  const items=await loadEntries(fileURLToPath(new URL('../content/',import.meta.url)));
  const before=JSON.stringify(items);
  const english=items.filter(entry=>entry.section==='english');
  const redirects=articleRedirects(items);
  assert.equal(redirects.size,english.length);
  assert.equal(new Set(redirects.values()).size,english.length);
  for(const entry of english) {
    const route=redirects.get('/english/'+entry.id)!;
    assert.equal(route,articleRoute(entry));
    assert.doesNotMatch(route,/^\/english\/[a-f0-9]{24}\//);
    assert.doesNotMatch(route,/[?#]/);
  }
  assert.equal(JSON.stringify(items),before);
});

test('legacy browser redirects replace the URL and preserve every query parameter and encoded chapter fragment',async()=>{
  const {readFile}=await import('node:fs/promises');
  const {default:vm}=await import('node:vm');
  const script=await readFile(new URL('../public/site.js',import.meta.url),'utf8');
  const target='https://example.org/math-notes'+articleRoute(sample);
  const old=new URL('https://example.org/math-notes/english/'+sample.id+'/?q=a%2Bb&from=shared#'+encodeURIComponent('原句'));
  const replacements:string[]=[];
  vm.runInNewContext(script,{
    URL,
    location:{search:old.search,hash:old.hash,replace:(href:string)=>replacements.push(href)},
    document:{querySelector:(selector:string)=>selector==='[data-redirect]'?{href:target}:null,getElementById:()=>null},
  });
  assert.deepEqual(replacements,[target+old.search+old.hash]);
});
