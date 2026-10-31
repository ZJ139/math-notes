"""Recheck the frozen CMC archive against the reviewed index (Poppler only)."""
from collections import Counter
from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
review = json.loads((ROOT / 'docs/reviews/cmc-paper-directory.json').read_text())
pdf = ROOT / review['file']
data = pdf.read_bytes()
assert len(data) == review['bytes']
assert sha256(data).hexdigest() == review['sha256'], 'Original PDF changed'
original = json.loads((ROOT / 'docs/reviews/problem-pdfs-2026-10-25.json').read_text())
assert review['sha256'] == next(f['sha256'] for f in original['files'] if f['file'] == pdf.name)
pages = subprocess.check_output(['pdftotext', '-layout', str(pdf), '-']).decode().split('\f')[:-1]
assert len(pages) == review['pages'] == 175
assert re.search(r'60\s*套试卷', pages[0])
normalize = lambda s: re.sub(r'\s+', '', s)
lines = lambda p: [line.strip() for line in p.splitlines() if line.strip()]
toc = [(normalize(m[1]), int(m[2])) for p in pages[1:4]
       for m in re.finditer(r'^(第\s*\d+\s*届.*?)\s+(\d+)\s*$', p, re.M)]
found = []
for number, page in enumerate(pages[4:], 5):
    headings = [s for s in lines(page) if re.match(r'^第\s*\d+\s*届', s)]
    assert len(headings) in (1, 2), f'Unexpected heading at PDF page {number}'
    if len(headings) == 2:
        found.append((number, headings[1]))
entries = review['entries']
assert len(toc) == len(found) == len(entries) == review['paper_count'] == 60
assert len({normalize(e['title']) for e in entries}) == 60
assert [e['pdf_start'] for e in entries] == [p for p, _ in found]
markdown = (ROOT / review['entry']).read_text()
actual_links = re.findall(r'\[([^\]\n]+)\]\(/files/problems/数学类CMC真题汇总.pdf#page=(\d+)\)', markdown)
assert [(normalize(title), int(page)) for title, page in actual_links] == [(normalize(e['title']), e['pdf_start']) for e in entries]
fingerprints = []
for i, e in enumerate(entries):
    start, end, title = e['pdf_start'], e['pdf_end'], e['title']
    assert (start, title) == found[i]
    assert toc[i] == (normalize(title), e['printed_start']), title
    assert int(re.search(r'第\s*(\d+)\s*届', title)[1]) == e['edition']
    assert e['stage'] == ('初赛' if '初赛' in title else '决赛')
    assert end == (entries[i + 1]['pdf_start'] - 1 if i + 1 < len(entries) else 175)
    assert e['printed_start'] == start - 4 and e['printed_end'] == end - 4
    assert f'PDF 第 {start}—{end} 页（纸面第 {start-4}—{end-4} 页）' in markdown
    content = []
    for n in range(start, end + 1):
        text = lines(pages[n - 1])
        assert normalize(text[0].removesuffix('题目版')) == normalize(title), (n, title)
        assert text[-1] == str(n - 4), (n, 'printed page mismatch')
        content += [s for s in text[1:-1] if normalize(s) != normalize(title)]
    fingerprint = sha256(normalize('\n'.join(content)).encode()).hexdigest()
    assert fingerprint == e['paper_text_sha256'], title
    fingerprints.append(fingerprint)
assert len(set(fingerprints)) == 60, 'Duplicate whole-paper text'
assert dict(Counter(e['stage'] for e in entries)) == review['stage_counts'] == {'初赛': 30, '决赛': 30}
missing = [{'edition': n, 'stage': s} for n in range(1, 18) for s in ('初赛', '决赛')
           if not any(e['edition'] == n and e['stage'] == s for e in entries)]
assert missing == review['missing_stages'] == []
assert review['duplicate_titles'] == review['duplicate_full_papers'] == review['toc_mismatches'] == []
print('Verified 175 pages / 60 paper titles, ranges and links / 17 editions / 30 preliminaries + 30 finals; original bytes preserved.')
