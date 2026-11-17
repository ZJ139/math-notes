---
title: "第一章习题：复数与复变函数"
description: "史济怀、刘太顺《复变函数》第一章 7 节共 63 道习题原题，保留题号与配图，并列必要校勘。"
subject: "复变函数"
category: "complex-functions/chapter-1"
tags: ["复变函数", "习题原题", "第一章"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
attachment: "notes/complex-functions/complex-functions-chapter-1.pdf"
---

按上传教材的节次、原题号收录第一章全部 63 道习题，不附解答。页码为教材印刷页；“校勘”单独标识，原题中有疑义的表述不默默改写。图 1.5—1.7 保留教材原图。

[习题 1.1](#习题-11) · [习题 1.2](#习题-12) · [习题 1.3](#习题-13) · [习题 1.4](#习题-14) · [习题 1.5](#习题-15) · [习题 1.6](#习题-16) · [习题 1.7](#习题-17)

## 习题 1.1

教材第 3—4 页，共 8 题。

**1.** 证明命题 1.1.3 中的（1）、（2）、（3）、（5）。所引用的结论为

$$
\begin{aligned}
\operatorname{Re}z&=\tfrac12(z+\bar z),&\operatorname{Im}z&=\tfrac1{2i}(z-\bar z),\\
z\bar z&=|z|^2,&\overline{z+w}&=\bar z+\bar w,\\
\overline{zw}&=\bar z\bar w,&|\bar z|&=|z|.
\end{aligned}
$$

**2.** 设 $z_1,\ldots,z_n$ 是任意 $n$ 个复数，证明

$$
|z_1+\cdots+z_n|\le |z_1|+\cdots+|z_n|,
$$

并给出不等式中等号成立的条件。

**3.** 证明：

$$
\frac1{\sqrt2}\bigl(|\operatorname{Re}z|+|\operatorname{Im}z|\bigr)
\le|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|.
$$

**4.** 若 $|z_1|=\lambda|z_2|$，$\lambda>0$，证明 $|z_1-\lambda^2z_2|=\lambda|z_1-z_2|$。

**5.** 设 $|a|<1$，证明：若 $|z|=1$，则

$$
\left|\frac{z-a}{1-\bar a z}\right|=1.
$$

**6.** 设 $|a|<1$、$|z|<1$，证明：

$$
\begin{aligned}
\text{(1)}\quad &\left|\frac{z-a}{1-\bar a z}\right|<1;\\
\text{(2)}\quad &1-\left|\frac{z-a}{1-\bar a z}\right|^2
=\frac{(1-|a|^2)(1-|z|^2)}{|1-\bar a z|^2};\\
\text{(3)}\quad &\frac{\bigl||z|-|a|\bigr|}{1-|a||z|}
\le\left|\frac{z-a}{1-\bar a z}\right|
\le\frac{|z|+|a|}{1+|a||z|}.
\end{aligned}
$$

**7.** 设 $z_1,\ldots,z_n,w_1,\ldots,w_n$ 是任意 $2n$ 个复数，证明复数形式的 Lagrange 等式：

$$
\begin{aligned}
\left|\sum_{j=1}^n z_jw_j\right|^2
={}&\left(\sum_{j=1}^n|z_j|^2\right)\left(\sum_{j=1}^n|w_j|^2\right)\\
&-\sum_{1\le j<k\le n}|z_j\bar w_k-z_k\bar w_j|^2,
\end{aligned}
$$

并由此推出 Cauchy 不等式

$$
\left|\sum_{j=1}^n z_jw_j\right|^2
\le\left(\sum_{j=1}^n|z_j|^2\right)\left(\sum_{j=1}^n|w_j|^2\right).
$$

不等式中等号成立的条件是什么？

**8.** 设 $z_1,\ldots,z_n$ 是任意 $n$ 个复数，证明必有 $\{1,2,\ldots,n\}$ 的子集 $E$，使得

$$
\left|\sum_{j\in E}z_j\right|\ge\frac16\sum_{j=1}^n|z_j|.
$$

## 习题 1.2

教材第 9—11 页，共 20 题。

**1.** 把复数 $z=1+\cos\theta+i\sin\theta$ 写成三角形式。

**2.** 问 $n$ 取何值时有 $(1+i)^n=(1-i)^n$？

**3.** 证明：

$$
\begin{aligned}
\sum_{k=0}^n\cos k\theta
&=\frac{\sin(\theta/2)+\sin((n+\tfrac12)\theta)}{2\sin(\theta/2)},\\
\sum_{k=0}^n\sin k\theta
&=\frac{\cos(\theta/2)-\cos((n+\tfrac12)\theta)}{2\sin(\theta/2)}.
\end{aligned}
$$

校勘：按分式写法须有 $\theta\notin2\pi\mathbb Z$；其余取值可另直接计算或按连续延拓理解。

**4.** 证明：$\triangle z_1z_2z_3$ 和 $\triangle w_1w_2w_3$ 同向相似的充分必要条件为

$$
\begin{vmatrix}z_1&w_1&1\\z_2&w_2&1\\z_3&w_3&1\end{vmatrix}=0.
$$

**5.** 设 $z_1\ne z_2$，证明：

（1）$z$ 位于以 $z_1,z_2$ 为端点的开线段上，当且仅当存在 $\lambda\in(0,1)$，使得 $z=\lambda z_1+(1-\lambda)z_2$；

（2）$z$ 位于以 $z_1,z_2$ 为端点的开圆弧上，当且仅当存在 $\theta$（$0<|\theta|<\pi$），使得

$$
\arg\frac{z-z_1}{z-z_2}=\theta.
$$

校勘：第（2）问应把 $\theta$ 理解为决定所讨论圆弧的固定常数，不能让它随点任意变化。

**6.** 证明：三点 $z_1,z_2,z_3$ 共线的充要条件为

$$
\begin{vmatrix}z_1&\bar z_1&1\\z_2&\bar z_2&1\\z_3&\bar z_3&1\end{vmatrix}=0.
$$

**7.** 图 1.5 是三个边长为 $1$ 的正方形，证明

$$
\angle AOD+\angle BOD+\angle COD=\frac\pi2.
$$

**8.** 图 1.6 中，$ABED,ACFG$ 是正方形，$AH\perp BC$，$M$ 是 $DG$ 的中点。证明：$M,A,H$ 三点共线。

**9.** 在平行四边形 $ABCD$ 中（见图 1.7），如果

$$
\overline{AC}^{\,2}\cdot\overline{BD}^{\,2}
=\overline{AB}^{\,4}+\overline{AD}^{\,4},
$$

那么这个平行四边形的锐角等于 $\pi/4$。

![教材图 1.5、1.6、1.7，分别对应习题 1.2 第 7、8、9 题](/figures/complex-functions/ch01-exercise-figures.png)

**10.** 证明

$$
|z_1+z_2|^2+|z_1-z_2|^2=2(|z_1|^2+|z_2|^2),
$$

并说明等式的几何意义。

**11.** 设 $z_1,\ldots,z_n$ 是单位圆周（以原点为中心、半径为 $1$ 的圆周）上的 $n$ 个点，如果它们是正 $n$ 边形的 $n$ 个顶点，证明 $z_1+\cdots+z_n=0$。

**12.** 设 $z_1,z_2,z_3$ 是单位圆周上的三个点，证明：这三个点是一正三角形三个顶点的充要条件为 $z_1+z_2+z_3=0$。

**13.** 设 $z_1,z_2,z_3,z_4$ 是单位圆周上的四个点，证明：这四个点是一矩形顶点的充要条件为 $z_1+z_2+z_3+z_4=0$。

校勘：第 12、13 题中作为顶点的点按互异理解，第 11 题按非退化正多边形理解。

**14.** 设 $L$ 是由方程

$$
az\bar z+\bar\beta z+\beta\bar z+d=0
$$

所确定的点的轨迹，其中 $a,d$ 是实数，$\beta$ 是复数。证明：

（1）当 $a=0,\beta\ne0$ 时，$L$ 是直线；

（2）当 $a\ne0,|\beta|^2-ad>0$ 时，$L$ 是一圆周，并求出其圆心和半径。

**15.** 设 $z_1\ne z_2$、$0<\lambda\ne1$，证明由方程

$$
\left|\frac{z-z_1}{z-z_2}\right|=\lambda
$$

所确定的点 $z$ 的轨迹是一圆周（通常称为 Apollonius 圆），该圆周的圆心 $a$ 和半径 $R$ 分别为

$$
a=\frac{z_1-\lambda^2z_2}{1-\lambda^2},\qquad
R=\frac{\lambda|z_1-z_2|}{|1-\lambda^2|}.
$$

并问 $\lambda=1$ 时其轨迹是什么？

**16.** 如果 $z_1,\ldots,z_n$ 都位于过原点的直线的一侧，证明 $1/z_1,\ldots,1/z_n$ 也必位于该直线的某一侧，且满足

$$
z_1+\cdots+z_n\ne0,\qquad
\frac1{z_1}+\cdots+\frac1{z_n}\ne0.
$$

校勘：原题“该直线”一般不正确，应改为“原直线关于实轴对称所得直线”；“一侧”指严格的同一侧。此处保留原句并提示修正，避免对错误命题作证明。

**17.** 设 $z_1,\ldots,z_n$ 是一个凸 $n$ 边形的 $n$ 个顶点，如果 $a$ 满足

$$
\frac1{z_1-a}+\cdots+\frac1{z_n-a}=0,
$$

那么 $a$ 必在这个凸 $n$ 边形的内部。

**18.** 证明：

$$
\sin\frac\pi n\sin\frac{2\pi}n\cdots\sin\frac{(n-1)\pi}n
=\frac n{2^{n-1}}.
$$

提示：考虑方程式 $(z+1)^n=1$ 的 $n-1$ 个不为零的根的乘积。

**19.** 设 $0<\theta<\pi/2$，

$$
P_m(x)=\sum_{k=0}^m(-1)^k\binom{2m+1}{2k+1}x^{m-k}.
$$

证明：$\sin(2m+1)\theta=\sin^{2m+1}\theta\,P_m(\cot^2\theta)$。

**20.** 利用上题结果证明：

$$
\begin{aligned}
\text{(1)}\quad &\sum_{k=1}^m\cot^2\frac{k\pi}{2m+1}=\frac{m(2m-1)}3;\\
\text{(2)}\quad &\prod_{k=1}^m\cot^2\frac{k\pi}{2m+1}=\frac1{2m+1}.
\end{aligned}
$$

## 习题 1.3

教材第 13 页，共 6 题。

**1.** 证明：在复数的球面表示下，$z$ 和 $1/\bar z$ 的球面像关于复平面对称。

**2.** 证明：在复数的球面表示下，$z$ 和 $w$ 的球面像是直径对点当且仅当 $z\bar w=-1$。

校勘：乘积表达式用于有限非零复数；$0$ 与 $\infty$ 另成一对直径对点。

**3.** 证明：在复数的球面表示下，$\mathbb C_\infty$ 中的点 $z,w$ 的球面像间的距离为

$$
\frac{2|z-w|}{\sqrt{(|z|^2+1)(|w|^2+1)}}.
$$

校勘：含 $\infty$ 时按极限理解，不能直接代入未定义的 $\infty/\infty$。

**4.** 证明：在复数的球面表示下，若 $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ 是二阶酉方阵，则 $\mathbb C_\infty$ 的变换 $w=(az+b)/(cz+d)$ 诱导了球面绕球心的一个旋转。

**5.** 证明：在复数的球面表示下，球面上的圆周对应于复平面上的圆周或直线，反之亦然。

**6.** 证明：在复数的球面表示下，复平面上两条光滑曲线在交点处的夹角与它们的球面像在交点处的夹角相等。

## 习题 1.4

教材第 14—15 页，共 5 题。

**1.** 设 $z_0\notin(-\infty,0]$，$z_n\ne0$（$\forall n\in\mathbb N$）。证明：复数列 $\{z_n\}$ 收敛到 $z_0$ 的充要条件是 $\lim_{n\to\infty}|z_n|=|z_0|$ 和 $\lim_{n\to\infty}\arg z_n=\arg z_0$。

**2.** 设 $z=x+iy\in\mathbb C$，证明：

$$
\lim_{n\to\infty}\left(1+\frac zn\right)^n
=\mathrm e^x(\cos y+i\sin y).
$$

**3.** 证明：如果 $\lim_{n\to\infty}z_n=z_0$，则

$$
\lim_{n\to\infty}\frac{z_1+z_2+\cdots+z_n}{n}=z_0.
$$

**4.** 证明：若 $\lim_{n\to\infty}z_n=z_0$、$\lim_{n\to\infty}w_n=w_0$，则

$$
\lim_{n\to\infty}\frac1n\sum_{k=1}^n z_kw_{n-k}=z_0w_0.
$$

**5.** 设无穷三角阵

$$
\begin{matrix}
a_{11}&&&\\
a_{21}&a_{22}&&\\
a_{31}&a_{32}&a_{33}&\\
\vdots&\vdots&\vdots&\ddots
\end{matrix}
$$

满足：

（1）对任意固定的 $k$，$\lim_{n\to\infty}a_{nk}=a_k$ 存在；

（2）$\lim_{n\to\infty}\sum_{k=1}^na_{nk}$ 存在；

（3）$\sum_{k=1}^n|a_{nk}|\le M<\infty$，$\forall n\in\mathbb N$。

证明：若复数列 $\{z_n\}$ 收敛，则 $\lim_{n\to\infty}\sum_{k=1}^na_{nk}z_k$ 存在。

## 习题 1.5

教材第 20 页，共 10 题。

**1.** 证明：一个平面点集的孤立点的全体至多可列。

**2.** 设 $E\subset\mathbb C$ 是非空点集，$z,w\in\mathbb C$。证明 $|d(z,E)-d(w,E)|\le|z-w|$ 成立，而 $|d(z,E)-d(w,E)|\le d(z-w,E)$ 不成立。

**3.** 指出下列点集的内部、边界、闭包和导集：

（1）$\mathbb N=\{k:k\text{ 为自然数}\}$；

（2）$E=\{1/k:k\text{ 为自然数}\}$；

（3）$D=B(1;1)\cup B(-1;1)$；

（4）$G=\{z\in\mathbb C:1<|z|\le2\}$；

（5）$\mathbb C$。

**4.** 指出下列点集中哪些是开集，哪些是闭集，哪些是紧集：

（1）$\mathbb Z=\{k:k\text{ 为整数}\}$；

（2）$E$ 为有限集；

（3）$D=\{z\in\mathbb C:\operatorname{Im}z>0\}\setminus\bigl(\bigcup_{k=-\infty}^{\infty}F_k\bigr)$，其中 $F_k=\{z\in\mathbb C:z=k+iy,\ 0\le y\le1\}$；

（4）$G=B(0;1)\setminus\{1/(k+1):k\text{ 为自然数}\}$；

（5）$\mathbb C\setminus B(\infty;R)$。

**5.** 证明：若 $D$ 为开集，则 $D'=\bar D=\partial D\cup D$。

**6.** 设 $\Lambda$ 是指标集，$\{D_\alpha\}_{\alpha\in\Lambda}$ 是开集族，$\{F_\alpha\}_{\alpha\in\Lambda}$ 是闭集族。证明：$\bigcup_{\alpha\in\Lambda}D_\alpha$ 是开集，$\bigcap_{\alpha\in\Lambda}F_\alpha$ 是闭集。

**7.** 证明：有限个开集的交是开集，有限个闭集的并是闭集。

**8.** 设 $D$ 是开集，$F\subset D$ 是非空紧集。证明：

（1）$d(F,\partial D)>0$；

（2）对任意 $0<\delta<d(F,\partial D)$，存在 $F$ 中的点 $z_1,\ldots,z_n$，使得

$$
F\subset\bigcup_{k=1}^nB(z_k;\delta)\subset D,
$$

并且

$$
d\left(\bigcup_{k=1}^nB(z_k;\delta),\partial D\right)
\ge d(F,\partial D)-\delta.
$$

校勘：$D=\mathbb C$ 时边界为空，需约定到空集距离为 $+\infty$，或另限 $D\ne\mathbb C$。

**9.** 证明：若 $E$ 是闭集，$F$ 是紧集，则存在 $z_0\in E,w_0\in F$，使得 $d(E,F)=|z_0-w_0|$。将 $F$ 换成闭集后是否还存在这样的 $z_0,w_0$？

校勘：本题须补充 $E,F$ 非空。

**10.** 证明：若 $E\subset\mathbb C$ 既是开集，又是闭集，则 $E$ 是空集或 $E=\mathbb C$。

## 习题 1.6

教材第 23—24 页，共 5 题。

**1.** 满足下列条件的点 $z$ 所组成的点集是什么？如果是域，说明它是单连通域还是多连通域？

（1）$\operatorname{Re}z=1$；

（2）$\operatorname{Im}z<-5$；

（3）$|z-i|+|z+i|=5$；

（4）$|z-i|\le|2+i|$；

（5）$\arg(z-1)=\pi/6$；

（6）$|z|<1$，$\operatorname{Im}z>1/2$；

（7）$|(z-1)/(z+1)|\le2$；

（8）$0<\arg((z-i)/(z+i))<\pi/4$。

**2.** 证明：非空点集 $E\subset\mathbb R$ 为连通集，当且仅当 $E$ 是一个区间。

**3.** 设 $E$ 是非空点集，$A$ 是 $E$ 的非空子集。若 $A$ 是连通的，并且不存在 $E$ 的连通子集真包含 $A$，则称 $A$ 是 $E$ 的连通分支。证明：开集的连通分支仍然是开集，闭集的连通分支仍然是闭集。

**4.** 设 $E$ 是非空点集，$\varepsilon>0$。若对于 $E$ 中任意两点 $a,b$，存在 $E$ 中有限个点 $a=z_0,z_1,\ldots,z_n=b$，使得 $|z_k-z_{k-1}|<\varepsilon$（$1\le k\le n$），则称 $E$ 为 $\varepsilon$-连通的。证明：紧集连通的充要条件是，对任意 $\varepsilon>0$，它都是 $\varepsilon$-连通的。并举例说明将紧集改为闭集后结论不再成立。

**5.** 证明：若 $D$ 是有界单连通域，则 $\partial D$ 连通。举例说明，若 $D$ 是无界单连通域，则 $\partial D$ 可能不连通。

## 习题 1.7

教材第 26 页，共 9 题。

**1.** 证明：若 $E$ 是紧集，$f:E\to\mathbb C$ 连续，则 $f$ 在 $E$ 上一致连续。

**2.** 证明：若 $D$ 是单连通域，$0\notin D$，则必存在 $D$ 上的连续函数 $\varphi(z)$，使得 $\varphi(z)\in\operatorname{Arg}z$，$\forall z\in D$。$\varphi(z)$ 称为 $\operatorname{Arg}z$ 在 $D$ 上的一个单值连续分支。

**3.** 证明：若 $E$ 是紧集，$f$ 在 $E$ 上连续，则 $f(E)$ 也是紧集。将紧集换成闭集，结论是否成立？

**4.** 设 $f$ 是域 $D$ 上的连续函数，并且对任意 $z_0\in\partial D$，$\lim_{z\to z_0}f(z)$ 存在，证明

$$
F(z)=\begin{cases}
f(z),&z\in D,\\
\displaystyle\lim_{\zeta\to z}f(\zeta),&z\in\partial D
\end{cases}
$$

在 $\bar D$ 上连续。

**5.** 证明：若 $f$ 在域 $D$ 上一致连续，则对任意 $z_0\in\partial D$，$\lim_{z\to z_0}f(z)$ 存在。

**6.** 研究 $f(z)=1/(1-z)$ 和 $g(z)=1/(1+z^2)$ 在 $B(0;1)$ 上的连续性与一致连续性。

**7.** 设连续映射 $f:E\to\mathbb C$ 满足 $f(z)\ne f(w)$（$\forall z,w\in E,z\ne w$），则称 $f$ 是 $E$ 上的一一连续映射。证明：若 $E$ 是紧集，$f$ 是 $E$ 上的一一连续映射，则 $f^{-1}:f(E)\to E$ 也是一一连续映射，即 $f:E\to f(E)$ 是一个同胚映射。将紧集换成闭集，结论是否成立？

**8.** 证明：

（1）存在连续映射将 $[0,1]$ 映为 $\partial B(0;1)$；

（2）不存在一一连续映射将 $[0,1]$ 映为 $\partial B(0;1)$。

**9.** 设 $f$ 是域 $D$ 上的复变函数，$z_0\in\partial D$。若 $\lim_{z\to z_0}f(z)=A$ 存在，则称 $A$ 是 $f$ 在 $z_0$ 处的边界值，记为 $f(z_0)=A$。举例说明，存在开正方形 $G$ 上的同胚映射，其不能在 $\bar G$ 上处处都有边界值。

[返回第一章目录](/math/complex-functions/#chapter-1)
