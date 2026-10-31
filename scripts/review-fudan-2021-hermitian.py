"""Clarify the existing conjugate-transpose proof without repaginating the PDF.

Usage (from any directory):
  python3 scripts/review-fudan-2021-hermitian.py /path/to/original.pdf
Requires XeLaTeX with xeCJK/preview, PyMuPDF, NumPy, and Poppler pdffonts.
The original already has conjugation bars: this is a notation clarification.
"""
from pathlib import Path
import hashlib
import json
import math
import subprocess
import sys
import tempfile

import fitz
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
NAME = '21级期末大题解答.pdf'
ORIGINAL_SHA256 = '593365e36f1aefd764d723984f357cfb746ba557b028c26a4c236f8bb9844d4a'
PAGE = 1
REGION = fitz.Rect(60, 59, 535, 234)


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def spans(page):
    return [s for b in page.get_text('dict')['blocks']
            for line in b.get('lines', []) for s in line['spans']]


def outside_text(page, region):
    return [c['c'] for b in page.get_text('rawdict')['blocks']
            for line in b.get('lines', []) for s in line['spans']
            for c in s['chars'] if not fitz.Rect(c['bbox']).intersects(region)]


def links(page):
    return [{k: v for k, v in item.items() if k not in ('xref', 'id')}
            for item in page.get_links()]


def main():
    original = Path(sys.argv[1]).resolve()
    output = ROOT / 'content/problems' / NAME
    if original == output or digest(original) != ORIGINAL_SHA256:
        raise ValueError('Supply the unmodified original PDF at a separate path')
    source = ROOT / 'print/fudan/finals-2021-hermitian.tex'
    with tempfile.TemporaryDirectory() as temp:
        subprocess.run(['xelatex', '-interaction=nonstopmode', '-halt-on-error',
                        '-no-shell-escape', f'-output-directory={temp}', str(source)],
                       cwd=ROOT, check=True, stdout=subprocess.DEVNULL)
        log = (Path(temp) / source.with_suffix('.log').name).read_text()
        assert not any(t in log for t in ('Missing character:', 'Overfull'))
        overlay = fitz.open(Path(temp) / source.with_suffix('.pdf').name)
        assert len(overlay) == 1
        before = fitz.open(original)
        edited = fitz.open(original)
        assert len(before) == 5
        # Match the original 11 pt baseline and left edge without scaling.
        old = next(s for s in spans(before[PAGE]) if s['text'].startswith('分别左乘'))
        new = next(s for s in spans(overlay[0]) if s['text'].startswith('本题中'))
        assert abs(old['size'] - new['size']) < .001
        x = old['origin'][0] - new['origin'][0]
        y = old['origin'][1] - new['origin'][1]
        target = fitz.Rect(x, y, x + overlay[0].rect.width, y + overlay[0].rect.height)
        assert REGION.contains(target), (REGION, target)
        page = edited[PAGE]
        page.add_redact_annot(REGION, fill=(1, 1, 1))
        page.apply_redactions(images=0, graphics=2, text=0)
        page.show_pdf_page(target, overlay, 0)
        edited.save(output, garbage=4, deflate=True)
        edited.close()

    after = fitz.open(output)
    assert len(after) == len(before)
    assert before.metadata == after.metadata
    assert before.get_toc() == after.get_toc()
    for i, (a, b) in enumerate(zip(before, after)):
        assert a.rect == b.rect and a.rotation == b.rotation
        assert links(a) == links(b)
        region = REGION if i == PAGE else fitz.Rect()
        assert outside_text(a, region) == outside_text(b, region)
        pa = a.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        pb = b.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        aa = np.frombuffer(pa.samples, dtype=np.uint8).reshape(pa.height, pa.width, 3)
        bb = np.frombuffer(pb.samples, dtype=np.uint8).reshape(pb.height, pb.width, 3)
        changed = np.any(aa != bb, axis=2)
        if i == PAGE:
            x0, y0 = math.floor(REGION.x0 * 2), math.floor(REGION.y0 * 2)
            x1, y1 = math.ceil(REGION.x1 * 2), math.ceil(REGION.y1 * 2)
            changed[y0:y1+1, x0:x1+1] = False
        assert not changed.any(), f'Unexpected change outside proof on page {i+1}'
    opening = after[PAGE].get_text(clip=REGION)
    assert 'Hermite' in opening and '∗' in opening and '共轭转置' in opening
    font_report = subprocess.check_output(['pdffonts', str(output)], text=True)
    font_rows = [line.split() for line in font_report.splitlines()[2:] if line.strip()]
    assert all(row[-5] == 'yes' for row in font_rows), 'Every font must be embedded'
    assert 'FandolSong-Regular' in font_report and 'FandolSong-Bold' in font_report
    assert 'CMMI10' in font_report and 'CMR10' in font_report

    report = ROOT / 'docs/reviews/fudan-grade20-grade22-finals.json'
    records = json.loads(report.read_text())
    record = next(r for r in records if r['file'] == NAME)
    record.update(bytes=output.stat().st_size, sha256=digest(output),
                  original_bytes_preserved=False, original_sha256=ORIGINAL_SHA256,
                  clarified_page=PAGE + 1, proof_region_pt=list(REGION),
                  original_conjugation_verified_visually=True,
                  unchanged_text_and_pixels_outside_proof=True,
                  unchanged_metadata_bookmarks_and_links=True,
                  all_fonts_embedded=True)
    report.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(record, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
