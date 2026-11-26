#!/usr/bin/env python3
"""Build §3.1 in the requested S layout; retain the shared CM bea math fonts."""
from pathlib import Path
import re,subprocess,shutil
R=Path(__file__).resolve().parents[1]
O=R/'outputs/real-v1-3-1';O.mkdir(parents=True,exist_ok=True)
raw=(R/'content/notes/real-functions-v1/ch03-s1.md').read_text()
body=raw[raw.index('## 3.1.1 '):].split('[返回实变函数-v1总目次]')[0]
body=re.sub(r'\\qquad\\text\{\((3\.1\.\d+)\)\}',r'\\tag{\1}',body)
blocks=[]
def block(m):
 b='\n'.join(re.sub(r'^> ?', '',line) for line in m[0].splitlines())
 title=re.match(r'\*\*(.+?)\*\*',b)[1]
 content=b[b.index('**',2)+2:].strip()
 color='inkgray' if title.startswith('例 ') else 'warm' if title.startswith(('辨析','题意')) else 'navy'
 tag=f'REALBOXPLACEHOLDER{len(blocks)}'
 blocks.append((tag,title,color,content))
 return '\n'+tag+'\n'
body=re.sub(r'^>.*(?:\n>.*)*',block,body,flags=re.M)
def convert(s):
 p=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--no-highlight'],input=s,capture_output=True,text=True,check=True)
 return p.stdout.replace('\\[','\\begin{equation*}').replace('\\]','\\end{equation*}')
latex=convert(body)
for tag,title,color,content in blocks:
 latex=re.sub(r'\b'+tag+r'\b',lambda m:'\\begin{sboxenv}{'+color+'}{'+convert(title).strip()+'}\n'+convert(content)+'\n\\end{sboxenv}',latex)
latex=latex.replace(r'\subsubsection{',r'\Needspace{9\baselineskip}\Exercise{').replace(r'\subsection{',r'\Needspace{10\baselineskip}\section{').replace(r'\Exercise{',r'\subsection{')
latex=re.sub(r'\\section\{(3\.1\.\d+\s+[^}]+)\}',lambda m:r'\section[\S{}'+m[1]+']{'+m[1]+'}',latex)
latex=re.sub(r'\\textbf\{(解：|证明：|想法：)\}',r'\\Needspace{4\\baselineskip}\\textbf{\1}',latex)
pre=r'''\documentclass[11pt,a4paper]{article}
\usepackage[left=23mm,right=23mm,top=22mm,bottom=22mm,footskip=11mm]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{assets/tex/cm-bea}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
\renewcommand{\bfdefault}{bx}
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.10}
\setlength{\parindent}{2em}\setlength{\parskip}{4pt}
\usepackage{xcolor,titlesec,tcolorbox,tikz,enumitem,longtable,booktabs,array,calc,needspace}
\tcbuselibrary{breakable,skins}\usetikzlibrary{arrows.meta,positioning}
\definecolor{navy}{HTML}{10136B}\definecolor{inkgray}{HTML}{474747}\definecolor{warm}{HTML}{94662C}\definecolor{teal}{HTML}{236B66}
\titleformat{\section}{\large\bfseries\color{navy}}{}{0pt}{}
\titleformat{\subsection}{\normalsize\bfseries\color{navy}}{}{0pt}{}
\titlespacing*{\section}{0pt}{17pt}{9pt}\titlespacing*{\subsection}{0pt}{12pt}{6pt}
\newtcolorbox{sboxenv}[2]{enhanced,breakable,colframe=#1,colback=#1!3!white,colbacktitle=#1,coltitle=white,fonttitle=\bfseries,title={#2},boxrule=0.45pt,arc=1.4pt,left=8pt,right=8pt,top=6pt,bottom=6pt,before skip=9pt,after skip=9pt,pad at break*=2mm}
\setlist[enumerate]{leftmargin=2.2em,itemsep=3pt,parsep=0pt,topsep=3pt}
\setlist[itemize]{label={},leftmargin=1em,itemsep=3pt}
\providecommand{\tightlist}{\setlength{\itemsep}{3pt}\setlength{\parskip}{0pt}}
\usepackage[unicode,hidelinks,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdftitle={实变函数-v1：3.1 可测函数的定义与性质},pdfauthor={Vincent Arqain}}
\renewcommand{\contentsname}{本节目次}\setcounter{tocdepth}{1}\setcounter{secnumdepth}{0}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000\predisplaypenalty=5000
\allowdisplaybreaks[1]\raggedbottom\emergencystretch=2em
\begin{document}
\begin{center}{\LARGE\bfseries 实变函数-v1\par}\vspace{7pt}
{\Large\bfseries 3.1 可测函数的定义与性质\par}\vspace{6pt}
{第三章\quad 可测函数\par}\end{center}
\textbf{主线：}以水平集为入口，将函数运算变成可数集合运算，以简单函数的有限分层连接测度与积分。既说明构造背后的想法，也逐项检查无穷值、复合及零测集修改的适用条件。
\begin{center}
\begin{tikzpicture}[node distance=5mm and 5mm,box/.style={draw=navy!65,fill=navy!3,rounded corners=1pt,minimum width=34mm,minimum height=10mm,align=center,font=\small},>=Stealth]
\node[box](a){水平集与原像};\node[box,right=of a](b){运算与可数极限};\node[box,right=of b](c){简单函数逼近};\node[box,right=of c,fill=teal!5](d){Borel 代表};
\draw[->](a)--(b);\draw[->](b)--(c);\draw[->](c)--(d);
\end{tikzpicture}\end{center}
本节对应《实变函数知识框架》\S3.1，依据徐森林、薛春华《实变函数论》印刷第174—184页与第185页定义3.2.2。含教材本节全部十五题详解；第15题明确单调方向的必要条件。下文结论重新编号。中文为Fandol宋体，数学为CM bea。
\begingroup\small\setlength{\parskip}{0pt}\tableofcontents\endgroup
\newpage
'''
tex=R/'print/real-functions-v1-3-1.tex'
tex.write_text(pre+latex+'\n\\end{document}\n')
for i in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={O}',str(tex)],cwd=R,capture_output=True,text=True)
 (O/f'compile-{i}.txt').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-7000:])
shutil.copy2(O/(tex.stem+'.pdf'),R/'content/notes/real-functions-v1'/(tex.stem+'.pdf'))
print('Built',tex.stem+'.pdf')
