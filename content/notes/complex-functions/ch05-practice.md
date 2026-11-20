---
title: "第五章习题｜Laurent 展开及其应用"
description: "全部 58 道教材原题，含 31 个积分小题与原图，附题面条件及系数校勘，不附常规解答。"
subject: "复变函数"
category: "complex-functions/chapter-5"
tags: ["复变函数", "第五章", "Laurent展开", "残数"]
created_at: "2026-11-20"
updated_at: "2026-11-20"
attachment: "notes/complex-functions/complex-functions-chapter-5.pdf"
---

按教材第 145—146、150—151、153—154、159—161、179—183、186—187、191—193 页收录，保留七节原题号，共 58 道主编号题；5.5 第 1 题另含 31 个积分小题。只列题目、教材提示和所附答案，不配置解答。题面的数学疑义在各节后单列，修订处均有说明。记 $B(\infty,R)=\{z:|z|>R\}$，$A(r,R)=\{z:r<|z|<R\}$，$\mathbb C_\infty=\mathbb C\cup\{\infty\}$。

## 习题 5.1

**1.** 下列初等函数能否在指定的域 $D$ 上展开为 Laurent 级数？

(1) $\cos(1/z)$，$D=\mathbb C\setminus\{0\}$；(2) $\tan z$，$D=B(\infty,R)$，$R>0$；

(3) $\operatorname{Log}((z-1)/(z-2))$，$D=B(\infty,2)$；(4) $z^2/\sin(1/z)$，$D=B(0,r)\setminus\{0\}$，$r>0$；

(5) $\operatorname{Log}(1/(z-1))$，$D=\mathbb C\setminus\{1\}$；(6) $\sqrt[3]{(z-1)(z-2)(z-3)}$，$D=B(\infty,3)$；

(7) $\sqrt{z/[(z-1)(z-2)]}$，$D=A(1,2)$；(8) $\operatorname{Log}[(z-1)(z-2)/((z-3)(z-5))]$，$D=A(2,3)$。

**2.** 将下列初等函数在指定的域 $D$ 上展开为 Laurent 级数：

(1) $1/[z^2(z-1)]$，$D=B(1,1)\setminus\{1\}$；(2) $1/[(z-1)(z-2)]$，$D=A(1,2)$；

(3) $\operatorname{Log}((z-1)/(z-2))$，$D=B(\infty,2)$；(4) $\sqrt{(z-1)(z-2)}$，$D=B(\infty,2)$；

(5) $1/(z-5)^n$，$n\in\mathbb N$，$D=B(\infty,5)$；(6) $\sin(z/(1-z))$，$D=\mathbb C\setminus\{1\}$；

(7) $\sqrt{z/[(z-1)(z-2)]}$，$D=A(1,2)$；(8) $e^{1/(1-z)}$，$D=B(\infty,1)$。

**3.** 将 $e^{(z/2)(\zeta-1/\zeta)}$ 作为 $\zeta$ 的函数，在 $\mathbb C\setminus\{0\}$ 上展开为 Laurent 级数 $\sum_{n=-\infty}^\infty J_n(z)\zeta^n$。称 $J_n(z)$（$n\ge0$）为 Bessel 函数。证明：

$$
J_n(z)=\frac1\pi\int_0^\pi\cos(n\theta-z\sin\theta)\,d\theta
=\sum_{k=0}^\infty\frac{(-1)^k}{k!(n+k)!}\left(\frac z2\right)^{n+2k},\quad n\ge0.
$$

**4.** 设 $0<r<R<\infty$，$D=A(r,R)$。证明：若 $f(z)=\sum_{n=-\infty}^\infty a_nz^n$ 双全纯地将 $D$ 映为域 $G$，则 $G$ 的面积为 $\pi\sum_{n=-\infty}^\infty n|a_n|^2(R^{2n}-r^{2n})$。

**5.** 证明（面积原理）：若 $f(z)=1/z+\sum_{n=1}^\infty a_nz^n$ 是 $B(0,1)\setminus\{0\}$ 上的双全纯映射，则 $\sum_{n=1}^\infty n|a_n|^2\le1$。

**6.** 证明：若 $f(z)=z+\sum_{n=2}^\infty a_nz^n$ 是 $B(0,1)\setminus\{0\}$ 上的双全纯映射，则 $|a_2|\le2$，且等号成立当且仅当 $f(z)=z/(1-e^{i\theta}z)^2$，$\theta\in\mathbb R$。提示：考虑 $z\sqrt{f(z^2)/z^2}$ 的一个双全纯分支。

