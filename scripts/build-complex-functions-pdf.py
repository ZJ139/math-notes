"""Build the first complex-functions chapter from the published Markdown.
Run from repository root; keeps the established real-functions PDF typography.
"""
from pathlib import Path
import re, subprocess
R=Path(__file__).resolve().parents[1]
source=R/'content/notes/complex-functions'
pre=(R/'print/real-functions-chapter-1.tex').read_text().split(r'\begin{document}')[0]
pre=pre.replace('实变函数论 · 第一章','复变函数 · 第一章').replace('实变函数讲义：第一章','复变函数讲义：第一章').replace('集合运算、集合的势、集类','复数与复变函数')
pre+=r'''
\usepackage{graphicx}
\usepackage{float}
\floatplacement{figure}{H}
\renewcommand{\figurename}{图}
\makeatletter
\def\maxwidth{\ifdim\Gin@nat@width>\linewidth\linewidth\else\Gin@nat@width\fi}
\def\maxheight{\ifdim\Gin@nat@height>0.72\textheight0.72\textheight\else\Gin@nat@height\fi}
\makeatother
\setkeys{Gin}{width=\maxwidth,height=\maxheight,keepaspectratio}
\providecommand{\pandocbounded}[1]{#1}
\setcounter{tocdepth}{2}
\begin{document}
\begin{center}
{\LARGE\bfseries 复变函数讲义\par}
\vspace{8pt}{\large 第一章\quad 复数与复变函数\par}
\vspace{6pt}{\small 依史济怀、刘太顺《复变函数》\quad 教材第 1—26 页\par}
\end{center}
\vspace{8pt}
本章含七节讲义及全部 63 道习题原题。定义、定理和性质沿用教材的记号与编号；
证明补足必要条件、退化情形与关键推导。教材未证的 Jordan 曲线定理给出拓扑证明，
并明确列出其同调论前置工具。习题不附解答，原题中的疑义另列校勘。
\tableofcontents
\clearpage
'''
pieces=[]
for i in range(1,9):
 p=source/(f'ch01-s{i}.md' if i<8 else 'ch01-practice.md')
 text=p.read_text();title=re.search(r'^title: "(.*)"',text,re.M)[1]
 body=text.split('---',2)[2].strip()
 # Web navigation is replaced by the PDF's clickable table of contents.
 body=re.sub(r'^\[.*?\]\(#[^\n]+\n','',body,flags=re.M)
 body=re.sub(r'^\[(?:上一节|下一节|第一章习题|返回第一章目录).*$', '',body,flags=re.M)
 body=body.replace('/figures/complex-functions/ch01-exercise-figures.png','public/figures/complex-functions/ch01-exercise-figures.png')
 latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
 if i<8:
  heading='\\section{'+title.split('　',1)[1]+'}\n'
 else:
  heading=r'\clearpage\section*{第一章习题}\phantomsection\addcontentsline{toc}{section}{第一章习题}'+'\n'
 latex=latex.replace(r'\subsection{',r'\Needspace{5\baselineskip}'+'\n'+r'\subsection{')
 if i==8:
  latex=re.sub(r'\\textbf\{(\d+)\.\}',lambda m:r'\par\Needspace{5\baselineskip}'+'\n'+r'\noindent\textbf{'+m[1]+'.}',latex)
 pieces.append(heading+latex)
tex=R/'print/complex-functions-chapter-1.tex';tex.write_text(pre+'\n'.join(pieces)+'\n\\end{document}\n')
out=R/'tmp/complex-pdf';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 r=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=R,text=True,capture_output=True)
 if r.returncode:
  print(r.stdout[-5000:]);raise SystemExit(r.returncode)
(source/'complex-functions-chapter-1.pdf').write_bytes((out/'complex-functions-chapter-1.pdf').read_bytes())
print('Built',source/'complex-functions-chapter-1.pdf')
