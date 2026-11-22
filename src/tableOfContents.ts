// Give navigation lists their own presentation without changing ordinary lists.
type Node = {type:string; value?:string; url?:string; children?:Node[]; depth?:number; data?:{hProperties?:Record<string,unknown>}};
const textOf=(node:Node):string=>node.value??node.children?.map(textOf).join('')??'';
const directoryHeading=/(?:目次|目录|索引|导航)/;
function isNavigationList(node:Node):boolean {
  return node.type==='list' && !!node.children?.length && node.children.every(item=>{
    const paragraph=item.children?.[0];
    if(paragraph?.type!=='paragraph')return false;
    const first=paragraph.children?.[0];
    if(first?.type==='text' && /^§\s*\d+(?:\.\d+)+/u.test(first.value??''))return true;
    return first?.type==='link' && /^(?:#|\/)/.test(first.url??'') &&
      paragraph.children?.every(child=>child===first || child.type==='link' || child.type==='text');
  });
}
function styleList(node:Node) {
  node.data={...node.data,hProperties:{...node.data?.hProperties,className:['toc-list'],role:'list'}};
  for(const item of node.children??[])for(const child of item.children??[]) {
    if(child.type==='list')styleList(child);
    if(child.type!=='paragraph')continue;
    const link=child.children?.find(part=>part.type==='link');
    const label=link?.children?.[0];
    if(label?.type==='text')label.value=label.value?.replace(/^\s*(?:§\s*)?(\d+(?:\.\d+)+)(?=\s|[　])/u,'§$1');
  }
}
export default function remarkTableOfContents(){
  return(tree:Node)=>{
    let directoryDepth:number|undefined;
    for(const node of tree.children??[]) {
      if(node.type==='heading') {
        if(directoryHeading.test(textOf(node)))directoryDepth=node.depth;
        else if(directoryDepth!==undefined && (node.depth??0)<=directoryDepth)directoryDepth=undefined;
      }
      if(node.type==='list' && (isNavigationList(node) || directoryDepth!==undefined))styleList(node);
    }
  };
}
