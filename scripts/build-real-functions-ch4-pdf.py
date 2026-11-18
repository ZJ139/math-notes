"""Build chapter 4 from its three Markdown sources with the established layout.

Run from the repository root; requires Pandoc and XeLaTeX.
"""
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'content/notes/real-functions'
WEB = 'https://zj139.github.io/math-notes'
IDS = {'c15167148a7e99cbefa5d46f': 'ch04-s1',
       'a1a665ae4cd9f8c09efae12e': 'ch04-s2',
       'e1dec84d3fc9dd592c25bd52': 'ch04-practice'}


def convert(stem):
    raw = (SOURCE / (stem + '.md')).read_text()
    body = raw.split('---', 2)[2].strip()
    body = re.sub(r'^\[(?:第四章习题|§4.1 讲义).*$', '', body, flags=re.M)
    body = re.sub(r'^\*\*题号跳转\*\*.*$', '', body, flags=re.M)
    if stem == 'ch04-practice':
        body = re.sub(r'^\[练习题 4.1\].*$', '', body, flags=re.M)
    body = re.sub(r'\]\((/[^)]+)\)', lambda m: '](' + WEB + m[1] + ')', body)
    latex = subprocess.run(['pandoc', '-f', 'markdown+tex_math_dollars',
                            '-t', 'latex', '--no-highlight'], input=body,
                           text=True, capture_output=True, check=True).stdout
    # Namespace Pandoc labels because the source documents are converted separately.
    latex = re.sub(r'\\(hypertarget|hyperlink|label|ref)\{([^}]+)\}',
                   lambda m: '\\' + m[1] + '{' + stem + '-' + m[2] + '}', latex)
    latex = re.sub(r'\\hyperref\[([^]]+)\]',
                   lambda m: r'\hyperref[' + stem + '-' + m[1] + ']', latex)
    latex = latex.replace(r'\subsection{', r'\Needspace{6\baselineskip}' + '\n' + r'\subsection{')
    latex = latex.replace(r'\subsubsection{', r'\Needspace{5\baselineskip}' + '\n' + r'\subsubsection{')
    return latex


def main():
    pre = (ROOT / 'print/real-functions-chapter-3.tex').read_text().split(r'\begin{document}')[0]
    pre = pre.replace('第三章', '第四章').replace('积分理论', '函数空间')
    pre = pre.replace(r'\renewcommand{\thesection}{3.\arabic{section}}',
                      r'\renewcommand{\thesection}{4.\arabic{section}}')
    pre = pre.replace(r'\setcounter{tocdepth}{1}', r'\setcounter{tocdepth}{2}')
    pre += r'''
\begin{document}
\begin{center}
{\LARGE\bfseries 实变函数讲义\par}
\vspace{8pt}{\large 第四章\quad 函数空间\par}
\vspace{6pt}{\small 依徐森林、薛春华《实变函数论》\quad 教材第 380—423 页\par}
\end{center}
\vspace{8pt}
\noindent\textbf{本章的问题}\quad 从积分定义的距离出发，怎样建立完备空间，怎样用正交展开恢复函数？本章保留教材全部主要定理的编号，补足关键证明与适用条件；后附 24 道节后练习及 33 道复习题原题，不附解答。
\tableofcontents\clearpage
'''
    bodies = []
    for stem, title in [('ch04-s1', r'$\mathcal L^p$ 空间：范数、完备性与逼近'),
                        ('ch04-s2', r'$\mathcal L^2$ 空间：正交投影与 Fourier 展开'),
                        ('ch04-practice', '第四章习题与复习题')]:
        if stem == 'ch04-practice':
            heading = r'\clearpage\section*{' + title + r'}\phantomsection\addcontentsline{toc}{section}{' + title + '}'
        else:
            plain_title = title.replace(r'$\mathcal L^p$', 'Lp').replace(r'$\mathcal L^2$', 'L2')
            heading = r'\clearpage\section{\texorpdfstring{' + title + '}{' + plain_title + '}}'
        bodies.append(heading + '\n' + r'\label{' + stem + '}\n' + convert(stem))
    tex = pre + '\n'.join(bodies) + '\n\\end{document}\n'
    # Replace cross-document web links by corresponding local PDF destinations.
    # Pandoc's Unicode-to-label encoding is the same in href fragments and labels.
    def local_link(m):
        target = IDS[m[1]]
        frag = m[2]
        if frag:
            # Chinese anchors in the web renderer omit dots; map the three groups.
            known = {'练习题-41': 'ux7ec3ux4e60ux9898-4.1',
                     '练习题-42': 'ux7ec3ux4e60ux9898-4.2',
                     '复习题-4': 'ux590dux4e60ux9898-4',
                     '原题校注': 'ux539fux9898ux6821ux6ce8',
                     '完备性': 'ux5b8cux5907ux6027'}
            target += '-' + known.get(frag, frag)
        return r'\hyperref[' + target + ']{'
    tex = re.sub(r'\\href\{https://zj139\.github\.io/math-notes/notes/(' + '|'.join(IDS) + r')/(?:#([^}]+))?\}\{', local_link, tex)
    # Add a compact clickable exercise-number index, avoiding a 57-line TOC.
    blocks = []
    for prefix, count, label in [('4.1',16,'练习题 4.1'),('4.2',8,'练习题 4.2'),('4',33,'复习题 4')]:
        links = []
        for i in range(1,count+1):
            needle = ('ux95eeux9898-ux590dux4e60-4.' if prefix=='4' else 'ux95eeux9898-'+prefix+'.') + str(i)
            target = 'ch04-practice-' + needle
            if r'\label{' + target + '}' not in tex:
                raise ValueError('Missing exercise target: ' + target)
            links.append(r'\hyperref[' + target + ']{' + str(i) + '}')
        blocks.append(r'\noindent\textbf{' + label + r'}\quad ' + r'\quad '.join(links) + '\n' + r'\par\medskip' + '\n')
    tex = tex.replace(r'\label{ch04-practice}',r'\label{ch04-practice}'+'\n'+''.join(blocks))
    target = ROOT / 'print/real-functions-chapter-4.tex'
    target.write_text(tex)
    out = ROOT / 'tmp/real-functions-ch4'
    out.mkdir(parents=True, exist_ok=True)
    for _ in range(3):
        result = subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode',
                                 '-halt-on-error',f'-output-directory={out}',str(target)],
                                cwd=ROOT,text=True,capture_output=True)
        if result.returncode:
            print(result.stdout[-7000:])
            raise SystemExit(result.returncode)
    pdf = SOURCE / 'real-functions-chapter-4.pdf'
    pdf.write_bytes((out / pdf.name).read_bytes())
    print('Built', pdf)


if __name__ == '__main__':
    main()
