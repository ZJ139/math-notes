#!/usr/bin/env python3
"""Build a v1 section from its canonical Markdown with the shared CM bea font."""
from pathlib import Path
import re, subprocess, shutil, argparse
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('section',nargs='?',default='1.1',choices=['1.1','1.2','1.3','1.4','1.5','2.1','2.2'])
section=parser.parse_args().section
chapter,part=map(int,section.split('.'))
source=(ROOT/f'content/notes/real-functions-v1/ch{chapter:02d}-s{part}.md').read_text()
title=re.search(r'^title: "([^"]+)"',source,re.M).group(1)
body=source[source.index(f'## {section}.1 '):].split('[返回实变函数-v1总目次]')[0]
body=re.sub(r'\\qquad\\text\{\(('+re.escape(section)+r'\.\d+)\)\}',r'\\tag{\1}',body)
latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
latex=latex.replace('\\[','\\begin{equation*}').replace('\\]','\\end{equation*}')
latex=latex.replace('\\subsubsection{','\\VoneExercise{').replace('\\subsection{','\\Needspace{7\\baselineskip}\n\\section{').replace('\\VoneExercise{','\\subsection{')
if section=='1.1':
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
if section=='1.2':
 template=template.replace('1.1 集合及其运算',title).replace('实变函数-v1 · 1.1','实变函数-v1 · 1.2')
 intro=r'本节对应《实变函数知识框架》1.2，依据徐森林、薛春华《实变函数论》\S1.1 的映射部分（第 12—13 页）及\S1.2（第 17—41 页），以像与原像、可数编码和对角线法为主线，完整展开证明并选讲启发性例题。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 1\.2\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
latex=re.sub(r'\\textbf\{((?:命题|定理|推论|引理) '+re.escape(section)+r'\.\d+[^}]*)\}',r'\\Needspace{10\\baselineskip}\\textbf{\1}',latex)
if section=='1.3':
 template=template.replace('1.1 集合及其运算','1.3 '+r'\texorpdfstring{$\mathbb R^n$}{Rn} 中的点集').replace('实变函数-v1 · 1.1','实变函数-v1 · 1.3')
 intro=r'本节对应《实变函数知识框架》1.3，依据徐森林、薛春华《实变函数论》\S1.4（印刷第 50—56 页及第 65—66 页相关练习），以邻域、极限和有限覆盖为主线，完整展开证明、反例及八道教材精选练习。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 1\.3\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
if section=='1.4':
 template=template.replace('1.1 集合及其运算',title).replace('实变函数-v1 · 1.1','实变函数-v1 · 1.4')
 intro=r'本节对应《实变函数知识框架》1.4，依据徐森林、薛春华《实变函数论》\S1.4（印刷第 56—60 页）与\S1.6（第 85—94 页），以开集分解、完全集和可数集合运算为主线，附教材精选练习及完整解答。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 1\.4\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
if section=='1.5':
 latex=latex.replace(r'\Needspace{7\baselineskip}'+ '\n' + r'\section{1.5.8',r'\Needspace{14\baselineskip}'+ '\n' + r'\section{1.5.8')
 template=template.replace('1.1 集合及其运算',title).replace('实变函数-v1 · 1.1','实变函数-v1 · 1.5')
 intro=r'本节对应《实变函数知识框架》1.5，依据徐森林、薛春华《实变函数论》\S1.4（印刷第 61—65 页）、\S1.5（第 67—80 页）与\S1.6（第 81—85 页），以相对连续性、距离函数延拓和闭球套为主线，附精选练习及完整解答。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 1\.5\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
if section=='2.1':
 template=template.replace('1.1 集合及其运算',title).replace('实变函数-v1 · 1.1','实变函数-v1 · 2.1').replace('第一章 集合与点集','第二章 Lebesgue 测度')
 intro=r'本节对应《实变函数知识框架》2.1，依据徐森林、薛春华《实变函数论》\S2.1（印刷第 102—103 页）与\S2.3（第 123—129 页），从区间覆盖直接构造外测度，展开多维体积、细覆盖与距离可加性的证明，附精选练习及完整解答。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 2\.1\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
if section=='2.2':
 latex=latex.replace(r'当 \(m(A)<\infty\)',r'\Needspace{6\baselineskip}当 \(m(A)<\infty\)')
 latex=latex.replace('再分别对',r'\Needspace{6\baselineskip}再分别对')
 template=template.replace('1.1 集合及其运算',title).replace('实变函数-v1 · 1.1','实变函数-v1 · 2.2').replace('第一章 集合与点集','第二章 Lebesgue 测度')
 intro=r'本节对应《实变函数知识框架》2.2，依据徐森林、薛春华《实变函数论》定义 2.1.3、定理 2.1.4—2.1.5（印刷第 106—110 页）与定理 2.1.1（第 99—101 页），从分割条件建立可测集与测度，完整展开证明、反例及八道精选习题解答。'
 template=re.sub(r'本节对应[^\n]+',lambda _:intro,template)
 latex=re.sub(r'\\textbf\{(例 2\.2\.\d+[^}]*)\}',r'\\Needspace{6\\baselineskip}\\textbf{\1}',latex)
# Keep body headings unchanged; TOC entries alone use the section sign.
latex=re.sub(r'\\section\{('+re.escape(section)+r'\.\d+\s+[^}]+)\}',lambda m:r'\section[\S{}'+m[1]+']{'+m[1]+'}',latex)
latex=latex.replace('Fσ',r'\texorpdfstring{$F_\sigma$}{Fσ}').replace('Gδ',r'\texorpdfstring{$G_\delta$}{Gδ}')
stem='real-functions-v1-'+section.replace('.','-')
tex=ROOT/f'print/{stem}.tex'
tex.write_text(template+'\n'+latex+'\n\\end{document}\n')
out=ROOT/('outputs/real-v1-'+section.replace('.','-'));out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=ROOT,capture_output=True,text=True)
 (out/'build.log').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-3500:])
shutil.copy2(out/(tex.stem+'.pdf'),ROOT/f'content/notes/real-functions-v1/{stem}.pdf')
print('Built',tex.stem+'.pdf')
