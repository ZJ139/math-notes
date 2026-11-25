---
title: "楼红卫《数学分析》B 组习题解答（四十二）：曲线曲面积分、行列式恒等式与循环常数"
description: "B289—B295：第一型曲线积分的性质、球面 Poisson 公式、复曲线积分估计、第二型曲面积分的定义条件、椭球面通量、行列式的零边界扰动与循环常数。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-42-cm-bea.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "曲线积分", "曲面积分", "Gauss公式", "行列式", "B289-B295"]
created_at: "2026-11-23"
updated_at: "2026-11-23"
---

第四十二批接续 B288，收录下册 11.1.B、11.2.B、11.3.B、11.4.B 各第 1 题及 11.5.B 第 1—3 题。已逐页核对原题册 PDF 第 34—38 页（印刷第 32—36 页），七题均无星号，也无另附题图。B289、B292 为开放性问题，给出明确的适用条件及完整论证；B290 单列零参数情形；B294 不假设矩阵可逆；B295 保留原题的无穷远条件。

[下一批 B296—B302](/problems/fc3fd711670bf3b3606e6b81/) · [上一批 B282—B288](/problems/4befc8c3dd054a194653ad14/) · [第十一章索引](/problems/collections/lou-analysis/chapters/11/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)

## 题号导航

