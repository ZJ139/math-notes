---
title: "楼红卫《数学分析》B 组习题解答（四）：2.1.B、2.2.B 与 2.3.B 前三题"
description: "楼红卫《数学分析》上册 B 组第四批 B22—B28：零数列的单调控制、二项式系数同余类、Toeplitz 定理与 Stolz 关系、可分性、任意闭集的导集表示，以及集合内部、导集、边界和闭包的十六条关系。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "2.1.B", "2.2.B", "2.3.B", "序列极限", "Toeplitz定理", "Stolz定理", "稠密集", "导集", "拓扑", "B22-B28"]
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

接续[第三批 B15—B21](/problems/77b1e8aaed293f3c77005e6f/)，本批按上册原书 B 组顺序，连续完成 **B22—B28**：习题 2.1.B 第 1—2 题、2.2.B 第 1—2 题、2.3.B 第 1—3 题。不穿插 A 组题目。

[楼分析习题-v1（上册）资料页](/problems/41e85e430c9d7f84a0863658/) · [原题 PDF 第 7 页](/files/problems/楼分析习题-v1.pdf#page=7) · [第 8 页](/files/problems/楼分析习题-v1.pdf#page=8) · [第 9 页](/files/problems/楼分析习题-v1.pdf#page=9)

## 题号导航

- [问题 B22：零数列的单调正数列控制（2.1.B-1）](#问题-b22)
- [问题 B23：二项式系数按模分组的极限（2.1.B-2）](#问题-b23)
- [问题 B24：Toeplitz 定理（2.2.B-1）](#问题-b24)
- [问题 B25：Stolz 定理与 Toeplitz 定理的关系（2.2.B-2）](#问题-b25)
- [问题 B26：欧氏空间中任意子集的可数稠密子集（2.3.B-1）](#问题-b26)
- [问题 B27：任意闭集均为某集合的导集（2.3.B-2）](#问题-b27)
- [问题 B28：内部、导集、边界、闭包的十六条关系（2.3.B-3）](#问题-b28)
- [七题方法总结](#七题方法总结)

## 问题 B22

**原题号：习题 2.1.B 第 1 题。**

**题目：**证明：$\lim_{n\to\infty}a_n=0$ 的充要条件是存在单调下降且无正下界的正数列 $\{\omega_n\}$，使对每个 $n\ge1$ 均有 $|a_n|\le\omega_n$。

**证明：**先设 $a_n\to0$。由于收敛数列有界，尾部上确界

$$
M_n=\sup_{m\ge n}|a_m|
$$

存在且有限。随着 $n$ 增大，取上确界的集合逐渐缩小，因此 $M_{n+1}\le M_n$。又由 $a_n\to0$，任给 $\varepsilon>0$，当 $n$ 足够大时，所有 $m\ge n$ 都满足 $|a_m|<\varepsilon$，故 $0\le M_n\le\varepsilon$，即 $M_n\to0$。

现在定义

$$
\boxed{\omega_n=M_n+\frac1n.}
$$

则 $\omega_n>0$、$|a_n|\le M_n<\omega_n$，并且

$$
\omega_{n+1}=M_{n+1}+\frac1{n+1}
<M_n+\frac1n=\omega_n.
$$

所以 $\{\omega_n\}$ 甚至严格单调下降；由于 $\omega_n\to0$，它不可能存在正下界。

反过来，设存在符合题设的 $\{\omega_n\}$。正数列单调下降，因此

$$
\ell=\inf_{n\ge1}\omega_n
$$

存在，且由单调有界收敛定理，$\omega_n\to\ell$。题设“无正下界”恰说明 $\ell=0$。于是

$$
0\le |a_n|\le\omega_n\longrightarrow0,
$$

由夹逼定理得到 $a_n\to0$，充分性得证。

**方法提炼：**将“所有后续项都足够小”量化为尾部最大误差 $M_n=\sup_{m\ge n}|a_m|$。加入 $1/n$ 可以同时保证**严格正性、严格递减性和趋零性**。此构造比直接取 $\omega_n=|a_n|$ 更可靠，因为 $|a_n|$ 未必单调。

[返回题号导航](#题号导航)

## 问题 B23

**原题号：习题 2.1.B 第 2 题。**

**题目：**设整数 $k\ge1$、$0\le p\le k-1$，求极限

$$
\lim_{n\to\infty}
\frac{\binom{kn}{p}+\binom{kn}{p+k}+\cdots+
\binom{kn}{p+(n-1)k}}{2^{kn}}.
$$

**解：**结论为

$$
\boxed{\frac1k.}
$$

这里分子是按下标模 $k$ 的余数 $p$ 选出的二项式系数之和。需要注意：当 $p=0$ 时，题目分子没有包含最后的 $\binom{kn}{kn}=1$；这一项除以 $2^{kn}$ 后趋于零，不影响极限。

若 $k=1$，则 $p=0$，分子为 $2^n-1$，故极限直接等于 $1$。以下设 $k\ge2$。

记 $\zeta=e^{2\pi i/k}$，由有限等比级数公式，对任意整数 $m$ 有

$$
\frac1k\sum_{j=0}^{k-1}\zeta^{j(m-p)}
=
\begin{cases}
1,&m\equiv p\pmod{k},\\
0,&m\not\equiv p\pmod{k}.
\end{cases}
\qquad\text{(1)}
$$

定义包含所有合法下标的和

$$
S_{n,p}=\sum_{\substack{0\le m\le kn\\m\equiv p\pmod{k}}}
\binom{kn}{m}.
$$

将式 (1) 代入，并利用二项式定理交换两个有限求和次序，得到

$$
\begin{aligned}
S_{n,p}
&=\frac1k\sum_{j=0}^{k-1}\zeta^{-jp}
\sum_{m=0}^{kn}\binom{kn}{m}\zeta^{jm}\\
&=\frac1k\sum_{j=0}^{k-1}\zeta^{-jp}(1+\zeta^j)^{kn}.
\end{aligned}
\qquad\text{(2)}
$$

当 $j=0$ 时，式 (2) 的相应项恰为 $2^{kn}/k$。当 $1\le j\le k-1$ 时，

$$
\frac{|1+\zeta^j|}{2}
=\left|\cos\frac{\pi j}{k}\right|<1.
$$

令

$$
\rho=\max_{1\le j\le k-1}
\left|\cos\frac{\pi j}{k}\right|<1.
$$

由三角不等式和 $|\zeta^{-jp}|=1$，得到定量估计

$$
\left|\frac{S_{n,p}}{2^{kn}}-\frac1k\right|
\le\frac{k-1}{k}\rho^{kn}
\longrightarrow0.
\qquad\text{(3)}
$$

原题分子记为 $A_{n,p}$。逐项核对可知

$$
S_{n,p}-A_{n,p}
=
\begin{cases}
1,&p=0,\\
0,&1\le p\le k-1.
\end{cases}
$$

故 $|S_{n,p}-A_{n,p}|/2^{kn}\le2^{-kn}\to0$。结合式 (3) 即得

$$
\boxed{\lim_{n\to\infty}\frac{A_{n,p}}{2^{kn}}=\frac1k.}
$$

**方法提炼：**关键是**单位根筛法**：有限 Fourier 正交关系将“下标同余”变为几何级数，二项式定理再把求和化为 $(1+\zeta^j)^{kn}$。所有非平凡频率的模均严格小于 $2^{kn}$，因此不同剩余类渐近均分。证明仅使用复数的初等运算与有限求和，不使用复分析。

[返回题号导航](#题号导航)

## 问题 B24

**原题号：习题 2.2.B 第 1 题（Toeplitz 定理）。**

**题目：**设下三角数表 $(t_{nm})_{1\le m\le n}$ 满足：

1. 对每个固定 $m$，$\lim_{n\to\infty}t_{nm}=0$；
2. 存在与 $n$ 无关的 $K<+\infty$，使 $\sum_{m=1}^n|t_{nm}|\le K$。

令 $y_n=\sum_{m=1}^nt_{nm}x_m$。证明：

(i) 若 $x_n\to0$，则 $y_n\to0$。

(ii) 若 $T_n=\sum_{m=1}^nt_{nm}\to1$ 且 $x_n\to a$（有限），则 $y_n\to a$。

**证明：**先证明 (i)。任取 $\varepsilon>0$。由于 $x_m\to0$，存在正整数 $N$，使所有 $m\ge N$ 都有 $|x_m|<\varepsilon$。对 $n\ge N$，将求和分成有限首段和无限尾段：

$$
\begin{aligned}
|y_n|
&\le\sum_{m=1}^{N-1}|t_{nm}|\,|x_m|
+\sum_{m=N}^n|t_{nm}|\,|x_m|\\
&\le\sum_{m=1}^{N-1}|t_{nm}|\,|x_m|
+K\varepsilon.
\end{aligned}
\qquad\text{(1)}
$$

这里 $N$ 已固定。对每个 $1\le m<N$，条件 1 表明 $t_{nm}\to0$，而首段只有有限项，因此

$$
\lim_{n\to\infty}
\sum_{m=1}^{N-1}|t_{nm}|\,|x_m|=0.
$$

由式 (1) 得 $\limsup_{n\to\infty}|y_n|\le K\varepsilon$。因为 $\varepsilon>0$ 任意，

$$
\boxed{y_n\to0.}
$$

再证明 (ii)。令 $r_m=x_m-a$，则 $r_m\to0$，且

$$
\begin{aligned}
y_n
&=\sum_{m=1}^nt_{nm}(a+r_m)\\
&=aT_n+\sum_{m=1}^nt_{nm}r_m.
\end{aligned}
$$

第一项由 $T_n\to1$ 趋于 $a$；第二项由刚证的 (i) 趋于 $0$。故

$$
\boxed{y_n\longrightarrow a.}
$$

**方法提炼：**统一有界的行绝对值和负责控制**尾部小量**；固定列趋零负责消去**有限首段**。非零极限情形只需写成 $x_m=a+(x_m-a)$，再利用行和归一条件。这是后续各种求和法和 Stolz 型极限的共同基础。

[返回题号导航](#题号导航)

## 问题 B25

**原题号：习题 2.2.B 第 2 题。**

**题目：**考察 Stolz 定理与 Toeplitz 定理的关系。

**解：**二者都研究“原数列的极限经过加权运算后能否保持”。**Stolz 定理的通常有限极限形式可以直接由 Toeplitz 定理推出**，而 Toeplitz 定理允许的权重更一般。

设 $\{b_n\}$ 严格递增且 $b_n\to+\infty$，并假设

$$
\frac{a_n-a_{n-1}}{b_n-b_{n-1}}
\longrightarrow L\in\mathbb R.
\qquad\text{(1)}
$$

令

$$
x_m=\frac{a_m-a_{m-1}}{b_m-b_{m-1}}
\quad(m\ge2),\qquad
t_{nm}=\frac{b_m-b_{m-1}}{b_n-b_1}
\quad(2\le m\le n).
$$

由于 $b_m-b_{m-1}>0$，对于 $n\ge2$，

$$
\sum_{m=2}^nt_{nm}=1,\qquad
\sum_{m=2}^n|t_{nm}|=1.
$$

对任何固定 $m\ge2$，因 $b_n-b_1\to+\infty$，有 $t_{nm}\to0$。因此这些系数满足 Toeplitz 定理的三个条件：固定列趋零、行绝对值和一致有界、行和趋于 $1$。由有限差分求和，

$$
\begin{aligned}
\frac{a_n-a_1}{b_n-b_1}
&=\frac{\sum_{m=2}^n(a_m-a_{m-1})}
{\sum_{m=2}^n(b_m-b_{m-1})}\\
&=\sum_{m=2}^nt_{nm}x_m
\longrightarrow L.
\end{aligned}
\qquad\text{(2)}
$$

这里将下标从 $2$ 开始不影响 Toeplitz 定理；也可在原下三角数表中补一列零系数。

最后，由

$$
\frac{a_n}{b_n}
=\frac{b_n-b_1}{b_n}
\frac{a_n-a_1}{b_n-b_1}
+\frac{a_1}{b_n},
$$

以及 $(b_n-b_1)/b_n\to1$、$a_1/b_n\to0$，得到

$$
\boxed{\lim_{n\to\infty}\frac{a_n}{b_n}=L.}
$$

这就是 Stolz 定理的有限极限形式。对于式 (1) 的极限为 $+\infty$ 或 $-\infty$ 的情形，利用上述非负且行和为 $1$ 的权重，按任意给定的大常数作下界或上界估计，同样可推出相应的无穷极限。

反向比较时，应注意：普通 Stolz 的权重来自递增分母的正增量，因此必为非负；而 Toeplitz 定理**不要求权重非负**。例如，对 $n\ge2$ 令

$$
t_{n,n}=2,\qquad t_{n,n-1}=-1,
\qquad t_{nm}=0\quad(1\le m<n-1),
$$

并取 $t_{11}=1$。此数表各固定列最终为零、行绝对值和至多为 $3$、行和恒为 $1$；Toeplitz 定理说明

$$
x_n\to a\quad\Longrightarrow\quad
2x_n-x_{n-1}\to a.
$$

这样的带负权重数表不能直接视为上述 Stolz 正增量权重。因此，**Stolz 定理是 Toeplitz 加权平均原理的一个重要特例，而 Toeplitz 定理的适用范围更广。**

**方法提炼：**把商的分子和分母同时拆成增量，便得到

$$
\frac{\sum\Delta a_m}{\sum\Delta b_m}
=\sum_m
\frac{\Delta b_m}{\sum\Delta b_j}
\frac{\Delta a_m}{\Delta b_m}.
$$

这里的 $\Delta b_m/\sum\Delta b_j$ 自动成为总和为 $1$ 的非负权重。由此可以从“差商的极限”通过 Toeplitz 定理推出“总商的极限”，也揭示 Stolz 的证明本质。

[返回题号导航](#题号导航)

## 问题 B26

**原题号：习题 2.3.B 第 1 题。**

**题目：**设 $E\subseteq\mathbb R^n$。证明：存在 $E$ 的至多可列子集 $F$，使得 $\overline F\supseteq E$。

**证明：**若 $E=\varnothing$，取 $F=\varnothing$ 即可。以下设 $E\ne\varnothing$。

考虑所有中心属于 $\mathbb Q^n$、半径为正有理数的开球

$$
\mathcal B=
\left\{B(q,r):q\in\mathbb Q^n,\
r\in\mathbb Q,\ r>0\right\}.
$$

因为 $\mathbb Q^n$ 与 $\mathbb Q_{>0}$ 都可列，所以 $\mathcal B$ 至多可列。对于每个满足 $B\cap E\ne\varnothing$ 的 $B\in\mathcal B$，从 $B\cap E$ 中选取一点 $x_B$，令

$$
F=\{x_B:B\in\mathcal B,\ B\cap E\ne\varnothing\}.
$$

显然 $F\subseteq E$，且 $F$ 至多可列。

任取 $x\in E$ 和 $\varepsilon>0$。由有理点的稠密性，可取 $q\in\mathbb Q^n$ 使 $|q-x|<\varepsilon/3$，再取正有理数 $r$ 使

$$
|q-x|<r<\varepsilon-|q-x|.
$$

于是

$$
x\in B(q,r)\subseteq B(x,\varepsilon).
$$

该有理球与 $E$ 相交，因此所选 $x_{B(q,r)}$ 存在，且属于 $F\cap B(x,\varepsilon)$。这表明 $x$ 的任意邻域都与 $F$ 相交，故 $x\in\overline F$。

由于 $x\in E$ 任意，得到

$$
\boxed{F\subseteq E\subseteq\overline F.}
$$

因而还成立 $\overline F=\overline E$。

**方法提炼：**用**可数拓扑基**代替“为 $E$ 中每一点各选一个逼近数列”。每个与 $E$ 相交的有理开球只选一个点，得到的集合既可列又在 $E$ 中稠密。这说明 $\mathbb R^n$ 的任意子空间都是可分的；关键在于欧氏空间存在可数基。

[返回题号导航](#题号导航)

## 问题 B27

**原题号：习题 2.3.B 第 2 题。**

**题目：**设 $E$ 是 $\mathbb R^n$ 中的闭集，证明存在集合 $F$ 使得其导集 $F'=E$。

**证明：**若 $E=\varnothing$，取 $F=\varnothing$。以下设 $E$ 非空，且 $n\ge1$。关键是让 $E$ 中的**孤立点也成为 $F$ 的聚点**，同时保证新增点在 $E$ 外不产生额外聚点。

对每个正整数 $m$，把有界立方体 $[-m,m]^n$ 用边长不超过 $1/m$ 的有限多个闭小立方体覆盖。对其中每个与 $E$ 相交的小立方体，选择一个 $E$ 中的点，所有选出点构成有限集合 $D_m\subseteq E$。由构造可知，对每个 $x\in E\cap[-m,m]^n$，存在 $d_m\in D_m$ 使

$$
|x-d_m|\le\frac{\sqrt n}{m}.
\qquad\text{(1)}
$$

记 $e_1=(1,0,\ldots,0)$，定义

$$
\boxed{
F=E\cup\bigcup_{m=1}^{\infty}
\left\{d+\frac1m e_1:d\in D_m\right\}.
}
\qquad\text{(2)}
$$

先证明 $F'\subseteq E$。任取 $x\notin E$。由于 $E$ 闭，存在 $\delta>0$ 使 $B(x,\delta)\cap E=\varnothing$。式 (2) 中第 $m$ 层新增点到 $E$ 的距离至多为 $1/m$。若 $m>2/\delta$，这样的点不可能位于 $B(x,\delta/2)$，否则其到 $E$ 的距离将大于 $\delta/2$。因此 $B(x,\delta/2)$ 中最多出现**有限多个低层新增点**，且没有 $E$ 中的点。缩小邻域以排除这些有限点中除 $x$ 以外的点，便得到 $x$ 不是 $F$ 的聚点。故 $F'\subseteq E$。

再证明 $E\subseteq F'$。任取 $x\in E$。

若 $x$ 是 $E$ 的聚点，由 $E\subseteq F$ 立即得到 $x\in F'$。

若 $x$ 是 $E$ 的孤立点，则存在 $\delta>0$ 使 $B(x,\delta)\cap E=\{x\}$。当 $m$ 足够大时，$x\in[-m,m]^n$ 且 $\sqrt n/m<\delta$。根据式 (1)，所选近点 $d_m$ 必须等于 $x$。于是

$$
x+\frac1m e_1\in F,\qquad
x+\frac1m e_1\ne x,\qquad
x+\frac1m e_1\longrightarrow x.
$$

所以 $x$ 也是 $F$ 的聚点。

两种情形穷尽 $x\in E$，因此 $E\subseteq F'$。综上，

$$
\boxed{F'=E.}
$$

**方法提炼：**导集始终为闭集；本题证明了逆命题，即**欧氏空间中每个闭集都可表示为某个集合的导集**。证明不能简单取 $F=E$，因为 $E$ 可能含孤立点。采用“每层有限的网格近点 + 距离 $E$ 趋于零的扰动”既能补足孤立点，又防止在 $E$ 外产生新聚点。

[返回题号导航](#题号导航)

## 问题 B28

**原题号：习题 2.3.B 第 3 题。**

**题目：**原书给出四类集合 $E^\circ$（内部）、$E'$（导集）、$\partial E$（边界）、$\overline E$（闭包）再分别取内部、导集、边界、闭包后的十六条关系。证明全部关系；对出现包含号而非等号的关系，分别给出取等与真包含的例子，并进一步寻找其他恒等式。

**证明：**以下设 $E\subseteq\mathbb R^n$，$n\ge1$；记 $E^c=\mathbb R^n\setminus E$，上划线表示闭包，撇号表示导集。先列出原题的全部关系，再给出统一证明与严格性辨析。

### 十六条关系

**第一行：对 $E^\circ$ 施加四种运算。**

$$
\begin{aligned}
(E^\circ)^\circ&=E^\circ,\\
(E^\circ)'&=\overline{E^\circ},\\
\partial(E^\circ)&\subseteq\partial E\cap E',\\
\overline{E^\circ}&\subseteq E'.
\end{aligned}
\qquad\text{(1)}
$$

**第二行：对 $E'$ 施加四种运算。**

$$
\begin{aligned}
(E')^\circ&=(\overline E)^\circ\supseteq E^\circ,\\
(E')'&\subseteq E',\\
\partial(E')&\subseteq\partial E\cap E',\\
\overline{E'}&=E'.
\end{aligned}
\qquad\text{(2)}
$$

**第三行：对 $\partial E$ 施加四种运算。**

$$
\begin{aligned}
(\partial E)^\circ
&=(\overline E\cap\overline{E^c})^\circ,\\
(\partial E)'&\subseteq\partial E\cap E',\\
\partial(\partial E)&\subseteq\partial E,\\
\overline{\partial E}&=\partial E.
\end{aligned}
\qquad\text{(3)}
$$

**第四行：对 $\overline E$ 施加四种运算。**

$$
\begin{aligned}
(\overline E)^\circ&\supseteq E^\circ,\\
(\overline E)'&=E',\\
\partial(\overline E)&\subseteq\partial E,\\
\overline{\overline E}&=\overline E.
\end{aligned}
\qquad\text{(4)}
$$

### 两条核心事实

首先，**任何集合的导集都是闭集**。若 $x\notin E'$，则存在 $r>0$，使 $B(x,r)\setminus\{x\}$ 与 $E$ 不相交。对 $y\in B(x,r/2)$ 且 $y\ne x$，可在 $y$ 周围选择一个足够小、同时避开 $x$ 并包含于 $B(x,r)$ 的开球；该球与 $E$ 不相交，所以 $y\notin E'$。连同 $x\notin E'$，得到 $B(x,r/2)\cap E'=\varnothing$。故 $E'$ 的补集开，$E'$ 闭。

其次，有基本恒等式

$$
\boxed{(\overline E)'=E'.}
\qquad\text{(5)}
$$

一方面，$E\subseteq\overline E$ 蕴含 $E'\subseteq(\overline E)'$。另一方面，若 $x\in(\overline E)'$，任给 $\varepsilon>0$，存在 $y\in\overline E\setminus\{x\}$ 且 $|y-x|<\varepsilon/2$。由 $y\in\overline E$，可选 $z\in E$ 使

$$
|z-y|<\min\left\{
\frac{|y-x|}{2},\frac{\varepsilon}{2}
\right\}.
$$

于是 $z\ne x$ 且 $|z-x|<\varepsilon$，所以 $x\in E'$。式 (5) 得证。

对任意非空开集 $U\subseteq\mathbb R^n$，其每一点均为 $U$ 的聚点；结合 $U'$ 的闭性，可知

$$
\boxed{U'=\overline U}
. 
\qquad\text{(6)}
$$

最后，由 $E\subseteq\overline E$ 可知

$$
E^\circ\subseteq(E')^\circ\subseteq(\overline E)^\circ.
$$

反过来，若 $x\in(\overline E)^\circ$，则 $x$ 的一个开球全部包含于 $\overline E$。该开球中的每个点都可以在任意小的穿孔邻域内找到 $E$ 中的点，故该开球包含于 $E'$。因此

$$
\boxed{(E')^\circ=(\overline E)^\circ.}
\qquad\text{(7)}
$$

### 逐行验证

对式 (1)：内部本来就是开集，因而取内部不变；由式 (6)，

$$
(E^\circ)'=\overline{E^\circ}\subseteq E',
$$

最后一个包含号是因为 $E^\circ\subseteq E$，从而其导集包含于 $E'$。利用

$$
\partial A=\overline A\setminus A^\circ
\qquad(A\subseteq\mathbb R^n),
\qquad\text{(8)}
$$

且 $E^\circ$ 开，有

$$
\partial(E^\circ)
=\overline{E^\circ}\setminus E^\circ
\subseteq E'\cap(\overline E\setminus E^\circ)
=E'\cap\partial E.
$$

对式 (2)：第一式是式 (7)，且 $E^\circ\subseteq(\overline E)^\circ$。由于 $E'$ 闭，有 $(E')'\subseteq\overline{E'}=E'$，并且

$$
\partial(E')
=E'\setminus(E')^\circ
\subseteq\overline E\setminus E^\circ
=\partial E.
$$

与 $\partial(E')\subseteq E'$ 合并，得到该行第三式；闭性亦给出最后一式。

对式 (3)：边界的基本恒等式为

$$
\partial E=\overline E\cap\overline{E^c}.
\qquad\text{(9)}
$$

两侧取内部即得第一式。由于 $\partial E$ 是两个闭集的交，必为闭集，所以

$$
\overline{\partial E}=\partial E,\qquad
\partial(\partial E)\subseteq\partial E.
$$

又由 $\partial E\subseteq\overline E$ 与式 (5)，

$$
(\partial E)'\subseteq(\overline E)'=E'.
$$

同时 $(\partial E)'\subseteq\overline{\partial E}=\partial E$，故得到第二式。

对式 (4)：$E^\circ\subseteq(\overline E)^\circ$ 由集合包含关系立即得到；第二式已由式 (5) 证明，第四式是闭包的幂等性。利用式 (8)，

$$
\partial(\overline E)
=\overline E\setminus(\overline E)^\circ
\subseteq\overline E\setminus E^\circ
=\partial E.
$$

因此十六条关系全部得到证明。

### 九个包含关系何时取等

下表的例子均取自 $\mathbb R$；$\mathbb Q$ 表示全体有理数。每行分别给出一个**取等**和一个**真包含**的实例，因此说明原书的包含号一般不能改写为等号。

| 包含关系 | 取等的 $E$ | 真包含的 $E$ |
| --- | --- | --- |
| $\partial(E^\circ)\subseteq\partial E\cap E'$ | $(0,1)$ | $\mathbb Q$ |
| $\overline{E^\circ}\subseteq E'$ | $(0,1)$ | $\mathbb Q$ |
| $(E')^\circ\supseteq E^\circ$ | $(0,1)$ | $\mathbb Q$ |
| $(E')'\subseteq E'$ | $(0,1)$ | $\{0\}\cup\{1/n:n\ge1\}$ |
| $\partial(E')\subseteq\partial E\cap E'$ | $(0,1)$ | $\mathbb Q$ |
| $(\partial E)'\subseteq\partial E\cap E'$ | $\mathbb Q$ | $(0,1)$ |
| $\partial(\partial E)\subseteq\partial E$ | $(0,1)$ | $\mathbb Q$ |
| $(\overline E)^\circ\supseteq E^\circ$ | $(0,1)$ | $\mathbb Q$ |
| $\partial(\overline E)\subseteq\partial E$ | $(0,1)$ | $\mathbb Q$ |

为核对上表，只需计算三个典型集合：

**(a) $E=(0,1)$：**

$$
E^\circ=(0,1),\qquad
E'=\overline E=[0,1],\qquad
\partial E=\{0,1\}.
$$

又有 $(E')'=[0,1]$、$(\partial E)'=\varnothing$、$\partial(\partial E)=\{0,1\}$。代入各行，可核实所标注的取等或真包含情况。

**(b) $E=\mathbb Q$：**

$$
E^\circ=\varnothing,\qquad
E'=\overline E=\partial E=\mathbb R.
$$

因此例如

$$
\partial(E^\circ)=\varnothing
\subsetneq\mathbb R=\partial E\cap E',
$$

以及

$$
\partial(E')=\varnothing
\subsetneq\mathbb R=\partial E\cap E'.
$$

但 $(\partial E)'=\mathbb R=\partial E\cap E'$，故该例也用于第六行的取等。

**(c) $E=\{0\}\cup\{1/n:n\ge1\}$：**

$$
E'=\{0\},\qquad (E')'=\varnothing,
$$

所以 $(E')'\subsetneq E'$。

### 进一步的恒等式及理解

除原表外，还可以统一得到

$$
\boxed{
\begin{aligned}
\overline E&=E\cup E',\\
\partial E&=\partial(E^c),\\
E^\circ&=\bigl(\overline{E^c}\bigr)^c,\\
\partial E&=\overline E\setminus E^\circ,\\
(\overline E)'&=E'.
\end{aligned}
}
$$

其中 $\overline E=E\cup E'$ 可由闭包的定义直接证明：闭包中的点若不属于 $E$，其每个邻域仍与 $E$ 相交，且交点必异于该点，所以该点属于 $E'$。其余各式分别来自内部、闭包和边界的定义及式 (5)。

**方法提炼：**十六个结论不宜逐格机械记忆。先掌握三条结构性事实——**导集闭、开集的导集等于其闭包、闭包不改变导集**——再结合 $\partial E=\overline E\setminus E^\circ$ 与集合包含的单调性，即可统一推出所有结果。要检验能否把包含号改为等号，可优先使用开区间、有理数集和单聚点集合三类反例。

[返回题号导航](#题号导航)

## 七题方法总结

| 编号 | 原题号 | 核心结论 | 主要方法 |
| --- | --- | --- | --- |
| B22 | 2.1.B-1 | 零数列当且仅当能被下降至零的正数列控制 | 尾部上确界与 $1/n$ 严格化 |
| B23 | 2.1.B-2 | 同余类二项式系数和占总和的渐近比例为 $1/k$ | 单位根筛、有限 Fourier 正交性、指数衰减 |
| B24 | 2.2.B-1 | Toeplitz 加权求和保留零极限与有限极限 | 有限首段与小尾项拆分、行和归一 |
| B25 | 2.2.B-2 | Stolz 有限极限定理可由 Toeplitz 推出 | 差分求和、权重归一化 |
| B26 | 2.3.B-1 | 任意 $E\subseteq\mathbb R^n$ 有可数稠密子集 | 有理开球构成可数基 |
| B27 | 2.3.B-2 | 任意闭集是某个集合的导集 | 有限网格逼近、孤立点的聚点化 |
| B28 | 2.3.B-3 | 内部、导集、边界、闭包之间的十六条关系 | 导集闭性、闭包导集恒等式、典型反例 |

本批由**数列极限的精细控制**逐步过渡到**欧氏空间的基本拓扑结构**：前四题的共同思想是把极限放入适当的上界或加权结构中；后三题则利用可数基、有限网格和闭包—导集恒等式刻画点集的结构。

**原题依据：**楼红卫《数学分析》上册（2022），《楼分析习题-v1.pdf》第 7—9 页，习题 2.1.B 第 1—2 题、2.2.B 第 1—2 题、2.3.B 第 1—3 题。题干与原题号逐一核对；推导和方法提炼为独立整理。

**下一批起点：习题 2.3.B 第 4 题**，继续每批连续七道，不穿插 A 组。
