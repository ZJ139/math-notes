---
title: "第八章习题　调和函数与次调和函数"
description: "按教材原节次收录 43 道习题，保留小问与提示，并单列原题疑误、反例及必要条件。"
subject: "复变函数"
category: "complex-functions/chapter-8"
tags: ["复变函数", "第八章", "章节习题"]
created_at: "2026-11-22"
updated_at: "2026-11-22"
attachment: "notes/complex-functions/complex-functions-chapter-8.pdf"
---

本页依教材印刷第 238—252 页收录四组共 43 道原题，题数分别为 19、6、3、15；保留原题的小问、提示和需要校核的表述。常规习题不附解答。疑误不在题干中静默改写，集中放在文末校注；其中的反例用于说明原题是否成立。

## 习题索引

[习题 8.1](#习题-81) · [习题 8.2](#习题-82) · [习题 8.3](#习题-83) · [习题 8.4](#习题-84) · [原题校注](#原题校注与适用条件)

## 习题 8.1

**1.** 证明：若 $u$ 是域 $D$ 上的调和函数，则 $\dfrac{\partial^{j+k}u}{\partial x^j\partial y^k}$ 也是 $D$ 上的调和函数（$j,k=0,1,2,\ldots$）。

**2.** 证明：若 $u$ 是域 $D$ 上的调和函数，则 $\dfrac{\partial u}{\partial z}$ 是 $D$ 上的全纯函数。

**3.** 设 $f(z)$ 是域 $D$ 上非常数的全纯函数，并且在 $D$ 上不取零值。证明：

(1) $\log|f(z)|$ 在 $D$ 上调和；

(2) $|f(z)|^p$ 在 $D$ 上不调和，$p>0$。

**4.** 证明：若域 $D$ 上的调和函数列 $\{u_n(z)\}$ 在 $D$ 上内闭一致收敛于 $u(z)$，则 $u$ 也是 $D$ 上的调和函数，并且

$$
\left\{\frac{\partial^{j+k}u_n}{\partial x^j\partial y^k}\right\}
\longrightarrow\frac{\partial^{j+k}u}{\partial x^j\partial y^k}
$$

在 $D$ 上内闭一致收敛。

**5.** 证明：若 $u$ 是域 $D$ 上非常数的调和函数，则 $u(D)$ 是开区间。

**6.** 利用上题的结论证明：若 $u$ 是域 $D$ 上非常数的调和函数，则 $u$ 不能在 $D$ 内部取得极大值和极小值，自然不能在 $D$ 内部取得最大值和最小值。

**7.** 设 $u(z)$ 在 $B(0,1)$ 上调和，并且对任意 $z_0\in\partial B(0,1)$ 成立 $\lim_{r\to1}u(rz_0)=0$，是否可以断言 $u\equiv0$？

（提示：举例说明答案是否定的。）

**8.** 设 $u$ 是 $B(0,1)$ 上的非负调和函数，$u(0)=1$，给出 $u(1/2)$ 的最佳估计。

**9.** 设 $D$ 是域，$E\subset D$ 是紧集，$a\in E$。证明：若 $u$ 是 $D$ 上的非负调和函数，则存在仅与 $a,E,D$ 有关的常数 $\varepsilon\in(0,1)$，使得

$$
\varepsilon u(a)\le u(z)\le\frac1\varepsilon u(a).
$$

**10.**（Harnack 定理）设 $\{u_n\}$ 是域 $D$ 上单调增加的调和函数列。证明：若存在 $z_0\in D$，使得 $\{u_n(z_0)\}$ 有界，则 $\{u_n\}$ 在 $D$ 上内闭一致收敛。

**11.** 设 $D$ 是由有限条光滑简单闭曲线围成的域，$n$ 是 $\partial D$ 指向外部的单位法向量场，$u,v$ 在 $\overline D$ 上调和。证明：

(1) $\displaystyle\int_{\partial D}\frac{\partial v(z)}{\partial n}|dz|=0$；

(2) $\displaystyle\int_{\partial D}u(z)\frac{\partial v(z)}{\partial n}|dz|=\int_{\partial D}v(z)\frac{\partial u(z)}{\partial n}|dz|$；

(3)

$$
\iint_D\left[\left(\frac{\partial u}{\partial x}\right)^2+\left(\frac{\partial u}{\partial y}\right)^2\right]dx\,dy
=\int_{\partial D}u(z)\frac{\partial u(z)}{\partial n}|dz|.
$$

**12.** 设 $u_1,\ldots,u_n$ 是域 $D$ 上的调和函数。证明：若 $|u_1(z)|+\cdots+|u_n(z)|$ 能在 $D$ 内部取得极大值，则 $u_1,\ldots,u_n$ 全部都是常值函数。

**13.**（调和函数的 Hadamard 三圆定理）设 $0<r_1<r_2<\infty$，$D=\{z:r_1<|z|<r_2\}$，$u$ 在 $D$ 调和，在 $\overline D$ 连续，$A(r)=\max_{|z|=r}u(z)$。证明：$A(r)$ 在 $[r_1,r_2]$ 上是 $\log r$ 的凸函数，即

$$
A(r)\le\frac{\log r_2-\log r}{\log r_2-\log r_1}A(r_1)
+\frac{\log r-\log r_1}{\log r_2-\log r_1}A(r_2).
$$

**14.** 设 $\varphi\in C^2((0,1))$。证明：$\varphi(|z|)$ 在 $B(0,1)\setminus\{0\}$ 上调和，当且仅当存在实数 $a,b$，使 $\varphi(|z|)=a\log|z|+b$。

**15.** 设 $D$ 是凸域，$u$ 是 $D$ 上的调和函数。证明：若 $u(z)>0$ 对所有 $z\in D$ 成立，则存在 $D$ 上的双全纯映射 $f$，使 $\operatorname{Re}f'(z)=u(z)$。

**16.** 设 $\gamma_1,\ldots,\gamma_n$ 为 $n$ 条可求长曲线，$u$ 是域 $D$ 上的连续函数。若 $u$ 在开集 $D\setminus\bigcup_{k=1}^n\gamma_k$ 上调和，问 $u$ 是否在 $D$ 上调和？

（提示：举例说明答案是否定的。）

**17.** 设 $a_1,\ldots,a_n$ 是实数。证明：若 $p(\theta)=\sum_{k=1}^n\cos k\theta$ 在 $[0,\pi]$ 上单调减少，则

$$
\sum_{k=1}^na_k\sin k\theta\ge0,\qquad\theta\in[0,\pi].
$$

（提示：注意 $g(r,\theta)=\sum_{k=1}^nka_kr^k\sin k\theta$ 是单位圆盘中的调和函数。）

**18.** 设 $D$ 是域，$a\in D$。证明：若 $u$ 在 $D$ 上连续，在 $D\setminus\{a\}$ 上调和，则 $u$ 在 $D$ 上调和。

**19.**（Jensen 公式）设 $f\in H(\overline{B(0,r)})$，$a_1,\ldots,a_m$ 是 $f$ 在 $B(0,r)$ 中的零点，重零点按重数重复计算，但 $f(0)\ne0$。证明：

$$
\log|f(0)|=-\sum_{k=1}^m\log\frac r{|a_k|}
+\frac1{2\pi}\int_0^{2\pi}\log|f(re^{i\theta})|\,d\theta.
$$

（提示：考虑 $\displaystyle g(z)=f(z)\prod_{k=1}^m\frac{r^2-\overline{a_k}z}{r(z-a_k)}$。）

## 习题 8.2

**1.** 设 $D\ne\mathbb C$ 为单连通域。证明：对任意 $\zeta\in D$，若 $f_\zeta:D\to B(0,1)$ 双全纯，$f_\zeta(\zeta)=0$，$f'_\zeta(\zeta)>0$，则

(1) $\log|f_\zeta(z)|=\log|f_z(\zeta)|$，$z,\zeta\in D$；

(2) $\displaystyle\lim_{z\to z_0}\log|f_\zeta(z)|=0$，$z_0\in\partial D,\ \zeta\in D$；

(3) 对固定 $\zeta\in D$，$\log|f_\zeta(z)|-\log|z-\zeta|$ 作为 $z$ 的函数在 $D$ 调和。

**2.** 设 $D$ 是域，若 $g:\overline D\times\overline D\to\mathbb R$ 满足

(1) $g(z,\zeta)=g(\zeta,z)$，$(z,\zeta)\in\overline D\times\overline D$；

(2) $g$ 在 $(\overline D\times\partial D)\cup(\partial D\times\overline D)$ 上恒为零；

(3) 对固定 $\zeta\in\overline D$，$g(z,\zeta)+\log|z-\zeta|$ 作为 $z$ 的函数在 $D$ 调和，在 $\overline D$ 连续，

则称 $g$ 为域 $D$ 的 Green 函数。证明：异于 $\mathbb C$ 的单连通域必有 Green 函数，并且唯一。

**3.** 证明：若 $g$ 是 $B(0,R)$ 的 Green 函数，则

$$
P(z,Re^{i\theta})=-\frac1{2\pi}\lim_{r\to1}\frac{\partial g(z,rRe^{i\theta})}{\partial r},\qquad |z|<R.
$$

由此也可得到圆盘的 Poisson 积分公式和 Dirichlet 问题的解。

**4.** 证明：$B(0,1)\setminus\{0\}$ 的 Dirichlet 问题不可解。

**5.**（Weierstrass 一致逼近定理）设 $f$ 是 $\partial B(0,R)$ 上的复连续函数。证明：对于任意 $n\in\mathbb N$，存在 $z$ 的 $n$ 次多项式 $P_n(z)$ 和 $\overline z$ 的 $n$ 次多项式 $Q_n(\overline z)$，使 $\{P_n(z)+Q_n(\overline z)\}$ 在圆周上一致收敛于 $f$。

**6.** 设 $\gamma_1,\gamma_2$ 为 $\partial B(0,R)$ 上两段互余的开圆弧。求圆盘中的调和函数 $u$，使 $\zeta\in\gamma_1$ 时 $u(\zeta)=0$，$\zeta\in\gamma_2$ 时 $u(\zeta)=1$。并由此证明存在 $f\in H(B(0,R))$，使上述两弧上分别有 $|f(\zeta)|=1$ 和 $|f(\zeta)|=e$。

## 习题 8.3

**1.** 求上半平面 $D$ 的 Green 函数 $g$，并证明：若

$$
P(z,t)=\frac1{2\pi}\lim_{s\to0}\frac{\partial g(z,t+si)}{\partial s},\qquad z\in D,\ t\in\mathbb R,
$$

则 $\displaystyle u(z)=\int_{-\infty}^{\infty}P(z,t)f(t)\,dt$ 是以上半平面实轴上的 $f(t)$ 为边值的 Dirichlet 问题的解。

**2.** 设 $D$ 是由简单闭曲线围成的单连通域。证明：$D$ 的 Dirichlet 问题可解，并且解唯一。

**3.** 求解上半单位圆盘 Dirichlet 问题的具体公式。

## 习题 8.4

**1.** 证明：若 $u$ 在域 $D$ 次调和，则对任意 $z_0\in D$，

$$
\limsup_{z\to z_0}u(z)=u(z_0).
$$

**2.** 证明：域 $D$ 上非常数的次调和函数不能在 $D$ 内部取得最大值。举例说明它能在 $D$ 内部取得极大值。

**3.** 证明：若 $u$ 是域 $D$ 上非常数的连续次调和函数，则 $u(D)$ 是右开的区间。

**4.** 证明：若 $u$ 是 $B(0,R)$ 上的连续次调和函数，则

$$
m(r)=\frac1{\pi r^2}\iint_{B(0,r)}u(z)\,dx\,dy
$$

是 $(0,R)$ 上的增加函数。

**5.** 举例说明，存在域 $D$ 上的上半连续函数 $u$，它不能在 $D$ 内部取得最大值，但不是次调和函数。这说明最大值原理不是次调和函数的特征性质。

**6.** 证明：域 $D$ 上有限个次调和函数的和仍为次调和函数。

**7.** 证明：若 $\{u_n\}$ 是域 $D$ 上单调减少的次调和函数列，且 $\lim_{n\to\infty}u_n=u\not\equiv-\infty$，则 $u$ 次调和。

**8.** 设 $u_n$ 是域 $D$ 上的次调和函数列。证明：若 $\sup_{n\ge1}u_n=u\not\equiv\infty$，且 $u$ 是 $D$ 上的上半连续函数，则 $u$ 次调和。

**9.** 证明：若 $u$ 在域 $D$ 调和，则对每个 $p\ge1$，$|u|^p$ 次调和。

**10.**（次调和函数的 Hadamard 三圆定理）设 $0<r_1<r_2<\infty$，$D=\{z:r_1<|z|<r_2\}$，$u$ 在 $D$ 次调和，在 $\overline D$ 连续，$A(r)=\max_{|z|=r}u(z)$。证明：$A(r)$ 是 $\log r$ 的凸函数，即

$$
A(r)\le\frac{\log r_2-\log r}{\log r_2-\log r_1}A(r_1)
+\frac{\log r-\log r_1}{\log r_2-\log r_1}A(r_2).
$$

**11.** 设 $D,G$ 是域，$u$ 在 $G$ 次调和。证明：若 $\varphi:D\to G$ 全纯，则 $u\circ\varphi$ 在 $D$ 次调和。

**12.** 设 $D$ 是凸域，$f\in H(D)$。证明：若 $\operatorname{Re}(\overline z f(z))$ 在 $D$ 次调和，则 $f$ 是常值函数或是 $D$ 上的双全纯映射。

**13.** 设 $\gamma_1,\ldots,\gamma_n$ 为 $n$ 条可求长曲线，$u$ 是域 $D$ 上的连续函数。若 $u$ 在开集 $D\setminus\bigcup_{k=1}^n\gamma_k$ 上次调和，问 $u$ 是否在 $D$ 上次调和？

（提示：举例说明答案是否定的。）

**14.** 设 $v$ 是有界域 $D$ 上的次调和函数，$u$ 是 $D$ 上的调和函数。证明：若存在 $z_1,\ldots,z_n\in\partial D$，使

$$
\begin{aligned}
\limsup_{z\to z_0}[v(z)-u(z)]&\le0,
&&z_0\in\partial D\setminus\{z_1,\ldots,z_n\},\\
\limsup_{z\to z_k}[v(z)-u(z)]&<\infty,
&&k=1,\ldots,n,
\end{aligned}
$$

则 $v(z)\le u(z)$ 对所有 $z\in D$ 成立。

**15.**（两常数定理）设 $\gamma,\Gamma$ 是单位圆周上两段不相交的开圆弧，长度分别为 $2\alpha\pi$ 和 $2(1-\alpha)\pi$，$f$ 是单位圆盘上的有界全纯函数。证明：若 $m,M>0$ 且

$$
\begin{aligned}
\limsup_{z\to z_0}|f(z)|&\le m,&&z_0\in\gamma,\\
\limsup_{z\to z_0}|f(z)|&\le M,&&z_0\in\Gamma,
\end{aligned}
$$

则 $|f(0)|\le m^\alpha M^{1-\alpha}$。由此可得到 $|f(z)|$ 的什么估计？

（提示：参考习题 8.2 的第 6 题。）

## 原题校注与适用条件

**8.1.9 的量词。** 不等式应对 $z\in E$ 成立；原题显示公式未再次写出这一范围。常数不能要求对整个任意域 $D$ 同时适用。

**8.1.11 的边界正则性。** “在 $\overline D$ 上调和”通常表示在其某开邻域调和；也可采用在 $D$ 调和且具有足够边界可微性的表述。不能仅凭在开域调和，就默认法向导数在边界存在。

**8.1.12 的结论不成立。** 在 $D=B(0,1)$ 取 $u_1(z)=2+\operatorname{Re}z$、$u_2(z)=2-\operatorname{Re}z$，则两者都为正且非常数，但 $|u_1|+|u_2|\equiv4$，处处取得极大值。一个有效修订是把绝对值之和改为平方和：因为 $\Delta\sum_j u_j^2=2\sum_j|\nabla u_j|^2$，局部极大值先使次调和平方和在一邻域为常数，再迫使各梯度为零，最后用调和函数的唯一延拓得到全域常数。原题未标记为成立。

**8.1.17 漏了系数。** 原书写 $p(\theta)=\sum\cos k\theta$，其假设与 $a_k$ 无关。取 $n=1,a_1=-1$ 即反驳原结论。结合提示，应修订为 $p(\theta)=\sum a_k\cos k\theta$；原稿题干保留原式。

**8.1.19 的边界零点。** $H(\overline{B(0,r)})$ 解释为在闭圆盘某邻域全纯。圆周零点导致可积的对数奇性，不能套用要求连续边值的平均值公式；§8.4 的 (8.4.F) 已补足处理。

**8.2.1 的对角线。** 第 (1) 小问在 $z=\zeta$ 时两侧为 $-\infty$，按扩充值理解；第 (3) 小问在 $z=\zeta$ 处应作可去延拓。

**8.2.2 的 Green 函数定义需修订。** 极点必须固定在 $\zeta\in D$，不能放到 $\partial D$；函数在内部对角线上有正对数奇性，也不能宣称处处取有限实数。通常在 $z\ne\zeta$ 处定义，要求 $g(z,\zeta)+\log|z-\zeta|$ 可去延拓为调和函数，并在有限边界趋于零。有界域中可用极值原理证明唯一性；对无界域还须指定无穷远条件或采用最小正 Green 函数的规范。

仅有有限边界零值不足以保证无界域的唯一性：在上半平面，标准核 $g_0(z,\zeta)=\log\left|(z-\overline\zeta)/(z-\zeta)\right|$ 与 $g_0(z,\zeta)+c\operatorname{Im}z\operatorname{Im}\zeta$（$c>0$）都满足对称性、有限边界零值与同样的对数主部，却不同。故不把原题字面上的定义和无条件唯一性标记为正确。

**8.2.4 的“不可解”。** 指存在边界数据无解，不是每组数据都无解。圆周赋值零、孤立边界点 $0$ 赋值 $1$ 就不可能有连续至全边界的调和解；零边值当然仍有零解。

**8.2.5 的次数。** 一致逼近通常采用次数“不超过 $n$”的多项式；若要求恰为 $n$ 次，可添加趋零的高次项，不改变一致收敛。并非对固定 $n$ 已能任意精度逼近。

**8.2.6 与 8.3.1—3 的边值。** 取值指从域内趋近的极限；需沿用本章连续或逐段连续边值及有界解的约定。半平面 Green 核取上述标准规范，法向导数中的 $s\to0$ 为 $s\downarrow0$。

**8.4.1、8.4.14、8.4.15 的横线。** 原书极限符号上方的横线表示 $\limsup$，不是普通极限，已按其数学含义排写。

**8.4.4 的“增加”。** 应理解为非降，不是严格递增，常函数就是反例。

**8.4.8 的有限值约定。** 按本章定义，须保证 $u(z)<+\infty$ 对每点成立；“不恒为 $+\infty$”本身不能替代这一值域条件。上半连续性应按值域 $\mathbb R\cup\{-\infty\}$ 理解，不能先允许局部为正无穷再直接调用定义。

**8.4.11 的恒负无穷例外。** 因本章排除恒为 $-\infty$ 的函数，需补 $u\circ\varphi\not\equiv-\infty$。例如 $u(w)=\log|w|$、$\varphi\equiv0$ 时复合恒为 $-\infty$。对非常数全纯映射，或常值落在 $u$ 有限处的映射，结论按通常定义成立；若把恒负无穷也纳入广义次调和函数，原句可直接保留。

<!-- chapter-navigation -->
[§8.1](/notes/7656f3e076d17e3000317dcc/) · [§8.2](/notes/8ee74f463d2b9de0020b1671/) · [§8.3](/notes/c4f2d0b2e5a1816a19a0e694/) · [§8.4](/notes/b6f46e1dc946406f500b9706/) · [返回第八章目录](/math/complex-functions/#chapter-8)
