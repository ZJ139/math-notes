---
title: "第九章习题　多复变数全纯函数与全纯映射"
description: "按教材原节次保留 24 道习题、全部小问与提示，独立校注原题的收敛条件、系数、指标和梯度公式。"
subject: "复变函数"
category: "complex-functions/chapter-9"
tags: ["复变函数", "第九章", "章节习题"]
created_at: "2026-11-22"
updated_at: "2026-11-22"
attachment: "notes/complex-functions/complex-functions-chapter-9.pdf"
---

依教材印刷第 258、261—262、266—267、269—270、273、277—278 页整理，六组题数为 4、4、3、4、3、6，共 24 道。题干保留原条件、原公式、全部小问和提示；原文疑误另列于文末，不静默改题。常规习题不附解答，校注中的反例及推导用于确定题目是否成立。

本页沿教材采用行向量 $z$，$z^{\mathsf T}$ 表示转置，$\overline z^{\mathsf T}$ 表示共轭转置；$B_n$ 为单位球，$U^n$ 为单位多圆柱，$U$ 为单位圆盘。

## 习题索引

[习题 9.1](#习题-91) · [习题 9.2](#习题-92) · [习题 9.3](#习题-93) · [习题 9.4](#习题-94) · [习题 9.5](#习题-95) · [习题 9.6](#习题-96) · [原题校注](#原题校注与适用条件)

## 习题 9.1

**1.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$f\in H(\Omega)$。如果存在 $a\in\Omega$，使得 $(D^\alpha f)(a)=0$ 对所有多重指标 $\alpha=(\alpha_1,\ldots,\alpha_n)$ 成立，证明在 $\Omega$ 上 $f(z)\equiv0$。

**2.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$f_1,\ldots,f_m\in H(\Omega)$。如果 $\sum_{j=1}^m|f_j(z)|^2$ 在 $\Omega$ 上为一常数，证明 $f_1,\ldots,f_m$ 都是常数。

**3.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$f,g\in H(\Omega)$。如果 $f(z)g(z)\equiv0$ 在 $\Omega$ 上成立，证明 $f$ 或 $g$ 必在 $\Omega$ 上恒等于零。

**4.** 证明定理 9.1.6。

## 习题 9.2

**1.** 设 $P(a,r)$ 是一个多圆柱。试利用多圆柱上的 Cauchy 积分公式证明：若 $f\in C(\overline{P(a,r)})\cap H(P(a,r))$，则 $f$ 的最大模必在 $\partial_0P$ 上取到。

**2.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$\overline{P(a,r)}\subset\Omega$。如果 $f\in H(\Omega)$，那么对任意多重指标 $\alpha=(\alpha_1,\ldots,\alpha_n)$，有

$$
|(D^\alpha f)(a)|\le
\frac{\alpha!(\alpha_1+2)\cdots(\alpha_n+2)}{(2n)^n r^{\alpha+2}}
\|f\|_{L^1(P(a,r))},
$$

这里

$$
\|f\|_{L^1(P(a,r))}=\int_{P(a,r)}|f(z)|\,dm(z),
$$

$dm(z)$ 是 $\mathbb R^{2n}$ 中的测度。（分母 $(2n)^n$ 依原文保留，校注说明。）

**3.** 设 $f$ 是 $\mathbb C^n$ 上的有界全纯函数，证明 $f$ 必为常数。

**4.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$\{f_k\}$ 是 $\Omega$ 上一列处处不为零的全纯函数。如果 $\{f_k\}$ 在 $\Omega$ 上内闭一致收敛于 $f$，那么 $f$ 在 $\Omega$ 中或者恒等于零，或者处处不等于零。

## 习题 9.3

**1.** 记 $A(B_n)=H(B_n)\cap C(\overline{B_n})$，$n>1$。

(1) 设 $f\in A(B_n)$，如果 $f$ 在 $\partial B_n$ 上处处不为零，证明 $f$ 在 $B_n$ 中也处处不为零；

(2) 设 $f\in A(B_n)$，证明 $f(\overline{B_n})=f(\partial B_n)$；

(3) 举例说明，上述结论在 $n=1$ 时不成立。

**2.** 设 $f\in A(B_n)$，$n>1$。如果 $|f|$ 在球面 $\partial B_n$ 上恒等于常数 $c$，那么 $f$ 在 $B_n$ 中也恒等于常数 $c$。举例说明 $n=1$ 时结论不成立。（末句结论按原文保留，校注区分函数值与模。）

**3.** 设 $0<\alpha,\beta<1$，记

$$
\begin{aligned}
G_1&=\{(z,w)\in\mathbb C^2:|z|<1,\ \beta<|w|<1\},\\
G_2&=\{(z,w)\in\mathbb C^2:|z|<\alpha,\ |w|<1\},
\end{aligned}
$$

令 $G=G_1\cup G_2$。证明：$H(G)$ 中的每一个函数都能全纯开拓到双圆柱域

$$
U^2=\{(z,w)\in\mathbb C^2:|z|<1,\ |w|<1\}.
$$

## 习题 9.4

**1.** 设 $f$ 是 $\mathbb C$ 上的一个整函数，满足 $f(0)=f'(0)=1$。令 $F(z_1,z_2)=(z_1,z_2+f(z_1))$，$I_2$ 为 $2$ 阶单位方阵。证明：

$$
F(0)=0,\qquad F'(0)=I_2.
$$

**2.** 设 $\Omega=\{z=(z_1,z_2)\in\mathbb C^2:|z_1z_2|<1\}$，任取 $H:U\to\mathbb C$ 为 $U$ 中处处不为零的全纯函数，这里 $U$ 表示单位圆盘。令

$$
F_h(z_1,z_2)=\left(z_1h(z_1z_2),\frac{z_2}{h(z_1z_2)}\right).
$$

证明：

(1) $F_h(0)=0$；

(2) $(F_h)^{-1}=F_{1/h}$；

(3) 如果 $h(0)=1$，那么 $F_h'(0)=I_2$。

**3.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$F:\Omega\to\mathbb C^n$ 是全纯映射。设 $F=(f_1,\ldots,f_n)$，$f_j=u_j+iv_j$，$j=1,\ldots,n$。记

$$
\begin{aligned}
(JF)(z)&=\det F'(z),\\
(J_{\mathbb R}F)(z)&=
\det\begin{pmatrix}
\dfrac{\partial(u_1,\ldots,u_n)}{\partial(x_1,\ldots,x_n)}&
\dfrac{\partial(u_1,\ldots,u_n)}{\partial(y_1,\ldots,y_n)}\\[6pt]
\dfrac{\partial(v_1,\ldots,v_n)}{\partial(x_1,\ldots,x_n)}&
\dfrac{\partial(v_1,\ldots,v_n)}{\partial(y_1,\ldots,y_n)}
\end{pmatrix}.
\end{aligned}
$$

前者称为 $F$ 的复 Jacobian，后者称为 $F$ 的实 Jacobian。证明：

$$
(J_{\mathbb R}F)(z)=|(JF)(z)|^2.
$$

**4.** 设 $\Omega$ 是 $\mathbb C^n$ 中的域，$F:\Omega\to\mathbb C^n$ 是全纯映射。如果存在 $a\in\Omega$，使得 $F'(a)$ 可逆，那么一定存在 $a$ 和 $F(a)$ 的邻域 $V$ 和 $W$，使得 $F$ 一一地把 $V$ 映为 $W$，而且 $F$ 的逆映射 $G:W\to V$ 是全纯的，等式

$$
G'(w)=\bigl(F'(z)\bigr)^{-1}
$$

