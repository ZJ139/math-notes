---
title: "Wirtinger不等式及其推广"
description: "从相隔半周期的等值点出发，给出配平方、Fourier 展开与变分三种证明，完整讨论最佳常数、等号条件、边界条件、高阶导数、低频消去、加权与多维推广，并应用于等周不等式。"
subject: "数学分析"
tags: [Wirtinger不等式, Poincaré不等式, 配平方, Fourier级数, 变分法, 特征值, 最佳常数, 等周不等式]
created_at: "2026-11-20"
updated_at: "2026-11-20"
---

[文章栏目](/essays/)

一个函数变化得很慢，能否据此断定它本身很小？直接这样说是错的：一个很大的常数函数，导数仍然为零。可是，若先减去平均值，或规定函数在端点为零，导数便有可能控制函数的大小。Wirtinger 不等式给出了这种控制的一维精确形式。

本文从周期零均值情形出发，保留两条最直接的证明路线：**通过一个合适的正弦函数配平方；通过 Fourier 展开比较不同频率**。随后加入变分证明，说明最佳常数、等号函数以及各种推广为什么都由“允许出现的最低频率”决定。

## 目录

- [一、背景与基本问题](#一背景与基本问题)
- [二、经典形式与最佳常数](#二经典形式与最佳常数)
- [三、初等证明：配平方与半周期等值点](#三初等证明配平方与半周期等值点)
- [四、Fourier 证明：去掉常数频率](#四fourier-证明去掉常数频率)
- [五、变分证明：最小能量与第一特征值](#五变分证明最小能量与第一特征值)
- [六、区间长度与边界条件的推广](#六区间长度与边界条件的推广)
- [七、高阶导数、低频消去与稳定性](#七高阶导数低频消去与稳定性)
- [八、加权与多维推广](#八加权与多维推广)
- [九、应用：从函数不等式到等周不等式](#九应用从函数不等式到等周不等式)
- [十、怎样发现证明与选择推广](#十怎样发现证明与选择推广)

## 一、背景与基本问题

设 $f$ 定义在长度为 $T$ 的区间上。两个基本量是

$$
\begin{aligned}
M(f)&=\int_0^T|f(x)|^2\,dx,\\
E(f)&=\int_0^T|f'(x)|^2\,dx.
\end{aligned}
$$

前者度量函数的平方大小，后者度量变化的能量。在弦振动中，$E(f)$ 与弦偏离平衡位置所需的能量相联系；在分析中，它是控制函数振荡的基本量。我们希望找到一个与 $f$ 无关的常数 $C$，使

$$
M(f)\leqslant C E(f). \qquad\text{(1)}
$$

要使式（1）成立，必须排除非零常数函数。常见办法有两种：规定零边界值，或者令函数与常数正交，即要求积分为零。

这里还隐藏着两个问题。其一，**同样排除常数，不同边界条件会不会得到不同常数**？其二，**如果连最慢的几个非恒定振荡也排除，能否进一步减小常数**？答案都是肯定的。

若把长度从 $1$ 放大到 $T$，函数平方积分增加一个 $T$ 因子，导数平方积分却减少一个 $T$ 因子。因此式（1）的最佳常数应按 $T^2$ 缩放。这能预先判断常数的量纲，但其中的 $\pi$ 及系数必须由边界条件确定。

## 二、经典形式与最佳常数

**定理 1（周期型 Wirtinger 不等式）**。设 $f\in C^1(\mathbb R)$ 是实值 $2\pi$ 周期函数，且

$$
\int_0^{2\pi}f(x)\,dx=0.
$$

则

$$
\boxed{\int_0^{2\pi}f(x)^2\,dx
\leqslant\int_0^{2\pi}f'(x)^2\,dx.} \qquad\text{(2)}
$$

等号成立当且仅当

$$
f(x)=a\cos x+b\sin x,\qquad a,b\in\mathbb R. \qquad\text{(3)}
$$

常数 $1$ 最佳，因为非零的 $\sin x$ 已经取得等号。这里 $2\pi$ 是一个周期，不要求它是最小正周期；零函数也包含在等号情形中。

**对条件的理解**。零均值排除了常数分量，周期条件则把最低非零频率固定为 $1$。如果只要求 $\int_0^{2\pi}f=0$ 而不要求首尾相接，式（2）不成立。例如 $f(x)=\cos(x/2)$ 满足零均值，却有

$$
\int_0^{2\pi}f^2=\pi,
\qquad
\int_0^{2\pi}(f')^2=\frac{\pi}{4}.
$$

全文首先对实值函数讨论。复值函数可对实部、虚部分别应用相应不等式并相加；平方应改为模平方，等号中的系数允许为复数。

## 三、初等证明：配平方与半周期等值点

### 1. 为什么会想到与正弦函数比较

如果等号函数应当是 $u(x)=C\sin x$，那么它在区间内部满足

$$
u'(x)-u(x)\cot x=0.
$$

于是可以反过来寻找恒等式：把 $\int(u'^2-u^2)$ 写成 $\int(u'-u\cot x)^2$。这不是凭空选出一个平方，而是**先猜测等号函数，再用它的对数导数构造平方项**。

### 2. 两端为零的引理

**引理**。若 $u\in C^1[0,\pi]$，且 $u(0)=u(\pi)=0$，则

$$
\int_0^\pi u^2\,dx\leqslant\int_0^\pi(u')^2\,dx, \qquad\text{(4)}
$$

等号当且仅当 $u=C\sin x$。

**证明**：由于 $\cot x$ 在端点奇异，先在 $[\varepsilon,\pi-\varepsilon]$ 上计算。利用 $\cot^2x-\csc^2x=-1$，分部积分得到

$$
\begin{aligned}
\int_\varepsilon^{\pi-\varepsilon}(u'-u\cot x)^2\,dx
&=\int_\varepsilon^{\pi-\varepsilon}
\bigl((u')^2+u^2\cot^2x\bigr)\,dx
-\int_\varepsilon^{\pi-\varepsilon}(u^2)'\cot x\,dx\\
&=\int_\varepsilon^{\pi-\varepsilon}\bigl((u')^2-u^2\bigr)\,dx
-[u^2\cot x]_\varepsilon^{\pi-\varepsilon}.
\end{aligned} \qquad\text{(5)}
$$

由 $u\in C^1$ 及零边界值，$u(x)=O(x)$、$u(\pi-x)=O(x)$，故两个端点处的 $u^2\cot x$ 都趋于零；同时 $u\cot x$ 在端点附近有界。令 $\varepsilon\downarrow0$，得到精确的差值恒等式

$$
\boxed{\int_0^\pi\bigl((u')^2-u^2\bigr)\,dx
=\int_0^\pi(u'-u\cot x)^2\,dx\geqslant0.} \qquad\text{(6)}
$$

若等号成立，则区间内部 $u'-u\cot x=0$，即

$$
\left(\frac{u}{\sin x}\right)'=0.
$$

所以 $u=C\sin x$，反之直接代入即得等号。证毕。

等价地，写 $u=\sin x\,v$，式（6）就是

$$
\int_0^\pi\bigl((u')^2-u^2\bigr)\,dx
=\int_0^\pi\sin^2x\,(v')^2\,dx. \qquad\text{(7)}
$$

右侧说明：不等式的差值恰好度量 $u$ 相对于等号函数 $\sin x$ 的变化。

### 3. 从零边界值回到周期零均值

周期函数没有预先指定的两个零点。关键是先找到**相隔半周期、函数值相等**的两个点。

令

$$
h(x)=f(x)-f(x+\pi).
$$

周期性给出 $h(x+\pi)=-h(x)$。因此由介值定理，存在 $x_0$ 使 $h(x_0)=0$。记

$$
c=f(x_0)=f(x_0+\pi)=f(x_0+2\pi).
$$

函数 $f-c$ 在 $[x_0,x_0+\pi]$ 与 $[x_0+\pi,x_0+2\pi]$ 两个区间的端点都为零。分别平移应用引理，再相加，便有

$$
\int_{x_0}^{x_0+2\pi}(f-c)^2\,dx
\leqslant\int_{x_0}^{x_0+2\pi}(f')^2\,dx.
$$

周期性与零均值使左侧化为

$$
\begin{aligned}
\int_{x_0}^{x_0+2\pi}(f-c)^2\,dx
&=\int_0^{2\pi}f^2\,dx
-2c\int_0^{2\pi}f\,dx+2\pi c^2\\
&=\int_0^{2\pi}f^2\,dx+2\pi c^2.
\end{aligned}
$$

所以

$$
\int_0^{2\pi}f^2\,dx+2\pi c^2
\leqslant\int_0^{2\pi}(f')^2\,dx, \qquad\text{(8)}
$$

从而式（2）成立。

若式（2）取等号，式（8）首先迫使 $c=0$，两个子区间上的引理也必须同时取等号。因此

$$
f(x)=
\begin{cases}
A\sin(x-x_0),&x_0\leqslant x\leqslant x_0+\pi,\\
B\sin(x-x_0-\pi),&x_0+\pi\leqslant x\leqslant x_0+2\pi.
\end{cases}
$$

在拼接点处导数连续，给出 $B=-A$；两段遂合成同一个 $A\sin(x-x_0)$，也就是式（3）。反之，式（3）直接取得等号。

**这个构造的作用**。仅由零均值找一个零点，再把整个长度 $2\pi$ 的区间当作零边界值区间，只能得到常数 $4$。相隔半周期的等值点把区间长度减半，才得到精确常数 $1$。此外，减去的 $c$ 不一定是均值；零均值条件的作用是让展开平方后的交叉项消失。

## 四、Fourier 证明：去掉常数频率

仍设 $f$ 为实值 $2\pi$ 周期函数。以 $L^2$ 意义写其 Fourier 展开

$$
f(x)=\frac{a_0}{2}
+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),
$$

其中

$$
\begin{aligned}
a_n&=\frac1\pi\int_0^{2\pi}f(x)\cos nx\,dx,\\
b_n&=\frac1\pi\int_0^{2\pi}f(x)\sin nx\,dx.
\end{aligned}
$$

零均值就是 $a_0=0$。Parseval 等式给出

$$
\int_0^{2\pi}f^2\,dx
=\pi\sum_{n=1}^{\infty}(a_n^2+b_n^2). \qquad\text{(9)}
$$

这里不需要预先断言 Fourier 级数可以逐项求导。对 $f'$ 的 Fourier 系数直接分部积分，利用 $f(0)=f(2\pi)$ 得

$$
a_n(f')=n b_n(f),\qquad b_n(f')=-n a_n(f),
\qquad a_0(f')=0.
$$

再对 $f'$ 应用 Parseval 等式，就有

$$
\int_0^{2\pi}(f')^2\,dx
=\pi\sum_{n=1}^{\infty}n^2(a_n^2+b_n^2). \qquad\text{(10)}
$$

比较式（9）、（10），得到

$$
\int_0^{2\pi}(f')^2\,dx-\int_0^{2\pi}f^2\,dx
=\pi\sum_{n=2}^{\infty}(n^2-1)(a_n^2+b_n^2)\geqslant0. \qquad\text{(11)}
$$

等号当且仅当所有 $n\geqslant2$ 的系数为零，即只剩第一谐波。这也证明了等号条件。

**与初等证明的联系**。配平方把差值写成一个积分平方；Fourier 方法把同一差值写成带正系数的平方和。两者都同时提供不等式、最佳常数和等号条件。

### 正则性可以弱化到什么程度

一维中，$H^1(0,T)$ 可以理解为：函数具有绝对连续代表，且函数及其导数都平方可积。记

$$
H^1_{\mathrm{per}}(0,T)
=\{f\in H^1(0,T):f(0)=f(T)\}.
$$

上述 Fourier 系数的分部积分和 Parseval 等式对这一函数类仍然成立。因此定理 1 实际上只需 $f\in H^1_{\mathrm{per}}(0,2\pi)$、积分为零；不必假设处处可导，也不必额外要求端点导数相等。等号首先在几乎处处意义成立，取连续代表后即为处处成立。

## 五、变分证明：最小能量与第一特征值

为了知道常数为什么不能再改进，考虑归一化后的最小能量

$$
\lambda_*=
\inf\left\{\int_0^{2\pi}(f')^2\,dx:
f\in H^1_{\mathrm{per}},\quad
\int_0^{2\pi}f\,dx=0,\quad
\int_0^{2\pi}f^2\,dx=1\right\}. \qquad\text{(12)}
$$

式（2）等价于 $\lambda_*=1$。下面的证明不预先使用 Wirtinger 不等式。

**证明**：取极小化序列 $f_j$。因为试验函数 $\pi^{-1/2}\sin x$ 的能量为 $1$，可令 $\int(f_j')^2$ 一致有界。由 $\int f_j^2=1$，每个 $f_j$ 都有一点满足 $|f_j|\leqslant(2\pi)^{-1/2}$，再由

$$
|f_j(x)-f_j(y)|
\leqslant |x-y|^{1/2}\|f_j'\|_{L^2}
$$

可知它们一致有界且等度连续。Arzelà–Ascoli 定理给出一致收敛的子列，其极限记为 $f_*$；同时导数在 $L^2$ 中可取弱收敛子列。弱导数的定义保证其弱极限是 $f_*'$，而范数的弱下半连续性给出

$$
\int_0^{2\pi}(f_*')^2\,dx
\leqslant\liminf_j\int_0^{2\pi}(f_j')^2\,dx.
$$

一致收敛保留周期、零均值与单位平方积分，所以极小值确实取得。

对任意周期零均值的 $\varphi$，将 $f_*+t\varphi$ 除以它的 $L^2$ 范数后代入式（12），在 $t=0$ 求导，得到

$$
\int_0^{2\pi}f_*'\varphi'\,dx
=\lambda_*\int_0^{2\pi}f_*\varphi\,dx. \qquad\text{(13)}
$$

对任意周期的 $\varphi$，减去其平均值不改变式（13）的两侧，因此式（13）实际上对所有周期试验函数成立。先取紧支撑试验函数，得弱方程 $-f_*''=\lambda_*f_*$。因 $f_*$ 连续，该方程使 $f_*$ 有 $C^2$ 代表。再对一般周期试验函数分部积分，端点项给出 $f_*'(0)=f_*'(2\pi)$。所以极小函数满足

$$
\begin{cases}
-f_*''=\lambda_*f_*,\\
f_*(0)=f_*(2\pi),\quad f_*'(0)=f_*'(2\pi).
\end{cases} \qquad\text{(14)}
$$

若 $\lambda_*=0$，则能量为零，$f_*$ 为常数；零均值又使它为零，与归一化矛盾。因此 $\lambda_*>0$。微分方程的非零解为

$$
f_*(x)=A\cos(\sqrt{\lambda_*}\,x)
+B\sin(\sqrt{\lambda_*}\,x).
$$

函数及导数在长度 $2\pi$ 后同时复原，要求 $\sqrt{\lambda_*}$ 为正整数。因此 $\lambda_*\geqslant1$。试验函数 $\pi^{-1/2}\sin x$ 又给出 $\lambda_*\leqslant1$，故 $\lambda_*=1$。任一非零等号函数经归一化都是极小函数，所以等号条件也随之得到。证毕。

**谱的解释**。在周期条件下，算子 $-d^2/dx^2$ 的特征值为 $0,1,4,9,\ldots$；零均值排除了特征值 $0$ 的常数特征函数，剩下的最小特征值就是 $1$。不等式最佳常数是这个特征值的倒数。

## 六、区间长度与边界条件的推广

### 1. 任意周期与非零均值

设 $T>0$，$f\in H^1_{\mathrm{per}}(0,T)$，记

$$
\bar f=\frac1T\int_0^T f(x)\,dx.
$$

对 $g(t)=f(Tt/(2\pi))-\bar f$ 应用式（2），换元得到

$$
\boxed{\int_0^T|f-\bar f|^2\,dx
\leqslant\frac{T^2}{4\pi^2}\int_0^T|f'|^2\,dx.} \qquad\text{(15)}
$$

等号当且仅当

$$
f(x)=\bar f+a\cos\frac{2\pi x}{T}
+b\sin\frac{2\pi x}{T}.
$$

利用常数与零均值函数的正交分解，式（15）又等价于

$$
\int_0^T|f|^2\,dx
\leqslant\frac1T\left|\int_0^T f\,dx\right|^2
+\frac{T^2}{4\pi^2}\int_0^T|f'|^2\,dx. \qquad\text{(16)}
$$

所以“去掉零均值假设”的正确做法，是控制 $f-\bar f$ 或在右边补回均值项。

### 2. 两端为零：Dirichlet 型

若 $u\in H_0^1(0,L)$，即 $u\in H^1(0,L)$ 且 $u(0)=u(L)=0$，则

$$
\boxed{\int_0^L|u|^2\,dx
\leqslant\frac{L^2}{\pi^2}\int_0^L|u'|^2\,dx.} \qquad\text{(17)}
$$

对 $C^1$ 函数，这由引理作线性换元得到；一般 $H_0^1$ 函数可由光滑零边界值函数在 $H^1$ 中的逼近得到。等号函数为

$$
u(x)=C\sin\frac{\pi x}{L}.
$$

为核验弱正则性下的等号条件，也可把 $u$ 奇延拓成长度 $2L$ 的周期函数。延拓后的函数零均值，且两个平方积分都变为原来的两倍；周期型的等号函数再结合奇对称性，恰好只剩上述正弦项。

### 3. 只要求零均值：Neumann 型

若 $u\in H^1(0,L)$ 且 $\int_0^L u=0$，**不要求端点函数值相等，也不要求端点导数为零**，则

$$
\boxed{\int_0^L|u|^2\,dx
\leqslant\frac{L^2}{\pi^2}\int_0^L|u'|^2\,dx.} \qquad\text{(18)}
$$

**证明**：对实值函数令

$$
U(x)=\int_0^x u(t)\,dt.
$$

零均值给出 $U(0)=U(L)=0$，因此 $U$ 满足式（17）。分部积分及 Cauchy–Schwarz 不等式给出

$$
\begin{aligned}
\int_0^L u^2\,dx
&=-\int_0^L Uu'\,dx\\
&\leqslant\|U\|_{L^2}\|u'\|_{L^2}\\
&\leqslant\frac{L}{\pi}\|u\|_{L^2}\|u'\|_{L^2}.
\end{aligned}
$$

若 $u\neq0$，约去 $\|u\|_{L^2}$ 后平方即得式（18）。等号要求 $U=C\sin(\pi x/L)$，从而 $u$ 为 $\cos(\pi x/L)$ 的常数倍；直接代入验证等号成立。证毕。

“Neumann 型”指极小函数满足自然边界条件 $u'(0)=u'(L)=0$，并不表示该边界条件必须预先施加在每个试验函数上。

### 4. 一端为零与反周期条件

若只给定 $u(0)=0$，则

$$
\int_0^L|u|^2\,dx
\leqslant\frac{4L^2}{\pi^2}\int_0^L|u'|^2\,dx, \qquad\text{(19)}
$$

等号当且仅当 $u=C\sin(\pi x/(2L))$。证明是把 $u$ 关于 $x=L$ 偶反射到 $[0,2L]$，得到两端为零的 $H^1$ 函数，再用式（17）。反射函数无需在拼接点经典可导，这正是使用 $H^1$ 表述的便利之处。

若 $u(L)=-u(0)$，则将其按 $u(x+L)=-u(x)$ 延拓为 $2L$ 周期函数。延拓后自动零均值，于是

$$
\int_0^L|u|^2\,dx
\leqslant\frac{L^2}{\pi^2}\int_0^L|u'|^2\,dx, \qquad\text{(20)}
$$

等号为 $u=A\cos(\pi x/L)+B\sin(\pi x/L)$。

下表统一把常数写在 $\int|u|^2\leqslant C\int|u'|^2$ 的右侧；零函数均包含在等号情形中。

| 区间与约束 | 最佳常数 $C$ | 非零等号函数的形式 |
| --- | --- | --- |
| $[0,L]$，首尾相接且零均值 | $L^2/(4\pi^2)$ | $A\cos(2\pi x/L)+B\sin(2\pi x/L)$ |
| $[0,L]$，两端为零 | $L^2/\pi^2$ | $A\sin(\pi x/L)$ |
| $[0,L]$，仅零均值 | $L^2/\pi^2$ | $A\cos(\pi x/L)$ |
| $[0,L]$，仅左端为零 | $4L^2/\pi^2$ | $A\sin(\pi x/(2L))$ |
| $[0,L]$，端点互为相反数 | $L^2/\pi^2$ | $A\cos(\pi x/L)+B\sin(\pi x/L)$ |

这些常数都由表中的非零等号函数保证最优；不能忽略约束而在不同版本间直接互换。

## 七、高阶导数、低频消去与稳定性

### 1. 高阶导数

设 $m\geqslant1$ 为整数。$H^m_{\mathrm{per}}(0,T)$ 表示平方可积弱导数存在至 $m$ 阶，且 $0$ 至 $m-1$ 阶导数的端点迹相接。若 $f$ 属于此空间且零均值，则

$$
\boxed{\int_0^T|f|^2\,dx
\leqslant\left(\frac{T}{2\pi}\right)^{2m}
\int_0^T|f^{(m)}|^2\,dx.} \qquad\text{(21)}
$$

一种证明是反复使用式（15）。由于周期迹条件，$1\leqslant j\leqslant m-1$ 时

$$
\int_0^T f^{(j)}(x)\,dx
=f^{(j-1)}(T)-f^{(j-1)}(0)=0,
$$

所以每次迭代都有零均值条件。等号仍然只在第一谐波上取得。

特别地，若 $f\in H^2(0,T)$ 却只知道 $f(0)=f(T)$，不能直接宣称可作两次周期型估计；第二次还需要 $f'(0)=f'(T)$。

### 2. 消去低频后的统一形式

**定理 2**。设 $m\geqslant1$、$N\geqslant0$ 为整数，$f\in H^m_{\mathrm{per}}(0,T)$ 为实值函数，满足

$$
\begin{aligned}
\int_0^T f(x)\,dx&=0,\\
\int_0^T f(x)\cos\frac{2\pi nx}{T}\,dx
=\int_0^T f(x)\sin\frac{2\pi nx}{T}\,dx&=0,
\quad 1\leqslant n\leqslant N.
\end{aligned} \qquad\text{(22)}
$$

则

$$
\boxed{\int_0^T f^2\,dx
\leqslant\left(\frac{T}{2\pi(N+1)}\right)^{2m}
\int_0^T|f^{(m)}|^2\,dx.} \qquad\text{(23)}
$$

常数最佳，等号当且仅当

$$
f(x)=A\cos\frac{2\pi(N+1)x}{T}
+B\sin\frac{2\pi(N+1)x}{T}. \qquad\text{(24)}
$$

**证明**：条件（22）使 Fourier 展开从 $n=N+1$ 开始。记 $k_n=2\pi n/T$，Parseval 等式及弱导数的 Fourier 系数关系给出

$$
\begin{aligned}
\int_0^T f^2\,dx
&=\frac T2\sum_{n=N+1}^{\infty}(a_n^2+b_n^2),\\
\int_0^T|f^{(m)}|^2\,dx
&=\frac T2\sum_{n=N+1}^{\infty}k_n^{2m}(a_n^2+b_n^2)\\
&\geqslant k_{N+1}^{2m}\int_0^T f^2\,dx.
\end{aligned}
$$

等号要求所有 $n\geqslant N+2$ 的系数为零，所以恰好得到式（24）。证毕。

式（23）把任意周期、高阶导数、低频消去三个推广合并在同一公式中。$N=0$ 时只消去常数分量，便回到式（21）。

**例**。若 $f$ 为 $2\pi$ 周期函数，且与 $1,\cos x,\sin x$ 都正交，则

$$
\int_0^{2\pi}f^2\,dx
\leqslant\frac14\int_0^{2\pi}(f')^2\,dx.
$$

若还具有二阶周期正则性，则右侧可改为 $\frac1{16}\int_0^{2\pi}(f'')^2$。两者的等号函数均为 $A\cos2x+B\sin2x$。

### 3. 不满足正交条件时，估计逼近误差

对一般 $f\in H^m_{\mathrm{per}}(0,T)$，令 $P_Nf$ 是它在

$$
\operatorname{span}\left\{1,
\cos\frac{2\pi nx}{T},\sin\frac{2\pi nx}{T}:1\leqslant n\leqslant N\right\}
$$

上的 $L^2$ 正交投影。残差 $r=f-P_Nf$ 自动满足式（22），因此

$$
\|f-P_Nf\|_{L^2}
\leqslant\left(\frac{T}{2\pi(N+1)}\right)^m
\|(f-P_Nf)^{(m)}\|_{L^2}
\leqslant\left(\frac{T}{2\pi(N+1)}\right)^m
\|f^{(m)}\|_{L^2}. \qquad\text{(25)}
$$

最后一个不等式来自高频与低频导数的正交性。于是高阶光滑性直接给出有限 Fourier 和逼近的误差估计。

### 4. 接近等号意味着接近第一谐波

设 $f$ 零均值，令 $P_1f$ 为其第一谐波部分，并记

$$
\omega=\frac{2\pi}{T},\qquad
D(f)=\int_0^T|f'|^2\,dx-\omega^2\int_0^T|f|^2\,dx.
$$

因为 $n\geqslant2$ 时 $n^2-1\geqslant3$，Fourier 展开给出

$$
\boxed{D(f)\geqslant3\omega^2\|f-P_1f\|_{L^2}^2.} \qquad\text{(26)}
$$

系数 $3\omega^2$ 最佳：任取非零第二谐波即可检验。式（26）等号允许同时存在第一、第二谐波，而不能存在更高频率。它比原不等式多说明一件事：差值很小，就意味着函数在 $L^2$ 意义下靠近等号函数所成的二维空间。

## 八、加权与多维推广

### 1. 加权配平方：由已知正函数构造不等式

设 $a\in C^1[0,L]$、$w,q\in C[0,L]$，且 $a,w$ 严格为正。假设某个 $\phi\in C^2[0,L]$ 在内部严格为正，两端为零，并满足

$$
-(a\phi')'+q\phi=\lambda w\phi. \qquad\text{(27)}
$$

那么对 $u\in C^1[0,L]$、$u(0)=u(L)=0$，有

$$
\boxed{
\int_0^L\bigl(a(u')^2+qu^2\bigr)\,dx
-\lambda\int_0^Lwu^2\,dx
=\int_0^La\phi^2\left[\left(\frac u\phi\right)'\right]^2\,dx
\geqslant0.} \qquad\text{(28)}
$$

**证明**：令 $r=\phi'/\phi$。由式（27），

$$
(ar)'+ar^2=\frac{(a\phi')'}\phi=q-\lambda w.
$$

在截去端点的小区间上展开平方并分部积分，得到

$$
\int a(u'-ru)^2\,dx
=\int\bigl(a(u')^2+(q-\lambda w)u^2\bigr)\,dx
-[aru^2].
$$

正解 $\phi$ 在两端的导数不为零：否则线性微分方程的初值唯一性会迫使 $\phi$ 恒为零。因此 $r$ 在端点只具有一阶奇性，而 $u$ 至少线性趋于零，边界项趋于零。取极限即得式（28）。证毕。

右侧为零当且仅当 $u=C\phi$，因此 $\lambda$ 是这个能量不等式中的最佳下界。取 $a=w=1$、$q=0$、$\phi=\sin(\pi x/L)$，便回到 Dirichlet 型不等式。这个恒等式也称为基态变换；它把“寻找最佳常数”转化为“寻找一个正的最低能量解”。

式（28）中的不等式可由密度延拓到 $H_0^1(0,L)$。等号仍只有 $C\phi$：二次型非负且在等号函数处为零，对任意方向取一阶变分可得同一个弱微分方程；正则性与零边界值再把解限制为 $\phi$ 的常数倍。

### 2. 加权均值与加权 Poincaré 不等式

在 $a,w$ 连续且严格为正时，定义加权均值

$$
u_w=\frac{\int_0^Lwu\,dx}{\int_0^Lw\,dx}.
$$

令 $a_{\min}=\min a$、$w_{\max}=\max w$。一个可直接使用的估计是

$$
\boxed{\int_0^Lw|u-u_w|^2\,dx
\leqslant\frac{w_{\max}}{a_{\min}}\frac{L^2}{\pi^2}
\int_0^La|u'|^2\,dx.} \qquad\text{(29)}
$$

**证明**：加权均值 $u_w$ 是使 $\int w|u-c|^2$ 最小的常数。取普通均值 $\bar u$ 作比较，再用式（18），得到

$$
\begin{aligned}
\int_0^Lw|u-u_w|^2\,dx
&\leqslant\int_0^Lw|u-\bar u|^2\,dx\\
&\leqslant w_{\max}\int_0^L|u-\bar u|^2\,dx\\
&\leqslant\frac{w_{\max}L^2}{\pi^2}\int_0^L|u'|^2\,dx\\
&\leqslant\frac{w_{\max}L^2}{a_{\min}\pi^2}\int_0^La|u'|^2\,dx.
\end{aligned}
$$

证毕。式（29）给出显式可用的常数，对变系数一般不宣称最优。

精确最佳常数为 $1/\lambda_1$，其中

$$
\lambda_1=
\inf_{\substack{u\in H^1(0,L),\ u\ne0\\ \int_0^Lwu\,dx=0}}
\frac{\int_0^La|u'|^2\,dx}{\int_0^Lw|u|^2\,dx}. \qquad\text{(30)}
$$

式（29）先保证 $\lambda_1>0$；第五节的紧性论证加上权重的正上下界保证极小值取得。若再有 $a\in C^1$，变分给出

$$
-(au')'=\lambda_1wu,
\qquad (au')(0)=(au')(L)=0.
$$

这就是加权 Neumann 问题的第一正特征值。要注意：其等号函数相对于权重 $w$ 零均值，不能随意换成普通均值。

### 3. 长方体上的零边界值不等式

设 $\Omega=\prod_{j=1}^d(0,L_j)$，$u\in H_0^1(\Omega)$，则

$$
\boxed{\int_\Omega|u|^2\,dx
\leqslant\frac{1}{\pi^2\sum_{j=1}^dL_j^{-2}}
\int_\Omega|\nabla u|^2\,dx.} \qquad\text{(31)}
$$

**证明**：先取光滑紧支撑的 $u$，固定除 $x_j$ 外的所有变量，沿 $x_j$ 方向应用式（17），再对其余变量积分，得到

$$
\int_\Omega|\partial_j u|^2\,dx
\geqslant\frac{\pi^2}{L_j^2}\int_\Omega|u|^2\,dx.
$$

对 $j$ 求和即得式（31），再由密度推广到 $H_0^1$。各方向同时取等号，要求

$$
u(x)=C\prod_{j=1}^d\sin\frac{\pi x_j}{L_j}.
$$

确切地说，逐方向的一维等号条件先使 $u$ 成为该方向正弦函数乘以其余变量的函数，再依次对其余方向应用同样结论。上述乘积函数直接取得等号，所以常数最佳。证毕。

### 4. 多维周期零均值不等式

若 $u$ 在第 $j$ 个坐标方向具有周期 $L_j$，定义在周期长方体 $Q=\prod_j(0,L_j)$ 上，且 $\int_Q u=0$，记 $L_{\max}=\max_jL_j$，则

$$
\boxed{\int_Q|u|^2\,dx
\leqslant\frac{L_{\max}^2}{4\pi^2}
\int_Q|\nabla u|^2\,dx.} \qquad\text{(32)}
$$

**证明**：复指数 Fourier 基的频率为 $k\in\mathbb Z^d$，对应梯度能量的倍数为

$$
4\pi^2\sum_{j=1}^d\frac{k_j^2}{L_j^2}.
$$

零均值去掉 $k=0$，而所有非零整数向量满足

$$
\sum_{j=1}^d\frac{k_j^2}{L_j^2}\geqslant L_{\max}^{-2}.
$$

由 Parseval 等式即得式（32）。实值等号函数恰好为

$$
u(x)=\sum_{j:L_j=L_{\max}}
\left(A_j\cos\frac{2\pi x_j}{L_j}
+B_j\sin\frac{2\pi x_j}{L_j}\right).
$$

证毕。长方体零边界值情形的能量下界是各方向下界之和；周期零均值情形则允许只沿最长的一个方向振荡。这解释了式（31）、（32）为什么有不同的形状。

## 九、应用：从函数不等式到等周不等式

设一条 $C^2$ 正则简单闭曲线围成面积 $A$，周长为 $\ell$。取正向弧长参数

$$
\gamma(s)=(x(s),y(s)),\qquad 0\leqslant s\leqslant\ell,
\qquad (x')^2+(y')^2=1.
$$

平移坐标原点，使两个坐标函数都具有零均值。平移不改变面积、周长和导数。Green 公式与 Cauchy–Schwarz 不等式给出

$$
\begin{aligned}
2A
&=\int_0^\ell(xy'-yx')\,ds\\
&\leqslant
\left(\int_0^\ell(x^2+y^2)\,ds\right)^{1/2}
\left(\int_0^\ell((x')^2+(y')^2)\,ds\right)^{1/2}.
\end{aligned}
$$

对 $x,y$ 分别应用周期为 $\ell$ 的式（15），并利用单位速率，得到

$$
\begin{aligned}
2A
&\leqslant\frac{\ell}{2\pi}
\int_0^\ell((x')^2+(y')^2)\,ds\\
&=\frac{\ell^2}{2\pi}.
\end{aligned}
$$

因此

$$
\boxed{4\pi A\leqslant\ell^2.} \qquad\text{(33)}
$$

若等号成立，向量值 Cauchy–Schwarz 的等号条件要求存在常数 $\mu>0$，使

$$
(y',-x')=\mu(x,y).
$$

两个范数之比又给出 $\mu=2\pi/\ell$。于是 $(x^2+y^2)'=0$，且单位速率给出半径为 $1/\mu=\ell/(2\pi)$，曲线只能是圆；反过来圆显然取等号。

这一应用展示了 Wirtinger 不等式的几何意义：给定变化能量时，第一谐波最有效地维持函数大小；对闭曲线的两个坐标同时达到这种效率，就得到圆。

## 十、怎样发现证明与选择推广

遇到 $\int f^2$ 与 $\int(f')^2$ 的比较，可以先看导数的核。非零常数是否被允许？如果允许，应先减均值、加入均值项，或补充合理的边界约束。随后检查长度缩放，再寻找可能的等号函数。

三种证明适合不同的问题。

| 方法 | 核心构造 | 适合解决的问题 |
| --- | --- | --- |
| 配平方 | 用候选等号函数 $\phi$ 构造 $u'-(\phi'/\phi)u$ | 初等证明、零边界值、加权恒等式 |
| Fourier 展开 | 把约束译成低频系数为零 | 周期、高阶导数、正交条件、逼近与稳定性 |
| 变分法 | 最小化导数能量与函数平方大小之比 | 最佳常数、自然边界条件、变系数特征值问题 |

证明中有几个不能省略的检查：配平方遇到 $\cot x$ 时，要截去奇异端点并证明边界项消失；使用 Fourier 方法时，可以直接计算弱导数的系数，避免未经证明的逐项求导；迭代高阶不等式时，须逐次核对周期迹和零均值；讨论最佳常数时，要给出真正允许的非零等号函数。

本文的推广遵循同一个原则：**约束决定哪些振荡可以出现，最低允许频率决定最佳常数，最低频率的函数决定等号**。这也解释了为什么增加正交条件能够改进常数，以及为什么等号分析往往能反过来帮助发现证明。
