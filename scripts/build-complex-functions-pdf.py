"""Build complex-functions chapters from published Markdown.
Run from repository root; default: chapter 1. Use --chapter 2 for chapter 2.
Typography is inherited unchanged from the established real-functions template.
"""
from pathlib import Path
import argparse, re, subprocess

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--chapter',type=int,choices=[1,2],default=1)
chapter=parser.parse_args().chapter
R=Path(__file__).resolve().parents[1]
source=R/'content/notes/complex-functions'
settings={
 1:('第一章','复数与复变函数','1—26',7,63),
 2:('第二章','全纯函数','27—67',5,74),
}
name,topic,pages,sections,exercises=settings[chapter]
pre=(R/'print/real-functions-chapter-1.tex').read_text().split(r'\begin{document}')[0]
pre=pre.replace('实变函数论 · 第一章',f'复变函数 · {name}').replace('实变函数讲义：第一章',f'复变函数讲义：{name}').replace('集合运算、集合的势、集类',topic)
pre=pre.replace(r'\renewcommand{\thesection}{1.\arabic{section}}',rf'\renewcommand{{\thesection}}{{{chapter}.\arabic{{section}}}}')
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
'''
pre+=rf'\vspace{{8pt}}{{\large {name}\quad {topic}\par}}'+'\n'
pre+=rf'\vspace{{6pt}}{{\small 依史济怀、刘太顺《复变函数》\quad 教材第 {pages} 页\par}}'+'\n'
pre+=r'\end{center}\vspace{8pt}'+'\n'
pre+=f'本章含{sections}节讲义及全部 {exercises} 道习题原题。定义、定理和性质沿用教材的记号与编号；证明补足必要条件、退化情形与关键推导。'
if chapter==1:
 pre+='教材未证的 Jordan 曲线定理给出拓扑证明，并明确列出其同调论前置工具。'
else:
 pre+='从复线性微分与 Cauchy--Riemann 方程出发，依次建立保角性、初等函数及其分支、分式线性变换。全纯高阶正则性给出独立补证；各节设可点击定理索引，原题按节跳转。'
pre+='习题不附解答，原题中的疑义另列校勘。\n'+r'\tableofcontents\clearpage'+'\n'
pieces=[]
for i in range(1,sections+2):
 practice=i==sections+1
 p=source/(f'ch{chapter:02d}-practice.md' if practice else f'ch{chapter:02d}-s{i}.md')
 text=p.read_text();title=re.search(r'^title: "(.*)"',text,re.M)[1]
 body=text.split('---',2)[2].strip()
 # The PDF has its own linked contents, indices and exercise sections.
 body=re.sub(r'^\[.*?\]\(#[^\n]+\n','',body,flags=re.M)
 body=re.sub(r'^\[(?:上一节|下一节|第一章习题|第二章讲义|返回第一章目录).*$', '',body,flags=re.M)
 body=body.replace('/figures/complex-functions/','public/figures/complex-functions/')
 latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
 # Pandoc is run separately for each document: namespace local targets to avoid
 # duplicate destinations such as the five headings titled 定理索引.
 if chapter==2:
  latex=re.sub(r'\\(hypertarget|hyperlink|label|ref)\{([^}]+)\}',lambda m:'\\'+m[1]+'{'+p.stem+'-'+m[2]+'}',latex)
  latex=re.sub(r'\\hyperref\[([^]]+)\]',lambda m:r'\hyperref['+p.stem+'-'+m[1]+']',latex)
 if not practice:
  heading='\\section{'+title.split('　',1)[1]+'}\n'
 else:
  heading=rf'\clearpage\section*{{{name}习题}}\phantomsection\addcontentsline{{toc}}{{section}}{{{name}习题}}'+'\n'
 latex=latex.replace(r'\subsection{',r'\Needspace{5\baselineskip}'+'\n'+r'\subsection{')
 if practice:
  latex=re.sub(r'\\textbf\{(\d+)\.\}',lambda m:r'\par\Needspace{5\baselineskip}'+'\n'+r'\noindent\textbf{'+m[1]+'.}',latex)
 pieces.append(heading+latex)
base=f'complex-functions-chapter-{chapter}'
tex=R/f'print/{base}.tex';tex.write_text(pre+'\n'.join(pieces)+'\n\\end{document}\n')
out=R/f'tmp/complex-pdf-ch{chapter}';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 r=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=R,text=True,capture_output=True)
 if r.returncode:
  print(r.stdout[-6000:]);raise SystemExit(r.returncode)
(source/f'{base}.pdf').write_bytes((out/f'{base}.pdf').read_bytes())
print('Built',source/f'{base}.pdf')
