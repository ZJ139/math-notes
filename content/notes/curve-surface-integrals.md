---
title: "曲线积分与曲面积分：定义、证明、图解与科大精选例题"
description: "沿知识框架编成 §1—§11：四类积分、三大公式、路径无关、场论和微分形式；16 道科大习题详解、12 幅图，另附 58 道带星号原例题。"
subject: "数学分析"
tags: [数学分析, 曲线积分, 曲面积分, 科大数分, Green公式, Gauss公式, Stokes公式, CM bea]
attachment: "notes/curve-surface-integrals-cm-bea.pdf"
math_font: "cm-bea"
created_at: "2026-11-24"
updated_at: "2026-11-24"
---

本讲义以所上传的知识框架为主线，参照常庚哲、史济怀《数学分析教程》第四版下册第 11—13 章展开。正文含 **11 节、16 道精选题、12 幅配图**；四类积分各 4 题，每类均含一般计算与对称性方法。中文使用 Fandol 宋体，数学公式采用 CM bea。

[下载正文 PDF](/files/notes/curve-surface-integrals-cm-bea.pdf) · [阅读独立附录：58 道带星号原例题](/files/notes/curve-surface-appendix-starred-cm-bea.pdf)

附录完整保留所上传例题 PDF 的题目、解答过程及编校注，每题前加“*”。附录独立成册，不纳入正文的节号、题数和例题顺序。

**正文目录**

