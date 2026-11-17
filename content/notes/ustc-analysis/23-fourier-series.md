---
title: "Fourier 系数、Dirichlet 核与逐点收敛"
description: "由正交性计算系数，用 Dirichlet 积分、局部化和 Dini 判别法确定跳跃点处的和。"
subject: "数学分析"
category: "ustc-analysis/series"
tags: ["科大数分", "Fourier 系数", "Dirichlet 核", "逐点收敛"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
---

下册 §§17.1—17.2（教材第 243—259 页）。能算出 Fourier 系数、级数在一点有和、这个和等于给定的函数值，是三个需要分别证明的命题。

[系数由正交性确定](#系数由正交性确定) · [从部分和到局部化](#从部分和到局部化) · [Dini 判别与跳跃点](#dini-判别与跳跃点) · [同一展开在内部与端点的取值](#同一展开在内部与端点的取值)

## 系数由正交性确定

设 $f$ 以 $2\pi$ 为周期，且在一周期上可积并绝对可积，依教材简记为 $f\in\mathrm R[-\pi,\pi]$。在 $[-\pi,\pi]$ 上，不同频率的三角函数相互正交，正弦与余弦也相互正交。非常数基函数的平方积分均为 $\pi$，常数 $1$ 的平方积分为 $2\pi$。因此记
$$
\begin{aligned}
a_n&=\frac1\pi\int_{-\pi}^{\pi}f(t)\cos nt\,dt\quad(n\ge0),\\
b_n&=\frac1\pi\int_{-\pi}^{\pi}f(t)\sin nt\,dt\quad(n\ge1),\\
f(x)&\sim\frac{a_0}2+\sum_{n\ge1}(a_n\cos nx+b_n\sin nx).
\end{aligned}
$$
波浪号表示右侧系数按上述积分取得。记截到第 $n$ 个频率的部分和为 $S_n(x)$。偶函数只有余弦项和常数项，奇函数只有正弦项。对周期 $2l$，将频率换为 $n\pi/l$，积分区间换为 $[-l,l]$、系数因子换为 $1/l$。在 $[0,l]$ 上要求纯正弦或纯余弦展开，先选奇延拓或偶延拓，再作周期延拓；端点要看延拓后的两侧极限。[练习 17.1 第 1、3 题（正交性与平移）](/files/problems/科大数分习题-v2%282%29.pdf#page=40)

**Riemann–Lebesgue 引理**　对绝对可积的 $g$，$\int g(t)e^{i\lambda t}\,dt\to0$（$|\lambda|\to\infty$）。在有限区间上，阶梯函数的每一段积分由 $2/|\lambda|$ 乘该段常值的绝对值控制；再用阶梯函数在积分绝对误差下逼近 $g$。有反常端点或无穷端时，先截去绝对积分很小的尾部即可。因此 $a_n,b_n\to0$。若 $f$ 为周期 $C^1$ 函数，分部积分的端点项消失，对 $f'$ 用此引理还得 $a_n,b_n=o(1/n)$。[练习 17.1 第 6 题（导数与系数衰减）](/files/problems/科大数分习题-v2%282%29.pdf#page=41)

## 从部分和到局部化

按教材的归一化取 $D_n(t)=\tfrac12+\sum_{k=1}^n\cos kt$。当 $t\notin2\pi\mathbb Z$ 时有限几何和给出 $D_n(t)=\sin((n+\tfrac12)t)/(2\sin(t/2))$，在零点取连续延拓值 $n+\tfrac12$。它为偶函数且 $\int_{-\pi}^{\pi}D_n=\pi$。将系数代回有限和，利用 $\cos k(t-x)$ 的加法公式及周期性，得
$$
S_n(x)=\frac1\pi\int_0^\pi [f(x+t)+f(x-t)]D_n(t)\,dt .
$$
固定 $\delta>0$ 且 $\delta<\pi$。在 $[\delta,\pi]$ 上 $1/\sin(t/2)$ 有界，Riemann–Lebesgue 引理使该段积分趋于零。于是两函数只要在 $x$ 的某去心邻域上相等，它们在 $x$ 的 Fourier 部分和之差便趋于零。这是局部化定理（17.2.1）。

## Dini 判别与跳跃点

给定候选和 $s$，记 $\varphi(t)=f(x+t)+f(x-t)-2s$。若某个 $\delta>0$ 满足 $\int_0^\delta|\varphi(t)|\,dt/t<\infty$（按教材的可积性约定），则 $S_n(x)\to s$（定理 17.2.2）。由核的总质量，
$$
S_n(x)-s=\frac1\pi\int_0^\pi\frac{\varphi(t)}{2\sin(t/2)}
                 \sin((n+\tfrac12)t)\,dt .
$$
靠近零点时 $2\sin(t/2)\sim t$，远离零点时分母有正下界；故振荡因子前的函数绝对可积，应用引理即证。

特别地，若左右极限存在，并且两侧函数值与各自极限的差为 $O(t^\alpha)$（$\alpha>0$），取 $s=[f(x+0)+f(x-0)]/2$ 后，只需积 $t^{\alpha-1}$。这包括分段光滑函数的跳跃点，在那里即使重新指定 $f(x)$，系数与和也不变。连续点仍须有足够的局部控制才能用此判据。

## 同一展开在内部与端点的取值

把 $f(x)=x$（$-\pi<x<\pi$）作周期延拓。奇性给出 $a_n=0$，分部积分得 $b_n=2(-1)^{n-1}/n$。由上节收敛判据，
$$
x=2\sum_{n=1}^\infty(-1)^{n-1}\frac{\sin nx}{n},\qquad -\pi<x<\pi .
$$
在 $\pi$ 处，延拓的左、右极限分别为 $\pi,-\pi$，和为零。取内部点 $x=\pi/2$ 得 $1-1/3+1/5-\cdots=\pi/4$。这些连续部分和不能在整个周期上一致趋于带跳跃的极限。若改用方波 $\operatorname{sgn}x$，奇性仍成立，但偶数频率也消失：直接积分得 $b_n=2[1-(-1)^n]/(\pi n)$，在 $0<x<\pi$ 上和为 $1$，在跳跃点和为零。[练习 17.2 第 1、4 题（方波与一般周期）](/files/problems/科大数分习题-v2%282%29.pdf#page=41)

[上一讲　Bernstein 多项式与一致逼近](/notes/7dfcfba7166db9630fc02e76/) · [专题Ⅳ目录](/math/ustc-analysis/#series) · [下一讲　Cesàro 求和与 Fejér 一致逼近](/notes/37dee4cfc0fddf0111bca857/)
