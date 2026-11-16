---
title: "多元微分、链式法则与沿线段的 Taylor 公式"
description: "用统一的线性主部区分方向导数与可微，用线段限制把一元中值和 Taylor 定理移入欧氏空间。"
subject: "数学分析"
category: "ustc-analysis/differentiation"
tags: ["科大数分", "多元微分", "Jacobi 矩阵", "多元 Taylor 公式"]
created_at: "2026-11-16"
updated_at: "2026-11-16"
---

上册 §9.1—§9.5、§9.9—§9.10。以下按教材把点与增量写成列向量，$Jf$ 表示 Jacobi 矩阵。实值函数的 $Jf$ 是行向量，因而 $Jf(x)h$ 是一个数。

[可微与方向导数](#可微与方向导数) · [偏导判据](#沿坐标折线分解增量) · [复合与切平面](#复合与切平面) · [中值估计](#沿线段取中值) · [高阶近似](#高阶近似)

## 可微与方向导数

**定义 9.1.1、9.2.1、9.3.1**　设 $D\subset\mathbf R^n$ 为开集，$x_0\in D$。对实值函数和单位向量 $u$，方向导数为双侧极限
$$
\frac{\partial f}{\partial u}(x_0)=\lim_{t\to0}\frac{f(x_0+tu)-f(x_0)}{t},
$$
取 $u=e_j$ 得偏导数 $D_j f(x_0)$。对映射 $f:D\to\mathbf R^m$，若有 $m\times n$ 矩阵 $A$ 使
$$
f(x_0+h)-f(x_0)=Ah+r(h),\qquad
\lim_{h\to0}\frac{\|r(h)\|}{\|h\|}=0,
$$
就称 $f$ 在 $x_0$ 可微，其微分是线性映射 $h\mapsto Ah$。取 $h=te_j$ 后逐分量除以 $t$，便知 $A$ 的第 $j$ 列只能是各分量的第 $j$ 个偏导数组成的列，故 $A=Jf(x_0)$ 且唯一。于是可微蕴含连续；对实值函数，沿任何单位方向均有 $\partial f/\partial u=Jf(x_0)u$（定理 9.2.4）。

**反例。** 令 $f(0,0)=0$，其余处令 $f(x,y)=x^2y/(x^4+y^2)$。沿 $u=(a,b)$，若 $b\ne0$，则 $f(ta,tb)/t=a^2b/(t^2a^4+b^2)\to a^2/b$；若 $b=0$，则商恒为零。所有方向导数都存在，但沿抛物线 $y=x^2$ 的函数值恒为 $1/2$（$x\ne0$），在原点连连续性都不成立。逐条直线取极限允许误差依赖方向，可微要求对所有小增量作同一估计。[练习 9.1 第 2、3 题（方向与双侧极限）](/files/problems/科大数分习题-v1.pdf#page=60) · [练习 9.2 第 1 题（原反例）](/files/problems/科大数分习题-v1.pdf#page=61)

## 沿坐标折线分解增量

**偏导连续的充分条件（§9.2，映射情形见定理 9.3.1）**　若各一阶偏导数在 $x_0$ 的一个邻域存在，且均在 $x_0$ 连续，则 $f$ 在 $x_0$ 可微。

**证明**　先设 $m=1$。在邻域所含的一个小球内，从 $x_0$ 依次改变前 $1,2,\ldots,n$ 个坐标直到 $x_0+h$。将相邻点的增量相加，在第 $j$ 段用一元中值定理，得到
$$
f(x_0+h)-f(x_0)-Jf(x_0)h
=\sum_{j=1}^n\bigl(D_jf(\xi_j)-D_jf(x_0)\bigr)h_j.
$$
若 $h_j=0$，该项直接取零。其余各 $\xi_j$ 离 $x_0$ 至多 $\|h\|$。有限个偏导在 $x_0$ 连续，故括号的最大绝对值趋于零，而 $\sum|h_j|\le\sqrt n\|h\|$。所以右端为 $o(\|h\|)$。一般映射逐分量应用即可。证毕。

例如 $f(x,y)=(x^2+y^2)\sin(1/(x^2+y^2))$ 在原点补零，因 $|f(h)|\le\|h\|^2$，原点微分为零；沿 $y=0$ 求 $x$ 偏导时却出现 $-2\cos(1/x^2)/x$，该偏导在原点不连续。[练习 9.2 第 6 题（判据的逆命题）](/files/problems/科大数分习题-v1.pdf#page=61) · [练习 9.3 第 1、2 题（映射的 Jacobi 矩阵）](/files/problems/科大数分习题-v1.pdf#page=62)

## 复合与切平面

**链式法则（定理 9.4.1）**　若 $g$ 在 $x_0$ 可微，$f$ 在 $y_0=g(x_0)$ 可微，且复合在邻域有定义，则
$$
J(f\circ g)(x_0)=Jf(y_0)Jg(x_0).
$$
令 $B=Jg(x_0),\, A=Jf(y_0)$，则内层增量 $k=Bh+o(\|h\|)=O(\|h\|)$。代入外层得 $Ak+o(\|k\|)=ABh+o(\|h\|)$；当 $k=0$ 时外层余项直接为零。乘法次序由增量先经过 $B$、再经过 $A$ 决定。[练习 9.4 第 6、7 题（沿曲线与坐标变换求导）](/files/problems/科大数分习题-v1.pdf#page=63)

**切线与切平面（§9.5）**　若曲线 $r$ 在 $t_0$ 可微且 $r'(t_0)\ne0$，则切线为 $r(t_0)+s r'(t_0)$，$s\in\mathbf R$。对图面 $z=f(x,y)$，设 $z_0=f(x_0,y_0)$，可微给出切平面
$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).
$$
一般的正则水平面 $F(x,y,z)=0$ 上，任意曲线 $\gamma$ 的速度均满足 $JF(\gamma)\gamma'=0$。若 $F\in C^1$ 且 $JF\ne0$，下一讲的隐函数定理保证可用两个坐标作局部参数，故这个核恰为全部切方向。[练习 9.5 第 1、6 题（切线与恒长向量）](/files/problems/科大数分习题-v1.pdf#page=64)

## 沿线段取中值

**定理 9.10.1、9.10.6**　设 $a,b$ 在凸区域 $D$ 内，$a\ne b$。若 $f$ 为可微实值函数，对 $\varphi(t)=f(a+t(b-a))$ 用一元中值定理，则某个 $\xi=a+\theta(b-a)$、$0<\theta<1$ 满足
$$
f(b)-f(a)=Jf(\xi)(b-a).
$$
对向量值 $f$，设 $v=f(b)-f(a)\ne0$，对实值函数 $t\mapsto\langle v/\|v\|,f(a+t(b-a))\rangle$ 用同一定理和 Cauchy–Schwarz 不等式，可得
$$
\|f(b)-f(a)\|\le\|Jf(\xi)(b-a)\|\le\|Jf(\xi)\|\,\|b-a\|.
$$
这里可取欧氏范数诱导的算子范数；$v=0$ 时不等式直接成立。一般没有向量中值等式。例如 $r(t)=(t^2,t^3)$ 在 $[0,1]$ 的端点差为 $(1,1)$；第一分量要求 $\xi=1/2$，第二分量在该处的导数却为 $3/4$。[问题 9.10 第 1 题（选取方向使沿线导数为零）](/files/problems/科大数分习题-v1.pdf#page=70)

## 高阶近似

**混合偏导的次序（定理 9.9.1）**　在 $(x_0,y_0)$ 邻域内 $f_x,f_y$ 和 $\partial_y f_x$ 存在，且 $\partial_y f_x$ 在该点连续，则 $\partial_x f_y$ 在该点存在并与 $\partial_y f_x$ 相等。取矩形增量
$$
S=f(x_0+h,y_0+k)-f(x_0+h,y_0)-f(x_0,y_0+k)+f(x_0,y_0).
$$
先按 $x$ 再按 $y$ 用中值定理，$S/(hk)$ 等于小矩形内部一点的 $\partial_y f_x$，故双重极限为 $\partial_y f_x(x_0,y_0)$。固定 $h\ne0$ 先令 $k\to0$，得到 $[f_y(x_0+h,y_0)-f_y(x_0,y_0)]/h$；双重极限的同一 $\varepsilon$ 估计对所有充分小的 $h,k$ 成立，故再令 $h\to0$ 仍得该值。[问题 9.9 第 1 题（比较另一组充分条件）](/files/problems/科大数分习题-v1.pdf#page=69)

**多元 Taylor 公式（定理 9.10.3、9.10.4）**　设 $f\in C^{m+1}(D)$，$a,a+h$ 位于凸区域 $D$。对多重指标 $\alpha$，记 $|\alpha|=\sum\alpha_i$，$\alpha!=\prod\alpha_i!$，$h^\alpha=\prod h_i^{\alpha_i}$，$D^\alpha$ 为相应偏导。则对某个 $0<\theta<1$，
$$
f(a+h)=\sum_{|\alpha|\le m}\frac{D^\alpha f(a)}{\alpha!}h^\alpha+
\sum_{|\alpha|=m+1}\frac{D^\alpha f(a+\theta h)}{\alpha!}h^\alpha.
$$
**证明**　把一元 Taylor 公式用于 $\varphi(t)=f(a+th)$ 的 $t=0,1$。链式法则给出 $\varphi^{(k)}(t)=(\sum h_iD_i)^k f(a+th)$；连续混合偏导可交换，按多项式定理展开，每组 $\alpha$ 出现 $k!/\alpha!$ 次。代回即得上式；所有最高阶项共用同一个 $\theta$。若仅有 $f\in C^m(D)$、$m\ge1$，在 $m-1$ 阶公式的余项中用 $D^\alpha f(a+\theta h)=D^\alpha f(a)+o(1)$，因 $|h^\alpha|\le\|h\|^m$ 且项数有限，得到 $m$ 阶多项式加 $o(\|h\|^m)$。证毕。

特别地，$m=2$ 时有 $f(a+h)=f(a)+Jf(a)h+\tfrac12h^{\mathrm T}Hf(a)h+o(\|h\|^2)$，其中 $Hf$ 是 Hesse 矩阵。这一项将决定驻点附近增量的符号。[练习 9.10 第 1、2 题（多项式与二次型）](/files/problems/科大数分习题-v1.pdf#page=69) · [练习 9.10 第 4 题（二阶近似）](/files/problems/科大数分习题-v1.pdf#page=70)

[上一讲　一元 Taylor 公式](/notes/6e8bdb5c1137d39db8f80e90/) · [专题Ⅱ目录](/math/ustc-analysis/#differentiation) · [下一讲　隐函数与逆映射](/notes/da0c0aefe5471e24f2c31a2a/)
