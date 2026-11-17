---
title: "第一章习题与复习题"
description: "徐森林、薛春华《实变函数论》第一章，收录 65 道节后练习与 25 道复习题原题。"
subject: "实变函数"
category: "real-functions/chapter-1"
tags: ["实变函数", "复习题", "习题原题"]
created_at: "2026-11-16"
updated_at: "2026-11-17"
---

徐森林、薛春华《实变函数论》第一章，收录 65 道节后练习与 25 道复习题原题。

[练习题 1.1](#练习题-11) · [练习题 1.2](#练习题-12) · [练习题 1.3](#练习题-13) · [练习题 1.4](#练习题-14) · [练习题 1.5](#练习题-15) · [练习题 1.6](#练习题-16) · [复习题 1](#复习题-1)

## 练习题 1.1

教材第 15–17 页

**1.** 证明：de Morgan 公式中的第 1 式

$$
X-\bigcup_{\alpha\in\Gamma}A_\alpha=\bigcap_{\alpha\in\Gamma}(X-A_\alpha).
$$

**2.** 设 $\{A_\alpha\}\;(\alpha=1,2,\cdots)$ 为一集列。

（1）令 $B_1=A_1$，$B_n=A_n-\bigcup_{i=1}^{n-1}A_i\ (n\geq 2)$。证明：$\{B_n\}\;(n=1,2,\cdots)$ 为一个彼此不相交的集列，并且

$$
\begin{gathered}
\bigcup_{i=1}^n A_i=\bigcup_{i=1}^n B_i,\quad n=1,2,\cdots; \\
\bigcup_{i=1}^\infty A_i=\bigcup_{i=1}^\infty B_i.
\end{gathered}
$$

（2）如果 $\{A_n\}\;(n=1,2,\cdots)$ 为单调减（即 $A_1\supset A_2\supset\cdots\supset A_n\supset\cdots$）的集列，证明：

$$
\begin{aligned}
A_1={}&(A_1-A_2)\cup(A_2-A_3) \\
&{}\cup\cdots\cup(A_n-A_{n+1}) \\
&{}\cup\cdots\cup\left(\bigcap_{i=1}^\infty A_i\right),
\end{aligned}
$$

并且其中各项互不相交。

**3.** 设 $\{A_n\}$ 和 $\{B_n\}\;(n=1,2,\cdots)$ 为两个集列。

（1）证明：$\bigcup_{n=1}^\infty(A_n\cap B_n)$ ${}\subset\left(\bigcup_{n=1}^\infty A_n\right)\cap\left(\bigcup_{n=1}^\infty B_n\right)$。

（2）举例说明：$\bigcup_{n=1}^\infty(A_n\cap B_n)$ ${}\not\supset\left(\bigcup_{n=1}^\infty A_n\right)\cap\left(\bigcup_{n=1}^\infty B_n\right)$。

（3）如果 $\{A_n\}$ 和 $\{B_n\}\;(n=1,2,\cdots)$ 都是单调增的集列，证明：

$\displaystyle \bigcup_{n=1}^\infty(A_n\cap B_n)$ $\displaystyle {}=\left(\bigcup_{n=1}^\infty A_n\right)\cap\left(\bigcup_{n=1}^\infty B_n\right).$

**4.** 设 $A,B,E$ 为全集 $X$ 中的子集，证明：

$\displaystyle B=(E\cap A)^c\cap(E^c\cup A)$ $\displaystyle {}\Leftrightarrow B^c=E.$

**5.** 设 $A_{2n-1}=\left(0,\frac1n\right)$，$A_{2n}=(0,n)$，$n=1,2,\cdots$，求 $\varlimsup_{n\to+\infty} A_n$ 和 $\varliminf_{n\to+\infty} A_n$。

**6.** 设 $f(x)$ 为 $E$ 上的一个实函数，$c$ 为任何实数，

$$
\begin{aligned}
E(f>c)&=\{x\in E\mid f(x)>c\}, \\
E(f\leq c)&=\{x\in E\mid f(x)\leq c\},
\end{aligned}
$$

其他记法类推。证明：

（1）$E(f>c)\cup E(f\leq c)=E$。

（2）$E(f\geq c)$ ${}=E(f>c)\cup E(f=c)$。

（3）当 $c<d$ 时，$E(f>c)\cap E(f\leq d)$ ${}=E(c<f\leq d)$。

（4）当 $c\geq0$ 时，$E(f^2>c)$ ${}=E(f>\sqrt c)\cup E(f<-\sqrt c)$。

（5）当 $f\geq g$ 时，$E(f>c)\supset E(g>c)$。

（6）$E(f\geq c)$ ${}=\bigcup_{n=1}^\infty E(c\leq f<c+n)$。

（7）$E(f<c)$ ${}=\bigcup_{n=1}^\infty E\left(f\leq c-\frac1n\right)$。

**7.** 设 $\{f_n\}\;(n=1,2,\cdots)$ 为 $E$ 上的实函数列，且单调增，即

$$
\begin{gathered}
f_1(x)\leq f_2(x)\leq\cdots \\
{}\leq f_n(x)\leq\cdots,\quad \forall x\in E,
\end{gathered}
$$

并且 $\lim_{n\to+\infty}f_n(x)=f(x)$。证明：对任何实数 $c$，

（1）$E(f>c)$ ${}=\bigcup_{n=1}^\infty E(f_n>c)$ ${}=\lim_{n\to+\infty}E(f_n>c)$。

（2）$E(f\leq c)$ ${}=\bigcap_{n=1}^\infty E(f_n\leq c)$ ${}=\lim_{n\to+\infty}E(f_n\leq c)$。

**8.** 设 $\{f_i(\boldsymbol{x})\}\;(i=1,2,\cdots)$ 为定义在 $\mathbb R^n$ 上的实函数列，试用点集

$$
\begin{gathered}
\left\{\boldsymbol{x}\in\mathbb R^n\ \bigg|\ f_i(\boldsymbol{x})\geq\frac1j\right\}, \\
i,j=1,2,\cdots
\end{gathered}
$$

表示点集 $\left\{\boldsymbol{x}\in\mathbb R^n\mid\varlimsup_{i\to+\infty}f_i(\boldsymbol{x})>0\right\}$。

**9.** 设 $f:X\to Y,A\subset X,B\subset Y$。试问：下列等式成立吗？并说明理由。

（1）$f^{-1}(Y-B)$ ${}=f^{-1}(Y)-f^{-1}(B)$。

（2）$f(X-A)=f(X)-f(A)$。

**10.** 设 $X$ 为固定的集合，$A\subset X,\chi_A(x)$ 为集合 $A$ 的特征函数。证明：

（1）$A=X\Leftrightarrow\chi_A(x)\equiv1$；$A=\varnothing\Leftrightarrow\chi_A(x)\equiv0$。

（2）$A\subset B\Leftrightarrow\chi_A(x)\leq\chi_B(x)$，$\forall x\in X$；$A=B\Leftrightarrow\chi_A(x)=\chi_B(x)$，$\forall x\in X$。

（3）$\chi_{\bigcup_{\alpha\in\Gamma}A_\alpha}(x)=\max_{\alpha\in\Gamma}\chi_{A_\alpha}(x)$；$\chi_{\bigcap_{\alpha\in\Gamma}A_\alpha}(x)=\min_{\alpha\in\Gamma}\chi_{A_\alpha}(x)$。

（4）设 $\{A_n\}\;(n=1,2,\cdots)$ 为一集列，则 $\lim_{n\to+\infty}A_n$ 存在 $\Leftrightarrow\lim_{n\to+\infty}\chi_{A_n}(x)$ 存在。而且当极限存在时，有

$$
\chi_{\lim_{n\to+\infty}A_n}(x)=\lim_{n\to+\infty}\chi_{A_n}(x).
$$

**11.** 设 $\{f_n\}\;(n=1,2,\cdots)$ 为定义在 $[a,b]$ 上的实函数列，$E\subset[a,b]$，且有

$$
\lim_{n\to+\infty} f_n(x)=\chi_{[a,b]-E}(x).
$$

若令 $E_n=\left\{x\in[a,b]\mid f_n(x)\geq\frac12\right\}$，求集合 $\lim_{n\to+\infty}E_n$。

## 练习题 1.2

教材第 41–42 页

**1.** 设 $A,B,C$ 为集合。证明：

（1）若 $A-B\sim B-A$，则 $A\sim B$。

（2）若 $A\subset B$，且 $A\sim(A\cup C)$，则 $B\sim B\cup C$。

**2.** （1）作 $\mathbb R-\mathbb Q$ 与 $\mathbb R$ 之间的一一映射。

（2）作 $(0,1]\times(0,1]$ 与 $(0,1]$ 之间的一一映射。

**3.** 证明：

（1）任一可数集的所有有限子集全体为可数集（对照例 1.2.9）。

（2）$g$ 进制有限小数全体为可数集。无限循环小数全体也为可数集。

（3）对于有理数，施行 $+,-,\times,\div,\sqrt{\phantom{x}},\sqrt[3]{\phantom{x}},\cdots,\sqrt[n]{\phantom{x}},\cdots$ 有限次运算所得到的一切数的全体为可数集。

（4）$\mathbb R^n$ 中以有理点（即坐标都为有理数的点）为中心、以正有理数为半径的圆的全体为可数集。

**4.** 设 $a_0,a_1,\cdots,a_n\in\mathbb Z,a_n\ne0$。如果复数 $z\in\mathbb C$ 为整系数代数方程

$\displaystyle a_nz^n+a_{n-1}z^{n-1}+\cdots$ $\displaystyle {}+a_1z+a_0=0$

的根，则称 $z$ 为**代数数**。$\mathbb C$ 中非代数数称为**超越数**。证明：代数数全体为可数集；超越数全体的势为 $\aleph$。

**5.** 设 $E\subset\mathbb R$，证明：集合

$$
\begin{gathered}
A=\{x=(x_1,x_2,\cdots,x_n,\cdots) \\
{}\in\mathbb R^\infty\mid x_n\in E,n=1,2,\cdots\}
\end{gathered}
$$

的势 $\overline{\overline A}\leq\aleph$。

**6.** 证明：不存在集合 $A$，使得 $2^A$ 为可数集。

**7.** 设 $A$ 为非独点集的集合，$A\times A\sim A$。如果 $\overline{\overline B}\leq\overline{\overline A}$，证明：$A\cup B\sim A$。如果 $A$ 为独点集时，讨论 $A\cup B\sim A$ 是否成立？

**8.** 设 $\mathcal L=\{l\mid l$ 为 $\mathbb R^2$ 中的直线，如果 $(x,y)\in l$，且 $x\in\mathbb Q$，则必有 $y\in\mathbb Q\}$。证明：$\overline{\overline{\mathcal L}}=\aleph$。

**9.** 证明：$[a,b]$ 区间上右连续的单调函数的全体的势为 $\aleph$。又 $[a,b]$ 区间上单调函数的势如何？

## 练习题 1.3

教材第 49–50 页

**1.** 设 $X$ 为集合，$\mathcal E$ 为 $X$ 上的非空集类。在下列各种情况下分别求出 $\mathcal R(\mathcal E),\mathcal A(\mathcal E)$：

（1）$\mathcal E=\{E_1,E_2,\cdots,E_n\}$。

（2）$X=\mathbb R^1$（实数直线），$\mathcal E=\{(a,b)\mid{}$ $-\infty<a<b<+\infty\}$。

（3）$X=\mathbb R^1$，$\mathcal E=\{(-\infty,a)\mid a\in\mathbb R\}$。

**2.** 设 $\mathcal E=\{(a,b)\mid{}$ $-\infty<a<b<+\infty\}$ 与 $\mathcal R_0=\bigl\{\bigcup_{i=1}^n(a_i,b_i]\mid{}$ $-\infty<a_i\leq b_i<+\infty,$ $n\in\mathbb N\bigr\}$ 为 $\mathbb R^1$ 上的两个集类。证明：分别由 $\mathcal E$ 与 $\mathcal R_0$ 张成的 $\sigma$ 环是一致的，

$$
\begin{gathered}
\mathcal R_\sigma(\mathcal E)=\mathcal R_\sigma(\mathcal R_0)=\mathcal B \\
\text{(Borel 集类)}.
\end{gathered}
$$

**3.** 设 $\mathcal R$ 为集合 $X$ 上的一个非空集类。证明：

（1）$\mathcal R$ 为环 $\Leftrightarrow$（2）$\mathcal R$ 对任意有限个互不相交集的“$\cup$”运算与“$-$”运算封闭 $\Leftrightarrow$（3）$\mathcal R$ 对“$\triangle$”、“$\cap$”、“$-$”运算封闭。

**4.** 设 $\mathcal R$ 为集合 $X$ 上的一个非空集类。证明：

$\mathcal R$ 为代数 $\Leftrightarrow\mathcal R$ 对“$\cup$”、“$\cap$”、“余”运算封闭。

**5.** 设 $X$ 为集合，$A\subset X$。$\mathcal R$ 为 $X$ 上某些子集所成的环。记

$$
\begin{gathered}
\mathcal R\cap A=\{E\cap A\mid E\in\mathcal R\}, \\
\mathcal R_\sigma(\mathcal R)\cap A= \\
\{E\cap A\mid E\in\mathcal R_\sigma(\mathcal R)\}.
\end{gathered}
$$

证明：$\mathcal R_\sigma(\mathcal R)\cap A=\mathcal R_\sigma(\mathcal R\cap A)$。

当 $\mathcal R$ 为代数或 $A\in\mathcal R$ 时，$\mathcal R_\sigma(\mathcal R)\cap A$ 为 $A$ 上的 $\sigma$ 代数。

**6.** 设 $X$ 为集合，$\mathcal R$ 与 $\mathcal M$ 都为 $X$ 上的环，且有：

（1）$\mathcal M\supset\mathcal R$；

（2）当 $E_1,E_2,\cdots,E_n,\cdots$ 为 $\mathcal M$ 中一列互不相交的元素时，$\bigcup_{n=1}^\infty E_n\in\mathcal M$。

证明：$\mathcal M\supset\mathcal R_\sigma(\mathcal R)$。

**7.** 设 $\mathcal R$ 为 $\mathbb R^1$ 上的一个环，$\mathbb R^2=\{(x,y)\mid x,y\in\mathbb R\}$。对 $\forall E\in\mathcal R$，令

$$
\begin{gathered}
\widetilde E=\{(x,y)\mid x\in E,y\in\mathbb R\}\subset\mathbb R^2, \\
\widetilde{\mathcal R}=\{\widetilde E\mid E\in\mathcal R\}.
\end{gathered}
$$

试求出 $\mathcal R_\sigma(\widetilde{\mathcal R})$ 与 $\mathcal R_\sigma(\mathcal R)$ 的关系。

## 练习题 1.4

教材第 65–67 页

**1.** 设 $E\subset\mathbb R^n$，证明：$E^\circ$ 与 $(E^c)^\circ$ 都为开集，$E$ 的边界 $\partial E=E^{\mathrm b}$ 都为闭集。

**2.** （1）设 $E_i\subset\mathbb R^n,i=1,2,\cdots,k$。证明：$\bigcup_{i=1}^k E_i'=\left(\bigcup_{i=1}^k E_i\right)'$；$\bigcup_{i=1}^k\overline{E_i}=\overline{\bigcup_{i=1}^k E_i}$。

（2）设 $E_i\subset\mathbb R^n,i=1,2,\cdots,k$。证明：

$$
\begin{gathered}
\bigcup_{i=1}^\infty E_i'\subset\left(\bigcup_{i=1}^\infty E_i\right)'; \\
\bigcup_{i=1}^\infty\overline{E_i}\subset\overline{\bigcup_{i=1}^\infty E_i}.
\end{gathered}
$$

进而是否有

$$
\begin{gathered}
\bigcup_{i=1}^\infty E_i'=\left(\bigcup_{i=1}^\infty E_i\right)', \\
\bigcup_{i=1}^\infty\overline{E_i}=\overline{\bigcup_{i=1}^\infty E_i}.
\end{gathered}
$$

**3.** 记 $A^1=A'$，$A^2=(A^1)',\cdots,A^{n+1}=(A^n)'$。试作集合 $A$，使 $A^n\ (n=1,2,\cdots)$ 彼此相异。

**4.** 设 $E\subset\mathbb R^n$ 为孤立点集，证明：$E$ 为至多可数集。

**5.** 证明：$\mathbb R^n$ 中每个闭集为 $G_\delta$ 集；每个开集为 $F_\sigma$ 集。

**6.** 证明：

（1）$\mathbb R^n$ 中完全集（即 $E=E'$）全体所成的集类的势为 $\aleph$。

（2）$\mathbb R^n$ 中紧致集全体所成的集类的势为 $\aleph$。

（3）$\mathbb R^n$ 中孤立点集全体所成的集类的势为 $\aleph$。

（4）$\mathbb R^n$ 中至多可数子集全体所成的集类的势为 $\aleph$。

**7.** 设 $f:\mathbb R^1\to\mathbb R$ 为单调增的函数，证明：点集

$$
\begin{gathered}
E=\{x\mid\text{对 }\forall\delta>0,\text{ 有} \\
f(x+\delta)-f(x-\delta)>0\}
\end{gathered}
$$

为 $\mathbb R^1$ 中的闭集。

**8.** 证明：$F\subset\mathbb R^n$ 为有界闭集 $\Leftrightarrow$ 对 $F$ 的任何无限子集 $E$，必有 $E'\cap F\ne\varnothing$。

**9.** 设 $\{F_\alpha\}$ 为 $\mathbb R^n$ 中有界闭集族，若任取其中有限个 $F_{\alpha_1},F_{\alpha_2},\cdots,F_{\alpha_k}$，都有 $\bigcap_{i=1}^k F_{\alpha_i}\ne\varnothing$。证明：$\bigcap_\alpha F_\alpha\ne\varnothing$。

**10.** 设 $\{F_\alpha\}$ 为 $\mathbb R^n$ 中有界闭集族，$G\subset\mathbb R^n$ 为开集，且有 $\bigcap_\alpha F_\alpha\subset G$。

证明：$\{F_\alpha\}$ 中存在 $F_{\alpha_1},F_{\alpha_2},\cdots,F_{\alpha_k}$，使得 $\bigcap_{i=1}^k F_{\alpha_i}\subset G$。

**11.** 设 $f:\mathbb R^1\to\mathbb R$ 为实函数。证明：

$f$ 为连续函数 $\Leftrightarrow$ 对 $\forall t\in\mathbb R$，点集 $\{x\mid f(x)\leq t\}$ 与 $\{x\mid f(x)\geq t\}$ 都为闭集。

**12.** 设 $f:\mathbb R^1\to\mathbb R$ 为可导函数。证明：

$f'$ 为连续函数 $\Leftrightarrow$ 对 $\forall t\in\mathbb R$，点集 $\{x\in\mathbb R^1\mid f'(x)=t\}$ 为闭集。

