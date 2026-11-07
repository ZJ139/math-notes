---
title: "每周一题好题选讲（2017年）：多项式、秩与二次型的结构方法"
description: "从2017年34道每周一题中选出13题：统一多项式逆、参数消重根、不变补空间、秩的等号、二次型配方与交换差分；全部采用高等代数范围内的证明。"
subject: "高等代数"
tags: [每周一题, 好题选讲, "2017", 多项式, 不变子空间, 矩阵的秩, 二次型]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2016 年](/essays/34ee19788a3afac12086375d/) · [2018 年](/essays/52bc0e24478b1b81c7ab09fc/)


本篇从 2017 年的 34 道题中选出 13 道。入选依据是能否揭示一种值得迁移的结构，而非计算长度或题面难度。每题保留原题要求，并给出入选理由、完整证明和可验证的推广。数域记为 $K$；$I$、$O$ 分别表示相应阶数的单位阵、零阵；$\operatorname{rank}$、$\operatorname{tr}$、$\ker$、$\operatorname{Im}$ 分别表示秩、迹、核与像。

2017S10 的原解使用了商域，本篇改用循环子空间与多项式 Bézout 等式。2017S14 的原解之一使用反常积分，本篇改为两种纯代数证明。其余解答也重新组织为能够直接复用的方法。

[每周一题原分册目录](/problems/collections/fudan-weekly/) · [合订本](/files/problems/每周一题解答.pdf)

## 题号导航

