"""Sync §§3.1–3.2 from Markdown into the established chapter-three PDF.

The remaining sections and exercise typesetting stay in their existing LaTeX
source. Run from any directory; needs Pandoc and XeLaTeX.
"""
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'content/notes/real-functions'
TEX = ROOT / 'print/real-functions-chapter-3.tex'
WEB = 'https://zj139.github.io/math-notes'


def section(number):
    raw = (SOURCE / f'ch03-s{number}.md').read_text()
    title = re.search(r'^title: "(.*)"', raw, re.M)[1].split('　', 1)[1]
    body = raw.split('---', 2)[2].strip()
    # Keep the theorem index; PDF exercise links target this chapter's appendix.
    body = re.sub(r'^\[练习题 3\.[12]：.*$', '', body, flags=re.M)
    body = re.sub(r'^\[第三章目录\].*$', '', body, flags=re.M)
    body = re.sub(r'\]\((/[^)]+)\)', lambda m: '](' + WEB + m[1] + ')', body)
    latex = subprocess.run(
        ['pandoc', '-f', 'markdown+tex_math_dollars', '-t', 'latex', '--no-highlight'],
        input=body, capture_output=True, text=True, check=True,
    ).stdout
    # Preserve Pandoc's label/anchor pairs for clickable theorem-index links.
    latex = re.sub(
        r'\\subsection\{([^{}\n]+)\}',
        lambda m: r'\Needspace{6\baselineskip}\subsection*{' + m[1] + '}'
        + r'\phantomsection\addcontentsline{toc}{subsection}{' + m[1] + '}',
        latex,
    )
    latex = latex.replace('′', r"\ensuremath{'}")
    # Pandoc versions that generate longtable captions need this fallback.
    return (r'\Needspace{22\baselineskip}' + '\n' + '\\section{' + title + '}\n' + latex
            + '\n\\noindent\\hyperlink{ex' + str(number)
            + '}{本节习题原题：练习题 3.' + str(number) + '}\n\n')


def main():
    old = TEX.read_text()
    start = old.index(r'\section{可测空间、可测函数}')
    marker = r'\Needspace{22\baselineskip}' + '\n'
    if old[:start].endswith(marker):
        start -= len(marker)
    end = old.index(r'\section{积分理论}', start)
    prefix = old[:start]
    prefix = re.sub(r'\\usepackage\{longtable(?:,calc)?\}\n?', '', prefix)
    prefix = prefix.replace(r'\usepackage{tabularx,booktabs,array}',
                            r'\usepackage{tabularx,booktabs,array}' + '\n'
                            + r'\usepackage{longtable,calc}')
    if r'\def\LTcaptype{table}' not in prefix:
        prefix = prefix.replace(r'\usepackage{longtable,calc}',
                                r'\usepackage{longtable,calc}' + '\n'
                                + r'\def\LTcaptype{table}')
    if r'\tableofcontents\clearpage' not in prefix:
        prefix = prefix.replace(r'\tableofcontents', r'\tableofcontents\clearpage')
    TEX.write_text(prefix + section(1) + section(2) + old[end:])
    out = ROOT / 'tmp/real-measurable-pdf'
    out.mkdir(parents=True, exist_ok=True)
    for _ in range(3):
        result = subprocess.run(
            ['xelatex', '-no-shell-escape', '-interaction=nonstopmode', '-halt-on-error',
             f'-output-directory={out}', str(TEX)],
            cwd=ROOT, capture_output=True, text=True,
        )
        if result.returncode:
            print(result.stdout[-6000:])
            raise SystemExit(result.returncode)
    pdf = SOURCE / 'real-functions-chapter-3.pdf'
    pdf.write_bytes((out / 'real-functions-chapter-3.pdf').read_bytes())
    print('Built', pdf)


if __name__ == '__main__':
    main()
