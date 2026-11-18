---
title: "第三章习题：全纯函数的积分表示"
description: "第三章七节全部 49 道教材原题，保留原编号、小问、公式与提示，疑义另列校勘，不附解答。"
subject: "复变函数"
category: "complex-functions/chapter-3"
tags: ["复变函数", "习题原题", "第三章"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
attachment: "notes/complex-functions/complex-functions-chapter-3.pdf"
---

依据上传的史济怀、刘太顺《复变函数》（向禹重排本），逐页核对印刷第 71—102 页的七组习题。各组题数为 13、6、5、9、8、4、4，共 49 题；保留小问及教材提示，不附解答。本章习题没有另行指定的附图。闭曲线积分依教材默认取正向；特殊方向以题面为准。原题中的明显笔误与必要约定另列“校勘”，不混入题面。

[习题 3.1](#习题-31) · [习题 3.2](#习题-32) · [习题 3.3](#习题-33) · [习题 3.4](#习题-34) · [习题 3.5](#习题-35) · [习题 3.6](#习题-36) · [习题 3.7](#习题-37)

## 习题 3.1

教材第 71—73 页，共 13 题。

**1.** 计算积分 $\int_\gamma\frac{2z-3}{z}\,dz$，其中，$\gamma$ 为

（1）沿圆周 $\{z:|z|=2\}$ 的上半圆，从 $-2$ 到 $2$；

（2）沿圆周 $\{z:|z|=2\}$ 的下半圆，从 $-2$ 到 $2$；

（3）沿圆周 $\{z:|z|=2\}$ 的正向。

**2.** 计算积分 $\int_{|z|=1}\frac{dz}{z+2}$，并证明：

$$
\int_0^\pi\frac{1+2\cos\theta}{5+4\cos\theta}\,d\theta=0.
$$

**3.** 计算积分

$$
\int_{|z|=3}\frac{2z-1}{z(z-1)}\,dz.
$$

**4.** 如果多项式 $Q(z)$ 比多项式 $P(z)$ 高两次，试证：

$$
\lim_{R\to\infty}\int_{|z|=R}\frac{P(z)}{Q(z)}\,dz=0.
$$

**5.** 计算积分 $\int_{|z|=r}z^n\bar z^k\,dz$，其中，$n,k$ 为整数。

**6.** 设 $f\in C^1(D)$，$\gamma$ 是域 $D$ 中分别以 $a$ 和 $b$ 为起点和终点的可求长曲线。证明：

$$
\int_\gamma\left\{\frac{\partial f(z)}{\partial z}\,dz
+\frac{\partial f(z)}{\partial\bar z}\,d\bar z\right\}=f(b)-f(a).
$$

**7.** 设 $\gamma$ 是可求长曲线，$\varphi$ 在 $\gamma$ 上全纯，$\Gamma=\varphi(\gamma)$。证明：

（1）$\Gamma$ 也是可求长曲线；

（2）如果 $f$ 在 $\Gamma$ 上连续，那么

$$
\int_\Gamma f(w)\,dw
=\int_\gamma f(\varphi(z))\varphi'(z)\,dz.
$$

校勘：在曲线上全纯指在包含曲线的某个开邻域全纯；像曲线按 $\varphi\circ\gamma$ 的参数、方向及重数理解。

**8.** 设 $\gamma$ 是域 $D$ 中以 $a$ 为起点、以 $b$ 为终点的可求长曲线，$f,g\in H(D)\cap C^1(D)$。证明分部积分公式：

$$
\int_\gamma f(z)g'(z)\,dz
=\left.f(z)g(z)\right|_a^b-\int_\gamma f'(z)g(z)\,dz.
$$

**9.** 设 $\gamma$ 是正向可求长简单闭曲线，证明：$\gamma$ 内部的面积为

$$
\frac1{2i}\int_\gamma\bar z\,dz.
$$

**10.** 设单叶全纯映射 $f$ 将可求长简单闭曲线 $\gamma$ 映为正向简单闭曲线 $\Gamma$，证明：$\Gamma$ 内部的面积为

$$
\frac1{2i}\int_\gamma\overline{f(z)}f'(z)\,dz.
$$

**11.** 设 $f$ 在 $z_0$ 处连续，证明：

$$
\begin{aligned}
\text{(1)}\quad&\lim_{r\to0}\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta=f(z_0);\\
\text{(2)}\quad&\lim_{r\to0}\frac1{2\pi i}\int_{|z-z_0|=r}\frac{f(z)}{z-z_0}\,dz=f(z_0).
\end{aligned}
$$

校勘：为使题中的通常曲线积分存在，还应假定 $f$ 在 $z_0$ 的邻域连续，或至少在每个足够小的圆周上可积；仅在一点连续不自动给出该可积性。

**12.** 设 $D=\{z\in\mathbb C:\theta_0<\arg(z-a)<\theta_0+\alpha\}$（$0<\alpha\le2\pi$），$f$ 在 $\overline D\setminus\{a\}$ 上连续。证明：

（1）如果 $\displaystyle\lim_{\substack{z\to a\\z\in\overline D\setminus\{a\}}}(z-a)f(z)=A$，那么

$$
\lim_{r\to0}\int_{\substack{|z-a|=r\\z\in\overline D}}f(z)\,dz=i\alpha A;
$$

（2）如果 $\displaystyle\lim_{\substack{z\to\infty\\z\in\overline D\setminus\{a\}}}(z-a)f(z)=B$，那么

$$
\lim_{R\to\infty}\int_{\substack{|z-a|=R\\z\in\overline D}}f(z)\,dz=i\alpha B.
$$

校勘：圆弧按辐角从 $\theta_0$ 增至 $\theta_0+\alpha$ 的方向走；角状域中的辐角应取这一连续确定的范围。

**13.** 设 $D$ 是域，$f\in C^1(D)$。证明：$f$ 在 $D$ 上全纯的充分必要条件是对任意 $a\in D$，均有

$$
\lim_{r\to0}\frac1{\pi r^2}\int_{|z-a|=r}f(z)\,dz=0.
$$

## 习题 3.2

教材第 81 页，共 6 题。

**1.** 计算积分：

$$
\begin{aligned}
\text{(1)}\quad&\int_{|z|=r}\frac{|dz|}{|z-a|^2},\qquad |a|\ne r;\\
\text{(2)}\quad&\int_{|z|=2}\frac{2z-1}{z(z-1)}\,dz;\\
\text{(3)}\quad&\int_{|z|=5}\frac{z\,dz}{z^4-1};\\
\text{(4)}\quad&\int_{|z|=2a}\frac{e^z}{z^2+a^2}\,dz,\qquad a>0.
\end{aligned}
$$

**2.** 设 $f$ 在 $\{z:r<|z|<\infty\}$ 中全纯，且 $\lim_{z\to\infty}zf(z)=A$。证明：

$$
\int_{|z|=R}f(z)\,dz=2\pi iA,
$$

这里，$R>r$。

**3.** 设 $n$ 为正整数，试通过计算积分

$$
\int_{|z|=1}\left(z+\frac1z\right)^n\frac{dz}{z}
$$

证明

$$
\int_0^{2\pi}\cos^{2n}\theta\,d\theta
=2\pi\frac{(2n-1)!!}{(2n)!!}.
$$

校勘：原题积分的指数印为 $n$，目标式使用 $2n$；对应目标式计算时应将前式指数取为 $2n$，或先对一般指数计算后再代入偶数。

**4.** 设 $0<r<R$，$f$ 在 $B(0,R)$ 中全纯。证明：

$$
\begin{aligned}
\text{(1)}\quad&f(0)=\frac1{2\pi}\int_0^{2\pi}f(re^{i\theta})\,d\theta;\\
\text{(2)}\quad&f(0)=\frac1{\pi r^2}\iint_{|z|<r}f(z)\,dx\,dy.
\end{aligned}
$$

**5.** 设 $u$ 是 $B(0,R)$ 中的调和函数，$0<r<R$。证明：

$$
u(0)=\frac1{2\pi}\int_0^{2\pi}u(re^{i\theta})\,d\theta.
$$

**6.** 设 $0<r<1$。证明：

$$
\int_0^\pi\log(1-2r\cos\theta+r^2)\,d\theta=0.
$$

## 习题 3.3

教材第 84—85 页，共 5 题。

**1.** 设 $D$ 是域，$f,g\in H(D)$。如果 $fg'$ 在 $D$ 上有原函数 $\varphi$。证明：$f'g$ 在 $D$ 上有原函数 $fg-\varphi$。

**2.** 设 $D$ 是域，$f$ 是 $D$ 上的连续函数。如果 $f$ 在 $D$ 上有原函数，则对 $D$ 中任意可求长简单闭曲线 $\gamma$，均有 $\int_\gamma f(z)\,dz=0$。

**3.** 设 $f\in C^n(\mathbb C)\cap H(\mathbb C)$，并且 $f^{(n)}(z)\equiv0$。证明：$f$ 必为次数不大于 $n$ 的多项式。

**4.** 设 $\gamma$ 是从 $0$ 到 $1$ 且不经过 $\pm i$ 的可求长曲线。证明：

$$
\int_\gamma\frac{dz}{1+z^2}=\frac\pi4+k\pi,
\qquad k=0,\pm1,\pm2,\ldots.
$$

**5.** 设 $f$ 是凸域 $D$ 上的全纯函数，如果对每点 $z\in D$，有 $\operatorname{Re}f'(z)>0$，那么 $f$ 是 $D$ 上的单叶函数。

## 习题 3.4

教材第 90—92 页，共 9 题。

**1.** 计算下列积分：

$$
\begin{aligned}
\text{(1)}\quad&\int_{|z-1|=1}\frac{\sin z}{z^2-1}\,dz;\\
\text{(2)}\quad&\int_{|z|=2}\frac{dz}{1+z^2};\\
\text{(3)}\quad&\int_{4x^2+y^2=2y}\frac{e^{\pi z}}{(1+z^2)^2}\,dz;\\
\text{(4)}\quad&\int_{|z|=3/2}\frac{dz}{(z^2+1)(z^2+4)};\\
\text{(5)}\quad&\int_{|z|=2}\frac{dz}{z^3(z-1)^3(z-3)^5};\\
\text{(6)}\quad&\int_{|z|=R}\frac{dz}{(z-a)^n(z-b)},
\end{aligned}
$$

第（6）问中，$n$ 为正整数，$a,b$ 不在圆周 $|z|=R$ 上。

**2.** 设 $\gamma$ 是可求长简单闭曲线，其内部为域 $G_1$，外部为域 $G_2$。如果 $f\in H(G_2)\cap C(\overline{G_2})$，而且 $\lim_{z\to\infty}f(z)=A$，那么

$$
\frac1{2\pi i}\int_\gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta
=\begin{cases}-f(z)+A,&z\in G_2,\\A,&z\in G_1.\end{cases}
$$

这里，$\gamma$ 关于 $G_1$ 取正向。通常，称它为无界域的 Cauchy 积分公式。

**3.** 设 $D$ 是由有限条可求长简单闭曲线围成的域，$z_1,\ldots,z_n$ 是 $D$ 中 $n$ 个彼此不同的点。如果 $f\in H(D)\cap C(\overline D)$，证明：

$$
P(z)=\frac1{2\pi i}\int_{\partial D}
\frac{f(\zeta)}{\omega_n(\zeta)}\frac{\omega_n(\zeta)-\omega_n(z)}{\zeta-z}\,d\zeta
$$

是次数不超过 $n-1$ 的多项式，并且

$$
P(z_k)=f(z_k),\qquad k=1,2,\ldots,n.
$$

其中，$\omega_n(z)=(z-z_1)\cdots(z-z_n)$。

（提示：$\frac{\omega_n(\zeta)-\omega_n(z)}{\zeta-z}$ 是 $z$ 的次数不超过 $n-1$ 的多项式。）

**4.** 称

$$
P_n(z)=\frac1{2^n n!}\frac{d^n}{dz^n}(z^2-1)^n
$$

是 Legendre 多项式。证明：

（1）Legendre 多项式有如下的积分表示：

$$
P_n(z)=\frac1{2\pi i}\int_\gamma\frac{(\zeta^2-1)^n}{2^n(\zeta-z)^{n+1}}\,d\zeta,
$$

其中，$\gamma$ 是任意内部包含 $z$ 的可求长简单闭曲线；

（2）如果取 $\gamma=\{\zeta\in\mathbb C:|\zeta-x|=\sqrt{x^2-1}\}$（$1<x<\infty$），那么有如下的 Laplace 公式：

$$
P_n(x)=\frac1\pi\int_0^\pi\left(x+\sqrt{x^2-1}\cos\theta\right)^n\,d\theta.
$$

**5.** 设 $f\in H(B(0,1))\cap C(\overline{B(0,1)})$。证明：

$$
\begin{aligned}
\text{(1)}\quad&\frac2\pi\int_0^{2\pi}f(e^{i\theta})\cos^2\left(\frac\theta2\right)\,d\theta=2f(0)+f'(0);\\
\text{(2)}\quad&\frac2\pi\int_0^{2\pi}f(e^{i\theta})\sin^2\left(\frac\theta2\right)\,d\theta=2f(0)-f'(0).
\end{aligned}
$$

（提示：分别计算积分

$$
\frac1{2\pi i}\int_{|\zeta|=1}\left(2+\zeta+\frac1\zeta\right)f(\zeta)\frac{d\zeta}{\zeta}
$$

和

$$
\frac1{2\pi i}\int_{|\zeta|=1}\left(2-\zeta-\frac1\zeta\right)f(\zeta)\frac{d\zeta}{\zeta}
$$

即可。）

**6.** 利用上题结果证明：设 $f\in H(B(0,1))\cap C(\overline{B(0,1)})$，且 $f(0)=1$，$\operatorname{Re}f(z)\ge0$，那么

$$
-1\le\operatorname{Re}f'(0)\le2.
$$

校勘：原题左端印为 $-1$；由上一题应得到的通用下界是 $-2$。原下界一般不成立，此处保留原印式并标明，不把有误结论作为待证定理。

**7.** 设 $f$ 在角状域 $G=\{z\in\mathbb C:0<\arg z<\pi/4\}$ 中全纯，在 $\overline G$ 上连续。如果 $f$ 在正实轴的区间 $[a,b]$ 上等于零，证明：$f$ 在 $G$ 中恒等于零。

校勘：区间应满足 $0<a<b$；若允许退化为单点，结论不成立。

**8.** （Schwarz 积分公式）设 $f\in H(B(0,R))\cap C(\overline{B(0,R)})$，$f=u+iv$。证明：$f$ 可用实部表示为

$$
f(z)=\frac1{2\pi}\int_0^{2\pi}\frac{Re^{i\theta}+z}{Re^{i\theta}-z}\,u(Re^{i\theta})\,d\theta+iv(0).
$$

**9.** 设 $f\in H(B(0,R))\cap C(\overline{B(0,R)})$，$f=u+iv$，则对任意 $0<r\le R$，有

$$
f'(0)=\frac1{\pi r}\int_0^{2\pi}u(re^{i\theta})e^{-i\theta}\,d\theta.
$$

## 习题 3.5

教材第 94 页，共 8 题。

**1.** 设 $f$ 是有界整函数，$z_1,z_2$ 是 $B(0,r)$ 中任意两点。证明：

$$
\int_{|z|=r}\frac{f(z)}{(z-z_1)(z-z_2)}\,dz=0.
$$

并由此得出 Liouville 定理。

**2.** 设 $f$ 是整函数，如果当 $z\to\infty$ 时，$f(z)=O(|z|^\alpha)$，$\alpha\ge0$，证明 $f$ 是次数不超过 $[\alpha]$ 的多项式。

**3.** 设 $f$ 是域 $D$ 上的连续函数，如果对于任意边界和内部都位于 $D$ 中的三角形域 $\Delta$，总有 $\int_{\partial D}f(z)\,dz=0$，那么 $f$ 是 $D$ 上的全纯函数。

校勘：原题积分下标印为 $\partial D$，按前文“三角形域 $\Delta$”应为 $\partial\Delta$。

**4.** 设 $f$ 是整函数，如果 $f(\mathbb C)\subset\{z\in\mathbb C:\operatorname{Im}z>0\}$，证明 $f$ 是一个常值函数。

**5.** 设 $f$ 是整函数，如果 $f(\mathbb C)\subset\mathbb C\setminus[0,1]$，证明 $f$ 是一个常值函数。

**6.** 设 $f$ 在域 $D$ 上全纯，$z_0\in D$，定义

$$
F(z)=\begin{cases}\dfrac{f(z)-f(z_0)}{z-z_0},&z\in D\setminus\{z_0\},\\[5pt]f'(z_0),&z=z_0.\end{cases}
$$

证明：$F\in H(D)$。

**7.** 设 $\gamma$ 是可求长曲线，$f$ 在域 $D$ 上连续，在 $D\setminus\gamma$ 上全纯。证明：$f$ 在 $D$ 上全纯。

**8.** 设 $f$ 是域 $D$ 上的连续函数，如果对于任意边界和内部都位于 $D$ 中的弓形域 $G$，总有 $\int_{\partial G}f(z)\,dz=0$，那么 $f$ 是 $D$ 上的全纯函数。如果把弓形域换成圆盘，结论是否仍然成立？

## 习题 3.6

教材第 99 页，共 4 题。

**1.** 设 $D$ 是由有限条可求长简单闭曲线围成的域，$f\in C^1(\overline D)$。证明：

$$
\begin{aligned}
\text{(1)}\quad&\iint_D\frac{\partial f(\zeta)}{\partial\bar\zeta}\,d\bar\zeta\wedge d\zeta
=\int_{\partial D}f(\zeta)\,d\zeta;\\
\text{(2)}\quad&\iint_D\frac{\partial f(\zeta)}{\partial\zeta}\,d\zeta\wedge d\bar\zeta
=\int_{\partial D}f(\zeta)\,d\bar\zeta.
\end{aligned}
$$

**2.** 设 $D$ 是由有限条可求长简单闭曲线围成的域，$f,g\in C^1(\overline D)$。证明（Green 公式）：

$$
\iint_D\left(\frac{\partial g(\zeta)}{\partial\zeta}-\frac{\partial f(\zeta)}{\partial\bar\zeta}\right)d\zeta\wedge d\bar\zeta
=\int_{\partial D}\bigl(f(\zeta)\,d\zeta+g(\zeta)\,d\bar\zeta\bigr).
$$

**3.** 设 $D$ 是由有限条光滑简单闭曲线围成的域，$\boldsymbol n$ 是 $\partial D$ 的单位法向量场，指向 $D$ 的外部，$u,v\in C^2(\overline D)$。证明：

（1）

$$
\begin{aligned}
&\iint_Du(z)\Delta v(z)\,dx\,dy\\
&\quad+\iint_D\left(\frac{\partial u(z)}{\partial x}\frac{\partial v(z)}{\partial x}
+\frac{\partial u(z)}{\partial y}\frac{\partial v(z)}{\partial y}\right)dx\,dy
=\int_{\partial D}u(z)\frac{\partial v(z)}{\partial\boldsymbol n}\,|dz|;
\end{aligned}
$$

（2）

$$
\iint_D\bigl(u(z)\Delta v(z)-v(z)\Delta u(z)\bigr)\,dx\,dy
=\iint_{\partial D}\left(u(z)\frac{\partial v(z)}{\partial\boldsymbol n}
-v(z)\frac{\partial u(z)}{\partial\boldsymbol n}\right)|dz|.
$$

校勘：第（2）问右端原印为双重积分号，边界弧长积分应使用单积分号 $\int_{\partial D}$。

**4.** 设 $D$ 是由有限条可求长简单闭曲线围成的域，$f$ 在 $\overline D$ 上全纯，$z\in D$。证明：

$$
\iint_D\frac{f'(\zeta)}{\bar\zeta-\bar z}\,d\zeta\wedge d\bar\zeta
=\int_{\partial D}\left(\frac{f(\zeta)}{\zeta-z}\,d\zeta
+\frac{f(\zeta)}{\bar\zeta-\bar z}\,d\bar\zeta\right).
$$

## 习题 3.7

教材第 102 页，共 4 题。

**1.** 设 $D$ 是域，$K\subset D$ 是紧集。证明：存在开集 $G$ 和函数 $\varphi\in C^\infty(D)$，满足：

（1）$K\subset G\subset\overline G\subset D$；

（2）$0\le\varphi(z)\le1$，$\forall z\in D$；

（3）$\varphi(z)=1$，$\forall z\in G$；

（4）$\operatorname{supp}\varphi\subset D$。

**2.** 设 $D$ 是域，$f\in C^\infty(D)$。证明：若 $u_0\in C^\infty(D)$ 是非齐次 $\bar\partial$ 方程的解，即 $\frac{\partial u_0}{\partial\bar z}=f$，则该方程的解的全体为 $u_0+H(D)$。

**3.** 设 $D$ 是域，$a\in D$，$B(a,R)\subset D$，$f$ 在 $B(a,R)\setminus\{a\}$ 上全纯。证明：存在 $D\setminus\{a\}$ 上的全纯函数 $F$，使得

$$
\lim_{z\to a}[F(z)-f(z)]=0,
$$

因此 $F-f\in H(B(a,R))$。

校勘：末句指差函数在 $a$ 处以零值延拓后属于 $H(B(a,R))$。

**4.** 举例说明，存在 $f\in C^\infty(\mathbb C)$，$\operatorname{supp}f$ 是紧集，但非齐次 $\bar\partial$ 方程 $\frac{\partial u}{\partial\bar z}=f$ 的任意解没有紧支集。

[第三章讲义](/notes/af4aff0f6f332d88aa33b914/) · [返回第三章目录](/math/complex-functions/#chapter-3)
