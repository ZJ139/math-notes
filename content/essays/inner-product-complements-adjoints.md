---
title: "内积空间中的补空间与伴随变换：从正交分解到谱定理"
description: "区分线性补空间与正交补，完整证明贝塞尔不等式、像与核的正交关系、不变子空间的伴随对应及最小二乘原理，并用归纳法证明正交化、误差恒等式与自伴随谱定理。"
subject: "高等代数"
tags: [内积空间, 正交补, 伴随变换, 贝塞尔不等式, 不变子空间, 归纳法, 谱定理, 最小二乘]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

[文章栏目](/essays/) · [Roth 消去定理与不变补空间](/essays/475ab189790df47f4acbd98c/)

补空间解决“怎样把向量唯一拆开”，正交补进一步解决“怎样把长度也拆开”，伴随变换则把一个变换作用于哪一侧的问题转移到内积的另一侧。三者相接，便得到内积空间中最常用的两组关系：

$$
\begin{aligned}
V&=\ker A\mathbin{\oplus^{\perp}}\operatorname{Im}A^*,\\
W&=\operatorname{Im}A\mathbin{\oplus^{\perp}}\ker A^*.
\end{aligned}
$$

本文从定义出发证明这些式子，再用它们解释投影、方程可解性、最小二乘和谱定理。贯穿全文的证明动作只有两个：**将“属于正交补”改写成内积等于零；将一个方向分离后，在剩下的正交补上归纳。**

## 章节导航

