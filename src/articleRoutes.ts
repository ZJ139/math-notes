// Public reading addresses are derived at build time. Source documents and their
// stable IDs keep their original bytes, including links written before migration.
export interface ArticleRouteEntry {
  section: string;
  id: string;
  sourcePath: string;
  category?: string;
  tags?: string;
}

function slug(segment: string): string {
  const value=segment.normalize('NFKC').toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}_-]+/gu,'-').replace(/^-+|-+$/g,'');
  if(!value)throw new Error(`资料文件名无法生成可读地址：${segment}`);
  return value;
}

export function articleRoute(entry:ArticleRouteEntry):string {
  if(entry.section!=='english')return `/${entry.section}/${entry.id}/`;
  // The standard answer filename provides a stable year/Text address. Extra
  // answers for the same Text keep their own descriptive filenames below.
  const answer=entry.sourcePath.match(/^english\/reading-answers\/((?:19|20)\d{2})-reading-text-([1-4])\.md$/i);
  if(answer)return `/english/reading-answers/${answer[1]}/text-${answer[2]}/`;
  // Release asset IDs are readable numeric identifiers and remain stable if its
  // title changes; the actual attachment download address is never rewritten.
  const asset=entry.sourcePath.match(/^release:(\d+)$/)?.[1];
  if(asset)return `/english/${(entry.category||'resources').split('/').map(slug).join('/')}/files/${asset}/`;
  if(!entry.sourcePath.startsWith('english/')||entry.sourcePath.split('/').some(part=>!part||part==='.'||part==='..')) {
    throw new Error(`英语资料来源路径无效：${entry.sourcePath}`);
  }
  const parts=entry.sourcePath.slice('english/'.length).split('/');
  parts[parts.length-1]=parts.at(-1)!.replace(/\.[^.]+$/,'');
  return '/english/'+parts.map(slug).join('/')+'/';
}

export function articleRedirects(entries:readonly ArticleRouteEntry[]):Map<string,string> {
  const occupied=new Map<string,string>();
  const redirects=new Map<string,string>();
  for(const entry of entries) {
    const route=articleRoute(entry);
    if(occupied.has(route))throw new Error(`资料地址重复：${route}（${occupied.get(route)}；${entry.sourcePath}）`);
    occupied.set(route,entry.sourcePath);
    const legacy=`/${entry.section}/${entry.id}`;
    if(route!==legacy+'/')redirects.set(legacy,route);
  }
  return redirects;
}

export function rewriteArticleLinks(html:string,redirects:ReadonlyMap<string,string>,siteUrl:string):string {
  const site=new URL(siteUrl);
  return html.replace(/\bhref="([^"]*)"/g,(attribute,href:string)=>{
    const path=href.split(/[?#]/,1)[0];
    const replacement=redirects.get(path.replace(/\/$/,''));
    if(replacement)return 'href="'+replacement+href.slice(path.length)+'"';
    // Also migrate absolute links and links already carrying the Pages base.
    if(!href.startsWith('/')&&!/^https?:\/\//i.test(href))return attribute;
    let url:URL;
    try { url=new URL(href,site); } catch { return attribute; }
    if(url.origin!==site.origin||!url.pathname.startsWith(site.pathname))return attribute;
    let local:string;
    try { local='/'+decodeURIComponent(url.pathname.slice(site.pathname.length)); } catch { return attribute; }
    const target=redirects.get(local.replace(/\/$/,''));
    if(!target)return attribute;
    const suffix=href.slice(path.length);
    return 'href="'+(/^https?:\/\//i.test(href)?new URL(target.slice(1),site).href:target)+suffix+'"';
  });
}
