"""Render the collected Markdown with the user's fixed mathematical typography."""
from pathlib import Path
import re,json,subprocess
R=Path(__file__).resolve().parents[1]
text=(R/'content/essays/recurrence-sequences-collected.md').read_text()
text=text.split('---',2)[2].strip()
text=re.sub(r'## 目录\n.*?(?=## 极限与精细渐近)', '', text,flags=re.S)
text=re.sub(r'\[下载完整 PDF\].*?\n', '', text)
index=json.loads((R/'print/recurrence-problems-index.json').read_text())
for row in index:
 text=text.replace('### 问题 '+row['id']+'\n\n**'+row['title']+'**', '### 问题 '+row['id']+'：'+row['title'])
text=re.sub(r'\]\(/([^)]*)\)',r'](https://zj139.github.io/math-notes/\1)',text)
text=text.replace('[返回目录](#目录)', r'\noindent\hyperref[contents]{返回目录}')
text=text.replace('例如运行 `python3 scripts/explore-lou-logistic.py --r 3 3.2 --burn 100000`。', '例如运行：\n\n```text\npython3 scripts/explore-lou-logistic.py --r 3 3.2 --burn 100000\n```\n\n')
text=re.sub(r'^## (.*)$',r'\n\\clearpage\n\n## \1',text,flags=re.M)
text=text.replace('\\clearpage\n\n## 阅读后的通用检查', '## 阅读后的通用检查')
# Convert first group break into the native linked table of contents.
text=text.replace('\\clearpage',r'\clearpage\phantomsection\label{contents}\pdfbookmark[0]{目录}{contents-bookmark}\tableofcontents\clearpage',1)
tex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--shift-heading-level-by=-1','--no-highlight'],input=text,text=True,capture_output=True,check=True).stdout
# Prevent a problem heading at the foot of a page.
tex=tex.replace('\\subsection{',r'\Needspace{7\baselineskip}'+'\n'+r'\subsection{')
preamble=(R/'print/qiu-analytic-geometry-summary.tex').read_text().split('\\begin{document}')[0]
preamble=preamble.split('\\usepackage{graphicx,longtable')[0]
preamble=preamble.replace('解析几何定理与结论','递推数列专题').replace('解析几何：定理与结论图解汇总','递推数列专题：已解题目与完整解答').replace('丘维声第三版第1、2、3、5章','47道已解问题')
preamble=preamble.replace('\\setcounter{tocdepth}{3}', '\\setcounter{tocdepth}{2}').replace('\\setcounter{secnumdepth}{2}', '\\setcounter{secnumdepth}{1}')
preamble=preamble.replace('\\bookmarksetup{depth=3}', '\\bookmarksetup{depth=2}')
preamble+=r'\setCJKmonofont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]'+'\n'
preamble+=r'''
\usepackage{longtable,booktabs,array,calc}
\usepackage{fancyvrb}
\let\oldverbatim\verbatim
\let\endoldverbatim\endverbatim
\renewenvironment{verbatim}{\VerbatimEnvironment\begin{Verbatim}[fontsize=\footnotesize]}{\end{Verbatim}}
\titleformat{\subsubsection}{\normalfont\normalsize\bfseries}{}{0pt}{}
\titleformat{\paragraph}[block]{\normalfont\normalsize\bfseries}{}{0pt}{}
\titleformat{\subparagraph}[block]{\normalfont\normalsize\bfseries}{}{0pt}{}
\setlength{\LTpre}{6pt}
\setlength{\LTpost}{6pt}
\begin{document}
\begin{center}
{\LARGE\bfseries 递推数列专题\par}
\vspace{8pt}{\large 已解题目、关键思路与完整解答\par}
\vspace{5pt}{\small 2026年11月13日\quad 共47题\par}
\end{center}
'''
(R/'print/recurrence-sequences-collected.tex').write_text(preamble+tex+'\n\\end{document}\n')
print('Wrote standard LaTeX source')