**7.** 证明：若 $f(z)=z+\sum_{n=2}^\infty a_nz^n$ 是 $B(0,1)\setminus\{0\}$ 上的双全纯映射，则对 $z\in B(0,1)$，

$$
\frac{1-|z|}{(1+|z|)^3}\le|f'(z)|\le\frac{1+|z|}{(1-|z|)^3},\qquad
\frac{|z|}{(1+|z|)^2}\le|f(z)|\le\frac{|z|}{(1-|z|)^2}.
$$

特别地，$f(B(0,1))\supset\tfrac14B(0,1)$。上述不等式在某个非零点取等号，当且仅当 $f(z)=z/(1-e^{i\theta}z)^2$，$\theta\in\mathbb R$。说明：依次称偏差定理、增长定理及四分之一掩盖定理。提示：利用第 6 题。

**8.** 证明：若 $w=\varphi(z)$ 双全纯地把 $\{r_1<|z|<r_2\}$ 映为 $\{R_1<|w|<R_2\}$，其中 $0<r_1<r_2<\infty$，$0<R_1<R_2<\infty$，则 $r_1/r_2=R_1/R_2$，且 $\varphi(z)=e^{i\theta}R_1z/r_1$ 或 $e^{i\theta}R_2r_1/z$，$\theta\in\mathbb R$。提示：利用第 4 题。

### 本节校勘

第 2(6) 题原排版的 $D+$ 按上下文订为 $D=$；第 7(3) 题原文“上述不等式在异于零处成立”漏掉了“等号”，已明确为取等号条件。根式、对数先选单值分支，再讨论展开；第 1(7)、2(7) 题根号内函数绕圆环的指标为 $1-1=0$，可有全纯平方根，不能只因含根号便否定。第 2(3) 可规定在无穷远处取值 $0$ 的对数分支，其他分支须附常数 $2k\pi i$；第 2(4)、2(7) 两个平方根分支相差负号。

## 习题 5.2

**1.** 是否存在 $B(0,1)\setminus\{0\}$ 上的无界全纯函数 $f$，使 $\lim_{z\to0}zf(z)=0$？

**2.** 指出下列初等全纯函数的奇点及其类别：

(1) $1/(\sin z-\cos z)$；(2) $e^{1/(1-z)}/(e^z-1)$；(3) $\sin(1/(1-z))$；(4) $\tan z$；

(5) $e^z/[z(1-e^z)]$；(6) $e^{\cot(1/z)}$；(7) $\sin(1/\cos(1/z))$；(8) $e^{\tan z}$。

**3.** 证明：若 $z_0$ 是全纯函数 $f:B(z_0,r)\setminus\{z_0\}\to\mathbb C\setminus\{0\}$ 的本性奇点，则也是 $1/f$ 的本性奇点。

**4.** 设 $R$ 是有理函数，$z_1,\ldots,z_n$ 是它在 $\mathbb C_\infty$ 上全部不同的极点。证明：若 $z_0$ 是全纯函数 $f:B(z_0,r)\setminus\{z_0\}\to\mathbb C_\infty\setminus\{z_1,\ldots,z_n\}$ 的本性奇点，则也是 $R\circ f$ 的本性奇点。

**5.** 设 $P_n,Q_m$ 分别为 $n,m$ 次多项式，指出无穷远点是 $P_n+Q_m$、$P_n/Q_m$、$P_nQ_m$ 的什么奇点。

**6.** 设 $f$ 是 $B(z_0,R)\setminus\{z_0\}$ 上非常数的全纯函数。证明：若 $z_0$ 为其零点集的聚点，则为本性奇点。

**7.** 若函数在域内除极点外处处全纯，称其为亚纯函数。证明：若 $f$ 在 $B(z_0,R)\setminus\{z_0\}$ 上亚纯，$z_0$ 是其极点集的聚点，则对每个 $A\in\mathbb C_\infty$，都有 $z_n\to z_0$、$z_n\ne z_0$，使 $f(z_n)\to A$。

**8.** 设 $f\in H(B(0,R)\setminus\{0\})$，且 $\operatorname{Re}f>0$。证明原点为可去奇点。

