---
title: "楼红卫《数学分析》B 组习题解答（四十四）：Fourier 收敛、可积性与共轭级数"
description: "B303—B309：近似恒等核及 Lp 推广、对数乘积积分、慢衰减余弦级数的可积性、幂系数级数渐近、连续共轭函数反例与单调正弦级数的一致收敛。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-44.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "Fourier级数", "一致收敛", "近似恒等核", "B303-B309"]
created_at: "2026-11-26"
updated_at: "2026-11-26"
---

第四十四批接续 B302，完成习题 12.2.B 第 1—7 题。原题见下册题册 PDF 第 41—42 页（印刷第 39—40 页；原书第 372—373 页），已核对全部条件与小问；七题均无星号、无附图、无另列提示。全文采用周期 $2\pi$，卷积不另除以 $2\pi$；据此，近似恒等核的积分归一化为 $1$。

[下一批 B310—B316](/problems/47f7713369374b8cd908a494/) · [上一批 B296—B302](/problems/fc3fd711670bf3b3606e6b81/) · [第十二章索引](/problems/collections/lou-analysis/chapters/12/) · [B 组总目录](/problems/collections/lou-analysis/)

## 题号导航

- [问题 B303：近似恒等核的逐点与一致逼近（12.2.B-1）](#问题-b303)
- [问题 B304：近似恒等核的范数推广与边界（12.2.B-2）](#问题-b304)
- [问题 B305：对称性与对数乘积积分（12.2.B-3）](#问题-b305)
- [问题 B306：慢衰减余弦级数的可积性（12.2.B-4）](#问题-b306)
- [问题 B307：幂系数三角级数的精确渐近（12.2.B-5）](#问题-b307)
- [问题 B308：连续函数的共轭级数反例（12.2.B-6）](#问题-b308)
- [问题 B309：单调正弦级数的一致收敛判别（12.2.B-7）](#问题-b309)

## 问题 B303

**原题号：** 习题 12.2.B 第 1 题。[原题，PDF 第 41—42 页（印刷第 39—40 页）](/files/problems/楼分析习题-v2.pdf#page=41)

**题目**　设 $f\in L^1_\#(\mathbb R)$，$g_n\in L^\infty_\#(\mathbb R)$，且

$$
\int_{-\pi}^{\pi}g_n(t)\,dt=1,\qquad
\int_{-\pi}^{\pi}|g_n(t)|\,dt\le M.\qquad\text{(1)}
$$

对每个 $0<\delta\le\pi$，还有

$$
\begin{aligned}
\eta_n(\delta)&:=\int_\delta^\pi\bigl(|g_n(t)|+|g_n(-t)|\bigr)\,dt\longrightarrow0,\\
C_\delta&:=\sup_{n\ge1,\,\delta\le|t|\le\pi}|g_n(t)|<\infty.
\end{aligned}\qquad\text{(2)}
$$

证明：（1）若 $f$ 在 $x_0$ 连续，则 $\int_{-\pi}^{\pi}f(y)g_n(x_0-y)\,dy\to f(x_0)$；（2）若 $f$ 在全实轴连续，则上述卷积一致趋于 $f$。

**基础知识**　周期积分的平移不变性、$L^1$ 函数截断、周期连续函数的一致连续性。对 $L^\infty$ 等价类，（2）的上确界可理解为本性上确界。

**思路来源**　把误差拆成原点附近与远离原点两部分。近处用连续性，远处先截断 $f$，再分别利用核的尾质量趋零和尾部一致有界。

**证明**　换元并利用周期性，原积分等于

$$
T_nf(x):=\int_{-\pi}^{\pi}f(x-t)g_n(t)\,dt.
\qquad\text{(3)}
$$

每个积分均绝对收敛。由（1），$T_nf(x_0)-f(x_0)=\int h(t)g_n(t)\,dt$，其中 $h(t)=f(x_0-t)-f(x_0)\in L^1[-\pi,\pi]$。给定 $\varepsilon>0$，由连续性取 $\delta>0$，使 $|t|<\delta$ 时 $|h(t)|<\varepsilon$，于是近处积分的绝对值不超过 $M\varepsilon$。

在 $E_\delta=\{\delta\le|t|\le\pi\}$ 上，对任意 $K>0$ 有

$$
\int_{E_\delta}|h(t)g_n(t)|\,dt
\le K\eta_n(\delta)+C_\delta\int_{\{|h|>K\}}|h(t)|\,dt.
\qquad\text{(4)}
$$

先令 $n\to\infty$，再令 $K\to\infty$，右端趋零。因此 $\limsup_n|T_nf(x_0)-f(x_0)|\le M\varepsilon$，再令 $\varepsilon\downarrow0$，得第一问。

若 $f$ 连续且周期，则有界且一致连续。选取同一个 $\delta$，使对所有 $x$ 及 $|t|<\delta$ 都有 $|f(x-t)-f(x)|<\varepsilon$，从而

$$
\sup_x|T_nf(x)-f(x)|
\le M\varepsilon+2\|f\|_\infty\eta_n(\delta)\longrightarrow M\varepsilon.
\qquad\text{(5)}
$$

这里箭头表示右端的极限。令 $\varepsilon\downarrow0$，得一致收敛。

**易错条件**　仅从 $\eta_n(\delta)\to0$ 不能推出它与任意无界 $L^1$ 函数相乘后的积分趋零；（4）正是补足这一点。第二问的 $f$ 有界，故不需要 $C_\delta$ 条件。核可变号，也不必为偶函数。

## 问题 B304

**原题号：** 习题 12.2.B 第 2 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　推广上一题的结果。

**基础知识**　$L^p$ 平移连续性、Minkowski 积分不等式及有界函数的连续点逼近。

**思路来源**　把点值误差换成平移差的范数；同时检查哪些核条件只为控制无界函数的点值而设。

**解**　给出两类推广及其边界。设周期核 $k_n\in L^1[-\pi,\pi]$ 满足

$$
m_n:=\int_{-\pi}^{\pi}k_n\longrightarrow1,\qquad
\sup_n\|k_n\|_1\le M,\qquad
\int_{|t|\ge\delta}|k_n(t)|\,dt\longrightarrow0
\quad(\delta>0).
\qquad\text{(6)}
$$

则对 $1\le p<\infty$ 和任意周期 $f\in L^p$，有 $\|f*k_n-f\|_p\to0$；对连续周期 $f$，有一致收敛；对有界周期 $f$，在每个连续点有逐点收敛。不再要求核属于 $L^\infty$，归一化也只需渐近成立。

事实上，记 $\tau_tf(x)=f(x-t)$，则 Minkowski 不等式给出

$$
\|f*k_n-f\|_p
\le\int_{-\pi}^{\pi}|k_n(t)|\,\|\tau_tf-f\|_p\,dt
+|m_n-1|\,\|f\|_p.
\qquad\text{(7)}
$$

这里卷积按几乎处处存在的 $L^p$ 函数理解。平移在 $L^p$ 中连续：给定 $\varepsilon>0$，由连续周期函数在 $L^p$ 中稠密，选 $h$ 使 $\|f-h\|_p<\varepsilon$，便有

$$
\|\tau_tf-f\|_p\le2\varepsilon+\|\tau_th-h\|_p\longrightarrow2\varepsilon.
\qquad\text{(8)}
$$

所用稠密性也可由阶梯函数逼近，再把各跳点附近改成短直线段得到。将（7）在 $|t|<\delta$ 与其补集上拆开，近处用平移连续性，远处用 $\|\tau_tf-f\|_p\le2\|f\|_p$，便得结论。连续函数的一致收敛和有界函数的连续点收敛，同理由（5）的估计加上归一化误差得到。特别地，$p=2$ 给出均方收敛；它本身不推出每点收敛或一致收敛。

不能将这一结论无条件推广到所有 $L^\infty$ 函数的范数收敛。取 $k_n=(n/2)\mathbf1_{[-1/n,1/n]}$ 并周期延拓，$f=\mathbf1_{(0,\pi)}$ 周期延拓。当 $0<x<1/n$ 时，

$$
(f*k_n)(x)=\frac{1+nx}{2},\qquad
|f(x)-(f*k_n)(x)|=\frac{1-nx}{2}.
\qquad\text{(9)}
$$

故 $\|f*k_n-f\|_\infty\ge1/2$，没有范数收敛。

对于无界 $L^1$ 函数的连续点，B303 的尾部一致有界也不可直接删除。取两两不交区间 $I_n\subset(1,2)$、$|I_n|=2^{-3n}$，令

$$
h(t)=\sum_{n=1}^{\infty}2^n\mathbf1_{I_n}(t),\qquad
f(y)=h(-y),\qquad
q_n(t)=(1-2^{-n})\frac n2\mathbf1_{[-1/n,1/n]}(t)
+2^{2n}\mathbf1_{I_n}(t),
\qquad\text{(10)}
$$

并都作周期延拓。$h\in L^1$，$f$ 在 $0$ 附近恒零，每个 $q_n\in L^\infty$，且 $q_n\ge0$、$\int q_n=1$。尾部质量至多为 $2^{-n}$（对固定 $\delta$ 及充分大的 $n$），符合（6）。然而

$$
(f*q_n)(0)=\int h(t)q_n(t)\,dt
=2^n2^{2n}|I_n|=1\ne f(0).
\qquad\text{(11)}
$$

这精确说明了上一题附加尾部条件的作用。本题为开放推广题；上述结论并不声称列尽所有可推广形式。

**易错条件**　$L^p$ 范数收敛、连续点逐点收敛、$L^\infty$ 范数收敛是不同断言，不能用同一个“逼近恒等”结论省略其适用对象。

## 问题 B305

**原题号：** 习题 12.2.B 第 3 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　计算 $I=\int_0^{\pi/2}x\ln(\sin x)\ln(\cos x)\,dx$。

**基础知识**　区间反射对称、余弦正交性、$L^2$ 收敛与内积连续性。

**思路来源**　先用 $x\mapsto\pi/2-x$ 去掉线性权，再以 Abel 因子把两个对数展开的乘积合法化。

**解**　令 $u(x)=\ln\sin x$、$v(x)=\ln\cos x$。二者均属 $L^2(0,\pi/2)$，因为端点奇性至多为对数，而 $\int_0^c|\ln t|^2dt<\infty$。因此 $uv\in L^1$。由 $u(\pi/2-x)v(\pi/2-x)=u(x)v(x)$，

$$
2I=\frac\pi2\int_0^{\pi/2}u(x)v(x)\,dx.
\qquad\text{(12)}
$$

对 $0<r<1$，由 $\log(1-z)=-\sum_{n\ge1}z^n/n$ 定义

$$
\begin{aligned}
u_r(x)&=-\ln2-\sum_{n=1}^{\infty}\frac{r^n}{n}\cos2nx
=\ln|1-re^{2ix}|-\ln2,\\
v_r(x)&=-\ln2-\sum_{n=1}^{\infty}\frac{(-1)^nr^n}{n}\cos2nx
=\ln|1+re^{2ix}|-\ln2.
\end{aligned}\qquad\text{(13)}
$$

固定 $r<1$ 时两级数绝对一致收敛。由余弦正交性及 $\sum n^{-2}<\infty$，$u_r,v_r$ 在 $r\uparrow1$ 时各自为 $L^2$ Cauchy 族；例如 $\|u_r-u_s\|_2^2=(\pi/4)\sum(r^n-s^n)^2/n^2\to0$。由（13）在开区间上的逐点极限，两个 $L^2$ 极限分别就是 $u,v$（取几乎处处收敛子列即可识别）。故内积连续，且

$$
\begin{aligned}
\int_0^{\pi/2}uv\,dx
&=\lim_{r\uparrow1}\left(\frac\pi2\ln^22+
\frac\pi4\sum_{n=1}^{\infty}\frac{(-1)^nr^{2n}}{n^2}\right)\\
&=\frac\pi2\ln^22-\frac{\pi^3}{48}.
\end{aligned}\qquad\text{(14)}
$$

最后用 $\sum_{n\ge1}(-1)^n/n^2=-\pi^2/12$。代回（12），得到

$$
\boxed{I=\frac{\pi^2}{8}\ln^22-\frac{\pi^4}{192}}.
\qquad\text{(15)}
$$

**易错条件**　端点处对数展开不一致收敛，不能直接把两个无穷级数相乘后逐项积分。（13）先在 $r<1$ 运算，再以 $L^2$ 内积连续性取极限，恰好提供所需交换依据。

## 问题 B306

**原题号：** 习题 12.2.B 第 4 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　考察 $f(x)=\sum_{n=2}^{\infty}\cos(nx)/\ln n$ 在 $[-\pi,\pi]$ 上的可积性。

**基础知识**　Dirichlet 判别法、凸系数列的二阶差分、Fejér 核和 Bessel 不等式。

**思路来源**　系数不可求和并不排除和函数可积。利用其凸性，把级数改写成非负 Fejér 核的可求和组合，从而控制绝对积分。

**解**　在 $x\ne0$ 时，$\sum_{n=p}^q\cos nx$ 的绝对值不超过 $1/|\sin(x/2)|$，而 $1/\ln n\downarrow0$，故原级数收敛，并在避开 $0$ 的紧集上一致收敛。$x=0$ 时正项级数发散到 $+\infty$。以下在 $0$ 任意补定义一个有限值，这不影响 Lebesgue 可积性或广义积分。

令 $a_n=1/\ln n$（$n\ge2$），并取 $a_1=2a_2-a_3$、$a_0=2a_1-a_2$。记

$$
d_n=a_n-a_{n+1},\qquad c_n=d_n-d_{n+1}=a_n-2a_{n+1}+a_{n+2}.
\qquad\text{(16)}
$$

函数 $a(t)=1/\ln t$ 在 $t>1$ 递减且严格凸，因为

$$
a''(t)=\frac1{t^2(\ln t)^2}+\frac2{t^2(\ln t)^3}>0.
\qquad\text{(17)}
$$

所以 $c_0=c_1=0$，$c_n>0$（$n\ge2$），且 $d_n=O(1/(n\ln^2n))$。对 $N\ge j\ge0$，直接望远镜求和得

$$
\sum_{n=j}^{N}(n+1-j)c_n
=a_j-a_{N+1}-(N+1-j)d_{N+1}\longrightarrow a_j.
\qquad\text{(18)}
$$

引入积分为 $2\pi$ 的 Fejér 核

$$
F_n(x)=\frac1{n+1}\left|\sum_{k=0}^ne^{ikx}\right|^2
=1+2\sum_{j=1}^n\left(1-\frac j{n+1}\right)\cos jx.
\qquad\text{(19)}
$$

令 $H=\sum_{n\ge0}(n+1)c_nF_n$。各项非负，由 Tonelli 定理与（18），

$$
\int_{-\pi}^{\pi}H(x)\,dx
=2\pi\sum_{n=0}^{\infty}(n+1)c_n=2\pi a_0<\infty.
\qquad\text{(20)}
$$

因此该级数在 $L^1$ 中收敛，$H\in L^1$。对 $x\ne0$，有 $F_n(x)\le1/((n+1)\sin^2(x/2))$，又 $\sum c_n=d_0<\infty$，故 $H$ 在避开 $0$ 的紧集上连续。

仍须把 $H$ 与原级数联系起来。由 $L^1$ 收敛、（19）与（18），$H$ 的常数项为 $a_0$，第 $j\ge1$ 个余弦系数为 $2a_j$，正弦系数为零。其 Fejér 平均在每个 $x\ne0$ 收敛到 $H(x)$：用核 $F_N/(2\pi)$ 应用 B303，注意该核非负、积分为 $1$，在 $|t|\ge\delta$ 上不超过 $1/(2\pi(N+1)\sin^2(\delta/2))$。另一方面，$a_0+2\sum_{j\ge1}a_j\cos jx$ 在 $x\ne0$ 普通收敛，所以其 Cesàro 平均也趋于该和。故

$$
f(x)=\frac{H(x)-a_0}{2}-a_1\cos x\quad(x\ne0),
\qquad f\in L^1[-\pi,\pi].
\qquad\text{(21)}
$$

它并非有界函数。事实上，（17）给出
$c_n=\int_0^1\int_0^1a''(n+s+t)\,ds\,dt\ge1/((n+2)^2\ln^2(n+2))$（$n\ge2$），于是

$$
\sum_{n=0}^{\infty}(n+1)c_nF_n(0)
=\sum_{n=0}^{\infty}(n+1)^2c_n=\infty.
\qquad\text{(22)}
$$

非负性和有限部分和的连续性说明 $H(x)\to+\infty$（$x\to0$）：给定任意大常数，先选在零点超过它的有限部分和，再取足够小的邻域。因此 $f(x)\to+\infty$，不可能在闭区间上通常 Riemann 可积；但由于 $f$ 在零点外连续且 $\int|f|<\infty$，以零点为奇点的广义 Riemann 积分绝对收敛。

此外，（21）的 $L^1$ Fourier 系数正是原给系数，故 $\int_{-\pi}^{\pi}f=0$。若 $f\in L^2$，Bessel 不等式会给出 $\sum_{n\ge2}(\ln n)^{-2}<\infty$，矛盾。因此 $f\notin L^2$。

**易错条件**　原式在零点不定义有限函数，须说明补定义；“不平方可积”不等于“不 Lebesgue 可积”。（20）的求和积分交换依据是非负性，提取 Fourier 系数则依据 $L^1$ 收敛，不能混用。

## 问题 B307

**原题号：** 习题 12.2.B 第 5 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　设 $0<\alpha<1$，考察 $f(x)=\sum_{n\ge1}\sin(nx)/n^\alpha$ 和 $g(x)=\sum_{n\ge1}\cos(nx)/n^\alpha$ 当 $x\to0^+$ 时的阶。

**基础知识**　Abel 求和、奇异端点的 Riemann 和、振荡积分与 Gamma 积分。

**思路来源**　相位 $nx$ 表明有效分界在 $n\asymp1/x$。缩放 $t=nx$ 后，既要控制原点附近的奇性，也要统一控制无穷远振荡尾部。

**解**　对 $0<x<2\pi$，两级数由 Dirichlet 判别法收敛。令

$$
S_\alpha(x)=g(x)+if(x)=\sum_{n=1}^{\infty}\frac{e^{inx}}{n^\alpha},
\qquad
x^{1-\alpha}S_\alpha(x)=x\sum_{n=1}^{\infty}(nx)^{-\alpha}e^{inx}.
\qquad\text{(23)}
$$

我们证明右端趋于 $\int_0^\infty t^{-\alpha}e^{it}dt$。固定 $0<\delta<A$，在 $\delta\le nx\le A$ 上它是通常 Riemann 和，因而趋于该有限区间积分。在 $nx<\delta$ 上，

$$
x\sum_{1\le n<\delta/x}(nx)^{-\alpha}
\le\frac{\delta^{1-\alpha}}{1-\alpha};
\qquad
\int_0^\delta t^{-\alpha}dt=\frac{\delta^{1-\alpha}}{1-\alpha}.
\qquad\text{(24)}
$$

为估计远端，由有限等比和及 Abel 求和，存在只依赖 $\alpha$ 的常数 $C$，使 $0<x\le1$ 时

$$
\left|\sum_{n=m}^{\infty}\frac{e^{inx}}{n^\alpha}\right|
\le\frac{C m^{-\alpha}}{x}.
\qquad\text{(25)}
$$

具体地，$|\sum_{n=m}^ke^{inx}|\le1/|\sin(x/2)|\le\pi/x$；对递减权重求和分部即可得到（25）。取 $m=\lfloor A/x\rfloor+1$，乘以 $x^{1-\alpha}$ 后，尾部不超过 $CA^{-\alpha}$。同样，对积分求分部给出 $|\int_A^\infty t^{-\alpha}e^{it}dt|\le CA^{-\alpha}$。故先令 $x\downarrow0$，再令 $\delta\downarrow0$、$A\to\infty$，得到

$$
\lim_{x\downarrow0}x^{1-\alpha}S_\alpha(x)
=\int_0^\infty t^{-\alpha}e^{it}\,dt.
\qquad\text{(26)}
$$

为计算该振荡积分，置 $\beta=1-\alpha\in(0,1)$。对 $\varepsilon>0$，Gamma 积分的 Laplace 形式给出

$$
\int_0^\infty t^{\beta-1}e^{-(\varepsilon-i)t}\,dt
=\Gamma(\beta)(\varepsilon-i)^{-\beta}.
\qquad\text{(27)}
$$

此式先对正实参数由换元成立，再由右半平面内的全纯性与恒等定理推广；幂取该半平面的主值。由于 $t^{-\alpha}e^{-\varepsilon t}$ 随 $t$ 递减，Dirichlet 估计将从 $A$ 开始的尾部统一控制为 $CA^{-\alpha}$，而有限区间可用控制收敛。因此令 $\varepsilon\downarrow0$ 合法，所得积分为 $\Gamma(1-\alpha)e^{i\pi(1-\alpha)/2}$。取虚部、实部，得精确渐近

$$
\begin{aligned}
f(x)&\sim\Gamma(1-\alpha)\cos\frac{\pi\alpha}{2}\,x^{\alpha-1},\\
g(x)&\sim\Gamma(1-\alpha)\sin\frac{\pi\alpha}{2}\,x^{\alpha-1}
\qquad(x\to0^+).
\end{aligned}\qquad\text{(28)}
$$

两个常数均严格为正，所以两函数都趋于 $+\infty$，阶均为 $x^{\alpha-1}$。

**易错条件**　无穷区间 Riemann 和不能只凭形式缩放取极限；（24）与（25）分别控制两端。$\alpha=0,1$ 不在本结论中，不能直接把端点代入渐近常数。

## 问题 B308

**原题号：** 习题 12.2.B 第 6 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　设连续 $2\pi$ 周期函数 $f$ 的 Fourier 级数为 $\sum_{n\ge1}(a_n\cos nx+b_n\sin nx)$。问 $\sum_{n\ge1}(b_n\cos nx-a_n\sin nx)$ 是否一定是某个连续 $2\pi$ 周期函数 $g$ 的 Fourier 级数？

**基础知识**　一致收敛下逐项积分、Fejér 平均的正性及其连续函数一致逼近性质。

**思路来源**　选择正弦系数，使 $nb_n\to0$ 保证原正弦级数连续，同时让 $\sum b_n=\infty$ 迫使共轭级数的零点 Fejér 平均发散。

**解**　不一定。取

$$
b_n=\frac1{n\ln(n+1)},\qquad a_n=0,\qquad
f(x)=\sum_{n=1}^{\infty}b_n\sin nx.
\qquad\text{(29)}
$$

$b_n$ 单调下降且 $nb_n\to0$。由下一题 B309 的独立证明，该级数在 $[-\pi,\pi]$ 上一致收敛；各部分和周期且在 $\pm\pi$ 取零，故和函数为连续周期函数。逐项积分与三角正交性说明它的 Fourier 系数确为（29），且均值为零。

假设存在连续周期 $g$，其 Fourier 级数为 $\sum b_n\cos nx$。则 $g$ 在 $0$ 的 Fejér 平均为

$$
\sigma_N(g;0)=\sum_{n=1}^{N}\left(1-\frac n{N+1}\right)b_n
\ge\frac12\sum_{n=1}^{\lfloor(N+1)/2\rfloor}\frac1{n\ln(n+1)}\longrightarrow\infty.
\qquad\text{(30)}
$$

最后的发散由积分判别法可得。但 $\sigma_N(g)=g*(F_N/(2\pi))$，Fejér 核非负、质量为 $1$，所以 $|\sigma_N(g;0)|\le\|g\|_\infty$，矛盾。即使允许给 $g$ 加任意常数，同样不可能。事实上该反例排除了所有有界 $g$。

**易错条件**　仅指出共轭级数在 $0$ 普通发散还不够，因为连续函数的 Fourier 级数也可能在某点发散；必须使用始终受控的 Fejér 平均。这里证明的是“不一定连续”，并未否定存在 $L^2$ 共轭函数。

## 问题 B309

**原题号：** 习题 12.2.B 第 7 题。[原题，PDF 第 42 页（印刷第 40 页）](/files/problems/楼分析习题-v2.pdf#page=42)

**题目**　设 $\{b_n\}$ 为单调下降的正数列。证明 $\sum_{n\ge1}b_n\sin nx$ 在 $[-\pi,\pi]$ 上一致收敛的充要条件为 $nb_n\to0$。

**基础知识**　一致 Cauchy 准则、有限正弦和、Abel 求和。

**思路来源**　必要性选择 $x\asymp1/n$，使一整段正弦同号且远离零；充分性则按 $nx\le1$ 与 $nx>1$ 分开，小相位用 $|\sin nx|\le nx$，大相位用振荡抵消。

**证明**　先证必要性。若级数一致收敛，取 $x_m=\pi/(4m)$。对 $m\le n\le2m$，有 $\pi/4\le nx_m\le\pi/2$，故

$$
\sup_x\left|\sum_{n=m}^{2m}b_n\sin nx\right|
\ge\frac1{\sqrt2}\sum_{n=m}^{2m}b_n
\ge\frac{m+1}{\sqrt2}\,b_{2m}\longrightarrow0.
\qquad\text{(31)}
$$

从而 $mb_{2m}\to0$，偶数下标满足要求；又 $(2m+1)b_{2m+1}\le(2m+1)b_{2m}$，故全部下标均有 $nb_n\to0$。

再证充分性。置 $\varepsilon_p=\sup_{n\ge p}nb_n\to0$，只需对任意 $q\ge p$ 证明尾和一致小。由奇性只考虑 $0<x\le\pi$；$x=0$ 时尾和为零。令 $K=\lfloor1/x\rfloor$。对于 $p\le n\le\min(q,K)$，

$$
\left|\sum_{n=p}^{\min(q,K)}b_n\sin nx\right|
\le x\sum_{n=p}^{\min(q,K)}nb_n
\le xK\varepsilon_p\le\varepsilon_p,
\qquad\text{(32)}
$$

空和按零处理。剩余区间从 $r=\max(p,K+1)$ 开始。若 $r\le q$，记 $A_j=\sum_{n=r}^j\sin nx$；有限等比和给出 $|A_j|\le1/\sin(x/2)\le\pi/x$。Abel 求和及单调性给出

$$
\begin{aligned}
\left|\sum_{n=r}^q b_n\sin nx\right|
&=\left|b_qA_q+\sum_{n=r}^{q-1}(b_n-b_{n+1})A_n\right|\\
&\le\frac{\pi b_r}{x}
\le\frac{\pi\varepsilon_p}{rx}
\le\pi\varepsilon_p.
\end{aligned}\qquad\text{(33)}
$$

最后用 $r\ge K+1>1/x$。于是所有 $q\ge p$ 都满足

$$
\sup_{x\in[-\pi,\pi]}
\left|\sum_{n=p}^q b_n\sin nx\right|
\le(1+\pi)\varepsilon_p\longrightarrow0.
\qquad\text{(34)}
$$

由一致 Cauchy 准则，级数一致收敛。必要性和充分性均证毕。

**易错条件**　必要性必须利用单调性把一段和压到末项；充分性必须保留 $x\to0$ 时的统一控制。仅对每个固定非零 $x$ 使用 Dirichlet 判别法，只能得到逐点收敛。

## 七题方法总结

- **B303：局部误差与远端截断。** 连续性控制近处，核的尾部一致有界控制无界可积函数的截断余项。
- **B304：先明确收敛的范数。** 用平移连续性统一证明 $1\le p<\infty$ 的逼近；用跳跃函数和远端尖峰检验不能删去的条件。
- **B305：对称性先降阶，正交性再计算。** 反射去掉线性权；Abel 因子与 $L^2$ 内积连续性使级数乘积合法。
- **B306：凸系数转成正核组合。** 二阶差分非负，把绝对可积性化为非负权重可求和；可积性与平方可积性分别判断。
- **B307：缩放后同时控制两端。** 有限区间 Riemann 和只解决中段，原点与振荡尾部必须各有统一估计。
- **B308：用受控求和方式构造反例。** 普通 Fourier 部分和可能发散，Fejér 平均仍受函数上界约束。
- **B309：在临界尺度处分段。** 以 $n\asymp1/x$ 区分小相位和振荡区，得到可直接复用的统一尾界（34）。

本批七题全部完成。两册累计 **304 道已作答、5 道暂跳过**；上册 175 道、下册 129 道。五道待核 B116、B148、B180、B247、B261 保持原状态。第十二章已完成 12.1.B 两题、12.2.B 七题；下一题为 **B310＝12.2.B 第 8 题**，需要先核对原书方程（12.2.47）及公式（12.2.48）—（12.2.49）。
