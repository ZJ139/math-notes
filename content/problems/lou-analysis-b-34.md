---
title: "楼红卫《数学分析》B 组习题解答（三十四）：解析延拓、Cauchy 乘积与 Tauber 定理"
description: "B233—B239：ζ 函数的实解析性、边界本性奇点与 Taylor 系数、实解析函数的复延拓、Borel 型光滑函数构造、对数积分、级数 Cauchy 乘积的完整分类，以及小 o Tauber 定理的两个方向。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "实解析", "Borel定理", "Cauchy乘积", "Tauber定理", "B233-B239"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

本批承接第三十三批 B226—B232，按照《楼分析习题-v2.pdf》原题顺序，完整处理 **B233—B239**：**9.3.B 第 4—7 题**以及 **9.4.B 第 1—3 题**，七题均无星号。原题分别位于 PDF 实际第 **20、21** 页（印刷第 **18、19** 页）。B238 的“各种收敛情形”按两因子的三类敛散状态逐一作可行性与不可能性判断；B239 的两个小问均保留“原级数有 Abel 和”这一共同前提。

本批完成后，两册累计由 229 题增加至 **236 道已作答**，其中上册 **175 道**、下册 **61 道**，另有 **B116、B148、B180** 三道继续待核，不计入完成数。第九章完成 **20** 题，涵盖 9.1.B 第 1—8 题、9.2.B 第 1—2 题、9.3.B 第 1—7 题、9.4.B 第 1—3 题。

