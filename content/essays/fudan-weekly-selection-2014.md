---
title: "每周一题好题选讲（2014年）：从矩阵计算走向空间结构"
description: "从2014年13题中选出6题：低秩降阶、不可约多项式与循环向量、极化、同核、秩等号与直和、幂零链。每题附完整证明与可迁移的方法。"
subject: "高等代数"
tags: [每周一题, 好题选讲, "2014", 行列式, 秩, 线性空间, 循环向量]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2015 年](/essays/0edd1bb9b18c4cd164d06f29/)


本篇从2014年的13道“每周一题”中选取6题。选择看重的是能否揭示一种可以重复使用的思考方式：把大矩阵压缩成小矩阵，把向量关系译成多项式关系，把秩的等式译成空间的直和。题目均保留原编号；证明只使用高等代数中的行列式、线性空间、多项式与内积知识。

## 题号导航

- [问题 2014A02：低秩结构使行列式降阶](#问题-2014a02)
- [问题 2014A07：不可约性排除低次向量关系](#问题-2014a07)
- [问题 2014A08：从平方和不变到标量矩阵](#问题-2014a08)
- [问题 2014A10：用核与正定性证明秩稳定](#问题-2014a10)
- [问题 2014A11：秩等号迫使像空间直和](#问题-2014a11)
- [问题 2014A13：一维核迫使最长幂零链贯穿全空间](#问题-2014a13)
- [方法之间的联系](#方法之间的联系)

## 问题 2014A02

**原题号：**2014A02。[原解答 PDF 第3—4页](/files/problems/每周一题解答.pdf#page=3)。

**题目：**设 $a_i\ne0$（$1\le i\le n$），求矩阵 $A=(a_{ij})$ 的行列式，其中

$$
a_{ii}=0,\qquad a_{ij}=a_i+a_j\quad(i\ne j).
$$

**入选理由：**矩阵阶数虽任意，非对角元却只由两个向量生成。识别这一结构后，整个计算可以降到二阶。

**解：**记 $\alpha=(a_1,\ldots,a_n)^{\mathsf T}$、$e=(1,\ldots,1)^{\mathsf T}$，则

$$
A=D+\alpha e^{\mathsf T}+e\alpha^{\mathsf T},\qquad
D=-2\operatorname{diag}(a_1,\ldots,a_n).
$$

先说明降阶公式。对 $U\in M_{n,r}(K)$、$V\in M_{r,n}(K)$，将分块矩阵

$$
\begin{pmatrix}I_n&U\\-V&I_r\end{pmatrix}
$$

分别消去左下块和右上块，得到

$$
\det(I_n+UV)=\det(I_r+VU).
$$

因此，只要 $D$ 可逆，就有

$$
\det(D+UV)=\det D\,\det(I_r+VD^{-1}U).
$$

本题取 $U=(\alpha,e)$、$V=(e,\alpha)^{\mathsf T}$，并记 $S=\sum_i a_i$、$T=\sum_i a_i^{-1}$。于是

$$
\begin{aligned}
\det A
&=(-2)^n\Bigl(\prod_{i=1}^n a_i\Bigr)
\det\begin{pmatrix}1-n/2&-T/2\\-S/2&1-n/2\end{pmatrix}\\
&=(-1)^n2^{n-2}\Bigl(\prod_{i=1}^n a_i\Bigr)
\bigl((n-2)^2-ST\bigr).
\end{aligned}
$$

此式也涵盖 $n=1$，此时括号为零。

**方法总结与推广：**若复杂矩阵能够写成“易处理的可逆矩阵 $D$ 加上 $r$ 个秩一项”，行列式就能降为 $r$ 阶。这里需要的是低秩表示，并不要求原矩阵对称。作为直接推广，当 $1+v^{\mathsf T}D^{-1}u\ne0$ 时，乘法验证给出

$$
(D+uv^{\mathsf T})^{-1}
=D^{-1}-\frac{D^{-1}uv^{\mathsf T}D^{-1}}{1+v^{\mathsf T}D^{-1}u}.
$$

分母非零恰与前述行列式公式给出的可逆条件一致，因而求行列式与求逆可以共用同一结构观察。

[返回题号导航](#题号导航)

## 问题 2014A07

**原题号：**2014A07。[原解答 PDF 第7页](/files/problems/每周一题解答.pdf#page=7)。

**题目：**设 $A\in M_4(\mathbb Q)$，$\alpha_1,\ldots,\alpha_4\in\mathbb Q^4$ 满足

$$
A\alpha_1=\alpha_2,\quad A\alpha_2=\alpha_3,\quad
A\alpha_3=\alpha_4,\quad
A\alpha_4=-\alpha_1-\alpha_2-\alpha_3-\alpha_4.
$$

证明：若 $\alpha_1\ne0$，则这四个向量构成 $\mathbb Q^4$ 的一组基。

**入选理由：**线性无关性不必总靠行列式。递推关系自然产生一个零化多项式，其不可约性可以一次排除所有可能的线性关系。

**证明：**令 $p(t)=t^4+t^3+t^2+t+1$。题设给出 $\alpha_j=A^{j-1}\alpha_1$ 和 $p(A)\alpha_1=0$。

先证 $p$ 在 $\mathbb Q$ 上不可约。平移后

$$
p(t+1)=t^4+5t^3+10t^2+10t+5.
$$

若它可约，由 Gauss 引理可分为两个正次数首一整系数多项式的乘积。模 $5$ 后，两个因子都是 $t$ 的正次幂，故其常数项都被 $5$ 整除，乘积的常数项应被 $25$ 整除，与常数项为 $5$ 矛盾。平移不改变可约性，故 $p$ 不可约。

若四个向量线性相关，就有非零的 $q\in\mathbb Q[t]$，$\deg q<4$，使 $q(A)\alpha_1=0$。由于 $p$ 不可约，$(p,q)=1$，所以存在 $u,v\in\mathbb Q[t]$ 满足 $up+vq=1$。代入 $A$ 并作用于 $\alpha_1$，得到

$$
\alpha_1=u(A)p(A)\alpha_1+v(A)q(A)\alpha_1=0,
$$

矛盾。于是这四个向量线性无关，因数目等于空间维数，它们构成一组基。

**方法总结与推广：**若 $p\in K[t]$ 是 $d$ 次不可约多项式，$0\ne v$ 且 $p(T)v=0$，同一证明表明 $v,Tv,\ldots,T^{d-1}v$ 线性无关。这说明不可约多项式的次数会转化为空间维数的下界。注意已知的是 $p(T)v=0$，不能在证明循环向量张成全空间之前就断言 $p(T)=0$。

[返回题号导航](#题号导航)

## 问题 2014A08

**原题号：**2014A08。[原解答 PDF 第8页](/files/problems/每周一题解答.pdf#page=8)。

**题目：**设 $K$ 为数域，$f(A)=\sum_{i,j}a_{ij}^2$。若 $P\in M_n(K)$ 可逆，并且对任意 $A\in M_n(K)$ 都有 $f(PAP^{-1})=f(A)$，证明存在 $c\in K\setminus\{0\}$ 使 $PP^{\mathsf T}=cI_n$。

**入选理由：**“对一切矩阵成立”的二次条件，看似无从下手；极化把它化为双线性关系，基础矩阵再把整体关系逐项读出。

**证明：**由 $f(A)=\operatorname{tr}(AA^{\mathsf T})$，有

$$
f(A+B)-f(A)-f(B)=2\operatorname{tr}(AB^{\mathsf T}).
$$

将假设分别用于 $A+B,A,B$，得到

$$
\operatorname{tr}\bigl((PAP^{-1})(PBP^{-1})^{\mathsf T}\bigr)
=\operatorname{tr}(AB^{\mathsf T}).
$$

令 $S=P^{\mathsf T}P$。利用迹的循环性质与 $P^{-1}P^{-\mathsf T}=S^{-1}$，上式化为

$$
\operatorname{tr}\bigl(A(S^{-1}B^{\mathsf T}S-B^{\mathsf T})\bigr)=0
\qquad(A,B\in M_n(K)).
$$

固定 $B$，记括号内矩阵为 $C$。依次取 $A=E_{ij}$，有 $0=\operatorname{tr}(E_{ij}C)=c_{ji}$，故 $C=0$。因此 $S$ 与所有矩阵都交换。

由 $SE_{ii}=E_{ii}S$，$S$ 的所有非对角元为零。再由 $SE_{ij}=E_{ij}S$，所有对角元相同，故 $S=cI_n$。$S$ 可逆保证 $c\ne0$。于是

$$
P^{\mathsf T}P=cI_n\quad\Longrightarrow\quad
P^{\mathsf T}=cP^{-1}\quad\Longrightarrow\quad PP^{\mathsf T}=cI_n.
$$

**方法总结与推广：**证明中只用了数域的特征不为 $2$，未把 $\sum a_{ij}^2$ 当作正定内积；因此对复数域也成立。一般地，若线性映射保持二次型 $q$，则它保持由 $q(x+y)-q(x)-q(y)$ 恢复的对称双线性型。另一条可复用的判据是：若 $\operatorname{tr}(AC)=0$ 对所有 $A$ 成立，则 $C=0$；若 $C$ 与所有 $A$ 交换，则 $C$ 为标量矩阵。

[返回题号导航](#题号导航)

## 问题 2014A10

**原题号：**2014A10。[原解答 PDF 第9页](/files/problems/每周一题解答.pdf#page=9)。

**题目：**设 $A\in M_n(\mathbb R)$ 满足 $AA^{\mathsf T}=I_n$，证明

$$
\operatorname{rank}(I_n-A)=\operatorname{rank}\bigl((I_n-A)^2\bigr).
$$

**入选理由：**它把秩比较转成核空间比较，再用正定性排除一个可能存在的非零向量，无须求特征值或 Jordan 标准型。

**证明：**令 $T=I_n-A$。已有 $\ker T\subseteq\ker T^2$。若 $T^2x=0$，置 $y=Tx$，则 $Ay=y$。因为 $A^{\mathsf T}=A^{-1}$，也有 $A^{\mathsf T}y=y$，即 $T^{\mathsf T}y=0$。因此

$$
y^{\mathsf T}y=(Tx)^{\mathsf T}y=x^{\mathsf T}T^{\mathsf T}y=0.
$$

实内积的正定性给出 $y=0$，所以 $Tx=0$。由此 $\ker T^2=\ker T$，秩与零度定理给出所需结论。

**方法总结与推广：**对任意实方阵 $T$，只要 $\ker T=\ker T^{\mathsf T}$，上述证明就能推出 $\ker T^2=\ker T$。进一步，若 $T^{k+1}x=0$ 且 $k\ge1$，将同核关系用于 $T^{k-1}x$，可得 $T^kx=0$；逐次回推，得到

$$
\ker T^k=\ker T,\qquad \operatorname{rank}T^k=\operatorname{rank}T
\quad(k\ge1).
$$

真正起作用的是像空间中的向量不能同时落在核内，因为它此时既垂直于像空间，又属于像空间。

[返回题号导航](#题号导航)

## 问题 2014A11

**原题号：**2014A11。[原解答 PDF 第9—10页](/files/problems/每周一题解答.pdf#page=9)。

**题目：**设 $A,B$ 为 $n$ 阶方阵，满足

$$
(A+B)^2=A+B,\qquad
\operatorname{rank}(A+B)=\operatorname{rank}A+\operatorname{rank}B.
$$

证明 $A^2=A$、$B^2=B$、$AB=BA=0$。

**入选理由：**单纯展开矩阵方程会同时出现四个未知乘积；秩等号提供的空间结构恰好把这四个量分开。

**证明：**令 $C=A+B$、$U=\operatorname{Im}A$、$W=\operatorname{Im}B$。由 $\operatorname{Im}C\subseteq U+W$，

$$
\begin{aligned}
\operatorname{rank}C
&\le\dim(U+W)\\
&=\operatorname{rank}A+\operatorname{rank}B-\dim(U\cap W).
\end{aligned}
$$

与题设比较，得到 $U\cap W=\{0\}$，且 $\operatorname{Im}C=U\oplus W$。又因 $C^2=C$，$C$ 在自身的像空间上为恒等变换。

任取 $y\in U$，则 $Cy=y$，即 $(Ay-y)+By=0$。其中两项分别属于 $U,W$，直和分解的唯一性给出 $Ay=y$、$By=0$。令 $y=Ax$，得到 $A^2=A$ 和 $BA=0$。同理，对 $z\in W$ 比较 $Az+(Bz-z)=0$ 的两个分量，得到 $AB=0$ 和 $B^2=B$。

**方法总结与推广：**设 $C=\sum_{i=1}^m A_i$ 幂等，且 $\operatorname{rank}C=\sum_i\operatorname{rank}A_i$。同样由维数比较得到

$$
\operatorname{Im}C=\bigoplus_{i=1}^m\operatorname{Im}A_i.
$$

若 $y\in\operatorname{Im}A_j$，比较 $\sum_i A_i y=y$ 的直和分量，可得 $A_jy=y$、$A_iy=0$（$i\ne j$）。因此每个 $A_i$ 都幂等，且不同的 $A_i,A_j$ 互相零乘。这就是原题的多项推广；关键始终是证明等号发生时的空间结构。

[返回题号导航](#题号导航)

## 问题 2014A13

**原题号：**2014A13。[原解答 PDF 第10—11页](/files/problems/每周一题解答.pdf#page=10)。

**题目：**设 $V$ 为数域 $K$ 上的 $n$ 维线性空间，$T$ 为 $V$ 上的幂零线性变换，且 $\operatorname{rank}T=n-1$。证明存在 $v\in V$，使

$$
V=\operatorname{span}\{v,Tv,T^2v,\ldots\}.
$$

**入选理由：**从一维核推导完整的循环结构，是理解幂零标准型的好入口；证明能够直接构造循环基，而不把标准型当成黑箱。

**证明：**由秩与零度定理，$\dim\ker T=1$。设 $m$ 为幂零指数，即 $T^m=0$、$T^{m-1}\ne0$。取 $v$ 使 $T^{m-1}v\ne0$。

若 $\sum_{j=0}^{m-1}c_jT^jv=0$ 是非平凡关系，取 $c_r\ne0$ 的最小下标 $r$，作用 $T^{m-1-r}$ 后，低次项的系数原本为零，高次项因幂零性消失，得到 $c_rT^{m-1}v=0$，矛盾。因此 $v,Tv,\ldots,T^{m-1}v$ 线性无关，$m\le n$。

另一方面，置 $K_j=\ker T^j$，$K_0=\{0\}$。$T$ 将 $K_j$ 映入 $K_{j-1}$，其限制的核恰为 $\ker T$，故

$$
\dim K_j=1+\dim T(K_j)\le1+\dim K_{j-1}.
$$

归纳得 $\dim K_j\le j$。由于 $K_m=V$，有 $n\le m$。于是 $m=n$，前述 $n$ 个迭代向量构成 $V$ 的一组基。

**方法总结与推广：**一般地，若 $T^m=0$，记 $d=\dim\ker T$，同样有 $\dim\ker T^j\le jd$，因而

$$
n\le m\dim\ker T,\qquad
\operatorname{rank}T\le n-\left\lceil\frac nm\right\rceil.
$$

原题是 $d=1$ 的刚性情形：核增长的每一步都必须恰好增加一维。长链线性无关与核增长上界分别从两个方向夹住链长，这一配合比单独计算各次幂更有用。

[返回题号导航](#题号导航)

## 方法之间的联系

| 题号 | 应首先识别的结构 | 可以迁移到的问题 |
| --- | --- | --- |
| 2014A02 | 少数秩一项构成的扰动 | 行列式降阶、求逆、可逆条件 |
| 2014A07 | 向量递推对应零化多项式 | 循环向量、维数下界、不可约性 |
| 2014A08 | 对所有变量成立的二次恒等式 | 极化、迹配对、标量矩阵判定 |
| 2014A10 | 像与核的正交关系 | 幂的秩稳定、排除非平凡幂零链 |
| 2014A11 | 秩不等式取等 | 直和分解、投影的互相零乘 |
| 2014A13 | 幂零链与核增长 | 循环基、幂零变换的秩界 |

这些题的共同训练目标是：先找到能够表达条件的空间或多项式，再决定是否需要矩阵计算。
