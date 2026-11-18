---
title: "有势场、保守场与闭路障碍"
description: "证明势函数与路径无关的等价关系，严格区分教材的曲面单连通和空间单连通，并给出构造势的方法。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "势函数", "保守场", "单连通"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §13.4（教材第 109—113 页），并回接 §11.3 的平面情形。沿用教材约定：$\boldsymbol F=\operatorname{grad}\varphi$ 时称 $\varphi$ 为势函数；力学的势能是 $-\varphi$。

[三种场的关系](#三种场的关系) · [教材的两种单连通](#教材的两种单连通) · [无旋何时充分](#无旋何时充分) · [构造与唯一性](#构造与唯一性) · [径向场与能量](#径向场与能量)

## 三种场的关系

设 $D\subset\mathbb R^3$ 是连通开集，$\boldsymbol F\in C^1(D)$。有势指存在 $\varphi$ 满足 $\nabla\varphi=\boldsymbol F$；保守指任一分段光滑闭路上的积分为零；无旋指 $\nabla\times\boldsymbol F=0$。

**不依赖拓扑假设的关系** 是：有势、保守、积分与路径无关三者等价，且都推出无旋。

证明：若有势，对任一路径 $\boldsymbol r(t)$，由链式法则
$$
\int_\Gamma\boldsymbol F\cdot d\boldsymbol r
=\int_a^b\frac d{dt}\varphi(\boldsymbol r(t))dt
=\varphi(B)-\varphi(A). \qquad(1)
$$
两条同端点路径拼成闭路，立即给出保守与路径无关等价。反过来，固定 $p_0\in D$，定义
$$
\varphi(p)=\int_{p_0}^{p}\boldsymbol F\cdot d\boldsymbol r, \qquad(2)
$$
路径无关保证定义无歧义。对足够小的 $h$，点 $p=(x,y,z)$ 附近的小线段在 $D$ 内，故
$$
\frac{\varphi(x+h,y,z)-\varphi(x,y,z)}h
=\frac1h\int_x^{x+h}P(t,y,z)dt\longrightarrow P(p).
$$
另两坐标同理，得 $\nabla\varphi=\boldsymbol F$。因 $\boldsymbol F\in C^1$，$\varphi\in C^2$，混合偏导相等推出旋度为零。证毕。

## 教材的两种单连通

必须保留教材定义 13.4.4—13.4.5 的区别，不能把它们合并成一个未说明的“单连通”。

| 教材术语 | 所要求的填充性质 | 本专题中的作用 |
| --- | --- | --- |
| 曲面单连通 | 区域内每条分段光滑闭曲线，都能作为区域内某张适用 Stokes 的定向曲面的边界 | 由无旋推出一切闭路环量为零 |
| 空间单连通 | 区域内任一嵌入闭曲面所围有界内部全部属于该区域 | 排除闭曲面包住被挖去的空间空腔 |

这里按教材的几何定义使用术语，不将“空间单连通”替换成现代拓扑中“每条闭路可缩”的定义。二者无强弱关系。例如 $\mathbb R^3\setminus\{0\}$ 和球壳是曲面单连通，却不是空间单连通；教材给出的区域 $D=\{x^2+y^2+z^2<1,\ x^2+y^2>1/2\}$ 则是空间单连通而非曲面单连通，围绕 $z$ 轴的闭路不能在其中填面。

对原点外空间的闭路，之所以仍可填一张避开原点的曲面，可先取一个锥顶 $q$：避开所有形如 $-\lambda\gamma(t)$（$\lambda\ge0$）的点，就能保证各连接线段 $[q,\gamma(t)]$ 不经过原点。这类禁取点是由一维分段光滑曲线产生的二维锥面，不占据三维开集；可选到合适 $q$。锥面按片理解，锥顶处用极小边界截去再取极限。这个论证说明“移除一点”与“移除一条轴”对闭路的影响不同。

## 无旋何时充分

**定理 13.4.1** 在曲面单连通区域上，$C^1$ 向量场有势、保守、无旋三者等价。

证明：只剩无旋推出保守。对任一闭路 $\Gamma$，取区域内以它为边界、定向相容的曲面 $\Sigma$，由 Stokes
$$
\oint_\Gamma\boldsymbol F\cdot d\boldsymbol r
=\iint_\Sigma(\nabla\times\boldsymbol F)\cdot\boldsymbol n\,d\sigma=0.
$$
再用 (2) 构造势函数即可。证毕。

**反例。** 在 $D=\{x^2+y^2>0\}$ 上，
$$
\boldsymbol F=\left(-\frac y{x^2+y^2},\frac x{x^2+y^2},0\right)
$$
处处无旋，但单位圆 $z=0$ 上的环量为 $2\pi$，所以不存在全局势。局部可以用连续选取的极角作势；绕轴一周极角增加 $2\pi$，正是全局单值性的障碍。判定的精确条件是“所有闭路积分为零”；无旋是局部微分条件，单独不足。

## 构造与唯一性

**星形区域上的直接公式。** 若 $D$ 关于 $p_0$ 星形，即每条线段 $[p_0,p]$ 都在 $D$ 内，且 $\boldsymbol F$ 无旋，令 $q=p-p_0$，则
$$
\varphi(p)=\int_0^1\boldsymbol F(p_0+tq)\cdot q\,dt \qquad(3)
$$
是一个势。证明：写 $\boldsymbol F=(F_1,F_2,F_3)$，无旋即 $\partial_jF_i=\partial_iF_j$。对 $p_j$ 求导，
$$
\begin{aligned}
\partial_j\varphi
&=\int_0^1\left[F_j(p_0+tq)+t\sum_iq_i\partial_jF_i(p_0+tq)\right]dt\\
&=\int_0^1\frac d{dt}[tF_j(p_0+tq)]dt=F_j(p).
\end{aligned}
$$
闭线段紧含于开集，附近仍在定义域内，$C^1$ 正则性允许在积分号内求导。该证明不预先依赖路径无关。

实际求势可逐坐标积分。例如 $\boldsymbol F=(x^2-2yz,y^2-2xz,z^2-2xy)$，由 $\varphi_x=P$ 得 $\varphi=x^3/3-2xyz+C(y,z)$；再由 $\varphi_y=Q$ 得 $C=y^3/3+D(z)$；最后 $D'=z^2$，故
$$
\varphi=\frac{x^3+y^3+z^3}{3}-2xyz+C_0.
$$
**唯一性（定理 13.4.2）** 同一场的两个势之差梯度为零；沿连通域内任意折线积分可知其差为常数。若定义域不连通，每个连通分支可有独立常数。

## 径向场与能量

若 $\rho=\|p\|>0$，$\boldsymbol F=f(\rho)p$，取
$$
\varphi(p)=\int_{\rho_0}^{\rho}t f(t)dt
$$
便有 $\nabla\varphi=\rho f(\rho)\nabla\rho=f(\rho)p$。例如引力场 $\boldsymbol F=-Mp/\rho^3$ 的教材意义下的势是 $M/\rho$，势能为 $-M/\rho$。

若运动满足 $m\boldsymbol r''=\nabla\varphi(\boldsymbol r)$，两边点乘 $\boldsymbol r'$，得到
$$
\frac d{dt}\left(\frac m2\|\boldsymbol r'\|^2-\varphi(\boldsymbol r)\right)=0.
$$
记住势的正负约定后，能量守恒直接来自链式法则。

配套原题：[练习 13.4](/files/problems/科大数分习题-v2%282%29.pdf#page=17)。先核定义域，再检旋度，最后构造势并逐分量回代；闭路反例优先用圆周检验。

[上一讲　梯度、散度、旋度与 Green 恒等式](/notes/7ea307608631146bcd343a31/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　旋度场、向量势与通量障碍](/notes/d0256378f65df9d6d670345e/)
