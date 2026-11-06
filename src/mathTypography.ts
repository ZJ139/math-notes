// Keep punctuation attached to inline math. An SVG scroll box is atomic to
// browser line breaking, which otherwise permits a comma at the next line's
// start or an opening parenthesis alone at the previous line's end.
export default function rehypeMathTypography(){
  return(tree:any)=>{
    function walk(node:any){
      const children=node.children;
      if(!children||node.properties?.className?.includes('katex'))return;
      for(let i=0;i<children.length;i++){
        const child=children[i];
        if(child.properties?.className?.includes('katex')&&!node.properties?.className?.includes('katex-display')){
          const before=children[i-1],after=children[i+1];
          const opening=before?.type==='text'?before.value.match(/[（(［\[【《「『]+$/)?.[0]||'':'';
          const closing=after?.type==='text'?after.value.match(/^[，。；：！？、）)］\]】》」』,.;:!?]+/)?.[0]||'':'';
          if(opening||closing){
            if(opening)before.value=before.value.slice(0,-opening.length);
            if(closing)after.value=after.value.slice(closing.length);
            children[i]={type:'element',tagName:'span',properties:{className:['math-inline-group'],style:`--math-punctuation-width:${opening.length+closing.length}em`},children:[
              ...(opening?[{type:'text',value:opening}]:[]),child,...(closing?[{type:'text',value:closing}]:[]),
            ]};
          }
        }else walk(child);
      }
    }
    walk(tree);
  };
}
