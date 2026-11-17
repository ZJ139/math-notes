---
title: "Cesàro 求和与 Fejér 一致逼近"
description: "对 Fourier 部分和作算术平均，用正核的质量集中证明跳跃点求和、连续周期函数的一致逼近与唯一性。"
subject: "数学分析"
category: "ustc-analysis/series"
tags: ["科大数分", "Cesàro 求和", "Fejér 核", "三角多项式"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
---

下册 §17.3（教材第 259—264 页）。普通部分和在一点收敛需要局部条件。若改取部分和的算术平均，核成为非负函数，仅由左右极限就能确定平均的极限。

[求和对象是部分和](#求和对象是部分和) · [平均以后核为何非负](#平均以后核为何非负) · [Fejér 定理与一致逼近](#fejér-定理与一致逼近) · [从三角多项式回到代数多项式](#从三角多项式回到代数多项式)

## 求和对象是部分和

若部分和 $S_n$ 的算术平均趋于 $s$，称原级数可 Cesàro 求和，其和为 $s$。当 $S_n\to s$ 时，其平均也趋于 $s$：固定截止点，以后各项距 $s$ 均小，前面有限项的总贡献除以项数后趋于零。反向不成立，例如 $1-1+1-1+\cdots$ 的部分和在 $1,0$ 间交替，平均趋于 $1/2$。[练习 17.3 第 1、3 题（均值与必要条件）](/files/problems/科大数分习题-v2%282%29.pdf#page=42)

对 Fourier 部分和，沿用教材下标
$$
\sigma_n(x)=\frac1n\sum_{k=0}^{n-1}S_k(x)
=\frac{a_0}2+\sum_{j=1}^{n-1}\left(1-\frac jn\right)(a_j\cos jx+b_j\sin jx).
$$
频率 $j$ 出现在后面 $n-j$ 个部分和中，故得到线性递减的权。$\sigma_n$ 本身是次数至多 $n-1$ 的三角多项式。

## 平均以后核为何非负

令 $K_n(t)=n^{-1}\sum_{k=0}^{n-1}D_k(t)$。对有限指数和取模平方，按指数之差收集同类项，有
$$
K_n(t)=\frac1{2n}\left|\sum_{j=0}^{n-1}e^{ijt}\right|^2
=\frac1{2n}\left(\frac{\sin(nt/2)}{\sin(t/2)}\right)^2 .
$$
在零点以极限取 $K_n(0)=n/2$。这个核非负且 $\int_{-\pi}^{\pi}K_n(t)\,dt=\pi$，因为每个 $D_k$ 的积分均为 $\pi$。固定 $0<\delta<\pi$ 后，
$$
\sup_{\delta\le |t|\le\pi}K_n(t)\le\frac1{2n\sin^2(\delta/2)}.
$$
核总质量固定，离开零点后的质量趋于零；非负性又让近处的误差由其最大值直接控制。

## Fejér 定理与一致逼近

**Fejér 定理（17.3.1、17.3.2）**　设 $f\in\mathrm R[-\pi,\pi]$ 并作周期延拓。若 $f$ 在 $x$ 有有限左右极限，则 $\sigma_n(x)\to s=[f(x+0)+f(x-0)]/2$。若 $f$ 在整个周期上连续，则 $\sigma_n$ 一致趋于 $f$。

**证明**　令 $\varphi_x(t)=f(x+t)+f(x-t)-2s$。将上一讲的核换为 $K_n$，得
$$
\sigma_n(x)-s=\frac1\pi\int_0^\pi \varphi_x(t)K_n(t)\,dt .
$$
给定 $\varepsilon>0$，取 $\delta$ 使 $0<t<\delta$ 时 $|\varphi_x(t)|<2\varepsilon$。由 $\int_0^\pi K_n=\pi/2$，近段误差至多为 $\varepsilon$。远段误差至多为 $\int_\delta^\pi|\varphi_x(t)|\,dt/[2\pi n\sin^2(\delta/2)]$，固定 $\delta$ 后趋于零。若 $f$ 连续且周期，取 $s=f(x)$，由一致连续性可对所有 $x$ 选同一 $\delta$；远段积分又至多为 $4\pi\sup|f|$，便得到一致收敛。证毕。

由此，每个连续周期函数都可用三角多项式一致逼近。若两个连续周期函数的 Fourier 系数相同，其差的一切平均和恒为零，故两函数处处相同。若只知 $f$ 在一点有左右极限而普通部分和恰好收敛，则该普通和必等于两侧均值，因为 Cesàro 平均保留普通极限。

## 从三角多项式回到代数多项式

给定 $f\in C[-1,1]$，令 $g(t)=f(\cos t)$。它是连续的偶周期函数，故 $\sigma_n(g;t)$ 只含 $\cos kt$。由 $\cos((k+1)t)=2\cos t\cos kt-\cos((k-1)t)$，归纳得 $\cos kt=T_k(\cos t)$，其中 $T_k$ 为 $k$ 次多项式。因此 $\sigma_n(g;t)=P_n(\cos t)$；当 $t$ 从 $0$ 走到 $\pi$，$\cos t$ 取遍 $[-1,1]$，于是
$$
\sup_{[-1,1]}|P_n-f|=\sup_{0\le t\le\pi}|\sigma_n(g;t)-g(t)|\longrightarrow0.
$$
这给出与 Bernstein 构造不同的 Weierstrass 定理证明。若题目只给出 $[0,\pi]$ 上的连续函数，先作偶延拓，就能直接得到余弦多项式逼近。[练习 17.3 第 2、4 题（余弦逼近与代数多项式逼近）](/files/problems/科大数分习题-v2%282%29.pdf#page=42)

[上一讲　Fourier 系数、Dirichlet 核与逐点收敛](/notes/b69cd0f462662b0c6fcca804/) · [专题Ⅳ目录](/math/ustc-analysis/#series) · [下一讲　平方平均逼近、Bessel 不等式与 Parseval 等式](/notes/f774857d9c30a625c19c6cd3/)