[下册资料页](/problems/149ff60b32b01ff69feab8a4/) · [原题 PDF 第 20 页](/files/problems/楼分析习题-v2.pdf#page=20) · [第 21 页](/files/problems/楼分析习题-v2.pdf#page=21)

**批次导航：** [上一批 B226—B232](/problems/41a8fc025daa4bef6a32b3d1/) · [B 组总目录](/problems/collections/lou-analysis/) · [第九章索引](/problems/collections/lou-analysis/chapters/9/)

## 题号导航

- [问题 B233：Riemann ζ 函数的实解析性（9.3.B-4）](#问题-b233)
- [问题 B234：本性奇点与边界 Maclaurin 级数（9.3.B-5）](#问题-b234)
- [问题 B235：实解析函数的复解析延拓（9.3.B-6）](#问题-b235)
- [问题 B236：任意指定 Taylor 数据的光滑函数（9.3.B-7）](#问题-b236)
- [问题 B237：对数积分（9.4.B-1）](#问题-b237)
- [问题 B238：Cauchy 乘积在全部敛散情形下的分类（9.4.B-2）](#问题-b238)
- [问题 B239：小 o Tauber 定理（9.4.B-3）](#问题-b239)
- [七题方法总结](#七题方法总结)

## 问题 B233

**原题号：** 习题 9.3.B 第 4 题。[原题 PDF 第 20 页（印刷第 18 页）](/files/problems/楼分析习题-v2.pdf#page=20)

**题目：** 对于 Riemann $\zeta$ 函数

$$
\zeta(x)=\sum_{n=1}^{\infty}\frac{1}{n^x},
$$

证明：$\zeta$ 在 $(1,+\infty)$ 上实解析。

**思路来源：** 要证明实解析性，不能只证明各阶导数存在，而应在每个 $x_0>1$ 附近构造一个真正收敛且等于原函数的幂级数。把 $n^{-x}$ 写成以 $\log n$ 为系数的指数函数，双重级数的绝对收敛便归结为一个指数稍小的 $p$ 级数。

**证明：** 固定 $x_0>1$，记 $x=x_0+h$。对于每个正整数 $n$，

$$
\frac1{n^{x_0+h}}=
\frac1{n^{x_0}}e^{-h\log n}
=\frac1{n^{x_0}}\sum_{k=0}^{\infty}
\frac{(-\log n)^k}{k!}h^k.
$$

任取 $0<r<x_0-1$。当 $|h|\le r$ 时，所有项的绝对值之和满足

$$
\begin{aligned}
\sum_{n=1}^{\infty}\sum_{k=0}^{\infty}
\frac{(\log n)^k|h|^k}{k!n^{x_0}}
&\le\sum_{n=1}^{\infty}\frac{e^{r\log n}}{n^{x_0}}\\
&=\sum_{n=1}^{\infty}\frac1{n^{x_0-r}}<\infty,
\end{aligned}
$$

其中 $x_0-r>1$ 是最后一个级数收敛的关键。因此由绝对收敛的双级数交换定理，

$$
\begin{aligned}
\zeta(x_0+h)
&=\sum_{k=0}^{\infty}c_kh^k,\\
c_k&=\frac{(-1)^k}{k!}
\sum_{n=1}^{\infty}\frac{(\log n)^k}{n^{x_0}},
\qquad |h|<x_0-1.
\end{aligned}
$$

这给出了在 $x_0$ 处真正表示 $\zeta$ 的 Taylor 级数，故 $\zeta$ 在 $(1,+\infty)$ 上实解析。证毕。

**进一步确定半径：** 上述证明给出 Taylor 半径 $R\ge x_0-1$。另一方面，对 $x>1$，用积分比较可得

$$
\zeta(x)\ge\int_1^{\infty}t^{-x}\,dt=\frac1{x-1}
\xrightarrow[x\downarrow1]{}+\infty.
$$

若 $R>x_0-1$，则该 Taylor 级数在 $h=1-x_0$ 的某个邻域内连续且有限，与其在 $h>1-x_0$ 时等于 $\zeta(x_0+h)$、并趋于 $+\infty$ 矛盾。因此实际上 **$R=x_0-1$**。

**条件核查：** 双重级数换序必须先固定 $r<x_0-1$ 取得绝对收敛；不能仅由逐项存在所有阶导数推出解析性。$x=1$ 是定义式的发散边界，半径结论没有借用 $\zeta$ 的复解析延拓理论。

**方法总结：** 带参数的 Dirichlet 级数可以先对指数项作局部幂级数展开，再用可求和的大项统一控制其系数和余项。判断精确半径时，先证局部下界，再由最近的真实发散点给出上界。

## 问题 B234

**原题号：** 习题 9.3.B 第 5 题。[原题 PDF 第 20 页（印刷第 18 页）](/files/problems/楼分析习题-v2.pdf#page=20)

**题目：** 考察是否存在整数 $n\ge1$，使得

$$
(1-x)^n\sin\frac1{1-x}
$$

的 Maclaurin 展开式在点 $x=1$ 处收敛。

**思路来源：** 对实数 $x\uparrow1$，所给函数甚至趋于 $0$，不能凭实轴极限判定边界 Taylor 级数是否收敛。假定边界系数级数收敛，则其部分和有界；Abel 变换进一步强迫幂级数在趋向 $1$ 的非切向复路径上有界。而本性奇点沿这类路径呈指数爆炸，这是决定性的矛盾。

**证明：** 固定任意整数 $m\ge1$，定义

$$
F_m(z)=(1-z)^m\sin\frac1{1-z}.
$$

$F_m$ 在复单位圆盘 $|z|<1$ 内全纯，因而在那里等于其 Maclaurin 级数

$$
F_m(z)=\sum_{k=0}^{\infty}a_kz^k.
$$

假设该级数在 $z=1$ 处收敛，即 $\sum_{k=0}^{\infty}a_k$ 收敛。记 $S_N=\sum_{k=0}^{N}a_k$，则存在 $M>0$，使所有 $N$ 均满足 $|S_N|\le M$。对 $|z|<1$，有限 Abel 变换后令截断指标趋于无穷，可得

$$
F_m(z)=(1-z)\sum_{N=0}^{\infty}S_Nz^N.
$$

其理由是有限和恒等式

$$
\sum_{k=0}^{L}a_kz^k
=(1-z)\sum_{N=0}^{L-1}S_Nz^N+S_Lz^L,
$$

而 $S_Lz^L\to0$。故

$$
|F_m(z)|\le M\frac{|1-z|}{1-|z|}.
\qquad (234.1)
$$

现在取 $z_t=1-t-it$，其中 $0<t<1/2$。计算得

$$
|z_t|^2=1-2t+2t^2\le1-t,
$$

从而 $1-|z_t|\ge t/2$，且 $|1-z_t|=\sqrt2\,t$。据（234.1），

$$
|F_m(z_t)|\le2\sqrt2\,M.
\qquad (234.2)
$$

但另一方面，

$$
\frac1{1-z_t}=\frac{1-i}{2t},
$$

并且对任意实数 $u,v$，有

$$
|\sin(u+iv)|^2=\sin^2u+\sinh^2v
\ge\sinh^2v.
$$

因此

$$
|F_m(z_t)|
\ge(\sqrt2\,t)^m\sinh\frac1{2t}
\xrightarrow[t\downarrow0]{}+\infty,
$$

与（234.2）矛盾。故**不存在任何整数 $m\ge1$ 使该 Maclaurin 级数在 $x=1$ 收敛**。证毕。

**条件核查：** 这里的结论不是“函数在实轴端点不连续”：恰恰相反，$(1-x)^m\sin(1/(1-x))\to0$。幂级数的边界收敛与函数的实轴极限是不同问题。关键是收敛系数给出的 **Stolz 非切向区域有界性**；不能把有限阶因子 $(1-x)^m$ 当作消除了复平面本性奇点。

**方法总结：** 若假设 $\sum a_k$ 收敛，可先用 Abel 求和推出 $\sum a_kz^k=O(|1-z|/(1-|z|))$。沿非切向复路径考察函数的真实增长，是排除边界级数收敛的有效通法，往往无需计算任何 Taylor 系数渐近式。

## 问题 B235

**原题号：** 习题 9.3.B 第 6 题。[原题 PDF 第 20 页（印刷第 18 页）](/files/problems/楼分析习题-v2.pdf#page=20)

**题目：** 证明：$(a,b)$ 上的实解析函数是一个复区域 $D$ 上的复解析函数在 $(a,b)$ 上的限制。

**思路来源：** 实解析性为每个实点提供一个局部收敛 Taylor 级数；同一系数级数可直接作用于复变量。真正需要说明的是不同中心的局部定义能够相容。由于所有圆盘的圆心都在实轴上，两圆盘只要相交，其实轴截面也相交；在这一段实轴上二者都等于原函数，遂由复解析函数的恒等定理粘合。

**证明：** 设 $f:(a,b)\to\mathbb R$ 实解析。对每个 $t\in(a,b)$，存在 $r_t>0$，使 $(t-r_t,t+r_t)\subset(a,b)$ 且

$$
f(x)=\sum_{k=0}^{\infty}\frac{f^{(k)}(t)}{k!}(x-t)^k,
\qquad |x-t|<r_t.
$$

如有必要，可把原先的收敛半径缩小以保证区间仍落在 $(a,b)$。令

$$
D_t=\{z\in\mathbb C:|z-t|<r_t\},\qquad
F_t(z)=\sum_{k=0}^{\infty}\frac{f^{(k)}(t)}{k!}(z-t)^k.
$$

复幂级数在 $D_t$ 中全纯，并且 $F_t(x)=f(x)$ 对 $x\in D_t\cap\mathbb R$ 成立。

若 $D_s\cap D_t\ne\varnothing$，则两圆盘中心在实轴上，故 $|s-t|<r_s+r_t$。于是实区间 $(s-r_s,s+r_s)$ 与 $(t-r_t,t+r_t)$ 具有非空开交集。在这一交集上 $F_s=f=F_t$。由于两圆盘的交集是非空凸开集，复解析恒等定理给出

$$
F_s\equiv F_t\qquad\text{于 }D_s\cap D_t.
$$

现在设

$$
D=\bigcup_{t\in(a,b)}D_t.
$$

它是包含 $(a,b)$ 的开集；由于每个 $D_t$ 都与连通的 $(a,b)$ 相交，$D$ 也是连通的，即为复区域。按照

$$
F(z)=F_t(z)\quad(z\in D_t)
$$

定义 $F$。由前述相容性，$F$ 与所选择的 $t$ 无关。它在每点附近均等于一个全纯函数 $F_t$，故 $F$ 在 $D$ 上全纯，且 $F|_{(a,b)}=f$。证毕。

**条件核查：** 不需要假设所有 Taylor 级数有统一的正收敛半径。不能因为局部复展开存在就跳过重叠区域的相容性；也不能把不同中心的圆盘任意相交时的恒等定理当作显然，需要指出交集中含有实开区间。

**方法总结：** 实解析到复解析的延拓是“局部幂级数—交叠处恒等定理—粘合”的标准结构。该构造在一维实区间上尤为简洁，其几何关键是圆盘的实中心。

## 问题 B236

**原题号：** 习题 9.3.B 第 7 题。[原题 PDF 第 20 页（印刷第 18 页）](/files/problems/楼分析习题-v2.pdf#page=20)

**题目：** 设 $\varphi\in C_c^\infty(\mathbb R)$ 满足 $\operatorname{supp}\varphi\subset[-2,2]$ 以及 $\varphi|_{[-1,1]}=1$。对于任意实数列 $\{a_k\}_{k=0}^{\infty}$，定义

$$
f(x)=\sum_{n=0}^{\infty}\frac{a_n}{n!}\varphi(a_nx)x^n,
\qquad x\in\mathbb R.
$$

证明：$f\in C^\infty(\mathbb R)$，且 $f^{(n)}(0)=a_n$（$n\ge0$）。此结果表明任何幂级数都是某个函数的 Taylor 展开式。

**思路来源：** 系数 $a_n$ 可能增长得任意快，不能对原级数直接套普通幂级数判别法。题设把同一个 $a_n$ 放进截断函数 $\varphi(a_nx)$，使大系数对应更窄的支撑：当 $|a_n|>1$ 时，非零部分只出现在 $|x|\le2/|a_n|$。这恰好抵消高阶项中难以控制的系数。靠近 $0$ 时，每个固定项的截断恒为 $1$，所以保留预定的 Taylor 数据。

**证明：** 记

$$
f_n(x)=\frac{a_n}{n!}\varphi(a_nx)x^n.
$$

固定任意紧区间 $K=[-R,R]$，其中 $R\ge1$，以及任意整数 $k\ge0$。只需证明 $\sum_nf_n^{(k)}$ 在 $K$ 上一致收敛。对 $n\ge k+1$，由 Leibniz 公式，

$$
f_n^{(k)}(x)
=\frac{a_n}{n!}
\sum_{j=0}^{k}\binom{k}{j}
\frac{n!}{(n-j)!}x^{n-j}
 a_n^{k-j}\varphi^{(k-j)}(a_nx).
\qquad (236.1)
$$

各阶 $\varphi^{(l)}$ 均有界，且在 $[-2,2]$ 外为零。对于固定的 $k$，可取常数 $C_k>0$ 控制（236.1）中所有有限个二项式系数和各阶截断函数的上界。

当 $|a_n|\le1$ 时，利用 $|x|\le R$、$R\ge1$、$n!/(n-j)!\le n^j\le n^k$ 和 $|a_n|^{k-j+1}\le1$，有

$$
\sup_{x\in K}|f_n^{(k)}(x)|
\le C_k\frac{n^kR^n}{n!}.
\qquad (236.2)
$$

当 $|a_n|>1$ 时，如果（236.1）的某一项不为零，必有 $|a_nx|\le2$，即 $|x|\le2/|a_n|$。因此该项中包含的系数绝对值满足

$$
\begin{aligned}
|a_n|^{k-j+1}|x|^{n-j}
&\le2^{n-j}|a_n|^{k+1-n}\\
&\le2^n,
\end{aligned}
$$

最后一步使用了 $n\ge k+1$ 和 $|a_n|>1$。由此

$$
\sup_{x\in K}|f_n^{(k)}(x)|
\le C_k\frac{n^k2^n}{n!}.
\qquad (236.3)
$$

合并（236.2）、（236.3），设 $L=\max\{R,2\}$，对所有 $n\ge k+1$，

$$
\sup_{x\in K}|f_n^{(k)}(x)|
\le C_k\frac{n^kL^n}{n!}.
$$

右侧数项级数由比值判别法收敛，因为

$$
\frac{(n+1)^kL^{n+1}/(n+1)!}{n^kL^n/n!}
=\frac{L}{n+1}\left(1+\frac1n\right)^k\longrightarrow0.
$$

所以对每个固定 $k$，$\sum_nf_n^{(k)}$ 在每个紧区间上一致收敛。特别地，$k=0$ 时级数定义了连续函数；结合逐项求导定理并对 $k$ 归纳，得到 $f\in C^\infty(\mathbb R)$ 且

$$
f^{(k)}(x)=\sum_{n=0}^{\infty}f_n^{(k)}(x).
$$

最后固定 $k$。由于 $\varphi=1$ 于 $[-1,1]$，对任意固定的 $n$，函数 $\varphi(a_nx)$ 在 $x=0$ 的某个邻域中恒等于 $1$（$a_n=0$ 时同样成立）。于是 $f_n(x)$ 在零点附近等于 $a_nx^n/n!$，故

$$
f_n^{(k)}(0)=
\begin{cases}
a_k,&n=k,\\
0,&n\ne k.
\end{cases}
$$

由已证的逐项求导，$f^{(k)}(0)=a_k$。证毕。

**条件核查：** 不能要求 $\{a_n\}$ 有任何统一增长界；关键正是把系数大小分成 $|a_n|\le1$ 与 $|a_n|>1$ 两类。结论中的 Taylor 系数为 $a_n/n!$。若希望给定形式幂级数 $\sum c_nx^n$，应取 $a_n=n!c_n$。所得 Taylor 级数不必在任何非零点收敛，也不一定等于 $f$；**光滑不等于实解析**。

**方法总结：** 设计光滑函数时可令截断支撑随系数收缩，再以“局部一致收敛所有阶导数”完成严格拼接。这是 Borel 型定理的显式构造，特别适用于区分形式 Taylor 数据与解析函数。

## 问题 B237

**原题号：** 习题 9.4.B 第 1 题。[原题 PDF 第 21 页（印刷第 19 页）](/files/problems/楼分析习题-v2.pdf#page=21)

**题目：** 计算积分

$$
I=\int_0^1\frac{\ln(1+x)}{x}\,dx.
$$

**思路来源：** 被积函数中的 $\ln(1+x)$ 正是一个交错幂级数；先检验端点 $x=0$ 的可去奇性，再对交错展开进行可控的逐项积分。积分后出现平方倒数，可直接归结为交错 Basel 级数。

**解：** 因为 $\lim_{x\to0}\ln(1+x)/x=1$，令被积函数在 $x=0$ 取值 $1$，它即成为 $[0,1]$ 上的连续函数。对 $x\in[0,1]$，由交错级数估计，

$$
\ln(1+x)
=\sum_{n=1}^{N}\frac{(-1)^{n-1}}n x^n+R_N(x),
\qquad |R_N(x)|\le\frac{x^{N+1}}{N+1}.
$$

因而在 $x>0$ 时

$$
\left|\frac{R_N(x)}x\right|
\le\frac{x^N}{N+1}\le\frac1{N+1}.
$$

这给出了除以 $x$ 之后仍在整个 $[0,1]$ 上成立的一致余项控制。因此可逐项积分：

$$
\begin{aligned}
I
&=\lim_{N\to\infty}\sum_{n=1}^{N}
\frac{(-1)^{n-1}}n\int_0^1x^{n-1}\,dx\\
&=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^2}\\
&=\sum_{n=1}^{\infty}\frac1{n^2}
-2\sum_{n=1}^{\infty}\frac1{(2n)^2}\\
&=\frac12\sum_{n=1}^{\infty}\frac1{n^2}
=\boxed{\frac{\pi^2}{12}}.
\end{aligned}
$$

最后使用经典 Basel 恒等式 $\sum_{n=1}^{\infty}n^{-2}=\pi^2/6$；若需独立复核，可对 $(-\pi,\pi)$ 上的函数 $x$ 使用正弦 Fourier 级数及 Parseval 恒等式：其正弦系数为 $2(-1)^{n+1}/n$，从 $\pi^{-1}\int_{-\pi}^{\pi}x^2\,dx=\sum_{n\ge1}4/n^2$ 得到该恒等式。

**条件核查：** Maclaurin 展开在 $x=1$ 只是条件收敛，但余项估计在除以 $x$ 后仍足以保证积分交换。不能仅说“幂级数在 $|x|<1$ 收敛”就把交换直接推到闭区间端点。

**方法总结：** 含对数的积分往往先化为幂级数；关键不是形式展开，而是为积分运算建立在端点仍有效的一致余项估计。

## 问题 B238

**原题号：** 习题 9.4.B 第 2 题。[原题 PDF 第 21 页（印刷第 19 页）](/files/problems/楼分析习题-v2.pdf#page=21)

**题目：** 试讨论级数 $\sum_{n=0}^{\infty}a_n$ 和 $\sum_{n=0}^{\infty}b_n$ 在各种收敛情形下（绝对收敛、条件收敛、发散），它们的 Cauchy 乘积的收敛情况，并给出证明或反例。

**思路来源：** 不宜将“两个收敛级数的乘积等于乘积的和”当作定理直接使用：Cauchy 乘积需要额外条件。先以绝对可和与 Mertens 定理确定必然结论，再对其余组合给出可达到三种状态的例子。为避免遗漏，以下同时证明所有表格中声称可行的格子。

设

$$
c_n=\sum_{k=0}^{n}a_kb_{n-k},\qquad
A(z)=\sum_{n=0}^{\infty}a_nz^n,\quad
B(z)=\sum_{n=0}^{\infty}b_nz^n,
$$

其中生成函数在出现时均选用具有相应收敛圆盘的例子。记 **A** 为绝对收敛、**C** 为条件收敛、**D** 为发散。两因子交换对 Cauchy 乘积没有影响。

| $\sum a_n$ | $\sum b_n$ | Cauchy 乘积可能的状态 |
| --- | --- | --- |
| A | A | **仅 A** |
| A | C | **A、C**；不可能 D |
| A | D | **A、C、D** 均可能 |
| C | C | **A、C、D** 均可能 |
| C | D | **A、C、D** 均可能 |
| D | D | **A、C、D** 均可能 |

### （一）两个肯定性定理

如果两因子绝对收敛，则由有限求和及单调极限，

$$
\sum_{n=0}^{\infty}|c_n|
\le\sum_{n=0}^{\infty}\sum_{k=0}^{n}|a_k|\,|b_{n-k}|
=\left(\sum_{k=0}^{\infty}|a_k|\right)
\left(\sum_{j=0}^{\infty}|b_j|\right)<\infty.
$$

故 A+A 只能得到 A。

若 $\sum|a_n|<\infty$，而 $\sum b_n=B$ 收敛（不要求绝对收敛），则记 $S_j=\sum_{l=0}^j b_l$，并将 $S_j=0$ 规定于 $j<0$。$S_j$ 有界，且

$$
\sum_{n=0}^{N}c_n=
\sum_{k=0}^{N}a_kS_{N-k}.
$$

对每个固定 $k$，$S_{N-k}\to B$。由于 $|a_kS_{N-k}|\le M|a_k|$ 且 $\sum|a_k|<\infty$，先取固定的有限前段、再估计统一小的绝对尾段，即得

$$
\sum_{n=0}^{\infty}c_n
=B\sum_{k=0}^{\infty}a_k.
$$

这就是 Mertens 定理，说明 **A+C 的乘积必收敛**，但不保证绝对收敛。

### （二）A+C 可以得到 A 或 C

取 $u_n=(-1)^n/(n+1)$，则 $\sum u_n$ 条件收敛。若 $a_0=1$、其余 $a_n=0$，与 $u$ 的 Cauchy 乘积仍为 $u$，状态为 C。

若取 $a_0=a_1=1$、其余为零，则 $c_0=u_0=1$，且对 $n\ge1$，

$$
c_n=u_n+u_{n-1}
=(-1)^n\left(\frac1{n+1}-\frac1n\right).
$$

因此 $\sum|c_n|<\infty$，状态为 A。这里绝对可和的有限滤波器消去了交错级数的主要项。

### （三）A+D 可以得到 A、C、D

记 $e(z)=1-z$，即 $e=(1,-1,0,\ldots)$，它绝对可和。若 $b_n\equiv1$，则 $B(z)=1/(1-z)$，而 $e(z)B(z)=1$，乘积为 A。

再取 $b_n=1+(-1)^n/(n+1)$。因 $b_n\to1\ne0$，$\sum b_n$ 发散。但 $e*b$ 的系数为 $c_0=b_0=2$，以及

$$
c_n=b_n-b_{n-1}
=(-1)^n\left(\frac1{n+1}+\frac1n\right)
\qquad(n\ge1).
$$

$\sum c_n$ 的前 $N$ 项和等于 $b_N\to1$，故收敛；而 $\sum_{n\ge1}|c_n|$ 与调和级数同阶，故为 C。

最后，取 $a_0=1$、其余 $a_n=0$，$b_n\equiv1$，则 $c_n\equiv1$，为 D。

### （四）C+C 可以得到 C 或 D

先取 $a_n=b_n=u_n=(-1)^n/(n+1)$。记 $H_j=\sum_{l=1}^{j}1/l$，则

$$
\begin{aligned}
c_n
&=(-1)^n\sum_{k=0}^{n}
\frac1{(k+1)(n-k+1)}\\
&=(-1)^n\frac{2H_{n+1}}{n+2}.
\end{aligned}
$$

数列 $2H_{n+1}/(n+2)$ 趋于 $0$，且从某项起单调递减（事实上从首项起不增），因为

$$
\frac{H_{n+2}}{n+3}-\frac{H_{n+1}}{n+2}
=\frac{1-H_{n+1}}{(n+2)(n+3)}\le0.
$$

故由交错级数判别法，$\sum c_n$ 收敛；同时 $|c_n|\ge2/(n+2)$，绝对值级数发散，所以状态为 C。

若改取 $a_n=b_n=(-1)^n/\sqrt{n+1}$，两个因子仍条件收敛，但由

$$
(k+1)(n-k+1)\le\left(\frac{n+2}{2}\right)^2
$$

得到

$$
|c_n|=\sum_{k=0}^{n}
\frac1{\sqrt{(k+1)(n-k+1)}}
\ge\frac{2(n+1)}{n+2}\longrightarrow2.
$$

乘积的通项甚至不趋于零，故状态为 D。

### （五）C+C 还可以得到 A：实系数反例与证明

这格不能遗漏。构造两个**实系数**的条件收敛级数，其 Cauchy 乘积竟为常数 $1$。令

$$
U(z)=30+2\cos(\operatorname{Log}(1+z)),
\qquad V(z)=\frac1{U(z)},
\qquad |z|<1,
\qquad (238.1)
$$

其中 $\operatorname{Log}$ 是主值复对数。下面说明 $U,V$ 的 Maclaurin 系数级数都在 $z=1$ **条件收敛**。

使用如下可复用的引理：若 $G$ 是裂平面

$$
\Omega=\mathbb C\setminus(-\infty,-1]
$$

上的有界全纯函数，且在割线两侧具有有界的边界值 $G(-t\pm i0)$（$t>1$），那么 $G(z)=\sum_{n\ge0}g_nz^n$ 的系数级数 $\sum_{n\ge0}g_n$ 在 $z=1$ 收敛。

**引理证明：** 对 $n\ge1$，对 $G(z)/z^{n+1}$ 使用 Cauchy 积分公式，并把初始小圆变形为围绕 $(-\infty,-1]$ 的钥匙孔型围道。由于 $G$ 有界，靠近 $-1$ 的半径 $\varepsilon$ 小圆弧积分为 $O(\varepsilon)$；半径 $R$ 的外圆弧积分为 $O(R^{-n})$，两者在 $\varepsilon\downarrow0,R\to\infty$ 时均消失。因此存在有界函数 $\rho(t)$（由割线两侧边界值之差除以 $2\pi i$ 并取相应方向给出），使

$$
g_n=(-1)^nq_n,
\qquad q_n=\int_1^{\infty}\rho(t)t^{-n-1}\,dt.
\qquad (238.2)
$$

设 $|\rho(t)|\le M$。则

$$
|q_n|\le\frac Mn\longrightarrow0,
$$

而由被积核的单调性和三角不等式，

$$
\begin{aligned}
\sum_{n=1}^{\infty}|q_{n+1}-q_n|
&\le M\int_1^{\infty}
\sum_{n=1}^{\infty}\bigl(t^{-n-1}-t^{-n-2}\bigr)\,dt\\
&=M\int_1^{\infty}t^{-2}\,dt=M.
\end{aligned}
$$

故 $q_n\to0$ 且总变差有限。对 $\sum(-1)^nq_n$ 应用 Abel 分部求和（$(-1)^n$ 的部分和有界），可知它收敛。加上常数项 $g_0$，引理得证。

回到（238.1）。对 $z\in\Omega$，有 $|\operatorname{Im}\operatorname{Log}(1+z)|<\pi$，故

$$
|2\cos(\operatorname{Log}(1+z))|
\le2\cosh\pi<30.
$$

因此 $U$ 在 $\Omega$ 上有界且无零点，$V=1/U$ 也在此域上有界全纯；两者在割线两侧的边界值同样有界，满足引理条件。其在 $0$ 处 Taylor 系数均为实数，所以两组实数系数级数都在 $z=1$ 收敛。

然而，当 $r\uparrow1$ 时，

$$
U(-r)=30+2\cos(\log(1-r))
$$

在 $28$ 与 $32$ 之间振荡，没有极限；$V(-r)=1/U(-r)$ 同样没有极限。如果 $U$ 的 Taylor 系数绝对可和，则其幂级数在闭单位圆盘上一致收敛，特别应有 $U(-r)$ 的有限极限；矛盾。对 $V$ 同理。因此两因子都不是绝对收敛，而确为 C。由于 $U(z)V(z)\equiv1$，其 Cauchy 乘积的系数恰为 $(1,0,0,\ldots)$，故状态为 A。

此例也说明，不能把 C+C 的绝对收敛性不可能性当作默认定理。

### （六）C+D 可以得到 A、C、D

仍记

$$
U_0(z)=\sum_{n=0}^{\infty}\frac{(-1)^n}{n+1}z^n
=\frac{\log(1+z)}z,
$$

并令 $G(z)=(1-z)U_0(z)$。$G$ 的系数为 $g_0=1$ 及

$$
g_n=(-1)^n\left(\frac1{n+1}+\frac1n\right)
\quad(n\ge1).
$$

其部分和等于 $u_N=(-1)^N/(N+1)\to0$，但绝对值级数发散，故 $G$ 是 C。

若另一因子取 $B(z)=(1+z)/(1-z)=1+2z+2z^2+\cdots$，它为 D，而

$$
G(z)B(z)=(1+z)U_0(z)
$$

的系数 $n\ge1$ 时为 $(-1)^n(1/(n+1)-1/n)$，绝对可和，故 C+D 可以为 A。

若改取 $B(z)=1/(1-z)=\sum_{n\ge0}z^n$，仍为 D，则 $G(z)B(z)=U_0(z)$，故乘积可以为 C。

最后取 $A(z)=U_0(z)$、$B(z)=1/(1-z)$，则乘积的第 $n$ 个系数等于 $\sum_{k=0}^n(-1)^k/(k+1)\to\log2\ne0$，乘积级数发散，故也可为 D。

### （七）D+D 可以得到 A、C、D

令

$$
P(z)=30+2\cos(\operatorname{Log}(1-z)),
\qquad Q(z)=\frac1{P(z)},
\qquad |z|<1.
$$

由上面的模长估计，两函数在单位圆盘内全纯且 $P$ 无零点，Taylor 系数均为实数。沿实数 $r\uparrow1$，$P(r)=30+2\cos(\log(1-r))$ 无极限，$Q(r)=1/P(r)$ 亦无极限。若二者任一个在 $z=1$ 的系数级数收敛，由 Abel 定理，其函数在 $r\uparrow1$ 时应具有该级数和的极限，矛盾。所以这两组系数级数均为 D。但 $P(z)Q(z)\equiv1$，乘积为 A。

若保持第一个因子 $P(z)$，将第二个改为 $U_0(z)/P(z)$，则第二因子沿 $r\uparrow1$ 的极限不存在（因 $U_0(r)\to\log2>0$，而 $P(r)$ 持续振荡），所以它仍为 D；其与 $P$ 的乘积却是 $U_0$，为 C。

若取 $a_n=b_n=1$，两个因子都为 D，且 $c_n=n+1$，乘积为 D。于是全部三类均可实现。

**收敛时的和：** 若原来两级数均收敛，且其 Cauchy 乘积碰巧收敛，则必有

$$
\sum_{n=0}^{\infty}c_n
=\left(\sum_{n=0}^{\infty}a_n\right)
\left(\sum_{n=0}^{\infty}b_n\right).
$$

这是因为在 $0<r<1$ 时三个相应的幂级数绝对收敛且满足 $C(r)=A(r)B(r)$，令 $r\uparrow1$ 并分别应用 Abel 定理即可。但若一因子原级数发散，则不能套用这个乘法公式。

**条件核查：** 表格按实数项级数给出，特别说明 C+C→A 确实可能；不能只给复系数反例。Mertens 定理只保证 A+C 的普通收敛，不保证绝对收敛；不能未经证明把 C+C 的乘积必收敛视为定理。

**方法总结：** Cauchy 乘积问题先区分“绝对可和所保证的定理”与“条件收敛导致的反例”。构造例子时，有限差分 $(1-z)$ 与部分和算子 $(1-z)^{-1}$ 是最有效的基本模块；生成函数的零点、边界振荡及 Abel 定理可以进一步构造极端反例。

## 问题 B239

**原题号：** 习题 9.4.B 第 3 题（小 $o$ Tauber 定理）。[原题 PDF 第 21 页（印刷第 19 页）](/files/problems/楼分析习题-v2.pdf#page=21)

**题目：** 设 $\sum_{n=0}^{\infty}a_n$ 的 Abel 和为 $A$。证明：

（1）若 $\lim_{n\to+\infty}na_n=0$，则 $\sum_{n=0}^{\infty}a_n=A$。

（2）$\sum_{n=0}^{\infty}a_n$ 收敛当且仅当

$$
\lim_{n\to+\infty}
\frac{a_1+2a_2+\cdots+na_n}{n}=0.
$$

**思路来源：** Abel 和是系数级数的平滑平均，反推普通收敛通常需要一个 Tauber 条件。对（1），选 $r_n=1-1/n$，使“截断到 $n$”与“以 $r_n^k$ 加权”发生同一尺度的近似。对（2），将普通部分和的 Cesàro 平均视为一条新序列；题设加权平均恰好控制它的相邻差，因而可把（2）归约到（1）。

**证明：** 记

$$
F(r)=\sum_{k=0}^{\infty}a_kr^k
\quad(0\le r<1),\qquad
s_n=\sum_{k=0}^{n}a_k.
$$

“Abel 和为 $A$”的意思是 $F(r)$ 对 $r\in[0,1)$ 有定义，且 $\lim_{r\uparrow1}F(r)=A$。

**（1）** 设 $na_n\to0$。任取 $\varepsilon>0$，存在 $N_0$，使得

$$
|a_k|\le\frac\varepsilon k
\qquad(k>N_0).
$$

当 $n>N_0$ 时，取 $r_n=1-1/n$。因为 $1-r_n^k\le k(1-r_n)=k/n$，所以

$$
\begin{aligned}
|s_n-F(r_n)|
&\le\sum_{k=0}^n|a_k|(1-r_n^k)
+\sum_{k=n+1}^{\infty}|a_k|r_n^k\\
&\le\sum_{k=0}^{N_0}|a_k|(1-r_n^k)
+\frac\varepsilon n\sum_{k=N_0+1}^{n}1
+\frac\varepsilon n\sum_{k=n+1}^{\infty}r_n^k\\
&\le\sum_{k=0}^{N_0}|a_k|(1-r_n^k)
+\varepsilon+\varepsilon r_n^{n+1}.
\end{aligned}
$$

固定的第一项有限和趋于 $0$，而 $r_n^{n+1}\le1$，故

$$
\limsup_{n\to\infty}|s_n-F(r_n)|\le2\varepsilon.
$$

令 $\varepsilon\downarrow0$，得到 $s_n-F(r_n)\to0$。又 $r_n\uparrow1$，从 Abel 可和性得 $F(r_n)\to A$，于是 $s_n\to A$。证明了（1）。

**（2）必要性。** 设 $s_n\to A$。定义部分和的 Cesàro 平均

$$
\sigma_n=\frac1{n+1}\sum_{j=0}^{n}s_j
\qquad(n\ge0).
$$

由 Cesàro 收敛定理，$\sigma_{n-1}\to A$。直接交换有限求和有

$$
\begin{aligned}
s_n-\sigma_{n-1}
&=\frac1n\left(ns_n-\sum_{j=0}^{n-1}s_j\right)\\
&=\frac1n\sum_{k=1}^{n}ka_k.
\end{aligned}
\qquad(239.1)
$$

所以题设极限必为 $0$。

**（2）充分性。** 反过来设

$$
t_n:=\frac1n\sum_{k=1}^{n}ka_k\longrightarrow0.
$$

由（239.1）知 $s_n-\sigma_{n-1}=t_n$，并且

$$
\sigma_n-\sigma_{n-1}
=\frac{s_n-\sigma_{n-1}}{n+1}
=\frac{t_n}{n+1},
$$

从而 $n(\sigma_n-\sigma_{n-1})\to0$。如果能证明 $\{\sigma_n\}$ 的对应差分级数具有 Abel 和 $A$，便可将已证的（1）应用于该差分级数。

首先，对 $0\le r<1$，有限部分和的生成函数恒等式给出

$$
\sum_{n=0}^{\infty}s_nr^n=\frac{F(r)}{1-r},
\qquad
\sum_{n=0}^{\infty}\left(\sum_{j=0}^{n}s_j\right)r^n
=\frac{F(r)}{(1-r)^2}.
$$

对第二式在 $[0,r]$ 积分并除以 $r$，得到

$$
(1-r)\sum_{n=0}^{\infty}\sigma_nr^n
=\frac{1-r}{r}\int_0^r\frac{F(t)}{(1-t)^2}\,dt.
\qquad(239.2)
$$

积分核非负，且归一化为 $1$：

$$
\frac{1-r}{r}\int_0^r\frac{dt}{(1-t)^2}=1.
$$

由于 $F(t)\to A$（$t\uparrow1$），分割积分于任意固定的 $r_0<1$，可知（239.2）右侧趋于 $A$：$[0,r_0]$ 部分乘上 $(1-r)/r$ 后趋于 $0$，$[r_0,r]$ 部分中 $F(t)$ 可与 $A$ 一致接近。故

$$
\lim_{r\uparrow1}(1-r)
\sum_{n=0}^{\infty}\sigma_nr^n=A.
\qquad(239.3)
$$

令 $d_0=\sigma_0$，$d_n=\sigma_n-\sigma_{n-1}$（$n\ge1$）。则

$$
\sum_{n=0}^{\infty}d_nr^n
=(1-r)\sum_{n=0}^{\infty}\sigma_nr^n,
$$

由（239.3），$\sum d_n$ 的 Abel 和为 $A$；又由 $nd_n=n t_n/(n+1)\to0$，故（1）推出

$$
\sigma_n=\sum_{k=0}^nd_k\longrightarrow A.
$$

最后由 $s_n-\sigma_{n-1}=t_n\to0$，可得 $s_n\to A$，即 $\sum a_n$ 收敛且和为 $A$。两方向均得证。

**条件核查：** （2）的充要条件建立在**原级数已有 Abel 和**的共同前提下；删去这一前提，单凭加权平均 $o(1)$ 不能直接得出所给和 $A$。条件（2）比（1）的 $na_n\to0$ 更弱：例如 $a_n=(-1)^n/n$（$n\ge1$），则 $na_n=(-1)^n$ 不趋于 $0$，但 $\frac1n\sum_{k=1}^nka_k\to0$，且原级数收敛。

**方法总结：** 对 Abel 可和级数，选择 $r_n=1-1/n$ 可把普通部分和与指数平滑对齐；加权 Tauber 条件则可以通过 Cesàro 平均的相邻差转换为普通小 $o$ 条件。这种“先平滑，再将平滑差分送回 Tauber 定理”的方法可迁移到其他求和法的逆定理。

## 七题方法总结

| 题号 | 可迁移的核心技巧 | 关键条件与常见伪证 |
| --- | --- | --- |
| B233 | 指数展开后双重绝对求和；由发散边界确定半径 | $\lvert h\rvert<x_0-1$；不能把 $C^\infty$ 自动等同于解析。 |
| B234 | 边界级数收敛 $\Rightarrow$ Stolz 区域有界；复路径检验本性奇点 | 实轴极限为 $0$ 不足以判断 Taylor 边界收敛。 |
| B235 | 局部复幂级数、恒等定理、粘合 | 圆盘交集含实开区间；不需要统一收敛半径。 |
| B236 | 系数依赖的光滑截断；所有阶导数局部一致收敛 | 任意系数增长均允许；形式 Taylor 级数不一定收敛。 |
| B237 | 交错幂级数的统一余项、逐项积分 | 闭区间端点必须独立控制，积分核在 $0$ 可去。 |
| B238 | Mertens 定理、差分与部分和算子、生成函数反例 | C+C 的乘积可 A、C、D；不能误用乘法法则。 |
| B239 | $r_n=1-1/n$ 的 Tauber 比较；Cesàro 差分归约 | 两问共同依赖 Abel 和；注意 $o(1)$ 的精确位置。 |

**本批累计：** 两册 **236 道完成**（上册 175、下册 61），另有 **B116、B148、B180** 三道待核。第九章完成 **20 题**。下一题按原书为 **B240＝9.4.B 第 4 题**，含 Hardy–Littlewood 定理的四个指定小问，题干跨原题 PDF **第 21—22 页**；具体作答留待下一批。

[返回题号导航](#题号导航) · [上一批 B226—B232](/problems/41a8fc025daa4bef6a32b3d1/) · [第九章索引](/problems/collections/lou-analysis/chapters/9/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)