对 $z\in V$ 成立。

## 习题 9.5

**1.** 由习题 9.4 中的第 1、2 两题说明，定理 9.5.1 和定理 9.5.4 中域 $\Omega$ 和 $\Omega_1$ 有界的条件是不能去掉的。

**2.** 设 $F=(f_1,f_2):U^2\to B_2$ 是双全纯映射。

(1) 证明：对于任意 $\{z_k\}\subset U$（$U$ 是单位圆盘），$|z_k|\to1$，必有子列 $\{z_{k_v}\}$，使得

$$
\lim_{v\to\infty}F(z_{k_v},w)=\varphi(w),
$$

其中，$\varphi$ 是常数映射，即 $\varphi(w)=(c_1,c_2)$；

(2) 由此证明 $F$ 不存在，即不存在把 $U^2$ 一一地映为 $B_2$ 的双全纯映射。

**3.** 设 $f\in\operatorname{Aut}(U^n)$，$U^n$ 是单位多圆柱。

(1) 如果 $f(0)=0$，那么一定存在实数 $\theta_1,\ldots,\theta_n$ 和置换 $\tau:\{1,\ldots,n\}\to\{1,\ldots,n\}$，使得

$$
f(z)=(e^{i\theta_1}z_{\tau(1)},\ldots,e^{i\theta_n}z_{\tau(n)});
$$

