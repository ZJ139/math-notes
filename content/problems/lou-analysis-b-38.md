---
title: "楼红卫《数学分析》B 组习题解答（三十八）：积分控制与振荡级数"
description: "B261—B267，习题 10.1.B 第 7—13 题。辨析复合可积性的缺失条件，证明积分估计与慢相位级数的完整判别，并以指数和、小分母讨论快相位及倒正弦级数。B261 保留待核，其余六题完成原题要求的证明或开放讨论。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "反常积分", "振荡级数", "小分母", "B261-B267"]
created_at: "2026-11-20"
updated_at: "2026-11-20"
---

第三十八批接续 B260，按下册题册 PDF 第 27—28 页（印刷第 25—26 页）收录 10.1.B 第 7—13 题。七题均无星号，无附加小问或原书提示。B261 的原命题存在定义域与条件缺口，保留原题、反例及修订后的完整证明，暂不计入完成数。B266、B267 原题要求“能够说些什么”，以下给出有证明的讨论，并明确未覆盖的参数范围，不宣称得到全部分类。

[上一批 B254—B260](/problems/5ff5a4cc0558cb29daadc77e/) · [第十章索引](/problems/collections/lou-analysis/chapters/10/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)

## 题号导航

- [问题 B261：复合可积性与缺失的端点条件（10.1.B-7）](#问题-b261)
- [问题 B262：Gaussian 权下振荡积分的一致界（10.1.B-8）](#问题-b262)
- [问题 B263：收敛积分的一阶加权平均（10.1.B-9）](#问题-b263)
- [问题 B264：单侧导数控制与积分幂估计（10.1.B-10）](#问题-b264)
- [问题 B265：慢相位级数的完整敛散判别（10.1.B-11）](#问题-b265)
- [问题 B266：快相位级数与差分降阶（10.1.B-12）](#问题-b266)
- [问题 B267：倒正弦级数与小分母（10.1.B-13）](#问题-b267)

## 问题 B261

**原题号：** 习题 10.1.B 第 7 题。[原题，PDF 第 27 页（印刷第 25 页）](/files/problems/楼分析习题-v2.pdf#page=27)

**题目**　设函数 $f:(0,+\infty)\to(0,+\infty)$ 连续且严格单调，证明：“$g$ 在 $[0,1]$ 上非负可积蕴涵 $f\circ g$ 在 $[0,1]$ 上非负可积”等价于 $\limsup_{x\to+\infty}f(x)/x<+\infty$。

**作答状态：** 暂跳过；待核原书对“可积”的约定及是否遗漏单调方向或零端点条件。下述反例与修订命题已经证明，原命题不能照录为真。

**基础知识**　普通 Riemann 可积函数在闭区间上有界；反常可积函数可以无界。非负函数的积分有限由面积控制，函数复合还需检查内层值域的两个端点。

**思路来源**　先取递减函数检查 $0$ 附近，再用“高度乘宽度”的阶梯函数检验无穷远增长条件的必要性。

**解**　原表述首先未定义 $f(0)$，而允许 $g=0$。即使限制 $g>0$，结论仍不成立：取

$$
f(t)=\frac1t,\qquad
g(x)=\begin{cases}x,&0<x\le1,\\1,&x=0.\end{cases}
\qquad\text{(1)}
$$

此时 $f$ 连续且严格递减，$f(t)/t\to0$；$g$ 处处正且 Riemann 可积，而 $f(g(x))=1/x$ 在零点的反常积分发散。若把“可积”仅理解为普通 Riemann 可积，则另有相反方向的问题：把 $f(t)=t^2$ 连续延拓到 $0$，它保持所有非负 Riemann 可积函数的可积性，却不满足题给增长条件。

与本节反常积分背景相容的修订是：允许 $g$ 非负、在 $(0,1]$ 的任意闭子区间 Riemann 可积，且 $\int_0^1g<\infty$；要求 $f$ 在 $0$ 连续延拓。此时保持上述可积性的充要条件为

$$
f(0+)<\infty,\qquad
\limsup_{t\to\infty}\frac{f(t)}t<\infty.
\qquad\text{(2)}
$$

这里第一个条件也说明何时能够作所需延拓；若改在非负 Lebesgue 可积函数类中讨论，同一判别成立。

充分性很直接。由（2）及紧区间上的连续性，存在 $C>0$ 使

$$
0\le f(t)\le C(1+t)\quad(t\ge0),\qquad
\int_0^1 f(g(x))\,dx\le C+C\int_0^1g(x)\,dx<\infty.
\qquad\text{(3)}
$$

连续复合保持局部 Riemann 可积性，比较判别法处理零端点；在 Lebesgue 框架中则由连续性保证可测。

证明必要性。若无穷远条件不成立，选 $t_k\ge1$ 使 $f(t_k)/t_k\ge2^{2k}$，令 $\ell_k=2^{-k}/t_k$。把长度为 $\ell_k$ 的互不相交区间连续排在零点右侧并只向零点聚集，在第 $k$ 个区间令 $g=t_k$，其余处令 $g=1$。于是

$$
\begin{aligned}
\int_0^1g(x)\,dx&\le1+\sum_{k\ge1}\ell_kt_k=2,\\
\int_0^1f(g(x))\,dx&\ge\sum_{k\ge1}\ell_k f(t_k)
\ge\sum_{k\ge1}2^k=+\infty.
\end{aligned}
\qquad\text{(4)}
$$

具体可取端点 $a_k=\sum_{j\ge k}\ell_j$，区间为 $(a_{k+1},a_k]$；因 $a_k\downarrow0$，每个远离零点的紧区间只遇到有限个跳点。

若 $f(0+)=+\infty$，选 $0<t_k<1$ 使 $f(t_k)\ge2^{2k}$，改取 $\ell_k=2^{-k-1}$ 作同样构造。此时 $0<g\le1$，而 $\int f(g)\ge\sum2^{k-1}=\infty$。由于 $f$ 单调且正，零端点极限总存在，故这就证明了所需的有限性。若原题本意是“严格递增”，则 $f(0+)\le f(1)<\infty$ 自动成立；仍应明示延拓及所用积分函数类。

**方法总结**　复合可积性同时受零端点与无穷远控制。线性增长负责大值；有限零端点负责小值。检验“对所有可积函数”时，用窄阶梯把增长过快或端点爆破转化为面积发散。

## 问题 B262

**原题号：** 习题 10.1.B 第 8 题。[原题，PDF 第 27 页（印刷第 25 页）](/files/problems/楼分析习题-v2.pdf#page=27)

**题目**　证明：$f(x)=\int_0^{+\infty}e^{-xt^2}\sin t\,dt$ 在 $(0,+\infty)$ 上有界。

**基础知识**　单调权与有界原函数的分部积分估计；参数逐点绝对收敛与参数一致有界是不同结论。

**思路来源**　直接用 $|\sin t|\le1$ 会得到随 $x\downarrow0$ 爆大的 Gaussian 积分。应保留正弦的抵消，把导数转移到权上。

**证明**　固定 $x>0$，被积函数绝对值由 $e^{-xt^2}$ 控制，故积分存在。在有限区间分部积分，再令上限趋于无穷，得到

$$
\begin{aligned}
f(x)&=1-2x\int_0^\infty t e^{-xt^2}\cos t\,dt,\\
|f(x)|&\le1+2x\int_0^\infty t e^{-xt^2}\,dt=2.
\end{aligned}
\qquad\text{(5)}
$$

边界项 $e^{-xR^2}\cos R\to0$；后一积分绝对收敛，故分部积分的极限合法。常数 $2$ 与 $x$ 无关，即为所求。这里没有把 $x=0$ 代入原积分；$\int_0^\infty\sin t\,dt$ 本身不收敛。

**方法总结**　求参数一致界时，优先使用振荡因子的有界原函数；权函数的总变差往往比权函数的积分更容易一致控制。

## 问题 B263

**原题号：** 习题 10.1.B 第 9 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $\int_0^{+\infty}f(x)\,dx$ 收敛。求 $\lim_{x\to+\infty}x^{-1}\int_0^xtf(t)\,dt$。

**基础知识**　收敛函数的连续 Cesàro 平均保持极限；分部积分不要求原积分绝对收敛。

**思路来源**　令收敛的原函数承担主要信息，把带 $t$ 的积分化为“端点值减去平均值”。

**解**　记 $F(x)=\int_0^xf(t)\,dt$，$L=\lim_{x\to\infty}F(x)$。分部积分给出

$$
\frac1x\int_0^xtf(t)\,dt
=F(x)-\frac1x\int_0^xF(t)\,dt.
\qquad\text{(6)}
$$

若 $0$ 是瑕点，先在 $[\varepsilon,x]$ 上分部积分；因 $F(\varepsilon)\to0$，边界项 $\varepsilon F(\varepsilon)\to0$，仍得到（6）。给定 $\varepsilon>0$，取 $A$ 使 $|F(t)-L|<\varepsilon$ 于 $t\ge A$，则

$$
\left|\frac1x\int_0^xF(t)\,dt-L\right|
\le\frac1x\int_0^A|F(t)-L|\,dt+\varepsilon\frac{x-A}{x}
\quad(x>A).
\qquad\text{(7)}
$$

先令 $x\to\infty$，再令 $\varepsilon\downarrow0$，平均值趋于 $L$。故所求极限为 $\boxed{0}$。证明未使用 $\int|f|<\infty$，也没有推断 $xf(x)\to0$。

**方法总结**　把权函数的增长交给分部积分，利用原函数收敛。原积分可能条件收敛，此时对 $f$ 直接取绝对值会丢失题设的有效信息。

## 问题 B264

**原题号：** 习题 10.1.B 第 10 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $f$ 是 $[0,+\infty)$ 上非负可导函数，$f(0)=0$，$f'(x)\le1/2$，且 $\int_0^{+\infty}f(x)\,dx$ 收敛。求证：任意 $p>1$ 时 $\int_0^{+\infty}f^p(x)\,dx$ 收敛，且

$$
\int_0^\infty f^p(x)\,dx
\le\left(\int_0^\infty f(x)\,dx\right)^{(p+1)/2}.
\qquad\text{(8)}
$$

**基础知识**　中值定理把单侧导数上界转为向左的函数下界；高度需要一定面积支撑。

**思路来源**　一个高度为 $h$ 的峰，因上升斜率不超过 $1/2$，在它左边至少带着底为 $2h$、面积为 $h^2$ 的三角形。

**证明**　设 $S=\int_0^\infty f$。固定 $x\ge0$，令 $h=f(x)$。由中值定理，$h\le x/2$，且对 $0\le t\le x$ 有

$$
f(t)\ge h-\frac{x-t}{2}.
\qquad\text{(9)}
$$

因此 $x-2h\ge0$，利用非负性并在三角形所在区间积分，得到

$$
S\ge\int_{x-2h}^xf(t)\,dt
\ge\int_{x-2h}^x\left(h-\frac{x-t}{2}\right)dt=h^2.
\qquad\text{(10)}
$$

于是处处 $f\le\sqrt S$。若 $S=0$，连续非负性给出 $f\equiv0$；否则 $f^p\le S^{(p-1)/2}f$。积分即得（8），同时证明收敛。这里只用了导数的上界，不需要补设 $|f'|\le1/2$，也不要求导数连续。

**方法总结**　先从局部斜率得到全局高度界，再把高次幂压到一次幂。方向是“积分控制峰高”，不能仅由非负可积就断言函数有界。

## 问题 B265

**原题号：** 习题 10.1.B 第 11 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $\alpha\in(0,1)$，$\beta\in(0,1]$，$\sum_{n=1}^\infty\sin(n^\alpha)/n^\beta$ 的收敛性如何？

**基础知识**　复指数求和、离散分部求和、级数的 Cauchy 条件；相位差小不代表部分和有界。

**思路来源**　相邻相位差约为 $n^{\alpha-1}$，一个同号波段包含约 $n^{1-\alpha}$ 项。因此加权波段的量级是 $n^{1-\alpha-\beta}$，这提示临界线 $\alpha+\beta=1$。

**解**　完整结论为

$$
\boxed{\ \sum_{n\ge1}\frac{\sin(n^\alpha)}{n^\beta}
\text{ 收敛}\ \Longleftrightarrow\ \alpha+\beta>1.\ }
\qquad\text{(11)}
$$

在题设 $0<\beta\le1$ 内，没有绝对收敛情形。

先证明后面也要用的求和估计。设 $z_n=e^{i\phi(n)}$，相位差 $\theta_n=\phi(n+1)-\phi(n)$ 单调，并落在同一段 $[2k\pi+\delta,2(k+1)\pi-\delta]$，其中 $0<\delta\le1$。置

$$
b_n=\frac1{e^{i\theta_n}-1}
=-\frac12-\frac i2\cot\frac{\theta_n}{2}.
\qquad\text{(12)}
$$

由 $z_n=b_n(z_{n+1}-z_n)$，离散分部求和给出

$$
\sum_{n=u}^v z_n
=b_vz_{v+1}-b_uz_u+\sum_{n=u+1}^v(b_{n-1}-b_n)z_n.
\qquad\text{(13)}
$$

在这一段内，$b_n$ 的实部恒为 $-1/2$，虚部单调，故总变差等于两端虚部之差。由 $|b_n|\le C/\delta$ 可得

$$
\left|\sum_{n=u}^v e^{i\phi(n)}\right|\le\frac C\delta.
\qquad\text{(14)}
$$

对 $\phi(t)=t^\alpha$，在任意 $[N,2N]$ 的整数子区间内，$\theta_n$ 单调递减，且 $c_\alpha N^{\alpha-1}\le\theta_n\le C_\alpha N^{\alpha-1}$。当 $N$ 充分大时可在（14）取 $\delta=c_\alpha N^{\alpha-1}$，得到所有子区间统一的界 $C_\alpha N^{1-\alpha}$。再对权 $n^{-\beta}$ 分部求和，

$$
\sup_{N\le u\le v\le2N}
\left|\sum_{n=u}^v\frac{e^{in^\alpha}}{n^\beta}\right|
\le C_{\alpha,\beta}N^{1-\alpha-\beta}.
\qquad\text{(15)}
$$

若 $\alpha+\beta>1$，将任意尾段按 $[2^j,2^{j+1}]$ 拆开，（15）的上界组成收敛几何级数，尾和一致趋于零。因此复级数、从而其虚部级数收敛。

反之，取相位落在 $[2k\pi+\pi/6,2k\pi+5\pi/6]$ 内的连续整数段。该段上 $\sin(n^\alpha)\ge1/2$，项数至少为 $c_\alpha k^{1/\alpha-1}$，且 $n$ 与 $k^{1/\alpha}$ 相比有固定上下界。项数的估计由两端 $1/\alpha$ 次幂之差及中值定理得到；该差趋于无穷，取整误差可以吸收。因此该段之和至少为

$$
c_{\alpha,\beta}k^{(1-\beta)/\alpha-1}.
\qquad\text{(16)}
$$

当 $\alpha+\beta\le1$，这个下界不趋于零，违反 Cauchy 条件，包括等号情形。最后，把各个互不相交的正波段对绝对值级数的贡献相加；当 $\beta\le1$，（16）的幂指数至少为 $-1$，故绝对值级数发散。

**方法总结**　先用一个同号波段判断必要条件，再用相位差的单调性控制任意子区间的抵消，最后用二进分块证明充分性。不能直接套用要求部分和一致有界的 Dirichlet 判别法；也不能仅凭相应反常积分收敛就宣布级数收敛。

## 问题 B266

**原题号：** 习题 10.1.B 第 12 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $\alpha>1$，$\beta\in(0,1]$，对于 $\sum_{n=1}^\infty\sin(n^\alpha)/n^\beta$ 的收敛性，你能够说些什么？

**基础知识**　离散分部求和、二阶相位估计、平方求和后的差分降阶。下面证明所用估计，不把指数和定理作为未解释的黑箱。

**思路来源**　当 $\alpha>1$ 时，相邻相位差不断穿过 $2\pi$ 的整数倍，B265 的单一相位区间估计不能直接延用。应把接近整周的项单列，再在其余段求和；高次相位则先作有限差分降阶。

**解**　本题是开放讨论。下面证明三项结论：

- 当 $1<\alpha<2$、$\alpha/2<\beta\le1$ 时，级数条件收敛。
- 对任意非整数 $\alpha>1$，存在下文明确给出的 $\delta_\alpha>0$，使 $1-\delta_\alpha<\beta\le1$ 时条件收敛。特别地，所有非整数 $\alpha>1$ 在 $\beta=1$ 时收敛。
- 对所有 $\alpha>1$、$0<\beta\le1$，级数都不绝对收敛。

这里的充分范围不宣称最优；没有把范围外判为发散，也没有声称解决整数 $\alpha\ge2$ 时的普通收敛性。

**二阶相位估计。** 若实函数 $\phi$ 在所考察区间的稍大邻域二次连续可导，$\phi''$ 同号，且

$$
\lambda\le|\phi''(t)|\le A\lambda,\qquad 0<\lambda<1,
\qquad\text{(17)}
$$

那么对于长度不超过 $N$ 的任意整数段，有

$$
\left|\sum e^{i\phi(n)}\right|
\le C_A\bigl(N\sqrt\lambda+\lambda^{-1/2}\bigr).
\qquad\text{(18)}
$$

证明如下。令 $\theta_n=\phi(n+1)-\phi(n)$；它单调，相邻之差的绝对值介于 $\lambda$ 与 $A\lambda$，整个变化范围长至多 $C_A N\lambda$。固定 $0<\eta\le1$，将 $\theta_n$ 距离 $2\pi\mathbb Z$ 小于 $\eta$ 的项称为近整周项。它们的数量至多为

$$
C_A(N\lambda+1)(\eta/\lambda+1).
\qquad\text{(19)}
$$

其余指标至多分为 $C_A(N\lambda+1)$ 个连续段；每段由（14）估计为 $C/\eta$。把近整周项逐项估计为 $1$，再取 $\eta=\sqrt\lambda$，便得（18）。端点至多多出常数个项，可以吸收入右端。若 $\phi''<0$，取共轭后同理。

对 $\phi(t)=ct^\alpha$，其中固定 $c\ne0$、$1<\alpha<2$，在 $[N,2N]$ 上可取 $\lambda$ 为 $N^{\alpha-2}$ 的常数倍。因此

$$
\sup_{N\le u\le v\le2N}\left|\sum_{n=u}^v e^{icn^\alpha}\right|
\le C_{\alpha,c}\left(N^{\alpha/2}+N^{1-\alpha/2}\right)
\le C_{\alpha,c}N^{\alpha/2}.
\qquad\text{(20)}
$$

与（15）同样分部求和、二进分块，即得 $\beta>\alpha/2$ 时的收敛性。

**高次非整数相位。** 先给出差分估计。对模不超过 $1$、支撑于长度不超过 $N$ 的整数段的序列 $z_n$，以及整数 $1\le H\le N$，有

$$
\left|\sum z_n\right|^2
\le C\left(\frac{N^2}{H}
+\frac NH\sum_{h=1}^{H-1}\left|\sum_nz_{n+h}\overline{z_n}\right|\right).
\qquad\text{(21)}
$$

把序列在段外延为零，则 $H\sum z_n=\sum_n\sum_{j=1}^Hz_{n+j}$。外层只有至多 $N+H$ 个非零位置，应用 Cauchy 不等式并展开内层模平方，得到 $H\sum|z_n|^2$ 与 $2(H-h)$ 倍的各阶相关和；利用 $N+H\le2N$ 即得（21）。当 $z_n=e^{i\phi(n)}$ 时，相关和的相位为 $\phi(n+h)-\phi(n)$，次数降低一阶。

现在令 $\alpha>1$ 非整数，记

$$
r=\lfloor\alpha\rfloor-1,\qquad
d=\lceil\alpha\rceil-\alpha\in(0,1),\qquad
\delta_\alpha=\frac{d}{(r+1)2^{r+1}}.
\qquad\text{(22)}
$$

我们证明任意固定 $c\ne0$ 都有

$$
\sup_{N\le u\le v\le2N}\left|\sum_{n=u}^v e^{icn^\alpha}\right|
\le C_{\alpha,c}N^{1-\delta_\alpha}.
\qquad\text{(23)}
$$

$r=0$ 时，（23）正是（20）。若 $r\ge1$，取 $H=\lfloor N^\eta\rfloor$，$\eta=d/[2(r+1)]$，反复使用（21）共 $r$ 次。令 $\Delta_h\phi(t)=\phi(t+h)-\phi(t)$。对任意 $1\le h_1,\ldots,h_r<H$，差分相位的二阶导数可写为

$$
(\Delta_{h_r}\cdots\Delta_{h_1}\phi)''(t)
=\int_0^{h_1}\cdots\int_0^{h_r}
\phi^{(r+2)}(t+s_1+\cdots+s_r)\,ds_r\cdots ds_1.
\qquad\text{(24)}
$$

因 $\alpha-r-2=-d$ 且相关导数系数非零，该导数同号，其绝对值与 $P N^{-d}$ 相比有只依赖 $\alpha,c$ 的正上下界，其中 $P=h_1\cdots h_r$。这里所有自变量仍在 $[N,3N]$ 内，且 $1\le P\le H^r$。由（18），最终相关和除以 $N$ 后不超过

$$
C_{\alpha,c}\left(H^{r/2}N^{-d/2}+N^{d/2-1}\right)
\le C_{\alpha,c}N^{-d/4}.
\qquad\text{(25)}
$$

为说明开方过程，令 $T_j$ 为作 $j$ 次允许差分后，所有相关子区间和的模除以 $N$ 的上确界。（21）给出 $T_j^2\le C(H^{-1}+T_{j+1})$，而（25）给出 $T_r\le C N^{-d/4}$。逐次开方得到

$$
T_0\le C\left(\sum_{j=1}^r H^{-1/2^j}
+N^{-d/(4\cdot2^r)}\right)
\le C N^{-\eta/2^r}=C N^{-\delta_\alpha}.
\qquad\text{(26)}
$$

最后一步用了 $\eta\le d/4$。这证明（23），再分部求和得加权子区间和为 $O(N^{1-\delta_\alpha-\beta})$，故 $\beta>1-\delta_\alpha$ 时收敛。例如 $\alpha=3/2$ 可取 $\beta>3/4$；$\alpha=5/2$ 可取 $\beta>15/16$。后一范围只是本证明给出的充分条件。

**绝对收敛的排除。** 对非整数 $\alpha>1$，在（23）取 $c=2$，得到 $\sum_{N<n\le2N}\cos(2n^\alpha)=o(N)$。对整数 $\alpha=m\ge2$，同一结论也成立，理由如下：任意实多项式 $P$，若最高次系数除以 $2\pi$ 为无理数，则

$$
\sum_{n\le N}e^{iP(n)}=o(N).
\qquad\text{(27)}
$$

一次多项式由几何级数直接得到有界和。归纳时在（21）固定 $H$；每个固定 $h\ne0$ 的差分多项式次数降低一阶，最高次系数仍为 $2\pi$ 的无理倍数，因此相关和为 $o(N)$。除以 $N^2$，先令 $N\to\infty$，所得上极限至多为 $C/H$；再令 $H\to\infty$，即得（27）。取 $P(t)=2t^m$ 即可，因为 $1/\pi$ 无理。

因此对任意 $\alpha>1$ 都有

$$
\begin{aligned}
\sum_{N<n\le2N}|\sin(n^\alpha)|
&\ge\sum_{N<n\le2N}\sin^2(n^\alpha)=\frac N2+o(N),\\
\sum_{N<n\le2N}\frac{|\sin(n^\alpha)|}{n^\beta}
&\ge c_\beta N^{1-\beta}.
\end{aligned}
\qquad\text{(28)}
$$

取整数 $N$，余项包含端点取整误差。当 $\beta\le1$，二进分块的贡献不趋于零，故绝对值级数发散。注意（27）的 $o(N)$ 只足以推出平均抵消，不能直接推出 $\sum\sin(n^m)/n$ 收敛；若用分部求和，还必须控制相应余项的积分或获得更强估计。

**方法总结**　离散采样会遇到整周共振，不能以“振荡越来越快”代替证明。二阶估计用导数变化控制近整周项，差分把高次相位降低到可估计的次数；定性平均抵消与足以证明加权级数收敛的定量界必须分开。

## 问题 B267

**原题号：** 习题 10.1.B 第 13 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $\alpha>0$，$\beta>0$，对于 $\sum_{n=1}^\infty1/[n^\beta\sin(n^\alpha)]$ 的收敛性，你能够说些什么？

**基础知识**　级数的一般项必要条件、与整数格的距离、抽屉原理和闭区间套。末段另给出几乎处处的收敛结果，并说明所用测度论步骤。

**思路来源**　正弦移到分母后，关键变为相位离正弦零点多近。大部分项很小并不能排除稀疏但极大的项；需要同时研究一般参数与例外参数。

**解**　先排除没有定义的参数。若某个 $n\ge2$、$k\ge1$ 满足 $n^\alpha=k\pi$，原级数含零分母。相应参数集合为

$$
D=\left\{\frac{\log(k\pi)}{\log n}:n\ge2,\ k\ge1\right\}.
\qquad\text{(29)}
$$

例如 $\alpha=\log\pi/\log2$ 时第二项就没有定义。这种情况不能称为一个通常意义下的收敛或发散级数。以下均假定 $\alpha\notin D$。

记 $d_n=\operatorname{dist}(n^\alpha,\pi\mathbb Z)\in(0,\pi/2]$，则

$$
\frac2\pi d_n\le|\sin(n^\alpha)|\le d_n.
\qquad\text{(30)}
$$

所以一般项趋零的必要条件是 $n^\beta d_n\to\infty$。若存在 $c>0$、$\gamma\ge0$ 使充分大的 $n$ 都满足 $d_n\ge c n^{-\gamma}$，则 $\beta>\gamma+1$ 足以保证绝对收敛。另一方面，因 $|\sin(n^\alpha)|\le1$，$0<\beta\le1$ 时绝对值级数对任何允许的 $\alpha$ 都发散。这些判别只说明各自方向，不能反向使用。

**两个确定的普通发散范围。** 当 $0<\alpha<1$，取最接近 $(k\pi)^{1/\alpha}$ 的整数 $n_k$。中值定理给出

$$
0<|\sin(n_k^\alpha)|
\le|n_k^\alpha-k\pi|\le C_\alpha n_k^{\alpha-1},\qquad
\frac1{n_k^\beta|\sin(n_k^\alpha)|}
\ge c_\alpha n_k^{1-\alpha-\beta}.
\qquad\text{(31)}
$$

$n_k$ 最终严格递增。因此 $\alpha+\beta\le1$ 时一般项不趋零，原级数发散。这里没有把 $\alpha+\beta>1$ 误写成充分条件。

当 $\alpha=1$，抽屉原理给出无穷多对正整数 $p,q$，满足 $|q\pi-p|<1/q$。具体地，将 $0,\pi,\ldots,Q\pi$ 的小数部分放入 $Q$ 个等长区间，作差即可；$\pi$ 无理保证所得 $q$ 随 $Q$ 可取无界。因 $p$ 与 $q$ 相比有固定上下界，

$$
|\sin p|\le|p-q\pi|\le C/p.
\qquad\text{(32)}
$$

故 $0<\beta\le1$ 时，子列项的绝对值至少为 $c p^{1-\beta}$，仍不趋零。

**任意大的幂权也不能对所有参数保证收敛。** 更强地，任意给定的正参数开区间内，都存在 $\alpha\notin D$，使上述级数对每个 $\beta>0$ 都因一般项不趋零而发散。

证明用闭区间套。枚举可数集合 $D=\{a_1,a_2,\ldots\}$。先在给定开区间内选非退化闭区间 $I_0$。已选 $I_{j-1}$ 时，先在其内部避开有限多个 $a_1,\ldots,a_j$，留出一个开子区间 $J$。当整数 $n$ 足够大，$n^\alpha$ 在 $J$ 两端之间的差趋于无穷，因此必有一个根 $\alpha=\log(k\pi)/\log n$ 落在 $J$ 内。选取越来越大的 $n_j$，并在这个根旁边选一个不包含根的非退化闭区间 $I_j\subset J$，使

$$
|I_j|\le2^{-j},\qquad
0<|\sin(n_j^\alpha)|<n_j^{-j}\quad(\alpha\in I_j).
\qquad\text{(33)}
$$

连续性保证这种选择可行。闭区间套的唯一公共点 $\alpha_*$ 避开每个 $a_j$，故所有项都有定义；但对任意固定 $\beta>0$，在子列 $n_j$ 上有

$$
\frac1{n_j^\beta|\sin(n_j^{\alpha_*})|}>n_j^{j-\beta}\longrightarrow\infty.
\qquad\text{(34)}
$$

因此不存在只要求“$\beta$ 足够大”便对全部 $\alpha$ 有效的判别。

**补充：几乎每个参数的绝对收敛。** 对每个 $\beta>1$，级数对 Lebesgue 几乎处处的 $\alpha>0$ 绝对收敛。这里“几乎处处”指例外集合测度为零，不包括对某个指定参数的保证。给出证明以与（34）的例外构造对照。

固定 $0<a<b<\infty$。对 $n\ge2$、$0<\varepsilon\le1/2$，令

$$
E_n(\varepsilon)=\{\alpha\in[a,b]:|\sin(n^\alpha)|<\varepsilon\}.
\qquad\text{(35)}
$$

代换 $t=n^\alpha$，$d\alpha=dt/(t\log n)$。每个长度为 $\pi$ 的周期中，$|\sin t|<\varepsilon$ 的部分长至多 $C\varepsilon$；按这些周期分段，并对 $1/t$ 作上估计，得

$$
|E_n(\varepsilon)|\le C_{a,b}\varepsilon.
\qquad\text{(36)}
$$

更具体地，$t\in[n^a,n^b]$ 中从第二个周期起，所用上界为 $C\varepsilon/(k\log n)$，而这些 $1/k$ 的和至多 $C+(b-a)\log n$；首个可能不完整的周期因 $n^a>1$ 也受同型常数控制。这说明（36）的常数与 $n,\varepsilon$ 无关。

令 $Y_n(\alpha)=\min\{1/|\sin(n^\alpha)|,n^2\}$，在零点取截断值 $n^2$。利用非负函数的分层积分公式及（36），

$$
\int_a^bY_n(\alpha)\,d\alpha
\le C_{a,b}(1+\log n),\qquad
\sum_{n=2}^\infty\frac1{n^\beta}\int_a^bY_n(\alpha)\,d\alpha<\infty.
\qquad\text{(37)}
$$

分层积分公式来自 $Y=\int_0^\infty\mathbf1_{\{Y>s\}}ds$ 与非负积分换序；在 $s\ge2$ 时用 $|\{Y_n>s\}|\le C_{a,b}/s$。同样由非负积分换序，（37）意味着 $\sum n^{-\beta}Y_n(\alpha)$ 对几乎每个 $\alpha\in[a,b]$ 有限。

又由（36），$\sum_n|E_n(n^{-2})|<\infty$。对任意 $M$，$\bigl|\bigcup_{n\ge M}E_n(n^{-2})\bigr|\le C\sum_{n\ge M}n^{-2}\to0$，故几乎每个 $\alpha$ 只属于有限多个这些集合。于是除了有限项，截断值 $Y_n$ 就等于原来的倒正弦绝对值。再排除可数集合 $D$，即得绝对收敛。用 $[1/m,m]$ 覆盖正半轴完成证明；对 $\beta=1+1/j$ 取可数交，还可使同一满测度参数集同时适用于所有 $\beta>1$。

本讨论已经证明：确切的零分母集合、一般项与距离判别、两类普通发散范围、稠密的强发散例外，以及 $\beta>1$ 时几乎处处的绝对收敛。它没有给出每个指定 $\alpha,\beta$ 的完整分类，尤其不能把几乎处处结论用于断言 $\alpha=1$、某个给定整数或（34）中的参数收敛。

**方法总结**　小分母问题应先检查定义，再估计接近零点的速度。闭区间套能制造异常精确的共振；测度估计则控制通常参数的坏事件总量。“稠密例外”与“几乎处处成立”可以同时为真。

## 七题方法总结

B261 说明必须先审查命题的积分约定、定义域与两端行为；其反例和修订证明保留，但原题仍待核。B262 用权函数总变差获得参数一致界，B263 用原函数与 Cesàro 平均处理条件收敛，B264 用单侧斜率换取峰高所需的面积。B265 以同号波段和离散抵消证明完整临界线；B266 用二阶估计与差分降阶给出明确充分范围，并证明全部题设参数下均非绝对收敛；B267 则把问题转化为小分母距离，兼顾确定判别、例外构造与几乎处处结论。

本批收录 **B261—B267 七个原题位置**，**B262—B267 六题完成**（末两题完成原题要求的开放讨论，并非全部参数分类），**B261 暂跳过、待核题意**。两册累计 **262 道已作答、5 道暂跳过**，其中上册 **175** 道、下册 **87** 道。待核为 **B116、B148、B180、B247、B261**。第十章当前 **12 道已作答、1 道暂跳过**，收录至 10.1.B 第 13 题。

下一题为 **B268＝10.1.B 第 14 题**，见[原题 PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)，包括端点为零的积分不等式及向开区间内连续可导函数类的推广。

[上一批 B254—B260](/problems/5ff5a4cc0558cb29daadc77e/) · [第十章索引](/problems/collections/lou-analysis/chapters/10/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)