**13.** 设 $f_n:\mathbb R^1\to\mathbb R\ (n\in\mathbb N)$ 为连续函数列。证明：

$$
\left\{x\ \bigg|\ \varliminf_{n\to+\infty} f_n(x)>0\right\}
$$

为 $F_\sigma$ 集。

**14.** 设 $f:\mathbb R^1\to\mathbb R$ 为实函数。证明：点集 $\left\{x\mid \lim_{y\to x} f(y)\text{ 存在有限}\right\}$ 为 $G_\delta$ 集。

**15.** 证明：开区间 $(a,b)$ 不能表示为至多可数个两两不相交的闭集之并。

**16.** 设 $G_1,G_2\subset\mathbb R^n$ 为两个不相交的开集。证明：$G_1\cap\overline{G_2}=\varnothing$。

**17.** 设 $G\subset\mathbb R^n$。如果 $\forall E\subset\mathbb R^n$，有 $G\cap\overline E\subset\overline{G\cap E}$。证明：$G$ 为开集。

**18.** 设 $E\subset\mathbb R^n,E\ne\varnothing,\mathbb R^n$。证明：$E$ 的边界 $\partial E\ne\varnothing$。

**19.** 设 $F\subset\mathbb R^1$ 为闭集，$F^c$ 的构成区间（假定都是有限的）中心点的集合为 $E$。证明：$E'\subset F'$。