- [问题 2017S03：用同一个多项式表示多个逆矩阵](#问题-2017s03)
- [问题 2017S04：把例外参数压缩为多项式的有限个零点](#问题-2017s04)
- [问题 2017S08：三对角递推、简单谱与交换矩阵](#问题-2017s08)
- [问题 2017S10：无重因式与不变补空间](#问题-2017s10)
- [问题 2017S12：分块半正定性给出特征值界](#问题-2017s12)
- [问题 2017S13：非负迹的零值刚性](#问题-2017s13)
- [问题 2017S14：Cauchy 矩阵的两种代数正定性证明](#问题-2017s14)
- [问题 2017S15：约束二次型与行列式之比](#问题-2017s15)
- [问题 2017A10：分块秩的等号与矩阵方程](#问题-2017a10)
- [问题 2017A11：最高阶主子式为什么不能抵消](#问题-2017a11)
- [问题 2017A12：耦合核方程变成平方和](#问题-2017a12)
- [问题 2017A13：用交换差分构造非零行列式](#问题-2017a13)
- [问题 2017A15：反交换关系、奇偶性与共同不变子空间](#问题-2017a15)
- [方法之间的联系](#方法之间的联系)

## 问题 2017S03

**原题号：** 2017S03。[原解答 PDF 第 88 页](/files/problems/每周一题解答.pdf#page=88)

**题目：** 设 $A_1,\ldots,A_m\in M_n(K)$，$g\in K[x]$，且所有 $g(A_i)$ 均可逆。用两种方法证明：存在同一个 $h\in K[x]$，使

$$
g(A_i)^{-1}=h(A_i)\qquad(1\le i\le m).
$$

**入选理由：** “每个逆矩阵分别是多项式”并不立即给出“同一个多项式”。分块直和与多项式最小公倍式分别提供两种统一有限多个条件的办法。

**证明：** 令 $C=\operatorname{diag}(g(A_1),\ldots,g(A_m))$，其特征多项式写为 $p(t)=c_0+c_1t+\cdots+t^{mn}$。因为 $C$ 可逆，$c_0\ne0$。由 Cayley–Hamilton 定理，

$$
C^{-1}=-c_0^{-1}(c_1I+c_2C+\cdots+C^{mn-1}).
$$

记右端对应的多项式为 $u(C)$，取 $h(x)=u(g(x))$。比较各对角块即得 $g(A_i)^{-1}=h(A_i)$。

另一证明从各矩阵的极小多项式 $\mu_i$ 出发。先证 $\gcd(g,\mu_i)=1$。否则写 $\mu_i=dq$、$g=dr$，其中 $\deg d>0$，便有

$$
g(A_i)q(A_i)=r(A_i)\mu_i(A_i)=O.
$$

由 $g(A_i)$ 可逆得 $q(A_i)=O$，与 $\deg q<\deg\mu_i$ 矛盾。因此 $g$ 与 $M=\operatorname{lcm}(\mu_1,\ldots,\mu_m)$ 互素。Bézout 等式给出 $hg+vM=1$，在各 $A_i$ 处代入，得到 $h(A_i)g(A_i)=I$。

**方法总结与推广：** 有限多个矩阵可以先组成一个分块对角阵，转为一个矩阵的问题。第二种证明还给出精确判据：$g(A)$ 可逆当且仅当 $\gcd(g,\mu_A)=1$；充分性直接来自 Bézout 等式。将 $h$ 除以 $M$ 取余，可进一步要求 $\deg h<\deg M$。这些结论适用于大小不同的有限多个方阵。

[返回题号导航](#题号导航)

## 问题 2017S04

**原题号：** 2017S04。[原解答 PDF 第 89 页](/files/problems/每周一题解答.pdf#page=89)

**题目：** 设 $A=(a_{ij})\in M_n(\mathbb C)$。证明存在 $\delta>0$，使所有 $0<s<\delta$ 对应的矩阵

$$
A(s)=A+\operatorname{diag}(s,s^2,\ldots,s^n)
$$

均可对角化。

**入选理由：** 这是“先在容易的参数处证明一次，再用多项式排除有限例外”的范例。它并不需要特征值连续性或复分析。

**证明：** $n=1$ 时显然。设 $n\ge2$，取

$$
R>\max_i\sum_j|a_{ij}|,\qquad C=nR+|\operatorname{tr}A|,
\qquad t>\max\{2n,2C,2R+1\}.
$$

若 $A(t)x=\lambda x$、$x\ne0$，取 $|x_i|=\max_j|x_j|$，则

$$
|\lambda-t^i|=\left|\sum_j a_{ij}\frac{x_j}{x_i}\right|<R.
$$

因此所有特征值均在以 $t^i$ 为中心、半径为 $R$ 的圆盘内。这些圆盘两两不交，因为相邻中心距离至少为 $t(t-1)>2R$。

设第 $i$ 个圆盘中按代数重数计算共有 $m_i$ 个特征值。由 $\sum_i m_i=n$ 和特征值之和等于迹，

$$
\left|\sum_{i=1}^n(m_i-1)t^i\right|\le nR+|\operatorname{tr}A|=C.
$$

若某个 $m_i\ne1$，取这样的最大指标 $k$。$m_k-1$ 是非零整数，且 $|m_i-1|\le n-1$，故

$$
\begin{aligned}
\left|\sum_i(m_i-1)t^i\right|
&\ge t^k-(n-1)\sum_{i<k}t^i\\
&\ge t^k\left(1-\frac{n-1}{t-1}\right)
>\frac{t^k}{2}\ge\frac t2>C,
\end{aligned}
$$

矛盾。故所有 $m_i=1$，$A(t)$ 的特征值互异。

现令 $p_s(x)=\det(xI-A(s))$，并定义

$$
F(s)=\det\bigl(p_s'(A(s))\bigr),
$$

其中撇号是对 $x$ 的多项式求导。$F$ 是关于 $s$ 的多项式。如果 $p_s$ 有重根 $\lambda$，取 $A(s)v=\lambda v$、$v\ne0$，便有 $p_s'(A(s))v=p_s'(\lambda)v=0$，故 $F(s)=0$。另一方面，$A(t)$ 有互异特征值 $\lambda_1,\ldots,\lambda_n$，在特征向量基下

$$
F(t)=\prod_{j=1}^n p_t'(\lambda_j)\ne0.
$$

所以 $F$ 不是零多项式，只能有有限个零点。选择 $\delta>0$，使 $(0,\delta)$ 不含它的实零点。此时 $p_s$ 没有重根，$A(s)$ 因而可对角化。

**方法总结与推广：** 对任意元素为参数 $s$ 的多项式的矩阵族 $B(s)$，若某个参数处有互异特征值，则除有限个参数外都有互异特征值。证明仍取 $\det(p_s'(B(s)))$。关键是先展示一个“好参数”，从而证明检测多项式不是恒零；本题用大参数分离中心，再把结论转回小参数。

[返回题号导航](#题号导航)

## 问题 2017S08

**原题号：** 2017S08。[原解答 PDF 第 93 页](/files/problems/每周一题解答.pdf#page=93)

**题目：** 实对称三对角矩阵 $A$ 的主对角元为 $a_1,\ldots,a_n$，上下次对角元均为 $1$，其余元素为零。证明 $A$ 有 $n$ 个互异特征值，并求

$$
\mathcal C(A)=\{B\in M_n(\mathbb R):AB=BA\}
$$

作为实线性空间的维数。

**入选理由：** 不求出一个特征值，也能由递推证明所有特征值互异；进而把交换矩阵全部化为多项式。

**证明：** 对 $x\in\ker(A-\lambda I)$，约定 $x_0=x_{n+1}=0$，逐行得到

$$
x_{k+1}=(\lambda-a_k)x_k-x_{k-1}\qquad(1\le k\le n).
$$

故 $x$ 由首坐标 $x_1$ 唯一决定，特别地 $x_1=0$ 时 $x=0$。于是映射 $x\mapsto x_1$ 在特征子空间上为单射，每个特征子空间至多一维。实对称矩阵可以正交对角化，各特征子空间维数之和为 $n$，故恰有 $n$ 个互异实特征值。

取正交阵 $Q$ 使 $Q^{\mathsf T}AQ=D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$。设 $Y=Q^{\mathsf T}BQ=(y_{ij})$，则 $AB=BA$ 等价于

$$
(\lambda_i-\lambda_j)y_{ij}=0\qquad(1\le i,j\le n).
$$

由于特征值互异，$Y$ 恰为任意对角阵，故 $\dim\mathcal C(A)=n$。

**方法总结与推广：** 将上下次对角元中的 $1$ 换成任意非零实数 $b_k$，递推变为 $b_kx_{k+1}=(\lambda-a_k)x_k-b_{k-1}x_{k-1}$，结论仍成立。还可由 Lagrange 插值选出次数小于 $n$ 的 $p$，使 $p(\lambda_i)=y_{ii}$，于是所有交换矩阵均为 $B=p(A)$。这也说明“递推唯一性→简单谱→多项式表示”是一条完整的方法链。

[返回题号导航](#题号导航)

## 问题 2017S10

**原题号：** 2017S10。[原解答 PDF 第 98 页](/files/problems/每周一题解答.pdf#page=98)

**题目：** 设 $T$ 是数域 $K$ 上有限维线性空间 $V$ 的线性变换。证明：$T$ 的极小多项式无重不可约因式，当且仅当每个 $T$ 不变子空间 $U$ 都有一个 $T$ 不变补空间 $W$，满足 $V=U\oplus W$。

**入选理由：** 普通子空间总有补空间，要求补空间仍不变则很不相同。本题把这个几何性质精确地翻译为极小多项式的因式结构。

**证明：** 先设极小多项式 $m=p_1\cdots p_s$，其中 $p_i$ 是互异首一不可约多项式。令 $M_i=m/p_i$。由 $\gcd(M_i,p_i)=1$，选取 $a_i,b_i$ 满足 $a_iM_i+b_ip_i=1$，记 $E_i=a_i(T)M_i(T)$。因为 $p_i(T)E_i=a_i(T)m(T)=0$，$E_i$ 的像包含在 $V_i=\ker p_i(T)$ 中。$E_i$ 在 $V_i$ 上为恒等，而在其他 $V_j$ 上为零。又因 $\sum_i a_iM_i-1$ 被每个 $p_j$ 整除，它被 $m$ 整除，故 $\sum_iE_i=I$。由此

$$
V=\bigoplus_iV_i,\qquad U=\bigoplus_iU_i,
\qquad U_i=U\cap V_i.
$$

第二式使用了 $E_i$ 是 $T$ 的多项式，因而保持 $U$。

固定 $i$，记 $p=p_i$、$d=\deg p$。对任意 $0\ne v\in V_i$，向量 $v,Tv,\ldots,T^{d-1}v$ 线性无关：否则某个非零 $q$ 满足 $\deg q<d$、$q(T)v=0$，而 $\gcd(p,q)=1$，Bézout 等式代入便得 $v=0$，矛盾。因此

$$
C(v)=\operatorname{span}\{v,Tv,\ldots,T^{d-1}v\}
$$

是 $d$ 维不变子空间。若 $v\notin U_i$，则 $C(v)\cap U_i=\{0\}$。事实上，非零交向量可写成 $q(T)v$、$\deg q<d$；由 $\gcd(p,q)=1$，$v$ 又是 $q(T)v$ 的多项式像，从而 $v\in U_i$，矛盾。

从 $U_i$ 开始，每次在尚未张成的部分选取一个向量，加入上述循环子空间；每次都是不变直和，维数严格增加，有限次后得到 $V_i=U_i\oplus W_i$，其中 $W_i$ 为所加循环子空间之和。取 $W=\bigoplus_iW_i$ 即得所求不变补空间。此证明只使用基、维数和多项式互素性。

反之，设每个不变子空间均有不变补空间。若 $m=p^rq$，其中 $r\ge2$、$p$ 不可约、$\gcd(p,q)=1$，令 $U=\ker p(T)$，取 $V=U\oplus W$ 且 $W$ 不变。$p(T)|_W$ 的核为零，故在有限维空间 $W$ 上可逆。由 $p(T)^rq(T)|_W=0$ 得 $q(T)|_W=0$。另一方面 $p(T)|_U=0$，故 $(pq)(T)$ 在 $U,W$ 上均为零，进而零化 $V$；但 $\deg(pq)<\deg m$，矛盾。

**方法总结与推广：** 不可约多项式零化的空间里，一个非零循环子空间没有更小的非零不变子空间；它因此能够一块块补足给定不变子空间。若 $K=\mathbb C$，不可约多项式都是一次式，本题退化为：矩阵可对角化当且仅当每个不变子空间都有不变补空间。若 $K=\mathbb R$，还允许不可约二次因子，不能把“无重不可约因式”误写成“在实数域可对角化”。

[返回题号导航](#题号导航)

## 问题 2017S12

**原题号：** 2017S12。[原解答 PDF 第 99 页](/files/problems/每周一题解答.pdf#page=99)

**题目：** $A$ 是正定实对称矩阵，$B$ 是实矩阵，且

$$
M=\begin{pmatrix}A&B^{\mathsf T}\\B&A^{-1}\end{pmatrix}
$$

半正定。证明 $B$ 的所有复特征值都满足 $|\lambda|\le1$。

**入选理由：** 分块矩阵中的 $A^{-1}$ 提示选择一个能够消掉混合项的向量，由此制造与 $B$ 相适应的二次型，而非直接估计矩阵元素。

**证明：** 把向量 $\binom{x}{-ABx}$ 代入 $M$ 的二次型，得到

$$
0\le x^{\mathsf T}(A-B^{\mathsf T}AB)x.
$$

故 $A-B^{\mathsf T}AB$ 半正定。以下 $z^*$ 表示共轭转置。对于实对称半正定矩阵 $S$ 和复向量 $z=u+iv$，有 $z^*Sz=u^{\mathsf T}Su+v^{\mathsf T}Sv\ge0$；对正定矩阵 $A$，$z\ne0$ 时 $z^*Az>0$。

取 $Bz=\lambda z$、$z\ne0$，则

$$
0\le z^*(A-B^{\mathsf T}AB)z
=(1-|\lambda|^2)z^*Az.
$$

因此 $|\lambda|\le1$。

**方法总结与推广：** 本题实际上得到 $\|Bx\|_A\le\|x\|_A$，其中 $\|x\|_A^2=x^{\mathsf T}Ax$。更一般，若 $A$ 正定且 $c^2A-B^{\mathsf T}AB$ 半正定、$c\ge0$，同样代入特征向量就有 $|\lambda|\le c$。分块半正定性的作用，是通过配方提供这种适合问题的“长度”。

[返回题号导航](#题号导航)

## 问题 2017S13

**原题号：** 2017S13。[原解答 PDF 第 100 页](/files/problems/每周一题解答.pdf#page=100)

**题目：** $A,B$ 均为半正定实对称矩阵，且 $\operatorname{tr}(AB)=0$。利用半正定矩阵的基本性质证明 $AB=O$。

**入选理由：** 一般矩阵的迹为零远不足以推出矩阵为零。关键在于把迹写成没有抵消可能的非负项之和。

**证明：** 先说明：若 $B$ 半正定且 $u^{\mathsf T}Bu=0$，则 $Bu=0$。由正交对角化写 $B=Q\operatorname{diag}(\mu_j)Q^{\mathsf T}$、$\mu_j\ge0$，便有 $\sum_j\mu_j(Q^{\mathsf T}u)_j^2=0$，每项均为零，因此 $Bu=0$。

写 $A=\sum_j\lambda_j u_ju_j^{\mathsf T}$，其中 $\{u_j\}$ 为标准正交基、$\lambda_j\ge0$。于是

$$
0=\operatorname{tr}(AB)=\sum_j\lambda_j u_j^{\mathsf T}Bu_j.
$$

各项非负，故 $\lambda_j>0$ 时必有 $Bu_j=0$。从而

$$
BA=\sum_j\lambda_j(Bu_j)u_j^{\mathsf T}=O.
$$

转置得 $AB=O$。

**方法总结与推广：** 条件等价于 $\operatorname{Im}A\perp\operatorname{Im}B$：由 $AB=0$ 可得 $(Ax)^{\mathsf T}By=x^{\mathsf T}ABy=0$；反向也成立。因此迹为零在此具有明确的空间意义。若缺少半正定性，$A=I_2$、$B=\operatorname{diag}(1,-1)$ 就给出 $\operatorname{tr}(AB)=0$ 而 $AB\ne0$ 的反例。

[返回题号导航](#题号导航)

## 问题 2017S14

**原题号：** 2017S14。[原解答 PDF 第 101 页](/files/problems/每周一题解答.pdf#page=101)

**题目：** $a_1,\ldots,a_n$ 是互异正实数。用两种方法证明

$$
C=\left(\frac1{a_i+a_j}\right)_{i,j=1}^n
$$

是正定矩阵。

**入选理由：** 分式元素经过消元仍保留同类结构。这个封闭性同时解释正定性与行列式的乘积公式；原解中的反常积分可以完全去掉。

**证明：** 先用配方归纳。$n=1$ 显然。将 $C=\begin{pmatrix}\alpha&b^{\mathsf T}\\b&C_1\end{pmatrix}$，其中 $\alpha=1/(2a_1)>0$，$b_i=1/(a_1+a_i)$（$i\ge2$）。直接通分得到

$$
\frac1{a_i+a_j}-\frac{2a_1}{(a_i+a_1)(a_j+a_1)}
=\frac{(a_i-a_1)(a_j-a_1)}{(a_i+a_j)(a_i+a_1)(a_j+a_1)}.
$$

故 $C_1-\alpha^{-1}bb^{\mathsf T}=DC_1D$，其中

$$
D=\operatorname{diag}\left(\frac{a_i-a_1}{a_i+a_1}\right)_{i=2}^n
$$

可逆。归纳假设给出 $C_1$ 正定，故 $DC_1D$ 正定。对任意 $x=\binom{t}{y}\ne0$，配方得

$$
x^{\mathsf T}Cx
=\alpha(t+\alpha^{-1}b^{\mathsf T}y)^2+y^{\mathsf T}DC_1Dy>0.
$$

另一证明用顺序主子式判别法。先建立 Cauchy 行列式公式

$$
\det\left(\frac1{x_i+y_j}\right)_{i,j=1}^k
=\frac{\prod_{i<j}(x_j-x_i)(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}.
$$

将左端乘以分母所得的多项式分别对 $x_i$、$y_j$ 是交错的，故被分子中的两组 Vandermonde 因子整除；两者总次数都为 $k(k-1)$，相差一个常数 $c_k$。在有理恒等式中先乘以 $x_k+y_k$，再代入 $x_k=-y_k$，左端只剩最后一行最后一列对应的余子式；右端涉及第 $k$ 个指标的其余因子逐项抵消，故 $c_k=c_{k-1}$。$c_1=1$，公式得证。此处在互异未定元中比较恒等式，随后可代入分母不为零的数值。

令 $x_i=y_i=a_i$，得到每个顺序主子式

$$
\det C[1\!:\!k,1\!:\!k]
=\frac{\prod_{i<j\le k}(a_j-a_i)^2}
{\left(\prod_{i=1}^k2a_i\right)\prod_{i<j\le k}(a_i+a_j)^2}>0.
$$

由正定二次型的顺序主子式判别法，$C$ 正定。

**方法总结与推广：** 第一个证明的核心是消元后出现可逆对角合同，而不是记住专名公式。第二个证明展示“乘分母→找交错因子→比较次数→确定常数”的行列式计算法。若允许部分 $a_i$ 相等，按相同值将坐标分组，二次型只依赖各组坐标之和；因此矩阵半正定，秩恰为不同 $a_i$ 的个数。

[返回题号导航](#题号导航)

## 问题 2017S15

**原题号：** 2017S15。[原解答 PDF 第 101 页](/files/problems/每周一题解答.pdf#page=101)

**题目：** $A$ 为正定实对称矩阵，$A_i$ 为删去第 $i$ 行、第 $i$ 列所得的主子矩阵。证明在约束 $x_i=1$ 下，$x^{\mathsf T}Ax$ 的最小值为 $\det A/\det A_i$。

**入选理由：** 行列式之比与最小值并非偶合，它们都是同一次配方剩下的常数项；这是把代数计算与几何最小化统一起来的例子。

**证明：** 同步置换行列，把第 $i$ 个坐标移到最后。写

$$
A=\begin{pmatrix}C&b\\b^{\mathsf T}&a\end{pmatrix},\qquad
x=\binom y1,
$$

其中 $C$ 与原 $A_i$ 相同。$C$ 正定，故可逆。配方得

$$
x^{\mathsf T}Ax=(y+C^{-1}b)^{\mathsf T}C(y+C^{-1}b)+a-b^{\mathsf T}C^{-1}b.
$$

因此最小值为 $a-b^{\mathsf T}C^{-1}b$，且仅在 $y=-C^{-1}b$ 处取得。另一方面，用最后一行减去前面各行的适当线性组合，得到

$$
\det A=\det C\,(a-b^{\mathsf T}C^{-1}b).
$$

二者相除即得结论。$n=1$ 时约定空矩阵的行列式为 $1$，结论同样成立。

**方法总结与推广：** 若把坐标条件改为 $c^{\mathsf T}x=d$、$c\ne0$，令

$$
x_0=\frac{dA^{-1}c}{c^{\mathsf T}A^{-1}c}.
$$

对任意满足约束的 $x=x_0+z$，有 $c^{\mathsf T}z=0$，故交叉项 $z^{\mathsf T}Ax_0=0$，从而

$$
x^{\mathsf T}Ax=\frac{d^2}{c^{\mathsf T}A^{-1}c}+z^{\mathsf T}Az.
$$

这直接给出唯一最小点与最小值，无须拉格朗日乘数法。

[返回题号导航](#题号导航)

## 问题 2017A10

**原题号：** 2017A10。[原解答 PDF 第 116 页](/files/problems/每周一题解答.pdf#page=116)

**题目：** 设 $A\in M_{m\times n}(K)$、$B\in M_{p\times q}(K)$、$C\in M_{m\times q}(K)$，记

$$
M=\begin{pmatrix}A&C\\O&B\end{pmatrix}.
$$

证明：（1）$\operatorname{rank}M=\operatorname{rank}A+\operatorname{rank}B$ 当且仅当矩阵方程 $AX+YB=C$ 有解，其中 $X\in M_{n\times q}(K)$、$Y\in M_{m\times p}(K)$；（2）$\operatorname{rank}M\le\min\{\operatorname{rank}A+q,\operatorname{rank}B+m\}$；（3）给出 Sylvester 不等式和 Frobenius 不等式取等号的充要条件。

**入选理由：** “秩不等式取等号”可以转成一个可检查、可构造的矩阵方程。一个分块判据能同时处理两种重要秩不等式。

**证明：** （1）若 $C=AX+YB$，则

$$
\begin{pmatrix}I_m&-Y\\O&I_p\end{pmatrix}
\begin{pmatrix}A&C\\O&B\end{pmatrix}
\begin{pmatrix}I_n&-X\\O&I_q\end{pmatrix}
=\begin{pmatrix}A&O\\O&B\end{pmatrix}.
$$

左右所乘矩阵可逆，故秩等于两对角块秩之和。

反之，记 $a=\operatorname{rank}A$、$b=\operatorname{rank}B$，用可逆矩阵作相抵变换，使 $PAQ=A_0=\begin{pmatrix}I_a&O\\O&O\end{pmatrix}$、$RBS=B_0=\begin{pmatrix}I_b&O\\O&O\end{pmatrix}$，并令 $C_0=PCS$。按前 $a$ 行与前 $b$ 列把 $C_0$ 分为四块 $C_{11},C_{12},C_{21},C_{22}$。利用 $A_0$ 的单位块作列消元，可消去 $C_0$ 的前 $a$ 行；利用 $B_0$ 的单位块作行消元，可消去余下部分的前 $b$ 列。因此

$$
\operatorname{rank}M=a+b+\operatorname{rank}C_{22}.
$$

秩取等号时 $C_{22}=O$。此时 $A_0X_0$ 可以任意指定 $C_0$ 的前 $a$ 行，$Y_0B_0$ 可以任意指定其前 $b$ 列，故可选取 $X_0,Y_0$ 使 $C_0=A_0X_0+Y_0B_0$。代回得

$$
C=A(QX_0S^{-1})+(P^{-1}Y_0R)B,
$$

所求方程有解。

（2）将 $M$ 分别拆为“左侧 $A$ 块加右侧 $q$ 列”和“上方 $m$ 行加右下方 $B$ 块”，秩的次可加性给出

$$
\operatorname{rank}M\le\operatorname{rank}A+q,
\qquad
\operatorname{rank}M\le m+\operatorname{rank}B.
$$

（3）为避免尺寸混淆，改用 $U\in M_{a\times b}(K)$、$V\in M_{b\times c}(K)$。对

$$
N=\begin{pmatrix}V&I_b\\O&U\end{pmatrix}
$$

先用右上角 $I_b$ 消元，得 $\operatorname{rank}N=b+\operatorname{rank}(UV)$；由（1）及其证明，又有 $\operatorname{rank}N\ge\operatorname{rank}V+\operatorname{rank}U$。因此

$$
\operatorname{rank}(UV)\ge\operatorname{rank}U+\operatorname{rank}V-b,
$$

且等号成立当且仅当存在适当尺寸的 $P,Q$，使

$$
PU+VQ=I_b.
$$

再设 $U\in M_{a\times b}(K)$、$V\in M_{b\times c}(K)$、$W\in M_{c\times d}(K)$。对

$$
L=\begin{pmatrix}UV&O\\V&VW\end{pmatrix},
$$

上方块行减去 $U$ 倍下方块行，再用左下方 $V$ 消去右下方 $VW$，可得 $\operatorname{rank}L=\operatorname{rank}V+\operatorname{rank}(UVW)$。对下三角分块矩阵应用（1）的转置形式，得到

$$
\operatorname{rank}(UVW)\ge\operatorname{rank}(UV)+\operatorname{rank}(VW)-\operatorname{rank}V,
$$

且等号成立当且仅当存在适当尺寸的 $P,Q$，使

$$
PUV+VWQ=V.
$$

**方法总结与推广：** 第一问还有直观形式：$AX+YB=C$ 有解当且仅当 $C(\ker B)\subseteq\operatorname{Im}A$。必要性由代入 $\ker B$ 立即得到；充分性是在 $\ker B$ 的基上选取 $C$ 值的 $A$ 原像并延拓成 $X$，使 $C-AX$ 在 $\ker B$ 上为零，再在 $\operatorname{Im}B$ 上定义 $Y(By)=(C-AX)y$ 并作线性延拓。定义与原像选择无关，正是因为两原像之差落在 $\ker B$ 中。这说明秩的额外增加来自 $C$ 在 $\ker B$ 上产生的、超出 $\operatorname{Im}A$ 的方向。

[返回题号导航](#题号导航)

## 问题 2017A11

**原题号：** 2017A11。[原解答 PDF 第 119 页](/files/problems/每周一题解答.pdf#page=119)

**题目：** $A$ 为实对称矩阵，$\operatorname{rank}A=r$。用高等代数第一学期的方法证明：$A$ 的所有 $r$ 阶主子式之和不为零。

**入选理由：** 不依赖特征值，也能证明所有最高阶非零主子式同号。其结构是“固定一个主子式，其余主子式等于它乘以平方”。

**证明：** 先用对称消元证明 $A$ 存在非零 $r$ 阶主子式。若某个对角元非零，取它作一阶主元块 $D$；若对角元全零但 $A\ne O$，取一个非零 $a_{ij}$，相应二阶主子矩阵 $D=\begin{pmatrix}0&a_{ij}\\a_{ij}&0\end{pmatrix}$ 可逆。同步换行换列后写

$$
A=\begin{pmatrix}D&E\\E^{\mathsf T}&F\end{pmatrix}.
$$

对称消元将其合同化为 $\operatorname{diag}(D,F-E^{\mathsf T}D^{-1}E)$，后者的剩余块仍对称、秩降去 $\dim D$。归纳选取剩余块的非零最高阶主子式；把对应指标与 $D$ 的指标合并，原矩阵的这一主子式等于 $\det D$ 乘以所选剩余主子式，故非零。归纳结束即得指标集 $I$、$|I|=r$，使 $H=A[I,I]$ 可逆。

$A$ 的第 $I$ 组列构成列空间的一组基。对任意 $r$ 元指标集 $J$，存在 $r$ 阶矩阵 $P_J$ 使

$$
A[:,J]=A[:,I]P_J.
$$

取其中的第 $I$ 组行及第 $J$ 组行，并利用对称性，得到

$$
A[I,J]=HP_J,\qquad
A[J,J]=A[J,I]P_J=P_J^{\mathsf T}HP_J.
$$

因此

$$
\sum_{|J|=r}\det A[J,J]
=\det H\sum_{|J|=r}(\det P_J)^2\ne0,
$$

因为 $P_I=I_r$，最后的平方和至少为 $1$。$r=0$ 时按唯一零阶主子式等于 $1$ 的约定同样成立。

**方法总结与推广：** 这个证明实际上得到更强结论：实对称矩阵所有最高阶非零主子式同号。用所选独立列组成矩阵 $R=A[:,I]$，还可恢复整个矩阵

$$
A=RH^{-1}R^{\mathsf T}.
$$

事实上各列由 $R$ 线性表示，限制到第 $I$ 组行即可确定系数为 $H^{-1}R^{\mathsf T}$。这是一种保留对称结构的秩分解，在研究主子式、二次型和秩时可以反复使用。

[返回题号导航](#题号导航)

## 问题 2017A12

**原题号：** 2017A12。[原解答 PDF 第 121 页](/files/problems/每周一题解答.pdf#page=121)

**题目：** $A,B,C,D$ 为同阶实方阵，$S^{\mathsf T}=-S$，$a\in\mathbb R\setminus\{0\}$，且

$$
AB=CD=aI+S.
$$

证明 $AD+B^{\mathsf T}C^{\mathsf T}$ 可逆。

**入选理由：** 单独展开目标矩阵难以利用条件。为核向量引入一个辅助向量后，两条矩阵方程中的交叉项恰好相消。

**证明：** 令 $M=aI+S$。对任意实向量 $z$，由 $z^{\mathsf T}Sz=0$ 得

$$
z^{\mathsf T}Mz=a\|z\|^2.
$$

故 $Mz=0$ 蕴含 $z=0$，$M$ 可逆。于是由 $AB=CD=M$ 可知 $A,B,C,D$ 均可逆。

设 $(AD+B^{\mathsf T}C^{\mathsf T})x=0$，令 $y=B^{-1}Dx$、$T=CB$，则

$$
Ty=Mx,\qquad My=-T^{\mathsf T}x.
$$

因此

$$
a(\|x\|^2+\|y\|^2)
=x^{\mathsf T}Mx+y^{\mathsf T}My
=x^{\mathsf T}Ty-y^{\mathsf T}T^{\mathsf T}x=0.
$$

$a\ne0$，故 $x=y=0$。目标矩阵的核为零，所以可逆。

**方法总结与推广：** 相同证明允许把 $aI$ 换成任意正定或负定实对称矩阵 $H$：若 $AB=CD=H+S$，仍有 $AD+B^{\mathsf T}C^{\mathsf T}$ 可逆。最后的等式改为 $x^{\mathsf T}Hx+y^{\mathsf T}Hy=0$，定号性仍迫使二者为零。因此真正起作用的是公共乘积的对称部分定号。

[返回题号导航](#题号导航)

## 问题 2017A13

**原题号：** 2017A13。[原解答 PDF 第 121 页](/files/problems/每周一题解答.pdf#page=121)

**题目：** 给定九个互不相同的实数 $a_1,\ldots,a_9$，证明可以重新排列为一个行列式不为零的 $3$ 阶矩阵。

**入选理由：** 不直接寻找“正确排列”，而是证明四个候选行列式的某个线性组合不为零。多重线性性使存在性问题变得可计算。

**证明：** $a_1+a_2+a_3$ 与 $a_1+a_2+a_4$ 不会同时为零，否则 $a_3=a_4$。故可选三个数 $c_1,c_2,c_3$，使 $c_1+c_2+c_3\ne0$，把其余六个数记为 $b_1,\ldots,b_6$。令

$$
\begin{aligned}
u&=(b_1,b_2,b_3),&\widetilde u&=(b_2,b_1,b_3),\\
v&=(b_4,b_5,b_6),&\widetilde v&=(b_4,b_6,b_5),
\end{aligned}
$$

并记 $c=(c_1,c_2,c_3)$。行列式按行的多重线性性给出

$$
\begin{aligned}
&\det\begin{pmatrix}u\\v\\c\end{pmatrix}
-\det\begin{pmatrix}\widetilde u\\v\\c\end{pmatrix}
-\det\begin{pmatrix}u\\\widetilde v\\c\end{pmatrix}
+\det\begin{pmatrix}\widetilde u\\\widetilde v\\c\end{pmatrix}\\
&\quad=\det\begin{pmatrix}u-\widetilde u\\v-\widetilde v\\c\end{pmatrix}\\
&\quad=(b_1-b_2)(b_5-b_6)
\det\begin{pmatrix}1&-1&0\\0&1&-1\\c_1&c_2&c_3\end{pmatrix}\\
&\quad=(b_1-b_2)(b_5-b_6)(c_1+c_2+c_3)\ne0.
\end{aligned}
$$

所以左端四个行列式中至少有一个不为零，而每个恰好使用九个给定数各一次。

**方法总结与推广：** 对一个关于 $k$ 个变量组分别线性的表达式 $F$，有差分恒等式

$$
F(u_1-v_1,\ldots,u_k-v_k)
=\sum_{\varepsilon\in\{0,1\}^k}(-1)^{\varepsilon_1+\cdots+\varepsilon_k}
F(w_{1,\varepsilon_1},\ldots,w_{k,\varepsilon_k}),
$$

其中 $w_{i,0}=u_i$、$w_{i,1}=v_i$；逐个变量展开即可证明。若差分后的向量结构简单，证明右端某个候选非零便可转为计算左端。本题是 $k=2$、固定第三行的应用。

[返回题号导航](#题号导航)

## 问题 2017A15

**原题号：** 2017A15。[原解答 PDF 第 123 页](/files/problems/每周一题解答.pdf#page=123)

**题目：** （1）设 $T$ 是数域 $K$ 上 $n\ge2$ 维空间的线性变换。如果只有平凡的 $T$ 不变子空间，证明 $T$ 可逆。（2）设 $T,S$ 是数域 $K$ 上 $2n+1$ 维空间的两个非零线性变换，$n\ge1$，且 $TS+ST=0$。证明二者都存在非平凡不变子空间。（3）举例说明偶数维时（2）一般不成立。

**入选理由：** 把奇数维信息交给行列式，再把不可逆性转成核空间。这还给出比原题更强的“共同不变子空间”。

**证明：** （1）$\ker T$ 总是 $T$ 不变子空间。若只有平凡不变子空间，$\ker T$ 只能为零或整个空间。后一种情况意味着 $T=0$，而维数至少为 $2$ 时任意一维子空间均为非平凡不变子空间，矛盾。故 $\ker T=0$，有限维下 $T$ 可逆。

（2）在一组基下记两个表示矩阵为 $A,B$。由 $AB=-BA$ 及维数为奇数，

$$
\det A\det B=\det(-BA)=-\det A\det B.
$$

数域特征为零，故至少一个矩阵奇异。不妨设 $T$ 不可逆。由于 $T\ne0$，有 $0\subsetneq\ker T\subsetneq V$。对于 $v\in\ker T$，

$$
T(Sv)=-S(Tv)=0.
$$

故 $\ker T$ 同时对 $T,S$ 不变，证明了二者均有非平凡不变子空间。

（3）在 $V=\mathbb Q^2$ 上取

$$
A=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
B=\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$

直接相乘得 $AB=-BA$，且 $A^2=-I_2$、$B^2=2I_2$。二维空间的非平凡子空间只能是一维，因此若存在，便给出一个有理特征值。但 $A$ 的特征值满足 $\lambda^2=-1$，$B$ 的特征值满足 $\lambda^2=2$，均不可能属于 $\mathbb Q$。故两个变换都没有非平凡有理不变子空间。

**方法总结与推广：** 若 $TS=cST$、$c\ne0$，则 $\ker T$ 自动对 $S$ 不变；只要能由其他条件推出 $T$ 非零且奇异，就获得共同不变子空间。在 $d$ 维中，行列式还给出 $(1-c^d)\det T\det S=0$。当 $c^d\ne1$ 且两变换非零时，这一条件同样保证共同的非平凡不变子空间。

[返回题号导航](#题号导航)

## 方法之间的联系

多项式方法在前三个结构问题中承担不同任务：2017S03 用互素性构造逆，2017S04 用有限根数控制例外，2017S10 用不可约因子组织不变子空间。二次型方法也有统一主线：2017S12、2017S14、2017S15 都通过选择变量或配方消去混合项；2017S13、2017A11 则利用同号性排除抵消。2017A10、2017A12、2017A15 提醒我们，矩阵等式往往应先解释成核、像或不变子空间的关系，再决定是否计算元素。
