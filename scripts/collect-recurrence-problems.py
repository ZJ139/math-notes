"""Rebuild the recurrence anthology from the audited published solutions."""
from pathlib import Path
import re, hashlib, json

ROOT = Path(__file__).resolve().parents[1]
ENTRIES = []
GROUPS = [
 ('极限与精细渐近', [32,33,35,36,37,40,41,42,69,165,166]),
 ('函数与矩阵迭代', [56,79,128,129,130,171,198]),
 ('递推不等式、差分与系数', [52,55,57,159,161,224,232]),
]
INSIGHTS = {
32:'先对倒数作差，得到尺度上界；再研究 $nx_n$ 的增量，用调和级数发散排除小于 $1$ 的极限。',
33:'先找两个不动点与不变区间，再用误差的精确乘法关系说明：不稳定不动点仍可能被有限步精确命中。',
35:'先证明每个有限截断单调有界，定义无穷根式后再利用相邻参数的递推关系有理化。',
36:'比较每层根式与 $j+2$，把尾端误差逐层传到外侧；望远镜乘积使尾端影响消失。',
37:'把每层比较值推广为一次式，再估计有限截断误差；特别注意参数 $b=0$ 的边界。',
40:'按初值在不动点 $2$ 的哪一侧，分别使用余弦或双曲余弦的半角恒等式，将迭代化为角度减半。',
41:'先检查误差是否最终同号且非零；对 $x_{n+1}=x_n(1-x_n)$ 的倒数差多保留一阶，识别累积的对数项。',
42:'局部导数只提供线索。建立全局不变区间，研究二次迭代，再用二周期方程确定临界参数。',
52:'将乘法不等式取对数，将近似可加关系平移为次可加与超可加关系；固定块长后反复展开。',
55:'先用两周期列检验原命题，再把正确结论的否定写成递推不等式，归一化后累加得到矛盾。',
56:'周期性给出有界轨道，严格缩距给出唯一不动点；用聚点论证排除正的极限距离。',
57:'通过指定相邻项比值构造正数列，再用长度可控的块分别安排比值的上下极限与级数的敛散。',
69:'齐次二阶递推先取相邻倒比值；减去不动点 $1$ 后得到乘积，再以对数级数判定原列的极限。',
79:'比较两条保序轨道，使轨道差满足二阶线性递推；正比值的单调性与负判别式产生矛盾。',
128:'先找不动点，再研究到不动点的距离；严格小于 $1$ 的逐点导数界不等于统一压缩系数。',
129:'构造没有不动点的严格缩距映射，让每一步都增加；若有有限极限，便与不动点不存在矛盾。',
130:'标量投影给出严格缩距；在紧球上最小化位移得到不动点，再用距离与聚点完成收敛证明。',
159:'从乘积恒等式递推正割级数的数值系数，再分别证明收敛、等式与端点发散。',
161:'离散 Taylor 公式将远处项写成初始差分与高阶差分余项，再选择两种步长消去未知量。',
165:'先修正使递推无定义的初值条件，取对数后逐阶展开相邻增量，构造增量为 $1$ 加可求和误差的辅助函数。',
166:'分别改变延迟结构与对数幂次，寻找增量近于常数的变量，再分离平方根修正或对数修正。',
171:'把未知矩阵误差记为 $E_k=I-AB_k$，原迭代立即变成 $E_{k+1}=E_k^2$；对称正定性让各特征值分别平方。',
198:'沿双向迭代轨道把函数方程化为二阶差分为零；不动点限制轨道在同一侧，排除非零公差。',
224:'正向用差分望远镜；逆向把对数增量写成相对增量，并通过乘积说明无界性。反例展示相邻项跳跃的影响。',
232:r'用导数多项式证明 Taylor 系数非负，再由 $f\prime=1+f^2$ 得到数值系数递推；半径上下界分别论证。',
}

def section(text, heading):
    match = re.search(r'^## '+re.escape(heading)+r'\s*\n(.*?)(?=^## |\Z)', text, re.M|re.S)
    if not match: raise ValueError(heading)
    return match.group(1).strip()

