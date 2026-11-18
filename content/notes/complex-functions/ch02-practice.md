---
title: "第二章习题：全纯函数"
description: "史济怀、刘太顺《复变函数》第二章五节共 74 道教材原题，保留小问、原图与独立校勘，不附解答。"
subject: "复变函数"
category: "complex-functions/chapter-2"
tags: ["复变函数", "习题原题", "第二章"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
attachment: "notes/complex-functions/complex-functions-chapter-2.pdf"
---

按上传教材的节次、题号收录第二章全部 74 道习题，不附解答。各节题数为 4、18、4、27、21；页码为教材印刷页。明显笔误和必要条件另列“校勘”，不混入原题。图 2.15、2.16 保留教材原图。

[习题 2.1](#习题-21) · [习题 2.2](#习题-22) · [习题 2.3](#习题-23) · [习题 2.4](#习题-24) · [习题 2.5](#习题-25)

## 习题 2.1

教材第 28 页，共 4 题。

**1.** 研究下列函数的可微性：

（1）$f(z)=|z|$；（2）$f(z)=|z|^2$；（3）$f(z)=\operatorname{Re}z$；（4）$f(z)=\arg z$；（5）$f(z)$ 为常数。

**2.** 设 $f$ 和 $g$ 都在 $z_0$ 处可微，且 $f(z_0)=g(z_0)=0$、$g'(z_0)\ne0$。证明：

$$
\lim_{z\to z_0}\frac{f(z)}{g(z)}=\frac{f'(z_0)}{g'(z_0)}.
$$

**3.** 设 $f$ 和 $g$ 分别是域 $D$ 和域 $G$ 上的全纯函数，如果 $f(D)\subset G$，那么 $g\circ f$ 也是 $D$ 上的全纯函数，而且

$$
(g\circ f)'(z)=g'(f(z))f'(z).
$$

**4.** 设域 $G$ 和域 $D$ 关于实轴对称。证明：如果 $f(z)$ 是 $D$ 上的全纯函数，那么 $\overline{f(\bar z)}$ 是 $G$ 上的全纯函数。

## 习题 2.2

教材第 34—36 页，共 18 题。

**1.** 设 $D$ 是 $\mathbb C$ 中的域，$f\in H(D)$。如果对每一个 $z\in D$，都有 $f'(z)=0$，证明 $f$ 是一常数。

**2.** 设 $f\in H(D)$，并且满足下列条件之一：

（1）$\operatorname{Re}f(z)$ 是常数；

（2）$\operatorname{Im}f(z)$ 是常数；

（3）$|f(z)|$ 是常数；

（4）$\arg f(z)$ 是常数；

（5）$\operatorname{Re}f(z)=(\operatorname{Im}f(z))^2$，$z\in D$，

那么 $f$ 是一常数。

校勘：第（4）问的辐角须有定义，即排除零值，或另明确零值的处理约定。

**3.** 设 $z=x+iy$。证明 $f(z)=\sqrt{xy}$ 在 $z=0$ 处满足 Cauchy–Riemann 方程，但 $f$ 在 $z=0$ 处不可微。

校勘：原题未说明 $xy<0$ 时的平方根取值；若视为复值函数，须先固定平方根的逐点取值约定。不能把只在 $xy\ge0$ 上的实平方根直接当作原点开邻域上的函数。

**4.** 设 $z=r(\cos\theta+i\sin\theta)$、$f(z)=u(r,\theta)+iv(r,\theta)$，证明 Cauchy–Riemann 方程为

$$
\begin{cases}
\dfrac{\partial u}{\partial r}=\dfrac1r\dfrac{\partial v}{\partial\theta},\\[4pt]
\dfrac{\partial v}{\partial r}=-\dfrac1r\dfrac{\partial u}{\partial\theta}.
\end{cases}
$$

校勘：极坐标形式用于 $r>0$，并按正文的实可微条件理解。

**5.** 设 $z=r(\cos\theta+i\sin\theta)$。证明：

$$
\begin{aligned}
\frac{\partial f}{\partial\bar z}&=\frac12e^{i\theta}\left(\frac{\partial f}{\partial r}+\frac ir\frac{\partial f}{\partial\theta}\right),\\
\frac{\partial f}{\partial z}&=\frac12e^{-i\theta}\left(\frac{\partial f}{\partial r}-\frac ir\frac{\partial f}{\partial\theta}\right).
\end{aligned}
$$

**6.** 设 $\boldsymbol s$ 和 $\boldsymbol n$ 是两个平面向量，将 $\boldsymbol s$ 按逆时针方向旋转 $\pi/2$ 后即为 $\boldsymbol n$。如果 $f=u+iv$ 是全纯函数，证明

$$
\frac{\partial u}{\partial\boldsymbol s}=\frac{\partial v}{\partial\boldsymbol n},\qquad
\frac{\partial u}{\partial\boldsymbol n}=-\frac{\partial v}{\partial\boldsymbol s}.
$$

**7.** 设 $D$ 是 $\mathbb C$ 中的域，$f\in C^2(D)$。证明：对每个 $z\in D$，有

$$
\frac{\partial^2f}{\partial z\partial\bar z}(z)=\frac{\partial^2f}{\partial\bar z\partial z}(z).
$$

**8.** 设 $D$ 是 $\mathbb C$ 中的域，$f\in H(D)$，$f$ 在 $D$ 中不取零值。证明：对任意 $p>0$，有

$$
\left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right)|f(z)|^p
=p^2|f(z)|^{p-2}|f'(z)|^2.
$$

**9.** 设 $D$ 是 $\mathbb C$ 中的域，$f=u+iv\in C^1(D)$。证明：

$$
\begin{vmatrix}u_x&u_y\\v_x&v_y\end{vmatrix}
=\left|\frac{\partial f}{\partial z}\right|^2-\left|\frac{\partial f}{\partial\bar z}\right|^2.
$$

特别地，当 $f\in H(D)$ 时，有

$$
\begin{vmatrix}u_x&u_y\\v_x&v_y\end{vmatrix}=|f'|^2.
$$

给出上面等式的几何意义。

**10.** 设 $D$ 是域，$n$ 是自然数。证明：$f\in C^n(D)$ 当且仅当

$$
\frac{\partial^nf}{\partial z^k\partial\bar z^{n-k}}
$$

在 $D$ 上连续，$0\le k\le n$。

校勘：右端微分算子的存在须按逐阶微分理解；不能只给没有定义低阶导数的形式表达式。

**11.** 设 $D$ 是域，$f:D\to\mathbb C\setminus(-\infty,0]$ 是非常数的全纯函数，则 $\log|f(z)|$ 和 $\arg f(z)$ 是 $D$ 上的调和函数，而 $|f(z)|$ 不是 $D$ 上的调和函数。

**12.** 设 $D,G$ 是域，$\varphi:D\to G$ 是全纯函数。证明：若 $u$ 是 $G$ 上的调和函数，则 $u\circ f$ 是 $D$ 上的调和函数。

校勘：原题结论中的 $f$ 应为已定义的 $\varphi$。

**13.** 设 $u$ 是域 $D$ 上的调和函数，$\varphi$ 是 $u(D)$ 上的实函数。证明：$\varphi\circ u$ 是 $D$ 上的调和函数当且仅当 $\varphi$ 是线性函数。

校勘：原题缺少对 $\varphi$ 的正则性及对 $u$ 的非退化说明；通常在 $u$ 非常数、$\varphi\in C^2(u(D))$ 下理解，且“线性”应包含仿射形式 $at+b$。这里保留原题，不把未注明的条件当作已给定。

**14.** 设 $D,G$ 是域，$U\in C^2(G)$、$\varphi\in H(D)$，并且 $\varphi(D)\subset G$。证明：$\Delta(u\circ\varphi)=\Delta u|\varphi'|^2$。

校勘：原题 $U,u$ 大小写不一致；右端必须在像点取值，即应写为 $(\Delta u)\circ\varphi\,|\varphi'|^2$。

**15.** 举例说明：存在 $B(0;1)\setminus\{0\}$ 上的调和函数，它不是 $B(0;1)\setminus\{0\}$ 上全纯函数的实部。

**16.** 设 $f=u+iv$、$z_0=x_0+iy_0$。证明：

（1）如果极限 $\displaystyle\lim_{z\to z_0}\operatorname{Re}\frac{f(z)-f(z_0)}{z-z_0}$ 存在，那么 $u_x(x_0,y_0)$ 和 $v_y(x_0,y_0)$ 存在，并且相等；

（2）如果极限 $\displaystyle\lim_{z\to z_0}\operatorname{Im}\frac{f(z)-f(z_0)}{z-z_0}$ 存在，那么 $u_y(x_0,y_0)$ 和 $v_x(x_0,y_0)$ 存在，而且 $u_y(x_0,y_0)=-v_x(x_0,y_0)$。

**17.** 证明：若 $f(z)$ 在 $z_0$ 处实可微，并且

$$
\lim_{z\to z_0}\left|\frac{f(z)-f(z_0)}{z-z_0}\right|
$$

存在，则 $f(z)$ 和 $\overline{f(z)}$ 必有一个在 $z_0$ 处可微。

**18.** 证明：若 $u(x,y)$ 是 $x,y$ 的调和多项式，则

$$
f(z)=2u\left(\frac z2,\frac z{2i}\right)-u(0,0)
$$

是 $\mathbb C$ 上的全纯函数，并且对任意 $z=x+iy\in\mathbb C$，$\operatorname{Re}f(z)=u(x,y)$。

## 习题 2.3

教材第 38—39 页，共 4 题。

**1.** 求映射 $w=(z-i)/(z+i)$ 在 $z_1=-1$ 和 $z_2=i$ 处的转动角和伸缩率。

**2.** 设 $f$ 是域 $D$ 上的全纯函数，且 $f'(z)$ 在 $D$ 上不取零值。试证：

（1）对每一个 $u_0+iv_0\in f(D)$，曲线 $\operatorname{Re}f(z)=u_0$ 和曲线 $\operatorname{Im}f(z)=v_0$ 正交；

（2）对每一个 $r_0e^{i\theta_0}\in f(D)\setminus\{0\}$、$-\pi<\theta_0\le\pi$，曲线 $|f(z)|=r_0$ 与曲线 $\arg f(z)=\theta_0$ 正交。

**3.** 设 $f$ 在 $B(0;1)\cup\{1\}$ 上全纯，并且

$$
f(B(0;1))\subset B(0;1),\qquad f(1)=1,
$$

证明 $f'(1)\ge0$。

提示：在 $f'(1)\ne0$ 的情形下，证明 $\arg f'(1)=0$。

校勘：“在 $1$ 处全纯”按定义指在 $1$ 的某个开邻域全纯。

**4.** 设 $f\in H(B(0;1))$，如果存在 $z_0\in B(0;1)\setminus\{0\}$，使得 $f(z_0)\ne0$、$f'(z_0)\ne0$，且

$$
|f(z_0)|=\max_{|z|\le|z_0|}|f(z)|,
$$

那么

$$
\frac{z_0f'(z_0)}{f(z_0)}>0.
$$

## 习题 2.4

教材第 50—53 页，共 27 题。

**1.** 验证 $\overline{e^z}=e^{\bar z}$。

**2.** 求 $|e^{z^2}|$ 和 $\arg e^{z^2}$。

**3.** 证明：若 $e^z=1$，则必有 $z=2k\pi i$，$k=0,\pm1,\ldots$。

**4.** 设 $f$ 是整函数，$f(0)=1$。证明：

（1）若 $f'(z)=f(z)$ 对每个 $z\in\mathbb C$ 成立，则 $f(z)\equiv e^z$；

（2）若对每个 $z,w\in\mathbb C$，有 $f(z+w)=f(z)f(w)$，且 $f'(0)=1$，则 $f(z)\equiv e^z$。

**5.** 试证：

（1）$\overline{\operatorname{Log}z}=\operatorname{Log}\bar z$，$\forall z\in\mathbb C\setminus\{0\}$；

（2）$\overline{\log z}=\log\bar z$，$\forall z\in\mathbb C\setminus(-\infty,0]$。

**6.** 求 $\operatorname{Re}(\log z^2)$ 和 $\operatorname{Im}(\log z^2)$，$z\in\mathbb C\setminus\{0\}$。

校勘：若 $\log$ 表示全纯主支，还须 $z^2\notin(-\infty,0]$；若在负实轴也按主辐角赋点值，应明确这是逐点主值，不声称跨割线全纯。

**7.** 设 $f$ 在 $\mathbb C\setminus(-\infty,0]$ 中全纯，$f(1)=0$。证明：

（1）若 $f'(z)=e^{-f(z)}$，$z\in\mathbb C\setminus(-\infty,0]$，则 $f(z)\equiv\log z$；

（2）若 $f(zw)=f(z)+f(w)$，$z\in\mathbb C\setminus(-\infty,0]$、$w\in(0,\infty)$，且 $f'(1)=1$，则 $f(z)\equiv\log z$。

**8.** 证明：$f(z)=z^2+2z+3$ 在 $B(0;1)$ 中单叶。

**9.** 若 $p/q$（$q>0$）是有理数，证明：$z^{p/q}=(\sqrt[q]{z})^p$。

**10.** 验证 $\overline{z^\mu}=\bar z^\mu$。

校勘：第 9、10 题涉及多值幂，须按全部取值集合理解，或明确相互对应的分支。第 10 题若允许一般复指数，右端指数须改为 $\bar\mu$；原式需另限 $\mu$ 为实数。

**11.** 验证 $z^{2\mu}$、$(z^\mu)^2$ 和 $(z^2)^\mu$ 是否相等，并说明理由。

**12.** 设 $f$ 在 $\mathbb C\setminus(-\infty,0]$ 上全纯，$f(1)=1$、$\mu>0$。证明：

（1）若 $f'(z)=\mu f(z)/z$，$z\in\mathbb C\setminus(-\infty,0]$，则

$$
f(z)\equiv|z|^\mu e^{i\mu\arg z};
$$

（2）若 $f(zw)=f(z)+f(w)$，$z\in\mathbb C\setminus(-\infty,0]$、$w\in(0,\infty)$，且 $f'(1)=\mu$，则

$$
f(z)\equiv|z|^\mu e^{i\mu\arg z}.
$$

校勘：第（2）问原题的加号应为乘号；原加法关系与 $f(1)=1$ 不相容。这里保留原式，不按错误条件作答。

**13.** 验证 $\overline{\sin z}=\sin\bar z$、$\overline{\cos z}=\cos\bar z$。

**14.** 证明：

（1）$\cos(z+w)=\cos z\cos w-\sin z\sin w$；

（2）$\sin(z+w)=\sin z\cos w+\cos z\sin w$。

**15.** 称 $\varphi(z)=\tfrac12(z+1/z)$ 为 Rokovsky 函数。证明下面四个域都是 $\varphi$ 的单叶性域：

（1）上半平面 $\{z\in\mathbb C:\operatorname{Im}z>0\}$；

（2）下半平面 $\{z\in\mathbb C:\operatorname{Im}z<0\}$；

（3）无心单位圆盘 $\{z\in\mathbb C:0<|z|<1\}$；

（4）单位圆盘的外部 $\{z\in\mathbb C:|z|>1\}$。

**16.** 求上题中的四个域在映射 $\varphi(z)=\tfrac12(z+1/z)$ 下的像。

**17.** 证明下面三个域都是 $\cos z$ 和 $\sin z$ 的单叶性域：

（1）条形域 $\{z\in\mathbb C:\theta_0<\operatorname{Re}z<\theta_0+\pi\}$；

（2）半条形域 $\{z\in\mathbb C:\theta_0<\operatorname{Re}z<\theta_0+2\pi,\ \operatorname{Im}z>0\}$；

（3）半条形域 $\{z\in\mathbb C:\theta_0<\operatorname{Re}z<\theta_0+2\pi,\ \operatorname{Im}z<0\}$。

校勘：第（1）问对任意 $\theta_0$ 的断言不成立，且不能不加区别地同时用于正弦、余弦。通常余弦采用 $k\pi<\operatorname{Re}z<(k+1)\pi$，正弦采用 $-\pi/2+k\pi<\operatorname{Re}z<\pi/2+k\pi$。原题与更正区分保留。

**18.** 证明：$w=\cos z$ 将半条形域

$$
\{z\in\mathbb C:0<\operatorname{Re}z<2\pi,\ \operatorname{Im}z>0\}
$$

一一地映为 $\mathbb C\setminus[-1,\infty)$。

**19.** 证明：$w=\sin z$ 将半条形域

$$
\{z\in\mathbb C:-\pi/2<\operatorname{Re}z<\pi/2,\ \operatorname{Im}z>0\}
$$

一一地映为上半平面。

**20.** 证明 $B(0;1)$ 是 $f(z)=z/(1-z)^2$ 的单叶性域，并求出 $f(B(0;1))$。

**21.** 当 $z$ 按逆时针方向沿圆周 $\{z\in\mathbb C:|z|=2\}$ 旋转一圈后，计算下列函数辐角的增量：

（1）$(z-1)^{1/2}$；（2）$(1+z^4)^{1/3}$；（3）$(z^2+2z-3)^{1/4}$；（4）$((z-1)/(z+1))^{1/2}$；（5）$((z^2-1)/(z^2+5))^{1/7}$。

**22.** 设 $f(z)=z^{p-1}/(1-z)^p$、$0<p<1$。证明：$f$ 能在域 $D=\mathbb C\setminus[0,1]$ 上选出单值的全纯分支。

**23.** 证明：$f(z)=\operatorname{Log}((z^2-1)/z)$ 能在域

$$
D=\mathbb C\setminus\bigl((-\infty,-1]\cup[0,1]\bigr)
$$

上选出单值的全纯分支。

**24.** 设单叶全纯映射 $f$ 将域 $D$ 一一地映为 $G$，证明：$G$ 的面积为

$$
\iint_D|f'(z)|^2\,dx\,dy.
$$

**25.** 设 $f$ 是域 $D$ 上的单叶全纯映射，$z=\gamma(t)$（$\alpha\le t\le\beta$）是 $D$ 中的光滑曲线。证明：$w=f(\gamma(t))$ 的长度为

$$
\int_\alpha^\beta|f'(\gamma(t))|\,|\gamma'(t)|\,dt.
$$

**26.** 设 $D$ 是 $z$ 平面上去掉线段 $[-1,i]$、$[1,i]$ 和射线 $z=it$（$1\le t<\infty$）后所得的域，证明函数 $\operatorname{Log}(1-z^2)$ 能在 $D$ 上分出单值全纯分支。设 $f$ 是满足 $f(0)=0$ 的那个分支，试计算 $f(2)$ 的值。

**27.** 证明函数 $\sqrt[4]{(1-z)^3(1+z)}$ 能在 $\mathbb C\setminus[-1,1]$ 上选出一个单值全纯分支 $f$，满足 $f(i)=\sqrt2e^{-\pi i/8}$。试计算 $f(-i)$ 的值。

## 习题 2.5

教材第 65—67 页，共 21 题。

**1.** 试求把上半平面映为上半平面的分式线性变换，使得 $\infty,0,1$ 分别映为 $0,1,\infty$。

**2.** 求出把上半平面映为单位圆盘的分式线性变换，使得 $-1,0,1$ 分别映为 $1,i,-1$。

**3.** 证明：分式线性变换 $w=(az+b)/(cz+d)$ 把上半平面映为上半平面的充要条件是 $a,b,c,d$ 都是实数，而且 $ad-bc>0$。

校勘：系数只确定到非零公共倍数，准确说法是“存在一组表示它的实系数，且行列式为正”，不能要求任意代表元都是实数。

**4.** 试求把单位圆盘的外部 $\{z:|z|>1\}$ 映为右半平面 $\{w:\operatorname{Re}w>0\}$ 的分式线性变换，使得

（1）$1,-i,-1$ 分别变为 $i,0,-i$；

（2）$-i,i,1$ 分别变为 $i,0,-i$。

校勘：此处“圆盘外部”须按扩充平面包括 $\infty$ 理解；只在有限平面取 $|z|>1$ 会漏掉 $T(\infty)$ 对应的像点。

**5.** 试求把上半平面映为自己的分式线性变换，使得实轴上的点 $x_1,x_2,x_3$（$x_1<x_2<x_3$）分别映为 $0,1,\infty$。

**6.** 证明：$z_1,z_2$ 关于圆周

$$
\left|\frac{z-z_1}{z-z_2}\right|=\lambda\quad(\lambda>0)
$$

对称。

提示：利用习题 1.2 中第 15 题的结果。

校勘：须 $z_1\ne z_2$；$\lambda=1$ 时“圆周”是广义圆中的直线。

**7.** 设 $z_1,z_2$ 是关于圆周 $\gamma=\{z:|z-a|=R\}$ 的一对对称点，证明：$\gamma$ 可以写成

$$
\left|\frac{z-z_1}{z-z_2}\right|=\lambda
$$

这种形式，其中 $\lambda=R/|z_2-a|=|z_1-a|/R$。

校勘：该分式形式须先取有限、互异且不在圆周上的对称点；圆心与无穷远的情形按极限另述。

**8.** 设 $z_1\ne z_2$，分式线性变换 $w=T(z)=(az+b)/(cz+d)$ 满足 $T(z_j)\ne\infty$，$j=1,2$。证明：$T$ 把圆周

$$
\left|\frac{z-z_1}{z-z_2}\right|=\lambda
$$

映为圆周

$$
\left|\frac{w-T(z_1)}{w-T(z_2)}\right|=\lambda\left|\frac{cz_2+d}{cz_1+d}\right|.
$$

注意：本题给出了圆周及其对称点在分式线性变换下的不变性的另一个证明。

**9.** 证明：$z_1,z_2$ 关于圆周

$$
az\bar z+\bar\beta z+\beta\bar z+d=0
$$

对称的充要条件是

$$
az_1\bar z_2+\bar\beta z_1+\beta\bar z_2+d=0.
$$

校勘：沿用正文条件 $a,d\in\mathbb R$、$|\beta|^2-ad>0$；含无穷远点时用极限或齐次式解释。

**10.** 设 $T(z)=(az+b)/(cz+d)$ 是一个分式线性变换，如果记

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\begin{pmatrix}\alpha&\beta\\\gamma&\delta\end{pmatrix},
$$

那么

$$
T^{-1}(z)=\frac{\alpha z+\beta}{\gamma z+\delta}.
$$

**11.** 设 $T_1(z)=(a_1z+b_1)/(c_1z+d_1)$、$T_2(z)=(a_2z+b_2)/(c_2z+d_2)$ 是两个分式线性变换，如果记

$$
\begin{pmatrix}a_1&b_1\\c_1&d_1\end{pmatrix}
\begin{pmatrix}a_2&b_2\\c_2&d_2\end{pmatrix}
=\begin{pmatrix}a&b\\c&d\end{pmatrix},
$$

那么

$$
(T_1\circ T_2)(z)=\frac{az+b}{cx+d}.
$$

校勘：原题分母中的 $x$ 应为 $z$。

**12.** 设 $\Gamma$ 是过 $-1$ 和 $1$ 的圆周，$z$ 和 $w$ 都不在圆周上。如果 $zw=1$，那么 $z$ 和 $w$ 必分别位于 $\Gamma$ 的内部或外部。

**13.** 求一分式线性变换，把 $B(0;1)$ 映为 $B(0;1)$，且把 $1/2,2,5/4+3i/4$ 分别映为 $1/2,2,\infty$。

**14.** 求一单叶全纯映射，把沿线段 $[0,1]$ 有割缝的单位圆盘映为上半平面。

**15.** 求一单叶全纯映射，把除去线段 $[0,1+i]$ 的第一象限映为上半平面。

**16.** 求一单叶全纯映射，把半条形域

$$
\{z:-\pi/2<\operatorname{Re}z<\pi/2,\ \operatorname{Im}z>0\}
$$

映为上半平面，且把 $\pi/2,-\pi/2,0$ 分别映为 $1,-1,0$。

校勘：后三点是边界点，指定值按相应边界极限理解。

**17.** 求一单叶全纯映射，把除去线段 $[a,a+hi]$ 的条形域 $\{z:0<\operatorname{Im}z<1\}$ 映为条形域 $\{w:0<\operatorname{Im}w<1\}$，其中 $a$ 是实数，$0<h<1$。

**18.** 求一单叶全纯映射，把图 2.15 所示的月牙形域映为 $B(0;1)$。

![教材图 2.15 与图 2.16，分别对应习题 2.5 第 18、20 题](/figures/complex-functions/ch02-exercise-figures.png)

**19.** 求一单叶全纯映射，把除去线段 $[1,2]$ 的单位圆盘的外部映为上半平面。

**20.** 求一单叶全纯映射，把 $B(-1/2;1/2)$ 和 $B(1/2;1/2)$ 的外部除去线段 $[-2i,0]$ 所成的域（见图 2.16）映为上半平面。

校勘：第 19、20 题的外域按扩充平面包含 $\infty$ 理解；否则一般会多一个穿孔，不能与上半平面双全纯等价。

**21.** 设 $0<r<a$，求一单叶全纯映射，把域

$$
\{z\in\mathbb C:\operatorname{Re}z>0,\ |z-a|>r\}
$$

映为同心圆环

$$
\{w\in\mathbb C:\rho<|w|<1\}.
$$

[第二章讲义](/notes/d6ad45cf42ec823cbd8c8d09/) · [返回第二章目录](/math/complex-functions/#chapter-2)