**9.** 设 $f$ 在域 $D$ 上亚纯。证明对任意 $A\in\mathbb C$，$f'/(f-A)$ 也在 $D$ 上亚纯，且其极点均为一阶（常值函数情形除外）。

**10.** 证明：若 $f$ 在 $D$ 上亚纯而不全纯，则存在 $R>0$，使 $B(\infty,R)\subset f(D)$。

**11.** 设 $f\in H(\mathbb C\setminus\{0\})$，且 $0,\infty$ 都为本性奇点。令 $A(r)=\max_{|z|=r}\operatorname{Re}f(z)$。证明：

$$
\lim_{r\to\infty}\frac{\log A(r)}{\log r}=\infty,\qquad
\lim_{r\to0}\frac{\log A(r)}{\log(1/r)}=\infty.
$$

### 本节校勘

第 1 题“无界”指整个穿孔圆盘上无界，不等于在原点的每个邻域都无界。第 2 题还须识别奇点的聚点；非孤立奇点不能硬分为可去、极点、本性三类。第 4 题应补 $R$ 非常数，否则常数 $R$ 立即使结论失效。第 5 题相加时须检查最高次项抵消。第 11 题中的对数应在充分大或充分小、使 $A(r)>0$ 的范围内理解。

## 习题 5.3

**1.** 求出所有 $\mathbb C$ 上的亚纯函数 $f$，使 $|f(z)|=1$ 对 $|z|=1$ 成立。

**2.** 证明：整函数 $f$ 无零点，当且仅当有整函数 $g$ 使 $f=e^g$。

**3.** 设 $P_n$ 为 $n$ 次多项式，$n\in\mathbb N$。证明 $e^z-P_n(z)$ 有无穷多个零点。

**4.** 设 $SL(2,\mathbb C)=\{\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right):ad-bc=1\}$，$I$ 为二阶单位矩阵。证明：它按矩阵乘法构成群，$\{I,-I\}$ 为正规子群；矩阵对应分式线性变换 $(az+b)/(cz+d)$，诱导商群 $SL(2,\mathbb C)/\{I,-I\}$ 与 $\operatorname{Aut}(\mathbb C_\infty)$ 的同构。

**5.** 设 $f$ 为整函数。证明：(1) 若 $f(\mathbb R)\subset\mathbb R$、$f(i\mathbb R)\subset i\mathbb R$，则 $f$ 为奇函数；(2) 若 $f(\mathbb R)\subset\mathbb R$、$f(i\mathbb R)\subset\mathbb R$，则 $f$ 为偶函数。

**6.** 设 $f$ 在 $\mathbb C_\infty$ 上亚纯，极点只有 $1,2,\infty$，对应 Laurent 主部依次为 $1/(z-1)$、$1/(z-2)+1/(z-2)^2$、$z+z^2$，且 $f(0)=0$。求 $f$。

## 习题 5.4

**1.** 证明残数定理与 Cauchy 积分公式等价。

**2.** 有限可去奇点的残数为零。举例说明：无穷远点为可去奇点时，$\operatorname{Res}(f,\infty)$ 可以非零。

**3.** 设 $f\in H(B(\infty,R))$。证明：若无穷远点可去，则 $\operatorname{Res}(f,\infty)=\lim_{z\to\infty}z^2f'(z)$；若为 $m$ 阶极点，则

$$
\operatorname{Res}(f,\infty)=\frac{(-1)^m}{(m+1)!}\lim_{z\to\infty}z^{m+2}f^{(m+1)}(z).
$$

**4.** 设 $f,g\in H(B(a,r))$，$f(a)\ne0$，$a$ 为 $g$ 的二阶零点。计算 $\operatorname{Res}(f/g,a)$。

**5.** 设 $f$ 在平面除孤立奇点外处处全纯。证明：$f$ 偶时 $\operatorname{Res}(f,-a)=-\operatorname{Res}(f,a)$；$f$ 奇时 $\operatorname{Res}(f,-a)=\operatorname{Res}(f,a)$。

**6.** 设 $D$ 由有限条可求长简单闭曲线围成，$g\in H(D)\cap C(\overline D)$；$f$ 在 $D$ 上亚纯，全部极点 $w_1,\ldots,w_m$ 的阶数为 $q_1,\ldots,q_m$，在 $\overline D\setminus\{w_j\}$ 上全纯且边界无零点，全部零点 $z_1,\ldots,z_n$ 的阶数为 $p_1,\ldots,p_n$。证明：

