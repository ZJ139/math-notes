---
title: "楼红卫《数学分析》B 组习题解答（四十三）：循环常数反例、幂级数与 Fourier 系数"
description: "B296—B302：循环常数反例、球内齐次幂级数、解析延拓、双曲正弦无穷乘积、曲面面积公式的条件减弱、最佳一致逼近与 Fourier 系数衰减。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-43-cm-bea.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "幂级数", "无穷乘积", "曲面面积", "Fourier级数", "B296-B302"]
created_at: "2026-11-25"
updated_at: "2026-11-25"
---

第四十三批接续 B295，完成 11.5.B 第 4 题、11.6.B 第 1—3 题、11.7.B 第 1 题及 12.1.B 第 1—2 题。原题见下册题册 PDF 第 38—41 页（印刷第 36—39 页）；B300 所引定理已核对完整教材第 343—346 页。七题均无星号、无附图。证明保留必要的条件、估计及极限交换依据。

[上一批 B289—B295](/problems/b4a16b6f4b1d292220be481a/) · [下一批 B303—B309](/problems/d56adfe81ae76fbd7cfa394a/) · [第十一章索引](/problems/collections/lou-analysis/chapters/11/) · [第十二章索引](/problems/collections/lou-analysis/chapters/12/) · [B 组总目录](/problems/collections/lou-analysis/)

## 题号导航

