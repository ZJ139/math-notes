"""Build the essay PDF from the same Markdown used on the website."""
from pathlib import Path
import re, subprocess
ROOT=Path(__file__).resolve().parents[1]
source=ROOT/'content/essays/discrete-continuous-proofs.md'
text=source.read_text().split('---',2)[2].strip()
text=re.sub(r'^\[下载完整讲义 PDF\].*\n','',text,flags=re.M)
text=re.sub(r'\\qquad\\text\{\((\d+\.\d+)\)\}',r'\\tag{\1}',text)
text=re.sub(r'^## (.+)$',r'\n\\clearpage\n\n## \1',text,flags=re.M)
text=text.replace('\\clearpage',r'\clearpage\phantomsection\label{contents}\pdfbookmark[0]{目录}{contents-bookmark}\tableofcontents\clearpage',1)
body=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--shift-heading-level-by=-1','--no-highlight'],input=text,text=True,capture_output=True,check=True).stdout
body=body.replace('\\section{',r'\Needspace{7\baselineskip}'+'\n'+r'\section{')
body=body.replace('\\subsection{',r'\Needspace{6\baselineskip}'+'\n'+r'\subsection{')
body=re.sub(r'\\section\{(\d+) ',r'\\section{\\S{}\1 ',body)
# Preserve the user's reference PDF typography: 11pt, 23mm margins, Fandol and CM.
preamble=(ROOT/'print/recurrence-sequences-collected.tex').read_text().split('\\begin{document}')[0]
preamble=preamble.replace('递推数列专题：已解题目与完整解答','数学分析中的离散与连续：完整证明讲义').replace('递推数列专题','离散与连续').replace('47道已解问题','16节性质、联系与差异的证明')
preamble=preamble.replace('\\setcounter{secnumdepth}{1}','\\setcounter{secnumdepth}{0}')
preamble=preamble.replace('\\titleformat{\\section}{\\centering\\normalfont\\Large\\bfseries}{\\thesection.}{0.6em}{}','\\titleformat{\\section}{\\centering\\normalfont\\Large\\bfseries}{}{0pt}{}')
preamble=preamble.replace('\\titleformat{\\subsection}{\\normalfont\\large\\bfseries}{\\thesubsection}{0.6em}{}','\\titleformat{\\subsection}{\\normalfont\\large\\bfseries}{}{0pt}{}')
preamble+='\\usepackage{etoolbox}\n\\AtBeginEnvironment{longtable}{\\small}\n'
tex=preamble+r'''
\begin{document}
\begin{center}
{\LARGE\bfseries 数学分析中的离散与连续\par}
\vspace{8pt}{\large 性质、联系与差异的完整证明\par}
\vspace{6pt}{\small 2026年11月25日\quad 依原知识框架16节逐项展开\par}
\end{center}
'''+body+'\n\\end{document}\n'
(ROOT/'print/discrete-continuous-proofs.tex').write_text(tex)
print('Generated standard LaTeX from the published essay source.')
