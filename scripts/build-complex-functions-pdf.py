"""Build complex-functions chapters from published Markdown.
Run from repository root; default: chapter 1. Use --chapter N for later chapters.
Typography is inherited unchanged from the established real-functions template.
"""
from pathlib import Path
import argparse, re, subprocess

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--chapter',type=int,choices=[1,2,3,4,5,6,7,8,9],default=1)
chapter=parser.parse_args().chapter
R=Path(__file__).resolve().parents[1]
source=R/'content/notes/complex-functions'
settings={
 1:('第一章','复数与复变函数','1—26',7,63),
 2:('第二章','全纯函数','27—67',5,74),
 3:('第三章','全纯函数的积分表示','68—102',7,49),
 4:('第四章','全纯函数的 Taylor 展开及其应用','103—140',5,91),
 5:('第五章','全纯函数的 Laurent 展开及其应用','141—193',7,58),
 6:('第六章','全纯开拓','194—209',3,28),
 7:('第七章','共形映射','210—234',4,25),
 8:('第八章','调和函数与次调和函数','235—252',4,43),
 9:('第九章','多复变数全纯函数与全纯映射','253—278',6,24),
}
name,topic,pages,sections,exercises=settings[chapter]
pre=(R/'print/real-functions-chapter-1.tex').read_text().split(r'\begin{document}')[0]
# Use the shared, Beamer-verified mathematics without changing article layout.
# Earlier chapter attachments retain their existing typography on regeneration.
if chapter in (7,8):
 pre=pre.replace(r'\usepackage[no-math]{fontspec}',r'\usepackage{assets/tex/cm-bea}')
