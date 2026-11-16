---
title: "Γ 函数、B 函数与积分常数"
description: "从端点收敛、递推与对数凸性，推导 Beta–Gamma 关系并计算半整数值。"
subject: "数学分析"
category: "ustc-analysis/integration"
tags: ["科大数分", "Γ 函数", "B 函数", "Euler 积分"]
created_at: "2026-11-16"
updated_at: "2026-11-16"
---

下册 §18.4。两个 Euler 积分分别把阶乘与区间端点的幂次连续化。递推决定相邻参数的关系，对数凸性补足不同整数之间的信息，而二维换元把两个积分联系起来。

[定义域与参数求导](#定义域与参数求导) · [从阶乘递推到唯一性](#从阶乘递推到唯一性) · [一个三角形换元分离两个参数](#一个三角形换元分离两个参数) · [倍元公式与渐近应用](#倍元公式与渐近应用)

## 定义域与参数求导

对实参数定义
$$
\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt,\qquad
B(p,q)=\int_0^1 t^{p-1}(1-t)^{q-1}\,dt .
$$
前者在零端与 $t^{s-1}$ 同阶，在无穷端由指数衰减控制，故恰在 $s>0$ 收敛；后者两端分别要求 $p>0$、$q>0$。以 $s\in[\alpha,\beta]\subset(0,\infty)$ 为例，求 $k$ 次导数相当于插入 $(\log t)^k$。在 $0<t\le1$ 上，一个绝对上界为 $t^{\alpha-1}|\log t|^k$，令 $t=e^{-v}$ 即知可积；在 $t\ge1$ 上可用 $t^{\beta-1}e^{-t}(\log t)^k$ 控制。故每个紧参数区间上都可逐次求导（定理 18.4.1）。$B$ 的混合偏导数同理，只需分别在两端估计对数幂。

## 从阶乘递推到唯一性

由分部积分及两端 $t^s e^{-t}\to0$，得 $\Gamma(s+1)=s\Gamma(s)$，又 $\Gamma(1)=1$，故 $\Gamma(n+1)=n!$。对 $0<\lambda<1$，以指数 $1/\lambda,1/(1-\lambda)$ 作 Hölder 估计，得到
$$
\Gamma(\lambda s+(1-\lambda)t)\le\Gamma(s)^\lambda\Gamma(t)^{1-\lambda}.
$$
因为左边被积函数正是 $x^{s-1}e^{-x}$ 与 $x^{t-1}e^{-x}$ 分别取 $\lambda,1-\lambda$ 次幂后的乘积。这证明 $\log\Gamma$ 为凸函数（定理 18.4.2）。

**Bohr–Mollerup 唯一性（定理 18.4.3、18.4.4）**　若 $f(s)>0$、$f(1)=1$、$f(s+1)=sf(s)$，且 $\log f$ 凸，则 $f=\Gamma$。

**证明**　固定 $0<x\le1$，取整数 $n\ge2$。凸函数 $\log f$ 在 $[n,n+x]$ 上的割线斜率夹在 $[n-1,n]$ 与 $[n,n+1]$ 的斜率之间。递推给出后两者为 $\log(n-1)$ 和 $\log n$，故
$$
(n-1)^x(n-1)!\le f(n+x)\le n^x(n-1)! .
$$
又 $f(n+x)=x(x+1)\cdots(x+n-1)f(x)$。两界之比趋于 $1$，因而唯一确定 $f(x)$。再用递推移过整数即可确定所有正参数。$\Gamma$ 已满足三条件，故即为此函数；上界在下标移一位后只相差趋于 $1$ 的因子；对任意固定正参数，右边也满足同一递推（相邻参数的第 $n$ 项之比为 $nx/(n+x+1)$）。由此得到 Euler 极限公式
$$
\Gamma(x)=\lim_{n\to\infty}\frac{n^x n!}{x(x+1)\cdots(x+n)} .
$$
证毕。只保留递推和归一化时，给 $\Gamma$ 乘上任一在整数点取 $1$ 的正的一周期函数，仍满足这两项条件；凸性确实参与了唯一性。

## 一个三角形换元分离两个参数

**定理 18.4.6**　对 $p,q>0$，
$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)} .
$$
**证明**　将两 Gamma 积分相乘，得到第一象限上非负函数 $x^{p-1}y^{q-1}e^{-(x+y)}$ 的积分。先在有界且避开两轴的区域换元，再用非负性取穷竭极限。令 $r=x+y$、$t=x/(x+y)$，则 $x=rt,\ y=r(1-t)$，Jacobi 行列式绝对值为 $r$。因而
$$
\Gamma(p)\Gamma(q)
=\int_0^\infty r^{p+q-1}e^{-r}\,dr\int_0^1t^{p-1}(1-t)^{q-1}\,dt .
$$
穷竭极限可具体取 $1/N\le r\le N$、$1/N\le t\le1-1/N$ 的矩形及其像；它们和原坐标中的紧矩形互相穷尽，各自积分的上确界相同。证毕。

