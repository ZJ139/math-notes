#!/usr/bin/env python3
"""Build a real-functions-v1 section in the requested S layout; use the section’s selected math fonts."""
from pathlib import Path
import re,subprocess,shutil,sys
R=Path(__file__).resolve().parents[1]
section=sys.argv[1] if len(sys.argv)>1 else '3.1'
if section not in ('3.1','3.2','3.3','4.1','4.2','4.3','4.4','4.5'):raise ValueError('Unsupported S section')
slug=section.replace('.','-')
O=R/f'outputs/real-v1-{slug}';O.mkdir(parents=True,exist_ok=True)
chapter, number = section.split('.')
raw=(R/f'content/notes/real-functions-v1/ch{int(chapter):02d}-s{number}.md').read_text()
body=raw[raw.index(f'## {section}.1 '):].split('[返回实变函数-v1总目次]')[0]
body=re.sub(r'\\qquad\\text\{\((\d+\.\d+\.\d+)\)\}',r'\\tag{\1}',body)
blocks=[]
def block(m):
 b='\n'.join(re.sub(r'^> ?', '',line) for line in m[0].splitlines())
 title=re.match(r'\*\*(.+?)\*\*',b)[1]
 content=b[b.index('**',2)+2:].strip()
 color='orange' if re.match(r'^例(?:\s|$)',title) or title.startswith(('辨析','题意')) else 'navy'
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
latex=re.sub(r'\\section\{(\d+\.\d+\.\d+\s+[^}]+)\}',lambda m:r'\section[\S{}'+m[1]+']{'+m[1]+'}',latex)
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
\usepackage{xcolor,titlesec,tikz,enumitem,longtable,booktabs,array,calc,needspace}
\usepackage{assets/tex/s-style-boxes}
\usetikzlibrary{arrows.meta,positioning}
\definecolor{sitepaper}{HTML}{FFFEFC}\pagecolor{sitepaper}
\definecolor{navy}{HTML}{10136B}\definecolor{teal}{HTML}{236B66}
\titleformat{\section}{\large\bfseries\color{navy}}{}{0pt}{}
\titleformat{\subsection}{\normalsize\bfseries\color{navy}}{}{0pt}{}
\titlespacing*{\section}{0pt}{17pt}{9pt}\titlespacing*{\subsection}{0pt}{12pt}{6pt}
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
if section=='3.2':
 latex=latex.replace(r'\Needspace{9\baselineskip}\subsection{问题 10}',r'\Needspace{15\baselineskip}\subsection{问题 10}')
 latex=latex.replace(r'\Needspace{10\baselineskip}\section[\S{}3.2.9',r'\clearpage\section[\S{}3.2.9')
 pre=pre.replace('3.1 可测函数的定义与性质','3.2 可测函数列的收敛')
 pre=re.sub(r'\\textbf\{主线：\}[^\n]+',lambda _:r'\textbf{主线：}从误差集与尾并出发，以可求和的测度分配构造统一大集；完整展开四种收敛方式之间的关系、Riesz 子列构造与依测度 Cauchy 完备性。',pre)
 pre=re.sub(r'\\begin\{center\}\n\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}\\end\{center\}', '',pre,flags=re.S)
 pre=re.sub(r'本节对应[^\n]+',lambda _:r'本节对应《实变函数知识框架》\S3.2，依据徐森林、薛春华《实变函数论》印刷第185—199页的收敛部分及第207—208页练习题。保留教材定理编号，附全部十二题详解；第12题明确一般测度空间的可测性条件。Lusin定理留给\S3.3。本节不使用积分理论。中文为Fandol宋体，数学为CM bea。',pre)
if section=='3.3':
 pre=pre.replace(r'\newpage','').replace(r'\tableofcontents',r'\renewcommand{\addvspace}[1]{\vskip 2pt}\tableofcontents')
 latex=re.sub(r'\\Needspace\{10\\baselineskip\}(?=\\section\[\\S\{\}3\.3\.[2-8])',lambda _:r'\clearpage',latex)
 pre=pre.replace('3.1 可测函数的定义与性质','3.3 可测函数的构造')
 lead=next(line.removeprefix('主线：') for line in raw.splitlines() if line.startswith('主线：'))
 pre=re.sub(r'\\textbf\{主线：\}[^\n]+',lambda _:r'\textbf{主线：}'+lead,pre)
 for old,new in [('水平集与原像','简单函数分层'),('运算与可数极限','大闭集上连续'),('简单函数逼近','全空间延拓')]:
  pre=pre.replace(old,new)
 pre=re.sub(r'本节对应[^\n]+',lambda _:r'本节对应《实变函数知识框架》\S3.3 与徐森林、薛春华《实变函数论》印刷第199—208页。教材例3.2.5—3.2.10及相关原题保留原编号，另附三道迁移练习。记 $m$ 为 $\mathbb R^d$ 上的 Lebesgue 测度，$E$ 为 Lebesgue 可测集。',pre)
 # Root-relative site links need an absolute destination in a standalone PDF.
 latex=latex.replace(r'\href{/notes/',r'\href{https://zj139.github.io/math-notes/notes/')
if chapter=='4':
 title=re.search(r'^title: "(.+)"$',raw,re.M)[1]
 pre=pre.replace('3.1 可测函数的定义与性质',title).replace(r'第三章\quad 可测函数',r'第四章\quad Lebesgue 积分')
 intro=raw.split('---\n',2)[-1].split('## 本节目次')[0].strip().split('\n\n')
 pre=re.sub(r'\\textbf\{主线：\}[^\n]+',lambda _:convert(intro[0])+r'\par\textbf{主线：}'+convert(intro[1].removeprefix('主线：')).strip(),pre)
 pre=re.sub(r'本节对应[^\n]+',lambda _:convert(intro[2]).strip(),pre)
 chapter_nodes={
  '4.1': ('简单函数分层','简单下界上确界','Levi 递增极限','级数与 Fatou'),
  '4.2': ('正负部分','绝对可积','控制收敛','含参积分'),
  '4.4': ('区间与点振幅','Darboux 上下和','可积判据','反常积分'),
  '4.5': ('截面测度','非负函数换序','绝对可积换序','分布函数与卷积'),
  '4.3': ('简单函数分层','连续与阶梯逼近','平移连续性','高频积分'),
 }
 if section in ('4.3','4.4','4.5'):
  pre=pre.replace('{FFFEFC}', '{FAF9F5}')
 for old,new in zip(('水平集与原像','运算与可数极限','简单函数逼近','Borel 代表'),chapter_nodes[section]):
  pre=pre.replace(old,new)
 if section=='4.5':
  latex=latex.replace(r'\Needspace{10\baselineskip}\section[\S{}4.5.7', r'\clearpage\section[\S{}4.5.7')
 if section in ('4.1','4.2'):
  latex=re.sub(r'\\Needspace\{10\\baselineskip\}(?=\\section\[\\S\{\}'+re.escape(section)+r'\.(?!1 ))',lambda _:r'\clearpage',latex)
 pre=pre.replace('′',r'\ensuremath{{}^{\prime}}')
 latex=latex.replace('′',r'\ensuremath{{}^{\prime}}')
tex=R/f'print/real-functions-v1-{slug}.tex'
tex.write_text(pre+latex+'\n\\end{document}\n')
for i in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={O}',str(tex)],cwd=R,capture_output=True,text=True)
 (O/f'compile-{i}.txt').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-7000:])
shutil.copy2(O/(tex.stem+'.pdf'),R/'content/notes/real-functions-v1'/(tex.stem+'.pdf'))
print('Built',tex.stem+'.pdf')
