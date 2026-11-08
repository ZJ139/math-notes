#!/usr/bin/env python3
"""Build the 2007–2016 review handbook and its source audit.
From repository root: python3 print/english/build-reading-distractors-2007-2016.py
Then run xelatex twice with -output-directory=print/english on the emitted .tex.
This command writes local files only and does not publish.
"""
from pathlib import Path
import re,json,hashlib,collections,unicodedata
ROOT=Path(__file__).resolve().parents[2]
NAME='reading-distractors-2007-2016'
DATA=json.loads((ROOT/f'print/english/{NAME}-data.json').read_text())
SHA=DATA['base_commit']
def plain(s):
 s=re.sub(r'\[([^\[\]]+)\]\([^)]*\)',r'\1',s)
 s=re.sub(r'\*\*\d+°\*\*','',s)
 return s.replace('**','').replace('*','').replace('\\$','$').strip()
def tx(s):
 s=re.sub(r"(?<=[A-Za-z])’(?=[A-Za-z])", "'", plain(str(s)));table={'\\':r'\textbackslash{}','&':r'\&','%':r'\%','$':r'\$','#':r'\#','_':r'\_','{':r'\{','}':r'\}','~':r'\textasciitilde{}','^':r'\textasciicircum{}'}
 return ''.join(table.get(c,c) for c in s)
def href(url,label):return r'\href{'+url.replace('%',r'\%').replace('#',r'\#')+'}{'+tx(label)+'}'
def link(label,text):return r'\hyperref['+label+']{'+tx(text)+'}'
def code(c):return 'R'+str(ord(c)-64).zfill(2)
def norm(s):return ''.join(c.lower() for c in unicodedata.normalize('NFKD',plain(s)) if c.isalnum())
qs=[];sources=[];passages=[];paragraphs={}
expected={s['path']:s['git_blob'] for s in DATA['sources']}
for y in range(2007,2017):
 for t in range(1,5):
  p=ROOT/f'content/english/reading-answers/{y}-reading-text-{t}.md';raw=p.read_bytes();s=raw.decode();rel=p.relative_to(ROOT).as_posix()
  blob=hashlib.sha1(b'blob '+str(len(raw)).encode()+b'\0'+raw).hexdigest();assert blob==expected[rel],f'Source changed: {rel}'
  url='https://zj139.github.io/math-notes/english/'+hashlib.sha256(('english/reading-answers/'+p.name).encode()).hexdigest()[:24]+'/'
  passage=s.split('## 一、原文定位与逐段直译')[1].split('## 二、逐题作答：选项与分析')[0]
  para_parts=re.split(r'^### (P\d+)[^\n]*\n',passage,flags=re.M)
  for i in range(1,len(para_parts),2):paragraphs[(y,t,para_parts[i])]=plain(' '.join(l[2:] for l in para_parts[i+1].splitlines() if l.startswith('> ')))
  passages.append(plain(' '.join(l[2:] for l in passage.splitlines() if l.startswith('> '))))
  sources.append(dict(year=y,text=t,path=rel,git_blob=blob,sha256=hashlib.sha256(raw).hexdigest(),url=url,pinned_url=f'https://github.com/ZJ139/math-notes/blob/{SHA}/{rel}',bytes=len(raw)))
  part=s.split('## 二、逐题作答：选项与分析')[1].split('## 三、全篇总结')[0]
  split=re.split(r'^### 第 (\d+) 题([^\n]*)\n',part,flags=re.M)
  for i in range(1,len(split),3):
   q=int(split[i]);body=split[i+2];stem=re.search(r'\*\*原题\*\*：(.*)',body).group(1).strip();stemcn=re.search(r'\*\*（(.*)）\*\*',body).group(1).removeprefix('题干直译：')
   stemen=stem.split('**（')[0].strip();ans=re.search(r'\*\*答案：([ABCD])',body).group(1);opts=[]
   for a,b in re.findall(r'^- \*\*\[([ABCD])\]\*\*\s*(.*?)(?=^- \*\*\[|^####)',body,re.M|re.S):
    m=re.search(r'\*\*(错误|正确)(?:｜(.*?))?\*\*[：:](.*)',b,re.S);assert m
    opts.append(dict(letter=a,english=plain(b.strip().split('\n')[0]),translation=plain(re.search(r'直译[：:]\s*（(.*?)）',b).group(1)),judgement=m.group(1),original_label=m.group(2) or m.group(3).split('。')[0],rationale=plain(m.group(3)),codes=[]))
   assert len(opts)==4 and sum(o['judgement']=='正确' for o in opts)==1
   assert next(o['letter'] for o in opts if o['judgement']=='正确')==ans
   qs.append(dict(id=f'{y}-T{t}-Q{q}',year=y,text=t,q=q,answer=ans,stem_en=plain(stemen),stem_cn=plain(stemcn),heading=plain(split[i+1].strip('｜ ')),options=opts,source_path=rel,source_blob=blob,source_url=url+'#q'+str(q),source_line=s[:s.index('### 第 '+str(q)+' 题')].count('\n')+1))
