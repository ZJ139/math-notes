---
title: "每周一题好题选讲（2015年）：让局部条件控制整体结构"
description: "从2015年26题中选出8题：子空间覆盖、迭代不变空间、插值、秩一交换子、行列式符号、伴随阵整除、幂秩稳定与评价映射。"
subject: "高等代数"
tags: [每周一题, 好题选讲, "2015", 不变子空间, 多项式, 行列式, 秩]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2014 年](/essays/0726fb759a692c1e14f69cf7/) · [2016 年](/essays/34ee19788a3afac12086375d/)


本篇从2015年的26道题中选取8题。它们分别展示：如何消除条件中随变量变化的选择，如何用一个向量生成适合研究的空间，如何把全体矩阵的约束压缩到一个向量，以及如何从有限的秩信息看出长期结构。解答保留原题的全部小问；所需的辅助事实在使用处说明。

## 题号导航

- [问题 2015S01：逐点二选一怎样变成整体二选一](#问题-2015s01)
- [问题 2015S04：从一个核向量生成不变子空间](#问题-2015s04)
- [问题 2015S05：用插值构造指定谱的循环矩阵](#问题-2015s05)
- [问题 2015S09：秩一交换子与最短反例](#问题-2015s09)
- [问题 2015S14：消除行列式的正负歧义](#问题-2015s14)
- [问题 2015A02：把余子式整除汇总到伴随阵](#问题-2015a02)
- [问题 2015A05：矩阵幂的稳定秩与稳定指数](#问题-2015a05)
- [问题 2015A07：评价映射给出维数上界](#问题-2015a07)
- [方法之间的联系](#方法之间的联系)

## 问题 2015S01

**原题号：**2015S01。[原解答 PDF 第12页](/files/problems/每周一题解答.pdf#page=12)。

**题目：**设 $\varphi$ 是 $M_n(\mathbb R)$ 上的线性变换。对任意 $A,B\in M_n(\mathbb R)$，或者

$$
\varphi(AB)=\varphi(A)\varphi(B),
$$

或者

$$
\varphi(AB)=\varphi(B)\varphi(A).
$$

证明：两个等式中至少有一个对所有 $A,B$ 恒成立。

**入选理由：**条件的“或者”可以随 $A,B$ 改变，不能直接交换量词。线性结构却能迫使这种选择保持一致。

**证明：**线性空间不能等于两个真子空间的并。事实上，若 $E=U\cup W$ 且二者都真，则可取 $u\in U\setminus W$、$w\in W\setminus U$；$u+w$ 属于任一子空间都会迫使另一个向量也属于该子空间，矛盾。

记 $E=M_n(\mathbb R)$。固定 $A$，令

$$
\begin{aligned}
U_A&=\{B:\varphi(AB)=\varphi(A)\varphi(B)\},\\
W_A&=\{B:\varphi(AB)=\varphi(B)\varphi(A)\}.
\end{aligned}
$$

两个等式对 $B$ 都是线性的，因此 $U_A,W_A$ 都是子空间。题设说明 $E=U_A\cup W_A$，所以 $U_A=E$ 或 $W_A=E$。

再令 $U=\{A:U_A=E\}$、$W=\{A:W_A=E\}$。对每个固定的 $B$，上述两个等式也都对 $A$ 线性，故 $U,W$ 分别是一族线性映射的核的交，仍是子空间。前一段说明 $E=U\cup W$，再次应用基本事实，得到 $U=E$ 或 $W=E$，即所求结论。

**方法总结与推广：**该证明只依赖两个差式分别对两个变量线性。因而，对任意双线性映射 $F,G:E\times E\to H$，若每对 $x,y$ 都满足 $F(x,y)=0$ 或 $G(x,y)=0$，则 $F\equiv0$ 或 $G\equiv0$。处理多个变量时，可以逐个固定变量，但每次都须验证所得集合确为子空间。

[返回题号导航](#题号导航)

## 问题 2015S04

**原题号：**2015S04。[原解答 PDF 第14—15页](/files/problems/每周一题解答.pdf#page=14)。

**题目：**设 $A\in M_n(\mathbb C)$、$C\in M_{k,n}(\mathbb C)$。若对任意 $\mu\in\mathbb C$，矩阵 $\begin{pmatrix}A-\mu I_n\\C\end{pmatrix}$ 都列满秩，证明对任意 $\lambda\in\mathbb C$，矩阵

$$
M(\lambda)=\begin{pmatrix}
C\\C(A-\lambda I_n)\\C(A-\lambda I_n)^2\\\vdots\\C(A-\lambda I_n)^{n-1}
\end{pmatrix}
$$

也列满秩。

**入选理由：**结论是一大块矩阵的秩，条件却只排除了某类特征向量。连接二者的桥梁是核中的迭代向量。

**证明：**固定 $\lambda$，记 $B=A-\lambda I_n$。若 $M(\lambda)$ 不列满秩，就有 $x\ne0$ 使 $CB^jx=0$（$0\le j<n$）。取最小正整数 $m\le n$，使

$$
B^mx\in U:=\operatorname{span}\{x,Bx,\ldots,B^{m-1}x\}.
$$

这样的 $m$ 存在，因为 $n+1$ 个迭代向量必线性相关；由最小性，前 $m$ 个向量线性无关。$B$ 将每个生成向量送到 $U$，所以 $BU\subseteq U$，进而 $AU\subseteq U$。同时 $0\ne U\subseteq\ker C$。

非零有限维复线性空间上的变换 $A|_U$ 有特征向量：其特征多项式在 $\mathbb C$ 中有根，因此可取 $y\in U\setminus\{0\}$ 和 $\mu\in\mathbb C$，满足 $Ay=\mu y$。又 $Cy=0$，这与 $\begin{pmatrix}A-\mu I_n\\C\end{pmatrix}$ 列满秩矛盾。

**方法总结与推广：**条件恰好等价于“$\ker C$ 中不含非零的 $A$-不变子空间”。一方面，非零复不变子空间含特征向量；另一方面，特征向量张成的一维空间就是不变子空间。若从一个 $x\in\ker C$ 出发，并且 $x,Ax,\ldots,A^{n-1}x$ 都未离开 $\ker C$，有限维性就会使后续迭代永远留在其中。这解释了为何只需检查前 $n$ 次，而无须无穷多次。

[返回题号导航](#题号导航)

## 问题 2015S05

**原题号：**2015S05。[原解答 PDF 第15—17页](/files/problems/每周一题解答.pdf#page=15)。

**题目：**设 $A\in M_n(\mathbb C)$，证明：$A$ 可对角化，当且仅当 $A$ 相似于某个循环矩阵

$$
C=\begin{pmatrix}
a_1&a_2&\cdots&a_n\\
a_n&a_1&\cdots&a_{n-1}\\
\vdots&\vdots&\ddots&\vdots\\
a_2&a_3&\cdots&a_1
\end{pmatrix}.
$$

**入选理由：**正向需要识别所有循环矩阵共同的特征向量，反向则把“指定特征值”转化为一个有限点插值问题。

**证明：**$n=1$ 时显然。下设 $n\ge2$，令 $\omega=e^{2\pi i/n}$，取循环移位矩阵 $S$，使

$$
S(x_1,\ldots,x_n)^{\mathsf T}=(x_2,\ldots,x_n,x_1)^{\mathsf T}.
$$

题中的 $C$ 恰为 $p(S)$，其中 $p(t)=a_1+a_2t+\cdots+a_nt^{n-1}$。对 $0\le j<n$，令

$$
v_j=(1,\omega^j,\ldots,\omega^{(n-1)j})^{\mathsf T}.
$$

直接计算得 $Sv_j=\omega^jv_j$，故 $Cv_j=p(\omega^j)v_j$。不同的 $\omega^j$ 给出 $S$ 的不同特征值，因而 $v_0,\ldots,v_{n-1}$ 线性无关。这组基同时对角化一切 $p(S)$，所以循环矩阵均可对角化。

反之，若 $A$ 可对角化，记其对角形为 $\operatorname{diag}(\lambda_0,\ldots,\lambda_{n-1})$，允许 $\lambda_j$ 重复。取插值多项式

$$
p(t)=\sum_{j=0}^{n-1}\lambda_j
\prod_{\substack{0\le\ell<n\\\ell\ne j}}
\frac{t-\omega^\ell}{\omega^j-\omega^\ell}.
$$

它满足 $\deg p<n$ 与 $p(\omega^j)=\lambda_j$。于是循环矩阵 $p(S)$ 在上述基下恰有同一对角形，故与 $A$ 相似。

**方法总结与推广：**若矩阵 $T$ 有 $n$ 个互异特征值，则任何与 $T$ 交换的矩阵 $X$ 都是 $T$ 的多项式。因为交换性保证 $X$ 保持 $T$ 的每个一维特征子空间，二者在同一基下为对角矩阵；再对 $X$ 的对角元做插值即可。本题以循环移位矩阵作为一个固定的、谱互异的模型。

[返回题号导航](#题号导航)

## 问题 2015S09

**原题号：**2015S09。[原解答 PDF 第22—23页](/files/problems/每周一题解答.pdf#page=22)。

**题目：**设 $A,B\in M_n(\mathbb C)$，满足 $\operatorname{rank}(AB-BA)\le1$，证明 $A,B$ 可同时上三角化。

**入选理由：**这是本篇较深的一题，但证明只用秩一分解、迹、多项式系数比较与不变子空间。它把“取最短反例”变成了处理不交换乘积的有效工具。

**证明：**对 $n$ 归纳。$n=1$ 时成立。设 $n>1$，记 $C=AB-BA$，先构造非零真公共不变子空间。

若 $C=0$，取 $A$ 的一个非零特征子空间 $E$。由交换性，$B(E)\subseteq E$；在复空间 $E$ 中取 $B|_E$ 的特征向量，它张成的一维空间即为所求。

若 $\operatorname{rank}C=1$，可写 $C=uv^{\mathsf T}$，其中 $u,v\ne0$。迹的循环性给出 $v^{\mathsf T}u=\operatorname{tr}C=0$。断言：对由 $A,B$ 组成的任意有限乘积 $W$（包括 $I_n$），都有 $v^{\mathsf T}Wu=0$。

否则取反例中乘积长度最小者，设长度为 $m\ge1$。对长度为 $m$ 的乘积，交换任意相邻的 $A,B$ 不改变相应标量，因为

$$
\begin{aligned}
v^{\mathsf T}XABYu-v^{\mathsf T}XBAYu
&=v^{\mathsf T}Xuv^{\mathsf T}Yu\\
&=(v^{\mathsf T}Xu)(v^{\mathsf T}Yu)=0.
\end{aligned}
$$

这里 $X,Y$ 的长度均小于 $m$，故用到了最小性。于是含 $j$ 个 $B$ 的每个长度为 $m$ 的乘积都给出相同的标量 $v^{\mathsf T}A^{m-j}B^ju$。

对任意 $t\in\mathbb C$，令 $D=A+tB$，则 $DB-BD=C$，所以

$$
v^{\mathsf T}D^mu=\operatorname{tr}(D^mC)
=\operatorname{tr}(D^{m+1}B-D^mBD)=0.
$$

展开后按 $B$ 的个数合并，得到多项式恒等式

$$
\sum_{j=0}^m\binom mj t^jv^{\mathsf T}A^{m-j}B^ju=0.
$$

各系数均为零，故所有长度为 $m$ 的乘积也满足断言，与最短反例矛盾。

现在置 $U=\operatorname{span}\{Wu:W\text{ 为上述有限乘积}\}$。由断言，

$$
0\ne u\in U\subseteq\ker v^{\mathsf T}\subsetneq\mathbb C^n.
$$

左乘 $A$ 或 $B$ 仍得到同类乘积，故 $U$ 对二者都不变。

两种情形都得到了这样的 $U$。取 $U$ 的一组基并扩充，在同一基下写成

$$
A=\begin{pmatrix}A_1&X\\0&A_2\end{pmatrix},\qquad
B=\begin{pmatrix}B_1&Y\\0&B_2\end{pmatrix}.
$$

两个对角块的阶数都小于 $n$，且 $A_iB_i-B_iA_i$ 是 $C$ 在该基下的子矩阵，秩至多为 $1$。分别应用归纳假设，同时三角化两对对角块，再合并换基，即得到 $A,B$ 的同时上三角形。

**方法总结与推广：**这里并未声称 $A,B$ 可同时对角化。证明的通用路线是先找公共不变子空间，再在它与剩余块上归纳；秩一分解则使“交换相邻字母的误差”分裂成两个更短表达式的乘积。这个长度归纳思想也适用于需要控制一族非交换乘积的线性空间问题。

[返回题号导航](#题号导航)

## 问题 2015S14

**原题号：**2015S14。[原解答 PDF 第27—28页](/files/problems/每周一题解答.pdf#page=27)。

**题目：**设

$$
J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix},
$$

$A$ 为 $2n$ 阶实矩阵，满足 $AJA^{\mathsf T}=J$，证明 $\det A=1$。

**入选理由：**取行列式只能得到 $\det A=\pm1$；怎样排除负号才是核心。下面通过一个辅助矩阵把符号问题化为复数模平方，全程不需要辛几何知识。

**证明：**因 $J$ 可逆，取行列式得 $(\det A)^2=1$，故 $A$ 可逆。原式给出 $AJ=JA^{-\mathsf T}$；再由 $J^{-1}=-J$，有 $A^{-\mathsf T}J=JA$。因此令

$$
M=A+A^{-\mathsf T}=A^{-\mathsf T}(A^{\mathsf T}A+I_{2n}),
$$

便有 $MJ=JM$。$A^{\mathsf T}A+I_{2n}$ 正定，故 $M$ 可逆，且

$$
\det M=\frac{\det(A^{\mathsf T}A+I_{2n})}{\det A}.
$$

将 $M$ 按 $n$ 阶分块，比较 $MJ=JM$，可知

$$
M=\begin{pmatrix}X&Y\\-Y&X\end{pmatrix}
\qquad(X,Y\text{ 为实矩阵}).
$$

取可逆复矩阵 $K=\begin{pmatrix}I_n&I_n\\iI_n&-iI_n\end{pmatrix}$，直接相乘得到

$$
K^{-1}MK=\operatorname{diag}(X+iY,X-iY).
$$

于是 $\det M=|\det(X+iY)|^2>0$，严格性来自 $M$ 可逆。上式分子也为正，故 $\det A>0$。结合 $(\det A)^2=1$，即得 $\det A=1$。

**方法总结与推广：**对任意实方阵 $X,Y$，不论二者是否交换，都有

$$
\det\begin{pmatrix}X&Y\\-Y&X\end{pmatrix}=|\det(X+iY)|^2\ge0.
$$

因此这类实分块矩阵一旦可逆，其行列式必为正。先寻找与固定矩阵 $J$ 交换的辅助矩阵，再识别它的分块形状，是可推广的构造方法。

[返回题号导航](#题号导航)

## 问题 2015A02

**原题号：**2015A02。[原解答 PDF 第29页](/files/problems/每周一题解答.pdf#page=29)。

**题目：**设 $A(x)=(a_{ij}(x))$ 为 $n\ge2$ 阶多项式矩阵，$k$ 为正整数。若 $x^k$ 整除 $A(x)$ 的所有代数余子式，证明 $x^{k+1}\mid\det A(x)$。

**入选理由：**许多个余子式条件可以汇总为一个伴随矩阵等式，再通过整数重数把一个严格不等式变成多一阶的整除性。

**证明：**令 $D(x)=\det A(x)$。$D=0$ 时结论显然。否则由伴随矩阵公式，

$$
\det(\operatorname{adj}A)=D^{n-1}.
$$

这一恒等式也适用于多项式矩阵：对 $A\operatorname{adj}A=DI_n$ 取行列式，再约去非零多项式 $D$ 即得。由假设，$\operatorname{adj}A=x^kB(x)$，故

$$
D(x)^{n-1}=x^{kn}\det B(x).
$$

写 $D(x)=x^m h(x)$，其中 $h(0)\ne0$。比较因子 $x$ 的重数，得到

$$
(n-1)m\ge kn>k(n-1).
$$

所以 $m>k$。$m$ 为整数，故 $m\ge k+1$，结论成立。

**方法总结与推广：**证明实际给出更强的界

$$
x^{\lceil kn/(n-1)\rceil}\mid\det A(x).
$$

将 $x$ 换成任意不可约多项式 $p(x)$，比较唯一因式分解中 $p$ 的重数，同样得到：若 $p^k$ 整除所有代数余子式，则 $p^{\lceil kn/(n-1)\rceil}$ 整除行列式。这里不需要多项式求导或根的解析性质。

[返回题号导航](#题号导航)

## 问题 2015A05

**原题号：**2015A05。[原解答 PDF 第31—32页](/files/problems/每周一题解答.pdf#page=31)。

**题目：**设 $A,B$ 为 $n$ 阶方阵，约定 $A^0=I_n$。

1. 若非负整数 $k$ 满足 $\operatorname{rank}A^k=\operatorname{rank}A^{k+1}$，证明对所有 $i\ge k$，有 $\operatorname{rank}A^i=\operatorname{rank}A^k$。
2. 定义稳定指数 $s(A)=\min\{k\ge0:\operatorname{rank}A^k=\operatorname{rank}A^{k+1}\}$，最终稳定秩记为 $r_\infty(A)$。证明 $s(A)$ 存在且 $0\le s(A)\le n$。
3. 证明 $r_\infty(AB)=r_\infty(BA)$。
4. 证明 $|s(AB)-s(BA)|\le1$，并举例说明等号可以达到。

**入选理由：**这些结论常被直接归结于 Jordan 块，实际却可以完全由像空间的包含关系与乘积秩不等式推出。

**证明：**由 $\operatorname{Im}A^{k+1}\subseteq\operatorname{Im}A^k$ 与同维性，题设的秩等式意味着两个像空间相等。对等式施加 $A^j$，得到 $\operatorname{Im}A^{k+j+1}=\operatorname{Im}A^{k+j}$，所以此后秩一直稳定，证明了第1问。

整数列 $n=\operatorname{rank}A^0\ge\operatorname{rank}A\ge\cdots\ge0$ 不能连续严格下降 $n+1$ 次，故必在某个 $0\le k\le n$ 发生相邻相等；再由第1问即得第2问。

令 $P=AB$、$Q=BA$。对 $\ell\ge0$，

$$
P^{\ell+2}=AQ^{\ell+1}B,\qquad Q^{\ell+1}=BP^\ell A,
$$

故

$$
\operatorname{rank}P^{\ell+2}\le\operatorname{rank}Q^{\ell+1}
\le\operatorname{rank}P^\ell.
$$

当 $\ell\ge s(P)$ 时，两端都等于 $r_\infty(P)$，所以 $Q$ 从 $s(P)+1$ 次幂起秩稳定，且稳定秩等于 $r_\infty(P)$。于是 $r_\infty(Q)=r_\infty(P)$ 与 $s(Q)\le s(P)+1$ 同时成立。交换 $P,Q$，得到反向不等式，因而 $|s(P)-s(Q)|\le1$。

取

$$
A=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad
B=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
$$

则 $AB=B\ne0$、$(AB)^2=0$，而 $BA=0$，所以 $s(AB)=2$、$s(BA)=1$。按本题从零次幂计数的定义，数值是 $2,1$；原资料已指出原书写成 $1,0$ 的计数勘误。$n>2$ 时可分别在右下角添 $I_{n-2}$；$n=1$ 时因 $AB=BA$，差恒为零。

**方法总结与推广：**稳定秩本身有直接的空间意义。若 $k\ge s(A)$，则 $\ker A^{2k}=\ker A^k$，因而 $\operatorname{Im}A^k\cap\ker A^k=\{0\}$；再用维数公式，

$$
K^n=\ker A^k\oplus\operatorname{Im}A^k.
$$

$A$ 在前一个空间上幂零，在后一个空间上可逆：后一结论由 $A(\operatorname{Im}A^k)=\operatorname{Im}A^{k+1}=\operatorname{Im}A^k$ 得到。于是 $r_\infty(A)$ 就是保留下来的可逆部分的维数。这一分解同样不需要预先引用标准型。

[返回题号导航](#题号导航)

## 问题 2015A07

**原题号：**2015A07。[原解答 PDF 第33页](/files/problems/每周一题解答.pdf#page=33)。

**题目：**设 $V$ 为 $M_n(K)$ 的线性子空间，且其中每个非零矩阵都可逆，证明 $\dim_KV\le n$。

**入选理由：**矩阵空间看起来有 $n^2$ 个自由度，选取一个固定非零向量便能把它无损地映入 $n$ 维空间。这是维数估计中非常值得记住的构造。

**证明：**固定 $x\in K^n\setminus\{0\}$，定义

$$
\Phi:V\longrightarrow K^n,\qquad\Phi(T)=Tx.
$$

$\Phi$ 线性。若 $Tx=0$ 且 $T\ne0$，由假设 $T$ 可逆，便有 $x=T^{-1}0=0$，矛盾。因此 $\ker\Phi=\{0\}$，$\Phi$ 为单射。由维数公式，$\dim V=\dim\operatorname{Im}\Phi\le n$。

**方法总结与推广：**这种“固定输入后求值”的映射适用于许多由线性映射组成的空间。底域还会影响最优界：若 $K=\mathbb C$，实际有 $\dim V\le1$。否则取线性无关的 $A,B\in V$，二者均可逆；$\det(B-tA)$ 是 $n$ 次复多项式，必有根 $t_0$。于是非零矩阵 $B-t_0A\in V$ 奇异，矛盾。实数域则允许二维例子：

$$
V=\left\{\begin{pmatrix}a&-b\\b&a\end{pmatrix}:a,b\in\mathbb R\right\},
$$

因为行列式为 $a^2+b^2$，非零元素均可逆。这也说明不能把实数域上的问题直接换到复数域而不检查假设。

[返回题号导航](#题号导航)

## 方法之间的联系

| 题号 | 核心转化 | 推广方向 |
| --- | --- | --- |
| 2015S01 | 随变量变化的选择变为子空间覆盖 | 双线性恒等式的整体成立 |
| 2015S04 | 核向量变为迭代不变空间 | 有限次秩检验与特征向量条件 |
| 2015S05 | 指定特征值变为有限点插值 | 交换矩阵的多项式表示 |
| 2015S09 | 秩一误差变为两个短乘积之积 | 公共不变子空间与同时三角化 |
| 2015S14 | 实分块行列式变为复数模平方 | 行列式符号与可逆性 |
| 2015A02 | 多个余子式条件变为一个伴随阵条件 | 不可约因子的重数估计 |
| 2015A05 | 相邻秩相等变为像空间相等 | 幂零部分与可逆部分的分解 |
| 2015A07 | 矩阵空间嵌入向量空间 | 单射构造与维数上界 |
