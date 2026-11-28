---
title: "楼红卫《数学分析》B 组习题解答（四十六）：Fourier 变换的延拓与级数求和"
description: "B317—B322。从速降逼近到 Plancherel、Hausdorff–Young 与卷积公式，再用有限变差权推广 Riemann 求和引理。"
subject: "数学分析"
category: "lou-analysis"
math_font: "cm-bea"
attachment: "problems/lou-analysis-b-46.pdf"
tags: ["楼红卫", "数学分析", "B组", "下册", "Fourier分析", "B317-B322"]
created_at: "2026-11-28"
updated_at: "2026-11-28"
---

本批收录习题 12.3.B 第 5—9 题与 12.4.B 第 1 题。全文采用指数 $e^{-2\pi i x\cdot\xi}$ 的 Fourier 变换，空间均取在 $\mathbb R^n$ 上。

[上一批 B310—B316](/problems/47f7713369374b8cd908a494/) · [第十二章索引](/problems/collections/lou-analysis/chapters/12/) · [B 组总目录](/problems/collections/lou-analysis/)

## 题号导航

- [问题 B317：速降逼近与变换的强收敛（12.3.B-5）](#问题-b317)
- [问题 B318：可积与平方可积的同时逼近（12.3.B-6）](#问题-b318)
- [问题 B319：平方可积函数的 Plancherel 定理（12.3.B-7）](#问题-b319)
- [问题 B320：Hausdorff–Young 不等式的延拓（12.3.B-8）](#问题-b320)
- [问题 B321：卷积、乘积与内积公式的推广（12.3.B-9）](#问题-b321)
- [问题 B322：有限变差权下的级数求和（12.4.B-1）](#问题-b322)

## 问题 B317

**原题号：** 习题 12.3.B 第 5 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　设 $1<p<2$，$p'=p/(p-1)$。若速降函数列 $\varphi_k$ 在 $L^p(\mathbb R^n)$ 中强收敛于 $f$，证明 $\widehat{\varphi_k}$ 在 $L^{p'}(\mathbb R^n)$ 中强收敛于 $\widehat f$。

**证明**　先在速降函数空间 $\mathcal S$ 使用原书定理 12.3.8。将 Hausdorff–Young 不等式用于两个逼近函数之差，得到

$$
\|\widehat{\varphi_k}-\widehat{\varphi_j}\|_{p'}
\leq \|\varphi_k-\varphi_j\|_p .\qquad\text{(1)}
$$

右端随 $j,k\to\infty$ 趋于零。由 $L^{p'}$ 完备，左侧的函数列有强极限 $g$。若另一列 $\psi_k\in\mathcal S$ 也趋于 $f$，则其变换与 $\widehat{\varphi_k}$ 的距离至多为 $\|\varphi_k-f\|_p+\|f-\psi_k\|_p$，故极限相同。

还须说明这个极限与教材在 $L^1+L^2$ 上定义的变换相同。任取 $\eta\in\mathcal S$，先对 $\varphi_k$ 用 Fubini 定理，再用两次 Hölder 不等式传递极限，得到

$$
\int_{\mathbb R^n} g(\xi)\eta(\xi)\,d\xi
=\lim_{k\to\infty}\int_{\mathbb R^n}\varphi_k(x)\widehat\eta(x)\,dx
=\int_{\mathbb R^n} f(x)\widehat\eta(x)\,dx .\qquad\text{(2)}
$$

这里采用双线性配对，故两边均没有共轭。写 $f=u+v$，其中 $u=f\mathbf1_{\{|f|>1\}}$，$v=f\mathbf1_{\{|f|\le1\}}$。由 $1<p<2$ 可知 $u\in L^1$、$v\in L^2$。对 $u$ 直接用 Fubini 定理，对 $v$ 用速降函数作 $L^2$ 逼近并用速降类的 Plancherel 等式，便知 $\widehat u+\widehat v$ 也满足（2）。两者都是局部可积函数，对所有光滑紧支测试函数的积分相同，故几乎处处相等。这就识别了 $g=\widehat f$。在（1）中固定 $k$ 令 $j\to\infty$，还得到误差界 $\|\widehat{\varphi_k}-\widehat f\|_{p'}\leq\|\varphi_k-f\|_p$。

## 问题 B318

**原题号：** 习题 12.3.B 第 6 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　设 $f\in L^1(\mathbb R^n)\cap L^2(\mathbb R^n)$。构造同一列速降函数 $f_k$，使它在两种范数下都强收敛于 $f$。

**证明**　先截去远处和大函数值。令 $u_k=f\mathbf1_{\{|x|\le k,\ |f(x)|\le k\}}$。对 $r=1,2$，由 $|u_k-f|^r\le |f|^r$ 及支配收敛定理，$\|u_k-f\|_r\to0$。此时 $u_k$ 已有紧支撑，但还需光滑化。

取非负 $\rho\in C_c^\infty(\mathbb R^n)$，支撑在单位球中且积分为一，置 $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$。记 $\tau_yu(x)=u(x-y)$。由 Minkowski 不等式，

$$
\|\rho_\varepsilon*u_k-u_k\|_r
\leq\int \rho(z)\|\tau_{\varepsilon z}u_k-u_k\|_r\,dz,
\qquad r=1,2 .\qquad\text{(3)}
$$

对固定 $k$，平移在这两种范数下都连续。事实上，对连续紧支函数，这由一致连续性和支撑有界可知；再用连续紧支函数在 $L^r$ 中的稠密性及平移等距即得一般情形。式（3）被 $2\rho(z)\|u_k\|_r$ 控制，故右端随 $\varepsilon\downarrow0$ 趋于零。对每个 $k$ 选同一个 $0<\varepsilon_k<1/k$，使两种误差都小于 $1/k$。于是

$$
f_k=\rho_{\varepsilon_k}*u_k\in C_c^\infty(\mathbb R^n)\subset\mathcal S,
\qquad \|f_k-f\|_r\leq k^{-1}+\|u_k-f\|_r\longrightarrow0 .\qquad\text{(4)}
$$

卷积的各阶导数由对 $\rho_{\varepsilon_k}$ 求导给出，支撑包含在半径 $k+\varepsilon_k$ 的球内。这也验证了所构造函数确属速降类。

## 问题 B319

**原题号：** 习题 12.3.B 第 7 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　证明 Plancherel 定理在 $L^2(\mathbb R^n)$ 中成立。

**证明**　对 $f\in L^2$，取 $\varphi_k\in\mathcal S$ 在 $L^2$ 中逼近 $f$。原书定理 12.3.6 给出速降函数的等距性，故

$$
\|\widehat{\varphi_k}-\widehat{\varphi_j}\|_2
=\|\varphi_k-\varphi_j\|_2 .\qquad\text{(5)}
$$

由完备性，$\widehat{\varphi_k}$ 有 $L^2$ 极限，记为 $\mathcal F_2 f$。对两列逼近函数之差再用（5），可知定义与选列无关。线性由逐项取极限得到，范数连续性给出

$$
\int_{\mathbb R^n}|\mathcal F_2 f(\xi)|^2\,d\xi
=\lim_{k\to\infty}\|\widehat{\varphi_k}\|_2^2
=\lim_{k\to\infty}\|\varphi_k\|_2^2
=\int_{\mathbb R^n}|f(x)|^2\,dx .\qquad\text{(6)}
$$

其像是闭的。确实，像中的收敛列由等距性拉回为 Cauchy 列，原像的极限又映到给定极限。另一方面，速降函数的反演公式表明 $\mathcal F(\mathcal S)=\mathcal S$，故像还包含稠密子集。由此 $\mathcal F_2$ 是 $L^2$ 到自身的满等距线性映射，逆算子是逆 Fourier 变换的连续延拓。

若 $f\in L^1\cap L^2$，用 B318 选取同时逼近的一列。此时 $\|\widehat{\varphi_k}-\widehat f_{\!1}\|_\infty\leq\|\varphi_k-f\|_1\to0$，其中 $\widehat f_{\!1}$ 由绝对收敛积分定义。同时 $\widehat{\varphi_k}\to\mathcal F_2 f$ 于 $L^2$，抽取子列后几乎处处收敛。因此两种定义几乎处处相同。对一般 $L^2$ 函数，式（6）中的变换由均方极限给出。

## 问题 B320

**原题号：** 习题 12.3.B 第 8 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　设 $1\leq p\leq2$。证明对于每个 $f\in L^p(\mathbb R^n)$ 有 Hausdorff–Young 不等式

$$
\|\widehat f\|_{p'}\leq\|f\|_p,
\qquad \frac{1}{p}+\frac{1}{p'}=1 .\qquad\text{(7)}
$$

**证明**　当 $p=1$，变换积分的指数因子模为一，逐点取绝对值得 $|\widehat f(\xi)|\leq\int|f|$。当 $p=2$，式（7）就是 B319 中的等式（6）。

设 $1<p<2$。原书定理 12.3.8 已在 $\mathcal S$ 上给出（7）。取 $\varphi_k\in\mathcal S$ 使 $\varphi_k\to f$ 于 $L^p$。由 B317，$\widehat{\varphi_k}\to\widehat f$ 于 $L^{p'}$。因此

$$
\|\widehat f\|_{p'}
=\lim_{k\to\infty}\|\widehat{\varphi_k}\|_{p'}
\leq\lim_{k\to\infty}\|\varphi_k\|_p
=\|f\|_p .\qquad\text{(8)}
$$

B317 用的是速降类上已证明的不等式。此处借助强收敛把它传给任意 $L^p$ 函数，全程只涉及范数极限。

## 问题 B321

**原题号：** 习题 12.3.B 第 9 题。原书下册第 386 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　推广定理 12.3.4 和定理 12.3.5。原书在速降函数上分别给出卷积与乘积的变换公式，以及保内积公式。

**解**　以下三式将原书的两个定理分别推广到可积函数与平方可积函数。仍用 $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$ 的归一化。

**卷积。** 若 $f,g\in L^1$，则 $f*g\in L^1$，且 $\widehat{f*g}(\xi)=\widehat f(\xi)\widehat g(\xi)$ 对每个 $\xi$ 成立。事实上，由 Tonelli 定理，

$$
\iint |f(y)g(x-y)|\,dx\,dy=\|f\|_1\|g\|_1 .\qquad\text{(9)}
$$

对变换的二重积分用 Fubini 定理，令 $z=x-y$，指数因子分解为关于 $y,z$ 的两个因子，便得到结论。

**乘积。** 若 $f,g\in L^2$，则 $fg\in L^1$，并且对每个 $\xi$ 有

$$
\widehat{fg}(\xi)=
\int_{\mathbb R^n}\widehat f(\eta)\widehat g(\xi-\eta)\,d\eta .\qquad\text{(10)}
$$

右端对每个 $\xi$ 都绝对收敛，由 Cauchy–Schwarz 不等式，其绝对积分至多为 $\|f\|_2\|g\|_2$。取 $f_k,g_k\in\mathcal S$ 分别在 $L^2$ 中逼近 $f,g$。由

$$
\|f_kg_k-fg\|_1\leq
\|f_k-f\|_2\|g_k\|_2+\|f\|_2\|g_k-g\|_2\longrightarrow0,\qquad\text{(11)}
$$

左端变换一致收敛。右端卷积之差拆为 $(\widehat f_k-\widehat f)*\widehat g_k+\widehat f*(\widehat g_k-\widehat g)$。逐项用 Cauchy–Schwarz 和 B319，同样得到（11）右端的界，且与 $\xi$ 无关。对速降函数的公式取一致极限即得（10）。等式两边给出连续函数，改变 $L^2$ 代表元也不影响任何一点的积分。

**内积。** 若 $f,g\in L^2$，则

$$
\int_{\mathbb R^n} f(x)\overline{g(x)}\,dx
=\int_{\mathbb R^n}\widehat f(\xi)\overline{\widehat g(\xi)}\,d\xi .\qquad\text{(12)}
$$

两积分都由 Cauchy–Schwarz 保证绝对收敛。对上述 $f_k,g_k$ 用原书定理 12.3.5。原空间的内积误差由（11）右端控制，频率空间的内积误差由同一上界控制，令 $k\to\infty$ 即得（12）。特别取 $g=f$ 就恢复 Plancherel 等式。

## 问题 B322

**原题号：** 习题 12.4.B 第 1 题。原书下册第 393 页。[题册 PDF 第 43 页](/files/problems/楼分析习题-v2.pdf#page=43)

**题目**　推广引理 12.4.5。原引理断言，若 $\sum_{n\ge1}c_n=A$，则以 $(\sin(nh)/(nh))^2$ 加权后求和，在 $h\to0$ 时仍趋于 $A$。

**解**　原证明中能统一控制求和误差的是权函数的总变差。设 $K:[0,\infty)\to\mathbb C$ 有限变差，在零点右连续，$K(0)=1$，且 $\lim_{t\to\infty}K(t)=0$。则对每个收敛级数 $\sum c_n=A$，有

$$
\lim_{h\to0}\sum_{n=1}^\infty c_nK(n|h|)=A .\qquad\text{(13)}
$$

对每个固定 $h\ne0$，左边的级数也收敛。令 $S_n=\sum_{j=1}^n c_j$，$S_0=0$，$w_n=K(n|h|)$。对前 $N$ 项作 Abel 分部求和，得

$$
\sum_{n=1}^N c_n w_n
=S_N w_N+\sum_{n=1}^{N-1}S_n(w_n-w_{n+1}) .\qquad\text{(14)}
$$

记 $V$ 为 $K$ 的总变差。因 $\sum_{n\ge1}|w_n-w_{n+1}|\leq V$，$S_n$ 有界且 $w_N\to0$，（14）右边的极限存在。又 $\sum_{n\ge1}(w_n-w_{n+1})=w_1$，从而

$$
\sum_{n\ge1} c_nw_n-A
=A(w_1-1)+\sum_{n\ge1}(S_n-A)(w_n-w_{n+1}) .\qquad\text{(15)}
$$

给定 $\varepsilon>0$，选 $m$ 使 $n\ge m$ 时 $|S_n-A|<\varepsilon$。则（15）右边的尾和绝对值至多为 $\varepsilon V$，与 $h$ 无关。对 $n<m$ 的有限项，$h\to0$ 时 $w_n,w_{n+1}\to1$，故每一项以及首项 $A(w_1-1)$ 均趋于零。取上极限再令 $\varepsilon\downarrow0$，即得（13）。这里允许原级数只条件收敛。

取 $K(t)=(\sin t/t)^2$ 并规定 $K(0)=1$。它在零点附近的导数为 $O(t)$，在无穷远处有

$$
K'(t)=\frac{\sin(2t)}{t^2}-\frac{2\sin^2 t}{t^3}=O(t^{-2}).
\qquad\text{(16)}
$$

所以 $\int_0^\infty|K'(t)|\,dt<\infty$，且 $K(t)\to0$，这就还原了原引理。另取 $K(t)=e^{-t}$ 得 Abel 权；取 $K(t)=\max(1-t,0)$ 及 $h=1/N$，所得加权和恰为 $(S_0+\cdots+S_{N-1})/N$，即部分和的算术平均。两例都由同一个尾部估计推出。

## 方法总结

B317—B320 的共同问题是怎样在较大的函数空间里定义 Fourier 变换。先对逼近列的差使用已有估计，以完备性定义极限，再用同一列的两种收敛方式识别两种定义。B321 则要分别检查乘积所属的空间和卷积逐点存在的条件。B322 将相同的思路用于数项级数，先分部求和，再以核的总变差控制所有小参数下的尾和。

第十二章四节合计 22 道 B 组题均已作答。两册共编至 B322，317 道已作答（上册 175 道、下册 142 道），5 道待核：B116、B148、B180、B247、B261。
