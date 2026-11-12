---
title: "丘维声解析几何：第1、2、3、5章定理与结论图解汇总"
description: "逐节汇总定理、命题、推论与正文结论，保留教材符号、原页码和非三角函数直母线参数；附可下载PDF。第四章不录入。"
attachment: "notes/qiu-analytic-geometry-summary.pdf"
subject: "解析几何"
tags: [解析几何, 丘维声, 定理汇总, 向量, 平面与直线, 二次曲面, 二次曲线, 图解]
created_at: "2026-11-12"
updated_at: "2026-11-12"
---


依据丘维声《解析几何（第三版）》第1、2、3、5章整理，第四章不录入。逐节汇总正文中的定理、命题、推论、性质、定义及一般性公式，保留第五章的选学内容；不抄录证明过程和数值例题解答。第一章例题中的 Menelaus、Ceva 等一般性定理也列入；另附教材习题中的两组直母线一般性质，并单独标明来源。

每一条标明原书章节、印刷页码及已有的定理编号。本册采用“章.节.条”的独立检索编号，不能将它当作教材定理编号。相互关联的结论共用一幅图，并标明图号；具体尺寸与颜色只用于示意。

符号沿用教材：点坐标写作 $(x,y,z)^{\mathrm T}$，空间直线方向系数用 $(X,Y,Z)^{\mathrm T}$，平面方向用 $(\mu,\nu)^{\mathrm T}$。第一章保留向量运算所需的粗体字母，其余位置方程尽量展开为坐标分量。长度、角度和法向量的坐标公式须在直角坐标系中使用；外积的通常分量式须采用右手直角坐标系。

直母线完全采用代数参数：单叶双曲面使用教材齐次参数 $(\mu,\nu)\ne(0,0)$，双曲抛物面使用实参数 $\lambda$。不使用三角函数参数化母线，并保留齐次参数为零所对应的成员。

共 **160 条、47 幅图**。可通过页面的下载按钮保存同内容PDF，PDF带目录和书签。

## 第一章 几何空间的线性结构和度量结构

### 1.1 向量及其线性运算

#### 1.1.1 向量、零向量与单位向量

教材第1章§1，p.1–2

向量由长度和方向确定；长度相等且方向相同的有向线段表示同一向量，因而向量可以平行移动。向量 $\mathbf a$ 的长度记为 $|\mathbf a|$。零向量记为 $\mathbf0$，其长度为零，方向不确定；长度为 $1$ 的向量称为单位向量。非零向量 $\mathbf a$ 同向的单位向量记为 $\mathbf a^0$。与 $\mathbf a$ 等长而反向的向量为 $-\mathbf a$。

#### 1.1.2 向量加法与运算律

教材第1章§1，定义1.1及正文，p.2–3；图1

首尾相接的有向线段满足三角形法则

$$
\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.
$$

同起点的两个向量之和是以它们为邻边的平行四边形从公共起点出发的对角向量。对任意向量 $\mathbf a,\mathbf b,\mathbf c$，

$$
\begin{gathered}(\mathbf a+\mathbf b)+\mathbf c=\mathbf a+(\mathbf b+\mathbf c),\qquad \mathbf a+\mathbf b=\mathbf b+\mathbf a,\\ \mathbf a+\mathbf0=\mathbf a,\qquad \mathbf a+(-\mathbf a)=\mathbf0.\end{gathered}
$$

[![图1：三角形法则与平行四边形法则；虚线表示平移后的向量。](/figures/analytic-geometry/theorems/ch1-addition.svg)](/figures/analytic-geometry/theorems/ch1-addition.svg)

图1：三角形法则与平行四边形法则；虚线表示平移后的向量。

#### 1.1.3 向量减法与三角不等式

教材第1章§1，定义1.2及正文，p.4

定义 $\mathbf a-\mathbf b=\mathbf a+(-\mathbf b)$。若 $\overrightarrow{OA}=\mathbf a$、$\overrightarrow{OB}=\mathbf b$，则 $\mathbf a-\mathbf b=\overrightarrow{BA}$。任意向量满足

$$
|\mathbf a+\mathbf b|\leq |\mathbf a|+|\mathbf b|.
$$

#### 1.1.4 数量乘法与单位化

教材第1章§1，定义1.3及正文，p.4–6

对实数 $\lambda$，有 $|\lambda\mathbf a|=|\lambda|\,|\mathbf a|$；当 $\mathbf a\ne\mathbf0$ 时，$\lambda>0$ 给出同向向量，$\lambda<0$ 给出反向向量。规定 $0\mathbf a=\mathbf0$、$\lambda\mathbf0=\mathbf0$。对任意实数 $\lambda,\mu$ 及向量 $\mathbf a,\mathbf b$，

$$
\begin{gathered}1\mathbf a=\mathbf a,\quad (-1)\mathbf a=-\mathbf a,\quad \lambda(\mu\mathbf a)=(\lambda\mu)\mathbf a,\\ (\lambda+\mu)\mathbf a=\lambda\mathbf a+\mu\mathbf a,\qquad \lambda(\mathbf a+\mathbf b)=\lambda\mathbf a+\lambda\mathbf b.\end{gathered}
$$

若 $\mathbf a\ne\mathbf0$，则 $\mathbf a^0=|\mathbf a|^{-1}\mathbf a$，亦即 $\mathbf a=|\mathbf a|\mathbf a^0$。

#### 1.1.5 线性组合与共线、共面

教材第1章§1，定义1.4及正文，p.6

向量的加法与数量乘法统称为线性运算。对实数 $k_1,\ldots,k_n$，向量 $k_1\mathbf a_1+\cdots+k_n\mathbf a_n$ 称为 $\mathbf a_1,\ldots,\mathbf a_n$ 的线性组合。将一组向量移到同一起点后，若其代表线段在一条直线或一个平面内，便称它们共线或共面。零向量与任一向量共线；共线向量组必共面；任意两个向量共面；若 $\mathbf a=\lambda\mathbf b$，则 $\mathbf a,\mathbf b$ 共线。

#### 1.1.6 非零共线向量的唯一数乘表示

教材第1章§1，命题1.1，p.6

若 $\mathbf a,\mathbf b$ 共线且 $\mathbf a\ne\mathbf0$，则存在唯一实数 $\lambda$，使

$$
\mathbf b=\lambda\mathbf a.
$$

其中 $\mathbf b=\mathbf0$ 时 $\lambda=0$；非零时同向取正号，反向取负号。

#### 1.1.7 两向量共线的线性关系判据

教材第1章§1，命题1.2，p.6–7

向量 $\mathbf a,\mathbf b$ 共线，当且仅当存在不全为零的实数 $\lambda,\mu$，使

$$
\lambda\mathbf a+\mu\mathbf b=\mathbf0.
$$

判据也适用于其中一个或两个向量为零的情形。

#### 1.1.8 两向量不共线的判据

教材第1章§1，推论1.1，p.7

向量 $\mathbf a,\mathbf b$ 不共线，当且仅当

$$
\lambda\mathbf a+\mu\mathbf b=\mathbf0\quad\Longrightarrow\quad\lambda=\mu=0.
$$

#### 1.1.9 两个向量的线性组合必与其共面

教材第1章§1，命题1.3，p.7

若 $\mathbf c=\lambda\mathbf a+\mu\mathbf b$，其中 $\lambda,\mu\in\mathbb R$，则 $\mathbf a,\mathbf b,\mathbf c$ 共面；若 $\mathbf a,\mathbf b$ 已共线，则三者还共线。

#### 1.1.10 共面向量关于两个不共线向量的唯一分解

教材第1章§1，命题1.4，p.7–8；图2

若 $\mathbf a,\mathbf b,\mathbf c$ 共面，且 $\mathbf a,\mathbf b$ 不共线，则存在唯一一对实数 $\lambda,\mu$，使

$$
\mathbf c=\lambda\mathbf a+\mu\mathbf b.
$$

[![图2：共面向量沿两个不共线方向的分解；基向量无需互相垂直。](/figures/analytic-geometry/theorems/ch1-planar-decomposition.svg)](/figures/analytic-geometry/theorems/ch1-planar-decomposition.svg)

图2：共面向量沿两个不共线方向的分解；基向量无需互相垂直。

#### 1.1.11 三向量共面的线性关系判据

教材第1章§1，命题1.5，p.8

向量 $\mathbf a,\mathbf b,\mathbf c$ 共面，当且仅当存在不全为零的实数 $k_1,k_2,k_3$，使

$$
k_1\mathbf a+k_2\mathbf b+k_3\mathbf c=\mathbf0.
$$

包括出现零向量、两向量共线等退化情形。

#### 1.1.12 三向量不共面的判据

教材第1章§1，推论1.2，p.8

向量 $\mathbf a,\mathbf b,\mathbf c$ 不共面，当且仅当

$$
k_1\mathbf a+k_2\mathbf b+k_3\mathbf c=\mathbf0\quad\Longrightarrow\quad k_1=k_2=k_3=0.
$$

#### 1.1.13 线段上的点的向量表示

教材第1章§1，例1.1的一般性结论，p.8–9

任取定点 $O$。点 $M$ 在线段 $AB$ 上（包括端点），当且仅当存在实数 $\lambda,\mu\geq0$，使

$$
\overrightarrow{OM}=\lambda\overrightarrow{OA}+\mu\overrightarrow{OB},\qquad\lambda+\mu=1.
$$

等价地，$\overrightarrow{AM}=t\overrightarrow{AB}$，其中 $0\leq t\leq1$。当 $A=B$ 时，该条件仍恰好给出 $M=A$。

#### 1.1.14 三点共线的向量关系判据

教材第1章§1，例1.2的一般性结论，p.9

任取定点 $O$。三点 $A,B,C$ 共线，当且仅当存在不全为零的实数 $\lambda,\mu,\nu$，使

$$
\lambda\overrightarrow{OA}+\mu\overrightarrow{OB}+\nu\overrightarrow{OC}=\mathbf0,\qquad \lambda+\mu+\nu=0.
$$

判据也包括有两点或三点重合的情形。

### 1.2 几何空间的线性结构

#### 1.2.1 几何空间的基与唯一分解定理

教材第1章§2，定理2.1、定义2.1，p.12–13；图3

给定三个不共面向量 $\mathbf d_1,\mathbf d_2,\mathbf d_3$，每一向量 $\mathbf m$ 均可唯一写成

$$
\mathbf m=x\mathbf d_1+y\mathbf d_2+z\mathbf d_3,\qquad x,y,z\in\mathbb R.
$$

这个有序向量组称为几何空间的一组基，$(x,y,z)^T$ 称为 $\mathbf m$ 在该基下的坐标。顺序属于基的组成部分。

[![图3：非正交基下的空间分解：三条基方向不共面，向量的三个系数唯一。](/figures/analytic-geometry/theorems/ch1-affine-basis.svg)](/figures/analytic-geometry/theorems/ch1-affine-basis.svg)

图3：非正交基下的空间分解：三条基方向不共面，向量的三个系数唯一。

#### 1.2.2 仿射标架与点坐标

教材第1章§2，定义2.2及正文，p.13–14

选定原点 $O$ 和一组基 $\mathbf d_1,\mathbf d_2,\mathbf d_3$，便得到仿射标架 $[O;\mathbf d_1,\mathbf d_2,\mathbf d_3]$。点 $M$ 的坐标规定为其定位向量 $\overrightarrow{OM}$ 的坐标，即

$$
M(x,y,z)^T\quad\Longleftrightarrow\quad\overrightarrow{OM}=x\mathbf d_1+y\mathbf d_2+z\mathbf d_3.
$$

标架固定后，空间中的点与实数三元数组一一对应，空间中的向量与实数三元数组也一一对应。

#### 1.2.3 坐标平面、卦限与坐标系定向

教材第1章§2，正文及表1-1，p.14–15

分别沿 $\mathbf d_1,\mathbf d_2,\mathbf d_3$ 的三条坐标轴为 $x,y,z$ 轴；坐标平面 $Oxy,Oyz,Ozx$ 的点分别满足 $z=0,x=0,y=0$。不在坐标平面上的点分属八个卦限，其坐标符号依次为

$$
\begin{array}{c|rrrrrrrr}\text{卦限}&\mathrm I&\mathrm {II}&\mathrm {III}&\mathrm {IV}&\mathrm V&\mathrm {VI}&\mathrm {VII}&\mathrm {VIII}\\\hline x&+&-&-&+&+&-&-&+\\y&+&+&-&-&+&+&-&-\\z&+&+&+&+&-&-&-&-\end{array}
$$

右手四指由 $x$ 轴弯向 $y$ 轴（转角小于 $\pi$）时，若拇指与 $z$ 轴位于 $Oxy$ 平面同侧，称为右手坐标系；否则为左手坐标系。

#### 1.2.4 直角坐标系

教材第1章§2，定义2.3，p.15

当基向量 $\mathbf e_1,\mathbf e_2,\mathbf e_3$ 是两两垂直的单位向量时，仿射标架 $[O;\mathbf e_1,\mathbf e_2,\mathbf e_3]$ 称为直角坐标系。直角坐标系是仿射坐标系的特殊情形；涉及长度、角度的简单坐标公式须注意这一附加条件。

#### 1.2.5 线性运算的坐标表示

教材第1章§2，正文，p.15–16

在同一仿射标架下，若 $\mathbf a,\mathbf b$ 的坐标分别为 $(a_1,a_2,a_3)^T,(b_1,b_2,b_3)^T$，则

$$
\begin{aligned}\mathbf a+\mathbf b&\longleftrightarrow(a_1+b_1,a_2+b_2,a_3+b_3)^T,\\ \mathbf a-\mathbf b&\longleftrightarrow(a_1-b_1,a_2-b_2,a_3-b_3)^T,\\ \lambda\mathbf a&\longleftrightarrow(\lambda a_1,\lambda a_2,\lambda a_3)^T.\end{aligned}
$$

这些公式不要求基向量正交或为单位向量。

#### 1.2.6 两点所确定向量的坐标

教材第1章§2，定理2.2，p.16

向量的坐标等于终点坐标减去起点坐标。在任一仿射标架下，若 $A(x_1,y_1,z_1)^T$、$B(x_2,y_2,z_2)^T$，则

$$
\overrightarrow{AB}\longleftrightarrow(x_2-x_1,y_2-y_1,z_2-z_1)^T.
$$

#### 1.2.7 平面两向量共线的行列式判据

教材第1章§2，命题2.1，p.16

平面上两向量 $\mathbf a,\mathbf b$ 在同一仿射基下的坐标分别为 $(a_1,a_2)^T,(b_1,b_2)^T$，则

$$
\mathbf a,\mathbf b\text{ 共线}\quad\Longleftrightarrow\quad \begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}=0.
$$

此式无需除以坐标分量，故包括零向量及分量为零的情形。

#### 1.2.8 平面三点共线的行列式判据

教材第1章§2，命题2.2，p.16–17

在三点所在平面选取仿射标架，设 $A,B,C$ 的坐标分别为 $(x_1,y_1)^T,(x_2,y_2)^T,(x_3,y_3)^T$，则

$$
A,B,C\text{ 共线}\quad\Longleftrightarrow\quad\begin{vmatrix}x_1&x_2&x_3\\y_1&y_2&y_3\\1&1&1\end{vmatrix}=0.
$$

允许点重合。

#### 1.2.9 空间两向量共线的三个子式判据

教材第1章§2，命题2.3，p.17–18

在任一空间仿射标架下，向量 $\mathbf a,\mathbf b$ 的坐标为 $(a_1,a_2,a_3)^T,(b_1,b_2,b_3)^T$。二者共线，当且仅当

$$
\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}=\begin{vmatrix}a_1&b_1\\a_3&b_3\end{vmatrix}=\begin{vmatrix}a_2&b_2\\a_3&b_3\end{vmatrix}=0.
$$

包括零向量情形，不能用分量比值相等而忽略零分母。

#### 1.2.10 定比分点公式

教材第1章§2，命题2.4及定比约定，p.18；图4

设 $A\ne B$，若 $\overrightarrow{AC}=\lambda\overrightarrow{CB}$，称 $C$ 分线段 $AB$ 成定比 $\lambda$。必有 $\lambda\ne-1$：$\lambda>0$ 时内分，$\lambda<0$ 时外分，$\lambda=0$ 时 $C=A$。在任一仿射标架中，若 $A(x_1,y_1,z_1)^T$、$B(x_2,y_2,z_2)^T$，则

$$
C\left(\frac{x_1+\lambda x_2}{1+\lambda},\frac{y_1+\lambda y_2}{1+\lambda},\frac{z_1+\lambda z_2}{1+\lambda}\right)^T.
$$

有限的 $\lambda$ 不表示点 $B$。

[![图4：定比采用教材的有向向量约定：$\overrightarrow{AC}=\lambda\overrightarrow{CB}$；正比内分，负比外分。](/figures/analytic-geometry/theorems/ch1-section-ratio.svg)](/figures/analytic-geometry/theorems/ch1-section-ratio.svg)

图4：定比采用教材的有向向量约定：$\overrightarrow{AC}=\lambda\overrightarrow{CB}$；正比内分，负比外分。