- [问题 B296：删去无穷远条件的反例（11.5.B-4）](#问题-b296)
- [问题 B297：球内齐次幂级数及一致收敛（11.6.B-1）](#问题-b297)
- [问题 B298：由解析延拓求双曲型级数（11.6.B-2）](#问题-b298)
- [问题 B299：双曲正弦无穷乘积的两种证明（11.6.B-3）](#问题-b299)
- [问题 B300：曲面面积公式的条件减弱（11.7.B-1）](#问题-b300)
- [问题 B301：三角多项式的收敛与最佳逼近（12.1.B-1）](#问题-b301)
- [问题 B302：Fourier 系数衰减的较弱条件（12.1.B-2）](#问题-b302)

## 问题 B296

**原题号：** 习题 11.5.B 第 4 题。[原题，PDF 第 38 页（印刷第 36 页）](/files/problems/楼分析习题-v2.pdf#page=38)

**题目**　上一题中，$R$ 是仅在原点为零的 $2n$ 次二元多项式，$P,Q$ 的次数不超过 $2n-2$，且在原点外满足 $\partial_x(Q/R)=\partial_y(P/R)$。若去掉 $\lim_{(x,y)\to\infty}R(x,y)/(x^2+y^2)^n>0$，绕原点的循环常数是否仍为零？

**基础知识**　闭微分形式、曲线积分换元及绕数。

**思路来源**　保留角微分的非零循环，用多项式剪切提高分母次数，使分子仍满足次数限制。

**解**　不一定。取 $n=2$，令

$$
R=x^2+(y+x^2)^2,\qquad P=x^2-y,\qquad Q=x.
\qquad\text{(1)}
$$

$R$ 的次数为 $4$，且 $R=0$ 当且仅当 $x=y=0$；$P,Q$ 的次数分别为 $2,1$，符合要求。

作坐标变换 $u=x$、$v=y+x^2$，则

$$
\omega:=\frac{P\,dx+Q\,dy}{R}
=\frac{u\,dv-v\,du}{u^2+v^2}.
\qquad\text{(2)}
$$

右端是穿孔平面的角微分。在 $u^2+v^2>0$ 上直接求导，得到

$$
\frac{\partial}{\partial u}\frac{u}{u^2+v^2}
=\frac{v^2-u^2}{(u^2+v^2)^2}
=\frac{\partial}{\partial v}\frac{-v}{u^2+v^2}.
\qquad\text{(3)}
$$

故 $\omega$ 闭，即满足题设的偏导等式。变换 $(x,y)\mapsto(u,v)$ 的逆为 $(u,v)\mapsto(u,v-u^2)$，Jacobian 为 $1$，是保向的全平面微分同胚，并固定原点。于是曲线

$$
C:\quad x=\cos t,\qquad y=\sin t-\cos^2t,
\qquad 0\le t\le2\pi
\qquad\text{(4)}
$$

是绕原点正向一周的简单闭曲线。由（2），在 $C$ 上有 $u=\cos t$、$v=\sin t$，从而

$$
\oint_C\omega=\int_0^{2\pi}dt=2\pi\ne0.
\qquad\text{(5)}
$$

**易错条件**　这个例子确实不满足被删条件：沿 $(x,y)=(0,t)$ 趋于无穷远，$R/(x^2+y^2)^2=t^{-2}\to0$。因此，仅有分子、分母的次数限制和闭性，不能推出循环常数为零。

## 问题 B297

**原题号：** 习题 11.6.B 第 1 题。[原题，PDF 第 38 页（印刷第 36 页）](/files/problems/楼分析习题-v2.pdf#page=38)

**题目**　设 $\alpha\in\mathbb R$、$\sigma\in S^{n-1}$。证明 $f(x)=|\sigma-x|^\alpha$ 在 $B_1(0)$ 内可以展开成 $x$ 的幂级数，且对每个 $0<\delta<1$，该级数关于 $(\sigma,x)\in S^{n-1}\times B_\delta(0)$ 一致收敛。

**基础知识**　广义二项式系数、全纯函数的 Taylor 展开与 Cauchy 系数估计。

**思路来源**　沿每个实方向引入一个复参数，再用与方向无关的圆周界控制齐次多项式。

**证明**　记 $\beta=\alpha/2$。以下按齐次总次数求和。令

$$
H_k(\sigma,x)=
\sum_{j=\lceil k/2\rceil}^{k}
\binom{\beta}{j}\binom{j}{k-j}
(-2\sigma\cdot x)^{2j-k}|x|^{2(k-j)}.
\qquad\text{(6)}
$$

$H_0=1$；每个 $H_k$ 都是关于 $x$ 的 $k$ 次齐次多项式，其中 $\binom\beta j=\beta(\beta-1)\cdots(\beta-j+1)/j!$。我们证明

$$
|\sigma-x|^\alpha=\sum_{k=0}^{\infty}H_k(\sigma,x),
\qquad |x|<1.
\qquad\text{(7)}
$$

对 $t\in[-1,1]$，取 $\theta\in[0,\pi]$ 使 $t=\cos\theta$，在 $|z|<1$ 上定义

$$
G_t(z)=(1-e^{i\theta}z)^\beta(1-e^{-i\theta}z)^\beta
=\sum_{k=0}^{\infty}c_k(t)z^k.
\qquad\text{(8)}
$$

两个幂均用在 $z=0$ 取值为零的解析对数定义，故 $G_t$ 在单位圆盘内全纯。对实数 $0\le r<1$，两个因子互为共轭，因而 $G_t(r)=(1-2tr+r^2)^\beta$。在 $z=0$ 的小邻域用二项式展开并按次数收集，得到

$$
c_k(t)=\sum_{j=\lceil k/2\rceil}^{k}
\binom{\beta}{j}\binom{j}{k-j}(-2t)^{2j-k}.
\qquad\text{(9)}
$$

若 $x\ne0$，令 $r=|x|$、$t=\sigma\cdot x/r$，则（6）给出 $H_k(\sigma,x)=r^kc_k(t)$，由（8）即得（7）；$x=0$ 时显然成立。

还需给出与方向无关的收敛估计。固定 $\delta<\rho<1$。当 $|z|=\rho$ 时，$1-\rho\le|1-e^{\pm i\theta}z|\le1+\rho$，所以

$$
|G_t(z)|\le M_\rho:=(1+\rho)^{2\max(\beta,0)}
(1-\rho)^{2\min(\beta,0)},\qquad -1\le t\le1.
\qquad\text{(10)}
$$

由 Cauchy 系数估计，$|c_k(t)|\le M_\rho\rho^{-k}$。故当 $|x|\le\delta$ 时，

$$
\begin{aligned}
|H_k(\sigma,x)|&\le M_\rho(\delta/\rho)^k,\\
\sup_{\sigma,\,|x|\le\delta}
\left|f(x)-\sum_{k=0}^{N}H_k(\sigma,x)\right|
&\le\frac{M_\rho(\delta/\rho)^{N+1}}{1-\delta/\rho}.
\end{aligned}
\qquad\text{(11)}
$$

右端趋于零，且与 $\sigma,x$ 无关，所求一致收敛成立。

**易错条件**　这里的展开是按齐次次数排列的 Taylor 级数。不能直接在整个单位球使用 $\sum_j\binom\beta j(-2\sigma\cdot x+|x|^2)^j$，因为其中二项式的自变量未必小于 $1$；也不据（11）宣称拆开所有单项式后可任意重排。

## 问题 B298

**原题号：** 习题 11.6.B 第 2 题。[原题，PDF 第 38 页（印刷第 36 页）](/files/problems/楼分析习题-v2.pdf#page=38)

**题目**　已知对 $0<a<1$，

$$
\sum_{n=1}^{\infty}\frac1{n^2-a^2}
=\frac1{2a^2}-\frac{\pi\cot(\pi a)}{2a}.
\qquad\text{(12)}
$$

利用复解析函数的性质证明：对 $\alpha>0$，

$$
\sum_{n=1}^{\infty}\frac1{n^2+\alpha^2}
=-\frac1{2\alpha^2}+\frac{\pi}{2\alpha\tanh(\pi\alpha)}.
\qquad\text{(13)}
$$

**基础知识**　紧一致收敛的全纯函数级数与恒等定理。

**思路来源**　先把两边定义在同一连通复区域，再令参数取纯虚数。

**证明**　在连通开集 $D=\mathbb C\setminus\mathbb Z$ 上定义

$$
F(z)=\sum_{n=1}^{\infty}\frac1{n^2-z^2},\qquad
G(z)=\frac1{2z^2}-\frac{\pi\cot(\pi z)}{2z}.
\qquad\text{(14)}
$$

$G$ 在 $D$ 上全纯。对任意紧集 $K\subset D$，取 $M\ge\sup_K|z|$。当 $n>2M$ 时，

$$
|n^2-z^2|\ge n^2-|z|^2\ge\tfrac34n^2,
\qquad \sup_{z\in K}\left|\frac1{n^2-z^2}\right|\le\frac4{3n^2}.
\qquad\text{(15)}
$$

因而（14）的级数在 $D$ 内紧一致收敛，$F$ 亦全纯。已知等式给出 $F=G$ 于实区间 $(0,1)$，由恒等定理，$F=G$ 于 $D$。

取 $z=i\alpha$，用 $\sin(iu)=i\sinh u$、$\cos(iu)=\cosh u$，得 $\cot(i\pi\alpha)=-i\coth(\pi\alpha)$，代入（14）即为（13）。

**易错条件**　代入虚参数须以全纯恒等式为依据；只对实参数成立的等式不能直接这样代入。

## 问题 B299

**原题号：** 习题 11.6.B 第 3 题。[原题，PDF 第 39 页（印刷第 37 页）](/files/problems/楼分析习题-v2.pdf#page=39)

**题目**　用不同方法证明

$$
\sinh x=x\prod_{n=1}^{\infty}\left(1+\frac{x^2}{n^2\pi^2}\right).
\qquad\text{(16)}
$$

**基础知识**　一致收敛下逐项积分、无穷乘积的对数判别及多项式分解。

**思路来源**　一法对上一题积分；另一法先分解有限多项式，再以统一尾界取极限。

**证明一：积分对数导数。** 由（13），对 $x>0$ 有

$$
\coth x-\frac1x
=\sum_{n=1}^{\infty}\frac{2x}{n^2\pi^2+x^2}.
\qquad\text{(17)}
$$

固定 $A>0$。当 $0\le x\le A$ 时，第 $n$ 项的绝对值不超过 $2A/(n^2\pi^2)$，故右端在 $[0,A]$ 一致收敛。左端在零点连续延拓为零；由 $\sinh x/x\to1$，可以从 $0$ 到 $x$ 逐项积分，得到

$$
\log\frac{\sinh x}{x}
=\sum_{n=1}^{\infty}\log\left(1+\frac{x^2}{n^2\pi^2}\right).
\qquad\text{(18)}
$$

取指数即得 $x>0$ 时的（16）。两端均为奇函数，故 $x<0$ 时亦成立；$x=0$ 时两端均为零。

**证明二：有限乘积取极限。** 令 $N=2m+1$。先证明有限恒等式

$$
\frac{\sinh(Nt)}{N\sinh t}
=\prod_{k=1}^{m}\left(1+\frac{\sinh^2t}{\sin^2(k\pi/N)}\right).
\qquad\text{(19)}
$$

由双曲函数加法公式，$\sinh(Nt)/\sinh t$ 是 $s=\sinh^2t$ 的 $m$ 次多项式：也可由递推 $U_{j+1}(u)=2uU_j(u)-U_{j-1}(u)$、$U_0=1$、$U_1=2u$，写成 $U_{2m}(\cosh t)$ 看出。取 $t=ik\pi/N$，$1\le k\le m$，得到其 $m$ 个互异根 $s=-\sin^2(k\pi/N)$；在 $s=0$ 时值为 $N$。这就确定了该多项式并证明（19）。

在（19）中取 $t=x/N$。固定实数 $x$，对每个固定的 $k$，

$$
\frac{\sinh^2(x/N)}{\sin^2(k\pi/N)}
\longrightarrow\frac{x^2}{k^2\pi^2}.
\qquad\text{(20)}
$$

为控制不断增加的因子，令 $C_x=\sup_{N\ge1}N|\sinh(x/N)|<\infty$。因 $k\le m<N/2$，有 $\sin(k\pi/N)\ge2k/N$，从而

$$
0\le\log\left(1+\frac{\sinh^2(x/N)}{\sin^2(k\pi/N)}\right)
\le\frac{C_x^2}{4k^2}.
\qquad\text{(21)}
$$

把 $k>m$ 的项补为零，利用可求和的控制列 $C_x^2/(4k^2)$，由（20）可在对数和中取极限。因此（19）的右端趋于（16）的无穷乘积，左端趋于 $\sinh x/x$；$x=0$ 用连续延拓解释。这给出了不依赖（13）的第二种证明。

**易错条件**　仅有每个固定因子的极限不够，（21）的可求和控制负责无穷尾项。上述乘积也在复平面的每个紧集上一致收敛，因为对 $|z|\le A$ 有 $\sum_n|z^2/(n^2\pi^2)|\le A^2\sum_n1/(n^2\pi^2)<\infty$。故（16）由恒等定理进一步对所有 $z\in\mathbb C$ 成立。

## 问题 B300

**原题号：** 习题 11.7.B 第 1 题。[原题，PDF 第 39 页（印刷第 37 页）](/files/problems/楼分析习题-v2.pdf#page=39)

**题目**　试减弱定理 11.7.3 的条件，使结论仍然成立。

**基础知识**　测度的下连续性、单调收敛定理与 Hausdorff 测度的覆盖定义。

**思路来源**　分别检查紧包含、光滑性和单射在原证明中的用途，再控制被删去的零测集。

**解**　原定理为：设 $1\le k\le n$，$U\subset\mathbb R^k$ 为区域，$\varphi:U\to\mathbb R^n$ 为 $C^1$ 单射。对紧包含于 $U$ 的可测集 $D$，

$$
V_k(\varphi(D))=\int_DJ_\varphi(u)\,du,\qquad
J_\varphi(u)=\sqrt{\det\bigl(D\varphi(u)^{\mathsf T}D\varphi(u)\bigr)}.
\qquad\text{(22)}
$$

这里 $V_k$ 为教材采用的规范化 $k$ 维 Hausdorff 测度。原定理并未要求 $D\varphi$ 处处满秩，故不能把“允许降秩”当作新的条件减弱。下面给出两项实际的推广。

**去掉 $D$ 紧包含于 $U$ 的要求。** 保持 $\varphi$ 为 $C^1$ 单射，允许 $D\subset U$ 为任意 Lebesgue 可测集，并允许两边取 $+\infty$。令

$$
K_j=\{u\in U:|u|\le j,\ \operatorname{dist}(u,\mathbb R^k\setminus U)\ge1/j\},
\qquad D_j=D\cap K_j.
\qquad\text{(23)}
$$

若 $U=\mathbb R^k$，距离条件自动满足。$K_j$ 为紧集，$K_j\subset U$，且 $D_j\uparrow D$。对每个 $D_j$ 应用原定理，再分别用测度的下连续性和单调收敛定理，得

$$
V_k(\varphi(D))
=\lim_{j\to\infty}V_k(\varphi(D_j))
=\lim_{j\to\infty}\int_{D_j}J_\varphi
=\int_DJ_\varphi.
\qquad\text{(24)}
$$

其中 $\varphi(D_j)$ 的可测性包含在原定理中；其可数并为 $\varphi(D)$，故最后的像集亦可测。

**允许零测集上的棱角，并减弱全局单射。** 更一般地，设 $N\subset U$ 为相对闭的零测集，$\varphi$ 在 $U$ 上局部 Lipschitz，在 $U\setminus N$ 上为 $C^1$，且仅要求 $\varphi|_{U\setminus N}$ 为单射。则对任意可测 $D\subset U$，（22）仍成立；$J_\varphi$ 在 $N$ 上的值任取为零，不影响积分。

先说明 $V_k(\varphi(N))=0$。在任意一个 Lipschitz 常数为 $L$ 的局部片内，零测集可由直径任意小、且边长 $\ell_i$ 满足 $\sum_i\ell_i^k<\varepsilon$ 的立方体覆盖。每个立方体与该片内 $N$ 的交集，其像可由半径 $L\sqrt{k}\,\ell_i$ 的球覆盖。因此其像的 $k$ 维 Hausdorff 外测度不超过 $C_kL^k\varepsilon$。令 $\varepsilon\to0$，再用可数个局部片覆盖 $U$，即得所断言的零测性。

将开集 $U\setminus N$ 分成至多可数个连通分支 $U_\nu$。在每个 $U_\nu$ 上用（24），并利用 $\varphi$ 在 $U\setminus N$ 上单射，使各像集两两不交，得到

$$
\begin{aligned}
V_k(\varphi(D\setminus N))
&=\sum_\nu V_k(\varphi(D\cap U_\nu))\\
&=\sum_\nu\int_{D\cap U_\nu}J_\varphi(u)\,du
=\int_DJ_\varphi(u)\,du.
\end{aligned}
\qquad\text{(25)}
$$

加入 $\varphi(D\cap N)$ 不改变左端，推广得证。例如 $\varphi(t)=(t,|t|)$、$U=\mathbb R$、$N=\{0\}$ 符合新条件，在原点却不是 $C^1$；其任意可测参数集 $D$ 的像长为 $\sqrt2\,|D|$。

**易错条件**　单射条件不能毫无限制地删去。取 $\varphi(t)=(\cos t,\sin t)$、$0<t<4\pi$，则 $\int_0^{4\pi}J_\varphi\,dt=4\pi$，而像集是单位圆，长度为 $2\pi$。重复覆盖时，右端按覆盖重数计量；若仍只取像集的面积，就不能保持原等式。

## 问题 B301

**原题号：** 习题 12.1.B 第 1 题。[原题，PDF 第 40—41 页（印刷第 38—39 页）](/files/problems/楼分析习题-v2.pdf#page=40)

**题目**　给定 $m\ge1$。

（1）证明三角多项式列

$$
T_j(x)=a_{j0}+\sum_{k=1}^m(a_{jk}\cos kx+b_{jk}\sin kx)
\qquad\text{(26)}
$$

在 $[0,2\pi]$ 上一致收敛，当且仅当各个系数序列收敛。

（2）设 $\mathcal T_m$ 为阶数不超过 $m$ 的 $2\pi$ 周期三角多项式全体。证明对每个 $f\in C_\#(\mathbb R)$，存在 $S\in\mathcal T_m$ 使

$$
\|f-S\|_\infty=\inf_{T\in\mathcal T_m}\|f-T\|_\infty,
\qquad \|g\|_\infty:=\max_{0\le x\le2\pi}|g(x)|.
\qquad\text{(27)}
$$

**基础知识**　三角函数的正交性与有限维空间中的有界列子列定理。

**思路来源**　用积分恢复系数，把一致范数下的极小化列转化为有限维有界列。

**原题校正**　原题把正弦系数的下标也写成 $0\le k\le m$。若另设 $b_{j0}=j$，它虽不收敛，却因 $\sin0x\equiv0$ 完全不影响 $T_j$；例如其余系数全为零时，$T_j\equiv0$。因此应只要求实际出现的 $a_{j0}$ 及 $a_{jk},b_{jk}$（$1\le k\le m$）收敛。第（2）问的“$m$ 阶”须理解为“不超过 $m$ 阶”；若要求恰好 $m$ 阶，则 $f=0$ 时下确界为零却无法取到。

**证明**　（1）

若 $T_j\to T$ 一致，由三角函数的正交性，

$$
\begin{aligned}
a_{j0}&=\frac1{2\pi}\int_0^{2\pi}T_j(x)\,dx,\\
a_{jk}&=\frac1\pi\int_0^{2\pi}T_j(x)\cos kx\,dx,\qquad
b_{jk}=\frac1\pi\int_0^{2\pi}T_j(x)\sin kx\,dx.
\end{aligned}
\qquad\text{(28)}
$$

一致收敛允许积分取极限，故各系数收敛。反之，设其极限为 $a_0,a_k,b_k$，令 $T=a_0+\sum_{k=1}^m(a_k\cos kx+b_k\sin kx)$，则

$$
\|T_j-T\|_\infty
\le|a_{j0}-a_0|+\sum_{k=1}^m\bigl(|a_{jk}-a_k|+|b_{jk}-b_k|\bigr)
\longrightarrow0.
\qquad\text{(29)}
$$

（2）记 $d=\inf_{T\in\mathcal T_m}\|f-T\|_\infty$，取 $T_j\in\mathcal T_m$ 使 $\|f-T_j\|_\infty\le d+1/j$。因为 $0\in\mathcal T_m$，$d\le\|f\|_\infty$，故

$$
\|T_j\|_\infty\le\|f\|_\infty+d+1.
\qquad\text{(30)}
$$

由（28），$|a_{j0}|\le\|T_j\|_\infty$，而 $|a_{jk}|,|b_{jk}|\le2\|T_j\|_\infty$。所以 $2m+1$ 维的系数向量列有界，存在子列的所有系数同时收敛。由（1），相应的 $T_{j_\ell}$ 一致收敛于某个 $S\in\mathcal T_m$。最后

$$
\bigl|\|f-T_{j_\ell}\|_\infty-\|f-S\|_\infty\bigr|
\le\|T_{j_\ell}-S\|_\infty\longrightarrow0,
\qquad\text{(31)}
$$

于是 $\|f-S\|_\infty=d$，即（27）。

**易错条件**　这里证明了最佳一致逼近的存在性；Fourier 截断是正交投影，一般不能据此认作最佳一致逼近。

## 问题 B302

**原题号：** 习题 12.1.B 第 2 题。[原题，PDF 第 41 页（印刷第 39 页）](/files/problems/楼分析习题-v2.pdf#page=41)

**题目**　试寻找比习题 12.1.A 第 7 题中的 $f\in C_\#^k(\mathbb R)$ 更一般的条件，使 Fourier 系数满足 $n^ka_n\to0$、$n^kb_n\to0$。

**基础知识**　绝对连续函数的分部积分与 L¹ 函数的阶梯函数逼近。

**思路来源**　将 k 次衰减归结为最高阶导数的 Fourier 系数趋零，同时消去全部周期边界项。

**解**　一个充分条件是：$k\ge1$，$f\in C^{k-1}[0,2\pi]$，$f^{(k-1)}$ 绝对连续，且

$$
f^{(j)}(0)=f^{(j)}(2\pi),\qquad 0\le j\le k-1.
\qquad\text{(32)}
$$

取其周期延拓。此时 $g:=f^{(k)}$ 几乎处处存在且属于 $L^1[0,2\pi]$，不必连续；这正是可用逐次分部积分表述的周期 $W^{k,1}$ 条件。

记复 Fourier 系数

$$
\widehat f(n)=\frac1{2\pi}\int_0^{2\pi}f(x)e^{-inx}\,dx,
\qquad n\in\mathbb Z.
\qquad\text{(33)}
$$

对 $n\ne0$ 逐次分部积分。每一层边界项因（32）及 $e^{-2\pi in}=1$ 而为零；最后一层使用绝对连续函数的分部积分公式。因此

$$
\widehat g(n)=(in)^k\widehat f(n).
\qquad\text{(34)}
$$

为说明右端趋零所需的依据，任给 $\varepsilon>0$，选阶梯函数 $s$ 使 $\|g-s\|_1<\varepsilon$。每个区间上 $e^{-inx}$ 的积分为 $O(1/|n|)$，故 $\widehat s(n)\to0$，且

$$
|\widehat g(n)|\le\frac{\varepsilon}{2\pi}+|\widehat s(n)|.
\qquad\text{(35)}
$$

先令 $|n|\to\infty$，再令 $\varepsilon\to0$，得 $\widehat g(n)\to0$。结合（34），$|n|^k\widehat f(n)\to0$。由于

$$
a_n=\widehat f(n)+\widehat f(-n),\qquad
b_n=i\bigl(\widehat f(n)-\widehat f(-n)\bigr),
\qquad\text{(36)}
$$

所求的两个极限均为零。

这一条件确比 $C_\#^k$ 弱。例如

$$
f(x)=\left|\sin\frac x2\right|^{k-1/2}
\qquad\text{(37)}
$$

是 $2\pi$ 周期函数。在 $2\pi\mathbb Z$ 附近，它是 $|x-2\pi\ell|^{k-1/2}$ 乘以光滑正函数；前 $k-1$ 阶导数连续，而第 $k$ 阶导数的大小为 $O(|x-2\pi\ell|^{-1/2})$，可积但无界。因此 $f^{(k-1)}$ 绝对连续且（32）成立，$f$ 却不属于 $C_\#^k$。

**易错条件**　端点匹配不能省略。若把 $f(x)=x$（$0\le x<2\pi$）周期延拓，虽然它在开区间内光滑，却有 $a_n=0$、$b_n=-2/n$，所以 $nb_n=-2$。障碍正是跨周期端点的跳跃。

## 七题方法总结

- **B296：** 将角微分作保向多项式坐标变换，同时满足次数限制并保留非零周期。
- **B297：** 按齐次次数展开，借助一元复参数的 Cauchy 估计统一控制所有方向。
- **B298：** 先证明级数紧一致收敛，再用恒等定理把实参数公式延拓到虚参数。
- **B299：** 分别用对数导数积分、有限多项式乘积取极限；两法都明确控制尾项。
- **B300：** 用紧集递增耗尽去掉紧包含条件，用局部 Lipschitz 性控制异常零测集的像。
- **B301：** 用正交积分提取系数，再以有限维有界子列完成最佳逼近存在性证明。
- **B302：** 绝对连续性保证分部积分，周期端点消去边界项，$L^1$ 逼近给出系数衰减。

本批七题全部完成。两册累计 **297 道已作答、5 道暂跳过**，其中上册 175 道、下册 122 道；待核仍为 **B116、B148、B180、B247、B261**。第十一章共十二题已全部作答，第十二章完成 12.1.B 两题。下一题为 **B303＝12.2.B 第 1 题**，见[原题 PDF 第 41—42 页](/files/problems/楼分析习题-v2.pdf#page=41)。

[上一批 B289—B295](/problems/b4a16b6f4b1d292220be481a/) · [第十二章索引](/problems/collections/lou-analysis/chapters/12/) · [B 组总目录](/problems/collections/lou-analysis/)