pre=pre.replace('实变函数论 · 第一章',f'复变函数 · {name}').replace('实变函数讲义：第一章',f'复变函数讲义：{name}').replace('集合运算、集合的势、集类',topic)
pre=pre.replace(r'\renewcommand{\thesection}{1.\arabic{section}}',rf'\renewcommand{{\thesection}}{{{chapter}.\arabic{{section}}}}')
if chapter==9:
 pre=pre.replace(r'\usepackage[no-math]{fontspec}',r'\usepackage{assets/tex/cm-bea}')
 pre=pre.replace(r'\renewcommand{\thesection}{9.\arabic{section}}',r'\renewcommand{\thesection}{\S{}9.\arabic{section}}')
 pre=pre.replace(r'{\thesection.}',r'{\thesection}')
 pre+=r'''
\makeatletter
\let\chapterNineSectionToc\l@section
\renewcommand{\l@section}[2]{\begingroup
  \let\chapterNineNumberline\numberline
  \renewcommand{\numberline}[1]{\hb@xt@3.6em{##1\hfil}}
  \chapterNineSectionToc{#1}{#2}\endgroup}
\makeatother
'''
pre+=r'''
\usepackage{graphicx}
\usepackage{longtable}
\usepackage{calc}
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
elif chapter==2:
 pre+='从复线性微分与 Cauchy--Riemann 方程出发，依次建立保角性、初等函数及其分支、分式线性变换。全纯高阶正则性给出独立补证；各节设可点击定理索引，原题按节跳转。'
elif chapter==3:
 pre+='从复积分与 Cauchy--Goursat 定理建立原函数和积分表示，再证明高阶可导性、导数估计及非齐次方程求解。一般可求长边界与任意域整体求解另给完整补证，并标明实分析前置工具；定理 3.7.3 的全域积分补足收敛条件。各节设可点击定理索引，原题按节跳转。'
elif chapter==4:
 pre+='由紧集上的一致控制建立 Taylor 理论、零点计数与模估计。此次修订补全原函数级数的半径论证、修正 Abel 扇形闭集，并核正习题 4.2.10 的求和起点。'
elif chapter==5:
 pre+='覆盖 54 个教材编号条目，补证 Picard 大定理，逐项说明积分的主值、分支与收敛条件；给出 Mittag–Leffler、零点构造、插值及 Blaschke 乘积的证明。58 道主编号题中含 31 个积分小题，保留教材围道图及提示。'
elif chapter==6:
 pre+='覆盖 19 个教材编号条目，补足可求长曲线的连续拼接、单叶反射的同侧条件、圆环分类及路径同伦证明。Picard 小定理复用已证的导数估计，使证明依赖在前六章内闭合；保留九幅教材配图、逐节索引与原题校注。'
elif chapter==7:
 pre+='覆盖 19 个教材编号条目，由正规族与导数极值证明 Riemann 映射定理，补足 Jordan 边界对应、角点展开、无限端及积分分支的证明。保留教材必要配图与原题提示，另列原题校注。'
elif chapter==8:
 pre+='覆盖 19 个教材编号条目，完整证明平均值性质、圆盘和半平面边值问题及次调和函数的基本性质。补齐一般上半连续情形的圆周平均证明，明确复积分收敛与负无穷值的处理；原题错误及必要条件独立校注。'
else:
 pre+='覆盖 36 个教材编号条目，补证不预设连续性的 Hartogs 定理，严谨处理 Laurent 系数、坐标超平面与延拓范围。由复线性微分、Cartan 刚性及球自同构构造证明 Poincaré 定理；数学公式采用 CM bea，中文与版式沿用既定模板。原题疑义和修正独立列出，附可点击目录、定理索引及相邻导航。'
pre+=('习题不附常规解答，原题中的疑义另列校勘。\n' if chapter==8 else '习题不附解答，原题中的疑义另列校勘。\n')
pre+=(r'\begingroup\setlength{\parskip}{0pt}\tableofcontents\endgroup\clearpage' if chapter>=6 else r'\tableofcontents\clearpage')+'\n'
pieces=[]
for i in range(1,sections+2):
 practice=i==sections+1
 p=source/(f'ch{chapter:02d}-practice.md' if practice else f'ch{chapter:02d}-s{i}.md')
 text=p.read_text();title=re.search(r'^title: "(.*)"',text,re.M)[1]
 body=text.split('---',2)[2].strip()
 body=body.split('<!-- chapter-navigation -->')[0].strip()
 # The PDF has its own linked contents, indices and exercise sections.
 if chapter<3:
  body=re.sub(r'^\[.*?\]\(#[^\n]+\n','',body,flags=re.M)
 body=re.sub(r'^\[(?:上一节|下一节|第一章习题|第二章讲义|第三章讲义|返回第一章目录).*$', '',body,flags=re.M)
 body=body.replace('/figures/complex-functions/','public/figures/complex-functions/')
 if chapter>=4:
  # Stable ASCII anchors keep all punctuation/CJK headings clickable in PDF.
  for number,heading in enumerate(re.findall(r'^## (.+)$',body,re.M),1):
   slug=re.sub(r'[^\w\s-]','',heading.lower()).strip().replace(' ','-')
   target=f'heading-{number}'
   body=body.replace('](#'+slug+')','](#'+target+')')
   body=body.replace('## '+heading+'\n','## '+heading+' {#'+target+'}\n')
 # Parenthesized textbook subquestion numbers are literal text; Pandoc's
 # fancy_lists would silently renumber them when two share a paragraph.
 latex=subprocess.run(['pandoc','-f','markdown+tex_math_dollars+raw_tex-fancy_lists-implicit_figures','-t','latex','--no-highlight'],input=body,text=True,capture_output=True,check=True).stdout
 latex=latex.replace(r'\includegraphics{',r'\noindent\includegraphics{')
 if chapter>=8:
  latex=re.sub(r'\\qquad\\text\{\(('+str(chapter)+r'\.[^)]*)\)\}',lambda m:r'\tag{'+m[1]+'}',latex)
 if chapter>=7:
  # Keep the main contents to textbook entries and exercises; inline indices
  # retain their own clickable targets without repeating them in the contents.
  extras=['定理索引','习题索引','与下一节的联系：极值为什么可以达到',
          '正规化、映射半径与条件校注','边界条件的适用范围','公式的使用顺序与全章联系']
  for extra in extras:
   latex=latex.replace(r'\subsection{'+extra+'}',r'\subsection*{'+extra+'}')
 if chapter>=8:
  latex=re.sub(r'\\subsection\{([^}]+)\}',lambda m: m[0] if re.match(r'(?:定理|定义|命题|例|教材条目) '+str(chapter)+r'\.|习题 '+str(chapter)+r'\.|原题校注',m[1]) else r'\subsection*{'+m[1]+'}',latex)
 # Pandoc is run separately for each document: namespace local targets to avoid
 # duplicate destinations such as the five headings titled 定理索引.
 if chapter>=2:
  # The site drops punctuation from heading IDs, while Pandoc retains dots
  # in section numbers. Normalize both generated targets and incoming links.
  def local_id(value):
   return p.stem+'-'+(value.replace('.','') if chapter>=3 else value)
  latex=re.sub(r'\\(hypertarget|hyperlink|label|ref)\{([^}]+)\}',lambda m:'\\'+m[1]+'{'+local_id(m[2])+'}',latex)
  latex=re.sub(r'\\hyperref\[([^]]+)\]',lambda m:r'\hyperref['+local_id(m[1])+']',latex)
 if not practice:
  heading='\\section{'+title.split('　',1)[1]+'}\n'
 else:
  heading=rf'\clearpage\section*{{{name}习题}}\phantomsection\addcontentsline{{toc}}{{section}}{{{name}习题}}'+'\n'
 if chapter==9:
  if not practice:heading=r'\Needspace{12\baselineskip}'+'\n'+heading
  heading+=rf'\hypertarget{{chapter9-part-{i}}}{{}}'+'\n'
  nav=[]
  if i>1:nav.append(rf'\hyperlink{{chapter9-part-{i-1}}}{{上一节}}')
  if i<sections+1:nav.append(rf'\hyperlink{{chapter9-part-{i+1}}}{{下一节}}')
  if not practice:nav.append(rf'\hyperlink{{chapter9-part-{sections+1}}}{{本章习题}}')
  nav.append(r'\hyperlink{chapter9-contents}{本章目录}')
  heading+='\\noindent{\\small '+'\\quad '.join(nav)+'}\\par\n'
 needed=9 if chapter==3 and practice else (8 if chapter>=6 else 5)
 latex=latex.replace(r'\subsection{',rf'\Needspace{{{needed}\baselineskip}}'+'\n'+r'\subsection{')
 if chapter==9:
  latex=latex.replace(r'\Needspace{8\baselineskip}'+'\n'+r'\subsection{定理 9.6.2',r'\Needspace{20\baselineskip}'+'\n'+r'\subsection{定理 9.6.2')
 if practice:
  latex=re.sub(r'\\textbf\{(\d+)\.\}',lambda m:r'\par\Needspace{5\baselineskip}'+'\n'+r'\noindent\textbf{'+m[1]+'.}',latex)
 pieces.append(heading+latex)
base=f'complex-functions-chapter-{chapter}'
tex=R/f'print/{base}.tex'
# Preserve the chapter-four original review appendix when regenerating it.
appendix=''
marker=r'\clearpage\section*{校审记录}'
if chapter==4 and tex.exists() and marker in tex.read_text():
 appendix=marker+tex.read_text().split(marker,1)[1].split(r'\end{document}',1)[0]
if chapter==9:
 pre=pre.replace(r'\tableofcontents',r'\hypertarget{chapter9-contents}{}\tableofcontents')
tex.write_text(pre+'\n'.join(pieces)+'\n'+appendix+'\n\\end{document}\n')
out=R/f'tmp/complex-pdf-ch{chapter}';out.mkdir(parents=True,exist_ok=True)
for _ in range(3):
 r=subprocess.run(['xelatex','-no-shell-escape','-interaction=nonstopmode','-halt-on-error',f'-output-directory={out}',str(tex)],cwd=R,text=True,capture_output=True)
 if r.returncode:
  print(r.stdout[-6000:]);raise SystemExit(r.returncode)
(source/f'{base}.pdf').write_bytes((out/f'{base}.pdf').read_bytes())
print('Built',source/f'{base}.pdf')
