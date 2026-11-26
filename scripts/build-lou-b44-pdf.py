#!/usr/bin/env python3
"""Build B303–B309 from the published Markdown; XeLaTeX, Fandol Song and standard Computer Modern; reference-paper layout."""
from pathlib import Path
import re, subprocess, shutil
ROOT=Path(__file__).resolve().parents[1]
source=(ROOT/'content/problems/lou-analysis-b-44.md').read_text()
body=source[source.index('## 问题 B303'):].split('\n本批七题全部完成。')[0]
# Web-relative links become real links in the independent PDF.
body=re.sub(r'\]\(/([^)]*)\)',r'](https://zj139.github.io/math-notes/\1)',body)
# Use ordinary equation tags with the same numbers as the website.
body=re.sub(r'\\qquad\\text\{\((\d+)\)\}',r'\\tag{\1}',body)
latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
latex=latex.replace('\\[','\\begin{equation}').replace('\\]','\\end{equation}')
for ratio in ['0.12','0.44','0.44']:
 latex=latex.replace(r'\real{0.3333}',r'\real{'+ratio+'}',1)
latex=latex.replace(r'\subsection{',r'\Needspace{9\baselineskip}'+'\n'+r'\section{')
latex=re.sub(r'\\section\{(问题 B\d+)\}',r'\\section{\1}',latex)
# Do not strand a proof label at the end of a page.
latex=re.sub(r'\\textbf\{(证明|解|基础知识|思路来源|易错条件|方法总结)\}',r'\\Needspace{3\\baselineskip}\\textbf{\1}',latex)
# Exactly preserve prose font and reference-paper page geometry.
template=r'''\documentclass[11pt,a4paper]{article}
\usepackage[margin=23mm,headheight=14pt,headsep=8.5mm,footskip=10mm]{geometry}
\usepackage{amsmath,amssymb}
\usepackage[no-math]{fontspec}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.12}
\setlength{\parindent}{2em}\setlength{\parskip}{3pt}
\usepackage{titlesec}
\titleformat{\section}{\centering\normalfont\Large\bfseries}{}{0pt}{}
\titlespacing*{\section}{0pt}{1.5\baselineskip}{0.8\baselineskip}
\usepackage{needspace,enumitem,longtable,booktabs,array,calc}
\providecommand{\tightlist}{\setlength{\itemsep}{3pt}\setlength{\parskip}{0pt}}
\usepackage{fancyhdr}\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\small 数学手记}\fancyhead[R]{\small 楼红卫 B 组 · 第四十四批}
\fancyfoot[C]{\thepage}\renewcommand{\headrulewidth}{0.4pt}
\usepackage[hidelinks,unicode,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdftitle={楼红卫数学分析 B303—B309：Fourier 收敛、可积性与共轭级数},pdfauthor={Vincent Arqain}}
\renewcommand{\contentsname}{题号目录}\setcounter{tocdepth}{1}\setcounter{secnumdepth}{0}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\predisplaypenalty=10000\interdisplaylinepenalty=10000
\raggedbottom\emergencystretch=2em
\begin{document}
\begin{center}
{\LARGE\bfseries 楼红卫《数学分析》B 组习题解答\par}
\vspace{7pt}{\large 第四十四批\quad B303—B309\par}
\vspace{5pt}{Fourier 收敛、可积性与共轭级数\par}
\end{center}
本批收录习题 12.2.B 第 1—7 题，分别讨论近似恒等核、可积性、精确渐近与一致收敛。按原题号给出完整证明，批末汇总方法。
\begingroup\setlength{\parskip}{0pt}\tableofcontents\endgroup
'''
tex=ROOT/'print/lou-analysis-b-44.tex'
tex.write_text(template+'\n'+latex+'\n\\end{document}\n')
out=ROOT/'outputs/lou-b44';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=ROOT,capture_output=True,text=True)
 (out/'build.log').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-3500:])
shutil.copy2(out/(tex.stem+'.pdf'),ROOT/'content/problems/lou-analysis-b-44.pdf')
print('Built',tex.stem+'.pdf')
