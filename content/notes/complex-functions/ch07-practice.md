---
title: "第七章习题：共形映射"
description: "按原节次收录全部25道教材习题，保留提示并单列条件、记号与公式疑义。"
subject: "复变函数"
category: "complex-functions/chapter-7"
tags: ["复变函数", "第七章", "共形映射"]
created_at: "2026-11-21"
updated_at: "2026-11-26"
attachment: "notes/complex-functions/complex-functions-chapter-7.pdf"
---

按上传教材第 213、217—218、222、234 页收录，共 25 道主编号题：7＋7＋5＋6。本书本章没有另设章末复习题。以下保留原题条件、小问和教材自带的括号提示，不附常规解答。原题疑义另列于最后的校注，不把修订文字混入原题。

## 习题索引

[习题 7.1](#习题-71) · [习题 7.2](#习题-72) · [习题 7.3](#习题-73) · [习题 7.4](#习题-74) · [原题校注](#原题校注)

## 习题 7.1

[本节七题详解](/notes/7d3ba7b233a5e5f2a5a61cbf/#习题-71-详解)

**1.** 设 $\{f_n\}$ 是域 $D$ 上的全纯函数列，并且在 $D$ 上内闭一致有界。证明：若 $\lim_{n\to\infty}f_n(z)$ 在 $D$ 上处处存在，则 $\{f_n\}$ 在 $D$ 上内闭一致收敛。

**2.** 设 $\{f_n\}$ 是域 $D$ 上的全纯函数列，并且在 $D$ 上内闭一致有界，$A=\{z=x+iy\in D:x,y\text{ 为有理数}\}$。证明：若 $\lim_{n\to\infty}f_n(z)$ 在 $A$ 上处处存在，则 $\{f_n\}$ 在 $D$ 上内闭一致收敛。

**3.** （Vitali 定理）设 $\{f_n\}$ 是域 $D$ 上的全纯函数列，并且在 $D$ 上内闭一致有界，$\{z_n\}$ 是 $D$ 中彼此不同的点列，$\lim_{n\to\infty}z_n=z_0\in D$。证明：若 $\lim_{n\to\infty}f_n(z)$ 在 $\{z_n\}$ 上处处存在，则 $\{f_n\}$ 在 $D$ 上内闭一致收敛。

**4.** 设 $\mathcal F$ 是域 $D$ 上的全纯函数族，$z_0\in D$。证明：若

（1）$\operatorname{Re}f(z)\ge0,\ \forall z\in D,\ f\in\mathcal F$；

（2）$f(z_0)=g(z_0),\ \forall f,g\in\mathcal F$，

则 $\mathcal F$ 是 $D$ 上的正规族。并举例说明条件（2）是不可去掉的。

**5.** 设 $\mathcal F$ 是域 $D$ 上的正规全纯函数族，$g$ 是整函数。证明：$\{g\circ f:f\in\mathcal F\}$ 也是 $D$ 上的正规族。

**6.** 设 $D$ 是有界域，$0<M<\infty$。证明：

$$
\mathcal F=\left\{f\in H(D):\iint_D|f(z)|^2\,dx\,dy\le M\right\}
$$

是 $D$ 上的正规族。

**7.** 设 $\{f_n\}$ 是域 $D$ 上的全纯函数列，并且在 $D$ 上内闭一致有界。证明：若存在 $z_0\in D$，使得 $\lim_{n\to\infty}f_n(z_0)=A$ 存在，并且 $f_n(D)\subset\mathbb C\setminus\{A\}$（$n\in\mathbb N$），则 $\{f_n\}$ 在 $D$ 上内闭一致收敛于常数 $A$。

## 习题 7.2

**1.** （推广的 Liouville 定理）设 $D$ 是异于 $\mathbb C$ 的单连通域。证明：若 $f$ 是整函数，并且 $f(\mathbb C)\subset D$，则 $f$ 是常值函数。

**2.** 设 $D$ 是异于 $\mathbb C$ 的单连通域，$a\in D$。证明：若 $f$ 将 $D$ 双全纯地映为 $B(0,1)$，并且 $f(a)=0,f'(a)>0$，则

$$
\min_{z\in\partial D}|z-a|\le\frac1{f'(a)}\le\max_{z\in\partial D}|z-a|.
$$

称 $1/f'(a)$ 为 $D$ 在 $a$ 处的映射半径。

**3.** 设 $D$ 是异于 $\mathbb C$ 的单连通域，$a\in D$，$f$ 将 $D$ 双全纯地映为 $B(0,1)$，并且 $f(a)=0,f'(a)>0$。证明：若 $g$ 将 $D$ 双全纯地映为 $B(0,1)$，$p=g^{-1}(0)$，则

$$
g(z)=\frac{g'(a)}{|g'(a)|}\frac{f(z)-f(p)}{1-\overline{f(p)}f(z)}.
$$

**4.** 设 $D$ 为异于 $\mathbb C$ 的凸域，$a\in D$，$\mathcal F=\{f\in H(D):f(a)=0,f'(a)>0\}$。证明：$\mathcal F$ 中满足 $f(D)=B(0,1)$ 和 $\operatorname{Re}f'(z)>0$（$\forall z\in D$）的 $f$ 最多只有一个。

**5.** 设 $D$ 是异于 $\mathbb C$ 的单连通域，$a\in D$，$R$ 为 $D$ 在 $a$ 处的映射半径。证明：若 $F\in H(D)$，$F(a)=0,F'(a)=1$，则 $\sup_{z\in D}|F(z)|\ge R$。等号成立当且仅当 $F$ 是将 $D$ 映为 $B(0,R)$ 的双全纯映射。

**6.** 证明：

（1）存在 $B(0,1)$ 上的全纯函数 $f$，使得 $f(B(0,1))=\mathbb C$；

（2）对于 $a\in\mathbb C$，存在 $B(0,1)$ 上的全纯函数 $f$，使得 $f(B(0,1))=\mathbb C\setminus\{a\}$。

并将这里的结论与习题 6.3 的第 3 题和第 4 题作比较。

**7.** 设 $D$ 是异于 $\mathbb C$ 的单连通域，$a\in D$，$R$ 为 $D$ 在 $a$ 处的映射半径。证明：若 $F\in H(D)$，$F(a)=0,F'(a)=1$，则

$$
\iint_D|F'(z)|^2\,dx\,dy\ge\pi R^2.
$$

等号成立当且仅当 $F$ 是将 $D$ 映为 $B(0,R)$ 的双全纯映射。

## 习题 7.3

**1.** 利用 Schwarz 对称原理和边界对应定理证明：将 $B(0,1)$ 映为自身的双全纯映射一定是分式线性变换。

**2.** 证明：若 $f$ 将圆环 $\{z\in\mathbb C:r_1<|z|<r_2\}$ 双全纯地映为圆环 $\{w\in\mathbb C:R_1<|w|<R_2\}$，则 $f$ 将闭圆环 $\{z\in\mathbb C:r_1\le|z|\le r_2\}$ 同胚地映为闭圆环 $\{w\in\mathbb C:R_1\le|w|\le R_2\}$。

**3.** 设 $D$ 是由简单闭曲线所围成的单连通域，$z_1,z_2,z_3\in\partial D$ 是彼此不同的三点，按 $\partial D$ 的正向排列。证明：若 $w_1,w_2,w_3\in\partial B(0,1)$ 是彼此不同的三点，按 $\partial B(0,1)$ 的正向排列，则存在唯一的 $\varphi$，将 $D$ 双全纯地映为 $B(0,1)$，将 $\overline D$ 同胚地映为 $\overline{B(0,1)}$，并且 $f(z_k)=w_k,\ k=1,2,3$。

**4.** （边界对应原理）设 $D$ 是由简单闭曲线 $\gamma$ 所围成的单连通域（$\gamma$ 不必可求长），$f\in H(D)\cap C(\overline D)$。证明：若 $f$ 将 $\gamma$ 一一地映为简单闭曲线 $\Gamma$，则 $f$ 将 $D$ 双全纯地映为由 $\Gamma$ 所围成的单连通域 $G$。将这里的结论与习题 4.4 中的第 17 题作比较。

**5.** 设 $f\in H(B(0,1))$，$f(0)=0,f'(0)=a>0$。证明：若 $f(B(0,1))\subset B(0,1)$，则 $f$ 在

$$
B\left(0,\frac{a}{1+\sqrt{1-a^2}}\right)
$$

上双全纯。

## 习题 7.4

**1.** 设 $L_k=\{z=re^{2k\pi i/n}:1\le r<\infty\}$，$G=\mathbb C\setminus\bigl(\bigcup_{k=1}^nL_k\bigr)$。求出将上半平面映为 $G$ 的双全纯映射 $\varphi$，使得 $\varphi(i)=0$。

教材括号提示：

$$
\varphi(z)=\frac{z^2+1}{\left(\displaystyle\sum_{k=0}^{\lfloor n/2\rfloor}(-1)^k\binom n{2k}z^{n-2k}\right)^{2/n}}.
$$

**2.** 证明：将 $B(0,1)$ 映为 $n$ 角形内部的双全纯映射 $\varphi$ 具有形状

$$
\varphi(z)=C_0\int_{z_0}^z\prod_{k=1}^n(\zeta-a_k)^{\alpha_k-1}\,d\zeta+C_1,
$$

其中，$a_1,\ldots,a_n\in\partial B(0,1)$ 是与该 $n$ 角形顶点相对应的点；$\alpha_1\pi,\ldots,\alpha_n\pi$ 是该 $n$ 角形的内角；$z_0\in B(0,1)$。

**3.** 设 $G$ 是正 $n$ 角形，$O$ 是它的中心，$1$ 是它的一个顶点。求出将 $B(0,1)$ 映为 $G$ 的双全纯映射 $\varphi$，使得 $\varphi(0)=0,\varphi'(0)>0$。

教材括号提示：

$$
\varphi(z)=\frac{n}{B(1/n,1-2/n)}\int_0^z(1-\zeta^n)^{-2/n}\,d\zeta.
$$

**4.** 证明：将上半平面映为 $\mathbb C_\infty$ 中的 $n$ 角形外部的单叶亚纯函数 $\varphi$ 具有形状

$$
\varphi(z)=C_0\int_{z_0}^z\prod_{k=1}^n(\zeta-a_k)^{\alpha_k-1}
\frac1{(\zeta-a_0)(\zeta-\bar a_0)}\,d\zeta+C_1,
$$

其中，$a_1,\ldots,a_n\in\mathbb R$ 是与该 $n$ 角形顶点相对应的点；$\alpha_1\pi,\ldots,\alpha_n\pi$ 是该 $n$ 角形的外角；$a_0=\varphi^{-1}(\infty)$，$\operatorname{Im}z_0>0$。

**5.** 设

$$
G=\mathbb C_\infty\setminus\bigl([0,1]\cup[0,e^{2\pi i/3}]\cup[0,e^{-2\pi i/3}]\bigr),
$$

$\operatorname{Im}z_0>0$。求出将上半平面映为 $G$ 的单叶亚纯映射 $\varphi$，使得 $\varphi(z_0)=\infty$。

教材括号提示（原样保留）：

$$
\varphi(z)=\frac{\bigl[(z-z_0)^3-3y_0^2(z-x_0)\bigr]^{2/3}}{(z-x_0)^2+y_0^2}.
$$

**6.** 设 $L_1,\ldots,L_n$ 是以 $O$ 为端点的 $n$ 条线段，它们彼此仅在 $O$ 处相交，$\operatorname{Im}a_0>0$。证明：将上半平面映为 $G=\mathbb C_\infty\setminus\bigl(\bigcup_{k=1}^nL_k\bigr)$，并且将 $a_0$ 映为 $\infty$ 的单叶亚纯函数 $\varphi$ 具有形状

$$
\varphi(z)=C\frac{\prod_{k=1}^n(z-a_k)^{\alpha_k}}{(z-a_0)(z-\bar a_0)},
$$

其中，$a_1,\ldots,a_n\in\mathbb R$；$\alpha_1,\ldots,\alpha_n>0$，并且 $\sum_{k=1}^n\alpha_k=2$。

## 原题校注

**校注 7.2.2 的最大值。** 题设允许无界单连通域，例如上半平面，其边界上的 $|z-a|$ 没有有限最大值。通用写法应将右端改为 $\sup_{z\in\partial D}|z-a|$，允许为 $+\infty$；若另设 $D$ 有界，原来的最大值写法成立。左端最小值在任意真域都取得：边界非空闭，最小化序列可限制于一个闭圆盘。

**校注 7.3.2 的圆环约定。** 按通常圆环约定取 $0<r_1<r_2<\infty$、$0<R_1<R_2<\infty$；若讨论退化或无界圆环，应另明确闭包和无穷远的含义。

**校注 7.3.3 的函数字母。** 题末 $f(z_k)=w_k$ 中的 $f$ 应统一为前面的 $\varphi$。这里只保留原题并指出记号不一致。

**校注 7.3.5 的“双全纯”。** 应理解为到其像域的双全纯映射，没有指定像仍为某个圆盘。由 Schwarz 引理，题设已蕴含 $0<a\le1$，所以根号有意义。

**校注 7.4.4 的分母次数。** 按印刷原式，被积函数在 $a_0\in\mathbb H$ 只有单极点，留数非零；其原函数出现对数分支，不可能是题设的单值亚纯映射。单叶亚纯映射在 $a_0$ 为简单极点，其导数应有二阶极点。因此对应的正确结构应在导数中含

$$
\frac1{(\zeta-a_0)^2(\zeta-\bar a_0)^2},
$$

而不是原式的一次因子。“外角”应指外域在顶点的内角（$2\pi$ 减去有界多边形内角），不指转向角。实际参数还须使导数在 $a_0$ 的留数为零，才能积分成亚纯函数；不能只改指数后就声称任意参数都适用。原题须按此修订再证明。

**校注 7.4.5 的提示疑误。** 按通常记号 $z_0=x_0+iy_0$。取 $z_0=i$，教材提示在边界点 $z=0$ 的分子括号内为 $i$，其 $2/3$ 次幂的任何值都不在三条目标径向线段上，故该提示不符合所求映射的边界。疑误位于 $(z-z_0)^3$；改为 $(z-x_0)^3$ 才具有相应实轴多项式结构。此处将原提示标为需修订，不把它作为已核实答案。

**分支与端点。** 7.4.1、7.4.3、7.4.5、7.4.6 的非整数幂均须指定全纯分支；教材括号公式只是提示，不自动给出分支选择。正 $n$ 角形默认 $n\ge3$。本章例 7.4.9 的两条删去射线须含端点，相关更正已在讲义正文注明。以上校注均与原题分开，不计作习题解答。


<!-- chapter-navigation -->
[§7.1　正规族](/notes/7d3ba7b233a5e5f2a5a61cbf/) · [§7.2　Riemann 映射定理](/notes/bc301d220387e1c03e60da79/) · [§7.3　边界对应定理](/notes/986c9a61d50e2962aa5ed4e9/) · [§7.4　Schwarz–Christoffel 公式](/notes/96ec01b5bf1cea54d9eb43c7/) · [返回第七章目录](/math/complex-functions/#chapter-7)
