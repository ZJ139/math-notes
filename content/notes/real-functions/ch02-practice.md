---
title: "第二章习题与复习题"
description: "徐森林、薛春华《实变函数论》第二章，收录 36 道节后练习与 18 道复习题原题。"
subject: "实变函数"
category: "real-functions/chapter-2"
tags: ["实变函数", "测度理论", "复习题"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
---

徐森林、薛春华《实变函数论》第二章，收录 36 道节后练习与 18 道复习题原题。

[练习题 2.1](#练习题-21) · [练习题 2.2](#练习题-22) · [练习题 2.3](#练习题-23) · [复习题 2](#复习题-2)

## 练习题 2.1

教材第 112 页

**1.** 举例说明定理 2.1.1（8）与（9）中条件 $\mu\left(\bigcup_{n=m}^{\infty}E_n\right)<+\infty$，（10）中条件 $\sum_{n=m}^{\infty}\mu(E_n)<+\infty$ 都不能删去。

**2.** 设 $\{\mu_n\}$ 为环 $\mathcal R$ 上的一列测度。证明：

$$
\mu(E)=\sum_{n=1}^{\infty}\frac1{2^n}\mu_n(E),\quad E\in\mathcal R
$$

也为 $\mathcal R$ 上的测度。

如果对 $\forall E\in\mathcal R,\forall n\in\mathbb N,\mu_n(E)\leq1$，则 $\mu(E)\leq1,E\in\mathcal R$。

**3.** 设 $\mathcal R$ 为集合 $X$ 上的环，$\{\mu_n\}$ 为 $\mathcal R$ 上的一列测度，并且对 $\forall E\in\mathcal R$，极限 $\lim_{n\to+\infty}\mu_n(E)$ 存在，记为 $\mu(E)$。证明：$\mu$ 为 $\mathcal R$ 上非负，空集上取值为 $0$ 的有限可加的广义集函数。

举例说明 $\mu$ 未必为 $\mathcal R$ 上的测度。

**4.** 设 $\mu$ 为基本空间 $X$ 的环 $\mathcal R$ 上的测度。如果对 $\forall E\in\mathcal R,\mu(E)\leq1$。证明：$\mu$ 的“原子”（即是 $\mathcal R$ 中的元素，它为 $X$ 中的独点集 $\{x\}$，且 $\mu(\{x\})>0$）的全体为至多可数集。

**5.** 设 $\mu$ 为 $\sigma$ 环 $\mathcal R$ 上的一个测度，对 $\forall E\in\mathcal H(\mathcal R)$，证明：$E$ 必有等测包 $H$，即 $H\in\mathcal R,H\supset E$，且 $\mu(H)=\mu^*(E)$。当 $\mathcal R$ 仅为环时，上述结论仍正确吗？

## 练习题 2.2

教材第 121–122 页

**1.** 设 $X=\{x_n\mid n\in\mathbb N\}$ 为可数集，$\mathcal R$ 为 $X$ 中有限子集所成的环。对于 $\forall E\in\mathcal R,\mu_1(E)$ 为 $E$ 中的点数，$\mu_2(E)=\alpha\mu_1(E),\alpha\in[0,+\infty)$（由例 2.1.1 知，$\mu_1,\mu_2$ 均为 $\mathcal R$ 上的测度）。证明：$\mu_1^*,\mu_2^*$ 都为 $\mathcal H(\mathcal R)$ 上的测度。

**2.** 举例说明环 $\mathcal R$ 上测度 $\mu$ 按 Caratheodory 条件所得的扩张 $\mathcal R^*,\mu^*$ 并不一定为 $\mathcal R,\mu$ 的最大扩张。

**3.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的环，$\mu$ 为 $\mathcal R$ 上的测度。任取 $E\subset X$，令

$$
\mathcal R_E=\{F\mid F\in\mathcal R,F\subset E\},
$$

$\mu_E$ 为 $\mu$ 在环 $\mathcal R_E$ 上的限制。$\mathcal R_E^*,\mu_E^*$ 为 $\mathcal R_E$ 上 $\mu_E$ 按 Caratheodory 条件的扩张。举例说明

$$
\mathcal R_E^*\ne\mathcal R^*\cap E.
$$

**4.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的环，$\mu$ 为 $\mathcal R_\sigma(\mathcal R)$ 上的测度。如果 $\mu$ 在 $\mathcal R$ 上是 $\sigma$ 有限的，则 $\mu$ 在 $\mathcal R_\sigma(\mathcal R)$ 上是 $\sigma$ 有限的。

举例说明，如果 $\mu$ 在 $\mathcal R_\sigma(\mathcal R)$ 上是 $\sigma$ 有限的，$\mu$ 限制到 $\mathcal R$ 上不必是 $\sigma$ 有限的。

**5.** 设 $\mathcal R$ 为 $X$ 某些子集所成的环，$\mu$ 为 $\mathcal R$ 上的测度。证明：

（1）$\mu$ 零集全体为 $\mathcal R$ 的子环。

（2）如果 $\mathcal R$ 为 $\sigma$ 环，则 $\mu$ 零集的全体为 $\sigma$ 环。

（3）举例说明 $\mu$ 零集全体不必为 $\sigma$ 环。

（4）举例说明 $\mathcal R$ 虽不为 $\sigma$ 环，但 $\mu$ 零集全体却为 $\sigma$ 环。

**6.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的 $\sigma$ 环，$\mu$ 为 $\mathcal R$ 上的测度。证明：$\mathcal H(\mathcal R)$ 上的广义集函数

$$
\begin{gathered}
\mu^{**}(E)=\inf\{\mu(F)\mid E\subset F\in\mathcal R\}, \\
E\in\mathcal H(\mathcal R)
\end{gathered}
$$

就是外测度 $\mu^*(E)$。

**7.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的环，$\mu$ 为 $\mathcal R$ 上的测度。则 $\mathcal H(\mathcal R)$ 上的集函数

$$
\mu_*(E)=\sup\{\mu(F)\mid E\supset F\in\mathcal R\}
$$

（称 $\mu_*$ 为**内测度**）具有下列各性质：

（1）非负性：$\mu_*(E)\geq0$，特别地，$\mu_*(\varnothing)=0$；

（2）单调性：若 $E_1,E_2\in\mathcal H(\mathcal R),E_1\subset E_2$，则 $\mu_*(E_1)\leq\mu_*(E_2)$。

（3）若 $E\in\mathcal R$，则 $\mu_*(E)=\mu(E)$。

（4）若 $E_n\in\mathcal H(\mathcal R),E_i\cap E_j=\varnothing,i\ne j$，则

$$
\mu_*\left(\bigcup_{n=1}^m E_n\right)\geq\sum_{n=1}^m\mu_*(E_n).
$$

进而，如果 $\mathcal R$ 为 $\sigma$ 环，则有

$$
\mu_*\left(\bigcup_{n=1}^\infty E_n\right)\geq\sum_{n=1}^\infty\mu_*(E);
$$

（5）对 $E\in\mathcal R,F\in\mathcal H(\mathcal R)$，有

$$
\begin{gathered}
\mu_*(F) \\
{}=\mu_*(F\cap E)+\mu_*(F-E) \\
{}=\mu_*(F\cap E)+\mu_*(F\cap E^c).
\end{gathered}
$$

（6）如果 $\mathcal R$ 为 $\sigma$ 环，则 $\mu_*(E)\leq\mu^*(E),\quad E\in\mathcal H(\mathcal R)$。

**8.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的代数，$\mu$ 为 $\mathcal R$ 上的有限测度（即 $\mu(X)<+\infty$），定义

$$
\begin{gathered}
\mu_{**}(E)=\mu(X)-\mu^*(X-E), \\
E\in\mathcal H(\mathcal R).
\end{gathered}
$$

证明：$\mu_{**}$ 满足题 7 中 $\mu_*$ 的（1）（2）（3）（5）（6）和（4）的第 1 个不等式；如果 $\mathcal R$ 为 $\sigma$ 代数，则 $\mu_{**}$ 也满足（4）中第 2 式。

此外，$\mu_{**}\geq\mu_*$，并可举出 $\mu_{**}>\mu_*$ 的例子。如果 $\mathcal R$ 为 $\sigma$ 代数，则 $\mu_{**}=\mu_*$。

**9.** 设 $\mathcal R$ 为 $X$ 的某些子集所成的 $\sigma$ 代数，$\mu$ 为 $\mathcal R$ 上的有限测度，对 $E\in\mathcal H(\mathcal R)$，定义

$$
\mu_*(E)=\sup\{\mu(F)\mid E\supset F\in\mathcal R\}.
$$

证明：$\mu^*(E)=\mu_*(E)\Leftrightarrow E\in\mathcal R^*$（即 $E$ 为 $\mu^*$ 可测集）。

举例说明，如果删去条件“有限测度”，则 $\mu^*(E)=\mu_*(E)\not\Rightarrow E\in\mathcal R^*$。

**10.** 设 $\mu$ 为 $\sigma$ 环 $\mathcal R$ 上的测度，$A,B\in\mathcal R^*$（即为 $\mu^*$ 可测集），$A\cap B=\varnothing$。则对 $\forall E\in\mathcal H(\mathcal R)$ 有

$$
\begin{gathered}
\mu^*(E\cap(A\cup B)) \\
{}=\mu^*(E\cap A)+\mu^*(E\cap B), \\
\mu_*(E\cap(A\cup B)) \\
{}=\mu_*(E\cap A)+\mu_*(E\cap B).
\end{gathered}
$$

## 练习题 2.3

教材第 144–147 页

**1.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\subset\mathbb R^1$。如果 $0<a<m(E)$，证明：存在无内点的有界闭集 $F\subset E$，s.t. $m(F)=a$。

**2.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间。

（1）$A_1,A_2\subset\mathbb R^n,A_1\subset A_2,A_1\in\mathcal L$ 且 $m(A_1)=m^*(A_2)<+\infty$。证明：$A_2\in\mathcal L$。

（2）$A,B\subset\mathbb R^n,A\in\mathcal L$ 且 $m^*(B)<+\infty$。证明：

$\displaystyle m^*(A\cup B)=m^*(A)+m^*(B)$ $\displaystyle {}-m^*(A\cap B).$

（3）对 $\forall E\subset\mathbb R^n$，证明：$\exists F_\sigma$ 集 $K$ 和 $G_\delta$ 集 $H$，s.t.

$$
K\subset E\subset H,
$$

且 $m(K)=m_*(E)$，$m(H)=m^*(E)$。

**3.** 设 $\mu$ 为集 $X$ 上的环 $\mathcal R$ 的测度。

（1）如果 $\mathcal R$ 为 $\sigma$ 环，$E_n\in\mathcal H(\mathcal R)$，$E_1\subset E_2\subset\cdots\subset E_n\subset\cdots$，则

$$
\lim_{n\to+\infty}\mu^*(E_n)=\mu^*\left(\bigcup_{n=1}^\infty E_n\right).
$$

（2）如果 $\mathcal R$ 为 $\sigma$ 环，$E_n\in\mathcal H(\mathcal R)$，$E_1\supset E_2\supset\cdots\supset E_n\supset\cdots$，且至少有一个 $E_{n_0}$，s.t. $\mu_*(E_{n_0})<+\infty$，则

$$
\lim_{n\to+\infty}\mu_*(E_n)=\mu_*\left(\bigcap_{n=1}^\infty E_n\right).
$$

举例说明“$\mu_*(E_{n_0})<+\infty$”不能删去。

（3）举例说明，虽有（1）中条件：$E_n\in\mathcal H(\mathcal R)$，$E_1\subset E_2\subset\cdots\subset E_n\subset\cdots$，但

$$
\lim_{n\to+\infty}\mu_*(E_n)\ne\mu_*\left(\bigcup_{n=1}^\infty E_n\right).
$$

（4）举例说明，虽有（2）中条件：$E_n\in\mathcal H(\mathcal R)$，$E_1\supset E_2\supset\cdots\supset E_n\supset\cdots$，$\mu^*(E_{n_0})<+\infty$，但

$$
\lim_{n\to+\infty}\mu^*(E_n)\ne\mu^*\left(\bigcap_{n=1}^\infty E_n\right).
$$

**4.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间。

（1）作出一个由 $\mathbb R^1$ 中某些无理数构成的闭集 $F$，s.t. $m(F)>0$。

（2）设有理数集 $\mathbb Q=\{r_n\mid n\in\mathbb N\}$，令

$$
G=\bigcup_{n=1}^\infty\left(r_n-\frac1{n^2},r_n+\frac1{n^2}\right).
$$

证明：任一闭集 $F\subset\mathbb R^1$，有 $m(G\triangle F)>0$。

**5.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间。证明：

（1）$E\in\mathcal L\Leftrightarrow$ 对 $\forall\varepsilon>0$，存在开集 $G_1,G_2$，s.t. $G_1\supset E,G_2\supset E^c$，且 $m(G_1\cap G_2)<\varepsilon$。

（2）$E\subset\mathbb R^n$，且 $m^*(E)<+\infty$。如果 $m^*(E)=\sup\{m(F)\mid F\subset E$ 为有界闭集 $\}$，证明：$E\in\mathcal L$。

（3）设 $E\in\mathcal L$ 且 $m(E)>0$。证明：$\exists\boldsymbol{x}\in E$，s.t. 对 $\forall\delta>0$，有 $m(E\cap B(\boldsymbol{x};\delta))>0$。

（4）设 $\{B_k\}$ 为 $\mathbb R^n$ 中递减可测集列，$m^*(A)<+\infty$。令

$$
\begin{gathered}
E_k=A\cap B_k,k\in\mathbb N, \\
E=\bigcap_{k=1}^\infty E_k.
\end{gathered}
$$

证明：$\lim_{k\to+\infty}m^*(E_k)=m^*(E)$。

**6.** 设 $(\mathbb R^2,\mathcal L,m)$ 为 Lebesgue 测度空间，$[0,1]^2=[0,1]\times[0,1]$。令

$$
\begin{gathered}
E=\Bigl\{(x,y)\in[0,1]^2\ \Big|\ |\sin x|<\tfrac12, \\
\cos(x+y)\text{ 为无理数}\Bigr\}.
\end{gathered}
$$

证明：$m(E)=\frac{\pi}{6}$。

**7.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$E_k\in\mathcal L,k\in\mathbb N$。证明：

（1）$m\left(\varliminf_{k\to+\infty}E_k\right)$ ${}\leq\varliminf_{k\to+\infty}m(E_k)$。

（2）如果 $\exists k_0\in\mathbb N$，s.t. $m\left(\bigcup_{k=k_0}^\infty E_k\right)<+\infty$，则 $m\left(\varlimsup_{k\to+\infty}E_k\right)$ ${}\geq\varlimsup_{k\to+\infty}m(E_k)$。

**8.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间。

（1）$E\subset\mathbb R^n,H\supset E$ 且 $H$ 为可测集。证明：

$H$ 为 $E$ 的等测包 $\underset{m^*(E)<+\infty}{\Longleftrightarrow}H-E$ 中任一可测子集 $e$ 皆为 Lebesgue 零测集。

如果删去“$m^*(E)<+\infty$”上述结论是否正确？

（2）设 $E\subset\mathbb R^n,m^*(E)<+\infty$。证明：存在 $G_\delta$ 集 $H\supset E$，s.t. 对任一可测集 $A\subset\mathbb R^n$，有

$$
m^*(E\cap A)=m(H\cap A).
$$

如果 $m^*(E)=+\infty$，结论如何？

（3）设 $A,B\subset\mathbb R^n$，$A\cup B\in\mathcal L,m(A\cup B)<+\infty$，且

$$
m(A\cup B)=m^*(A)+m^*(B).
$$

证明：$A,B$ 皆为可测集。

**9.** 设 $([0,1],\mathcal L\cap[0,1],m)$ 为 $[0,1]$ 上的 Lebesgue 测度空间。$\mathcal L\cap[0,1]$ 为 $[0,1]$ 中 Lebesgue 可测集的全体。

（1）$\{E_k\}$ 为 $[0,1]$ 中的可测集列，$m(E_k)=1,k\in\mathbb N$。证明：$m\left(\bigcap_{k=1}^\infty E_k\right)=1$。

（2）$E_1,E_2,\cdots,E_k$ 为 $[0,1]$ 中的可测集，$\sum_{i=1}^k m(E_i)>k-1$。证明：

$$
m\left(\bigcap_{i=1}^k E_i\right)>0.
$$

（3）$E$ 为 $[0,1]$ 中的可测集，$I_k\subset[a,b],k\in\mathbb N$ 为开区间列，满足：

$$
m(I_k\cap E)\geq\frac23m(I_k),\quad k\in\mathbb N.
$$

证明：

$\displaystyle m\left(\left(\bigcup_{k=1}^\infty I_k\right)\cap E\right)$ $\displaystyle {}\geq\frac13 m\left(\bigcup_{k=1}^\infty I_k\right).$

**10.** 设 $f:[a,b]\to\mathbb R$。若对 $[a,b]$ 中任一 Lebesgue 可测集 $E$，$f(E)$ 必为 $\mathbb R$ 中的 Lebesgue 可测集。证明：对于 $[a,b]$ 中任一 Lebesgue 零测集 $Z$，必有 $m(f(Z))=0$。

**11.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\subset\mathbb R^1$，且 $\exists q\in(0,1)$，s.t. 对任何开区间 $(a,b)$，总有开区间列 $\{I_k\}$ 满足：

$$
\begin{gathered}
E\cap(a,b)\subset\bigcup_{k=1}^\infty I_k, \\
\sum_{k=1}^\infty m(I_k)<q(b-a).
\end{gathered}
$$

证明：$m(E)=0$。

**12.** 设 $([0,1],\mathcal L\cap[0,1],m)$ 为 $[0,1]$ 上的 Lebesgue 测度空间。

（1）证明：不存在具有下列性质的可测集 $E\subset[0,1]$，对 $\forall(a,b)\subset[0,1]$，有 $m(E\cap(a,b))=\frac{b-a}{2}$。

（2）设 $E\subset[0,1]$ 为可测集且有 $m(E)\geq\varepsilon>0$，$x_i\in[0,1],i=1,2,\cdots,n$，其中 $n>\frac2\varepsilon$。证明：$E$ 中存在两点其距离等于 $\{x_1,x_2,\cdots,x_n\}$ 中某两个点之间的距离。

（3）在 $[0,1]$ 中作点集 $E=\{x\in[0,1]\mid$ 在 $x$ 的十进位制小数表示中只出现 9 个数码 $\}$，求 $m(E)$ 和 $\overline{\overline E}$。

（4）设 $W\subset[0,1]$ 为不可数集。证明：$\exists\varepsilon\in(0,1)$，s.t. 对于 $[0,1]$ 中任一满足 $m(E)\geq\varepsilon$ 的可测集 $E$，$W\cap E$ 为不可测集。

**13.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\subset\mathbb R^1$ 为可测集，$a\in\mathbb R^1,\delta>0$。如果对满足 $|x|<\delta$ 的 $x$，$a+x$ 与 $a-x$ 之中必有一点属于 $E$。证明：$m(E)\geq\delta$。

**14.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$W\subset\mathbb R^n$ 为不可测集，$E\subset\mathbb R^n$ 为可测集。证明：$E\triangle W$ 为不可测集。

**15.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$T:\mathbb R^n\to\mathbb R^n$ 为一一映射，且保持点集的外测度不变。证明：对 $\forall E\in\mathcal L$，有 $T(E)\in\mathcal L$。

**16.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\subset\mathbb R^n$。如果存在可测集列 $\{A_k\},\{B_k\}$，s.t. $A_k\subset E\subset B_k,k\in\mathbb N$，且

$$
\lim_{k\to+\infty}m(B_k-A_k)=0.
$$

证明：$E$ 为 Lebesgue 可测集。

**17.** 举例说明引理 2.3.3 中开集 $G$ 不能换成闭集。

**18.** 构造一个开集 $G\subset\mathbb R^1$，s.t. Lebesgue 测度 $m(G)\ne m(\overline G)$，其中 $\overline G$ 为 $G$ 的闭包。

**19.** 设 $E\subset[0,1]$ 为 $[0,1]$ 中的 Lebesgue 可测集。如果 $\exists\alpha>0$，s.t. 对任意的 $0\leq a<b\leq1$，有

$$
m(E\cap[a,b])\geq\alpha(b-a).
$$

证明：$m(E)=1$。

**20.** 设 $T$ 为指标集，且对 $\forall t\in T,G_t$ 为 $\mathbb R^1$ 中的开集。问：$\bigcap_{t\in T}G_t$ 为 Borel 可测集吗？$\bigcap_{t\in T}G_t$ 为 Lebesgue 可测集吗？

**21.** 设 $(\mathbb R^2,\mathcal L,m)$ 为平面上的 Lebesgue 测度空间。旋转

$$
\begin{gathered}
\varphi_\theta:\mathbb R^2\to\mathbb R^2, \\
(x,y)\mapsto(x',y')=\varphi_\theta(x,y)
\end{gathered}
$$

为

$$
\begin{cases}x'=x\cos\theta-y\sin\theta,\\ y'=x\sin\theta+y\cos\theta.\end{cases}
$$

证明：对平面上任何 Lebesgue 可测集 $E,\varphi_\theta(E)$ 也为 Lebesgue 可测集，且 $m(\varphi_\theta(E))=m(E)$。

## 复习题 2

教材第 171–173 页

题号　[1](#第-1-题) · [2](#第-2-题) · [3](#第-3-题) · [4](#第-4-题) · [5](#第-5-题) · [6](#第-6-题) · [7](#第-7-题) · [8](#第-8-题) · [9](#第-9-题) · [10](#第-10-题) · [11](#第-11-题) · [12](#第-12-题) · [13](#第-13-题) · [14](#第-14-题) · [15](#第-15-题) · [16](#第-16-题) · [17](#第-17-题) · [18](#第-18-题)

### 第 1 题

设 $([0,1],\mathcal L\cap[0,1],m)$ 为 $[0,1]$ 上的 Lebesgue 测度空间。

（1）设 $\{E_n\}$ 为 $[0,1]$ 中的可测集列，且 $\varlimsup_{n\to+\infty}m(E_n)=1$。证明：对 $0<\alpha<1$，必存在 $\{E_{n_k}\}$，s.t.

$$
m\left(\bigcap_{k=1}^\infty E_{n_k}\right)>\alpha.
$$

（2）$\{E_n\}$ 为 $[0,1]$ 中互不相同的可测集列，且 $\exists\varepsilon>0,m(E_n)>\varepsilon\ (n\in\mathbb N)$。

问：是否存在子列 $\{E_{n_k}\}$，s.t. $m\left(\bigcap_{k=1}^\infty E_{n_k}\right)>0$？又若 $\{m(E_n)\}$ 中存在收敛于 $1$ 的子列，则上述结论是否成立？

### 第 2 题

设 $E$ 为 $\mathbb R^n$ 中的不可测集。证明：$\exists\varepsilon>0$，s.t. 对满足 $A\supset E,\ B\supset E^c$ 的任意 Lebesgue 可测集 $A$ 与 $B$，均有 $m(A\cap B)\geq\varepsilon$。

### 第 3 题

设 $E\subset(-\pi,\pi),0<a<b<+\infty$。在平面上定义扇面集：

$$
\begin{gathered}
S=\{(r\cos\theta,r\sin\theta)\mid \\
a<r<b,\theta\in E\}.
\end{gathered}
$$

证明：$m^*(S)\leq\frac12(b^2-a^2)m^*(E)$。

### 第 4 题

设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\subset\mathbb R^n$ 为 Lebesgue 可测集，$m(E)>0$。

（1）$0<\lambda<1$，证明：存在 $n$ 维开方体 $I$，s.t. $\lambda m(I)<m(E\cap I)$。

（2）作（向量差）点集 $E_{-}E=\{\boldsymbol{x}-\boldsymbol{y}\mid\boldsymbol{x},\boldsymbol{y}\in E\}$。证明：必存在 $\delta>0$，s.t.

$\displaystyle E_{-}E\supset B(\boldsymbol{0};\delta)$ $\displaystyle {}=\{\boldsymbol{x}\in\mathbb R^n\mid\|\boldsymbol{x}\|<\delta\}.$

### 第 5 题

设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，$E\in\mathcal L$。

（1）如果 $m(E)>0$，证明：点集 $E+E\overset{\mathrm{def}}{=}\{x+y\mid x\in E,y\in E\}$ 必包含一个开区间。

（2）如果 $m(E)>0$，且 $\frac12(x+y)\in E,\ \forall x,y\in E$，证明：$E$ 必包含一个开区间。

### 第 6 题

设 $(\mathbb R^1,\mathcal L,m)$ 为测度空间，$\alpha>2$，令

$E=\bigl\{x\in\mathbb R^1\mid$ 存在无限个分数 $\frac pq$，$p,q$ 是互素的自然数，s.t. $\left|x-\frac pq\right|<\frac1{q^\alpha}\bigr\}$。

证明：$m(E)=0$。

### 第 7 题

在 $\mathbb R^n$ 中，设 $\boldsymbol{x}\sim\boldsymbol{y}\Leftrightarrow\boldsymbol{x}-\boldsymbol{y}\in\mathbb Q^n$。记 $[\boldsymbol{x}]=\{\boldsymbol{y}\in\mathbb R^n\mid\boldsymbol{y}\sim\boldsymbol{x}\}$，于是在 $\sim$ 下 $\mathbb R^n$ 划分为若干等价类。在每一类中选一元且只选一元构成集合 $W$。试应用上面题 4 中（2）的结论证明 $W$ 为不可测集。

### 第 8 题

设 $f(x)$ 为定义在 $\mathbb R^1$ 上的连续可导的函数，并且 $f'(x)>0$。证明：当 $E$ 为 Lebesgue 可测集时，$f^{-1}(E)$ 也为 Lebesgue 可测集。

### 第 9 题

设 $D$ 为 $\mathbb R^1$ 中的稠密集，$\mu$ 为 $\mathbb R^1$ 上的 Borel 测度（Borel 集组成的 $\sigma$ 代数（Borel 代数）$\mathcal B=\mathcal A_\sigma(\mathcal P)=\mathcal R_\sigma(\mathcal R_0)$ 上的测度 $\mu$，且对任何紧集 $K\subset\mathbb R^1$，有 $\mu(K)<+\infty$，则称 $\mu$ 为 **Borel 测度**）。如果对 $\forall x_0\in D$ 以及 $\forall a,b\in\mathbb R^1,a<b$ 有

$$
\mu((a,b]+x_0)=\mu((a,b]).
$$

证明：对 $\forall E\in\mathcal B$（即 $E$ 为 Borel 集），有 $\mu(E)=\lambda\cdot m(E)$，其中 $\lambda=\mu((0,1])$。

### 第 10 题

设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，函数 $f:\mathbb R^1\to\mathbb R$ 在正测集 $E\in\mathcal L$ 上是有界的，且满足

$$
\begin{gathered}
f(x+y)=f(x)+f(y), \\
x,y\in\mathbb R^1.
\end{gathered}
$$

证明：$f(x)=xf(1)$ 为线性函数。

### 第 11 题

设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间。证明：$\mathbb R^1$ 上的每个非空完全集 $E$ 必含有一个测度为 $0$ 的非空完全集。

### 第 12 题

设 $E\subset[a,b],f:[a,b]\to\mathbb R$ 为实函数。如果 $f'(x)$ 在 $E$ 上存在有限，且 $|f'(x)|\leq M$（常数），则：

（1）对 $\forall\varepsilon>0,\forall n\in\mathbb N$，有 $m^*(f(E_n))$ ${}\leq(M+\varepsilon)(m^*(E_n)+\varepsilon)$，其中

$E_n=\{x\in E\mid$ 当 $y\in[a,b]$ 且 $|y-x|\leq\frac1n$ 时，有 $|f(y)-f(x)|$ ${}\leq(M+\varepsilon)|y-x|\}$。

（2）$m^*(f(E))\leq M m^*(E)$。

### 第 13 题

（1）设 $f:\mathbb R^1\to\mathbb R$ 为 $C^1$ 映射（即连续可导），$E\subset\mathbb R^1$ 为 Lebesgue 零测集，则 $m(f(E))=0$。

（2）进一步，即使 $f:\mathbb R^1\to\mathbb R$ 只是可导函数，$m(E)=0$，仍有 $m(f(E))=0$。

### 第 14 题

设 $f:[a,b]\to\mathbb R$ 在 $E\subset[a,b]$ 上每一点处可导，则

$f'$ 在 $E$ 上几乎处处为 $0\ (f'\underset{m}{\overset{\cdot}{=}}0)\Leftrightarrow m(f(E))=0$。

### 第 15 题

（特殊 Sard 定理）设 $f:[a,b]\to\mathbb R$ 的临界点集为 $E=\{x\in[a,b]\mid f'(x)=0\}$。则 $f$ 的临界值集 $f(E)$ 为 Lebesgue 零测集，即 $m(f(E))=0$。

### 第 16 题

设 $A,B$ 为 $(\mathbb R^1,\mathcal L,m)$ 中两个正测度集。证明：$A+B=\{x+y\mid x\in A,y\in B\}$ 必包含一个内点。

### 第 17 题

设 $(\mathbb R^2,\mathcal L,m)$ 为 Lebesgue 测度空间。试作 $\mathbb R^2$ 中一个正测集，使其任一正测子集 $E$ 皆不能表示成 $E=A\times B$，其中 $A,B$ 为 $(\mathbb R^1,\mathcal L,m)$ 中的正测集。

### 第 18 题

（1）构造 $[0,1]$ 上的一个可导函数，其导函数在已给的非空完全集 $C$ 上无处连续。

（2）构造 $[0,1]$ 上一个可导函数 $f$，使 $f'$ 在 $[0,1]$ 上不连续点的全体具有正的 Lebesgue 测度。

[下载第二章讲义 PDF](/files/notes/real-functions/real-functions-chapter-2.pdf)
