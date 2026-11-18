---
title: "正交曲线坐标中的场与 Laplace 算子"
description: "由尺度因子和定向推导梯度、散度、旋度及 Laplace 算子，给出柱坐标和球坐标的完整表达与校验。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "正交坐标", "尺度因子", "Laplace 算子"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §13.6（教材第 118—123 页）。沿用教材记号 $\boldsymbol p=\boldsymbol f(u_1,u_2,u_3)$、尺度因子 $h_i$ 和单位基向量 $\boldsymbol e_i$。本讲在正则坐标片内工作，求导公式取所需的 $C^2$ 正则性。

[尺度因子与分量](#尺度因子与分量) · [梯度与三个引理](#梯度与三个引理) · [散度与旋度](#散度与旋度) · [Laplace 算子](#laplace-算子) · [柱坐标](#柱坐标) · [球坐标与径向检验](#球坐标与径向检验)

## 尺度因子与分量

设坐标映射单射，三个 $\boldsymbol f_{u_i}$ 两两正交，且 $\det D\boldsymbol f>0$。令
$$
h_i=\|\boldsymbol f_{u_i}\|>0,\qquad
\boldsymbol e_i=\frac{\boldsymbol f_{u_i}}{h_i},\qquad H=h_1h_2h_3.
$$
于是 $\boldsymbol e_1,\boldsymbol e_2,\boldsymbol e_3$ 构成随点变化的正交右手标架，
$$
d\boldsymbol p=\sum_i h_i\boldsymbol e_i\,du_i,
\qquad ds^2=\sum_i h_i^2du_i^2,
\qquad dV=H\,du_1du_2du_3.
$$
写 $\boldsymbol F=\sum_iF_i\boldsymbol e_i$ 时，$F_i$ 是单位基下的分量，而不是相对于 $\boldsymbol f_{u_i}$ 的系数。三种积分中出现的尺度分别为长度 $h_i$、面积 $h_jh_k$ 和体积 $H$。

## 梯度与三个引理

把 $d\Phi=\nabla\Phi\cdot d\boldsymbol p=\sum_i\Phi_{u_i}du_i$ 的系数比较，得
$$
\nabla\Phi=\sum_{i=1}^3\frac1{h_i}\frac{\partial\Phi}{\partial u_i}\boldsymbol e_i. \qquad(1)
$$
教材引理 13.6.1 的三组关系是
$$
\nabla u_i=\frac{\boldsymbol e_i}{h_i},\qquad
\nabla\times\frac{\boldsymbol e_i}{h_i}=0,\qquad
\nabla\cdot\frac{\boldsymbol e_i}{h_jh_k}=0, \qquad(2)
$$
其中 $(i,j,k)$ 循环排列。第一式令 $\Phi=u_i$ 即得；第二式是梯度的旋度为零；第三式利用右手性写成
$$
\frac{\boldsymbol e_i}{h_jh_k}=\nabla u_j\times\nabla u_k,
$$
再用 $\operatorname{div}(\boldsymbol A\times\boldsymbol B)=\boldsymbol B\cdot\operatorname{rot}\boldsymbol A-\boldsymbol A\cdot\operatorname{rot}\boldsymbol B$ 即为零。这样把变动基向量的导数隐含在恒等式中，避免错误地把它们视作常向量。

## 散度与旋度

将 $F_i\boldsymbol e_i$ 写成 $(F_ih_jh_k)\boldsymbol e_i/(h_jh_k)$，用乘积法则、(1)、(2)，得
$$
\operatorname{div}(F_i\boldsymbol e_i)
=\frac1H\frac{\partial}{\partial u_i}(F_ih_jh_k).
$$
所以
$$
\operatorname{div}\boldsymbol F
=\frac1H\left[
\frac{\partial(h_2h_3F_1)}{\partial u_1}
+\frac{\partial(h_3h_1F_2)}{\partial u_2}
+\frac{\partial(h_1h_2F_3)}{\partial u_3}\right]. \qquad(3)
$$
它也可理解为坐标小体六个面的净通量除以体积：每面面积因子是相应的 $h_jh_k$。

同理写 $F_i\boldsymbol e_i=(h_iF_i)\boldsymbol e_i/h_i$，得 $\operatorname{rot}(F_i\boldsymbol e_i)=\nabla(h_iF_i)\times\boldsymbol e_i/h_i$。三项相加，得到
$$
\begin{aligned}
\operatorname{rot}\boldsymbol F
={}&\frac{\partial_{u_2}(h_3F_3)-\partial_{u_3}(h_2F_2)}{h_2h_3}\boldsymbol e_1\\
&+\frac{\partial_{u_3}(h_1F_1)-\partial_{u_1}(h_3F_3)}{h_3h_1}\boldsymbol e_2\\
&+\frac{\partial_{u_1}(h_2F_2)-\partial_{u_2}(h_1F_1)}{h_1h_2}\boldsymbol e_3.
\end{aligned} \qquad(4)
$$
教材以形式行列式记为
$$
\operatorname{rot}\boldsymbol F=
\frac1H\begin{vmatrix}
h_1\boldsymbol e_1&h_2\boldsymbol e_2&h_3\boldsymbol e_3\\
\partial_{u_1}&\partial_{u_2}&\partial_{u_3}\\
h_1F_1&h_2F_2&h_3F_3
\end{vmatrix}.
$$
该记号按 (4) 展开：第二行微分只作用于第三行的系数，不能再对第一行基向量求导，也不能当作一般数值行列式任意变形。

## Laplace 算子

把 (1) 的分量 $F_i=\Phi_{u_i}/h_i$ 代入 (3)，即得
$$
\Delta\Phi=\operatorname{div}\operatorname{grad}\Phi
=\frac1H\sum_{i=1}^3\frac{\partial}{\partial u_i}
\left(\frac{H}{h_i^2}\frac{\partial\Phi}{\partial u_i}\right). \qquad(5)
$$
直角坐标 $h_i=1$ 时还原为三项二阶偏导之和。平面极坐标 $x=r\cos\theta,y=r\sin\theta$ 的尺度为 $1,r$，对应二维公式给出
$\Delta\Phi=r^{-1}(r\Phi_r)_r+r^{-2}\Phi_{\theta\theta}$。

## 柱坐标

取 $(u_1,u_2,u_3)=(r,\theta,z)$，$x=r\cos\theta,y=r\sin\theta$，在 $r>0$ 的单一角度坐标片内，尺度为 $(1,r,1)$。单位基是 $\boldsymbol e_r=(\cos\theta,\sin\theta,0)$、$\boldsymbol e_\theta=(-\sin\theta,\cos\theta,0)$、$\boldsymbol e_z=(0,0,1)$。
$$
\begin{aligned}
\nabla\Phi&=\Phi_r\boldsymbol e_r+\frac{\Phi_\theta}{r}\boldsymbol e_\theta+\Phi_z\boldsymbol e_z,\\
\operatorname{div}\boldsymbol F
&=\frac1r\partial_r(rF_r)+\frac1r\partial_\theta F_\theta+\partial_zF_z,\\
\operatorname{rot}\boldsymbol F
&=\left(\frac1r\partial_\theta F_z-\partial_zF_\theta\right)\boldsymbol e_r
+(\partial_zF_r-\partial_rF_z)\boldsymbol e_\theta\\
&\quad+\frac{\partial_r(rF_\theta)-\partial_\theta F_r}{r}\boldsymbol e_z,\\
\Delta\Phi&=\frac1r\partial_r(r\Phi_r)+\frac1{r^2}\Phi_{\theta\theta}+\Phi_{zz}.
\end{aligned}
$$
例如 $\boldsymbol F=r\boldsymbol e_r=(x,y,0)$ 的散度为 $2$；若误用 $\partial_rF_r$，便错得 $1$。连续性方程因此成为
$$
\rho_t+\frac1r\partial_r(r\rho v_r)
+\frac1r\partial_\theta(\rho v_\theta)+\partial_z(\rho v_z)=0.
$$
这也给出教材练习 13.6 的推导途径。

## 球坐标与径向检验

按教材约定
$$
x=r\sin\theta\cos\varphi,\quad
y=r\sin\theta\sin\varphi,\quad z=r\cos\theta.
$$
$\theta$ 是从正 $z$ 轴量起的极角，$\varphi$ 是方位角；取 $r>0$、$0<\theta<\pi$ 和一个不跨接缝的方位角区间。尺度为 $(1,r,r\sin\theta)$，且次序 $(r,\theta,\varphi)$ 是右手的。由 (1)—(5)，
$$
\begin{aligned}
\nabla\Phi&=\Phi_r\boldsymbol e_r+\frac{\Phi_\theta}{r}\boldsymbol e_\theta
+\frac{\Phi_\varphi}{r\sin\theta}\boldsymbol e_\varphi,\\
\operatorname{div}\boldsymbol F
&=\frac1{r^2}\partial_r(r^2F_r)
+\frac1{r\sin\theta}\partial_\theta(\sin\theta F_\theta)
+\frac1{r\sin\theta}\partial_\varphi F_\varphi,\\
\Delta\Phi&=\frac1{r^2}\partial_r(r^2\Phi_r)
+\frac1{r^2\sin\theta}\partial_\theta(\sin\theta\Phi_\theta)
+\frac1{r^2\sin^2\theta}\Phi_{\varphi\varphi}.
\end{aligned}
$$
旋度逐分量为
$$
\begin{aligned}
(\operatorname{rot}\boldsymbol F)_r
&=\frac{\partial_\theta(\sin\theta F_\varphi)-\partial_\varphi F_\theta}{r\sin\theta},\\
(\operatorname{rot}\boldsymbol F)_\theta
&=\frac1r\left[\frac{\partial_\varphi F_r}{\sin\theta}-\partial_r(rF_\varphi)\right],\\
(\operatorname{rot}\boldsymbol F)_\varphi
&=\frac1r[\partial_r(rF_\theta)-\partial_\theta F_r].
\end{aligned}
$$
对径向函数 $\Phi=g(r)$，$\Delta\Phi=g''+2g'/r$。因此原点外径向调和函数满足 $(r^2g')'=0$，恰为 $g(r)=A+B/r$。取 $g=1/r$ 时原点外 Laplace 算子为零，但函数在原点奇异；不能由此把含原点球体上的边界通量判为零。

坐标轴、原点或球坐标极轴上的分母退化说明该坐标片失效，并不自动说明场奇异。判断场本身是否平滑应回到直角坐标或另一个正则坐标片。

配套原题：[练习 13.6](/files/problems/科大数分习题-v2%282%29.pdf#page=18)。完成尺度计算、公式代入和简单场回代后，再处理守恒方程。

[上一讲　微分形式与积分定理的统一](/notes/273fbc766ad6e31edc87efe7/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [回到专题Ⅴ总览](/notes/ffe9853c61f5c4c136c5bba9/)
