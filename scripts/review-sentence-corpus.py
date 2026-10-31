"""Verify the complete sentence corpus against the unmodified exam PDFs.

Run --write after editorial review to refresh the reproducible source inventory.
No external service or Python package is needed; Poppler supplies PDF extraction.
"""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
REPORT = ROOT / 'docs/reviews/reading-sentences-2008-2026.json'


def normalize(value):
    return re.sub(r'[^a-z0-9]', '', unicodedata.normalize('NFKC', value).lower())


def section(markdown, heading, level=2):
    mark = '#' * level
    match = re.search(rf'^{mark} {re.escape(heading)}\s*\n(.*?)(?=^#{{1,{level}}} |\Z)', markdown, re.M | re.S)
    assert match, heading
    return match[1]


def quote(body):
    match = re.search(r'^> (.+(?:\n> .+)*)', body, re.M)
    assert match, body[:100]
    return ' '.join(line.removeprefix('> ').strip() for line in match[0].splitlines())


def audit():
    pdfs, pages = {}, {}
    for year in range(2006, 2027):
        pdf = ROOT / f'content/english/exams/{year}英一.pdf'
        pdfs[str(year)] = hashlib.sha256(pdf.read_bytes()).hexdigest()
        pages[year] = subprocess.check_output(['pdftotext', str(pdf), '-'], text=True).split('\f')
    rows, originals, exercises = [], {}, {}
    for path in sorted((ROOT / 'content/english/sentences').glob('*.md')):
        markdown = path.read_text()
        if not re.search(r'^## 原句$', markdown, re.M):
            continue
        original = quote(section(markdown, '原句'))
        meta = markdown.split('---', 2)[1]
        source = re.findall(r'(?<!\d)((?:19|20)\d{2})年', re.search(r'^tags: (.+)$', meta, re.M)[1])
        texts = re.findall(r'Text ([1-4])', re.search(r'^tags: (.+)$', meta, re.M)[1])
        assert len(set(source)) == len(set(texts)) == 1, path.name
        year, text = int(source[0]), int(texts[0])
        key = normalize(original)
        assert key not in originals, f'Duplicate source: {path.name} and {originals.get(key)}'
        originals[key] = path.name
        source_page = pages[year][text]
        extraction_note = None
        if key not in normalize(source_page):
            if path.name == 'sentence-v1-f20-2014-text-4.md':
                assert all(normalize(part) in normalize(source_page) for part in original.split('2½'))
                extraction_note = 'The source PDF has a damaged numeral glyph/text layer; 2½ follows the separately reviewed legacy translation material.'
            else:
                raise AssertionError(f'Original not found in {year} Text {text}: {path.name}: {original}')
        assert f'/files/english/exams/{year}英一.pdf#page={text+1}' in section(markdown, '原句'), path.name
        headings = re.findall(r'^## (.+)$', markdown, re.M)
        assert headings == ['原句', '句子拆解', '句子直译', '原创拓展', '重要单词'], (path.name, headings)
        analysis = section(markdown, '句子拆解')
        segmented = quote(section(analysis, '断句', 3))
        assert normalize(segmented) == key, f'Segmentation changes words: {path.name}'
        for heading in ['主干读法', '逐项分析', '理解要点']:
            assert section(analysis, heading, 3).strip(), (path.name, heading)
        assert len(re.findall(r'^\|', section(analysis, '逐项分析', 3), re.M)) >= 4, path.name
        practice = section(markdown, '原创拓展')
        assert len(re.findall(r'^### 迁移练习 [12]\s*$', practice, re.M)) == 2, path.name
        for number in (1, 2):
            exercise = section(practice, f'迁移练习 {number}', 3)
            training = quote(exercise)
            training_key = normalize(training)
            assert training_key not in exercises, f'Duplicate practice: {path.name} and {exercises.get(training_key)}'
            exercises[training_key] = f'{path.name} / {number}'
            assert '参考答案' in exercise and '训练句拆解' in exercise, (path.name, number)
            assert re.search(r'[\u3400-\u9fff]', exercise.split('参考答案', 1)[1]), path.name
            training_segments = re.search(r'^\*{0,2}(?:断句|参考答案)\*{0,2}：\*{0,2}\s*(.+)$', exercise, re.M)
            assert training_segments, f'Missing exercise segmentation: {path.name} / {number}'
            assert normalize(training_segments[1]) == training_key, f'Exercise segmentation changes words: {path.name} / {number}'
        vocabulary = section(markdown, '重要单词')
        assert '核心' in vocabulary and '可能陌生' in vocabulary, path.name
        assert len(re.findall(r'^\|', vocabulary, re.M)) >= 7, path.name
        rows.append({'path': str(path.relative_to(ROOT / 'content')), 'year': year, 'text': text,
                     'pdfPage': text+1, 'originalSha256': hashlib.sha256(original.encode()).hexdigest(),
                     'wordCount': len(original.split()), 'exerciseCount': 2,
                     **({'extractionNote': extraction_note} if extraction_note else {})})
    assert len([r for r in rows if 'sentence-v1-' in r['path']]) == 74, 'Legacy lessons lost'
    for year in range(2008, 2027):
        for text in range(1, 5):
            assert sum(r['year'] == year and r['text'] == text for r in rows) >= 3, (year, text)
    assert not (originals.keys() & exercises.keys()), 'An exercise repeats an exam quotation'
    articles = [{'year': year, 'text': text, 'sentenceCount': sum(r['year'] == year and r['text'] == text for r in rows)}
                for year in range(2006, 2027) for text in range(1, 5)]
    return {'version': 1, 'reviewedAt': '2026-10-27',
            'selection': 'Each 2008–2026 Part A article was read; the selection prioritizes distinct syntactic difficulties and useful expressions. All 74 legacy lessons are retained.',
            'sentenceCount': len(rows), 'exerciseCount': len(exercises),
            'examPdfSha256': pdfs, 'articles': articles, 'entries': rows}


if __name__ == '__main__':
    result = audit()
    if sys.argv[1:] == ['--write']:
        REPORT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    else:
        assert not sys.argv[1:], 'Usage: review-sentence-corpus.py [--write]'
        assert result == json.loads(REPORT.read_text()), 'Sentence source inventory is stale'
    print(f"Verified {result['sentenceCount']} original quotations, complete segmentations, {result['exerciseCount']} distinct exercises, 76 requested articles and 74 preserved lessons.")
