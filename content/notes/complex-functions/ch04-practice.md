---
title: "第四章习题：全纯函数的 Taylor 展开及其应用"
description: "五节全部 91 道教材原题，保留编号、条件、小问与提示；疑义另列校勘，不附常规解答。"
subject: "复变函数"
category: "complex-functions/chapter-4"
tags: ["复变函数", "第四章", "习题原题"]
created_at: "2026-11-19"
updated_at: "2026-11-20"
attachment: "notes/complex-functions/complex-functions-chapter-4.pdf"
---

以用户上传的史济怀、刘太顺《复变函数》（向禹重排本）为底本，逐页核对印刷第 108—140 页的五组习题，题数依次为 14、12、15、18、32，共 91 题。题面与讲义分离，不附常规解答；原书有误或条件不足的题目仍保留原式，并在各组末尾单列校勘。校勘中的反例仅用于说明原命题不能直接作答。

$H(\overline D)$ 按教材惯例表示在包含 $\overline D$ 的某个开邻域全纯；不等同于 $H(D)\cap C(\overline D)$。$B(\infty,R)$ 沿用教材外圆域记号。闭曲线取正向，多连通域的外边界逆时针、内边界顺时针；特殊约定以题面为准。

[习题 4.1](#习题-41) · [习题 4.2](#习题-42) · [习题 4.3](#习题-43) · [习题 4.4](#习题-44) · [习题 4.5](#习题-45)

## 习题 4.1

教材第 108—110 页，共 14 题。

**1.** 证明：复数项级数 $\sum_{n=1}^{\infty}z_n$ 收敛，当且仅当 $\sum_{n=1}^{\infty}\operatorname{Re}z_n$ 和 $\sum_{n=1}^{\infty}\operatorname{Im}z_n$ 同时收敛。

**2.** 证明：若 $\{a_n\}$ 和 $\{b_n\}$ 满足条件

（1）$\{\sum_{k=1}^n a_k\}$ 有界；

（2）$\lim_{n\to\infty}b_n=0$；

（3）$\sum_{n=1}^{\infty}|b_n-b_{n+1}|<\infty$，

则级数 $\sum_{n=1}^{\infty}a_nb_n$ 收敛，并验证这是 Dirichlet 判别法和 Abel 判别法的推广。

**3.** 设 $\sum_{n=1}^{\infty}f_n(z)$ 是非空点集 $E$ 上的函数项级数。证明：$\sum_{n=1}^{\infty}f_n(z)$ 在 $E$ 上一致收敛，当且仅当 $\sum_{n=1}^{\infty}\operatorname{Re}f_n(z)$ 和 $\sum_{n=1}^{\infty}\operatorname{Im}f_n(z)$ 都在 $E$ 上一致收敛。

**4.** 设 $0<\alpha<\pi/2$，$-\alpha\le\arg z_n\le\alpha$，$\forall n\in\mathbb N$。证明：级数 $\sum z_n$、$\sum\operatorname{Re}z_n$ 和 $\sum|z_n|$ 具有相同的敛散性。

**5.** 设 $\operatorname{Re}z_n\ge0$，$\forall n\in\mathbb N$。证明：若 $\sum_{n=1}^{\infty}z_n$ 和 $\sum_{n=1}^{\infty}z_n^2$ 都收敛，则 $\sum_{n=1}^{\infty}|z_n|^2$ 也收敛。

**6.** 设 $\sum_{n=1}^{\infty}z_n$ 是复数项级数，且 $\limsup_{n\to\infty}\sqrt[n]{|z_n|}=q$。证明：

（1）若 $q<1$，则 $\sum z_n$ 绝对收敛；

（2）若 $q>1$，则 $\sum z_n$ 发散。

**7.** 求下列函数项级数的收敛点集：

$$
\text{(1)}\quad\sum_{n=1}^{\infty}\frac{\cos nz}{n^2};
\qquad
\text{(2)}\quad\sum_{n=1}^{\infty}\frac{z^n}{1-z^n}.
$$

**8.** 设 $z_n\in\mathbb C\setminus\{0\}$，$\forall n\in\mathbb N$，且 $\limsup_{n\to\infty}|z_{n+1}/z_n|=q$。证明：

（1）若 $q<1$，则 $\sum z_n$ 绝对收敛；

（2）若 $q>1$，则 $\sum z_n$ 可能收敛也可能发散。

**9.（Raabe 判别法）** 设 $z_n\in\mathbb C\setminus\{0\}$，$\forall n\in\mathbb N$，且 $\lim_{n\to\infty}|z_{n+1}/z_n|=1$。证明：若

$$
\limsup_{n\to\infty}n\left(\left|\frac{z_{n+1}}{z_n}\right|-1\right)<-1,
$$

则 $\sum_{n=1}^{\infty}z_n$ 绝对收敛。

**10.** 判别下列级数的敛散性：

（1）$\displaystyle\sum_{n=1}^{\infty}\frac{e^{inz}}n$，$\operatorname{Im}z>0$；

（2）

$$
\sum_{n=1}^{\infty}
\frac{\alpha(\alpha+1)\cdots(\alpha+n-1)\beta(\beta+1)\cdots(\beta+n-1)}
{n!\gamma(\gamma+1)\cdots(\gamma+n-1)},
$$

$\operatorname{Re}(\alpha+\beta-\gamma)<0$，$\gamma\ne0,-1,-2,\ldots$。

**11.** 证明：$\sum_{n=1}^{\infty}(-1)^{n-1}/(n-z)$ 在 $\mathbb C\setminus\mathbb N$ 上内闭一致收敛。

**12.** 设 $\sum_{n=1}^{\infty}f_n(z)$ 是域 $D$ 上的全纯函数项级数。证明：若 $\sum\operatorname{Re}f_n(z)$ 在 $D$ 上内闭一致收敛，则 $\sum\operatorname{Im}f_n(z)$ 或者在 $D$ 上内闭一致收敛，或者在 $D$ 上处处发散。

**13.** 证明：若域 $D$ 上的全纯函数列 $\{f_n(z)\}$ 在 $D$ 上内闭一致收敛于 $f(z)$，则 $f(z)$ 在 $D$ 上全纯，并且 $\{f_n^{(k)}(z)\}$ 在 $D$ 上内闭一致收敛于 $f^{(k)}(z)$，$\forall k\in\mathbb N$。

**14.** 若 $\{\lambda_n\}$ 是严格单调增加，并且以 $\infty$ 为极限的正数列，则称 $\sum_{n=1}^{\infty}a_ne^{-\lambda_nz}$ 为 Dirichlet 级数。证明：

（1）若该级数在 $z_0=x_0+iy_0$ 处收敛，则它在半平面 $\{z\in\mathbb C:\operatorname{Re}z>x_0\}$ 上内闭一致收敛；

（2）若该级数在 $z_0=x_0+iy_0$ 处绝对收敛，则它在闭半平面 $\{z\in\mathbb C:\operatorname{Re}z\ge x_0\}$ 上绝对一致收敛。

### 习题 4.1 校勘与约定

第 6、8、9 题分别按原书的上极限符号录入；第 9 题首个比值极限是普通极限。第 7（2）题的收敛点必须先在所有项都有定义的点中讨论，不能包含使某个 $1-z^n=0$ 的点。第 10（2）题若参数使级数终止，按有限和理解。

## 习题 4.2

教材第 116—117 页，共 12 题。

**1.** 设 $\sum_{n=0}^{\infty}a_nz^n$ 和 $\sum_{n=0}^{\infty}b_nz^n$ 的收敛半径分别为 $R_1$ 和 $R_2$。证明：

（1）$\sum_{n=0}^{\infty}(a_n\pm b_n)z^n$ 的收敛半径 $R\ge\min\{R_1,R_2\}$；

（2）$\sum_{n=0}^{\infty}a_nb_nz^n$ 的收敛半径 $R\ge R_1R_2$；

（3）$\sum_{n=0}^{\infty}(\sum_{k=0}^na_kb_{n-k})z^n$ 的收敛半径 $R\ge\min\{R_1,R_2\}$。

**2.** 求下列幂级数的收敛半径：

$$
\begin{aligned}
\text{(1)}&\quad\sum_{n=1}^{\infty}z^{n!};
&\text{(2)}&\quad\sum_{n=0}^{\infty}\frac{z^n}{2^{n^2}};\\
\text{(3)}&\quad\sum_{n=0}^{\infty}[3+(-1)^n]^nz^n;
&\text{(4)}&\quad\sum_{n=0}^{\infty}\frac{n^n}{n!}z^n.
\end{aligned}
$$

**3.** 证明：若 $\sum_{n=0}^{\infty}a_nz^n$ 在 $z_0\ne0$ 处绝对收敛，则它在 $\overline{B(0,|z_0|)}$ 上绝对一致收敛。

**4.** 设正数列 $\{a_n\}$ 单调收敛于零。证明：

（1）$\sum_{n=1}^{\infty}a_nz^n$ 的收敛半径 $R\ge1$；

（2）$\sum_{n=1}^{\infty}a_nz^n$ 在 $\partial B(0,R)\setminus\{R\}$ 上处处收敛。

**5.** 证明（Abel 第二定理的又一说法）：若幂级数 $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ 在多角形域 $G$ 的每个顶点处都收敛，则它必在 $\overline G$ 上一致收敛。特别地，$f$ 在 $\overline G$ 上连续。

**6.** 证明：$\sum_{n=1}^{\infty}(-1)^{[\sqrt n]}z^n/n$ 在其收敛圆周 $\partial B(0,1)$ 上处处收敛，但不绝对收敛。

**7.** 证明：若 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 是 $B(0,1)$ 上的有界全纯函数，则 $\sum_{n=0}^{\infty}|a_n|^2<\infty$。

**8.** 设 $\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径 $R>0$。证明：

（1）$\varphi(z)=\sum_{n=0}^{\infty}(a_n/n!)z^n$ 是整函数；

（2）存在正数 $M$，使得

$$
|\varphi^{(n)}(z)|\le\frac{Me^{|z|/R}}{R^n},\qquad z\in\mathbb C,\ n\in\mathbb N.
$$

**9.** 举例说明 Abel 第二定理的逆不成立。

**10.** 设 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 将 $B(0,R)$ 一一地映为域 $G$。证明：$G$ 的面积为 $\pi\sum_{n=1}^{\infty}n|a_n^2|R^{2n}$。

**11.** 证明：幂级数 $\sum_{n=0}^{\infty}a_n(z-z_0)^n$ 在域 $D$ 上一致收敛，当且仅当它在 $\overline D$ 上一致收敛。

**12.** 设幂级数 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径为 $1$，$z_0\in\partial B(0,1)$。证明：若 $\lim_{n\to\infty}na_n=0$，并且 $\lim_{r\to1^-}f(rz_0)$ 存在，则 $\sum_{n=0}^{\infty}a_nz_0^n$ 收敛于 $\lim_{r\to1^-}f(rz_0)$。

### 习题 4.2 校勘与约定

第 1（2）题若出现 $0\cdot\infty$，原式无定义；此退化情形不能据此给出非平凡半径下界。第 2（4）题 $n=0$ 项的 $0^0$ 可约定为 $1$，不影响收敛半径。

**第 4（2）题原命题不成立。** 取 $a_n=2^{-n}$，则 $R=2$，在 $z=-2$ 通项为 $(-1)^n$，不趋于零。可确认的结论是单位圆周 $\partial B(0,1)\setminus\{1\}$ 上收敛；若要保留半径 $R$，还须对 $a_nR^n$ 增加相应条件。

第 6 题 $[\sqrt n]$ 表示整数部分。**第 8（2）题在精确收敛半径 $R$ 处条件不足。** 取 $R=1$、$a_n=n$（$n\ge1$），则 $\varphi^{(n)}(0)=n$，不存在统一 $M$。正确的一般估计应对每个 $0<r<R$ 写为 $|\varphi^{(n)}(z)|\le M_r e^{|z|/r}/r^n$；若另知 $|a_n|R^n$ 有界，才可用 $R$。

第 10 题按教材从 $n=1$ 开始求和，$|a_n^2|=|a_n|^2$；面积允许为无穷。第 12 题按圆内趋近理解 $r\uparrow1$，原书简写为 $r\to1$。

## 习题 4.3

教材第 122—124 页，共 15 题。

**1.** 设 $D$ 是域，$a\in D$，函数 $f$ 在 $D\setminus\{a\}$ 上全纯。证明：若 $\lim_{z\to a}(z-a)f(z)=0$，则 $f$ 在 $D$ 上全纯。

**2.** 将 $e^{z/(1-z)}$ 在 $z=0$ 处展开为幂级数。

**3.** 证明：

（1）$|e^z-1|\le e^{|z|}-1\le |z|e^{|z|}$，$\forall z\in\mathbb C$；

（2）$(3-e)|z|<|e^z-1|<(e-1)|z|$，$0<|z|<1$。

**4.** 设 $f\in H(B(0,R))\cap C(\overline{B(0,R)})$，$S_n(z)=\sum_{k=0}^nf^{(k)}(0)z^k/k!$。证明：

$$
\begin{aligned}
\text{(1)}\quad S_n(z)&=\frac1{2\pi i}\int_{|\zeta|=R}f(\zeta)
\frac{\zeta^{n+1}-z^{n+1}}{(\zeta-z)\zeta^{n+1}}\,d\zeta,\\
\text{(2)}\quad f(z)-S_n(z)&=\frac{z^{n+1}}{2\pi i}\int_{|\zeta|=R}
\frac{f(\zeta)}{\zeta^{n+1}(\zeta-z)}\,d\zeta,
\qquad z\in B(0,R).
\end{aligned}
$$

**5.** 是否存在 $f\in H(B(0,1))$，使得下述条件之一成立：

（1）$f(1/n)=n/(n+1)$，$n=2,3,4,\ldots$；

（2）$f(1/(2n))=0$，$f(1/(2n-1))=1$，$n=1,2,3,\ldots$；

（3）$f(1/n)=f(-1/n)=1/n^2$，$n=2,3,4,\ldots$；

（4）$f(1/n)=f(-1/n)=1/n^3$，$n=2,3,4,\ldots$。

**6.** 设 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径 $R>0$，$0<r<R$，$A(r)=\max_{|z|=r}\operatorname{Re}f(z)$。证明：

（1）$\displaystyle a_nr^n=\frac1\pi\int_0^{2\pi}[\operatorname{Re}f(re^{i\theta})]e^{-in\theta}\,d\theta$，$\forall n\in\mathbb N$；

（2）$|a_n|r^n\le2A(r)-2\operatorname{Re}f(0)$，$\forall n\in\mathbb N$。

**7.** 设 $f(z)=1+\sum_{n=1}^{\infty}a_nz^n$ 在 $B(0,1)$ 上全纯，并且 $\operatorname{Re}f(z)\ge0$，$\forall z\in B(0,1)$。证明：

（1）$|a_n|\le2$，$\forall n\in\mathbb N$；

（2）$\displaystyle\frac{1-|z|}{1+|z|}\le\operatorname{Re}f(z)\le|f(z)|\le\frac{1+|z|}{1-|z|}$，$\forall z\in B(0,1)$；

（3）$|a_1^2-a_2|\le2$，$|2a_1a_2-a_1^3-a_3|\le2$。

**8.** 证明：所有实变量的三角恒等式在复变量时也成立。

**9.** 证明：所有实变量的初等函数的幂级数展开式在复变量时也成立。

**10.** 证明：若函数 $1/\cos z$ 在 $z=0$ 处的 Taylor 级数为 $\sum_{n=0}^{\infty}(-1)^nE_{2n}z^{2n}/(2n)!$，则 Euler 数 $E_{2n}$ 满足关系式

$$
E_0=1,\qquad\sum_{k=0}^n\binom{2n}{2k}E_{2k}=0.
$$

**11.** 证明：若 $z/(e^z-1)$ 在 $z=0$ 处的 Taylor 级数为 $\sum_{n=0}^{\infty}B_nz^n/n!$，则 Bernoulli 数 $B_n$ 满足关系式

$$
B_0=1,\qquad\sum_{k=0}^n\binom{n+1}kB_k=0.
$$

特别地，$B_1=-1/2$，$B_{2n+1}=0$，$\forall n\in\mathbb N$。

**12.** 证明：若 $1/(1-z-z^2)$ 在 $z=0$ 处的 Taylor 级数为 $\sum_{n=0}^{\infty}a_nz^n$，则 Fibonacci 数 $a_n$ 满足关系式

$$
a_0=a_1=1,\qquad a_n=a_{n-1}+a_{n-2},\quad n\ge2.
$$

**13.** 设 $D$ 是有界域，$f\in H(D)\cap C(\overline D)$。证明：若 $f$ 在 $\partial D$ 上不取零值，则 $f$ 在 $D$ 中只有有限个零点。

**14.** 设 $D$ 是域，$a\in D$，$f\in H(D)$，并且 $\sum_{n=0}^{\infty}f^{(n)}(a)$ 收敛。证明：

（1）$f$ 是整函数；

（2）$\sum_{n=0}^{\infty}f^{(n)}(z)$ 在 $\mathbb C$ 上内闭一致收敛。

**15.** 设 $f(x)$ 是 $(-R,R)$ 上的 $C^\infty$ 实函数。证明：$f(x)$ 能在 $(-R,R)$ 上展开为它在 $x=0$ 处的 Taylor 级数，当且仅当存在 $[0,R)$ 上的正值函数 $M(r)$，使得当 $n\ge0$、$|x|<r<R$ 时，成立不等式

$$
|f^{(n)}(x)|\le\frac{M(r)n!}{(r-|x|)^{n+1}}.
$$

由此可见，实变量的函数能展开为 Taylor 级数的条件是多么苛刻。

### 习题 4.3 校勘与约定

第 1 题应理解为“可在 $a$ 处补定义使其全纯”，不是任意指定 $f(a)$ 后都全纯。第 5（2）题在 $n=1$ 使用了域外的 $f(1)$；应从 $n\ge2$ 考察，或另加边界定义，这不改变其内部聚点所致的矛盾。

第 8—9 题限于相应函数和分支都有定义的连通域；对数及非整数幂须固定与实变量一致的分支，不能跨分支机械套用。第 10—11 题的递推式从 $n\ge1$ 起；第 11 题先在零点作可去延拓。第 14 题“$f$ 是整函数”应准确理解为“$f$ 存在唯一的整函数延拓”，第二问指该延拓的导数。

## 习题 4.4

教材第 132—134 页，共 18 题。

**1.** 设 $D$ 是由有限条可求长简单闭曲线围成的域。证明：若 $f,g\in H(\overline D)$，$f$ 在 $\partial D$ 上没有零点，$f$ 在 $D$ 中的全部彼此不同的零点为 $z_1,z_2,\ldots,z_n$，其相应的阶数分别为 $k_1,k_2,\ldots,k_n$，则

$$
\frac1{2\pi i}\int_{\partial D}g(z)\frac{f'(z)}{f(z)}\,dz
=\sum_{j=1}^nk_jg(z_j).
$$

（说明：这是 Cauchy 积分公式和辐角原理的推广。）

**2.** 利用辐角原理证明代数学的基本定理。

**3.** 设 $\lambda>1$。证明：方程 $z=\lambda-e^{-z}$ 在右半平面 $\{z\in\mathbb C:\operatorname{Re}z>0\}$ 中恰有一个根，并且是正实根。

**4.** 设 $0<a_0<a_1<\cdots<a_n$。证明：三角多项式

$$
a_0+a_1\cos\theta+a_2\cos2\theta+\cdots+a_n\cos n\theta
$$

在 $(0,2\pi)$ 中有 $2n$ 个不同的零点。

（提示：首先证明 $P_n(z)=\sum_{k=0}^na_kz^k$ 在 $B(0,1)$ 中有 $n$ 个根。）

**5.** 利用 Rouché 定理证明代数学的基本定理。

**6.** 设 $0<r<1$。证明：当 $n$ 充分大时，多项式 $1+2z+3z^2+\cdots+nz^{n-1}$ 在 $B(0,r)$ 中没有根。

**7.** 设 $r>0$。证明：当 $n$ 充分大时，多项式 $1+z+z^2/2!+\cdots+z^n/n!$ 在 $B(0,r)$ 中没有根。

**8.** 设 $f(z)$ 在 $\overline{B(0,1)}$ 上全纯，并且 $f'(z)$ 在 $\partial B(0,1)$ 上无零点。证明：当 $n$ 充分大时，$F_n(z)=n[f(z+1/n)-f(z)]$ 与 $f'(z)$ 在 $B(0,1)$ 中的零点个数相等。

**9.** 设 $D$ 是域，$f_n:D\to\mathbb C\setminus\{0\}$ 是全纯映射，$\forall n\in\mathbb N$。证明：若 $\{f_n\}$ 在 $D$ 上内闭一致收敛于 $f$，则或者 $f(D)=\{0\}$，或者 $f(D)\subset\mathbb C\setminus\{0\}$。

**10.** 利用上题的结论证明：若域 $D$ 上的单叶全纯函数列 $\{f_n\}$ 在 $D$ 上内闭一致收敛于 $f$，则或者 $f$ 是常数，或者 $f$ 也是 $D$ 上的单叶全纯函数。

**11.** 求下列全纯函数在 $B(0,1)$ 中的零点个数：

（1）$z^9-2z^6+z^2-8z-2$；

（2）$2z^5-z^3+3z^2-z+8$；

（3）$z^7-5z^4+z^2-2$；

（4）$e^z-4z^n+1$。

**12.** 证明：若 $f\in H(B(0,1))\cap C(\overline{B(0,1)})$，$f(\overline{B(0,1)})\subset B(0,1)$，则 $f(z)$ 在 $B(0,1)$ 中有唯一的不动点。

**13.** 设 $a_1,a_2,\ldots,a_n\in B(0,1)$，$f(z)=\prod_{k=1}^n(a_k-z)/(1-\overline{a_k}z)$。证明：

（1）若 $b\in B(0,1)$，则 $f(z)=b$ 在 $B(0,1)$ 中恰有 $n$ 个根；

（2）若 $b\in B(\infty,1)$，则 $f(z)=b$ 在 $B(\infty,1)$ 中恰有 $n$ 个根。

**14.** 设 $f\in H(\overline{B(0,R)})$；$f$ 在 $\partial B(0,R)$ 上没有零点，在 $B(0,R)$ 中的零点个数为 $N$。证明：

$$
\max_{|z|=R}\operatorname{Re}\left(z\frac{f'(z)}{f(z)}\right)\ge N.
$$

**15.** 设 $f$ 是域 $D$ 上非常数的全纯函数。证明：存在在 $D$ 中无极限点的点列 $\{z_n\}$，使得对每个 $z\in D\setminus\{z_n\}$，有 $f'(z)\ne0$。

**16.** 设 $D$ 是由可求长简单闭曲线围成的单连通域，$f\in H(D)\cap C(\overline D)$。证明：若 $f$ 在 $\partial D$ 上取实值，则 $f$ 为常值函数。举例说明，对于一般的单连通域 $D$，结论不再成立。

**17.（边界对应原理的特例）** 设 $D$ 是由可求长简单闭曲线 $\gamma$ 围成的单连通域，$f\in H(D)\cap C(\overline D)$。证明：若 $f$ 将 $\gamma$ 一一地映为简单闭曲线 $\Gamma$，则 $f$ 将 $D$ 双全纯地映为由 $\Gamma$ 围成的单连通域 $G$。

**18.（辐角原理）** 设 $D$ 是由有限条可求长简单闭曲线围成的域，$f\in H(D)\cap C(\overline D)$。证明：若 $f$ 在 $\partial D$ 上不取零值，则 $f$ 在 $D$ 中的零点个数为

$$
\frac1{2\pi}\Delta_{\partial D}\operatorname{Arg}f(z),
$$

其中，$n$ 阶零点视为 $n$ 个零点。

### 习题 4.4 校勘与约定

第 1、8、14 题中的闭域全纯均指开邻域全纯，这保证边界导数和第 8 题的平移有定义。第 11（4）题按 $n\in\mathbb N$ 理解。第 13 题按重数计根；外圆域题在扩充平面中理解，无穷远点可能贡献根或极点，不能先排除它。第 15 题零点集允许为空或有限，故“点列”准确说是至多可数的离散点集。

第 17—18 题只有边界连续，不能直接在边界使用 $f'/f$ 积分公式；应通过内部逼近或连续曲线绕数处理，特别是像曲线不一定可求长。这是习题比正文邻域全纯版本多出的证明要求。这里的“围成的域”按教材指有界内部域；若允许外部无界域，应另处理无穷远点。

## 习题 4.5

教材第 137—140 页，共 32 题。

**1.** 设 $D$ 是域，$f_n\in H(D)\cap C(\overline D)$，$\forall n\in\mathbb N$。证明：若 $\sum_{n=1}^{\infty}f_n(z)$ 在 $\partial D$ 上一致收敛，则必在 $D$ 上一致收敛。

**2.** 设 $f\in H(B(0,R))\cap C(\overline{B(0,R)})$，$M=\max_{|z|=R}|f(z)|$。证明：若 $z_0\in B(0,R)\setminus\{0\}$ 是 $f(z)$ 的零点，则

$$
R|f(0)|\le(M+|f(0)|)|z_0|.
$$

**3.** 设 $z_1,z_2,\ldots,z_n\in B(\infty,1)$。证明：存在 $z_0\in\partial B(0,1)$，使得 $\prod_{k=1}^n|z_0-z_k|>1$。

**4.** 设 $f\in H(B(0,1))$。证明：$M(r)=\max_{|z|=r}|f(z)|$ 是 $[0,R)$ 上的增函数。

**5.** 利用最大模原理证明代数学的基本定理。

**6.** 设 $f\in H(B(\infty,R))\cap C(\overline{B(\infty,R)})$，并且 $\lim_{z\to\infty}f(z)$ 存在。证明：若 $f$ 非常数，则 $M(r)=\max_{|z|=r}|f(z)|$ 是 $[R,\infty)$ 上的严格减函数。

**7.** 设 $f$ 是域 $D$ 上非常数的全纯函数。证明：若 $f$ 在 $D$ 中没有零点，则 $|f(z)|$ 在 $D$ 内不能取得最小值。

**8.** 设 $f\in H(B(0,1))$，$f(0)=0$。证明：$\sum_{n=1}^{\infty}f(z^n)$ 在 $B(0,1)$ 上绝对且内闭一致收敛。

**9.（全纯函数的 Hadamard 三圆定理）** 设 $0<r_1<r_2<\infty$，$D=\{z\in\mathbb C:r_1<|z|<r_2\}$，$f\in H(D)\cap C(\overline D)$，$M(r)=\max_{|z|=r}|f(z)|$（$r_1\le r\le r_2$）。证明：$\log M(r)$ 在 $[r_1,r_2]$ 上是 $\log r$ 的凸函数，即

$$
\log M(r)\le
\frac{\log r_2-\log r}{\log r_2-\log r_1}\log M(r_1)
+\frac{\log r-\log r_1}{\log r_2-\log r_1}\log M(r_2).
$$

**10.** 设 $f\in H(B(0,R))$，$f(B(0,R))\subset B(0,M)$，$f(0)=0$。证明：

（1）$|f(z)\le(M/R)|z|$；$|f'(0)|\le M/R$，$\forall z\in B(0,R)\setminus\{0\}$；

（2）等号成立当且仅当 $f(z)=(M/R)e^{i\theta}z$（$\theta\in\mathbb R$）。

**11.** 设 $f\in H(B(0,1))$，$f(0)=0$，并且存在 $A>0$，使得 $\operatorname{Re}f(z)\le A$，$\forall z\in B(0,1)$。证明：

$$
|f(z)|\le\frac{2A|z|}{1-|z|},\qquad z\in B(0,1).
$$

**12.（Carathéodory 不等式）** 设 $f\in H(B(0,R))\cap C(\overline{B(0,R)})$，$M(r)=\max_{|z|=r}|f(z)|$，$A(r)=\max_{|z|=r}\operatorname{Re}f(z)$（$0\le r\le R$）。证明：

$$
M(r)\le\frac{2r}{R-r}A(R)+\frac{R+r}{R-r}|f(0)|,\qquad r\in[0,R).
$$

**13.** 设 $f\in H(B(0,1))$，$f(0)=1$，并且 $\operatorname{Re}f(z)\ge0$，$\forall z\in B(0,1)$。利用 Schwarz 引理证明：

（1）$\displaystyle\frac{1-|z|}{1+|z|}\le\operatorname{Re}f(z)\le|f(z)|\le\frac{1+|z|}{1-|z|}$，$\forall z\in B(0,1)$；

（2）等号在 $z$ 异于零时成立，当且仅当

$$
f(z)=\frac{1+e^{i\theta}z}{1-e^{i\theta}z}\qquad(\theta\in\mathbb R).
$$

**14.** 设 $f\in H(B(0,1))$。证明：存在 $z_0\in\partial B(0,1)$ 和收敛于 $z_0$ 的点列 $\{z_n\}$，使得 $\lim_{n\to\infty}f(z_n)$ 存在。

**15.** 求出所有满足条件“$|f(z)=1|$，$\forall z\in\partial B(0,1)$”的整函数。

**16.** 设 $P_n(z)$ 是 $n$ 次多项式，$P_n^*(z)=z^nP_n(1/\overline z)$。证明：若 $P_n(z)$ 的所有零点都在 $B(\infty,1)$ 中，则 $P_n(z)+e^{i\theta}P_n^*(z)$（$\theta\in\mathbb R$）的零点都在 $\partial B(0,1)$ 上。

**17.** 设 $f\in H(B(0,1))$，$f(B(0,1))\subset B(0,1)$。证明：若 $z_1,z_2,\ldots,z_n$ 是 $f$ 在 $B(0,1)$ 中的所有彼此不同的零点，其阶数分别为 $k_1,k_2,\ldots,k_n$，则

$$
|f(z)|\le\prod_{j=1}^n\left|\frac{z_j-z}{1-\overline{z_j}z}\right|^{k_j},
\qquad z\in B(0,1).
$$

特别地，有 $|f(0)|\le\prod_{j=1}^n|z_j|^{k_j}$。

**18.** 设 $f\in H(B(0,1))$，$f(B(0,1))\subset B(0,1)$。证明：

$$
\frac{\bigl||f(0)|-|z|\bigr|}{1-|f(0)||z|}
\le|f(z)|\le\frac{|f(0)|+|z|}{1+|f(0)||z|}.
$$

**19.** 设 $f\in H(B(0,1))$，$f(B(0,1))\subset B(0,M)$。证明：$M|f'(0)|\le M^2-|f(0)|^2$。

**20.** 设 $f\in H(B(0,1))$，$f(0)=0$，$f(B(0,1))\subset B(0,1)$。证明：若存在 $z_1,z_2\in B(0,1)$，使得 $z_1\ne z_2$，$|z_1|=|z_2|$，$f(z_1)=f(z_2)$，则

$$
|f(z_1)|=|f(z_2)|\le|z_1|^2=|z_2|^2.
$$

（提示：考虑 $\displaystyle\left(\frac{f(z_1)-f(z)}{1-\overline{f(z_1)}f(z)}\right)
\left(\frac{1-\overline{z_1}z}{z_1-z}\right)
\left(\frac{1-\overline{z_2}z}{z_2-z}\right)$。）

**21.** 设 $f\in H(B(0,1))$，$f(0)=0$，$f(B(0,1))\subset B(0,1)$。证明：

$$
|z|\frac{\bigl||f'(0)|-|z|\bigr|}{1-|f'(0)||z|}
\le|f(z)|\le|z|\frac{|f'(0)|+|z|}{1+|f'(0)||z|}.
$$

**22.** 设 $f\in H(B(0,1))$，$f(B(0,1))\subset B(0,1)$。证明：

$$
\left|f(z)-\frac{f(0)(1-|z|^2)}{1-|f(0)|^2|z|^2}\right|
\le\frac{|z|(1-|f(0)|^2)}{1-|f(0)|^2|z|^2}.
$$

**23.** 设 $\varphi\in\operatorname{Aut}(\mathbb C_\infty)$，并且将 $\mathbb C_\infty$ 中的圆周 $\gamma$ 仍映为圆周。证明：$\varphi$ 是分式线性变换。

**24.** 求出上半平面 $\mathbb C^+=\{z\in\mathbb C:\operatorname{Im}z>0\}$ 的全纯自同构群 $\operatorname{Aut}(\mathbb C^+)$。

**25.** 设 $\varphi$ 将 $B(0,1)$ 双全纯地映为域 $D$，$\psi$ 将 $B(0,1)$ 双全纯地映为域 $G$。证明：若 $f:D\to G$ 是全纯映射，$f(\varphi(0))=\psi(0)$，则

$$
f[\varphi(B(0,r))]\subset\psi(B(0,r))\qquad(0<r<1).
$$

**26.** 设 $f\in H(B(0,1))$，$f(B(0,1))\subset B(0,1)$。证明：

$$
|f(z)-f(0)|\le|z|\frac{1-|f(0)|^2}{1-|f(0)||z|}.
$$

**27.** 设 $D$ 是以原点 $O$ 为中心、以 $z_1,z_2,z_3,z_4$ 为顶点的正方形域，$f\in H(D)\cap C(\overline D)$，$M$ 是 $|f(z)|$ 在 $\overline D$ 上的最大值，$m$ 是 $|f(z)|$ 在线段 $[z_1,z_2]$ 上的最大值。证明：

（1）$|f(0)|\le m^{1/4}M^{3/4}$；

（2）在闭三角形 $\triangle Oz_1z_2$ 上也有 $|f(z)|\le m^{1/4}M^{3/4}$。

**28.** 设 $D$ 是下面所述的域，$f\in H(D)\cap C(\overline D)$，并且在 $\overline D$ 上有界。证明：

（1）若 $D=\{z\in\mathbb C:0<\operatorname{Im}z<1\}$，$\lim_{\operatorname{Re}z\to\infty,\ \operatorname{Im}z=0}f(z)=A$，则

$$
\lim_{\substack{\operatorname{Re}z\to\infty\\0\le\operatorname{Im}z\le r}}f(z)=A
\qquad(0<r<1);
$$

（2）若 $D=\{z\in\mathbb C:\theta_1<\arg z<\theta_2\}$（$-\pi<\theta_1<\theta_2<\pi$），$\lim_{|z|\to\infty,\ \arg z=\theta_1}f(z)=A$，则

$$
\lim_{\substack{|z|\to\infty\\\theta_1\le\arg z\le\theta}}f(z)=A
\qquad(\theta_1<\theta<\theta_2);
$$

（3）$D=\{z\in\mathbb C:\theta_1<\arg z<\theta_2\}$（$-\pi<\theta_1<\theta_2<\pi$），$\lim_{|z|\to0,\ \arg z=\theta_1}f(z)=A$，则

$$
\lim_{\substack{|z|\to0\\\theta_1\le\arg z\le\theta}}f(z)=A
\qquad(\theta_1<\theta<\theta_2).
$$

**29.** 设 $D$ 是有界域，$f\in H(D)$，$z_0\in D$。证明：若 $f(z_0)=z_0$，$f(D)\subset D$，$f'(z_0)=1$，则 $f(z)\equiv z$。

**30.** 设 $f\in H(B(0,1))$，$f(0)=0$，并且 $|\operatorname{Re}f(z)|<1$，$\forall z\in B(0,1)$。证明：

（1）$\displaystyle|\operatorname{Re}f(z)|\le\frac4\pi\arctan|z|$，$\forall z\in B(0,1)$；

（2）$\displaystyle|\operatorname{Im}f(z)|\le\frac2\pi\log\frac{1+|z|}{1-|z|}$，$\forall z\in B(0,1)$。

**31.** 设 $f$ 在 $B(0,1)\cup\{1\}$ 上全纯，$f(0)=0$，$f(1)=1$，$f(B(0,1))\subset B(0,1)$。证明：$f'(1)\ge1$。

**32.** 设 $P$ 是一个 $k$ 次多项式，在单位圆周上满足 $|P(e^{i\theta})|\le1$。证明：对任意单位圆盘外的 $z$，有 $|P(z)|\le|z|^k$。

### 习题 4.5 校勘与约定

**第 1 题缺少有界域条件。** 在上半平面取级数 $\sum_{n\ge1}2^{-n}e^{-iz}$。它在实轴上一致收敛，但每个非零尾和在域内无界，因此不在整个域上一致收敛。补上 $D$ 有界后可由最大模原理成立。

第 4 题假设为单位圆盘，结论却出现未定义的 $R$；可将结论改为 $[0,1)$，或将假设改为 $H(B(0,R))$。“增函数”按不减理解，常函数允许等号。第 6 题极限指有限极限；若允许扩充平面中的无穷极限，$f(z)=z$ 就否定结论。第 9 题先排除 $f\equiv0$，或另作 $\log0=-\infty$ 的约定。

第 10（1）题原书漏印 $|f(z)|$ 的右竖线；第 15 题原书写成“$|f(z)=1|$”，应为“$|f(z)|=1$”。以上题面保留原误式，作答时须改正。

第 13（2）题若将“等号”理解为链式不等式中任意一个等号，则原述不成立：$f\equiv1$ 在 $\operatorname{Re}f=|f|$ 中恒取等号。应指左端下界或右端上界在某个非零点达到；对固定点取等号还须满足相应的相位条件。

**第 16 题疑似漏印外层共轭。** 原书写 $P_n^*(z)=z^nP_n(1/\overline z)$，一般不是多项式；标准反射多项式应为 $z^n\overline{P_n(1/\overline z)}$，并在零点按多项式延拓。题面未擅自替换，修订意图待与另一版本核对。

**第 18、21 题的绝对值下界不成立。** 取 $f\equiv0$，在任意非零 $z$ 已与两题矛盾。第 18 题可确认的正确下界为 $\max\{0,(|f(0)|-|z|)/(1-|f(0)||z|)\}$；第 21 题为 $|z|\max\{0,(|f'(0)|-|z|)/(1-|f'(0)||z|)\}$。原上界不受此笔误影响。

第 3 题中的 $z_k$ 须为有限复数，才能使用差 $z_0-z_k$。第 17 题既然列出“所有”零点，即另含零点总数有限的假设；有限子集版本也可成立。第 23 题 $\mathbb C_\infty$ 指扩充平面，圆周按广义圆理解。第 27 题顶点按边界顺序编号，使 $[z_1,z_2]$ 为一条边。第 31 题在 $1$ 处全纯指存在该点的开邻域全纯延拓；结论同时断言 $f'(1)$ 为实数。除明确列出的校勘外，未将待核题改写成新的自拟题。

<!-- chapter-navigation -->
[讲义 §4.1](/notes/f2b864dcb3d842b89b3d7dcb/) · [讲义 §4.2](/notes/d020b480160e3a3eb23dc5b9/) · [讲义 §4.3](/notes/218355589abb7f15ae6168f0/) · [讲义 §4.4](/notes/d69a161135da97c44d2abd8e/) · [讲义 §4.5](/notes/014095b96ca046659d5d7e8e/) · [返回第四章目录](/math/complex-functions/#chapter-4)