#### 1.2.11 中点坐标公式

教材第1章§2，推论2.1，p.18–19

两点 $A(x_1,y_1,z_1)^T,B(x_2,y_2,z_2)^T$ 的中点坐标为

$$
\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)^T.
$$

该公式适用于任意仿射标架，也适用于 $A=B$。

#### 1.2.12 四面体对棱中点连线共点

教材第1章§2，例2.1及其注，p.19–20；图5

四面体三组对棱的中点连线交于一点；该点同时为三条连线各自的中点。若四个顶点的定位向量为 $\overrightarrow{OA},\overrightarrow{OB},\overrightarrow{OC},\overrightarrow{OD}$，则公共点 $M$ 满足

$$
\overrightarrow{OM}=\frac14\left(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}\right).
$$

因此在任一仿射标架中，其每个坐标均为四个顶点相应坐标的平均值。

[![图5：四面体三组对棱中点的连线具有同一个中点。](/figures/analytic-geometry/theorems/ch1-tetra-midpoints.svg)](/figures/analytic-geometry/theorems/ch1-tetra-midpoints.svg)

图5：四面体三组对棱中点的连线具有同一个中点。

#### 1.2.13 门内劳斯定理

教材第1章§2，例2.2（Menelaus定理），p.20–21；图6

设 $A,B,C$ 不共线，点 $P,Q,R$ 分别分边 $AB,BC,CA$ 成定比 $\lambda,\mu,\nu$，即

$$
\overrightarrow{AP}=\lambda\overrightarrow{PB},\quad\overrightarrow{BQ}=\mu\overrightarrow{QC},\quad\overrightarrow{CR}=\nu\overrightarrow{RA},\qquad \lambda,\mu,\nu\ne-1.
$$

允许外分，则

$$
P,Q,R\text{ 共线}\quad\Longleftrightarrow\quad\lambda\mu\nu=-1.
$$

[![图6：左：门内劳斯定理，三分点共线；右：切瓦定理，三个内分点的对顶点连线共点。](/figures/analytic-geometry/theorems/ch1-menelaus-ceva.svg)](/figures/analytic-geometry/theorems/ch1-menelaus-ceva.svg)

图6：左：门内劳斯定理，三分点共线；右：切瓦定理，三个内分点的对顶点连线共点。

#### 1.2.14 切瓦定理

教材第1章§2，例2.3（Ceva定理）及正文，p.21–22

设 $A,B,C$ 不共线，点 $P,Q,R$ 分别内分 $AB,BC,CA$ 成定比 $\lambda,\mu,\nu$，沿用 $\overrightarrow{AP}=\lambda\overrightarrow{PB}$ 等约定，此时 $\lambda,\mu,\nu>0$。则

$$
AQ,BR,CP\text{ 共点}\quad\Longleftrightarrow\quad\lambda\mu\nu=1.
$$

取 $\lambda=\mu=\nu=1$，即得三角形三条中线共点。内分条件保证三条直线讨论的是有限交点。

### 1.3 向量的内积

#### 1.3.1 内射影、外射影与分量

教材第1章§3，正文，p.24–25；图7

给定单位向量 $\mathbf e$，任一向量 $\mathbf a$ 可唯一分解为

$$
\mathbf a=\mathbf a_1+\mathbf a_2,\qquad \mathbf a_1\parallel\mathbf e,\qquad\mathbf a_2\perp\mathbf e.
$$

$\mathbf a_1$ 称为沿 $\mathbf e$ 的内射影，记为 $\mathcal P_{\mathbf e}(\mathbf a)$；$\mathbf a_2$ 称为沿 $\mathbf e$ 的外射影。唯一实数 $\mu$ 使 $\mathbf a_1=\mu\mathbf e$，称为 $\mathbf a$ 在方向 $\mathbf e$ 上的分量，记作 $\Pi_{\mathbf e}(\mathbf a)$。内射影是向量，分量是有正负号的实数。

[![图7：向量的内射影与外射影：实线箭头为 $\mathbf a,\mathbf a_1$，虚线箭头为平移后的 $\mathbf a_2$；分量是 $\mathbf a_1$ 沿单位方向 $\mathbf e$ 的带符号长度。](/figures/analytic-geometry/theorems/ch1-projection.svg)](/figures/analytic-geometry/theorems/ch1-projection.svg)

图7：向量的内射影与外射影：实线箭头为 $\mathbf a,\mathbf a_1$，虚线箭头为平移后的 $\mathbf a_2$；分量是 $\mathbf a_1$ 沿单位方向 $\mathbf e$ 的带符号长度。

#### 1.3.2 内射影的线性性质

教材第1章§3，命题3.1，p.24–25

对固定单位向量 $\mathbf e$、任意向量 $\mathbf a,\mathbf b$ 和任意实数 $\lambda$，有

$$
\mathcal P_{\mathbf e}(\mathbf a+\mathbf b)=\mathcal P_{\mathbf e}(\mathbf a)+\mathcal P_{\mathbf e}(\mathbf b),\qquad\mathcal P_{\mathbf e}(\lambda\mathbf a)=\lambda\mathcal P_{\mathbf e}(\mathbf a).
$$

#### 1.3.3 分量的长度—夹角公式

教材第1章§3，命题3.2，p.25

对单位向量 $\mathbf e$ 及非零向量 $\mathbf a$，

$$
\Pi_{\mathbf e}(\mathbf a)=|\mathbf a|\cos\langle\mathbf a,\mathbf e\rangle.
$$

其正负分别对应夹角为锐角或钝角；垂直时为零。$\mathbf a=\mathbf0$ 时分量直接定义为零，无须给零向量规定夹角。

#### 1.3.4 内射影与分量的关系

教材第1章§3，命题3.3，p.25

对任意向量 $\mathbf a$ 及单位向量 $\mathbf e$，

$$
\mathcal P_{\mathbf e}(\mathbf a)=\Pi_{\mathbf e}(\mathbf a)\mathbf e.
$$

#### 1.3.5 分量的线性性质

教材第1章§3，命题3.4，p.26

对固定单位向量 $\mathbf e$、任意向量 $\mathbf a,\mathbf b$ 和实数 $\lambda$，有

$$
\Pi_{\mathbf e}(\mathbf a+\mathbf b)=\Pi_{\mathbf e}(\mathbf a)+\Pi_{\mathbf e}(\mathbf b),\qquad\Pi_{\mathbf e}(\lambda\mathbf a)=\lambda\Pi_{\mathbf e}(\mathbf a).
$$

#### 1.3.6 内积及其几何计算公式

教材第1章§3，定义3.1及正文，p.23、26

非零向量的内积定义为

$$
\mathbf a\cdot\mathbf b=|\mathbf a|\,|\mathbf b|\cos\langle\mathbf a,\mathbf b\rangle;
$$

任一向量为零时，规定内积为零。对 $\mathbf b\ne\mathbf0$，

$$
\mathbf a\cdot\mathbf b=|\mathbf b|\,\Pi_{\mathbf b^0}(\mathbf a).
$$

于是 $|\mathbf a|=\sqrt{\mathbf a\cdot\mathbf a}$；对两非零向量，

$$
\cos\langle\mathbf a,\mathbf b\rangle=\frac{\mathbf a\cdot\mathbf b}{|\mathbf a|\,|\mathbf b|}.
$$

两向量垂直的充分必要条件为 $\mathbf a\cdot\mathbf b=0$，其中按教材约定，零向量与任一向量垂直。教材引入内积的力学背景为：恒力 $\mathbf F$ 使质点产生位移 $\mathbf S$ 时，功为 $W=\mathbf F\cdot\mathbf S=|\mathbf F|\,|\mathbf S|\cos\langle\mathbf F,\mathbf S\rangle$。

#### 1.3.7 内积的运算规律

教材第1章§3，定理3.1，p.26–27

对任意向量 $\mathbf a,\mathbf b,\mathbf c$ 和实数 $\lambda$，

$$
\begin{gathered}\mathbf a\cdot\mathbf b=\mathbf b\cdot\mathbf a,\\(\lambda\mathbf a)\cdot\mathbf b=\lambda(\mathbf a\cdot\mathbf b)=\mathbf a\cdot(\lambda\mathbf b),\\(\mathbf a+\mathbf b)\cdot\mathbf c=\mathbf a\cdot\mathbf c+\mathbf b\cdot\mathbf c,\\\mathbf a\cdot\mathbf a\geq0,\qquad\mathbf a\cdot\mathbf a=0\Longleftrightarrow\mathbf a=\mathbf0.\end{gathered}
$$

由交换律也得到对第二个变量的加法分配律。

#### 1.3.8 三角形三条高共点

教材第1章§3，例3.1的一般性结论，p.27；图8

非退化三角形的三条高所在的直线交于一点。该点称为垂心；结论适用于锐角、直角、钝角三角形，高线允许延长到三角形外部。

[![图8：以锐角三角形为示意，三条高交于同一点 M；一般结论同样适用于直角和钝角三角形。](/figures/analytic-geometry/theorems/ch1-orthocenter.svg)](/figures/analytic-geometry/theorems/ch1-orthocenter.svg)

图8：以锐角三角形为示意，三条高交于同一点 M；一般结论同样适用于直角和钝角三角形。

#### 1.3.9 仿射坐标中的内积

教材第1章§3，正文，p.27–28

在任意仿射基 $\mathbf d_1,\mathbf d_2,\mathbf d_3$ 下，设 $\mathbf a=\sum_{i=1}^3a_i\mathbf d_i$、$\mathbf b=\sum_{j=1}^3b_j\mathbf d_j$，则

$$
\mathbf a\cdot\mathbf b=\sum_{i=1}^3\sum_{j=1}^3a_i b_j(\mathbf d_i\cdot\mathbf d_j).
$$

这些基向量之间的内积称为仿射标架的度量参数。因此内积由坐标和度量参数共同确定；由于 $\mathbf d_i\cdot\mathbf d_j=\mathbf d_j\cdot\mathbf d_i$，九个基内积中只须知道六个。

#### 1.3.10 直角坐标中的内积、长度与距离

教材第1章§3，定理3.2及公式（3.11）–（3.14），p.28

在直角坐标系 $[O;\mathbf e_1,\mathbf e_2,\mathbf e_3]$ 中，$\mathbf a,\mathbf b$ 的坐标分别为 $(a_1,a_2,a_3)^T,(b_1,b_2,b_3)^T$，则

$$
\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3,\qquad a_i=\mathbf a\cdot\mathbf e_i,\qquad |\mathbf a|=\sqrt{a_1^2+a_2^2+a_3^2}.
$$

若 $A(x_1,y_1,z_1)^T$、$B(x_2,y_2,z_2)^T$，则

$$
|\overrightarrow{AB}|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

这些简单坐标公式要求坐标系为直角坐标系；不要求其一定为右手系。

#### 1.3.11 方向角与方向余弦

教材第1章§3，正文，p.28–29

设非零向量 $\mathbf a$ 在直角坐标系中的坐标为 $(a_1,a_2,a_3)^T$，与三个正坐标轴的夹角分别为 $\alpha,\beta,\gamma$。则

$$
\cos\alpha=\frac{a_1}{|\mathbf a|},\quad\cos\beta=\frac{a_2}{|\mathbf a|},\quad\cos\gamma=\frac{a_3}{|\mathbf a|},\qquad\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.
$$

单位向量 $\mathbf a^0$ 的坐标即 $(\cos\alpha,\cos\beta,\cos\gamma)^T$。零向量不定义方向角或方向余弦。

### 1.4 向量的外积

#### 1.4.1 外积、共线判据与面积

教材第1章§4，定义4.1及正文，p.30–31；图9

两非零向量的外积 $\mathbf a\times\mathbf b$ 的长度为

$$
|\mathbf a\times\mathbf b|=|\mathbf a|\,|\mathbf b|\sin\langle\mathbf a,\mathbf b\rangle.
$$

外积非零时，其方向同时垂直于 $\mathbf a,\mathbf b$，并使 $(\mathbf a,\mathbf b,\mathbf a\times\mathbf b)$ 成右手系。若任一向量为零，规定外积为零。于是

$$
\mathbf a\times\mathbf b=\mathbf0\quad\Longleftrightarrow\quad\mathbf a,\mathbf b\text{ 共线}.
$$

外积的长度等于以 $\mathbf a,\mathbf b$ 为邻边的平行四边形的面积；共线时面积为零。相应力学背景为：作用于点 $A$ 的力 $\mathbf F$ 对支点 $O$ 的力矩为 $\mathbf M=\overrightarrow{OA}\times\mathbf F$，其大小为 $ |\mathbf F|\,|\overrightarrow{OA}|\sin\langle\mathbf F,\overrightarrow{OA}\rangle$。

[![图9：外积垂直于两向量所在平面，按右手规则定向；其长度等于阴影平行四边形的面积。](/figures/analytic-geometry/theorems/ch1-cross-product.svg)](/figures/analytic-geometry/theorems/ch1-cross-product.svg)

图9：外积垂直于两向量所在平面，按右手规则定向；其长度等于阴影平行四边形的面积。

#### 1.4.2 平面定向与定向面积

教材第1章§4，正文及公式（4.2），p.31–33

平面的一个定向可由一对有序不共线向量给出，亦可由相应的单位法向量 $\mathbf e$ 给出；改为 $-\mathbf e$ 就反转定向。固定 $\mathbf e$ 后，教材以 $(\mathbf a,\mathbf b)$ 表示平面内以 $\mathbf a,\mathbf b$ 为邻边、按 $\mathbf a\times\mathbf b$ 定向的平行四边形的定向面积，则

$$
\mathbf a\times\mathbf b=(\mathbf a,\mathbf b)\mathbf e,\qquad |(\mathbf a,\mathbf b)|=|\mathbf a\times\mathbf b|.
$$

外积与 $\mathbf e$ 同向时定向面积为正，反向时为负；共线时为零。

#### 1.4.3 外积只取决于垂直分量

教材第1章§4，命题4.1，p.33

若 $\mathbf a\ne\mathbf0$，将 $\mathbf b=\mathbf b_1+\mathbf b_2$ 分解为 $\mathbf b_1\parallel\mathbf a$、$\mathbf b_2\perp\mathbf a$，则

$$
\mathbf a\times\mathbf b=\mathbf a\times\mathbf b_2.
$$

其中 $\mathbf b_2$ 为沿 $\mathbf a$ 方向的外射影；$\mathbf b$ 与 $\mathbf a$ 共线时两边均为零。

#### 1.4.4 单位轴向量的外积表示直角旋转

教材第1章§4，命题4.2，p.33–34

设 $\mathbf e$ 为单位向量，$\mathbf b\perp\mathbf e$。则 $\mathbf e\times\mathbf b$ 是将 $\mathbf b$ 按右手螺旋规则绕 $\mathbf e$ 旋转 $90^\circ$ 所得的向量，且长度仍为 $|\mathbf b|$。$\mathbf b=\mathbf0$ 时结果仍为零向量。

#### 1.4.5 右手直角基的循环外积

教材第1章§4，推论4.1，p.34

若 $[O;\mathbf e_1,\mathbf e_2,\mathbf e_3]$ 为右手直角坐标系，则

$$
\mathbf e_1\times\mathbf e_2=\mathbf e_3,\qquad\mathbf e_2\times\mathbf e_3=\mathbf e_1,\qquad\mathbf e_3\times\mathbf e_1=\mathbf e_2.
$$

#### 1.4.6 外积的运算规律

教材第1章§4，定理4.1，p.34–36

对任意向量 $\mathbf a,\mathbf b,\mathbf c$ 和实数 $\lambda$，

$$
\begin{gathered}\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a,\\(\lambda\mathbf a)\times\mathbf b=\lambda(\mathbf a\times\mathbf b)=\mathbf a\times(\lambda\mathbf b),\\\mathbf a\times(\mathbf b+\mathbf c)=\mathbf a\times\mathbf b+\mathbf a\times\mathbf c,\\(\mathbf b+\mathbf c)\times\mathbf a=\mathbf b\times\mathbf a+\mathbf c\times\mathbf a.\end{gathered}
$$

#### 1.4.7 仿射基下的外积展开

教材第1章§4，公式（4.3），p.36

在任一仿射基 $\mathbf d_1,\mathbf d_2,\mathbf d_3$ 下，设 $\mathbf a,\mathbf b$ 的坐标分别为 $(a_1,a_2,a_3)^T,(b_1,b_2,b_3)^T$，则

$$
\begin{aligned}\mathbf a\times\mathbf b={}&(a_1b_2-a_2b_1)\mathbf d_1\times\mathbf d_2\\&+(a_3b_1-a_1b_3)\mathbf d_3\times\mathbf d_1\\&+(a_2b_3-a_3b_2)\mathbf d_2\times\mathbf d_3.\end{aligned}
$$

这里各系数分别乘的是基向量之间的外积，不能直接把它们当作 $\mathbf a\times\mathbf b$ 在原仿射基下的坐标。

#### 1.4.8 右手直角坐标中的外积及面积公式

