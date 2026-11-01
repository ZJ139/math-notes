---
title: "楼红卫《数学分析》B 组习题解答（八）：2.4.B 第 19—20 题与 2.5.B 第 1—5 题"
description: "连续完成 B50—B56：Baire 纲定理、稠密开集的可列交、次可加与有界加法误差、指数极限与级数、上下极限辨析及周期严格压缩迭代。对原题 PDF 的下极限命题给出反例并证明正确的上极限结论。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "2.4.B", "2.5.B", "Baire纲定理", "上下极限", "指数函数", "B50-B56"]
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

承接上一批，本批严格依上册原书顺序，连续完成 **B50—B56**，对应习题 **2.4.B 第 19—20 题、2.5.B 第 1—5 题**，不穿插 A 组。B52 的题意是推广两道 A 组结论，故先列出所引用的命题，再给出更一般的结论与证明。

**原题辨析：** 网站原题 PDF 第 13 页的 2.5.B 第 4 题写作“下极限不小于 1”，这一表述不成立。B55 保留该题意，先给出反例，再证明正确的上极限结论及常数的最佳性；这里指出的是当前 PDF 的表述问题，不据此判断原书印刷版本。

[楼分析习题-v1（上册）资料页](/problems/41e85e430c9d7f84a0863658/) · [本批原题：PDF 第 12—13 页](/files/problems/楼分析习题-v1.pdf#page=12) · [第二章按原题号查阅](/problems/collections/lou-analysis/chapters/2/)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [上一批 B43—B49](/problems/8bf5d892fb2fadbffdaa8f2b/)

## 题号导航

- [问题 B50：欧氏空间不能是可列个无处稠密集的并（2.4.B-19）](#问题-b50)
- [问题 B51：可列个稠密开集的交仍稠密（2.4.B-20）](#问题-b51)
- [问题 B52：次乘性与有界加法误差的推广（2.5.B-1）](#问题-b52)
- [问题 B53：任意实参数的指数极限（2.5.B-2）](#问题-b53)
- [问题 B54：指数函数的幂级数展开（2.5.B-3）](#问题-b54)
- [问题 B55：下极限反例与正确的上极限不等式（2.5.B-4）](#问题-b55)
- [问题 B56：周期严格压缩映射的迭代收敛（2.5.B-5）](#问题-b56)
- [七题方法总结](#七题方法总结)

## 问题 B50

**原题号：** 习题 2.4.B 第 19 题。[原题 PDF 第 12 页](/files/problems/楼分析习题-v1.pdf#page=12)。

**题目：** 证明 $\mathbb R^d$ 不能表示成一列无处稠密集的并。

**证明：** 这里 $d\ge1$；集合 $E$ 无处稠密，指其闭包 $\overline E$ 的内部为空。设 $E_1,E_2,\ldots$ 都无处稠密。我们证明更强的结论：任一非空开集 $O$ 中都存在不属于 $\bigcup_{k\ge1}E_k$ 的点。

在 $O$ 中选取一个半径为正的闭球 $K_0\subset O$。若闭球 $K_{k-1}$ 已选好，因为 $\overline E_k$ 不含任何非空开集，所以

$$
\operatorname{int}K_{k-1}\setminus\overline E_k
$$

是非空开集，可以在其中选取半径 $r_k>0$ 的闭球 $K_k$，使

$$
K_k\subset\operatorname{int}K_{k-1}\setminus\overline E_k,
\qquad r_k\le 2^{-k}.
$$

这给出一列非空闭球套。记 $c_k$ 为 $K_k$ 的中心。对 $p,q\ge k$，有 $c_p,c_q\in K_k$，故

$$
|c_p-c_q|\le 2r_k\le 2^{1-k}.
$$

于是 $\{c_k\}$ 为 Cauchy 列，由 $\mathbb R^d$ 的完备性，存在 $c_k\to c$。固定 $k$，所有 $c_j$（$j\ge k$）都属于闭集 $K_k$，因此 $c\in K_k$。故

$$
c\in\bigcap_{k=0}^{\infty}K_k\subset O,
\qquad c\notin E_k\quad(k\ge1).
$$

因此 $O$ 不能包含于 $\bigcup_{k\ge1}E_k$。特别取 $O=\mathbb R^d$，即得所需结论。

注意，题设不能仅改成“每个集合的内部为空”：$\mathbb Q$ 与 $\mathbb R\setminus\mathbb Q$ 的内部均为空，却合为 $\mathbb R$；其中两者的闭包都等于 $\mathbb R$，所以都不是无处稠密集。

**方法总结：** 每次选取更小的闭球，排除一个闭包，同时保留下一次选择所需的非空内部；完备性保证这一可列构造留下一个点。证明时保留任意初始开集 $O$，还能得到补集稠密，而不只是补集非空。这就是欧氏空间中的 Baire 纲定理。

[返回题号导航](#题号导航)

## 问题 B51

**原题号：** 习题 2.4.B 第 20 题。[原题 PDF 第 12 页](/files/problems/楼分析习题-v1.pdf#page=12)。

**题目：** 设 $\{V_k\}$ 是一列在 $\mathbb R^d$ 中稠密的开集。证明 $\bigcap_{k\ge1}V_k$ 在 $\mathbb R^d$ 中稠密。

**证明：** 令

$$
F_k=\mathbb R^d\setminus V_k.
$$

因为 $V_k$ 开，所以 $F_k$ 闭；因为 $V_k$ 稠密，任何非空开球都与 $V_k$ 相交，故 $F_k$ 的内部为空。因此 $F_k=\overline F_k$ 是无处稠密集。

任取非空开集 $O$，由 B50 已证明的局部结论，存在

$$
x\in O\setminus\bigcup_{k=1}^{\infty}F_k
=O\cap\bigcap_{k=1}^{\infty}V_k.
$$

于是每个非空开集都与 $\bigcap_kV_k$ 相交，这正说明交集稠密。

也可以直接沿用上一题的闭球构造：先取 $K_0\subset O$，再依次取

$$
K_k\subset\operatorname{int}K_{k-1}\cap V_k,
\qquad 0<\operatorname{rad}(K_k)\le2^{-k}.
$$

稠密性保证右侧非空，开性保证它能容纳一个正半径的闭球；闭球套的公共点便在 $O\cap\bigcap_kV_k$ 中。这也说明两个条件在构造中的不同作用。

不能删去“开集”条件：$\mathbb Q$ 与 $\mathbb R\setminus\mathbb Q$ 都稠密，但交集为空。此外，结论只保证交集稠密，并不保证交集开。将有理数枚举为 $\{q_k\}$，取 $V_k=\mathbb R\setminus\{q_k\}$，则交集为无理数集，它稠密而不开放。

**方法总结：** 对稠密开集取补集，得到闭的无处稠密集；De Morgan 公式将两道题联系起来。要证明“稠密”，必须在任意非空开集内找到交点，不能只证明全空间中的交集非空。

[返回题号导航](#题号导航)

## 问题 B52

**原题号：** 习题 2.5.B 第 1 题。[原题 PDF 第 13 页](/files/problems/楼分析习题-v1.pdf#page=13)；引用的 A 组题见 [PDF 第 12—13 页](/files/problems/楼分析习题-v1.pdf#page=12)。

**题目：** 推广习题 2.5.A 中的第 2 题和第 4 题。两道原结论分别为：

- 若 $0\le x_{m+n}\le x_mx_n$（$m,n\ge1$），则 $\sqrt[n]{x_n}$ 收敛。
- 若 $a_m+a_n-1\le a_{m+n}\le a_m+a_n+1$，则 $a_n/n$ 收敛；记极限为 $q$，有 $nq-1\le a_n\le nq+1$。

**解：** 以下将乘法中的常数因子、加法中的两侧误差都纳入，并给出极限的精确表示。

### 次可加引理

设实数列 $\{u_n\}$ 满足

$$
u_{m+n}\le u_m+u_n\qquad(m,n\ge1).
$$

则在扩充实数意义下，

$$
\lim_{n\to\infty}\frac{u_n}{n}
=\inf_{k\ge1}\frac{u_k}{k}\in[-\infty,\infty).
$$


为证此结论，固定正整数 $k$，将 $n$ 写成 $n=mk+r$，其中 $0\le r<k$，并为记号方便置 $u_0=0$。重复使用次可加性得到

$$
u_n\le m u_k+u_r.
$$

当 $r=0$ 时，右边的 $u_0$ 只是零项，并未额外假设涉及下标零的次可加关系。因 $r$ 只有有限种取值，$u_r/n\to0$，且 $m/n\to1/k$，故

$$
\limsup_{n\to\infty}\frac{u_n}{n}\le\frac{u_k}{k}.
$$

对 $k$ 取下确界，而每一项 $u_n/n$ 都不小于这个下确界，便得到结论。若下确界为 $-\infty$，则对任意实数 $M$ 可选 $k$ 使 $u_k/k<M$，同一估计给出 $u_n/n\to-\infty$。

对 $-u_n$ 应用此引理，还得到超可加形式：

$$
u_{m+n}\ge u_m+u_n
\quad\Longrightarrow\quad
\lim_{n\to\infty}\frac{u_n}{n}
=\sup_{k\ge1}\frac{u_k}{k}.
$$

此时极限允许为 $+\infty$。

### 对 A 组第 2 题的推广

设 $C>0$，$\{x_n\}$ 为非负数列，且

$$
x_{m+n}\le Cx_mx_n\qquad(m,n\ge1).
$$

则

$$
\boxed{\lim_{n\to\infty}\sqrt[n]{x_n}
=\inf_{k\ge1}(Cx_k)^{1/k}.}
$$


若存在 $x_k=0$，则对每个 $j\ge1$，有 $0\le x_{k+j}\le Cx_kx_j=0$，故数列从该项起恒为零，结论成立。

若各项均正，令 $y_n=Cx_n$，则 $y_{m+n}\le y_my_n$，因而 $u_n=\log y_n$ 次可加。由引理，

$$
\frac{\log y_n}{n}\longrightarrow
\inf_{k\ge1}\frac{\log y_k}{k}.
$$

取指数，允许右侧为 $-\infty$ 时对应极限零，便得

$$
y_n^{1/n}\longrightarrow\inf_{k\ge1}y_k^{1/k}.
$$

又 $C^{1/n}\to1$，所以 $x_n^{1/n}$ 有同一极限。取 $C=1$ 就恢复原题，并补充了极限的精确值。

相应地，若 $x_n>0$ 且 $x_{m+n}\ge Cx_mx_n$，则超可加形式给出

$$
\lim_{n\to\infty}\sqrt[n]{x_n}
=\sup_{k\ge1}(Cx_k)^{1/k},
$$

这里允许极限为 $+\infty$。

### 对 A 组第 4 题的推广

设常数 $A,B\ge0$，实数列满足

$$
-A\le a_{m+n}-a_m-a_n\le B
\qquad(m,n\ge1).
$$

则存在有限实数 $q$，使

$$
\boxed{
\begin{aligned}
\frac{a_n}{n}&\longrightarrow q,\\
nq-B&\le a_n\le nq+A\qquad(n\ge1).
\end{aligned}}
$$

并且

$$
q=\inf_{n\ge1}\frac{a_n+B}{n}
=\sup_{n\ge1}\frac{a_n-A}{n}.
$$


事实上，令 $b_n=a_n+B$、$c_n=a_n-A$，则

$$
\begin{aligned}
b_{m+n}&\le b_m+b_n,\\
c_{m+n}&\ge c_m+c_n.
\end{aligned}
$$

故引理保证 $b_n/n$、$c_n/n$ 都有扩充实数极限。另一方面，对原不等式迭代可得

$$
na_1-(n-1)A\le a_n\le na_1+(n-1)B,
$$

所以这两个极限都是有限数。又

$$
\frac{b_n}{n}-\frac{c_n}{n}=\frac{A+B}{n}\to0,
$$

它们的极限必相同，记为 $q$，并且 $a_n/n\to q$。利用引理给出的确界公式，

$$
\frac{a_n-A}{n}\le q\le\frac{a_n+B}{n},
$$

移项即为所需误差估计。

取 $A=B=1$ 就得到原题。两侧误差的方向应特别留意：加法误差下界为 $-A$，对应 $a_n-nq$ 的上界为 $A$；加法误差上界为 $B$，对应 $a_n-nq$ 的下界为 $-B$。数列 $a_n=nq+A$ 与 $a_n=nq-B$ 分别取到这两个界，故它们一般不能缩小。

**方法总结：** 次可加问题用“按固定块长分段，余项只有有限种”来控制上极限；乘法关系取对数，加法中有界的误差则通过常数平移吸收。这样既证明极限存在，也给出最优的确界表示和误差界。

[返回题号导航](#题号导航)

## 问题 B53

**原题号：** 习题 2.5.B 第 2 题。[原题 PDF 第 13 页](/files/problems/楼分析习题-v1.pdf#page=13)。

**题目：** 设 $x\in\mathbb R$，证明

$$
\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n=e^x.
$$


**证明：** 使用实数幂的基本性质及数列

$$
b_m=\left(1+\frac1m\right)^m\longrightarrow e.
$$

此处 $e$ 按这个标准极限定义，无须预先使用指数函数的级数展开。若要回顾该极限的存在性，二项式公式给出

$$
b_m=\sum_{k=0}^{m}\frac1{k!}
\prod_{j=0}^{k-1}\left(1-\frac jm\right),
$$

其中空积为 $1$。对于固定 $k\le m$，乘积中的每个因子随 $m$ 增大而不减，且新添项非负，所以 $b_m$ 单调不减；又由 $k!\ge2^{k-1}$（$k\ge2$），

$$
2\le b_m\le\sum_{k=0}^{m}\frac1{k!}<3.
$$

因此它确有有限极限 $e>1$。

先设 $x>0$，令 $m=\lfloor n/x\rfloor$。当 $n$ 充分大时 $m\ge1$，并且

$$
\frac1{m+1}<\frac xn\le\frac1m.
$$

由底数均大于 $1$，得到

$$
b_{m+1}^{\,n/(m+1)}
\le\left(1+\frac xn\right)^n
\le b_m^{\,n/m}.
$$

这里 $m\to\infty$，且 $n/(m+1)\to x$、$n/m\to x$。为不直接略过变底数、变指数的极限，固定有理数 $0<p<x<q$。充分大的 $n$ 满足

$$
p<\frac n{m+1}\le\frac nm<q,
$$

因而

$$
b_{m+1}^{\,p}
\le\left(1+\frac xn\right)^n
\le b_m^{\,q}.
$$

固定有理次幂可用乘法及开根的极限性质处理，故

$$
e^p\le\liminf_{n\to\infty}\left(1+\frac xn\right)^n
\le\limsup_{n\to\infty}\left(1+\frac xn\right)^n
\le e^q.
$$

令有理数 $p\uparrow x$、$q\downarrow x$，由实数幂的连续性（或实指数由有理指数逼近的定义），得到所需极限 $e^x$。

$x=0$ 时各项恒为 $1$。最后设 $x=-a<0$，只考虑 $n>a$ 的尾列，此时底数为正。恒等变形给出

$$
\left(1-\frac an\right)^{-n}
=\left(1+\frac{a_n}{n}\right)^n,
\qquad a_n=\frac{a}{1-a/n}\longrightarrow a.
$$

固定 $0<\varepsilon<a$，充分大的 $n$ 满足 $a-\varepsilon<a_n<a+\varepsilon$，故

$$
\left(1+\frac{a-\varepsilon}{n}\right)^n
\le\left(1-\frac an\right)^{-n}
\le\left(1+\frac{a+\varepsilon}{n}\right)^n.
$$

两端已由正参数情形分别趋于 $e^{a-\varepsilon}$、$e^{a+\varepsilon}$。再令 $\varepsilon\downarrow0$，得中间项趋于 $e^a$；取倒数即得

$$
\left(1-\frac an\right)^n\longrightarrow e^{-a}=e^x.
$$

所有实数 $x$ 的情形都已覆盖。

**方法总结：** 对正参数，用 $\lfloor n/x\rfloor$ 将一般底数夹在两个标准底数之间；对负参数，先取倒数转为趋近正参数的表达式，再用固定参数夹逼。证明不借助 Taylor 展开，也没有使用下一题尚待证明的指数级数。

[返回题号导航](#题号导航)

## 问题 B54

**原题号：** 习题 2.5.B 第 3 题。[原题 PDF 第 13 页](/files/problems/楼分析习题-v1.pdf#page=13)。

**题目：** 证明对每个 $x\in\mathbb R$，

$$
e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}.
$$


**证明：** 固定 $x\in\mathbb R$，记 $R=|x|$。先证明绝对收敛。取整数 $K\ge1$，使 $K+1\ge2R$，则对 $k\ge K$，

$$
\frac{R^{k+1}/(k+1)!}{R^k/k!}=\frac R{k+1}\le\frac12
$$

（$R=0$ 时结论直接成立）。因此尾项受公比 $1/2$ 的几何数列控制，$\sum_{k\ge0}R^k/k!$ 收敛。记

$$
S(x)=\sum_{k=0}^{\infty}\frac{x^k}{k!}.
$$


对 $0\le k\le n$ 定义

$$
c_{n,k}=\prod_{j=0}^{k-1}\left(1-\frac jn\right).
$$

二项式公式给出

$$
\left(1+\frac xn\right)^n
=\sum_{k=0}^{n}c_{n,k}\frac{x^k}{k!}.
$$

这里 $0\le c_{n,k}\le1$，且对每个固定 $k$，都有 $c_{n,k}\to1$。

现在给出交换求和与极限所需的具体估计。固定整数 $M$，当 $n\ge M$ 时，

$$
\begin{aligned}
\left|\left(1+\frac xn\right)^n-S(x)\right|
&\le\sum_{k=0}^{M}|c_{n,k}-1|\frac{R^k}{k!}\\
&\quad+\sum_{k=M+1}^{n}c_{n,k}\frac{R^k}{k!}
+\sum_{k=M+1}^{\infty}\frac{R^k}{k!}\\
&\le\sum_{k=0}^{M}|c_{n,k}-1|\frac{R^k}{k!}
+2\sum_{k=M+1}^{\infty}\frac{R^k}{k!}.
\end{aligned}
$$

给定 $\varepsilon>0$，先用绝对收敛选 $M$，使最后的尾和项小于 $\varepsilon/2$；再利用有限多个 $c_{n,k}\to1$，取 $n$ 足够大，使有限和小于 $\varepsilon/2$。于是

$$
\left(1+\frac xn\right)^n\longrightarrow S(x).
$$

而 B53 已证明左侧趋于 $e^x$，由极限唯一性得到 $S(x)=e^x$。

整个估计使用 $R=|x|$ 控制尾项，所以同时适用于正、零、负参数，不需要对负参数擅自交换交错级数的极限，也不依赖 Taylor 定理。

**方法总结：** 从有限二项式展开出发，将每个系数逼近 $1/k!$；绝对收敛提供与 $n$ 无关的尾项控制。关键顺序是“先选截断阶数，再对有限部分取极限”，而不是仅凭每个系数收敛就直接对越来越多的项取极限。

[返回题号导航](#题号导航)

## 问题 B55

**原题号：** 习题 2.5.B 第 4 题。[原题 PDF 第 13 页](/files/problems/楼分析习题-v1.pdf#page=13)。

**题目（按当前 PDF）：** 设 $\{x_n\}$ 为正数列，证明

$$
\liminf_{n\to\infty}
n\left(\frac{1+x_{n+1}}{x_n}-1\right)\ge1.
$$


**解：** 这个下极限命题不成立。正确的普遍结论是将 $\liminf$ 改为 $\limsup$，且常数 $1$ 不能提高。

### 原表述的反例

令

$$
x_{2k-1}=1,\qquad x_{2k}=2\qquad(k\ge1),
$$

并记

$$
A_n=n\left(\frac{1+x_{n+1}}{x_n}-1\right).
$$

则

$$
A_{2k}=0,\qquad A_{2k-1}=2(2k-1).
$$

所以 $\liminf A_n=0<1$，已经否定原表述。以下不对这一错误命题作形式证明。

### 正确结论及证明

对任意正数列 $\{x_n\}$，都有

$$
\boxed{\limsup_{n\to\infty}
n\left(\frac{1+x_{n+1}}{x_n}-1\right)\ge1.}
$$

事实上，必有无穷多个 $n$ 使 $A_n>1$。

否则存在 $N$，使所有 $n\ge N$ 都满足 $A_n\le1$。由于 $x_n>0$，这等价于

$$
x_{n+1}\le\left(1+\frac1n\right)x_n-1.
$$

两边除以 $n+1$，得到

$$
\frac{x_{n+1}}{n+1}\le\frac{x_n}{n}-\frac1{n+1}.
$$

从 $n=N$ 累加到 $m-1$，中间项相消，便得

$$
0<\frac{x_m}{m}
\le\frac{x_N}{N}-\sum_{n=N}^{m-1}\frac1{n+1}.
$$

调和和式趋于 $+\infty$，右端最终为负，与左端为正矛盾。故 $A_n>1$ 必出现无穷多次，从而 $\limsup A_n\ge1$。

这里所用的调和和式发散只需分组观察：从 $2^{j-1}+1$ 到 $2^j$ 的每一组有 $2^{j-1}$ 项，每项不小于 $2^{-j}$，故每组之和至少为 $1/2$。

### 常数 1 的最佳性

令

$$
H_n=\sum_{k=1}^{n}\frac1k,\qquad x_n=nH_n.
$$

因为

$$
x_{n+1}-x_n
=(n+1)\left(H_n+\frac1{n+1}\right)-nH_n
=H_n+1,
$$

所以

$$
A_n=n\frac{1+x_{n+1}-x_n}{x_n}
=1+\frac2{H_n}\longrightarrow1.
$$

因此不存在比 $1$ 更大的普适下界。这个例子还说明：“无穷多项严格大于 $1$”并不意味着上极限严格大于 $1$。

**方法总结：** 先检验上下极限的方向，再把假设改写为递推不等式。除以 $n+1$ 恰好将乘法因子消去，使 $x_n/n$ 每步至少减少一个调和项；累加后与正性冲突。取 $x_n=nH_n$ 则可精确验证常数的最佳性。

[返回题号导航](#题号导航)

## 问题 B56

**原题号：** 习题 2.5.B 第 5 题。[原题 PDF 第 13 页](/files/problems/楼分析习题-v1.pdf#page=13)。

**题目：** 设 $f:\mathbb R\to\mathbb R$ 的周期为 $1$，且对任意不同的实数 $x,y$，

$$
|f(x)-f(y)|<|x-y|.
$$

任取 $x_0\in\mathbb R$，定义 $x_{n+1}=f(x_n)$（$n\ge0$）。证明 $\{x_n\}$ 收敛，且极限与 $x_0$ 的选择无关。

**证明：** 题设蕴含非严格的 Lipschitz 估计

$$
|f(x)-f(y)|\le|x-y|\qquad(x,y\in\mathbb R),
$$

所以 $f$ 连续。另一方面，对每个 $x\in\mathbb R$，可写 $x=k+t$，其中 $k\in\mathbb Z$、$0\le t<1$。由周期性，

$$
|f(x)|=|f(t)|
\le |f(0)|+|f(t)-f(0)|
\le |f(0)|+1.
$$

令 $M=|f(0)|+1$，$K=[-M,M]$，则 $f(\mathbb R)\subseteq K$，特别有 $f(K)\subseteq K$，且所有迭代项 $x_n$（$n\ge1$）都落在同一紧区间中。

先证 $f$ 有不动点。令 $g(x)=|f(x)-x|$，在 $K$ 上取其下确界 $d\ge0$，并选 $y_j\in K$ 使 $g(y_j)\to d$。由有界点列的收敛子列定理，存在子列 $y_{j_\ell}\to a\in K$；由连续性，

$$
g(a)=\lim_{\ell\to\infty}g(y_{j_\ell})=d.
$$

若 $d>0$，则 $a\ne f(a)$。对这两个点使用严格不等式，得到

$$
g(f(a))=|f(f(a))-f(a)|
<|f(a)-a|=d.
$$

但 $f(a)\in K$，这与 $d$ 是 $g$ 在 $K$ 上的最小值矛盾。故 $d=0$，存在 $p\in K$ 使 $f(p)=p$。

这个不动点唯一：若 $f(p)=p$、$f(q)=q$ 且 $p\ne q$，则

$$
|p-q|=|f(p)-f(q)|<|p-q|,
$$

矛盾。

对任意初值，记 $r_n=|x_n-p|$。若某项等于 $p$，后续恒等于 $p$，结论已成立；否则

$$
r_{n+1}=|f(x_n)-f(p)|<r_n.
$$

因此 $r_n$ 单调下降且非负，存在极限 $r\ge0$。由于 $\{x_n:n\ge1\}\subseteq K$，可取子列 $x_{n_j}\to a\in K$。于是

$$
|a-p|=\lim_{j\to\infty}r_{n_j}=r.
$$

又由 $f$ 连续，$x_{n_j+1}=f(x_{n_j})\to f(a)$，从而

$$
|f(a)-p|=\lim_{j\to\infty}r_{n_j+1}=r.
$$

若 $a\ne p$，严格不等式给出

$$
|f(a)-p|=|f(a)-f(p)|<|a-p|,
$$

与两边都等于 $r$ 矛盾。因此 $a=p$，并且 $r=0$。于是整个数列满足 $|x_n-p|\to0$，即 $x_n\to p$。

因为 $p$ 是 $f$ 唯一的不动点，它与初值 $x_0$ 无关。此证明中，周期性的作用是使像集有界，从而让所有轨道进入同一个紧区间；仅有点对点的严格缩短，并不能未经论证就换成某个统一常数 $0<q<1$ 的压缩估计。

**方法总结：** 用周期性得到有界像，用紧性使最小位移取得，从而证明不动点存在；再用“到不动点的距离单调 + 轨道的收敛子列 + 严格缩短”证明整列收敛。这里依靠紧性而非预先存在的统一压缩常数。

[返回题号导航](#题号导航)

## 七题方法总结

- **B50：逐个排除可列障碍。** 闭球内部避开无处稠密集的闭包，缩小半径，再用完备性保留公共点。
- **B51：取补集转换问题。** 稠密与开性对应闭集的无处稠密性；保留任意初始开集，才能得到交集稠密。
- **B52：把结构误差吸收进辅助数列。** 乘法关系取对数，有界加法误差作常数平移，再用固定块长分段得到极限与精确误差。
- **B53：标准数列与参数夹逼。** 整数部分联系标准指数极限，负参数由倒数和正参数夹逼处理。
- **B54：有限部分与尾部各司其职。** 固定阶数的系数逐项趋近，绝对收敛统一控制尾部，避免不合法的无穷换序。
- **B55：辨清上下极限，再构造相消。** 原 PDF 的下极限命题有反例；正确上极限结论由归一化递推和调和和式发散证明。
- **B56：紧性补足严格缩短。** 先证明唯一不动点存在，再将距离极限与子列极限结合，推出所有初值收敛到同一点。

**批次导航：**[下一批 B57—B63](/problems/66783d8d0bfbf0815b31a433/) · [上一批 B43—B49](/problems/8bf5d892fb2fadbffdaa8f2b/) · [第二章按节与原题号查阅](/problems/collections/lou-analysis/chapters/2/) · [返回 B 组解答总目录](/problems/collections/lou-analysis/)

本批完成习题 2.4.B 第 19—20 题及 2.5.B 第 1—5 题。**下一批从习题 2.6.B 第 1 题开始**，仍按原书 B 组顺序连续选取七题。

