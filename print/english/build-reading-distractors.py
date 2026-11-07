#!/usr/bin/env python3
"""Build the auditable 2018–2025 reading handbook from pinned repository sources.
Run from repository root: python3 print/english/build-reading-distractors.py
Then xelatex twice on print/english/reading-distractors-2018-2025.tex.
"""
from pathlib import Path
import re,json,hashlib,collections
ROOT=Path(__file__).resolve().parents[2]
DATA=json.loads((Path(__file__).with_name('reading-distractors-2018-2025-data.json')).read_text())
SHA=DATA['base_commit'];NAME='reading-distractors-2018-2025'
def plain(s):
 s=re.sub(r'\[([^\[\]]+)\]\([^)]*\)',r'\1',s)
 s=re.sub(r'\*\*\d+°\*\*','',s)
 return s.replace('**','').replace('\\$','$').strip()
def tx(s):
 s=plain(str(s));table={'\\':r'\textbackslash{}','&':r'\&','%':r'\%','$':r'\$','#':r'\#','_':r'\_','{':r'\{','}':r'\}','~':r'\textasciitilde{}','^':r'\textasciicircum{}'}
 return ''.join(table.get(c,c) for c in s)
def href(url,label):return r'\href{'+url.replace('%',r'\%').replace('#',r'\#')+'}{'+tx(label)+'}'
def link(label,text):return r'\hyperref['+label+']{'+tx(text)+'}'
def code(c):return 'R'+str(ord(c)-64).zfill(2)
qs=[];sources=[];passages=[]
for y in range(2018,2026):
 for t in range(1,5):
  p=ROOT/f'content/english/reading-answers/{y}-reading-text-{t}.md';raw=p.read_bytes();s=raw.decode();rel=p.relative_to(ROOT).as_posix()
  blob=hashlib.sha1(b'blob '+str(len(raw)).encode()+b'\0'+raw).hexdigest()
  url='https://zj139.github.io/math-notes'+re.search(r'\[Text '+str(t)+r'\]\(([^)]+)\)',s).group(1)
  passage=s.split('## 一、原文定位与逐段直译')[1].split('## 二、逐题作答：选项与分析')[0]
  passages.append(plain(' '.join(l[2:] for l in passage.splitlines() if l.startswith('> '))))
  sources.append(dict(year=y,text=t,path=rel,git_blob=blob,sha256=hashlib.sha256(raw).hexdigest(),url=url,pinned_url=f'https://github.com/ZJ139/math-notes/blob/{SHA}/{rel}',bytes=len(raw)))
  part=s.split('## 二、逐题作答：选项与分析')[1].split('## 三、全篇总结')[0]
  split=re.split(r'^### 第 (\d+) 题([^\n]*)\n',part,flags=re.M)
  for i in range(1,len(split),3):
   q=int(split[i]);body=split[i+2];stem=re.search(r'\*\*原题\*\*：(.*)',body).group(1).strip();stemcn=re.search(r'\*\*（(.*)）\*\*',stem).group(1)
   stemen=stem.split('**（')[0].strip();ans=re.search(r'\*\*答案：([ABCD])',body).group(1);opts=[]
   for a,b in re.findall(r'^- \*\*\[([ABCD])\]\*\*\s*(.*?)(?=^- \*\*\[|^####)',body,re.M|re.S):
    m=re.search(r'\*\*(错误|正确)｜(.*?)\*\*：(.*)',b,re.S)
    opts.append(dict(letter=a,english=b.strip().split('\n')[0],translation=re.search(r'直译[：:]\s*（(.*?)）',b).group(1),judgement=m.group(1),original_label=m.group(2),rationale=plain(m.group(3)),codes=[]))
   assert len(opts)==4 and sum(o['judgement']=='正确' for o in opts)==1
   assert next(o['letter'] for o in opts if o['judgement']=='正确')==ans
   qs.append(dict(id=f'{y}-T{t}-Q{q}',year=y,text=t,q=q,answer=ans,stem_en=stemen,stem_cn=stemcn,heading=split[i+1].strip('｜ '),options=opts,source_path=rel,source_blob=blob,source_url=url+'#q'+str(q),source_line=s[:s.index('### 第 '+str(q)+' 题')].count('\n')+1))