教材第1章§4，定理4.2及公式（4.5）–（4.7），p.36–37

在右手直角坐标系中，设 $\mathbf a,\mathbf b$ 的坐标分别为 $(a_1,a_2,a_3)^T,(b_1,b_2,b_3)^T$，则

$$
\mathbf a\times\mathbf b\longleftrightarrow(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1)^T.
$$

形式上可按教材写为

$$
\mathbf a\times\mathbf b=\begin{vmatrix}\mathbf e_1&a_1&b_1\\\mathbf e_2&a_2&b_2\\\mathbf e_3&a_3&b_3\end{vmatrix}.
$$

相应平行四边形的面积为

$$
|\mathbf a\times\mathbf b|=\sqrt{(a_2b_3-a_3b_2)^2+(a_3b_1-a_1b_3)^2+(a_1b_2-a_2b_1)^2}.
$$

外积的上述坐标符号以右手直角标架为前提。

#### 1.4.9 二重外积公式与不满足结合律

教材第1章§4，命题4.3及正文，p.37–38

对任意向量 $\mathbf a,\mathbf b,\mathbf c$，

$$
\mathbf a\times(\mathbf b\times\mathbf c)=(\mathbf a\cdot\mathbf c)\mathbf b-(\mathbf a\cdot\mathbf b)\mathbf c.
$$

又有

$$
(\mathbf a\times\mathbf b)\times\mathbf c=-(\mathbf c\cdot\mathbf b)\mathbf a+(\mathbf c\cdot\mathbf a)\mathbf b.
$$

两者一般不同，故向量外积不满足结合律，二重外积必须保留括号。

#### 1.4.10 雅可比等式

教材第1章§4，公式（4.9），p.38

对任意向量 $\mathbf a,\mathbf b,\mathbf c$，

$$
\mathbf a\times(\mathbf b\times\mathbf c)+\mathbf b\times(\mathbf c\times\mathbf a)+\mathbf c\times(\mathbf a\times\mathbf b)=\mathbf0.
$$

### 1.5 向量的混合积

#### 1.5.1 混合积、定向体积与左右手系

教材第1章§5，正文，p.39–40；图10

三个有序向量的混合积记作

$$
(\mathbf a,\mathbf b,\mathbf c)=\mathbf a\times\mathbf b\cdot\mathbf c=\mathbf a\cdot(\mathbf b\times\mathbf c).
$$

运算中先作外积，再作内积。其绝对值等于以 $\mathbf a,\mathbf b,\mathbf c$ 为同一顶点三条棱的平行六面体体积。三向量不共面时，混合积为正当且仅当有序组为右手系，为负当且仅当为左手系；混合积本身即该有序组三棱所确定的定向体积。共面时体积为零。

[![图10：混合积是有向底面积与有向高度之积；绝对值为平行六面体的体积。](/figures/analytic-geometry/theorems/ch1-mixed-volume.svg)](/figures/analytic-geometry/theorems/ch1-mixed-volume.svg)

图10：混合积是有向底面积与有向高度之积；绝对值为平行六面体的体积。

#### 1.5.2 混合积为零的共面判据

教材第1章§5，命题5.1，p.40

三个向量 $\mathbf a,\mathbf b,\mathbf c$ 共面的充分必要条件为

$$
\mathbf a\times\mathbf b\cdot\mathbf c=0.
$$

判据包含零向量或其中两向量共线的退化情形。

#### 1.5.3 混合积的循环性质

教材第1章§5，正文两条性质，p.40

任意向量满足

$$
\mathbf a\times\mathbf b\cdot\mathbf c=\mathbf b\times\mathbf c\cdot\mathbf a=\mathbf c\times\mathbf a\cdot\mathbf b,\qquad\mathbf a\times\mathbf b\cdot\mathbf c=\mathbf a\cdot(\mathbf b\times\mathbf c).
$$

循环轮换三个向量不改变混合积；结合外积的反交换律，交换任意两个向量则改变符号。

#### 1.5.4 仿射坐标中的混合积

教材第1章§5，命题5.2，p.41

在任一仿射标架 $[O;\mathbf d_1,\mathbf d_2,\mathbf d_3]$ 中，设 $\mathbf a,\mathbf b,\mathbf c$ 的坐标分别为 $(a_1,a_2,a_3)^T$、$(b_1,b_2,b_3)^T$、$(c_1,c_2,c_3)^T$，则

$$
\frac{\mathbf a\times\mathbf b\cdot\mathbf c}{\mathbf d_1\times\mathbf d_2\cdot\mathbf d_3}=\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}.
$$

分母非零，因为三个基向量不共面。

#### 1.5.5 右手直角坐标中的混合积

教材第1章§5，定理5.1及其几何说明，p.41

在右手直角标架 $[O;\mathbf e_1,\mathbf e_2,\mathbf e_3]$ 中，三个向量的混合积等于其坐标列组成的三阶行列式：

$$
\mathbf a\times\mathbf b\cdot\mathbf c=\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}.
$$

因此该行列式给出以三个向量为棱的定向平行六面体体积，其绝对值给出普通体积。

#### 1.5.6 三向量共面的仿射坐标判据

教材第1章§5，定理5.2，p.41–42

向量 $\mathbf a,\mathbf b,\mathbf c$ 在任一共同仿射基下的坐标为 $(a_1,a_2,a_3)^T$、$(b_1,b_2,b_3)^T$、$(c_1,c_2,c_3)^T$，则

$$
\mathbf a,\mathbf b,\mathbf c\text{ 共面}\quad\Longleftrightarrow\quad\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}=0.
$$

该零值判据不要求直角坐标系，也不要求向量非零。

#### 1.5.7 四点共面的仿射坐标判据

教材第1章§5，推论5.1，p.42–43

在同一仿射标架下，四点 $A,B,C,D$ 的坐标依次为 $(x_i,y_i,z_i)^T\ (i=1,2,3,4)$。则

$$
A,B,C,D\text{ 共面}\quad\Longleftrightarrow\quad\begin{vmatrix}x_1&x_2&x_3&x_4\\y_1&y_2&y_3&y_4\\z_1&z_2&z_3&z_4\\1&1&1&1\end{vmatrix}=0.
$$

点重合或已有三点共线等退化情形均包含在内。

#### 1.5.8 拉格朗日恒等式

教材第1章§5，定理5.3，p.43

对任意四个向量 $\mathbf a,\mathbf b,\mathbf c,\mathbf d$，

$$
\begin{aligned}(\mathbf a\times\mathbf b)\cdot(\mathbf c\times\mathbf d)&=(\mathbf a\cdot\mathbf c)(\mathbf b\cdot\mathbf d)-(\mathbf a\cdot\mathbf d)(\mathbf b\cdot\mathbf c)\\&=\begin{vmatrix}\mathbf a\cdot\mathbf c&\mathbf a\cdot\mathbf d\\\mathbf b\cdot\mathbf c&\mathbf b\cdot\mathbf d\end{vmatrix}.\end{aligned}
$$

#### 1.5.9 直角三棱锥的面积平方关系

教材第1章§5，例5.1的一般性结论，p.44；图11

设三棱锥 $O\!\text{--}\!ABC$ 的三条侧棱 $OA,OB,OC$ 两两垂直。记三角形 $ABC,OAB,OBC,OCA$ 的面积分别为 $S_{ABC},S_{OAB},S_{OBC},S_{OCA}$，则斜面面积的平方等于三个直角面面积的平方和：

$$
S_{ABC}^2=S_{OAB}^2+S_{OBC}^2+S_{OCA}^2.
$$

[![图11：三条侧棱两两垂直的三棱锥；蓝色面为斜面 ABC。](/figures/analytic-geometry/theorems/ch1-right-tetrahedron.svg)](/figures/analytic-geometry/theorems/ch1-right-tetrahedron.svg)

图11：三条侧棱两两垂直的三棱锥；蓝色面为斜面 ABC。

#### 1.5.10 球面三角形的余弦公式与正弦公式

教材第1章§5，正文，p.44–46；图12

在半径为 $R$ 的球面上，取不在同一大圆上的三点 $A,B,C$，以两两相连的短大圆弧构成非退化球面三角形。沿用教材以弧记边的符号，并以相应中心角的弧度数（弧长除以 $R$）量度，记

$$
\alpha=\widehat{BC},\quad\beta=\widehat{CA},\quad\gamma=\widehat{AB},\qquad0<\alpha,\beta,\gamma<\pi.
$$

其内角仍记为 $A,B,C$，分别是相邻两边所在平面的内二面角。余弦公式为

$$
\begin{aligned}\cos\alpha&=\cos\beta\cos\gamma+\sin\beta\sin\gamma\cos A,\\\cos\beta&=\cos\gamma\cos\alpha+\sin\gamma\sin\alpha\cos B,\\\cos\gamma&=\cos\alpha\cos\beta+\sin\alpha\sin\beta\cos C.\end{aligned}
$$

正弦公式为

$$
\frac{\sin\alpha}{\sin A}=\frac{\sin\beta}{\sin B}=\frac{\sin\gamma}{\sin C}.
$$

这里 $0<A,B,C<\pi$，故分母非零；边的 $\alpha,\beta,\gamma$ 为弧度量，不是直接以长度单位量得的弧长。

[![图12：球面三角形的三边是大圆弧；边 $\alpha$、$\beta$、$\gamma$ 分别与顶点 A、B、C 相对。](/figures/analytic-geometry/theorems/ch1-spherical-triangle.svg)](/figures/analytic-geometry/theorems/ch1-spherical-triangle.svg)

图12：球面三角形的三边是大圆弧；边 $\alpha$、$\beta$、$\gamma$ 分别与顶点 A、B、C 相对。

## 第二章 空间的平面和直线

### 2.1 仿射坐标系中平面的方程，两平面的相关位置

#### 2.1.1 平面的参数方程与行列式方程

教材第2章§1.1，p.48–49，式(1.1)–(1.3)；图13

在仿射标架$[O;\boldsymbol d_1,\boldsymbol d_2,\boldsymbol d_3]$中，给定点$M_0(x_0,y_0,z_0)^{\mathrm T}$及不共线的向量$\boldsymbol v_i(X_i,Y_i,Z_i)^{\mathrm T}\ (i=1,2)$，所确定平面的参数方程为

$$
\begin{aligned}x&=x_0+\lambda X_1+\mu X_2,\\y&=y_0+\lambda Y_1+\mu Y_2,\\z&=z_0+\lambda Z_1+\mu Z_2,\qquad \lambda,\mu\in\mathbb R.\end{aligned}
$$

平面上每一点的参数$(\lambda,\mu)$唯一。消去参数得到

$$
\begin{vmatrix}x-x_0&X_1&X_2\\y-y_0&Y_1&Y_2\\z-z_0&Z_1&Z_2\end{vmatrix}=0.
$$

这就是$Ax+By+Cz+D=0$，其中

$$
\begin{aligned}A&=Y_1Z_2-Y_2Z_1,& B&=X_2Z_1-X_1Z_2,\\C&=X_1Y_2-X_2Y_1,&D&=-(Ax_0+By_0+Cz_0).\end{aligned}
$$

由于两方向不共线，$A,B,C$不全为零。

[![图13：一个点与两个不共线的方向向量确定平面；每一点对应唯一的一对参数。](/figures/analytic-geometry/theorems/ch2-affine-plane.svg)](/figures/analytic-geometry/theorems/ch2-affine-plane.svg)

图13：一个点与两个不共线的方向向量确定平面；每一点对应唯一的一对参数。

#### 2.1.2 平面与三元一次方程

教材第2章§1.1，定理1.1，p.49–50；图13

在几何空间中取定一个仿射坐标系，任一平面都可由三元一次方程表示；反之，任一方程

$$
Ax+By+Cz+D=0,\qquad (A,B,C)\ne(0,0,0)
$$

表示一个平面。这里“三元一次”要求一次项系数不全为零；$A=B=C=0$时所得全空间或空集不属于此定理的平面。

#### 2.1.3 平面的方向由一次项系数决定

教材第2章§1.1，定理1.2，p.50；图13

设$\pi:Ax+By+Cz+D=0$。向量$\boldsymbol\omega(r,s,t)^{\mathrm T}$平行于$\pi$的充要条件是

$$
Ar+Bs+Ct=0.
$$

因此平面方程的一次项系数$A,B,C$决定平面的方向；改变常数项只会在这一方向上得到平行或重合的平面。一般仿射坐标系中，不可直接把$(A,B,C)^{\mathrm T}$当成法向量的坐标。

#### 2.1.4 平行于坐标轴与经过原点的判据

教材第2章§1.1，推论1.1，p.50–51；图13

对平面$\pi:Ax+By+Cz+D=0$，$x$轴、$y$轴、$z$轴的方向分别平行于$\pi$的充要条件依次是

$$
A=0,\qquad B=0,\qquad C=0.
$$

平面经过原点的充要条件是$D=0$。这里“轴的方向平行于平面”包括该轴包含于平面的情形；若还要求整条坐标轴与平面无交点，须另有$D\ne0$。

#### 2.1.5 两个平面的三种位置关系

教材第2章§1.2，定理1.3，p.51–52；图14

设$\pi_i:A_ix+B_iy+C_iz+D_i=0\ (i=1,2)$，且每个$(A_i,B_i,C_i)\ne(0,0,0)$。则：一次项系数不成比例，当且仅当两平面相交于一直线；若存在非零实数$k$，使

$$
A_2=kA_1,\quad B_2=kB_1,\quad C_2=kC_1,
$$

则$D_2\ne kD_1$当且仅当两平面平行且不重合，$D_2=kD_1$当且仅当两平面重合。用“存在同一个非零比例系数”的表述，可避免零系数造成的比值未定义。

[![图14：三种位置关系依次为相交、平行且不重合、重合；第三幅用一张平面表示两个重合平面。](/figures/analytic-geometry/theorems/ch2-plane-positions.svg)](/figures/analytic-geometry/theorems/ch2-plane-positions.svg)

图14：三种位置关系依次为相交、平行且不重合、重合；第三幅用一张平面表示两个重合平面。

#### 2.1.6 三个平面恰交于一点

教材第2章§1.3，命题1.1，p.52；图15

在仿射坐标系中，三个平面$A_ix+B_iy+C_iz+D_i=0\ (i=1,2,3)$恰有一个公共点的充要条件是

$$
\begin{vmatrix}A_1&B_1&C_1\\A_2&B_2&C_2\\A_3&B_3&C_3\end{vmatrix}\ne0.
$$

判据中的常数项可以任意给定。行列式为零只能说明“不能恰交于一点”，不能据此断言三个平面必无公共点。

[![图15：三个系数方向独立的平面恰有一个公共点。](/figures/analytic-geometry/theorems/ch2-three-planes.svg)](/figures/analytic-geometry/theorems/ch2-three-planes.svg)

图15：三个系数方向独立的平面恰有一个公共点。

#### 2.1.7 有轴平面束的完整方程

教材第2章§1.4，定理1.4，p.52–53；图16

经过同一直线$l$的全部平面组成有轴平面束，$l$为束轴。设相交平面$\pi_i:A_ix+B_iy+C_iz+D_i=0\ (i=1,2)$的交线是$l$。一个平面属于此平面束，当且仅当它有方程

$$
\begin{aligned}&\lambda(A_1x+B_1y+C_1z+D_1)\\&\quad+\mu(A_2x+B_2y+C_2z+D_2)=0,\qquad (\lambda,\mu)\ne(0,0).\end{aligned}
$$

$(\lambda,\mu)$同乘非零实数表示同一平面。两参数不全为零的写法保留了$\lambda=0$及$\mu=0$的成员。

[![图16：同一条束轴上的三个平面是有轴平面束中的三个成员；束轴在每个成员内。](/figures/analytic-geometry/theorems/ch2-pencil.svg)](/figures/analytic-geometry/theorems/ch2-pencil.svg)

图16：同一条束轴上的三个平面是有轴平面束中的三个成员；束轴在每个成员内。

### 2.2 直角坐标系中平面的方程，点到平面的距离

#### 2.2.1 平面的点法式及法向量

教材第2章§2.1，p.55–56，式(2.1)；图17

在直角坐标系中，经过$M_0(x_0,y_0,z_0)^{\mathrm T}$、法向量为非零向量$\boldsymbol n(a,b,c)^{\mathrm T}$的平面有方程

$$
a(x-x_0)+b(y-y_0)+c(z-z_0)=0.
$$

等价地，它是$ax+by+cz+h=0$，其中$h=-(ax_0+by_0+cz_0)$。因此平面普通方程中一次项系数组成的列向量是一个法向量的坐标。法向量必须非零，此结论要求所用坐标系为直角坐标系。

[![图17：平面法向量与垂足确定距离；法向量所指一侧的离差为正。](/figures/analytic-geometry/theorems/ch2-plane-distance.svg)](/figures/analytic-geometry/theorems/ch2-plane-distance.svg)

图17：平面法向量与垂足确定距离；法向量所指一侧的离差为正。

#### 2.2.2 点到平面的距离与离差

教材第2章§2.2，定理2.1，p.56–57，式(2.2)–(2.4)；图17

