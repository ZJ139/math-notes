---
title: "楼红卫《数学分析》B 组习题解答（二）：1.2.B 第 1 题至 1.4.B 第 1 题"
description: "楼红卫《数学分析》上册 B 组第二批七题：十进制循环节、非 Archimedean 有序域、代数数域、二维与三维实域扩张、有理指数律。逐题完整证明，并辨析 1.3.B 第 5 题的隐含条件。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "1.2.B", "1.3.B", "1.4.B", "循环小数", "Archimedes性", "代数数", "域扩张", "有理指数", "B08-B14"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

本专题继续按照楼红卫《数学分析》上册各节 **B 组的原书顺序**取题。由于习题 **1.2.B 只有第 1 题**，所以第二批七题依次为 **1.2.B-1、1.3.B-1—5、1.4.B-1**，对应本站连续编号 **B08—B14**，不与 A 组混排。

[查看原题：楼分析习题-v1（上册）](/problems/41e85e430c9d7f84a0863658/) · [原题 PDF 第 3 页](/files/problems/楼分析习题-v1.pdf#page=3) · [原题 PDF 第 4 页](/files/problems/楼分析习题-v1.pdf#page=4) · [原题 PDF 第 5 页](/files/problems/楼分析习题-v1.pdf#page=5)

**原题条件核查：**B08—B12、B14 的文字、符号与假设均可按原文直接理解。B13（原书 1.3.B 第 5 题）若把原文“即”之后显式列出的两条运算条件视为全部假设，则结论并不成立；还需要把“三元数域”理解为乘法与 $\mathbb R^3$ 的标准实向量空间结构相容，即实数标量按坐标作用。下文先给出字面条件下的反例，再证明教材意图下的严格结论。

## 题号导航

- [问题 B08：十进制循环节的精确长度（1.2.B-1）](#问题-b08)
- [问题 B09：有序域是否必有 Archimedes 性（1.3.B-1）](#问题-b09)
- [问题 B10：正无穷小与有理数下界（1.3.B-2）](#问题-b10)
- [问题 B11：复代数数构成一个域（1.3.B-3）](#问题-b11)
- [问题 B12：二维实域必为复数域（1.3.B-4）](#问题-b12)
- [问题 B13：不存在标准三维实数域（1.3.B-5）](#问题-b13)
- [问题 B14：有理指数律与分割点连续性（1.4.B-1）](#问题-b14)
- [七题方法总结](#七题方法总结)

## 问题 B08

**原题号：习题 1.2.B 第 1 题。**

**题目：**对于正整数 $n,m$，考察

$$
\frac{n}{m}
$$

的十进制小数表示中循环节的长度有何特点。

**解：**先把分数约成最简形式。令

$$
d=(n,m),\qquad N=\frac nd,\qquad M=\frac md,
$$

则

$$
(N,M)=1,\qquad \frac nm=\frac NM.
$$

把约分后的分母唯一地写成

$$
M=2^\alpha 5^\beta q,
\qquad
\alpha,\beta\in\mathbb Z_{\ge0},
\qquad
(q,10)=1.
$$

令

$$
t=\max\{\alpha,\beta\}.
$$

于是

$$
10^t\frac NM
=
\frac{N\,2^{\,t-\alpha}5^{\,t-\beta}}{q}.
$$

记

$$
A=N\,2^{\,t-\alpha}5^{\,t-\beta}.
$$

由于 $(N,M)=1$ 且 $(q,10)=1$，有

$$
(A,q)=1.
$$

若 $q=1$，则

$$
10^t\frac NM=A\in\mathbb Z,
$$

故 $\frac NM$ 是有限小数。并且 $t$ 正是有限小数部分所需的最少位数：若存在 $s<t$ 使 $10^sN/M\in\mathbb Z$，则

$$
M\mid 10^sN.
$$

因 $(M,N)=1$，必有 $M\mid10^s$，从而 $\alpha\le s,\beta\le s$，这与

$$
s<t=\max\{\alpha,\beta\}
$$

矛盾。因此当 $q=1$ 时，十进制展开终止，约分后的分母只含素因子 $2,5$。

下面设 $q>1$。整数部分不影响循环节，只需考察 $A/q$ 的小数部分。因为 $(A,q)=1$ 且 $(10,q)=1$，长除法中出现的非零余数依次为

$$
A,\ 10A,\ 10^2A,\ldots\pmod q.
$$

循环第一次回到初始余数，当且仅当存在正整数 $L$ 使

$$
10^LA\equiv A\pmod q.
$$

由 $(A,q)=1$，这等价于

$$
10^L\equiv1\pmod q.
$$

故循环节长度恰为 $10$ 在模 $q$ 的乘法群中的阶：

$$
\boxed{\,L=\operatorname{ord}_q(10)\,}.
$$

由 Euler 定理

$$
10^{\varphi(q)}\equiv1\pmod q,
$$

所以

$$
\boxed{\,L\mid\varphi(q)\,}.
$$

特别地，

$$
L\le\varphi(q)\le q-1.
$$

因此 $\frac nm$ 的十进制结构完全由约分后分母

$$
M=2^\alpha5^\beta q,\qquad(q,10)=1
$$

决定：

$$
\boxed{
\begin{aligned}
&\text{非循环部分长度}= \max\{\alpha,\beta\},\\
& q=1 \Longleftrightarrow \text{十进制展开有限},\\
& q>1 \Longrightarrow
\text{循环节长度}=\operatorname{ord}_q(10)\mid\varphi(q).
\end{aligned}}
$$

这里若把有限小数补成无限个 $0$，也可以说其“尾部周期”为 $1$；通常讨论循环小数时，把 $q=1$ 单独视为有限小数而不定义非平凡循环节。

**方法提炼：**先约分，再把分母中的 $2,5$ 因子与其余部分分离。$2,5$ 只决定循环开始前要移动多少位；真正的循环长度由模 $q$ 的余数循环决定，本质上就是群论中的乘法阶 $\operatorname{ord}_q(10)$。

[返回题号导航](#题号导航)

## 问题 B09

**原题号：习题 1.3.B 第 1 题。**

**题目：**对于有序域

$$
(X,+,\cdot,\le),
$$

是否一定有 Archimedes 性？

**解：**不一定。构造一个非 Archimedean 的有序域即可。

取实系数有理函数域

$$
X=\mathbb R(t).
$$

对非零有理函数 $f(t)$，定义

$$
f>0
$$

当且仅当存在实数 $M$，使得对所有充分大的实数 $x>M$（避开有限多个极点）都有

$$
f(x)>0.
$$

再定义

$$
f<g\quad\Longleftrightarrow\quad g-f>0.
$$

先说明这确实给出一个全序。任取非零

$$
h(t)=\frac{P(t)}{Q(t)}\in\mathbb R(t).
$$

当 $x\to+\infty$ 时，$P(x)$ 与 $Q(x)$ 的符号最终分别等于其最高次项的符号，所以 $h(x)$ 的符号最终固定。因此对每个非零 $h$，恰有

$$
h>0\qquad\text{或}\qquad -h>0
$$

之一成立。

若 $f>0,g>0$，则当 $x$ 足够大时同时有

$$
f(x)>0,\qquad g(x)>0.
$$

于是

$$
f(x)+g(x)>0,\qquad f(x)g(x)>0
$$

最终成立，即

$$
f+g>0,\qquad fg>0.
$$

因此该次序与域的加法、乘法相容，$\mathbb R(t)$ 是一个有序域。

现在考察域中的元素 $t$。对任意正整数 $n$，有理函数

$$
t-n
$$

在所有 $x>n$ 时均为正，所以

$$
t>n.
$$

因此不存在正整数 $n$ 满足

$$
n>t.
$$

这违反 Archimedes 性。

故答案为

$$
\boxed{\text{有序域不一定具有 Archimedes 性}}
$$

**方法提炼：**反例的核心是引入一个“比所有正整数都大”的元素。实有理函数域 $\mathbb R(t)$ 按 $t\to+\infty$ 的最终符号排序后，形式变量 $t$ 就成为正无穷大量，从而直接破坏 Archimedes 性。

[返回题号导航](#题号导航)

## 问题 B10

**原题号：习题 1.3.B 第 2 题。**

**题目：**设

$$
(X,+,\cdot,\le)
$$

是一个全序域，$\alpha\in X$ 满足

$$
\alpha\ge0,
$$

并且对 $X$ 中任何正有理数 $p$ 都成立

$$
\alpha<p.
$$

问是否一定有 $\alpha=0$？这里正有理数指形如

$$
\frac{m1^*}{n1^*}
$$

的元素，其中 $1^*$ 为乘法单位元，$m,n$ 为正整数。

**解：**不一定。

仍取问题 B09 中的有序域

$$
X=\mathbb R(t),
$$

并令

$$
\alpha=\frac1t.
$$

在所定义的最终次序下，当 $x\to+\infty$ 时 $1/x>0$，故

$$
\alpha>0.
$$

特别地，

$$
\alpha\ne0.
$$

任取正有理数 $p>0$。有

$$
p-\frac1t>0
$$

当 $t$ 取充分大的正实数值时成立。例如只要

$$
t>\frac1p
$$

即可。因此在 $\mathbb R(t)$ 的次序中

$$
0<\frac1t<p.
$$

而 $p>0$ 是任意正有理数，所以

$$
0<\alpha<p
\qquad
\text{对每个正有理数 }p
$$

均成立。

于是

$$
\boxed{\alpha=0\text{ 并非必然成立}}
$$

这个反例也说明题目与前面的全序域命题有本质差别：若已知

$$
0\le\alpha<\varepsilon
$$

对 **域中每一个正元素** $\varepsilon\in X$ 都成立，那么取 $\varepsilon=\alpha/2$ 即可迫使 $\alpha=0$。本题只要求对嵌入 $X$ 的正有理数成立，因此允许存在

$$
0<\alpha<\frac1n
\qquad(\forall n\in\mathbb N^+)
$$

这样的正无穷小。

**方法提炼：**“小于每个正有理数”与“小于域中每个正元素”不能混淆。非 Archimedean 有序域中存在正无穷小 $1/t$，它正好给出反例。

[返回题号导航](#题号导航)

## 问题 B11

**原题号：习题 1.3.B 第 3 题。**

**题目：**证明所有（复）代数数组成的集合是一个域。

**证明：**记所有复代数数的集合为

$$
\overline{\mathbb Q}_{\mathrm{alg}}
=
\{z\in\mathbb C:\text{存在非零 }P\in\mathbb Q[x]\text{ 使 }P(z)=0\}.
$$

显然

$$
0,1\in\overline{\mathbb Q}_{\mathrm{alg}}.
$$

只需证明它对加、减、乘及非零元取逆封闭。

任取代数数 $\alpha,\beta$。设 $\alpha,\beta$ 分别满足

$$
a_r\alpha^r+a_{r-1}\alpha^{r-1}+\cdots+a_0=0,
\qquad a_r\ne0,
$$

以及

$$
b_s\beta^s+b_{s-1}\beta^{s-1}+\cdots+b_0=0,
\qquad b_s\ne0,
$$

其中系数均属于 $\mathbb Q$。

由第一式可将任意 $\alpha^k$（$k\ge r$）写成

$$
1,\alpha,\ldots,\alpha^{r-1}
$$

的有理系数线性组合；同理，任意 $\beta^\ell$（$\ell\ge s$）可写成

$$
1,\beta,\ldots,\beta^{s-1}
$$

的有理系数线性组合。

因此所有关于 $\alpha,\beta$ 的有理系数多项式的值，都落在有限维 $\mathbb Q$-线性空间

$$
W=
\operatorname{span}_{\mathbb Q}
\{\alpha^i\beta^j:0\le i<r,\ 0\le j<s\}
$$

中，而且

$$
\dim_{\mathbb Q}W\le rs.
$$

令

$$
\gamma=\alpha+\beta.
$$

对每个 $k\ge0$，$\gamma^k$ 都是 $\alpha,\beta$ 的多项式，所以

$$
1,\gamma,\gamma^2,\ldots,\gamma^{rs}\in W.
$$

$W$ 的维数至多为 $rs$，故上述 $rs+1$ 个向量线性相关。于是存在不全为零的

$$
c_0,c_1,\ldots,c_{rs}\in\mathbb Q
$$

使

$$
c_0+c_1\gamma+\cdots+c_{rs}\gamma^{rs}=0.
$$

因此 $\gamma=\alpha+\beta$ 是代数数。

完全相同的论证适用于

$$
\gamma=\alpha-\beta
\qquad\text{和}\qquad
\gamma=\alpha\beta,
$$

因为它们的每个幂同样属于 $W$。故

$$
\alpha-\beta,\quad \alpha\beta
$$

也都是代数数。

最后设

$$
\alpha\ne0.
$$

取一个以 $\alpha$ 为根的非零有理系数多项式，并把其中公因子 $x$ 尽量约去，可设

$$
c_m\alpha^m+c_{m-1}\alpha^{m-1}+\cdots+c_1\alpha+c_0=0,
\qquad c_0\ne0.
$$

两边除以 $\alpha^m$，得到

$$
c_0\alpha^{-m}+c_1\alpha^{-(m-1)}
+\cdots+c_{m-1}\alpha^{-1}+c_m=0.
$$

令

$$
y=\alpha^{-1},
$$

则

$$
c_0y^m+c_1y^{m-1}+\cdots+c_{m-1}y+c_m=0,
$$

故 $\alpha^{-1}$ 也是代数数。

综上，$\overline{\mathbb Q}_{\mathrm{alg}}$ 含 $0,1$，并且对于任意 $\alpha,\beta\in\overline{\mathbb Q}_{\mathrm{alg}}$，

$$
\alpha-\beta,\quad \alpha\beta\in\overline{\mathbb Q}_{\mathrm{alg}},
$$

且 $\alpha\ne0$ 时

$$
\alpha^{-1}\in\overline{\mathbb Q}_{\mathrm{alg}}.
$$

因此

$$
\boxed{\overline{\mathbb Q}_{\mathrm{alg}}\text{ 是 }\mathbb C\text{ 的一个子域}}
$$

**方法提炼：**不必直接写出 $\alpha+\beta$ 或 $\alpha\beta$ 的最小多项式。把所有 $\alpha^i\beta^j$ 压缩到一个有限维 $\mathbb Q$-线性空间，再利用 $1,\gamma,\gamma^2,\ldots$ 必然线性相关，就自动得到 $\gamma$ 的有理系数代数方程。这是“有限维性推出代数性”的标准思想。

[返回题号导航](#题号导航)

## 问题 B12

**原题号：习题 1.3.B 第 4 题。**

**题目：**设

$$
(X,+,\cdot)
$$

是一个以实数域 $\mathbb R$ 为子域的域，并满足：

1. 存在

   $$
   A\in X\setminus\mathbb R;
   $$

2. 对于 $X$ 中任一元素 $V$，都存在 $a,b\in\mathbb R$，使得

   $$
   V=a+bA.
   $$

证明存在 $B\in X$ 使

$$
B^2=-1.
$$

进一步证明，对 $X$ 中任一元素 $V$，都存在 $a,b\in\mathbb R$ 使

$$
V=a+bB.
$$

**证明：**由于 $A\notin\mathbb R$，元素 $1,A$ 在 $\mathbb R$ 上线性无关。事实上，若

$$
u+vA=0,\qquad u,v\in\mathbb R,
$$

且 $v\ne0$，则

$$
A=-\frac uv\in\mathbb R,
$$

矛盾。因此 $v=0$，进而 $u=0$。

结合题设的生成条件可知，$\{1,A\}$ 是 $X$ 在 $\mathbb R$ 上的一组基。特别地，存在唯一的 $u,v\in\mathbb R$ 使

$$
A^2=u+vA.
$$

令

$$
C=A-\frac v2.
$$

则

$$
\begin{aligned}
C^2
&=A^2-vA+\frac{v^2}{4}\\
&=u+vA-vA+\frac{v^2}{4}\\
&=u+\frac{v^2}{4}.
\end{aligned}
$$

记

$$
\delta=u+\frac{v^2}{4}\in\mathbb R,
$$

于是

$$
C^2=\delta.
$$

下面证明

$$
\delta<0.
$$

若 $\delta=0$，则

$$
C^2=0.
$$

域中没有非零零因子，所以 $C=0$，从而

$$
A=\frac v2\in\mathbb R,
$$

矛盾。

若 $\delta>0$，令

$$
r=\sqrt{\delta}\in\mathbb R.
$$

则

$$
(C-r)(C+r)=C^2-r^2=0.
$$

由于 $X$ 是域，故

$$
C=r\qquad\text{或}\qquad C=-r.
$$

于是 $C\in\mathbb R$，进而

$$
A=C+\frac v2\in\mathbb R,
$$

仍矛盾。

所以必有

$$
\delta<0.
$$

定义

$$
B=\frac{C}{\sqrt{-\delta}}
=
\frac{A-\frac v2}{\sqrt{-\delta}}.
$$

则

$$
B^2
=
\frac{C^2}{-\delta}
=
\frac{\delta}{-\delta}
=-1.
$$

又因为

$$
A=\frac v2+\sqrt{-\delta}\,B,
$$

任取

$$
V=a+bA\in X
$$

都可写成

$$
V
=
\left(a+\frac{bv}{2}\right)
+
b\sqrt{-\delta}\,B.
$$

两系数均属于 $\mathbb R$。因此每个 $V\in X$ 都有形式

$$
V=a'+b'B,
\qquad a',b'\in\mathbb R.
$$

于是映射

$$
\Phi:\mathbb C\longrightarrow X,
\qquad
a+bi\longmapsto a+bB
$$

保持加法、乘法并且双射，所以 $X$ 与 $\mathbb C$ 作为含 $\mathbb R$ 的域同构。

故

$$
\boxed{\text{这样的二维实数域必同构于复数域}}
$$

**方法提炼：**先把 $A$ 的二次关系

$$
A^2=u+vA
$$

配方，消掉一次项，得到 $C^2=\delta\in\mathbb R$。若 $\delta\ge0$，域的无零因子性会迫使 $A\in\mathbb R$；因此只能有 $\delta<0$，归一化后自然产生平方为 $-1$ 的元素。

[返回题号导航](#题号导航)

## 问题 B13

**原题号：习题 1.3.B 第 5 题。**

**题目：**证明不存在以 $\mathbb R$ 为子域的“三元数”域。原文进一步表述为：不存在 $\mathbb R^3$ 上的加法与乘法，使

$$
(x_1,y_1,z_1)+(x_2,y_2,z_2)
=
(x_1+x_2,y_1+y_2,z_1+z_2)
\qquad\text{(1.3.5)}
$$

以及

$$
(x_1,0,0)\cdot(x_2,0,0)
=
(x_1x_2,0,0)
$$

成立，并使 $(\mathbb R^3,+,\cdot)$ 成为一个域。

### 原题条件辨析

若把原文“即”之后显示的两条等式当作**全部条件**，结论实际上不成立。

确实，把 $\mathbb R^2$ 和 $\mathbb R$ 都看成 $\mathbb Q$-线性空间。二者的 Hamel 维数相同，因而存在一个 $\mathbb Q$-线性双射

$$
\psi:\mathbb R^2\longrightarrow\mathbb R.
$$

定义加法群同构

$$
\Phi:\mathbb R^3\longrightarrow\mathbb C,
\qquad
\Phi(x,y,z)=x+i\psi(y,z).
$$

它满足

$$
\Phi(x,0,0)=x.
$$

现在把复数乘法搬回 $\mathbb R^3$，定义

$$
u\odot v
=
\Phi^{-1}\!\bigl(\Phi(u)\Phi(v)\bigr).
$$

则 $(\mathbb R^3,+,\odot)$ 与 $\mathbb C$ 同构，所以是一个域；加法仍是逐坐标加法，而且

$$
(x_1,0,0)\odot(x_2,0,0)
=
(x_1x_2,0,0).
$$

因此仅凭原文显式写出的两条等式，确实可以构造出这样的域结构。这个构造依赖 Hamel 基，所得乘法对标准实向量空间结构极不规则，既不具有通常意义下的 $\mathbb R$-双线性，也不连续。

所以教材中“三元数域”的自然含义还包含一个隐含的相容性条件：实数标量应按通常坐标方式作用，即

$$
(r,0,0)\cdot(x,y,z)
=
(rx,ry,rz)
\qquad
(r,x,y,z\in\mathbb R).
\qquad\text{(*)}
$$

等价地，域乘法应当相对于 $\mathbb R^3$ 的标准实向量空间结构为 $\mathbb R$-双线性。下面证明这一自然版本。

### 修正命题的证明

反设存在满足上述标准相容条件的域 $X$，并且

$$
\dim_{\mathbb R}X=3.
$$

把实数域按

$$
r\longleftrightarrow(r,0,0)
$$

嵌入 $X$。

取

$$
A\in X\setminus\mathbb R.
$$

四个元素

$$
1,A,A^2,A^3
$$

位于三维实向量空间 $X$ 中，所以线性相关。故 $A$ 满足一个次数不超过 $3$ 的非零实系数多项式。设 $m_A(x)\in\mathbb R[x]$ 是 $A$ 在 $\mathbb R$ 上的最小多项式。

因为 $A\notin\mathbb R$，

$$
\deg m_A\ge2.
$$

最小多项式不可约。若

$$
\deg m_A=3,
$$

则 $m_A$ 是实系数三次多项式。任何实系数奇次多项式在实轴上至少有一个实根，因此 $m_A$ 在 $\mathbb R[x]$ 中有一次因子，不可约性被破坏。故

$$
\deg m_A\ne3.
$$

于是

$$
\deg m_A=2.
$$

因此由 $A$ 生成的子域

$$
K=\mathbb R(A)
$$

在 $\mathbb R$ 上的维数为

$$
\dim_{\mathbb R}K=2.
$$

由于

$$
\dim_{\mathbb R}X=3,
$$

可取

$$
C\in X\setminus K.
$$

考察集合

$$
CK=\{Ck:k\in K\}.
$$

乘以非零元 $C$ 是 $X$ 上的可逆 $\mathbb R$-线性变换，所以

$$
\dim_{\mathbb R}(CK)=\dim_{\mathbb R}K=2.
$$

再证明

$$
K\cap CK=\{0\}.
$$

若存在非零

$$
w\in K\cap CK,
$$

则可写成

$$
w=Ck,\qquad k\in K.
$$

因为 $w\ne0$ 且 $C\ne0$，所以 $k\ne0$。域 $K$ 中 $k^{-1}$ 存在，于是

$$
C=wk^{-1}\in K,
$$

与 $C\notin K$ 矛盾。

故

$$
K\oplus CK
$$

是 $X$ 的一个实线性子空间，并且

$$
\dim_{\mathbb R}(K\oplus CK)
=
2+2=4.
$$

但 $X$ 本身只有三维，这不可能。

因此在标准相容意义下，

$$
\boxed{\text{不存在三维的实数域扩张}}
$$

也就是说，若“三元数域”指一个以 $\mathbb R^3$ 为底层标准实向量空间、乘法与实标量相容的交换域，那么原题结论正确；若只保留原文“即”之后两条显示等式，则必须补充条件 $(*)$。

**方法提炼：**严格证明有两层。第一层是**检查定义是否足够强**：单凭逐坐标加法和实轴乘法并不能控制域乘法。第二层在自然的 $\mathbb R$-线性解释下使用有限扩张维数：非实元素先生成二维子域 $K$，再乘上一个域外元素得到另一个与 $K$ 零交的二维子空间，强迫总维数至少为 $4$，与三维矛盾。

[返回题号导航](#题号导航)

## 问题 B14

**原题号：习题 1.4.B 第 1 题。**

**题目：**对于 $a>0$ 以及有理数

$$
\frac mn,
$$

其中 $m,n$ 为既约整数，$n>0$。当 $m\ne1$ 时，定义

$$
a^{m/n}=(a^m)^{1/n}.
$$

自然，当 $m=1$ 时，上式也成立。进一步，当

$$
n=2k+1
$$

为奇数时，定义

$$
(-a)^{m/(2k+1)}
=
(-1)^m a^{m/(2k+1)}.
$$

下设

$$
a,b>0,
$$

且 $p,q$ 为有理数，证明：

$$
\text{(1)}\quad (a^p)^q=a^{pq};
$$

$$
\text{(2)}\quad a^pa^q=a^{p+q};
$$

$$
\text{(3)}\quad a^pb^p=(ab)^p;
$$

$$
\text{(4)}\quad a>1,\ p>0\Longrightarrow a^p>1;
$$

$$
\text{(5)}\quad a>1\Longrightarrow a^p\text{ 关于 }p\in\mathbb Q\text{ 严格单增};
$$

$$
\text{(6)}\quad
\text{设 }a>1,\ \text{证明对于任何 }b\in\mathbb R,\ \text{成立}
\quad
\sup\{a^p:p<b\}
=
\inf\{a^p:p>b\}.
$$

原书在第 (6) 问重新使用了字母 $b$ 表示任意实数，与本题前面 $a,b>0$ 中作为正底数出现的 $b$ 重名。为避免变量冲突，下文把第 (6) 问中的这个实数改记为 $c$；结论不变。

**证明：**先证明一个会反复使用的引理。

若

$$
\frac mn=\frac rs,
\qquad n,s>0,
$$

不要求两边都已约成最简形式，则

$$
(a^m)^{1/n}=(a^r)^{1/s}.
$$

事实上，令

$$
x=(a^m)^{1/n},\qquad y=(a^r)^{1/s}.
$$

二者均为正数，而且

$$
x^{ns}=a^{ms},\qquad
y^{ns}=a^{rn}.
$$

由

$$
ms=rn
$$

可知

$$
x^{ns}=y^{ns}.
$$

正数上的函数 $u\mapsto u^{ns}$ 严格单调，因此

$$
x=y.
$$

所以有理次幂的值与分数采用哪一种等值表示无关。后面可放心使用未约分的公共分母。

### (1) 证明 $(a^p)^q=a^{pq}$

写成

$$
p=\frac mn,\qquad q=\frac rs,
\qquad n,s>0.
$$

令

$$
x=(a^p)^q>0.
$$

由有理次幂的定义，

$$
x^s=(a^p)^r.
$$

再取 $n$ 次幂，

$$
x^{sn}
=
(a^p)^{rn}
=
\bigl((a^p)^n\bigr)^r
=
(a^m)^r
=
a^{mr}.
$$

另一方面，

$$
pq=\frac{mr}{ns}.
$$

由前述表示无关性，$a^{pq}$ 正是 $a^{mr}$ 的正 $ns$ 次根。由于正 $ns$ 次根唯一，

$$
\boxed{(a^p)^q=a^{pq}}.
$$

### (2) 证明 $a^pa^q=a^{p+q}$

仍写

$$
p=\frac mn,\qquad q=\frac rs,
\qquad n,s>0.
$$

令

$$
x=a^pa^q>0.
$$

则

$$
\begin{aligned}
x^{ns}
&=(a^p)^{ns}(a^q)^{ns}\\
&=a^{ms}a^{rn}\\
&=a^{ms+rn}.
\end{aligned}
$$

而

$$
p+q=\frac{ms+rn}{ns}.
$$

所以 $a^{p+q}$ 也是 $a^{ms+rn}$ 的正 $ns$ 次根。由唯一性，

$$
\boxed{a^pa^q=a^{p+q}}.
$$

### (3) 证明 $a^pb^p=(ab)^p$

写

$$
p=\frac mn,\qquad n>0.
$$

令

$$
x=a^pb^p>0.
$$

则

$$
x^n
=
(a^p)^n(b^p)^n
=
a^mb^m
=
(ab)^m.
$$

所以 $x$ 是 $(ab)^m$ 的正 $n$ 次根，从而

$$
\boxed{a^pb^p=(ab)^p}.
$$

### (4) 证明 $a>1,p>0\Rightarrow a^p>1$

写

$$
p=\frac mn,
\qquad m,n\in\mathbb N^+.
$$

因为 $a>1$，所以

$$
a^m>1.
$$

而

$$
(a^p)^n=a^m.
$$

若 $a^p\le1$，则因 $a^p>0$，有

$$
(a^p)^n\le1,
$$

与 $a^m>1$ 矛盾。因此

$$
\boxed{a^p>1}.
$$

### (5) 证明 $a^p$ 关于 $p\in\mathbb Q$ 严格单增

若

$$
p<q,
$$

则

$$
q-p>0.
$$

由第 (4) 问，

$$
a^{q-p}>1.
$$

再由第 (2) 问，

$$
a^q
=
a^p a^{q-p}
>
a^p.
$$

所以

$$
\boxed{p<q\Longrightarrow a^p<a^q}.
$$

即 $a^p$ 在 $\mathbb Q$ 上严格单调增加。

### (6) 证明左右分割值相等

固定

$$
a>1,\qquad c\in\mathbb R.
$$

记

$$
S_c=\{a^p:p\in\mathbb Q,\ p<c\},
$$

$$
T_c=\{a^q:q\in\mathbb Q,\ q>c\}.
$$

由有理数在实数中的稠密性，可取

$$
p_0<c<q_0,
\qquad p_0,q_0\in\mathbb Q.
$$

于是 $S_c,T_c$ 均非空。又对任意 $p<c$，有

$$
p<q_0,
$$

故由第 (5) 问

$$
a^p<a^{q_0}.
$$

因此 $S_c$ 有上界。显然 $T_c$ 以 $0$ 为下界。由实数完备性可定义

$$
L=\sup S_c,\qquad U=\inf T_c.
$$

任取 $p<c<q$，由单调性

$$
a^p<a^q.
$$

因此 $T_c$ 中每个元素都是 $S_c$ 的上界，从而

$$
L\le a^q
\qquad(\forall\,q>c,\ q\in\mathbb Q).
$$

于是

$$
L\le U.
$$

下面反证 $L<U$ 不可能。由于 $S_c$ 非空，取任意 $p_0<c$，有

$$
L\ge a^{p_0}>0.
$$

若 $L<U$，令

$$
\rho=\frac UL>1.
$$

由 Bernoulli 不等式，

$$
\rho^N=(1+(\rho-1))^N\ge1+N(\rho-1).
$$

利用实数的 Archimedes 性，可取正整数 $N$ 足够大，使

$$
1+N(\rho-1)>a.
$$

于是

$$
\rho^N>a.
$$

两边取正 $N$ 次根，得到

$$
\rho>a^{1/N}.
\qquad\text{(1)}
$$

再由有理数的稠密性，可选取有理数 $p,q$ 使

$$
c-\frac1{2N}<p<c<q<c+\frac1{2N}.
$$

因此

$$
0<q-p<\frac1N.
$$

由第 (5) 问，

$$
a^{q-p}<a^{1/N}.
\qquad\text{(2)}
$$

由于 $p<c$，

$$
a^p\le L;
$$

由于 $q>c$，

$$
U\le a^q.
$$

结合第 (2) 问、(1)、(2)，得到

$$
\begin{aligned}
U
&\le a^q\\
&=a^p a^{q-p}\\
&\le L\,a^{q-p}\\
&<L\,a^{1/N}\\
&<L\rho\\
&=U,
\end{aligned}
$$

矛盾。

故只能有

$$
L=U.
$$

即

$$
\boxed{
\sup\{a^p:p<c,\ p\in\mathbb Q\}
=
\inf\{a^p:p>c,\ p\in\mathbb Q\}.
}
$$

第 (6) 问实际上说明：在只定义了**有理指数幂**以后，实数指数位置 $c$ 左右逼近所给出的两个 Dedekind 分割值没有间隙。这正是进一步定义 $a^c$ 的关键一致性。

本题前半段给出的负底数奇分母定义，在上述六个结论中并未用到，因为六问均假设底数 $a,b>0$。

**方法提炼：**前三问的统一技巧是“**两边升到共同的正整数次幂，再用正根唯一性**”，这样可避免循环使用尚未证明的指数律。第 (4)、(5) 问由正根的保序性得到单调性；第 (6) 问则把 Archimedes 性、Bernoulli 不等式和有理数稠密性组合起来，排除左右上、下确界之间的正间隙。

[返回题号导航](#题号导航)

## 七题方法总结

| 连续编号 | 原题号 | 核心结论 | 关键方法 |
| --- | --- | --- | --- |
| B08 | 1.2.B-1 | 循环节长度为 $\operatorname{ord}_q(10)$ | 约分、分离 $2,5$ 因子、模 $q$ 余数循环 |
| B09 | 1.3.B-1 | 有序域未必有 Archimedes 性 | $\mathbb R(t)$ 的最终符号次序 |
| B10 | 1.3.B-2 | 小于一切正有理数的非零正元可以存在 | 非 Archimedean 域中的正无穷小 |
| B11 | 1.3.B-3 | 复代数数构成域 | 有限维 $\mathbb Q$-空间与幂的线性相关 |
| B12 | 1.3.B-4 | 二维实域扩张必同构于 $\mathbb C$ | 二次关系配方、排除非负平方 |
| B13 | 1.3.B-5 | 标准三维实域扩张不存在 | 条件辨析、最小多项式、维数矛盾 |
| B14 | 1.4.B-1 | 有理指数律及左右分割值一致 | 正根唯一性、单调性、Archimedes 性与稠密性 |

这一批题的逻辑线索可以概括为三条：

1. **有限算术结构转化为代数结构：**十进制循环最终化为有限群中 $10$ 的乘法阶；
2. **Archimedes 性的边界：**在 $\mathbb R$ 中习以为常的“没有无穷大、无穷小”并非任意有序域的公理后果；
3. **有限维性控制代数：**代数数的有限维生成、二维实域的二次关系以及三维域的不可能性，都来自“有限维线性相关 $\Rightarrow$ 代数约束”。

**资料来源：**楼红卫《数学分析》上册（2022），习题 1.2.B 第 1 题、1.3.B 第 1—5 题、1.4.B 第 1 题；本站《楼分析习题-v1.pdf》第 3—5 页。题目按原文核对后作必要排版转述，证明、条件辨析与方法总结为本站独立整理。下一批从上册 **习题 1.4.B 第 2 题** 开始，继续按原书 B 组顺序连续取七题。
