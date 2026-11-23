---
title: "楼红卫《数学分析》B 组习题解答（四十一）：Euler 积分、特殊函数与变分反例"
description: "B282—B288：无穷区间积分和、对数反常积分、离散 Hardy–Hilbert 不等式、ψ 函数特殊值、Γ 函数解析性、递推数列的积分表示与渐近阶，以及非负变分二次型的反例。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-41-cm-bea.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "Euler积分", "Gamma函数", "Hardy–Hilbert不等式", "变分法", "B282-B288"]
created_at: "2026-11-23"
updated_at: "2026-11-23"
---

第四十一批接续 B281，收录下册 10.4.B 第 4—9 题与 10.5.B 第 1 题。原题见题册 PDF 第 32—33 页（印刷第 30—31 页），并与完整教材第 249、274 页逐项核对。七题均无星号。B284 保留并辨析原书数列指数的不一致；B285 已核实 $\psi=(\log\Gamma)'$ 的定义；B286 覆盖教材递推扩充后的全部实定义域；B287 补齐所引用的例 9.4.7 及其两个结论。

[上一批 B275—B281](/problems/e6503f7c7939cbf34595fdd1/) · [第十章索引](/problems/collections/lou-analysis/chapters/10/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)

## 题号导航

- [问题 B282：无穷区间积分和的极限（10.4.B-4）](#问题-b282)
- [问题 B283：带可去奇点的对数积分（10.4.B-5）](#问题-b283)
- [问题 B284：离散 Hardy–Hilbert 不等式（10.4.B-6）](#问题-b284)
- [问题 B285：ψ 函数的七个特殊值（10.4.B-7）](#问题-b285)
- [问题 B286：Γ 函数在全部实定义域上解析（10.4.B-8）](#问题-b286)
- [问题 B287：例 9.4.7 的积分表示与渐近阶（10.4.B-9）](#问题-b287)
- [问题 B288：非负积分二次型不保证矩阵半正定（10.5.B-1）](#问题-b288)

## 问题 B282

**原题号：** 习题 10.4.B 第 4 题。[原题，PDF 第 32 页（印刷第 30 页）](/files/problems/楼分析习题-v2.pdf#page=32)

**题目**　计算

$$
\lim_{x\to0^+}\sum_{n=1}^{\infty}\frac{nx^2}{1+n^3x^3}.
\qquad\text{(1)}
$$

**基础知识**　紧区间上的 Riemann 和；可积尾部的一致估计；Euler 积分 $B(a,b)=\Gamma(a)\Gamma(b)/\Gamma(a+b)$ 与反射公式。

**思路来源**　把分子写成 $x(nx)$，则网格宽度为 $x$，采样点为 $nx$。难点在积分区间无穷，紧区间上的 Riemann 和定理只能处理有限部分，还要独立控制尾和。

**解**　令 $f(t)=t/(1+t^3)$。对每个 $x>0$，题中级数收敛，因为其第 $n$ 项不超过 $1/(n^2x)$。固定 $A>0$，记 $N=\lfloor A/x\rfloor$，则

$$
x\sum_{n=1}^{N}f(nx)\longrightarrow\int_0^A f(t)\,dt
\quad(x\downarrow0).
\qquad\text{(2)}
$$

这是 $[0,Nx]$ 上的右端点和，剩余区间 $[Nx,A]$ 的长度小于 $x$。当 $0<x<A/2$ 时，$N>A/(2x)$，故

$$
0\le x\sum_{n>N}f(nx)
\le\frac1x\sum_{n>N}\frac1{n^2}
\le\frac1{xN}\le\frac2A.
\qquad\text{(3)}
$$

同时 $\int_A^\infty f(t)\,dt\le1/A$。由（2）、（3）先令 $x\downarrow0$，再令 $A\to\infty$，得到所求极限为 $\int_0^\infty f$。最后作换元 $u=t^3$：

$$
\begin{aligned}
\int_0^\infty\frac{t}{1+t^3}\,dt
&=\frac13\int_0^\infty\frac{u^{2/3-1}}{1+u}\,du\\
&=\frac13 B\left(\frac23,\frac13\right)
=\frac{\pi}{3\sin(2\pi/3)}
=\frac{2\pi}{3\sqrt3}.
\end{aligned}
\qquad\text{(4)}
$$

**易错条件**　不能把每个固定 $n$ 的项的极限零与无限求和直接交换；主要贡献来自 $n$ 与 $1/x$ 同阶的范围。式（3）给出对小 $x$ 一致的尾部控制，正是交换所需的依据。

**方法总结**　遇到 $\sum x f(nx)$，先识别网格，再把“有限区间 Riemann 和”和“无穷尾部一致小量”分开证明。积分可积并不自动保证任意采样和都有同样的尾估计。

## 问题 B283

**原题号：** 习题 10.4.B 第 5 题。[原题，PDF 第 32 页（印刷第 30 页）](/files/problems/楼分析习题-v2.pdf#page=32)

**题目**　计算

$$
I=\int_0^\infty\frac{\log x}{x^2-1}\,dx.
\qquad\text{(5)}
$$

**基础知识**　可去奇点；反常积分换元；非负级数的单调收敛；$\sum_{n\ge1}n^{-2}=\pi^2/6$。

**思路来源**　分母在 $x=1$ 为零，但分子也同时为零，先检查这里是否真有发散。再用倒数换元把 $(1,\infty)$ 搬回 $(0,1)$，此时几何级数的各项均为非负，可以安全换序。

**解**　当 $x\to1$ 时，$\log x/(x^2-1)\to1/2$，故补上此值后连续。零端的绝对值为 $O(|\log x|)$，无穷端为 $O(\log x/x^2)$，所以（5）绝对收敛，无需主值解释。

在 $(1,\infty)$ 上令 $x=1/t$，得

$$
\int_1^\infty\frac{\log x}{x^2-1}\,dx
=\int_0^1\frac{-\log t}{1-t^2}\,dt
=\int_0^1\frac{\log t}{t^2-1}\,dt.
\qquad\text{(6)}
$$

于是利用非负项展开和单调收敛，

$$
\begin{aligned}
I&=2\int_0^1\frac{-\log t}{1-t^2}\,dt
=2\sum_{k=0}^\infty\int_0^1t^{2k}(-\log t)\,dt\\
&=2\sum_{k=0}^\infty\frac1{(2k+1)^2}
=2\left(1-\frac14\right)\frac{\pi^2}{6}
=\frac{\pi^2}{4}.
\end{aligned}
\qquad\text{(7)}
$$

其中 $\int_0^1t^\alpha(-\log t)\,dt=(\alpha+1)^{-2}$（$\alpha>-1$），可令 $t=e^{-u}$ 后直接分部积分。

**易错条件**　$x=1$ 是可去奇点。若把（5）拆成 $\int\log x/(x-1)$ 与 $\int\log x/(x+1)$ 两个全半轴积分，它们在无穷端分别发散，不能再作普通积分相减。

**方法总结**　倒数换元把两个端点的问题配对；几何级数则把对数积分转换为平方倒数和。先证明绝对收敛，再换元或合并，能避免无意义的发散相消。

## 问题 B284

**原题号：** 习题 10.4.B 第 6 题。[原题，PDF 第 32—33 页（印刷第 30—31 页）](/files/problems/楼分析习题-v2.pdf#page=32)

**题目**　设 $p,q>1$ 为对偶数，即 $1/p+1/q=1$。原书假设 $\sum|a_n|^p$ 和 $\sum|b_n|^p$ 收敛，要求证明离散 Hardy–Hilbert 不等式

$$
\sum_{m=1}^\infty\sum_{n=1}^\infty\frac{a_m b_n}{m+n}
\le\frac{\pi}{\sin(\pi/p)}
\left(\sum_{n=1}^\infty|a_n|^p\right)^{1/p}
\left(\sum_{n=1}^\infty|b_n|^q\right)^{1/q}.
\qquad\text{(8)}
$$

**原题辨析**　完整教材第 249 页也把第二个假设印为 $p$，而右端使用 $q$。以下证明自然且有限的版本：$a\in\ell^p$、$b\in\ell^q$，并把左端加强为绝对值之和。若仅保留原印假设，当 $1<p\le2$ 时由 $\ell^p\subset\ell^q$ 仍可直接应用；当 $p>2$ 时，原假设不能保证右端有限，甚至不能保证左端收敛，末尾给出反例。这里不把补充条件伪装成原题条件。

**基础知识**　Hölder 不等式；递减函数的积分比较；非负二重级数的单调收敛。Euler 积分给出

$$
C_p:=\int_0^\infty\frac{t^{-1/q}}{1+t}\,dt
=B\left(\frac1p,\frac1q\right)
=\frac{\pi}{\sin(\pi/p)}
=\frac{\pi}{\sin(\pi/q)}.
\qquad\text{(9)}
$$

**思路来源**　直接把核 $1/(m+n)$ 平分给 Hölder 两因子，会留下发散的行和。应加入互相抵消的幂权 $(m/n)^{1/q}$、$(n/m)^{1/p}$，使每行的加权和恰由同一个 Euler 积分控制。

**证明**　固定 $m\ge1$，函数 $t^{-1/q}/(m+t)$ 正且递减，因此

$$
\begin{aligned}
\sum_{n=1}^\infty\frac{(m/n)^{1/q}}{m+n}
&\le m^{1/q}\int_0^\infty\frac{t^{-1/q}}{m+t}\,dt\\
&=\int_0^\infty\frac{u^{-1/q}}{1+u}\,du=C_p.
\end{aligned}
\qquad\text{(10)}
$$

互换 $m,n$ 及 $p,q$，同理有 $\sum_{m\ge1}(n/m)^{1/p}/(m+n)\le C_p$。对任意有限的 $M,N$，Hölder 给出

$$
\begin{aligned}
\sum_{m=1}^M\sum_{n=1}^N\frac{|a_m b_n|}{m+n}
&=\sum_{m=1}^M\sum_{n=1}^N
\left(\frac{|a_m|^p(m/n)^{1/q}}{m+n}\right)^{1/p}
\left(\frac{|b_n|^q(n/m)^{1/p}}{m+n}\right)^{1/q}\\
&\le
\left(\sum_{m=1}^M|a_m|^p
\sum_{n=1}^N\frac{(m/n)^{1/q}}{m+n}\right)^{1/p}\\
&\quad\cdot
\left(\sum_{n=1}^N|b_n|^q
\sum_{m=1}^M\frac{(n/m)^{1/p}}{m+n}\right)^{1/q}\\
&\le C_p\|a\|_{\ell^p}\|b\|_{\ell^q}.
\end{aligned}
\qquad\text{(11)}
$$

两个因子中的权经开方后分别为 $(m/n)^{1/(pq)}$ 与其倒数，故确实抵消。令 $M,N\to\infty$，单调收敛证明

$$
\sum_{m,n\ge1}\frac{|a_m b_n|}{m+n}
\le C_p\|a\|_{\ell^p}\|b\|_{\ell^q}<\infty.
\qquad\text{(12)}
$$

这同时证明二重级数绝对收敛、可任意换序，并推出实数列的（8）；复数列则对双重和取绝对值后同样成立。

为说明原印假设的不足，设 $p>2$，取 $1/p<\alpha<1/2$，令 $a_n=b_n=n^{-\alpha}$。两列都在 $\ell^p$，但对整数 $N\ge1$，

$$
\sum_{m=N}^{2N}\sum_{n=N}^{2N}
\frac{m^{-\alpha}n^{-\alpha}}{m+n}
\ge\frac{N^2(2N)^{-2\alpha}}{4N}
=2^{-2\alpha-2}N^{1-2\alpha}\longrightarrow\infty.
\qquad\text{(13)}
$$

故原印条件不能推出普通收敛的有限值结论。若允许非负扩充积分式约定，右端为无穷时仅得到平凡的扩充值比较。

**易错条件**　不能在尚未证明绝对收敛时直接重排有符号二重级数。也不能默默把假设中的 $|b_n|^p$ 改成 $|b_n|^q$ 而不说明；两指数只有在 $p=q=2$ 时自动相同。

**方法总结**　齐次核搭配互相抵消的幂权，再用尺度换元把行和化为常数，是离散积分算子估计的常用方法。有限截断上的 Hölder 与非负单调极限，使收敛性和不等式一并得到。

## 问题 B285

**原题号：** 习题 10.4.B 第 7 题。[原题，PDF 第 33 页（印刷第 31 页）](/files/problems/楼分析习题-v2.pdf#page=33)

**题目**　计算 $\psi$ 在 $1/2,1/3,2/3,1/4,3/4,1/6,5/6$ 处的值。

**基础知识**　教材第 243 页定义 $\psi(x)=(\log\Gamma(x))'=\Gamma'(x)/\Gamma(x)$（$x>0$）。记 Euler 常数为 $\gamma$。使用 $\Gamma$ 的反射公式、倍元公式与三倍元公式。

**思路来源**　同分母的一对特殊值，通常由“反射公式给差、倍元公式给和”联立求出。分母为六的值可由分母三的值再次二倍缩放得到，不必分别求积分。

**解**　由上一批 B280 已证明的 $\int_0^\infty e^{-t}\log t\,dt=-\gamma$，以及 $\Gamma(1)=1$，有

$$
\psi(1)=-\gamma.
\qquad\text{(14)}
$$

对反射公式和 $m$ 倍元公式分别取对数导数，得到

$$
\begin{aligned}
\psi(1-z)-\psi(z)&=\pi\cot(\pi z),&&0<z<1,\\
\sum_{k=0}^{m-1}\psi\left(z+\frac{k}{m}\right)
&=m\psi(mz)-m\log m,&&z>0,\quad m=2,3.
\end{aligned}
\qquad\text{(15)}
$$

这里所用倍元公式为
$\prod_{k=0}^{m-1}\Gamma(z+k/m)=(2\pi)^{(m-1)/2}m^{1/2-mz}\Gamma(mz)$，故（15）中的 $-m\log m$ 不能省略。

在（15）的第二式中先取 $(m,z)=(2,1/2)$，再取 $(3,1/3)$，得到

$$
\begin{aligned}
\psi(1/2)&=-\gamma-2\log2,\\
\psi(1/3)+\psi(2/3)&=-2\gamma-3\log3.
\end{aligned}
\qquad\text{(16)}
$$

又由反射关系 $\psi(2/3)-\psi(1/3)=\pi/\sqrt3$，可得分母三的一对值。类似地，

$$
\begin{aligned}
\psi(1/4)+\psi(3/4)&=2\psi(1/2)-2\log2,\\
\psi(3/4)-\psi(1/4)&=\pi,\\
\psi(1/6)+\psi(2/3)&=2\psi(1/3)-2\log2,\\
\psi(5/6)-\psi(1/6)&=\sqrt3\,\pi.
\end{aligned}
\qquad\text{(17)}
$$

解这些二元一次关系，七个结果为

$$
\begin{aligned}
\psi(1/2)&=-\gamma-2\log2,\\
\psi(1/3)&=-\gamma-\frac32\log3-\frac{\pi}{2\sqrt3},\\
\psi(2/3)&=-\gamma-\frac32\log3+\frac{\pi}{2\sqrt3},\\
\psi(1/4)&=-\gamma-3\log2-\frac\pi2,\\
\psi(3/4)&=-\gamma-3\log2+\frac\pi2,\\
\psi(1/6)&=-\gamma-2\log2-\frac32\log3-\frac{\sqrt3\,\pi}{2},\\
\psi(5/6)&=-\gamma-2\log2-\frac32\log3+\frac{\sqrt3\,\pi}{2}.
\end{aligned}
\qquad\text{(18)}
$$

**易错条件**　反射式左端是 $\psi(1-z)-\psi(z)$，顺序反过来就要改符号。$\psi$ 是 $\log\Gamma$ 的导数，不能把 $\Gamma$ 的特殊值直接取对数当作答案。

**方法总结**　先确定一个基准值，再用函数方程组织未知量。相同分母用和差关系，分母倍增用倍元关系，可以把特殊函数值的计算化为少量线性代数运算。

## 问题 B286

**原题号：** 习题 10.4.B 第 8 题。[原题，PDF 第 33 页（印刷第 31 页）](/files/problems/楼分析习题-v2.pdf#page=33)

**题目**　证明 $\Gamma$ 函数在定义域内解析。

**基础知识**　实解析函数的局部幂级数定义；绝对可积条件下的求和积分交换；$\Gamma(x+1)=x\Gamma(x)$。教材第 236 页先在 $x>0$ 上以 Euler 积分定义，再用递推扩充到除零与负整数外的所有实数。

**思路来源**　任意阶可微仍不足以推出解析。应直接把 $t^{x+h-1}=t^{x-1}e^{h\log t}$ 展开，并证明所有绝对值之和有可积控制；得到的才是真正收敛到函数本身的 Taylor 级数。

**证明**　固定 $x_0>0$，任取 $0<r<x_0$。对 $|h|\le r$，有

$$
\begin{aligned}
&t^{x_0-1}e^{-t}\sum_{k=0}^\infty
\frac{|h\log t|^k}{k!}
=t^{x_0-1}e^{-t}e^{|h||\log t|}\\
&\qquad\le
\begin{cases}
t^{x_0-r-1},&0<t<1,\\
t^{x_0+r-1}e^{-t},&t\ge1.
\end{cases}
\end{aligned}
\qquad\text{(19)}
$$

右端在 $(0,\infty)$ 可积。于是可以逐项积分，得到

$$
\begin{aligned}
\Gamma(x_0+h)
&=\int_0^\infty t^{x_0-1}e^{-t}e^{h\log t}\,dt\\
&=\sum_{k=0}^\infty c_k h^k,\qquad |h|<x_0,\\
c_k&=\frac1{k!}\int_0^\infty t^{x_0-1}e^{-t}(\log t)^k\,dt.
\end{aligned}
\qquad\text{(20)}
$$

式（19）还说明 $\sum|c_k|r^k<\infty$，故（20）是局部一致收敛的幂级数，并且 $c_k=\Gamma^{(k)}(x_0)/k!$。这证明正半轴上的实解析性。

若 $x_0<0$ 且 $x_0$ 不是整数，选整数 $N$ 使 $x_0+N>0$。在 $x_0$ 的一个足够小的邻域内，

$$
\Gamma(x)=\frac{\Gamma(x+N)}
{x(x+1)\cdots(x+N-1)}.
\qquad\text{(21)}
$$

分子解析，分母为非零多项式，所以商也解析。因此 $\Gamma$ 在教材的全部实定义域
$\mathbb R\setminus\{0,-1,-2,\ldots\}$ 上解析。事实上，在（19）中允许复数 $h$，同一绝对值估计也直接证明右半平面的全纯性；递推则给出避开这些极点的全纯延拓。

**易错条件**　只证明所有 $\Gamma^{(k)}$ 存在，不能代替（20）。负实轴上不能沿用零端发散的 Euler 积分，也不能到处写 $\log\Gamma(x)$；这里使用非零分母的商来延拓。

**方法总结**　含参积分的解析性可由“指数展开＋绝对值级数的可积控制”直接建立。先在积分收敛域证明，再用函数方程扩大定义域，能清楚区分积分表达式与函数本身的定义范围。

## 问题 B287

**原题号：** 习题 10.4.B 第 9 题。[原题，PDF 第 33 页（印刷第 31 页）](/files/problems/楼分析习题-v2.pdf#page=33)

**题目**　证明例 9.4.7 中的结论。

**引用内容核实**　完整教材第 181—182 页（扫描 PDF 第 195—196 页）的例 9.4.7 为：设

$$
a_0=0,\qquad a_1=\frac23,\qquad
a_{n+1}=\frac{2}{3n}a_n+a_{n-1}\quad(n\ge1).
\qquad\text{(22)}
$$

教材先求得母函数，随后留下积分表示（原式 9.4.18）及渐近等价式（原式 9.4.19）的证明：

$$
\begin{aligned}
a_n&=\frac{n}{\Gamma(2/3)\Gamma(1/3)}
\int_{-1}^1\left(\frac{1+s}{1-s}\right)^{1/3}s^{n-1}\,ds,\quad n\ge1,\\
a_n&\sim\frac{2^{1/3}}{\Gamma(1/3)}\,n^{1/3},
\qquad n\to\infty.
\end{aligned}
\qquad\text{(23)}
$$

以下一并补证母函数、积分表示与精确渐近常数；不是只给出 $a_n$ 的数量级。

**基础知识**　幂级数母函数；端点可积权的分部积分；Beta 积分；控制收敛。记

$$
C=\Gamma(2/3)\Gamma(1/3),\qquad
w(s)=\left(\frac{1+s}{1-s}\right)^{1/3}\quad(-1<s<1).
\qquad\text{(24)}
$$

**思路来源**　分母为 $n$ 的递推经母函数求导可化为微分方程。要证明积分表示，则反过来验证矩积分满足同一个递推；渐近行为由权在 $s=1$ 的可积奇性决定，同时必须排除 $s=-1$ 的交错贡献。

**证明**　由（22）归纳可得 $0\le a_n\le n$。其中归纳步为
$a_{n+1}\le2/3+n-1\le n+1$，初值显然满足。因此
$S(x)=\sum_{n\ge1}a_nx^{n-1}$ 在 $|x|<1$ 收敛，递推给出

$$
\begin{aligned}
\sum_{n\ge1}\frac{2a_n}{3n}x^n
&=(1-x^2)S(x)-a_1,\\
\big((1-x^2)S(x)\big)'&=\frac23S(x),\\
S(x)&=\frac23(1+x)^{-2/3}(1-x)^{-4/3}.
\end{aligned}
\qquad\text{(25)}
$$

最后一式由 $S(0)=2/3$ 解一阶微分方程得到，正是教材原式（9.4.17）。

为证（23）的积分公式，令 $M_k=\int_{-1}^1w(s)s^k\,ds$（$k\ge0$），并令 $c_0=0$、$c_n=nM_{n-1}/C$。由于
$(1-s^2)w(s)=(1+s)^{4/3}(1-s)^{2/3}$ 在两端趋零，且导数可积，可在截断区间分部积分后令端点趋于 $\pm1$，得到

$$
\begin{aligned}
0&=\int_{-1}^1
\frac{d}{ds}\big(s^k(1-s^2)w(s)\big)\,ds\\
&=kM_{k-1}+\frac23M_k-(k+2)M_{k+1}\quad(k\ge1),\\
2M_1&=\frac23M_0\quad(k=0).
\end{aligned}
\qquad\text{(26)}
$$

这里用了 $w'/w=2/[3(1-s^2)]$。令 $u=(1+s)/2$，Beta 积分给出

$$
M_0=2B\left(\frac43,\frac23\right)
=\frac23C,\qquad c_1=\frac23.
\qquad\text{(27)}
$$

由（26）得 $c_2=(2/3)c_1$，且对 $n\ge2$，

$$
(n+1)M_n=\frac23M_{n-1}+(n-1)M_{n-2},
\qquad c_{n+1}=\frac{2}{3n}c_n+c_{n-1}.
\qquad\text{(28)}
$$

所以 $c_n$ 与 $a_n$ 初值、递推完全相同，必有 $c_n=a_n$，积分表示得证。

为求渐近式，把 $M_{n-1}$ 分成正、负半区间。正半区间令 $t=n(1-s)$，有

$$
\begin{aligned}
P_n&:=\int_0^1(1+s)^{1/3}(1-s)^{-1/3}s^{n-1}\,ds,\\
n^{2/3}P_n
&=\int_0^n(2-t/n)^{1/3}t^{-1/3}(1-t/n)^{n-1}\,dt.
\end{aligned}
\qquad\text{(29)}
$$

把右端被积函数在 $t\ge n$ 处补零。对 $n\ge2$，
$(1-t/n)^{n-1}\le e^{-t/2}$，故它受可积函数
$2^{1/3}t^{-1/3}e^{-t/2}$ 控制。逐点极限为 $2^{1/3}t^{-1/3}e^{-t}$，于是

$$
n^{2/3}P_n\longrightarrow2^{1/3}\Gamma(2/3).
\qquad\text{(30)}
$$

负半区间令 $s=-u$，则当 $n\ge2$ 时，

$$
\begin{aligned}
\left|\int_{-1}^0w(s)s^{n-1}\,ds\right|
&\le\int_0^1(1-u)^{1/3}u^{n-1}\,du\\
&\le\int_0^1v^{1/3}e^{-(n-1)v}\,dv
\le\frac{\Gamma(4/3)}{(n-1)^{4/3}}.
\end{aligned}
\qquad\text{(31)}
$$

它是 $o(n^{-2/3})$，不会改变正半区间的主项。代入积分表示，得到

$$
a_n=\frac nC\big(P_n+o(n^{-2/3})\big)
\sim\frac{2^{1/3}}{\Gamma(1/3)}\,n^{1/3}.
\qquad\text{(32)}
$$

**易错条件**　原例的递推系数是 $2/(3n)$，积分前系数是 $n/C$。$s^{n-1}$ 在负半轴的符号随奇偶改变，不能未经估计就把整个积分的主项只归于 $s=1$。式（31）补足了这一点。

**方法总结**　母函数负责识别结构，矩积分通过递推唯一性验证精确公式，端点缩放负责提取渐近常数。这三种工具各自解决不同问题，避免把母函数的奇点形状当作未经证明的系数渐近定理。

## 问题 B288

**原题号：** 习题 10.5.B 第 1 题。[原题，PDF 第 33 页（印刷第 31 页）](/files/problems/楼分析习题-v2.pdf#page=33)

**题目**　举例说明，对于 $A\in C([a,b];\mathbb R^{(2m)\times(2m)})$，$A(x)^T=A(x)$，条件

$$
\int_a^b
\begin{pmatrix}\varphi(x)\\\varphi'(x)\end{pmatrix}^{T}
A(x)
\begin{pmatrix}\varphi(x)\\\varphi'(x)\end{pmatrix}\,dx
\ge0,\qquad
\forall\varphi\in C_0^1([a,b];\mathbb R^m)
\qquad\text{(33)}
$$

并不蕴涵 $A(x)\ge0$ 对所有 $x\in[a,b]$ 成立。这里 $a<b$，$m\ge1$，$A\ge0$ 指半正定；检验函数满足两端为零。

**基础知识**　实对称矩阵的二次型；分块矩阵；全导数的积分；零边界条件。

**思路来源**　检验向量被限制为 $(\varphi,\varphi')$，其上下两部分不能独立选取。如果能让被积式恰为一个全导数，零边界就会令所有积分消失，而矩阵仍可以是不定的。

**证明**　取常矩阵

$$
A(x)\equiv
\begin{pmatrix}0&I_m\\I_m&0\end{pmatrix}.
\qquad\text{(34)}
$$

它连续、实对称。对任意允许的检验函数，

$$
\begin{aligned}
\int_a^b
\begin{pmatrix}\varphi\\\varphi'\end{pmatrix}^{T}
A
\begin{pmatrix}\varphi\\\varphi'\end{pmatrix}\,dx
&=2\int_a^b\varphi(x)^T\varphi'(x)\,dx\\
&=\big[|\varphi(x)|^2\big]_a^b=0.
\end{aligned}
\qquad\text{(35)}
$$

所以（33）成立。但任取非零的 $u\in\mathbb R^m$，有

$$
\begin{pmatrix}u\\-u\end{pmatrix}^{T}
A
\begin{pmatrix}u\\-u\end{pmatrix}
=-2|u|^2<0.
\qquad\text{(36)}
$$

故 $A(x)$ 在每一点都不是半正定矩阵。实际上它的特征值为 $1,-1$，各重数 $m$；此反例对任意区间长度及任意 $m\ge1$ 都适用。

**易错条件**　不能由对所有 $(\varphi,\varphi')$ 的积分检验，推出对每点所有独立向量 $(u,v)$ 的二次型都非负。试图把 $\varphi$ 局部化为常数时，截断区域仍会产生导数项，不能丢掉。

**方法总结**　全导数项在零边界的变分积分中不可见，却能改变点态二次型。这一例子说明：积分意义的非负性受微分约束与边界条件共同影响，不能直接套用对任意独立检验向量成立的点态判别。

## 七题方法总结

| 题号 | 核心结果 | 关键方法 |
| --- | --- | --- |
| B282 | 极限为 $2\pi/(3\sqrt3)$ | 紧区间 Riemann 和、统一尾界、Euler 积分 |
| B283 | 对数积分为 $\pi^2/4$ | 可去奇点、倒数换元、非负级数换序 |
| B284 | 离散 Hardy–Hilbert 的对偶指数版本 | 抵消幂权、积分比较、有限截断 Hölder |
| B285 | 七个有理点的 $\psi$ 值 | 基准值、反射给差、倍元给和 |
| B286 | $\Gamma$ 在全部实定义域上解析 | 指数展开的可积控制、递推延拓 |
| B287 | 原例积分表示及精确的 $n^{1/3}$ 主项 | 母函数、矩递推、两端分别缩放估计 |
| B288 | 非负积分二次型的常矩阵反例 | 全导数、零边界、受约束检验向量 |

本批七题全部完成。B284 已保留原书指数印法，证明自然的对偶指数版本，并用反例指出仅按原印假设理解为有限值结论的不足；不把补充假设隐去。两册累计 **283 道已作答、5 道暂跳过**（上册 **175** 道、下册 **108** 道），待核仍为 **B116、B148、B180、B247、B261**。

第十章已收录完毕，覆盖 10.1.B 第 1—14 题、10.2.B 第 1—2 题、10.3.B 第 1—8 题、10.4.B 第 1—9 题及 10.5.B 第 1 题，共 **33 道已作答、1 道待核**。下一题为 **B289＝11.1.B 第 1 题**，见[原题 PDF 第 34 页（印刷第 32 页）](/files/problems/楼分析习题-v2.pdf#page=34)。