在直角坐标系中，点$P_1(x_1,y_1,z_1)^{\mathrm T}$到平面$\pi:Ax+By+Cz+D=0$的距离为

$$
d=\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}.
$$

选定$\boldsymbol n(A,B,C)^{\mathrm T}$所指的正向，离差为

$$
\delta=\frac{Ax_1+By_1+Cz_1+D}{\sqrt{A^2+B^2+C^2}},\qquad d=|\delta|.
$$

若$P_0(x_0,y_0,z_0)^{\mathrm T}$为垂足，则

$$
\begin{aligned}x_1-x_0&=\frac{\delta A}{\sqrt{A^2+B^2+C^2}},\\y_1-y_0&=\frac{\delta B}{\sqrt{A^2+B^2+C^2}},\\z_1-z_0&=\frac{\delta C}{\sqrt{A^2+B^2+C^2}}.\end{aligned}
$$

把方程整体乘以负数会使离差变号，但不改变距离。

#### 2.2.3 半空间及同侧、异侧判据

教材第2章§2.3，p.57；图17

平面$\pi:Ax+By+Cz+D=0$把所有不在$\pi$上的点分成两个半空间：$Ax+By+Cz+D>0$是法向量$(A,B,C)^{\mathrm T}$所指的一侧，$Ax+By+Cz+D<0$是另一侧。对两个不在平面上的点$M_i(x_i,y_i,z_i)^{\mathrm T}$，令

$$
F_i=Ax_i+By_i+Cz_i+D\qquad(i=1,2).
$$

则同侧的充要条件是$F_1F_2>0$，异侧的充要条件是$F_1F_2<0$。同侧、异侧的符号判据在仿射坐标系中也成立；法向量的坐标解释只在直角坐标系中使用。

#### 2.2.4 两个平面的夹角与垂直判据

教材第2章§2.4，p.57–58，式(2.8)；图18

在直角坐标系中，$\pi_i:A_ix+B_iy+C_iz+D_i=0\ (i=1,2)$的一个夹角$\theta$满足

$$
\cos\theta=\frac{A_1A_2+B_1B_2+C_1C_2}{\sqrt{A_1^2+B_1^2+C_1^2}\sqrt{A_2^2+B_2^2+C_2^2}}.
$$

另一种二面角为$\pi-\theta$。教材的“两个平面的夹角”允许这两个互补的角；若只取不大于$\pi/2$者，则在分子加绝对值。两个平面垂直的充要条件是

$$
A_1A_2+B_1B_2+C_1C_2=0.
$$

平行或重合平面的夹角按教材规定为$0$或$\pi$。

[![图18：垂直于交线的截面把二面角化为平面角；两个夹角互补。](/figures/analytic-geometry/theorems/ch2-angles.svg)](/figures/analytic-geometry/theorems/ch2-angles.svg)

图18：垂直于交线的截面把二面角化为平面角；两个夹角互补。

### 2.3 直线的方程，直线、平面间的相关位置

#### 2.3.1 直线的参数方程

教材第2章§3.1，p.60–61，式(3.1)–(3.2)；图19

在仿射坐标系中，经过$M_0(x_0,y_0,z_0)^{\mathrm T}$、方向向量为$\boldsymbol v(X,Y,Z)^{\mathrm T}\ne\boldsymbol0$的直线$l$有参数方程

$$
\begin{aligned}x&=x_0+tX,\\y&=y_0+tY,\\z&=z_0+tZ,\qquad t\in\mathbb R.\end{aligned}
$$

$t$是直线仿射标架$[M_0;\boldsymbol v]$中的坐标；直线上每一点对应唯一实参数。方向系数$(X,Y,Z)^{\mathrm T}$整体乘任意非零常数，仍给出同一直线的方向。

[![图19：给定一点及非零方向即可确定直线；实参数按同一方向在整条直线上变化。](/figures/analytic-geometry/theorems/ch2-line.svg)](/figures/analytic-geometry/theorems/ch2-line.svg)

图19：给定一点及非零方向即可确定直线；实参数按同一方向在整条直线上变化。

#### 2.3.2 直线的标准方程及零分母约定

教材第2章§3.1，p.61–62，式(3.3)–(3.5)；图19

上述直线的标准方程（点向式）为

$$
\frac{x-x_0}{X}=\frac{y-y_0}{Y}=\frac{z-z_0}{Z}.
$$

教材约定：某个方向系数为零时，相应式子表示分子为零，不能作为通常的除法式运算。例如$X\ne0,Y=0$时，要读作$y=y_0$及$Z(x-x_0)=X(z-z_0)$。需要运算时可始终使用参数方程，或使用无分母的关系

$$
\begin{aligned}Y(x-x_0)&=X(y-y_0),\\Z(x-x_0)&=X(z-z_0),\\Z(y-y_0)&=Y(z-z_0).\end{aligned}
$$

其中$X,Y,Z$不全为零，三个关系中只有两个独立。

#### 2.3.3 直线的两点式方程

教材第2章§3.1，p.62，式(3.6)；图19

通过不同的两点$M_i(x_i,y_i,z_i)^{\mathrm T}\ (i=1,2)$的直线，其方向系数可取$(x_2-x_1,y_2-y_1,z_2-z_1)^{\mathrm T}$，方程为

$$
\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}=\frac{z-z_1}{z_2-z_1}.
$$

零分母按点向式约定解释。等价且无除法歧义的参数式为

$$
\begin{aligned}x&=x_1+t(x_2-x_1),\\y&=y_1+t(y_2-y_1),\\z&=z_1+t(z_2-z_1),\qquad t\in\mathbb R.\end{aligned}
$$

$0\le t\le1$时给出两点之间的闭线段。

#### 2.3.4 直线的普通方程及方向系数

教材第2章§3.1，p.62–63，式(3.7)–(3.9)；图16

任一直线可写成两个相交平面的交线：

$$
\begin{cases}A_1x+B_1y+C_1z+D_1=0,\\A_2x+B_2y+C_2z+D_2=0.\end{cases}
$$

这里两行一次项系数必须不成比例。由此可取方向系数

$$
\begin{aligned}X&=B_1C_2-B_2C_1,\\Y&=A_2C_1-A_1C_2,\\Z&=A_1B_2-A_2B_1.\end{aligned}
$$

三个系数不全为零；再解方程组求出直线上任一点，即可写出参数式或点向式。在右手直角坐标系中，上式也就是两个平面法向量$\boldsymbol n_1\times\boldsymbol n_2$的坐标；在一般仿射坐标系中，仍可直接使用这三个代数式。

#### 2.3.5 两条直线的四种位置关系

教材第2章§3.2，p.63–64，式(3.10)；图20

设$l_i$经过$M_i(x_i,y_i,z_i)^{\mathrm T}$，非零方向向量为$\boldsymbol v_i(X_i,Y_i,Z_i)^{\mathrm T}\ (i=1,2)$，并令

$$
\Delta=\begin{vmatrix}x_2-x_1&X_1&X_2\\y_2-y_1&Y_1&Y_2\\z_2-z_1&Z_1&Z_2\end{vmatrix}.
$$

若存在非零实数$\lambda$，使$X_2=\lambda X_1,Y_2=\lambda Y_1,Z_2=\lambda Z_1$，则两直线方向相同：若还存在$\mu\in\mathbb R$，满足

$$
x_2-x_1=\mu X_1,\quad y_2-y_1=\mu Y_1,\quad z_2-z_1=\mu Z_1,
$$

两直线重合；若不存在这样的$\mu$，两直线平行且不重合。若两个方向不成比例，则$\Delta=0$当且仅当两直线相交，$\Delta\ne0$当且仅当两直线异面。此判据在仿射坐标系中成立。

[![图20：两直线可能相交、平行、重合或异面；异面情形没有包含两条直线的平面。](/figures/analytic-geometry/theorems/ch2-line-positions.svg)](/figures/analytic-geometry/theorems/ch2-line-positions.svg)

图20：两直线可能相交、平行、重合或异面；异面情形没有包含两条直线的平面。

#### 2.3.6 直线与平面的三种位置关系及交点

教材第2章§3.3，p.64–65，式(3.11)；图21

设$l$的参数方程为$x=x_0+tX,y=y_0+tY,z=z_0+tZ$，$(X,Y,Z)\ne(0,0,0)$；平面为$\pi:Ax+By+Cz+D=0$。若

$$
AX+BY+CZ=0,
$$

则$Ax_0+By_0+Cz_0+D=0$当且仅当$l$包含于$\pi$，$Ax_0+By_0+Cz_0+D\ne0$当且仅当$l$与$\pi$平行且不相交。若$AX+BY+CZ\ne0$，则直线与平面恰交于一点，交点对应

$$
t=-\frac{Ax_0+By_0+Cz_0+D}{AX+BY+CZ}.
$$

把此参数代回三个分量式即可得到交点坐标。以上结论在仿射坐标系中成立。

[![图21：直线相交、包含及平行于平面的三种情形；包含时整条直线上的参数都满足平面方程。](/figures/analytic-geometry/theorems/ch2-line-plane.svg)](/figures/analytic-geometry/theorems/ch2-line-plane.svg)

图21：直线相交、包含及平行于平面的三种情形；包含时整条直线上的参数都满足平面方程。

### 2.4 点、直线和平面之间的度量关系

#### 2.4.1 点到直线的距离

教材第2章§4.1，p.71，式(4.1)；图22

本节使用右手直角坐标系。设直线$l$经过$M_0(x_0,y_0,z_0)^{\mathrm T}$，方向向量为$\boldsymbol v(X,Y,Z)^{\mathrm T}\ne\boldsymbol0$。点$M(x,y,z)^{\mathrm T}$到$l$的距离$d\ge0$由下式确定：

$$
\begin{aligned}&(X^2+Y^2+Z^2)d^2\\&\quad=\bigl((y-y_0)Z-(z-z_0)Y\bigr)^2\\&\quad+\bigl((z-z_0)X-(x-x_0)Z\bigr)^2\\&\quad+\bigl((x-x_0)Y-(y-y_0)X\bigr)^2.\end{aligned}
$$

右端开平方，是由从$M_0$到$M$的位移与$\boldsymbol v$张成的平行四边形面积；将它除以底边长$\sqrt{X^2+Y^2+Z^2}$，即得$d$。

[![图22：点到直线的距离是相应平行四边形以方向向量为底的高。](/figures/analytic-geometry/theorems/ch2-point-line.svg)](/figures/analytic-geometry/theorems/ch2-point-line.svg)

图22：点到直线的距离是相应平行四边形以方向向量为底的高。

#### 2.4.2 两直线距离的定义与平行情形

教材第2章§4.2，定义4.1，p.71–72；图20

两条直线上各取一点，这些点对之间的最短距离称为两直线的距离。相交或重合的两直线距离为零；平行而不重合时，在其中一条直线上任取一点，该点到另一条直线的距离就是两直线的距离，可用点到直线公式计算。

#### 2.4.3 公垂线的定义、存在性与唯一性

教材第2章§4.2，定义4.2、命题4.1，p.72；图23

与两条异面直线$l_1,l_2$都垂直相交的直线称为它们的公垂线；两个垂足之间的线段称为公垂线段。任意两条异面直线的公垂线存在且唯一。若其方向向量为$\boldsymbol v_1,\boldsymbol v_2$，公垂线的方向可取$\boldsymbol v_1\times\boldsymbol v_2$。具体地，分别取包含$l_i$且平行于$\boldsymbol v_1\times\boldsymbol v_2$的平面，两平面的交线即为公垂线。异面条件保证两个方向不共线，从而此外积非零。

[![图23：两条异面直线有唯一公垂线；公垂线段两端分别位于两条直线上。](/figures/analytic-geometry/theorems/ch2-skew.svg)](/figures/analytic-geometry/theorems/ch2-skew.svg)

图23：两条异面直线有唯一公垂线；公垂线段两端分别位于两条直线上。

#### 2.4.4 公垂线段实现最短距离

教材第2章§4.2，命题4.2，p.72–73；图23

设$P_1P_2$是异面直线$l_1,l_2$的公垂线段，$Q_i$是$l_i$上的任意点，则

$$
|Q_1Q_2|\ge |P_1P_2|.
$$

因此两条异面直线的距离正是公垂线段的长度。

#### 2.4.5 异面直线的距离公式

教材第2章§4.2，命题4.3，p.73，式(4.2)；图23

设异面直线$l_i$经过$M_i(x_i,y_i,z_i)^{\mathrm T}$，方向向量为$\boldsymbol v_i(X_i,Y_i,Z_i)^{\mathrm T}\ (i=1,2)$。令

$$
\begin{aligned}U&=Y_1Z_2-Z_1Y_2,\\V&=Z_1X_2-X_1Z_2,\\W&=X_1Y_2-Y_1X_2.\end{aligned}
$$

则

$$
d=\frac{|(x_2-x_1)U+(y_2-y_1)V+(z_2-z_1)W|}{\sqrt{U^2+V^2+W^2}}.
$$

分子是以两方向向量及两基点之差为棱的平行六面体体积，分母是以两方向向量为邻边的底面积。异面条件保证分母非零。两方向不平行但两直线相交时，同一代数式给出$0$；平行时分母为零，必须改用点到直线的公式。

#### 2.4.6 两直线所成的角

教材第2章§4.3，定义4.3，p.73–74；图24

两直线所成的角规定为它们方向向量所成夹角中不大于$\pi/2$者。若方向系数为$(X_i,Y_i,Z_i)^{\mathrm T}\ne\boldsymbol0\ (i=1,2)$，则

$$
\cos\theta=\frac{|X_1X_2+Y_1Y_2+Z_1Z_2|}{\sqrt{X_1^2+Y_1^2+Z_1^2}\sqrt{X_2^2+Y_2^2+Z_2^2}},\qquad 0\le\theta\le\frac\pi2.
$$

夹角只与方向有关，因此适用于相交、平行或异面直线。方向正交的条件是分子绝对值内的内积为零；若要求两直线“垂直相交”，还必须另验两直线相交。

[![图24：把两个方向移到同一点后，取不大于直角的夹角；原直线即使异面也有此夹角。](/figures/analytic-geometry/theorems/ch2-line-angle.svg)](/figures/analytic-geometry/theorems/ch2-line-angle.svg)

图24：把两个方向移到同一点后，取不大于直角的夹角；原直线即使异面也有此夹角。

#### 2.4.7 直线与平面所成的角

教材第2章§4.3，定义4.4，p.74；图25

直线$l$不垂直于平面$\pi$时，二者所成的角是$l$与它在$\pi$上的正射影所成的角；$l\perp\pi$时规定此角为$\pi/2$。若$l$的方向系数为$(X,Y,Z)^{\mathrm T}\ne\boldsymbol0$，$\pi$的法向量坐标为$(A,B,C)^{\mathrm T}\ne\boldsymbol0$，则

$$
\sin\theta=\frac{|AX+BY+CZ|}{\sqrt{X^2+Y^2+Z^2}\sqrt{A^2+B^2+C^2}},\qquad 0\le\theta\le\frac\pi2.
$$

$\theta=0$包括直线包含于平面及直线与平面平行；$\theta=\pi/2$等价于方向向量与法向量共线。

[![图25：直线与其在平面上的正射影形成线面角；它与直线方向和法向量的锐夹角互余。](/figures/analytic-geometry/theorems/ch2-line-plane-angle.svg)](/figures/analytic-geometry/theorems/ch2-line-plane-angle.svg)

图25：直线与其在平面上的正射影形成线面角；它与直线方向和法向量的锐夹角互余。

## 第三章 常见曲面

### 3.1 球面和旋转面

#### 3.1.1 球面的普通方程

教材第3章§1，式(1.1)–(1.2)，p.76

本章均取右手直角坐标系。球心为$M_0(x_0,y_0,z_0)^{\mathrm T}$、半径为$R>0$的球面方程为

$$
(x-x_0)^2+(y-y_0)^2+(z-z_0)^2=R^2.
$$

展开为$x^2+y^2+z^2+2b_1x+2b_2y+2b_3z+c=0$，其中$b_1=-x_0,b_2=-y_0,b_3=-z_0$，$c=x_0^2+y_0^2+z_0^2-R^2$。一般地，三平方项系数相同、无交叉项的上述方程在$b_1^2+b_2^2+b_3^2>c$时表示球心为$(-b_1,-b_2,-b_3)^{\mathrm T}$、半径为$\sqrt{b_1^2+b_2^2+b_3^2-c}$的球面；等号时表示该球心一个点；小于时实点集为空，称为虚球面。

#### 3.1.2 球面的参数方程与球面坐标

教材第3章§1，式(1.3)–(1.4)，pp.76–77；图26

以原点为球心的球面采用教材的纬度$\theta$、经度$\varphi$：

$$
\begin{cases}x=R\cos\theta\cos\varphi,\\y=R\cos\theta\sin\varphi,\\z=R\sin\theta,\end{cases}\qquad-\frac\pi2\leq\theta\leq\frac\pi2,\quad-\pi<\varphi\leq\pi.
$$