- [问题 B289：定积分性质向弧长积分的移植（11.1.B-1）](#问题-b289)
- [问题 B290：球面 Poisson 公式与退化情形（11.2.B-1）](#问题-b290)
- [问题 B291：复曲线积分的模估计（11.3.B-1）](#问题-b291)
- [问题 B292：第二型曲面积分的定义条件（11.4.B-1）](#问题-b292)
- [问题 B293：椭球面上的反平方场通量（11.5.B-1）](#问题-b293)
- [问题 B294：行列式的零边界扰动恒等式（11.5.B-2）](#问题-b294)
- [问题 B295：由无穷远衰减消去循环常数（11.5.B-3）](#问题-b295)

## 问题 B289

**原题号：** 习题 11.1.B 第 1 题。[原题，PDF 第 34 页（印刷第 32 页）](/files/problems/楼分析习题-v2.pdf#page=34)

**题目**　试将定积分的一些性质移植到第一型曲线积分。

**基础知识**　分段正则曲线的弧长参数；定积分的线性、可加性、保序性、中值定理及一致收敛下的逐项积分。

**思路来源**　第一型曲线积分以弧长为正的积分权。用弧长参数把曲线拉回一个区间，定积分性质便有了共同的证明入口；但方向、连通性与重复走过曲线的次数必须说明。

**解**　设 $C$ 为有限长、连通、分段 $C^1$ 正则曲线，长度为 $L>0$，先约定只走过一次。取弧长参数表示 $r:[0,L]\to C$，则对可积的 $f$，

$$
\int_C f\,ds=\int_0^L f(r(s))\,ds.
\qquad\text{(1)}
$$

以下各积分均假设存在；论及实数大小时函数取实值。

**线性与可加性。** 对常数 $\alpha,\beta$，由（1）有

$$
\int_C(\alpha f+\beta g)\,ds
=\alpha\int_Cf\,ds+\beta\int_Cg\,ds.
\qquad\text{(2)}
$$

若把参数区间在有限个点处分段，相应的曲线段为 $C_1,\ldots,C_k$，则 $\int_C f\,ds=\sum_{j=1}^k\int_{C_j}f\,ds$。端点的重复不影响积分；若几何上某一段被重复走过，则必须计入其遍历重数，不能只按点集取并。

**保序与绝对值估计。** 由正权 $ds$，$f\le g$ 蕴涵 $\int_C f\,ds\le\int_Cg\,ds$，特别地

$$
\begin{aligned}
\int_C1\,ds&=L,\\
m\le f\le M&\ \Longrightarrow\ mL\le\int_Cf\,ds\le ML,\\
\left|\int_Cf\,ds\right|&\le\int_C|f|\,ds
\le L\sup_C|f|.
\end{aligned}
\qquad\text{(3)}
$$

最后一行对复值函数也成立：若 $I=\int_Cf\,ds\ne0$，乘以 $\overline I/|I|$ 后取实部，即得 $|I|\le\int_C|f|\,ds$。若 $f\ge0$ 且在 $C$ 上连续，则积分为零还推出 $f\equiv0$；否则在某个弧长小区间上 $f$ 有正下界，积分必为正。没有连续性时，只能推出 $f=0$ 几乎处处（关于弧长）。

**积分中值定理。** 设 $f$ 在 $C$ 上连续，$g\ge0$ 可积且 $\int_Cg\,ds>0$。记 $m=\min_C f$、$M=\max_Cf$，则

$$
m\le\frac{\int_Cfg\,ds}{\int_Cg\,ds}\le M.
\qquad\text{(4)}
$$

由于 $C$ 连通，连续函数 $f$ 取遍 $[m,M]$，故存在 $\xi\in C$，使

$$
\int_Cfg\,ds=f(\xi)\int_Cg\,ds.
\qquad\text{(5)}
$$

取 $g=1$ 即得 $\int_Cf\,ds=f(\xi)L$。连通性不能去掉：两条互不相交、等长的线段上分别取 $f=0$、$f=1$，平均值为 $1/2$，却没有任何点取到它。

**Hölder 与 Cauchy–Schwarz 不等式。** 对 $p,q>1$、$1/p+1/q=1$，把区间上的 Hölder 不等式用于 $f\circ r$ 与 $g\circ r$，得到

$$
\int_C|fg|\,ds\le
\left(\int_C|f|^p\,ds\right)^{1/p}
\left(\int_C|g|^q\,ds\right)^{1/q}.
\qquad\text{(6)}
$$

取 $p=q=2$ 即为 Cauchy–Schwarz 不等式。这里要求右端两个幂积分有限，才能得到有限值估计。

**一致收敛与积分交换。** 若 $f_n$ 在 $C$ 上可积且一致收敛于 $f$，则由区间上的相应定理 $f$ 可积，并且

$$
\left|\int_Cf_n\,ds-\int_Cf\,ds\right|
\le L\sup_C|f_n-f|\longrightarrow0.
\qquad\text{(7)}
$$

同理，一致收敛的函数项级数可以逐项作弧长积分。在 Lebesgue 积分的框架下，单调收敛和控制收敛定理也可由（1）直接移植；控制函数必须关于弧长可积。

**方向与参数无关性。** 若 $r=r(t)$ 是任意分段正则参数表示，则 $ds=|r'(t)|dt$。反向参数用速度的模，故

$$
\int_{-C}f\,ds=\int_Cf\,ds.
\qquad\text{(8)}
$$

一般的单调正则重参数化也由一元换元公式得到同一个值。因此第一型曲线积分不依赖方向，不能把定积分“交换上下限变号”的规则照搬为（8）的负号。

**易错条件**　中值点的存在需要连通性及实值连续函数；积分为零不能对任意可积函数推出逐点为零；反向不变不等于重复遍历不变。无限长曲线不能直接使用式（7）中的有限常数 $L$。

**方法总结**　先把几何对象参数化为区间，再识别正权 $ds$。线性、保序与极限运算继承自区间积分；方向和遍历重数则由定义本身决定。

## 问题 B290

**原题号：** 习题 11.2.B 第 1 题。[原题，PDF 第 35 页（印刷第 33 页）](/files/problems/楼分析习题-v2.pdf#page=35)

**题目**　设 $a,b,c$ 为实数，$A=\sqrt{a^2+b^2+c^2}$，$f\in L^1[-A,A]$，证明 Poisson（泊松）公式

$$
\iint_{x^2+y^2+z^2=1}f(ax+by+cz)\,dS
=2\pi\int_{-1}^1f(Au)\,du.
\qquad\text{(9)}
$$

**基础知识**　正交变换保持球面与面积；曲面参数化的面积因子；绝对可积函数的换元与 Fubini 定理。

**思路来源**　把向量 $(a,b,c)$ 旋转到坐标轴方向，线性函数便只依赖球面的高度。单位球面的等高薄带面积为 $2\pi\,du$，这是公式中常数 $2\pi$ 的来源。

**证明**　先设 $A>0$。选取正交矩阵 $O$，使其第一行为 $(a,b,c)/A$。令 $(u,v,w)^T=O(x,y,z)^T$，则 $ax+by+cz=Au$，球面变为 $u^2+v^2+w^2=1$。正交变换保持切向量的 Gram 行列式，因而保持面积元。

在去掉两极和一条经线后的球面上，取参数表示

$$
X(u,\theta)=\big(u,\sqrt{1-u^2}\cos\theta,
\sqrt{1-u^2}\sin\theta\big),
\quad -1<u<1,\quad0<\theta<2\pi.
\qquad\text{(10)}
$$

直接计算得到

$$
|X_u|^2=\frac1{1-u^2},\qquad
|X_\theta|^2=1-u^2,\qquad
X_u\cdot X_\theta=0,\qquad
|X_u\times X_\theta|=1.
\qquad\text{(11)}
$$

被去掉的经线和两极面积为零。先对绝对值使用面积公式，得到

$$
\iint_{S^2}|f(ax+by+cz)|\,dS
=2\pi\int_{-1}^1|f(Au)|\,du
=\frac{2\pi}{A}\int_{-A}^A|f(t)|\,dt<\infty.
\qquad\text{(12)}
$$

故换序合法，再对 $f$ 本身计算，

$$
\iint_{S^2}f(ax+by+cz)\,dS
=\int_{-1}^1\int_0^{2\pi}f(Au)\,d\theta\,du
=2\pi\int_{-1}^1f(Au)\,du.
\qquad\text{(13)}
$$

若把 $L^1$ 看作几乎处处相等的等价类，式（12）还说明：当 $A>0$ 时，改变 $f$ 在一维零测集上的值不会改变球面积分。

若 $A=0$，则 $a=b=c=0$。在给定有限值 $f(0)$ 的通常逐点解释下，两边均为 $4\pi f(0)$，公式仍成立。但此时不能除以 $A$；若题目仅给出退化区间 $[0,0]$ 上的 $L^1$ 等价类，该等价类不确定 $f(0)$，必须另行指定这个点值才能解释两边。它是定义上的退化情形，不是公式在 $A>0$ 时的附加限制。

**易错条件**　不能只对连续函数作形式换元就忽略 $L^1$ 假设；式（12）保证复合函数确实可积。球面极点处参数退化不影响积分，但应说明被遗漏集合面积为零。

**方法总结**　旋转对称性消去线性函数的方向，等高参数消去面积因子。先对绝对值建立可积性，再处理有符号或复值函数，能同时解决换序和代表元问题。

## 问题 B291

**原题号：** 习题 11.3.B 第 1 题。[原题，PDF 第 35—36 页（印刷第 33—34 页）](/files/problems/楼分析习题-v2.pdf#page=35)

**题目**　对于复平面中的 $C^1$ 曲线 $C$ 及其上的复值连续函数 $f$，记

$$
f(z)\,dz=f(x+iy)(dx+i\,dy)
=f(x+iy)\,dx+i f(x+iy)\,dy.
\qquad\text{(14)}
$$

若 $s$ 为弧长参数，$C_{s,\Delta s}$ 为弧长从 $s$ 到 $s+\Delta s$ 的那一段，则

$$
\lim_{\Delta s\to0}
\frac{\left|\int_{C_{s,\Delta s}}dz\right|}{|\Delta s|}=1.
\qquad\text{(15)}
$$

这相当于 $|dz|=ds$。证明

$$
\left|\int_C f(z)\,dz\right|\le\int_C|f(z)|\,ds.
\qquad\text{(16)}
$$

**基础知识**　复线积分的参数定义；正则曲线的单位切向量；复积分的三角不等式。

**思路来源**　$dz$ 含有切向方向，而 $ds$ 只记录长度。把曲线积分写成 $f(z(t))z'(t)$ 的一元积分，模长估计便把方向信息去掉；不能把“积分的模”与“模的积分”视作相等。

**证明**　取参数表示 $z=z(t)$，$t\in[\alpha,\beta]$。按定义，

$$
\int_C f(z)\,dz=\int_\alpha^\beta f(z(t))z'(t)\,dt,
\qquad
\int_C|f(z)|\,ds=\int_\alpha^\beta|f(z(t))|\,|z'(t)|\,dt.
\qquad\text{(17)}
$$

令 $I$ 为左端的复积分。若 $I=0$，结论显然；否则取 $\lambda=\overline I/|I|$，则 $|\lambda|=1$，由实部的线性有

$$
\begin{aligned}
|I|&=\operatorname{Re}(\lambda I)
=\int_\alpha^\beta\operatorname{Re}\big(\lambda f(z(t))z'(t)\big)\,dt\\
&\le\int_\alpha^\beta|f(z(t))z'(t)|\,dt
=\int_C|f(z)|\,ds.
\end{aligned}
\qquad\text{(18)}
$$

这证明（16）；参数导数偶有零点时，（17）—（18）仍然有效。

再说明题中的（15）。在正则的弧长参数处，$|z'(s)|=1$，而

$$
\int_{C_{s,\Delta s}}dz=z(s+\Delta s)-z(s),\qquad
\lim_{\Delta s\to0}\frac{|z(s+\Delta s)-z(s)|}{|\Delta s|}
=|z'(s)|=1.
\qquad\text{(19)}
$$

所以（15）是“短弦长与短弧长之比趋于一”，并非有限弧段上弦长等于弧长。对分段正则曲线，逐段证明（16）后用三角不等式相加即可。

还可读出等号条件：若右端非零，设 $T(s)=z'(s)$ 为单位切向量，则取等号当且仅当存在固定的 $|\lambda|=1$，使

$$
\lambda f(z(s))T(s)\in[0,\infty)
\quad\text{对几乎所有 }s\text{ 成立}.
\qquad\text{(20)}
$$

这是因为（18）中的差为非负函数，其积分为零恰好要求它几乎处处为零；而 $\operatorname{Re}w=|w|$ 当且仅当 $w$ 为非负实数。

**易错条件**　“$C^1$ 参数曲线”若未要求正则，不能不加说明地声称每点都有光滑的单位速参数；不过不等式本身仍由（17）成立。$|dz|=ds$ 不能读成 $|\int dz|=\int ds$。

**方法总结**　复积分估计可用一个固定相位把最终积分旋转到正实轴，再逐点取实部比较。这同时给出最优的模估计及等号成立条件。

## 问题 B292

**原题号：** 习题 11.4.B 第 1 题。[原题，PDF 第 36 页（印刷第 34 页）](/files/problems/楼分析习题-v2.pdf#page=36)

**题目**　若请你对 $\mathbb R^3$ 中的曲面 $\Sigma$ 及函数 $P$ 定义 $\iint_\Sigma P(x,y,z)\,dy\,dz$，则对于 $\Sigma$ 和 $P$ 的要求可以怎么提？

**基础知识**　有向曲面及单位法向量；正则曲面片；参数变换的 Jacobian；第二型曲面积分与通量的关系。

**思路来源**　$dy\,dz$ 是带方向的投影面积，不能只由无向的点集决定。先给一组容易验证的充分条件，再用参数变换证明定义一致，最后指出哪些条件可以放宽。

**解**　一组经典的充分条件是：$\Sigma$ 为紧致、可定向、分片 $C^1$ 正则曲面，已选定一侧；能分成有限个面积有限的正则曲面片，片间只在面积为零的边界上重叠；$P$ 为 $\Sigma$ 上的实值连续函数。曲面允许有边界，也不要求闭合。记所选单位法向量为 $\nu=(\nu_1,\nu_2,\nu_3)$，定义

$$
\iint_\Sigma P\,dy\,dz:=\iint_\Sigma P\nu_1\,dS.
\qquad\text{(21)}
$$

右端为第一型曲面积分。$P$ 有界，$|\nu_1|\le1$，曲面面积有限，故此积分存在。

对一个与选定方向相容的正则参数片 $X(u,v)=(x(u,v),y(u,v),z(u,v))$，有

$$
\begin{aligned}
\nu&=\frac{X_u\times X_v}{|X_u\times X_v|},\\
\nu_1\,dS&=(y_u z_v-y_v z_u)\,du\,dv,\\
\iint_{X(D)}P\,dy\,dz
&=\iint_D P(X(u,v))(y_u z_v-y_v z_u)\,du\,dv.
\end{aligned}
\qquad\text{(22)}
$$

若另一个相容参数满足 $(u,v)=h(\xi,\eta)$，链式法则给出

$$
X_\xi\times X_\eta
=\det Dh\,(X_u\times X_v).
\qquad\text{(23)}
$$

相容方向意味着 $\det Dh>0$，由二重积分换元公式，（22）的值不变；改用反向参数而不同时修正方向则变号。有限分片上的定义由可加性拼合，公共边界面积为零，不产生重复计数。这就证明（21）不是依赖某个偶然参数的定义。

这些条件是充分条件，并非最弱条件。若采用 Lebesgue 曲面积分，$P$ 连续可放宽为可测且

$$
\iint_\Sigma |P\nu_1|\,dS<\infty.
\qquad\text{(24)}
$$

较易检验的 $P\in L^1(\Sigma,dS)$ 也足够，但比（24）更强。非紧曲面可以用局部有限的参数片拼合，仍以（24）保证绝对收敛与分片次序无关。若允许自交参数曲面，须事先约定各片的方向与遍历重数，否则仅给出几何像集不足以确定积分。

不需要 $P$ 有偏导数，不需要 $\Sigma$ 是整个 $yz$ 平面上的单值图像，也不需要 $\nu_1$ 处处非零。例如 $z=0$ 上的一块平面片，其 $\nu_1=0$，故此分量的积分恒为零。若曲面不可定向，则一般不能为任意 $P$ 赋予一致的全局有向积分；应改为指定的有向曲面片之和，而不能忽略方向选择。

**易错条件**　投影可能重叠，不能把所有点简单投影到 $yz$ 平面再只算一次。取绝对值 $|\nu_1|$ 会得到无符号的投影面积权，已经改变了第二型积分；曲面光滑也不自动保证已选定全局方向。

**方法总结**　先用 $P\nu_1dS$ 给出几何定义，再由参数 Jacobian 检查其一致性。把“定义积分所需的可积性”与“应用 Gauss 公式所需的可微性”分开，能避免提出多余条件。

## 问题 B293

**原题号：** 习题 11.5.B 第 1 题。[原题，PDF 第 37 页（印刷第 35 页）](/files/problems/楼分析习题-v2.pdf#page=37)

**题目**　设 $a,b,c>0$，$\Sigma$ 为椭球面 $x^2/a^2+y^2/b^2+z^2/c^2=1$。利用 Gauss 公式计算

$$
I=\iint_\Sigma
\frac{dS}{(x^2+y^2+z^2)^{3/2}
\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}}.
\qquad\text{(25)}
$$

**基础知识**　水平曲面的外单位法向量；Gauss 公式；挖去奇点后的边界方向。

**思路来源**　根号恰好是椭球法向量归一化的因子，而椭球方程使 $(x,y,z)$ 与未归一化法向量的内积等于一。因此被积式可识别为向量场 $(x,y,z)/(x^2+y^2+z^2)^{3/2}$ 的外向通量。

**解**　记 $r=\sqrt{x^2+y^2+z^2}$、$H=\sqrt{x^2/a^4+y^2/b^4+z^2/c^4}$。在椭球面上，外单位法向量为

$$
\nu=\frac{(x/a^2,y/b^2,z/c^2)}{H}.
\qquad\text{(26)}
$$

令 $F=(x,y,z)/r^3$（$r>0$），则由椭球方程，

$$
F\cdot\nu=\frac{x^2/a^2+y^2/b^2+z^2/c^2}{r^3H}
=\frac1{r^3H},\qquad
\operatorname{div}F=\frac3{r^3}-\frac{3r^2}{r^5}=0.
\qquad\text{(27)}
$$

设 $E$ 为椭球内部。取 $0<\varepsilon<\min(a,b,c)$，则闭球 $\overline B_\varepsilon(0)$ 包含在 $E$ 内。在 $E\setminus\overline B_\varepsilon(0)$ 上应用 Gauss 公式，$F$ 在该区域闭包上光滑；内边界相对于挖孔区域的外单位法向量为 $-(x,y,z)/\varepsilon$，于是

$$
\begin{aligned}
0&=\iint_\Sigma F\cdot\nu\,dS
-\iint_{\partial B_\varepsilon}
F\cdot\frac{(x,y,z)}{\varepsilon}\,dS,\\
I&=\iint_{\partial B_\varepsilon}\frac1{\varepsilon^2}\,dS
=\frac{4\pi\varepsilon^2}{\varepsilon^2}=4\pi.
\end{aligned}
\qquad\text{(28)}
$$

每个允许的 $\varepsilon$ 都给出同一结果，不需要再交换极限与积分。原积分为第一型曲面积分，本身无方向；外向法线只是在将它改写为通量时选用。

**易错条件**　$F$ 在原点有奇性，不能直接在整个椭球内部套用“散度为零”，否则会错误地得到零。挖孔后的内边界方向必须反向，不能与小球本身的外向法线混淆。

**方法总结**　先从曲面方程识别法向量，再把复杂的第一型积分写成简单场的通量。对孤立奇点挖孔，将任意包围面上的通量转移到球面，是 Gauss 公式的典型构造。

## 问题 B294

**原题号：** 习题 11.5.B 第 2 题。[原题，PDF 第 37 页（印刷第 35 页）](/files/problems/楼分析习题-v2.pdf#page=37)

**题目**　设 $A$ 是 $n$ 阶方阵，$\Omega$ 为 $\mathbb R^n$ 中具有 $C^1$ 边界的有界区域，$\varphi\in C_0^2(\Omega;\mathbb R^n)$。证明

$$
\int_\Omega\det(A+\varphi_x)\,dx=\det(A)|\Omega|.
\qquad\text{(29)}
$$

**基础知识**　行列式对矩阵元素的偏导为对应余子式；混合偏导交换；散度定理。约定 $(\varphi_x)_{ij}=\partial_j\varphi_i$，$\operatorname{cof}M$ 是余子式矩阵，满足 $(\operatorname{cof}M)_{ij}=\partial(\det M)/\partial M_{ij}$。

**思路来源**　不要要求 $A$ 可逆，也不要假设 $Ax+\varphi(x)$ 是一一映射。引入连续扰动 $A+t\varphi_x$，证明其行列式积分对 $t$ 的导数为零。关键是把导数写成散度，余子式自身的散度由混合偏导逐项抵消。

**证明**　先证明所需的余子式恒等式。设 $u\in C^2(\Omega;\mathbb R^n)$，记 $C_{ij}=(\operatorname{cof}Du)_{ij}$，则

$$
\sum_{j=1}^n\partial_j C_{ij}=0,
\qquad i=1,\ldots,n.
\qquad\text{(30)}
$$

当 $n=1$ 时余子式为 $1$，结论显然。对 $n\ge2$，按排列展开，

$$
C_{ij}=\sum_{\substack{\sigma\in S_n\\\sigma(i)=j}}
\operatorname{sgn}(\sigma)\prod_{k\ne i}\partial_{\sigma(k)}u_k.
\qquad\text{(31)}
$$

对（31）求 $\partial_j$，并对 $j$ 求和，每项由一个排列 $\sigma$ 及一个 $l\ne i$ 标记，其值为

$$
\operatorname{sgn}(\sigma)
\big(\partial_{\sigma(i)}\partial_{\sigma(l)}u_l\big)
\prod_{k\ne i,l}\partial_{\sigma(k)}u_k.
\qquad\text{(32)}
$$

将 $\sigma(i)$ 与 $\sigma(l)$ 对换，得到排列 $\tau$。对应于 $(\tau,l)$ 的乘积与（32）相同，因为混合偏导交换，其余因子不变；而排列符号相反。这一配对没有不动项，故所有项两两抵消，（30）得证。它通常称为 Piola 恒等式；这里已给出其直接证明。

令 $u_t(x)=Ax+t\varphi(x)$，$M_t=Du_t=A+tD\varphi$，并设

$$
J(t)=\int_\Omega\det M_t\,dx.
\qquad\text{(33)}
$$

行列式是 $t$ 的次数不超过 $n$ 的多项式，各系数可积，所以可直接逐项微分。行列式的微分公式和（30）给出

$$
\begin{aligned}
J'(t)&=\int_\Omega\sum_{i,j}C_{ij}(t)\partial_j\varphi_i\,dx,\\
\sum_{i,j}C_{ij}(t)\partial_j\varphi_i
&=\sum_j\partial_j\left(\sum_i\varphi_i C_{ij}(t)\right)
-\sum_i\varphi_i\sum_j\partial_j C_{ij}(t)\\
&=\operatorname{div}V_t,
\quad (V_t)_j=\sum_i\varphi_i C_{ij}(t).
\end{aligned}
\qquad\text{(34)}
$$

在 $C_0^2$ 的紧支解释下，$V_t$ 也紧支于 $\Omega$，其散度积分为零；这可把 $V_t$ 延零至全空间后逐坐标积分验证。若采用 $\varphi\in C^2(\overline\Omega)$、边界取零的解释，则 $V_t=0$ 于边界，Gauss 公式同样给出

$$
J'(t)=\int_{\partial\Omega}V_t\cdot\nu\,dS=0.
\qquad\text{(35)}
$$

因此 $J$ 为常数，$J(1)=J(0)=\det(A)|\Omega|$，即（29）。证明只使用多项式微分，因而允许 $A$ 或某些 $M_t$ 奇异，也不需要 $\det M_t$ 保持符号。

**易错条件**　余子式矩阵与伴随矩阵互为转置，式（30）的求和方向必须与 $Du$ 的下标约定相符。若把行列式换成绝对值，结论一般不成立：例如 $n=1$、$A=0$、$\Omega=(0,1)$，任取非零 $\varphi\in C_c^2(0,1)$，则 $\int_0^1\varphi'=0$，但 $\int_0^1|\varphi'|>0$。

**方法总结**　将待证恒等式嵌入一个参数族，证明沿参数的导数为边界项，再用零边界消去它。行列式的反对称性使余子式散度自动消失，是本题中真正起作用的代数结构。

## 问题 B295

**原题号：** 习题 11.5.B 第 3 题。[原题，PDF 第 38 页（印刷第 36 页）](/files/problems/楼分析习题-v2.pdf#page=38)

**题目**　设 $n\ge1$，$R$ 是仅在 $(0,0)$ 为零的 $2n$ 次二元多项式，$P,Q$ 是不超过 $2n-2$ 次的二元多项式。若

$$
\lim_{(x,y)\to\infty}\frac{R(x,y)}{(x^2+y^2)^n}>0,
\qquad
\frac{\partial}{\partial x}\frac{Q(x,y)}{R(x,y)}
=\frac{\partial}{\partial y}\frac{P(x,y)}{R(x,y)}
\quad((x,y)\ne(0,0)),
\qquad\text{(36)}
$$

证明曲线积分 $\int_C(P\,dx+Q\,dy)/R$ 绕原点的循环常数为零。

**基础知识**　穿孔平面上的闭微分形式；环域上的 Green 公式；大圆长度与被积函数的一致估计。

**思路来源**　闭性保证不同半径圆周上的积分相等，但穿孔平面不是单连通区域，不能仅据此断言积分为零。把圆周向无穷远推移，利用次数差获得 $O(r^{-2})$ 的系数衰减，再乘以 $O(r)$ 的圆周长度，才能消去循环常数。

**证明**　令 $U=P/R$、$V=Q/R$。由 $R$ 在原点外不为零，$U,V$ 在穿孔平面上光滑。记 $C_\rho$ 为逆时针圆周 $x^2+y^2=\rho^2$，令

$$
c(\rho)=\int_{C_\rho}U\,dx+V\,dy.
\qquad\text{(37)}
$$

对任意 $0<\rho<r$，在圆环 $\rho^2<x^2+y^2<r^2$ 上应用 Green 公式，得到

$$
c(r)-c(\rho)
=\iint_{\rho^2<x^2+y^2<r^2}(V_x-U_y)\,dx\,dy=0.
\qquad\text{(38)}
$$

所以 $c(\rho)$ 与半径无关，它就是所求循环常数。

由（36）的正极限，存在 $r_0\ge1$ 及 $c_0>0$，使在 $x^2+y^2\ge r_0^2$ 上，$R(x,y)\ge c_0(x^2+y^2)^n$。另一方面，由 $P,Q$ 的次数不超过 $2n-2$，存在 $K>0$，使在任意 $r\ge r_0$ 的圆周上

$$
\begin{aligned}
|P(x,y)|+|Q(x,y)|&\le K r^{2n-2},\\
\sqrt{U(x,y)^2+V(x,y)^2}
&\le\frac{|P|+|Q|}{R}\le\frac{K}{c_0r^2}.
\end{aligned}
\qquad\text{(39)}
$$

按切向量的 Cauchy–Schwarz 不等式，

$$
|c(r)|\le\int_{C_r}\sqrt{U^2+V^2}\,ds
\le 2\pi r\frac{K}{c_0r^2}
=\frac{2\pi K}{c_0r}\longrightarrow0.
\qquad\text{(40)}
$$

结合（38），对任意固定 $\rho>0$ 都有 $c(\rho)=0$。若 $C$ 为包围原点的逆时针分段 $C^1$ 简单闭曲线，取包围它的大圆，在二者之间的区域应用同一 Green 公式，也得 $\int_C U\,dx+V\,dy=0$；这与循环常数的定义一致。

**易错条件**　二维无穷远极限提供的是对所有方向统一的下界；只沿某条射线得到增长阶不足以证明（39）。也不能在含原点的圆盘内直接应用 Green 公式。作为对照，$(-y\,dx+x\,dy)/(x^2+y^2)$ 在穿孔平面上闭合，但其圆周积分为 $2\pi$；它的分子次数为 $1$，不满足本题 $n=1$ 时次数至多 $0$ 的条件。

**方法总结**　闭性使周期在环域中保持不变，无穷远估计再迫使该不变量为零。证明需要同时使用拓扑上的路径变形与分析上的统一衰减，二者缺一不可。

## 七题方法总结

| 题号 | 核心结果 | 关键方法 |
| --- | --- | --- |
| B289 | 定积分性质移植到有限长曲线，反向不变 | 弧长参数、正权积分、连通性与重数辨析 |
| B290 | 球面积分化为 $2\pi\int_{-1}^1f(Au)\,du$ | 正交旋转、等高参数、先证绝对可积 |
| B291 | $\lvert\int_C f\,dz\rvert\le\int_C\lvert f\rvert\,ds$ 及等号条件 | 固定相位、单位切向量、非负差积分 |
| B292 | $\iint P\,dy\,dz=\iint P\nu_1\,dS$ | 全局定向、参数 Jacobian、可积性条件 |
| B293 | 椭球面积分恒为 $4\pi$ | 法向量识别、反平方场、挖孔 Gauss 公式 |
| B294 | 行列式积分只由固定边界数据决定 | 参数扰动、余子式配对抵消、散度边界项 |
| B295 | 绕原点循环常数为零 | 环域 Green 公式、次数差、大圆统一估计 |

本批七题全部完成。两册累计 **290 道已作答、5 道暂跳过**（上册 **175** 道、下册 **115** 道），待核仍为 **B116、B148、B180、B247、B261**。第十一章当前完成七题，覆盖 11.1—11.4 各节 B 组第 1 题及 11.5.B 第 1—3 题；并未完成本章全部习题。

下一题为 **B296＝11.5.B 第 4 题**，讨论去掉 B295 的无穷远条件后结论是否成立，见[原题 PDF 第 38 页（印刷第 36 页）](/files/problems/楼分析习题-v2.pdf#page=38)。
