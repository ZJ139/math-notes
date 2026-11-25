#!/usr/bin/env python3
"""Build B296–B302 from the published Markdown; XeLaTeX + shared CM bea setup."""
from pathlib import Path
import re, subprocess, shutil
ROOT=Path(__file__).resolve().parents[1]
source=(ROOT/'content/problems/lou-analysis-b-43.md').read_text()
body=source[source.index('## 问题 B296'):].split('\n本批七题全部完成。')[0]
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
\fancyhead[L]{\small 数学手记}\fancyhead[R]{\small 楼红卫 B 组 · 第四十三批}
\fancyfoot[C]{\thepage}\renewcommand{\headrulewidth}{0.4pt}
\usepackage[hidelinks,unicode,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdftitle={楼红卫数学分析 B296—B302：循环常数反例、幂级数与 Fourier 系数},pdfauthor={Vincent Arqain}}
\renewcommand{\contentsname}{题号目录}\setcounter{tocdepth}{1}\setcounter{secnumdepth}{0}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\predisplaypenalty=10000\interdisplaylinepenalty=10000
\raggedbottom\emergencystretch=2em
\begin{document}
\begin{center}
{\Large\bfseries 楼红卫《数学分析》B 组习题解答\par}
\vspace{7pt}{\large 第四十三批\quad B296—B302\par}
\vspace{5pt}{循环常数反例、幂级数与 Fourier 系数\par}
\end{center}
本批收录习题 11.5.B 第 4 题、11.6.B 第 1—3 题、11.7.B 第 1 题及 12.1.B 第 1—2 题。按原题号给出完整证明，批末汇总方法。
\begingroup\setlength{\parskip}{0pt}\tableofcontents\endgroup
'''
tex=ROOT/'print/lou-analysis-b-43-cm-bea.tex'
tex.write_text(template+'\n'+latex+'\n\\end{document}\n')
out=ROOT/'outputs/lou-b43';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=ROOT,capture_output=True,text=True)
 (out/'build.log').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-3500:])
shutil.copy2(out/(tex.stem+'.pdf'),ROOT/'content/problems/lou-analysis-b-43-cm-bea.pdf')
print('Built',tex.stem+'.pdf')
