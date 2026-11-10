---
title: "楼红卫《数学分析》B 组习题解答（二十九）：广义逆、积分估计与一致逼近"
description: "B198—B204：函数方程、广义 Young 不等式、最优积分常数、混合偏导估计、均匀球体引力、一致一阶余项与 Weierstrass 逼近。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "积分", "Young不等式", "一致逼近", "B198-B204"]
created_at: "2026-11-09"
updated_at: "2026-11-10"
---

本批接续 B197，按下册原书顺序完成 **B198—B204** 七题，即 **8.5.B 第 1—4 题、8.6.B 第 1—2 题、8.7.B 第 1 题**。原题见题册 PDF 第 10—11 页（印刷第 8—9 页）；七题均无星号，均无编号小问。B199 保留开放推广题的性质，明确给出广义逆、扩展值积分、等号条件及特殊情形。

本批完成后，两册累计 **201 道已作答、3 道暂跳过**；上册完成 **175 题**，下册完成 **26 题**。B116、B148、B180 继续保留原有待核说明，不计入完成数。

[下册资料页](/problems/149ff60b32b01ff69feab8a4/) · [下册原题 PDF 第 10 页](/files/problems/楼分析习题-v2.pdf#page=10) · [第 11 页](/files/problems/楼分析习题-v2.pdf#page=11)

**批次导航：**[下一批 B205—B211](/problems/aeb90646cd67124999a7cba3/) · [B 组解答总目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [上一批 B191—B197](/problems/3394284a188dfc847fd02679/)

## 题号导航

- [问题 B198：带不动点的迭代函数方程（8.5.B-1）](#问题-b198)
- [问题 B199：非严格单调函数的 Young 不等式（8.5.B-2）](#问题-b199)
- [问题 B200：积分不等式的最优常数（8.5.B-3）](#问题-b200)
- [问题 B201：混合四阶偏导与二重积分（8.5.B-4）](#问题-b201)
- [问题 B202：均匀球体对任意位置质点的引力（8.6.B-1）](#问题-b202)
- [问题 B203：紧集上的一致一阶余项（8.6.B-2）](#问题-b203)
- [问题 B204：由代数多项式逼近到三角多项式逼近（8.7.B-1）](#问题-b204)
- [七题方法总结](#七题方法总结)

## 问题 B198

**原题号：** 习题 8.5.B 第 1 题（下册）。[原题 PDF 第 10 页（印刷第 8 页）](/files/problems/楼分析习题-v2.pdf#page=10)

**题目：** 设 $f\in C(\mathbb R)$ 是双射，有不动点，又满足 $f(2x-f(x))=x$（$\forall x\in\mathbb R$）。证明：$f(x)\equiv x$。

**证明：** 因为 $f$ 是双射，题设等价于

$$
f^{-1}(x)=2x-f(x),\qquad f(x)+f^{-1}(x)=2x.
$$

实区间上的连续单射必严格单调：否则可取三个依次排列的点，使中间函数值严格高于或低于两端；在两侧分别应用介值定理，就得到相同函数值的两个不同原像。若 $f$ 严格递减，则 $f^{-1}$ 也严格递减，两者之和不可能等于严格递增的 $2x$。故 $f$ 严格递增。

设 $f(c)=c$。任取 $x\in\mathbb R$，利用双射性定义双向迭代 $x_k=f^k(x)$（$k\in\mathbb Z$）。将上式用于 $x_k$，得到

$$
x_{k+1}+x_{k-1}=2x_k.
$$

所以相邻差恒定，进而

$$
x_k=x+k\bigl(f(x)-x\bigr),\qquad k\in\mathbb Z.
$$

若 $x>c$，严格递增性以及 $f(c)=f^{-1}(c)=c$ 保证所有 $x_k>c$；若 $x<c$，同理所有 $x_k<c$。但当 $f(x)-x\ne0$ 时，上述双向等差数列向两个方向分别趋于正、负无穷，不可能始终位于 $c$ 的同一侧。因此 $f(x)=x$。对于 $x=c$ 结论已经成立，故在全实轴上 $f$ 恒等于恒等映射。

不动点条件不能删去：任意平移 $f(x)=x+d$ 都满足原函数方程，只有 $d=0$ 时有不动点。

**方法总结：** 先借助单射、满射把函数方程改写成含逆映射的对称关系，再沿双向轨道得到差分方程。不动点与单调性限制轨道所在的半轴，与非零等差增量矛盾。

[返回题号导航](#题号导航)

## 问题 B199

**原题号：** 习题 8.5.B 第 2 题（下册）。[原题 PDF 第 10 页（印刷第 8 页）](/files/problems/楼分析习题-v2.pdf#page=10)

**题目：** 如果 $\varphi$ 是 $[0,+\infty)$ 上单调增加的非负函数，特别地，$\varphi(0)$ 不一定为零，$\varphi$ 不一定严格单调，且 $\varphi(+\infty)$ 不一定为 $+\infty$。尝试建立相应的 Young 不等式。

**解：** 此处“单调增加”按非减理解，$\varphi$ 取有限非负实值，但可以有跳跃。普通反函数未必存在，宜定义广义逆

$$
\psi(t)=\inf\{x\ge0:\varphi(x)>t\},\qquad t\ge0,
$$

其中空集的下确界约定为 $+\infty$。函数 $\psi$ 非负、非减，允许取 $+\infty$。记

$$
A(a)=\int_0^a\varphi(x)\,dx,\qquad
B(b)=\int_0^b\psi(t)\,dt,\qquad a,b\ge0.
$$

$A(a)$ 对有限 $a$ 总是有限；$B(b)$ 取非负扩展实数，积分按 Lebesgue 积分理解，也可通过有限矩形上的面积及单调极限定义。积分区间长度为零时积分为零，即使端点函数值为无穷也不例外。所求推广是

$$
ab\le A(a)+B(b),\qquad a,b\ge0.
$$

下面证明一个更精确的余量公式。对于固定 $t$，非减性说明集合 $\{x\ge0:\varphi(x)\le t\}$ 是从零开始的区间，可能为空、无界，端点是否包含不影响长度；其长度正是 $\psi(t)$。因此，先在有限矩形上计算，再令横向截断趋于无穷，非负函数的换序积分给出

$$
\begin{aligned}
B(b)
&=\int_0^b\int_0^\infty
\mathbf1_{\{\varphi(x)\le t\}}\,dx\,dt\\
&=\int_0^\infty\int_0^b
\mathbf1_{\{\varphi(x)\le t\}}\,dt\,dx\\
&=\int_0^\infty\bigl(b-\varphi(x)\bigr)_+\,dx,
\end{aligned}
$$

其中 $u_+=\max\{u,0\}$。被积函数非负、可测，所以此换序不要求事先知道积分有限，也不涉及两个无穷量相减。用 $u+(-u)_+=u_+$，分开 $[0,a]$ 与 $[a,\infty)$，得到

$$
\begin{aligned}
A(a)+B(b)
=ab&+\int_0^a\bigl(\varphi(x)-b\bigr)_+\,dx\\
&+\int_a^\infty\bigl(b-\varphi(x)\bigr)_+\,dx.
\end{aligned}
$$

两个余项均非负，Young 不等式成立。

**等号与跳跃点。** 对 $a>0$ 定义

$$
\varphi(a-)=\sup_{0\le x<a}\varphi(x),\qquad
\varphi(a+)=\inf_{x>a}\varphi(x).
$$

另约定 $\varphi(0-)=0$，$\varphi(0+)=\inf_{x>0}\varphi(x)$。等号成立当且仅当

$$
\varphi(a-)\le b\le\varphi(a+).
$$

事实上，若此条件成立，则对 $x<a$ 有 $\varphi(x)\le b$，对 $x>a$ 有 $\varphi(x)\ge b$，两个余项都为零。反之，若 $a>0$ 且 $b<\varphi(a-)$，可取 $x_0<a$ 使 $\varphi(x_0)>b$，则第一余项在 $(x_0,a)$ 上有正下界；若 $b>\varphi(a+)$，可取 $x_1>a$ 使 $\varphi(x_1)<b$，则第二余项在 $(a,x_1)$ 上有正下界。$a=0$ 时只需后一条件。单个跳跃点的函数值不影响积分，因此不能在不连续情形下把等号条件误写成 $b=\varphi(a)$。

几种特殊情形说明上述约定的作用。

- 若 $\varphi$ 连续、严格递增，$\varphi(0)=0$ 且趋于无穷，则 $\psi=\varphi^{-1}$，恢复通常的 Young 不等式及 $b=\varphi(a)$ 的等号条件。
- 若 $\varphi\equiv c\ge0$，则 $\psi(t)=0$（$t<c$），$\psi(t)=+\infty$（$t\ge c$）。于是 $B(b)=0$（$b\le c$），而 $B(b)=+\infty$（$b>c$）。$b=c$ 处单个无穷值不改变积分。这同时涵盖非零初值、平台及有界值域。
- 若 $\varphi(x)=0$（$x<1$），$\varphi(x)=2$（$x\ge1$），则取 $a=1$ 时，所有 $0\le b\le2$ 都取等号，展示了跳跃处的整段等号区间。
- 若 $L=\lim_{x\to\infty}\varphi(x)<\infty$，则 $b>L$ 时 $B(b)=+\infty$；在临界值 $b=L$，须检查 $B(L)=\int_0^\infty(L-\varphi(x))\,dx$，它既可能有限，也可能无穷，不能一概而论。

**方法总结：** 把反函数换成水平截集长度，用矩形面积分解建立不等式。余量公式同时控制推广范围、等号条件和有界值域端点；非负换序允许积分取无穷值，避免未经验证地交换极限与积分。

[返回题号导航](#题号导航)

## 问题 B200

**原题号：** 习题 8.5.B 第 3 题（下册）。[原题 PDF 第 10 页（印刷第 8 页）](/files/problems/楼分析习题-v2.pdf#page=10)

**题目：** 设 $f\in C^1[0,h]$，$f(0)=f(h)=0$，证明：

$$
\int_0^h|f(x)f'(x)|\,dx
\le\frac h4\int_0^h|f'(x)|^2\,dx,
$$

且系数 $h/4$ 不可改进。

**证明：** 按非退化区间取 $h>0$。令

$$
g(x)=\int_0^x|f'(t)|\,dt,\qquad V=g(h).
$$

由两个端点条件分别得到

$$
|f(x)|\le g(x),\qquad
|f(x)|\le V-g(x).
$$

故 $|f(x)|\le\min\{g(x),V-g(x)\}$。由于 $g\in C^1$ 且 $g'=|f'|$，对连续函数 $\min\{u,V-u\}$ 的原函数应用链式法则，有

$$
\begin{aligned}
\int_0^h|ff'|\,dx
&\le\int_0^h\min\{g(x),V-g(x)\}g'(x)\,dx\\
&=\int_0^V\min\{u,V-u\}\,du
=\frac{V^2}{4}\\
&\le\frac h4\int_0^h|f'(x)|^2\,dx.
\end{aligned}
$$

最后一行是 Cauchy–Schwarz 不等式。上述换元实际上是原函数求导，不要求 $g$ 严格单调，因而也适用于 $f'$ 在子区间上为零的情形。

为证明最优性，不能直接把有折角的帐篷函数作为 $C^1$ 函数使用。对 $\varepsilon>0$，取光滑函数

$$
f_\varepsilon(x)
=\sqrt{h^2/4+\varepsilon^2}
-\sqrt{(x-h/2)^2+\varepsilon^2}.
$$

它在两端为零，在区间内非负，左半段增加、右半段减少。因此

$$
\begin{aligned}
\int_0^h|f_\varepsilon f_\varepsilon'|\,dx
&=f_\varepsilon(h/2)^2
=\bigl(\sqrt{h^2/4+\varepsilon^2}-\varepsilon\bigr)^2,\\
\int_0^h|f_\varepsilon'|^2\,dx
&=\int_{-h/2}^{h/2}\frac{u^2}{u^2+\varepsilon^2}\,du\\
&=h-2\varepsilon\arctan\frac{h}{2\varepsilon}.
\end{aligned}
$$

两式均由直接积分得到，故不必交换积分与极限。令 $\varepsilon\downarrow0$，得到

$$
\frac{\int_0^h|f_\varepsilon f_\varepsilon'|\,dx}
{\int_0^h|f_\varepsilon'|^2\,dx}
\longrightarrow\frac h4.
$$

因此任何小于 $h/4$ 的常数都会被某个 $f_\varepsilon$ 否定，常数最优。

补充说明：在 $C^1$ 类中，非零函数不能真正取等号。否则 Cauchy–Schwarz 的等号条件要求连续函数 $|f'|$ 为正常数，进而 $f'$ 不能改变符号，与 $f(h)-f(0)=0$ 矛盾。最优常数不必由非零光滑函数达到。$h=0$ 时两边均为零，不属于此处最优常数的非退化讨论。

**方法总结：** 两个零端点给出“从左累计”与“从右累计”两个上界，取小值后以总变差为新变量。最优性用满足原正则性要求的光滑近极值函数证明，区别“常数最优”与“等号可达”。

[返回题号导航](#题号导航)

## 问题 B201

**原题号：** 习题 8.5.B 第 4 题（下册）。[原题 PDF 第 10 页（印刷第 8 页）](/files/problems/楼分析习题-v2.pdf#page=10)

**题目：** 设 $F$ 在 $[0,1]\times[0,1]$ 上有连续的四阶偏导数，满足

$$
\left|\frac{\partial^4F(x,y)}{\partial x^2\partial y^2}\right|\le M,
\qquad F(x,0)=F(x,1)=F(0,y)=F(1,y)=0
\quad(\forall x,y\in[0,1]).
$$

证明：

$$
\left|\iint_{[0,1]\times[0,1]}F(x,y)\,dx\,dy\right|
\le\frac M{144}.
$$

**证明：** 令 $k(t)=t(1-t)/2$。对任意满足 $u(0)=u(1)=0$ 的 $u\in C^2[0,1]$，两次分部积分及 $k(0)=k(1)=0$、$k''=-1$ 给出

$$
\begin{aligned}
\int_0^1k(t)u''(t)\,dt
&=[ku']_0^1-[k'u]_0^1+\int_0^1k''(t)u(t)\,dt\\
&=-\int_0^1u(t)\,dt.
\end{aligned}
$$

先对 $x$ 方向应用该恒等式，得到

$$
\int_0^1F(x,y)\,dx=-\int_0^1k(x)F_{xx}(x,y)\,dx.
$$

由恒等式 $F(x,0)=F(x,1)=0$ 对 $x$ 求两次导数，有 $F_{xx}(x,0)=F_{xx}(x,1)=0$。因此对 $y$ 方向再用一次上式，即得

$$
\iint_{[0,1]^2}F(x,y)\,dx\,dy
=\iint_{[0,1]^2}k(x)k(y)F_{xxyy}(x,y)\,dx\,dy.
$$

所有相关函数在紧矩形上连续，故两次分部积分和换序积分均合法。注意 $k\ge0$ 且 $\int_0^1k(t)\,dt=1/12$，于是

$$
\left|\iint_{[0,1]^2}F\right|
\le M\iint_{[0,1]^2}k(x)k(y)\,dx\,dy
=\frac M{144}.
$$

常数也可以达到：取 $F(x,y)=\frac M4x(1-x)y(1-y)$，则四条边上为零，$F_{xxyy}=M$，其积分恰为 $M/144$。

**方法总结：** 为零边界条件寻找非负的积分权，将积分转移到受控制的高阶导数上。矩形上的两个一维恒等式可以相乘使用；中间函数的边界条件必须由原边界恒等式求导核实。

[返回题号导航](#题号导航)

## 问题 B202

**原题号：** 习题 8.6.B 第 1 题（下册）。[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)

**题目：** 试求半径为 $R$、密度为常值 $\rho$ 的球体对于质量为 $m$ 的质点 $P$ 的万有引力。

**解：** 设球心为原点 $O$，质点的位置向量为 $p$，$r=|p|$，万有引力常数记为 $G$，球体总质量为 $M=4\pi\rho R^3/3$。以下取 $R>0$；零质量的情形公式仍成立。

由体积元引力叠加，总引力向量为

$$
\mathbf F(p)=Gm\rho\int_{|q|\le R}\frac{q-p}{|q-p|^3}\,dq.
$$

若 $P$ 位于球内或球面，被积函数在 $q=p$ 处有奇点，但其模为 $|q-p|^{-2}$，且

$$
\int_{|q-p|<\varepsilon}\frac{dq}{|q-p|^2}=4\pi\varepsilon.
$$

所以该奇点绝对可积，单点处的赋值不影响积分，也允许球坐标换元及 Fubini 换序。若 $p=0$，对称性直接给出 $\mathbf F(0)=0$。

以下设 $r>0$。以 $e=p/r$ 为球坐标极轴，令 $s=|q|$，$u=\cos\theta$。绕极轴旋转的对称性使垂直于 $e$ 的分量相消，从而

$$
\mathbf F(p)
=2\pi Gm\rho\,e\int_0^R s^2
\left[\int_{-1}^1\frac{su-r}{(r^2+s^2-2rsu)^{3/2}}\,du\right]ds.
$$

对 $s>0$，先计算辅助角积分

$$
\begin{aligned}
J(r,s)
&=\int_{-1}^1\frac{du}{\sqrt{r^2+s^2-2rsu}}\\
&=\frac{r+s-|r-s|}{rs}
=\frac2{\max\{r,s\}}.
\end{aligned}
$$

当 $r\ne s$ 时，分母在 $u\in[-1,1]$ 及 $r$ 的一个小邻域内有正下界，可以对上述有限区间积分求导。因此

$$
\int_{-1}^1\frac{su-r}{(r^2+s^2-2rsu)^{3/2}}\,du
=\frac{\partial J}{\partial r}(r,s)
=\begin{cases}
-2/r^2,&s<r,\\
0,&s>r.
\end{cases}
$$

没有在 $s=r$ 的奇异层上使用积分号下求导；它只是外层积分中的一个半径值，因原三维积分绝对可积，略去该零测度层不改变结果。故

$$
\begin{aligned}
\mathbf F(p)
&=-\frac{4\pi Gm\rho}{r^2}\,e
\int_0^{\min\{r,R\}}s^2\,ds\\
&=-\frac{4\pi Gm\rho}{3r^2}\min\{r,R\}^3e.
\end{aligned}
$$

即

$$
\boxed{
\mathbf F(p)=
\begin{cases}
-\dfrac{4\pi Gm\rho}{3}\,p,&0\le r\le R,\\[4pt]
-\dfrac{GMm}{r^3}\,p,&r\ge R.
\end{cases}}
$$

两式在 $r=R$ 相同。球内引力大小为 $4\pi Gm\rho r/3$，球外为 $GMm/r^2$，方向均指向球心；球心处引力为零。角积分同时说明：质点外侧的各个均匀球壳合引力为零，内侧球壳的作用等同于把其质量集中在球心。

**方法总结：** 球对称先消去横向分量，再对角变量作精确积分。先验证引力核的绝对可积性，随后只在远离奇异层处对辅助积分求导，可统一处理球外、球内、球面和球心。

[返回题号导航](#题号导航)

## 问题 B203

**原题号：** 习题 8.6.B 第 2 题（下册）。[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)

**题目：** 设 $\Omega\subseteq\mathbb R^n$ 为区域，$\psi:\Omega\to\mathbb R^m$ 连续可微。若 $E$ 为 $\Omega$ 的紧子集，证明：存在连续模 $\omega$ 使得

$$
\|\psi(y)-\psi(x)-\psi_x(x)(y-x)\|
\le\|y-x\|\omega(\|y-x\|),\qquad\forall x,y\in E.
$$

**证明：** 这里 $\psi_x=D\psi$ 是导数矩阵，矩阵取相应的算子范数；构造的连续模满足 $\omega(0)=0$、非负、连续、非减。若 $E$ 为空结论无须证明，以下设它非空。

由 $E$ 紧且 $\Omega$ 开，可取 $r_0>0$，使闭邻域

$$
K=\{z\in\mathbb R^n:\operatorname{dist}(z,E)\le r_0\}
$$

是包含于 $\Omega$ 的紧集。函数 $D\psi$ 在 $K$ 上一致连续，故

$$
\eta(t)=\sup\{\|D\psi(u)-D\psi(v)\|:u,v\in K,\ \|u-v\|\le t\}
$$

有界、非减，且 $\eta(0)=0$、$\eta(t)\to0$（$t\downarrow0$）。不必未经证明就认定这个上确界函数连续；令

$$
\omega_0(0)=0,\qquad
\omega_0(t)=\frac1t\int_t^{2t}\eta(s)\,ds
=\int_1^2\eta(tu)\,du\quad(t>0).
$$

单调有界函数 $\eta$ 在有限区间可积。其积分原函数连续，所以第一种表达式说明 $\omega_0$ 在 $t>0$ 连续；由 $0\le\omega_0(t)\le\eta(2t)\to0$，它在零点也连续。第二种表达式表明它非减，且 $\omega_0(t)\ge\eta(t)$。

对 $x,y\in E$，记 $d=\|y-x\|$。若 $0<d\le r_0$，线段 $x+\theta(y-x)$ 距 $E$ 不超过 $d$，故整条线段在 $K$ 中。沿线段用微积分基本定理，得到

$$
\begin{aligned}
\psi(y)-\psi(x)-D\psi(x)(y-x)
&=\int_0^1\bigl[D\psi(x+\theta(y-x))-D\psi(x)\bigr](y-x)\,d\theta,\\
\|\psi(y)-\psi(x)-D\psi(x)(y-x)\|
&\le d\eta(d)\le d\omega_0(d).
\end{aligned}
$$

若 $d\ge r_0$，不要求整条线段在 $\Omega$ 内。设

$$
A=\max_E\|\psi\|,\qquad B=\max_E\|D\psi\|,
\qquad C=\frac{2A}{r_0}+B.
$$

直接用端点的有界性得到

$$
\|\psi(y)-\psi(x)-D\psi(x)(y-x)\|
\le2A+Bd\le Cd.
$$

因此可统一取

$$
\omega(t)=\omega_0(t)+C\min\{t/r_0,1\},\qquad t\ge0.
$$

它非负、连续、非减，在零点为零；当 $d\le r_0$ 时支配 $\omega_0(d)$，当 $d\ge r_0$ 时不小于 $C$。上面两类估计遂给出题设不等式，$x=y$ 时两边均为零。

这里不能直接对任意 $x,y\in E$ 都沿连接线段积分：紧集 $E$ 及区域 $\Omega$ 均未假设凸。使用紧邻域保证近距离线段合法，再对远距离用粗估计，正是消除这一缺口的关键。

**方法总结：** 将点态可微的余项提升为紧集上的一致余项，需要导数在紧邻域上一致连续。近点用线段积分，远点用有界性；再对上确界模作区间平均，得到真正连续的控制函数。

[返回题号导航](#题号导航)

## 问题 B204

**原题号：** 习题 8.7.B 第 1 题（下册）。[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)

**题目：** 试利用 Weierstrass 第一逼近定理证明 Weierstrass 第二逼近定理。

**证明：** 所用的第一逼近定理是：紧区间上的连续函数可由代数多项式一致逼近。要证明的第二逼近定理是：任意连续的 $2\pi$ 周期函数都可由三角多项式一致逼近；一般周期通过线性换元归结于此。

设 $f$ 是连续的 $2\pi$ 周期实函数，记它的偶部与奇部为

$$
u(x)=\frac{f(x)+f(-x)}2,\qquad
v(x)=\frac{f(x)-f(-x)}2.
$$

它们仍连续且为 $2\pi$ 周期函数，$u$ 偶、$v$ 奇；周期性还保证 $v(0)=v(\pi)=v(-\pi)=0$。

对于偶部，定义 $U(t)=u(\arccos t)$（$-1\le t\le1$）。它连续，且由偶性和周期性可知 $U(\cos x)=u(x)$ 对所有实数成立。由第一逼近定理，给定 $\varepsilon>0$，可取代数多项式 $P$ 使

$$
\max_{[-1,1]}|P-U|<\frac\varepsilon3,
\qquad
\sup_{x\in\mathbb R}|P(\cos x)-u(x)|<\frac\varepsilon3.
$$

对于奇部，不能径直声称 $v(x)/\sin x$ 在端点连续。例如连续周期奇函数 $v(x)=\operatorname{sgn}(\sin x)\sqrt{|\sin x|}$ 在 $\sin x=0$ 处取零，但该商无界。为避开这一问题，对 $\delta>0$ 定义

$$
V_\delta(t)
=\frac{v(\arccos t)\sqrt{1-t^2}}{1-t^2+\delta},
\qquad -1\le t\le1.
$$

分母严格为正，故 $V_\delta$ 是整个闭区间上的连续函数。对所有实数 $x$，利用奇性和周期性，有

$$
\sin x\,V_\delta(\cos x)
=v(x)\frac{\sin^2x}{\sin^2x+\delta}.
$$

证明右端一致趋于 $v$。因为 $v$ 在 $[-\pi,\pi]$ 上连续，并在 $\sin x=0$ 的各点为零，可取 $\eta>0$，使 $|\sin x|<\eta$ 时 $|v(x)|<\varepsilon/3$。令 $L=\max_{[-\pi,\pi]}|v|$，则

$$
\left|v(x)-\sin x\,V_\delta(\cos x)\right|
=|v(x)|\frac\delta{\sin^2x+\delta}
\le\begin{cases}
|v(x)|,&|\sin x|<\eta,\\
L\delta/\eta^2,&|\sin x|\ge\eta.
\end{cases}
$$

选取足够小的 $\delta>0$，使后一上界也小于 $\varepsilon/3$（$L=0$ 时任取 $\delta$）。这就严格证明了所需的一致逼近，而不只是逐点收敛。

固定这个 $\delta$，再次应用第一逼近定理，取代数多项式 $Q$ 使 $\max_{[-1,1]}|Q-V_\delta|<\varepsilon/3$。于是

$$
\sup_{x\in\mathbb R}|\sin x\,Q(\cos x)-v(x)|<\frac{2\varepsilon}3.
$$

令 $T(x)=P(\cos x)+\sin x\,Q(\cos x)$，则

$$
\sup_{x\in\mathbb R}|T(x)-f(x)|<\varepsilon.
$$

最后验证 $T$ 确为三角多项式。由 $\cos x=(e^{ix}+e^{-ix})/2$、$\sin x=(e^{ix}-e^{-ix})/(2i)$ 作有限次展开，$P(\cos x)$ 是有限个 $\cos(kx)$ 的线性组合，$\sin x\,Q(\cos x)$ 是有限个 $\sin(kx)$ 的线性组合；两者均不涉及无限级数或收敛交换。因此 $T$ 为所求三角多项式。取 $\varepsilon=1/n$ 即得到一致逼近序列。复值函数分别逼近实部、虚部即可。

**方法总结：** 周期函数先拆成奇偶两部分，偶部经 $t=\cos x$ 转为区间函数，奇部则先消除除以 $\sin x$ 所产生的端点奇性，再作同样的代数逼近。分区估计把正则化的逐点逼近提升为一致逼近。

[返回题号导航](#题号导航)

## 七题方法总结

| 题号 | 主要方法 | 关键核查 |
| --- | --- | --- |
| B198 | 逆映射与双向等差轨道 | 连续单射的单调性；不动点条件不可删除。 |
| B199 | 广义逆与非负面积分解 | 跳跃、平台、非零初值、有界值域及临界积分；等号由左右极限刻画。 |
| B200 | 两端总变差控制与光滑近极值函数 | 非严格换元合法；最优常数不等于非零光滑极值可达。 |
| B201 | 两次一维带权分部积分 | 导数的边界条件；连续性保证换序；常数 1/144 可达。 |
| B202 | 球对称、角积分与球壳分解 | 引力核局部绝对可积；球面奇异层不作非法求导。 |
| B203 | 紧邻域、近远分区与连续模平滑 | 区域不必凸；上确界模不直接当作连续函数。 |
| B204 | 奇偶分解、端点正则化与两次代数逼近 | 不假定奇部除以正弦连续；明确证明一致误差趋零。 |

编号推进至 **B204**；两册累计 **201 道已作答、3 道暂跳过**，其中上册完成 175 题，下册完成 26 题。8.5.B 四题、8.6.B 两题均已完成。下一题为下册 **8.7.B 第 2 题**，对应 **B205**，见[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)。

**前后批次：**[下一批 B205—B211](/problems/aeb90646cd67124999a7cba3/) · [上一批 B191—B197](/problems/3394284a188dfc847fd02679/) · [B 组章节目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)
