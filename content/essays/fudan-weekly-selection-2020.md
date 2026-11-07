---
title: "每周一题好题选讲（2020年）：把复杂矩阵放进合适的空间"
description: "精选七题：矩阵方程的线性化、循环分解、广义特征向量、稳定核与像、低秩惯性、部分和换元及反射构造。"
subject: "高等代数"
tags: ["每周一题", "好题选讲", "2020", "高等代数", "不变子空间", "二次型"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2019 年](/essays/06f1297ebfe34250f7c2b252/) · [2021 年](/essays/b8f47345c469006a5cb05385/)


本篇从 2020 年的 18 道每周一题中选出七题。它们的共同特点是：先改变看问题的空间或坐标，再用线性映射、基、核与像完成证明。2020S09 的原解答使用了模论，这里改写为有理标准型、循环基和多项式互素分解；其余证明也不引入高等代数以外的结构。

## 题号导航

- [问题 2020S05：矩阵多项式方程的线性化](#问题-2020s05)
- [问题 2020S09：不用模论的循环分解](#问题-2020s09)
- [问题 2020S11：把广义特征向量送进矩阵空间](#问题-2020s11)
- [问题 2020S12：取幂消去不可逆部分](#问题-2020s12)
- [问题 2020S13：用二阶矩阵决定全部惯性](#问题-2020s13)
- [问题 2020S14：部分和就是合适的新坐标](#问题-2020s14)
- [问题 2020S18：主动构造反射后的不动向量](#问题-2020s18)
- [方法之间的联系](#方法之间的联系)

## 问题 2020S05

**原题号：** 2020S05。[原解答 PDF 第 191 页](/files/problems/每周一题解答.pdf#page=191)

**题目：** 设 $n$ 阶实方阵 $A,B$ 的特征值都大于零，且

$$
A^4+2A^3B=2AB^3+B^4.
$$

证明 $A=B$。

**入选理由：** 非交换矩阵不能照搬数的因式分解；但“左乘 $A$”与“右乘 $B$”是两个可交换的线性操作。这提供了系统的线性化方法。

**证明：** 在 $M_n(\mathbb C)$ 上定义 $T(X)=AX+XB$。先证 $T$ 单射。将 $B$ 相似化为上三角阵 $U=(u_{ij})$，写成 $B=QUQ^{-1}$，其中 $u_{jj}=\beta_j>0$。若 $T(X)=0$，令 $Y=XQ=(y_1,\ldots,y_n)$，则 $AY+YU=0$，逐列得到

$$
(A+\beta_jI)y_j=-\sum_{k<j}u_{kj}y_k.
$$

$A$ 的特征值均为正，所以 $-\beta_j$ 不是其特征值，$A+\beta_jI$ 可逆。从 $j=1$ 起归纳，依次得到 $y_j=0$，故 $X=0$。

现在保持每个乘积的顺序，计算

$$
\begin{aligned}
T(A-B)&=A^2-B^2,\\
T^2(A-B)&=A^3+A^2B-AB^2-B^3,\\
T^3(A-B)&=A^4+2A^3B-2AB^3-B^4=0.
\end{aligned}
$$

连续使用三次单射性即得 $A-B=0$。

**方法总结与推广：** 同一逐列证明说明，只要 $A$ 与 $-B$ 没有公共特征值，$X\mapsto AX+XB$ 就是单射，因定义域与值域维数相同，它还是同构。因此方程 $AX+XB=C$ 对每个 $C$ 恰有一个解。本题的“正特征值”是保证谱不相交的一种充分条件，并未假定 $A,B$ 对称或可对角化。

[返回题号导航](#题号导航)

## 问题 2020S09

**原题号：** 2020S09。[原解答 PDF 第 196 页](/files/problems/每周一题解答.pdf#page=196)

**题目：** 设 $\varphi$ 是数域 $K$ 上 $n$ 维线性空间 $V$ 的线性变换，初等因子组为

$$
P_1(\lambda)^{r_1},\ldots,P_k(\lambda)^{r_k},
$$

其中每个 $P_i$ 是 $K$ 上首一不可约多项式。证明存在 $\alpha_1,\ldots,\alpha_k\in V$，使

$$
V=C(\varphi,\alpha_1)\oplus\cdots\oplus C(\varphi,\alpha_k),
\qquad C(\varphi,\alpha)=\operatorname{span}_K\{\alpha,\varphi\alpha,\varphi^2\alpha,\ldots\}.
$$

**入选理由：** 将标准型中的因子变成具体子空间，能贯通多项式整除、循环基和不变直和。这里给出完全用线性代数语言写成的构造。

**证明：** 由有理标准型，$V$ 先分解为对应各非常数不变因子的循环子空间。因此只须说明：一个对应首一多项式 $d$ 的循环空间，怎样按 $d$ 的互素因子再分解。

设 $W=C(\varphi,e)$，$\deg d=m$，且 $e,\varphi e,\ldots,\varphi^{m-1}e$ 是 $W$ 的一组基、$d(\varphi)e=0$。对任意多项式 $f$ 作带余除法 $f=ad+r$，其中 $\deg r<m$，则

$$
f(\varphi)e=0\quad\Longleftrightarrow\quad r(\varphi)e=0
\quad\Longleftrightarrow\quad r=0
\quad\Longleftrightarrow\quad d\mid f.
$$

中间的等价来自循环基的线性无关性。

将 $d$ 分解为两两互素的不可约幂 $d=q_1\cdots q_s$，令

$$
h_j=d/q_j,\qquad \alpha_j=h_j(\varphi)e,\qquad W_j=C(\varphi,\alpha_j).
$$

由 $\gcd(h_j,q_j)=1$，有

$$
f(\varphi)\alpha_j=0
\quad\Longleftrightarrow\quad d\mid fh_j
\quad\Longleftrightarrow\quad q_j\mid f.
$$

所以 $W_j$ 的循环基长度恰为 $\deg q_j$。

若 $\sum_jf_j(\varphi)\alpha_j=0$，则 $d\mid\sum_jf_jh_j$。固定 $u$，除 $j=u$ 外每项都被 $q_u$ 整除，故 $q_u\mid f_uh_u$。由互素性得 $q_u\mid f_u$，于是 $f_u(\varphi)\alpha_u=0$。这对每个 $u$ 成立，故这些子空间的和为直和。

另一方面，$h_1,\ldots,h_s$ 的最大公因式为 $1$，由多项式的 Bézout 等式，存在 $b_j$ 满足 $\sum_jb_jh_j=1$。代入 $\varphi$ 并作用于 $e$，得到

$$
e=\sum_jb_j(\varphi)\alpha_j\in W_1+\cdots+W_s.
$$

右侧为 $\varphi$ 不变子空间，因而包含整个 $C(\varphi,e)=W$。故 $W=\bigoplus_jW_j$。对有理标准型中的每个循环块分别这样分解，所得各 $q_j$ 正是初等因子组，重新编号即得所证结论。

**方法总结与推广：** “互素因子对应不变直和”不只是存在性结论：生成向量可直接取为 $h_j(\varphi)e$。证明中三个环节各有用途：带余除法确定循环长度，模 $q_j$ 的整除关系证明直和，Bézout 等式证明张成。相同的不可约多项式若来自不同循环块，仍应保留为不同直和项。

[返回题号导航](#题号导航)

## 问题 2020S11

**原题号：** 2020S11。[原解答 PDF 第 198 页](/files/problems/每周一题解答.pdf#page=198)

**题目：** 在 $V=M_n(\mathbb C)$ 上定义 $\varphi(X)=AX-XA^{\mathsf T}$，其中 $A^{\mathsf T}$ 是普通转置。证明 $\varphi$ 可对角化当且仅当 $A$ 可对角化。

**入选理由：** 正向用外积构造特征向量，反向只需抓住长度为二的广义特征向量链，无须计算一个 $n^2$ 阶矩阵。

**证明：** 若 $A$ 有特征向量基 $u_1,\ldots,u_n$，$Au_i=\lambda_i u_i$，则 $u_iu_j^{\mathsf T}$ 构成 $M_n(\mathbb C)$ 的一组基。事实上，若 $P=(u_1,\ldots,u_n)$，可逆映射 $X\mapsto PXP^{\mathsf T}$ 将基础矩阵 $E_{ij}$ 送到这些外积。又

$$
\varphi(u_iu_j^{\mathsf T})=(\lambda_i-\lambda_j)u_iu_j^{\mathsf T},
$$

故 $\varphi$ 可对角化。

反之，若 $A$ 不可对角化，其极小多项式有重根，写成 $m_A(t)=(t-\lambda)^rq(t)$，其中 $r\ge2$、$q(\lambda)\ne0$。次数更低的多项式 $(t-\lambda)^{r-1}q(t)$ 不能零化 $A$，故可取 $z$，使 $u=(A-\lambda I)^{r-1}q(A)z\ne0$。令 $v=(A-\lambda I)^{r-2}q(A)z$，便有

$$
Au=\lambda u,\qquad Av=\lambda v+u.
$$

于是

$$
\varphi(vu^{\mathsf T})=uu^{\mathsf T}\ne0,
\qquad \varphi(uu^{\mathsf T})=0.
$$

这里 $uu^{\mathsf T}\ne0$，因为 $u$ 有一个非零坐标 $u_i$，相应对角元为 $u_i^2\ne0$，无需假定 $u^{\mathsf T}u\ne0$。所以 $\ker\varphi^2\ne\ker\varphi$。任何可对角化变换在特征向量基下都满足 $\ker T^2=\ker T$，故 $\varphi$ 不可对角化，逆否命题成立。

**方法总结与推广：** 发现不可对角化时，不必恢复全部 Jordan 块；找到 $Tv=u\ne0$、$Tu=0$ 即可否定可对角化。一般地，若 $A,B$ 分别有特征向量基 $u_i,v_j$，则映射 $X\mapsto AX-XB^{\mathsf T}$ 的特征向量基是 $u_iv_j^{\mathsf T}$，相应特征值是两组特征值之差，证明仍是上面的外积计算。

[返回题号导航](#题号导航)

## 问题 2020S12

**原题号：** 2020S12。[原解答 PDF 第 199 页](/files/problems/每周一题解答.pdf#page=199)

**题目：** 设 $A,B$ 为 $n$ 阶复方阵。证明 $(AB)^n$ 与 $(BA)^n$ 相似。

**入选理由：** $AB$ 与 $BA$ 本身未必相似；核与像稳定以后，可以准确找出两者差异所在，并解释取幂为什么有效。

**证明：** 对任意 $T\in M_n(\mathbb C)$，递增链 $\ker T^j$ 最迟在 $j=n$ 稳定。一旦 $\ker T^j=\ker T^{j+1}$，若 $T^{j+2}x=0$，则 $Tx\in\ker T^{j+1}=\ker T^j$，从而 $x\in\ker T^{j+1}$；归纳可知此后都稳定。若前 $n$ 次严格增长，则核已是全空间，也必稳定。

令 $K_T=\ker T^n$、$U_T=\operatorname{im}T^n$。若 $x=T^ny\in K_T$，则 $T^{2n}y=0$，核稳定给出 $T^ny=0$，即 $x=0$。由秩与零度公式，

$$
\mathbb C^n=K_T\oplus U_T.
$$

两部分均在 $T$ 下不变；$T$ 在 $K_T$ 上幂零，在 $U_T$ 上单射，因而在后者上可逆。

记 $C=AB$、$D=BA$。由 $BC=DB$、$AD=CA$，可得

$$
B(U_C)\subseteq U_D,\qquad A(U_D)\subseteq U_C.
$$

若 $x\in U_C$ 且 $Bx=0$，则 $Cx=ABx=0$；$C|_{U_C}$ 可逆，故 $x=0$。所以 $B:U_C\to U_D$ 单射；同理 $A:U_D\to U_C$ 单射，有限维性遂给出 $\dim U_C=\dim U_D$。于是 $S=B|_{U_C}$ 是同构，并且

$$
S(C|_{U_C})=(D|_{U_D})S.
$$

两边取幂，得到这两个可逆部分的 $n$ 次幂相似。另有 $\dim K_C=\dim K_D$，而 $C^n,D^n$ 在对应核空间上均为零。任选同构 $R:K_C\to K_D$，将它与 $S$ 按直和拼成可逆映射 $F$，便有 $FC^n=D^nF$。因此 $(AB)^n\sim(BA)^n$。

**方法总结与推广：** 证明实际上给出：$AB$ 与 $BA$ 的可逆部分已经相似，可能不同的只有幂零部分。因此对任意 $m\ge n$，同一论证都有 $(AB)^m\sim(BA)^m$。本题全部论证只用有限维性，对任意数域也成立；复数条件不是必要的。

[返回题号导航](#题号导航)

## 问题 2020S13

**原题号：** 2020S13。[原解答 PDF 第 200 页](/files/problems/每周一题解答.pdf#page=200)

**题目：** 设 $n\ge2$，求实对称阵 $A=(A_{ij})$ 的正、负惯性指数，其中

$$
A_{ii}=a_i^2,\qquad A_{ij}=a_ia_j+1\quad(i\ne j).
$$

**入选理由：** 矩阵虽有任意阶数，改变符号的方向却至多两个。识别这种低秩结构，可以把完整的惯性分类压缩到一个二阶行列式。

**解：** 记

$$
a=(a_1,\ldots,a_n)^{\mathsf T},\quad e=(1,\ldots,1)^{\mathsf T},\quad
U=(a,e),\quad s=\sum_i a_i^2,\quad t=\sum_i a_i.
$$

则

$$
A=UU^{\mathsf T}-I_n,\qquad
G=U^{\mathsf T}U=\begin{pmatrix}s&t\\t&n\end{pmatrix}.
$$

$UU^{\mathsf T}$ 与 $G$ 的正特征值及其重数相同。因为对 $\mu>0$，$Gv=\mu v$ 蕴涵 $Uv\ne0$ 且 $UU^{\mathsf T}(Uv)=\mu Uv$；反向使用 $U^{\mathsf T}$，两映射的复合为乘以 $\mu$，故相应特征子空间同构。两矩阵均实对称且半正定，其余特征值为零。

设 $G$ 的特征值为 $\mu_+\ge\mu_-\ge0$。则 $A$ 的特征值为

$$
\mu_+-1,\quad\mu_--1,\quad
\underbrace{-1,\ldots,-1}_{n-2\text{ 个}}.
$$

此式也适用于 $U$ 的两列相关的情形。由

$$
\mu_+=\frac{s+n+\sqrt{(s-n)^2+4t^2}}2\ge n\ge2,
$$

第一个特征值恒为正。又令

$$
\Delta=(n-1)(s-1)-t^2
       =\det(G-I_2)=(\mu_+-1)(\mu_--1),
$$

则 $\mu_--1$ 与 $\Delta$ 同号。因此结论为：

| 条件 | 正惯性指数 | 负惯性指数 | 零惯性指数 |
|---|---:|---:|---:|
| $\Delta>0$ | $2$ | $n-2$ | $0$ |
| $\Delta=0$ | $1$ | $n-2$ | $1$ |
| $\Delta<0$ | $1$ | $n-1$ | $0$ |

**方法总结与推广：** 对 $U\in M_{n\times r}(\mathbb R)$、$r\le n$ 和 $c>0$，$UU^{\mathsf T}-cI_n$ 的符号分类同样由 $r$ 阶矩阵 $U^{\mathsf T}U-cI_r$ 加上 $n-r$ 个负方向决定；上述特征空间同构就是证明。运用时要保留零特征值，不能默认 $U$ 满列秩。

[返回题号导航](#题号导航)

## 问题 2020S14

**原题号：** 2020S14。[原解答 PDF 第 202 页](/files/problems/每周一题解答.pdf#page=202)

**题目：** 求实二次型

$$
f(x_1,\ldots,x_n)=\sum_{i,j=1}^n\max\{i,j\}\,x_ix_j
$$

的规范标准型。

**入选理由：** 从系数中的大小关系猜到部分和坐标，比逐项配方或计算特征值更自然，而且立即推广到任意单调权重。

**解：** 对 $1\le i,j\le n$，有

$$
\max\{i,j\}=n-\sum_{k=1}^{n-1}\mathbf1_{i\le k}\mathbf1_{j\le k}.
$$

因为右侧求和恰有 $n-\max\{i,j\}$ 个非零项。代入并交换有限求和次序，得到

$$
f=n\left(\sum_{i=1}^nx_i\right)^2
 -\sum_{k=1}^{n-1}\left(\sum_{i=1}^kx_i\right)^2.
$$

令 $y_k=x_1+\cdots+x_k$。该变换可逆，其逆为 $x_1=y_1$、$x_k=y_k-y_{k-1}$。于是

$$
f=ny_n^2-y_1^2-\cdots-y_{n-1}^2.
$$

再令 $z_n=\sqrt n\,y_n$、$z_k=y_k$（$k<n$），得到规范标准型

$$
f=z_n^2-z_1^2-\cdots-z_{n-1}^2.
$$

故正、负惯性指数分别为 $1,n-1$。

**方法总结与推广：** 对任意实数 $c_1,\ldots,c_n$，同样的望远镜恒等式给出

$$
\sum_{i,j=1}^n c_{\max\{i,j\}}x_ix_j
=c_ny_n^2-\sum_{k=1}^{n-1}(c_{k+1}-c_k)y_k^2.
$$

因此只要观察 $c_n$ 及各相邻差的符号，就能读出惯性指数；特别地，$0<c_1<\cdots<c_n$ 时仍为 $(1,n-1)$。该结论也说明，求惯性不一定要先求特征值。

[返回题号导航](#题号导航)

## 问题 2020S18

**原题号：** 2020S18。[原解答 PDF 第 206 页](/files/problems/每周一题解答.pdf#page=206)

**题目：** 设 $Q$ 为 $n$ 阶实正交矩阵，$1$ 不是其特征值。设 $u\in\mathbb R^n$、$u^{\mathsf T}u=1$、$P=I_n-2uu^{\mathsf T}$。证明 $1$ 是 $PQ$ 的特征值。

**入选理由：** 先从目标等式反推候选向量，再用长度不变补足所需内积，是构造性证明的典型例子。

**证明：** $I-Q$ 可逆，令

$$
v=(I-Q)^{-1}u\ne0.
$$

则 $Qv=v-u$。由 $Q$ 正交，$\|v-u\|^2=\|Qv\|^2=\|v\|^2$，展开得 $u^{\mathsf T}v=1/2$，从而 $u^{\mathsf T}Qv=-1/2$。因此

$$
PQv=Qv-2u(u^{\mathsf T}Qv)
=(v-u)+u=v.
$$

所构造的 $v$ 就是对应于特征值 $1$ 的非零特征向量。

**方法总结与推广：** 反射 $P$ 只改变 $u$ 方向上的分量，所以应使 $v-Qv$ 落在该方向，这正是方程 $(I-Q)v=u$ 的来源。还可得到一个矩阵恒等式：若 $R=(I-Q)^{-1}$，则 $R+R^{\mathsf T}=I$。事实上

$$
I-Q^{\mathsf T}=-Q^{\mathsf T}(I-Q),\qquad
R^{\mathsf T}=-(I-Q)^{-1}Q=I-R.
$$

于是任意单位 $u$ 都有 $u^{\mathsf T}Ru=1/2$，统一解释了证明中的关键数值。

[返回题号导航](#题号导航)

## 方法之间的联系

S05 将方程放进矩阵组成的线性空间；S09、S12 用不变子空间拆解全空间；S13、S14 找到只影响少数方向或适合系数结构的坐标；S11、S18 则直接构造能够决定结论的向量。共同的训练重点是：先问“哪些方向真正参与了问题”，再开始计算。