assert len(qs)==160 and len({q['id'] for q in qs})==160
rows=[l.split() for l in DATA['coding'].splitlines() if l and not l.startswith('#')]
assert len(rows)==160
for q,row in zip(qs,rows):
 assert (q['year'],q['q'])==(int(row[0]),int(row[1])) and len(row)==5
 wrong=[o for o in q['options'] if o['letter']!=q['answer']]
 for o,tags in zip(wrong,row[2:]):
  assert tags and set(tags)<=set('ABCDEFGHIJKL') and len(tags)==len(set(tags))
  o['codes']=[code(c) for c in tags]
Q={q['id']:q for q in qs};cases=DATA['cases'];assert len(cases)==24 and len({c['id'] for c in cases})==24
for n,c in enumerate(cases,1):c['number']=n;assert c['id'] in Q and all(o in 'ABCD' for o in c['focus'])
stats=[]
for cat in DATA['categories']:
 c=code(cat['code']);occ=[(q['id'],o['letter']) for q in qs for o in q['options'] if c in o['codes']]
 stats.append(dict(code=c,name=cat['name'],questions=len({x[0] for x in occ}),options=len(occ),members=occ))
signal_defs=[
('but','转折；另核对对象是否变化','2018-T1-Q22'),('all','全称范围；检查被限定的集合','2024-T4-Q38'),('if','条件；分清条件句与事实','2023-T2-Q27'),('may','可能；不等于无条件通行证','2025-T1-Q25'),('could','可能或设想；保留语气','2020-T4-Q37'),('now','当前；与此前阶段比较','2019-T2-Q27'),('some','部分；不能自动扩成全部','2021-T2-Q27'),('because','明示原因；核对两端变量','2018-T1-Q24'),('most','最多、主要；对比次要项','2024-T1-Q23'),('only','限制；要找到限制的对象','2025-T4-Q39'),('should','建议、应当；不等于已做','2021-T1-Q23'),('yet','转折或尚未；看搭配位置','2020-T2-Q29'),('more than','比较或超出；保留比较基准','2021-T2-Q29'),('while','让步、对照或同时；不能固定一义','2019-T3-Q34'),('must','必要性；核对谁提出要求','2018-T1-Q25'),('since','原因或时间起点；靠句法区分','2019-T4-Q39'),('however','转折；追踪作者新落点','2025-T2-Q27'),('still','仍然；不等于永久','2019-T3-Q33'),('already','已然；区分将来安排','2018-T3-Q32'),('even if','即使；不把假设当实况','2021-T2-Q29'),('despite','尽管；后续主断言仍要成立','2022-T1-Q24'),('unless','除非；查清未满足时的结果','2020-T4-Q40'),('eventually','最终；不抹去中期问题','2018-T1-Q22')]
signals=[]
for w,d,k in signal_defs:
 counts=[len(re.findall(r'(?<!\w)'+re.escape(w)+r'(?!\w)',p,re.I)) for p in passages]
 signals.append(dict(word=w,count=sum(counts),articles=sum(x>0 for x in counts),meaning=d,example=k))
review=dict(title='2018—2025年考研英语一阅读干扰项规律与解题方法',edition=DATA['edition'],base_commit=SHA,coverage=dict(articles=32,questions=160,options=640,distractors=480,cases=len(cases)),coding_policy='Editorial multi-label coding of incorrect options; each option counted at most once in each class; counts are not learner error rates. No independent second annotator. Labels may overlap.',categories=DATA['categories'],statistics=stats,signal_count_policy='Case-insensitive literal whole-word/phrase counts in original quoted passages only; annotations, translations, questions and options excluded; overlapping phrases are not additive. Polysemy and the month May are not disambiguated.',signals=signals,sources=sources,questions=qs)
reviewpath=ROOT/f'docs/reviews/{NAME}.json';reviewpath.parent.mkdir(parents=True,exist_ok=True);reviewpath.write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n')
O=[]
def emit(s=''):O.append(s)
def para(s):emit(tx(s)+'\n')
def lead(label,s):emit(r'\noindent\textbf{'+tx(label)+'} '+tx(s)+r'\par\smallskip')
def section(title,label=None):
 emit(r'\clearpage\section{'+tx(title)+'}'+(r'\label{'+label+'}' if label else ''))
