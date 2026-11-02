---
title: "楼红卫《数学分析》B 组习题解答（十二）：3.3.B 第 2—8 题"
description: "连续完成 B78—B84：伸缩数列上的极限、介值函数的迭代方程、连续函数列的局部一致有界性、矩阵逆序恒等式、半正定矩阵的共同零空间及分块行列式。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "3.3.B", "Baire纲定理", "介值性", "半正定矩阵", "分块行列式", "B78-B84"]
created_at: "2026-11-02"
updated_at: "2026-11-02"
---

承接上一批，本批严格按上册 B 组出现顺序连续完成 **B78—B84**，对应 **3.3.B 第 2—8 题**。起点为无星号的第 2 题，与上一批的第 2\* 题分别保留。本批全部题目、假设及矩阵分块已核对原题 PDF 第 19—20 页。

[楼分析习题-v1（上册）资料页](/problems/41e85e430c9d7f84a0863658/) · [本批原题：PDF 第 19—20 页](/files/problems/楼分析习题-v1.pdf#page=19) · [第三章索引](/problems/collections/lou-analysis/chapters/3/)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [上一批 B71—B77](/problems/3ddc58f0d3bf52252dc7207f/)

## 题号导航

- [问题 B78：伸缩数列极限与闭集覆盖（3.3.B-2）](#问题-b78)
- [问题 B79：介值函数的迭代方程与正数递推（3.3.B-3）](#问题-b79)
- [问题 B80：逐点有界连续函数列的局部一致有界性（3.3.B-4）](#问题-b80)
- [问题 B81：矩阵和的逆与逆序恒等式（3.3.B-5）](#问题-b81)
- [问题 B82：半正定矩阵与正定矩阵的构造（3.3.B-6）](#问题-b82)
- [问题 B83：交换矩阵的分块行列式与奇异情形（3.3.B-7）](#问题-b83)
- [问题 B84：对称分块矩阵的和差分解（3.3.B-8）](#问题-b84)
- [七题方法总结](#七题方法总结)

## 问题 B78

**原题号：** 习题 3.3.B 第 2 题（无星号）。[原题 PDF 第 19 页](/files/problems/楼分析习题-v1.pdf#page=19)。

**题目：** 设 $f$ 在 $(0,+\infty)$ 上连续，且对于任何 $a\in(0,+\infty)$，都有

$$
\lim_{n\to\infty}f(na)=0.
$$

证明 $\lim_{x\to+\infty}f(x)=0$。

**证明：** 先说明所用的闭集覆盖结论：若非退化闭区间 $J$ 是可列个相对闭集 $F_k$ 的并，则某个 $F_k$ 包含一个非退化闭子区间。这是 Baire 纲定理的区间形式，也可直接由闭区间套证明。

若所有 $F_k$ 都不包含非退化区间，则在 $J$ 的内部可以选取非退化闭区间 $J_1$，使 $J_1\cap F_1=\varnothing$。事实上，先选一个不属于 $F_1$ 的内点，再利用 $F_1$ 的相对闭性，在其补集中取一个小闭区间。递归地，在 $J_{k-1}$ 的内部取非退化闭区间 $J_k$，使

$$
J_k\subset\operatorname{int}J_{k-1},\qquad
J_k\cap F_k=\varnothing,\qquad |J_k|\le2^{-k}.
$$

每次都能这样选择，因为 $F_k$ 不包含 $J_{k-1}$ 的内部。闭区间套定理给出一点 $a_*\in\bigcap_{k\ge1}J_k$，它不属于任何 $F_k$，与 $J=\bigcup_{k\ge1}F_k$ 矛盾。覆盖结论得证。

现在固定任意 $\varepsilon>0$。对每个正整数 $N$，令

$$
E_N=\{a\in[1,2]:|f(na)|\le\varepsilon/2
\text{ 对所有整数 }n\ge N\text{ 成立}\}.
$$

对每个固定的 $n$，映射 $a\mapsto f(na)$ 连续，所以

$$
E_N=\bigcap_{n=N}^{\infty}
\{a\in[1,2]:|f(na)|\le\varepsilon/2\}
$$

是 $[1,2]$ 中的相对闭集。题设对每个 $a$ 给出一个可以依赖于 $a$ 的起始指标，因此

$$
[1,2]=\bigcup_{N=1}^{\infty}E_N.
$$

由刚证明的覆盖结论，存在 $N$ 及 $1\le\alpha<\beta\le2$，使 $[\alpha,\beta]\subset E_N$。于是得到真正对一整段参数统一的估计：

$$
|f(na)|\le\varepsilon/2,
\qquad a\in[\alpha,\beta],\quad n\ge N.
$$

取整数 $N_0\ge N$，并使 $N_0(\beta-\alpha)\ge\alpha$。则对一切 $n\ge N_0$，

$$
(n+1)\alpha\le n\beta.
$$

因此相邻闭区间 $[n\alpha,n\beta]$ 与 $[(n+1)\alpha,(n+1)\beta]$ 相交或相接。对每个 $M\ge N_0$，其有限并为 $[N_0\alpha,M\beta]$；令 $M\to\infty$，得到

$$
\bigcup_{n\ge N_0}[n\alpha,n\beta]=[N_0\alpha,+\infty).
$$

任取 $x\ge N_0\alpha$，可找到整数 $n\ge N_0$，使 $x\in[n\alpha,n\beta]$。令 $a=x/n\in[\alpha,\beta]$，便有

$$
|f(x)|=|f(na)|\le\varepsilon/2<\varepsilon.
$$

这正是 $\lim_{x\to+\infty}f(x)=0$ 的定义。这里区间 $[\alpha,\beta]$ 以及 $N_0$ 均允许依赖于 $\varepsilon$，而最后的界对所有足够大的 $x$ 成立。

连续性不能删去。例如令 $f(x)=1$ 当 $x=j+\sqrt2$（$j=1,2,\ldots$），其余位置令 $f(x)=0$。不同两个这样的点之比不可能是有理数：若 $j+\sqrt2=q(k+\sqrt2)$，其中 $q\in\mathbb Q$，则 $(1-q)\sqrt2=qk-j$ 迫使 $q=1$、$j=k$。因此每条数列 $a,2a,3a,\ldots$ 至多碰到一个非零点，仍有 $f(na)\to0$，但 $f(j+\sqrt2)=1$，整体极限不为零。

**方法总结：** 将“每个参数最终成立”写成可列闭集覆盖，用闭区间套取得一段参数上的统一起始指标；再利用伸缩区间最终相接，将这段局部统一估计推广到整个无穷远端。量词的交换由闭集覆盖论证完成。

[返回题号导航](#题号导航)

## 问题 B79

**原题号：** 习题 3.3.B 第 3 题。[原题 PDF 第 19 页](/files/problems/楼分析习题-v1.pdf#page=19)。

**题目：** 设 $a>0$、$a^2+4b<0$。证明：不存在 $\mathbb R$ 上具有介值性的函数 $f$ 满足

$$
f(f(x))=af(x)+bx,\qquad x\in\mathbb R.
$$

**证明：** 由 $a^2+4b<0$ 知 $b<0$。假设这样的 $f$ 存在。若 $f(x)=f(y)$，将 $x,y$ 分别代入方程并相减，得到 $b(x-y)=0$，因而 $x=y$。所以 $f$ 是单射。

单射与介值性共同保证 $f$ 严格单调。为说明这一点，任取 $u<v<w$，若 $f(v)$ 不严格介于 $f(u)$ 与 $f(w)$ 之间，由单射性，它必严格大于两者或严格小于两者。以前者为例，取

$$
\max\{f(u),f(w)\}<\eta<f(v).
$$

介值性在 $(u,v)$、$(v,w)$ 中各给出一个函数值为 $\eta$ 的点，违背单射性；后者同理。因此每个有序三点的中间点，其函数值也严格居中。

固定 $p<q$。若 $f(p)<f(q)$，对任意 $x<y$，将 $p,q,x,y$ 去重后按大小排列。刚得到的三点性质保证相邻函数值的差同号；其中 $f(q)-f(p)>0$，所以所有相邻差都为正，特别有 $f(x)<f(y)$。若 $f(p)>f(q)$，同理得到严格单减。这就证明了严格单调性。

若 $f$ 严格单减，对 $x<y$ 有 $f(x)>f(y)$，再作用一次 $f$ 得到

$$
f(f(x))<f(f(y)).
$$

但 $a>0$、$b<0$ 又给出

$$
af(x)+bx>af(y)+by,
$$

与函数方程矛盾。所以 $f$ 必须严格单增。

取任意 $x_0<y_0$，递归定义 $x_{n+1}=f(x_n)$、$y_{n+1}=f(y_n)$，其中 $n\ge0$。严格单增性保证 $x_n<y_n$ 对所有 $n$ 成立。令 $d_n=y_n-x_n>0$，由函数方程得到

$$
d_{n+2}=a d_{n+1}+b d_n,\qquad n\ge0.
$$

设 $c=-b>0$，则 $a^2<4c$。定义正比值 $r_n=d_{n+1}/d_n$，可得

$$
r_{n+1}=a-\frac{c}{r_n}>0.
$$

因此 $r_n>c/a$。另一方面，

$$
\begin{aligned}
r_{n+1}-r_n
&=-\frac{r_n^2-a r_n+c}{r_n}\\
&=-\frac{(r_n-a/2)^2+c-a^2/4}{r_n}<0.
\end{aligned}
$$

故 $\{r_n\}$ 严格递减且以下界 $c/a>0$ 为界，存在极限 $r\ge c/a>0$。在递推式中取极限合法，得到

$$
r=a-\frac cr,\qquad r^2-ar+c=0.
$$

然而 $r^2-ar+c=(r-a/2)^2+c-a^2/4>0$ 对每个实数 $r$ 都成立，矛盾。故所求函数不存在。

严格不等式的边界也须保留：当 $a^2+4b=0$ 时，$f(x)=(a/2)x$ 就满足原方程并具有介值性。本证明没有把介值性直接替换为连续性，也没有预设 $f$ 有不动点；比较两条迭代轨道即可消去与初值无关的影响。

**方法总结：** 先由函数方程得到单射，再以介值性排除局部峰谷，确定单调方向。比较两条保序轨道，将非线性迭代方程化为正数列的线性递推；正比值的单调性最终与负判别式冲突。

[返回题号导航](#题号导航)

## 问题 B80

**原题号：** 习题 3.3.B 第 4 题。[原题 PDF 第 20 页](/files/problems/楼分析习题-v1.pdf#page=20)。

**题目：** 设 $\mathbb R$ 上连续函数列 $\{f_n(x)\}$ 对于每个 $x\in\mathbb R$ 都有界，即逐点有界。证明：存在区间 $(a,b)$，使 $\{f_n(x)\}$ 在 $(a,b)$ 上一致有界，即存在同时与 $n,x$ 无关的常数 $M>0$，使

$$
|f_n(x)|\le M,\qquad n\ge1,\quad x\in(a,b).
$$

**证明：** 在固定闭区间 $[0,1]$ 上，对每个正整数 $m$ 定义

$$
F_m=\bigcap_{n=1}^{\infty}
\{x\in[0,1]:|f_n(x)|\le m\}.
$$

各 $f_n$ 连续，故每个 $F_m$ 都是相对闭集。逐点有界是指：对每个固定的 $x$，存在有限的 $C_x$，使 $|f_n(x)|\le C_x$ 对所有 $n$ 成立。选整数 $m\ge C_x$ 即有 $x\in F_m$，所以

$$
[0,1]=\bigcup_{m=1}^{\infty}F_m.
$$

由 B78 中已用闭区间套证明的覆盖结论，某个 $F_{m_0}$ 包含非退化闭区间 $[a,b]$。因此

$$
|f_n(x)|\le m_0,
\qquad x\in[a,b],\quad n\ge1.
$$

取 $M=m_0$，并限制到 $(a,b)$，结论即得。这里统一的是所有指标 $n$，而不只是某个尾部。

这一结论实际上在任意非空开区间内都能成立：先在其中取一个非退化闭子区间，再重复上面的论证。但逐点有界并不推出整个实轴上的一致有界。例如

$$
f_n(x)=n\max\{1-4|x-n|,0\}
$$

都是连续函数，且非零区间两两不交，所以每个固定的 $x$ 至多有一项非零，函数列逐点有界；另一方面 $f_n(n)=n$，不存在对所有 $x\in\mathbb R$ 和 $n$ 都适用的有限上界。

**方法总结：** 用整数给各点所需的上界分层，将逐点有界表达为闭集的可列覆盖。闭区间套保证某一层含有区间，便将依赖于点的上界转化为一个区间上的共同上界。

[返回题号导航](#题号导航)

## 问题 B81

**原题号：** 习题 3.3.B 第 5 题。[原题 PDF 第 20 页](/files/problems/楼分析习题-v1.pdf#page=20)。

**题目：** 设 $A,B$ 均为 $n$ 阶方阵，且 $A+B$ 非奇异。证明

$$
A(A+B)^{-1}B=B(A+B)^{-1}A.
$$

**证明：** 记 $C=A+B$。在左端用 $B=C-A$，在右端同样用 $B=C-A$，分别得到

$$
\begin{aligned}
AC^{-1}B
&=AC^{-1}(C-A)=A-AC^{-1}A,\\
BC^{-1}A
&=(C-A)C^{-1}A=A-AC^{-1}A.
\end{aligned}
$$

两端均等于同一矩阵，恒等式得证。全过程只使用结合律、分配律及 $C^{-1}C=CC^{-1}=I$，没有交换矩阵乘法的次序。因此不需要 $AB=BA$，也不要求 $A$ 或 $B$ 单独可逆。

**方法总结：** 当逆矩阵对应的是一个和时，将相邻因子改写成“这个和减去另一项”，使两侧落到同一个表达式。处理非交换乘法，应保持每个因子的原有次序。

[返回题号导航](#题号导航)

## 问题 B82

**原题号：** 习题 3.3.B 第 6 题。[原题 PDF 第 20 页](/files/problems/楼分析习题-v1.pdf#page=20)。

**题目：** 设 $A,B$ 为半正定矩阵。证明：存在正定矩阵 $S$，使 $ASB=BSA$。

原题提示：存在正交矩阵 $P$ 和 $0\le m\le n$，使

$$
P(A+B)P^{\mathsf T}
=\begin{pmatrix}O&O\\O&\Lambda\end{pmatrix},
$$

其中 $\Lambda$ 是 $m$ 阶正定矩阵；此时必有

$$
PAP^{\mathsf T}=\begin{pmatrix}O&O\\O&\widetilde A\end{pmatrix},
\qquad
PBP^{\mathsf T}=\begin{pmatrix}O&O\\O&\widetilde B\end{pmatrix},
$$

且 $\widetilde A,\widetilde B$ 为 $m$ 阶半正定矩阵。

**证明：** 按原题正交变换的约定，半正定、正定矩阵均指实对称矩阵。令 $C=A+B$，它也半正定。先证明

$$
\ker C=\ker A\cap\ker B.
$$

对任意实对称半正定矩阵 $H$，由正交对角化可写成 $H=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_n)Q^{\mathsf T}$，其中 $\lambda_j\ge0$。令 $z=Q^{\mathsf T}x$，则

$$
x^{\mathsf T}Hx=\sum_{j=1}^{n}\lambda_j z_j^2.
$$

若此和为零，每项都必须为零，故 $\lambda_j z_j=0$ 对所有 $j$ 成立，从而 $Hx=0$。

现在若 $Cx=0$，则

$$
0=x^{\mathsf T}Cx=x^{\mathsf T}Ax+x^{\mathsf T}Bx.
$$

右端两项都非负，因而分别为零；由上段结论得到 $Ax=Bx=0$。反向包含由 $C=A+B$ 立即成立，核空间等式得证。

记 $K=\ker C$、$m=\dim K^\perp$。取适配于正交分解 $\mathbb R^n=K\oplus K^\perp$ 的标准正交基，以其坐标变换矩阵为 $P$。因为 $A,B$ 都在 $K$ 上为零，其变换后的前 $n-m$ 列为零；再由对称性，前 $n-m$ 行也为零。因此恰好得到题目提示中的三个分块式，且

$$
\widetilde A+\widetilde B=\Lambda.
$$

限制在 $K^\perp$ 上的 $C$ 正定：若非零 $x\in K^\perp$ 满足 $x^{\mathsf T}Cx=0$，上面的半正定性质给出 $Cx=0$，即 $x\in K$，矛盾。因此 $m>0$ 时 $\Lambda$ 可逆且 $\Lambda^{-1}$ 正定。

先设 $0<m<n$，定义

$$
S=P^{\mathsf T}
\begin{pmatrix}I_{n-m}&O\\O&\Lambda^{-1}\end{pmatrix}P.
$$

对非零 $x$，写 $Px=(u,v)^{\mathsf T}$，有

$$
x^{\mathsf T}Sx=\|u\|^2+v^{\mathsf T}\Lambda^{-1}v>0,
$$

所以 $S$ 是实对称正定矩阵。由 B81 应用于 $\widetilde A,\widetilde B$，

$$
\widetilde A\Lambda^{-1}\widetilde B
=\widetilde B\Lambda^{-1}\widetilde A.
$$

相应地，

$$
\begin{aligned}
P(ASB)P^{\mathsf T}
&=\begin{pmatrix}O&O\\O&\widetilde A\Lambda^{-1}\widetilde B\end{pmatrix},\\
P(BSA)P^{\mathsf T}
&=\begin{pmatrix}O&O\\O&\widetilde B\Lambda^{-1}\widetilde A\end{pmatrix}.
\end{aligned}
$$

两式相等，乘回 $P^{\mathsf T}$ 与 $P$ 即得 $ASB=BSA$。

边界情形分别处理：若 $m=0$，则 $K=\mathbb R^n$，核空间等式说明 $A=B=O$，取 $S=I_n$ 即可；若 $m=n$，则 $C$ 正定，直接取 $S=C^{-1}$，由 B81 得到结论。故所有半正定情形都已覆盖。

**方法总结：** 半正定矩阵之和的核恰是共同零空间。先将这一空间分离，在其正交补上对矩阵和取逆，再在零空间上补上正定的单位块，就能把可逆情形的恒等式推广到奇异情形。

[返回题号导航](#题号导航)

## 问题 B83

**原题号：** 习题 3.3.B 第 7 题。[原题 PDF 第 20 页](/files/problems/楼分析习题-v1.pdf#page=20)。

**题目：** 设 $A,B$ 是两个 $n$ 阶方阵，满足 $AB=BA$。证明

$$
\det\begin{pmatrix}A&-B\\B&A\end{pmatrix}
=\det(A^2+B^2).
$$

**证明：** 先设 $A$ 可逆。由 $AB=BA$，左右分别乘以 $A^{-1}$ 可得 $BA^{-1}=A^{-1}B$。利用行列式为 $1$ 的分块下三角矩阵消去左下块：

$$
\begin{pmatrix}I&O\\-BA^{-1}&I\end{pmatrix}
\begin{pmatrix}A&-B\\B&A\end{pmatrix}
=\begin{pmatrix}A&-B\\O&A+BA^{-1}B\end{pmatrix}.
$$

由交换关系，右下块为

$$
A+BA^{-1}B=A+A^{-1}B^2=A^{-1}(A^2+B^2).
$$

因此

$$
\begin{aligned}
\det\begin{pmatrix}A&-B\\B&A\end{pmatrix}
&=\det A\,\det\bigl(A^{-1}(A^2+B^2)\bigr)\\
&=\det(A^2+B^2).
\end{aligned}
$$

现在允许 $A$ 奇异。令 $A_t=A+tI$，其中 $t$ 为实参数。它与 $B$ 仍然交换，而 $\det(A+tI)$ 是关于 $t$ 的首一 $n$ 次多项式，只有有限个实零点。因此可以选取实数列 $t_k\to0$，使每个 $A_{t_k}$ 都可逆。将刚证明的结论应用于 $A_{t_k},B$，得到

$$
\det\begin{pmatrix}A_{t_k}&-B\\B&A_{t_k}\end{pmatrix}
=\det(A_{t_k}^2+B^2).
$$

行列式是矩阵元素的多项式，因而连续；矩阵乘法也逐项连续。令 $k\to\infty$，两端分别趋于原题的两端，结论成立。这个极限过程不要求 $A^2+B^2$ 可逆，故也包含结果行列式为零的情形。

交换条件确实不能任意删去。例如取

$$
A=\begin{pmatrix}1&0\\0&0\end{pmatrix},
\qquad B=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

此时 $AB\ne BA$，且直接计算得

$$
\det\begin{pmatrix}
1&0&0&-1\\
0&0&-1&0\\
0&1&1&0\\
1&0&0&0
\end{pmatrix}=1,
\qquad
\det(A^2+B^2)=\det\begin{pmatrix}2&0\\0&1\end{pmatrix}=2.
$$

**方法总结：** 先在可逆情形用分块消元证明恒等式，再用 $A+tI$ 避开有限个奇异参数，以连续性补齐退化情形。交换条件用在化简 Schur 补的具体位置，应单独核查。

[返回题号导航](#题号导航)

## 问题 B84

**原题号：** 习题 3.3.B 第 8 题。[原题 PDF 第 20 页](/files/problems/楼分析习题-v1.pdf#page=20)。

**题目：** 设 $A,B$ 均为 $n$ 阶方阵。证明

$$
\det\begin{pmatrix}A&B\\B&A\end{pmatrix}
=\det(A+B)\det(A-B).
$$

**证明：** 令

$$
M=\begin{pmatrix}A&B\\B&A\end{pmatrix},
\qquad
T=\begin{pmatrix}I&I\\I&-I\end{pmatrix}.
$$

直接相乘得 $T^2=2I_{2n}$，故 $T$ 可逆且 $T^{-1}=T/2$。继续按分块乘法计算：

$$
\begin{aligned}
MT&=\begin{pmatrix}A+B&A-B\\A+B&-(A-B)\end{pmatrix},\\
T^{-1}MT&=\begin{pmatrix}A+B&O\\O&A-B\end{pmatrix}.
\end{aligned}
$$

相似矩阵的行列式相同，分块对角矩阵的行列式为两个对角块行列式之积，因此

$$
\det M=\det(T^{-1}MT)=\det(A+B)\det(A-B).
$$

上述计算适用于实矩阵或复矩阵，不要求 $AB=BA$，也不要求 $A+B$ 或 $A-B$ 可逆。变换的含义是将向量对改用“和”与“差”的坐标：子空间 $\{(x,x):x\in\mathbb R^n\}$ 和 $\{(x,-x):x\in\mathbb R^n\}$ 分别不变，$M$ 在其上分别表现为 $A+B$ 与 $A-B$；复矩阵时将 $\mathbb R^n$ 换成 $\mathbb C^n$ 即可。

**方法总结：** 对角块相同、非对角块相同的矩阵，天然适合使用和差坐标。先找两个互补不变子空间，再作明确的相似变换，可同时处理可逆与奇异情形。

[返回题号导航](#题号导航)

## 七题方法总结

- **B78：闭集覆盖取得局部统一估计。** 伸缩区间最终相接，将对参数区间的控制转为对无穷远端的控制。
- **B79：从介值性到保序轨道。** 单射排除峰谷，轨道差满足线性递推，正比值与负判别式互相冲突。
- **B80：用整数上界分层。** 逐点有界产生闭覆盖，某个层次含有区间，给出局部一致有界。
- **B81：利用和的结构消去逆矩阵。** 两侧都改写为同一表达式，严格保持乘法次序。
- **B82：分离共同零空间。** 在有效子空间上取逆，再在核空间上补正定块，构造完整的正定矩阵。
- **B83：先消元，再以连续性补退化情形。** 小标量扰动保留交换关系，有限个奇异参数可以避开。
- **B84：和差坐标揭示不变子空间。** 以固定可逆变换把分块矩阵对角化，无需额外的交换或可逆条件。

**后续：** 本批完成后累计作答 **84 道 B 组习题**，其中第一章 21 题、第二章 44 题、第三章 19 题。下一批从习题 **3.3.B 第 9 题** 开始，继续按原书 B 组出现顺序连续完成七题。

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [第三章索引](/problems/collections/lou-analysis/chapters/3/) · [上一批 B71—B77](/problems/3ddc58f0d3bf52252dc7207f/)