def route(path):
    rel=str(path.relative_to(ROOT/'content'))
    return '/'+rel.split('/')[0]+'/'+hashlib.sha256(rel.encode()).hexdigest()[:24]+'/'

def cleanup(text, source):
    text=re.sub(r'\[返回[^\]]*\]\(#[^)]*\)', '', text)
    text=re.sub(r'\]\(#([^)]*)\)',lambda m:']('+source+'#'+m[1]+')',text)
    text=re.sub(r'^### (.*)$', r'##### \1', text,flags=re.M)
    return text.strip()

def add(group,id,title,source,original,idea,solution,summary):
    ENTRIES.append(dict(group=group,id=id,title=title,source=source,original=original.strip(),idea=idea.strip(),solution=solution.strip(),summary=summary.strip()))

for group, ids in GROUPS:
    for id in ids:
        path=next(p for p in (ROOT/'content/problems').glob('lou-analysis-b-*.md') if re.search(r'^## 问题 B'+str(id)+r'$',p.read_text(),re.M))
        full=path.read_text(); block=section(full,'问题 B'+str(id))
        url=route(path)+'#问题-b'+str(id)
        title=re.search(r'\[问题 B'+str(id)+r'：([^\]]+)\]\(',full)[1]
        split=re.search(r'\*\*(?:解|证明)：\*\*',block)
        if not split: raise ValueError(id)
        original=block[:split.start()].strip()
        original=original.split('**思路来源：**',1)[0].strip()
        original=re.sub(r'^\*\*原题号：\*\*[^\n]*\n+', '',original)
        original=re.sub(r'^\*\*题目([^*]*?)：\*\*', lambda m:'**原记号说明：**' if m[1] else '',original)
        tail=block[split.start():]
        parts=re.split(r'\*\*方法总结：\*\*',tail,maxsplit=1)
        if len(parts)!=2: raise ValueError(('summary',id))
        # Retain complete mathematical proof and the original observation program.
        add(group,'B'+str(id),title,url,cleanup(original,url),INSIGHTS[id],cleanup(parts[0],url),cleanup(parts[1],url))

for filename,q,id,title in [
 ('cmc-13-math-a-makeup-solutions.md',5,'CMC13补5','有限记忆递推与滑动最小值'),
 ('cmc-14-math-a-makeup-1-solutions.md',5,'CMC14补一5','双变量同步与临界二周期排除'),
 ('cmc-15-math-a-solutions.md',6,'CMC15正6','指数迭代与严格小于不动点的上界'),
 ('cmc-16-math-a-solutions.md',6,'CMC16正6','任意次序复合与统一吸引'),
]:
    path=ROOT/'content/essays'/filename; block=section(path.read_text(),'问题 '+str(q));url=route(path)+'#问题-'+str(q)
    parts=re.split(r'^### (.*?)\n',block,flags=re.M)
    chunks={parts[i].strip():parts[i+1].strip() for i in range(1,len(parts),2)}
    def get(prefix):return next(v for k,v in chunks.items() if k.startswith(prefix))
    idea=get('3.')+'\n\n'+get('4.')
    # Proof cites the liminf/limsup rule explained in the prerequisites.
    if id=='CMC14补一5':idea=get('2.')+'\n\n'+idea
    add('竞赛中的递推数列',id,title,url,get('1.'),idea,get('5.'),get('本题总结'))

for year,id in [(2017,'2017S08'),(2018,'2018A04')]:
    path=ROOT/f'content/essays/fudan-weekly-selection-{year}.md';block=section(path.read_text(),'问题 '+id);url=route(path)+'#问题-'+id.lower()
    original=block.split('**题目：**',1)[1].split('**入选理由：**',1)[0]
    idea=block.split('**入选理由：**',1)[1].split('**解：**' if '**解：**' in block else '**证明：**',1)[0]
    m=re.search(r'\*\*(?:解|证明)：\*\*',block);proof,summary=block[m.start():].split('**方法总结与推广：**',1)
    add('递推在高等代数中的应用',id,'三对角坐标递推与简单谱' if year==2017 else '变系数三对角行列式的降阶递推',url,cleanup(original,url),idea,cleanup(proof,url),cleanup(summary,url))