def sub(title,label=None):emit(r'\subsection{'+tx(title)+'}'+(r'\label{'+label+'}' if label else ''))
head=r'''\documentclass[11pt,a4paper]{article}
\usepackage[margin=23mm,headheight=14pt,headsep=8.5mm,footskip=10mm]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage[no-math]{fontspec}
\usepackage{xeCJK}
\setmainfont{Latin Modern Roman}
\setCJKmainfont{FandolSong-Regular.otf}[Script=CustomDefault,Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf,ItalicFont=FandolSong-Regular.otf,BoldItalicFont=FandolSong-Bold.otf]
\setCJKsansfont{FandolSong-Regular.otf}[Script=CustomDefault,Path=assets/fonts/fandol/,BoldFont=FandolSong-Bold.otf]
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
\hypersetup{pdftitle={2018—2025年考研英语一阅读干扰项规律与解题方法},pdfauthor={Vincent Arqain},pdfsubject={32篇解析、160题、480个干扰项的多标签复习专册}}
\renewcommand{\contentsname}{目录}\setcounter{tocdepth}{2}\setcounter{secnumdepth}{2}
\renewcommand{\arraystretch}{1.18}
\widowpenalty=10000\clubpenalty=10000\displaywidowpenalty=10000
\emergencystretch=1.5em\raggedbottom
\begin{document}
\begin{center}
{\LARGE\bfseries 2018—2025年考研英语一阅读\par}
\vspace{5pt}{\LARGE\bfseries 干扰项规律与解题方法\par}
\vspace{10pt}{\large 跨年份证据比较与长期复习专册\par}
\vspace{8pt}数学手记 · 第一版 · 2026年11月7日
\end{center}
'''
emit(head)
lead('摘要：','以网站已经完成的2018—2025年32篇阅读解析为底稿，覆盖160道题、640个选项，其中480个为干扰项。以十类主要机制及两类补充机制进行多标签编码，用24道重点题比较证据、选项和推理边界。其余题目通过完整年份题号索引与分类索引回查，不重复转载32篇全文。')
lead('适用读者：','词汇量约3500—4000，希望把“看懂大概”转化为“知道选项在哪一步失真”的考生。说明尽量使用常用中文，保留英文题干、所讨论选项及必要原文证据。')
lead('阅读顺序：','初读先掌握统一流程，再按分类读跨年例题；重做真题时由年份索引查答案与编码，再回到相应规律。粉色框只标证据，黑白打印仍可凭题号、段落号和文字完整辨认。')
lead('研究边界：','题干、选项顺序和答案沿用站内解析。本册新增的是跨题编码、比较与教学总结，并非官方分类或心理测量。未使用考生成绩、作答日志或错误率数据，也不推断个人弱项。对存在措辞边界的正确项，明确限制其解释强度。')
lead('资料版本：','采用主分支提交 '+SHA+'。32份源文件的路径、内容哈希与逐题行号保留在网站配套核对记录中；本册末尾另列32篇可点击原解析。')
para('本册是阅读理解材料：其中科技、政策、法律等说法均按各年试题语境分析，不作为当下事实或实际行动建议。')
emit(r'\noindent '+href('https://zj139.github.io/math-notes/english/reading-answers/','站内真题阅读解答总目录'))
emit(r'\clearpage{\setstretch{1}\tableofcontents}')
section('统一作答与复盘流程','methods')
for title,paragraphs in DATA['methods']:
 sub(title)
 for p in paragraphs:para(p)
section('分类边界与统计口径','taxonomy')
para('分类单位是错误选项，而不是文章或考生。每个错误选项至少保留一种实际机制，同一选项可有多个标签；同一类别内每项只计一次。“涉及题数”是至少有一个该类错误选项的不同题目数。两列均不可跨类别相加当作独立总数。')
para('本版共有480个干扰项，形成'+str(sum(s['options'] for s in stats))+'次标签归属，其中'+str(sum(len(o['codes'])>1 for q in qs for o in q['options']))+'个干扰项有多个标签。数字精确描述本版编码，分类边界仍含编辑判断；未进行第二标注者独立编码或一致性系数检验，因而不宣称这是唯一客观分类。')
emit(r'\begin{longtable}{@{}p{1.2cm}p{8.7cm}rr@{}}\toprule 代码 & 类别 & 涉及题数 & 干扰项数\\\midrule\endhead')
for s in stats:emit(link('cat-'+s['code'],s['code'])+' & '+tx(s['name'])+' & '+str(s['questions'])+' & '+str(s['options'])+r'\\')
emit(r'\bottomrule\end{longtable}')
para('这些数量用于安排复习检索，不能写成“多少考生会错”或“你的错误率”。R02 类较宽，数量高也受定义宽度影响；小类未必不重要。每个标签均可在分类索引回到具体题号，再在原解析查看错误选项及论证。')
for cat in DATA['categories']:
 emit(r'\Needspace{7\baselineskip}')
 sub(code(cat['code'])+' '+cat['name'],'cat-'+code(cat['code']))
 lead('定义：',cat['definition']);lead('排除方法：',cat['method']);lead('边界：',cat['boundary'])
