---
title: "解析几何第一章星号题：分量解答与图解"
description: "第一章全部 8 道星号题，保留原节号与题号；用坐标、线性方程组和行列式完整作答，每题附几何图像。"
subject: "解析几何"
category: "analytic-geometry"
tags: ["丘维声", "第一章", "星号题", "分量法", "图解"]
created_at: "2026-11-11"
updated_at: "2026-11-11"
---

本篇依据《解析几何-问题》第一章“几何空间的线性结构和度量结构”，完成全部 **8 道星号题**。题号与原册一致；第 1.2 节没有星号题。原题涉及定位向量的地方改写为等价的坐标条件，解答不使用向径。内积、外积及混合积题均落实到分量、线性方程组与行列式计算。

[返回解析几何习题](/problems/collections/analytic-geometry/) · [第二章星号题](/problems/679bfb85d47436cf5e1d34b1/) · [打开原题册](/files/problems/解析几何-问题.pdf#page=4 "PDF 章节直达")

## 题目目录

| 节与原题号 | 内容 | 原题册页码 |
| --- | --- | --- |
| [1.1 第 18* 题](#问题-11-18) | 正多边形顶点坐标之和 | [PDF 第 5 页](/files/problems/解析几何-问题.pdf#page=5 "PDF 章节直达") |
| [1.1 第 19* 题](#问题-11-19) | 有限点集的凸组合 | [PDF 第 5 页](/files/problems/解析几何-问题.pdf#page=5 "PDF 章节直达") |
| [1.3 第 16* 题](#问题-13-16) | Gram 行列式与共面 | [PDF 第 6 页](/files/problems/解析几何-问题.pdf#page=6 "PDF 章节直达") |
| [1.4 第 12* 题](#问题-14-12) | 外积方程的轨迹 | [PDF 第 7 页](/files/problems/解析几何-问题.pdf#page=7 "PDF 章节直达") |
| [1.4 第 13* 题](#问题-14-13) | 外积方程与内积条件联立 | [PDF 第 7 页](/files/problems/解析几何-问题.pdf#page=7 "PDF 章节直达") |
| [1.5 第 7* 题](#问题-15-7) | 两个外积的外积 | [PDF 第 8 页](/files/problems/解析几何-问题.pdf#page=8 "PDF 章节直达") |
| [1.5 第 8* 题](#问题-15-8) | 四个向量的行列式恒等式 | [PDF 第 8 页](/files/problems/解析几何-问题.pdf#page=8 "PDF 章节直达") |
| [1.5 第 14* 题](#问题-15-14) | 三个内积条件确定三个分量 | [PDF 第 8 页](/files/problems/解析几何-问题.pdf#page=8 "PDF 章节直达") |

全文坐标均取实数；涉及外积时采用右手直角坐标系。写成 $(a_1,a_2,a_3)$ 只是列示三个分量，矩阵中仍按列排列。为简化记号，约定

$$
\Delta(a,b,c)=
\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}=[a,b,c].
$$

配图按原显示宽度的一半呈现，可点击查看原尺寸。图像均由所标坐标构造；空间图为投影示意，角度和长度以坐标计算为准。具体示例用于解释几何含义，一般结论由正文证明。

## 问题 1.1 18*

**题目：** 设 $A_1,\ldots,A_n$ 为正 $n$ 边形的顶点，$O$ 为中心。证明从中心到各顶点的位移之和为零。等价地，若 $O=(x_0,y_0)$，$A_k=(x_k,y_k)$，则

$$
\sum_{k=1}^n(x_k-x_0)=0,
\qquad
\sum_{k=1}^n(y_k-y_0)=0.
$$

[![正五边形的五个顶点及中心，旋转一个中心角使各顶点循环置换](/figures/analytic-geometry/ch1-18.svg)](/figures/analytic-geometry/ch1-18.svg)

图中取 $n=5$；旋转一个中心角后，顶点集合不变。奇数边情形不存在逐点的对径配对。

**思路：** 利用旋转使顶点循环置换，把“坐标和不变”写成二元齐次线性方程组。

**证明：** 先在正多边形所在平面内，以 $O$ 为原点建立直角坐标系。记中心角为 $\theta=2\pi/n$，按逆时针顺序编号，并约定 $A_{n+1}=A_1$。平面旋转的坐标公式给出

$$
\begin{aligned}
x_{k+1}&=x_k\cos\theta-y_k\sin\theta,\\
y_{k+1}&=x_k\sin\theta+y_k\cos\theta.
\end{aligned}
$$

令 $S=\sum_{k=1}^n x_k$，$T=\sum_{k=1}^n y_k$。由于循环改变求和次序不改变和，逐式相加得

$$
\begin{cases}
(1-\cos\theta)S+\sin\theta\,T=0,\\
-\sin\theta\,S+(1-\cos\theta)T=0.
\end{cases}
$$

系数行列式为

$$
(1-\cos\theta)^2+\sin^2\theta
=2(1-\cos\theta)>0,
$$

这里用到 $n\ge3$，因而 $0<\theta<2\pi$。故 $S=T=0$。若中心的坐标为 $(x_0,y_0)$，将上述计算用于 $x_k-x_0$、$y_k-y_0$ 即得所求。空间中的正多边形也可在其所在平面建立上述坐标系，垂直于该平面的位移分量全部为零。证毕。

**方法与易错点：** 对称性可以转化为坐标和满足的方程，不需要复数或单位根。只用“相对顶点抵消”只能处理偶数边情形，不能覆盖一般的 $n$。

[返回题目目录](#题目目录)

## 问题 1.1 19*

**题目：** 若集合 $G$ 中任意两点间的线段都包含于 $G$，称 $G$ 为凸集。给定 $m\ge1$ 个点 $A_i=(a_{i1},a_{i2},a_{i3})$，证明所有满足

$$
\begin{aligned}
x_j&=\sum_{i=1}^m k_i a_{ij}\quad(j=1,2,3),\\
k_i&\ge0,\qquad \sum_{i=1}^m k_i=1
\end{aligned}
$$

的点 $(x_1,x_2,x_3)$ 组成的集合 $G$ 是凸的。这是原题“同一起点的向量凸组合的终点集合”的分量表述。

[![四边形内的两点 P、Q 及连接它们的线段，另有一个内部给定点 A5](/figures/analytic-geometry/ch1-19.svg)](/figures/analytic-geometry/ch1-19.svg)

图中五个给定点都在同一平面，$A_5$ 位于内部；线段上的 $R$ 仍在凸组合集合中。证明并不要求给定点共面、互异或处于边界。

**思路：** 任取集合中两点，把连接线段的坐标代入；检验新系数仍然非负且总和为 $1$。

**证明：** 任取 $P=(p_1,p_2,p_3)$、$Q=(q_1,q_2,q_3)$ 属于 $G$。存在系数 $\alpha_i,\beta_i$，使得

$$
\begin{aligned}
p_j&=\sum_{i=1}^m\alpha_i a_{ij},&
q_j&=\sum_{i=1}^m\beta_i a_{ij}\quad(j=1,2,3),\\
\alpha_i&\ge0,&\beta_i&\ge0,\\
\sum_{i=1}^m\alpha_i&=1,&\sum_{i=1}^m\beta_i&=1.
\end{aligned}
$$

线段 $PQ$ 上任意一点的坐标可写为

$$
r_j=(1-t)p_j+tq_j,\qquad 0\le t\le1.
$$

代入并合并同类项，有

$$
r_j=\sum_{i=1}^m\bigl((1-t)\alpha_i+t\beta_i\bigr)a_{ij}.
$$

令 $\gamma_i=(1-t)\alpha_i+t\beta_i$，则

$$
\gamma_i\ge0,
\qquad
\sum_{i=1}^m\gamma_i
=(1-t)\sum_{i=1}^m\alpha_i+t\sum_{i=1}^m\beta_i=1.
$$

所以线段上每一点都属于 $G$，故 $G$ 为凸集。两点重合时线段退化为一点，结论仍然成立。证毕。

**方法与易错点：** 凸组合的凸组合仍是凸组合。系数表示不必唯一；既不应假定这些点仿射无关，也不能遗漏 $0\le t\le1$ 对系数非负性的保证。

[返回题目目录](#题目目录)

## 问题 1.3 16*

**题目：** 证明三个向量 $a,b,c$ 共面的充要条件是

$$
\begin{vmatrix}
a\cdot a&a\cdot b&a\cdot c\\
b\cdot a&b\cdot b&b\cdot c\\
c\cdot a&c\cdot b&c\cdot c
\end{vmatrix}=0.
$$

[![共面和不共面两种分量配置的对照，共面时平行六面体体积退化为零](/figures/analytic-geometry/ch1-gram.svg)](/figures/analytic-geometry/ch1-gram.svg)

左图示例 $a=(1,0,0)$、$b=(0,1,0)$、$c=(1,1,0)$；右图把第三个方向改为 $(0.3,0.2,1)$。右图的平行六面体不退化。

**思路：** 把内积表写成坐标矩阵的转置与自身的乘积，行列式就成为一个平方。

**证明：** 将三个向量的分量排成矩阵

$$
M=\begin{pmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{pmatrix}.
$$

由于 $a\cdot b=\sum_{j=1}^3a_jb_j$，题中的矩阵记为 $G$，则 $G=M^{\mathsf T}M$。因此其行列式为

$$
\det(M^{\mathsf T}M)
=\det(M^{\mathsf T})\det M
=(\det M)^2.
$$

三个向量共面，等价于其分量列所张成的线性空间维数不超过 $2$，也就等价于 $M$ 的三列线性相关，即 $\det M=0$。结合上式，得到所求充要条件。证毕。

**方法与易错点：** “共面”包含共线、零向量等退化情况，不能预先假设任意两个向量线性无关。这个行列式称为 Gram 行列式；在本题中，它等于三条棱所确定的平行六面体体积的平方。

[返回题目目录](#题目目录)

## 问题 1.4 12*

**题目：** 已知 $a\ne0$，求满足 $a\times x=b$ 的点 $P$ 的轨迹。以原题固定起点为坐标原点，记 $P=(x,y,z)$，将条件写成分量即

$$
\begin{cases}
a_2z-a_3y=b_1,\\
a_3x-a_1z=b_2,\\
a_1y-a_2x=b_3.
\end{cases}
$$

[![外积方程的轨迹是一条平行于给定方向的直线，图示 x等于1、y等于0](/figures/analytic-geometry/ch1-cross-locus.svg)](/figures/analytic-geometry/ch1-cross-locus.svg)

图中取 $a=(0,0,2)$、$b=(0,2,0)$，方程化为 $x=1$、$y=0$，$z$ 任意；轨迹与 $z$ 轴平行。

**思路：** 先检查方程组的相容条件，再求一个特解和对应齐次方程组的全部解。

**解：** 令

$$
A=a_1^2+a_2^2+a_3^2>0,
\qquad C=a_1b_1+a_2b_2+a_3b_3.
$$

将原方程依次乘以 $a_1,a_2,a_3$ 后相加，左侧各项抵消，故有解必须满足 $C=0$。因此当 $C\ne0$ 时，轨迹为空集。

设 $C=0$。取

$$
\begin{aligned}
x_0&=\frac{b_2a_3-b_3a_2}{A},\\
y_0&=\frac{b_3a_1-b_1a_3}{A},\\
z_0&=\frac{b_1a_2-b_2a_1}{A}.
\end{aligned}
$$

直接计算第一式可得

$$
\begin{aligned}
a_2z_0-a_3y_0
&=\frac{b_1(a_2^2+a_3^2)-a_1(a_2b_2+a_3b_3)}{A}\\
&=b_1-\frac{a_1C}{A}=b_1.
\end{aligned}
$$

对其余两个下标循环计算，同样得到 $a_3x_0-a_1z_0=b_2$、$a_1y_0-a_2x_0=b_3$，所以 $(x_0,y_0,z_0)$ 是特解。

任一解与此特解之差记为 $(u_1,u_2,u_3)$，则

$$
a_2u_3-a_3u_2=0,\qquad
a_3u_1-a_1u_3=0,\qquad
a_1u_2-a_2u_1=0.
$$

选取一个非零分量 $a_j$，上式给出 $u_i=(u_j/a_j)a_i$，$i=1,2,3$。令 $t=u_j/a_j$，全部解恰为

$$
\boxed{
\begin{cases}
x=x_0+ta_1,\\
y=y_0+ta_2,\\
z=z_0+ta_3,
\end{cases}\qquad t\in\mathbb R.}
$$

反过来，代回原方程，含 $t$ 的项两两抵消，所以每个实数 $t$ 都确实给出一个解。

故当 $C=0$ 时，轨迹是一条方向分量为 $(a_1,a_2,a_3)$ 的直线。若 $b=0$，该直线经过原点；若 $b\ne0$，则不经过原点。此外 $a_1x_0+a_2y_0+a_3z_0=0$，因而

$$
x^2+y^2+z^2=x_0^2+y_0^2+z_0^2+t^2A.
$$

所以图中的 $P_0=(x_0,y_0,z_0)$ 正是直线上距原点最近的点。

**方法与易错点：** 先判相容再参数化；只除以确定非零的 $A$ 或选出的 $a_j$。不能把三个 $a_i$ 都当作非零，也不能把外积次序颠倒，否则特解会差一个负号。

[返回题目目录](#题目目录)

## 问题 1.4 13*

**题目：** 设 $a,b,c$ 均非零，$h\ne0$，求满足 $x\cdot a=h$、$x\times b=c$ 的三个未知分量，并讨论各种情形。

[![外积方程所得直线与内积方程所得平面相交、包含、平行不交的三种情况](/figures/analytic-geometry/ch1-line-plane.svg)](/figures/analytic-geometry/ch1-line-plane.svg)

三图统一取 $b=(0,0,1)$、$c=(0,-1,0)$，外积方程给出直线 $x_1=1$、$x_2=0$。左图与 $x_3=1$ 相交，中图包含于 $x_1=1$，右图与 $x_1=2$ 不相交。

**思路：** 外积条件给出一条直线，再用内积条件检验该直线与一个平面的交点。

**解：** 将两个条件写为

$$
\begin{cases}
a_1x_1+a_2x_2+a_3x_3=h,\\
x_2b_3-x_3b_2=c_1,\\
x_3b_1-x_1b_3=c_2,\\
x_1b_2-x_2b_1=c_3.
\end{cases}
$$

后三式分别乘以 $b_1,b_2,b_3$ 后相加，得必要条件

$$
E=b_1c_1+b_2c_2+b_3c_3=0.
$$

若 $E\ne0$，无解。以下设 $E=0$，并记 $B=b_1^2+b_2^2+b_3^2>0$。取

$$
\begin{aligned}
p_1&=\frac{b_2c_3-b_3c_2}{B},\\
p_2&=\frac{b_3c_1-b_1c_3}{B},\\
p_3&=\frac{b_1c_2-b_2c_1}{B}.
\end{aligned}
$$

例如

$$
p_2b_3-p_3b_2
=c_1-\frac{b_1E}{B}=c_1,
$$

其余两式同理成立。任意两解之差满足与上一题相同形式的齐次方程组，因此外积条件的全部解为

$$
x_i=p_i+tb_i\quad(i=1,2,3),\qquad t\in\mathbb R.
$$

令

$$
D=\sum_{i=1}^3a_ib_i,
\qquad H=\sum_{i=1}^3a_ip_i.
$$

代入第一个方程，剩下的条件恰为 $H+tD=h$。于是全部情形如下。

| 条件 | 解的情况 | 分量表达 |
| --- | --- | --- |
| $E\ne0$ | 无解 | 外积条件本身不相容 |
| $E=0$，$D\ne0$ | 唯一解 | $x_i=p_i+\dfrac{h-H}{D}b_i$，$i=1,2,3$ |
| $E=0$，$D=0$，$H=h$ | 无穷多解 | $x_i=p_i+tb_i$，$t\in\mathbb R$ |
| $E=0$，$D=0$，$H\ne h$ | 无解 | 直线与平面平行且不相交 |

这里 $H$ 完全由已知分量确定，也可写为

$$
H=\frac{
a_1(b_2c_3-b_3c_2)+a_2(b_3c_1-b_1c_3)+a_3(b_1c_2-b_2c_1)
}{B}.
$$

上述分类互斥且穷尽。其充分性来自将相应的 $t$ 代回四个分量方程，所以没有额外的隐含条件。

**方法与易错点：** 外积方程的次序是 $x\times b$，特解的三个分子必须按上式排列。只有确认 $D\ne0$ 才能除以 $D$；$D=0$ 时应再比较 $H$ 与 $h$，不能一概判无解。

[返回题目目录](#题目目录)

## 问题 1.5 7*

**题目：** 证明

$$
\begin{aligned}
(a\times b)\times(c\times d)
&=[a,b,d]c-[a,b,c]d,\\
(a\times b)\times(c\times d)
&=[a,c,d]b-[b,c,d]a.
\end{aligned}
$$

[![两个方向平面相交于一直线，两个法向量的外积同时属于这两个平面](/figures/analytic-geometry/ch1-double-cross.svg)](/figures/analytic-geometry/ch1-double-cross.svg)

图中两平面为 $z=0$ 与 $z=x+y$，分别由 $(1,0,0),(0,1,0)$ 及 $(1,0,1),(0,1,1)$ 张成；交线的方向分量为 $(1,-1,0)$。

**思路：** 把外积写成三个二阶子式，按同一分量收集项，就得到三阶行列式。不需要借用待证的外积恒等式。

**证明：** 对循环排列 $(i,j,k)=(1,2,3),(2,3,1),(3,1,2)$，定义

$$
u_i=a_jb_k-a_kb_j,
\qquad v_i=c_jd_k-c_kd_j,
\qquad w_i=u_jv_k-u_kv_j.
$$

它们依次是 $a\times b$、$c\times d$ 和左侧表达式的第 $i$ 个分量。展开 $v_k,v_j$，得

$$
\begin{aligned}
w_i
&=u_j(c_id_j-c_jd_i)-u_k(c_kd_i-c_id_k)\\
&=c_i(u_jd_j+u_kd_k)-d_i(u_jc_j+u_kc_k)\\
&=c_i\sum_{\ell=1}^3u_\ell d_\ell
  -d_i\sum_{\ell=1}^3u_\ell c_\ell\\
&=\Delta(a,b,d)c_i-\Delta(a,b,c)d_i.
\end{aligned}
$$

第三行补入的两项 $c_iu_id_i$ 与 $d_iu_ic_i$ 相互抵消；最后一行由三阶行列式展开得到。这对三个 $i$ 都成立，证明了第一式。

另一方面，展开 $u_j,u_k$，得到

$$
\begin{aligned}
w_i
&=(a_kb_i-a_ib_k)v_k-(a_ib_j-a_jb_i)v_j\\
&=b_i(a_jv_j+a_kv_k)-a_i(b_jv_j+b_kv_k)\\
&=b_i\sum_{\ell=1}^3a_\ell v_\ell
  -a_i\sum_{\ell=1}^3b_\ell v_\ell\\
&=\Delta(a,c,d)b_i-\Delta(b,c,d)a_i.
\end{aligned}
$$

这同样是三个分量分别相等，故第二式成立。证毕。

**方法与易错点：** 两种展开分别把结果表示在 $c,d$ 与 $a,b$ 所张成的空间中，所以在非退化情形下，结果沿着两个方向平面的交线。证明没有除法，即使某个外积为零或两平面重合，恒等式仍成立；这时不能强行解释为“唯一交线的非零方向”。

[返回题目目录](#题目目录)

## 问题 1.5 8*

**题目：** 证明对任意四个向量，恒有

$$
[b,c,d]a+[c,a,d]b+[a,b,d]c+[b,a,c]d=0.
$$

[![单位立方体中三个坐标方向与体对角方向的分量关系，d的三个分量均为1](/figures/analytic-geometry/ch1-four-vectors.svg)](/figures/analytic-geometry/ch1-four-vectors.svg)

图中示例为 $a=(1,0,0)$、$b=(0,1,0)$、$c=(0,0,1)$、$d=(1,1,1)$，恒等式化为每个分量上的 $a_i+b_i+c_i-d_i=0$。

**思路：** “四组三维分量”自然对应一个四阶行列式；在分量矩阵上重复一行，就得到恒为零的行列式。

**证明：** 对任意 $i\in\{1,2,3\}$，考虑

$$
D_i=
\begin{vmatrix}
a_i&b_i&c_i&d_i\\
a_1&b_1&c_1&d_1\\
a_2&b_2&c_2&d_2\\
a_3&b_3&c_3&d_3
\end{vmatrix}.
$$

第一行与下方某一行相同，故 $D_i=0$。沿第一行展开，得到

$$
\Delta(b,c,d)a_i-\Delta(a,c,d)b_i
+\Delta(a,b,d)c_i-\Delta(a,b,c)d_i=0.
$$

再由交换行列式的两列改变符号，有

$$
\Delta(c,a,d)=-\Delta(a,c,d),
\qquad
\Delta(b,a,c)=-\Delta(a,b,c).
$$

代入即得

$$
\Delta(b,c,d)a_i+\Delta(c,a,d)b_i
+\Delta(a,b,d)c_i+\Delta(b,a,c)d_i=0.
$$

三个分量都为零，故原恒等式成立。证毕。

**方法与易错点：** 仅说“四个三维向量线性相关”，不能说明题中指定的系数恰好满足关系；重复行行列式同时给出了具体系数和正确符号。若所有三阶行列式均为零，这个等式变成 $0=0$，仍然正确，但此时它没有提供一组不全为零的线性关系系数。

[返回题目目录](#题目目录)

## 问题 1.5 14*

**题目：** 设 $a,b,c$ 不共面，且 $a\cdot x=f$、$b\cdot x=g$、$c\cdot x=h$。证明

$$
x=\frac{f(b\times c)+g(c\times a)+h(a\times b)}{[a,b,c]}.
$$

下面给出该公式的三个分量，并证明解的唯一性。

[![三个独立平面相交于唯一一点，图示交点坐标为1、1、1](/figures/analytic-geometry/ch1-three-planes.svg)](/figures/analytic-geometry/ch1-three-planes.svg)

图中三个平面为 $x+y=2$、$y+z=2$、$z+x=2$，交点是 $(1,1,1)$。其法向分量组成的系数矩阵行列式为 $2$。

**思路：** 三个内积条件就是一个三元一次方程组；不共面保证系数行列式非零，直接使用克拉默法则。

**证明：** 设未知分量为 $(x_1,x_2,x_3)$。原条件等价于

$$
\begin{pmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{pmatrix}
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=
\begin{pmatrix}f\\g\\h\end{pmatrix}.
$$

系数行列式为

$$
D=
\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}
=\Delta(a,b,c)\ne0.
$$

这里的相等利用了转置不改变行列式。由克拉默法则，方程组存在唯一解，且

$$
\begin{aligned}
x_1&=\frac1D
\begin{vmatrix}f&a_2&a_3\\g&b_2&b_3\\h&c_2&c_3\end{vmatrix},\\
x_2&=\frac1D
\begin{vmatrix}a_1&f&a_3\\b_1&g&b_3\\c_1&h&c_3\end{vmatrix},\\
x_3&=\frac1D
\begin{vmatrix}a_1&a_2&f\\b_1&b_2&g\\c_1&c_2&h\end{vmatrix}.
\end{aligned}
$$

分别沿替换后的列展开，得到

$$
\begin{aligned}
x_1&=\frac{f(b_2c_3-b_3c_2)+g(c_2a_3-c_3a_2)+h(a_2b_3-a_3b_2)}{D},\\
x_2&=\frac{f(b_3c_1-b_1c_3)+g(c_3a_1-c_1a_3)+h(a_3b_1-a_1b_3)}{D},\\
x_3&=\frac{f(b_1c_2-b_2c_1)+g(c_1a_2-c_2a_1)+h(a_1b_2-a_2b_1)}{D}.
\end{aligned}
$$

三个分子中，$f$、$g$、$h$ 的系数分别就是 $b\times c$、$c\times a$、$a\times b$ 的对应分量，因而这三个标量等式恰为原题公式。证毕。

**方法与易错点：** 条件“不共面”用于保证 $D\ne0$，不能省略。该公式就是克拉默法则的分量整理，不需要另外记忆；展开第二列时尤其要注意代数余子式的正负号。

[返回题目目录](#题目目录)

## 本章方法归纳

| 题目类型 | 通用做法 | 必须检查的条件 |
| --- | --- | --- |
| 对称点集的坐标和 | 把对称变换写成坐标方程 | 是否覆盖奇数边及任意初始位置 |
| 凸性证明 | 参数化线段，重组系数 | 系数非负，总和为 $1$ |
| 共面与内积表 | 坐标矩阵及其行列式 | 包含零向量、共线等退化情形 |
| 外积方程与轨迹 | 分量方程、相容条件、特解加齐次解 | 先判有解，再除以非零量 |
| 复合外积恒等式 | 循环下标逐分量展开 | 外积次序与行列式符号 |
| 给定系数的线性关系 | 重复行行列式展开 | 不以“维数不足”代替系数验证 |
| 三个内积条件 | 三元一次方程组与克拉默法则 | 系数行列式非零 |

[返回解析几何习题](/problems/collections/analytic-geometry/) · [返回题目目录](#题目目录)
