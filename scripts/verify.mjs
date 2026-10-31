import fs from 'node:fs/promises';
import path from 'node:path';
import config from '../site.config.json' with {type:'json'};
const root=path.resolve('dist');
const base=new URL(config.siteUrl);
let pages=0,links=0;
const fragmentTargets=new Map();
async function verifyReference(ref,from){
  if(!ref || /^mailto:/.test(ref))return;
  const url=new URL(ref,new URL(from,base));
  if(url.origin!==base.origin)return;
  if(!url.pathname.startsWith(base.pathname))throw new Error(`资源未使用仓库路径：${ref}`);
  let target=path.join(root,decodeURIComponent(url.pathname.slice(base.pathname.length)));
  let info=await fs.stat(target).catch(()=>null);
  if(info?.isDirectory()){target=path.join(target,'index.html');info=await fs.stat(target).catch(()=>null);}
  if(!info?.isFile())throw new Error(`链接目标不存在：${from} → ${ref}`);
  if(url.hash && target.endsWith('.html')){
    if(!fragmentTargets.has(target)){
      const html=await fs.readFile(target,'utf8');
      fragmentTargets.set(target,new Set([...html.matchAll(/\sid="([^"<>]+)"/g)].map(match=>match[1])));
    }
    const id=decodeURIComponent(url.hash.slice(1));
    if(!fragmentTargets.get(target).has(id))throw new Error(`页内锚点不存在：${from} → ${ref}`);
  }
  links++;
}
async function walk(dir){
  for(const item of await fs.readdir(dir,{withFileTypes:true})){
    const file=path.join(dir,item.name);
    if(item.isDirectory()){await walk(file);continue;}
    const relative=path.relative(root,file).split(path.sep).join('/');
    if(item.name.endsWith('.html')){
      pages++;
      const html=await fs.readFile(file,'utf8');
      if(/chatgpt\.site|cloudflare:workers|OWNER_EMAIL|\/api\/entries|\/api\/files/.test(html))throw new Error(`旧平台依赖：${relative}`);
      if(/<(?:script|link)[^>]+(?:src|href)="https?:\/\//.test(html.replace(/<link rel="canonical"[^>]+>/g,'')))throw new Error('存在外部运行时依赖');
      for(const match of html.matchAll(/(?:href|src|action)="([^"<>]+)"/g))await verifyReference(match[1].replaceAll('&amp;','&'),relative);
    }
    if(item.name.endsWith('.css')){
      for(const match of (await fs.readFile(file,'utf8')).matchAll(/url\(['"]?([^'"()]+)['"]?\)/g))await verifyReference(match[1],relative);
    }
  }
}
await walk(root);
for(const p of ['search','manage'])if(!(await fs.readFile(path.join(root,p,'index.html'),'utf8')).includes('noindex,follow'))throw new Error(`缺少 noindex：${p}`);
if ((await fs.stat('content/problems/lou-analysis-b-02.md').catch(()=>null))?.isFile()) {
  // Guard against publishing source math syntax as literal text, as happened
  // when the second Lou analysis B-group batch used \( \) and \[ \].
  const louSource=await fs.readFile('content/problems/lou-analysis-b-02.md','utf8');
  const louPage=await fs.readFile(path.join(root,'problems','eda7c983a174784902028698','index.html'),'utf8');
  const louInline=(louSource.match(/(?<!\$)\$(?!\$)/g)||[]).length/2;
  const louDisplay=(louSource.match(/^\s*\$\$\s*$/gm)||[]).length/2;
  const louMath=(louPage.match(/class="latex-svg"/g)||[]).length;
  const louDisplayMath=(louPage.match(/class="katex-display"/g)||[]).length;
  if(louInline!==237||louDisplay!==196||louMath!==louInline+louDisplay||louDisplayMath!==louDisplay)
    throw new Error('楼分析 B08–B14 公式未全部渲染：'
      +JSON.stringify({sourceInline:louInline,sourceDisplay:louDisplay,rendered:louMath,renderedDisplay:louDisplayMath}));
  console.log('Verified Lou analysis B08–B14: all 237 inline and 196 display formulas rendered.');
}


if ((await fs.stat('content/problems/lou-analysis-b-03.md').catch(()=>null))?.isFile()) {
  // Third batch: ensure every source $...$ and $...$ becomes rendered SVG.
  const src=await fs.readFile('content/problems/lou-analysis-b-03.md','utf8');
  const html=await fs.readFile(path.join(root,'problems','77b1e8aaed293f3c77005e6f','index.html'),'utf8');
  const inline=(src.match(/(?<!\$)\$(?!\$)/g)||[]).length/2;
  const display=(src.match(/^\s*\$\$\s*$/gm)||[]).length/2;
  const rendered=(html.match(/class="latex-svg"/g)||[]).length;
  const renderedDisplay=(html.match(/class="katex-display"/g)||[]).length;
  if(!Number.isInteger(inline)||!Number.isInteger(display)||inline<50||display<20
    ||rendered!==inline+display||renderedDisplay!==display)
    throw new Error('楼分析 B15–B21 公式未全部渲染：'
      +JSON.stringify({inline,display,rendered,renderedDisplay}));
  for(const heading of ['问题 B15','问题 B16','问题 B17','问题 B18','问题 B19','问题 B20','问题 B21']){
    if(!html.includes(heading))throw new Error('题解页面缺少题号：'+heading);
  }
  console.log('Verified Lou analysis B15–B21: all '+(inline+display)+' math expressions rendered.');
}


if ((await fs.stat('content/problems/lou-analysis-b-04.md').catch(()=>null))?.isFile()) {
  // Fourth batch: prohibit raw/unrendered math and verify complete B22–B28 navigation.
  const src=await fs.readFile('content/problems/lou-analysis-b-04.md','utf8');
  const html=await fs.readFile(path.join(root,'problems','73fb9e5f1d74f40bed927fb9','index.html'),'utf8');
  const directory=await fs.readFile(path.join(root,'problems','41e85e430c9d7f84a0863658','index.html'),'utf8');
  const inline=(src.match(/(?<!\$)\$(?!\$)/g)||[]).length/2;
  const display=(src.match(/^\s*\$\$\s*$/gm)||[]).length/2;
  const rendered=(html.match(/class="latex-svg"/g)||[]).length;
  const renderedDisplay=(html.match(/class="katex-display"/g)||[]).length;
  if(inline!==296||display!==61||rendered!==inline+display||renderedDisplay!==display)
    throw new Error('楼分析 B22–B28 公式未全部渲染：'
      +JSON.stringify({inline,display,rendered,renderedDisplay}));
  for(const heading of ['问题 B22','问题 B23','问题 B24','问题 B25','问题 B26','问题 B27','问题 B28']){
    if(!html.includes(heading))throw new Error('第四批页面缺少题号：'+heading);
  }
  if(!directory.includes('/problems/73fb9e5f1d74f40bed927fb9/'))
    throw new Error('楼分析 B22–B28 未写入题库目录');
  console.log('Verified Lou analysis B22–B28: all '+(inline+display)+' math expressions rendered.');
}

console.log(`Verified ${pages} HTML pages and ${links} local links/assets. No old-host or external runtime dependencies.`);
