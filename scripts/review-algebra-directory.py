"""Extract observed labels only; verify frozen PDFs and generated Markdown indexes.

python3 scripts/review-algebra-directory.py [--write] [--font-check]
The normal check needs Poppler, not PyMuPDF. --font-check independently verifies
every label against bold glyph spans at the PDF's left margin (PyMuPDF).
"""
from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
REVIEW = ROOT / 'docs/reviews/algebra-exercise-directory.json'
CONFIG = [
    ('green-algebra-v0', '高等代数绿皮习题-v0.pdf', 64, 1, 822, 79),
    ('qws-algebra-v2', 'qws高代习题-v2.pdf', 54, 4, 464, 37),
]
CN = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']


def slug(text):
    return re.sub(r'\s+', '-', re.sub(r'[^\w\s-]', '', text.lower())).strip('-')


def extract(config):
    stem, filename, count, front, expected, group_count = config
    pdf = ROOT / 'content/problems' / filename
    digest = sha256(pdf.read_bytes()).hexdigest()
    original = json.loads((ROOT / 'docs/reviews/problem-pdfs-2026-10-25.json').read_text())
    assert digest == next(f['sha256'] for f in original['files'] if f['file'] == filename)
    pages = subprocess.check_output(['pdftotext', '-layout', str(pdf), '-']).decode().split('\f')[:-1]
    assert len(pages) == count
    chapters, groups, records = [], [], []
    group = None
    for pn, text in enumerate(pages[front:], front + 1):
        lines = [s.strip() for s in text.splitlines() if s.strip()]
        # Check every footer, rather than applying an assumed offset unchecked.
        assert lines[-1] == str(pn if front == 1 else pn - 4), (filename, pn)
        for line in lines[1:-1]:
            chapter = re.match(r'^第\s*([一二三四五六七八九十\d]+)\s*章\s+(.+)$', line)
            if chapter:
                n = int(chapter[1]) if chapter[1].isdigit() else CN.index(chapter[1]) + 1
                chapters.append({'number': n, 'title': chapter[2], 'pdf_page': pn})
            if re.match(r'^(习题\s*\d+\.\d+\s|复习题[一二三四五六七八九十]+$|补充题[一二三四五六七八九十]+$)', line):
                label = re.match(r'^(习题\s*\d+\.\d+|复习题\S+|补充题\S+)', line)[1]
                group = {'chapter': chapters[-1]['number'], 'title': line, 'label': label,
                         'pdf_page': pn, 'textbook_pages': None, 'exercises': []}
                groups.append(group)
            if line.startswith('原书第'):
                assert group and group['textbook_pages'] is None
                group['textbook_pages'] = line
            # The three labels joined directly to Chinese text must also count.
            label = re.match(r'^(\*?)(\d+)\.(?!\d)', line)
            if label:
                assert group
                record = {'number': int(label[2]), 'star': bool(label[1]), 'pdf_page': pn,
                          'starred_subparts': []}
                group['exercises'].append(record)
                records.append((pn, label[1] + label[2]))
            for child in re.finditer(r'\*\s*[（(](\d+)[）)]', line):
                group['exercises'][-1]['starred_subparts'].append(int(child[1]))
    assert len(groups) == group_count and len(records) == expected
    assert len(chapters) == (10 if front == 1 else 4)
    for group in groups:
        numbers = [e['number'] for e in group['exercises']]
        assert numbers == sorted(set(numbers))
        group['unobserved_numbers_within_range'] = [n for n in range(1, max(numbers) + 1) if n not in numbers]
        assert (group['textbook_pages'] is None) == (front == 1)
    if '--font-check' in sys.argv:
        import fitz
        found = []
        for pn, page in enumerate(fitz.open(pdf), 1):
            if pn <= front:
                continue
            spans = [(s['bbox'][1], s['text'].strip().rstrip('.'))
                     for b in page.get_text('dict')['blocks'] for l in b.get('lines', []) for s in l['spans']
                     if s['font'] == 'LMRoman10-Bold' and s['bbox'][0] < 80
                     and re.fullmatch(r'\*?\d+\.', s['text'].strip())]
            found += [(pn, label) for _, label in sorted(spans)]
        assert found == records, 'Independent glyph/position extraction disagrees'
    return {'entry': f'content/problems/{stem}.md', 'file': f'content/problems/{filename}',
            'sha256': digest, 'bytes': pdf.stat().st_size, 'pages': count,
            'question_count': expected, 'group_count': group_count,
            'chapters': chapters, 'groups': groups}