**20.** 设 $\{F_\alpha\mid\alpha\in\mu\}$ 为 $\mathbb R^n$ 中的闭集族，且对 $\forall\alpha,\beta\in\mu$，有 $F_\alpha\subset F_\beta$ 或 $F_\beta\subset F_\alpha$。证明：$F_0=\bigcup_{\alpha\in\mu}F_\alpha$ 为 $F_\sigma$ 集。

**21.** 设 $G\subset\mathbb R^n$ 为开集。试构造 $\mathbb R^n$ 上的连续函数列 $g_k(\boldsymbol{x})\;(k=1,2,\cdots)$，s.t.

$$
\lim_{k\to+\infty}g_k(\boldsymbol{x})=\chi_G(\boldsymbol{x}),\quad \forall\boldsymbol{x}\in\mathbb R^n.
$$

**22.** 设 $F\subset\mathbb R^n$ 为闭集。试构造 $\mathbb R^n$ 上的连续函数列 $f_k(\boldsymbol{x})\;(k=1,2,\cdots)$，s.t.

$$
\lim_{k\to+\infty}f_k(\boldsymbol{x})=\chi_F(\boldsymbol{x}),\quad \forall\boldsymbol{x}\in\mathbb R^n.
$$

**23.** 设 $E\subset\mathbb R^n$。证明：$\chi_E(\boldsymbol{x})$ 为 $\mathbb R^n$ 上连续函数列的极限 $\Leftrightarrow E$ 同时为 $G_\delta$ 集与 $F_\sigma$ 集。

