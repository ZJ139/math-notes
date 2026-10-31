"""Verify chapter navigation against the unchanged PDFs using Poppler only."""
from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
audit = json.loads((ROOT / 'docs/reviews/pdf-chapter-navigation.json').read_text())
normalize = lambda s: re.sub(r'\s+', '', s)
chinese = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
total = 0
for source in audit['files']:
    pdf = ROOT / source['file']
    data = pdf.read_bytes()
    assert len(data) == source['bytes'] and sha256(data).hexdigest() == source['sha256'], f'PDF changed: {pdf.name}'
    pages = subprocess.check_output(['pdftotext', '-layout', str(pdf), '-']).decode().split('\f')[:-1]
    assert len(pages) == source['pages'], pdf.name
    chapters = source['chapters']
    found = []
    for n in range(chapters[0]['pdf_start'], len(pages) + 1):
        lines = [line.strip() for line in pages[n-1].splitlines() if line.strip()]
        assert lines[-1] == str(n-source['printed_offset']), (pdf.name, n, 'printed footer')
        body = lines[1:-1]  # Exclude running header and printed footer.
        for i, line in enumerate(body):
            for chapter in chapters:
                number = chapter['number']
                labels = [f'第{number}章']
                if number < len(chinese):
                    labels.append(f'第{chinese[number]}章')
                expected = [normalize(label + chapter['title']) for label in labels]
                text = normalize(line)
                if text in expected or (text in labels and i+1 < len(body) and normalize(line + body[i+1]) in expected):
                    found.append((number, n, i > 0))
    assert found == [(c['number'], c['pdf_start'], c['shared_start']) for c in chapters], (pdf.name, found)
    for i, chapter in enumerate(chapters):
        following = chapters[i+1] if i+1 < len(chapters) else None
        end = following['pdf_start'] - (0 if following['shared_start'] else 1) if following else len(pages)
        assert chapter['pdf_end'] == end, (pdf.name, chapter['number'], 'end page')
        assert chapter['printed_start'] == chapter['pdf_start'] - source['printed_offset']
        assert chapter['printed_end'] == end - source['printed_offset']
    markdown = (ROOT / source['entry']).read_text()
    rows = re.findall(r'^\| \[([^\]]+)\]\(([^\s]+) "PDF 章节直达"\) \| (\d+)—(\d+) 页 \|$', markdown, re.M)
    assert len(rows) == len(chapters), source['entry']
    for (label, url, start, end), chapter in zip(rows, chapters):
        assert normalize(label) == normalize(f'第{chapter["number"]}章{chapter["title"]}')
        assert unquote(url) == f'/files/problems/{pdf.name}#page={chapter["pdf_start"]}'
        assert (int(start), int(end)) == (chapter['pdf_start'], chapter['pdf_end'])
    total += len(chapters)
print(f'Verified {total} chapter headings, shared boundaries, physical/printed pages and links; 3 original PDFs unchanged.')
