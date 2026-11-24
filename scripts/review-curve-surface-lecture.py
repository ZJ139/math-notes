#!/usr/bin/env python3
"""Verify the lecture inventory, source preservation, PDF navigation and fonts."""
from pathlib import Path
import hashlib,json,re,subprocess
import fitz
ROOT=Path(__file__).resolve().parents[1]
md=(ROOT/'content/notes/curve-surface-integrals.md').read_text()
chapters=re.findall(r'^## §(\d+) ',md,re.M)
assert chapters==[str(i) for i in range(1,12)],chapters
examples=re.findall(r'^### §\d+\.\d+ 问题 ([LCSF][1-4])',md,re.M)
assert len(examples)==16 and len(set(examples))==16,examples
figs=re.findall(r'!\[[^\]]+\]\(/figures/curve-surface/([a-z-]+)\.svg\)',md)
assert len(figs)==12 and len(set(figs))==12
for fig in figs:
 assert (ROOT/f'public/figures/curve-surface/{fig}.svg').is_file()
 assert (ROOT/f'print/curve-surface-figures/{fig}.pdf').is_file()
records=json.loads((ROOT/'docs/reviews/curve-surface-appendix-preservation.json').read_text())
expected_examples=[]
for item in records:
 raw=(ROOT/item['file']).read_bytes()
 assert hashlib.sha256(raw).hexdigest()==item['sha256']
 expected_examples+=re.findall(r'\\entry\{例 ([0-9.]+)\}',raw.decode())
assert len(expected_examples)==58 and len(set(expected_examples))==58
assert '原解存疑' in (ROOT/'print/curve-surface-appendix/sections/curve.tex').read_text()
result={'sections':chapters,'main_examples':examples,'figures':figs,'appendix_examples':len(expected_examples),'appendix_source_byte_preservation':True,'pdfs':[]}
for name in ['curve-surface-integrals-cm-bea','curve-surface-appendix-starred-cm-bea']:
 file=ROOT/'content/notes'/f'{name}.pdf';d=fitz.open(file);toc=d.get_toc()
 links=[link for p in d for link in p.get_links()]
 assert all(0<=l.get('page',0)<len(d) for l in links if l['kind']==fitz.LINK_GOTO)
 assert all(1<=t[2]<=len(d) for t in toc)
 fonts=subprocess.run(['pdffonts',str(file)],capture_output=True,text=True,check=True).stdout
 for line in fonts.splitlines()[2:]:
  assert re.search(r'\byes\s+(yes|no)\s+(yes|no)\s+\d+\s+\d+\s*$',line),line
 assert 'FandolSong-Regular' in fonts and 'FandolSong-Bold' in fonts
 assert 'CMSS10' in fonts and 'CMSSI10' in fonts
 log=(ROOT/'outputs/curve-surface'/f'{name}.log').read_text()
 assert not re.search(r'Overfull|Missing character|LaTeX Font Warning|undefined references',log),name
 if 'appendix' in name:
  headings=[re.search(r'^\*例 ([0-9.]+) ',x[1])[1] for x in toc if re.match(r'^\*例 [0-9.]+ ',x[1])]
  assert sorted(headings)==sorted(expected_examples),(len(headings),headings)
 else:
  assert len([x for x in toc if x[0]==1])==11
 result['pdfs'].append({'file':str(file.relative_to(ROOT)),'pages':len(d),'bookmarks':len(toc),'links':len(links),'sha256':hashlib.sha256(file.read_bytes()).hexdigest(),'size_bytes':file.stat().st_size,'all_fonts_embedded':True,'no_overfull_or_missing_glyphs':True})
(ROOT/'docs/reviews/curve-surface-integrals-validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(result,ensure_ascii=False,indent=2))
