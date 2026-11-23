// External TeX SVG images cannot inherit CSS across the image boundary.
// Resolve their ordinary ink from the same theme token at build time instead.
export function mathTextColor(css:string):string {
  const color=css.match(/:root\s*\{[^}]*?--ink:\s*(#[\da-f]{6})\s*;/i)?.[1];
  if(!color)throw new Error('Missing six-digit --ink theme color');
  return color.toLowerCase();
}

export function colorMathSvg(svg:string,color:string):string {
  if(!/^#[\da-f]{6}$/i.test(color))throw new Error('Invalid math ink color');
  // Cairo writes paint both as presentation attributes and CSS declarations.
  // Match only pure black; preserve paths, metrics, opacity and special colors.
  const black=String.raw`(?:#000(?:000)?|black|rgb\(\s*0%?\s*,\s*0%?\s*,\s*0%?\s*\))`;
  return svg
    .replace(new RegExp(`(\\b(?:fill|stroke|color)=["'])${black}(["'])`,'gi'),`$1${color}$2`)
    .replace(new RegExp(`(\\b(?:fill|stroke|color):\\s*)${black}(?=\\s*[;"'])`,'gi'),`$1${color}`);
}
