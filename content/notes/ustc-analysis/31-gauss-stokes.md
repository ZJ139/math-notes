---
title: "Gauss 与 Stokes：内部微分和边界积分"
description: "完整推导散度定理与 Stokes 公式，明确边界方向、补面方法及含奇点时的挖孔处理。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "Gauss 公式", "Stokes 公式", "定向"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §12.4（教材第 86—92 页）。Green、Gauss、Stokes 的共同结构是：内部的小边界相互抵消，只留下整体边界。区别在于积分对象的维数与定向。

[散度定理](#散度定理) · [Stokes 公式](#stokes-公式) · [补面与换面](#补面与换面) · [奇点不能穿过](#奇点不能穿过)

## 散度定理

**Gauss 公式（定理 12.4.1）** 设 $\Omega$ 是由有限块光滑曲面围成的有界区域，满足教材的有限简单区域分解条件；$\boldsymbol F=(P,Q,R)\in C^1$ 于 $\overline\Omega$ 的邻域。边界取外法向，则
$$
\iint_{\partial\Omega}\boldsymbol F\cdot\boldsymbol n\,d\sigma
=\iiint_\Omega(P_x+Q_y+R_z)\,dxdydz. \qquad(1)
$$
证明：先设 $\Omega=\{(x,y,z):(x,y)\in D,\ f(x,y)\le z\le g(x,y)\}$。由 Fubini 定理与一元积分基本定理，
$$
\iiint_\Omega R_z\,dV
=\iint_D[R(x,y,g)-R(x,y,f)]\,dxdy
=\iint_{\partial\Omega}R\,dx\,dy.
$$
上盖外法向向上，下盖向下；侧壁的法向没有竖直分量。对 $x$ 型、$y$ 型简单体分别证明另外两项。对一般有限可分解体，分别分割、求和，内部界面的外法向一正一反，通量抵消。三项相加即为 (1)。证毕。

若区域有空腔，内边界的“外法向”指向空腔，即离开材料所在区域；它与该空腔作为独立实体的外法向相反。

**体积公式。** 对 $\boldsymbol F=(x,y,z)$，散度为 $3$，故
$$
|\Omega|=\frac13\iint_{\partial\Omega}(x\,dy\,dz+y\,dz\,dx+z\,dx\,dy).
$$
如果法向全部反取，右边变成负体积；本讲始终固定外法向，不用取绝对值掩盖方向错误。

## Stokes 公式

**Stokes 公式（定理 12.4.2）** 设可定向曲面 $\Sigma$ 由有限块 $C^2$ 正则曲面片拼接而成，边界分段光滑，$\boldsymbol F\in C^1$ 于曲面邻域，则
$$
\oint_{\partial\Sigma}\boldsymbol F\cdot d\boldsymbol r
=\iint_\Sigma(\nabla\times\boldsymbol F)\cdot\boldsymbol n\,d\sigma, \qquad(2)
$$
其中
$$
\nabla\times\boldsymbol F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y).
$$
边界方向与法向按右手规则配合。精确地说，若 $\boldsymbol\nu$ 是曲面内垂直于边界的外单位余法向，则正边界切向为 $\boldsymbol t=\boldsymbol n\times\boldsymbol\nu$。从正法向一侧看平面片，外边界逆时针。

证明：在一张定向参数片 $\boldsymbol r(u,v)$ 上，令
$$
A(u,v)=\boldsymbol F(\boldsymbol r)\cdot\boldsymbol r_u,\qquad
B(u,v)=\boldsymbol F(\boldsymbol r)\cdot\boldsymbol r_v.
$$
边界积分化为 $\oint_{\partial D}Adu+Bdv$。由链式法则及 $\boldsymbol r_{uv}=\boldsymbol r_{vu}$，
$$
\begin{aligned}
B_u-A_v
&=(D\boldsymbol F\,\boldsymbol r_u)\cdot\boldsymbol r_v
 -(D\boldsymbol F\,\boldsymbol r_v)\cdot\boldsymbol r_u\\
&=(\nabla\times\boldsymbol F)(\boldsymbol r)\cdot
(\boldsymbol r_u\times\boldsymbol r_v).
\end{aligned}
$$
第二个等号逐项展开即得，例如 $R_y-Q_z$ 的系数是 $y_uz_v-z_uy_v$。在参数域用 Green 公式就得到 (2)。多片时，相邻片诱导的公共边界方向相反，求和消去内部边界，留下 $\partial\Sigma$。证毕。

该证明也说明为什么要给参数曲面二阶正则性：用到了混合二阶偏导的消去；场本身只需一阶连续偏导。

## 补面与换面

**例 1　补盖检验。** 对上一讲的 $z=x^2+y^2\le1$ 抛物面，其上方、平面 $z=1$ 下方的体积是 $\int_{r\le1}(1-r^2)dxdy=\pi/2$。取 $\boldsymbol F=(x,y,z)$，闭曲面总外通量为 $3\pi/2$。顶盖通量为 $\pi$，所以抛物面的向下外通量为 $\pi/2$，其向上通量为 $-\pi/2$，与直接计算一致。

**例 2　用平面片代替空间曲面。** 设 $\Gamma$ 是 $x+y+z=1$ 在第一卦限内三角形的边界，方向对应法向 $(1,1,1)$。求 $\oint_\Gamma z\,dx+x\,dy+y\,dz$。对 $\boldsymbol F=(z,x,y)$，旋度是 $(1,1,1)$。用 $z=1-x-y$，定向面积元为 $(1,1,1)dxdy$，参数域面积为 $1/2$，故积分为 $3/2$。

只要每张候选曲面及其邻域上场都满足条件，具有相同有向边界的两张曲面的旋度通量相等，因为它们都等于同一个边界积分。求普通场的通量则不能仅凭“边界相同”换面；若两面合成某个无奇点区域的边界，还需该区域内散度为零才能借 Gauss 换面。

## 奇点不能穿过

令 $\rho=\sqrt{x^2+y^2+z^2}$，在原点外取
$$
\boldsymbol F=\frac{(x,y,z)}{\rho^3}.
$$
直接微分得 $\operatorname{div}\boldsymbol F=3\rho^{-3}-3\rho^{-5}(x^2+y^2+z^2)=0$。但半径 $a$ 的球面上，$\boldsymbol F\cdot\boldsymbol n=a^{-2}$，通量为 $4\pi$。不能在含原点的球体上使用 (1)。在两球之间的球壳上，外球通量减内球向外通量恰好为零，完全符合 (1)。

一般计算先检查：场是否在填充区域内处处正则，曲面是否闭合，边界与法向是否配合。缺面就补面；有奇点就挖去邻域并保留内边界项。以上两种操作都必须连同方向一起计算。

配套原题：[练习 12.4](/files/problems/科大数分习题-v2%282%29.pdf#page=14)。分别练习“闭面用 Gauss”“闭路用 Stokes”“补面后扣除”与“挖孔后取极限”。

[上一讲　曲面面积、两型曲面积分与定向](/notes/d16ea06505ce8b7affb6ad17/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　梯度、散度、旋度与 Green 恒等式](/notes/7ea307608631146bcd343a31/)