(2) 如果 $f(a)=0$，$a\ne0$，那么一定存在实数 $\theta_1,\ldots,\theta_n$ 和置换 $\tau$，使得

$$
f(z)=\left(
e^{i\theta_1}\frac{z_{\tau(1)}-a_1}{1-\overline a_1z_{\tau(1)}},\ldots,
e^{i\theta_n}\frac{z_{\tau(n)}-a_n}{1-\overline a_nz_{\tau(n)}}
\right).
$$

## 习题 9.6

**1.** 对于任意 $z,w\in B_n$，证明：

$$
|\varphi_z(w)|=|\varphi_w(z)|.
$$

**2.** 设 $a,z,w\in B_n$，证明：

$$
|\varphi_{\varphi_a(w)}(z)|=|\varphi_w(\varphi_a(z))|.
$$

（提示：考虑映射 $\varphi_{\varphi_a(w)}\circ\varphi_a\circ\varphi_w$。）

**3.** 定义 $E(a,r)=\varphi_a(B(0,r))=\{z:|\varphi_a(z)|<r\}$。证明：对任意 $a,z\in B_n$，$0<r<1$，有

$$
\varphi_a(E(z,r))=E(\varphi_a(z),r).
$$

**4.** 设 $F\in H(B_n)$，$F=f\circ\varphi_z$。证明：

(1) $(\nabla F)(0)=(\nabla f)(z)\varphi_z'(0)$，这里

$$
(\nabla f)(z)=\left(\frac{\partial f(z)}{\partial z_1},\ldots,\frac{\partial f(z)}{\partial z_n}\right);
$$

(2) $|(\nabla F)(0)|^2=(1-|z|^2)[|(\nabla F)(z)|^2-|(Rf)(z)|^2]$，这里 $(Rf)(z)=\sum_{j=1}^nz_j\dfrac{\partial f(z)}{\partial z_j}$ 是 $f$ 的径向导数。

**5.** 设 $\psi\in\operatorname{Aut}(B_n)$，如果 $\psi(a)=0$，那么对任意 $z,w\in\overline{B_n}$，有等式

$$
1-\psi(z)\overline{\psi(w)}^{\mathsf T}
=\frac{(1-|a|^2)(1-z\overline w^{\mathsf T})}
{(1-\overline a z^{\mathsf T})(1-a\overline w^{\mathsf T})}.
$$

**6.** 设 $\psi\in\operatorname{Aut}(B_n)$。如果 $\psi$ 在 $\partial B_n$ 上有三个不同的不动点，证明 $\psi$ 在 $B_n$ 中至少有一个不动点。

（提示：设 $\xi_1,\xi_2,\xi_3$ 是 $\psi$ 在 $\partial B_n$ 上的三个不动点，令 $z_0=\tfrac12(\xi_1+\xi_2)$，先证明

$$
\varphi_a(z_0)=\tfrac12\bigl(\varphi_a(\xi_1)+\varphi_a(\xi_2)\bigr),
$$

这里 $a=\psi^{-1}(0)$，然后再证明 $\psi(z_0)=z_0$。）

## 原题校注与适用条件

**关于正文命题 9.1.1。** 多重级数的矩形极限不保证项一致有界。§9.1 保留原命题的条件说明，并给出 $c_{0,k}=k!$、$c_{1,k}=-k!$ 的反例；实际使用时要求绝对收敛或明确的项有界条件。不能从弱矩形收敛直接推出局部绝对收敛。

**关于习题 9.2.2。** 底本分母确为 $(2n)^n$，不是 $(2\pi)^n$。在通常的欧氏 Lebesgue 测度下，适用于全部维数的正确估计是

$$
|D^\alpha f(a)|\le
\frac{\alpha!\prod_j(\alpha_j+2)}{(2\pi)^n\prod_j r_j^{\alpha_j+2}}
\|f\|_{L^1(P(a,r))}.
$$

这里 $r^{\alpha+2}$ 指 $\prod_jr_j^{\alpha_j+2}$。从半径 $\rho_j<r_j$ 的 Cauchy 导数公式取绝对值得

$$
|D^\alpha f(a)|\prod_j\rho_j^{\alpha_j}
\le\frac{\alpha!}{(2\pi)^n}
\int_{[0,2\pi]^n}|f(a+(\rho_je^{i\theta_j})_j)|\,d\theta.
$$