def markdown(data):
    green = data['question_count'] == 822
    text = ['## 检索与页码说明', '',
            '按章、节或原书主编号题查找，例如“习题 1.5 第 4 题”或“复习题一 34”。' if green else
            '按章、节或原书主编号题查找，例如“习题 8.1 第 26 题”或“补充题八 6”。', '',
            '下表逐题列出本整理版 PDF 实际出现的主编号。点击“PDF 第几页”进入主编号首次出现的页面；同一题的连续子题不另算主编号，跨页内容请向后翻阅。星号按 PDF 标记区分为主编号星号与子题星号。', '',
            '整理版 PDF 页码从文件首页计为第 1 页，已逐页核对，恰与本文件页脚相同。本文件未列原教材印刷页码，因此全部标为“未标注”，不反推教材页码。' if green else
            '整理版 PDF 页码从封面计为第 1 页，正文从 PDF 第 5 页开始，正文页脚为 1；已逐页核对正文页脚等于 PDF 页码减 4。“原教材页码”仅转录各习题组标题下所列的印刷页范围，不能用于推定某一道题的教材页码。编排说明中的原教材上传件偏移 29 页不用于本文件跳转。', '',
            '本目录只核对已收录 PDF，不宣称重新核对了原教材。未见编号没有页码链接；未见节标题不补造章节内容。部分手机 PDF 阅读器可能忽略页码片段，此时可按表中明确列出的 PDF 页码定位。', '',
            '## 章节目录', '', '| 章节 | 习题组 | 主编号题数 | 整理版 PDF 起始页 |', '| --- | --- | --- | --- |']
    for chapter in data['chapters']:
        groups = [g for g in data['groups'] if g['chapter'] == chapter['number']]
        heading = f"第 {chapter['number']} 章 {chapter['title']}"
        text.append(f"| [{heading}](#{slug(heading)}) | {len(groups)} | {sum(len(g['exercises']) for g in groups)} | {chapter['pdf_page']} |")
    if green:
        text += ['', '本 PDF 未见习题 2.1、习题 5.1 的节标题，故未建立入口。下列各节另注明已见编号范围内的空缺；不据此推断原教材是否有题或为何未收录。']
    for chapter in data['chapters']:
        groups = [g for g in data['groups'] if g['chapter'] == chapter['number']]
        text += ['', f"## 第 {chapter['number']} 章 {chapter['title']}", '']
        text += [f"- [{g['title']}](#{slug(g['title'])})" for g in groups]
        for g in groups:
            text += ['', f"### {g['title']}", '',
                     '原教材页码：' + (g['textbook_pages'] or '未标注。'), '']
            if g['unobserved_numbers_within_range']:
                text += ['本 PDF 已见编号范围内未见：' + '、'.join(map(str, g['unobserved_numbers_within_range'])) + '；未建立页码映射。', '']
            text += ['| 原书题号（含组别） | 整理版 PDF 起始页 | 星号标记 |', '| --- | --- | --- |']
            for e in g['exercises']:
                note = '主编号星号' if e['star'] else '—'
                if e['starred_subparts']:
                    note = '子题 ' + '、'.join(f"（{n}）" for n in e['starred_subparts']) + '带星号'
                text.append(f"| {g['label']} 第 {e['number']} 题 | [PDF 第 {e['pdf_page']} 页](/files/{data['file'].removeprefix('content/')}#page={e['pdf_page']}) | {note} |")
        text += ['', '[返回章节目录](#章节目录)']
    return '\n'.join(text) + '\n'


if __name__ == '__main__':
    files = [extract(c) for c in CONFIG]
    audit = {'schema': 1, 'checked_at': '2026-10-26', 'method': 'All main labels and headings read from PDF pages; all main-label numbers/stars/pages also cross-checked using bold glyph spans at left margin with --font-check. No full questions copied.',
             'pilots': [
                 {'book': 'green-algebra-v0', 'chapter': 1, 'pdf_pages': [2, 10], 'questions': 73,
                  'visual_checks': ['All nine pages rendered and inspected', '1.5 *4 and *6 on PDF 5', '复习题一 *23 on PDF 9 and *34/*35 on PDF 10', 'Parenthesized subparts are not main labels']},
                 {'book': 'qws-algebra-v2', 'chapter': 8, 'pdf_pages': [18, 25], 'questions': 73,
                  'visual_checks': ['All eight pages rendered and inspected', '8.1 question 4 has starred subparts (2)/(3), not a starred main label, PDF 18', '8.1 question 26 starts PDF 20 and continues PDF 21', '8.4 *5 and 补充题八 1-7 share PDF 25']}],
             'files': files}
    for data in files:
        path = ROOT / data['entry']
        old = path.read_text()
        prefix = old.split('## 检索与页码说明')[0].rstrip().replace('updated_at: "2026-10-25"', 'updated_at: "2026-10-26"')
        expected = prefix + '\n\n' + markdown(data)
        if '--write' in sys.argv:
            path.write_text(expected)
        else:
            assert old == expected, f"Index differs from PDF: {path}"
    if '--write' in sys.argv:
        REVIEW.write_text(json.dumps(audit, ensure_ascii=False, indent=2) + '\n')
    else:
        assert json.loads(REVIEW.read_text()) == audit, 'Review differs from extracted source'
    print('Verified 118 PDF pages / 116 groups / 1286 main labels and links; original bytes preserved.')