assert len(qs)==200 and len({q['id'] for q in qs})==200
Q={q['id']:q for q in qs};rows=[r.split() for r in DATA['coding'].splitlines() if r and not r.startswith('#')]
assert len(rows)==200
for q,row in zip(qs,rows):
 assert row[:2]==[str(q['year']),str(q['q'])] and len(row)==5
 for o,tags in zip([o for o in q['options'] if o['letter']!=q['answer']],row[2:]):
  assert tags and len(set(tags))==len(tags) and all(c in 'ABCDEFGHIJKLU' for c in tags)
  o['codes']=[code(c) if c!='U' else 'U' for c in tags]
  if 'U' in tags:assert q['id']=='2013-T2-Q27' and o['letter']=='D' and tags=='U'
wrong=[o for q in qs for o in q['options'] if o['letter']!=q['answer']]
assert len(wrong)==600 and sum(o['codes']==['U'] for o in wrong)==1
stats=[dict(code=code(c['code']),name=c['name'],options=sum(code(c['code']) in o['codes'] for o in wrong),questions=sum(any(code(c['code']) in o['codes'] for o in q['options']) for q in qs)) for c in DATA['categories']]
cases=DATA['cases'];assert len(cases)==24
for i,c in enumerate(cases,1):
 c['number']=i;q=Q[c['id']]
 assert all(any(o['letter']==f and code(c['code']) in o['codes'] for o in q['options']) for f in c['focus'])
for c in cases+[DATA['dispute']]:
 q=Q[c['id']]
 for p,en,cn in c['excerpts']:assert norm(en) in norm(paragraphs[(q['year'],q['text'],p)]),(q['id'],p,en)
for id,p,en,*_ in DATA['syntax']:
 q=Q[id];assert norm(en) in norm(paragraphs[(q['year'],q['text'],p)]),(id,p,en)
assert len({Q[c['id']]['year'] for c in cases})==10
for cat in DATA['categories']:assert len({Q[c['id']]['year'] for c in cases if c['code']==cat['code']})>=2
signals=[]
for word,meaning,example in DATA['signals']:
 pattern=r'(?<![A-Za-z])'+re.escape(word).replace(r'\ ',r'\s+')+r'(?![A-Za-z])'
 counts=[len(re.findall(pattern,p,re.I)) for p in passages]
 signals.append(dict(word=word,meaning=meaning,example=example,count=sum(counts),articles=sum(x>0 for x in counts)))