section('跨年重点例题','cases')
para('只选与当前机制相关的选项，始终保留正确项；未选入的项请回原解析查看。每题保留原年、Text、全国题号及篇内1°—5°。证据中的省略号表示删节，斜线表示不同位置的摘句；段号按站内原解析。选项下的短标签来自原解析，后文再解释本册所关注的失真过程。')
last=None
for c in cases:
 q=Q[c['id']]
 if c['code']!=last:
  sub(code(c['code'])+' '+next(x['name'] for x in DATA['categories'] if x['code']==c['code']))
  para(next(x['definition'] for x in DATA['categories'] if x['code']==c['code']))
  last=c['code']
 else:emit(r'\clearpage')
 emit(r'\subsubsection{例'+str(c['number'])+'　'+tx(c['title'])+'}'+r'\label{case-'+c['id']+'}')
 emit(r'\noindent\textbf{'+tx(f"{q['year']} 年 · Text {q['text']} · 第 {q['q']} 题 · {(q['q']-21)%5+1}°")+r'}\par\noindent '+href(q['source_url'],'原解析与完整四选项')+r'\quad '+link('idx-'+c['id'],'年份索引')+r'\quad '+link('class-'+code(c['code']),'分类索引')+r'\par\smallskip')
 lead('题干：',q['stem_en']);para('直译：'+q['stem_cn'])
 opts=[o for o in q['options'] if o['letter']==q['answer'] or o['letter'] in c['focus']]
 for o in opts:
  emit(r'\Needspace{3\baselineskip}\noindent\textbf{['+o['letter']+']} '+tx(o['english'])+r'\par\nopagebreak')
  emit(r'\noindent '+tx('直译：'+o['translation'])+r'\quad\textbf{'+tx(o['judgement'])+'}：'+tx(o['original_label'])+r'\par\smallskip')
 emit(r'\begin{evidence}\textbf{'+tx(str((q['q']-21)%5+1)+'°　证据 · '+c['paragraph'])+r'}\par '+tx(c['evidence'])+r'\par '+tx('直译：'+c['translation'])+r'\end{evidence}')
 lead('上下文：',c['context']);lead('正确判断与排除：',c['logic']);lead('缺词时怎么推：',c['unknown']);lead('跨年比较：',c['compare'])
 if c is not cases[-1] and cases[c['number']]['code']!=c['code']:emit(r'\clearpage')
