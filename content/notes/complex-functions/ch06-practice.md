---
title: "第六章习题：全纯开拓"
description: "教材习题 6.1—6.3 的全部 28 道原题，保留小问、提示、五幅原题图及独立校注。"
subject: "复变函数"
category: "complex-functions/chapter-6"
tags: ["复变函数", "第六章", "习题原题", "全纯开拓"]
created_at: "2026-11-20"
updated_at: "2026-11-21"
attachment: "notes/complex-functions/complex-functions-chapter-6.pdf"
---

按教材印刷第 199—201、205—206、209 页收录，三节分别为 11、10、7 道，共 28 道主编号题。保留全部小问、教材提示和原题图，不附习题解答。$B(a,r)$ 表示开圆盘，$\overline{B(a,r)}$ 表示闭圆盘；涉及无穷远的闭包在扩充平面中理解。正文例题与定理证明另见三节讲义。

[习题 6.1](#习题-61) · [习题 6.2](#习题-62) · [习题 6.3](#习题-63)

## 习题 6.1

**1.** 设域 $D$ 关于 $x$ 轴对称，$f$ 在 $D$ 上亚纯，$f(D\cap\mathbb R)\subset\mathbb R\cup\{\infty\}$。证明：若 $z_0\in D$ 是 $f$ 的极点，则 $\bar z_0$ 也是 $f$ 的极点，并且

$$
\operatorname{Res}(f,\bar z_0)=\overline{\operatorname{Res}(f,z_0)}.
$$

**2.** 设域 $D$ 关于圆周 $\partial B(a,r)$ 对称，$f$ 在 $D$ 上亚纯，$f(D\cap\partial B(a,r))\subset\partial B(A,R)$。证明：若 $z_0,w_0\in D$ 关于 $\partial B(a,r)$ 对称，$z_0$ 是 $f(z)-A$ 的一阶零点，则 $w_0$ 是 $f$ 的一阶极点，并且

$$
\operatorname{Res}(f,w_0)=-\frac{R^2(w_0-a)^2}{r^2\overline{f'(z_0)}}.
$$

**3.** 设 $0<r<R<\infty$，$f$ 在 $B(0,R)\setminus\overline{B(0,r)}$ 上全纯，在 $B(0,R)\setminus B(0,r)$ 上连续。证明：若 $f$ 在 $\partial B(0,r)$ 上恒为零，则在 $B(0,R)\setminus\overline{B(0,r)}$ 上也恒为零。

**4.** 设 $\gamma$ 是圆周 $\partial B(a,R)$ 上的一段开圆弧。证明：若 $f$ 在 $B(a,R)$ 上全纯，在 $B(a,R)\cup\gamma$ 上连续，并且在 $\gamma$ 上恒为零，则 $f$ 在 $B(a,R)$ 上也恒为零。

**5.** 将图 6.4 所示的单连通域 $D$ 双全纯地映为上半平面。

![教材图 6.4：习题 6.1 第 5 题](/figures/complex-functions/ch06-fig-6-4.png)

**6.** 利用 Schwarz 对称原理证明：若 $f$ 双全纯地将 $B(a,r)$ 映为 $B(A,R)$，同胚地将 $\overline{B(a,r)}$ 映为 $\overline{B(A,R)}$，则 $f$ 必是分式线性变换。

**7.** 设 $P(x_1,x_2,\ldots,x_n)$ 是关于 $x_1,x_2,\ldots,x_n$ 的多项式，$f\in H(B(0,r))$，$\rho>1$。证明：若在圆盘 $B(0,r)$ 上成立

$$
f(z)=P\left(f\left(\frac z\rho\right),f'\left(\frac z\rho\right),
\ldots,f^{(n-1)}\left(\frac z\rho\right)\right),
$$

则 $f$ 必能全纯开拓到 $\mathbb C$。

**8.** 将图 6.5 所示的单连通域

$$
D=(\mathbb C\setminus[2,\infty))\setminus
\left(\overline{B(1,1)}\cup\overline{B(-1,1)}\right)
$$

双全纯地映为上半平面。

![教材图 6.5：习题 6.1 第 8 题](/figures/complex-functions/ch06-fig-6-5.png)

**9.** 设 $0<a<\infty$，

$$
\begin{aligned}
L_k&=\{z=k\pi+\pi/2+iy:-a\le y\le a\},\quad k\in\mathbb Z,\\
D&=\left(\mathbb C\setminus\bigl(( -\infty,-\pi/2]\cup[\pi/2,\infty)\bigr)\right)
\setminus\bigcup_{k=-\infty}^{\infty}L_k.
\end{aligned}
$$

$D$ 为图 6.6 所示的单连通域。将 $D$ 双全纯地映为上半平面。

![教材图 6.6：习题 6.1 第 9 题](/figures/complex-functions/ch06-fig-6-6.png)

**10.** 设 $L_k=\{z=k\pi+iy:0\le y<\infty\}$，$k\in\mathbb Z$，$D=\mathbb C\setminus\bigcup_{k=-\infty}^{\infty}L_k$ 为图 6.7 所示的单连通域。将 $D$ 双全纯地映为上半平面。

![教材图 6.7：习题 6.1 第 10 题](/figures/complex-functions/ch06-fig-6-7.png)

**11.** 设 $D$ 是由三条与 $\partial B(0,1)$ 正交的圆弧所围成的单连通域，如图 6.8。证明：若 $\varphi$ 双全纯地将 $D$ 映为上半平面 $\mathbb C^+=\{z:\operatorname{Im}z>0\}$，同胚地将 $\overline D$ 映为 $\overline{\mathbb C^+}$，$A,B,C$ 分别映为 $0,1,\infty$，则 $\varphi$ 可全纯开拓到 $B(0,1)$，且 $\varphi(B(0,1))=\mathbb C\setminus\{0,1\}$。

![教材图 6.8：习题 6.1 第 11 题](/figures/complex-functions/ch06-fig-6-8.png)

### 本节校注

第 2 题的残数公式按原书保留负号与导数上的共轭；所写有限点残数公式要求 $z_0,w_0\in\mathbb C$。若反射把圆心与无穷远交换，须另用局部坐标讨论，不能把 $w_0=\infty$ 代入该式。第 8 题删去的是闭圆盘；第 9 题线段的下端为 $-a$。第 11 题的闭包包含球面上的无穷远点，圆弧端点位于单位圆上；本章 Picard 小定理已给出独立证明，不把本题的未解状态作为已完成的覆盖构造。

## 习题 6.2

**1.** 证明：幂级数收敛圆周上的点是否为其和函数的奇点，与该幂级数的前有限项无关。

**2.** 证明：若幂级数的收敛圆周上有其和函数的极点，则该幂级数在其收敛圆周上处处发散。

**3.** 证明：若 $\sum_{n=0}^{\infty}a_nz^n$ 的和函数在其收敛圆周上有一个一阶极点 $z_0$，此外再无其他奇点，则

$$
\lim_{n\to\infty}\frac{a_n}{a_{n+1}}=z_0.
$$

**4.** 设 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径为 $1$，$F(w)=f(w/(1+w))=\sum_{n=0}^{\infty}b_nw^n$ 在原点的收敛半径为 $\rho$。证明：

(1) $\rho\ge1/2$，并且 $-1$ 是 $f$ 的奇点当且仅当 $\rho=1/2$；

(2) 若 $1/2<\rho<1$，则 $f$ 能全纯开拓到 $B(-\rho^2/(1-\rho^2),\rho^2/(1-\rho^2))$；

(3) 若 $\rho=1$，则 $f$ 能全纯开拓到 $\{z:\operatorname{Re}z<1/2\}$；

(4) 若 $\rho>1$，则 $f$ 能全纯开拓到 $\mathbb C\setminus\overline{B(\rho^2/(\rho^2-1),\rho/(\rho^2-1))}$；

(5) 若 $\rho=\infty$，则 $f$ 能全纯开拓到 $\mathbb C\setminus\{1\}$。

**5.** 设 $D$ 是域。证明：存在 $f\in H(D)$，使 $\partial D$ 中的每个点皆是 $f$ 的奇点。

**6.** 证明：$\sum_{n=0}^{\infty}z^{2^n}$ 的收敛圆周上的每个点皆为其和函数的奇点。

**7.** 证明：$\sum_{n=0}^{\infty}z^{2^n}/2^n$ 的收敛圆周上的每个点皆为其和函数的奇点。

**8.** 设 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径为 $1$，$a_n$ 为实数，$S_n=\sum_{k=0}^na_k$。证明：若 $S_n\to\infty$，则 $1$ 是 $f$ 的奇点。举例说明，仅仅 $|S_n|\to\infty$ 不能保证 $1$ 是 $f$ 的奇点。提示：考虑 $f(z)/(1-z)$。

**9.** 证明：若 $\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径为 $1$，其和函数在 $\partial B(0,1)$ 上有一阶极点 $z_1,z_2,\ldots,z_m$，此外再无其他奇点，则 $\{a_n\}$ 有界。

**10.** 若 $f(z)=\sum_{n=0}^{\infty}a_nz^n$ 的收敛半径为 $1$，且 $a_n\to0$。证明：若 $z_0\in\partial B(0,1)$ 不是 $f$ 的奇点，则 $\sum_{n=0}^{\infty}a_nz_0^n$ 收敛。

### 本节校注

第 4(2) 题按上传原书保留半径 $\rho^2/(1-\rho^2)$。由逆变换 $w=z/(1-z)$ 直接解 $|w|<\rho$，实际得到更大的圆盘

$$
B\left(-\frac{\rho^2}{1-\rho^2},\frac\rho{1-\rho^2}\right).
$$

这是精确的逆像半径；原题给出的较小同心圆盘仍在其中，所以原题是较弱的结论，不能仅据半径不同就称其为错误命题。是否为排印失误尚未用另一版本核准。第 4 题各项中的“开拓到”均指与原圆盘的和函数相容后，在原域与所列区域的并上开拓；不能把不包含原圆盘的新圆盘直接叫作更大的原定义域。第 4(4) 题按有限 $\rho>1$ 理解，无穷半径另列于 (5)。

## 习题 6.3

**1.** 设 $f\in H(D)$，$z_0\in D$。证明

$$
F(z)=\int_{z_0}^zf(\zeta)\,d\zeta
$$

是 $D$ 上的多值全纯函数。积分沿 $D$ 中连接 $z_0$ 和 $z$ 的任意可求长曲线进行。

**2.** 证明：若 $f$ 是域 $D$ 上非常数的全纯函数，但不是局部双全纯的，则 $f^{-1}$ 一定不是域 $G=f(D)$ 上的多值全纯函数。

**3.** 举例说明，存在 $B(0,1)$ 上的局部双全纯映射 $f$，使得 $f^{-1}$ 不是域 $G=f(B(0,1))$ 上的多值全纯函数。

**4.** 证明：不存在 $B(0,1)$ 上的局部双全纯映射 $f$，使 $f(B(0,1))=\mathbb C$，并且 $f^{-1}$ 是 $\mathbb C$ 上的多值全纯函数。

**5.** 证明：不存在 $B(0,1)$ 上的局部双全纯映射 $f$，使 $f(B(0,1))=\mathbb C\setminus\{a\}$，并且 $f^{-1}$ 是 $\mathbb C\setminus\{a\}$ 上的多值全纯函数。这里 $a\in\mathbb C$ 为固定点。

**6.** 求起始函数元

$$
f(z)=z^{1/2}=|z|^{1/2}e^{\frac i2\arg z}
=1+\sum_{k=1}^{\infty}\binom{1/2}{k}(z-1)^k
$$

沿单位圆周 $\partial B(0,1)$ 正向与反向的全纯开拓；起点为 $1$，初始取值为 $f(1)=1$。

**7.** 设幂级数族 $\{P_t:\alpha\le t\le\beta\}$ 给出了沿平面曲线 $z=\gamma(t)$ 的全纯开拓。证明：$P_t$ 的收敛半径 $R(t)$ 或者在 $[\alpha,\beta]$ 上恒为 $\infty$，或者是 $[\alpha,\beta]$ 上的正值连续函数。

### 本节校注

第 2—5 题的 $f^{-1}$ 指包含全部原像的多值逆关系，是否满足定义 6.3.5 必须检查任意路径的全纯开拓。第 6 题把原书展开式隐含的起始分支 $f(1)=1$ 明写出来，防止只写多值符号而漏掉函数元。第 7 题中的半径是每个完整 Taylor 级数的真实收敛半径，不能人为截小。


<!-- chapter-navigation -->
[§6.1 讲义](/notes/9acedc7814e349bcdfad8af3/) · [§6.2 讲义](/notes/5e11f79c127e42b11b414b06/) · [§6.3 讲义](/notes/5f4e619733ddf1604b5eec16/) · [返回第六章目录](/math/complex-functions/#chapter-6)
