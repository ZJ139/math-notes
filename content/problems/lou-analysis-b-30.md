---
title: "楼红卫《数学分析》B 组习题解答（三十）：可测性、光滑截断与正算子逼近"
description: "B205—B211：由三角逼近到代数逼近、高维光滑截断、可测加性函数与中点凸函数、Bernstein 多项式及 Korovkin 定理。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "光滑逼近", "可测性", "Bernstein", "Korovkin", "B205-B211"]
created_at: "2026-11-10"
updated_at: "2026-11-10"
---

本批接续 B204，按下册原题顺序完成 **B205—B211** 七题，即 **8.7.B 第 2—8 题**。原题见题册 PDF 第 11—12 页（印刷第 9—10 页）；七题均无星号，B209 包含两个小问。B211 保留原题文字，并明确说明题号与算子记号的笔误。

本批完成后，两册累计 **208 道已作答、3 道暂跳过**；上册完成 **175 题**，下册完成 **33 题**。B116、B148、B180 继续保留原有待核说明，不计入完成数。至此 8.7.B 八题全部完成。

[下册资料页](/problems/149ff60b32b01ff69feab8a4/) · [下册原题 PDF 第 11 页](/files/problems/楼分析习题-v2.pdf#page=11) · [第 12 页](/files/problems/楼分析习题-v2.pdf#page=12)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [上一批 B198—B204](/problems/7eefe730d0abc9edb8bf7c08/)

## 题号导航

- [问题 B205：由三角多项式逼近到代数多项式逼近（8.7.B-2）](#问题-b205)
- [问题 B206：高维光滑截断及梯度估计（8.7.B-3）](#问题-b206)
- [问题 B207：可测加性函数必为线性函数（8.7.B-4）](#问题-b207)
- [问题 B208：可测中点凸函数必为凸函数（8.7.B-5）](#问题-b208)
- [问题 B209：Bernstein 多项式的二阶矩与一致逼近（8.7.B-6）](#问题-b209)
- [问题 B210：正线性算子的 Korovkin 定理（8.7.B-7）](#问题-b210)
- [问题 B211：Bernstein 算子的三个检验函数（8.7.B-8）](#问题-b211)
- [七题方法总结](#七题方法总结)

## 问题 B205

**原题号：** 习题 8.7.B 第 2 题（下册）。[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)

**题目：** 试利用 Weierstrass 第二逼近定理证明 Weierstrass 第一逼近定理。

**证明：** 第二逼近定理指连续周期函数可以由三角多项式一致逼近；要推出的第一逼近定理是：对任意 $f\in C[a,b]$ 和 $\varepsilon>0$，存在代数多项式 $P$ 满足 $\max_{[a,b]}|f-P|<\varepsilon$。以下先讨论实值函数和 $a<b$。

令 $c=(a+b)/2$、$d=(b-a)/2$，构造

$$
F(\theta)=f(c+d\cos\theta),\qquad \theta\in\mathbb R.
$$

$F$ 连续、偶且以 $2\pi$ 为周期。由第二逼近定理，存在实三角多项式 $T$ 使 $\sup_{\mathbb R}|F-T|<\varepsilon$。取偶部

$$
S(\theta)=\frac{T(\theta)+T(-\theta)}2
=A_0+\sum_{k=1}^{N}A_k\cos(k\theta).
$$

由于 $F(-\theta)=F(\theta)$，有

$$
|S(\theta)-F(\theta)|
\le\frac{|T(\theta)-F(\theta)|+|T(-\theta)-F(-\theta)|}{2}
<\varepsilon.
$$

定义代数多项式 $C_0(t)=1$、$C_1(t)=t$，并递推

$$
C_{k+1}(t)=2tC_k(t)-C_{k-1}(t).
$$

由余弦和差公式归纳得到 $C_k(\cos\theta)=\cos(k\theta)$。因此

$$
P(x)=A_0+\sum_{k=1}^{N}A_kC_k\!\left(\frac{x-c}{d}\right)
$$

是关于 $x$ 的代数多项式。任取 $x\in[a,b]$，令 $\theta=\arccos((x-c)/d)$，便有 $P(x)=S(\theta)$、$f(x)=F(\theta)$，从而

$$
\max_{x\in[a,b]}|P(x)-f(x)|<\varepsilon.
$$

取误差依次小于 $1/n$ 即得所需序列。若 $a=b$，取常数多项式即可；复值函数分别逼近实部、虚部即可。

**方法总结：** 把区间函数与余弦复合成偶周期函数，三角逼近后取偶部消去正弦项，再用余弦递推把每一项精确写成代数多项式。这里仅作有限代数变换，不额外调用 Taylor 展开或另一种逼近定理。

[返回题号导航](#题号导航)

## 问题 B206

**原题号：** 习题 8.7.B 第 3 题（下册）。[原题 PDF 第 11 页（印刷第 9 页）](/files/problems/楼分析习题-v2.pdf#page=11)

**题目：** 将习题 8.7.A 中第 2 题推广到高维情形：设 $D\subset\mathbb R^n$ 为有界区域。对于 $\delta>0$，取区域 $\Omega$ 使得 $D\Subset\Omega$，$\inf_{x\in D,y\in\partial\Omega}|x-y|\ge\delta$。证明：存在 $\varphi\in C_c^\infty(\Omega)$，满足 $0\le\varphi\le1$、$\varphi|_D\equiv1$ 以及 $|\nabla\varphi|\le M/\delta$，其中 $M$ 是与 $\delta$ 无关的一个常数。

**证明：** 记 $D_r=\{x:\operatorname{dist}(x,D)<r\}$。固定非负函数 $\eta\in C_c^\infty(\mathbb R^n)$，使其支集包含于闭单位球且 $\int_{\mathbb R^n}\eta=1$。这样的函数可由

$$
\eta(x)=
\begin{cases}
C\exp\!\left(-\dfrac1{1-|x|^2}\right),&|x|<1,\\
0,&|x|\ge1
\end{cases}
$$

归一化得到；边界处各阶导数均趋于零。令 $r=\delta/3$、$\eta_r(x)=r^{-n}\eta(x/r)$，取

$$
\varphi(x)=(\mathbf1_{D_r}*\eta_r)(x)
=\int_{D_r}\eta_r(x-y)\,dy.
$$

$D_r$ 有界可测，核函数光滑且各阶导数有界，故可在积分号下任意次求导，$\varphi\in C^\infty(\mathbb R^n)$。核非负、积分为一，直接给出 $0\le\varphi\le1$。

若 $x\in D$，则对所有 $|z|<r$，有 $\operatorname{dist}(x-z,D)\le|z|<r$。因而

$$
\varphi(x)=\int_{\mathbb R^n}\mathbf1_{D_r}(x-z)\eta_r(z)\,dz
=\int_{\mathbb R^n}\eta_r(z)\,dz=1.
$$

若 $\varphi(x)\ne0$，则存在 $y\in D_r$ 使 $|x-y|<r$，于是 $\operatorname{dist}(x,D)<2r$。取闭包得到

$$
\operatorname{supp}\varphi
\subset\{x:\operatorname{dist}(x,D)\le2r\}.
$$

右端是有界闭集，且包含于 $\Omega$。事实上，任何 $z\notin\Omega$ 与 $y\in D$ 的连线必先经过 $\partial\Omega$，故 $|z-y|\ge\delta$，从而 $\operatorname{dist}(z,D)\ge\delta>2r$。若 $\Omega=\mathbb R^n$，包含关系自然成立。因此 $\varphi$ 的支集是 $\Omega$ 内的紧集。

最后，由卷积求导及变量代换，

$$
\begin{aligned}
|\nabla\varphi(x)|
&\le\int_{D_r}|\nabla\eta_r(x-y)|\,dy\\
&\le\int_{\mathbb R^n}|\nabla\eta_r(z)|\,dz
=\frac1r\int_{\mathbb R^n}|\nabla\eta(u)|\,du
=\frac M\delta,
\end{aligned}
$$

其中 $M=3\int_{\mathbb R^n}|\nabla\eta|$ 只依赖于维数及预先固定的核，不依赖于 $D$、$\Omega$ 或 $\delta$。

**方法总结：** 先把区域扩大一个小尺度，再把其示性函数与同尺度的光滑核卷积。扩大区域保证函数在原区域恒等于一；两倍尺度控制支集；核的一阶导数的积分范数产生 $\delta^{-1}$。不要求区域凸或边界光滑。

[返回题号导航](#题号导航)

## 问题 B207

**原题号：** 习题 8.7.B 第 4 题（下册）。[原题 PDF 第 12 页（印刷第 10 页）](/files/problems/楼分析习题-v2.pdf#page=12)

**题目：** 设 $\mathbb R$ 上可测实函数 $f$ 满足 $f(x+y)=f(x)+f(y)$。证明：存在常数 $c$ 使得 $f(x)=cx$（$\forall x\in\mathbb R$）。

**原题提示：** 存在闭集 $E\subset[0,1]$，使得 $|E|>3/4$ 且 $f$ 限制在 $E$ 上连续。证明：$(-1/2,1/2)\subset E-E$。

**证明：** 下面先证明提示中的差集结论，再直接由可测性构造所需的有界集；这样只需在该集上有界，无须预先取得其上的连续性。下文 $|E|$ 表示 Lebesgue 测度。

若可测集 $E\subset[0,1]$ 满足 $|E|>3/4$，则对 $|h|<1/2$，$E$ 与 $E+h$ 都包含于长度为 $1+|h|$ 的区间。因此

$$
\begin{aligned}
|E\cap(E+h)|
&=|E|+|E+h|-|E\cup(E+h)|\\
&\ge2|E|-(1+|h|)>0.
\end{aligned}
$$

取交集中的点 $u=v+h$，其中 $u,v\in E$，即得 $h=u-v\in E-E$。这也证明了原提示对闭集的断言。

因为 $f$ 处处取有限实值，可测集

$$
E_N=\{x\in[0,1]:|f(x)|\le N\},\qquad N=1,2,\ldots
$$

递增且并集为 $[0,1]$，所以 $|E_N|\to1$。取 $N$ 使 $|E_N|>3/4$。加性先给出 $f(0)=0$、$f(-x)=-f(x)$；再由上述差集结论，对 $|h|<1/2$ 可写 $h=u-v$，其中 $u,v\in E_N$，故

$$
|f(h)|=|f(u)-f(v)|\le2N.
$$

这个局部有界性足以推出连续。任给 $\varepsilon>0$，取正整数 $k$ 使 $2N/k<\varepsilon$。若 $|h|<1/(2k)$，则

$$
|f(h)|=\frac{|f(kh)|}{k}\le\frac{2N}{k}<\varepsilon.
$$

所以 $f$ 在零点连续；由 $f(x+h)-f(x)=f(h)$，它处处连续。令 $c=f(1)$，加性给出 $f(q)=cq$（$q\in\mathbb Q$）。对任意实数 $x$ 取有理数列 $q_j\to x$，即得

$$
f(x)=\lim_{j\to\infty}f(q_j)=\lim_{j\to\infty}cq_j=cx.
$$

若沿用原提示，由 Lusin 定理取闭集 $E$，再由紧性知 $f|_E$ 有界，后面的差集与连续性论证完全相同。上述水平集证明则连这一额外定理也不需要。

**方法总结：** 可测性给出一个测度足够大的有界水平集；平移后的两集必相交，使差集覆盖零点邻域。加性把集合上的有界性传到邻域，再用整数放大把有界性改进为连续性。

[返回题号导航](#题号导航)

## 问题 B208

**原题号：** 习题 8.7.B 第 5 题（下册）。[原题 PDF 第 12 页（印刷第 10 页）](/files/problems/楼分析习题-v2.pdf#page=12)

**题目：** 设 $\mathbb R$ 上可测实函数 $f$ 中点凸。证明：$f$ 是凸函数。

**证明：** 中点凸指

$$
f\!\left(\frac{x+y}{2}\right)\le\frac{f(x)+f(y)}2,
\qquad x,y\in\mathbb R.
$$

反复应用该不等式，可归纳得到：当 $\lambda=m/2^k$（$0\le m\le2^k$）时，

$$
f((1-\lambda)x+\lambda y)
\le(1-\lambda)f(x)+\lambda f(y).
$$

具体地，分母从 $2^k$ 增至 $2^{k+1}$ 时，偶数分子沿用已有结论，奇数分子对应相邻两个旧分点的中点。要使 $\lambda$ 取任意实数，尚须证明连续性，不能直接对左端取极限。

固定任意 $x_0\in\mathbb R$。因为 $f$ 可测且有限，存在正整数 $N$，使

$$
E=\{x\in[x_0-1,x_0+1]:|f(x)|\le N\}
\quad\text{满足}\quad |E|>\frac32.
$$

当 $|h|<1/2$ 时，$E$ 和 $2(x_0+h)-E$ 所在的两个长度为 $2$ 的区间，其并集长度为 $2+2|h|$。因此

$$
|E\cap(2(x_0+h)-E)|
\ge2|E|-(2+2|h|)>0.
$$

于是存在 $u,v\in E$ 使 $u+v=2(x_0+h)$，中点凸性给出

$$
f(x_0+h)\le\frac{f(u)+f(v)}2\le N,
\qquad |h|<\frac12.
$$

特别地 $f(x_0)\le N$。令 $g(h)=f(x_0+h)-f(x_0)$、$A=N-f(x_0)\ge0$。上式给出 $g(h)\le A$；又由 $x_0$ 是 $x_0+h$、$x_0-h$ 的中点，得到

$$
g(h)+g(-h)\ge0.
$$

从而 $|g(h)|\le A$（$|h|<1/2$）。对于任意正整数 $k$，当 $|h|<2^{-k-1}$ 时，利用已经证明的二进有理权重不等式及 $g(0)=0$，有

$$
g(h)\le2^{-k}g(2^kh)\le2^{-k}A.
$$

将 $h$ 换成 $-h$ 并结合 $g(h)\ge-g(-h)$，便得

$$
|g(h)|\le2^{-k}A,\qquad |h|<2^{-k-1}.
$$

先使 $k$ 足够大，再令 $h\to0$，可知 $f$ 在 $x_0$ 连续。$x_0$ 任意，所以 $f$ 在全实轴连续。

最后，对任意 $\lambda\in[0,1]$，取二进有理数列 $\lambda_j\to\lambda$，在相应不等式中取极限，得到

$$
f((1-\lambda)x+\lambda y)
\le(1-\lambda)f(x)+\lambda f(y).
$$

这正是凸性。

**方法总结：** 中点凸性先给出二进有理权重；可测水平集与其反射的交集给出每点附近的上界；反射不等式补出下界，二进缩放再推出连续性。必须完成连续性这一步，才可把有理权重扩展到所有权重。

[返回题号导航](#题号导航)

## 问题 B209

**原题号：** 习题 8.7.B 第 6 题（下册）。[原题 PDF 第 12 页（印刷第 10 页）](/files/problems/楼分析习题-v2.pdf#page=12)

**题目：** 在 Weierstrass 逼近定理的证明中，一个重要思想是利用 Bernstein（伯恩斯坦）多项式。设 $f$ 是 $[0,1]$ 上的函数，其 Bernstein 多项式定义为

$$
B_n(f;x)=\sum_{k=0}^{n}\binom nk f\!\left(\frac kn\right)x^k(1-x)^{n-k},
\qquad x\in[0,1],\quad n\ge1.
$$

试证明：

（i）对任何 $x\in[0,1]$，有

$$
\sum_{k=0}^{n}\binom nk(k-nx)^2x^k(1-x)^{n-k}=nx(1-x).
$$

（ii）设 $f\in C[0,1]$，证明 $\{B_n(f;x)\}$ 在 $[0,1]$ 上一致收敛到 $f(x)$。

**证明：** 记 $p_{n,k}(x)=\binom nkx^k(1-x)^{n-k}$。端点处按多项式的值理解零次幂，故 $p_{n,0}(0)=p_{n,n}(1)=1$。由二项式定理，

$$
\sum_{k=0}^{n}p_{n,k}(x)=1.
$$

利用 $k\binom nk=n\binom{n-1}{k-1}$，可得

$$
\begin{aligned}
\sum_{k=0}^{n}k p_{n,k}(x)
&=nx\sum_{j=0}^{n-1}\binom{n-1}{j}x^j(1-x)^{n-1-j}\\
&=nx.
\end{aligned}
$$

同理，当 $n\ge2$ 时，利用 $k(k-1)\binom nk=n(n-1)\binom{n-2}{k-2}$，得到

$$
\sum_{k=0}^{n}k(k-1)p_{n,k}(x)=n(n-1)x^2.
$$

$n=1$ 时该等式两边均为零，仍然成立。因此

$$
\begin{aligned}
\sum_{k=0}^{n}(k-nx)^2p_{n,k}(x)
&=n(n-1)x^2+nx-2nx\cdot nx+n^2x^2\\
&=nx(1-x),
\end{aligned}
$$

证明了（i）。以上均为多项式恒等式，没有除以 $x$ 或 $1-x$，故包含两个端点。

为证（ii），令 $M=\max_{[0,1]}|f|$。任给 $\varepsilon>0$，由一致连续性，存在 $\delta>0$，使 $|u-v|<\delta$ 时 $|f(u)-f(v)|<\varepsilon$。非负权重之和为一，故

$$
|B_n(f;x)-f(x)|
\le\sum_{k=0}^{n}p_{n,k}(x)\left|f\!\left(\frac kn\right)-f(x)\right|.
$$

按 $|k/n-x|<\delta$ 与 $|k/n-x|\ge\delta$ 分为两部分。近处的和不超过 $\varepsilon$；远处用 $2M$ 控制函数差，再由（i）得到

$$
\begin{aligned}
\sum_{|k/n-x|\ge\delta}p_{n,k}(x)
&\le\frac1{\delta^2}\sum_{k=0}^{n}\left(\frac kn-x\right)^2p_{n,k}(x)\\
&=\frac{x(1-x)}{n\delta^2}\le\frac1{4n\delta^2}.
\end{aligned}
$$

于是对所有 $x\in[0,1]$ 同时成立

$$
|B_n(f;x)-f(x)|\le\varepsilon+\frac{M}{2n\delta^2}.
$$

先令 $n\to\infty$，再令任意的 $\varepsilon\downarrow0$，即得 $\|B_n(f;\cdot)-f\|_\infty\to0$。这也是一个不依赖 Weierstrass 定理的构造性证明。

**方法总结：** 非负权重的总质量为一、均值为 $x$、中心二阶矩为 $x(1-x)/n$。近处用一致连续性，远处用二阶矩控制权重；二阶矩的上界与 $x$ 无关，保证所得收敛是一致收敛。

[返回题号导航](#题号导航)

## 问题 B210

**原题号：** 习题 8.7.B 第 7 题（下册）。[原题 PDF 第 12 页（印刷第 10 页）](/files/problems/楼分析习题-v2.pdf#page=12)

**题目：** 设 $T:C[a,b]\to C[a,b]$ 是线性算子，若对任何非负的 $f\in C[a,b]$，都有 $Tf$ 非负，则称 $T$ 是正线性算子。试证明如下的 Korovkin（科罗夫金）定理：设 $\{T_n\}$ 是 $C[a,b]\to C[a,b]$ 的一列正线性算子，若对于 $f(x)=1,x,x^2$，$\{T_nf\}$ 均在 $[a,b]$ 上一致收敛于 $f$，则对任何 $f\in C[a,b]$，$\{T_nf\}$ 在 $[a,b]$ 上一致收敛于 $f$。

**证明：** 按通常约定讨论实值连续函数，记 $e_0(t)=1$、$e_1(t)=t$、$e_2(t)=t^2$。正性和线性意味着保序：$u\le v$ 时 $T_nu\le T_nv$。由 $-|u|\le u\le|u|$，又得

$$
|T_nu|\le T_n|u|,\qquad
\|T_nu\|_\infty\le\|u\|_\infty\|T_ne_0\|_\infty.
$$

因此无需另加算子有界的假设；题设还给出 $\|T_ne_0\|_\infty\to1$。

固定 $f\in C[a,b]$，令 $M=\|f\|_\infty$。任给 $\varepsilon>0$，由一致连续性可取 $\delta>0$，使 $|t-x|<\delta$ 时 $|f(t)-f(x)|<\varepsilon$。近处用此估计，远处用 $|f(t)-f(x)|\le2M$，便得到统一的函数不等式

$$
|f(t)-f(x)|\le\varepsilon+\frac{2M}{\delta^2}(t-x)^2,
\qquad t,x\in[a,b].
$$

这里先固定 $x$，把 $t$ 看作算子的自变量。定义

$$
q_{n,x}(x)=\bigl(T_n[(e_1-xe_0)^2]\bigr)(x)\ge0.
$$

由线性展开，

$$
\begin{aligned}
q_{n,x}(x)
&=(T_ne_2)(x)-2x(T_ne_1)(x)+x^2(T_ne_0)(x)\\
&=[(T_ne_2)(x)-x^2]-2x[(T_ne_1)(x)-x]
+x^2[(T_ne_0)(x)-1].
\end{aligned}
$$

设 $R=\max\{|a|,|b|\}$，则

$$
0\le\sup_{x\in[a,b]}q_{n,x}(x)
\le\|T_ne_2-e_2\|_\infty
+2R\|T_ne_1-e_1\|_\infty
+R^2\|T_ne_0-e_0\|_\infty\longrightarrow0.
$$

将上述函数不等式两边施以正算子，再在点 $x$ 求值，并补入常数函数的误差，得到

$$
\begin{aligned}
|(T_nf)(x)-f(x)|
&\le\bigl|T_n(f-f(x)e_0)(x)\bigr|
+|f(x)|\,|(T_ne_0)(x)-1|\\
&\le\varepsilon(T_ne_0)(x)
+\frac{2M}{\delta^2}q_{n,x}(x)
+M\|T_ne_0-e_0\|_\infty.
\end{aligned}
$$

取上确界并令 $n\to\infty$，得

$$
\limsup_{n\to\infty}\|T_nf-f\|_\infty\le\varepsilon.
$$

再由 $\varepsilon$ 任意，所求结论成立。这里保留了 $T_ne_0-e_0$ 项，因为题设只要求渐近保持常数，并未要求每个 $T_n$ 都严格保持常数。

**方法总结：** 用“任意小常数加二次函数”一致控制函数的局部振荡；正性将这一控制传给算子。三个检验函数分别控制总质量、一次矩和二次矩，因而控制任意中心的二阶误差，无须先证明对所有多项式的收敛。

[返回题号导航](#题号导航)

## 问题 B211

**原题号：** 习题 8.7.B 第 8 题（下册）。[原题 PDF 第 12 页（印刷第 10 页）](/files/problems/楼分析习题-v2.pdf#page=12)

**题目（保留原文记号）：** 验证第 5 题给出的 $B_n$ 是 $C[0,1]$ 到 $C[0,1]$ 的正线性算子，且对于 $f(x)=1,x,x^2$，$\{T_nf\}$ 均在 $[0,1]$ 上一致收敛于 $f$。

**原题校勘：** 题册脚注已注明，$B_n$ 的定义实际见本组第 **6** 题（即 B209），题干中的 $T_n$ 指该 Bernstein 算子。以下统一写作 $B_n$；这两处是交叉引用及记号笔误，不影响所要验证的命题。

**证明：** 对 $n\ge1$ 定义

$$
(B_nf)(x)=\sum_{k=0}^{n}f\!\left(\frac kn\right)p_{n,k}(x),
\qquad p_{n,k}(x)=\binom nkx^k(1-x)^{n-k}.
$$

右端是多项式，故属于 $C[0,1]$。对实数 $\alpha,\beta$ 和连续函数 $f,g$，有限求和直接给出

$$
B_n(\alpha f+\beta g)=\alpha B_nf+\beta B_ng.
$$

若 $f\ge0$，则每个取样值和每个权重都非负，所以 $B_nf\ge0$。因此 $B_n$ 是所要求的正线性算子。

令 $e_j(t)=t^j$（$j=0,1,2$）。由 B209 中已经逐项计算的三个矩公式，

$$
\begin{aligned}
(B_ne_0)(x)&=\sum_{k=0}^{n}p_{n,k}(x)=1,\\
(B_ne_1)(x)&=\frac1n\sum_{k=0}^{n}k p_{n,k}(x)=x,\\
(B_ne_2)(x)&=\frac1{n^2}\sum_{k=0}^{n}k^2p_{n,k}(x)\\
&=\frac{n(n-1)x^2+nx}{n^2}
=x^2+\frac{x(1-x)}n.
\end{aligned}
$$

于是

$$
\|B_ne_0-e_0\|_\infty=\|B_ne_1-e_1\|_\infty=0,
\qquad
\|B_ne_2-e_2\|_\infty=\frac1{4n}\longrightarrow0.
$$

这完整验证了题目的要求。进一步应用 B210，即得每个 $f\in C[0,1]$ 都满足 $\|B_nf-f\|_\infty\to0$，与 B209 的直接证明相互印证。这里使用的只有矩恒等式，未把 B209 的一致收敛结论当作检验条件，因此没有循环论证。

**方法总结：** 对具体正算子，先核实定义域、值域、线性和正性，再精确计算 $1,t,t^2$ 的像。常数和一次函数被完全保持，二次函数的偏差恰为 $x(1-x)/n$；这一项就是控制一般连续函数逼近的中心二阶矩。

[返回题号导航](#题号导航)

## 七题方法总结

| 题号 | 主要方法 | 关键核查 |
| --- | --- | --- |
| B205 | 余弦复合、取偶部、余弦递推 | 不循环调用代数逼近；在全闭区间控制误差。 |
| B206 | 扩大区域后与光滑核卷积 | 支集紧包含于定义域；梯度常数不依赖尺度与区域。 |
| B207 | 大测度水平集、差集与整数缩放 | 明确证明差集含邻域；局部有界推出连续。 |
| B208 | 水平集与反射相交、二进缩放 | 先证连续，再从二进有理权重过渡到所有权重。 |
| B209 | 二项式矩恒等式、近远分区 | 两个小问及端点、n=1 均覆盖；误差估计关于 x 一致。 |
| B210 | 正性保序、二次函数控制振荡 | 算子自变量与求值点分清；保留常数函数的误差。 |
| B211 | 验证正线性、计算三个检验函数 | 纠正原题两处笔误；不依赖待推出的一致收敛结论。 |

编号推进至 **B211**；两册累计 **208 道已作答、3 道暂跳过**，其中上册完成 175 题，下册完成 33 题。**8.7.B 八题全部完成**。下一题为下册 **8.8.B 第 1 题**，对应 **B212**，见[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)。

**前后批次：**[上一批 B198—B204](/problems/7eefe730d0abc9edb8bf7c08/) · [B 组章节目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)