$R$固定为正数时，$(\theta,\varphi)^{\mathrm T}$为球面上点的曲纹坐标，除两极外唯一。允许$R\geq0$变化，就得到点的球面坐标$(R,\theta,\varphi)^{\mathrm T}$（空间极坐标）；在$z$轴上经度不唯一，原点的角度也不唯一。纬度是$OM$与其在$Oxy$平面上投影的夹角，上方为正。

[![图26：球面坐标中 $\theta$ 为纬度，$\varphi$ 为经度；N 为 M 在 Oxy 平面的垂足。](/figures/analytic-geometry/theorems/ch3-spherical.svg)](/figures/analytic-geometry/theorems/ch3-spherical.svg)

图26：球面坐标中 $\theta$ 为纬度，$\varphi$ 为经度；N 为 M 在 Oxy 平面的垂足。

#### 3.1.3 曲面与空间曲线的方程形式

教材第3章§1，式(1.5)–(1.6)，pp.77–78

一般而言，曲面可用普通方程$F(x,y,z)=0$或含两个参数的参数方程

$$
x=x(u,v),\quad y=y(u,v),\quad z=z(u,v),\qquad a\leq u\leq b,\ c\leq v\leq d
$$

表示。空间曲线可作为两曲面的交线，用$F(x,y,z)=G(x,y,z)=0$表示；也可用

$$
x=x(t),\quad y=y(t),\quad z=z(t),\qquad a\leq t\leq b
$$

表示。参数表示须满足双向对应：每组允许参数给出曲面（曲线）上的点，且每个点均能由允许参数取得。能局部唯一确定点的数对$(u,v)^{\mathrm T}$称为曲面上点的曲纹坐标。

#### 3.1.4 旋转面、母线、纬圆与经线

教材第3章§1，定义1.1及其后正文，p.79

曲线$\Gamma$绕直线$l$旋转所得曲面叫作旋转面；$l$为轴，$\Gamma$为母线。母线上一点绕轴的轨迹为纬圆（轴上的点对应退化纬圆）。含轴平面与旋转面的交线为经线或子午线。经线可以作为母线；一般母线未必是经线。

#### 3.1.5 一般旋转面的方程建立

教材第3章§1，旋转面求法，pp.79–80

设轴$l$经过$M_1(x_1,y_1,z_1)^{\mathrm T}$，方向为$(l,m,n)^{\mathrm T}\ne(0,0,0)^{\mathrm T}$，母线由$F(x,y,z)=G(x,y,z)=0$给出。点$(x,y,z)^{\mathrm T}$属于旋转面的充要条件是存在母线上的点$(x_0,y_0,z_0)^{\mathrm T}$，使

$$
\begin{cases}F(x_0,y_0,z_0)=0,\\G(x_0,y_0,z_0)=0,\\(x-x_1)^2+(y-y_1)^2+(z-z_1)^2=(x_0-x_1)^2+(y_0-y_1)^2+(z_0-z_1)^2,\\l(x-x_0)+m(y-y_0)+n(z-z_0)=0.\end{cases}
$$

后两式表示同纬圆上的两点到轴上固定点距离相等，且连线垂直于轴。消去$x_0,y_0,z_0$可求旋转面的方程，并须保留母线的取值限制。

#### 3.1.6 绕坐标轴旋转的代换规律

教材第3章§1，式(1.7)，p.80

当母线在$Oyz$平面内，由$f(y,z)=0,\ x=0$给出，绕$z$轴旋转所得曲面为

$$
f\bigl(\pm\sqrt{x^2+y^2},z\bigr)=0.
$$

这里正、负两种代入所得点集取并集，并承接母线的定义域；不是要求两式同时成立。其他坐标平面内的曲线绕坐标轴旋转，有同样的“轴向坐标不变、垂直轴向坐标换成带符号距离”规律。

#### 3.1.7 旋转抛物面与旋转双曲面

教材第3章§1，例1.1–1.2的一般公式，p.80

$Oyz$平面内的抛物线$y^2=2pz\;(p>0)$绕$z$轴旋转，得到$x^2+y^2=2pz$，称旋转抛物面。$Oxy$平面内的双曲线$x^2/a^2-y^2/b^2=1\;(a,b>0)$，绕实轴$x$旋转得到旋转双叶双曲面，绕虚轴$y$旋转得到旋转单叶双曲面：

$$
\frac{x^2}{a^2}-\frac{y^2+z^2}{b^2}=1,\qquad\frac{x^2+z^2}{a^2}-\frac{y^2}{b^2}=1.
$$

#### 3.1.8 环面方程

教材第3章§1，例1.3的一般公式，p.81；图27

$Oxz$平面内的圆$(x-a)^2+z^2=r^2$，其中$0<r<a$，绕$z$轴旋转得到环面：

$$
\bigl(x^2+y^2+z^2+a^2-r^2\bigr)^2=4a^2(x^2+y^2).
$$

条件$0<r<a$对应教材所画的不自交环面。

[![图27：小圆半径 r，圆心距旋转轴 a，且 0<r<a；橙色小圆为一条经线。](/figures/analytic-geometry/theorems/ch3-torus.svg)](/figures/analytic-geometry/theorems/ch3-torus.svg)

图27：小圆半径 r，圆心距旋转轴 a，且 0<r<a；橙色小圆为一条经线。

#### 3.1.9 异面直线旋转生成单叶双曲面

教材第3章§1，例1.4的一般结论，pp.81–82

两异面直线$l_1,l_2$不垂直时，$l_1$绕$l_2$旋转得到旋转单叶双曲面。取$l_2$为$z$轴、两线公垂线为$x$轴后，可令$l_1$为

$$
x=a,\quad y=t,\quad z=bt,\qquad t\in\mathbb R,\quad ab\ne0.
$$

所得旋转面为

$$
x^2+y^2-\frac{z^2}{b^2}=a^2.
$$

### 3.2 柱面和锥面

#### 3.2.1 柱面的生成与准线

教材第3章§2，定义2.1及其后正文，p.84

直线$l$沿空间曲线$C$作平行移动形成柱面；$l$为母线，$C$为准线。平面也属于柱面。准线和具体的母线均不唯一；与各条母线都相交的曲线可作为准线。通常的非平面柱面有确定的母线方向。

#### 3.2.2 柱面的普通方程求法与参数方程

教材第3章§2，式(2.1)–(2.2)，p.85

设母线方向为$(l,m,n)^{\mathrm T}\ne(0,0,0)^{\mathrm T}$。若准线由$F(x,y,z)=G(x,y,z)=0$给出，柱面的点满足

$$
F(x-lu,y-mu,z-nu)=0,\qquad G(x-lu,y-mu,z-nu)=0
$$

中的某个实数$u$，消去$u$即可求普通方程。若准线为$x=f(t),y=g(t),z=h(t)$，则柱面的参数方程为

$$
\begin{cases}x=f(t)+lu,\\y=g(t)+mu,\\z=h(t)+nu,\end{cases}\qquad a\leq t\leq b,\quad u\in\mathbb R.
$$

#### 3.2.3 圆柱面的距离条件与方程

教材第3章§2，式(2.3)及其前正文，pp.85–86

圆柱面上各点到其对称轴距离相同，此距离为半径$r>0$；可取垂直于轴的圆为准线。若轴经过$M_0(x_0,y_0,z_0)^{\mathrm T}$，方向为$(l,m,n)^{\mathrm T}\ne0$，其方程用分量写成

$$
\begin{aligned}&(l^2+m^2+n^2)\bigl[(x-x_0)^2+(y-y_0)^2+(z-z_0)^2\bigr]\\&\quad-\bigl[l(x-x_0)+m(y-y_0)+n(z-z_0)\bigr]^2=r^2(l^2+m^2+n^2).\end{aligned}
$$

特别地，轴为$z$轴时，方程是$x^2+y^2=r^2$。

#### 3.2.4 圆柱面参数方程与柱面坐标

教材第3章§2，式(2.4)，p.86；图28

轴为$z$轴、半径为$r$的圆柱面可表示为

$$
x=r\cos\theta,\quad y=r\sin\theta,\quad z=u,\qquad0\leq\theta<2\pi,\quad u\in\mathbb R.
$$

固定$r>0$时有两个曲面参数$\theta,u$。允许$r\geq0$变化，$(r,\theta,u)^{\mathrm T}$称为点的柱面坐标，与直角坐标按上式转换；$r=\sqrt{x^2+y^2}$，$u=z$。当$r=0$时角度$\theta$不唯一。

[![图28：柱面坐标 (r,$\theta$,u)：r 为距 z 轴的距离，u=z。](/figures/analytic-geometry/theorems/ch3-cylindrical.svg)](/figures/analytic-geometry/theorems/ch3-cylindrical.svg)

图28：柱面坐标 (r,$\theta$,u)：r 为距 z 轴的距离，u=z。

#### 3.2.5 缺少一个变量的方程与柱面

教材第3章§2，定理2.1，p.86

若柱面母线平行于$z$轴（$x$轴或$y$轴），则可用不含$z$（$x$或$y$）的方程表示。反之，不含某一坐标变量的三元方程，其实点集沿该坐标轴方向保持不变，因而在通常的非空曲面情形表示母线平行于该轴的柱面。例如$f(x,y)=0$的准线可取$f(x,y)=0,z=0$。退化点集和空集按其实际轨迹理解。

#### 3.2.6 三种实二次柱面

教材第3章§2，定理2.1后例示，pp.87–88；图29

在$a,b,p>0$时，下列方程分别表示母线平行于$z$轴的椭圆柱面、双曲柱面、抛物柱面：

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\qquad\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\qquad x^2=2py.
$$

其与$Oxy$平面的交线依次为椭圆、双曲线、抛物线，可作准线。

[![图29：三种实二次柱面：椭圆柱面、双曲柱面与抛物柱面；所有母线平行 z 轴。](/figures/analytic-geometry/theorems/ch3-cylinders.svg)](/figures/analytic-geometry/theorems/ch3-cylinders.svg)

图29：三种实二次柱面：椭圆柱面、双曲柱面与抛物柱面；所有母线平行 z 轴。

#### 3.2.7 锥面的生成与准线

教材第3章§2，定义2.2及其后正文，p.88

给定曲线$C$及不在$C$上的定点$M_0$，所有经过$M_0$并与$C$相交的整条直线组成锥面。$M_0$为顶点，$C$为准线，这些直线为母线。准线不唯一；与各母线相交的适当曲线均可作为准线。锥面包含顶点及母线的两个方向。

#### 3.2.8 锥面方程的建立

教材第3章§2，锥面求法，pp.88–89

设顶点为$M_0(x_0,y_0,z_0)^{\mathrm T}$，准线为$F(x,y,z)=G(x,y,z)=0$。除顶点外，$(x,y,z)^{\mathrm T}$在锥面上的充要条件是存在非零实数$u$，使

$$
\begin{cases}F\bigl(x_0+u(x-x_0),y_0+u(y-y_0),z_0+u(z-z_0)\bigr)=0,\\G\bigl(x_0+u(x-x_0),y_0+u(y-y_0),z_0+u(z-z_0)\bigr)=0.\end{cases}
$$

消去$u$后应包括顶点，并检查消元有无增添额外点。

#### 3.2.9 圆锥面及其距离、角度条件

教材第3章§2，圆锥面的建立，p.89；图30

圆锥面各母线与轴的锐夹角相等。设顶点为$M_0(x_0,y_0,z_0)^{\mathrm T}$，轴方向为$(l,m,n)^{\mathrm T}\ne0$，母线与轴的锐夹角为$\alpha$，其中$0<\alpha<\pi/2$。角度条件的分量形式为

$$
\begin{aligned}\bigl[l(x-x_0)+m(y-y_0)+n(z-z_0)\bigr]^2&=(l^2+m^2+n^2)\cos^2\alpha\\&\quad\cdot\bigl[(x-x_0)^2+(y-y_0)^2+(z-z_0)^2\bigr].\end{aligned}
$$

此式包含两叶及顶点。特别地，顶点为原点、轴为$z$轴时，$x^2+y^2=z^2\tan^2\alpha$。

[![图30：圆锥面的整条母线经过顶点，包含上下两叶；$\alpha$ 为母线与轴的锐夹角。](/figures/analytic-geometry/theorems/ch3-cone.svg)](/figures/analytic-geometry/theorems/ch3-cone.svg)

图30：圆锥面的整条母线经过顶点，包含上下两叶；$\alpha$ 为母线与轴的锐夹角。

#### 3.2.10 齐次函数与齐次方程

教材第3章§2，定义2.3，p.90

若$n$为整数，且对定义域中一切$(x,y,z)$及任意非零实数$t$均有

$$
F(tx,ty,tz)=t^nF(x,y,z),
$$

则$F$称为$n$次齐次函数，$F(x,y,z)=0$称为$n$次齐次方程。上述条件同时要求所涉及的伸缩点在定义域内。齐次多项式的各非零项总次数相同。

#### 3.2.11 齐次方程产生锥面

教材第3章§2，定理2.2，pp.90–91

$x,y,z$的齐次方程所表示的曲面，添上原点后，是以原点为顶点的锥面：如果$(x_0,y_0,z_0)^{\mathrm T}\ne0$在曲面上，那么整条直线

$$
x=x_0t,\quad y=y_0t,\quad z=z_0t,\qquad t\in\mathbb R
$$

都在添入原点后的点集上。空集、仅含顶点等退化情况须按实际点集理解。

#### 3.2.12 顶点为原点的锥面可用齐次方程表示

教材第3章§2，定理2.3，p.91

在以锥面顶点为原点的直角坐标系中，锥面可以用$x,y,z$的齐次方程表示。结合定理2.2，齐次性对应“沿过原点的整条直线伸缩不变”的几何特征。

### 3.3 二次曲面

#### 3.3.1 椭球面的方程、对称性与范围

教材第3章§3，式(3.1)，pp.93–94；图31

椭球面方程为

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1,\qquad a,b,c>0.
$$

三个坐标面均为对称平面，三根坐标轴均为对称轴，原点为对称中心。范围为$|x|\leq a,|y|\leq b,|z|\leq c$；坐标轴上的顶点为$(\pm a,0,0)^{\mathrm T},(0,\pm b,0)^{\mathrm T},(0,0,\pm c)^{\mathrm T}$。

[![图31：椭球面与三个坐标面的椭圆截线；a、b、c 为三个半轴长。](/figures/analytic-geometry/theorems/ch3-ellipsoid.svg)](/figures/analytic-geometry/theorems/ch3-ellipsoid.svg)

图31：椭球面与三个坐标面的椭圆截线；a、b、c 为三个半轴长。

#### 3.3.2 椭球面的截口与等高线

教材第3章§3，椭球面性质(3)–(4)，p.94

椭球面与三个坐标面的交线都是椭圆。平面$z=h$的截口满足

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1-\frac{h^2}{c^2},\qquad z=h.
$$

$|h|<c$时是半轴长$a\sqrt{1-h^2/c^2}$、$b\sqrt{1-h^2/c^2}$的椭圆；$|h|=c$时为一个点；$|h|>c$时为空。另两类坐标平行截面由循环交换变量得出。平行于$Oxy$平面的截口投影到$Oxy$平面后，所得投影线称为等高线。

#### 3.3.3 单叶双曲面的方程与几何性质

教材第3章§3，式(3.2)，pp.95–96；图32

单叶双曲面为

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1,\qquad a,b,c>0.
$$

三个坐标面、三根坐标轴和原点分别为其对称平面、对称轴和对称中心。全体点满足$x^2/a^2+y^2/b^2\geq1$，即位于椭圆柱面$x^2/a^2+y^2/b^2=1$上或外部。$z=0$截得腰椭圆；$y=0$、$x=0$截得双曲线$x^2/a^2-z^2/c^2=1$、$y^2/b^2-z^2/c^2=1$。任意$z=h$的截口为

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1+\frac{h^2}{c^2},\qquad z=h,
$$

是半轴长$a\sqrt{1+h^2/c^2}$、$b\sqrt{1+h^2/c^2}$的椭圆，随$|h|$增加而增大。

[![图32：单叶与双叶双曲面；深色曲线为横截口，浅灰曲面为共同的渐近锥面。](/figures/analytic-geometry/theorems/ch3-hyperboloids.svg)](/figures/analytic-geometry/theorems/ch3-hyperboloids.svg)

图32：单叶与双叶双曲面；深色曲线为横截口，浅灰曲面为共同的渐近锥面。

#### 3.3.4 双叶双曲面的方程与几何性质

教材第3章§3，式(3.4)，pp.96–97

双叶双曲面为

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=-1,\qquad a,b,c>0.
$$

它关于三个坐标面、三根坐标轴及原点对称，并满足$|z|\geq c$，分为上下两叶。与$Oxy$平面无交点，与$Oxz$、$Oyz$平面的交线分别为$z^2/c^2-x^2/a^2=1$、$z^2/c^2-y^2/b^2=1$。平面$z=h$的截口满足

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=\frac{h^2}{c^2}-1,\qquad z=h.
$$