两边再乘 $\prod_j\rho_j$，对各 $\rho_j$ 从 $0$ 到 $r_j$ 积分，用极坐标换元即得校正式。原式在 $n=4$、$\alpha=0$、各 $r_j=1$、$f\equiv1$ 时会给出 $1\le(\pi/4)^4<1$，故不能作为全维数结论使用。

**关于习题 9.3.2。** 原文从边界 $|f|=c$ 推出 $f\equiv c$，丢失了常数的相位。应为 $f\equiv C$ 且 $|C|=c$；$f\equiv ic$（$c>0$）已反驳原来的精确函数值结论。若 $c=0$，最大模原理使 $f=0$；若 $c>0$，由第 1 题知 $f$ 无零点，对 $f$ 和 $1/f$ 分别用最大模原理，得域内 $|f|=c$，再由开映射定理得 $f$ 常数。$n=1$ 的反例是 $f(z)=z$，而不是相位不同的常函数。

**关于习题 9.4.1。** 按原条件直接计算，$F(0)=(0,1)$，$F'(0)=\begin{pmatrix}1&0\\1&1\end{pmatrix}$，两项所求结论均不成立。若意在为 Cartan 定理提供反例，可把条件改为 $f(0)=f'(0)=0$ 且 $f$ 非零，例如 $f(z)=z^2$。正文采用这个已经独立验证的剪切映射；原题仍完整保留。习题 9.5.1 引用此题时也应使用校正版本。

**关于习题 9.4.2。** 原文先以大写 $H$ 引入函数，公式中改用小写 $h$；它们应指同一函数。题目的逆映射和导数结论成立，前提是 $h$ 处处不为零。正文已证明乘积不变性及逆公式。

**关于习题 9.4.4。** 求导公式中的变量应满足 $w=F(z)$，不能把 $w,z$ 当作独立取值。局部逆不等于全域逆。

**关于习题 9.5.3(2)。** 置换后的坐标必须减去相同位置的 $a$ 坐标，正确公式为

$$
f_j(z)=e^{i\theta_j}
\frac{z_{\tau(j)}-a_{\tau(j)}}{1-\overline{a_{\tau(j)}}z_{\tau(j)}}.
$$

这来自先逐坐标用圆盘自同构把 $a$ 送到 $0$，再作第 (1) 问的置换旋转。若仍写 $a_j$，对非平凡置换和不相等的坐标，一般连 $f(a)=0$ 都不能满足。

**关于习题 9.6.4。** 题干须理解为 $f\in H(B_n)$，$F$ 是固定基点 $z$ 后的函数 $F(\zeta)=f(\varphi_z(\zeta))$。第 (2) 问右端的 $\nabla F(z)$ 应为 $\nabla f(z)$。令 $s^2=1-|z|^2$，$g=\nabla f(z)$ 为行梯度；由 §9.6 的列增量导数，$\nabla F(0)=g\varphi_z'(0)$。转置后的导数矩阵满足

$$
\varphi_z'(0)\varphi_z'(0)^*
=s^2(I_n-z^{\mathsf T}\overline z),
$$

所以正确恒等式为

$$
|\nabla F(0)|^2=(1-|z|^2)\bigl(|\nabla f(z)|^2-|Rf(z)|^2\bigr).
$$

矩阵式可由 $A^{\mathsf T}=sI+z^{\mathsf T}\overline z/(1+s)$ 展开平方直接得到。原式在一维 $f(\zeta)=\zeta$、$z=1/2$ 时左端为 $9/16$，右端却为 $55/48$，确实不成立。

**关于习题 9.6.5、9.6.6 的边界。** §9.6 的分类公式分母在闭球上也不为零，因为 $|a|<1$，所以每个球自同构自动延到闭球的邻域；边界值与不动点因而有明确含义。第 6 题提示中的中点等式不是一般 Möbius 映射保持中点，而依赖三个不动点：把双点核公式用于三对不同的不动点，令 $d_j=1-\langle\xi_j,a\rangle$，即得 $d_j\overline{d_k}=1-|a|^2$（$j\ne k$），从而 $d_1=d_2=d_3$。分母相同才允许分式映射在这条弦上保持中点。中点属于开球，因为两端点不同。此处不得只靠“分式线性”四字略过关键条件。

**关于 Poincaré 定理。** $n>1$ 是必要条件；$n=1$ 时 $B_1=U$。定理比较双全纯等价，不否认两个域在实拓扑或实微分意义下存在其他等价。

<!-- chapter-navigation -->
[上一节　§9.6](/notes/34d242865cef5e9ca687b005/) · [返回第九章目录](/math/complex-functions/#chapter-9)
