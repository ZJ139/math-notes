#!/usr/bin/env python3
"""Build the lecture and independent source-preserving appendix with CM bea."""
from pathlib import Path
import subprocess,re,shutil,json,hashlib
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'outputs/curve-surface';OUT.mkdir(parents=True,exist_ok=True)
PREAMBLE=r'''\documentclass[11pt,a4paper]{article}
\usepackage[margin=23mm,headheight=14pt,headsep=8.5mm,footskip=10mm]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{assets/tex/cm-bea}
\input{ot1cmss.fd}
\DeclareFontShape{OT1}{cmss}{b}{n}{<->ssub*cmss/bx/n}{}
\DeclareFontShape{OT1}{cmss}{b}{it}{<->ssub*cmss/bx/n}{}
\DeclareFontShape{OT1}{cmss}{bx}{it}{<->ssub*cmss/bx/n}{}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.12}
\setlength{\parindent}{2em}\setlength{\parskip}{3pt}
\usepackage{titlesec}
\titleformat{\section}{\centering\normalfont\large\bfseries}{}{0pt}{}
\titleformat{\subsection}{\normalfont\normalsize\bfseries}{}{0pt}{}
\titlespacing*{\section}{0pt}{1.5\baselineskip}{0.8\baselineskip}
\titlespacing*{\subsection}{0pt}{1.1\baselineskip}{0.5\baselineskip}
\usepackage{needspace,enumitem,longtable,booktabs,array,calc,graphicx}
\providecommand{\tightlist}{\setlength{\itemsep}{3pt}\setlength{\parskip}{0pt}}
\usepackage{fancyhdr}\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\small 曲线积分与曲面积分}\fancyhead[R]{\small\hyperlink{lecture-toc}{目录}}
\fancyfoot[C]{\thepage}\renewcommand{\headrulewidth}{0.4pt}
\usepackage[hidelinks,unicode,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdfauthor={Vincent Arqain},pdftitle={曲线积分与曲面积分}}
\renewcommand{\contentsname}{目录}\setcounter{tocdepth}{2}\setcounter{secnumdepth}{0}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\predisplaypenalty=10000\interdisplaylinepenalty=1000
\raggedbottom\emergencystretch=2em
\setlength{\LTpre}{6pt}\setlength{\LTpost}{6pt}
\newcommand{\fig}[2]{\begin{center}\includegraphics[width=0.76\linewidth,height=0.34\textheight,keepaspectratio]{print/curve-surface-figures/#1.pdf}\par\small #2\end{center}}
'''

def compile_tex(name,source):
 tex=ROOT/'print'/f'{name}.tex';tex.write_text(source)
 for run in range(3):
  p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={OUT}',str(tex)],cwd=ROOT,text=True,capture_output=True)
  (OUT/f'{name}-pass{run+1}.txt').write_text(p.stdout)
  if p.returncode:raise RuntimeError(p.stdout[-6000:])
 shutil.copyfile(OUT/f'{name}.pdf',ROOT/'content/notes'/f'{name}.pdf')
 print('Built',name)

def lecture():
 raw=(ROOT/'content/notes/curve-surface-integrals.md').read_text().split('---',2)[2]
 raw=re.sub(r'^(#{2,3}) §',r'\1 ',raw,flags=re.M)
 body=raw[raw.index('## 1 '):]
 body=re.sub(r'\\qquad\\text\{\(([0-9.]+)\)\}',r'\\tag{\1}',body)
 # Diagrams use the identical vector PDF version; captions are retained.
 body=re.sub(r'!\[([^\]]+)\]\(/figures/curve-surface/([a-z-]+)\.svg\)',lambda m:'\n\\fig{'+m[2]+'}{'+m[1]+'}\n',body)
 body=re.sub(r'\]\((/[^)]*)\)',lambda m:'](https://zj139.github.io/math-notes'+m[1]+')',body)
 # Shift the Markdown heading levels into standard article section/subsection.
 body=re.sub(r'^## (\d+) ',r'# §\1 ',body,flags=re.M)
 body=re.sub(r'^### (\d+\.\d+) ',r'## §\1 ',body,flags=re.M)
 latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
 latex=latex.replace('\\[','\\begin{equation*}').replace('\\]','\\end{equation*}')
 latex=latex.replace(r'\section{',r'\Needspace{9\baselineskip}'+'\n'+r'\section{')
 latex=latex.replace(r'\subsection{',r'\Needspace{6\baselineskip}'+'\n'+r'\subsection{')
 latex=latex.replace(r'\section{§11',r'\clearpage\section{§11')
 latex=latex.replace(r'\subsection{§11.3',r'\Needspace{17\baselineskip}\subsection{§11.3')
 latex=re.sub(r'\\textbf\{(证明：|解：|定理[^}]*|命题[^}]*)\}',r'\\Needspace{3\\baselineskip}\\textbf{\1}',latex)
 intro=r'''\begin{document}
\begin{center}{\LARGE\bfseries 曲线积分与曲面积分\par}\vspace{7pt}
{\large 定义、证明、图解与科大精选例题\par}\vspace{5pt}
{§1—§11\quad 16 道正文例题\quad 12 幅配图}\end{center}
本讲义以所上传知识框架为主线，参照常庚哲、史济怀《数学分析教程》第四版下册第 11—13 章编写。四类积分各选四道科大原题，均覆盖一般计算和对称性方法。中文采用 Fandol 宋体，公式采用 CM bea，沿用指定参考文档的文章版式。

\href{https://zj139.github.io/math-notes/files/notes/curve-surface-appendix-starred-cm-bea.pdf}{独立阅读附录：58 道带星号的原例题及解答。}附录完整保留上传例题文件的原过程与原有编校注，不纳入正文题数和节号。
\hypertarget{lecture-toc}{}\begingroup\setlength{\parskip}{0pt}\small\tableofcontents\endgroup\clearpage
'''
 compile_tex('curve-surface-integrals-cm-bea',PREAMBLE+intro+latex+'\n\\end{document}\n')