$|h|>c$时是半轴长$a\sqrt{h^2/c^2-1}$、$b\sqrt{h^2/c^2-1}$的椭圆；$|h|=c$时为顶点；$|h|<c$时为空。

#### 3.3.5 双曲面的渐近锥面

教材第3章§3，式(3.3)及双叶双曲面性质(4)，pp.96–97

单叶、双叶双曲面$x^2/a^2+y^2/b^2-z^2/c^2=\pm1$具有共同的渐近锥面

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0.
$$

锥面在$z=h$的截口半轴长为$a|h|/c,b|h|/c$。当$|h|\to\infty$时，这些半轴长与对应双曲面截口半轴长之差趋于零，因此两类双曲面在远处趋近该锥面。

#### 3.3.6 椭圆抛物面的方程与截口

教材第3章§3，式(3.5)，p.97；图33

椭圆抛物面方程为

$$
\frac{x^2}{p}+\frac{y^2}{q}=2z,\qquad p,q>0.
$$

$Oxz$、$Oyz$为对称平面，$z$轴为对称轴，点的范围为$z\geq0$。两对称平面中的截线分别为$x^2=2pz,y=0$与$y^2=2qz,x=0$。平面$z=h$的截口为$x^2/p+y^2/q=2h$：$h>0$时为半轴长$\sqrt{2ph},\sqrt{2qh}$的椭圆，$h=0$时为原点，$h<0$时为空。

[![图33：椭圆抛物面与双曲抛物面；标出坐标面中的抛物线与水平截口。](/figures/analytic-geometry/theorems/ch3-paraboloids.svg)](/figures/analytic-geometry/theorems/ch3-paraboloids.svg)

图33：椭圆抛物面与双曲抛物面；标出坐标面中的抛物线与水平截口。

#### 3.3.7 双曲抛物面的方程与截口

教材第3章§3，式(3.6)，pp.98–99

双曲抛物面（马鞍面）为

$$
\frac{x^2}{p}-\frac{y^2}{q}=2z,\qquad p,q>0.
$$

$Oxz$、$Oyz$为对称平面，$z$轴为对称轴。与$Oxy$平面的交线是$x/\sqrt p\pm y/\sqrt q=0,z=0$两条相交直线；与$Oxz$、$Oyz$平面的交线分别是$x^2=2pz,y=0$、$y^2=-2qz,x=0$。$z=h\ne0$的截口是

$$
\frac{x^2}{p}-\frac{y^2}{q}=2h,\qquad z=h.
$$

$h>0$时双曲线实轴平行$x$轴，$h<0$时实轴平行$y$轴。

#### 3.3.8 马鞍面的平移生成

教材第3章§3，双曲抛物面的平移解释，pp.98–99

将抛物线$y^2=-2qz,x=0$平行移动，使它的顶点沿抛物线$x^2=2pz,y=0$移动，且保持轴方向及开口不变，所得轨迹恰为马鞍面$x^2/p-y^2/q=2z$。相应的一组分量参数可写成$x=s,y=t,z=s^2/(2p)-t^2/(2q)$，其中$s,t\in\mathbb R$。

#### 3.3.9 二次曲面的十七类：椭球面类与双曲面类

教材第3章§3，3.4小节第(1)–(5)类，p.99

教材将二次曲面分为十七类；以下标准式均取所出现的$a,b,c,p,q>0$。前五类为

$$
\begin{array}{cl}(1)\ \text{椭球面}&x^2/a^2+y^2/b^2+z^2/c^2=1,\\(2)\ \text{虚椭球面}&x^2/a^2+y^2/b^2+z^2/c^2=-1,\\(3)\ \text{点}&x^2/a^2+y^2/b^2+z^2/c^2=0,\\(4)\ \text{单叶双曲面}&x^2/a^2+y^2/b^2-z^2/c^2=1,\\(5)\ \text{双叶双曲面}&x^2/a^2+y^2/b^2-z^2/c^2=-1.\end{array}
$$

第(2)类的实点集为空，第(3)类仅为原点；虚曲面不应画成有实点的实体。

#### 3.3.10 二次曲面的十七类：抛物面类与二次锥面

教材第3章§3，3.4小节第(6)–(8)类，pp.99–100

接续教材的分类次序：

$$
\begin{array}{cl}(6)\ \text{椭圆抛物面}&x^2/p+y^2/q=2z,\\(7)\ \text{双曲抛物面}&x^2/p-y^2/q=2z,\\(8)\ \text{二次锥面}&x^2/a^2+y^2/b^2-z^2/c^2=0.\end{array}
$$

第(8)类的顶点为原点，$z=h\ne0$的截口是椭圆；$a=b$时为以$z$轴为轴的圆锥面。

#### 3.3.11 二次曲面的十七类：二次柱面九类

教材第3章§3，3.4小节第(9)–(17)类，p.100；图34

二次柱面类共九种，包含退化与虚的情形：

$$
\begin{array}{cl}(9)\ \text{椭圆柱面}&x^2/a^2+y^2/b^2=1,\\(10)\ \text{虚椭圆柱面}&x^2/a^2+y^2/b^2=-1,\\(11)\ \text{直线}&x^2/a^2+y^2/b^2=0,\\(12)\ \text{双曲柱面}&x^2/a^2-y^2/b^2=1,\\(13)\ \text{一对相交平面}&x^2/a^2-y^2/b^2=0,\\(14)\ \text{抛物柱面}&x^2=2py,\\(15)\ \text{一对平行平面}&x^2=a^2,\\(16)\ \text{一对虚平行平面}&x^2=-a^2,\\(17)\ \text{一对重合平面}&x^2=0.\end{array}
$$

第(10)、(16)类实点集为空；第(11)类为$z$轴；第(13)类为$x/a\pm y/b=0$两个平面；第(15)类为$x=\pm a$；第(17)类的几何点集为平面$x=0$，方程具有二重因子。十七类的完备分类证明在本书此处未展开。

[![图34：退化实二次曲面：点、直线、相交平面、平行平面、重合平面；三种虚类均没有实点，用空集符号表示。](/figures/analytic-geometry/theorems/ch3-degenerate.svg)](/figures/analytic-geometry/theorems/ch3-degenerate.svg)

图34：退化实二次曲面：点、直线、相交平面、平行平面、重合平面；三种虚类均没有实点，用空集符号表示。

### 3.4 直纹面

#### 3.4.1 直纹面与直母线族

教材第3章§4，定义4.1及其后正文，p.102

若曲面$S$上存在一族整条直线，且$S$的每一点均属于该族中至少一条直线，则$S$为直纹面，这族直线为一族直母线。柱面、锥面都是典型直纹面。非退化实椭球面、双叶双曲面和椭圆抛物面不含能够构成这种覆盖的整条直线，因而不是直纹面。教材把退化、虚的柱面归入柱面分类；虚类的实点集为空，不据此绘制实母线。

#### 3.4.2 单叶双曲面与双曲抛物面是直纹面

教材第3章§4，定理4.1，p.102

单叶双曲面和双曲抛物面均为直纹面，而且各有两族直母线。以下保留教材的代数参数：单叶双曲面用不全为零的齐次参数$\mu,\nu$，双曲抛物面用实参数$\lambda$，不采用三角函数作为直母线参数。

#### 3.4.3 单叶双曲面的两族直母线

教材第3章§4，式(4.7)、(4.10)，pp.103–104；图35

对单叶双曲面$x^2/a^2+y^2/b^2-z^2/c^2=1$，其中$a,b,c>0$，两族直母线分别是

$$
\mathcal L_{\mu,\nu}:\quad\begin{cases}\mu\left(\dfrac{x}{a}+\dfrac{z}{c}\right)+\nu\left(1+\dfrac{y}{b}\right)=0,\\[3pt]\mu\left(1-\dfrac{y}{b}\right)+\nu\left(\dfrac{x}{a}-\dfrac{z}{c}\right)=0;\end{cases}
$$

$$
\mathcal M_{\mu,\nu}:\quad\begin{cases}\mu\left(\dfrac{x}{a}+\dfrac{z}{c}\right)+\nu\left(1-\dfrac{y}{b}\right)=0,\\[3pt]\mu\left(1+\dfrac{y}{b}\right)+\nu\left(\dfrac{x}{a}-\dfrac{z}{c}\right)=0.\end{cases}
$$

两式均取$(\mu,\nu)\in\mathbb R^2\setminus\{(0,0)\}$。每个参数对确定一条整直线，且整条线位于曲面上；各族均覆盖整个曲面。

[![图35：蓝、橙两色分别表示两族直母线。所有曲线段均按齐次参数公式生成直线，并包含 $\mu$=0 的母线。](/figures/analytic-geometry/theorems/ch3-ruled-hyperboloid.svg)](/figures/analytic-geometry/theorems/ch3-ruled-hyperboloid.svg)

图35：蓝、橙两色分别表示两族直母线。所有曲线段均按齐次参数公式生成直线，并包含 $\mu$=0 的母线。

#### 3.4.4 齐次参数比例与不能漏掉的特殊母线

教材第3章§4，式(4.7)后正文及式(4.10)，p.104

同一族中，参数对$(\mu_1,\nu_1)$、$(\mu_2,\nu_2)$成比例当且仅当给出同一条母线；不成比例时给出不同母线。因此每族本质上只依赖一个齐次比$[\mu:\nu]$。不得直接令$\mu=1$而漏去$\mu=0$的情形。具体地：

$$
\begin{array}{c|cc}&\mu=0,\ \nu\ne0&\nu=0,\ \mu\ne0\\\hline\mathcal L&y=-b,\ x/a-z/c=0&y=b,\ x/a+z/c=0\\\mathcal M&y=b,\ x/a-z/c=0&y=-b,\ x/a+z/c=0\end{array}
$$

保留不全为零的$\mu,\nu$即可完整包含这些母线，无须三角参数。

#### 3.4.5 双曲抛物面的两族直母线及原书勘误

教材第3章§4，式(4.12)–(4.13)，pp.104–105；图36

对$x^2/p-y^2/q=2z$，其中$p,q>0$，两族直母线为

$$
\begin{cases}\dfrac{x}{\sqrt p}+\dfrac{y}{\sqrt q}+2\lambda=0,\\[3pt]z+\lambda\left(\dfrac{x}{\sqrt p}-\dfrac{y}{\sqrt q}\right)=0,\end{cases}\qquad\lambda\in\mathbb R;
$$

$$
\begin{cases}\lambda\left(\dfrac{x}{\sqrt p}+\dfrac{y}{\sqrt q}\right)+z=0,\\[3pt]2\lambda+\left(\dfrac{x}{\sqrt p}-\dfrac{y}{\sqrt q}\right)=0,\end{cases}\qquad\lambda\in\mathbb R.
$$

勘误：所用第三版扫描本p.105式(4.13)第二式印为$2\lambda(x/\sqrt p-y/\sqrt q)=0$，漏印了$2\lambda$后的加号。上式按$(x/\sqrt p+y/\sqrt q)(x/\sqrt p-y/\sqrt q)=2z$校正；若照误式相乘则不能得到一族完整直母线。

[![图36：双曲抛物面的两族直母线；每条彩线均为直线，参数 $\lambda$ 遍历实数。](/figures/analytic-geometry/theorems/ch3-ruled-saddle.svg)](/figures/analytic-geometry/theorems/ch3-ruled-saddle.svg)

图36：双曲抛物面的两族直母线；每条彩线均为直线，参数 $\lambda$ 遍历实数。

#### 3.4.6 同族、异族直母线的位置关系（习题命题补充）

教材第3章习题3.4第6–10题，p.106

以下为教材所列一般性证明命题，单独标明其习题来源。双曲抛物面：同族所有直母线平行于一个固定平面，同族任意两条不同母线异面，异族任意两条母线相交。单叶双曲面：同族任意两条不同母线异面；同族任意三条不同母线不都平行于同一个平面；异族任意两条母线共面，可能相交，也可能平行。因此不能把“异族必相交”从马鞍面移用于单叶双曲面。

#### 3.4.7 过点直母线与腰椭圆（习题命题补充）

教材第3章习题3.4第12–13题，p.106

单叶双曲面上每一点恰有两条直母线，分别来自两族；每条直母线都与腰椭圆相交。若$M_0(x_0,y_0,z_0)^{\mathrm T}$在$x^2/a^2+y^2/b^2-z^2/c^2=1$上，非零方向$(X,Y,Z)^{\mathrm T}$给出的过点直线为直母线的充要条件是

$$
\frac{x_0X}{a^2}+\frac{y_0Y}{b^2}-\frac{z_0Z}{c^2}=0,\qquad\frac{X^2}{a^2}+\frac{Y^2}{b^2}-\frac{Z^2}{c^2}=0.
$$

这里的分量参数方程为$x=x_0+tX,y=y_0+tY,z=z_0+tZ$。双曲抛物面上的每一点也各属于两族中的唯一一条母线，可由前述两族方程直接读出参数。

### 3.5 曲面的交线，曲面所围成的区域

#### 3.5.1 斜二测法与正等测法

教材第3章§5，5.1小节，pp.106–107；图37

斜二测法（斜二等轴测投影法）：纸面上$z$轴竖直向上、$y$轴水平向右，$x$轴与$y,z$轴分别成$135^\circ$；$y,z$两轴的单位长度相等，$x$轴单位长度取其一半。正等测法（正等轴测投影法）：$z$轴竖直向上，三轴两两成$120^\circ$，三轴单位长度相等。画图时应把空间长度与纸面轴向缩短比区别开。

[![图37：斜二测、正等测、正二测三种轴测图；标注 1 的位置表示各坐标轴的一个空间单位。](/figures/analytic-geometry/theorems/ch3-axonometry.svg)](/figures/analytic-geometry/theorems/ch3-axonometry.svg)

图37：斜二测、正等测、正二测三种轴测图；标注 1 的位置表示各坐标轴的一个空间单位。

#### 3.5.2 正二测法

教材第3章§5，5.1小节，p.107

正二测法（正二等轴测投影法）：$z$轴竖直向上；$x$轴与$z$轴夹角为$90^\circ+\alpha$，$y$轴与$z$轴夹角为$90^\circ+\beta$，其中$\alpha,\beta$为锐角，教材作图取$\tan\alpha\approx7/8,\tan\beta\approx1/8$。$z,y$两轴单位长度相等，$x$轴单位长度取其一半。也可交换缩短的轴：取$x,z$等长、$y$半长，同时按教材图3.25调整正负轴向。

#### 3.5.3 由平面曲线和截口作曲面图

教材第3章§5，5.1小节，p.108

先选定轴测画法，在相应坐标平面中画曲线的顶点、渐近线或其他特征点，再按坐标作图；曲面可由若干平行平面截口和坐标面截线确定主要形状。绘制空间图形时，前后遮挡应区分可见线与不可见线。

#### 3.5.4 空间曲线的坐标投影

教材第3章§5，5.2小节，p.109；图38

点$M(x,y,z)^{\mathrm T}$在三个坐标面上的正投影分别为$M_1(x,y,0)^{\mathrm T}$、$M_2(x,0,z)^{\mathrm T}$、$M_3(0,y,z)^{\mathrm T}$。在$M,M_1,M_2,M_3$四点中，任意已知两点，即可依据坐标一致性确定其余两点；在利用两个投影恢复点时应保留对应关系。曲线$\Gamma$上各点在某坐标面上的投影组成其投影线。

[![图38：空间曲线 Γ 及其在 Oxy 平面的投影；竖直虚线表示对应点投影，不能丢失同一参数的对应关系。](/figures/analytic-geometry/theorems/ch3-projection.svg)](/figures/analytic-geometry/theorems/ch3-projection.svg)

图38：空间曲线 Γ 及其在 Oxy 平面的投影；竖直虚线表示对应点投影，不能丢失同一参数的对应关系。

#### 3.5.5 投影柱面、消元与实数范围

教材第3章§5，5.2小节，pp.109–111

曲线$\Gamma$沿$z$轴方向的投影柱面由所有经过$\Gamma$上点且平行$z$轴的直线组成；它与$Oxy$平面的交线即投影线。若$\Gamma$由$F(x,y,z)=G(x,y,z)=0$给出，可消去$z$求投影柱面方程，再与$z=0$联立。不过实际投影还须满足“存在实数$z$使原方程组成立”，因此消元方程的全部实轨迹可能大于真实投影；教材例子中的投影柱面可以只是消元所得柱面的一部分。画曲面交线时可结合两曲面图形、投影线及特殊交点恢复空间形状。

#### 3.5.6 曲面所围区域的画法

教材第3章§5，5.3小节，pp.112–113

多个曲面共同围成的区域须同时满足相应的不等式。作图时先画各边界曲面，求其交线或投影，再判断每个不等式选取边界哪一侧，最后取这些条件的公共部分。边界曲面本身与它们围成的实体应予区别；被别的条件截去的曲面部分不是最终区域的边界。

## 第五章 二次曲线方程的化简及其类型和性质

### 5.1 二次曲线方程的化简及其类型

#### 5.1.1 一般二次方程及其两个矩阵

教材第5章章首，pp.145–146；图39

本章采用右手直角坐标系。二次曲线 $S$ 的一般方程为