代换 $t\mapsto1-t$ 得 $B(p,q)=B(q,p)$；利用 Gamma 递推即有 $B(p+1,q)=pB(p,q)/(p+q)$。取 $t=\sin^2\theta$ 还得到
$$
B(p,q)=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,d\theta .
$$
特别地 $B(1/2,1/2)=\pi$，故 $\Gamma(1/2)=\sqrt\pi$。递推即得 $\Gamma(n+1/2)=(2n)!\sqrt\pi/(4^n n!)$。再取 $t=x^2$，得到 $\int_0^\infty e^{-x^2}\,dx=\sqrt\pi/2$。[练习 18.4 第 2、3 题（三角积分与 Gamma 积分）](/files/problems/科大数分习题-v2%282%29.pdf#page=48)

## 倍元公式与渐近应用

利用上一节的三角积分表示，将 $B(s,s)$ 中的 $\sin\theta\cos\theta$ 合并为 $\sin(2\theta)/2$，再用 $\sin u$ 在 $[0,\pi]$ 上关于 $\pi/2$ 的对称性，得 $B(s,s)=2^{1-2s}B(s,1/2)$。代入 Beta–Gamma 关系并约去 $\Gamma(s)$，得到倍元公式
$$
\Gamma(s)\Gamma(s+\tfrac12)=2^{1-2s}\sqrt\pi\,\Gamma(2s),\qquad s>0 .
$$
余元公式为 $\Gamma(s)\Gamma(1-s)=\pi/\sin(\pi s)$，其中 $0<s<1$。可由 Euler 极限公式看出其与正弦乘积的联系：分别代入 $1+s,1-s$，整理得 $\Gamma(1+s)\Gamma(1-s)=\prod_{k\ge1}(1-s^2/k^2)^{-1}$。再代入正弦的 Euler 乘积 $\sin(\pi s)/(\pi s)=\prod_{k\ge1}(1-s^2/k^2)$ 并用递推即得。

教材定理 18.4.10 将 Stirling 公式推广到实变量，$\Gamma(x+1)\sim\sqrt{2\pi x}(x/e)^x$（$x\to\infty$）。对固定实数 $a$，分别对 $\Gamma(x+a)$ 和 $\Gamma(x)$ 使用该式，由 $(1+a/x)^x\to e^a$ 得
$$
\frac{\Gamma(x+a)}{\Gamma(x)x^a}\longrightarrow1 .
$$
例如 $a>0$ 时 $B(x,a)\sim\Gamma(a)x^{-a}$。这把积分中变化的参数化成了一个可直接比较的幂次。[练习 18.4 第 5、6 题（参数极限与 Gamma 函数比值）](/files/problems/科大数分习题-v2%282%29.pdf#page=48)


这一关系还能回到重积分。记 $v_n$ 为 $n$ 维单位球的体积。固定末坐标 $t$，截面是半径 $\sqrt{1-t^2}$ 的 $(n-1)$ 维球。令 $u=t^2$ 得
$$
v_n=v_{n-1}\int_{-1}^1(1-t^2)^{(n-1)/2}\,dt
=v_{n-1} B\bigl(\tfrac12,\tfrac{n+1}2\bigr).
$$
代入 Beta–Gamma 关系，并由 $v_1=2$ 归纳，得到 $v_n=\pi^{n/2}/\Gamma(1+n/2)$。取 $n=3$ 还原熟悉的 $4\pi/3$。

[上一讲　含参变量积分与一致收敛](/notes/8521f9b63aeea2e9326beac4/) · [专题Ⅲ目录](/math/ustc-analysis/#integration) · [回到本专题首讲](/notes/136d5e33e51c3bfd0d3d4ccf/)
