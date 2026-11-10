---
title: "Roth 相抵定理：秩标准形与核像条件"
description: "在任意域上完整证明长方阵方程 AX−YB=C 与分块相抵的等价性，用秩标准形及商空间分解解释唯一障碍，并比较相似形式。"
subject: "高等代数"
tags: [Roth定理, 相抵, 分块矩阵, 秩, 核空间, 商空间]
created_at: "2026-11-10"
updated_at: "2026-11-10"
---

[文章栏目](/essays/) · [Roth 相似形式：维数证明与不变补空间](/essays/475ab189790df47f4acbd98c/) · [相关习题 2017A10](/essays/39a692552e042a7b089919e3/#问题-2017a10)

相似形式的 Roth 定理研究 $AX-XB=C$，相抵形式研究 $AX-YB=C$。允许左右两处的未知矩阵彼此独立后，问题的障碍恰好变为

$$
C(\ker B)\subseteq\operatorname{im}A.
$$

这里的意思是：被 $B$ 消去的输入，经 $C$ 映射后必须能由 $A$ 的像吸收。本文分别用秩标准形与线性映射分解完整证明这一判据，并说明它如何精确计算分块矩阵增加的秩。已有的 [2017A10 题解](/essays/39a692552e042a7b089919e3/#问题-2017a10) 使用了对应的加号形式；本篇将其整理为独立定理，统一尺寸、符号及两种证明。

## 章节导航

- [一、定理与尺寸约定](#一定理与尺寸约定)
- [二、代数证明：唯一障碍是一个子块](#二代数证明唯一障碍是一个子块)
- [三、几何证明：商空间中的因子分解](#三几何证明商空间中的因子分解)
- [四、一个长方阵例子](#四一个长方阵例子)
- [五、相抵形式与相似形式的区别](#五相抵形式与相似形式的区别)

## 一、定理与尺寸约定

以 $M_{u\times v}(F)$ 表示域 $F$ 上的 $u\times v$ 矩阵空间，以 $\operatorname{GL}_u(F)$ 表示 $u$ 阶可逆矩阵全体。两个同为 $u\times v$ 的矩阵 $M,N$ 称为**相抵**，如果存在

$$
P\in\operatorname{GL}_u(F),\qquad Q\in\operatorname{GL}_v(F),
\qquad PMQ=N.
$$

左右可逆矩阵彼此独立，分别对应初等行变换与初等列变换。由矩阵的秩标准形，**同尺寸矩阵相抵当且仅当它们的秩相等**：秩为 $r$ 的矩阵均可化为带有 $I_r$ 块、其余位置为零的同尺寸矩阵。这里相抵的矩阵可以是长方阵。

**定理（Roth 相抵定理）：**设 $F$ 为任意域，$m,n,p,q$ 为正整数，且

$$
A\in M_{m\times n}(F),\qquad
B\in M_{p\times q}(F),\qquad
C\in M_{m\times q}(F).
$$

记

$$
T=\begin{pmatrix}A&C\\0&B\end{pmatrix},\qquad
D=\begin{pmatrix}A&0\\0&B\end{pmatrix}
\in M_{(m+p)\times(n+q)}(F).
$$

其中左下零块为 $p\times n$，$D$ 的右上零块为 $m\times q$。以下四个条件等价：

1. 存在 $X\in M_{n\times q}(F)$、$Y\in M_{m\times p}(F)$，使 $AX-YB=C$。
2. $T$ 与 $D$ 在 $F$ 上相抵，即存在 $L\in\operatorname{GL}_{m+p}(F)$、$R\in\operatorname{GL}_{n+q}(F)$，使 $LTR=D$。
3. $\operatorname{rank}T=\operatorname{rank}A+\operatorname{rank}B$。
4. $C(\ker B)\subseteq\operatorname{im}A$，其中 $\ker B\subseteq F^q$、$\operatorname{im}A\subseteq F^m$。

不要求 $A,B$ 为方阵，也不要求 $m=p$ 或 $n=q$；不附加可逆性、特征值或特征限制。所有矩阵、解及基变换均在同一个域 $F$ 上，有限域和特征为 $2$ 的域也适用。

由于 $\operatorname{rank}D=\operatorname{rank}A+\operatorname{rank}B$，条件 2 与条件 3 已由秩标准形直接等价。下面的两种证明各自完成其余联系。

## 二、代数证明：唯一障碍是一个子块

**证明：**先设 $AX-YB=C$。取

$$
L=\begin{pmatrix}I_m&Y\\0&I_p\end{pmatrix},\qquad
R=\begin{pmatrix}I_n&-X\\0&I_q\end{pmatrix}.
$$

它们均可逆，且

$$
\begin{aligned}
LTR
&=\begin{pmatrix}I_m&Y\\0&I_p\end{pmatrix}
  \begin{pmatrix}A&C-AX\\0&B\end{pmatrix}\\
&=\begin{pmatrix}A&C-AX+YB\\0&B\end{pmatrix}=D.
\end{aligned}
$$

故方程可解必推出分块相抵。这里 $L$ 与 $R$ 的阶数甚至可以不同，并无互逆要求。

反过来，记 $r=\operatorname{rank}A$、$s=\operatorname{rank}B$。由初等行列变换，取

$$
P\in\operatorname{GL}_m(F),\quad Q\in\operatorname{GL}_n(F),\quad
U\in\operatorname{GL}_p(F),\quad V\in\operatorname{GL}_q(F),
$$

使

$$
A_0=PAQ=\begin{pmatrix}I_r&0\\0&0\end{pmatrix},\qquad
B_0=UBV=\begin{pmatrix}I_s&0\\0&0\end{pmatrix}.
$$

两式仍分别为 $m\times n$、$p\times q$ 矩阵。按前 $r$ 行与前 $s$ 列分块，写成

$$
C_0=PCV=\begin{pmatrix}C_{11}&C_{12}\\C_{21}&C_{22}\end{pmatrix},
\qquad C_{22}\in M_{(m-r)\times(q-s)}(F).
$$

令

$$
X_0=Q^{-1}XV\in M_{n\times q}(F),\qquad
Y_0=PYU^{-1}\in M_{m\times p}(F).
$$

这些是可逆的变量替换，而且

$$
AX-YB=C\quad\Longleftrightarrow\quad A_0X_0-Y_0B_0=C_0.
$$

左侧 $A_0X_0$ 的后 $m-r$ 行为零，$Y_0B_0$ 的后 $q-s$ 列为零，因此方程可解必须有 $C_{22}=0$。若 $C_{22}=0$，则可直接取

$$
X_0=\begin{pmatrix}C_{11}&C_{12}\\0&0\end{pmatrix},\qquad
Y_0=\begin{pmatrix}0&0\\-C_{21}&0\end{pmatrix}.
$$

这里 $X_0$ 的行分块为 $r,n-r$、列分块为 $s,q-s$；$Y_0$ 的行分块为 $r,m-r$、列分块为 $s,p-s$。直接相乘即得 $A_0X_0-Y_0B_0=C_0$，还原为

$$
X=QX_0V^{-1},\qquad Y=P^{-1}Y_0U
$$

便得到原方程的解。故方程可解当且仅当 $C_{22}=0$。

再看分块矩阵的秩。左右分别乘以 $\operatorname{diag}(P,U)$ 与 $\operatorname{diag}(Q,V)$，得到

$$
T_0=\begin{pmatrix}
I_r&0&C_{11}&C_{12}\\
0&0&C_{21}&C_{22}\\
0&0&I_s&0\\
0&0&0&0
\end{pmatrix}.
$$

其四组行的大小为 $r,m-r,s,p-s$，四组列的大小为 $r,n-r,s,q-s$。利用第三组行的 $I_s$ 消去 $C_{11},C_{21}$，再利用第一组列的 $I_r$ 消去 $C_{12}$；这些操作不改变 $C_{22}$，从而

$$
\operatorname{rank}T
=\operatorname{rank}T_0
=r+s+\operatorname{rank}C_{22}.
$$

因此 $T,D$ 同秩当且仅当 $C_{22}=0$，也就当且仅当原方程可解。

最后，$\ker B=V(\ker B_0)$，$P(\operatorname{im}A)=\operatorname{im}A_0$，所以

$$
\begin{aligned}
C(\ker B)\subseteq\operatorname{im}A
&\Longleftrightarrow C_0(\ker B_0)\subseteq\operatorname{im}A_0\\
&\Longleftrightarrow C_{22}=0.
\end{aligned}
$$

最后一个等价来自：$\ker B_0$ 的前 $s$ 个坐标为零，而 $\operatorname{im}A_0$ 的后 $m-r$ 个坐标为零。因此四个条件全部等价。若某个分块大小为零，删去对应的空行、空列即可，以上计算仍成立。证毕。

这套消元说明：**只有 $C$ 中既不能用 $A$ 的主元列消去、又不能用 $B$ 的主元行消去的部分会增加秩。** 秩标准形中的 $C_{22}$ 正是这一部分。

[返回章节导航](#章节导航)

## 三、几何证明：商空间中的因子分解

令

$$
E=F^n,\quad H=F^m,\quad G=F^q,\quad K=F^p,
$$

并将 $A,B,C$ 分别看作线性映射

$$
a:E\to H,\qquad b:G\to K,\qquad c:G\to H.
$$

未知矩阵对应 $x:G\to E$ 与 $y:K\to H$，方程成为 $ax-yb=c$。以下论证只使用核、像、商空间及有限维空间中基的选取与延拓。

### 核像条件为什么恰好保证可解

**证明：**若 $ax-yb=c$，则对任意 $v\in\ker b$，有 $c(v)=a(x(v))$，故 $c(\ker b)\subseteq\operatorname{im}a$。这证明条件的必要性。

现设此包含关系成立。记自然投影

$$
\pi:H\to H/\operatorname{im}a,\qquad h\mapsto h+\operatorname{im}a.
$$

定义

$$
d:\operatorname{im}b\to H/\operatorname{im}a,\qquad d(bv)=\pi(c(v)).
$$

这是良定义的：若 $bv=bv'$，则 $v-v'\in\ker b$，因而 $c(v-v')\in\operatorname{im}a$，于是 $\pi(c(v))=\pi(c(v'))$。由定义，$d$ 线性，并满足 $db=\pi c$。

选取 $\operatorname{im}b$ 在 $K$ 中的一个线性补空间，在该补空间上取零，将 $d$ 延拓为

$$
\widetilde d:K\to H/\operatorname{im}a.
$$

再选取 $\operatorname{im}a$ 在 $H$ 中的线性补空间。$\pi$ 在该补空间上的限制是同构，其逆给出线性映射

$$
j:H/\operatorname{im}a\to H,\qquad \pi j=I_{H/\operatorname{im}a}.
$$

取 $y=-j\widetilde d$，则

$$
\pi(c+yb)=\pi c-\widetilde d b=\pi c-db=0.
$$

所以 $c+yb$ 的像包含于 $\operatorname{im}a$。选择 $\ker a$ 在 $E$ 中的线性补空间，则 $a$ 在此补空间上的限制是到 $\operatorname{im}a$ 的同构。记其逆为

$$
k:\operatorname{im}a\to E,\qquad ak=I_{\operatorname{im}a}.
$$

令 $x=k(c+yb)$，便有 $ax=c+yb$，即 $ax-yb=c$。这证明充分性，且所有延拓与原像选取均在线性空间内部完成。证毕。

其含义是：在商空间 $H/\operatorname{im}a$ 中，$ax$ 自动消失，方程只要求 $\pi c$ 能通过 $b$ 分解。**通过 $b$ 分解的充要条件，正是 $\pi c$ 在 $\ker b$ 上为零。** 余下落在 $\operatorname{im}a$ 中的部分，再通过 $a$ 提升即可。

### 同一障碍如何计算分块矩阵的秩

定义

$$
t:E\oplus G\to H\oplus K,\qquad t(u,v)=(a(u)+c(v),b(v)),
$$

其矩阵就是 $T$。另定义障碍映射

$$
\delta:\ker b\to H/\operatorname{im}a,\qquad
\delta(v)=c(v)+\operatorname{im}a.
$$

**秩公式：**

$$
\boxed{\operatorname{rank}T
=\operatorname{rank}A+\operatorname{rank}B+\operatorname{rank}\delta.}
$$

**证明：**在 $\operatorname{im}t$ 上取第二坐标投影

$$
\rho:\operatorname{im}t\to\operatorname{im}b,\qquad (h,z)\mapsto z.
$$

它是满射，因为 $t(0,v)$ 的第二坐标是 $b(v)$；其核恰为

$$
\ker\rho=\bigl(\operatorname{im}a+c(\ker b)\bigr)\oplus\{0\}.
$$

事实上，第二坐标为零等价于 $v\in\ker b$，此时第一坐标恰好取遍所写的子空间。由秩—零度定理，

$$
\dim\operatorname{im}t
=\dim\operatorname{im}b+\dim\bigl(\operatorname{im}a+c(\ker b)\bigr).
$$

而 $\pi$ 在 $\operatorname{im}a+c(\ker b)$ 上的限制以 $\operatorname{im}a$ 为核、以 $\operatorname{im}\delta$ 为像，故

$$
\dim\bigl(\operatorname{im}a+c(\ker b)\bigr)
=\dim\operatorname{im}a+\dim\operatorname{im}\delta.
$$

合并即得秩公式。证毕。

于是 $T,D$ 同秩当且仅当 $\delta=0$，即 $c(\ker b)\subseteq\operatorname{im}a$；由本节已经独立证明的可解性判据，这又当且仅当 $ax-yb=c$ 可解。再用同秩等价于相抵的基础事实，即完成相抵定理的几何证明。

在上一节选定的标准形坐标中，$\delta$ 的矩阵就是 $C_{22}$。代数证明找到的剩余子块，与几何证明中的商空间映射，刻画的是同一个障碍。

[返回章节导航](#章节导航)

## 四、一个长方阵例子

在任意域 $F$ 上，取

$$
A=\begin{pmatrix}1\\0\end{pmatrix},\qquad
B=\begin{pmatrix}1&0&0\end{pmatrix},\qquad
C=\begin{pmatrix}\alpha&\beta&\gamma\\\eta&\mu&\nu\end{pmatrix}.
$$

这里 $A$ 为 $2\times1$，$B$ 为 $1\times3$，未知矩阵 $X$ 为 $1\times3$，$Y$ 为 $2\times1$，而 $T,D$ 为 $3\times4$。由于

$$
\ker B=\operatorname{span}\{e_2,e_3\}\subseteq F^3,\qquad
\operatorname{im}A=\operatorname{span}\{e_1\}\subseteq F^2,
$$

核像条件恰为 $\mu=\nu=0$。此时可取

$$
X=\begin{pmatrix}\alpha&\beta&\gamma\end{pmatrix},\qquad
Y=\begin{pmatrix}0\\-\eta\end{pmatrix},
$$

直接验证 $AX-YB=C$。秩公式则给出

$$
\operatorname{rank}T=2+\operatorname{rank}\begin{pmatrix}\mu&\nu\end{pmatrix}.
$$

因此 $\mu,\nu$ 至少有一个非零时，分块矩阵的秩增加 $1$，方程无解；二者都为零时，$T,D$ 相抵。

更一般地，若 $A$ 满行秩，则 $\operatorname{im}A=F^m$；若 $B$ 满列秩，则 $\ker B=\{0\}$。任一情形都使核像条件对所有 $C$ 自动成立，因此方程对每个 $C$ 都有解。

## 五、相抵形式与相似形式的区别

下表中，相似形式另用 $a,b$ 表示两方阵的阶数，以免与上文四个独立尺寸混淆。

| 比较项 | Roth 相抵形式 | Roth 相似形式 |
| --- | --- | --- |
| 已知矩阵 | $A\in M_{m\times n}(F)$、$B\in M_{p\times q}(F)$，允许长方阵 | $A\in M_a(F)$、$B\in M_b(F)$，均为方阵，允许 $a\ne b$ |
| 未知矩阵 | $X\in M_{n\times q}(F)$、$Y\in M_{m\times p}(F)$，彼此独立 | 同一个 $X\in M_{a\times b}(F)$ 出现两次 |
| 矩阵方程 | $AX-YB=C$ | $AX-XB=C$ |
| 分块变换 | $LTR=D$，$L,R$ 独立 | $S^{-1}TS=D$，两侧变换互逆 |
| 判据与难点 | 秩相等；唯一障碍是 $C(\ker B)\subseteq\operatorname{im}A$ | 相似一般不能由秩判断；须由整体相似推出指定子空间存在不变补空间 |
| 几何对象 | 四个空间之间的线性映射，输入与输出可独立换基 | 一个空间上的线性变换，须保持作用与不变子空间的结构 |
| 典型用途 | 长方阵方程、分块秩公式、秩不等式取等条件 | Sylvester 方程、分块相似消去、不变补空间问题 |

两种形式都在任意域上成立，区别不在域的选择，而在左右变换是否受到同一个未知量的约束。相似情形中，取 $Y=X$ 当然得到相抵情形的一个解，但**相抵形式有解并不能保证可以选成 $Y=X$**。

最简单的反例是 $A=B=(1)$、$C=(1)$。相抵方程 $X-Y=1$ 可取 $X=1,Y=0$；相似方程却成为 $X-X=1$，在任何域上都无解。对应的

$$
T=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad D=I_2
$$

均有秩 $2$，故相抵；它们不相似，因为与 $I_2$ 相似的矩阵只能是 $I_2$ 自身。这也说明：即使两个对角块都是可逆方阵，核像条件也不能代替相似形式的判据。

相抵形式的完整思路是：先把 $C$ 在 $\ker B$ 上的作用投到 $F^m/\operatorname{im}A$，得到障碍映射 $\delta$；它的秩等于分块矩阵额外增加的秩，它为零当且仅当方程可解。相似形式还须控制两侧未知矩阵相同这一额外约束，详见 [Roth 消去定理：维数证明与不变补空间](/essays/475ab189790df47f4acbd98c/)。

[返回章节导航](#章节导航) · [文章栏目](/essays/)