$$
F(x,y)=a_{11}x^2+2a_{12}xy+a_{22}y^2+2a_1x+2a_2y+a_0=0,
$$

其中 $a_{11},a_{12},a_{22}$ 不全为零。记

$$
\begin{aligned}\varphi(x,y)&=a_{11}x^2+2a_{12}xy+a_{22}y^2,\\
A&=\begin{pmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{pmatrix},\qquad
P=\begin{pmatrix}a_{11}&a_{12}&a_1\\a_{12}&a_{22}&a_2\\a_1&a_2&a_0\end{pmatrix}.
\end{aligned}
$$

$A$ 是二次项部分的矩阵，$P$ 是二次方程的矩阵；两者均为实对称矩阵。

[![图39：同一椭圆在原坐标轴与主轴坐标中具有不同方程。](/figures/analytic-geometry/theorems/ch5-reduction.svg)](/figures/analytic-geometry/theorems/ch5-reduction.svg)

图39：同一椭圆在原坐标轴与主轴坐标中具有不同方程。

#### 5.1.2 特征值、特征向量与二阶实对称矩阵

教材第5章§1.1，定义1.1、定理1.1，pp.148–149；图39

对实方阵 $A$，若实数 $\lambda_0$ 与非零实列向量 $\gamma$ 满足 $A\gamma=\lambda_0\gamma$，则分别称为特征值和属于它的特征向量。二阶实对称矩阵 $A$ 的两个特征值为

$$
\lambda^2-(a_{11}+a_{22})\lambda+|A|=0
$$

的两个实根。判别式为 $(a_{11}-a_{22})^2+4a_{12}^2\geqslant0$。两个特征值相等，当且仅当 $a_{11}=a_{22}$ 且 $a_{12}=0$；不相等时，属于不同特征值的任意两个特征向量正交。属于 $\lambda_i$ 的全部特征向量恰为 $(\lambda_i I-A)X=0$ 的全部非零解。等特征值情形 $A=\lambda I$，任取一对正交单位向量即可。

校勘：原书 p.149 定理1.1(1)将 $a_{11}=a_{22}$ 中的下标误排为 $a_{12}$；此处依据同页判别式改正。

#### 5.1.3 以正交特征向量转轴消去交叉项

教材第5章§1.1，pp.146–150；图39

取 $A$ 的两个正交单位特征向量 $\eta_1=(b_{11},b_{21})^{\mathrm T}$、$\eta_2=(b_{12},b_{22})^{\mathrm T}$，调整符号使 $T=(\eta_1,\eta_2)$ 满足 $|T|=1$。作转轴

$$
\begin{cases}x=b_{11}x'+b_{12}y',\\y=b_{21}x'+b_{22}y'.\end{cases}
$$

新方程中交叉项消失：

$$
\lambda_1x'^2+\lambda_2y'^2+2a'_1x'+2a'_2y'+a_0=0,
$$

其中 $a'_1=a_1b_{11}+a_2b_{21}$、$a'_2=a_1b_{12}+a_2b_{22}$。等价地，$T^{\mathrm T}AT=\operatorname{diag}(\lambda_1,\lambda_2)$。转轴后的二次项只取决于原二次项及转角，一次项只取决于原一次项及转角，常数项不变。

沿用教材也记 $a'_{11}=\lambda_1$、$a'_{22}=\lambda_2$、$a'_0=a_0$。若以转角 $\theta$ 写转轴，则 $x=x'\cos\theta-y'\sin\theta$、$y=x'\sin\theta+y'\cos\theta$。

#### 5.1.4 非零特征值情形的移轴与三种椭圆型曲线

教材第5章§1.2，pp.151–152；图40

设 $\lambda_1\lambda_2\ne0$。置

$$
\begin{aligned}x^*&=x'+\frac{a'_1}{\lambda_1},&y^*&=y'+\frac{a'_2}{\lambda_2},\\
c_1^*&=a_0-\frac{(a'_1)^2}{\lambda_1}-\frac{(a'_2)^2}{\lambda_2}.
\end{aligned}
$$

则新方程为 $\lambda_1x^{*2}+\lambda_2y^{*2}+c_1^*=0$。当 $\lambda_1,\lambda_2$ 同号时称椭圆型，分为三种情形：

$$
\begin{array}{c|c|c}
\text{条件}&\text{最简方程}&\text{类别}\\\hline
c_1^*\lambda_1<0&x^{*2}/a_1^2+y^{*2}/b_1^2=1&\text{椭圆}\\
c_1^*\lambda_1>0&x^{*2}/a_2^2+y^{*2}/b_2^2=-1&\text{虚椭圆}\\
c_1^*=0&x^{*2}/a_3^2+y^{*2}/b_3^2=0&\text{一个点}
\end{array}
$$

教材中的尺度参数为

$$
\begin{aligned}
a_1^2&=-c_1^*/\lambda_1,&b_1^2&=-c_1^*/\lambda_2,\\
a_2^2&=c_1^*/\lambda_1,&b_2^2&=c_1^*/\lambda_2,\\
a_3^2&=1/|\lambda_1|,&b_3^2&=1/|\lambda_2|.
\end{aligned}
$$

每一行仅在对应情形使用，因而其中的尺度平方均为正。虚椭圆无实点；一个点即新原点。

[![图40：九类二次曲线；虚椭圆和虚平行直线没有实轨迹。](/figures/analytic-geometry/theorems/ch5-nine-conics.svg)](/figures/analytic-geometry/theorems/ch5-nine-conics.svg)

图40：九类二次曲线；虚椭圆和虚平行直线没有实轨迹。

#### 5.1.5 双曲型曲线的两种情形

教材第5章§1.2，pp.152–153；图40

当 $\lambda_1,\lambda_2$ 异号时称双曲型。完成上述配方移轴后，$c_1^*\ne0$ 时得到双曲线。若 $c_1^*\lambda_1<0$，则

$$
\frac{x^{*2}}{a_4^2}-\frac{y^{*2}}{b_4^2}=1,\qquad a_4^2=-\frac{c_1^*}{\lambda_1},\quad b_4^2=\frac{c_1^*}{\lambda_2}.
$$

若 $c_1^*\lambda_1>0$，则

$$
-\frac{x^{*2}}{a_5^2}+\frac{y^{*2}}{b_5^2}=1,\qquad a_5^2=\frac{c_1^*}{\lambda_1},\quad b_5^2=-\frac{c_1^*}{\lambda_2}.
$$

第二式再转轴 $\pi/2$ 可成为第一种形式。若 $c_1^*=0$，则为一对相交直线，方程可写成

$$
\frac{x^{*2}}{a_3^2}-\frac{y^{*2}}{b_3^2}=0,\qquad a_3^2=\frac1{|\lambda_1|},\quad b_3^2=\frac1{|\lambda_2|}.
$$

此处改正了原书 p.153 式(1.18)第二平方项变量及分母的明显排印错误。

#### 5.1.6 零特征值情形的移轴与四种抛物型曲线

教材第5章§1.2，pp.153–154；图40

当一个特征值为零时称抛物型。取 $\lambda_1=0$、$\lambda_2\ne0$，新方程为 $\lambda_2y'^2+2a'_1x'+2a'_2y'+a_0=0$。若 $a'_1\ne0$，置