- [§1 预备知识：曲线、曲面与定向](#1-预备知识曲线曲面与定向)
- [§2 第一型曲线积分](#2-第一型曲线积分)
- [§3 第二型曲线积分](#3-第二型曲线积分)
- [§4 Green 公式与平面路径无关](#4-green-公式与平面路径无关)
- [§5 第一型曲面积分](#5-第一型曲面积分)
- [§6 第二型曲面积分](#6-第二型曲面积分)
- [§7 Gauss 公式、通量与奇点](#7-gauss-公式通量与奇点)
- [§8 Stokes 公式与空间路径无关](#8-stokes-公式与空间路径无关)
- [§9 场论初步](#9-场论初步)
- [§10 微分形式与一般 Stokes 公式](#10-微分形式与一般-stokes-公式)
- [§11 计算思想、技巧与复习索引](#11-计算思想技巧与复习索引)

## §1 预备知识：曲线、曲面与定向

### §1.1 曲线、弧长与单位切向量

**定义**　参数曲线写成 $r(t)=(x(t),y(t),z(t))$，$a\le t\le b$。若 $r\in C^1$ 且 $r'(t)\ne0$，称为正则光滑曲线；有限条这样的曲线首尾相接，称为分段光滑曲线。简单曲线除闭曲线的首尾端点外不重复经过同一点。本文的几何曲线默认只遍历一次；若重复遍历，积分按遍历次数计算。

**定理 1.1（弧长公式）**　光滑曲线的弧长等于

$$
\ell=\int_a^b|r'(t)|\,dt.\qquad\text{(1.1)}
$$

**证明：** 弧长定义为所有内接折线长度的上确界。对分割 $a=t_0<\cdots<t_N=b$，微积分基本定理及三角不等式给出

$$
\sum_i|r(t_i)-r(t_{i-1})|
\le\sum_i\int_{t_{i-1}}^{t_i}|r'(t)|\,dt
=\int_a^b|r'(t)|\,dt.
$$

反之，设 $\omega(\delta)$ 为连续函数 $r'$ 的连续模。在每个小区间任取 $\tau_i$，有

$$
\left|r(t_i)-r(t_{i-1})-r'(\tau_i)\Delta t_i\right|
\le\omega(\|T\|)\Delta t_i.
$$

利用 $||u|-|v||\le|u-v|$ 并求和，内接折线长与 $\sum_i|r'(\tau_i)|\Delta t_i$ 的差不超过 $(b-a)\omega(\|T\|)\to0$。后一个和趋于式（1.1），故上确界也等于式（1.1）。分段光滑情形逐段相加即可。

令 $s(t)=\int_a^t|r'(u)|\,du$，则 $s'(t)>0$，可将 $s$ 用作参数。链式法则给出

$$
 ds=|r'(t)|\,dt,\qquad
 \tau=\frac{dr}{ds}=\frac{r'(t)}{|r'(t)|},\qquad |\tau|=1.\qquad\text{(1.2)}
$$

这里 $dt>0$ 指参数递增。若只写无向长度元，应写 $ds=|r'(t)|\,|dt|$。曲线 $y=y(x)$ 的弧长元为 $\sqrt{1+y'^2}\,|dx|$；极坐标曲线 $r=\rho(\theta)$ 的弧长元为 $\sqrt{\rho^2+\rho'^2}\,|d\theta|$，后式由 $x=\rho\cos\theta,y=\rho\sin\theta$ 求导后平方相加得到。

![曲线分段、弧长和单位切向量。](/figures/curve-surface/arc-tangent.svg)

### §1.2 区域、边界与连通性

区域指连通开集。欧氏空间中的连通开集必可用折线连接任意两点：固定一点，把能用区域内折线连到它的点组成集合；这个集合与其补集都在区域中开，因为每个点附近都有包含于区域的小球，连通性迫使补集为空。

**定义**　线单连通指每条闭曲线都能在区域中连续收缩为一点。星形区域指存在 $p_0$，使任意 $p$ 与 $p_0$ 的整条线段都在区域中；收缩 $H(s,t)=p_0+(1-t)(\gamma(s)-p_0)$ 表明星形区域线单连通。

平面简单闭曲线将平面分成一个有界内部和一个无界外部，这是 **Jordan 曲线定理**。下面证明积分中常用的 $C^2$ 正则简单闭曲线版本；最一般连续曲线的拓扑版本作为背景引用。不能用尚依赖区域边界概念的 Green 公式来循环证明它。

**证明（正则光滑版本）：** 用周期弧长参数 $\gamma(s)$ 描绘曲线，将单位切向量旋转 $90^\circ$ 得 $n(s)$，此时尚不称它为“内”或“外”。管映射 $\Phi(s,t)=\gamma(s)+tn(s)$ 在 $t=0$ 的 Jacobian 非零，由反函数定理局部一一。紧性给出统一的 $\varepsilon>0$，使 $|t|<\varepsilon$ 时全局一一：否则存在两组相异参数，其法向位移趋零而像相同；取收敛子列，曲线的简单性迫使两组弧长参数趋于同一点，再由该点的局部一一性矛盾。因此管邻域去掉曲线后恰有两个连通侧带 $U_+,U_-$。

任取曲线外一点 $p$，取曲线上距它最近的点 $q$。线段 $[p,q)$ 不碰曲线，否则有更近点；极小值条件又给 $p-q$ 垂直于 $q$ 处切线。因此该线段靠近 $q$ 时落在某个侧带中。于是补集的每个连通分量都包含至少一个侧带，分量至多两个。

为证明两个侧带不属于同一分量，定义绕数

$$
 N(p)=\frac1{2\pi}\int\frac{(\gamma_1-p_1)\gamma'_2-(\gamma_2-p_2)\gamma'_1}{|\gamma-p|^2}\,ds.
$$

沿参数区间连续延拓 $\gamma(s)-p$ 的局部辐角，其导数正是被积函数；闭路的首尾方向相同，辐角总增量为 $2\pi$ 的整数倍。所以 $N(p)$ 为整数，且随 $p$ 连续，因而在每个补集分量上常值。局部把曲线写成 $(u,g(u))$，$g(0)=g'(0)=0$，考察 $p_\pm=(0,\pm h)$。直线主项的辐角积分为

$$
 \int_{-\delta}^{\delta}\frac{\pm h}{u^2+h^2}du
 =\pm2\arctan(\delta/h)\longrightarrow\pm\pi.
$$

$C^2$ 条件给 $g(u)=O(u^2),g'(u)=O(u)$；局部曲线相对直线的方向误差在弧端为 $O(\delta)$，而该小弧的向量辐角可连续选取，所以两者角增量的误差也是 $O(\delta)$。其余曲线远离该点，对 $p_+$ 与 $p_-$ 的积分差趋于零。先令 $h\to0$，再令 $\delta\to0$，得两侧绕数之差为 $1$。故两侧不能连通，补集恰有两个分量。

充分大圆之外连通且不碰曲线，故只有一个分量无界；另一个有界。曲线上任一点的任意邻域都同时接触两个侧带，所以两分量的共同边界恰为原曲线。有限个普通角点可在互不相交的小邻域内圆滑化，并通过局部连续一一形变把原弧送到圆滑弧，分离结论不变。以下对给定的分段光滑区域及其边界应用积分定理。对这样的平面区域，“无洞”与线单连通相对应。

空间中须区分两种障碍。球壳 $1<|x|<2$ 中的闭曲线可收缩，却包含一个不能在球壳内填成实体的球面；实心环体的核心圆周不能收缩。框架中的“面单连通”采用经典教材的几何用语：区域内每张嵌入闭曲面所围的有界实体仍包含在区域内。它用于保证 Gauss 公式的填充区域没有越出定义域，不应直接等同于某个未经说明的同伦群条件。

球壳线单连通可这样理解：径向投影先把闭曲线移到同心球面；分段光滑曲线在球面上面积为零，故可选不在曲线上的一点作球极投影，在平面中收缩后再投回。对一般连续回路，先在有限个小球内用折线近似并以直线同伦连接，便化为前一种情形。环体则可连续缩到其核心圆；若核心圆可收缩，向角度圆周的投影会使绕行一次的圆周收缩，这与连续辐角的总增量为 $2\pi$ 矛盾。

### §1.3 曲面的面积元及参数不变性

**定义**　正则参数曲面片为 $r(u,v)=(x(u,v),y(u,v),z(u,v))$，$(u,v)\in D$，其中 $r\in C^1$，$r_u\times r_v\ne0$，且内部不重叠。若分片表示，只允许公共边界重合；这些边界对面积积分无贡献。

微小参数矩形的两条边在线性近似下为 $r_u\Delta u,r_v\Delta v$，其切平面平行四边形面积为 $|r_u\times r_v|\Delta u\Delta v$。据此定义

$$
 dS=J_S\,du\,dv,\qquad J_S=|r_u\times r_v|,
 \qquad |S|=\iint_D J_S\,du\,dv.\qquad\text{(1.3)}
$$

这一定义由切平面面积和的 Riemann 极限给出：$J_S$ 连续，故每个带介点的面积和收敛到式（1.3）。若 $E=r_u\cdot r_u,F=r_u\cdot r_v,G=r_v\cdot r_v$，则展开叉积平方得 $J_S^2=EG-F^2$。这里的 $F$ 是第一基本量，与后文向量场 $\mathbf F$ 区分。

**定理 1.2（参数不变性）**　设 $(u,v)=\phi(\xi,\eta)$ 是 $C^1$ 正则一一参数变换，则式（1.3）不变。

**证明：** 链式法则与叉积双线性给出

$$
 r_\xi\times r_\eta
 =(u_\xi v_\eta-u_\eta v_\xi)(r_u\times r_v).
$$

取模后出现 $|\det D\phi|$，正好与二重积分的换元因子一致。因此两套参数得到相同面积。也由此可见：正 Jacobian 保持曲面定向，负 Jacobian 翻转定向。

对图形曲面 $z=g(x,y)$，取 $r=(x,y,g)$，得到

$$
 r_x\times r_y=(-g_x,-g_y,1),\qquad
 dS=\sqrt{1+g_x^2+g_y^2}\,dx\,dy.\qquad\text{(1.4)}
$$

球面参数 $r=(R\sin\varphi\cos\theta,R\sin\varphi\sin\theta,R\cos\varphi)$ 给出 $dS=R^2\sin\varphi\,d\varphi\,d\theta$；柱面参数 $(R\cos\theta,R\sin\theta,z)$ 给出 $dS=R\,d\theta\,dz$。球极和参数接缝的退化只占面积零集，可分片后取极限。

![参数曲面的小块、两条参数切向量与法向量。](/figures/curve-surface/surface-patch.svg)

**为何不直接用任意内接多面体定义面积？** 对半径 $1$、高 $h$ 的圆柱侧面，每层取正 $m$ 边形，邻层旋转 $\pi/m$，分成 $n$ 层并连成三角形。每个三角形底长 $2\sin(\pi/m)$，高为 $\sqrt{(h/n)^2+(1-\cos(\pi/m))^2}$，共 $2mn$ 个，故总面积

$$
 A_{m,n}=2m\sin\frac\pi m
 \sqrt{h^2+n^2\left(1-\cos\frac\pi m\right)^2}.\qquad\text{(1.5)}
$$

当 $m,n\to\infty$ 而 $n/m^2\to c$ 时，它趋于 $2\pi\sqrt{h^2+c^2\pi^4/4}$；$c=0$ 才得到 $2\pi h$，若 $n/m^2\to\infty$ 则发散。小三角形直径都趋于零，仍不能保证面积收敛。这就是 Schwarz 灯笼反例。

### §1.4 曲面的侧与诱导边界方向

**定义**　能在整个曲面上连续选定单位法向量 $n$ 的曲面称为可定向曲面；选定 $n$ 后称为有向曲面，反侧记为 $-S$。参数片的正法向取 $(r_u\times r_v)/|r_u\times r_v|$。隐式曲面 $G(x,y,z)=0$、$\nabla G\ne0$ 的法向为 $\nabla G$：沿任意曲线求导得到 $\nabla G\cdot r'=0$。

闭区域边界一律把“从区域内部指向外部”的方向称为外侧；空腔内壁的外法向指向空腔。对带边界曲面，令 $\nu$ 为曲面内的外向单位余法向，则边界正切向规定为 $\tau=n\times\nu$。等价地，从 $n$ 指向的一侧看，平面圆盘的边界为逆时针。平面区域的外边界逆时针、洞的边界顺时针，都来自“行进时区域在左侧”。

Möbius 带是单侧曲面。沿其中线走一周，连续搬运的横向切向量翻转，沿中线的切向量恢复原向，二者叉积因而翻转。若全带存在连续单位法向量，它沿闭合中线必须既回到原值又成为相反值，矛盾。所以不能在 Möbius 带上不加说明地定义全局第二型曲面积分。

![Möbius 带：沿中线一周后局部法向翻转。](/figures/curve-surface/mobius.svg)

## §2 第一型曲线积分

### §2.1 定义、存在性与参数公式

**定义**　将有限长曲线 $L$ 分为小弧 $L_i$，弧长为 $\Delta s_i$，在每段任取 $\xi_i$。若当 $\max_i\Delta s_i\to0$ 时，和 $\sum_i f(\xi_i)\Delta s_i$ 与分割、介点无关地趋于同一有限极限，就称 $f$ 在 $L$ 上第一型可积，记为 $\int_Lf\,ds$。

**定理 2.1**　$f$ 在紧的分段光滑曲线 $L$ 上连续，则积分存在。对按参数递增只描绘一次的 $r:[a,b]\to L$，

$$
 \int_Lf\,ds=\int_a^bf(r(t))|r'(t)|\,dt.\qquad\text{(2.1)}
$$

**证明：** 先用弧长参数 $r(s)$。定义中的积分和正是连续函数 $f(r(s))$ 的 Riemann 和，故收敛。换回一般参数，$ds/dt=|r'(t)|$，一元换元公式立即给出式（2.1）。也可直接估计：若介点对应 $\eta_i$，则 $\Delta s_i=\int_{t_{i-1}}^{t_i}|r'(t)|dt$，原和与右端积分之差不超过

$$
 \omega_{f\circ r}(\|T\|)\int_a^b|r'(t)|\,dt\longrightarrow0.
$$

对正则曲线，$|r'|$ 有正下界，所以弧长细度趋零与参数细度趋零等价。分段情形有限相加。

$f\equiv1$ 给弧长；$f=\rho\ge0$ 给线密度为 $\rho$ 的细线质量。对平面曲线 $r(s)=(x(s),y(s))$ 和非负 $C^1$ 函数 $f$，竖直幕面 $(x(s),y(s),z)$、$0\le z\le f(r(s))$ 的面积元为 $ds\,dz$，故面积为 $\int_Lf\,ds$，说明“曲边柱面面积”的准确含义。

### §2.2 性质及其证明

**定理 2.2**　以下 $f,g$ 连续，涉及权函数 $w$ 时只要求它可积。第一型积分线性，对不重叠小弧可加，与定向无关，并满足

$$
 \left|\int_Lf\,ds\right|\le\int_L|f|\,ds
 \le\ell\max_L|f|,\qquad
 f\le g\Longrightarrow\int_Lf\,ds\le\int_Lg\,ds.\qquad\text{(2.2)}
$$

若 $L$ 连通、$f$ 连续，$w\ge0$ 可积且 $\int_Lw\,ds>0$，则存在 $\xi\in L$，使

$$
 \int_Lfw\,ds=f(\xi)\int_Lw\,ds.\qquad\text{(2.3)}
$$

**证明：** 线性和可加性来自积分和的相应等式。$ds$ 是正权，保序及绝对值估计由每个和的对应不等式取极限得到。反向参数 $\widetilde r(t)=r(a+b-t)$ 的导数只改变符号，模长不变，再换元便得 $\int_{-L}f\,ds=\int_Lf\,ds$。令 $m=\min_Lf,M=\max_Lf$，由 $mw\le fw\le Mw$，加权平均值在 $[m,M]$ 内；连续函数在连通曲线上的像是区间，所以必取到该值。若曲线不连通，则不能保证有这样的点。

### §2.3 对称性、质心与惯量

**命题 2.3（等距对称）**　若欧氏等距变换 $T$ 把 $L$ 映到自身，则

$$
 \int_L f(Tx)\,ds=\int_Lf(x)\,ds.\qquad\text{(2.4)}
$$

**证明：** 写 $T(x)=Ax+b$、$A^{\mathsf T}A=I$，则 $|(T\circ r)'|=|Ar'|=|r'|$，代入式（2.1）即得。若 $f(Tx)=-f(x)$，积分等于其相反数，故为零；若 $T$ 交换两个坐标，则相应的坐标矩相等。对称的是积分域和完整的被积表达式，不能只看某个因子。

线密度 $\rho$ 的质量、质心和绕单位方向 $e$ 所在过原点直线的惯量为

$$
 M=\int_L\rho\,ds,\qquad
 \bar x_i=\frac1M\int_Lx_i\rho\,ds,\qquad
 I_e=\int_L\bigl(|x|^2-(x\cdot e)^2\bigr)\rho\,ds.
$$

这些式子由离散质点的质量、静矩、惯量定义取 Riemann 极限得到；尤其均匀曲线有 $\int_Lx_i\,ds=\ell\bar x_i$。对不在曲线上的质点 $p$，引力为 $Gm\int_L\rho(x)(x-p)/|x-p|^3\,ds$，分母有正下界，三个分量均连续可积。

### §2.4 问题 L1：三角形边界上的分段计算

**原题**　科大练习题 11.1（2），[题集第 10 页](/files/problems/科大数分习题-v2%282%29.pdf#page=10)：计算 $\int_L(x+y)\,ds$，$L$ 为顶点 $(0,0),(1,0),(0,1)$ 的三角形边界。

**解：** 在水平边 $y=0$ 上用 $x\in[0,1]$，积分为 $\int_0^1x\,dx=1/2$。在竖直边 $x=0$ 上用 $y\in[0,1]$，积分同样为 $1/2$。在斜边上，$y=1-x$，$ds=\sqrt2\,dx$，故

$$
 \int_L(x+y)\,ds=\frac12+\frac12+\int_0^1\sqrt2\,dx
 =1+\sqrt2.
$$

一般方法是先分光滑弧，再分别写出长度元；第一型积分不需要给三条边安排一致的绕行方向。

### §2.5 问题 L2：圆锥螺线的参数计算

**原题**　科大练习题 11.1（3），[题集第 10 页](/files/problems/科大数分习题-v2%282%29.pdf#page=10)：$L$ 为 $x=t\cos t,y=t\sin t,z=t$，$0\le t\le2\pi$，求 $\int_Lz\,ds$。

**解：** 求导后平方相加，

$$
\begin{aligned}
 x'&=\cos t-t\sin t,& y'&=\sin t+t\cos t,&z'&=1,\\
 x'^2+y'^2+z'^2&=t^2+2.
\end{aligned}
$$

因此

$$
 \int_Lz\,ds=\int_0^{2\pi}t\sqrt{t^2+2}\,dt
 =\left[\frac13(t^2+2)^{3/2}\right]_0^{2\pi}
 =\frac{(4\pi^2+2)^{3/2}-2\sqrt2}{3}.
$$

![圆锥螺线；竖坐标和到轴的距离都等于参数 t。](/figures/curve-surface/cone-spiral.svg)

### §2.6 问题 L3：交圆的轮换对称性

**原题**　科大练习题 11.1（4），[题集第 10 页](/files/problems/科大数分习题-v2%282%29.pdf#page=10)：$L$ 为 $x^2+y^2+z^2=a^2,x+y+z=0$，$a>0$，求 $\int_Lx^2\,ds$。

**解：** 变换 $(x,y,z)\mapsto(y,z,x)$ 为等距变换，且保持两个方程，故三个二次矩相等。平面通过球心，交线是半径 $a$ 的大圆，长度为 $2\pi a$。于是

$$
 3\int_Lx^2\,ds
 =\int_L(x^2+y^2+z^2)\,ds
 =a^2(2\pi a),\qquad
 \int_Lx^2\,ds=\frac{2\pi a^3}{3}.
$$

这里不能用单独的 $x\mapsto-x$ 对称，因为它一般不保持平面 $x+y+z=0$；轮换对称才是正确变换。

![过球心平面与球面的交圆，三个坐标的二次矩相等。](/figures/curve-surface/great-circle.svg)

### §2.7 问题 L4：旋轮线与半角恒等式

**原题**　科大练习题 11.1（5），[题集第 10 页](/files/problems/科大数分习题-v2%282%29.pdf#page=10)：$x=a(t-\sin t),y=a(1-\cos t)$，$0\le t\le2\pi$，$a>0$，求 $\int_Ly^2\,ds$。

**解：**

$$
 |r'(t)|=a\sqrt{(1-\cos t)^2+\sin^2t}
 =2a\sin(t/2),\qquad y=2a\sin^2(t/2).
$$

因 $0\le t/2\le\pi$，这里的正弦非负。端点速度为零，可先在 $[\varepsilon,2\pi-\varepsilon]$ 应用参数公式再取极限，或直接用连续的速度公式。因此

$$
\begin{aligned}
 \int_Ly^2\,ds
 &=8a^3\int_0^{2\pi}\sin^5(t/2)\,dt
 =16a^3\int_0^\pi\sin^5u\,du,\\
 \int_0^\pi\sin^5u\,du
 &=\int_{-1}^1(1-v^2)^2\,dv
 =2\left(1-\frac23+\frac15\right)=\frac{16}{15}.
\end{aligned}
$$

故结果为 $256a^3/15$。

![旋轮线的一拱；端点尖点不影响积分。](/figures/curve-surface/cycloid.svg)

## §3 第二型曲线积分

### §3.1 定义、参数公式与方向

**定义**　设 $L$ 已定向，按该方向取分点 $r_i$，在相邻小弧上取 $\xi_i$。向量场 $\mathbf F=(P,Q,R)$ 的第二型曲线积分定义为

$$
 \int_L\mathbf F\cdot dr
 =\lim_{\|T\|\to0}\sum_i\mathbf F(\xi_i)\cdot(r_i-r_{i-1})
 =\int_LP\,dx+Q\,dy+R\,dz.
$$

**定理 3.1**　连续场在分段光滑有向曲线上可积，若 $r(t)$ 随 $t$ 从 $a$ 到 $b$ 描绘曲线，则

$$
 \int_L\mathbf F\cdot dr
 =\int_a^b\mathbf F(r(t))\cdot r'(t)\,dt
 =\int_L\mathbf F\cdot\tau\,ds.\qquad\text{(3.1)}
$$

**证明：** 由 $r_i-r_{i-1}=\int_{t_{i-1}}^{t_i}r'(t)dt$，定义中的和与右端积分之差的绝对值不超过

$$
 \omega_{\mathbf F\circ r}(\|T\|)\int_a^b|r'(t)|\,dt\longrightarrow0.
$$

再用 $r'=\tau|r'|$ 即得两类积分的转换式。若参数从大值走向小值，按有向定积分交换上下限，公式仍成立。第一型则须用递增区间与非负长度元。

线性、按有向弧可加由定义立即成立。反向时 $\tau$ 变号，所以 $\int_{-L}\mathbf F\cdot dr=-\int_L\mathbf F\cdot dr$。若某段上 $x$ 恒定，则 $dx=0$，故 $\int P\,dx=0$。由 Cauchy–Schwarz 不等式，

$$
 \left|\int_L\mathbf F\cdot dr\right|
 \le\int_L|\mathbf F|\,ds\le\ell\max_L|\mathbf F|.\qquad\text{(3.2)}
$$

### §3.2 功、环量与有向对称

离散位移上做功约为 $\mathbf F\cdot\Delta r$，取极限即得功积分；闭曲线上的功称为环量。平面正向边界的切向量为 $(dx/ds,dy/ds)$，外法向为 $(dy/ds,-dx/ds)$，所以平面通量满足

$$
 \oint_L\mathbf F\cdot n\,ds=\oint_LP\,dy-Q\,dx.\qquad\text{(3.3)}
$$

对第二型积分使用对称，必须拉回整个微分表达式。若 $T(x)=Ax+b$，则沿 $T(L)$ 的积分等于 $\int_L\mathbf F(Tx)\cdot A\,dr$。这是把参数 $T(r(t))$ 代入式（3.1）的结果。若只替换函数中的 $x,y,z$，却忘记同时替换 $dx,dy,dz$ 及方向，结论可能变号。

### §3.3 问题 C1：空间曲线的一般参数计算

**原题**　科大练习题 11.2 第 3（1）题，[题集第 11 页](/files/problems/科大数分习题-v2%282%29.pdf#page=11)：$L:(x,y,z)=(t,t^2,t^3)$，$0\le t\le1$，沿参数增加方向，求 $\int_Lxz^2\,dx+yx^2\,dy+zy^2\,dz$。

**解：** 同时替换坐标和微分：$dx=dt,dy=2t\,dt,dz=3t^2\,dt$，故

$$
\begin{aligned}
 I&=\int_0^1\bigl(t\cdot t^6+t^2t^2\cdot2t+t^3t^4\cdot3t^2\bigr)dt\\
 &=\int_0^1(t^7+2t^5+3t^9)dt
 =\frac18+\frac13+\frac3{10}=\frac{91}{120}.
\end{aligned}
$$

### §3.4 问题 C2：三段球面边界的轮换对称

**原题**　科大练习题 11.2 第 4 题，[题集第 11 页](/files/problems/科大数分习题-v2%282%29.pdf#page=11)：沿第一卦限单位球面的边界，方向为 $A=(1,0,0)\to B=(0,1,0)\to C=(0,0,1)\to A$，计算

$$
 I=\oint_L(y^2-z^2)\,dx+(z^2-x^2)\,dy+(x^2-y^2)\,dz.
$$

**解：** 轮换 $(x,y,z)\mapsto(z,x,y)$ 依次把有向弧 $AB$ 映到 $BC$、$CA$，并保持整个微分式，因此三段贡献相等。在 $AB$ 上取 $x=\cos t,y=\sin t,z=0$，$0\le t\le\pi/2$，有

$$
\begin{aligned}
 I_{AB}
 &=\int_0^{\pi/2}\bigl(-\sin^3t-\cos^3t\bigr)dt,\\
 \int_0^{\pi/2}\sin^3t\,dt
 &=\int_0^1(1-u^2)du=\frac23,
 \qquad \int_0^{\pi/2}\cos^3t\,dt=\frac23.
\end{aligned}
$$

所以 $I=3(-4/3)=-4$。对称法减少的是需要实际计算的有向弧数。

### §3.5 问题 C3：Green 公式与圆域对称

**原题**　科大练习题 11.3 第 1（1）题，[题集第 11 页](/files/problems/科大数分习题-v2%282%29.pdf#page=11)：沿圆周 $x^2+y^2=a^2$ 逆时针方向，求 $\oint_Lxy^2\,dy-x^2y\,dx$。

**解：** 用 §4 的 Green 公式，$P=-x^2y,Q=xy^2$，所以 $Q_x-P_y=x^2+y^2$，

$$
 I=\iint_{x^2+y^2\le a^2}(x^2+y^2)\,dx\,dy
 =\int_0^{2\pi}\!\int_0^a r^3\,dr\,d\theta
 =\frac{\pi a^4}{2}.
$$

也可由旋转对称得到两个二次矩相等，再求其中之一。此题必须保留题目中的减号和逆时针方向。

### §3.6 问题 C4：斜截圆上的 Stokes 公式

**原题**　科大练习题 12.4 第 4（3）题，[题集第 15 页](/files/problems/科大数分习题-v2%282%29.pdf#page=15)：$L$ 为 $x^2+y^2+z^2=a^2,x+y+z=a$ 的交圆，$a>0$，从原点看去沿逆时针绕行，求 $\oint_Ly^2\,dx+z^2\,dy+x^2\,dz$。

**解：** 原点位于平面 $x+y+z<a$ 一侧，故与所给方向相容的单位法向是 $n=-(1,1,1)/\sqrt3$。取交圆所围的平面圆盘 $S$。对 $\mathbf F=(y^2,z^2,x^2)$，

$$
 \nabla\times\mathbf F=(-2z,-2x,-2y),\qquad
 (\nabla\times\mathbf F)\cdot n=\frac{2a}{\sqrt3}\quad\hbox{于 }S.
$$

圆心为 $(a/3,a/3,a/3)$，其到球心的距离为 $a/\sqrt3$，圆半径平方为 $a^2-a^2/3=2a^2/3$。由 §8 的 Stokes 公式，

$$
 I=\frac{2a}{\sqrt3}\,|S|
 =\frac{2a}{\sqrt3}\cdot\frac{2\pi a^2}{3}
 =\frac{4\pi a^3}{3\sqrt3}.
$$

![平面截圆及朝向原点的法向；它决定本题的正方向。](/figures/curve-surface/stokes-disk.svg)

## §4 Green 公式与平面路径无关

### §4.1 Green 公式的条件与证明

**定理 4.1**　设 $D$ 是有界平面区域，其边界由有限条分段光滑简单闭曲线组成；$P,Q$ 在包含 $\overline D$ 的开集上为 $C^1$。边界按区域在左侧定向，则

$$
 \oint_{\partial D}P\,dx+Q\,dy
 =\iint_D(Q_x-P_y)\,dx\,dy.\qquad\text{(4.1)}
$$

**证明：** 先设 $D=\{(x,y):a\le x\le b,\alpha(x)\le y\le\beta(x)\}$。两条竖边上 $dx=0$；下边从左向右，上边从右向左，因此

$$
\begin{aligned}
 \oint_{\partial D}P\,dx
 &=\int_a^b\{P(x,\alpha(x))-P(x,\beta(x))\}\,dx\\
 &=-\int_a^b\!\int_{\alpha(x)}^{\beta(x)}P_y(x,y)\,dy\,dx
 =-\iint_D P_y\,dx\,dy.
\end{aligned}
$$

类似地，对 $x=\gamma(y)$ 与 $x=\delta(y)$ 之间的区域，正向边界的右边向上、左边向下，故 $\oint Q\,dy=\iint Q_x\,dx\,dy$。若区域可有限分割为这些简单区域，对每一项分别分割后求和，内部公共边界两次经过且方向相反，恰好抵消，剩下整个边界，式（4.1）成立。洞的边界也正是这一抵消规则所留下的顺时针方向。

一般分段光滑区域不应未经证明就说“必能按坐标有限分割”。严谨补充如下：在每条光滑边界附近旋转坐标，可把区域局部表示为图形的一侧；角点取有限个扇形片处理。用有限个这样的邻域及内部邻域覆盖 $\overline D$，选择光滑非负函数 $\psi_j$，其支集落在对应邻域内且总和处处为正，令 $\chi_j=\psi_j/\sum_k\psi_k$。对支撑在图形邻域内、在人工边界附近为零的局部场，设区域在 $y=g(x)$ 下方。令 $A(x)=\int_{-b}^{g(x)}Q(x,y)dy$，则 $A'=\int_{-b}^{g}Q_xdy+Q(x,g)g'$；对 $x$ 积分时 $A$ 的端点为零，所以 $\iint Q_x=-\int Q(x,g)g'dx$。又有 $\iint P_y=\int P(x,g)dx$。相减得 $-\int(P+Qg')dx$，恰为从右向左经过上边界的线积分。区域在图形上方时符号反转。因此可以在每个局部片上对 $\chi_j(P\,dx+Q\,dy)$ 应用完整的局部公式；人工边界上函数为零。旋转只作行列式为 $1$ 的线性换元，不改变式（4.1）。最后相加，$\sum_j\chi_j=1$，$\sum_jd\chi_j=0$，所有额外导数项消失。光滑截断函数可由 $e^{-1/(1-|x|^2)}$ 在单位球内定义、球外补零并平移缩放得到。这给出通常分段光滑边界情形，而没有假设任意区域都能有限竖切。

![环域正向：外边界逆时针，内边界顺时针。](/figures/curve-surface/annulus-orientation.svg)

### §4.2 面积、平面通量及补线法

分别令 $(P,Q)=(0,x),(-y,0),(-y/2,x/2)$，右端都为面积，得

$$
 |D|=\oint_{\partial D}x\,dy
 =-\oint_{\partial D}y\,dx
 =\frac12\oint_{\partial D}(x\,dy-y\,dx).\qquad\text{(4.2)}
$$

将式（4.1）用于 $-Q\,dx+P\,dy$，再用式（3.3），得到平面散度定理

$$
 \oint_{\partial D}\mathbf F\cdot n\,ds
 =\iint_D(P_x+Q_y)\,dx\,dy.\qquad\text{(4.3)}
$$

非闭曲线 $L:A\to B$ 若补入 $K:B\to A$ 成为正向边界，则

$$
 \int_LP\,dx+Q\,dy
 =\iint_D(Q_x-P_y)\,dx\,dy-\int_KP\,dx+Q\,dy.\qquad\text{(4.4)}
$$

这是有向可加性，不是一个可以漏掉补线项的“直接套公式”。优先选择使 $dx=0$、$dy=0$ 或某个系数为零的线段。

### §4.3 奇点、挖洞与周期

对 $\omega=(-y\,dx+x\,dy)/(x^2+y^2)$，在穿孔平面上直接求导可得 $Q_x-P_y=0$。若正向简单闭曲线不围原点，Green 公式给积分为零；若围原点，挖去半径 $\varepsilon$ 的小圆盘，对剩余区域应用 Green 公式。小圆在剩余区域边界中为顺时针，于是

$$
 \oint_L\omega=\oint_{|x|=\varepsilon}^{\mathrm{CCW}}\omega
 =\int_0^{2\pi}\frac{\varepsilon^2\,dt}{\varepsilon^2}=2\pi.\qquad\text{(4.5)}
$$

对一般闭路，积分为 $2\pi$ 乘绕数。可沿参数连续选取局部辐角并逐段延拓；$\omega=d\theta$ 在每个局部成立，闭路终末辐角与初始辐角相差 $2\pi k$，积分即 $2\pi k$。这也证明绕数在避开原点的连续变形下不变：整数值随变形连续，必为常数。

在有 $m$ 个洞的平面区域中，若 $Q_x=P_y$，切开连接内外边界的 $m$ 条弧，使区域成为无洞区域。沿切缝两岸积分抵消，故任一闭路积分由其绕各洞的次数及各洞边界周期决定。只有所有独立周期都为零，才有全局势函数；偏导相等本身只保证局部结论。

### §4.4 路径无关与势函数

**定理 4.2**　在区域 $D\subset\mathbb R^n$ 上，连续场 $\mathbf F$ 满足以下三个条件彼此等价：所有分段光滑闭路积分为零；积分只依赖端点；存在 $u\in C^1(D)$ 使 $\nabla u=\mathbf F$。若 $\mathbf F\in C^1$，则它们推出 $\partial_jF_i=\partial_iF_j$；若再有 $D$ 线单连通，后一个条件也充分。

**证明：** 两条从 $A$ 到 $B$ 的路径相接反向便成闭路，故前两个条件等价。若路径无关，固定 $p_0$，定义 $u(p)=\int_{p_0}^p\mathbf F\cdot dr$。在 $p$ 附近取包含于 $D$ 的小球，增加最后一小段坐标线，有

$$
 \frac{u(p+he_j)-u(p)}h
 =\frac1h\int_0^hF_j(p+te_j)\,dt\longrightarrow F_j(p).
$$

所以 $u\in C^1$ 且梯度为 $\mathbf F$。反过来沿曲线用链式法则积分，得到 $\int_A^B\nabla u\cdot dr=u(B)-u(A)$。若 $\mathbf F\in C^1$，则 $u\in C^2$，混合偏导相等，必要性成立。

说明单连通下的充分性。在任一球内，固定中心 $c$，令

$$
 u_c(x)=\int_0^1\mathbf F(c+t(x-c))\cdot(x-c)\,dt.
$$

在积分号下求导，并用 $\partial_jF_i=\partial_iF_j$，有

$$
\begin{aligned}
 \partial_ju_c(x)
 &=\int_0^1\left[F_j(c+t(x-c))
 +t\sum_i(x_i-c_i)\partial_iF_j(c+t(x-c))\right]dt\\
 &=\int_0^1\frac d{dt}\left[tF_j(c+t(x-c))\right]dt=F_j(x).
\end{aligned}
$$

因此每个小球内积分与路径无关。现将任意闭路的收缩同伦参数方形细分，使每个小格的像落在某个这样的球内；这可由同伦的一致连续性和紧性做到。用格点像间的短折线代替格边，每个小格的四边积分为零，相邻边抵消后得外边界积分为零。原闭路的每一短弧与对应折线同处一个小球，积分相同，故原闭路积分也为零。这个论证不要求原闭路围成一张嵌入光滑曲面，避免了空间中常见的逻辑缺口。

### §4.5 求势函数与全微分方程

在允许相应折线的矩形内，二维势函数可取

$$
 u(x,y)=\int_{x_0}^{x}P(t,y_0)dt+\int_{y_0}^{y}Q(x,t)dt.\qquad\text{(4.6)}
$$

对 $y$ 求导得 $u_y=Q$；对 $x$ 求导，利用 $Q_x=P_y$，得 $u_x=P(x,y_0)+\int_{y_0}^yP_y(x,t)dt=P(x,y)$。一般非凸区域不能默认这条折线留在区域内，应选允许路径或分片求势函数。

偏积分法则先由 $u_x=P$ 得 $u=\int P\,dx+C(y)$，再由 $u_y=Q$ 确定 $C$。例如 $P=2x+y,Q=x+2y$ 给出 $u=x^2+xy+y^2$。恰当微分方程 $P\,dx+Q\,dy=0$ 的正则积分曲线位于 $u=C$ 上；当 $\nabla u\ne0$ 时，隐函数定理保证这些等值线局部确为曲线。

若乘上非零积分因子 $\mu$ 后变为恰当形式，其条件为

$$
 P\mu_y-Q\mu_x=\mu(Q_x-P_y).\qquad\text{(4.7)}
$$

这是展开 $(\mu P)_y=(\mu Q)_x$ 的结果。若 $(P_y-Q_x)/Q$ 只依赖 $x$ 且 $Q\ne0$，可取 $\mu(x)=\exp\int(P_y-Q_x)/Q\,dx$；若 $(Q_x-P_y)/P$ 只依赖 $y$ 且 $P\ne0$，则有相应的 $\mu(y)$。这些是局部充分判据，不能省略分母非零与定义域条件。


## §5 第一型曲面积分

### §5.1 定义、存在定理与计算公式

**定义**　把紧曲面 $S$ 分为小片 $S_i$，每片面积为 $\Delta S_i$，在其上任取 $\xi_i$。若当最大直径趋于零时，$\sum_if(\xi_i)\Delta S_i$ 有与分片和介点无关的极限，称为第一型曲面积分 $\iint_Sf\,dS$。

**定理 5.1**　连续函数在紧的分片光滑曲面上可积。在一一正则参数片上，

$$
 \iint_Sf\,dS=\iint_D f(r(u,v))|r_u\times r_v|\,du\,dv.\qquad\text{(5.1)}
$$

**证明：** 由面积定义，$\Delta S_i=\iint_{D_i}J_S\,du\,dv$。设 $\omega_f$ 是 $f$ 在紧曲面上的连续模，则积分和与式（5.1）右端之差不超过

$$
 \sum_i\iint_{D_i}|f(\xi_i)-f(r(u,v))|J_S\,du\,dv
 \le\omega_f(\delta)|S|\longrightarrow0,
$$

其中 $\delta=\max_i\operatorname{diam}S_i$。参数图及其逆在紧片上一致连续，故参数分片与曲面分片的细度可相互控制。多片情况使用可加性，重合的公共边界面积为零。参数不变性由定理 1.2 及二重积分换元公式保证。

图形曲面 $z=g(x,y)$ 上有

$$
 \iint_Sf\,dS
 =\iint_{D_{xy}}f(x,y,g(x,y))\sqrt{1+g_x^2+g_y^2}\,dx\,dy.\qquad\text{(5.2)}
$$

向其他坐标面投影同理。若同一投影点对应多个面点，必须分片分别计算；例如整球不能只用 $z=\sqrt{R^2-x^2-y^2}$ 代表。

### §5.2 性质、对称性与物理量

**定理 5.2**　第一型曲面积分线性、对不重叠面片可加、与所取侧无关，且

$$
 f\le g\Longrightarrow\iint_Sf\,dS\le\iint_Sg\,dS,
 \qquad
 \left|\iint_Sf\,dS\right|\le\iint_S|f|\,dS\le |S|\max_S|f|.\qquad\text{(5.3)}
$$

若 $S$ 连通、$f$ 连续、$w\ge0$ 可积且积分非零，则存在 $\xi\in S$，使 $\iint_Sfw\,dS=f(\xi)\iint_Sw\,dS$。

**证明：** 在定义中的每个面积和中使用线性及正权不等式，再取极限。反侧只改变法向而不改变面积 $J_S$，所以积分不变。中值定理用 $m=\min f,M=\max f$ 夹住加权平均，并由连通性使 $f$ 取遍 $[m,M]$，与定理 2.2 相同。

若等距变换 $T(x)=Ax+b$ 保持曲面，则 $|(Ar_u)\times(Ar_v)|=|r_u\times r_v|$，从而

$$
 \iint_Sf(Tx)\,dS=\iint_Sf(x)\,dS.\qquad\text{(5.4)}
$$

该等式证明了奇函数积分为零、坐标轮换矩相等及正交坐标旋转法。面密度 $\rho$ 的质量、质心、惯量和对外部质点的引力公式，将 §2.3 的 $\int_L(\cdot)ds$ 换成 $\iint_S(\cdot)dS$ 即得；证明仍是离散质点和的极限。

### §5.3 问题 S1：抛物面上的一般投影计算

**原题**　科大练习题 12.2（2），[题集第 13 页](/files/problems/科大数分习题-v2%282%29.pdf#page=13)：$S:z=x^2+y^2,z\le1$，求 $\iint_S|xyz|\,dS$。

**解：** 投影为单位圆盘，$g_x=2x,g_y=2y$，故 $dS=\sqrt{1+4x^2+4y^2}\,dx\,dy$。令 $x=r\cos\theta,y=r\sin\theta,z=r^2$，得到

$$
\begin{aligned}
 I&=\int_0^{2\pi}|\cos\theta\sin\theta|\,d\theta
       \int_0^1r^5\sqrt{1+4r^2}\,dr,\\
 \int_0^{2\pi}|\cos\theta\sin\theta|\,d\theta
 &=4\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta=2.
\end{aligned}
$$

径向积分令 $u=1+4r^2$，则 $r^5dr=(u-1)^2du/128$，因此

$$
\begin{aligned}
 I&=\frac1{64}\int_1^5(u-1)^2u^{1/2}du\\
 &=\frac1{64}\left[\frac27u^{7/2}-\frac45u^{5/2}+\frac23u^{3/2}\right]_1^5\\
 &=\frac{125\sqrt5-1}{420}.
\end{aligned}
$$

这里的绝对值使四个象限贡献同号；若误删绝对值，反而会错误地得到零。

![抛物面片与单位圆盘投影，面积元须乘以斜率因子。](/figures/curve-surface/paraboloid-projection.svg)

### §5.4 问题 S2：锥面上的奇偶对称与极坐标

**原题**　科大练习题 12.2（3），[题集第 13 页](/files/problems/科大数分习题-v2%282%29.pdf#page=13)：$S:z=\sqrt{x^2+y^2}$ 被柱面 $x^2+y^2=2x$ 截下，求 $\iint_S(xy+yz+zx)\,dS$。

**解：** 曲面关于 $y\mapsto-y$ 对称，且 $dS$ 保持不变；$xy$、$yz$ 是该反射下的奇函数，故它们的积分为零。除面积零的锥顶外，$g_x^2+g_y^2=1$，所以 $dS=\sqrt2\,dx\,dy$。投影圆盘的极坐标范围为

$$
 -\frac\pi2\le\theta\le\frac\pi2,\qquad 0\le r\le2\cos\theta.
$$

于是

$$
\begin{aligned}
 I&=\sqrt2\int_{-\pi/2}^{\pi/2}\!\int_0^{2\cos\theta}
      r^3\cos\theta\,dr\,d\theta\\
 &=4\sqrt2\int_{-\pi/2}^{\pi/2}\cos^5\theta\,d\theta
 =8\sqrt2\int_0^1(1-u^2)^2du
 =\frac{64\sqrt2}{15}.
\end{aligned}
$$

曲面不关于 $x\mapsto-x$ 对称，因而 $zx$ 不能消掉。锥顶的非正则性可挖去半径 $\varepsilon$ 的小片后取极限；被积函数有界，该小片面积趋零。

### §5.5 问题 S3：球面 Poisson 公式与旋转降维

**原题**　科大问题 12.2 第 1 题，[题集第 13 页](/files/problems/科大数分习题-v2%282%29.pdf#page=13)：$S$ 是单位球面，证明对在所需区间连续的 $f$，

$$
 \iint_Sf(ax+by+cz)\,dS
 =2\pi\int_{-1}^1f\!\left(\sqrt{a^2+b^2+c^2}\,t\right)dt.\qquad\text{(5.5)}
$$

**证明：** 记 $A=\sqrt{a^2+b^2+c^2}$。若 $A=0$，两边均为 $4\pi f(0)$。若 $A>0$，取一个正交坐标系，使新第三坐标轴沿 $(a,b,c)/A$，记新坐标为 $(X,Y,Z)$，则 $ax+by+cz=AZ$。由式（5.4），旋转保持球面及面积元。取 $Z=\cos\varphi$，

$$
\begin{aligned}
 \iint_Sf(AZ)dS
 &=\int_0^{2\pi}\!\int_0^\pi f(A\cos\varphi)\sin\varphi\,d\varphi\,d\theta\\
 &=2\pi\int_{-1}^1f(At)dt.
\end{aligned}
$$

这不仅是奇偶性，而是完整利用球面的旋转对称：只依赖某个线性组合的球面积分可降为一元积分。

### §5.6 问题 S4：平面截口的中心坐标

**原题**　科大问题 12.2 第 2 题，[题集第 13 页](/files/problems/科大数分习题-v2%282%29.pdf#page=13)：$S(t)$ 是平面 $x+y+z=t$ 被单位球截下的圆盘，$|t|\le\sqrt3$。证明

$$
 \iint_{S(t)}\bigl(1-x^2-y^2-z^2\bigr)\,dS
 =\frac\pi{18}(3-t^2)^2.\qquad\text{(5.6)}
$$

**证明：** 圆心是球心在平面上的正交投影 $c=(t/3,t/3,t/3)$，$|c|^2=t^2/3$；圆半径平方为 $R^2=1-t^2/3$。在平面内选正交单位向量 $e_1,e_2$，令 $p=c+u e_1+v e_2$。因 $c\perp e_1,e_2$，有 $|p|^2=t^2/3+u^2+v^2$，且 $dS=du\,dv$。于是

$$
\begin{aligned}
 I&=\int_0^{2\pi}\!\int_0^R(R^2-\rho^2)\rho\,d\rho\,d\theta\\
 &=2\pi\left(\frac{R^4}{2}-\frac{R^4}{4}\right)
 =\frac\pi2\left(1-\frac{t^2}{3}\right)^2.
\end{aligned}
$$

$|t|=\sqrt3$ 时圆盘退化为一点，两边都为零。平面内取正交参数可直接得到面积元，不必投影后再补 $\sqrt3$ 因子。

## §6 第二型曲面积分

### §6.1 定义与两类积分的转换

**定义**　对有向曲面 $S$ 和连续场 $\mathbf F=(P,Q,R)$，令

$$
 \iint_S\mathbf F\cdot d\mathbf S
 :=\iint_S\mathbf F\cdot n\,dS
 =\iint_S P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy.\qquad\text{(6.1)}
$$

这里 $dy\,dz=n_xdS$、$dz\,dx=n_ydS$、$dx\,dy=n_zdS$ 是**有向面积元**，不是把三个普通无向投影面积随意相加。

它与有向投影和的定义相同。以 $xy$ 投影为例，小片的有向投影面积为 $\int_{S_i}n_z\,dS$；用 $R(\xi_i)$ 代替片上 $R$，误差不超过 $\omega_R(\delta)\int_{S_i}|n_z|dS$，全片求和趋零。三项分别处理，便得到式（6.1）。这同时证明连续场的第二型曲面积分存在。

流速场 $\mathbf v$ 的体积通量为 $\iint_S\mathbf v\cdot n\,dS$；若密度为 $\rho$，质量通量则用 $\rho\mathbf v$。正号表示净流向所选法向的一侧。

### §6.2 参数、投影与定号公式

**定理 6.1**　若 $r_u\times r_v$ 指向所取侧，则

$$
 \iint_S\mathbf F\cdot d\mathbf S
 =\iint_D\mathbf F(r(u,v))\cdot(r_u\times r_v)\,du\,dv.\qquad\text{(6.2)}
$$

若指向反侧，则右端加负号。

**证明：** 将 $n=(r_u\times r_v)/|r_u\times r_v|$ 和 $dS=|r_u\times r_v|du\,dv$ 代入式（6.1），模长因子消去。叉积的三个分量恰为

$$
 r_u\times r_v=
 \left(\frac{\partial(y,z)}{\partial(u,v)},
 \frac{\partial(z,x)}{\partial(u,v)},
 \frac{\partial(x,y)}{\partial(u,v)}\right).
$$

特别地，$S:z=g(x,y)$ 取上侧时，

$$
 \iint_S P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy
 =\iint_D\{-Pg_x-Qg_y+R\}\,dx\,dy,\qquad\text{(6.3)}
$$

其中 $P,Q,R$ 都须代入 $z=g(x,y)$。下侧取相反数。若只含 $R\,dx\,dy$，上、下侧分别为 $\pm\iint_D R(x,y,g)dxdy$。这就是“代曲面方程、投影、按侧定号”的依据。

线性与分片可加由式（6.1）成立；反侧 $n\mapsto-n$ 使积分变号；估计为 $|\iint_S\mathbf F\cdot n\,dS|\le\iint_S|\mathbf F|\,dS$。柱面母线平行于 $z$ 轴时，法向与 $z$ 轴垂直，$n_z=0$，所以该柱面上 $\iint R\,dx\,dy=0$。

### §6.3 问题 F1：内向球面的奇对称

**原题**　科大练习题 12.3 第 1（1）题，[题集第 14 页](/files/problems/科大数分习题-v2%282%29.pdf#page=14)：$S:x^2+y^2+z^2=a^2$，$a>0$，取内侧，求 $\iint_Sx^4\,dy\,dz+y^4\,dz\,dx+z^4\,dx\,dy$。

**解：** 内单位法向为 $n=-(x,y,z)/a$。先把有向积分化成无向面积积分：

$$
 I=-\frac1a\iint_S(x^5+y^5+z^5)\,dS.
$$

球面及 $dS$ 分别关于 $x,y,z$ 的反射不变，三个五次项均为相应变量的奇函数，所以 $I=0$。原式中的 $x^4$ 是偶函数，若未把 $dy\,dz$ 的法向因子一并考虑，就看不出真正起作用的奇性。

### §6.4 问题 F2：椭球面的一般参数计算

**原题**　科大练习题 12.3 第 1（4）题，[题集第 14 页](/files/problems/科大数分习题-v2%282%29.pdf#page=14)：$S:x^2/a^2+y^2/b^2+z^2/c^2=1$，$a,b,c>0$，取外侧，求 $\iint_Sz\,dx\,dy$。

**解：** 取

$$
 r(\varphi,\theta)=(a\sin\varphi\cos\theta,b\sin\varphi\sin\theta,c\cos\varphi),
 \quad0\le\varphi\le\pi,\quad0\le\theta\le2\pi.
$$

直接计算得

$$
 r_\varphi\times r_\theta=
 (bc\sin^2\varphi\cos\theta,ca\sin^2\varphi\sin\theta,
 ab\sin\varphi\cos\varphi).
$$

它与椭球外法向 $(x/a^2,y/b^2,z/c^2)$ 同向，因为在 $0<\varphi<\pi$ 时，前者是后者的正倍数 $abc\sin\varphi$；两极按面积零的退化点处理。故

$$
\begin{aligned}
 I&=abc\int_0^{2\pi}\!\int_0^\pi
 \sin\varphi\cos^2\varphi\,d\varphi\,d\theta\\
 &=2\pi abc\int_{-1}^1u^2du=\frac{4\pi abc}{3}.
\end{aligned}
$$

Gauss 公式也能给出同一结果，但这道题完整展示了参数叉积、法向检验和上下半椭球共同贡献。

### §6.5 问题 F3：四面体边界与散度

**原题**　科大练习题 12.4 第 1（2）题，[题集第 14 页](/files/problems/科大数分习题-v2%282%29.pdf#page=14)：$S$ 是第一卦限内四面体 $x+y+z\le1$ 的外边界，求 $\iint_Sxy\,dy\,dz+yz\,dz\,dx+zx\,dx\,dy$。

**解：** 令 $\mathbf F=(xy,yz,zx)$，散度为 $x+y+z$。由 §7 的 Gauss 公式，

$$
 I=\iiint_V(x+y+z)\,dV=3\iiint_Vx\,dV,
$$

最后一步利用四面体和体积元的坐标轮换对称。直接算一个矩：

$$
\begin{aligned}
 \iiint_Vx\,dV
 &=\int_0^1\!\int_0^{1-x}\!\int_0^{1-x-y}x\,dz\,dy\,dx\\
 &=\frac12\int_0^1x(1-x)^2dx
 =\frac12\left(\frac12-\frac23+\frac14\right)=\frac1{24}.
\end{aligned}
$$

所以 $I=1/8$。

![四面体及各面的外法向；坐标面上法向分别沿负坐标轴。](/figures/curve-surface/tetrahedron.svg)

### §6.6 问题 F4：抛物面补顶面

**原题**　科大练习题 12.4 第 1（3）题，[题集第 14 页](/files/problems/科大数分习题-v2%282%29.pdf#page=14)：$S:z=x^2+y^2,z\le1$，方向朝下，求

$$
 I=\iint_S(x-y)\,dy\,dz+(y-z)\,dz\,dx+(z-x)\,dx\,dy.
$$

**解：** 补上顶圆盘 $D:z=1,x^2+y^2\le1$，取向上法向。区域 $V$ 在抛物面上方、顶盘下方，所以题设“朝下”恰为 $V$ 在抛物面上的外侧。场 $\mathbf F=(x-y,y-z,z-x)$ 的散度为 $3$。

$$
 |V|=\int_0^{2\pi}\!\int_0^1(1-r^2)r\,dr\,d\theta=\frac\pi2,
 \qquad \iint_{\partial V}\mathbf F\cdot n\,dS=\frac{3\pi}{2}.
$$

顶面 $n=(0,0,1)$，故

$$
 I_D=\iint_{x^2+y^2\le1}(1-x)\,dx\,dy=\pi,
 \qquad I=\frac{3\pi}{2}-\pi=\frac\pi2.
$$

**投影复核：** 朝下的有向面积元为 $(2x,2y,-1)dxdy$，代入 $z=r^2$ 后，点积为 $r^2-2xy-2yr^2+x$，奇项在圆盘上消失，余下 $\iint r^2dxdy=\pi/2$，与补面法一致。

![抛物面与补入的顶盘；两者都按同一实体的外侧定向。](/figures/curve-surface/cap-orientation.svg)

## §7 Gauss 公式、通量与奇点

### §7.1 Gauss 公式的证明

**定理 7.1**　设 $V$ 为有界区域，边界分片光滑，$\mathbf F=(P,Q,R)$ 在包含 $\overline V$ 的开集上为 $C^1$，边界取外侧，则

$$
 \iint_{\partial V}\mathbf F\cdot n\,dS
 =\iiint_V(P_x+Q_y+R_z)\,dV.\qquad\text{(7.1)}
$$

**证明：** 先考虑 $V=\{(x,y,z):(x,y)\in D,\alpha(x,y)\le z\le\beta(x,y)\}$。对通量的 $R$ 项，侧面母线竖直，$n_z=0$；顶面 $n_zdS=dxdy$，底面 $n_zdS=-dxdy$，所以

$$
\begin{aligned}
 \iint_{\partial V}R\,dx\,dy
 &=\iint_D\{R(x,y,\beta)-R(x,y,\alpha)\}\,dx\,dy\\
 &=\iint_D\!\int_\alpha^\beta R_z\,dz\,dx\,dy
 =\iiint_VR_z\,dV.
\end{aligned}
$$

对 $x$、$y$ 方向可分割为相应简单区域的情形，另外两项同样成立；各片相加时，公共面的外法向相反，内部通量抵消。为覆盖一般分片光滑边界，须把完整的局部图形情形补清，不能假定每块曲面都同时向三个坐标面单值投影。

旋转坐标后，设局部区域位于图形 $z=g(x,y)$ 下方，且局部场支撑在一个坐标盒内，在所有人工边界附近为零。令

$$
 A(x,y)=\int_{-b}^{g(x,y)}P(x,y,z)dz.
$$

Leibniz 求导公式给 $A_x=\int_{-b}^{g}P_xdz+P(x,y,g)g_x$。因为 $A$ 在投影盒边界附近为零，$\iint A_xdxdy=0$，故

$$
\begin{aligned}
 \iiint_VP_xdV&=-\iint P(x,y,g)g_xdxdy,\\
 \iiint_VQ_ydV&=-\iint Q(x,y,g)g_ydxdy,\\
 \iiint_VR_zdV&=\iint R(x,y,g)dxdy.
\end{aligned}
$$

最后一式因底面附近 $R=0$ 而成立。三式相加正是图形上向外法向的通量式（6.3）。若区域位于图形上方，下限变为 $g$，三式符号同时反转，与下向外法向一致。

现在用 §4.1 的光滑分解单位，将场写成有限个 $\chi_j\mathbf F$。内部邻域的局部场紧支撑在域内，积分偏导由 Fubini 为零；边界邻域使用刚证明的局部图形公式。最后求和，$\sum_j\operatorname{div}(\chi_j\mathbf F)=\operatorname{div}\mathbf F$，边界通量也还原为原场的通量。正交旋转保持体积、内积与散度：其 Jacobian 为 $1$，且变换后导数矩阵是正交相似变换，迹不变。故局部旋转不影响结论。曲面只是旋转后局部表示为图形，并没有被正交变换“展平”。于是式（7.1）得证。

### §7.2 体积公式、局部源强与曲面替换

取 $\mathbf F=(x,y,z)/3$，其散度为 $1$，立即得

$$
 |V|=\frac13\iint_{\partial V}(x\,dy\,dz+y\,dz\,dx+z\,dx\,dy).\qquad\text{(7.2)}
$$

若 $\operatorname{div}\mathbf F=0$，则每个完全位于定义域内的有界实体边界通量为零。反过来，若定义域内每个小球的边界通量均为零，则式（7.1）使每个小球上的散度平均值为零；球缩到任一点，由连续性得到该点散度为零。可见必要性只需小球，充分性则必须保证所围实体位于定义域中。

若有向曲面 $S_1,S_2$ 具有同一诱导边界，且 $S_1\cup(-S_2)$ 是某个域内实体的有向边界，零散度给出

$$
 \iint_{S_1}\mathbf F\cdot n_1dS
 =\iint_{S_2}\mathbf F\cdot n_2dS.\qquad\text{(7.3)}
$$

这就是无源场通量的曲面替换。缺少填充实体条件时，不能仅凭“同一边界”宣称积分相等。

### §7.3 反平方场与挖球法

令 $\mathbf F(x)=x/|x|^3$，$x\ne0$。直接求导：

$$
 \operatorname{div}\mathbf F
 =\frac3{|x|^3}-\frac{3(x^2+y^2+z^2)}{|x|^5}=0.
$$

若 $0\notin\overline V$，通量为零；若 $0\in V$，挖去小球 $B_\varepsilon$。在 $V\setminus\overline B_\varepsilon$ 上，内球面作为区域边界的法向朝向原点，故 Gauss 公式给

$$
 \iint_{\partial V}\mathbf F\cdot n\,dS
 =\iint_{\partial B_\varepsilon}^{\text{球的外侧}}
      \mathbf F\cdot n\,dS
 =\frac1{\varepsilon^2}\,4\pi\varepsilon^2=4\pi.\qquad\text{(7.4)}
$$

原点若落在边界上，原积分未必按通常方式定义，不能照搬 $0$ 或 $4\pi$。

径向投影 $x\mapsto x/|x|$ 的有向面积 Jacobian 为 $x\cdot n/|x|^3$。可在参数面上求导并取叉积：投影后两切向量的叉积与径向单位向量点乘，等于 $x\cdot(r_u\times r_v)/|x|^3$。因此式（7.4）的被积量也叫有向立体角元；它不是对任意开放曲面都固定为 $4\pi$。

![挖去奇点后的球壳：内边界法向指向空腔。](/figures/curve-surface/punctured-flux.svg)

## §8 Stokes 公式与空间路径无关

### §8.1 Stokes 公式及参数证明

**定理 8.1**　设 $S$ 是紧的分片 $C^2$ 可定向曲面，其边界分段光滑并取诱导方向。$\mathbf F\in C^1$ 于 $S$ 的某个开邻域，则

$$
 \oint_{\partial S}\mathbf F\cdot dr
 =\iint_S(\nabla\times\mathbf F)\cdot n\,dS,\qquad\text{(8.1)}
$$

其中

$$
 \nabla\times\mathbf F=(R_y-Q_z,P_z-R_x,Q_x-P_y).
$$

**证明：** 先对一张正则参数片 $r(u,v)$ 证明。置 $A=\mathbf F(r)\cdot r_u$、$B=\mathbf F(r)\cdot r_v$，则边界积分拉回为 $\oint_{\partial D}Adu+Bdv$。求偏导并相减，$\mathbf F(r)\cdot(r_{uv}-r_{vu})=0$，所以

$$
 B_u-A_v=(D\mathbf F(r)r_u)\cdot r_v-(D\mathbf F(r)r_v)\cdot r_u.
$$

把右端按 $P,Q,R$ 展开并按叉积的三个分量合并，得

$$
 B_u-A_v=(\nabla\times\mathbf F)(r)\cdot(r_u\times r_v).
$$

在参数域应用 Green 公式，再用式（6.2），就得到式（8.1）。有限片拼合时公共边界方向相反，内部线积分抵消。一般曲面可用曲面坐标图上的光滑分解单位重复这一计算，$\sum d\chi_j=0$ 消去附加项，结果相同。曲面的 $C^2$ 假设保证上述混合偏导交换；更弱正则性需要近似论证，不在使用公式时默默省略。

当 $S$ 为 $xy$ 平面中的区域且法向向上，旋度通量只剩 $(Q_x-P_y)dxdy$，恰是 Green 公式。三大公式并不是互不相关的三个记忆规则。

### §8.2 换面的原则与定向核验

对同一场 $\mathbf F$，只要两个可用曲面有相同的诱导边界且 $\mathbf F$ 在各自邻域内为 $C^1$，它们的**旋度通量**都等于同一条边界的环量，因此相等。此结论直接来自 Stokes 公式，不需要另外假设两面之间没有孔洞；但若替换的是一般零散度场的通量，就须使用 §7.2 的填充条件，二者不可混淆。

交线位于某个平面上时，优先取该平面截口：法向是常向量，曲线方程有时又使 $\operatorname{curl}\mathbf F\cdot n$ 为常数，问题便只剩面积。问题 C4 正是这一情形。

“从某点看为逆时针”表示法向朝向该观察点所在的一侧；“从正 $z$ 轴看逆时针”对应法向的 $z$ 分量为正。应先定法向再计算，不能用最后答案的正负猜方向。

### §8.3 空间势函数与拓扑条件

定理 4.2 已在任意维数证明。对三维 $C^1$ 场，$\partial_jF_i=\partial_iF_j$ 等价于 $\nabla\times\mathbf F=0$，故在线单连通域中，

$$
 \operatorname{curl}\mathbf F=0
 \quad\Longleftrightarrow\quad\mathbf F=\nabla u
 \quad\Longleftrightarrow\quad\hbox{所有闭路的环量为零}.\qquad\text{(8.2)}
$$

在长方体内可沿三条坐标线构造势函数：

$$
\begin{aligned}
 u(x,y,z)={}&\int_{x_0}^xP(t,y_0,z_0)dt
 +\int_{y_0}^yQ(x,t,z_0)dt\\
 &+\int_{z_0}^zR(x,y,t)dt.
\end{aligned}\qquad\text{(8.3)}
$$

对三个变量求导并用 $P_y=Q_x,P_z=R_x,Q_z=R_y$，依次得到 $u_x=P,u_y=Q,u_z=R$。如 $\mathbf F=(yz,xz,xy)$ 的势函数为 $xyz$，任意允许路径的积分就是终点与起点的 $xyz$ 之差。

穿孔轴域 $\mathbb R^3\setminus\{x=y=0\}$ 上，$(-y,x,0)/(x^2+y^2)$ 无旋，却沿绕轴一周的圆有环量 $2\pi$，所以不存在全局单值势函数。另一方面，$\mathbb R^3\setminus\{0\}$ 线单连通，因此无旋场有标量势；但其中的反平方场没有全局向量势，见 §9.5。这是线与面的拓扑障碍不同的具体体现。


## §9 场论初步

### §9.1 数量场、向量场与梯度

数量场给每个空间点一个数，向量场给每个点一个向量。若随时间变化，写作 $u(x,t)$、$\mathbf F(x,t)$；不依赖时间时称为稳定场。等值面是 $u=c$；向量线是切向与场平行的曲线，在场非零处可通过解 $r'(t)=\mathbf F(r(t))$ 描述。

**命题 9.1**　若 $u$ 可微，则沿单位向量 $e$ 的方向导数为 $D_eu=\nabla u\cdot e$，最大值是 $|\nabla u|$；当梯度非零时，最大增长方向为 $\nabla u/|\nabla u|$。梯度垂直于正则等值面。

**证明：** 可微定义给 $u(x+he)-u(x)=h\nabla u(x)\cdot e+o(h)$，除以 $h$ 得方向导数。由 Cauchy–Schwarz，$\nabla u\cdot e\le|\nabla u|$，等号条件正是同向。沿等值面任意曲线 $r(t)$，$u(r(t))$ 常值，所以 $\nabla u\cdot r'=0$，即垂直所有切向量。

### §9.2 散度、旋度的局部几何意义

**命题 9.2**　若 $\mathbf F\in C^1$，对含点 $p$、直径趋零的分片光滑小实体 $V$，

$$
 \operatorname{div}\mathbf F(p)
 =\lim_{V\to p}\frac1{|V|}\iint_{\partial V}\mathbf F\cdot n\,dS.\qquad\text{(9.1)}
$$

对过 $p$、法向为单位向量 $n$ 的小平面圆盘 $D_\varepsilon$，

$$
 (\operatorname{curl}\mathbf F)(p)\cdot n
 =\lim_{\varepsilon\to0}\frac1{|D_\varepsilon|}
       \oint_{\partial D_\varepsilon}\mathbf F\cdot dr.\qquad\text{(9.2)}
$$

**证明：** Gauss 公式将式（9.1）右端化为散度的体积平均，与 $\operatorname{div}\mathbf F(p)$ 的差不超过 $\sup_{x\in V}|\operatorname{div}\mathbf F(x)-\operatorname{div}\mathbf F(p)|\to0$。Stokes 公式将式（9.2）化为旋度法向分量的面积平均，同样由连续性取极限。取三个坐标方向便恢复散度与旋度的分量公式；任意 $n$ 的取法表明定义不依赖所选直角坐标。

散度是单位体积的净流出强度，正者为源、负者为汇。旋度则记录局部环量的面密度。若刚体绕常向量角速度 $\Omega$ 旋转，速度场为 $\mathbf v=\Omega\times x$；展开三分量直接求导得到 $\operatorname{curl}\mathbf v=2\Omega$，所以旋度是角速度的两倍，而非角速度本身。

### §9.3 Hamilton 算子及一阶运算法则

记 $\nabla=(\partial_x,\partial_y,\partial_z)$，$\Delta=\partial_x^2+\partial_y^2+\partial_z^2$。这些是微分算子记号，不能像常向量一样不顾系数函数随意交换次序。

对 $C^1$ 函数与场，有

$$
\begin{aligned}
 \nabla(uv)&=u\nabla v+v\nabla u,\\
 \nabla\cdot(u\mathbf F)&=u\nabla\cdot\mathbf F+\nabla u\cdot\mathbf F,\\
 \nabla\times(u\mathbf F)&=u\nabla\times\mathbf F+\nabla u\times\mathbf F,\\
 \nabla\cdot(\mathbf F\times\mathbf G)
 &=\mathbf G\cdot(\nabla\times\mathbf F)-\mathbf F\cdot(\nabla\times\mathbf G).
\end{aligned}\qquad\text{(9.3)}
$$

**证明：** 第一式的第 $i$ 分量就是 $\partial_i(uv)=u\partial_iv+v\partial_iu$；第二式将 $\partial_i(uF_i)$ 求和即可。第三式第一个分量为 $\partial_y(uR)-\partial_z(uQ)=u(R_y-Q_z)+u_yR-u_zQ$，其余循环相同。最后一式用 $\varepsilon_{ijk}$ 表示置换符号：

$$
 \partial_i(\varepsilon_{ijk}F_jG_k)
 =\varepsilon_{ijk}(\partial_iF_j)G_k
   +\varepsilon_{ijk}F_j\partial_iG_k
 =G_k(\operatorname{curl}\mathbf F)_k-F_j(\operatorname{curl}\mathbf G)_j,
$$

重复指标求和。每一项的符号来自循环置换保号、交换两指标变号。

### §9.4 二阶恒等式及证明

若函数和场为 $C^2$，则

$$
 \operatorname{curl}(\nabla u)=0,\qquad
 \operatorname{div}(\operatorname{curl}\mathbf F)=0,\qquad
 \operatorname{curl}\operatorname{curl}\mathbf F
 =\nabla\operatorname{div}\mathbf F-\Delta\mathbf F.\qquad\text{(9.4)}
$$

**证明：** 第一式三个分量分别是 $u_{zy}-u_{yz}$ 等，混合偏导相等使其为零。第二式展开为 $R_{yx}-Q_{zx}+P_{zy}-R_{xy}+Q_{xz}-P_{yz}$，两两抵消。第三式第一个分量是

$$
 \partial_y(Q_x-P_y)-\partial_z(P_z-R_x)
 =\partial_x(P_x+Q_y+R_z)-(P_{xx}+P_{yy}+P_{zz});
$$

其余两个分量按相同次序循环即可。顺便由式（9.3）得到 $\Delta(uv)=u\Delta v+v\Delta u+2\nabla u\cdot\nabla v$。

### §9.5 标量势、向量势与调和场

有势场是 $\mathbf F=\nabla u$；无旋场是 $\operatorname{curl}\mathbf F=0$。前者必为后者，在线单连通域上反之亦成立，证明见定理 4.2。无源场是 $\operatorname{div}\mathbf F=0$；若 $\mathbf F=\operatorname{curl}\mathbf A$，称 $\mathbf A$ 为向量势，且称 $\mathbf F$ 为旋度场。

**定理 9.3（星形域上的向量势）**　设 $D$ 关于原点星形，$\mathbf F\in C^1(D)$ 且 $\operatorname{div}\mathbf F=0$，则

$$
 \mathbf A(x)=\int_0^1t\,[\mathbf F(tx)\times x]dt,
 \qquad\operatorname{curl}\mathbf A=\mathbf F.\qquad\text{(9.5)}
$$

一般星形中心 $c$ 时用 $x-c$ 与 $c+t(x-c)$ 替换。

**证明：** 对 $\mathbf H(x)=\mathbf F(tx)$，按分量乘积法则展开叉积的旋度，得

$$
 \nabla\times(\mathbf H\times x)
 =2\mathbf H+(x\cdot\nabla)\mathbf H-x\operatorname{div}\mathbf H.
$$

因 $\operatorname{div}\mathbf H=t\operatorname{div}\mathbf F(tx)=0$，乘上 $t$ 后，右端为

$$
 2t\mathbf F(tx)+t^2(D\mathbf F)(tx)x
 =\frac d{dt}\{t^2\mathbf F(tx)\}.
$$

积分从 $0$ 到 $1$，$t=0$ 项因连续有界而为零，得到式（9.5）。这也说明局部无源必有局部向量势，因为每点都有星形小球邻域。

无源并不自动给出全局向量势。反平方场 $x/|x|^3$ 在穿孔空间无源，却有球面通量 $4\pi$；若它等于 $\operatorname{curl}\mathbf A$，将球面分为两个半球应用 Stokes 公式，赤道的两次边界积分相消，会得到总通量为零，矛盾。

既无源又无旋的场称为调和场。若该场为 $C^2$，式（9.4）表明其各分量均为调和函数。反过来，各分量调和不必使散度和旋度都为零，例如 $\mathbf F=(x,0,0)$ 各分量调和但散度为 $1$。若 $u$ 调和，则 $\nabla u$ 既无旋又无源。

### §9.6 Helmholtz 分解：一个条件明确的版本

**定理 9.4**　对 $\mathbf F\in C_c^\infty(\mathbb R^3)$，令

$$
 \mathbf U(x)=\frac1{4\pi}\int_{\mathbb R^3}\frac{\mathbf F(y)}{|x-y|}\,dy,
 \qquad \phi=-\operatorname{div}\mathbf U,
 \qquad \mathbf A=\operatorname{curl}\mathbf U.
$$

则

$$
 \mathbf F=\nabla\phi+\operatorname{curl}\mathbf A.\qquad\text{(9.6)}
$$

**证明：** 先证 $G(x)=1/(4\pi|x|)$ 满足 $-\Delta G=\delta_0$。对任意紧支撑光滑 $\psi$，在挖去小球的区域使用 Green 第二公式，外远边界项为零，内边界外法向为 $-e_r$。由于 $\Delta G=0$ 于球外，

$$
 \int_{|x|>\varepsilon}G\Delta\psi\,dx
 =\int_{|x|=\varepsilon}
 \left(-G\partial_r\psi-\frac{\psi}{4\pi\varepsilon^2}\right)dS
 \longrightarrow-\psi(0).
$$

第一项的绝对值为 $O(\varepsilon)$，第二项是负的球面平均值。$G$ 在原点局部可积，故这就是分布恒等式。卷积 $\mathbf U=G*\mathbf F$ 可把任意阶导数转移到紧支撑光滑函数 $\mathbf F$ 上；局部可积核保证各积分连续，故 $\mathbf U$ 光滑，且 $-\Delta\mathbf U=\mathbf F$。再用式（9.4），

$$
 \nabla\phi+\operatorname{curl}\mathbf A
 =-\nabla\operatorname{div}\mathbf U+
   (\nabla\operatorname{div}\mathbf U-\Delta\mathbf U)=\mathbf F.
$$

这证明了给定条件下的分解。对有边界域或不衰减的场，需要额外的边界条件及可能的调和部分，不能把式（9.6）无条件搬过去。

### §9.7 Green 恒等式与调和函数

若 $u,v\in C^2$ 于有界分片光滑区域闭包的邻域，令 $\partial_n v=\nabla v\cdot n$，则

$$
 \iiint_V(u\Delta v+\nabla u\cdot\nabla v)dV
 =\iint_{\partial V}u\partial_nv\,dS,\qquad\text{(9.7)}
$$

$$
 \iiint_V(u\Delta v-v\Delta u)dV
 =\iint_{\partial V}(u\partial_nv-v\partial_nu)dS.\qquad\text{(9.8)}
$$

**证明：** 式（9.7）是对场 $u\nabla v$ 使用 Gauss 公式，并利用 $\operatorname{div}(u\nabla v)=\nabla u\cdot\nabla v+u\Delta v$。交换 $u,v$ 后相减，梯度内积抵消，得到式（9.8）。因此若 $u$ 调和，$\iint_{\partial V}\partial_nu\,dS=0$。

**定理 9.5（平均值性质）**　若 $u\in C^2(D)$ 且 $\Delta u=0$，$\overline B_R(p)\subset D$，则

$$
 u(p)=\frac1{4\pi R^2}\iint_{\partial B_R(p)}u\,dS
 =\frac1{|B_R|}\iiint_{B_R(p)}u\,dV.\qquad\text{(9.9)}
$$

**证明：** 记 $M(r)=(4\pi)^{-1}\int_{|\omega|=1}u(p+r\omega)dS_\omega$。在积分下求导，并由 Gauss 公式，

$$
 M'(r)=\frac1{4\pi r^2}\iint_{\partial B_r(p)}\partial_nu\,dS
 =\frac1{4\pi r^2}\iiint_{B_r(p)}\Delta u\,dV=0.
$$

所以 $M$ 常值；$r\to0$ 时由连续性 $M(r)\to u(p)$，给出球面平均。再将 $4\pi r^2M(r)$ 从 $0$ 积到 $R$，除以球体积，得到球体平均。

**定理 9.6（极值原理与唯一性）**　连通域内的调和函数若在内部取到全域最大值或最小值，则为常数。若 $D$ 有界，$u\in C^2(D)\cap C(\overline D)$，则最大、最小值可在边界取得；同一连续边界值的调和解至多一个。

**证明：** 假设内部点 $p$ 达到最大值 $M$。对充分小的球，$M-u\ge0$，其球体积分由平均值定理等于零，连续性迫使整个球内 $u=M$。所以集合 $\{u=M\}$ 在 $D$ 内既开又闭，非空且 $D$ 连通，故等于 $D$。最小值用 $-u$。有界闭包上连续函数取到极值，若非常数则极值不能在内部，只能在边界。两个解之差调和且边界为零，其最大最小值均为零，故差为零。这里证明的是唯一性，并未宣称任意边界数据都存在经典解。

### §9.8 正交曲线坐标与 Lamé 系数

设 $x=x(q_1,q_2,q_3)$ 为 $C^2$ 正则、正向正交坐标参数；求一阶场算子时函数及场取 $C^1$，求 Laplace 算子时 $u\in C^2$。令 $h_i=|x_{q_i}|>0$，$e_i=x_{q_i}/h_i$，$J=h_1h_2h_3$。$\mathbf F=\sum F_ie_i$ 中 $F_i$ 是沿单位基的分量。则

$$
 \nabla u=\sum_{i=1}^3\frac{e_i}{h_i}\partial_{q_i}u,
 \qquad
 \operatorname{div}\mathbf F=\frac1J\sum_i\partial_{q_i}\left(\frac J{h_i}F_i\right),\qquad\text{(9.10)}
$$

$$
 (\operatorname{curl}\mathbf F)_i
 =\frac1{h_jh_k}\left[\partial_{q_j}(h_kF_k)-\partial_{q_k}(h_jF_j)\right],
 \quad(i,j,k)=(1,2,3),(2,3,1),(3,1,2),\qquad\text{(9.11)}
$$

$$
 \Delta u=\frac1J\sum_i\partial_{q_i}\left(\frac J{h_i^2}\partial_{q_i}u\right).\qquad\text{(9.12)}
$$

**证明：** 沿第 $i$ 坐标线移动 $dq_i$，有 $dx=h_ie_idq_i$，比较 $du=\nabla u\cdot dx$ 与 $du=u_{q_i}dq_i$ 得梯度式。小坐标盒的体积为 $Jdq_1dq_2dq_3$，垂直第 $i$ 方向的两面通量差的一阶主项为 $\partial_{q_i}((J/h_i)F_i)dq_1dq_2dq_3$，除以体积并取极限，由式（9.1）得散度式。对第 $j,k$ 坐标小矩形，四边环量的主项为 $[\partial_{q_j}(h_kF_k)-\partial_{q_k}(h_jF_j)]dq_jdq_k$；面积主项为 $h_jh_kdq_jdq_k$。该坐标小矩形一般是曲面片，先用 Stokes 公式把环量化成旋度通量；缩小时法向一致趋于 $e_i$，所以除以面积的极限为 $\operatorname{curl}\mathbf F\cdot e_i$，从而得到旋度式。对梯度再取散度，便得 Laplace 式。

柱坐标 $(r,\theta,z)$ 的 $h=(1,r,1)$，因此

$$
\begin{aligned}
 \nabla u&=e_ru_r+e_\theta\frac{u_\theta}{r}+e_zu_z,\\
 \operatorname{div}\mathbf F&=\frac1r(rF_r)_r+\frac1r(F_\theta)_\theta+(F_z)_z,\\
 \operatorname{curl}\mathbf F
 &=e_r\left(\frac{(F_z)_\theta}{r}-(F_\theta)_z\right)
 +e_\theta\left((F_r)_z-(F_z)_r\right)\\
 &\quad+\frac{e_z}{r}\left((rF_\theta)_r-(F_r)_\theta\right),\\
 \Delta u&=\frac1r(ru_r)_r+\frac1{r^2}u_{\theta\theta}+u_{zz}.
\end{aligned}\qquad\text{(9.13)}
$$

球坐标取 $(r,\varphi,\theta)$，$\varphi$ 为从正 $z$ 轴量起的极角，$h=(1,r,r\sin\varphi)$，则

$$
\begin{aligned}
 \nabla u&=e_ru_r+\frac{e_\varphi}{r}u_\varphi+
                    \frac{e_\theta}{r\sin\varphi}u_\theta,\\
 \operatorname{div}\mathbf F
 &=\frac1{r^2}(r^2F_r)_r+\frac1{r\sin\varphi}(\sin\varphi F_\varphi)_\varphi
     +\frac1{r\sin\varphi}(F_\theta)_\theta,\\
 (\operatorname{curl}\mathbf F)_r
 &=\frac{(\sin\varphi F_\theta)_\varphi-(F_\varphi)_\theta}{r\sin\varphi},\\
 (\operatorname{curl}\mathbf F)_\varphi
 &=\frac{(F_r)_\theta}{r\sin\varphi}-\frac{(rF_\theta)_r}{r},\\
 (\operatorname{curl}\mathbf F)_\theta
 &=\frac{(rF_\varphi)_r-(F_r)_\varphi}{r},\\
 \Delta u&=\frac1{r^2}(r^2u_r)_r+
 \frac1{r^2\sin\varphi}(\sin\varphi u_\varphi)_\varphi
 +\frac1{r^2\sin^2\varphi}u_{\theta\theta}.
\end{aligned}\qquad\text{(9.14)}
$$

轴线、球极及原点处坐标退化，这些分式只能先在非退化区域使用；是否可连续延拓，要检查实际函数，而不是把坐标分母直接当作场的真实奇点。

## §10 微分形式与一般 Stokes 公式

### §10.1 外积、形式与拉回

**定义**　在 $\mathbb R^n$ 中，$k$ 次微分形式是

$$
 \omega=\sum_{i_1<\cdots<i_k}a_{i_1\cdots i_k}(x)
 dx_{i_1}\wedge\cdots\wedge dx_{i_k}.
$$

外积按双线性、结合律及 $dx_i\wedge dx_j=-dx_j\wedge dx_i$ 定义，故 $dx_i\wedge dx_i=0$。更一般地，$k$ 次形式与 $l$ 次形式交换产生 $(-1)^{kl}$：每个基本项需要进行 $kl$ 次一阶因子的交换，展开后即得。

一阶微分 $df_j=\sum_i(\partial_i f_j)dx_i$ 的外积展开时，有重复指标的项为零，其余项按排列符号求和，正是行列式，因此

$$
 df_1\wedge\cdots\wedge df_n
 =\det Df\,dx_1\wedge\cdots\wedge dx_n.\qquad\text{(10.1)}
$$

映射 $r$ 的拉回 $r^*\omega$ 定义为把系数中的坐标换成 $r$，把 $dx_i$ 换成 $d(r_i)$，再按外积展开。故一形式沿曲线拉回为 $\sum_iF_i(r(t))r_i'(t)dt$；二形式 $Pdy\wedge dz+Qdz\wedge dx+Rdx\wedge dy$ 在曲面拉回为 $\mathbf F(r)\cdot(r_u\times r_v)du\wedge dv$。这正好重现两种第二型积分。

第一型积分的 $ds,dS$ 是正的长度、面积密度，没有反向变号的性质；不能把它们与有向微分形式不加区别地混用。

### §10.2 外微分及其代数

**定义**　外微分按

$$
 d\omega=\sum_I da_I\wedge dx_I
$$

定义。对 $k$ 次形式 $\omega$ 和任意形式 $\eta$，有

$$
 d(\omega\wedge\eta)=d\omega\wedge\eta+(-1)^k\omega\wedge d\eta,
 \qquad d(d\omega)=0\quad(\omega\in C^2).\qquad\text{(10.2)}
$$

**证明：** 对基本项 $a\,dx_I$ 与 $b\,dx_J$，左端为 $d(ab)\wedge dx_I\wedge dx_J$。其中 $a\,db$ 移过 $k$ 个微分因子产生 $(-1)^k$，即得乘积法则；一般情况由线性得到。再微分时，$d^2a=\sum_{i,j}\partial_j\partial_i a\,dx_j\wedge dx_i$，$i=j$ 项为零，$i\ne j$ 两项因混合偏导相等及外积反对称而抵消。

三维中直接展开可得

$$
\begin{aligned}
 du&=u_xdx+u_ydy+u_zdz,\\
 d(Pdx+Qdy+Rdz)
 &=(R_y-Q_z)dy\wedge dz+(P_z-R_x)dz\wedge dx\\
 &\quad +(Q_x-P_y)dx\wedge dy,\\
 d(Pdy\wedge dz+Qdz\wedge dx+Rdx\wedge dy)
 &=(P_x+Q_y+R_z)dx\wedge dy\wedge dz.
\end{aligned}\qquad\text{(10.3)}
$$

所以 grad、curl、div 是同一运算 $d$ 在不同次数上的表现。拉回满足 $d(r^*\omega)=r^*(d\omega)$：对系数函数这是链式法则，对基本微分是 $d^2r_i=0$，再用乘积法则和线性展开便证明一般情况。

### §10.3 一般 Stokes 公式及证明

**定理 10.1**　设 $M$ 为紧致、定向的光滑 $m$ 维带边界流形，$\omega$ 是其邻域内的 $C^1$ 的 $(m-1)$ 次形式，则按外法向优先的诱导边界定向，

$$
 \int_{\partial M}\omega=\int_Md\omega.\qquad\text{(10.4)}
$$

**证明：** 先在 $\mathbb R^m$ 或半空间 $x_m\ge0$ 中，对紧支撑形式

$$
 \omega=\sum_{i=1}^m(-1)^{i-1}a_i\,
 dx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_m
$$

证明。帽子表示省略该因子，展开得 $d\omega=(\sum_i\partial_i a_i)dx_1\wedge\cdots\wedge dx_m$。全空间中，每个偏导的积分由 Fubini 和一元基本定理等于零，边界也为空。半空间中，$i<m$ 的项仍为零，$i=m$ 的项沿 $x_m\in[0,\infty)$ 积分给出 $-a_m(x',0)$。边界外法向为 $-e_m$，按诱导定向积分的 $\omega$ 也正好是 $-a_m(x',0)dx'$，两边一致。

对一般 $M$，取有限个内部图及半空间边界图，构造从属于它们的光滑分解单位 $\chi_j$；构造方法与 §4.1 相同，在坐标图中选紧支撑光滑函数后归一化。令 $\omega_j=\chi_j\omega$，在每张图中用刚证明的局部公式。拉回与外微分可交换，且定向换元保持积分，因此可把局部公式转回 $M$。求和时，$\sum_j\omega_j=\omega$，$\sum_jd\omega_j=d\omega$，便得式（10.4）。若流形分片光滑，逐片应用，内部面因诱导定向相反而消去；余下角、棱的维数更低，不贡献相应积分。

$m=1$ 时边界是“终点减起点”，得到 Newton–Leibniz；平面二形式给 Green；空间曲面的二形式给 Stokes；三维体的三形式给 Gauss。

### §10.4 闭形式、恰当形式与 Poincaré 引理

**定义**　$d\omega=0$ 称为闭形式，$\omega=d\eta$ 称为恰当形式。由 $d^2=0$，恰当必闭。反过来需要区域条件。

**定理 10.2（星形域 Poincaré 引理）**　在关于原点星形的开集上，每个 $C^1$ 的闭 $k$ 次形式（$k\ge1$）都是恰当形式。

**证明：** 对 $\omega$ 定义 $(k-1)$ 次形式

$$
 (K\omega)_x(v_1,\ldots,v_{k-1})
 =\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})dt.\qquad\text{(10.5)}
$$

证明同伦公式 $dK\omega+Kd\omega=\omega$。令 $H(t,x)=tx$，把拉回唯一写为 $H^*\omega=dt\wedge\alpha(t,x)+\beta(t,x)$，其中 $\alpha,\beta$ 只含 $dx_i$。按外微分规则，

$$
 d(H^*\omega)=dt\wedge(\partial_t\beta-d_x\alpha)+d_x\beta.
$$

对 $dt$ 的系数从 $0$ 积到 $1$，并用 $dH^*\omega=H^*d\omega$，得到

$$
 Kd\omega=\beta(1,x)-\beta(0,x)-d_x\int_0^1\alpha(t,x)dt.
$$

这里 $\int_0^1\alpha dt$ 正是式（10.5），$\beta(1)=\omega$；常映射 $x\mapsto0$ 对正次数形式的拉回为零，故 $\beta(0)=0$。于是同伦公式成立。若 $d\omega=0$，便有 $\omega=d(K\omega)$。一般星形中心只需平移。

对于具有光滑收缩同伦的可缩域，同样用该同伦代替 $tx$ 得到相同结论。仅说“拓扑可缩”时，还需调用光滑同伦近似，不能把线性收缩公式直接用于非星形域。

闭形式模掉恰当形式所得商空间记为 $H_{\mathrm{dR}}^k(D)$，称为 de Rham 上同调。它在这里用于记录全局积分障碍，不需要先用抽象理论才能计算：穿孔平面的角度一形式具有非零圆周周期，穿孔三维空间的反平方通量二形式具有非零球面周期，因 Stokes 公式，它们都不可能恰当。这就是“局部导数为零”与“全局可积分成势”的差别。

## §11 计算思想、技巧与复习索引

### §11.1 四类积分的统一与区别

| 类型 | 正确参数表达 | 定向作用 | 首先观察什么 |
| --- | --- | --- | --- |
| 第一型曲线 | $\int f(r(t))\lvert r'(t)\rvert dt$ | 反向不变 | 弧长元、曲线方程、等距对称 |
| 第二型曲线 | $\int\mathbf F(r(t))\cdot r'(t)dt$ | 反向变号 | 端点、闭合性、势函数、旋度 |
| 第一型曲面 | $\iint f(r)\lvert r_u\times r_v\rvert dudv$ | 反侧不变 | 单值投影、面积元、曲面方程 |
| 第二型曲面 | $\iint\mathbf F(r)\cdot(r_u\times r_v)dudv$ | 反侧变号 | 法向、闭合性、散度、奇点 |

第一型是在几何对象上对正的长度、面积测度积分；第二型是在有向对象上积分微分形式。它们都能由 Riemann 和建立，但“取模”与“保留符号”决定了后续每一步的不同。

### §11.2 从读题到计算的顺序

先写清积分对象、积分类型和取向，把曲线或曲面的方程代入被积函数，看能否化为常数、少数坐标或半径。然后检查保持整个对象的等距变换；对第二型，要连同微分或法向一起变换。仅这两步常已能消掉大半项。

若必须一般计算，曲线选使导数平方和最简单的参数；曲面选单值且斜率因子最简单的投影，或选正交平面参数。最后才比较直接积分与三大公式的工作量。闭曲线不必都用 Green，闭曲面也不必都用 Gauss：若求导更复杂，直接参数法可能更短。

| 场景 | 有效想法 | 本文对应 |
| --- | --- | --- |
| 多段折线或分片曲面 | 分片算；公共边界只对有向定理抵消 | L1、§6.2 |
| 球面/球面交圆 | 轮换二次矩；旋转线性组合；截圆中心坐标 | L3、S3、S4 |
| 有向边界具有循环结构 | 拉回完整微分式，保留方向 | C2 |
| 半角结构与根号速度 | 先合并速度平方，再处理绝对值 | L4 |
| 开放曲线/曲面 | 补简单边界，再减去补入部分 | §4.2、F4 |
| 空间闭曲线位于平面 | 用 Stokes 换成平面截口 | C4 |
| 分母有半径幂 | 先定位奇点，再挖圆/球 | §4.3、§7.3 |
| 参数式很难但梯度结构明显 | 求势，只算端点差 | §4.5、§8.3 |
| 证明型积分恒等式 | 构造散度或旋度，利用边界条件 | §9.7 |

### §11.3 三大公式的使用条件

| 公式 | 左端与右端 | 必须核查的条件 |
| --- | --- | --- |
| Green | 平面边界环量与区域旋度积分 | 边界闭合；外逆内顺；系数在整个区域邻域内 $C^1$ |
| Gauss | 闭曲面外通量与体积散度积分 | 补齐全部边界；各面取实体外侧；内部没有未处理奇点 |
| Stokes | 曲面边界环量与旋度通量 | 曲面可定向；边界与法向相容；场在曲面邻域内 $C^1$ |

局部与整体条件分开检查：无旋保证小球内有势，线单连通或周期全为零才支持整体势；无源保证可填充小实体的通量为零，球壳中的非零球面通量说明它不能无条件推广到全部闭曲面。

### §11.4 十六题的来源与方法覆盖

| 积分类型 | 四道正文题 | 一般计算题 | 对称性题 |
| --- | --- | --- | --- |
| 第一型曲线 | L1：11.1（2）；L2：11.1（3）；L3：11.1（4）；L4：11.1（5） | L1、L2 | L3 |
| 第二型曲线 | C1：11.2-3（1）；C2：11.2-4；C3：11.3-1（1）；C4：12.4-4（3） | C1 | C2、C3 |
| 第一型曲面 | S1：12.2（2）；S2：12.2（3）；S3：问题12.2-1；S4：问题12.2-2 | S1 | S2、S3 |
| 第二型曲面 | F1：12.3-1（1）；F2：12.3-1（4）；F3：12.4-1（2）；F4：12.4-1（3） | F2 | F1、F3 |

题号均对应网站现有《科大数分习题-v2（下册）》，题面中的方向、范围、绝对值均保留；解答为本讲义重新展开。C4 虽位于教材曲面积分章，所求对象仍是第二型曲线积分，分类按积分本身确定。

### §11.5 阅读次序与附录

初次学习建议按 §1—§8 顺序，先理解定义和三大公式，再回看 16 道例题；复习时先读 §11.1—§11.4，再针对错误回到相应证明。§9 将积分转为场论语言，§10 说明各公式为什么具有同一种结构。

用户提供的第二份 PDF 共 58 道例题，全部另编为**带星号的独立阅读附录**。正文的例题编号仅为 L1—L4、C1—C4、S1—S4、F1—F4；附录不纳入这 16 题，也不改变正文的 §1—§11 编号。附录保留原解答过程及原有编校说明，包含原文件中的反常积分题；其中标注“原解存疑”的条目仍保留该标注。

### §11.6 参考资料与证明范围

基础知识结构来自用户上传的《曲线积分与曲面积分·知识框架》，本文将其条目展开成定义、计算公式和证明。主要教材参照为常庚哲、史济怀《数学分析教程》第四版下册：第 11 章（印刷第 53—71 页）、第 12 章（第 72—97 页）、第 13 章（第 98—123 页）。其中参数公式、切平面面积定义、三大公式的局部证明、星形域向量势与正交坐标的处理均与教材相衔接。

本讲义使用一元微积分基本定理、多元微分链式法则、Fubini、重积分换元、隐函数/反函数定理等数分前置结论。Jordan 分离定理给出了正则光滑版本的证明；最一般连续版本明确作为拓扑背景。除此以外，本主题的积分性质、计算公式、三大公式、势函数判据、场论恒等式及所列拓展定理均给出证明。定义本身不需证明，但其存在性、参数不变性和相互转换均已论证。
