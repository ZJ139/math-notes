---
title: "含参变量积分与一致收敛"
description: "从同一尾界建立积分号下取极限、求导与积分的条件，并计算 Dirichlet 积分。"
subject: "数学分析"
category: "ustc-analysis/integration"
tags: ["科大数分", "含参变量积分", "一致收敛", "积分号下求导"]
created_at: "2026-11-16"
updated_at: "2026-11-16"
---

下册 §18.1—§18.3。含参积分的困难在于两个极限可能相互影响。有限矩形上可以用一致连续性控制差商；区间无穷时，还要给出与参数无关的尾积分估计。

[有限区间上的三种运算](#有限区间上的三种运算) · [一致收敛是同一个尾界](#一致收敛是同一个尾界) · [先截断再交换运算](#先截断再交换运算) · [用阻尼参数计算振荡积分](#用阻尼参数计算振荡积分)

## 有限区间上的三种运算

设 $f$ 在 $[a,b]\times[\alpha,\beta]$ 连续，$\Phi(u)=\int_a^b f(x,u)\,dx$。由紧集上的一致连续性，
$$
|\Phi(v)-\Phi(u)|\le(b-a)\max_{a\le x\le b}|f(x,v)-f(x,u)|\longrightarrow0\quad(v\to u).
$$
再对参数积分，连续性保证两种次序相同，从而 $\int_\alpha^\beta\Phi(u)\,du=\int_a^b(\int_\alpha^\beta f(x,u)\,du)\,dx$（定理 18.1.1、18.1.3）。

**积分号下求导（定理 18.1.2）**　若 $f_u$ 在同一矩形上也连续，则 $\Phi'(u)=\int_a^b f_u(x,u)\,dx$。事实上，对每个 $x$ 用一元中值定理，差商与 $f_u(x,u)$ 的差由 $f_u$ 在参数距离 $|h|$ 内的最大振幅控制。此上界与 $x$ 无关且趋于零，故可对差商取积分后令 $h\to0$。

若上下限 $p(u),q(u)$ 可微且落在 $[a,b]$ 内，对 $H(t,u)=\int_a^t f(x,u)\,dx$ 用链式法则，得到
$$
\begin{aligned}
\frac d{du}\int_{p(u)}^{q(u)} f(x,u)\,dx
={}&f(q(u),u)q'(u)-f(p(u),u)p'(u)\\
&+\int_{p(u)}^{q(u)} f_u(x,u)\,dx .
\end{aligned}
$$
[练习 18.1 第 2、3 题（变限与参数求导）](/files/problems/科大数分习题-v2%282%29.pdf#page=45)

## 一致收敛是同一个尾界

设对每个 $u\in E$，$f(\,\cdot\,,u)$ 局部可积。积分 $\int_a^\infty f(x,u)\,dx$ 关于 $u\in E$ 一致收敛，是指存在函数 $\Phi$ 使 $\sup_{u\in E}|\int_a^A f(x,u)\,dx-\Phi(u)|\to0$。等价的 Cauchy 条件是：给定 $\varepsilon>0$，一个 $A$ 同时保证所有 $u\in E$ 和 $C>B>A$ 满足 $|\int_B^C f(x,u)\,dx|<\varepsilon$。

绝对值被可积函数 $g(x)$ 控制时，$\int_B^\infty g$ 就是统一尾界（Weierstrass 判别法）。若振荡因子的截断积分对参数和上限一致有界，而乘子对 $x$ 单调且一致趋零，上一讲的第二积分平均值定理给出一致 Dirichlet 判别法。

**练习 18.2 第 2 题**　对 $\int_0^\infty\sin(ux)\,dx/x$，原点按连续性补值。若 $|u|\ge\delta>0$，则 $|\int_B^t\sin(ux)\,dx|\le2/\delta$，尾段绝对值至多 $2/(\delta B)$。若参数区间包含 $0$ 且含正值，对任意大 $B$ 取 $u=1/B$，便有
$$
\int_B^{2B}\frac{\sin(ux)}x\,dx=\int_1^2\frac{\sin t}{t}\,dt>0 .
$$
同一个截断点无法同时控制这些参数；只含负值和零的非退化区间可取 $u=-1/B$。这里每个固定参数的积分仍然收敛。[练习 18.2 第 1、2 题](/files/problems/科大数分习题-v2%282%29.pdf#page=46)

## 先截断再交换运算

若 $f$ 在每个 $[a,A]\times[\alpha,\beta]$ 上连续，且其无穷积分关于参数一致收敛，则 $\Phi$ 连续，并可在参数的有限区间上交换积分次序（定理 18.3.1、18.3.3）。因为 $\Phi_A=\int_a^A f(x,u)\,dx$ 连续，且 $\Phi_A\to\Phi$ 一致；积分误差至多为 $(\beta-\alpha)\sup|\Phi_A-\Phi|$。

非负情形另有 Dini 定理（定理 18.3.2）：若有限截断积分连续、$f\ge0$，且逐点极限 $\Phi$ 在紧参数区间上连续，则收敛一致。事实上，$\{u:\Phi(u)-\Phi_n(u)<\varepsilon\}$ 是递增的开覆盖（取整数 $n>a$）；有限子覆盖中的最大下标就控制全区间，单调性再覆盖一切更大的截断点。

**参数求导**　设 $f,f_u$ 在每个截断矩形连续，$\int_a^\infty f_u(x,u)\,dx$ 在 $[\alpha,\beta]$ 一致收敛，且原积分至少在一点 $u_0$ 收敛。则原积分一致收敛，并有 $\Phi'=\int_a^\infty f_u\,dx$。这是定理 18.3.6 配合问题 18.3 第 6 题的形式。

**证明**　写 $G_A(u)=\int_a^A f_u(x,u)\,dx$。有限区间上的定理给出 $\Phi_A(u)=\Phi_A(u_0)+\int_{u_0}^u G_A(v)\,dv$。设 $G_A\to G$ 一致。右边积分的误差至多为 $(\beta-\alpha)\sup|G_A-G|$，基点项也有极限。故 $\Phi(u)=\Phi(u_0)+\int_{u_0}^u G(v)\,dv$，且 $G$ 连续，求导即得。证毕。[练习 18.3 第 2 题（对参数反复求导）](/files/problems/科大数分习题-v2%282%29.pdf#page=47) · [问题 18.3 第 6 题（把原积分条件减至一点）](/files/problems/科大数分习题-v2%282%29.pdf#page=48)

## 用阻尼参数计算振荡积分

求 $I=\int_0^\infty\sin x\,dx/x$。令 $F(u)=\int_0^\infty e^{-ux}\sin x\,dx/x$，先取 $u>0$。对任意 $u\ge\delta>0$，求导后的绝对值被 $e^{-\delta x}$ 控制。由上一结论及两次分部积分，
$$
F'(u)=-\int_0^\infty e^{-ux}\sin x\,dx=-\frac1{1+u^2}.
$$
又 $|F(u)|\le\int_0^\infty e^{-ux}\,dx=1/u$，故 $F(u)=\int_u^\infty dt/(1+t^2)=\pi/2-\arctan u$。

最后须验证去掉阻尼。对所有 $u\ge0$，$e^{-ux}/x$ 在 $x>0$ 递减，且 $|\int_B^t\sin x\,dx|\le2$；第二平均值定理给出统一尾界 $2/B$。在 $[0,B]$ 上补全 $x=0$ 的值后，被积函数关于 $u$ 连续，故 $F(u)\to I$（$u\downarrow0$）。于是 $I=\pi/2$。求导时只需在正参数的紧区间验证条件，回到端点 $u=0$ 则靠另一条覆盖端点的尾界。

[上一讲　反常积分的截断与收敛](/notes/083af27c0289a3ff018b6f76/) · [专题Ⅲ目录](/math/ustc-analysis/#integration) · [下一讲　Γ 函数、B 函数与积分常数](/notes/2011f33484fcaadd7f278294/)
