---
title: "Roth 消去定理：维数证明与不变补空间"
description: "用秩—零度定理完整证明 AX−XB=C 的可解性与分块相似性等价，解释图像子空间、Sylvester 方程及常见证明漏洞。"
subject: "高等代数"
tags: [Roth定理, Sylvester方程, 分块矩阵, 相似, 不变子空间, 维数方法]
created_at: "2026-11-09"
updated_at: "2026-11-09"
---

[文章栏目](/essays/) · [高等代数好题选讲](/essays/3981869cd6190a33d8e8f2d6/)

Roth 消去定理把矩阵方程的可解性与分块矩阵的相似性联系起来。由解构造相似变换只需一次乘法；真正的难点是反过来：已知某个相似变换存在，如何得到具有指定分块形式的相似变换？下面以一个有限维的维数论证解决这一点，再给出完整的几何解释。

## 章节导航

- [一、定理的准确表述](#一定理的准确表述)
- [二、代数证明：投影的像为何包含单位矩阵](#二代数证明投影的像为何包含单位矩阵)
- [三、几何证明：为指定子空间构造不变补空间](#三几何证明为指定子空间构造不变补空间)
- [四、与 Sylvester 方程的联系](#四与-sylvester-方程的联系)
- [五、两个例子与三处易错点](#五两个例子与三处易错点)
- [六、证法比较与方法总结](#六证法比较与方法总结)
- [七、参考文献](#七参考文献)

## 一、定理的准确表述

**定理（Roth 消去定理，又称 Roth 相似定理）：**设 $F$ 为任意域，$m,n$ 为正整数，且

$$
A\in M_m(F),\qquad B\in M_n(F),\qquad C\in M_{m\times n}(F).
$$

记

$$
T=\begin{pmatrix}A&C\\0&B\end{pmatrix},\qquad
D=\begin{pmatrix}A&0\\0&B\end{pmatrix}.
$$

则下列条件等价：

1. 存在 $X\in M_{m\times n}(F)$，使 $AX-XB=C$；
2. $T$ 与 $D$ 在 $F$ 上相似，即存在 $S\in\operatorname{GL}_{m+n}(F)$，使 $S^{-1}TS=D$。

这里 $M_{p\times q}(F)$ 表示 $p\times q$ 矩阵空间，$M_p(F)=M_{p\times p}(F)$，$\operatorname{GL}_p(F)$ 表示其中的可逆矩阵全体。**解与相似变换都要求在同一域 $F$ 上**。不要求 $m=n$，不要求 $A,B$ 可逆、可对角化或没有公共特征值；有限域与特征为 $2$ 的域也包含在内。

若把“相似”看作“方程可解”的判据，则由可解到相似是在证必要性，由相似到可解是在证充分性。为避免方向混淆，下文直接写出每一方向。

## 二、代数证明：投影的像为何包含单位矩阵

### 由方程可解到分块相似

**证明：**设 $AX-XB=C$，取

$$
U=\begin{pmatrix}I_m&-X\\0&I_n\end{pmatrix},\qquad
U^{-1}=\begin{pmatrix}I_m&X\\0&I_n\end{pmatrix}.
$$

直接计算，得到

$$
\begin{aligned}
U^{-1}TU
&=\begin{pmatrix}I_m&X\\0&I_n\end{pmatrix}
  \begin{pmatrix}A&C-AX\\0&B\end{pmatrix}\\
&=\begin{pmatrix}A&C-AX+XB\\0&B\end{pmatrix}
=D.
\end{aligned}
$$

因此 $T\sim D$。

### 关键引理：相似保持交织矩阵空间的维数

对 $M\in M_p(F)$、$N\in M_q(F)$，定义

$$
\mathcal H(M,N)=\{H\in M_{p\times q}(F):MH=HN\}.
$$

这是一个线性空间；其中的矩阵表示与两侧线性变换相容的线性映射，通常称为**交织映射**。

**引理：**若 $M'=SMS^{-1}$，则

$$
\mathcal H(M,N)\longrightarrow\mathcal H(M',N),\qquad H\longmapsto SH
$$

是线性同构，因而两个空间维数相同。

**证明：**由 $MH=HN$ 得

$$
M'(SH)=SMH=SHN.
$$

逆映射为 $K\mapsto S^{-1}K$，故结论成立。这里没有对 $S$ 的分块形状作任何要求。

### 由分块相似到方程可解

**证明：**设 $T\sim D$，记

$$
\mathcal R=\{Y\in M_{m\times n}(F):AY=YB\},\qquad
\mathcal Z=\{Z\in M_n(F):BZ=ZB\}.
$$

将 $H\in M_{(m+n)\times n}(F)$ 按行分块为 $H=\binom{Y}{Z}$。因为

$$
DH=HB
\quad\Longleftrightarrow\quad
AY=YB,\quad BZ=ZB,
$$

所以 $\mathcal H(D,B)$ 与 $\mathcal R\oplus\mathcal Z$ 线性同构。由引理，

$$
\dim\mathcal H(T,B)
=\dim\mathcal H(D,B)
=\dim\mathcal R+\dim\mathcal Z.
$$

另一方面，

$$
TH=HB
\quad\Longleftrightarrow\quad
AY+CZ=YB,\quad BZ=ZB.
$$

因此可以定义取下半块的线性映射

$$
\pi:\mathcal H(T,B)\longrightarrow\mathcal Z,
\qquad \binom{Y}{Z}\longmapsto Z.
$$

其核恰为

$$
\ker\pi=\left\{\binom{Y}{0}:Y\in\mathcal R\right\},
$$

故 $\dim\ker\pi=\dim\mathcal R$。应用秩—零度定理，

$$
\begin{aligned}
\dim\operatorname{Im}\pi
&=\dim\mathcal H(T,B)-\dim\ker\pi\\
&=\dim\mathcal Z.
\end{aligned}
$$

由于 $\operatorname{Im}\pi\subseteq\mathcal Z$，而二者有限维且维数相同，必有 $\operatorname{Im}\pi=\mathcal Z$。

特别地，$I_n\in\mathcal Z$，所以存在 $Y$ 使 $\binom{Y}{I_n}\in\mathcal H(T,B)$，即

$$
AY+C=YB.
$$

取 $X=-Y$，即得 $AX-XB=C$。两方向均已证明。

这个论证的关键不是从某个相似矩阵中找到可逆的右下块，而是证明：**全部交织映射的下半块能够取遍 $\mathcal Z$，因而可以直接取成 $I_n$。**

[返回章节导航](#章节导航)

## 三、几何证明：为指定子空间构造不变补空间

### 图像子空间与矩阵方程

令 $V=F^m\oplus F^n$，定义线性变换

$$
t(u,v)=(Au+Cv,Bv),
$$

并记 $W=F^m\oplus\{0\}$。显然 $W$ 是 $t$ 的不变子空间，即 $t(W)\subseteq W$。

**图像引理：**$W$ 的每个线性补空间都唯一写成

$$
L_X=\{(-Xv,v):v\in F^n\},\qquad X\in M_{m\times n}(F).
$$

而且 $L_X$ 是 $t$ 的不变子空间，当且仅当 $AX-XB=C$。

**证明：**若 $V=W\oplus L$，第二坐标投影在 $L$ 上的限制是单射，因为其核为 $L\cap W$；它也是满射，因为每个 $(0,v)$ 都能分解为 $W$ 中向量与 $L$ 中向量之和。因此该限制是线性同构，其逆必为 $v\mapsto(-Xv,v)$，且 $X$ 唯一。

反过来，对任意 $X$，$L_X\cap W=\{0\}$，并且

$$
(u,v)=(u+Xv,0)+(-Xv,v),
$$

所以 $V=W\oplus L_X$。又

$$
t(-Xv,v)=(-AXv+Cv,Bv).
$$

具有第二坐标 $Bv$ 的图像向量唯一为 $(-XBv,Bv)$，因此

$$
\begin{aligned}
t(L_X)\subseteq L_X
&\Longleftrightarrow -AXv+Cv=-XBv\quad\text{对所有 }v\\
&\Longleftrightarrow AX-XB=C.
\end{aligned}
$$

若这个方程可解，取 $W$ 的标准基及 $L_X$ 中的基 $(-Xe_j,e_j)$，$t$ 的矩阵就是 $D$；相应的基变换矩阵恰为上一节的 $U$。

但是，**仅有 $T\sim D$ 还不能直接说原先指定的 $W$ 有不变补空间**：相似变换可能将标准分块空间送到别处。下面的引理补足这个环节。

### 关键引理：从整体直和类型得到指定子空间的补空间

**补空间引理：**设 $V$ 为有限维 $F$ 线性空间，$t:V\to V$ 为线性变换，$W$ 为 $t$ 的不变子空间。记

$$
a=t|_W,\qquad Q=V/W,\qquad
b(v+W)=t(v)+W.
$$

若存在一个线性同构 $J:W\oplus Q\to V$，满足 $tJ=J(a\oplus b)$，则 $W$ 存在 $t$ 的不变补空间。

商空间 $Q$ 把相差一个 $W$ 中向量的向量视为同一类；由于 $W$ 不变，$b$ 的定义与代表元选择无关。引理不要求 $J(W\oplus0)=W$。

**证明：**记 $q:V\to Q$ 为自然投影，则 $qt=bq$。考察线性空间

$$
\begin{aligned}
E&=\{s:Q\to V\text{ 线性}:ts=sb\},\\
E_W&=\{f:Q\to W\text{ 线性}:af=fb\},\\
E_Q&=\{g:Q\to Q\text{ 线性}:bg=gb\}.
\end{aligned}
$$

映射 $(f,g)\mapsto J\circ(f,g)$ 给出 $E_W\oplus E_Q$ 到 $E$ 的线性同构；其逆由 $J^{-1}s$ 的两个分量给出。因此

$$
\dim E=\dim E_W+\dim E_Q.
$$

定义 $\Phi:E\to E_Q$，$\Phi(s)=qs$。这是良定义的，因为

$$
bqs=qts=qsb.
$$

而 $qs=0$ 当且仅当 $s(Q)\subseteq W$，此时 $ts=sb$ 正是 $af=fb$。所以 $\ker\Phi$ 与 $E_W$ 线性同构。再次应用秩—零度定理，

$$
\dim\operatorname{Im}\Phi
=\dim E-\dim E_W
=\dim E_Q.
$$

故 $\Phi$ 满射。取 $s\in E$ 使 $qs=I_Q$，令 $L=s(Q)$。由 $ts=sb$ 知 $L$ 不变；若 $s(z)\in W$，则 $z=qs(z)=0$，故 $L\cap W=\{0\}$。又对每个 $v\in V$，

$$
v=\bigl(v-s(qv)\bigr)+s(qv),\qquad v-s(qv)\in W,
$$

因此 $V=W\oplus L$，引理得证。

应用到本题，$a$ 的矩阵为 $A$，商空间通过 $(u,v)+W\mapsto v$ 与 $F^n$ 同构，$b$ 的矩阵为 $B$。条件 $T\sim D$ 正好给出引理所需的 $J$，于是 $W$ 存在不变补空间；再由图像引理，得到 $AX-XB=C$。

这给出了几何语言下的完整证明。它与代数证明共享同一个维数机制：**把商空间上的恒等映射提升为与变换相容的映射，其像就是所需的补空间。**“提升”在这里仅指求出满足 $qs=I_Q$ 的 $s$。

[返回章节导航](#章节导航)

## 四、与 Sylvester 方程的联系

方程 $AX-XB=C$ 称为 Sylvester 方程的一种标准形式。固定 $A,B$，定义线性算子

$$
\mathcal L:M_{m\times n}(F)\to M_{m\times n}(F),\qquad
\mathcal L(X)=AX-XB.
$$

Roth 定理判定的是：**对给定的 $C$，它是否属于 $\operatorname{Im}\mathcal L$**。若 $X_0$ 是一个解，则全体解恰为

$$
X_0+\ker\mathcal L
=\{X_0+Y:AY=YB\}.
$$

所以解唯一当且仅当 $\ker\mathcal L=\{0\}$；因定义域、值域同为 $mn$ 维，这又等价于对每个 $C$ 都存在唯一解。

一项常用的充分条件是：$A,B$ 的特征多项式 $\chi_A,\chi_B$ 在 $F[t]$ 中互素。下面直接说明它为什么有效。

若 $AY=YB$，归纳得 $A^kY=YB^k$，从而 $p(A)Y=Yp(B)$ 对任意多项式 $p$ 成立。由 Cayley–Hamilton 定理，

$$
0=\chi_A(A)Y=Y\chi_A(B).
$$

由于 $\chi_A,\chi_B$ 互素，存在 $u,v\in F[t]$ 使 $u\chi_A+v\chi_B=1$。代入 $B$ 并再次使用 Cayley–Hamilton 定理，得到

$$
u(B)\chi_A(B)=I_n.
$$

这些矩阵都是 $B$ 的多项式，彼此交换，故 $\chi_A(B)$ 可逆，进而 $Y=0$。因此 $\mathcal L$ 是同构，对每个 $C$ 都有唯一解。

在复数域上，特征多项式互素就是没有公共特征值。在一般域上，使用多项式互素的表述更准确，不能只检查落在 $F$ 内的特征值。上述论证是唯一可解的一项直接判据；**Roth 定理本身不需要互素条件**。

若 $A=\operatorname{diag}(a_1,\ldots,a_m)$、$B=\operatorname{diag}(b_1,\ldots,b_n)$，则逐项化为

$$
(a_i-b_j)x_{ij}=c_{ij}.
$$

当 $a_i\ne b_j$ 时，该位置的解被唯一确定；当 $a_i=b_j$ 时，必须有 $c_{ij}=0$，此时 $x_{ij}$ 可以自由取值。可见公共特征值可能带来相容性限制或自由度，并不意味着所有右端 $C$ 都不可解。

[返回章节导航](#章节导航)

## 五、两个例子与三处易错点

### 例一：指定的不变子空间未必有不变补空间

取 $A=B=(0)$、$C=(1)$，则方程变成 $0=1$，无解。同时

$$
T=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad D=0_2,
$$

两者秩分别为 $1,0$，不相似。这里 $W=F(1,0)$ 不变。若一维补空间由 $(u,v)$ 张成，则 $v\ne0$；而 $t(u,v)=(v,0)$ 不可能属于该补空间，因此不存在不变补空间。

这个例子也说明，特征多项式相同不足以替代相似条件：两者的特征多项式都是 $t^2$。

### 例二：可逆矩阵的右下块可以不可逆

即使取 $A=B=(0)$、$C=(0)$，也可以用

$$
S=\begin{pmatrix}0&1\\1&0\end{pmatrix}
$$

实现 $S^{-1}TS=D$。但 $S$ 的右下块为零，而且 $S$ 将第一坐标子空间换到了第二坐标子空间。

因此，从一个任意给定的相似矩阵 $S$ 出发，既不能直接对其右下块求逆，也不能默认它保持原先的 $W$。Roth 定理保证的是另一个具有特殊形式的相似矩阵存在，而不是每个相似矩阵都具有这种形式。

### 应避免的三处跳步

- **只写出 $U^{-1}TU=D$**。这只证明了由可解到相似；逆向的存在性仍须证明。
- **把任意相似变换当作保持分块的变换**。若要保持指定的第一块空间，必须另外证明；上节的补空间引理正承担这一任务。
- **用“相似于直和，所以指定子空间可分裂”作未经证明的引理**。对本题而言，这正是逆向论证的实质内容，直接引用会造成循环。本文用交织映射空间及秩—零度定理独立证明了它。

[返回章节导航](#章节导航)

## 六、证法比较与方法总结

| 比较项目 | 代数证明 | 几何证明 |
| --- | --- | --- |
| 基础知识 | 分块乘法、线性同构、秩—零度定理 | 前述维数知识，以及商空间、直和、图像子空间 |
| 关键引理 | 相似保持交织矩阵空间的维数 | 图像引理与已完整证明的补空间引理 |
| 核心构造 | 投影 $\binom{Y}{Z}\mapsto Z$，使 $Z=I_n$ | 构造 $qs=I_Q$ 且 $ts=sb$，取 $L=s(Q)$ |
| 证明长度 | 一次分块计算与一次核、像维数比较 | 多出商空间说明、图像表示与补空间验证 |
| 主要用途 | 常规考试、快速完整地证明定理 | 理解为何能消去上三角耦合块，以及如何选择基 |
| 可推广性 | 可对同时交织的矩阵空间重复使用维数法 | 可表述为多个线性变换的公共不变补空间问题 |

**常规考试优先采用代数证明**。它使用的工具最少，难点集中在一个投影的满射性上，不需要 Jordan 标准型、有理标准型或模论。几何写法更适合解释结论与构造，但并非一个与代数法毫无关系的独立技巧：二者是同一维数方法的坐标表达与空间表达。

关于表中的推广，设有有限多个同阶分块矩阵 $T_i=\left(\begin{smallmatrix}A_i&C_i\\0&B_i\end{smallmatrix}\right)$、$D_i=\operatorname{diag}(A_i,B_i)$。如果**同一个** $S$ 对所有 $i$ 都满足 $S^{-1}T_iS=D_i$，将上述空间改为同时满足全部交织等式的空间，左乘 $S$ 仍给出同构，取下半块的核仍是全部齐次方程的解空间，维数相减仍给出满射。共同交换空间含有 $I_n$，故得到同一个 $X$ 满足所有 $A_iX-XB_i=C_i$；反向仍由同一个 $U$ 验证。仅有每一对分别相似，并不满足这里“同一个 $S$”的假设。

整个方法可以记成：**相似给出解空间等维；核不变迫使投影满射；单位矩阵的原像给出方程的解**。几何上，对应于为原先指定的不变子空间构造一个相容的补空间。

论证始终发生在有限维 $F$ 线性空间中。有限维性用于“子空间与全空间同维则相等”，不能把这一环节不加说明地搬到无限维空间或一般环上的模。

[返回章节导航](#章节导航)

## 七、参考文献

以下文献用于追溯定理及其证明研究。本文所需的两个方向和关键引理均已在正文中证明，阅读正文无须预先掌握文献中的标准型方法。

1. W. E. Roth, *The equations AX−YB=C and AX−XB=C in matrices*, Proceedings of the American Mathematical Society **3** (1952), 392–396。书目信息亦见下列 Flanders–Wimmer 论文的参考文献。
2. H. Flanders and H. K. Wimmer, [*On the matrix equations AX−XB=C and AX−YB=C*](https://epubs.siam.org/doi/10.1137/0132058), SIAM Journal on Applied Mathematics **32** (1977), 707–710。该文给出不依赖标准型的证明。
3. F. Gerrish and A. J. B. Ward, [*Sylvester’s matrix equation and Roth’s removal rule*](https://www.cambridge.org/core/journals/mathematical-gazette/article/abs/sylvesters-matrix-equation-and-roths-removal-rule/641CCD5D4E2DE8DD6585D429EDAE75B4), The Mathematical Gazette **82** (1998), 423–430。