- [一、约定与补空间的两种含义](#一约定与补空间的两种含义)
- [二、正交化与正交分解的归纳证明](#二正交化与正交分解的归纳证明)
- [三、贝塞尔不等式与最佳逼近](#三贝塞尔不等式与最佳逼近)
- [四、伴随变换的定义与存在唯一性](#四伴随变换的定义与存在唯一性)
- [五、像与核的四个基本子空间](#五像与核的四个基本子空间)
- [六、不变子空间与正交投影](#六不变子空间与正交投影)
- [七、自伴随谱定理的维数归纳证明](#七自伴随谱定理的维数归纳证明)
- [八、方程可解性与最小二乘](#八方程可解性与最小二乘)
- [九、无限维时哪些结论需要修改](#九无限维时哪些结论需要修改)
- [十、解题方法与易错点](#十解题方法与易错点)

## 一、约定与补空间的两种含义

除第九节外，$V,W$ 均为实数域或复数域 $\mathbb F$ 上的**有限维内积空间**。约定内积对第一个变量线性，对第二个变量共轭线性，即

$$
\begin{aligned}
\langle \alpha x+\beta y,z\rangle
&=\alpha\langle x,z\rangle+\beta\langle y,z\rangle,\\
\langle x,\alpha y+\beta z\rangle
&=\overline\alpha\langle x,y\rangle+\overline\beta\langle x,z\rangle.
\end{aligned}
$$

特别地，$\mathbb F^n$ 的标准内积为 $\langle x,y\rangle=\sum_jx_j\overline{y_j}$，范数为 $\|x\|=\sqrt{\langle x,x\rangle}$。实数情形中所有共轭符号均可去掉。若教材采用另一种内积约定，应同步调整系数中的共轭位置。

设 $U\subseteq V$ 是子空间。子空间 $L$ 称为 $U$ 的一个**线性补空间**，如果

$$
V=U\oplus L,
\qquad\text{即}\qquad U+L=V,\quad U\cap L=\{0\}.\qquad\text{(1)}
$$

等价地，每个 $x\in V$ 都唯一写成 $x=u+\ell$，其中 $u\in U$、$\ell\in L$。将 $U$ 的一组基扩充为 $V$ 的基，新增基向量的张成空间就是一个补空间，所以有限维时补空间总存在；它一般不唯一。

**例 1：线性补空间可以倾斜。**在标准内积空间 $\mathbb R^2$ 中，令

$$
U=\operatorname{span}\{(1,0)\},\qquad
L_a=\operatorname{span}\{(a,1)\}\quad(a\in\mathbb R).
$$

由于 $(x,y)=(x-ay,0)+y(a,1)$，每个 $L_a$ 都是 $U$ 的补空间。只有 $a=0$ 时，两部分总是相互垂直。

内积指定的**正交补**定义为

$$
U^\perp=\{x\in V:\langle x,u\rangle=0\text{ 对每个 }u\in U\}.\qquad\text{(2)}
$$

它是一个由 $U$ 与内积共同确定的子空间。若 $x\in U\cap U^\perp$，取 $u=x$ 得 $\|x\|^2=0$，故 $x=0$。但是，仅证明交集为零还没有证明它是补空间；还必须证明 $U+U^\perp=V$。下一节给出构造。

## 二、正交化与正交分解的归纳证明

### 定理 1：施密特正交化

若 $v_1,\ldots,v_m$ 线性无关，则存在标准正交组 $e_1,\ldots,e_m$，使每个 $1\leqslant k\leqslant m$ 都满足

$$
\operatorname{span}\{e_1,\ldots,e_k\}
=\operatorname{span}\{v_1,\ldots,v_k\}.\qquad\text{(3)}
$$

**证明：**对组中向量的个数归纳。$m=1$ 时取 $e_1=v_1/\|v_1\|$ 即可。

假设前 $k-1$ 个向量已经完成正交化。令

$$
w_k=v_k-\sum_{j=1}^{k-1}\langle v_k,e_j\rangle e_j.\qquad\text{(4)}
$$

对 $1\leqslant i<k$，有

$$
\begin{aligned}
\langle w_k,e_i\rangle
&=\langle v_k,e_i\rangle
-\sum_{j=1}^{k-1}\langle v_k,e_j\rangle\langle e_j,e_i\rangle\\
&=0.
\end{aligned}
$$

又 $w_k\neq0$，否则 $v_k$ 属于前 $k-1$ 个 $e_j$ 的张成空间，由归纳假设也就属于前 $k-1$ 个 $v_j$ 的张成空间，与线性无关矛盾。于是可取 $e_k=w_k/\|w_k\|$。式（4）表明添加 $e_k$ 与添加 $v_k$ 得到相同的张成空间，故式（3）在第 $k$ 项仍成立。归纳完成。证毕。

**归纳的关键：**既要检查新向量垂直于旧空间，也要证明新向量不为零；后者正是原向量组线性无关的用途。

### 定理 2：正交分解

对任意子空间 $U\subseteq V$，有

$$
V=U\mathbin{\oplus^{\perp}}U^\perp.\qquad\text{(5)}
$$

符号 $\oplus^\perp$ 表示直和的两个子空间还彼此正交。若 $e_1,\ldots,e_m$ 是 $U$ 的一组标准正交基，则唯一分解为

$$
\begin{aligned}
x&=P_Ux+r,\\
P_Ux&=\sum_{j=1}^m\langle x,e_j\rangle e_j\in U,\\
r&=x-P_Ux\in U^\perp.
\end{aligned}\qquad\text{(6)}
$$

**证明：**由定理 1，$U$ 有标准正交基。按式（6）定义 $P_Ux$，直接计算可得 $\langle r,e_i\rangle=0$，故 $r$ 垂直于 $U$ 中每个向量。分解因而存在。若 $x=u_1+r_1=u_2+r_2$，则 $u_1-u_2=r_2-r_1\in U\cap U^\perp=\{0\}$，故分解唯一。$U=\{0\}$ 时将空和记作零，论证仍成立。证毕。

这里 $P_U$ 称为到 $U$ 上的**正交投影**。因为分解唯一，换用 $U$ 的另一组标准正交基会得到同一个 $P_Ux$。

从式（5）立即得到

$$
\dim U^\perp=\dim V-\dim U,\qquad
(U^\perp)^\perp=U.\qquad\text{(7)}
$$

第二式可先由定义得到 $U\subseteq(U^\perp)^\perp$，再用第一式比较维数。正交补还将包含关系反向，并满足

$$
\begin{aligned}
U_1\subseteq U_2&\Longrightarrow U_2^\perp\subseteq U_1^\perp,\\
(U_1+U_2)^\perp&=U_1^\perp\cap U_2^\perp,\\
(U_1\cap U_2)^\perp&=U_1^\perp+U_2^\perp.
\end{aligned}\qquad\text{(8)}
$$

前两式直接将“垂直于所有向量”展开即可。将第二式用于 $U_1^\perp,U_2^\perp$，再取两边的正交补并使用式（7），便得到第三式。

### 所有线性补空间怎样与正交补联系

正交补不是与一般补空间无关的另一个概念；事实上，所有补空间都可以用它来描述。

**命题：**$U$ 的线性补空间恰为

$$
L_T=\{Tz+z:z\in U^\perp\},\qquad
T:U^\perp\longrightarrow U\text{ 为任意线性映射}.\qquad\text{(9)}
$$

不同的 $T$ 给出不同的补空间，且 $L_T=U^\perp$ 当且仅当 $T=0$。

**证明：**若 $V=U\oplus L$，则 $P_{U^\perp}|_L:L\to U^\perp$ 是同构。它的核为 $L\cap U=\{0\}$；对任意 $z\in U^\perp$，把 $z$ 分解为 $u+\ell$，便有 $z=P_{U^\perp}\ell$，故它也满射。它的逆必唯一写成 $z\mapsto Tz+z$，其中 $Tz\in U$。

反过来，任意 $x=u+z$ 都能写成 $x=(u-Tz)+(Tz+z)$，而 $Tz+z\in U$ 蕴含 $z=0$，所以 $V=U\oplus L_T$。若 $L_T$ 与 $U$ 正交，则 $Tz$ 既属于 $U$ 又垂直于 $U$，只能为零。证毕。

例 1 正是 $T(0,y)=(ay,0)$ 的情形。因此，**线性补空间取决于选择；正交补是给定内积后唯一与原空间垂直的补空间。**

[返回章节导航](#章节导航)

## 三、贝塞尔不等式与最佳逼近

### 定理 3：贝塞尔不等式及等号条件

设 $e_1,\ldots,e_m$ 是标准正交组，不要求张成整个 $V$。则对任意 $x\in V$，

$$
\sum_{j=1}^m|\langle x,e_j\rangle|^2\leqslant\|x\|^2.\qquad\text{(10)}
$$

等号成立当且仅当 $x\in\operatorname{span}\{e_1,\ldots,e_m\}$。

**证明：**真正需要证明的是更强的误差恒等式

$$
\left\|x-\sum_{j=1}^m\langle x,e_j\rangle e_j\right\|^2
=\|x\|^2-\sum_{j=1}^m|\langle x,e_j\rangle|^2.\qquad\text{(11)}
$$

以下用归纳法说明每增加一个正交方向时发生什么。置 $r_0=x$，并令

$$
r_k=x-\sum_{j=1}^k\langle x,e_j\rangle e_j.
$$

由于 $e_k$ 与前 $k-1$ 个基向量正交，$\langle r_{k-1},e_k\rangle=\langle x,e_k\rangle$，且

$$
r_{k-1}=\langle x,e_k\rangle e_k+r_k,\qquad r_k\perp e_k.
$$

将右端的内积展开，交叉项为零，得到

$$
\|r_{k-1}\|^2=|\langle x,e_k\rangle|^2+\|r_k\|^2.
$$

$k=0$ 时 $\|r_0\|^2=\|x\|^2$。假设式（11）对 $k-1$ 成立，再用上式减去第 $k$ 个平方项，就得到对 $k$ 的结论，故归纳证明了式（11）。由 $\|r_m\|^2\geqslant0$ 得式（10）；等号恰好要求 $r_m=0$，也就恰好要求 $x$ 属于所给正交组的张成空间。证毕。

**不等式的含义：**左边是这些正交方向已经解释的长度平方，右边是全部长度平方，两者之差恰为未被解释的残差长度平方。若给定的是整个空间的标准正交基，则对所有 $x$ 都有等号，这就是有限维的帕塞瓦尔等式。

若 $u_1,\ldots,u_m$ 只是两两正交的非零向量，先将它们单位化，便得到

$$
\sum_{j=1}^m\frac{|\langle x,u_j\rangle|^2}{\|u_j\|^2}
\leqslant\|x\|^2.\qquad\text{(12)}
$$

取 $m=1$ 即为柯西—施瓦茨不等式 $|\langle x,u\rangle|\leqslant\|x\|\|u\|$；$u\neq0$ 时等号当且仅当 $x$ 与 $u$ 线性相关，$u=0$ 时等号自动成立。

### 定理 4：正交投影给出唯一最佳逼近

对每个 $u\in U$，都有

$$
\|x-u\|^2=\|x-P_Ux\|^2+\|P_Ux-u\|^2.\qquad\text{(13)}
$$

所以 $P_Ux$ 是 $U$ 中距 $x$ 最近的唯一向量。

**证明：**把 $x-u$ 写成 $(x-P_Ux)+(P_Ux-u)$。前者在 $U^\perp$ 中，后者在 $U$ 中，两者正交，展开长度平方即得式（13）。第二项非负且只在 $u=P_Ux$ 时为零。证毕。

式（13）也解释了为什么随意选择的线性补空间不提供最佳逼近。例如沿 $L_a$ 投影到例 1 的 $U$ 上，得到 $(x-ay,0)$，通常不是最近点 $(x,0)$。

## 四、伴随变换的定义与存在唯一性

设 $A:V\to W$ 是线性映射。它的**伴随映射**是满足

$$
\langle Ax,y\rangle_W=\langle x,A^*y\rangle_V
\quad(x\in V,\ y\in W)\qquad\text{(14)}
$$

的线性映射 $A^*:W\to V$。当 $V=W$ 时，二者都是同一空间上的线性变换。注意伴随将映射方向反转，且它依赖于两边的内积。

### 定理 5：有限维时伴随存在且唯一

**证明：**取 $V$ 的标准正交基 $e_1,\ldots,e_n$。对 $y\in W$ 定义

$$
A^*y=\sum_{j=1}^n\langle y,Ae_j\rangle_W e_j.\qquad\text{(15)}
$$

系数对 $y$ 线性，所以这是线性映射。若 $x=\sum_jx_je_j$，则

$$
\begin{aligned}
\langle x,A^*y\rangle_V
&=\sum_jx_j\overline{\langle y,Ae_j\rangle_W}\\
&=\sum_jx_j\langle Ae_j,y\rangle_W
=\langle Ax,y\rangle_W.
\end{aligned}
$$

故它确为伴随。若 $B$ 也满足式（14），则对每个 $y$ 和所有 $x$ 都有 $\langle x,(A^*-B)y\rangle=0$。取 $x=(A^*-B)y$，即得 $(A^*-B)y=0$，所以 $B=A^*$。证毕。

若定义域、陪域都取标准正交基，$A$ 的矩阵为 $M$，则 $A^*$ 的矩阵为 $\overline M^{\mathsf T}$，即共轭转置；实数情形为转置。**任意基下不能直接照搬这个公式。**若坐标内积分别写为

$$
\langle x,z\rangle_V=z^\dagger G_Vx,\qquad
\langle y,w\rangle_W=w^\dagger G_Wy,
$$

其中 $\dagger$ 表示共轭转置，$G_V,G_W$ 为对应的正定 Hermite 矩阵，则由式（14）比较系数可得

$$
[A^*]=G_V^{-1}M^\dagger G_W.\qquad\text{(16)}
$$

伴随的基本运算法则是

$$
\begin{aligned}
(A+B)^*&=A^*+B^*,& (\lambda A)^*&=\overline\lambda A^*,\\
(A^*)^*&=A,& (BA)^*&=A^*B^*.
\end{aligned}\qquad\text{(17)}
$$

此处各映射的定义域、陪域要求相容。例如 $A:V\to W$、$B:W\to Z$ 时，

$$
\langle BAx,z\rangle
=\langle Ax,B^*z\rangle
=\langle x,A^*B^*z\rangle,
$$

由唯一性得到乘积次序反转。对式（14）取共轭可得双重伴随等于原映射，其余法则同样代入定义验证即可。

[返回章节导航](#章节导航)

## 五、像与核的四个基本子空间

### 定理 6：像与伴随的核互为正交补

对 $A:V\to W$，有

$$
\begin{aligned}
(\operatorname{Im}A)^\perp&=\ker A^*\subseteq W,\\
(\operatorname{Im}A^*)^\perp&=\ker A\subseteq V,\\
\operatorname{Im}A&=(\ker A^*)^\perp,\\
\operatorname{Im}A^*&=(\ker A)^\perp.
\end{aligned}\qquad\text{(18)}
$$

**证明：**对 $y\in W$，逐项翻译定义：

$$
\begin{aligned}
y\in(\operatorname{Im}A)^\perp
&\Longleftrightarrow \langle Ax,y\rangle_W=0\quad\text{对所有 }x\in V\\
&\Longleftrightarrow \langle x,A^*y\rangle_V=0\quad\text{对所有 }x\in V\\
&\Longleftrightarrow A^*y=0.
\end{aligned}
$$

末项的必要性只需取 $x=A^*y$。将 $A$ 换为 $A^*$，再用 $(A^*)^*=A$，得到第二式。对前两式取正交补，并用有限维双重正交补公式，便得到后两式。证毕。

因此四个空间应当按其所属的空间配对：

| 所在空间 | 一部分 | 它的正交补 | 正交分解 |
| --- | --- | --- | --- |
| 定义域 $V$ | $\ker A$ | $\operatorname{Im}A^*$ | $V=\ker A\oplus^\perp\operatorname{Im}A^*$ |
| 陪域 $W$ | $\operatorname{Im}A$ | $\ker A^*$ | $W=\operatorname{Im}A\oplus^\perp\ker A^*$ |

由第一行和秩—零度定理，

$$
\operatorname{rank}A^*
=\dim V-\dim\ker A
=\operatorname{rank}A.\qquad\text{(19)}
$$

由第二行还可知：$A$ 满射当且仅当 $A^*$ 单射；同理，$A$ 单射当且仅当 $A^*$ 满射。对长方阵，这比直接背诵行秩等于列秩更能说明几何原因。

### 伴随为何自然地产生正定或半正定变换

由式（17），$A^*A:V\to V$ 是自伴随变换，并且

$$
\langle A^*Ax,x\rangle=\|Ax\|^2\geqslant0,\qquad
\ker(A^*A)=\ker A.\qquad\text{(20)}
$$

第一式可由 $\langle Ax,Ax\rangle=\langle x,A^*Ax\rangle$ 取共轭得到。若 $A^*Ax=0$，第一式给出 $Ax=0$；逆向显然。因此 $A^*A$ 可逆当且仅当 $A$ 单射，这时 $A^*A$ 正定。

再结合式（18），还有

$$
\operatorname{Im}(A^*A)=\operatorname{Im}A^*,\qquad
\operatorname{Im}(AA^*)=\operatorname{Im}A.
$$

例如，第一式由 $A^*A$ 自伴随及 $\ker(A^*A)=\ker A$，对核取正交补即得。

**例 2：一般不能去掉伴随符号。**在 $\mathbb R^2$ 中取

$$
A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
A^*=\begin{pmatrix}0&0\\1&0\end{pmatrix}.
$$

此时 $\operatorname{Im}A=\ker A=\operatorname{span}\{(1,0)\}$，它们不构成直和；而 $\operatorname{Im}A^*=\ker A^*=\operatorname{span}\{(0,1)\}$。正确分解始终是上表中的交叉配对。

若 $A=A^*$，则可以去掉星号，得到 $V=\ker A\oplus^\perp\operatorname{Im}A$。这依赖于自伴随条件。

## 六、不变子空间与正交投影

以下令 $A:V\to V$。子空间 $U$ 称为 $A$ 的不变子空间，如果 $A(U)\subseteq U$。

### 定理 7：不变性在正交补上交换伴随

$$
A(U)\subseteq U
\quad\Longleftrightarrow\quad
A^*(U^\perp)\subseteq U^\perp.\qquad\text{(21)}
$$

**证明：**若 $A(U)\subseteq U$，则对 $z\in U^\perp$、$u\in U$，有

$$
\langle u,A^*z\rangle=\langle Au,z\rangle=0,
$$

所以 $A^*z\in U^\perp$。反过来，若右侧成立，则同一个等式说明 $Au$ 垂直于 $U^\perp$，由 $(U^\perp)^\perp=U$ 得 $Au\in U$。证毕。

**关键区别：**由 $U$ 对 $A$ 不变，一般只能推出 $U^\perp$ 对 $A^*$ 不变。例 2 中 $U=\operatorname{span}\{(1,0)\}$ 对 $A$ 不变，但 $A(0,1)=(1,0)\notin U^\perp$，所以它的正交补不对 $A$ 不变。

若 $A=A^*$，式（21）才直接给出：每个 $A$-不变子空间的正交补仍然对 $A$ 不变。这将是下一节维数归纳可以进行的原因。

### 定理 8：正交投影的代数刻画

一个线性变换 $P:V\to V$ 是某个子空间上的正交投影，当且仅当

$$
P^2=P,\qquad P^*=P.\qquad\text{(22)}
$$

**证明：**若 $P=P_U$，显然 $P^2=P$。将 $x=u+z$、$y=v+w$ 按 $U\oplus^\perp U^\perp$ 分解，有

$$
\langle Px,y\rangle=\langle u,v\rangle=\langle x,Py\rangle,
$$

故 $P^*=P$。

反过来，$P^2=P$ 给出 $x=Px+(x-Px)$，两部分分别在 $\operatorname{Im}P$ 和 $\ker P$ 中。若 $v=Py\in\operatorname{Im}P$、$z\in\ker P$，则

$$
\langle v,z\rangle=\langle Py,z\rangle=\langle y,Pz\rangle=0.
$$

因此这个分解正交，$P$ 就是到 $\operatorname{Im}P$ 上的正交投影。证毕。

只有 $P^2=P$ 时，$P$ 仅保证为沿 $\ker P$ 到 $\operatorname{Im}P$ 的线性投影。例如例 1 的斜投影矩阵为

$$
P_a=\begin{pmatrix}1&-a\\0&0\end{pmatrix}.
$$

它对所有 $a$ 都满足 $P_a^2=P_a$，却只有在 $a=0$ 时才自伴随。

### 什么时候投影与变换可交换

称 $U$ 为 $A$ 的**约化子空间**，如果 $U$ 与 $U^\perp$ 都对 $A$ 不变。此时有精确判据

$$
AP_U=P_UA
\quad\Longleftrightarrow\quad
U\text{ 与 }U^\perp\text{ 都对 }A\text{ 不变}.\qquad\text{(23)}
$$

**证明：**若交换，对 $u\in U$ 有 $P_UAu=AP_Uu=Au$，故 $Au\in U$；对 $z\in U^\perp$ 有 $P_UAz=AP_Uz=0$，故 $Az\in U^\perp$。反过来，若两边都不变，将 $x=u+z$ 分解后即有 $P_UAx=Au=AP_Ux$。证毕。

由式（21），这也等价于 $U$ 同时对 $A$ 与 $A^*$ 不变。用适合 $U\oplus^\perp U^\perp$ 的标准正交基表示时，约化子空间对应矩阵的块对角分解；仅有 $U$ 不变时，一般只有块上三角形式。

[返回章节导航](#章节导航)

## 七、自伴随谱定理的维数归纳证明

### 定理 9：有限维自伴随谱定理

若 $A=A^*$，则 $V$ 存在一组由 $A$ 的特征向量构成的标准正交基，且全部特征值均为实数。实矩阵情形即实对称矩阵可正交对角化，复矩阵情形即 Hermite 矩阵可酉对角化。

**证明：**先说明非零空间上的自伴随变换至少有一个实特征值及相应的非零特征向量。复数情形由特征多项式及代数基本定理得到 $Av=\lambda v$，$v\neq0$。自伴随性给出

$$
\lambda\|v\|^2
=\langle Av,v\rangle
=\langle v,Av\rangle
=\overline\lambda\|v\|^2,
$$

所以 $\lambda\in\mathbb R$。实数情形先取标准正交基，$A$ 的矩阵 $M$ 为实对称矩阵。把同一个 $M$ 看成复空间上的 Hermite 矩阵，上述论证得到实特征值 $\lambda$ 及复特征向量 $a+ib$。比较实虚部得 $Ma=\lambda a$、$Mb=\lambda b$，且 $a,b$ 至少一个非零，因此存在实特征向量。这一论证只用代数基本定理，不预先使用谱定理。

现对 $n=\dim V$ 归纳。$n=0$ 时空基即可，$n=1$ 时结论显然。设结论对所有小于 $n$ 维的内积空间成立。取单位特征向量 $e_1$，令 $U=\operatorname{span}\{e_1\}$。因 $U$ 对 $A$ 不变且 $A=A^*$，由式（21），$U^\perp$ 也对 $A$ 不变。

于是限制映射 $B=A|_{U^\perp}$ 是 $U^\perp$ 上的线性变换，且对 $z,w\in U^\perp$，

$$
\langle Bz,w\rangle=\langle Az,w\rangle
=\langle z,Aw\rangle=\langle z,Bw\rangle.
$$

因此 $B$ 在这个 $n-1$ 维内积空间上仍然自伴随。由归纳假设，$U^\perp$ 有标准正交特征基 $e_2,\ldots,e_n$。将 $e_1$ 添入，就得到 $V$ 的标准正交特征基。证毕。

**归纳中的转折点：**选出一个特征向量只解决了一个方向；真正使证明闭合的是“其正交补不变，而且限制变换仍满足原来的自伴随条件”。不能仅凭剩余空间维数减少，就直接套用归纳假设。

若 $Ax=\lambda x$、$Ay=\mu y$ 且 $\lambda\neq\mu$，则特征值为实数，故

$$
\lambda\langle x,y\rangle
=\langle Ax,y\rangle
=\langle x,Ay\rangle
=\mu\langle x,y\rangle,
$$

从而不同特征值的特征子空间正交。记互异特征值为 $\lambda_1,\ldots,\lambda_s$，对应特征子空间为 $E_1,\ldots,E_s$，则

$$
\begin{aligned}
V&=E_1\oplus^\perp\cdots\oplus^\perp E_s,\\
I&=\sum_{j=1}^sP_{E_j},\qquad
A=\sum_{j=1}^s\lambda_jP_{E_j}.
\end{aligned}\qquad\text{(24)}
$$

这就是谱分解：$A$ 先将向量拆成互相垂直的特征分量，再对各分量分别作实数倍伸缩。它把“补空间”“正交投影”和“自伴随”汇合到同一个公式中。

### 一点推广：正规变换与共轭特征值

在复内积空间中，若 $A^*A=AA^*$，称 $A$ 为正规变换。自伴随变换是其中一类。对任意 $\lambda\in\mathbb C$，$T=A-\lambda I$ 仍正规，且

$$
\|Tx\|^2=\langle T^*Tx,x\rangle
=\langle TT^*x,x\rangle=\|T^*x\|^2.
$$

所以 $\ker T=\ker T^*$，也就是

$$
\ker(A-\lambda I)=\ker(A^*-\overline\lambda I).\qquad\text{(25)}
$$

因此 $A$ 的特征向量也是 $A^*$ 的特征向量，其特征值共轭。选取单位特征向量 $e$ 后，$\operatorname{span}\{e\}^\perp$ 同时对 $A,A^*$ 不变；两者在该正交补上的限制互为伴随且仍然交换，限制变换仍正规。由与上面相同的维数归纳，得到复正规变换也有标准正交特征基。

这里“复数域”不能省略。例如实矩阵 $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ 正规，却没有实特征向量，不能在实数域上对角化。另一方面，对一般不正规的 $A$，也不能从 $Ax=\lambda x$ 推出 $A^*x=\overline\lambda x$；例 2 取 $x=(1,0)$ 即为反例。

## 八、方程可解性与最小二乘

回到 $A:V\to W$，给定 $b\in W$。

### 方程可解：检验伴随的齐次方程

由式（18），

$$
\begin{aligned}
Ax=b\text{ 有解}
&\Longleftrightarrow b\in\operatorname{Im}A\\
&\Longleftrightarrow b\perp\ker A^*.
\end{aligned}\qquad\text{(26)}
$$

因此，只需找出 $A^*y=0$ 的一组基解，并检查 $b$ 是否与它们全部正交。这个条件也可直接理解：若 $Ax=b$ 且 $A^*y=0$，那么 $\langle b,y\rangle=\langle x,A^*y\rangle=0$；有限维正交分解保证这些必要条件同时充分。

### 方程无解：将目标先投影到像空间

**定理 10：**$x$ 使 $\|Ax-b\|$ 达到最小值，当且仅当它满足正规方程

$$
A^*(Ax-b)=0,\qquad\text{即}\qquad A^*Ax=A^*b.\qquad\text{(27)}
$$

最小二乘解总存在，其全体为 $x_0+\ker A$；其中有且仅有一个属于 $(\ker A)^\perp$，它是所有最小二乘解中范数最小者。

**证明：**将 $b$ 按陪域的正交分解写成

$$
b=b_0+r,\qquad b_0=P_{\operatorname{Im}A}b,\quad r\in\ker A^*.
$$

因为 $Ax-b_0\in\operatorname{Im}A$，所以

$$
\|Ax-b\|^2=\|Ax-b_0\|^2+\|r\|^2.\qquad\text{(28)}
$$

由 $b_0\in\operatorname{Im}A$，存在 $x_0$ 使 $Ax_0=b_0$。式（28）表明最小值恰在 $Ax=b_0$ 时取得，其解集为 $x_0+\ker A$。此外，$A^*(Ax-b)=0$ 等价于 $Ax-b\in\ker A^*=(\operatorname{Im}A)^\perp$，由正交分解唯一性，这也等价于 $Ax=b_0$，故正规方程的充要性成立。

将某个最小二乘解 $x_0$ 写成 $x_0=x_{\min}+k_0$，其中 $x_{\min}\in(\ker A)^\perp$、$k_0\in\ker A$。则全部最小二乘解可写成 $x_{\min}+k$，并且

$$
\|x_{\min}+k\|^2=\|x_{\min}\|^2+\|k\|^2.
$$

因此唯一的最小范数解为 $x_{\min}$。证毕。

若 $A$ 单射，式（20）保证 $A^*A$ 可逆，故唯一最小二乘解为

$$
x=(A^*A)^{-1}A^*b.
$$

若 $A$ 不单射，不能写这个逆矩阵；仍可用式（27）求全部解，再选出垂直于 $\ker A$ 的那一个。

**例 3：一次看清四个子空间、残差和最小范数解。**在标准内积下取

$$
A:\mathbb R^3\to\mathbb R^2,\qquad
A=\begin{pmatrix}1&1&0\\0&0&0\end{pmatrix},\qquad
b=\begin{pmatrix}2\\3\end{pmatrix}.
$$

直接计算得到

$$
\begin{aligned}
\ker A&=\operatorname{span}\{(1,-1,0),(0,0,1)\},\\
\operatorname{Im}A^*&=\operatorname{span}\{(1,1,0)\},\\
\operatorname{Im}A&=\operatorname{span}\{(1,0)\},\\
\ker A^*&=\operatorname{span}\{(0,1)\}.
\end{aligned}
$$

$b$ 与 $\ker A^*$ 不正交，故 $Ax=b$ 无解。它在像空间上的正交投影为 $b_0=(2,0)$，残差 $b-b_0=(0,3)$。最小二乘解全体为

$$
x=(1+t,1-t,s),\qquad t,s\in\mathbb R.
$$

最小残差范数为 $3$；而 $\|x\|^2=2+2t^2+s^2$，所以其中唯一的最小范数解为 $(1,1,0)$，恰好属于 $\operatorname{Im}A^*=(\ker A)^\perp$。这也提醒我们：“最小残差”与“最小范数”是两个不同的优化目标。

[返回章节导航](#章节导航)

## 九、无限维时哪些结论需要修改

前面反复使用的有限维假设，主要保证了子空间闭、正交投影存在，以及双重正交补不需要取闭包。不能把这些地方直接略去。

在 Hilbert 空间 $H$ 中，对任意线性子空间 $U$，正确公式为

$$
(U^\perp)^\perp=\overline U,\qquad
H=\overline U\oplus^\perp U^\perp.
$$

因此 $H=U\oplus^\perp U^\perp$ 当且仅当 $U$ 闭。对 Hilbert 空间之间的**有界线性映射** $A:H\to K$，伴随仍存在，且

$$
\begin{aligned}
(\operatorname{Im}A)^\perp&=\ker A^*,\\
\overline{\operatorname{Im}A}&=(\ker A^*)^\perp.
\end{aligned}
$$

第一式的定义证明完全相同；第二式一般必须加上闭包。于是 $b\perp\ker A^*$ 只保证 $b$ 可被像空间中的向量任意逼近，不必保证 $Ax=b$ 真有解，最小二乘的下确界也不一定能取到。

**具体反例：**在平方可和数列空间 $\ell^2$ 上定义

$$
A(x_1,x_2,\ldots)=\left(x_1,\frac{x_2}{2},\frac{x_3}{3},\ldots\right).
$$

这是有界自伴随映射，且 $\ker A^*=\{0\}$。取 $b=(1,1/2,1/3,\ldots)\in\ell^2$，则 $b$ 自动垂直于 $\ker A^*$，但 $Ax=b$ 要求 $x=(1,1,1,\ldots)$，它不属于 $\ell^2$，所以无解。取前 $N$ 项为 $1$、其余为零的 $x^{(N)}$，则 $Ax^{(N)}\to b$，证明最小残差的下确界为零却不能取得。

贝塞尔不等式对任意内积空间中的有限标准正交组都成立，前述归纳证明无需有限维。对可数标准正交组 $e_1,e_2,\ldots$，将不等式应用于每个有限前缀，再令项数趋于无穷，得到

$$
\sum_{j=1}^{\infty}|\langle x,e_j\rangle|^2\leqslant\|x\|^2.
$$

等号对给定 $x$ 成立，当且仅当 $x$ 属于这些向量的**闭线性张成空间**：由式（11），这恰好等价于相应的正交部分和收敛到 $x$。这里“张成空间”前面的“闭”字不可省略。至于无限维自伴随变换是否存在由特征向量组成的基，则需要另外的谱理论，有限维的维数归纳证明不能直接延续到无穷维。

## 十、解题方法与易错点

遇到补空间问题，先明确要求的是线性补空间、正交补，还是对某个变换不变的补空间。这三个要求依次增加结构，不能互相替代。接下来，可按题目的目标选择以下入口。

| 题目目标 | 应当先写出的关系 | 随后要检查的条件 |
| --- | --- | --- |
| 构造正交补或求投影 | $x=P_Ux+(x-P_Ux)$ | 基是否标准正交；残差是否垂直于整个 $U$ |
| 证明平方和不等式 | 贝塞尔误差恒等式（11） | 等号是否等价于残差为零 |
| 研究 $A$ 的像或 $Ax=b$ | $(\operatorname{Im}A)^\perp=\ker A^*$ | 正交补在哪个空间中取；是否有限维或像闭 |
| 研究不变子空间的正交补 | $\langle Au,z\rangle=\langle u,A^*z\rangle$ | 正交补对应的是 $A^*$，能否换回 $A$ |
| 用维数归纳证明对角化 | 分离单位特征向量及其正交补 | 补空间是否不变；限制变换是否保留假设 |
| 判断投影是否正交 | $P^2=P$ 与 $P^*=P$ | 两个条件都不能遗漏 |
| 求最小范数的最小二乘解 | 正规方程及 $x\perp\ker A$ | $A^*A$ 是否可逆；是否混淆两个最小化目标 |

最容易产生伪证的地方有四处：只证 $U\cap L=\{0\}$ 就断言它们互补；将一般补空间当作正交补而直接使用勾股关系；从 $U$ 对 $A$ 不变就断言 $U^\perp$ 也对 $A$ 不变；在归纳中没有验证限制映射仍满足原假设。前面的例子与证明分别说明了这些缺口如何补足。

本文三处归纳也有各自不同的任务：施密特正交化逐个加入独立方向；贝塞尔恒等式逐个扣除已解释的长度平方；谱定理逐个分离特征方向，并确保剩余空间保留同样的结构。理解这些归纳对象，比单独记住定理名称更有助于在新题中重新构造证明。

[返回章节导航](#章节导航) · [文章栏目](/essays/)
