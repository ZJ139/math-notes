import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';

// An external <img> cannot inherit text stroke/font weight from the page.
// Put a crisp, centered outline inside the SVG itself, only for screens.
// 0.18 PDF pt is about 0.36 CSS px at a 20px formula size (0.18px per side).
// TeX's paths, positions, viewBox, italic correction and 3pt bleed stay intact.
const screenStyle='@media screen{.math-screen-glyph{stroke:currentColor;stroke-width:0.18;stroke-linejoin:round;paint-order:stroke fill}}';
export const mathAppearanceVersion=createHash('sha256').update(readFileSync(new URL(import.meta.url))).digest('hex').slice(0,16);

export function screenMathSvg(svg:string):string {
  // Cairo versions use either fill attributes or inline fill declarations.
  // Mirror each paint into color so reused glyphs keep their own ink, including
  // explicitly colored mathematics. Do not rely on SVG2 context-fill support.
  return svg
    // <use> clones a glyph into its shadow tree, without the <defs> ancestor.
    // A class on the path works there; a `defs path` selector silently fails.
    .replace(/(<(?:g|symbol)\b[^>]*\bid="glyph[^"]*"[^>]*>)([\s\S]*?)(<\/(?:g|symbol)>)/g,(_match,start,paths,end)=>start+paths.replace(/<path\b/g,'<path class="math-screen-glyph"')+end)
    .replace(/\bfill="([^"<>]+)"/g,(match,fill)=>fill==='none'?match:`${match} color="${fill}"`)
    .replace(/\bfill:\s*([^;"<>]+)/g,(match,fill)=>fill.trim()==='none'?match:`${match};color:${fill}`)
    .replace(/(<svg\b[^>]*>)/,`$1\n<style>${screenStyle}</style>`);
}
