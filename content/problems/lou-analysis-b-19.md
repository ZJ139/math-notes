---
title: "楼红卫《数学分析》B 组习题解答（十九）：6.2.B 第 3—6 题与 6.3.B 第 1—3 题"
description: "B127—B133：高斯尾估计、严格缩距迭代、无界轨道反例、有限维不动点、幂平均级数、凸函数可微性与闭凸集投影。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "6.2.B", "6.3.B", "函数迭代", "幂平均", "凸函数", "投影", "B127-B133"]
created_at: "2026-11-06"
updated_at: "2026-11-06"
---

本批接续 6.2.B 第 2 题，按原书顺序连续完成 **B127—B133**：6.2.B 第 3—6 题、6.3.B 第 1—3 题。七题均无星号；跨节时跳过 A 组，保持 B 组原有顺序。

题干、指数、导数条件、参数范围及量词已逐题对照仓库原题 PDF 第 33—34 页的文字与渲染图像核实。此前 B116 继续暂跳过，不补解、不重编号。本批完成后累计完成 **132 道**，另有一道暂跳过；第六章已完成十六道。

[上册资料页](/problems/41e85e430c9d7f84a0863658/) · [原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33) · [第 34 页](/files/problems/楼分析习题-v1.pdf#page=34)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [第六章索引](/problems/collections/lou-analysis/chapters/6/) · [上一批 B120—B126](/problems/e88bdfb19174ef4219a86336/) · [下一批 B134—B140](/problems/b1e99d01d263faff6fa790af/)

## 题号导航

- [问题 B127：高斯加权导数与零边界条件（6.2.B-3）](#问题-b127)
- [问题 B128：有界严格缩距迭代（6.2.B-4）](#问题-b128)
- [问题 B129：去掉有界性后的发散反例（6.2.B-5）](#问题-b129)
- [问题 B130：有限维严格缩距映射的不动点（6.2.B-6）](#问题-b130)
- [问题 B131：幂平均级数与加权求和（6.3.B-1）](#问题-b131)
- [问题 B132：凸函数由偏导数推出可微（6.3.B-2）](#问题-b132)
- [问题 B133：闭凸集的最近点与变分不等式（6.3.B-3）](#问题-b133)
- [七题方法总结](#七题方法总结)

## 问题 B127

**原题号：** 习题 6.2.B 第 3 题。[原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33)

**题目：** 设 $f$ 在 $[1,+\infty)$ 上连续，在 $(1,+\infty)$ 上可导，且 $e^{x^2}f'(x)$ 在 $(1,+\infty)$ 上有界，则在什么条件下可得 $xe^{x^2}f(x)$ 在 $[1,+\infty)$ 上有界？

**解：** 所求条件恰为

$$
\lim_{x\to+\infty}f(x)=0.
$$

更准确地说，原假设已经保证 $f$ 在正无穷处有有限极限；上述条件要求该极限为零。

取 $M\ge0$ 使得 $|f'(t)|\le Me^{-t^2}$，$t>1$。对 $1\le x<y$，有

$$
|f(y)-f(x)|\le M\int_x^y e^{-t^2}\,dt.
$$

说明这一估计的依据：令 $A(t)=\int_1^t e^{-s^2}\,ds$，则 $(f-MA)'\le0$、$(f+MA)'\ge0$。在 $[x,y]$ 上用 Lagrange 中值定理得到两个单调性不等式，合并即得所求估计。即使 $x=1$，也只使用端点连续、内部可导；没有假定 $f'$ 连续或直接对 $f'$ 使用 Newton–Leibniz 公式。

因为 $t\ge x\ge1$，

$$
\int_x^{+\infty}e^{-t^2}\,dt
\le\frac1x\int_x^{+\infty}te^{-t^2}\,dt
=\frac{e^{-x^2}}{2x}.
$$

因而对任意 $y>x\ge1$，

$$
|f(y)-f(x)|\le\frac{M e^{-x^2}}{2x}\longrightarrow0
\qquad(x\to+\infty).
$$

由无穷远处的 Cauchy 准则，存在有限极限 $L=\lim_{x\to+\infty}f(x)$。在有限区间估计中令 $y\to+\infty$，得到

$$
|f(x)-L|\le M\int_x^{+\infty}e^{-t^2}\,dt
\le\frac{M e^{-x^2}}{2x},\qquad x\ge1.
$$

若 $L=0$，便有 $|xe^{x^2}f(x)|\le M/2$，故目标函数有界。反过来，若存在 $C\ge0$ 使 $|xe^{x^2}f(x)|\le C$，则

$$
|f(x)|\le C\frac{e^{-x^2}}x\longrightarrow0,
$$

因此 $L=0$，必要性也成立。非零常值函数满足原导数条件，却不满足目标有界性，说明零极限不能省去。$M=0$ 时 $f$ 为常数，结论仍然一致。

若将题中的 $f$ 允许为复值函数，上述差值估计也成立：对固定的 $x<y$，将 $f$ 投影到 $f(y)-f(x)$ 的单位方向，所得实函数的导数绝对值不超过 $|f'|$，再用同一实函数论证；差值为零时无需投影。

**方法总结：** 导数有可积的控制函数时，先用中值定理比较得到差值估计，再证明无穷远极限存在。导数只决定函数到一个加法常数；目标衰减条件的作用正是消去这个常数。尾积分中的因子 $t/x$ 给出额外的 $1/x$，不能只估计成 $O(e^{-x^2})$。

[返回题号导航](#题号导航)

## 问题 B128

**原题号：** 习题 6.2.B 第 4 题。[原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33)

**题目：** 设实函数 $f$ 在 $\mathbb R$ 上有界、可导且 $|f'(x)|<1$（$\forall x\in\mathbb R$），又设 $x_0\in\mathbb R$，$x_{n+1}=f(x_n)$（$n\ge0$），证明 $\{x_n\}$ 收敛。

**证明：** 取 $R>0$ 使 $|f(x)|<R$ 对所有 $x$ 成立。函数 $g(x)=f(x)-x$ 连续，且

$$
g(-R)>0,\qquad g(R)<0.
$$

由介值定理，存在 $p\in(-R,R)$ 使 $f(p)=p$。对任意 $u\ne v$，在连接二者的闭区间上使用 Lagrange 中值定理，得到

$$
|f(u)-f(v)|=|f'(\xi)|\,|u-v|<|u-v|.
$$

因此不可能有两个不同的不动点，否则 $|p-q|=|f(p)-f(q)|<|p-q|$。

令 $d_n=|x_n-p|$。若某项 $d_n=0$，则其后各项均为 $p$，结论成立。否则 $d_{n+1}<d_n$，所以 $d_n\downarrow d\ge0$。又因 $x_n\in(-R,R)$（$n\ge1$），存在子列 $x_{n_j}\to q\in[-R,R]$。由连续性，

$$
|q-p|=\lim_{j\to\infty}d_{n_j}=d,
\qquad
|f(q)-p|=\lim_{j\to\infty}d_{n_j+1}=d.
$$

若 $d>0$，则 $q\ne p$，严格缩距性质给出

$$
d=|f(q)-f(p)|<|q-p|=d,
$$

矛盾。故 $d=0$，即 $x_n\to p$。极限是唯一不动点，与初值无关。

这里没有使用 $\sup_{x\in\mathbb R}|f'(x)|<1$；题设不保证这一一致估计，也不保证 $f'$ 连续。有限维有界序列的子列紧致性足以将点态的严格缩距变为收敛结论。

**方法总结：** 先用介值定理找不动点，再考察迭代点到不动点的距离。距离单调只能保证它有极限，不能直接保证该极限为零；必须把聚点代入严格缩距不等式，排除正的极限距离。

[返回题号导航](#题号导航)

## 问题 B129

**原题号：** 习题 6.2.B 第 5 题。[原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33)

**题目：** 设实函数 $f$ 在 $\mathbb R$ 上可导且 $|f'(x)|<1$（$\forall x\in\mathbb R$），又设 $x_0\in\mathbb R$，$x_{n+1}=f(x_n)$（$n\ge0$），证明 $\{x_n\}$ 收敛或举例说明 $\{x_n\}$ 可能发散。

**解：** 去掉 $f$ 有界这一条件后，迭代可能发散。取

$$
f(x)=x+\frac\pi2-\arctan x,\qquad x\in\mathbb R.
$$

它在实轴上光滑，且

$$
f'(x)=1-\frac1{1+x^2}=\frac{x^2}{1+x^2},
\qquad 0\le f'(x)<1.
$$

由于 $\arctan x<\pi/2$ 对每个有限实数 $x$ 都成立，任意初值产生的迭代都满足

$$
x_{n+1}-x_n=\frac\pi2-\arctan x_n>0.
$$

于是 $x_n$ 严格递增。若它有上界，则收敛于某个有限实数 $L$，连续性将给出

$$
L=f(L)=L+\frac\pi2-\arctan L,
$$

即 $\arctan L=\pi/2$，不可能。因此 $x_n$ 无上界，由单调性可知

$$
x_n\longrightarrow+\infty.
$$

此反例对每个 $x_0\in\mathbb R$ 都成立，不仅适用于某个特殊初值。其导数上确界为 $1$，且没有不动点。

**补充辨析：** 在本题的一维条件下，只要 $f$ 有不动点 $p$，迭代仍然收敛于 $p$：中值定理给出 $|x_{n+1}-p|\le|x_n-p|$，故轨道自动有界，之后直接使用 B128 的聚点论证。因此上一题的全局有界性是一种保证不动点存在的充分条件；这里的障碍可以表现为不动点根本不存在。

**方法总结：** 构造“恒等映射加一个处处为正、逐渐趋零的位移”，既能使导数绝对值始终小于 $1$，又能让轨道不断向右逃逸。相邻项差趋零不等于序列收敛，严格缩距也不等于存在全局统一的压缩系数。

[返回题号导航](#题号导航)

## 问题 B130

**原题号：** 习题 6.2.B 第 6 题。[原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33)

**题目：** 设 $F:\mathbb R^n\to\mathbb R^n$ 是可微的有界函数，$\|F_x(x)\|<1$（$\forall x\in\mathbb R^n$）。任取 $x_0\in\mathbb R^n$，令 $x_{k+1}=F(x_k)$（$k\ge0$），证明 $\{x_k\}$ 收敛。

这里 $F_x(x)=DF(x)$ 是导数矩阵，$|\cdot|$ 表示欧氏范数，$\|\cdot\|$ 表示相应的算子范数。题设为处处可微，不另加导数连续的假设。

**证明：** 先证对任意 $u\ne v$，

$$
|F(v)-F(u)|<|v-u|.
$$

若 $F(v)=F(u)$，结论显然。否则取单位向量

$$
e=\frac{F(v)-F(u)}{|F(v)-F(u)|},
\qquad
\varphi(t)=\langle e,F(u+t(v-u))\rangle,\quad 0\le t\le1.
$$

$F$ 可微从而连续，故实函数 $\varphi$ 在 $[0,1]$ 上连续，在内部可导。由链式法则和实函数中值定理，存在 $\theta\in(0,1)$ 使

$$
\begin{aligned}
|F(v)-F(u)|
&=\varphi(1)-\varphi(0)=\varphi'(\theta)\\
&=\langle e,DF(u+\theta(v-u))(v-u)\rangle\\
&\le\|DF(u+\theta(v-u))\|\,|v-u|<|v-u|.
\end{aligned}
$$

此处对标量投影应用中值定理，并未使用一般不成立的向量值中值等式。

由 $F$ 有界，可取闭球 $K=\{x:|x|\le R\}$ 使 $F(\mathbb R^n)\subset K$，于是 $F(K)\subset K$。在紧集 $K$ 上，连续函数

$$
h(x)=|F(x)-x|
$$

取得最小值，设最小值点为 $p$。若 $F(p)\ne p$，则 $F(p)\in K$，且严格缩距给出

$$
h(F(p))=|F(F(p))-F(p)|<|F(p)-p|=h(p),
$$

与最小性矛盾。因此 $F(p)=p$。若 $q$ 也是不动点且 $q\ne p$，则 $|q-p|=|F(q)-F(p)|<|q-p|$，矛盾，所以不动点唯一。

令 $d_k=|x_k-p|$。从 $k=1$ 起 $x_k\in K$；若某项等于 $p$，后续恒等于 $p$，否则 $d_{k+1}<d_k$。总有 $d_k\downarrow d\ge0$。由 $K$ 紧，取子列 $x_{k_j}\to q\in K$。连续性给出

$$
|q-p|=d,\qquad |F(q)-p|=d.
$$

若 $d>0$，则 $q\ne p$，从而 $d=|F(q)-F(p)|<|q-p|=d$，矛盾。故 $d=0$，即 $x_k\to p$。

证明同时覆盖任意维数 $n\ge1$、任意初值及轨道提前到达不动点的情形。闭球紧致是有限维性质；不能不加条件地将上述最小值与聚点论证搬到一般无限维空间。

**方法总结：** 先将向量差投影到自身方向，用实函数中值定理获得严格缩距；再最小化位移 $|F(x)-x|$ 构造不动点。这个证明只依靠紧致性与缩距性质，不需要预先得到一致压缩系数，也不需要调用更强的不动点定理。

[返回题号导航](#题号导航)

## 问题 B131

**原题号：** 习题 6.3.B 第 1 题。[原题 PDF 第 33 页](/files/problems/楼分析习题-v1.pdf#page=33)

**题目：** 设 $\alpha<1$，且正项级数 $\sum_{n=1}^{\infty}a_n$ 收敛，证明 $\sum_{n=1}^{\infty}M_\alpha(a_1,a_2,\ldots,a_n)$ 收敛。

**记号说明：** 题册在此保留 $M_\alpha$ 记号，未展开定义。下文按幂平均的通常记号明确写为

$$
M_\alpha(a_1,\ldots,a_n)=
\begin{cases}
\left(\dfrac1n\displaystyle\sum_{k=1}^n a_k^\alpha\right)^{1/\alpha},&\alpha\ne0,\\[6pt]
\left(\displaystyle\prod_{k=1}^n a_k\right)^{1/n},&\alpha=0.
\end{cases}
$$

原题的正项条件即 $a_k>0$，保证负指数、对数和几何平均均有定义。

**证明：** 先设 $0<\alpha<1$，并令

$$
\beta=\frac{1-\alpha}{2\alpha}>0,
\qquad C_\alpha=2^{(1-\alpha)/\alpha}.
$$

以共轭指数 $1/\alpha$ 与 $1/(1-\alpha)$ 对有限和使用 Hölder 不等式，得

$$
\begin{aligned}
\sum_{k=1}^n a_k^\alpha
&=\sum_{k=1}^n(k^\beta a_k)^\alpha k^{-\alpha\beta}\\
&\le\left(\sum_{k=1}^n k^\beta a_k\right)^\alpha
\left(\sum_{k=1}^n k^{-\alpha\beta/(1-\alpha)}\right)^{1-\alpha}\\
&=\left(\sum_{k=1}^n k^\beta a_k\right)^\alpha
\left(\sum_{k=1}^n k^{-1/2}\right)^{1-\alpha}.
\end{aligned}
$$

由于

$$
\sum_{k=1}^n k^{-1/2}
\le1+\int_1^n t^{-1/2}\,dt
=2\sqrt n-1\le2\sqrt n,
$$

将前一不等式取 $1/\alpha$ 次幂并乘以 $n^{-1/\alpha}$，得到

$$
M_\alpha(a_1,\ldots,a_n)
\le C_\alpha n^{-1-\beta}\sum_{k=1}^n k^\beta a_k.
$$

这里指数的恒等式为 $-1/\alpha+(1-\alpha)/(2\alpha)=-1-\beta$。任取正整数 $N$，只对有限双重和交换顺序，得到

$$
\begin{aligned}
\sum_{n=1}^N M_\alpha(a_1,\ldots,a_n)
&\le C_\alpha\sum_{n=1}^N n^{-1-\beta}\sum_{k=1}^n k^\beta a_k\\
&=C_\alpha\sum_{k=1}^N k^\beta a_k\sum_{n=k}^N n^{-1-\beta}.
\end{aligned}
$$

因 $\beta>0$，

$$
\begin{aligned}
\sum_{n=k}^N n^{-1-\beta}
&\le k^{-1-\beta}+\int_k^{+\infty}t^{-1-\beta}\,dt\\
&\le\left(1+\frac1\beta\right)k^{-\beta}.
\end{aligned}
$$

故

$$
\sum_{n=1}^N M_\alpha(a_1,\ldots,a_n)
\le C_\alpha\left(1+\frac1\beta\right)\sum_{k=1}^N a_k
\le C_\alpha\left(1+\frac1\beta\right)\sum_{k=1}^{\infty}a_k<+\infty.
$$

左侧随 $N$ 单调增加且有与 $N$ 无关的上界，所以原级数收敛。这里给出的常数不追求最优，但已完整证明所需结论。

再设 $\alpha\le0$。记 $b_k=\sqrt{a_k}>0$，$A_n=n^{-1}\sum_{k=1}^n b_k$。当 $\alpha<0$ 时，函数 $t\mapsto t^{2\alpha}$ 在 $(0,+\infty)$ 上凸，由 Jensen 不等式，

$$
\frac1n\sum_{k=1}^n a_k^\alpha
=\frac1n\sum_{k=1}^n b_k^{2\alpha}
\ge A_n^{2\alpha}.
$$

由于 $1/\alpha<0$，取该次幂时不等号反向，因而

$$
M_\alpha(a_1,\ldots,a_n)\le A_n^2
=M_{1/2}(a_1,\ldots,a_n).
$$

当 $\alpha=0$ 时，对正数 $b_1,\ldots,b_n$ 使用算术—几何平均不等式，仍有

$$
M_0(a_1,\ldots,a_n)
=\left(\prod_{k=1}^n b_k\right)^{2/n}
\le A_n^2=M_{1/2}(a_1,\ldots,a_n).
$$

已证明的正参数情形适用于 $1/2$，故由比较判别法，所有 $\alpha\le0$ 也成立。由此覆盖全部实参数 $\alpha<1$。

严格条件 $\alpha<1$ 不宜改为 $\alpha\le1$：例如 $a_n=2^{-n}$ 时 $\sum a_n$ 收敛，但 $M_1(a_1,\ldots,a_n)\ge a_1/n=1/(2n)$，相应级数发散。

**方法总结：** 对前缀平均形成的级数，单纯证明平均趋零远远不够。通过加权 Hölder 将平均控制为三角形求和核，再用有限换序让尾和抵消权重，可以得到总和估计。非正参数借助凸性与几何平均归约到一个正参数，取负次幂时必须反向不等号。

[返回题号导航](#题号导航)

## 问题 B132

**原题号：** 习题 6.3.B 第 2 题。[原题 PDF 第 34 页](/files/problems/楼分析习题-v1.pdf#page=34)

**题目：** 设凸区域 $\Omega$ 内的凸函数 $f$ 在点 $x_0$ 的偏导数都存在，证明 $f$ 在点 $x_0$ 可微。

这里“区域”按通常含义为开集，$x_0\in\Omega$ 是内点；偏导数存在指各偏导数为有限实数。可微指存在通常的全微分。

**证明：** 设

$$
a_i=\frac{\partial f}{\partial x_i}(x_0),\quad 1\le i\le n,
\qquad
g(h)=f(x_0+h)-f(x_0)-\sum_{i=1}^n a_i h_i.
$$

$g$ 定义在凸开集 $\Omega-x_0$ 上，仍为凸函数，且 $g(0)=0$。由偏导数定义，对每个坐标单位向量 $e_i$，

$$
g(te_i)=o(|t|),\qquad t\to0.
$$

下面由这些坐标方向估计推出全方向的一致估计。给定 $\varepsilon>0$，因坐标方向只有有限个，且 $x_0$ 是内点，可取同一个 $\delta>0$，使 $|t|<\delta$ 时 $te_i\in\Omega-x_0$，并且

$$
|g(te_i)|\le\frac{\varepsilon}{\sqrt n}|t|,
\qquad 1\le i\le n.
$$

对任意 $|h|<\delta/n$，所有 $nh_i e_i$ 均在上述范围内，且

$$
h=\frac1n\sum_{i=1}^n nh_i e_i.
$$

由凸性及 Cauchy–Schwarz 不等式，

$$
\begin{aligned}
g(h)&\le\frac1n\sum_{i=1}^n g(nh_i e_i)\\
&\le\frac{\varepsilon}{\sqrt n}\sum_{i=1}^n|h_i|
\le\varepsilon|h|.
\end{aligned}
$$

对 $-h$ 同理有 $g(-h)\le\varepsilon|h|$。又由 $0=(h+(-h))/2$ 及凸性，

$$
0=g(0)\le\frac{g(h)+g(-h)}2,
$$

从而 $g(h)\ge-g(-h)\ge-\varepsilon|h|$。因此

$$
|g(h)|\le\varepsilon|h|,\qquad |h|<\delta/n.
$$

这正是 $g(h)=o(|h|)$，也就是

$$
f(x_0+h)=f(x_0)+\sum_{i=1}^n
\frac{\partial f}{\partial x_i}(x_0)h_i+o(|h|).
$$

故 $f$ 在 $x_0$ 可微，其微分由上述偏导数组成。论证没有假定邻近点的偏导数存在或连续，也没有预先使用 $f$ 在 $x_0$ 的连续性；连续性随最后的可微展开一并得到。

**方法总结：** 先减去候选切平面，使各坐标方向的线性部分消失。任意小向量可写成有限个坐标向量的凸组合，凸性给出上界；再用 $h$ 与 $-h$ 的中点关系取得下界。这将有限方向的 $o(|t|)$ 控制提升为全方向的 $o(|h|)$ 控制。

[返回题号导航](#题号导航)

## 问题 B133

**原题号：** 习题 6.3.B 第 3 题。[原题 PDF 第 34 页](/files/problems/楼分析习题-v1.pdf#page=34)

**题目：** 设 $E\subset\mathbb R^n$ 为非空凸闭集，$x_0\notin E$。证明存在唯一的 $x\in E$ 使得

$$
|x-x_0|=\inf_{y\in E}|y-x_0|
$$

（如题图 6.2 所示）。进一步，对任何 $y\in E$，$[0,1]$ 上的函数

$$
F(\alpha)=|x+\alpha(y-x)-x_0|^2
$$

在点 $0$ 取到最小值，以此证明 $x$ 是如下不等式的唯一解：

$$
\langle x_0-x,y-x\rangle\le0,\qquad\forall y\in E.
$$

**条件说明：** 最后“唯一解”的范围承接前文，应明确为 $x\in E$。若允许 $x\in\mathbb R^n$ 任意取值，则 $x=x_0$ 也满足全部不等式，而 $x_0\notin E$；因此不带可行域的唯一性陈述不成立。下面证明在 $E$ 中的准确结论。题册未附题图 6.2，证明不依赖该图。

**证明：** 记 $d=\inf_{y\in E}|y-x_0|$。由于 $E$ 非空，$d$ 有限；由于 $E$ 闭且 $x_0\notin E$，存在 $r>0$ 使开球 $B(x_0,r)$ 与 $E$ 不交，故 $d\ge r>0$。

按下确界定义，选取 $z_k\in E$ 使

$$
d\le|z_k-x_0|<d+\frac1k.
$$

此点列有界，故在有限维空间中有收敛子列 $z_{k_j}\to x$。闭性给出 $x\in E$，范数连续性给出 $|x-x_0|=d$，从而最近点存在。这里不要求整个 $E$ 有界，只需取到一个有界的极小化序列。

若 $x,z\in E$ 都是最近点，则凸性保证 $(x+z)/2\in E$。由平行四边形恒等式，

$$
\begin{aligned}
\left|\frac{x+z}2-x_0\right|^2
&=\frac{|x-x_0|^2+|z-x_0|^2}{2}-\frac{|x-z|^2}{4}\\
&=d^2-\frac{|x-z|^2}{4}.
\end{aligned}
$$

左端不小于 $d^2$，故 $|x-z|=0$，即 $x=z$。最近点唯一。

现固定任意 $y\in E$。对 $0\le\alpha\le1$，凸性给出 $x+\alpha(y-x)\in E$，所以由最近点性质，

$$
F(\alpha)=|x+\alpha(y-x)-x_0|^2\ge d^2=F(0).
$$

因此 $F$ 在左端点 $0$ 取到最小值。应使用右导数非负，而非误写为导数等于零。直接展开得

$$
\begin{aligned}
F(\alpha)
&=|x-x_0|^2+2\alpha\langle x-x_0,y-x\rangle
+\alpha^2|y-x|^2,\\
F'_+(0)&=2\langle x-x_0,y-x\rangle\ge0.
\end{aligned}
$$

这就证明 $\langle x_0-x,y-x\rangle\le0$ 对所有 $y\in E$ 成立。

反过来，若 $z\in E$ 满足

$$
\langle x_0-z,y-z\rangle\le0,\qquad\forall y\in E,
$$

则对任意 $y\in E$，

$$
\begin{aligned}
|y-x_0|^2
&=|z-x_0|^2+2\langle z-x_0,y-z\rangle+|y-z|^2\\
&\ge|z-x_0|^2+|y-z|^2
\ge|z-x_0|^2.
\end{aligned}
$$

故 $z$ 也是最近点，只能等于已证明唯一的 $x$。由此得到等价刻画：

$$
x\in E\text{ 是 }x_0\text{ 的最近点}
\quad\Longleftrightarrow\quad
x\in E,\quad
\langle x_0-x,y-x\rangle\le0\quad(\forall y\in E).
$$

单点集、无界凸闭集以及空内部的凸闭集均包含在证明中。若进一步允许 $x_0\in E$，则唯一最近点为 $x_0$，同一变分不等式仍成立。

**方法总结：** 最近点存在性来自极小化序列的有界性与集合闭性；唯一性来自中点凸性与距离平方的严格凸性。沿可行线段取单侧导数，将最小化问题转化为内积不等式；反向的平方展开则同时恢复最小性和唯一性。变量的可行域不可省略。

[返回题号导航](#题号导航)

## 七题方法总结

| 题号 | 核心方法 | 条件与易错点 |
| --- | --- | --- |
| B127 | 中值定理比较；高斯尾积分 | 加权导数有界自动给出有限极限，目标有界性恰需该极限为零。 |
| B128 | 介值定理；到不动点的距离与聚点 | 点态导数小于 $1$ 不等于存在统一压缩系数。 |
| B129 | 恒等映射加正位移；单调发散 | 即使处处严格缩距，也可能没有不动点并逃向无穷远。 |
| B130 | 标量投影；最小位移；有限维紧致性 | 不使用向量值中值等式，不补加导数连续。 |
| B131 | 加权 Hölder；有限换序；均值比较 | 覆盖全部 $\alpha<1$；负次幂反向不等号，$\alpha=0$ 单独处理。 |
| B132 | 减切平面；坐标凸组合与对称下界 | 有限个坐标估计需选统一邻域，得到全方向的小量控制。 |
| B133 | 极小化序列；中点恒等式；变分不等式 | 最小值在端点时仅有右导数非负；唯一解必须限制在 $E$ 中。 |

[上一批：B120—B126](/problems/e88bdfb19174ef4219a86336/) · [下一批：B134—B140](/problems/b1e99d01d263faff6fa790af/) · [B 组章节总目录](/problems/collections/lou-analysis/) · [第六章索引](/problems/collections/lou-analysis/chapters/6/)

本批完成 B127—B133 七题，累计完成 132 题，B116 仍暂跳过。[第二十批 B134—B140](/problems/b1e99d01d263faff6fa790af/)已接续完成习题 6.3.B 第 4—10 题；全局最新进度见 [B 组总目录](/problems/collections/lou-analysis/)。

**资料来源：**楼红卫《数学分析》上册（2022），本站仓库《楼分析习题-v1.pdf》第 33—34 页。原题直接依据 PDF 核对；记号解释、证明、反例、条件辨析与方法总结为本页整理。
