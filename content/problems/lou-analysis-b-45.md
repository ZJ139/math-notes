---
title: "楼红卫《数学分析》B 组习题解答（四十五）：热方程、Fourier 部分和与振荡积分"
description: "B310—B316。周期与全空间热方程、部分和算子、Borwein 型积分、一维能量估计与振荡积分。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-45.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "Fourier分析", "B310-B316"]
created_at: "2026-11-28"
updated_at: "2026-11-28"
---

本批收录习题 12.2.B 第 8—10 题及 12.3.B 第 1—4 题。

[上一批 B303—B309](/problems/d56adfe81ae76fbd7cfa394a/) · [下一批 B317—B322](/problems/1ab60d9cf10947ee785448c1/) · [第十二章索引](/problems/collections/lou-analysis/chapters/12/) · [B 组总目录](/problems/collections/lou-analysis/)

## 题号导航

- [问题 B310：周期热方程的解类与初值（12.2.B-8）](#问题-b310)
- [问题 B311：普通部分和的强收敛与公共界（12.2.B-9）](#问题-b311)
- [问题 B312：连续函数空间中的 Lebesgue 常数（12.2.B-10）](#问题-b312)
- [问题 B313：Borwein 型积分的参数范围（12.3.B-1）](#问题-b313)
- [问题 B314：一维能量估计的严格上界（12.3.B-2）](#问题-b314)
- [问题 B315：两个含参振荡积分（12.3.B-3）](#问题-b315)
- [问题 B316：全空间热方程的唯一性（12.3.B-4）](#问题-b316)

## 问题 B310

**原题号：** 习题 12.2.B 第 8 题。原书下册第 373 页。[题册 PDF 第 42 页](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　讨论原书（12.2.47）的解应如何定义，并说明（12.2.48）—（12.2.49）何时给出唯一解。这里 $u_t=u_{xx}$，$u(0,x)=f(x)$，初值连续，关于 $x$ 的周期为 $1$。

**解**　令 $\mathbb T=\mathbb R/\mathbb Z$。取 $u\in C([0,\infty)\times\mathbb T)$，并要求正时间内 $u_t,u_x,u_{xx}$ 连续且逐点满足方程。记 $c_k=\int_0^1 f(y)e^{-2\pi i k y}\,dy$。对 $t>0$ 定义

$$
u(t,x)=\sum_{k\in\mathbb Z} c_k e^{-4\pi^2 k^2t}e^{2\pi i kx}.
\qquad\text{(1)}
$$

因 $|c_k|\le\|f\|_\infty$，在 $t\ge\tau>0$ 上，逐项求导所需的各级数都由收敛的高斯级数控制，故 $u_t=u_{xx}$。合并正负频率，实三角形式的常数项为 $c_0$，其余系数为

$$
a_k=2\int_0^1 f(y)\cos(2\pi ky)\,dy,\qquad
b_k=2\int_0^1 f(y)\sin(2\pi ky)\,dy .\qquad\text{(2)}
$$

令 $G_t(y)=(4\pi t)^{-1/2}e^{-y^2/(4t)}$。它在实轴上的积分为一。对 $f$ 的周期延拓作卷积，由 Fubini 定理，该卷积的第 $k$ 个周期 Fourier 系数为 $c_k e^{-4\pi^2 k^2t}$。连续周期函数的系数唯一性表明 $G_t*f$ 就是（1）。以 $\omega_f$ 表示一致连续模，有

$$
\|u(t,\cdot)-f\|_\infty\le\omega_f(\delta)+
2\|f\|_\infty\int_{|y|>\delta}G_t(y)\,dy .\qquad\text{(3)}
$$

固定 $\delta>0$，作代换 $y=\sqrt t\,z$，第二项趋于零，再令 $\delta\downarrow0$，即得一致初值。反之，任一解的第 $k$ 个系数 $d_k(t)$ 在一个周期上积分、分部积分两次，得到 $d_k'=-4\pi^2k^2d_k$。周期性消去边界项，（3）所表达的初值条件给出 $d_k(0)=c_k$。解此常微分方程，再用系数唯一性，即得（1）。

对一般连续初值，原书（12.2.49）在初始时刻可按系数对应或均方等式解释。若 $f$ 是二阶连续可微的周期函数，两次分部积分给出 $|c_k|\le\|f''\|_\infty/(4\pi^2 k^2)$（$k\ne0$），普通 Fourier 级数也绝对一致收敛到 $f$。此时 $u_{xx}=G_t*f''$ 一致趋于 $f''$，积分 $u_t=u_{xx}$ 并令时间下限趋零即得 $u_t(0+,x)=f''(x)$。

## 问题 B311

**原题号：** 习题 12.2.B 第 9 题。原书下册第 373 页。[题册 PDF 第 42 页](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　对固定的 $1\le p<\infty$，证明原书（12.2.38）与（12.2.40）等价。记 $S_N$ 为普通 Fourier 部分和算子，范数取在 $[0,2\pi]$ 上。两命题依次是

$$
\begin{aligned}
&\|S_N f-f\|_p\to0 &&(f\in L^p),\\
&\|S_N f\|_p\le M\|f\|_p &&(N\ge1,\ f\in L^p).
\end{aligned}\qquad\text{(4)}
$$

**证明**　记 $D_N(y)=\sum_{|k|\le N}e^{iky}$。由卷积公式与 Minkowski 不等式，

$$
S_N f(x)=\frac1{2\pi}\int_{-\pi}^{\pi} f(x-y)D_N(y)\,dy,
\qquad \|S_N f\|_p\le\frac{\|D_N\|_1}{2\pi}\|f\|_p .
\qquad\text{(5)}
$$

每个 $S_N$ 都有界。若（4）首行成立，则每个固定 $f$ 的像列有界。由 $L^p$ 的完备性和一致有界原理，即得次行。反之，连续周期函数在 $L^p$ 中稠密，又能用三角多项式一致逼近。给定 $\varepsilon>0$，取三角多项式 $P$ 使 $\|f-P\|_p<\varepsilon$。当 $N\ge\deg P$ 时，$S_NP=P$，故

$$
\|S_N f-f\|_p\le\|S_N(f-P)\|_p+\|P-f\|_p\le(M+1)\varepsilon .
\qquad\text{(6)}
$$

在 $p=1$ 时，取 $h_\delta=(2\delta)^{-1}\mathbf1_{[-\delta,\delta]}$ 作周期延拓。它在一个周期内的 $L^1$ 范数为一。对固定 $N$，由 $D_N$ 一致连续，$S_Nh_\delta\to D_N/(2\pi)$ 一致。结合（5）得 $\|S_N\|_{L^1\to L^1}=\|D_N\|_1/(2\pi)$。由下一题（8）此量无界，故端点处两个命题同假。

## 问题 B312

**原题号：** 习题 12.2.B 第 10 题。原书下册第 373 页。[题册 PDF 第 42 页](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　证明原书（12.2.39）与（12.2.41）等价。即在连续 $2\pi$ 周期函数空间 $X$ 中，$S_N f$ 对每个 $f$ 一致趋于 $f$，等价于存在与 $N,f$ 无关的 $M$ 使 $\|S_N f\|_\infty\le M\|f\|_\infty$。

**证明**　$X$ 关于上确界范数完备。由（5），每个 $S_N$ 都有界，故逐个函数的一致收敛通过一致有界原理给出公共界。反之，三角多项式在 $X$ 中稠密，对（6）取上确界范数即得所需的一致收敛。

还可判断两命题的真值。取 $f_\eta(y)=D_N(y)/(|D_N(y)|+\eta)$，$\eta>0$，则 $f_\eta$ 连续且范数至多为一。因 $D_N$ 实且偶，在 $x=0$ 使用（5）并令 $\eta\downarrow0$，支配收敛给出与（5）上界一致的下界。因此

$$
\|S_N\|_{X\to X}=\frac1{2\pi}\int_{-\pi}^{\pi}|D_N(y)|\,dy,\qquad
D_N(y)=\frac{\sin((N+\tfrac12)y)}{\sin(y/2)} .\qquad\text{(7)}
$$

在 $0<y\le\pi$ 用 $\sin(y/2)\le y/2$，令 $v=(N+\tfrac12)y$，保留前 $N$ 个完整半波，得

$$
\int_0^\pi |D_N(y)|\,dy
\ge 2\sum_{j=0}^{N-1}\int_{j\pi}^{(j+1)\pi}\frac{|\sin v|}{v}\,dv
\ge\frac4\pi\sum_{j=1}^{N}\frac1j .\qquad\text{(8)}
$$

于是算子范数无界，一致有界原理给出某个连续周期函数满足 $\sup_N\|S_N f\|_\infty=\infty$。

## 问题 B313

**原题号：** 习题 12.3.B 第 1 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　仿原书（12.3.33）—（12.3.36），给出一些类似的等式。

**解**　写 $\operatorname{sinc}v=\sin(v)/v$，并置 $\operatorname{sinc}0=1$。对 $a>0$、$b\ge0$，有如下两族等式，各自所列的参数范围恰为成立范围：

$$
\begin{aligned}
\int_0^\infty\frac{\sin x}{x}\operatorname{sinc}^2(ax)\,dx&=\frac\pi2 &&(2a\le1),\\
\int_0^\infty\frac{\sin x}{x}\cos(bx)\operatorname{sinc}^2(ax)\,dx&=\frac\pi2 &&(2a+b\le1).
\end{aligned}\qquad\text{(9)}
$$

取相互独立的 $U,V,E$，其中 $U,V$ 均匀分布在 $[-a,a]$，$E$ 等概率取 $\pm1$。令 $Z=U+V+bE$。直接积分并用独立性得到

$$
\mathbb E\cos(xZ)=\operatorname{sinc}^2(ax)\cos(bx) .\qquad\text{(10)}
$$

先在第二个积分中加入 $e^{-\varepsilon x}$，$\varepsilon>0$，即可由 Fubini 定理交换期望与积分。由积化和差，

$$
\int_0^\infty e^{-\varepsilon x}\frac{\sin x}{x}\cos(zx)\,dx
=\frac12\left(\arctan\frac{1+z}{\varepsilon}+\arctan\frac{1-z}{\varepsilon}\right) .\qquad\text{(11)}
$$

这里用到 $\int_0^\infty e^{-\varepsilon x}\sin(cx)\,dx/x=\arctan(c/\varepsilon)$，可对 $c$ 求导后从零积分验证。式（11）的绝对值至多为 $\pi/2$，$Z$ 有密度，故 $Z=\pm1$ 的概率为零。令 $\varepsilon\downarrow0$，对期望用支配收敛；对（9）的积分则在远处用 $O(x^{-3})$ 控制，得到

$$
\int_0^\infty\frac{\sin x}{x}\cos(bx)\operatorname{sinc}^2(ax)\,dx
=\frac\pi2\,\mathbb P(|Z|<1) .\qquad\text{(12)}
$$

若 $2a+b\le1$，右边即为 $\pi/2$。若 $2a+b>1$，取 $E=1$ 且 $U,V$ 同时充分接近 $a$，则以正概率有 $Z>1$。故此时严格小于 $\pi/2$。令 $b=0$ 就得到第一族。

## 问题 B314

**原题号：** 习题 12.3.B 第 2 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　设实函数 $f\in C^1(\mathbb R)$ 满足 $\int_{\mathbb R}(f^2+(f')^2)\,dx=1$。证明 $f(x)\to0$（$x\to\infty$），且 $\|f\|_\infty<\sqrt2/2$。

**证明**　由 Cauchy–Schwarz 不等式，$(f^2)'=2ff'\in L^1$。故 $f^2$ 在正负无穷远均有有限极限，又因 $f^2$ 非负可积，两极限只能为零。于是 $|f|$ 在有限点 $x_0$ 达到其正的最大值。分别在 $x$ 的左右配方，并利用刚得到的两端极限，得

$$
\int_{-\infty}^x(f'-f)^2\,dy+\int_x^\infty(f'+f)^2\,dy=1-2f(x)^2 .\qquad\text{(13)}
$$

这给出 $\|f\|_\infty\le1/\sqrt2$。若取等，则在 $x_0$ 处两个非负积分都为零。由连续性，左半轴 $f'=f$，右半轴 $f'=-f$，故 $f(y)=f(x_0)e^{-|y-x_0|}$。它在 $x_0$ 的两侧导数互为相反数且非零，与 $f\in C^1$ 矛盾。

此界仍是最优的。令 $g_\varepsilon(y)=\exp(-\sqrt{y^2+\varepsilon^2})$。函数及其导数的绝对值均至多为 $e^{-|y|}$，并在 $y\ne0$ 时分别趋于 $e^{-|y|}$ 及其导数。由支配收敛，能量趋于 $2\int_\mathbb R e^{-2|y|}\,dy=2$，而 $g_\varepsilon(0)\to1$。除以能量的平方根即得所需逼近列。

## 问题 B315

**原题号：** 习题 12.3.B 第 3 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　设 $\alpha\in\mathbb R$，计算 $\int_0^\infty \cos(\alpha\pi x)/(1+x^2)\,dx$ 与 $\int_0^\infty x\sin(\alpha\pi x)/(1+x^2)\,dx$。

**解**　令 $s=\pi\alpha$。采用指数为 $e^{-ixy}$ 的角频率变换。对 $h(y)=e^{-|y|}$ 分两半轴积分，得 $\widehat h(x)=2/(1+x^2)$。两函数都绝对可积且 $h$ 连续，由 Fourier 反演及偶性，

$$
I(s)=\int_0^\infty\frac{\cos(sx)}{1+x^2}\,dx=\frac\pi2e^{-|s|} .\qquad\text{(14)}
$$

置 $q(x)=x/(1+x^2)$。当 $x\ge1$ 时 $q$ 单调趋于零。对 $B>A\ge1$ 和 $|s|\ge\delta>0$，分部积分给出

$$
\left|\int_A^B q(x)\sin(sx)\,dx\right|
\le\frac{q(A)+q(B)+\int_A^B|q'(x)|\,dx}{|s|}
\le\frac{2q(A)}{\delta} .\qquad\text{(15)}
$$

在不含零的每个参数紧区间，截断积分的导数一致收敛，故第二个积分等于 $-I'(s)$。$s=0$ 时直接代入，被积函数恒零。因此

$$
\begin{aligned}
\int_0^\infty\frac{\cos(\alpha\pi x)}{1+x^2}\,dx&=\frac\pi2e^{-\pi|\alpha|},\\
\int_0^\infty\frac{x\sin(\alpha\pi x)}{1+x^2}\,dx&=\frac\pi2\operatorname{sgn}(\alpha)e^{-\pi|\alpha|},\qquad \operatorname{sgn}(0)=0 .
\end{aligned}\qquad\text{(16)}
$$

对 $\alpha\ne0$，在 $|\sin(sx)|$ 的每个充分靠后的半波上，绝对积分至少为常数乘以该半波序号的倒数，故第二个积分只条件收敛。它在零点的左右极限分别为 $-\pi/2$ 与 $\pi/2$。

## 问题 B316

**原题号：** 习题 12.3.B 第 4 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　对原书例 12.3.5 的速降初值 $f\in\mathcal S(\mathbb R^n)$，证明（12.3.27）给出热方程（12.3.26）的唯一解。

**证明**　取初始时刻连续、在正时间内具有连续的时间一阶和空间一、二阶偏导数，且在每个 $[0,T]\times\mathbb R^n$ 上有界的经典解。原式作代换 $z=2\sqrt{\pi t}\,y$ 得

$$
\begin{aligned}
u(t,x)&=\int_{\mathbb R^n} f(x-2\sqrt{\pi t}\,y)e^{-\pi|y|^2}\,dy=(G_t*f)(x),\\
G_t(z)&=(4\pi t)^{-n/2}\exp\left(-\frac{|z|^2}{4t}\right).
\end{aligned}\qquad\text{(17)}
$$

因 $\int G_t=1$，有 $|u|\le\|f\|_\infty$。再由 $\nabla f$ 有界，

$$
\|u(t,\cdot)-f\|_\infty\le2\sqrt{\pi t}\,\|\nabla f\|_\infty
\int_{\mathbb R^n}|y|e^{-\pi|y|^2}\,dy\longrightarrow0.\qquad\text{(18)}
$$

直接微分有 $\partial_tG_t=\Delta G_t$。在 $0<\tau\le t\le T$，所需核导数均由 $C_{\tau,T}(1+|z|^2)e^{-|z|^2/(4T)}$ 控制，在紧集上平移亦有可积控制，故在卷积积分中求导得到 $u_t=\Delta u$。也可将空间导数移到 $f$ 上，得到 $\Delta u=G_t*\Delta f$ 一致趋于 $\Delta f$，从而 $u_t(0+,x)=\Delta f(x)$。

设 $w$ 为两解之差，固定 $T>0$ 并记 $M=\sup_{[0,T]\times\mathbb R^n}|w|$。对 $\varepsilon>0$ 取

$$
\Phi(t,x)=\varepsilon\bigl(1+|x|^2+(2n+1)t\bigr),\qquad
(\partial_t-\Delta)\Phi=\varepsilon .\qquad\text{(19)}
$$

先设 $w$ 实值。取 $\varepsilon R^2>M$。在柱体 $[0,T]\times\overline B_R$ 的初始面与空间侧面，$w-\Phi<0$。若有正最大值，取得处空间在球内，时间为正；此处时间导数非负（顶面取左导数），空间 Laplace 算子非正，与 $(\partial_t-\Delta)(w-\Phi)=-\varepsilon$ 矛盾。对 $-w$ 同理，故 $|w|\le\Phi$。任一固定点都可纳入足够大的球，令 $\varepsilon\downarrow0$ 即得 $w=0$。复值解可分别考察实部与虚部。

## 七题方法总结

周期热方程通过 Fourier 系数归结为常微分方程，全空间热方程则用增长屏障保证唯一性。B311、B312 从一致有界原理得到公共界，再通过稠密性还原全空间的收敛。B313 用支撑刻画积分取等的参数范围；B314 用配方决定极值轮廓；B315 通过局部一致的振荡尾估计说明何时可以对参数求导。

截至本批，两册累计 311 道已作答，5 道待核。
