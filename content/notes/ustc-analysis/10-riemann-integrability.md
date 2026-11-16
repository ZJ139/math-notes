---
title: "从积分和到可积性判别"
description: "用振幅控制全部值点和，从 Darboux 判据推导 Lebesgue 可积性定理。"
subject: "数学分析"
category: "ustc-analysis/integration"
tags: ["科大数分", "Riemann 积分", "振幅", "可积性"]
created_at: "2026-11-16"
updated_at: "2026-11-16"
---

上册 §6.1、§6.2、§6.5、§6.6。用小矩形的面积求和时，每个矩形的高度都可以另选。要使积分有确定的值，必须能同时控制所有这些选择造成的误差。

[积分和与上下和](#积分和与上下和) · [振幅判据](#振幅判据) · [间断点的大小](#间断点的大小) · [从保序到积分中值](#从保序到积分中值)

## 积分和与上下和

**定义 6.1.1**　设 $a<b$，分割 $\pi$ 的分点为 $a=x_0<x_1<\cdots<x_n=b$，记 $I_i=[x_{i-1},x_i]$，$\Delta x_i=x_i-x_{i-1}$，$\|\pi\|=\max_i\Delta x_i$。在 $I_i$ 任取值点 $\xi_i$。若对每个 $\varepsilon>0$ 都有 $\delta>0$，使 $\|\pi\|<\delta$ 时一切值点和 $\sum_i f(\xi_i)\Delta x_i$ 都与同一个数 $I$ 相差不到 $\varepsilon$，称 $f$ 可积，记 $I=\int_a^b f(x)\,dx$。

可积函数必有界。固定一个足够细的分割；在每个小区间单独变动一个值点，其余值点固定，两次和的差始终有界。小区间长度为正，故函数在每个小区间有界，再取有限个界的最大值即可。[练习 6.1 第 2、5 题（从定义与和式求积分）](/files/problems/科大数分习题-v1.pdf#page=42)

对有界函数，记 $M_i=\sup_{I_i}f$、$m_i=\inf_{I_i}f$、$\omega_i=M_i-m_i$。上下和 $\overline S(f,\pi)=\sum M_i\Delta x_i$、$\underline S(f,\pi)=\sum m_i\Delta x_i$ 夹住全部积分和。加细分割使上和不增、下和不减。任意两分割都能取公共加细，故任一下和不超过任一上和。

## 振幅判据

**Darboux 判据（定理 6.5.2、6.5.3）**　有界函数可积，当且仅当对每个 $\varepsilon>0$ 都存在一个分割，使
$$
\overline S(f,\pi)-\underline S(f,\pi)
=\sum_i\omega_i\Delta x_i<\varepsilon .
$$
此时上积分 $\inf_\pi\overline S(f,\pi)$ 与下积分 $\sup_\pi\underline S(f,\pi)$ 相等，其共同值就是积分。

**证明**　可积时，取足够细的分割，在每个区间分别取逼近上、下确界的值点，两组和都靠近 $I$。令逼近误差趋于零，即可使上下和之差任意小。反过来，给定一个上下和之差小于 $\varepsilon$ 的分割 $\pi_0$。设它有 $k$ 个内分点，$|f|\le M$。把这些分点插入任意分割 $\pi$，至多改变 $k$ 个原小区间，受影响的总长度至多 $k\|\pi\|$。因而
$$
\sum_{I_i\in\pi}\omega_i\Delta x_i
\le \overline S(f,\pi_0)-\underline S(f,\pi_0)+2Mk\|\pi\|.
$$
又由公共加细，上、下积分之差不超过 $\varepsilon$；由 $\varepsilon$ 任意，两者相等。一切值点和与这个共同值都落在同一对上下和之间。令 $\|\pi\|\to0$，再令 $\varepsilon\to0$ 即得。证毕。

**推论**　闭区间上连续的函数一致连续，充分细分时所有 $\omega_i$ 同时小。若 $f$ 单调递增，则 $\sum\omega_i\Delta x_i\le\|\pi\|\sum(f(x_i)-f(x_{i-1}))=\|\pi\|(f(b)-f(a))$。两类函数均可积。[练习 6.5 第 1、2 题（阶梯函数与连续函数的上下逼近）](/files/problems/科大数分习题-v1.pdf#page=47)

## 间断点的大小

**Lebesgue 判据（定理 6.6.1）**　有界函数 $f$ 在 $[a,b]$ 上 Riemann 可积，当且仅当间断点集 $D(f)$ 是零测集。零测指对任意 $\varepsilon>0$ 可用至多可数个开区间覆盖，总长度小于 $\varepsilon$。

**证明**　令 $\omega(x)$ 为 $f$ 在 $x$ 的相对邻域内振幅随邻域缩小的极限。$\omega(x)=0$ 等价于 $f$ 在 $x$ 连续。若 $\omega(x)<\eta$，附近各点都落在一个振幅小于 $\eta$ 的邻域内，故 $E_\eta=\{x:\omega(x)\ge\eta\}$ 闭，因而紧。又 $D(f)=\bigcup_{n\ge1}E_{1/n}$。

若 $f$ 可积，取振幅和小于 $\eta\varepsilon$ 的分割。除有限个分点外，$E_\eta$ 只落在振幅至少为 $\eta$ 的小区间中；这些区间的总长小于 $\varepsilon$。略微扩大区间，并用任意短的区间盖住分点，便知 $E_\eta$ 零测。对 $E_{1/n}$ 分配几何递减的覆盖长度，可知其可数并也零测。

反之，若 $D(f)$ 零测，用总长小于 $\delta$ 的开区间覆盖 $E_\eta$，由紧性取有限子覆盖，其并记作 $G$。补集 $K=[a,b]\setminus G$ 上每一点都有振幅小于 $\eta$ 的邻域。这些邻域与 $G$ 构成闭区间的开覆盖，取网格小于该覆盖的 Lebesgue 数，使每个小区间都落在某个覆盖成员中。落在 $G$ 内的小区间总长至多 $\delta$，其余小区间的振幅小于 $\eta$。振幅和至多 $2M\delta+\eta(b-a)$，令两参数充分小即可应用上一判据。证毕。

有理点是可数集，但其示性函数 $\mathbf1_{\mathbf Q}$ 在每一点都不连续，每个非退化区间上的振幅均为 $1$。判据考察的是间断点集；仅知道函数在哪些点取非零值不足以判定可积性。[练习 6.6 第 1 题（最大值与最小值）](/files/problems/科大数分习题-v1.pdf#page=47) · [问题 6.6 第 2 题（非负可积函数的零积分）](/files/problems/科大数分习题-v1.pdf#page=48)

## 从保序到积分中值

由值点和得到线性、保序与区间可加性。由间断点判据，若 $f,g$ 可积，则 $fg$、$|f|$ 也可积，因为它们的间断点都包含在 $D(f)\cup D(g)$ 中。所以 $|\int_a^b f|\le\int_a^b|f|$。特别地，若连续函数 $h\ge0$ 在一点严格为正，连续性给出一段正长度的区间，其上 $h$ 有正下界，于是 $\int_a^b h>0$。

若 $f$ 连续、$g$ 可积且非负，令 $m=\min f$、$M=\max f$。对 $mg\le fg\le Mg$ 积分；当 $\int_a^b g>0$ 时，加权平均落入 $[m,M]$，由介值性得
$$
\int_a^b f(x)g(x)\,dx=f(\xi)\int_a^b g(x)\,dx,\qquad \xi\in[a,b].
$$
当权重积分为零，两边同为零。取 $g=1$ 即得积分平均值定理。练习 6.2 第 2 题可反用上述正性：若连续的 $f$ 与一切连续 $g$ 的乘积积分均为零，取 $g=f$ 即得 $f\equiv0$。[练习 6.2 第 1、2 题](/files/problems/科大数分习题-v1.pdf#page=43)

[专题Ⅲ目录](/math/ustc-analysis/#integration) · [下一讲　原函数与微积分基本定理](/notes/a96f738e05a41474d17a87a6/)