extra=json.loads((ROOT/'print/recurrence-problems-additions.json').read_text())
ENTRIES.extend(extra)
# Keep all entries of each group together, in declared insertion order.
group_order=['极限与精细渐近','函数与矩阵迭代','竞赛中的递推数列','递推不等式、差分与系数','递推在高等代数中的应用','斐波那契数列的已证问题']
ENTRIES.sort(key=lambda e:group_order.index(e['group']))

intro=f'''截至 2026 年 11 月 13 日，按已经完成的题解与专题证明整理，共 **{len(ENTRIES)} 题**（多小问保留在同一题内）。每题依次给出“原题、关键思路、解答、简单总结”，并链接原题解或原专题出处。正文与下载 PDF 内容一致，均有可点击目录。

收录范围包括直接定义的递推数列、嵌套根式、递推不等式、有限差分、数值系数递推，以及以数列递推为核心的函数迭代和矩阵应用。斐波那契专题中已经完整证明的结论按证明题重述，标明原专题编号；同一题在分批题解与精选文章中重复出现时只收录一次。题册中尚未作答的题、仅译介的论文、只陈述而未证明的深结果和开放问题不计入本次汇编。

原题条件存在问题时保留原文，再明确说明修订：**B55 原下极限结论不成立；B165 原初值不能保证递推始终有定义。** B37、B41、B166 属于原书要求推广或编题的任务，所选推广及自拟题均沿用既有解答并明确标注。B116、B148、B180 的待核状态不变。

[下载完整 PDF](/files/essays/recurrence-sequences-collected.pdf) · [文章栏目](/essays/)
'''
out=['---','title: "递推数列专题：已解题目、关键思路与完整解答"',f'description: "汇总 {len(ENTRIES)} 道已解问题，涵盖极限、渐近、函数与矩阵迭代、差分、系数及斐波那契数论；附可点击目录与同内容 PDF。"','attachment: "essays/recurrence-sequences-collected.pdf"','subject: "数学分析与高等代数"','tags: [递推数列, 数列极限, 渐近展开, 函数迭代, 斐波那契, 专题汇编]','created_at: "2026-11-13"','updated_at: "2026-11-13"','---','',intro,'## 目录','']
for group in group_order:
    out.extend([f'**{group}**',''])
    for e in ENTRIES:
        out.append(f'- [问题 {e["id"]}：{e["title"]}](#问题-{e["id"].lower()})')
    # Only show this group's rows in this part of the directory.
    start=len(out)-len(ENTRIES)
    out[start:]=[f'- [问题 {e["id"]}：{e["title"]}](#问题-{e["id"].lower()})' for e in ENTRIES if e['group']==group]
    out.append('')
for group in group_order:
    out.extend(['## '+group,''])
    for e in (e for e in ENTRIES if e['group']==group):
        source_text = f'[原题解与原编号]({e["source"]})' if e['source'].startswith(('/', 'https://')) else e['source']
        out.extend([f'### 问题 {e["id"]}', '', '**'+e['title']+'**','',f'来源：{source_text}。',''])
        for name,key in [('原题','original'),('关键思路','idea'),('解答','solution'),('简单总结','summary')]:
            out.extend(['#### '+name,'',e[key],''])
        out.extend(['[返回目录](#目录)',''])
out.extend(['## 阅读后的通用检查','',
'先确认所有项始终有定义，再寻找不变区间、单调量或可求和的误差。只有收敛已经建立，才能把相邻项同时替换成同一个极限。遇到临界参数，应单独排除二周期或其他振荡；遇到渐近展开，应把余项累积是否收敛写清楚。对线性递推，初值、递推阶数与特征根的退化情形必须同时核对。',''])
(ROOT/'content/essays/recurrence-sequences-collected.md').write_text('\n'.join(out))
(ROOT/'print/recurrence-problems-index.json').write_text(json.dumps([{k:e[k] for k in ['group','id','title','source']} for e in ENTRIES],ensure_ascii=False,indent=2)+'\n')
print(f'Collected {len(ENTRIES)} problems')
