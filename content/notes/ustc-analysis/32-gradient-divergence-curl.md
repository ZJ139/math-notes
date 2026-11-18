---
title: "梯度、散度、旋度与 Green 恒等式"
description: "由方向变化、局部通量和环量理解三种微分算子，推导运算法则、连续性方程及调和函数的基本性质。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "梯度", "散度", "旋度", "调和函数"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §§13.1—13.3（教材第 98—108 页）。教材记 $\operatorname{grad}f=\nabla f$、$\operatorname{div}\boldsymbol F=\nabla\cdot\boldsymbol F$、$\operatorname{rot}\boldsymbol F=\nabla\times\boldsymbol F$。本讲同时保留这两套记法。

[梯度与等值面](#梯度与等值面) · [散度的局部意义](#散度的局部意义) · [旋度的局部意义](#旋度的局部意义) · [运算法则](#运算法则) · [Green 恒等式与调和函数](#green-恒等式与调和函数)

## 梯度与等值面

对可微数量场 $f$ 和单位向量 $\boldsymbol e$，方向导数为
$$
D_{\boldsymbol e}f=\nabla f\cdot\boldsymbol e,\qquad
\nabla f=(f_x,f_y,f_z).
$$
这是全微分作用于位移 $h\boldsymbol e$ 后除以 $h$ 的极限。由 Cauchy 不等式，最大方向导数为 $\|\nabla f\|$；梯度非零时，它在 $\boldsymbol e=\nabla f/\|\nabla f\|$ 处达到。对等值面上的曲线 $\boldsymbol r(t)$，微分 $f(\boldsymbol r(t))=c$ 得 $\nabla f\cdot\boldsymbol r'=0$，故非零梯度垂直于等值面。梯度为零时，不能据此宣布存在唯一法向。

## 散度的局部意义

对 $C^1$ 向量场，定理 13.2.1 给出
$$
\operatorname{div}\boldsymbol F=P_x+Q_y+R_z
=\lim_{V\to p}\frac1{|V|}\iint_{\partial V}\boldsymbol F\cdot\boldsymbol n\,d\sigma. \qquad(1)
$$
极限中的小体 $V$ 包含 $p$，满足 Gauss 条件，且直径趋零。证明：由 Gauss，通量除以体积等于散度的体平均；它与 $\operatorname{div}\boldsymbol F(p)$ 的差不超过 $\sup_{q\in V}|\operatorname{div}\boldsymbol F(q)-\operatorname{div}\boldsymbol F(p)|$，由连续性趋零。这个估计不需要小体保持球形。

**连续性方程。** 密度 $\rho(t,p)$ 与速度场 $\boldsymbol v$ 足够光滑，若任一固定小体内的质量减少率等于向外质量通量，则
$$
\frac d{dt}\iiint_V\rho\,dV=-\iint_{\partial V}\rho\boldsymbol v\cdot\boldsymbol n\,d\sigma.
$$
把时间导数移入积分并用 Gauss，得到任一小体上 $\rho_t+\operatorname{div}(\rho\boldsymbol v)$ 的积分为零。被积函数连续，若某点非零便在某邻域同号，矛盾。因此
$$
\rho_t+\operatorname{div}(\rho\boldsymbol v)=0. \qquad(2)
$$
这是从积分守恒律到微分方程的标准推理。

## 旋度的局部意义

闭路上的积分 $\oint_\Gamma\boldsymbol F\cdot d\boldsymbol r$ 称为环量。固定单位法向 $\boldsymbol n$，在过 $p$、垂直于 $\boldsymbol n$ 的平面内取小片 $S$，正向边界记作 $\partial S$。Stokes 给出
$$
\lim_{S\to p}\frac1{|S|}\oint_{\partial S}\boldsymbol F\cdot d\boldsymbol r
=(\nabla\times\boldsymbol F)(p)\cdot\boldsymbol n. \qquad(3)
$$
证明同 (1)，用连续旋度的面平均代替体平均。取三个坐标方向，即确定向量
$\nabla\times\boldsymbol F=(R_y-Q_z,P_z-R_x,Q_x-P_y)$。旋度方向是正环量密度最大的轴向，模是其最大值。

例如刚体绕 $z$ 轴以角速度 $\omega$ 旋转，$\boldsymbol v=(-\omega y,\omega x,0)$，则 $\operatorname{div}\boldsymbol v=0$、$\operatorname{rot}\boldsymbol v=(0,0,2\omega)$。旋度的模是角速度的两倍，不能混同二者。

## 运算法则

以下函数具有所用阶数的连续偏导。逐分量应用乘积法则得到
$$
\begin{aligned}
\nabla(fg)&=f\nabla g+g\nabla f,\\
\nabla\cdot(f\boldsymbol F)&=\nabla f\cdot\boldsymbol F+f\nabla\cdot\boldsymbol F,\\
\nabla\times(f\boldsymbol F)&=\nabla f\times\boldsymbol F+f\nabla\times\boldsymbol F,\\
\nabla\cdot(\boldsymbol F\times\boldsymbol G)
&=\boldsymbol G\cdot(\nabla\times\boldsymbol F)
-\boldsymbol F\cdot(\nabla\times\boldsymbol G).
\end{aligned} \qquad(4)
$$
最后一式如对 $F_2G_3-F_3G_2$ 求 $x$ 导数并加上两项循环置换：含 $\boldsymbol F$ 导数的项组成 $\boldsymbol G\cdot\operatorname{rot}\boldsymbol F$，其余组成负的另一项，符号由此确定。

混合二阶偏导成对消去，给出
$$
\operatorname{rot}(\operatorname{grad}f)=0,
\qquad\operatorname{div}(\operatorname{rot}\boldsymbol F)=0. \qquad(5)
$$
例如第一式的第一分量是 $f_{zy}-f_{yz}$。另有
$$
\nabla\times(\nabla\times\boldsymbol F)
=\nabla(\nabla\cdot\boldsymbol F)-\Delta\boldsymbol F, \qquad(6)
$$
其中 $\Delta\boldsymbol F$ 逐分量作用。第一分量左端为 $Q_{xy}+R_{xz}-P_{yy}-P_{zz}$，恰等于右端；其余循环置换。$\nabla$ 是微分算子，含变系数时不能把它当作常向量随意运用代数恒等式。

## Green 恒等式与调和函数

设 $u,v\in C^2$ 于有界区域 $\overline\Omega$ 的邻域，边界满足 Gauss 条件。对 $u\nabla v$ 使用 (4) 与 Gauss，得第一 Green 恒等式
$$
\iiint_\Omega(u\Delta v+\nabla u\cdot\nabla v)dV
=\iint_{\partial\Omega}u\frac{\partial v}{\partial n}d\sigma. \qquad(7)
$$
交换 $u,v$ 相减，得第二 Green 恒等式
$$
\iiint_\Omega(u\Delta v-v\Delta u)dV
=\iint_{\partial\Omega}\left(u\frac{\partial v}{\partial n}
-v\frac{\partial u}{\partial n}\right)d\sigma. \qquad(8)
$$
这里 $\Delta u=u_{xx}+u_{yy}+u_{zz}$。满足 $\Delta u=0$ 的函数称调和函数。

**同边值唯一性。** 若两个 $C^2(\overline\Omega)$ 调和函数在边界相等，差记作 $w$，则 (7) 取 $u=v=w$ 给出 $\int_\Omega\|\nabla w\|^2dV=0$。连续性使 $\nabla w=0$，连通性使 $w$ 为常数，边界零值使常数为零。这是能量法；仅用 $\Delta w=0$ 不能直接推出 $\nabla w=0$，边界项必不可少。

**球面平均值。** 若 $u$ 在包含闭球 $\overline B(p,r)$ 的开集内调和，记
$M(t)=(4\pi)^{-1}\int_{S^2}u(p+t\boldsymbol\omega)d\sigma_{\boldsymbol\omega}$。对 $t>0$ 微分，并把单位球面变到半径 $t$ 的球面，得
$$
M'(t)=\frac1{4\pi t^2}\iint_{\partial B(p,t)}\frac{\partial u}{\partial n}d\sigma
=\frac1{4\pi t^2}\iiint_{B(p,t)}\Delta u\,dV=0.
$$
当 $t\downarrow0$ 时 $M(t)\to u(p)$，故 $u(p)$ 等于各同心球面上的平均值。再乘 $4\pi t^2$ 从 $0$ 积到 $r$，得到球体平均值公式。它是教材本节习题中的重要推论。

配套原题：[练习 13.1](/files/problems/科大数分习题-v2%282%29.pdf#page=16) · [练习 13.2](/files/problems/科大数分习题-v2%282%29.pdf#page=16) · [练习 13.3](/files/problems/科大数分习题-v2%282%29.pdf#page=17)。以局部积分定义理解算子，再练乘积法则、Green 恒等式与守恒律。

[上一讲　Gauss 与 Stokes：内部微分和边界积分](/notes/c7aa76ca1d5fc2f76a94ba0a/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　有势场、保守场与闭路障碍](/notes/aa28359edd41b315a32b9c51/)