section('逻辑信号词：看关系，也看限定','signals')
para('下表按32篇原文的字面出现次数列出常见信号；只统计正文英文引文，不计题干、选项、译文与重复讲解。匹配不区分大小写，按完整词或完整短语计算。“篇数”指至少出现一次的文章数。词或短语可能重叠，不能把各行次数相加作词数总计。')
para('这是检索频次，不是每个词承担某种逻辑功能的准确次数。例如 since 可表时间也可表原因，while 可表同时、对照或让步；may 的字面计数也包括月份 May。具体解题功能仍须回语境核定。')
emit(r'\begin{longtable}{@{}p{2.2cm}rrp{7.2cm}p{2.5cm}@{}}\toprule 信号 & 次数 & 篇数 & 读法与检查点 & 例题\\\midrule\endhead')
for s in signals:emit(tx(s['word'])+' & '+str(s['count'])+' & '+str(s['articles'])+' & '+tx(s['meaning'])+' & '+link('idx-'+s['example'],s['example'])+r'\\\addlinespace[3pt]')
emit(r'\bottomrule\end{longtable}')
emit(r'\clearpage')
sub('三种关系不能靠一个词作答')
lead('转折与让步：','转折前信息没有自动作废。2019-T3-Q34 的笼统与起点可同时成立；2024-T4-Q38 的州内法律与跨州风险也可同时成立。需问最终评价针对什么，以及后一判断如何限制前一判断。')
lead('目的与结果：','to、in an effort to、aim to 引出目标，并不保证目标已实现；designed to 的初衷还可能与实际效果相反。2021-T2-Q26 的减贫计划出现环保收益，不代表设计目的就是降低毁林。')
lead('比较与程度：','主因必须比较贡献大小；基本相同并非完全相同；少量影响并非没有影响。2024-T1-Q23 的 cheaper iron 是真原因，但 partly 弱于 most of the credit，不能答 major role。')
sub('把信号词转成可检查的问题')
lead('看到时间词：','先问题干要哪一个阶段。2019-T2-Q27 的 original purpose 要回到 first started；2024-T3-Q33 的 After searching online 要跟到 Then 之后。不能把“后一句优先”当作规则。')
lead('看到情态词：','先核对命题内容，再核对确定性。2025-T1-Q25 四项都有 may，因此不能仅凭“可能”二字放行；2021-T2-Q29 则同时改变了可推广的内容与 will 的强度。')
lead('看到否定词：','标出否定究竟落在动作、程度还是条件上。2024-T1-Q24 的 haven’t changed much 否定“大变”，保留“小变”；2023-T2-Q27 的 illegal 限制地方制定禁令，不是直接判短租违法。')
lead('看到比较词：','把两端写出来，再圈比较维度。2024-T1-Q23 比的是降价原因的贡献，不是哪个原因出现过；2025-T4-Q37 比的是信息传递方式，不能擅自改为受损概率。')
sub('缺少关键词时的最低完成标准')
para('可以暂时跳过的，通常是已有例子解释的专门名词；不能随便跳过的，是决定方向的否定、比较、时态、情态和核心谓语。不认识一个关系词时，先用前后句的同义改写、例子和对照验证它；若两个相反解释都说得通，就保留不确定性，不能把猜测包装成已排除。')
para('复盘时用一句话写下错误：例如“把最初目的换成后来利益”“把留存率换成招生人数”“把论文被引换成论文引用别人”。写具体变化比只记“粗心”或只背类别名更能迁移到下一题。')
section('熟词僻义与关系词组','vocabulary')
para('下列条目为本册精选，未声称是整个考试的高频词排名。先记当前搭配与区分点，再回索引找原题；不要把本义项泛化为这个词在所有语境中的唯一意思。')
for en,cn,key,note in DATA['vocabulary']:
 emit(r'\Needspace{4\baselineskip}\noindent\textbf{'+tx(en)+'}　'+tx(cn)+r'\par\nopagebreak')
 para(note)
 normalized=re.sub(r'(20\d{2}-T\d-)(Q\d+)、(Q\d+)',r'\1\2；\1\3',key)
 ids=re.findall(r'20\d{2}-T\d-Q\d+',normalized)
 emit(r'\noindent\small '+tx('例题：')+'；'.join(link('idx-'+k,k) for k in ids)+('；'+tx(key.split('；')[-1]) if '；' in key and len(ids)==1 else '')+r'\normalsize\par\medskip')
section('长难句：四步恢复作答关系','syntax')
para('固定采用“主干谓语—切分从句—剥离修饰—还原语序”。拆句的目标不是把全部语法术语标满，而是恢复谁说什么、哪个判断被否定、条件约束什么。每例最后回到一个可用于排除的关系。')
for i,(key,en,a,b,c,d) in enumerate(DATA['syntax']):
 if i and i%2==0:emit(r'\clearpage')
 sub(key)
 emit(r'\begin{evidence}'+tx(en)+r'\end{evidence}')
 lead('主干谓语：',a);lead('切分从句：',b);lead('剥离修饰：',c);lead('还原语序与作答：',d)
 emit(link('idx-'+key,'回到年份题号索引')+r'\par')
section('六个边界：避免把方法用过头','boundaries')
para('正确项有时是受语境限制的概括，干扰项有时只是证据不够精确，而不是字面命题在现实中绝不可能。下列六例单列说明，以免“关键词口诀”取代阅读。')
for title,p in DATA['boundaries']:
 emit(r'\Needspace{7\baselineskip}');sub(title);para(p)
 key=re.search(r'20\d{2}-T\d-Q\d+',title).group();emit(link('idx-'+key,'原题索引')+r'\par')
