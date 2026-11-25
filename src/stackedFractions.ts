// Normalize arithmetic division before both KaTeX/MathML and TeX/SVG rendering.
// Work on TeX atoms rather than a regex: scripts, function arguments, roots and
// balanced groups must stay attached to their numerator or denominator.
type Kind = 'atom' | 'function' | 'prefix' | 'boundary' | 'space' | 'slash';
type Atom = {value:string;kind:Kind};
const functions = /^(?:sin|cos|tan|cot|sec|csc|sinh|cosh|tanh|coth|arcsin|arccos|arctan|log|ln|exp|arg|det|dim|ker|gcd|operatorname)$/;
const prefixes = /^(?:sum|prod|coprod|int|iint|iiint|oint|lim|limsup|liminf|sup|inf|max|min|bigcup|bigcap|bigsqcup|bigoplus|bigotimes)$/;
const boundaries = /^(?:quad|qquad|enspace|hspace|vspace|text|textrm|textsf|textbf|begin|end|tag|label|color|displaystyle|textstyle|scriptstyle|scriptscriptstyle|in|notin|ni|to|rightarrow|longrightarrow|longmapsto|mapsto|longleftrightarrow|leftrightarrow|Rightarrow|Longrightarrow|Leftrightarrow|Longleftrightarrow|le|leq|ge|geq|ne|neq|equiv|sim|simeq|approx|asymp|propto|subset|subseteq|supset|supseteq|perp|parallel|mid|pm|mp|times|cdot|cup|cap|setminus|backslash|land|lor)$/;
const opaque = /^(?:text|textrm|textsf|textbf|operatorname|begin|end|tag|label|color|hspace|vspace)$/;
const unary = /^(?:mathbb|mathcal|mathfrak|mathrm|mathbf|mathsf|mathit|boldsymbol|overline|underline|bar|hat|widehat|tilde|widetilde|vec|dot|ddot|boxed|phantom|vphantom|hphantom|overbrace|underbrace|not)$/;
const twoArgs = /^(?:frac|dfrac|tfrac|binom|dbinom|tbinom|overset|underset|stackrel)$/;
const delimiters:Record<string,string>={lvert:'\\rvert',lVert:'\\rVert',langle:'\\rangle',lbrace:'\\rbrace',lceil:'\\rceil',lfloor:'\\rfloor',lbrack:'\\rbrack',lparen:'\\rparen',vert:'\\vert',Vert:'\\Vert'};
const otherBoundaries=/^(?:leqslant|geqslant|ll|gg|iff|implies|downarrow|uparrow|forall|exists|notexists|circ|oplus|otimes|ast|div|lnot|smallsetminus|hline)$/;