$$
\begin{aligned}x^*&=x'+\frac{a_0\lambda_2-(a'_2)^2}{2a'_1\lambda_2},\\y^*&=y'+\frac{a'_2}{\lambda_2},\end{aligned}
$$

得到抛物线 $\lambda_2y^{*2}+2a'_1x^*=0$。若 $a'_1=0$，置 $x^*=x'$、$y^*=y'+a'_2/\lambda_2$，得到

$$
\lambda_2y^{*2}+c_2^*=0,\qquad c_2^*=a_0-\frac{(a'_2)^2}{\lambda_2}.
$$

$c_2^*$ 与 $\lambda_2$ 异号、同号、等于零时，依次为一对平行直线、一对虚平行直线、一对重合直线；标准式分别为 $y^{*2}=b^2$、$y^{*2}=-b^2$、$y^{*2}=0$，$b>0$。

#### 5.1.7 九类二次曲线与圆锥曲线

教材第5章§1.2，p.154；图40

二次曲线经直角坐标变换共有九类：椭圆、虚椭圆、一个点；双曲线、一对相交直线；抛物线、一对平行直线、一对虚平行直线、一对重合直线。椭圆、双曲线、抛物线三类统称圆锥曲线。圆作为椭圆的特殊情形计入。

### 5.2 二次曲线的不变量

#### 5.2.1 正交不变量、矩阵的迹与迹的运算律

教材第5章§2.1，定义2.2、性质2.1和2.2，pp.158–160；图39

二次方程系数的一个确定函数，如果在任意直角坐标变换下其值不变，称为正交不变量。方阵 $A=(a_{ij})$ 的迹定义为 $\operatorname{tr}(A)=\sum_i a_{ii}$。对同阶方阵 $A,B$ 与实数 $k$，

$$
\begin{aligned}\operatorname{tr}(A+B)&=\operatorname{tr}(A)+\operatorname{tr}(B),\\
\operatorname{tr}(kA)&=k\operatorname{tr}(A),\\
\operatorname{tr}(AB)&=\operatorname{tr}(BA).
\end{aligned}
$$

这里的不变性针对坐标变换后的同一多项式；若把整个方程另乘非零常数，各不变量的数值一般会随之缩放。

#### 5.2.2 三个正交不变量

教材第5章§2.1，定理2.1，pp.159–162；图39

令

$$
\begin{aligned}I_1&=a_{11}+a_{22}=\operatorname{tr}(A),\\
I_2&=\begin{vmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}^2,\\
I_3&=\begin{vmatrix}a_{11}&a_{12}&a_1\\a_{12}&a_{22}&a_2\\a_1&a_2&a_0\end{vmatrix}=|P|.
\end{aligned}
$$

$I_1,I_2,I_3$ 在任意直角坐标变换下都不变。二次项矩阵的两个特征值满足 $\lambda_1+\lambda_2=I_1$、$\lambda_1\lambda_2=I_2$。

#### 5.2.3 半不变量及其适用条件

教材第5章§2.1，定理2.2，pp.162–164；图40

令

$$
\begin{aligned}K_1&=\begin{vmatrix}a_{11}&a_1\\a_1&a_0\end{vmatrix}+\begin{vmatrix}a_{22}&a_2\\a_2&a_0\end{vmatrix}\\
&=(a_{11}+a_{22})a_0-a_1^2-a_2^2.
\end{aligned}
$$

$K_1$ 在转轴下不变；当 $I_2=I_3=0$ 时，$K_1$ 在移轴下也不变。教材称 $K_1$ 为半不变量。对一般二次曲线，不能把 $K_1$ 视为移轴不变量。

#### 5.2.4 椭圆型与双曲型的最简方程

教材第5章§2.2，pp.164–165；图39

若 $I_2\ne0$，令 $\lambda_1,\lambda_2$ 为 $\lambda^2-I_1\lambda+I_2=0$ 的两个实根，则经过转轴、移轴可得

$$
\lambda_1x^{*2}+\lambda_2y^{*2}+\frac{I_3}{I_2}=0.
$$

$I_2>0$ 时为椭圆型，$I_2<0$ 时为双曲型。此式给出曲线的类型和半轴尺度，但原坐标中的位置还须由中心和主方向确定。

#### 5.2.5 抛物型的最简方程

教材第5章§2.2，p.165；图40

若 $I_2=0$，则 $I_1\ne0$。当 $I_3\ne0$ 时为抛物线，且 $-I_3/I_1>0$，最简方程可写为

$$
I_1y^{*2}\pm2\sqrt{-\frac{I_3}{I_1}}\,x^*=0.
$$

当 $I_3=0$ 时，最简方程为

$$
I_1y^{*2}+\frac{K_1}{I_1}=0.
$$

其中 $K_1<0$、$K_1>0$、$K_1=0$ 依次表示实平行线、虚平行线、重合线。

#### 5.2.6 全部九类的系数判别

教材第5章§2.2，表5.1，p.166；图40

以下各行均以 $a_{11},a_{12},a_{22}$ 不全为零为前提：

$$
\begin{array}{c|c|l}
\text{型别}&\text{附加条件}&\text{类别}\\\hline
I_2>0&I_1I_3<0&\text{椭圆}\\
I_2>0&I_1I_3>0&\text{虚椭圆}\\
I_2>0&I_3=0&\text{一个点}\\
I_2<0&I_3\ne0&\text{双曲线}\\
I_2<0&I_3=0&\text{一对相交直线}\\
I_2=0&I_3\ne0&\text{抛物线}\\
I_2=0&I_3=0,\ K_1<0&\text{一对平行直线}\\
I_2=0&I_3=0,\ K_1>0&\text{一对虚平行直线}\\
I_2=0&I_3=0,\ K_1=0&\text{一对重合直线}
\end{array}
$$

### 5.3 二次曲线的对称中心

#### 5.3.1 直线代入式与全部交点情形

教材第5章§3.1，pp.170–171；图41

记

$$
F_1(x,y)=a_{11}x+a_{12}y+a_1,\qquad F_2(x,y)=a_{12}x+a_{22}y+a_2.
$$

直线 $x=x_0+\mu t,\ y=y_0+\nu t$，其中 $(\mu,\nu)\ne(0,0)$，与曲线的交点参数满足

$$
\varphi(\mu,\nu)t^2+2[\mu F_1(x_0,y_0)+\nu F_2(x_0,y_0)]t+F(x_0,y_0)=0.
$$

为简记，令 $q=\varphi(\mu,\nu)$、$b=\mu F_1(x_0,y_0)+\nu F_2(x_0,y_0)$、$c=F(x_0,y_0)$。若 $q\ne0$，判别式 $\Delta=4(b^2-qc)$ 为正、零、负，依次对应两个不同实交点、两个重合交点、无实交点（教材称两个共轭虚交点）。若 $q=0,b\ne0$，有一个交点；若 $q=b=c=0$，整条直线在曲线上；若 $q=b=0,c\ne0$，没有交点。

[![图41：割线、切线及无实交点的直线；二次方程的判别式区分三种情形。](/figures/analytic-geometry/theorems/ch5-line-intersection.svg)](/figures/analytic-geometry/theorems/ch5-line-intersection.svg)

图41：割线、切线及无实交点的直线；二次方程的判别式区分三种情形。

#### 5.3.2 渐近方向及三类型的方向数

教材第5章§3.1，定义3.1、定理3.1，pp.171–172；图42

非零方向 $(\mu,\nu)^{\mathrm T}$ 满足 $\varphi(\mu,\nu)=0$ 时称渐近方向，否则称非渐近方向。椭圆型曲线没有渐近方向；双曲型曲线有两个；抛物型曲线只有一个。抛物型的唯一方向可取

$$
(-a_{12},a_{11})^{\mathrm T}\quad\text{或}\quad(-a_{22},a_{12})^{\mathrm T},
$$

选其中非零者；两者均非零时互相共线。渐近方向是方向概念，不能把经过任一点的该方向直线都称为渐近线。

[![图42：双曲型有两条渐近方向，双曲线的渐近线还必须经过中心。](/figures/analytic-geometry/theorems/ch5-asymptotes.svg)](/figures/analytic-geometry/theorems/ch5-asymptotes.svg)

图42：双曲型有两条渐近方向，双曲线的渐近线还必须经过中心。

#### 5.3.3 中心方程与移到中心后的方程

教材第5章§3.2，定义3.2、定理3.2，pp.172–174；图43

沿用教材包括虚交点的代数约定，$O'(x_0,y_0)^{\mathrm T}$ 为二次曲线的对称中心，当且仅当

$$
\begin{cases}a_{11}x_0+a_{12}y_0+a_1=0,\\a_{12}x_0+a_{22}y_0+a_2=0.\end{cases}
$$

以此中心为新原点，令 $x=x'+x_0$、$y=y'+y_0$，方程成为

$$
a_{11}x'^2+2a_{12}x'y'+a_{22}y'^2+F(x_0,y_0)=0,
$$

不再含一次项。对于虚椭圆、虚平行线，中心按上述代数方程理解，不能把空实点集的任意集合论对称性当作此处的中心概念。

[![图43：椭圆的唯一中心、平行线的中心直线与抛物线的无中心情形。](/figures/analytic-geometry/theorems/ch5-centers.svg)](/figures/analytic-geometry/theorems/ch5-centers.svg)

图43：椭圆的唯一中心、平行线的中心直线与抛物线的无中心情形。

#### 5.3.4 中心的个数与中心直线

教材第5章§3.2，定理3.3，pp.174–175；图43

当 $I_2\ne0$ 时有唯一中心。当 $I_2=I_3=0$ 时有无穷多个中心，构成一条中心直线；其方程取 $F_1(x,y)=0$、$F_2(x,y)=0$ 中非恒等为零的那一个，两式都非零时等价。当 $I_2=0,I_3\ne0$ 时没有中心。

因此椭圆型和双曲型都是中心型曲线；抛物线是无心曲线；实平行线、虚平行线、重合线都是线心曲线。无心曲线与线心曲线合称非中心型曲线。

### 5.4 二次曲线的直径和对称轴

#### 5.4.1 直径方程与平行弦中点

教材第5章§4.1，定理4.1、定义4.2，pp.176–177；图44

二次曲线沿非渐近方向 $(\mu,\nu)^{\mathrm T}$ 的平行弦中点均在一条直线上，称为共轭于该方向的直径。其方程为

$$
\mu F_1(x,y)+\nu F_2(x,y)=0,
$$

即

$$
(a_{11}\mu+a_{12}\nu)x+(a_{12}\mu+a_{22}\nu)y+a_1\mu+a_2\nu=0.
$$

非渐近条件保证一次项系数不全为零。这里“共轭于方向的直径”是中点所在直线，其方向一般并不等于原弦的方向。

[![图44：平行弦中点共线；该中点线是共轭于弦方向的直径。](/figures/analytic-geometry/theorems/ch5-diameters.svg)](/figures/analytic-geometry/theorems/ch5-diameters.svg)

图44：平行弦中点共线；该中点线是共轭于弦方向的直径。

#### 5.4.2 直径经过中心

教材第5章§4.1，推论4.1，p.177；图44

中心型曲线和线心曲线的直径一定经过中心。对线心曲线，所有中心都在该直径上，故各非渐近方向所得的直径均与中心直线重合。

#### 5.4.3 共轭方向的坐标与二次型恒等式

教材第5章§4.1，命题4.1，pp.177–178；图44

将共轭于非渐近方向 $(\mu,\nu)^{\mathrm T}$ 的直径方向具体取为

$$
\begin{cases}\mu^*=-a_{12}\mu-a_{22}\nu,\\\nu^*=a_{11}\mu+a_{12}\nu,\end{cases}
$$

则

$$
\varphi(\mu^*,\nu^*)=I_2\varphi(\mu,\nu).
$$

此等式对应上述规定的方向代表向量；若再把方向代表向量乘常数，二次型值也按其平方缩放。令

$$
B=\begin{pmatrix}-a_{12}&-a_{22}\\a_{11}&a_{12}\end{pmatrix},
$$

同一事实也可写成 $B^{\mathrm T}AB=I_2A$。

#### 5.4.4 一对共轭直径

教材第5章§4.1，p.178；图44

对中心型曲线，$I_2\ne0$，上述恒等式表明直径方向为非渐近方向，当且仅当其共轭的弦方向为非渐近方向。因此可再作共轭于该直径方向的另一条直径，两者互为共轭，称一对共轭直径。它们经过同一中心，但一般并不垂直。

#### 5.4.5 对称轴、主方向及其求法

教材第5章§4.2，pp.176、178–180；图45

对称轴 $l$ 的定义是：曲线上每一点关于 $l$ 的对称点仍在曲线上。圆锥曲线的对称轴是一条直径，并且垂直于它所共轭的非渐近方向 $(\mu,\nu)^{\mathrm T}$。该方向须满足

$$
\begin{cases}(a_{11}-\xi)\mu+a_{12}\nu=0,\\a_{12}\mu+(a_{22}-\xi)\nu=0,\end{cases}\qquad(\mu,\nu)\ne(0,0),
$$

其中 $\xi^2-I_1\xi+I_2=0$。属于特征值 $\xi$ 的特征向量方向称主方向。对每个非渐近主方向，方程 $\mu F_1(x,y)+\nu F_2(x,y)=0$ 给出一条对称轴。椭圆和双曲线的两条主轴是一对共轭直径；圆的每条过中心的直线都是对称轴。抛物线的零特征值主方向是渐近方向，只有非零特征值主方向代入该直径式才得到其唯一对称轴。

[![图45：椭圆、双曲线的两条主轴及抛物线的一条对称轴。](/figures/analytic-geometry/theorems/ch5-principal-axes.svg)](/figures/analytic-geometry/theorems/ch5-principal-axes.svg)

图45：椭圆、双曲线的两条主轴及抛物线的一条对称轴。

#### 5.4.6 从特征值判断长轴和实轴

教材第5章§4.3（选学），定理4.2，pp.180–181；图45

对非圆椭圆，取 $A$ 的绝对值较小的特征值为 $\lambda_1$，则长轴方向为属于 $\lambda_1$ 的主方向。对双曲线，取 $A$ 中与 $I_3$ 同号的特征值为 $\lambda_1$，则实轴方向为属于 $\lambda_1$ 的主方向。结合中心方程、对称轴方程和最简方程，便可确定曲线在原坐标系中的位置和形状。圆的两个特征值相等，不区分长短轴。

#### 5.4.7 抛物线的顶点与开口判定

教材第5章§4.3（选学），pp.182–183；图45

抛物线的顶点是抛物线与其唯一对称轴的交点。求得顶点和轴方向后，可以在顶点一侧选取与对称轴垂直的直线，检验它与抛物线是否有实交点；有实交点的一侧即为开口侧。形状由最简方程的焦参数确定。此方法保留教材由原方程确定位置的思路。

### 5.5 二次曲线的切线，双曲线的渐近线

#### 5.5.1 切线定义及曲线上点的切线

教材第5章§5.1，定义5.1、定理5.1，pp.185–186；图46

教材把与二次曲线有两个重合交点、或者整条位于曲线上的直线称为切线。设 $M_0(x_0,y_0)^{\mathrm T}\in S$。过 $M_0$ 的方向 $(\mu,\nu)^{\mathrm T}$ 是切线方向，当且仅当

$$
\mu F_1(x_0,y_0)+\nu F_2(x_0,y_0)=0.
$$

若 $F_1(x_0,y_0),F_2(x_0,y_0)$ 不全为零，则切线唯一，方程为

$$
(x-x_0)F_1(x_0,y_0)+(y-y_0)F_2(x_0,y_0)=0.
$$

若两者都等于零，则按教材的重交点约定，过 $M_0$ 的每条直线都是切线。这个约定在退化曲线处不同于只看光滑分支切向的定义。

[![图46：非奇点处的唯一切线及与之垂直的法线。](/figures/analytic-geometry/theorems/ch5-tangent-normal.svg)](/figures/analytic-geometry/theorems/ch5-tangent-normal.svg)

图46：非奇点处的唯一切线及与之垂直的法线。

#### 5.5.2 奇点及其判别

教材第5章§5.1，定义5.2，p.186；图40

教材称经过它的每一条直线都是曲线切线的点为奇（异）点。对二次曲线，奇点的判别条件为

$$
F(x_0,y_0)=F_1(x_0,y_0)=F_2(x_0,y_0)=0.
$$

必须同时要求该点在曲线上；只有 $F_1=F_2=0$ 而 $F\ne0$ 时，该点是中心而不是曲线上的奇点。

#### 5.5.3 曲线外一点的切线方向判据

教材第5章§5.1，pp.186–187；图47

设 $M_1(x_1,y_1)^{\mathrm T}$ 不在曲线上。方向 $(\mu,\nu)^{\mathrm T}$ 的过点直线是切线，当且仅当

$$
\begin{aligned}\varphi(\mu,\nu)&\ne0,\\
[\mu F_1(x_1,y_1)+\nu F_2(x_1,y_1)]^2-\varphi(\mu,\nu)F(x_1,y_1)&=0.
\end{aligned}
$$

由此求出合格方向后，以 $x=x_1+\mu t,\ y=y_1+\nu t$ 写切线方程。不能丢掉非渐近条件：判别式为零在交点方程已降为一次或常数时，并不表示相切。

[![图47：从曲线外一点作出的两条实切线。](/figures/analytic-geometry/theorems/ch5-external-tangents.svg)](/figures/analytic-geometry/theorems/ch5-external-tangents.svg)

图47：从曲线外一点作出的两条实切线。

#### 5.5.4 过外点的切线对方程与因子筛选

教材第5章§5.1，式(5.6)，pp.187–188；图47

过 $M_1\notin S$ 的切线必满足

$$
\begin{aligned}&\big[(x-x_1)F_1(x_1,y_1)+(y-y_1)F_2(x_1,y_1)\big]^2\\
&\qquad-\varphi(x-x_1,y-y_1)F(x_1,y_1)=0.
\end{aligned}
$$

左端为关于 $x-x_1,y-y_1$ 的二次齐次多项式或零多项式。若为非零多项式，分解出的每个实一次齐次因子给出一条候选直线；逐条检验其方向，只有 $\varphi(\mu,\nu)\ne0$ 的因子才代表切线。不能分解成实一次因子时没有实切线。若左端恒为零，则有

$$
\begin{aligned}F_1(M_1)^2&=a_{11}F(M_1),&F_2(M_1)^2&=a_{22}F(M_1),\\
F_1(M_1)F_2(M_1)&=a_{12}F(M_1),\end{aligned}
$$

因而 $I_2=0$；此时仍应按非渐近方向条件筛选，而非把所有过点直线不加区分地当成切线。上式中的 $F_i(M_1)$ 表示 $F_i(x_1,y_1)$。

#### 5.5.5 抛物型曲线的外点切线情形

教材第5章§5.1，p.187；图47

对非退化抛物线，位于其外侧的点有两条实切线，位于其内侧的点没有实切线；此处内侧指包含焦点的一侧区域。对一对实平行直线或虚平行直线，不存在经过曲线外一点的切线。对一对重合直线，按照教材计重的定义，过曲线外一点且与该重合直线相交的每条直线都是切线。

#### 5.5.6 非奇点处的法线

教材第5章§5.1，定义5.3，p.188；图46

曲线上一点处的法线是过该点并垂直于切线的直线。若 $M_0\in S$ 且 $F_1(x_0,y_0),F_2(x_0,y_0)$ 不全为零，法线方向为 $(F_1(x_0,y_0),F_2(x_0,y_0))^{\mathrm T}$。可统一写成

$$
\begin{cases}x=x_0+F_1(x_0,y_0)t,\\y=y_0+F_2(x_0,y_0)t,\end{cases}\qquad t\in\mathbb R,
$$

或无分母形式 $F_2(x_0,y_0)(x-x_0)-F_1(x_0,y_0)(y-y_0)=0$。两方向分量均非零时，也可用教材的对称式。

#### 5.5.7 双曲线的两条渐近线

教材第5章§5.2，定义5.4，pp.188–189；图42

教材把沿渐近方向且与双曲线没有交点的直线称为渐近线。设 $(\mu_i,\nu_i)^{\mathrm T}$ 是双曲线的两个渐近方向，即 $\varphi(\mu_i,\nu_i)=0$，则对应渐近线方程为

$$
\mu_iF_1(x,y)+\nu_iF_2(x,y)=0,\qquad i=1,2.
$$

每条渐近线均经过双曲线中心；因此也可先求中心，再作沿两个渐近方向的直线。

#### 5.5.8 仿射坐标下仍成立的结论

教材第5章§5.2末，p.189；图44

本章第3、4、5节中，除涉及对称轴与法线的内容外，其余有关直线与曲线位置、中心、直径、共轭直径、切线及渐近线的结论，也可在仿射坐标系中讨论并得到同样结论。对称轴和法线涉及垂直关系，须使用直角坐标的度量结构。

## 收录范围与校勘

来源：丘维声《解析几何（第三版）》，用户提供的扫描本。页码均指教材印刷页码：第一章第1—47页，第二章第48—75页，第三章第76—114页，第五章第145—190页。第四章第115—144页不录入。

原书第105页式(4.13)漏印加号、第149页定理1.1(1)下标误印、第153页式(1.18)第二平方项误印，已在对应条目说明并校正。图像均按公式重新绘制；虚曲线与虚曲面以空集说明，不画成实图形。

## 有编号结论索引

以下为四章全部59条有编号定理、命题、推论与性质。

| 章 | 教材编号 | 本册条目 | 主题 |
|---|---|---|---|
| 1 | 命题1.1 | 1.1.6 | 非零共线向量的唯一数乘表示 |
| 1 | 命题1.2 | 1.1.7 | 两向量共线的线性关系判据 |
| 1 | 推论1.1 | 1.1.8 | 两向量不共线的判据 |
| 1 | 命题1.3 | 1.1.9 | 两个向量的线性组合必与其共面 |
| 1 | 命题1.4 | 1.1.10 | 共面向量关于两个不共线向量的唯一分解 |
| 1 | 命题1.5 | 1.1.11 | 三向量共面的线性关系判据 |
| 1 | 推论1.2 | 1.1.12 | 三向量不共面的判据 |
| 1 | 定理2.1 | 1.2.1 | 几何空间的基与唯一分解定理 |
| 1 | 定理2.2 | 1.2.6 | 两点所确定向量的坐标 |
| 1 | 命题2.1 | 1.2.7 | 平面两向量共线的行列式判据 |
| 1 | 命题2.2 | 1.2.8 | 平面三点共线的行列式判据 |
| 1 | 命题2.3 | 1.2.9 | 空间两向量共线的三个子式判据 |
| 1 | 命题2.4 | 1.2.10 | 定比分点公式 |
| 1 | 推论2.1 | 1.2.11 | 中点坐标公式 |
| 1 | 命题3.1 | 1.3.2 | 内射影的线性性质 |
| 1 | 命题3.2 | 1.3.3 | 分量的长度—夹角公式 |
| 1 | 命题3.3 | 1.3.4 | 内射影与分量的关系 |
| 1 | 命题3.4 | 1.3.5 | 分量的线性性质 |
| 1 | 定理3.1 | 1.3.7 | 内积的运算规律 |
| 1 | 定理3.2 | 1.3.10 | 直角坐标中的内积、长度与距离 |
| 1 | 命题4.1 | 1.4.3 | 外积只取决于垂直分量 |
| 1 | 命题4.2 | 1.4.4 | 单位轴向量的外积表示直角旋转 |
| 1 | 推论4.1 | 1.4.5 | 右手直角基的循环外积 |
| 1 | 定理4.1 | 1.4.6 | 外积的运算规律 |
| 1 | 定理4.2 | 1.4.8 | 右手直角坐标中的外积及面积公式 |
| 1 | 命题4.3 | 1.4.9 | 二重外积公式与不满足结合律 |
| 1 | 命题5.1 | 1.5.2 | 混合积为零的共面判据 |
| 1 | 命题5.2 | 1.5.4 | 仿射坐标中的混合积 |
| 1 | 定理5.1 | 1.5.5 | 右手直角坐标中的混合积 |
| 1 | 定理5.2 | 1.5.6 | 三向量共面的仿射坐标判据 |
| 1 | 推论5.1 | 1.5.7 | 四点共面的仿射坐标判据 |
| 1 | 定理5.3 | 1.5.8 | 拉格朗日恒等式 |
| 2 | 定理1.1 | 2.1.2 | 平面与三元一次方程 |
| 2 | 定理1.2 | 2.1.3 | 平面的方向由一次项系数决定 |
| 2 | 推论1.1 | 2.1.4 | 平行于坐标轴与经过原点的判据 |
| 2 | 定理1.3 | 2.1.5 | 两个平面的三种位置关系 |
| 2 | 命题1.1 | 2.1.6 | 三个平面恰交于一点 |
| 2 | 定理1.4 | 2.1.7 | 有轴平面束的完整方程 |
| 2 | 定理2.1 | 2.2.2 | 点到平面的距离与离差 |
| 2 | 命题4.1 | 2.4.3 | 公垂线的定义、存在性与唯一性 |
| 2 | 命题4.2 | 2.4.4 | 公垂线段实现最短距离 |
| 2 | 命题4.3 | 2.4.5 | 异面直线的距离公式 |
| 3 | 定理2.1 | 3.2.5 | 缺少一个变量的方程与柱面 |
| 3 | 定理2.2 | 3.2.11 | 齐次方程产生锥面 |
| 3 | 定理2.3 | 3.2.12 | 顶点为原点的锥面可用齐次方程表示 |
| 3 | 定理4.1 | 3.4.2 | 单叶双曲面与双曲抛物面是直纹面 |
| 5 | 定理1.1 | 5.1.2 | 特征值、特征向量与二阶实对称矩阵 |
| 5 | 性质2.1 | 5.2.1 | 正交不变量、矩阵的迹与迹的运算律 |
| 5 | 性质2.2 | 5.2.1 | 正交不变量、矩阵的迹与迹的运算律 |
| 5 | 定理2.1 | 5.2.2 | 三个正交不变量 |
| 5 | 定理2.2 | 5.2.3 | 半不变量及其适用条件 |
| 5 | 定理3.1 | 5.3.2 | 渐近方向及三类型的方向数 |
| 5 | 定理3.2 | 5.3.3 | 中心方程与移到中心后的方程 |
| 5 | 定理3.3 | 5.3.4 | 中心的个数与中心直线 |
| 5 | 定理4.1 | 5.4.1 | 直径方程与平行弦中点 |
| 5 | 推论4.1 | 5.4.2 | 直径经过中心 |
| 5 | 命题4.1 | 5.4.3 | 共轭方向的坐标与二次型恒等式 |
| 5 | 定理4.2 | 5.4.6 | 从特征值判断长轴和实轴 |
| 5 | 定理5.1 | 5.5.1 | 切线定义及曲线上点的切线 |