section('年份与题号索引：160题完整回查','year-index')
para('题号沿用每年21—40题。每题列正确答案、题干直译、正确项的概括及三个错误项的编码；[A]等是选项字母，R01等是机制代码。点击题号进入原解析，点击机制代码进入分类定义，重点题另可跳到本册例题。题目在本节均有独立内部锚点，分类索引可返回此处。')
for y in range(2018,2026):
 emit((r'\clearpage' if y!=2018 else '')+r'\setlength{\parskip}{1pt}');sub(str(y)+' 年','year-'+str(y))
 for t in range(1,5):
  if t==3:emit(r'\clearpage\noindent\textbf{'+str(y)+' 年（续）}'+r'\par')
  emit(r'\subsubsection{Text '+str(t)+'　'+str(16+t*5)+'—'+str(20+t*5)+'题}')
  group=[q for q in qs if q['year']==y and q['text']==t]
  for q in group:
   right=next(o for o in q['options'] if o['letter']==q['answer'])
   emit(r'\Needspace{4\baselineskip}\phantomsection\label{idx-'+q['id']+'}')
   emit(r'\noindent\textbf{'+href(q['source_url'],q['id'])+'　答案 '+q['answer']+'}　'+tx(q['stem_cn'])+r'\par\nopagebreak')
   emit(r'\noindent '+tx('正确项：'+right['translation'])+r'\par\nopagebreak')
   parts=[]
   for o in q['options']:
    if not o['codes']:continue
    parts.append('['+o['letter']+'] '+','.join(link('cat-'+r,r) for r in o['codes']))
   emit(r'\noindent '+r'；'.join(parts)+r'。')
   selected=next((c for c in cases if c['id']==q['id']),None)
   if selected:emit(link('case-'+q['id'],'重点例'+str(selected['number']))+r'（第\pageref{case-'+q['id']+r'}页）。')
   emit(r'\par\smallskip')
emit(r'\setlength{\parskip}{3pt}')
section('分类索引：按机制寻找具体选项','class-index')
para('每项写作“年份-T编号-Q题号[错误选项字母]”。同一题同类合并字母；例如一题两个错误项同属 R01，则只列一次题号，但干扰项计两项。点题号回到本册完整索引，再点原解析查看证据。跨类重复是刻意保留的多标签信息。')
for s in stats:
 emit(r'\Needspace{8\baselineskip}');sub(s['code']+' '+s['name'],'class-'+s['code'])
 para(str(s['questions'])+'道题涉及，'+str(s['options'])+'个干扰项。')
 for y in range(2018,2026):
  members=collections.OrderedDict()
  for k,a in s['members']:
   if k.startswith(str(y)):members.setdefault(k,[]).append(a)
  if members:
   emit(r'\noindent\textbf{'+str(y)+r'：} '+'；'.join(link('idx-'+k,k.split('-',1)[1]+'['+','.join(v)+']') for k,v in members.items())+r'。\par\smallskip')
section('32篇来源与版本记录','sources')
para('原解析链接指向网站阅读页；固定版本链接指向本册采用的 GitHub 提交，便于网站后续更新时回溯。本册未改动32篇原解析、原题PDF或其答案顺序。')
for y in range(2018,2026):
 emit(r'\Needspace{8\baselineskip}\subsection*{'+str(y)+' 年}')
 for s in sources:
  if s['year']==y:
   emit(r'\noindent Text '+str(s['text'])+r'：'+href(s['url'],'原解析')+r'\quad '+href(s['pinned_url'],'固定版本')+r'\quad '+tx(s['path'].split('/')[-1])+r'\par\smallskip')
emit(r'\subsection*{复习记录空表}')
para('记录自己的实际作答后再判断困难所在。不要预填“个人薄弱项”，也不要将本册统计直接写入个人错误率。')
emit(r'\noindent\begin{tabular}{@{}p{2.1cm}p{3.3cm}p{3.5cm}p{5.7cm}@{}}\toprule 日期／题号 & 首答／重做 & 证据中漏读的位置 & 下次首先检查什么\\\midrule')
for _ in range(4):emit(r'\rule{0pt}{24pt} & & &\\\midrule')
emit(r'\end{tabular}')
emit(r'\end{document}')
texpath=ROOT/f'print/english/{NAME}.tex';texpath.write_text('\n'.join(O)+'\n')
print(json.dumps(dict(tex=str(texpath),review=str(reviewpath),questions=len(qs),cases=len(cases),statistics=[{k:v for k,v in s.items() if k!='members'} for s in stats]),ensure_ascii=False))