$$
\frac1{2\pi i}\int_{\partial D}g(z)\frac{f'(z)}{f(z)}\,dz
=\sum_{j=1}^np_jg(z_j)-\sum_{j=1}^mq_jg(w_j).
$$

并说明这是 Cauchy 积分公式和辐角原理的推广。

**7.** 求残数：

(1) $\operatorname{Res}(\sin\alpha z/[z^3\sin\beta z],0)$，$\alpha\ne\beta$、$\beta\ne0$；(2) $\operatorname{Res}((1+z^2)^{-n-1},i)$，$n\in\mathbb N$；

(3) $\operatorname{Res}(\operatorname{Log}((z-a)/(z-b)),\infty)$，$a\ne b$；(4) $\operatorname{Res}(z^{-2}e^{1/z}\operatorname{Log}[(1-\alpha z)/(1-\beta z)],0)$，$\alpha\ne\beta$；

(5) $\operatorname{Res}(z^3\cos(1/(z-2)),2)$；(6) $\operatorname{Res}(\cot^3z,0)$；

(7) $\operatorname{Res}((z-a)^{-n}(z-b)^{-m},a)$，$a\ne b$、$m,n\in\mathbb N$；(8) $\operatorname{Res}(z^{2n}/(1+z)^n,\infty)$，$n\in\mathbb N$。

**8.** 指出在 $\mathbb C_\infty$ 中的全部孤立奇点，并计算各处残数：

(1) $1/(z^3-z^5)$；(2) $(z^3+z^2+2)/[z(z^2-1)^2]$；(3) $(z^2+z-1)/[z^2(z-1)]$；(4) $z^{n-1}/(z^n+a^n)$，$a\ne0$、$n\in\mathbb N$；

(5) $1/\sin z$；(6) $\sin(z/(z+1))$；(7) $e^z/[z(z-1)]$；(8) $e^{\pi z}/(z^2+1)$。

**9.** 设 $f,g\in H(B(0,R))\cap C(\overline{B(0,R)})$，$g$ 在圆周上无零点，在圆内的全部零点 $z_1,\ldots,z_n$ 都是一阶零点。求 $\frac1{2\pi i}\int_{|z|=R}f(z)/[zg(z)]\,dz$。

**10.** 求积分：

(1) $\int_{|z|=2}dz/[z^3(z^{10}-2)]$；(2) $\int_{|z|=1}(z-a)^{-n}(z-b)^{-n}\,dz$，$|a|<1<|b|$、$n\in\mathbb N$；

(3) $\int_0^{2\pi}e^{\cos\theta}[\cos(n\theta-\sin\theta)+i\sin(n\theta-\sin\theta)]\,d\theta$，$n\in\mathbb Z$；

(4) $\int_{|z|=R}z^2/(e^{2\pi iz^3}-1)\,dz$，$n<R^3<n+1$、$n\in\mathbb N$。

**11.** 计算下列积分，其中 $a\ne b$，$R>\max\{|a|,|b|\}$：

$$
(1)\quad\int_{|z|=R}\sqrt{(z-a)(z-b)}\,dz,\qquad
(2)\quad\int_{|z|=R}z^n\log\frac{z-a}{z-b}\,dz.
$$

第 (1) 小题的分支满足 $\lim_{z\to\infty}\sqrt{(z-a)(z-b)}/z=1$。

**12.** 设 $D$ 由有限条可求长简单闭曲线围成，$f$ 在 $D$ 上亚纯，在 $\overline D\setminus\{w_1,\ldots,w_m\}$ 上连续，极点 $w_j$ 处的主部为 $f_j$。证明对 $z\in D$，

$$
\frac1{2\pi i}\int_{\partial D}\frac{f(\zeta)}{\zeta-z}\,d\zeta
=f(z)-\sum_{j=1}^mf_j(z).
$$

### 本节校勘

第 6 题第二个求和上限原印为 $n$，应为极点数 $m$；闭域上全纯指在其邻域内全纯。第 7(3)、7(4) 对数采用在比值趋于 $1$ 时趋于 $0$ 的局部分支。第 9 题不保证 $g(0)\ne0$，须另处理原点同时为 $g$ 的零点时的二阶极点。第 11(2) 原文未指明 $n$ 的范围与对数归一化；练习可先取 $n\in\mathbb Z_{\ge0}$、无穷远处对数趋零的分支，若允许负整数，应重新说明圆内外分支与原点贡献。第 12 题在极点处的右端指主部相消后的可去延拓。

## 习题 5.5

**1.** 利用残数定理和 Cauchy 积分定理计算下列积分。右侧保留教材答案；个别问题在本节末校注。

(1) $\displaystyle\int_0^\infty\frac{x^2+1}{x^4+1}\,dx=\frac{\sqrt2\pi}{2}$。

(2) $\displaystyle\int_{-\infty}^\infty\frac{x^2-x+2}{x^4+10x^2+9}\,dx=\frac{5\pi}{12}$。

(3) $\displaystyle\int_0^\infty\frac{x^2}{x^4+6x^2+13}\,dx=\frac\pi4\sqrt{\frac{\sqrt{13}-3}{2}}$。

(4) $\displaystyle\int_0^{2\pi}\frac{d\theta}{a+b\cos\theta}=\frac{2\pi}{\sqrt{a^2-b^2}}$，$0<b<a$。

(5) $\displaystyle\int_0^{\pi/2}\frac{d\theta}{a+\sin^2\theta}=\frac{\pi}{2\sqrt{a(a+1)}}$，$a>0$。

(6) $\displaystyle\int_{-\infty}^\infty\frac{x\cos x}{x^2-2x+10}\,dx=\frac{\pi(\cos1-3\sin1)}{3e^3}$。

(7) $\displaystyle\int_0^\infty\frac{x\sin ax}{x^2+b^2}\,dx=\frac\pi2e^{-ab}$，$a,b>0$。

(8) $\displaystyle\int_0^\infty\frac{\cos x}{(1+x^2)^3}\,dx=\frac{7\pi}{16}e^{-1}$。

(9) $\displaystyle\int_0^\infty(\sin x/x)^2\,dx=\pi/2$。提示：对 $(e^{2iz}-1)/z^2$ 用图 5.9 围道。

(10) $\displaystyle\int_0^\infty(\sin x/x)^3\,dx=3\pi/8$。提示：对 $(e^{3iz}-3e^{iz}+2)/z^3$ 用图 5.9 围道。

![教材图 5.9：上半圆及原点小凹口](/figures/complex-functions/ch05-fig-5-9.png)

(11) $\displaystyle\int_0^\infty\frac{x^p}{1+x^2}\,dx=\frac{\pi}{2\cos(p\pi/2)}$，$-1<p<1$。

(12) $\displaystyle\int_0^\infty\frac{x^p}{x^2+2x\cos\lambda+1}\,dx=\frac{\pi\sin(p\lambda)}{\sin(p\pi)\sin\lambda}$，$-1<p<1$、$-\pi<\lambda<\pi$。

(13) $\displaystyle\int_0^\infty\frac{dx}{1+x^p}=\frac{\pi}{p\sin(\pi/p)}$，$p>1$。

(14) $\displaystyle\int_{-\infty}^\infty\frac{e^{px}}{1+e^x}\,dx=\frac\pi{\sin\pi p}$，$0<p<1$。

(15) $\displaystyle\int_0^1\frac{x^{1-p}(1-x)^p}{1+x^2}\,dx=\frac\pi{\sin\pi p}\left(2^{p/2}\cos\frac{p\pi}4-1\right)$，$-1<p<2$。提示：对 $z^{1-p}(1-z)^p/(1+z^2)$ 用图 5.10。

(16) $\displaystyle\int_0^1\frac1{(1+x)^2}\sqrt{\frac{(1-x)^3}{x}}\,dx=(1-\sqrt2/2)\pi$。

(17) $\displaystyle\int_{-1}^1\frac{\sqrt[4]{(1-x)^3(1+x)}}{1+x^2}\,dx=(\sqrt{2+\sqrt2}-\sqrt2)\pi$。

(18) $\displaystyle\int_0^\infty\frac{\log x}{x^2+2x+2}\,dx=\frac\pi8\log2$。

(19) $\displaystyle\int_0^\infty\frac{\log^2x}{x^2+a^2}\,dx=\frac\pi{8a}(\pi^2+4\log^2a)$，$a>0$。

(20) $\displaystyle\int_0^\infty\frac{\sqrt{x}\log x}{x^2+1}\,dx=\frac{\sqrt2\pi^2}{4}$。

(21) $\displaystyle\int_0^\infty\frac{\log x}{x^2-1}\,dx=\pi^2/4$。提示：对 $\operatorname{Log} z/(z^2-1)$ 用图 5.11。

![教材图 5.10、5.11：割线围道与四分之一圆围道](/figures/complex-functions/ch05-fig-5-10-11.png)

(22) $\displaystyle\int_0^1\frac1{x+1}\log\frac{1-x}{x}\,dx=\tfrac12\log^22$。

(23) $\displaystyle\int_0^\infty\log\frac{e^x+1}{e^x-1}\,dx=\pi^2/4$。

(24) $\displaystyle\int_0^\infty\frac{\sin x}{e^x-1}\,dx=\frac\pi2\frac{e^{2\pi}+1}{e^{2\pi}-1}-\frac12$。提示：对 $e^{iz}/(e^z-1)$ 用图 5.12。

(25) $\displaystyle\int_0^\infty\frac{x}{e^x+1}\,dx=\pi^2/12$。提示：对 $z^2/(e^z+1)$ 用图 5.13。

![教材图 5.12、5.13：带小凹口的矩形围道](/figures/complex-functions/ch05-fig-5-12-13.png)

(26) $\displaystyle\int_0^\infty x^ne^{-x^{1/4}}\sin(x^{1/4})\,dx=0$，$n=0,1,2,\ldots$。提示：对 $z^{4n+3}e^{-z+iz}$ 用图 5.14。

(27) $\displaystyle\int_{-\infty}^\infty e^{-(x+ia)^2}\,dx=\sqrt\pi$，$a\in\mathbb R$。

(28) $\displaystyle\int_0^\infty e^{-ax^2}\cos(bx^2)\,dx=\frac{\sqrt{2\pi}}4\sqrt{\frac{\sqrt{a^2+b^2}+a}{a^2+b^2}}$，$a>0$。提示：对 $e^{z^2(-a+ib)}$ 用图 5.15，角 $\varphi$ 待定。

![教材图 5.14、5.15：四分之一圆与扇形围道](/figures/complex-functions/ch05-fig-5-14-15.png)

(29) $\displaystyle\int_0^{\pi/2}\log\sin\theta\,d\theta$。教材答案为 $-\pi\log2$（有误，见校注）。提示：先求广义积分 $\int_0^{\pi/2}\log|e^{i\theta}-1|\,d\theta$。

(30) $\displaystyle\int_0^\pi\frac{x\sin x}{1-2a\cos x+a^2}\,dx=\begin{cases}\frac\pi a\log(1+a),&0<a\le1,\\\frac\pi a\log(1+1/a),&a>1.\end{cases}$ 提示：对 $z/(a-e^{-iz})$ 用图 5.16。

![教材图 5.16：竖直矩形围道](/figures/complex-functions/ch05-fig-5-16.png)

(31) $\displaystyle\int_0^\infty\frac{\log(1+x^2)}{1+x^2}\,dx=\pi\log2$。

**2.** 设 $f$ 为有理函数，在 $[0,\infty)$ 上无极点，且无穷远点为其零点。证明：

$$
\int_0^\infty\frac{f(x)}{\log^2x+\pi^2}\,dx
=\sum_{k=1}^n\operatorname{Res}\left(\frac{f(z)}{\operatorname{Log} z-\pi i},a_k\right),
$$

其中取 $\operatorname{Log} z=\log|z|+i\operatorname{Arg}z$，$0<\operatorname{Arg}z<2\pi$。教材写“$a_1=-1,a_2,\ldots,a_n$ 是 $f$ 的全部不同极点”，按下述校注理解求和点集。

### 本节校勘

第 1(12) 题在 $p=0$ 或 $\lambda=0$ 时右式按连续极限取值；第 1(15) 题在 $p=0,1$ 同理。第 1(21) 题 $x=1$ 是商的可去点，不必强行采用主值。第 1(29) 题正确答案为 $-(\pi/2)\log2$：记积分为 $I$，利用 $\theta\mapsto\pi/2-\theta$ 后相加，再用 $2\sin\theta\cos\theta=\sin2\theta$，得 $2I=I-(\pi/2)\log2$。教材所给提示的积分区间也不能直接套用该答案。

第 2 题的求和点集应为 $f$ 的全部有限极点与点 $-1$ 的并集，重复点只计一次；因为 $\operatorname{Log}(-1)=\pi i$，即使 $-1$ 不是 $f$ 的极点，分母也会在那里产生零点。若奇点抵消，其残数为零。

## 习题 5.6

**1.** 设 $f,g$ 为域 $D$ 上的亚纯函数，零点集、极点集及对应阶数均相同。证明存在 $h\in H(D)$，使 $f/g=e^h$。

**2.** 设 $a_n$ 在域 $D$ 内互异且无聚点，$\psi_n(z)=\sum_{j=1}^\infty c_{n,j}/(z-a_n)^j$ 在 $D\setminus\{a_n\}$ 上全纯。证明存在 $f\in H(D\setminus\{a_n:n\in\mathbb N\})$，在每点 $a_n$ 的 Laurent 主部恰为 $\psi_n$。

**3.** 证明：$f$ 在域 $D$ 上亚纯，当且仅当有 $g,h\in H(D)$、$h\not\equiv0$，使 $f=g/h$。

**4.** （插值定理的推广）设 $a_n$ 在 $D$ 内互异且无聚点，$\varphi_n(z)=\sum_{j=-\infty}^\infty b_{n,j}(z-a_n)^j$ 在 $D\setminus\{a_n\}$ 上全纯。证明：对任意整数列 $k_n$，存在 $f\in H(D\setminus\{a_n:n\in\mathbb N\})$，在 $a_n$ 的 Laurent 展开为

$$
\sum_{j=-\infty}^{k_n}b_{n,j}(z-a_n)^j+\sum_{j=k_n+1}^\infty c_{n,j}(z-a_n)^j.
$$

**5.** 设 $a_1,a_2\in D$ 不同，Laurent 级数 $\varphi_n(z)=\sum_{j=-\infty}^\infty b_{n,j}(z-a_n)^j$ 在 $D\setminus\{a_n\}$ 全纯（$n=1,2$）。举例说明通常不存在 $D\setminus\{a_1,a_2\}$ 上的全纯函数，其在两点的 Laurent 展开分别为 $\varphi_1,\varphi_2$。

**6.** 证明 Weierstrass 因子分解定理对一般域成立。

**7.** 证明插值定理对一般域成立。

### 本节校勘

第 1 题在一般域上不成立，应补单连通条件，或改为要求无零全纯函数 $f/g$ 的对数导数沿一切闭路的积分为零；反例是 $D=\mathbb C\setminus\{0\}$、$f(z)=z$、$g(z)=1$。还应排除恒零函数。第 4 题原式多出的右括号已去掉。第 6、7 题是教材正文中单连通版本的推广；讲义 §5.6 另给一般域补证，练习时应重建其中的因子构造，不能只援引单连通版本。

## 习题 5.7

**1.** 用极点处 Laurent 主部表示下列亚纯函数：(1) $1/(e^z-1)$；(2) $1/\cos z$；(3) $\tan z$；(4) $1/\sin z-1/z$。

**2.** 将整函数进行因子分解：(1) $e^z-1$；(2) $e^{az}-e^{bz}$；(3) $\cos z$；(4) $\cos z-\sin z$。

**3.** 设 $a_n\in B(0,R)\setminus\{0\}$ 互异，$b_n=R^2/\overline{a_n}$，$k_n\in\mathbb N$。证明：若 $\sum k_n(R-|a_n|)<\infty$，则 $\prod_{j=1}^n[(z-a_j)/(z-b_j)]^{k_j}$ 在圆盘内闭一致收敛为到单位圆盘的全纯映射，零点恰为 $a_n$，阶数恰为 $k_n$。

**4.** 设 $a_n\in\mathbb C\setminus\{0\}$ 互异，$k_n\in\mathbb N$，且 $\sum k_n/|a_n|<\infty$。证明 $\prod_{j=1}^n(1-z/a_j)^{k_j}$ 在平面内闭一致收敛为整函数，零点恰为 $a_n$，重数恰为 $k_n$。提示：考察 $\sum k_n/(z-a_n)$ 的内闭一致收敛。

为紧凑书写以下原题，记 $E_p(w)=(1-w)\exp(w+w^2/2+\cdots+w^p/p)$，$E_0(w)=1-w$。

**5.** 设 $a_n\ne0$ 互异，$k_n\in\mathbb N$。证明：若存在 $m\in\mathbb N$ 使 $\sum k_n/|a_n|^{m+1}<\infty$，则 $\prod_{j=1}^nE_m(z/a_j)^{k_j}$ 在平面内闭一致收敛为整函数，零点与阶数恰为 $a_n,k_n$。提示：考察

$$
\sum_{n=1}^\infty k_n\left(\frac1{z-a_n}+\frac1{a_n}+\frac z{a_n^2}+\cdots+\frac{z^{m-1}}{a_n^m}\right).
$$

**6.** 设 $a_n\ne0$ 互异，$k_n\in\mathbb N$。证明：若有自然数列 $p_n$，使 $\sum_{n=1}^\infty k_n(z/a_n)^{p_n+1}$ 在平面上绝对收敛，则 $\prod_{j=1}^nE_{p_j}(z/a_j)^{k_j}$ 在平面内闭一致收敛为整函数，零点与阶数恰为 $a_n,k_n$。提示：考察

$$
\sum_{n=1}^\infty k_n\left(\frac1{z-a_n}+\frac1{a_n}+\frac z{a_n^2}+\cdots+\frac{z^{p_n-1}}{a_n^{p_n}}\right).
$$

**7.** 设 $a_n\ne0$ 互异，$k_n\in\mathbb N$，$|a_n|\to\infty$。证明 $\prod_{j=1}^nE_{jk_j}(z/a_j)^{k_j}$ 在平面内闭一致收敛为整函数，零点与阶数恰为 $a_n,k_n$。

**8.** 设 $f$ 为非常数整函数，非零零点集为 $a_n$，相应重数为 $k_n$，$k_0=\operatorname{Res}(f'/f,0)$。证明有整函数 $g$，使

$$
f(z)=e^{g(z)}z^{k_0}\prod_{n=1}^\infty E_{nk_n}(z/a_n)^{k_n}.
$$

**9.** 设有理函数 $f$ 在无穷远点至少有二阶零点，全部不同极点 $a_1,\ldots,a_m$ 均非整数。证明：

$$
\sum_{n=-\infty}^\infty f(n)=-\pi\sum_{k=1}^m\operatorname{Res}(f(z)\cot\pi z,a_k),\qquad
\sum_{n=-\infty}^\infty(-1)^nf(n)=-\pi\sum_{k=1}^m\operatorname{Res}(f(z)/\sin\pi z,a_k).
$$

**10.** 求级数的和：

(1) $\sum_{n=-\infty}^\infty(a+n)^{-2}$、$\sum_{n=-\infty}^\infty(-1)^n(a+n)^{-2}$，$a\notin\mathbb Z$；

(2) $\sum_{n=0}^\infty(n^2+a^2)^{-1}$、$\sum_{n=0}^\infty(-1)^n(n^2+a^2)^{-1}$，$a>0$；

(3) $\sum_{n=0}^\infty(-1)^n/(2n+1)^3$；(4) $\sum_{n=1}^\infty n^{-2k}$，$k\in\mathbb N$。

**11.** 设 $f$ 为 $B(0,R)$ 上非常数的有界全纯函数，非零零点为 $a_n$，重数为 $k_n$。证明 $\sum_{n=1}^\infty k_n(R-|a_n|)<\infty$。

**12.** 设 $f$ 如第 11 题，$k_0=\operatorname{Res}(f'/f,0)$。证明有圆盘上无零点的有界全纯函数 $g$，使

$$
f(z)=g(z)z^{k_0}\prod_{n=1}^\infty
\left(\frac{R(a_n-z)}{R^2-\overline{a_n}z}\frac{|a_n|}{a_n}\right)^{k_n}.
$$

### 本节校勘

第 2(2) 题 $a=b$ 时函数恒零，应单独处理，通常的非零整函数因子分解需 $a\ne b$。第 6 题原求和下标写为 $m$ 而项中用 $n$，已统一。第 8 题原指数二次项的系数印作 $1/z$，应为 $1/2$，本页用 $E_p$ 统一展开式。第 8、11、12 题零点集可以有限或为空，相应乘积按有限乘积或空乘积理解；$k_0$ 可为零。

## 习题索引

[习题 5.1](#习题-51) · [习题 5.2](#习题-52) · [习题 5.3](#习题-53) · [习题 5.4](#习题-54) · [习题 5.5](#习题-55) · [习题 5.6](#习题-56) · [习题 5.7](#习题-57)

<!-- chapter-navigation -->
[返回第五章目录](/math/complex-functions/#chapter-5)