def appendix():
 extra=r'''
\usepackage{bm,xcolor,tikz,etoolbox,xstring}
\usetikzlibrary{arrows.meta,decorations.markings}
\definecolor{navy}{RGB}{31,30,29}\definecolor{ink}{RGB}{31,30,29}
\newcommand{\dd}{\mathop{}\!\mathrm d}
\newcommand{\vct}[1]{\bm{#1}}\newcommand{\rr}{\vct r}\newcommand{\FF}{\vct F}\newcommand{\nn}{\vct n}\newcommand{\ttau}{\vct\tau}
\DeclareMathOperator{\grad}{grad}\DeclareMathOperator{\diver}{div}\DeclareMathOperator{\rot}{rot}\DeclareMathOperator{\curl}{curl}\DeclareMathOperator{\arcosh}{arcosh}
\makeatletter
\newcommand{\oiint}{\mathop{\mathpalette\closed@double\relax}\nolimits}
\newcommand{\closed@double}[2]{\ooalign{$\m@th#1\iint$\cr\hidewidth\raisebox{0.02ex}{$\m@th#1\circ$}\hidewidth\cr}}
\makeatother
\newcommand{\src}[1]{\par{\footnotesize 出处：原书 #1。纸书页码；原 PDF 页码加 11。}\par}
\newcommand{\entry}[3]{\IfBeginWith{#1}{例}{\def\entrytitle{*#1}}{\def\entrytitle{#1}}\Needspace{6\baselineskip}\subsection*{\entrytitle\quad #2}\phantomsection\addcontentsline{toc}{subsection}{\entrytitle\quad #2}\src{#3}}
\newcommand{\ednote}[1]{\par{\small\textbf{编校注}\quad #1}\par}
\newcommand{\sol}{\par\textbf{原解}\quad}\newcommand{\prooftext}{\par\textbf{原证明}\quad}
\setlist[itemize]{leftmargin=1.4em,label={},itemsep=3pt,topsep=3pt,parsep=1pt}
\setlist[enumerate]{leftmargin=2.5em,label=(\roman*),itemsep=3pt,topsep=3pt}
\setcounter{secnumdepth}{1}\renewcommand{\thesection}{§A.\arabic{section}}
\titleformat{\section}{\centering\normalfont\large\bfseries}{\thesection}{0.6em}{}
\makeatletter
\renewcommand*\l@section{\@dottedtocline{1}{0em}{3.8em}}
\renewcommand*\l@subsection{\@dottedtocline{2}{1.5em}{0em}}
\makeatother
\pretocmd{\section}{\Needspace{7\baselineskip}}{}{}
\hypersetup{pdftitle={曲线积分与曲面积分讲义：58 道带星号原例题阅读附录}}
\begin{document}
\begin{center}{\LARGE\bfseries 曲线积分与曲面积分讲义\par}\vspace{7pt}
{\large 独立阅读附录：58 道带星号原例题\par}\end{center}
本册根据用户上传的《多元积分计算》PDF 及其对应源码编排。58 道例题全部保留，题目前加“*”；原题号、计算过程、原证明、图形和编校注保持原样。原资料中的定义、定理和反常积分内容同时保留，以便独立阅读。本册不纳入讲义正文 §1—§11，也不计入正文的 16 道科大精选例题。

原资料出处：佘志坤主编，全国大学生数学竞赛命题组编，《全国大学生数学竞赛解析教程（数学专业类）（上册）——数学分析》，科学出版社，2024。纸书页码见各条出处。

原文件中“原解存疑”等编校说明继续保留，尤其 *例 5.2.12；保留原解不表示这些条目已被重新确认正确。全册中文采用 Fandol 宋体，数学公式统一为 CM bea。
\hypertarget{lecture-toc}{}\begingroup\small\setlength{\parskip}{0pt}\tableofcontents\endgroup\clearpage
'''
 sections=['curve','surface','related','infinite','singular','improper-problems']
 body='\n'.join(r'\input{print/curve-surface-appendix/sections/'+s+'}' for s in sections)
 compile_tex('curve-surface-appendix-starred-cm-bea',PREAMBLE+extra+body+'\n\\end{document}\n')

if __name__=='__main__':
 import sys
 choice=sys.argv[1:]
 if not choice or 'main' in choice:lecture()
 if not choice or 'appendix' in choice:appendix()
