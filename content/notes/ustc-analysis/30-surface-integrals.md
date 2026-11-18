---
title: "曲面面积、两型曲面积分与定向"
description: "用切平行四边形确定面积元，证明参数不变性，辨明通量的符号及投影面积元。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "曲面积分", "面积元", "通量"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §§12.1—12.3（教材第 72—85 页）。曲面记作 $\Sigma$，标量面积元用教材的 $d\sigma$，定向面积元记作 $d\boldsymbol\sigma=\boldsymbol n\,d\sigma$。

[面积元与参数不变性](#面积元与参数不变性) · [第一型曲面积分](#第一型曲面积分) · [定向与第二型积分](#定向与第二型积分) · [图形曲面与算例](#图形曲面与算例)

## 面积元与参数不变性

设 $\boldsymbol r(u,v)$ 为 $C^1$ 正则参数曲面，即 $\boldsymbol r_u\times\boldsymbol r_v\ne0$。参数映射在所讨论曲面片上单射，允许边界或面积零集上的重合。切向量所张平行四边形的面积给出
$$
d\sigma=\|\boldsymbol r_u\times\boldsymbol r_v\|\,dudv,
\qquad |\Sigma|=\iint_D\|\boldsymbol r_u\times\boldsymbol r_v\|\,dudv. \qquad(1)
$$
**参数不变性。** 若 $(u,v)=(u(s,t),v(s,t))$ 是正则可逆换元，则链式法则及叉积双线性给出
$$
\boldsymbol r_s\times\boldsymbol r_t
=\frac{\partial(u,v)}{\partial(s,t)}
(\boldsymbol r_u\times\boldsymbol r_v).
$$
取范数后出现 Jacobian 的绝对值，再用二重积分换元公式，(1) 不变。这也是面积取范数、定向面积不取范数的根本区别。

多曲面片覆盖时先分成内部不重叠的片再相加，避免重计。不能用“任意内接多面体的面积极限”定义曲面面积：教材的 Schwarz 灯笼表明，圆柱上的三角网格即使最大边长趋零，其面积也未必趋于圆柱面积。若每圈分 $m$ 份、高度分 $n$ 层，三角形斜高中的横向误差量级是 $m^{-2}$，与层高 $n^{-1}$ 的比值约为 $n/m^2$，并不必趋零。(1) 用微分逼近建立面积，排除了这种不受控的逼近。

## 第一型曲面积分

将曲面分片，以片面积作权重，和 $\sum f(\boldsymbol\xi_i)\Delta\sigma_i$ 的极限定义 $\iint_\Sigma f\,d\sigma$。当 $f$ 连续时，
$$
\iint_\Sigma f\,d\sigma
=\iint_D f(\boldsymbol r(u,v))\|\boldsymbol r_u\times\boldsymbol r_v\|\,dudv. \qquad(2)
$$
证明：用 (1) 表示每片面积，和与右端积分的差不超过 $\omega_f(\delta)|\Sigma|$，令网格宽度趋零即可。参数不变性由上一节同时保证。它可表示曲面质量，且与法向选择无关。

## 定向与第二型积分

可定向曲面能连续选择单位法向量 $\boldsymbol n$；选定后有
$$
\iint_\Sigma\boldsymbol F\cdot d\boldsymbol\sigma
=\iint_\Sigma\boldsymbol F\cdot\boldsymbol n\,d\sigma.
$$
这称为通量或第二型曲面积分。若参数的 $\boldsymbol r_u\times\boldsymbol r_v$ 指向指定侧，则
$$
\begin{aligned}
\iint_\Sigma\boldsymbol F\cdot d\boldsymbol\sigma
&=\iint_D\boldsymbol F(\boldsymbol r)\cdot
(\boldsymbol r_u\times\boldsymbol r_v)\,dudv\\
&=\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy. \qquad(3)
\end{aligned}
$$
式中 $dy\,dz,dz\,dx,dx\,dy$ 是有向投影面积元；例如参数化后 $dy\,dz=(y_uz_v-y_vz_u)dudv$。它们不能当成无符号乘积互换次序。换成反向法向量，通量变号。

非可定向曲面仍可作第一型积分，但没有全局一致的法向，不能直接按 (3) 定义全曲面的单一有向通量。教材用 Möbius 带说明此区别。

## 图形曲面与算例

对于 $z=f(x,y)$，参数切向量为 $(1,0,f_x)$、$(0,1,f_y)$，因此向上定向时
$$
\begin{aligned}
d\sigma&=\sqrt{1+f_x^2+f_y^2}\,dxdy,\\
d\boldsymbol\sigma&=(-f_x,-f_y,1)\,dxdy,\\
\iint_\Sigma\boldsymbol F\cdot d\boldsymbol\sigma
&=\iint_D[-Pf_x-Qf_y+R]_{z=f(x,y)}\,dxdy.
\end{aligned} \qquad(4)
$$
公式 (4) 已含法向长度，不应再乘 $\sqrt{1+f_x^2+f_y^2}$。向下定向整体变号。

**例 1　球面面积与球面上的平方积分。** 取半径 $a$ 的球面参数
$\boldsymbol r(\theta,\varphi)=a(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$，$0<\theta<\pi$，$0<\varphi<2\pi$。得 $d\sigma=a^2\sin\theta\,d\theta d\varphi$，面积 $4\pi a^2$。极点与接缝是面积零集，不影响积分。由对称性及 $x^2+y^2+z^2=a^2$，
$$
\iint_\Sigma x^2d\sigma=\frac{4\pi a^4}{3}.
$$
**例 2　抛物面通量。** $\Sigma$ 为 $z=x^2+y^2\le1$，取向上侧，$\boldsymbol F=(x,y,z)$。由 (4)，被积函数是 $-2x^2-2y^2+(x^2+y^2)=-(x^2+y^2)$，故
$$
\iint_\Sigma\boldsymbol F\cdot d\boldsymbol\sigma
=-\int_0^{2\pi}\int_0^1r^3drd\theta=-\frac\pi2.
$$
负值说明该场在这张曲面上的净通量与选定法向相反，不表示面积为负。

配套原题：[练习 12.1](/files/problems/科大数分习题-v2%282%29.pdf#page=13) · [练习 12.2](/files/problems/科大数分习题-v2%282%29.pdf#page=13) · [练习 12.3](/files/problems/科大数分习题-v2%282%29.pdf#page=14)。先算叉积、检查法向，再决定取范数还是点乘。

[上一讲　Green 公式、平面势与等周不等式](/notes/d153c04c7b38e36278d815fe/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　Gauss 与 Stokes：内部微分和边界积分](/notes/c7aa76ca1d5fc2f76a94ba0a/)
