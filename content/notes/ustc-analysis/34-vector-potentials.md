---
title: "旋度场、向量势与通量障碍"
description: "证明星形区域上无源场具有向量势，推导径向积分构造，并说明非零闭曲面通量为何阻止全局向量势存在。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "向量势", "旋度场", "星形区域"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §13.5（教材第 114—117 页）。有势场写成梯度，旋度场写成旋度；前者的势是标量，后者的势是向量。它们的全局障碍分别由闭路和闭曲面检测。

[必要条件与反例](#必要条件与反例) · [星形区域上的构造](#星形区域上的构造) · [向量势的不唯一性](#向量势的不唯一性) · [实际求解](#实际求解)

## 必要条件与反例

若存在 $\boldsymbol G$ 使 $\boldsymbol F=\operatorname{rot}\boldsymbol G$，称 $\boldsymbol F$ 为旋度场，$\boldsymbol G$ 为向量势。若 $\boldsymbol G\in C^2$，则混合偏导相等给出 $\operatorname{div}\boldsymbol F=0$；这样的 $\boldsymbol F$ 称无源场。

即使只知 $\boldsymbol G\in C^1$、$\boldsymbol F=\operatorname{rot}\boldsymbol G\in C^1$，必要性仍成立：对任意紧含于定义域的小立方体，在六个面上分别用 Stokes，棱边积分两两抵消，故闭面通量为零。再用 Gauss 除以体积并缩小立方体，便得散度为零。这避免了未经许可地对 $C^1$ 的 $\boldsymbol G$ 求二阶偏导。

更强的必要条件是：定义域内任何适用分片 Stokes 的有向闭曲面 $S$ 都满足
$$
\iint_S\boldsymbol F\cdot\boldsymbol n\,d\sigma=0. \qquad(1)
$$
因为分片应用 Stokes 后，全部公共边界抵消。这里不要求 $S$ 的内部在定义域内；只需向量势在 $S$ 附近存在。

**无源但无全局向量势。** 取 $D=\mathbb R^3\setminus\{0\}$，$\boldsymbol F=p/\|p\|^3$。散度为零，却在任一以原点为心的球面上有通量 $4\pi$，违反 (1)。因此不存在 $D$ 上的全局向量势。这个域按教材是曲面单连通，按通常闭路可缩的定义也单连通；可见“普通单连通加散度为零”仍不能保证向量势存在。闭曲面包围空腔的问题与闭路环绕轴的问题不同。

## 星形区域上的构造

**定理 13.5.1** 若 $D$ 关于 $p_0$ 星形，$\boldsymbol F\in C^1(D)$，则 $\boldsymbol F$ 是旋度场当且仅当 $\operatorname{div}\boldsymbol F=0$。

证明：必要性已证。令 $q=p-p_0$，定义
$$
\boldsymbol G(p)=\int_0^1 t\,\boldsymbol F(p_0+tq)\times q\,dt. \qquad(2)
$$
星形条件保证每个取值都在定义域内。这里叉积次序是“场叉位移”；反过来会改变旋度的符号。积分给出 $C^1$ 场。

平移坐标使 $p_0=0$，写 $p=(x,y,z)$、$\boldsymbol F=(P,Q,R)$。由 (2)，
$$
\begin{aligned}
G_1&=\int_0^1t[zQ(tp)-yR(tp)]dt,\\
G_2&=\int_0^1t[xR(tp)-zP(tp)]dt,\\
G_3&=\int_0^1t[yP(tp)-xQ(tp)]dt.
\end{aligned}
$$
利用 $Q_y+R_z=-P_x$，直接计算旋度的第一分量：
$$
\begin{aligned}
\partial_yG_3-\partial_zG_2
&=\int_0^1\{2tP(tp)+t^2[yP_y+zP_z-xQ_y-xR_z](tp)\}dt\\
&=\int_0^1\{2tP(tp)+t^2[xP_x+yP_y+zP_z](tp)\}dt\\
&=\int_0^1\frac d{dt}[t^2P(tp)]dt=P(p).
\end{aligned}
$$
其余两分量循环置换，得 $\operatorname{rot}\boldsymbol G=\boldsymbol F$。证毕。

构造的关键是把微分式整理成 $t^2P(tp)$ 的一元导数。公式中的权重 $t$ 由此得到，并非随意选择。

**常向量校验。** 若 $\boldsymbol F=\boldsymbol a$，则 $\boldsymbol G=\tfrac12\boldsymbol a\times(p-p_0)$。例如 $\boldsymbol a=(0,0,1)$ 时，$\boldsymbol G=(-y/2,x/2,0)$，其旋度确为 $(0,0,1)$。

## 向量势的不唯一性

若 $\boldsymbol G$ 是向量势，$\psi\in C^2(D)$，则
$$
\operatorname{rot}(\boldsymbol G+\nabla\psi)
=\operatorname{rot}\boldsymbol G=\boldsymbol F. \qquad(3)
$$
这是定理 13.5.2 的规范自由度。在此明确取 $C^2$，保证经典混合二阶偏导合法。

两个向量势之差 $\boldsymbol H$ 无旋。若定义域曲面单连通，上一讲给出 $\boldsymbol H=\nabla\psi$，因而 (3) 描述全部差异；在一般域上，只能断言差是无旋场，不能无条件说它一定是某个全局梯度。相较之下，同一标量势在连通域上的自由度仅为常数。

## 实际求解

对教材的场 $\boldsymbol F=(xy+1,z,-yz)$，散度为 $y-y=0$。在整个空间可取 $G_3=0$，于是方程成为
$$
-\partial_zG_2=xy+1,\qquad
\partial_zG_1=z,\qquad
\partial_xG_2-\partial_yG_1=-yz.
$$
先取 $G_2=-(xy+1)z$、$G_1=z^2/2$，第三式自动满足。因此一个简洁向量势是
$$
\boldsymbol G=\left(\frac{z^2}{2},-(xy+1)z,0\right).
$$
这种置零法在此是便于尝试的选择，不能作为任意定义域、任意场的全局存在性证明；存在性由星形定理保证，结果仍应逐分量回代。

| 所求对象 | 局部必要条件 | 全局积分障碍 | 本教材采用的充分域条件 |
| --- | --- | --- | --- |
| 标量势 $\boldsymbol F=\nabla\varphi$ | $\operatorname{rot}\boldsymbol F=0$ | 闭路环量 | 曲面单连通 |
| 向量势 $\boldsymbol F=\operatorname{rot}\boldsymbol G$ | $\operatorname{div}\boldsymbol F=0$ | 闭曲面通量 | 星形 |

本讲不把最后一列的充分条件误写成必要条件，也不把教材对空间单连通的定义直接当成已经证明的向量势存在定理。

配套原题：[练习 13.5](/files/problems/科大数分习题-v2%282%29.pdf#page=18)。先用闭曲面通量排除不可能情形，再选择径向构造或逐分量积分。

[上一讲　有势场、保守场与闭路障碍](/notes/aa28359edd41b315a32b9c51/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　微分形式与积分定理的统一](/notes/273fbc766ad6e31edc87efe7/)