**24.** 设 $E\subset\mathbb R^1$ 非空，$f(x)$ 为 $E$ 上的实值函数，满足 Lipschitz 条件

$$
\begin{gathered}
|f(x)-f(y)|\leq M|x-y|, \\
x,y\in E.
\end{gathered}
$$

证明：可将 $f(x)$ 延拓到 $\mathbb R^1$，使它满足上述 Lipschitz 条件。

**25.** 设 $E\subset[0,1]$，且 $f$ 在 $E$ 上连续。试构造定义在 $[0,1]$ 上的函数 $g(x)$，以 $E$ 中的点为连续点，且 $g(x)|_{x\in E}=f(x)$。

**26.** 设 $F\subset\mathbb R^1$ 为闭集。试构造 $\mathbb R^1$ 上单调增的函数 $f(x)$，使得 $f\in C^1(\mathbb R^1)$（即 $f$ 为 $\mathbb R^1$ 上的连续可导函数），且 $F=\{x\in\mathbb R^1\mid f'(x)=0\}$。

**27.** 设 $f:\mathbb R^1\to\mathbb R$ 在有理点上取值为无理数，在无理点上取值为有理数。证明：$f$ 不为连续函数。

**28.** 设 $f_i\ (i=1,2,\cdots)$ 为紧致集（即有界闭集）$F\subset\mathbb R^n$ 上的非负连续函数列，且

$$
\begin{gathered}
f_i(\boldsymbol{x})\geq f_j(\boldsymbol{x}), \\
\forall\boldsymbol{x}\in F,\quad i\leq j; \\
\lim_{i\to+\infty}f_i(\boldsymbol{x})=0,\quad \forall\boldsymbol{x}\in F.
\end{gathered}
$$

证明：$\{f_i\}$ 在 $F$ 上一致收敛于 $0$。

**29.** 设 $f$ 在 $[a,b]$ 上为连续函数，$D$ 为 $[a,b]$ 中的可数子集。如果对 $\forall x\in[a,b]-D$，都 $\exists\delta=\delta(x)>0$，s.t. $f(y)>f(x)$，$\forall y\in(x,x+\delta(x))$。证明：$f(x)$ 在 $[a,b]$ 上严格增。

**30.** 设 $f:[a,b]\to\mathbb R$ 为实函数。证明：$f$ 在 $[a,b]$ 上的连续点集全体为 Borel 集。

**31.** 设 $A,B$ 为 $\mathbb R^1$ 中的点集。试证明：$(A\times B)'=(\overline A\times B')\cup(A'\times\overline B)$。

## 练习题 1.5

教材第 80 页

**1.** 证明：不存在满足下列条件的函数 $f(x,y)$：

（1）$f(x,y)$ 为 $\mathbb R^2$ 上的连续函数。

（2）偏导数 $\frac{\partial}{\partial x}f(x,y),\frac{\partial}{\partial y}f(x,y)$ 在 $\mathbb R^2$ 上处处存在有限。

（3）$f(x,y)$ 在 $\mathbb R^2$ 的任一点上都不可微。

**2.** 设 $f(x)$ 为定义在 $[0,1]$ 上的连续函数。令

$$
\begin{gathered}
f_1'(x)=f(x),\quad f_2'(x)=f_1(x), \\
\cdots,\quad f_k'(x)=f_{k-1}(x),\cdots.
\end{gathered}
$$

如果对 $\forall x\in[0,1],\exists k\in\mathbb N$，s.t. $f_k(x)=0$。证明：$f(x)=0,\ \forall x\in[0,1]$。

## 练习题 1.6

教材第 95 页

**1.** 证明：$\mathbb R^n$ 中可数稠密集不为 $G_\delta$ 集。

**2.** 设 $F\subset\mathbb R^n$ 为至多可数的非空闭集。证明：$F$ 必含孤立点。

**3.** 设 $E\subset\mathbb R^n$。证明：

$E$ 为非空闭集 $\Leftrightarrow$ 对 $\forall\boldsymbol{x}\in\mathbb R^n,\ \exists\boldsymbol{y}\in E$，s.t. $\rho(\boldsymbol{x},\boldsymbol{y})=\rho(\boldsymbol{x},E)$。

**4.** 证明：点 $x=\frac14,\frac1{13}$ 属于 Cantor 疏朗集。

**5.** 设 $C$ 为 $[0,1]$ 中的 Cantor 疏朗集。证明：

$\displaystyle C+C=\{x+y\mid x\in C,y\in C\}$ $\displaystyle {}=[0,2].$

## 复习题 1

教材第 95–97 页

题号　[1](#第-1-题) · [2](#第-2-题) · [3](#第-3-题) · [4](#第-4-题) · [5](#第-5-题) · [6](#第-6-题) · [7](#第-7-题) · [8](#第-8-题) · [9](#第-9-题) · [10](#第-10-题) · [11](#第-11-题) · [12](#第-12-题) · [13](#第-13-题) · [14](#第-14-题) · [15](#第-15-题) · [16](#第-16-题) · [17](#第-17-题) · [18](#第-18-题) · [19](#第-19-题) · [20](#第-20-题) · [21](#第-21-题) · [22](#第-22-题) · [23](#第-23-题) · [24](#第-24-题) · [25](#第-25-题)

### 第 1 题

设 $X$ 为无限集，$f:X\to X$ 为映射。证明：存在 $X$ 中的非空真子集 $E$，使 $f(E)\subset E$。

### 第 2 题

设 $X$ 为集合，$f:2^X\to 2^X$ 为映射，且对 $\forall A,B\subset X,A\subset B$，必有 $f(A)\subset f(B)$。证明：$\exists E\subset X$，使得 $f(E)=E$。

### 第 3 题

设 $f(x)$ 为定义在 $[0,1]$ 上的实函数，且存在常数 $M$，使对 $\forall n\in\mathbb N$ 及 $\forall x_1,x_2,\cdots,x_n\in[0,1]$，$x_i\ne x_j\ (i\ne j)$，均有

$\displaystyle |f(x_1)+f(x_2)+\cdots+f(x_n)|$ $\displaystyle {}\leq M.$

证明：$E=\{x\in[0,1]\mid f(x)\ne0\}$ 为至多可数集。

### 第 4 题

设 $A\subset\mathbb R^n$，对 $\forall\boldsymbol{x}\in A$，总 $\exists\delta(\boldsymbol{x})>0$，s.t. $B(\boldsymbol{x};\delta(\boldsymbol{x}))\cap A$ 为至多可数集。证明：$A$ 必为至多可数集。

### 第 5 题

试作自然数集 $\mathbb N$ 的 $\aleph$ 个非空子集，其中任意两个子集之间有严格的包含关系。

### 第 6 题

证明：不存在集合族 $\Gamma$，使得对任一集合 $B$，有 $A\in\Gamma,A\sim B$。

### 第 7 题

设 $E\subset\mathbb R^3$，且对 $\forall\boldsymbol{x},\boldsymbol{y}\in E$，距离 $\rho_0^3(\boldsymbol{x},\boldsymbol{y})\in\mathbb Q$。证明：$E$ 为至多可数集。

### 第 8 题

设 $E$ 为平面 $\mathbb R^2$ 中的可数集。证明：存在互不相交的集合 $A$ 与 $B$，使得 $E=A\cup B$，且任一平行于 $x$ 轴的直线交 $A$ 至多有限个点；任一平行于 $y$ 轴的直线交 $B$ 至多有限个点。

### 第 9 题

设 $E\subset\mathbb R^1$ 为可数集。证明：$\exists x_0\in\mathbb R^1$，s.t. $E\cap(E+x_0)=\varnothing$，其中点集 $E+x_0=\{x+x_0\mid x\in E\}$。

### 第 10 题

设 $A=\{a_1,a_2,\cdots\}$，$B=\{b_1,b_2,\cdots\}$ 为两个自然数子列，若 $\lim_{n\to+\infty}\frac{a_n}{b_n}=0$，则称 $B$ 是比 $A$ 增长更快的数列。

现设 $\mathcal N$ 为由某些自然数子列构成的数列族。且对任一自然数子列 $A$，均有 $B\in\mathcal N$，使得 $B$ 比 $A$ 增长更快。证明：$\mathcal N$ 为不可数集。

### 第 11 题

证明：平面 $\mathbb R^2$ 和开圆片都不能被其中至多可数个彼此无公共内点（可以相切）的闭圆片的集合 $\mathcal A$ 所覆盖。

### 第 12 题

证明：$\mathbb R^n$ 中可数个超平面（$\mathbb R^1$ 中的“超平面”为点；$\mathbb R^2$ 中的“超平面”为一维直线；$\mathbb R^3$ 中的“超平面”为通常的二维平面；$\mathbb R^n$ 中的超平面就是 $n-1$ 维平面 $a_1x_1+a_2x_2+\cdots+a_nx_n=d$，其中 $a_1,a_2,\cdots,a_n,d$ 为实常数，且 $a_1,a_2,\cdots,a_n$ 不全为 $0$）不能覆盖住 $\mathbb R^n$。

### 第 13 题

设 $G$ 为 $\mathbb R^1$ 中的 $G_\delta$ 集。试构造 $\mathbb R^1$ 上的连续函数 $f$，它的连续点集就是 $G$。

### 第 14 题

设 $\sum_{n=0}^\infty a_nx^n$ 与 $\sum_{n=0}^\infty b_nx^n$ 在 $(-R,R)$ 上收敛。令

$$
\begin{gathered}
E=\Bigl\{x\in(-R,R)\ \Big| \\
\sum_{n=0}^\infty a_nx^n=\sum_{n=0}^\infty b_nx^n\Bigr\},
\end{gathered}
$$

若 $E'\cap(-R,R)\ne\varnothing$，证明：$a_n=b_n,n=0,1,2,\cdots$。

### 第 15 题

设 $f$ 为 $\mathbb R$ 上无限次可导的实值函数，且 $\exists M>0$，使在 $\mathbb R$ 上，对 $\forall n\geq0$，有 $|f^{(n)}(x)|\leq M$。如果 $f\equiv0$ 在一无限有界集 $L$ 上成立，则在 $\mathbb R$ 上，$f\equiv0$。

### 第 16 题

设 $F\subset\mathbb R^n$ 为有界闭集，$G_i\ (i=1,2,\cdots,k)$ 为 $\mathbb R^n$ 中的开集，且有 $F\subset\bigcup_{i=1}^k G_i$。试作闭集 $F_i\ (i=1,2,\cdots,k)$，使得

$$
\begin{gathered}
F=\bigcup_{i=1}^k F_i, \\
F_i\subset G_i,\quad i=1,2,\cdots,k.
\end{gathered}
$$

### 第 17 题

设 $f\in C^1([a,b])$（$[a,b]$ 上连续可导函数的全体）。令

$\displaystyle E=\{x\in[a,b]\mid f(x)=0\}$ $\displaystyle {}\cap\{x\in[a,b]\mid f'(x)>0\}.$

证明：$E$ 中任一点皆为 $E$ 的孤立点。

### 第 18 题

设 $f:[a,b]\to\mathbb R$ 为实函数，作 $G_f=\{(x,f(x))\mid x\in[a,b]\}$，则

$G_f$ 为 $\mathbb R^2$ 中的紧集 $\Leftrightarrow f\in C^0([a,b])=C([a,b])$。

### 第 19 题

将点集 $[0,1]$ 表示为 $\aleph$ 个互不相交的完全集的并集。

### 第 20 题

设 $X$ 为非空集合，$\mathcal T$ 为 $X$ 上的一个子集族，满足：

（1）$\varnothing,X\in\mathcal T$；

（2）若 $G_1,G_2\in\mathcal T$，则 $G_1\cap G_2\in\mathcal T$；

（3）若 $G_\alpha\in\mathcal T,\alpha\in\Gamma$（指标集），则 $\bigcup_{\alpha\in\Gamma} G_\alpha\in\mathcal T$，则称 $\mathcal T$ 为 $X$ 上的一个**拓扑**，$(X,\mathcal T)$ 称为 $X$ 上的一个**拓扑空间**。$G\in\mathcal T$ 称为拓扑空间 $(X,\mathcal T)$ 上的**开集**。

如果 $F\subset X,F^c\in\mathcal T$，则称 $F$ 为 $(X,\mathcal T)$ 上的**闭集**。

如果存在 $\mathcal T^*\subset\mathcal T$，使得 $\mathcal T$ 中的任何 $G$ 必为 $\mathcal T^*$ 中若干元的并集，则称 $\mathcal T^*$ 为 $(X,\mathcal T)$ 的一个**拓扑基**。如果 $(X,\mathcal T)$ 具有至多可数的拓扑基 $\mathcal T^*$（称 $(X,\mathcal T)$ 具有第二可数性公理），则称 $(X,\mathcal T)$ 为 $A_2$ **空间**。

如果对 $\forall x,y\in X,x\ne y$，必有 $x$ 的开邻域（含 $x$ 的开集）$G_x\not\ni y$，也必有 $y$ 的开邻域 $G_y\not\ni x$，则称 $(X,\mathcal T)$ 为 $T_1$ **空间**。

设 $(X,\mathcal T)$ 为 $A_2$ 与 $T_1$ 空间。证明：$\overline{\overline X}\leq\aleph$。

### 第 21 题

设 $X$ 为不可数集。证明：

（1）$X$ 的子集族 $\mathcal T=\{U\mid U=X-C,C$ 为 $X$ 的至多可数子集 $\}\cup\{\varnothing\}$ 为 $X$ 上的一个拓扑。

（2）$(X,\mathcal T)$ 不为 $T_2$ 空间（$T_2$ **空间**或 **Hausdorff 空间**指的是对 $\forall p,q\in X,p\ne q$，必有 $p$ 的开邻域 $U$ 和 $q$ 的开邻域 $V$，使得 $U\cap V=\varnothing$），但为 $T_1$ 空间。

（3）$(X,\mathcal T)$ 为 Lindelöf 空间，即 $X$ 的任何开覆盖必有（至多）可数子覆盖。但 $(X,\mathcal T)$ 不为紧致空间。

（4）$(X,\mathcal T)$ 为连通空间，即 $X$ 不能表示为两个非空不相交开集的并集。

（5）$(X,\mathcal T)$ 不为道路连通空间，即 $\exists p,q\in X$，不存在连续映射 $\sigma:[0,1]\to X$，s.t. $\sigma(0)=p,\sigma(1)=q$。

### 第 22 题

设 $X$ 为无限集。证明：

（1）$X$ 的子集族 $\mathcal T=\{U\mid U=X-C,C$ 为 $X$ 的有限子集 $\}\cup\{\varnothing\}$ 为 $X$ 上的一个拓扑。

（2）$(X,\mathcal T)$ 不为 $T_2$ 空间，但为 $T_1$ 空间。

（3）$(X,\mathcal T)$ 为紧致空间。

（4）$(X,\mathcal T)$ 为连通空间。

（5）如果 $X$ 可数，则 $(X,\mathcal T)$ 不为道路连通空间；如果 $X$ 不可数，且 $\overline{\overline X}\geq\aleph$，则 $(X,\mathcal T)$ 为道路连通空间。

### 第 23 题

设 $f_i\ (i=1,2,\cdots)$ 为紧致集（即有界闭集）$F\subset\mathbb R^n$ 上的连续函数，且

$$
\begin{gathered}
f_i(\boldsymbol{x})\geq f_i(\boldsymbol{x}), \\
\forall\boldsymbol{x}\in F\subset\mathbb R^n,\quad i\leq j;
\end{gathered}
$$

$\lim_{i\to+\infty}f_i(\boldsymbol{x})=f(\boldsymbol{x})$（连续函数），$\forall\boldsymbol{x}\in F$。

证明：$\{f_i\}$ 在 $F$ 上一致收敛于 $f(x)$。

### 第 24 题

设 $f:\mathbb R^n\to\mathbb R$ 为实函数，令

$f_{\max}=\{f(x)\mid x\in\mathbb R^n$ 为 $f$ 的极大值点 $\}$，

$f_{\min}=\{f(x)\mid x\in\mathbb R^n$ 为 $f$ 的极小值点 $\}$，

则 $f_{\max}$ 与 $f_{\min}$ 都为至多可数集。

### 第 25 题

设 $f$ 为 $\mathbb R^n$ 上的连续函数，并且 $\mathbb R^n$ 中每一点都是 $f$ 的极值点。证明：$f$ 在 $\mathbb R^n$ 上为常值函数。

[下载第一章讲义 PDF](/files/notes/real-functions/real-functions-chapter-1.pdf)
