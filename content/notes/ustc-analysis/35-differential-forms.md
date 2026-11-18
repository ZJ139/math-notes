---
title: "微分形式与积分定理的统一"
description: "以交替性理解定向，以外微分连接梯度、旋度和散度，说明拉回、闭形式与恰当形式的区别。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "微分形式", "外微分", "Stokes 公式"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §12.5（教材第 93—97 页）。先掌握曲线、曲面积分，再用微分形式把计算结构统一起来。本讲证明欧氏空间中的运算法则和已学积分公式的统一表达；任意维流形上的一般 Stokes 定理按教材定位作为拓展陈述。

[外积与形式](#外积与形式) · [外微分](#外微分) · [参数代入就是拉回](#参数代入就是拉回) · [统一的边界公式](#统一的边界公式) · [闭与恰当](#闭与恰当)

## 外积与形式

微分符号的外积满足双线性与交替性：
$$
dx\wedge dy=-dy\wedge dx,\qquad dx\wedge dx=0.
$$
因此在三维空间，一般的 $0,1,2,3$ 次微分形式分别写成
$$
\begin{aligned}
&f,\\
&\omega=Pdx+Qdy+Rdz,\\
&\eta=P\,dy\wedge dz+Q\,dz\wedge dx+R\,dx\wedge dy,\\
&h\,dx\wedge dy\wedge dz.
\end{aligned}
$$
三维中四次及更高次的形式为零，因为每项必有重复微分因子。一般 $\mathbb R^n$ 上，$k$ 次形式是 $\sum_{i_1<\cdots<i_k}a_{i_1\cdots i_k}dx_{i_1}\wedge\cdots\wedge dx_{i_k}$。

若 $\alpha$ 是 $k$ 次、$\beta$ 是 $l$ 次形式，逐项交换微分因子共需 $kl$ 次换位，故
$\alpha\wedge\beta=(-1)^{kl}\beta\wedge\alpha$。例如
$$
(adx+bdy)\wedge(cdx+ddy)=(ad-bc)dx\wedge dy.
$$
行列式出现于面积和定向，正是交替性的结果。

## 外微分

对 $\alpha=\sum_I a_I dx_I$ 定义
$$
d\alpha=\sum_I da_I\wedge dx_I,
\qquad da_I=\sum_j\partial_j a_I\,dx_j. \qquad(1)
$$
由定义展开并统一微分因子的次序，在三维中得到
$$
\begin{aligned}
df&=f_xdx+f_ydy+f_zdz,\\
d\omega&=(R_y-Q_z)dy\wedge dz+(P_z-R_x)dz\wedge dx
+(Q_x-P_y)dx\wedge dy,\\
d\eta&=(P_x+Q_y+R_z)dx\wedge dy\wedge dz.
\end{aligned} \qquad(2)
$$
若系数属于 $C^2$，则 $d(d\alpha)=0$。证明：每个系数产生 $\sum_{i,j}\partial_i\partial_j a_I\,dx_i\wedge dx_j\wedge dx_I$；对角项为零，非对角项由偏导对称与外积反对称两两抵消。这统一了 $\operatorname{rot}\operatorname{grad}=0$ 与 $\operatorname{div}\operatorname{rot}=0$。

若 $\alpha$ 的次数为 $k$，乘积法则是
$$
d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta. \qquad(3)
$$
只需对单项 $a\,dx_I$、$b\,dx_J$ 验证：微分 $ab$ 得两项；把 $db$ 从 $dx_I$ 之后移到之前需越过 $k$ 个微分因子，因而产生 $(-1)^k$。

## 参数代入就是拉回

设 $T:(u_1,\ldots,u_m)\mapsto(x_1,\ldots,x_n)$ 是参数映射，把系数替换成 $a_I\circ T$，并把 $dx_i$ 替换成 $\sum_j(\partial x_i/\partial u_j)du_j$，所得形式称为拉回 $T^*\alpha$。例如二维参数下
$$
T^*(dx\wedge dy)=(x_uy_v-x_vy_u)du\wedge dv.
$$
这正是第二型曲面积分的投影 Jacobian。对曲线 $\boldsymbol r(t)$，$\boldsymbol r^*\omega=[P(\boldsymbol r)x'+Q(\boldsymbol r)y'+R(\boldsymbol r)z']dt$，所以曲线积分就是拉回后的一元积分。

系数及映射具有相应正则性时，链式法则给出
$$
T^*(\alpha\wedge\beta)=T^*\alpha\wedge T^*\beta,
\qquad d(T^*\alpha)=T^*(d\alpha). \qquad(4)
$$
第二式可对单项 $a\,dx_I$ 验证：$d(a\circ T)=T^*(da)$；每个 $T^*dx_i=d(x_i\circ T)$ 的再次外微分为零，故 (3) 中只剩系数微分项。因而 (4) 并不是单靠形式记号规定出来的。

## 统一的边界公式

对已满足前几讲正则性、分割与定向条件的区域或曲面，基本定理都写成
$$
\int_{\partial M}\alpha=\int_M d\alpha. \qquad(5)
$$

| 积分对象 $M$ | 形式 $\alpha$ | (5) 的具体含义 |
| --- | --- | --- |
| 有向区间或曲线 | 函数 $f$ | 终点值减起点值等于全微分积分 |
| 平面区域 | $Pdx+Qdy$ | Green 公式 |
| 空间定向曲面 | $Pdx+Qdy+Rdz$ | Stokes 公式 |
| 三维区域 | $Pdy\wedge dz+Qdz\wedge dx+Rdx\wedge dy$ | Gauss 公式 |

这些情形已经证明：(2) 给出内部微分，(4) 给出参数变化，分片时公共边界反向抵消给出整体公式。对任意维光滑定向流形及适当光滑形式，(5) 是一般 Stokes 定理；完整证明还需流形、坐标图与单位分解，不作为本专题已证明的结论使用。

第一型积分含无符号的长度或面积密度，不随定向改变；它不能未经转换就当成一个有向形式积分。第二型积分与形式的对应才直接保留反向变号的结构。

## 闭与恰当

若 $d\alpha=0$，称 $\alpha$ 为闭形式；若 $\alpha=d\beta$，称其为恰当形式。在所需 $C^2$ 正则性下，恰当必闭。逆命题需要定义域条件。

一阶形式 $\omega=\boldsymbol F\cdot d\boldsymbol r$ 闭等价于场无旋，恰当等价于存在标量势。二阶形式 $\eta=Pdy\wedge dz+Qdz\wedge dx+Rdx\wedge dy$ 闭等价于场无源，恰当等价于存在向量势：若 $\beta=G_1dx+G_2dy+G_3dz$，则 $d\beta=\eta$ 正是 $\operatorname{rot}\boldsymbol G=\boldsymbol F$。

在星形域上，前两讲的积分构造已经分别证明一阶、二阶闭形式恰当。在有孔域上，穿孔平面的极角形式及原点外空间的径向通量形式给出反例。由 (5)，恰当形式在无边界的相应维数对象上积分必为零；非零闭路积分或闭面通量因此成为“不恰当”的直接证据。

配套原题：[练习 12.5](/files/problems/科大数分习题-v2%282%29.pdf#page=15)。按“排微分顺序—展开系数导数—合并同类项”计算，特别检查外积与乘积法则的负号。

[上一讲　旋度场、向量势与通量障碍](/notes/d0256378f65df9d6d670345e/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　正交曲线坐标中的场与 Laplace 算子](/notes/d5adf12ddac632e839a16771/)
