"""Reproduce the two local LaTeX formula corrections from the original PDFs.

Usage: python3 scripts/review-fudan-finals.py /path/to/original-pdfs
Requires XeLaTeX, PyMuPDF and NumPy. The input hashes are checked before editing.
Only the specified formula regions are changed; all other page pixels are checked.
"""
from pathlib import Path
import hashlib
import json
import subprocess
import sys
import tempfile

import fitz
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
SPECS = [
    dict(grade=16, pages=6, page=2, baseline=386.312,
         region=(65, 371, 531, 394), tex='finals-2016-conjugation.tex',
         original_sha256='4a6b928355502acac4498a4fd62aae59e0eb306ac677ca0c4196782cf1ad293e'),
    dict(grade=17, pages=7, page=5, baseline=543.463,
         region=(65, 529, 531, 552), tex='finals-2017-jordan.tex',
         original_sha256='f314bf43b0354e83de97d1ece801d31904ff759124e2d735ab85857e8905220c'),
]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def chars_outside(page, region):
    return [c['c'] for b in page.get_text('rawdict')['blocks']
            for line in b.get('lines', []) for span in line['spans']
            for c in span['chars'] if not fitz.Rect(c['bbox']).intersects(region)]


def main():
    originals = Path(sys.argv[1]).resolve()
    records = []
    for spec in SPECS:
        filename = f"{spec['grade']}级期末大题解答.pdf"
        original = originals / filename
        if digest(original) != spec['original_sha256']:
            raise ValueError(f'Unexpected original PDF: {filename}')
        output = ROOT / 'content/problems' / filename
        if original == output:
            raise ValueError('Original and output paths must differ')
        with tempfile.TemporaryDirectory() as temp:
            subprocess.run(['xelatex', '-interaction=nonstopmode', '-halt-on-error',
                            '-no-shell-escape', f'-output-directory={temp}',
                            str(ROOT / 'print/fudan' / spec['tex'])],
                           check=True, stdout=subprocess.DEVNULL)
            overlay = fitz.open(Path(temp) / Path(spec['tex']).with_suffix('.pdf'))
            fragment = overlay[0]
            # The first math-italic glyph is on the equation's main baseline.
            span = next(s for b in fragment.get_text('dict')['blocks']
                        for line in b.get('lines', []) for s in line['spans']
                        if s['font'] == 'CMMI10' and abs(s['size'] - 10.9091) < .01)
            before = fitz.open(original)
            edited = fitz.open(original)
            assert len(edited) == spec['pages']
            page = edited[spec['page']]
            region = fitz.Rect(spec['region'])
            page.add_redact_annot(region, fill=(1, 1, 1))
            page.apply_redactions(images=0, graphics=2, text=0)
            x = (page.rect.width - fragment.rect.width) / 2
            y = spec['baseline'] - span['origin'][1]
            target = fitz.Rect(x, y, x + fragment.rect.width, y + fragment.rect.height)
            assert region.contains(target), (region, target)
            page.show_pdf_page(target, overlay, 0)
            edited.save(output, garbage=4, deflate=True)
            edited.close()
            after = fitz.open(output)
            for i, (a, b) in enumerate(zip(before, after)):
                assert a.rect == b.rect
                exclusion = region if i == spec['page'] else fitz.Rect()
                assert chars_outside(a, exclusion) == chars_outside(b, exclusion)
                pa = a.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
                pb = b.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
                aa = np.frombuffer(pa.samples, dtype=np.uint8).reshape(pa.height, pa.width, 3)
                bb = np.frombuffer(pb.samples, dtype=np.uint8).reshape(pb.height, pb.width, 3)
                changed = np.any(aa != bb, axis=2)
                if i == spec['page']:
                    x0, y0, x1, y1 = [int(v * 2) for v in region]
                    changed[y0:y1+1, x0:x1+1] = False
                assert not changed.any(), f'Unexpected page change: {filename}, p{i+1}'
            assert before.get_toc() == after.get_toc()
            records.append(dict(file=filename, pages=len(after), bytes=output.stat().st_size,
                                sha256=digest(output), original_sha256=spec['original_sha256'],
                                corrected_page=spec['page'] + 1,
                                formula_region_pt=list(spec['region']),
                                unchanged_text_and_pixels_outside_formula=True))
    report = ROOT / 'docs/reviews/fudan-grade16-grade17-pdfs.json'
    report.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(records, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
