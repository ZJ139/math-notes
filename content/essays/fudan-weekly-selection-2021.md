---
title: "每周一题好题选讲（2021年）：循环向量、投影与多项式"
description: "精选六题：友阵交错关系、多项式除法制造可逆因子、反对称阵与正交阵的互换、投影对角元、复矩阵实化及不可约因子的次数估计。"
subject: "高等代数"
tags: ["每周一题", "好题选讲", "2021", "高等代数", "循环向量", "正交投影", "多项式"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2020 年](/essays/8ce5dd164ca5e3697880e587/) · [2022 年](/essays/20ae1d5adda33dfd59dd5c38/)


本篇从 2021 年的 15 道每周一题中选出六题。每题都围绕一种可反复使用的判断方式：从一个循环向量恢复整个矩阵，把非零余数变成可逆性，把内积条件变成投影，或者把整除信息变成次数限制。所需知识均在高等代数范围内。

## 题号导航

- [问题 2021A03：一个循环向量控制所有矩阵元](#问题-2021a03)
- [问题 2021A05：非零余数怎样迫使矩阵交换](#问题-2021a05)
- [问题 2021A06：反对称阵与正交阵的有理互换](#问题-2021a06)
- [问题 2021A09：投影对角元的几何含义](#问题-2021a09)
- [问题 2021A14：复线性映射看成实线性映射](#问题-2021a14)
- [问题 2021A15：从整除信息估计不可约因子次数](#问题-2021a15)
- [方法之间的联系](#方法之间的联系)

## 问题 2021A03

**原题号：** 2021A03。[原解答 PDF 第 210 页](/files/problems/每周一题解答.pdf#page=210)

**题目：** 设首一多项式

$$
f(x)=x^n+a_1x^{n-1}+\cdots+a_{n-1}x+a_n,
$$

其友阵为

$$
A=\begin{pmatrix}
0&0&\cdots&0&-a_n\\
1&0&\cdots&0&-a_{n-1}\\
0&1&\ddots&\vdots&-a_{n-2}\\
\vdots&\ddots&\ddots&0&\vdots\\
0&\cdots&0&1&-a_1
\end{pmatrix}.
$$

若 $n$ 阶矩阵 $X$ 满足 $XA=A^{\mathsf T}X$，证明 $X$ 是对称阵。

**入选理由：** 逐个比较矩阵元会产生大量递推；友阵的循环基却能一次解释全部对称关系。

**证明：** $n=1$ 时显然。设 $e_1,\ldots,e_n$ 为标准基。由友阵的结构，$e_i=A^{i-1}e_1$。由已知关系归纳得到

$$
XA^k=(A^{\mathsf T})^kX\qquad(k\ge0).
$$

因此对任意 $i,j$，

$$
\begin{aligned}
x_{ij}
&=e_i^{\mathsf T}Xe_j\\
&=e_1^{\mathsf T}(A^{\mathsf T})^{i-1}XA^{j-1}e_1\\
&=e_1^{\mathsf T}XA^{i+j-2}e_1.
\end{aligned}
$$

最后的式子交换 $i,j$ 后不变，故 $x_{ij}=x_{ji}$，即 $X^{\mathsf T}=X$。

**方法总结与推广：** 结论不依赖友阵的具体末列：若某个 $A$ 有循环向量 $v$，即 $v,Av,\ldots,A^{n-1}v$ 是一组基，则任何满足 $XA=A^{\mathsf T}X$ 的矩阵 $X$ 都对称。取循环基矩阵 $P$，上述计算给出 $P^{\mathsf T}XP$ 对称，左右乘 $P^{-\mathsf T},P^{-1}$ 即得 $X$ 对称。这里既不要求 $X$ 可逆，也不要求 $A$ 可对角化。

[返回题号导航](#题号导航)

## 问题 2021A05

**原题号：** 2021A05。[原解答 PDF 第 211 页](/files/problems/每周一题解答.pdf#page=211)

**题目：** 设 $A,B$ 为同阶方阵，满足

$$
AB=A+a_mB^m+a_{m-1}B^{m-1}+\cdots+a_1B,
\qquad a_m+\cdots+a_1\ne0.
$$

证明 $AB=BA$。

**入选理由：** 题设中系数和不为零，提示应在 $x=1$ 处做多项式除法。这个条件不是装饰，而是可逆性的来源。

**证明：** 记 $g(x)=\sum_{j=1}^ma_jx^j$、$c=g(1)\ne0$。带余除法给出

$$
g(x)=(x-1)h(x)+c.
$$

于是题设等价于

$$
\bigl(A-h(B)\bigr)(B-I)=cI.
$$

取行列式，得 $\det(B-I)\ne0$，从而

$$
A=h(B)+c(B-I)^{-1}.
$$

$h(B)$ 与 $B$ 交换，$B-I$ 与 $B$ 交换，其逆也与 $B$ 交换，所以 $A$ 与 $B$ 交换。

**方法总结与推广：** 事实上，对任意标量 $\lambda$，若 $A(B-\lambda I)=g(B)$ 且 $g(\lambda)\ne0$，同样的除法便给出 $B-\lambda I$ 可逆和 $AB=BA$。非零余数条件不能随意删掉：若 $g=0$、$B=\operatorname{diag}(1,0)$、$A=E_{21}$，则 $A(B-I)=0$，却有 $AB=A\ne0=BA$。

[返回题号导航](#题号导航)

## 问题 2021A06

**原题号：** 2021A06。[原解答 PDF 第 212 页](/files/problems/每周一题解答.pdf#page=212)

**题目：** 记 $S$ 为全体 $n$ 阶实反对称阵的集合，

$$
T=\{P\in M_n(\mathbb R):P^{\mathsf T}P=I_n,\ I_n+P\text{ 可逆}\}.
$$

定义

$$
\varphi(A)=(I_n-A)(I_n+A)^{-1},\qquad
\psi(P)=(I_n-P)(I_n+P)^{-1}.
$$

证明：（1）$\varphi:S\to T$ 是映射；（2）$\psi:T\to S$ 是映射；（3）两者互逆；（4）若 $a_{ij}=1$（$i<j$）、$a_{ij}=-1$（$i>j$）、$a_{ii}=0$，求 $\varphi(A)$。

**入选理由：** 一个有理式把线性条件 $A^{\mathsf T}=-A$ 转换为二次条件 $P^{\mathsf T}P=I$；同时训练可逆性的先验检查及矩阵乘法次序。

**解：** 对 $A\in S$，若 $(I+A)x=0$，则

$$
0=x^{\mathsf T}(I+A)x=x^{\mathsf T}x,
$$

故 $x=0$，所以 $I+A$ 可逆；同理 $I-A$ 可逆。记 $P=(I-A)(I+A)^{-1}$。由于 $I\pm A$ 互相交换，

$$
P^{\mathsf T}=(I-A)^{-1}(I+A)=P^{-1},\qquad
I+P=2(I+A)^{-1}.
$$

因此 $P$ 正交且 $I+P$ 可逆，完成第（1）问。

对 $P\in T$，令 $A=(I-P)(I+P)^{-1}$。利用 $P^{\mathsf T}=P^{-1}$，

$$
\begin{aligned}
A^{\mathsf T}
&=(I+P^{-1})^{-1}(I-P^{-1})\\
&=(I+P)^{-1}(P-I)=-A.
\end{aligned}
$$

所以 $A\in S$，完成第（2）问。

对第（1）问中的 $P$，还有 $I-P=2A(I+A)^{-1}$，故

$$
\psi(\varphi(A))=(I-P)(I+P)^{-1}=A.
$$

同理，对第（2）问中的 $A$，有 $I-A=2P(I+P)^{-1}$、$I+A=2(I+P)^{-1}$，于是 $\varphi(\psi(P))=P$，完成第（3）问。

对第（4）问，设 $e_1,\ldots,e_n$ 是标准基，定义矩阵 $R$ 满足

$$
Re_1=e_n,\qquad Re_j=-e_{j-1}\quad(2\le j\le n).
$$

当 $n\ge2$，它就是

$$
R=\begin{pmatrix}0_{(n-1)\times1}&-I_{n-1}\\1&0_{1\times(n-1)}\end{pmatrix}.
$$

原矩阵的列满足

$$
Ae_1=-\sum_{k=2}^ne_k,\qquad
Ae_n=\sum_{k=1}^{n-1}e_k,\qquad
Ae_j-Ae_{j-1}=e_{j-1}+e_j.
$$

所以

$$
(I+A)Re_1=(I-A)e_1,
\qquad
(I+A)Re_j=-e_{j-1}-Ae_{j-1}=e_j-Ae_j.
$$

两矩阵在一组基上作用相同，故 $(I+A)R=I-A$。因为 $I\pm A$ 交换，

$$
\varphi(A)=(I-A)(I+A)^{-1}=R.
$$

$n=1$ 时，$A=(0)$、$\varphi(A)=(1)$。

**方法总结与推广：** 这一互换通常称为 Cayley 变换，以上证明已经包含其全部所需性质。计算具体值时，不必先展开逆矩阵；猜出简单矩阵 $R$ 并检验 $(I+A)R=I-A$ 即可。把转置换成共轭转置，同一证明还给出反 Hermite 阵 $A^*=-A$ 与不含特征值 $-1$ 的酉阵之间的一一对应；可逆性由 $\operatorname{Re}(x^*(I+A)x)=\|x\|^2$ 保证。

[返回题号导航](#题号导航)

## 问题 2021A09

**原题号：** 2021A09。[原解答 PDF 第 215 页](/files/problems/每周一题解答.pdf#page=215)

**题目：** 设 $A$ 为列满秩的 $m\times n$ 实矩阵。（1）证明 $A^{\mathsf T}A$ 非异；（2）若 $A$ 的第一列元素全为 $1$，令

$$
P=A(A^{\mathsf T}A)^{-1}A^{\mathsf T},
$$

证明 $P$ 的所有主对角元均不小于 $1/m$。

**入选理由：** 含有逆矩阵的表达式可以有清楚的几何含义；把它识别为正交投影后，矩阵元素估计转化为一个方向上的分量估计。

**证明：** 对任意 $y\ne0$，列满秩给出 $Ay\ne0$，所以

$$
y^{\mathsf T}A^{\mathsf T}Ay=\|Ay\|^2>0.
$$

因此 $A^{\mathsf T}A$ 正定，特别非异。

直接计算得 $P^{\mathsf T}=P$、$P^2=P$。它把每个向量送入 $W=\operatorname{im}A$，且 $PA=A$，所以在 $W$ 上恒等。又对 $w\in W$，$w^{\mathsf T}(x-Px)=0$，故 $P$ 正是到 $W$ 的正交投影。

记 $u=m^{-1/2}(1,\ldots,1)^{\mathsf T}$。由题设，$u\in W$、$\|u\|=1$、$Pu=u$。对标准单位向量 $e_i$，由 Cauchy–Schwarz 不等式，

$$
\begin{aligned}
p_{ii}&=e_i^{\mathsf T}Pe_i=\|Pe_i\|^2\\
&\ge|u^{\mathsf T}Pe_i|^2
=|(Pu)^{\mathsf T}e_i|^2=\frac1m.
\end{aligned}
$$

**方法总结与推广：** 若正交投影的像空间包含单位向量 $u$，就有 $p_{ii}\ge u_i^2$；若包含正交单位向量 $u_1,\ldots,u_r$，则由正交分解有

$$
p_{ii}=\|Pe_i\|^2\ge\sum_{j=1}^r|(u_j)_i|^2.
$$

本题的界可达：$n=1$ 且 $A=(1,\ldots,1)^{\mathsf T}$ 时，$P=m^{-1}ee^{\mathsf T}$，全部对角元均等于 $1/m$。此外 $\sum_i p_{ii}=\operatorname{tr}P=n$，可用来检查估计与维数是否一致。

[返回题号导航](#题号导航)

## 问题 2021A14

**原题号：** 2021A14。[原解答 PDF 第 221 页](/files/problems/每周一题解答.pdf#page=221)

**题目：** 设 $V$ 是 $n$ 维复线性空间，$\varphi:V\to V$ 为复线性变换。把 $V$ 看成 $2n$ 维实线性空间 $V_0$，并将 $\varphi$ 视作实线性变换 $\varphi_0$。证明

$$
\det\varphi_0=|\det\varphi|^2.
$$

**入选理由：** 同一个映射改变标量域后，维数、矩阵和行列式都随之改变。用明确的基和分块相似变换，可以避免把复行列式误当作实行列式。

**证明：** 选 $V$ 的复基 $e_1,\ldots,e_n$，设 $\varphi$ 的矩阵为 $A=B+\mathrm iC$，其中 $B,C$ 为实矩阵。则

$$
e_1,\ldots,e_n,\mathrm i e_1,\ldots,\mathrm i e_n
$$

是 $V_0$ 的实基：每个复系数的实部和虚部给出唯一的实坐标。在这组基下，$\varphi_0$ 的矩阵为

$$
R=\begin{pmatrix}B&-C\\C&B\end{pmatrix}.
$$

在复数域上取可逆矩阵

$$
S=\begin{pmatrix}I&I\\-\mathrm i I&\mathrm i I\end{pmatrix}.
$$

直接相乘得到 $RS=S\operatorname{diag}(A,\overline A)$，所以

$$
\det\varphi_0=\det R
=\det A\det\overline A
=\det A\,\overline{\det A}=|\det\varphi|^2.
$$

这里不要求 $B,C$ 可交换。

**方法总结与推广：** 上述相似关系还给出完整的特征多项式

$$
\det(tI_{2n}-R)=\det(tI_n-A)\det(tI_n-\overline A).
$$

因此复线性映射的实化矩阵在复数域上的特征值，是 $A$ 的特征值及其共轭，均计代数重数。相同的基比较也给出 $\operatorname{tr}_{\mathbb R}\varphi_0=2\operatorname{Re}(\operatorname{tr}_{\mathbb C}\varphi)$，以及 $\operatorname{rank}_{\mathbb R}\varphi_0=2\operatorname{rank}_{\mathbb C}\varphi$。

[返回题号导航](#题号导航)

## 问题 2021A15

**原题号：** 2021A15。[原解答 PDF 第 221 页](/files/problems/每周一题解答.pdf#page=221)

**题目：** （1）设 $f(x)=a_nx^n+\cdots+a_1x+a_0\in\mathbb Z[x]$，$1\le k\le n$。若存在素数 $p$，使

$$
p\nmid a_n,\qquad p\mid a_0,a_1,\ldots,a_{k-1},\qquad p^2\nmid a_0,
$$

证明 $f$ 在 $\mathbb Q[x]$ 中有一个次数不小于 $k$ 的不可约因子。（2）对任意整数 $n\ge2$ 和素数 $p$，证明 $x^n+(p+2)x^{n-1}+p$ 在 $\mathbb Q$ 上不可约。

**入选理由：** 无法直接套 Eisenstein 判别法时，仍可先逼出一个足够大的不可约因子，再用有理根定理排除余下的可能。这比寻找单个判别法更有伸缩性。

**证明：** 由 Gauss 引理，写成

$$
f=cg_1\cdots g_s,
$$

其中 $c\in\mathbb Z\setminus\{0\}$，每个 $g_j$ 是本原整系数多项式，在 $\mathbb Q[x]$ 中不可约且次数为正。首项系数不被 $p$ 整除，说明 $p\nmid c$，且各 $g_j$ 的首项系数都不被 $p$ 整除。

因为 $p\mid f(0)$、$p^2\nmid f(0)$，恰有一个因子（记为 $g_1$）的常数项被 $p$ 整除，其余因子的常数项均不被 $p$ 整除。对一个不全被 $p$ 整除的整系数多项式 $h$，记 $\nu(h)$ 为其第一个不被 $p$ 整除的系数的次数。若 $\nu(h)=u$、$\nu(\ell)=v$，则 $h\ell$ 的次数低于 $u+v$ 的系数均被 $p$ 整除，而 $x^{u+v}$ 的系数模 $p$ 恰为两个首个非零系数之积，故

$$
\nu(h\ell)=\nu(h)+\nu(\ell).
$$

于是 $\nu(f)=\nu(g_1)$，因为 $c$ 和其余 $g_j$ 的 $\nu$ 都是零。题设给出 $\nu(f)\ge k$，从而 $\deg g_1\ge\nu(g_1)\ge k$，完成第（1）问。这里仅用素数整除性质，没有另行引用有限域理论。

对第（2）问，记 $F(x)=x^n+(p+2)x^{n-1}+p$。取第（1）问中的 $k=n-1$，得 $F$ 有次数至少为 $n-1$ 的不可约因子。如果 $F$ 可约，剩余因子的总次数至多为 $1$，故必有有理根。首一整系数多项式的有理根必须为常数项的整数因子，所以只需检查 $\pm1,\pm p$。有

$$
\begin{aligned}
F(1)&=2p+3>0,\\
F(p)&=2(p+1)p^{n-1}+p>0,\\
F(-1)&=\begin{cases}-1,&n\text{ 为偶数},\\2p+1,&n\text{ 为奇数},\end{cases}\\
F(-p)&=\begin{cases}p-2p^{n-1}<0,&n\text{ 为偶数},\\p+2p^{n-1}>0,&n\text{ 为奇数}.\end{cases}
\end{aligned}
$$

四个候选值都不是根，矛盾。因此 $F$ 不可约。

**方法总结与推广：** $k=n$ 时，第（1）问就是 Eisenstein 判别法；$k=n-1$ 时，它把不可约性缩减为排除有理根。若只能得到 $k=n-2$，则可约时剩余部分次数至多为二，下一步应检查一次和二次因子，不能仅排除有理根便结束。这个“先限制因子次数，再穷尽小次数余因子”的顺序可迁移到许多整系数多项式题。

[返回题号导航](#题号导航)

## 方法之间的联系

A03 与 A09 都是从一个向量出发控制整体：前者沿循环基传播矩阵关系，后者利用投影空间中已知的方向控制对角元。A05 与 A15 则把看似零散的系数条件翻译成多项式除法或整除条件。A06、A14 提醒我们，适当的表示往往比直接展开更能揭示矩阵的结构。
