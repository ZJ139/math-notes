#!/usr/bin/env python3
"""Rebuild the S-style lecture from the same Markdown used by the website."""
from pathlib import Path
import re, subprocess, shutil
R=Path(__file__).resolve().parents[1]
O=R/'outputs/conics-matrix';O.mkdir(parents=True,exist_ok=True)
raw=(R/'content/notes/conics-matrix-coordinate-transformations.md').read_text().split('---',2)[2]
body=raw[raw.index('## §1 '):]
body=re.sub(r'\\qquad\\text\{\(([0-9.]+)\)\}',r'\\tag{\1}',body)
body=re.sub(r'!\[([^\]]+)\]\(/figures/conics-matrix/([\w-]+)\.svg\)',lambda m:'\\fig{'+m[2]+'}{'+m[1]+'}',body)
# Keep display mathematics intact when stripping Markdown quote prefixes.
blocks=[]
def block(m):
 b='\n'.join(re.sub(r'^> ?', '',line) for line in m[0].splitlines())
 title=re.match(r'\*\*(.+?)\*\*',b)[1]
 content=b[b.index('**',2)+2:].strip()
 color='orange' if title.startswith('例 ') or title.startswith(('辨析','检查')) else 'navy'
 tag=f'CONICBOXPLACEHOLDER{len(blocks)}'
 blocks.append((tag,title,color,content))
 return '\n'+tag+'\n'
body=re.sub(r'^>.*(?:\n>.*)*',block,body,flags=re.M)
body=re.sub(r'^## §\d+ ', '# ',body,flags=re.M)
body=re.sub(r'^### §\d+\.\d+ ', '## ',body,flags=re.M)
def convert(s):
 p=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--no-highlight'],input=s,capture_output=True,text=True,check=True)
 return p.stdout.replace('\\[','\\begin{equation*}').replace('\\]','\\end{equation*}')
latex=convert(body)
for tag,title,color,content in blocks:
 titletex=convert(title).strip()
 latex=re.sub(r'\b'+tag+r'\b',lambda m:'\\begin{sboxenv}{'+color+'}{'+titletex+'}\n'+convert(content)+'\n\\end{sboxenv}',latex)
latex=latex.replace(r'\section{',r'\Needspace{12\baselineskip}\section{').replace(r'\subsection{',r'\Needspace{8\baselineskip}\subsection{')
latex=re.sub(r'\\textbf\{(解：|证明：)\}',r'\\Needspace{5\\baselineskip}\\textbf{\1}',latex)
pre=r'''\documentclass[11pt,a4paper]{article}
\usepackage[left=23mm,right=23mm,top=22mm,bottom=22mm,footskip=11mm]{geometry}
\usepackage{amsmath,amssymb}
\usepackage[no-math]{fontspec}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.10}
\setlength{\parindent}{2em}\setlength{\parskip}{4pt}
\usepackage{xcolor,titlesec,tikz,graphicx,enumitem,longtable,booktabs,array,calc,needspace}
\usepackage{assets/tex/s-style-boxes}
\usetikzlibrary{arrows.meta,positioning}
\definecolor{navy}{HTML}{10136B}\definecolor{teal}{HTML}{236B66}
\titleformat{\section}{\Large\bfseries\color{navy}}{\thesection}{0.7em}{}
\titleformat{\subsection}{\large\bfseries\color{navy}}{\thesubsection}{0.7em}{}
\titlespacing*{\section}{0pt}{17pt}{9pt}\titlespacing*{\subsection}{0pt}{12pt}{6pt}
\setlist[enumerate]{leftmargin=2.2em,itemsep=3pt,parsep=0pt,topsep=3pt}
\setlist[itemize]{label={},leftmargin=1em,itemsep=3pt}
\providecommand{\tightlist}{\setlength{\itemsep}{3pt}\setlength{\parskip}{0pt}}
\usepackage[unicode,hidelinks,linktoc=all]{hyperref}\usepackage{bookmark}
\hypersetup{pdftitle={二次曲线的矩阵理论与坐标变换},pdfauthor={Vincent Arqain}}
\renewcommand{\contentsname}{目录}\setcounter{tocdepth}{1}
\newcommand{\fig}[2]{\begin{center}\includegraphics[width=0.94\linewidth,height=0.33\textheight,keepaspectratio]{print/conics-matrix-figures/#1.pdf}\par\small #2\end{center}}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000\predisplaypenalty=5000
\allowdisplaybreaks[1]\raggedbottom\emergencystretch=2em
\setlength{\LTpre}{6pt}\setlength{\LTpost}{6pt}\renewcommand{\arraystretch}{1.18}
\begin{document}
\begin{center}{\LARGE\bfseries 二次曲线的矩阵理论与坐标变换\par}\vspace{7pt}
{\large 二次型矩阵、不变量、标准形与几何元素\par}\vspace{5pt}
{S 样式\qquad CM ams\qquad 扩写校订版}\end{center}
\textbf{主线：}将一般二次方程写成对称矩阵，用正交对角化确定坐标轴，用平移确定中心或顶点；在标准系中读出几何元素，再用同一个坐标变换写回原坐标系。保留原稿十节内容与三道例题，补全证明和适用条件，增加两道巩固例题。
\begin{center}
\begin{tikzpicture}[node distance=5mm and 4mm,box/.style={draw=navy!65,fill=navy!3,rounded corners=1pt,minimum width=32mm,minimum height=12mm,align=center,font=\small},>=Stealth]
\node[box](a){一般方程};\node[box,right=of a](b){矩阵与不变量};\node[box,right=of b](c){类型与特征方向};\node[box,right=of c](d){中心或顶点};
\node[box,below=of d](e){标准方程};\node[box,left=of e](f){半轴与离心率};\node[box,left=of f](g){焦点、轴、准线};\node[box,left=of g,fill=teal!5](h){原坐标表达};
\draw[->](a)--(b);\draw[->](b)--(c);\draw[->](c)--(d);\draw[->](d)--(e);\draw[->](e)--(f);\draw[->](f)--(g);\draw[->](g)--(h);
\end{tikzpicture}\end{center}
\textbf{记号：}$\boldsymbol x=(x,y)^T$，$X=(x,y,1)^T$；$Q=(\boldsymbol e_1\ \boldsymbol e_2)$，$\det Q=1$。常数项记为 $c_0$，焦半距记为 $c$；粗体 $\boldsymbol b$ 表示一次项系数列，普通 $b$ 表示半轴长。中文为 Fandol 宋体，数学采用 article 加载 amsmath、amssymb 的默认 Computer Modern 字体。
\begingroup\small\setlength{\parskip}{0pt}\tableofcontents\endgroup
\newpage
'''
tex=R/'print/conics-matrix-coordinate-transformations-cm-ams.tex'
tex.write_text(pre+latex+'\n\\end{document}\n')
for i in range(3):
 p=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={O}',str(tex)],cwd=R,capture_output=True,text=True)
 (O/f'compile-{i}.txt').write_text(p.stdout)
 if p.returncode:raise RuntimeError(p.stdout[-7000:])
shutil.copy2(O/(tex.stem+'.pdf'),R/'content/notes'/(tex.stem+'.pdf'))
print('Built',tex.stem+'.pdf')