export function stackedFractions(tex:string):string {
  if(!tex.includes('/'))return tex;
  const tokens=tex.match(/\\[A-Za-z]+\*?|\\[^A-Za-z]|\s+|[0-9]+(?:\.[0-9]+)?|[^]/g)||[];
  let at=0;
  const skipSpace=()=>{let value='';while(/^\s+$/.test(tokens[at]||''))value+=tokens[at++];return value;};
  function argument():string {
    const space=skipSpace();
    // An unbraced TeX argument is one token, even when adjacent digits form a
    // number elsewhere: \frac12 consumes 1 and 2, not the integer 12.
    if(/^\d/.test(tokens[at]||'')&&tokens[at].length>1){
      const digits=tokens[at];tokens.splice(at,1,digits[0],digits.slice(1));
    }
    return space+(at<tokens.length?primary(false).value:'');
  }
  function primary(scripts=true):Atom {
    const token=tokens[at++];
    let value=token,kind:Kind='atom';
    if(/^\s+$/.test(token))return {value,kind:'space'};
    if(token==='{')value='{'+sequence('}')+(tokens[at]==='}'?tokens[at++]:'');
    else if(token==='('||token==='['){
      const close=token==='('?')':']';
      // Some existing mathematical fragments have unmatched delimiters. Leave
      // their original syntax intact instead of swallowing the remaining row.
      if(hasClose(close))value=token+sequence(close)+(tokens[at]===close?tokens[at++]:'');
      else kind='boundary';
    }else if((token==='|'||token==='\\|')&&hasClose(token))value=token+sequence(token)+(tokens[at]===token?tokens[at++]:'');
    else if(token==='\\{'&&hasClose('\\}'))value=token+sequence('\\}')+(tokens[at]==='\\}'?tokens[at++]:'');
    else if(token==='\\left'){
      const open=skipSpace()+(tokens[at++]||'');
      value=token+open+sequence('\\right');
      if(tokens[at]==='\\right')value+=tokens[at++]+skipSpace()+(tokens[at++]||'');
    }else if(/^\\(?:big|Big|bigg|Bigg)[lrm]?$/.test(token)){
      const delimiter=skipSpace()+(tokens[at++]||'');
      if(delimiter==='/'){value='/';kind='slash';}
      else if(/[([]$/.test(delimiter)){
        const close=delimiter.endsWith('(')?')':']';
        value=token+delimiter+sequence(close);
        if(tokens[at]===close)value+=tokens[at++];
      }else {value=token+delimiter;kind='boundary';}
    }else if(token.startsWith('\\')){
      const name=token.slice(1).replace(/\*$/,'');
      if(opaque.test(name)){
        const space=skipSpace();value+=space;
        if(tokens[at]==='{'){
          let depth=0;
          do{const next=tokens[at++];value+=next;if(next==='{')depth++;if(next==='}')depth--;}while(at<tokens.length&&depth>0);
        }
        kind=functions.test(name)?'function':'boundary';
      }else if(twoArgs.test(name))value+=argument()+argument();
      else if(name==='sqrt'){
        value+=skipSpace();
        if(tokens[at]==='[')value+=primary(false).value;
        value+=argument();
      }else if(unary.test(name))value+=argument();
      else if(prefixes.test(name))kind='prefix';
      else if(functions.test(name))kind='function';
      else if(boundaries.test(name)||otherBoundaries.test(name)||token==='\\\\'||/^\\[,;:! ]$/.test(token))kind='boundary';
      else if(name in delimiters){
        const close=delimiters[name];
        if(hasClose(close))value=token+sequence(close)+(tokens[at]===close?tokens[at++]:'');
        else kind='boundary';
      }
    }else if(token==='/')kind='slash';
    else if(/^[+\-=<>,.:;&!)}\]]$/.test(token))kind='boundary';
    if(scripts&&['atom','function','prefix'].includes(kind)){
      while(at<tokens.length){
        if(tokens[at]==='^'||tokens[at]==='_')value+=tokens[at++]+argument();
        else if(tokens[at]==="'"||tokens[at]==='!')value+=tokens[at++];
        else break;
      }
    }
    return {value,kind};
  }
  function hasClose(close:string):boolean {
    return tokens.slice(at).includes(close);
  }
  function sequence(close?:string):string {
    const atoms:Atom[]=[];
    while(at<tokens.length&&tokens[at]!==close){
      // Sized closing delimiters belong to their enclosing group, not its last
      // operand. Keep their sizing command together with that closing glyph.
      if(close&&/^\\(?:big|Big|bigg|Bigg)r?$/.test(tokens[at])&&tokens[at+1]===close){
        break;
      }
      atoms.push(primary());
    }
    let ending='';
    if(close&&/^\\(?:big|Big|bigg|Bigg)r?$/.test(tokens[at]||'')&&tokens[at+1]===close)ending=tokens[at++];
    for(let i=0;i<atoms.length;i++){
      if(atoms[i].kind!=='slash')continue;
      let left=i-1;while(left>=0&&atoms[left].kind==='space')left--;
      if(left<0||!['atom','function'].includes(atoms[left].kind))continue;
      let start=left;
      while(start>0&&['atom','function','space'].includes(atoms[start-1].kind))start--;
      while(atoms[start].kind==='space')start++;
      let right=i+1;while(right<atoms.length&&atoms[right].kind==='space')right++;
      if(right>=atoms.length||!['atom','function','prefix'].includes(atoms[right].kind))continue;
      let end=right+1;
      // A ratio of two sums/products includes the leading operator in both
      // operands; a summand such as sum_k 1/k keeps its sum outside the bar.
      if(atoms[right].kind==='prefix'){
        let before=start-1;while(atoms[before]?.kind==='space')before--;
        if(atoms[before]?.kind==='prefix')start=before;
      }
      // A named function includes its argument; differentials include dx or
      // partial x. Ordinary products after the divisor stay outside the bar.
      if(atoms[right].kind==='function'||atoms[right].kind==='prefix'){
        while(end<atoms.length&&['atom','function','prefix','space'].includes(atoms[end].kind))end++;
      }else if(/^(?:d|\\(?:partial|Delta)(?:\^[^ ]+)?|\\mathrm\{d\})$/.test(atoms[right].value)){
        while(end<atoms.length&&atoms[end].kind==='space')end++;
        if(atoms[end]?.kind==='atom')end++;
      }else{
        let next=end;while(atoms[next]?.kind==='space')next++;
        if(atoms[next]?.kind==='atom'&&/^(?:\(|\\left\(|\\bigl?\()/.test(atoms[next].value))end=next+1;
      }
      while(end>right&&atoms[end-1].kind==='space')end--;
      const numerator=atoms.slice(start,i).map(a=>a.value).join('').trim();
      const denominator=atoms.slice(right,end).map(a=>a.value).join('').trim();
      // These are quotient spaces / field extensions, not scalar division.
      // A blackboard symbol *inside* d(t,T) still belongs to scalar division.
      if(/^(?:\\mathbb\b|SL\b)/.test(numerator)||/^\\(?:operatorname\{im\}|ker\b)/.test(denominator)||(numerator==='V'&&denominator==='W')||(numerator==='K'&&denominator==='F'))continue;
      atoms.splice(start,end-start,{kind:'atom',value:`\\frac{${numerator}}{${denominator}}`});
      i=start;
    }
    return atoms.map(a=>a.value).join('')+ending;
  }
  return sequence();
}

type MathNode={type:string;value?:string;children?:MathNode[];data?:{hChildren?:MathNode[]}};
export default function remarkStackedFractions(){
  return(tree:MathNode)=>{
    function walk(node:MathNode){
      if(node.type==='math'||node.type==='inlineMath'){
        const value=stackedFractions(node.value||'');
        node.value=value;
        // remark-math also stores the source in the prebuilt HAST code node.
        function updateSource(child:MathNode){
          if(child.type==='text')child.value=value;
          child.children?.forEach(updateSource);
        }
        node.data?.hChildren?.forEach(updateSource);
      }
      node.children?.forEach(walk);
    }
    walk(tree);
  };
}
