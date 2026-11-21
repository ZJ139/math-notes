#!/usr/bin/env python3
"""Build a v1 section from its canonical Markdown with the shared CM bea font."""
from pathlib import Path
import re, subprocess, shutil
ROOT=Path(__file__).resolve().parents[1]
source=(ROOT/'content/notes/real-functions-v1/ch01-s1.md').read_text()
body=source[source.index('## 1.1.1 集合、子集与幂集'):].split('[返回实变函数-v1总目次]')[0]
body=re.sub(r'\\qquad\\text\{\((1\.1\.\d+)\)\}',r'\\tag{\1}',body)
latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
latex=latex.replace('\\[','\\begin{equation}').replace('\\]','\\end{equation}')
latex=latex.replace('\\subsubsection{','\\VoneExercise{').replace('\\subsection{','\\Needspace{7\\baselineskip}\n\\section{').replace('\\VoneExercise{','\\subsection{')
latex=latex.replace('\\Needspace{7\\baselineskip}\n\\section{1.1.9','\\clearpage\n\\section{1.1.9')
latex=latex.replace('\\subsection{问题','\\Needspace{8\\baselineskip}\\subsection{问题')
latex=re.sub(r'\\textbf\{(证明：|解：|想法：)\}',r'\\Needspace{3\\baselineskip}\\textbf{\1}',latex)
template=r'''\documentclass[11pt,a4paper]{article}
\usepackage[margin=23mm,headheight=14pt,headsep=8.5mm,footskip=10mm]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{assets/tex/cm-bea}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.12}
\setlength{\parindent}{2em}\setlength{\parskip}{3pt}
\usepackage{titlesec}
\titleformat{\section}{\centering\normalfont\large\bfseries}{}{0pt}{}
\titlespacing*{\section}{0pt}{1.5\baselineskip}{0.8\baselineskip}
\usepackage{needspace,enumitem,longtable,booktabs,array,calc}
\providecommand{\tightlist}{\setlength{\itemsep}{3pt}\setlength{\parskip}{0pt}}
\usepackage{fancyhdr}\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\small 数学手记}\fancyhead[R]{\small 实变函数-v1 · 1.1}
\fancyfoot[C]{\thepage}\renewcommand{\headrulewidth}{0.4pt}
\usepackage[hidelinks,unicode,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdftitle={实变函数-v1：1.1 集合及其运算},pdfauthor={Vincent Arqain}}
\renewcommand{\contentsname}{本节目次}\setcounter{tocdepth}{1}\setcounter{secnumdepth}{0}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\predisplaypenalty=10000\interdisplaylinepenalty=10000
\raggedbottom\emergencystretch=2em
\begin{document}
\begin{center}
{\Large\bfseries 实变函数-v1\par}
\vspace{7pt}{\large 1.1 集合及其运算\par}
\vspace{5pt}{第一章 集合与点集\par}
\end{center}
本节对应《实变函数知识框架》1.1，依据徐森林、薛春华《实变函数论》\S1.1（印刷第 1—16 页，扫描本 PDF 第 7—22 页），在原栏目讲义的基础上展开。以量词、归属判断和逐点稳定为主线，给出完整证明、思路分析及教材精选例题。
\begingroup\setlength{\parskip}{0pt}\tableofcontents\endgroup
'''
latex=re.sub(r'\\textbf\{((?:命题|定理|推论) 1\.1\.\d+[^}]*)\}',r'\\Needspace{10\\baselineskip}\\textbf{\1}',latex)
tex=ROOT/'print/real-functions-v1-1-1.tex'
tex.write_text(template+'\n'+latex+'\n\\end{document}\n')
out=ROOT/'outputs/real-v1-1-1';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=ROOT,capture_output=True,text=True)
 (out/'build.log').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-3500:])
shutil.copy2(out/(tex.stem+'.pdf'),ROOT/'content/notes/real-functions-v1/real-functions-v1-1-1.pdf')
print('Built',tex.stem+'.pdf')
