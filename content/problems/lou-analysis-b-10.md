---
title: "楼红卫《数学分析》B 组习题解答（十）：2.7.B 第 5—6 题、3.1.B 第 1—4 题与 3.2.B 第 1 题"
description: "连续完成 B64—B70：Euler 正弦与余弦乘积、Viète 公式、无穷小求和、各型函数极限、非线性递推及广义实数上的上下极限。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "2.7.B", "3.1.B", "3.2.B", "无穷乘积", "函数极限", "B64-B70"]
created_at: "2026-11-02"
updated_at: "2026-11-02"
---

承接上一批，本批严格按上册 B 组顺序连续完成 **B64—B70**，对应 **2.7.B 第 5—6 题、3.1.B 第 1—4 题、3.2.B 第 1 题**。第二章结束后直接衔接第三章 B 组，不穿插 A 组；题目、上下极限符号和递推式已逐项核对原题 PDF 第 15—18 页。

[楼分析习题-v1（上册）资料页](/problems/41e85e430c9d7f84a0863658/) · [本批原题：PDF 第 15—18 页](/files/problems/楼分析习题-v1.pdf#page=15) · [第二章索引](/problems/collections/lou-analysis/chapters/2/) · [第三章索引](/problems/collections/lou-analysis/chapters/3/)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [上一批 B57—B63](/problems/66783d8d0bfbf0815b31a433/)

**原题引用说明：** 整理 PDF 在若干 A 组中把星号题与后续题重新编号，却保留了 B 组中的交叉引用。3.1.A 按出现顺序计数的第 2 题是正弦求和题（PDF 标作无星号“1”）；3.2.A 按出现顺序计数的第 11 题是单调连续函数与上下极限题（PDF 标作“9”，前面另有两道星号题）。据此，B67、B70 按包含星号题的顺序解释交叉引用；两题均保留 B 组原文，并把采用的对应题目完整写出。这一对应关系依据整理 PDF 的题序与内容推定，教材原版编号尚未独立核实；PDF 另列的“命题 3.1.9”未附命题正文。

## 题号导航

- [问题 B64：Euler 正弦乘积与尾积控制（2.7.B-5）](#问题-b64)
- [问题 B65：余弦乘积及整数零点的处理（2.7.B-6）](#问题-b65)
- [问题 B66：倍角公式与 Viète 乘积（3.1.B-1）](#问题-b66)
- [问题 B67：仿编无穷小求和习题（3.1.B-2）](#问题-b67)
- [问题 B68：各型极限的定义与判别准则（3.1.B-3）](#问题-b68)
- [问题 B69：非线性递推的相邻比值线性化（3.1.B-4）](#问题-b69)
- [问题 B70：广义实数上的单调连续映射与上下极限（3.2.B-1）](#问题-b70)
- [七题方法总结](#七题方法总结)

## 问题 B64

**原题号：** 习题 2.7.B 第 5 题。[原题 PDF 第 15 页](/files/problems/楼分析习题-v1.pdf#page=15)。

**题目：** Euler 依据正弦函数的零点猜测

$$
\sin\pi x=\pi x\prod_{k=1}^{\infty}\left(1-\frac{x^2}{k^2}\right).
$$

按下列要求证明：

（1）对整数 $n\ge0$、$t\in(-1,1)$，

$$
\sin((2n+1)\arcsin t)
=(2n+1)t\prod_{k=1}^{n}
\left(1-\frac{t^2}{\sin^2\frac{k\pi}{2n+1}}\right).
$$

（2）当 $|x|\le n+\tfrac12$ 时，

$$
\sin\pi x=(2n+1)\sin\frac{\pi x}{2n+1}
\prod_{k=1}^{n}\left(1-
\frac{\sin^2\frac{\pi x}{2n+1}}{\sin^2\frac{k\pi}{2n+1}}\right).
$$

（3）固定 $x\in\mathbb R$，对整数 $m>K>|x|$，令

$$
T_{K,n}(x)=\prod_{k=K}^{n}\left(1-
\frac{\sin^2\frac{\pi x}{2n+1}}{\sin^2\frac{k\pi}{2n+1}}\right).
$$

证明原题中的上下极限估计：

$$
\begin{aligned}
&\prod_{k=K}^{m}\left(1-\frac{x^2}{k^2}\right)
 \prod_{k=m+1}^{\infty}\left(1-\frac{\pi^2x^2}{4k^2}\right)\\
&\qquad\le\liminf_{n\to\infty}T_{K,n}(x)
\le\limsup_{n\to\infty}T_{K,n}(x)
\le\prod_{k=K}^{m}\left(1-\frac{x^2}{k^2}\right).
\end{aligned}
$$

（4）证明对每个实数 $x$，

$$
\lim_{n\to\infty}\prod_{k=1}^{n}\left(1-
\frac{\sin^2\frac{\pi x}{2n+1}}{\sin^2\frac{k\pi}{2n+1}}\right)
=\prod_{k=1}^{\infty}\left(1-\frac{x^2}{k^2}\right),
$$

并推出 Euler 公式。

**证明：** 本题所有无穷乘积均指按题中次序取有限部分积的极限，允许因某一因子为零而得到零值；没有任意重排乘积。

### 奇数倍角的有限恒等式

由正弦加法公式反复展开可得

$$
\sin((2n+1)\theta)
=\sum_{j=0}^{n}(-1)^j\binom{2n+1}{2j+1}
(\sin\theta)^{2j+1}(1-\sin^2\theta)^{n-j}.
$$

因而 $P_n(t)=\sin((2n+1)\arcsin t)$ 是次数至多为 $2n+1$ 的奇多项式，且 $P_n(t)/t\to2n+1$。它在

$$
0,\quad \pm\sin\frac{k\pi}{2n+1}\quad(1\le k\le n)
$$

这 $2n+1$ 个互不相同的点上为零。多项式不恒为零，故次数恰为 $2n+1$，这些就是全部根。按根分解，再比较 $t$ 的一次项系数，即得（1）。$n=0$ 时空积取 $1$，公式仍成立。

两边都是关于 $t$ 的连续函数，故（1）也适用于 $t=\pm1$。若 $|x|\le n+\tfrac12$，则 $\theta=\pi x/(2n+1)\in[-\pi/2,\pi/2]$，有 $\arcsin(\sin\theta)=\theta$。代入（1）即得（2），包括两个边界点。

### 尾积估计与极限交换

记 $c=\pi^2x^2/4$。当 $n$ 充分大且 $K\le k\le n$ 时，$|x|<k$ 及正弦在 $[0,\pi/2]$ 上严格递增给出

$$
0\le r_{n,k}:=
\frac{\sin^2\frac{\pi x}{2n+1}}{\sin^2\frac{k\pi}{2n+1}}<1.
$$

由 $|\sin u|\le|u|$ 和 $\sin v\ge2v/\pi$（$0\le v\le\pi/2$），还有与 $n$ 无关的估计

$$
r_{n,k}\le\frac{c}{k^2},\qquad
r_{n,k}\longrightarrow\frac{x^2}{k^2}\quad(n\to\infty,\ k\text{ 固定}).
$$

先取足够大的整数 $m>K$，使 $m+1>\pi|x|/2$。这时所有比较尾因子都为正，可以逐项相乘：

$$
\begin{aligned}
&\prod_{k=K}^{m}(1-r_{n,k})
 \prod_{k=m+1}^{n}\left(1-\frac{c}{k^2}\right)
\le T_{K,n}(x)\le\prod_{k=K}^{m}(1-r_{n,k}).
\end{aligned}
$$

所用比较乘积确实收敛。一般地，若 $0\le u_k<1$ 且 $\sum u_k<\infty$，则

$$
0\le1-\prod_{k=p}^{q}(1-u_k)\le\sum_{k=p}^{q}u_k.
$$

此式由有限乘积归纳得到。部分积单调有下界，故存在极限；充分靠后的尾积至少为 $1-\sum_{k=p}^{\infty}u_k>0$，所以整个乘积为正，且尾积随 $p\to\infty$ 趋于 $1$。取 $u_k=c/k^2$ 或 $x^2/k^2$，即得到这里所需的收敛性。

令 $n\to\infty$，便得到（3）对上述充分大 $m$ 的估计。再令 $m\to\infty$，其左右界均趋于

$$
P_K(x):=\prod_{k=K}^{\infty}\left(1-\frac{x^2}{k^2}\right)>0.
$$

于是 $T_{K,n}(x)\to P_K(x)$。这是真正的“有限头部逐项取极限、尾部统一控制”；仅有每个 $r_{n,k}$ 的极限，并不足以交换极限与不断增长的乘积。

补上前面有限个因子后，

$$
\begin{aligned}
\lim_{n\to\infty}\prod_{k=1}^{n}(1-r_{n,k})
&=\prod_{k=1}^{K-1}\left(1-\frac{x^2}{k^2}\right)P_K(x)\\
&=\prod_{k=1}^{\infty}\left(1-\frac{x^2}{k^2}\right).
\end{aligned}
$$

前部因子可以为负或为零，不影响有限乘积极限。特别地，若 $x$ 是非零整数，$k=|x|$ 的因子在充分大 $n$ 时已恒为零；若 $x=0$，所有因子均为 $1$。这证明了（4）的全部实数情形。结合（2）及

$$
(2n+1)\sin\frac{\pi x}{2n+1}\longrightarrow\pi x,
$$

得到 Euler 公式。

### 补全原题对所有 $m>K>|x|$ 的下界

原题（3）只写 $m>K>|x|$。此条件不能保证 $1-c/k^2$ 在 $k>m$ 时全为正，因此不能把上面的逐因子相乘证明原样用于所有 $m$。下面补足这一点，而不擅自把原题判为错误。

对整数 $m\ge0$ 定义

$$
F_m(t)=\prod_{k=m+1}^{\infty}\left(1-\frac{t^2}{k^2}\right),\qquad t\ge0.
$$

它的存在性已由有限头部与正尾部得到。对有限乘积 $F_{m,N}$，直接消去相邻因子得多项式恒等式

$$
(m+t+1)(N-t)F_{m,N}(t+1)
=(m-t)(N+t+1)F_{m,N}(t).
$$

先对不使分母为零的 $t$ 作约分即可验证，两边为多项式，故零点处也成立。除以 $N$ 后令 $N\to\infty$，得到

$$
F_m(t+1)=\frac{m-t}{m+t+1}F_m(t).
$$

在 $[0,m+1)$ 上，$F_m$ 非负且单调不增，因为每个有限乘积都是如此。又对 $t\ge0$，

$$
\left|\frac{m-t}{m+t+1}\right|\le1.
$$

因此，只要 $0\le a<m$、$q\ge a$，就有 $|F_m(q)|\le F_m(a)$：若 $q<m+1$，直接用单调性；若 $q\ge m+1$，把它写为 $q=t+j$，其中 $m\le t<m+1$、$j$ 为正整数，反复用上式便得 $|F_m(q)|\le F_m(t)\le F_m(a)$。

令 $a=|x|$、$q=\pi|x|/2$。由于前积 $\prod_{k=K}^{m}(1-x^2/k^2)>0$，有

$$
\begin{aligned}
&\prod_{k=K}^{m}\left(1-\frac{x^2}{k^2}\right)F_m(q)\\
&\qquad\le\prod_{k=K}^{m}\left(1-\frac{x^2}{k^2}\right)F_m(|x|)
=P_K(x)=\lim_{n\to\infty}T_{K,n}(x).
\end{aligned}
$$

上界则由 $0<P_K(x)\le\prod_{k=K}^{m}(1-x^2/k^2)$ 得到。这就补全了（3）在原题所写全部 $m>K>|x|$ 下的结论。$x=0$ 时各界均为 $1$。

**方法总结：** 无穷乘积极限采用“有限因子精确分解＋可求和的统一尾界”。带符号比较因子不能直接相乘；先在正尾部完成极限，再利用有限乘积恒等式控制其余参数。整数零点必须单独保留，不能在证明中随意约掉。

[返回题号导航](#题号导航)

## 问题 B65

**原题号：** 习题 2.7.B 第 6 题。[原题 PDF 第 15 页](/files/problems/楼分析习题-v1.pdf#page=15)。

**题目：** 证明对每个实数 $x$，

$$
\cos\pi x=\prod_{n=0}^{\infty}
\left(1-\frac{x^2}{(n+\tfrac12)^2}\right).
$$

**证明：** 记正弦乘积为 $S(x)=\prod_{k=1}^{\infty}(1-x^2/k^2)$，右边的余弦候选乘积为 $C(x)$。两者的尾部偏差均由收敛的平方倒数级数控制，故各自存在；遇到零因子时取部分积极限为零。

先在有限乘积中分离奇偶项：

$$
\prod_{k=1}^{2N}\left(1-\frac{4x^2}{k^2}\right)
=\prod_{j=1}^{N}\left(1-\frac{x^2}{j^2}\right)
 \prod_{j=1}^{N}\left(1-\frac{4x^2}{(2j-1)^2}\right).
$$

令 $N\to\infty$，得到 $S(2x)=S(x)C(x)$。这是有限恒等式的极限，没有对条件收敛对象重排。若 $x\ne0$ 且 $x\notin\mathbb Z$，则 B64 给出

$$
C(x)=\frac{S(2x)}{S(x)}
=\frac{\sin2\pi x}{2\sin\pi x}=\cos\pi x.
$$

非整数半整数也包括在内：此时分母不为零，分子与 $C(x)$ 都为零。$x=0$ 时各因子均为 $1$，公式直接成立。

还需处理非零整数，不能把上述 $0/0$ 当作约分结果。固定 $R>0$，取 $M$ 充分大，使 $R^2/(n+1/2)^2<1$（$n\ge M$）。对 $|x|\le R$，

$$
0\le1-\prod_{n=M}^{N}\left(1-\frac{x^2}{(n+\tfrac12)^2}\right)
\le R^2\sum_{n=M}^{\infty}\frac1{(n+\tfrac12)^2}.
$$

更一般地，两段尾部部分积之差也不超过相应的级数尾和。故尾积在 $[-R,R]$ 上一致收敛；乘上固定的有限前积，$C$ 是该区间上的连续函数。取非整数 $x_j\to k\in\mathbb Z$，由已证公式及连续性得到 $C(k)=\cos\pi k$，证明完毕。

**方法总结：** 先在有限乘积中分奇偶，再取极限；用商得到一般点公式，用局部一致收敛补全不能约分的零点。可求和的统一尾界同时解决存在性与连续性。

[返回题号导航](#题号导航)

## 问题 B66

**原题号：** 习题 3.1.B 第 1 题。[原题 PDF 第 16 页](/files/problems/楼分析习题-v1.pdf#page=16)。

**题目：** 对 $x\ne0$，证明

$$
\prod_{n=1}^{\infty}\cos\frac{x}{2^n}=\frac{\sin x}{x}.
$$

特别地，证明 Viète 公式

$$
\prod_{n=2}^{\infty}\cos\frac{\pi}{2^n}=\frac2\pi.
$$

**证明：** 连续使用 $\sin2u=2\sin u\cos u$，对每个正整数 $N$ 都有

$$
\sin x=2^N\sin\frac{x}{2^N}\prod_{n=1}^{N}\cos\frac{x}{2^n}.
$$

固定 $x\ne0$，当 $N$ 充分大时，$0<|x|/2^N<\pi$，因而 $\sin(x/2^N)\ne0$。于是

$$
\prod_{n=1}^{N}\cos\frac{x}{2^n}
=\frac{\sin x}{x}\,
\frac{x/2^N}{\sin(x/2^N)}
\longrightarrow\frac{\sin x}{x}.
$$

这也直接证明乘积极限存在。若 $x\in\pi\mathbb Z\setminus\{0\}$，右边为零；把 $x/\pi$ 写成 $2^r$ 乘以奇数，则第 $r+1$ 个余弦因子为零，与结论一致。$x=0$ 时乘积恒为 $1$，可把右边按连续延拓定义为 $1$。

取 $x=\pi/2$，再把指标由 $n$ 改为 $n+1$，即得所述 Viète 公式。这里没有除以 $\cos(\pi/2)$，也没有把从 $n=1$ 开始的零乘积误当成 Viète 乘积。

**方法总结：** 把无穷乘积化为精确的有限望远镜恒等式，最后只用一个基本极限。对零因子和起始指标的核查，往往比形式上的倍角推导更关键。

[返回题号导航](#题号导航)

## 问题 B67

**原题号：** 习题 3.1.B 第 2 题。[原题 PDF 第 16 页](/files/problems/楼分析习题-v1.pdf#page=16)。

**题目：** 仿照习题 3.1.A 第 2 题编写一个习题。

**题意核对：** 按包含星号题的出现顺序，所引第 2 题是：证明

$$
\lim_{n\to\infty}n\sum_{k=1}^{n}
\left|\sin\frac{k}{n^3}-\frac{k}{n^3}\right|=0,
$$

并计算 $\lim_{n\to\infty}n\sum_{k=1}^{n}\sin(k/n^3)$。整理 PDF 把它标为无星号“1”，而把下一道“证明命题 3.1.9”标为“2”；这里采用前者作为仿编对象，并明确保留这一编号差异。

**解：** 仿编习题如下：证明

$$
\lim_{n\to\infty}n\sum_{k=1}^{n}
\left|\ln\left(1+\frac{k}{n^3}\right)-\frac{k}{n^3}\right|=0,
$$

并计算

$$
\lim_{n\to\infty}n\sum_{k=1}^{n}\ln\left(1+\frac{k}{n^3}\right).
$$

对 $t\ge0$，初等对数不等式 $t/(1+t)\le\ln(1+t)\le t$ 给出

$$
0\le t-\ln(1+t)\le\frac{t^2}{1+t}\le t^2.
$$

因此

$$
\begin{aligned}
0&\le n\sum_{k=1}^{n}\left|\ln\left(1+\frac{k}{n^3}\right)-\frac{k}{n^3}\right|\\
&\le\frac1{n^5}\sum_{k=1}^{n}k^2
=\frac{(n+1)(2n+1)}{6n^4}\longrightarrow0.
\end{aligned}
$$

而线性项之和为

$$
n\sum_{k=1}^{n}\frac{k}{n^3}=\frac{n+1}{2n}\longrightarrow\frac12.
$$

故仿编习题所求极限为 $1/2$。

这一结构还可推广。设 $\varphi$ 定义在零点的某邻域内，$\varphi(0)=0$，且 $\varphi(t)/t\to L$（$t\to0$）。对固定 $p>-1$、$c\in\mathbb R$，有

$$
\lim_{n\to\infty}n^p\sum_{k=1}^{n}
\varphi\left(\frac{ck}{n^{p+2}}\right)=\frac{Lc}{2}.
$$

当 $c=0$ 时直接成立。若 $c\ne0$，全部自变量的绝对值不超过 $|c|/n^{p+1}\to0$。给定 $\varepsilon>0$，由极限定义，对充分大 $n$ 和所有 $1\le k\le n$ 同时有

$$
\left|\varphi\left(\frac{ck}{n^{p+2}}\right)
-L\frac{ck}{n^{p+2}}\right|
\le\varepsilon\frac{|c|k}{n^{p+2}}.
$$

乘以 $n^p$ 并求和，误差不超过 $\varepsilon|c|(n+1)/(2n)$。先令 $n\to\infty$，再令 $\varepsilon\downarrow0$，即得结论。取 $\varphi(t)=\sin t$、$p=1$、$c=1$，同时证明被仿照的正弦题及其极限 $1/2$。这里依靠的是对全部 $k$ 同时成立的误差控制，而不是对每个固定 $k$ 分别写等价无穷小。

**方法总结：** 在项数随参数增长的和式中，先控制最大的自变量，再从极限定义取得统一的相对误差；估计总误差后，才可用线性主项代替原函数。这比逐项“等价替换”更可靠，也更易推广。

[返回题号导航](#题号导航)

## 问题 B68

**原题号：** 习题 3.1.B 第 3 题。[原题 PDF 第 16 页](/files/problems/楼分析习题-v1.pdf#page=16)。

**题目：** 从表中选取若干极限类型，写出定义、Cauchy 准则和 Heine 定理。表中自变量有 $x\to a,a^+,a^-,\infty,+\infty,-\infty$ 六种，极限值有 $A,+\infty,-\infty,\infty$ 四种，其中 $a,A\in\mathbb R$。

**解：** 下面统一覆盖表中全部二十四种组合。约定不带正负号的 $x\to\infty$ 表示 $|x|\to\infty$，$f(x)\to\infty$ 表示 $|f(x)|\to\infty$；后者不要求正负号最终固定。

### 各型极限的定义

设 $f:E\to\mathbb R$。以下邻域均与 $E$ 相交，并要求每个充分小邻域或充分远尾部非空；这分别表示 $a$ 是相应方向的聚点，或 $E$ 在相应方向无界。否则极限条件可能因没有可取点而空泛成立，唯一性也会失效。

| 自变量趋向 | 用于极限定义的集合 |
| --- | --- |
| $x\to a$ | $U_\delta=\{x\in E:0<\lvert x-a\rvert<\delta\}$ |
| $x\to a^+$ | $U_\delta=\{x\in E:0<x-a<\delta\}$ |
| $x\to a^-$ | $U_\delta=\{x\in E:0<a-x<\delta\}$ |
| $x\to+\infty$ | $U_R=\{x\in E:x>R\}$ |
| $x\to-\infty$ | $U_R=\{x\in E:x<-R\}$ |
| $x\to\infty$ | $U_R=\{x\in E:\lvert x\rvert>R\}$ |

在下表中，“最终”指：存在 $\delta>0$，使第一个表相应的 $U_\delta$ 内所有点满足条件；对无穷远情形，则指存在 $R>0$，使 $U_R$ 内所有点满足条件。

| 极限值 | 严格定义 |
| --- | --- |
| $A\in\mathbb R$ | 对每个 $\varepsilon>0$，最终有 $\lvert f(x)-A\rvert<\varepsilon$ |
| $+\infty$ | 对每个 $M>0$，最终有 $f(x)>M$ |
| $-\infty$ | 对每个 $M>0$，最终有 $f(x)<-M$ |
| $\infty$ | 对每个 $M>0$，最终有 $\lvert f(x)\rvert>M$ |

两表逐行组合就是全部定义。例如 $\lim_{x\to a^-}f(x)=-\infty$ 表示

$$
\forall M>0\ \exists\delta>0\ \forall x\in E:
\quad 0<a-x<\delta\ \Longrightarrow\ f(x)<-M.
$$

### 有限极限的 Cauchy 准则

对上述任一自变量趋向，$f$ 存在有限极限的充要条件是：对每个 $\varepsilon>0$，存在一个相应的邻域或尾部 $U$，使

$$
|f(x)-f(y)|<\varepsilon\qquad(x,y\in U).
$$

必要性由三角不等式得到。证明充分性时，取一列递减的非空集合 $V_n$：有限点情形用 $\delta=1/n$，无穷远情形用 $R=n$。选 $x_n\in V_n$。Cauchy 条件保证 $\{f(x_n)\}$ 为实数 Cauchy 列，故收敛到某个 $A\in\mathbb R$。

给定 $\varepsilon>0$，取 $V_N$ 使其中任意两函数值之差小于 $\varepsilon/2$，再取 $j\ge N$ 使 $|f(x_j)-A|<\varepsilon/2$。于是对所有 $x\in V_N$，

$$
\lvert f(x)-A\rvert\le|f(x)-f(x_j)|+|f(x_j)-A|<\varepsilon.
$$

故 $f\to A$。这个准则判定“存在某个有限极限”，并不单独指定其数值；若要判定极限等于预先给定的 $A$，还需如下一节中的一条趋于 $A$ 的函数值序列。

### 无穷极限的对应准则

普通实数 Cauchy 条件不适用于无穷极限。例如 $f(x)=1/x$ 在 $x\to0^+$ 时趋于 $+\infty$，但取 $x=1/n,y=1/(2n)$，函数值之差为 $n$。正确做法是先选定符号，再压缩函数值。

令 $h(x)=\arctan f(x)$，$g(x)=\arctan|f(x)|$。有如下等价判据：

| 待判定极限 | Cauchy 条件及指定端点的条件 |
| --- | --- |
| $f\to+\infty$ | $h$ 满足上述 Cauchy 条件，且在每个 $V_n$ 上 $f$ 无上界 |
| $f\to-\infty$ | $h$ 满足上述 Cauchy 条件，且在每个 $V_n$ 上 $f$ 无下界 |
| $\lvert f\rvert\to\infty$ | $g$ 满足上述 Cauchy 条件，且在每个 $V_n$ 上 $\lvert f\rvert$ 无上界 |

以第一行为例。若 $f\to+\infty$，则 $h\to\pi/2$，从而满足 Cauchy 条件；对任意固定 $V_n$ 和任意 $M$，在更靠近极限的非空 $V_j\subset V_n$ 内有 $f>M$，故 $f$ 在 $V_n$ 上无上界。反过来，Cauchy 条件使 $h\to H\in[-\pi/2,\pi/2]$。由每个 $V_n$ 上无上界，可选 $x_n\in V_n$ 使 $f(x_n)>n$，于是 $h(x_n)\to\pi/2$，必有 $H=\pi/2$；这等价于 $f\to+\infty$。其余两行分别把不等式改成 $f(x_n)<-n$ 或 $|f(x_n)|>n$，证明相同。

这里的“每个邻域都无上界”单独并不够，例如 $\sin(1/x)/x$ 在零点附近无上界却不趋于 $+\infty$；Cauchy 条件排除了这样的持续振荡。

### Heine 定理及其证明

对六种自变量趋向中的任一种，以及四种极限值中的任一种，有：函数极限等于该值，当且仅当对每一列沿指定方向趋近的 $\{x_n\}\subset E$（有限点情形另要求 $x_n\ne a$），函数值序列 $\{f(x_n)\}$ 按相应意义趋于该值。

必要性只需把极限定义应用于序列最终进入的邻域。反证充分性：若函数极限定义失败，则有一个固定的目标邻域无法最终达到。有限目标 $A$ 时，可在每个 $V_n$ 内选 $x_n$ 使 $|f(x_n)-A|\ge\varepsilon_0$；目标 $+\infty$ 时选 $f(x_n)\le M_0$；目标 $-\infty$ 时选 $f(x_n)\ge-M_0$；无符号无穷时选 $|f(x_n)|\le M_0$。这样选出的 $x_n$ 沿指定方向趋近，却没有相应的函数值极限，与假设矛盾。

双侧有限点极限存在且等于某值，当且仅当左右两侧极限都等于该值；这里须两侧都是聚点，只有一侧可达时按定义域限制解释。类似地，$x\to\infty$ 的两端极限需要在可达的 $+\infty$、$-\infty$ 两端一致。无符号的函数极限允许两侧符号不同，例如 $1/x$ 在 $x\to0$ 时满足 $|1/x|\to\infty$，但既不趋于 $+\infty$，也不趋于 $-\infty$。

**方法总结：** 把“自变量如何接近”和“函数值进入什么邻域”分开，便能统一写出各型极限。普通 Cauchy 准则只保证有限极限存在；无穷极限必须使用合适的变换并识别端点。Heine 定理的反向证明始终是从每层邻域中抽取一个违反定义的点。

[返回题号导航](#题号导航)

## 问题 B69

**原题号：** 习题 3.1.B 第 4 题。[原题 PDF 第 17 页](/files/problems/楼分析习题-v1.pdf#page=17)。

**题目：** 设 $a_0,a_1,\ell,\alpha>0$，$a_1\ne a_0$，且

$$
a_{n+1}=\frac{(\ell+n^\alpha)a_n^2}
{\ell a_n+n^\alpha a_{n-1}}\qquad(n\ge1).
$$

证明：（1）$\alpha<1$ 时有正的极限；（2）$\alpha=1,\ell>1$ 时有正的极限；（3）$\alpha>1$ 时发散或极限为零；（4）$\alpha=\ell=1$ 时发散或极限为零。

**证明：** 分母始终为正，递推定义了唯一的正数列。令

$$
u_n=\frac{a_{n-1}}{a_n},\quad
c=\frac{a_0}{a_1}-1\in(-1,+\infty)\setminus\{0\},\quad
p_0=1,\quad p_n=\prod_{k=1}^{n}\frac{k^\alpha}{\ell+k^\alpha}.
$$

由递推式直接算得

$$
u_{n+1}=\frac{\ell+n^\alpha u_n}{\ell+n^\alpha},
\qquad u_{n+1}-1=\frac{n^\alpha}{\ell+n^\alpha}(u_n-1).
$$

归纳可知 $u_n=1+cp_{n-1}$，从而

$$
a_n=a_0\prod_{j=1}^{n}(1+cp_{j-1})^{-1},\qquad
\ln\frac{a_n}{a_0}=-\sum_{j=1}^{n}\ln(1+cp_{j-1}).
$$

所有对数均有意义，因为 $0<p_j\le1$ 且 $c>-1$。若 $c>0$，则 $a_n$ 严格递减；若 $c<0$，则 $a_n$ 严格递增。

### 当 $0<\alpha<1$

有

$$
-\ln p_n=\sum_{k=1}^{n}\ln\left(1+\frac{\ell}{k^\alpha}\right).
$$

对充分大 $k$，$0\le\ell/k^\alpha\le1$，由 $\ln(1+t)\ge t/(1+t)\ge t/2$ 得

$$
p_n\le C\exp\left(-\frac{\ell}{2}\sum_{k=k_0}^{n}k^{-\alpha}\right)
\le C_1\exp(-C_2 n^{1-\alpha}),
$$

其中 $C,C_1,C_2>0$ 与 $n$ 无关。最后一步只需保留 $\lceil n/2\rceil\le k\le n$ 的项：其和至少为固定正数倍的 $n^{1-\alpha}$。由于 $\ln n/n^{1-\alpha}\to0$，右端最终不超过 $C_1n^{-2}$，故 $\sum_{n=0}^{\infty}p_n<\infty$。

于是 $p_n\to0$，且当 $j$ 充分大时 $|cp_{j-1}|\le1/2$，由 $|\ln(1+t)|\le2|t|$ 得

$$
\sum_{j=1}^{\infty}|\ln(1+cp_{j-1})|<\infty.
$$

所以 $\ln(a_n/a_0)$ 收敛到有限实数，$a_n$ 收敛到严格正的有限数。这里绝对收敛只用于对数级数，未对原递推式作不合法的极限代入。

### 当 $\alpha=1$

利用 $\ln(1+t)=t+O(t^2)$，有

$$
\ln p_n=-\sum_{k=1}^{n}\ln\left(1+\frac\ell k\right)
=-\ell\sum_{k=1}^{n}\frac1k+O(1)
=-\ell\ln n+O(1).
$$

第一处有界误差来自收敛级数 $\sum k^{-2}$，第二处来自调和和与对数的有界差。因此存在常数 $C_-,C_+>0$，使

$$
C_-n^{-\ell}\le p_n\le C_+n^{-\ell}\qquad(n\ge1).
$$

若 $\ell>1$，则 $\sum p_n$ 收敛，重复上一段的对数级数论证，得到正的有限极限，证明（2）。

若 $0<\ell\le1$，则 $p_n\to0$ 而 $\sum p_n$ 发散。由

$$
\frac{\ln(1+cp_n)}{p_n}\longrightarrow c\ne0,
$$

比较可知：$c>0$ 时 $\sum\ln(1+cp_n)=+\infty$，故 $a_n\to0$；$c<0$ 时此和为 $-\infty$，故 $a_n\to+\infty$。这不仅证明（4），也补全了原题未单列的 $\alpha=1,0<\ell<1$ 情形。

在 $\ell=1$ 的边界上还可直接核验：

$$
p_n=\prod_{k=1}^{n}\frac{k}{k+1}=\frac1{n+1},\qquad
\ln\frac{a_n}{a_0}=-\sum_{j=1}^{n}\ln\left(1+\frac cj\right).
$$

误差 $\ln(1+c/j)-c/j$ 绝对可和，而调和级数发散，故结论完全一致。

### 当 $\alpha>1$

因为

$$
0\le\sum_{k=1}^{\infty}\ln\left(1+\frac\ell{k^\alpha}\right)
\le\ell\sum_{k=1}^{\infty}k^{-\alpha}<\infty,
$$

所以 $p_n\to p_\infty>0$。若 $c>0$，则 $\ln(1+cp_n)$ 趋于严格正数，故 $a_n\to0$；若 $c<0$，则其极限严格为负，故 $a_n\to+\infty$。证明了（3），并明确了“发散”在此只能是趋于 $+\infty$，不会振荡。

综上，完整分类为：

| 参数范围 | $a_1<a_0$ | $a_1>a_0$ |
| --- | --- | --- |
| $0<\alpha<1$，或 $\alpha=1,\ell>1$ | 收敛到正数 | 收敛到正数 |
| $\alpha>1$，或 $\alpha=1,0<\ell\le1$ | 趋于 $0$ | 趋于 $+\infty$ |

若去掉 $a_1\ne a_0$ 的条件，则 $c=0$，数列恒为 $a_0$；因此该条件对（3）、（4）的二分结论必不可少。

**方法总结：** 对齐次的二阶非线性递推，先尝试相邻比值。本题的倒比值减去不动点 $1$ 后变成一阶乘法递推，再由乘积的对数和判断原序列。真正的临界量是 $\sum p_n$，所以 $p_n\to0$ 本身不足以推出正极限。

[返回题号导航](#题号导航)

## 问题 B70

**原题号：** 习题 3.2.B 第 1 题。[原题 PDF 第 18 页](/files/problems/楼分析习题-v1.pdf#page=18)。

**题目：** 将习题 3.2.A 第 11 题推广到广义实数系情形。

**题意核对：** 整理 PDF 的 3.2.A 有两道星号题，随后从“1”重新编号。按出现顺序计数的第 11 题，即 PDF 第 18 页标作“9”的题目，要求对 $[a,b]$ 上的单调连续函数及其中的点列，证明函数与上下极限交换：单增时保持上、下极限，单减时互换。这一引用对应关系与 B67 的重新编号现象一致。

**解：** 写 $\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}$，按自然次序和序拓扑理解其收敛与连续性。准确的推广如下。

设 $I=[\alpha,\beta]\subset\overline{\mathbb R}$ 是非空闭区间，端点可以无穷；设 $F:I\to\overline{\mathbb R}$ 单调且连续，$x_n\in I$。记

$$
l=\liminf_{n\to\infty}x_n,\qquad
u=\limsup_{n\to\infty}x_n.
$$

则 $l,u\in I$。若 $F$ 单调不减，

$$
\liminf_{n\to\infty}F(x_n)=F(l),\qquad
\limsup_{n\to\infty}F(x_n)=F(u).
$$

若 $F$ 单调不增，

$$
\liminf_{n\to\infty}F(x_n)=F(u),\qquad
\limsup_{n\to\infty}F(x_n)=F(l).
$$

这些等式允许两边取无穷值，不使用任何 $+\infty-\infty$ 运算。

**证明：** 令

$$
\theta(t)=\arctan t\quad(t\in\mathbb R),\qquad
\theta(\pm\infty)=\pm\frac\pi2.
$$

它是 $\overline{\mathbb R}$ 到 $[-\pi/2,\pi/2]$ 的保序同胚。因此可以把包括无穷端点的问题化为有限闭区间上的问题。为避免把需要证明的交换性质暗中用掉，先证明下面的有限区间事实。

设 $G:J\to\mathbb R$ 在有限闭区间 $J$ 上连续且单调不减，$\{y_n\}\subset J$。令

$$
s_N=\inf_{n\ge N}y_n,\qquad t_N=\sup_{n\ge N}y_n.
$$

由闭性，$s_N,t_N\in J$。单调性给出 $G(s_N)\le G(y_n)\le G(t_N)$。按下确界定义，可选尾部中的点使其值趋于 $s_N$；若 $s_N$ 已取到，取常值点列即可。连续性随即给出

$$
G(s_N)=\inf_{n\ge N}G(y_n).
$$

同理，$G(t_N)=\sup_{n\ge N}G(y_n)$。再由 $s_N\uparrow\liminf y_n$、$t_N\downarrow\limsup y_n$ 及连续性，得到所需交换公式。若 $G$ 单调不增，同一论证给出

$$
G(s_N)=\sup_{n\ge N}G(y_n),\qquad
G(t_N)=\inf_{n\ge N}G(y_n),
$$

故上下极限交换位置。

现在取 $J=\theta(I)$、$y_n=\theta(x_n)$，并令

$$
G=\theta\circ F\circ\theta^{-1}:J\to[-\pi/2,\pi/2].
$$

$G$ 连续，且与 $F$ 有相同的单调方向。由于 $\theta$ 保序，它保持任意非空集合的上、下确界：例如 $\theta(\inf A)$ 是 $\theta(A)$ 的下界；任何更大的数的逆像都大于 $\inf A$，不可能仍是 $A$ 的下界。对上确界同理。因此，按上下极限的尾部确界定义及 $\theta$ 的连续性，

$$
\liminf y_n=\theta(l),\qquad \limsup y_n=\theta(u).
$$

同样的结论适用于 $F(x_n)$。把这些式子代入已经证明的有限区间公式，最后应用单射 $\theta$ 的逆映射，便得到全部四个广义实数等式。

### 端点延拓和必要条件

若最初仅给出连续单调函数 $f:\mathbb R\to\mathbb R$，则可自动作正确的无穷端点延拓。单调不减时定义

$$
F(-\infty)=\inf_{x\in\mathbb R}f(x),\qquad
F(+\infty)=\sup_{x\in\mathbb R}f(x),\qquad F|_{\mathbb R}=f;
$$

单调不增时互换上、下确界。由确界定义和单调性，$f$ 在两端分别趋于所定义的端点值，所以 $F$ 在 $\overline{\mathbb R}$ 上连续，前述结论适用。若定义域是半直线或其他区间，遇到不属于原定义域的极限端点，也须先按实际单侧极限延拓，不能直接写未定义的 $f(+\infty)$ 或 $f(-\infty)$。

连续性不能删去。例如

$$
F(x)=\begin{cases}0,&x\le0,\\1,&x>0,\end{cases}
\qquad x_n=\frac1n.
$$

$F$ 单调不减，却有 $\liminf F(x_n)=1\ne0=F(\liminf x_n)$。无穷端点值也不能任填：对 $f(x)=x$，若错误地规定 $F(+\infty)=0$，取 $x_n=n$ 便立即破坏交换公式；正确延拓必须是 $F(+\infty)=+\infty$。

常值映射、$\alpha=\beta$ 的退化区间以及 $l=u=\pm\infty$ 都包含在上述证明中。单调不必严格，但在序拓扑中的连续性必须保留。

**方法总结：** 先用尾部的上、下确界描述上下极限，再利用单调性和连续性与确界交换。推广到广义实数时，用保序同胚把无穷端点压缩到有限闭区间，可统一处理边界并彻底避免未定义的无穷运算。

[返回题号导航](#题号导航)

## 七题方法总结

- **B64：有限恒等式确定结构，统一尾界保证取极限。** 对可能带负号的比较乘积另作论证，不能直接套用正因子乘积不等式。
- **B65：有限分组先于无穷极限。** 商公式只在分母非零处使用，剩余零点靠已证明的连续性补全。
- **B66：望远镜恒等式直接证明乘积收敛。** 明确首项和零因子，就能避免 Viète 公式中常见的指标错误。
- **B67：项数增长时需要统一误差。** 最大自变量趋零使极限定义同时覆盖全部求和项，再控制累计误差。
- **B68：邻域语言统一各型极限。** Cauchy 准则判存在，端点条件判目标，Heine 定理用序列检验。
- **B69：比值变换把非线性递推变成乘积。** 再通过对数级数与幂级数比较，得到包含临界参数的完整分类。
- **B70：连续单调映射与尾部确界交换。** 无穷端点必须按序拓扑连续延拓；递减映射交换上下极限。

**后续：** 本批完成后累计作答 **70 道 B 组习题**，其中第一章 21 题、第二章 44 题、第三章 5 题。下一批从习题 3.2.B 第 2 题开始，继续按原书 B 组出现顺序连续完成七题；该节星号“3*”与后续无星号“3”是不同题目，后续须分别保留，不能因同号而漏题。

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [第二章索引](/problems/collections/lou-analysis/chapters/2/) · [第三章索引](/problems/collections/lou-analysis/chapters/3/) · [上一批 B57—B63](/problems/66783d8d0bfbf0815b31a433/)