# Reproducible audit contains the actual evidence and original option rationale.
audit=dict(title=DATA['title'],base_commit=SHA,source_articles=40,questions_count=200,options_count=800,non_key_slots=600,coded_distractors=599,disputed_candidates=1,label_assignments=sum(s['options'] for s in stats),multilabel_options=sum(len(o['codes'])>1 for o in wrong),sources=sources,statistics=stats,signals=signals,questions=qs,cases=cases,dispute=DATA['dispute'],checks=dict(source_blobs=True,question_option_completeness=True,selected_excerpts_match_source_paragraphs=True,syntax_excerpts_match_source_paragraphs=True,cross_year_examples=True),limitations=['多标签编辑编码；未做第二标注者独立编码或一致性检验。','统计不代表考生错误率或个人薄弱点。','2013-T2-Q27保留原解析答案A，D标为U并排除确定机制计数。'])
review=ROOT/'docs/reviews';review.mkdir(parents=True,exist_ok=True)
(review/f'{NAME}.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
L=[]
def emit(s):L.append(s)
def para(s):emit(tx(s)+r'\par')
def lead(title,s):emit(r'\noindent\textbf{'+tx(title)+'}'+tx(s)+r'\par')
def section(title,label):emit(r'\clearpage\section{'+tx(title)+'}'+r'\label{'+label+'}')
def sub(title,label=None):emit(r'\subsection{'+tx(title)+'}'+(r'\label{'+label+'}' if label else ''))
head=r'''\documentclass[11pt,a4paper]{article}
\usepackage[margin=23mm,headheight=14pt,headsep=8.5mm,footskip=10mm]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage[no-math]{fontspec}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Script=CustomDefault,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf,BoldItalicFont=FandolSong-Bold.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Script=CustomDefault,BoldFont=FandolSong-Bold.otf]
\xeCJKsetup{PunctStyle=quanjiao,CheckSingle=true}
\usepackage{setspace}\setstretch{1.12}
\setlength{\parindent}{2em}\setlength{\parskip}{3pt}
\usepackage{titlesec}
\titleformat{\section}{\centering\normalfont\Large\bfseries}{\thesection.}{0.6em}{}
\titleformat{\subsection}{\normalfont\large\bfseries}{\thesubsection}{0.6em}{}
\titleformat{\subsubsection}{\normalfont\normalsize\bfseries}{}{0pt}{}
\titlespacing*{\section}{0pt}{1.2\baselineskip}{0.8\baselineskip}
\titlespacing*{\subsection}{0pt}{0.8\baselineskip}{0.4\baselineskip}
\usepackage{enumitem,needspace,longtable,booktabs,array,xcolor,tcolorbox}
\tcbuselibrary{breakable}
\definecolor{evidencepink}{HTML}{FCE5ED}
\newtcolorbox{evidence}{colback=evidencepink,colframe=evidencepink,boxrule=0pt,arc=0pt,left=6pt,right=6pt,top=5pt,bottom=5pt,breakable,before skip=5pt,after skip=5pt}
\setlist{leftmargin=2em,itemsep=3pt,parsep=0pt,topsep=4pt}
\usepackage{fancyhdr}\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\small 数学手记 · 英语学习}\fancyhead[R]{\small 阅读干扰项规律与解题方法}
\fancyfoot[C]{\thepage}\renewcommand{\headrulewidth}{0.4pt}
\usepackage[hidelinks,unicode,bookmarksnumbered=true,linktoc=all]{hyperref}
\usepackage{bookmark}\bookmarksetup{depth=3}
\hypersetup{pdftitle={2007—2016年考研英语一阅读干扰项规律与解题方法},pdfauthor={Vincent Arqain},pdfsubject={40篇解析、200题的多标签证据复习专册}}
\renewcommand{\contentsname}{目录}\setcounter{tocdepth}{2}\setcounter{secnumdepth}{2}
\renewcommand{\arraystretch}{1.18}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\emergencystretch=2em\raggedbottom
\begin{document}
\begin{center}
{\LARGE\bfseries 2007—2016年考研英语一阅读\par}
\vspace{5pt}{\LARGE\bfseries 干扰项规律与解题方法\par}
\vspace{10pt}{\large 跨年份证据比较与长期复习专册\par}
\vspace{8pt}数学手记 · 审阅版 · 2026年11月8日
\end{center}
'''
emit(head)
lead('内容范围：','据网站实际收录，2007—2016年每年Text 1—4齐全，共40篇、200题、800个选项。本册精读24道跨年重点题，其余题目以可追溯索引回查，不重复转载40篇全文。早年试卷沿用网站统一“英语一”栏目名称。')
lead('统计边界：','200个题库答案对应600个非答案候选项，其中599项作常规干扰机制编码；2013年Text 2第27题D项具有指代争议，另标U、排除确定机制计数。该题只保留原解析记载的A，不宣称已经独立核定官方答案。')
lead('适用读者：','词汇量约3500—4000，希望知道选项在哪一步偏离证据的考生。说明使用常用中文，保留英文题干、相关选项、必要原文和直译；会认一些词，也要会判断主体、方向、范围与程度。')
lead('使用方法：','先读统一方法与分类边界，再看每类两道跨年例题。重做时遮住答案，按年份题号索引回查；粉色框标出证据，黑白打印仍可凭题号、段号和文字辨认。目录、分类与年份索引均可点击。')
lead('资料版本：','40份解析固定于仓库提交 '+SHA[:12]+'。本册末尾列原解析入口，配套核对记录保存完整提交、每篇哈希、题目行号、选项原理由及本册分类。')
lead('数据含义：','分类是本版的编辑判断，允许一项多类；数量不是考生错误率。本册未使用个人成绩或作答记录，也不推断个人薄弱点。材料涉及的科学、政策等内容均按各年试题语境理解。')
emit(r'\noindent '+href('https://zj139.github.io/math-notes/english/reading-answers/','站内真题阅读解答总目录')+r'\quad '+href('https://github.com/ZJ139/math-notes/tree/'+SHA,'本版资料快照'))
emit(r'\clearpage{\setstretch{1}\setlength{\parskip}{0pt}\tableofcontents}')
section('统一作答与复盘方法','methods')
for title,paragraph_list in DATA['methods']:
 sub(title)
 for p in paragraph_list:para(p)
sub('用同一张核对表比较选项')
for title,s in [('主体','谁说、谁做、谁受影响？引用者的判断是否被算给作者？'),('关系','提高还是降低，影响还是被影响，必要还是充分，原因还是结果？'),('边界','部分还是全体，曾经还是现在，计划还是完成，可能还是必然？'),('任务','题干要细节、原因、推断、词义、态度、例证功能还是标题？')]:lead(title+'：',s)
para('这张表用于发现证据缺口，并不要求每题把所有项目机械检查一遍。优先核对两项真正不同的地方。')
section('分类边界与统计口径','taxonomy')
para('分类单位是非答案选项。599个常规干扰项至少记一类；同一项可有多个标签，同一类内每项只计一次。“涉及题数”指至少出现一个该类选项的不同题目数。两列都不能跨类别相加当作独立题数或独立选项数。')
para(f"本版形成{audit['label_assignments']}次标签归属，其中{audit['multilabel_options']}个选项有多个标签。另有1个U争议项不计入下表。准确计数不等于分类天然唯一：本版未进行第二标注者独立编码或一致性系数检验。")
emit(r'\begin{longtable}{@{}p{1.1cm}p{8.6cm}rr@{}}\toprule 代码 & 机制 & 涉及题数 & 选项数\\\midrule\endhead')
for s in stats:emit(link('cat-'+s['code'],s['code'])+' & '+tx(s['name'])+' & '+str(s['questions'])+' & '+str(s['options'])+r'\\')
emit(r'\bottomrule\end{longtable}')
para('标签多少受定义宽度影响；高计数不代表更容易错，低计数也不代表可忽略。每条编码都可经分类索引回到题目，再查看原解析中的选项及理由。原解析的标签与本册不必逐字一致，本册按统一边界重新归纳。')
for c in DATA['categories']:
 emit(r'\Needspace{9\baselineskip}');sub(code(c['code'])+' '+c['name'],'cat-'+code(c['code']))
 lead('识别：',c['definition']);lead('排除：',c['method']);lead('边界：',c['boundary'])
section('跨年重点例题：证据与干扰项对照','cases')
para('每类两道不同年份例题，共24题，涵盖全部十年。只展示正确项与本例所讨论的干扰项；其余选项可从题号链接回查。题号沿用原试卷21—40，1°—5°表示篇内顺序。每段引文均为独立节选，段号按站内解析；上下文说明补足所需前后关系。')
para('练习时先读题干和选项、遮住判断，再读粉色证据，写出选项到底改动了什么。遇到多个标签时，本例突出当前机制，不表示只有一种解释。')
for c in cases:
 if c['number']>1:emit(r'\clearpage')
 q=Q[c['id']];cat=next(a for a in DATA['categories'] if a['code']==c['code'])
 if c['number']%2==1:sub(code(c['code'])+' '+cat['name'])
 emit(r'\subsubsection{例'+str(c['number'])+'　'+tx(c['title'])+'}'+r'\label{case-'+c['id']+'}')
 emit(r'\noindent\textbf{'+tx(f"{q['year']} 年 · Text {q['text']} · 第 {q['q']} 题 · {(q['q']-21)%5+1}°")+r'}\par\noindent '+href(q['source_url'],'原解析与四选项')+r'\quad '+link('idx-'+c['id'],'年份索引')+r'\quad '+link('class-'+code(c['code']),'分类索引')+r'\par\smallskip')
 lead('题干：',q['stem_en']);para('直译：'+q['stem_cn'])
 for o in q['options']:
  if o['letter']!=q['answer'] and o['letter'] not in c['focus']:continue
  emit(r'\Needspace{3\baselineskip}\noindent\textbf{['+o['letter']+']} '+tx(o['english'])+r'\par\nopagebreak')
  lead('直译：',o['translation']+'　〔'+('正确' if o['letter']==q['answer'] else '本例干扰项')+'〕')
 emit(r'\begin{evidence}\textbf{'+tx(str((q['q']-21)%5+1)+'°　原文证据（独立节选）')+r'}\par')
 for p,en,cn in c['excerpts']:emit(r'\textbf{'+p+'} '+tx(en)+r'\par '+tx('直译：'+cn)+r'\par')
 emit(r'\end{evidence}')
 lead('上下文：',c['context']);lead('判断与排除：',c['logic']);lead('缺词时怎么推：',c['unknown']);lead('跨年比较：',c['compare'])
section('逻辑信号词：频次与读法','signals')
para('仅统计40篇原文英文正文，不含题干、选项、译文或重复讲解。按完整词／短语、不区分大小写匹配；“篇数”是至少出现一次的文章数。词与短语可以重叠，不能相加作为总词数。')
para('下表是字面检索频次，不是每种逻辑功能的准确次数。例如May也可能是月份，while可表同时或对照，since可表时间或原因；具体功能必须放回语境。例题列指适合练习该检查动作的题，不保证词在题干中重现。')
emit(r'\begin{longtable}{@{}p{2.6cm}rrp{6.4cm}p{2.6cm}@{}}\toprule 信号 & 次数 & 篇数 & 读法与检查点 & 回查题\\\midrule\endhead')
for s in signals:emit(tx(s['word'])+' & '+str(s['count'])+' & '+str(s['articles'])+' & '+tx(s['meaning'])+' & '+link('idx-'+s['example'],s['example'])+r'\\\addlinespace[2pt]')
emit(r'\bottomrule\end{longtable}')
lead('组合阅读：','转折只告诉你方向变动；让步只承认一层前提。继续核对转折前后评价对象是否相同。not all 不等于 all not；may 支持低确定性，仍需内容证据；only when 强调必要条件，不自动证明充分性。')
section('核心词与熟词僻义：从搭配回到句子','vocabulary')
para('这里同时收录常见词的语境义、固定搭配和少量理解证据所必需的词。不是按字典穷举义项，也不是经过考纲标注的词频表。每条解释仅对应所列真题。')
for i,(word,meaning,id,tip) in enumerate(DATA['vocabulary'],1):
 emit(r'\Needspace{4\baselineskip}\noindent\textbf{'+str(i)+'. '+tx(word)+'　'+tx(meaning)+'}'+r'\hfill '+link('idx-'+id,id)+r'\par');para(tip)
section('长难句障碍：主干、从句、修饰与语序','syntax')
para('每句采用同一套拆读动作：找主干谓语，切分从句，剥离修饰，最后还原语序。四个动作不是四次机械重读，而是对卡住位置的四种检查。先保留否定、比较和逻辑限定，再补回细节。')
for i,(id,p,en,a,b,c,d) in enumerate(DATA['syntax'],1):
 emit(r'\Needspace{17\baselineskip}');sub('句'+str(i)+'　'+id)
 emit(r'\noindent '+href(Q[id]['source_url'],'原解析')+r'\quad '+link('idx-'+id,'年份索引'))
 emit(r'\begin{evidence}\textbf{'+p+r'} '+tx(en)+r'\end{evidence}')
 lead('主干谓语：',a);lead('从句切分：',b);lead('剥离修饰：',c);lead('还原与作答：',d)
section('容易误用的排除法与争议边界','boundaries')
for title,id,s in DATA['boundaries']:
 emit(r'\Needspace{7\baselineskip}');sub(title);emit(r'\noindent '+link('idx-'+id,id));para(s)
emit(r'\clearpage');sub('2013-T2-Q27：保留指代争议','dispute')
c=DATA['dispute'];q=Q[c['id']];para(c['reason']);lead('题干：',q['stem_en']);para('直译：'+q['stem_cn'])
for o in q['options']:
 emit(r'\noindent\textbf{['+o['letter']+']} '+tx(o['english'])+r'\par '+tx('直译：'+o['translation'])+r'\par')
emit(r'\begin{evidence}')
for p,en,cn in c['excerpts']:emit(r'\textbf{'+p+'} '+tx(en)+r'\par '+tx('直译：'+cn)+r'\par')
emit(r'\end{evidence}');lead('为什么保留：',c['analysis']);lead('可迁移方法：',c['takeaway'])
emit(r'\noindent '+href(q['source_url'],'原解析及完整语境')+r'\quad '+link('idx-'+q['id'],'年份索引'))
section('分类索引：从机制回查选项','class-index')
para('每条为“年份：全国题号（选项字母）”。21—25为Text 1，26—30为Text 2，31—35为Text 3，36—40为Text 4。点击题号跳到年份索引；同一项可在不同机制下重复出现。U不是错误机制，单列于争议题说明。')
for c,s in zip(DATA['categories'],stats):
 emit(r'\Needspace{15\baselineskip}');sub(s['code']+' '+c['name'],'class-'+s['code'])
 emit(r'\noindent '+link('cat-'+s['code'],'定义与边界')+r'\quad '+tx(f"{s['questions']}题／{s['options']}项")+r'\quad '+', '.join(link('case-'+x['id'],'例'+str(x['number'])) for x in cases if x['code']==c['code']))
 for y in range(2007,2017):
  parts=[]
  for q in qs:
   letters=''.join(o['letter'] for o in q['options'] if s['code'] in o['codes'])
   if q['year']==y and letters:parts.append(link('idx-'+q['id'],str(q['q'])+'（'+letters+'）'))
  if parts:emit(r'\noindent\textbf{'+str(y)+'}：'+'；'.join(parts)+r'。\par')
emit(r'\Needspace{11\baselineskip}\section{年份题号索引：全部200题}\label{year-index}')
para('每年20题，Text 1—4各5题。每条显示题干直译、原解析答案及其直译，随后给出其余三项的本册机制编码；点击代码回到定义，点击题号打开原解析。为避免重印全文，本节不复制全部英文选项与长篇解析。原解析答案不另称为官方答案；争议题用A（待核）并标U。')
para('对照英文和全文时，以题号链接为准。原解析如以后修订，本册的固定版本仍由文末提交和核对记录追溯。每条“重点例”附本册页码，供纸质回查。')
for y in range(2007,2017):
 emit(r'\clearpage');sub(str(y)+'年','year-'+str(y))
 for t in range(1,5):
  if t%2==1 and t>1:emit(r'\clearpage')
  emit(r'\Needspace{13\baselineskip}\subsubsection{Text '+str(t)+'　'+str(16+t*5)+'—'+str(20+t*5)+'题}')
  for q in [a for a in qs if a['year']==y and a['text']==t]:
   emit(r'\Needspace{6\baselineskip}\phantomsection\label{idx-'+q['id']+'}'+r'\noindent\textbf{'+href(q['source_url'],q['id'])+'}　'+tx(q['stem_cn'])+r'\par\nopagebreak')
   right=next(o for o in q['options'] if o['letter']==q['answer']);answer=q['answer']+('（待核）' if q['id']=='2013-T2-Q27' else '')
   emit(r'\noindent\textbf{原解析答案 '+tx(answer)+'}：'+tx(right['translation'])+r'\par\nopagebreak')
   opts=[]
   for o in q['options']:
    if not o['codes']:continue
    opts.append(o['letter']+'：'+'／'.join(link('dispute','U') if c=='U' else link('cat-'+c,c) for c in o['codes']))
   emit(r'\noindent '+'；'.join(opts)+r'。'+(r'　'+link('case-'+q['id'],'重点例')+r'（第\pageref{case-'+q['id']+'}页）' if any(c['id']==q['id'] for c in cases) else '')+r'\par\smallskip')
section('原解析目录与版本追溯','sources')
para('共40篇，按年份与Text编号排序。在线原解析用于阅读全文；固定版本入口用于核对本册当时引用的材料。每篇5题的源行号和完整内容哈希已写入配套JSON核对记录。')
lead('基准提交：',SHA)
for y in range(2007,2017):
 emit(r'\Needspace{8\baselineskip}');sub(str(y)+'年')
 for s in [a for a in sources if a['year']==y]:
  emit(r'\noindent '+href(s['url'],'Text '+str(s['text'])+' 原解析')+r'\quad '+href(s['pinned_url'],'固定版本')+r'\quad '+tx('Git blob '+s['git_blob'][:12])+r'\par')
para('专册中的题干、选项与必要短引文取自站内对应真题解析；分类、跨年比较、边界讨论及复习方法为本册整理。保留原题编号与来源链接，便于逐项校核。')
emit(r'\end{document}')
(ROOT/f'print/english/{NAME}.tex').write_text('\n'.join(L)+'\n')
print(json.dumps({k:audit[k] for k in ['source_articles','questions_count','options_count','coded_distractors','disputed_candidates','label_assignments','multilabel_options']},ensure_ascii=False))
print(json.dumps(stats,ensure_ascii=False))
