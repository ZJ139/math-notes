---
title: "第三章习题与复习题"
description: "徐森林、薛春华《实变函数论》第三章，收录 110 道节后练习与 63 道复习题原题。"
subject: "实变函数"
category: "real-functions/chapter-3"
tags: ["实变函数", "积分理论", "复习题"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
---

徐森林、薛春华《实变函数论》第三章，收录 110 道节后练习与 63 道复习题原题。教材在 §3.9 后直接列出复习题 3。

[练习题 3.1](#练习题-31) · [练习题 3.2](#练习题-32) · [练习题 3.3](#练习题-33) · [练习题 3.4](#练习题-34) · [练习题 3.5](#练习题-35) · [练习题 3.6](#练习题-36) · [练习题 3.7](#练习题-37) · [练习题 3.8](#练习题-38) · [复习题 3](#复习题-3)

## 练习题 3.1

教材第 183—184 页

**1.** 设 $(X,\mathcal R)$ 为可测空间，$E\in\mathcal R$。证明：$f$ 为 $E\in\mathcal R$ 上的可测函数，当且仅当对每个 $r\in\mathbb Q$，$E(r\le f)$ 为可测集。

**2.** 设 $f:[a,b]\to\mathbb R$ 为实函数，如果对 $\forall[\alpha,\beta]\subset(a,b)$，$f$ 为 $[\alpha,\beta]$ 上的 Lebesgue 可测函数。证明：$f$ 为 $[a,b]$ 上的 Lebesgue 可测函数。

**3.** 设 $(X,\mathcal R)$ 为可测空间，$E$ 为可测集，$f$ 为 $E$ 上的可测函数。证明：对 $\forall a\in\mathbb R$，$E(f=a)$ 为可测集。

**4.** 任取 $x\in[0,1]$，$x$ 有小数表示 $x=0.n_1n_2n_3\cdots$（$0.2$ 不取 $0.1\dot9$，只用 $0.2$ 表示），定义 $f:[0,1]\to\mathbb R$，

$$
f(x)=\begin{cases}\max_{1\le i<+\infty}\{n_i\},&x=0.n_1n_2n_3\cdots,\\1,&x=1.\end{cases}
$$

证明：$f$ 为 $[0,1]$ 上的 Lebesgue 可测函数。

**5.** 设 $(X,\mathcal R)$ 为可测空间，$E$ 为可测集，$f$ 为 $E$ 上的可测函数。$M$ 为 $\mathbb R$ 中的开集，或闭集，或 $G_\delta$ 集，或 $F_\sigma$ 集，或 Borel 集。证明：$f^{-1}(M)$ 为 $(X,\mathcal R)$ 中的可测集。

**6.** 设 $(X,\mathcal R)$ 为可测空间，$E$ 为可测集，$\{f_n\}$ 为 $E$ 上的一列可测函数，并且 $\{f_n\}$ 在 $E$ 上有极限函数 $f$（允许极限值为 $\pm\infty$）。证明：$E(f=+\infty)$、$E(f=-\infty)$ 都为可测集，且对 $\forall c\in\mathbb R$，$E(c\le f)$ 也为可测集。

**7.** 设 $(X,\mathcal R)$ 为可测空间，$E$ 为可测集，$f$ 为 $E$ 上的可测函数，又 $h$ 为直线 $\mathbb R^1$ 上的 Borel 可测函数。证明：$h\circ f=h(f)$ 为 $E$ 上的可测函数。

**8.** 设 $(\mathbb R^1,\mathcal L)$ 为 Lebesgue 可测空间，$E$ 为 Lebesgue 可测集，$f$ 为 $E$ 上的 Lebesgue 可测函数，$h$ 为 $\mathbb R^1$ 上的 Lebesgue 可测函数。问：$h\circ f=h(f)$ 是否必为 $E$ 上的 Lebesgue 可测函数？

**9.** 设 $(\mathbb R^n,\mathcal L)$ 为 Lebesgue 可测空间，$f^2$ 为 $\mathbb R^n$ 上的 Lebesgue 可测函数，且点集 $E(f>0)$ 为可测集。证明：$f$ 为 $\mathbb R^n$ 上的可测函数。

**10.** 设 $f$ 为直线 $\mathbb R^1$ 上的 Lebesgue（或 Borel）可测函数，$\alpha\in\mathbb R$ 为常数。证明：$f(\alpha x)$ 为 $\mathbb R^1$ 上的 Lebesgue（或 Borel）可测函数。

**11.** 设 $f$ 为直线 $\mathbb R^1$ 上的 Lebesgue（或 Borel）可测函数。证明：$f(x^2)$，$f(x^3)$，$f(1/x)$（当 $x=0$ 时，规定 $f(1/0)=0$）都为 Lebesgue（或 Borel）可测函数。

**12.** 证明：

（1）当 $f$ 为 $[a,b]$ 上的连续函数、单调函数、阶梯函数时，它必为 $[a,b]$ 上的 Borel 可测函数。

（2）当 $f$ 为 $\mathbb R^n$ 中 Lebesgue 可测集 $E$ 上的连续函数时，其必为 $E$ 上的 Lebesgue 可测函数。

**13.** 设 $f(x)$ 为 $[a,b]$ 上的可导函数。证明：$f'(x)$ 为 $[a,b]$ 上的可测函数。

**14.** 设 $f(\xi)=f(\xi_1,\xi_2)$ 为 $\mathbb R^2$ 上的连续函数，$g_1,g_2$ 为 $[a,b]\subset\mathbb R^1$ 上的 Lebesgue 可测函数。证明：$F(x)=f(g_1(x),g_2(x))$ 为 $[a,b]$ 上的 Lebesgue 可测函数。

**15.** 设 $f,g$ 为 $(0,1)\subset\mathbb R^1$ 上的 Lebesgue 可测函数，且对 $\forall t\in\mathbb R$，有

$$
m(\{x\mid f(x)\ge t\})=m(\{x\mid g(x)\ge t\}),
$$

即互为等可测函数。如果 $f,g$ 都为单调减且左连续的函数。证明：$f(x)=g(x)$，$\forall x\in(0,1)$。

## 练习题 3.2

教材第 207—208 页

**1.** 设 $(X,\mathcal R,\mu)$ 为测度空间，$f$ 为 $E\in\mathcal R$ 上的几乎处处有限的可测函数，$\mu(E)<+\infty$。证明：对 $\forall\varepsilon>0$，存在 $E$ 上的有界可测函数 $g(x)$，使得 $\mu(\{x\in E\mid |f(x)-g(x)|>0\})<\varepsilon$。

**2.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间，$f$ 为 $\mathbb R^1$ 上的可测函数，且有 $f(x+1)\underset{m}{\overset{\cdot}{=}} f(x)$。作函数 $g:\mathbb R^1\to\mathbb R$，使 $g(x+1)=g(x)$，$\forall x\in\mathbb R^1$，且在 $\mathbb R^1$ 上 $g(x)\underset{m}{\overset{\cdot}{=}} f(x)$。

**3.** 设 $\{f_k\}$ 为 $[a,b]$ 上的 Lebesgue 可测函数列。证明：存在正数列 $\{a_k\}$，使得在 $[a,b]$ 上有 $\lim_{k\to\infty}a_k f_k(x)\underset{m}{\overset{\cdot}{=}} 0$。

**4.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$G\subset\mathbb R^n$ 为开集，$f:G\to\mathbb R$ 为实函数。证明下列两条等价：

（1）$f$ 在 $G$ 上几乎处处连续。

（2）对 $\forall t\in\mathbb R$，点集 $E_1(t)=\{x\in G\mid f(x)>t\}$，$E_2(t)=\{x\in G\mid f(x)<t\}$ 中几乎处处是内点。

**5.** 设 $(\mathbb R^1,\mathcal L^g,m_g)$ 为 Lebesgue–Stieltjes 测度空间，$f$ 为 $E\in\mathcal L^g$ 上的 Lebesgue–Stieltjes 可测函数。证明：必存在 $\mathbb R^1$ 上的 Borel 可测函数 $h$，使得 $m_g(E(f\ne h))=0$。

**6.** 设 $\Gamma$ 为指标集，$\{f_\alpha\mid\alpha\in\Gamma\}$ 为 $\mathbb R^n$ 上的 Lebesgue 可测函数族。问：$S(x)=\sup\{f_\alpha(x)\mid\alpha\in\Gamma\}$ 为 $\mathbb R^n$ 上的可测函数吗？

**7.** 设 $(\mathbb R^n,\mathcal L,m)$ 为 Lebesgue 测度空间，$\{f_k\}$ 为 $E\in\mathcal L$ 上的可测函数列，$m(E)<+\infty$。证明：在 $E$ 上，$\lim_{k\to\infty} f_k(x)\underset{m}{\overset{\cdot}{=}} 0$ 当且仅当对 $\forall\varepsilon>0$，有

$$
\lim_{j\to\infty}m\bigl(\{x\in E\mid \sup_{k\ge j}|f_k(x)|\ge\varepsilon\}\bigr)=0.
$$

**8.** 设 $f,f_1,f_2,\ldots$ 为 $[a,b]$ 上的几乎处处有限的 Lebesgue 可测函数，且 $\lim_{k\to\infty}f_k(x)\underset{m}{\overset{\cdot}{=}} f(x)$。证明：存在 $E_n\subset[a,b]$，$n\in\mathbb N$，使 $m([a,b]-\bigcup_{n=1}^\infty E_n)=0$，而 $\{f_k\}$ 在每个 $E_n$ 上一致收敛于 $f(x)$。

**9.** 设 $\{f_n\}$ 为 $[0,1]$ 上几乎处处收敛于 $0$ 的几乎处处有限的 Lebesgue 可测函数列。证明：存在数列 $\{t_n\}$ 满足 $\sum_{n=1}^\infty|t_n|=+\infty$，使得在 $[0,1]$ 上 $\sum_{n=1}^\infty|t_nf_n(x)|<+\infty$ 几乎处处成立。

**10.** 设 $m(E)<+\infty$，$f,f_1,f_2,\ldots$ 为 $E\in\mathcal L$ 上几乎处处有限的 Lebesgue 可测函数。证明：$f_k$ 在 $E$ 上依 Lebesgue 测度收敛于 $f$ 当且仅当

$$
\lim_{k\to\infty}\inf_{\alpha>0}\{\alpha+m(\{x\in E\mid |f_k(x)-f(x)|>\alpha\})\}=0.
$$

**11.** 设 $(\mathbb R^1,\mathcal L,m)$ 为 Lebesgue 测度空间。如果对任何固定的 $n$，当 $k\to+\infty$ 时有 $f_k^n\Rightarrow f^n$，而当 $n\to+\infty$ 时有 $f^n\Rightarrow f$。证明：在 $\{f_k^n(x)\}$ 中可选取函数列使其度量收敛于 $f$。

**12.** 设 $(X,\mathcal R,\mu)$ 为测度空间，$E\subset X$，$\mu(E)<+\infty$，且 $E$ 上的可测函数列 $\{f_k\}$ 满足 $f_k\underset{\mu}{\Rightarrow} f$（有限函数），则对 $\forall\alpha>0$，证明：

（1）$|f_k|^\alpha\underset{\mu}{\Rightarrow} |f|^\alpha$。

（2）对 $E$ 上的任何可测函数 $h$，有 $|f_k-h|^\alpha\underset{\mu}{\Rightarrow} |f-h|^\alpha$。

## 练习题 3.3

教材第 225—228 页

**1.** 设 $f$ 为 $E\subset\mathbb R^n$ 上几乎处处大于 $0$ 的 Lebesgue 可测函数，且满足 $(L)\int_E f\,dm=0$。证明：$m(E)=0$。

**2.** 设 $f$ 为 $E\subset\mathbb R^n$ 上的非负 Lebesgue 可积函数，$E_k=\{x\in E\mid f(x)\ge k\}$，$k=1,2,\ldots$。证明：$\sum_{k=1}^\infty m(E_k)<+\infty$。

**3.** 设 $f$ 为 $E\subset\mathbb R^n$ 上的非负 Lebesgue 可测函数，且 $m(E)<+\infty$。证明：$f$ 为 $E$ 上的 Lebesgue 可积函数当且仅当 $\sum_{k=0}^\infty 2^k m(\{x\in E\mid f(x)\ge 2^k\})$ 收敛。

**4.** 设 $f$ 为 $E\subset\mathbb R^n$ 上的 Lebesgue 可测函数，$m(E)<+\infty$。证明：$f^2$ 为 $E$ 上的 Lebesgue 可积函数当且仅当 $\sum_{k=1}^\infty k\,m(\{x\in E\mid |f(x)|>k\})<+\infty$。如果 $m(E)=+\infty$，举例说明充分性不成立。

**5.** 设 $f$ 为 $E=[a,b]$ 上的正值 Lebesgue 可积函数，$0<q\le b-a$，$\mathcal A=\{e\subset[a,b]\mid m(e)\ge q\}$。证明：$\inf_{e\in\mathcal A}\{(L)\int_e f\,dm\}>0$。

**6.** 设 $f,g$ 为测度空间 $(X,\mathcal R,\mu)$ 上的可积函数。证明：$\sqrt{f^2+g^2}$ 也为 $(X,\mathcal R,\mu)$ 上的可积函数。

**7.** 设 $f$ 为 $(0,1)$ 上的非负 Lebesgue 可测函数，如果存在常数 $c$，使 $(L)\int_0^1[f(x)]^n\,dx=c$，$n=1,2,\ldots$。证明：存在可测集 $E\subset(0,1)$，使得在 $(0,1)$ 上 $f(x)\underset{m}{\overset{\cdot}{=}}\chi_E(x)$。

**8.** 设 $f\in\mathcal L(\mathbb R^1)$，$f(0)=0$，且 $f'(0)$ 存在有限。证明：$(L)\int_{\mathbb R^1}f(x)/x\,dx$ 存在有限，即 $f(x)/x$ 在 $\mathbb R^1$ 上 Lebesgue 可积。

**9.** 设 $(L)\int_0^{2\pi}|f(x)|\ln(1+|f(x)|)\,dx<+\infty$。证明：$f\in\mathcal L([0,2\pi])$。

**10.** 设 $E\subset\mathbb R^n$，$f\in\mathcal L(E)$，且有 $(L)\int_E f(x)\,dx=r>0$。证明：$E$ 中存在可测子集 $e$，使 $(L)\int_e f(x)\,dx=r/3$。

**11.** 设 $f$ 为 $E\subset\mathbb R^1$ 上非负 Lebesgue 可测函数，且对 $\forall\varepsilon>0$，有 $E$ 中可测子集 $E_\varepsilon$，使 $m(E-E_\varepsilon)<\varepsilon$，$\lim_{\varepsilon\to0^+}(L)\int_{E_\varepsilon} f(x)\,dx$ 存在有限。证明：$f\in\mathcal L(E)$。

**12.** 设 $f\in\mathcal L(\mathbb R^1)$，$\alpha>0$。证明：在 $\mathbb R^1$ 上，$\lim_{n\to\infty}n^{-\alpha} f(nx)\underset{m}{\overset{\cdot}{=}} 0$。

**13.** 设 $f$ 为 $[a,b]$ 上的非负连续函数，且 $(L)\int_a^b f(x)\,dx=0$。证明：$f(x)=0$。

**14.** （A. Lebesgue）设 $q>1$，正数 $p$ 满足 $1/p+1/q=1$，$f$ 在 $E\subset\mathbb R^n$ 上为 Lebesgue 可测函数。如果对 $E$ 上任何满足 $|h|^q$ Lebesgue 可积的函数 $h$，$fh$ 必为 Lebesgue 可积函数。证明：$|f|^p$ 为 Lebesgue 可积函数。

**15.** 设 $\mu_1,\mu_2$ 为可测空间 $(X,\mathcal R)$ 上的两个测度，并且对 $\forall E\in\mathcal R$，$\mu_1(E)\le\mu_2(E)$。证明：如果 $f$ 在 $E$ 上关于 $\mu_2$ 可积，则 $f$ 在 $E$ 上关于 $\mu_1,\mu_1+\mu_2$ 也可积，且

$$
\int_E f\,d(\mu_1+\mu_2)=\int_E f\,d\mu_1+\int_E f\,d\mu_2.
$$

**16.** 设 $\{f_k\}$ 为 $E\subset\mathbb R^1$ 上的非负可测函数列，$m(E)<+\infty$。证明：在 $E$ 上有 $f_k\underset{m}{\Rightarrow}0$ 当且仅当 $\lim_{k\to\infty}(L)\int_E f_k(x)/(1+f_k(x))\,dx=0$。

**17.** 设 $\{f_k\}$ 为 $E\subset\mathbb R^1$ 上的非负 Lebesgue 可测函数列，并且 $f_k(x)\ge f_{k+1}(x)$（$k=1,2,\ldots$），$\lim_{k\to\infty} f_k(x)=f(x)$。又 $\exists k_0\in\mathbb N$，使 $(L)\int_E f_{k_0}\,dm<+\infty$。证明：$\lim_{k\to\infty}(L)\int_E f_k\,dm=(L)\int_E f\,dm$。

**18.** 设 $\{f_k\}$ 为 $\mathbb R^n$ 上非负的 Lebesgue 可积函数列，若对任何可测集 $E\subset\mathbb R^n$，都有 $\int_E f_k\,dm\le\int_E f_{k+1}\,dm$。证明：$\lim_{k\to\infty}\int_E f_k\,dm=\int_E\lim_{k\to\infty}f_k\,dm$。

**19.** 设 $E\subset\mathbb R^1$，$f\in\mathcal L(E)$，$f_k\in\mathcal L(E)$，$k=1,2,\ldots$，且 $\lim_{k\to\infty}(L)\int_E |f_k(x)-f(x)|\,dx=0$。证明：存在子列 $\{f_{k_i}\}$，使在 $E$ 上有 $\lim_{i\to\infty}f_{k_i}(x)\underset{m}{\overset{\cdot}{=}} f(x)$。

**20.** 设 $\{E_k\}$ 为 $\mathbb R^n$ 上测度有限的 Lebesgue 可测集列，且有 $\lim_{k\to\infty}(L)\int_{\mathbb R^n}|\chi_{E_k}(x)-f(x)|\,dx=0$。证明：存在 Lebesgue 可测集 $E$，使得在 $\mathbb R^n$ 上 $f(x)\underset{m}{\overset{\cdot}{=}}\chi_E(x)$。

**21.** 设 $(X,\mathcal R,\mu)$ 为测度空间，$E\in\mathcal R$，$f$ 为 $E$ 上的几乎处处有限的广义可测函数。证明：$f$ 在 $E$ 上可积当且仅当 $\sum_{n=1}^\infty n\,\mu(E_n)<+\infty$，其中 $E_n=E(n\le |f|<n+1)$。

**22.** 设 $(X,\mathcal R,\mu)$ 为全 $\sigma$ 有限的测度空间，$f$ 为 $(X,\mathcal R)$ 上非负实值可测函数。$E\in\mathcal R$，它关于 $\mu$ 的积分记为 $\nu(E)=\int_E f\,d\mu$（积分值可取 $+\infty$）。并且当 $\mu(E)<+\infty$ 时，总有 $\int_E f\,d\mu<+\infty$。证明：$(X,\mathcal R,\nu)$ 为全 $\sigma$ 有限测度空间。而对 $\forall E\in\mathcal R$，只要 $\mu(E)=0$，总有 $\nu(E)=0$。

## 练习题 3.4

教材第 243—244 页

**1.** 设 $f,f_k\in\mathcal L(\mathbb R^n)$（$k=1,2,\ldots$），且对任一 Lebesgue 可测集 $E\subset\mathbb R^n$，有 $(L)\int_E f_k(x)\,dx\le(L)\int_E f_{k+1}(x)\,dx$，$k=1,2,\ldots$，且 $\lim_{k\to\infty}(L)\int_E f_k(x)\,dx=(L)\int_E f(x)\,dx$。证明：在 $\mathbb R^n$ 上，$\lim_{k\to\infty}f_k(x)\underset{m}{\overset{\cdot}{=}} f(x)$。

**2.** （1）设 $f,f_1,f_2,\ldots$ 为 $E\subset\mathbb R^n$ 上的非负 Lebesgue 可积函数，且在 $E$ 上 $\lim_{k\to\infty} f_k(x)\underset{m}{\overset{\cdot}{=}} f(x)$，$\lim_{k\to\infty}(L)\int_E f_k(x)\,dx=(L)\int_E f(x)\,dx$。证明：对 $E$ 中任一可测子集 $e$，有 $\lim_{k\to\infty}(L)\int_e f_k(x)\,dx=(L)\int_e f(x)\,dx$。

（2）若将上述“几乎处处收敛”的条件改为“依测度收敛”，证明结论仍成立。

**3.** 设 $f$ 为定义在 $\mathbb R^n$ 上的实函数，对 $\forall\varepsilon>0$，$\exists g,h\in\mathcal L(\mathbb R^n)$ 满足 $g(x)\le f(x)\le h(x)$，$\forall x\in\mathbb R^n$，且 $(L)\int_{\mathbb R^n}[h(x)-g(x)]\,dx<\varepsilon$。证明：$f\in\mathcal L(\mathbb R^n)$。

**4.** 设 $x^s f(x),x^t f(x)$ 在 $(0,+\infty)$ 上 Lebesgue 可积，其中 $s<t$。证明：积分 $(L)\int_0^{+\infty}x^u f(x)\,dx$，$u\in(s,t)$，存在有限，且为 $u\in(s,t)$ 的连续函数。

**5.** 设 $E\subset\mathbb R^1$，$m(E)<+\infty$，$f$ 为 $E$ 上的 Lebesgue 可测函数，$0<s<+\infty$。证明：

$$
\lim_{t\nearrow s}(L)\int_E |f(x)|^t\,dx=(L)\int_E|f(x)|^s\,ds.
$$

**6.** 给出注 3.4.2 中（4）$\Rightarrow$（5）的新证明。

**7.** 对于 $(X,\mathcal R,\mu)=(\mathbb R^n,\mathcal L,m)$ 证明定理 3.4.1。

**8.** 设 $\{f_k\}$ 为 $E\subset\mathbb R^1$ 上的非负 Lebesgue 可积的函数列，$f\in\mathcal L(E)$，在 $E$ 上 $f_k\underset{m}{\Rightarrow}f$。如果 $\lim_{k\to\infty}(L)\int_E f_k(x)\,dx=(L)\int_E f(x)\,dx$。证明：$\lim_{k\to\infty}(L)\int_E|f_k(x)-f(x)|\,dx=0$。

**9.** 设 $\{f_k\},\{g_k\}$ 为 $E\subset\mathbb R^1$ 上的两个 Lebesgue 可测函数列，且 $|f_k(x)|\le g_k(x)$，$\forall x\in E$。如果对 $\forall x\in E$，$\lim_{k\to\infty}f_k(x)=f(x)$，$\lim_{k\to\infty}g_k(x)=g(x)$，且 $\lim_{k\to\infty}(L)\int_E g_k(x)\,dx=(L)\int_E g(x)\,dx<+\infty$，证明：$\lim_{k\to\infty}(L)\int_E f_k(x)\,dx=(L)\int_E f(x)\,dx$。

**10.** 设 $\{f_n\}$ 为测度空间 $(X,\mathcal R,\mu)$ 的集 $E$ 上的可测函数列，如果：

（1）存在 $E$ 上的可积函数 $F$，使 $|f_n|\le F$ 几乎处处成立，$n=1,2,\ldots$；

（2）在 $E$ 上，$\{f_n\}$ 几乎处处收敛于可测函数 $f$。

证明：在 $E$ 上，$f_n\underset{\mu}{\Rightarrow} f$。

## 练习题 3.5

教材第 255—256 页

**1.** 证明：

（1）$(L)\int_0^1\dfrac{\ln x}{1-x}\,dx=-\dfrac{\pi^2}{6}$。

（2）$(L)\int_0^1\ln\dfrac{1+x}{1-x}\,dx=2\ln 2$。

**2.** （1）设 $f(x)=\sin(1/x)/x^\alpha$（$0<x\le1$），$f(0)=0$。讨论当 $\alpha$ 为何值时，$f$ 在 $[0,1]$ 上 Lebesgue 可积或不可积。

（2）设 $f(x)=\sin(1/x)/x^\alpha$（$|x|>0$），$f(0)=0$。讨论当 $\alpha>0$ 为何值时，$f$ 在 $(-\infty,+\infty)$ 上 Lebesgue 可积或不可积。

**3.** 证明：

（1）$\displaystyle\lim_{n\to\infty}(L)\int_0^{+\infty}\frac{dx}{(1+x/n)^n x^{1/n}}=1$。

（2）$\displaystyle\lim_{n\to\infty}(L)\int_0^{+\infty}\frac{\ln^p(x+n)}n e^{-x}\cos x\,dx=0$，其中 $p$ 为固定的正数。

**4.** 如果 $f(x)$ 在 $[a,b]$ 上 Lebesgue 可积，则对 $\forall\varepsilon>0$，$\exists\varphi\in C([a,b])$，使 $(L)\int_a^b|f(x)-\varphi(x)|\,dx<\varepsilon$。

**5.** 设 $f(x)$ 为 $[a,b]$ 上的 Lebesgue 可积函数，则对 $\forall\varepsilon>0$，存在 $[a,b]$ 上的阶梯函数 $s(x)$，使 $\int_a^b|f(x)-s(x)|\,dx<\varepsilon$。

**6.** 设 $f$ 在 $[a,b]$ 上 Lebesgue 可积。证明：

$$
\lim_{n\to\infty}\int_a^b f(x)|\sin nx|\,dx=\int_a^b f(x)\,dx,
$$

$$
\lim_{n\to\infty}\int_a^b f(x)|\cos nx|\,dx=\int_a^b f(x)\,dx.
$$

**7.** 设 $F$ 为 $[0,1]$ 中的闭集，$m(F)=0$。问：$\chi_F(x)$ 在 $[0,1]$ 上 Riemann 可积吗？

**8.** 设 $E\subset[0,1]$。证明：$\chi_E$ 在 $[0,1]$ 上 Riemann 可积当且仅当 $m(\overline E-E^\circ)=m(\partial E)=0$。

**9.** 设 $f,g$ 为 $[a,b]$ 上的 Riemann 可积函数，并且在 $[a,b]$ 的一个稠密子集 $D$ 上其值相等。证明：$(R)\int_a^b f(x)\,dx=(R)\int_a^b g(x)\,dx$。

**10.** 设 $f$ 为 $[a,b]$ 上的有界函数，其不连续点集 $D_f$ 只有至多可数个聚点。证明：$f$ 为 $[a,b]$ 上的 Riemann 可积函数。

**11.** 设 $f$ 为 $\mathbb R^1$ 上的有界函数。如果对每一点 $x\in\mathbb R^1$，极限函数 $\lim_{h\to0} f(x+h)$ 存在有限。证明：$f$ 在任一区间 $[a,b]$ 上是 Riemann 可积的。

**12.** 设 $f\in\mathcal L(\mathbb R^1)$。证明：$(L)\int_a^b f(x+t)\,dx=(L)\int_{a+t}^{b+t}f(x)\,dx$。

**13.** 设 $f(x)$ 为 $[0,1]$ 上的递增函数。证明：对 $E\subset[0,1]$，$m(E)=t$，有 $(L)\int_0^t f(x)\,dx\le(L)\int_E f(x)\,dx$。

**14.** 设 $f\in\mathcal L(\mathbb R^1)$，$a>0$。证明：级数 $F(x)=\sum_{n=-\infty}^{\infty}f(x/a+n)$ 在 $\mathbb R^1$ 上几乎处处绝对收敛，且 $F(x)$ 为以 $a$ 为周期的周期函数，$F\in\mathcal L([0,a])$。

## 练习题 3.6

教材第 282—283 页

**1.** 设 $E\subset(a,b)$ 为稠密集，$f,g:[a,b]\to\mathbb R$ 为两个单调函数，且 $f(x)=g(x)$，$\forall x\in E$。证明：$f$ 与 $g$ 有相同的连续点，并且在不连续点 $x$ 的跳跃度相等，即 $|f(x^+)-f(x^-)|=|g(x^+)-g(x^-)|$。

**2.** 设 $f$ 在 $[0,a]$ 上为有界变差函数。证明：函数 $F(x)=x^{-1}\int_0^x f(t)\,dt$（$x\in(0,a]$），$F(0)=f(0^+)$，为 $[0,a]$ 上的有界变差函数。

**3.** 设 $\{f_k\}$ 为 $[a,b]$ 上的有界变差函数列，且有 $\bigvee_a^b(f_k)\le M$，$k=1,2,\ldots$，$\lim_{k\to\infty}f_k(x)=f(x)$，$\forall x\in[a,b]$。证明：$f\in\mathrm{BV}([a,b])$，且 $\bigvee_a^b(f)\le M$。

**4.** 设 $f\in\mathrm{BV}([a,b])$，$f_n\in\mathrm{BV}([a,b])$，$n=1,2,\ldots$，且有 $\lim_{n\to\infty}\bigvee_a^b(f-f_n)=0$。证明：存在 $\{f_n\}$ 的子列 $\{f_{n_i}\}$，使在 $[a,b]$ 上有 $\lim_{i\to\infty} f'_{n_i}(x)\underset{m}{\overset{\cdot}{=}} f'(x)$。

**5.** 设 $f$ 为 $(a,b)$ 上的单调增函数，$E\subset(a,b)$。如果对 $\forall\varepsilon>0$，存在 $(a_i,b_i)\subset(a,b)$，$i=1,2,\ldots$，使 $\bigcup_{i=1}^\infty(a_i,b_i)\supset E$，$\sum_{i=1}^\infty[f(b_i)-f(a_i)]<\varepsilon$。证明：在 $E$ 上有 $f'(x)\underset{m}{\overset{\cdot}{=}}0$。

**6.** 设 $E$ 为 $\mathbb R^1$ 中一族（开、闭、半开闭）区间的并集。证明：$E$ 为 Lebesgue 可测集。

**7.** 设 $f\in\mathrm{BV}([a,b])$，且点 $x_0\in[a,b]$ 为 $f(x)$ 的连续点。证明：$\bigvee_a^x(f)$ 在点 $x_0$ 处连续。进而，证明有界变差的连续函数可用两个连续的增函数之差来表示。

**8.** 设 $a<c<b$，$f:[a,b]\to\mathbb R$ 为有界变差函数。证明：

（1）$\mathop{\bigvee\nolimits^{+}}\limits_a^b(f)=\mathop{\bigvee\nolimits^{+}}\limits_a^c(f)+\mathop{\bigvee\nolimits^{+}}\limits_c^b(f)$。

（2）$\mathop{\bigvee\nolimits^{-}}\limits_a^b(f)=\mathop{\bigvee\nolimits^{-}}\limits_a^c(f)+\mathop{\bigvee\nolimits^{-}}\limits_c^b(f)$。

**9.** 设 $f$ 为 $[a,b]$ 上的有界变差函数，且连续。证明：对 $\forall\varepsilon>0$，必 $\exists\delta>0$，当 $[a,b]$ 的分割 $\Delta:a=x_0<x_1<\cdots<x_n=b$ 的模 $\|\Delta\|=\max_{1\le i\le n}(x_i-x_{i-1})<\delta$ 时，总有 $v_\Delta(f)>\bigvee_a^b(f)-\varepsilon$。由此立知 $\lim_{\|\Delta\|\to0}v_\Delta(f)=\bigvee_a^b(f)$（参阅引理 3.8.4）。

**10.** 试在 $[0,1]$ 上作一严格单调增的函数 $f(x)$，使 $f'(x)\underset{m}{\overset{\cdot}{=}}0$，$x\in[0,1]$。

**11.** 设 $\{x_n\}\subset[a,b]$。试作 $[a,b]$ 上的单调增函数，其不连续点集恰为 $\{x_n\}$。

**12.** 设 $\alpha>0$，$M$ 为常数。如果 $|f(y)-f(x)|\le M|y-x|^\alpha$，$\forall x,y\in[a,b]$，则称 $f$ 满足 $\alpha$ 次的 Hölder 条件。证明：

（1）当 $\alpha>1$ 时，$f$ 恒为常数。

（2）作一个不满足任何次 Hölder 条件的有界变差函数。

（3）当 $0<\alpha<1$ 时，作一个函数满足 $\alpha$ 次 Hölder 条件，但不是有界变差的。

（4）作一个不满足任何 $\alpha$（$1/3<\alpha<+\infty$）次 Hölder 条件的绝对连续函数。

## 练习题 3.7

教材第 304 页

**1.** 设 $f(x,y)$ 在 $[0,1]\times[0,1]$ 上为 Lebesgue 可积函数。证明：

$$
\int_0^1\left[\int_0^x f(x,y)\,dy\right]dx=\int_0^1\left[\int_y^1 f(x,y)\,dx\right]dy.
$$

**2.** 证明：$\displaystyle (L)\iint_{[0,+\infty)^2}\frac{dx\,dy}{(1+y)(1+x^2y)}=\frac{\pi^2}{2}$。

**3.** 设 $f\in\mathcal L((0,+\infty))$ 为非负函数，令 $F(x)=x^{-1}\int_0^x f(t)\,dt$，$x>0$。证明：$F\notin\mathcal L((0,+\infty))$。

**4.** $f(x),g(x)$ 为 $E\subset\mathbb R^1$ 上非负 Lebesgue 可测函数，$fg\in\mathcal L(E)$。令 $E_y=\{x\in E\mid g(x)\ge y\}$。证明：对 $\forall y>0$，$F(y)=(L)\int_{E_y} f(x)\,dx$ 均存在有限，且有 $(L)\int_0^{+\infty}F(y)\,dy=(L)\int_E f(x)g(x)\,dx$。

**5.** 设 $A,B$ 为 $\mathbb R^n$ 中的 Lebesgue 可测集。证明：$(L)\int_{\mathbb R^n}m((A-\{x\})\cap B)\,dx=m(A)\cdot m(B)$。

**6.** 设 $f(x),g(x)$ 为 $E\subset\mathbb R^1$ 上的 Lebesgue 可测函数，$m(E)<+\infty$。如果 $f(x)+g(y)$ 在 $E\times E$ 上 Lebesgue 可积。证明：$f(x),g(x)$ 都为 $E$ 上的可积函数。

## 练习题 3.8

教材第 340—343 页

**1.** 证明：绝对连续函数四种定义是等价的。

**2.** 设 $f:[a,b]\to[f(a),f(b)]$ 为绝对连续的严格增函数，$g(y)$ 为 $[f(a),f(b)]$ 上的绝对连续函数。证明：$g\circ f(x)=g(f(x))$ 为 $[a,b]$ 上的绝对连续函数。

**3.** 设 $g(x)$ 为 $[a,b]$ 上的绝对连续函数，$f$ 在 $\mathbb R^1$ 上满足 Lipschitz 条件。证明：$f\circ g(x)=f(g(x))$ 为 $[a,b]$ 上的绝对连续函数。

**4.** 设 $f$ 为 $[a,b]$ 上的非负绝对连续函数。证明：$f^p(x)$（$p>1$）为 $[a,b]$ 上的绝对连续函数。

**5.** 设 $f$ 为 $[a,b]$ 上的有界变差函数，则 $\dfrac d{dx}\bigvee_a^x(f)\underset{m}{\overset{\cdot}{=}}|f'(x)|$。

**6.** （1）设 $f$ 为 $[a,b]$ 上的绝对连续函数。证明：$\bigvee_a^b(f)=(L)\int_a^b|f'(x)|\,dx$。

（2）设 $f$ 在 $[a,b]$ 上可导，且 $f'\in\mathcal R([a,b])$，即 $f'$ 在 $[a,b]$ 上是 Riemann 可积的。证明：$\bigvee_a^b(f)=(R)\int_a^b|f'(x)|\,dx$。

（3）设 $f$ 在 $[a,b]$ 上可导，且 $f'$ 在 $[a,b]$ 上是广义 Riemann 可积的。证明：$\bigvee_a^b(f)=(R)\int_a^b|f'(x)|\,dx$。

**7.** 设 $f$ 为 $[a,b]$ 上的有界变差函数，则

$$
p(x)=\tfrac12\left[\bigvee_a^x(f)+f(x)-f(a)\right],
$$

$$
n(x)=\tfrac12\left[\bigvee_a^x(f)-f(x)+f(a)\right]
$$

分别称为 $f$ 的正变差函数与负变差函数。我们还称 $\bigvee_a^x(f)=p(x)+n(x)$，$f(x)-f(a)=p(x)-n(x)$ 为 $f(x)$ 的正规分解。证明：

（1）$p(x),n(x)$ 为 $[a,b]$ 上的单调增的函数。

（2）$f$ 与 $\bigvee_a^x(f)$ 有相同的右（左）连续点，有相同的连续点。

（3）$x_0$ 为 $f$ 的连续点当且仅当 $x_0$ 同时为 $p,n$ 两个函数的连续点。

（4）惟一地存在 $(a,b)$ 上右连续的有界变差函数 $g$，使得（a）在 $(a,b)$ 中 $f$ 的连续点上 $g(x)=f(x)$；（b）$g(a)=f(a),g(b)=f(b)$；（c）$\bigvee_a^b(g)\le\bigvee_a^b(f)$（考察 $g(x)=f(x^+)$）。

（5）设 $\{x_k\}$ 为 $f$ 的不连续点的全体（至多可数）。易见，

$$
\sum_k[|f(x_k^+)-f(x_k)|+|f(x_k)-f(x_k^-)|]\le\bigvee_a^b(f)<+\infty.
$$

作 $f$ 的跳跃函数

$$
\begin{aligned}\varphi(x)={}&\sum_k[f(x_k^+)-f(x_k)]\theta(x-x_k)\\&+\sum_k[f(x_k)-f(x_k^-)]\theta_1(x-x_k),\end{aligned}
$$

则 $g=f-\varphi$ 为连续的有界变差函数。换言之，任何一个有界变差函数总可以表示为一个连续的有界变差函数与一个跳跃函数之和，即 $f=(f-\varphi)+\varphi$。其中 $\theta(x)$ 在 $x>0$ 时为 $1$，在 $x\le0$ 时为 $0$，称为 Heaviside 函数。它单调增，在 $x=0$ 左连续但非右连续。再设 $\theta_1(x)$ 在 $x\ge0$ 时为 $1$，在 $x<0$ 时为 $0$，它也单调增，在 $x=0$ 右连续但非左连续，且 $\theta_1(x)=1-\theta(-x)$。

**8.** 设 $f$ 为 $[a,b]$ 上的绝对连续函数。证明：$\bigvee_a^x(f),p(x),n(x)$ 都为绝对连续函数。

**9.** （Lebesgue 分解定理）设 $f$ 为 $[a,b]$ 上的有界变差函数。证明：$f$ 可分解为 $f=f_c+f_s+\varphi$，其中 $\varphi$ 为 $f$ 在 $[a,b]$ 上的跳跃函数，$f_c$ 为 $[a,b]$ 上的绝对连续函数，$f_s$ 为奇异的有界变差函数（当然，$f_c,f_s,\varphi$ 三个函数可以在上述分解中不全出现）。在相差一个常数意义下，三个函数 $f_c,f_s,\varphi$ 均由 $f$ 惟一决定。

**10.** 设 $f$ 为 $\mathbb R^1$ 上的有界可测函数，且对 $\forall t\in\mathbb R^1$，关于 $x\in\mathbb R^1$，有 $f(x)\underset{m}{\overset{\cdot}{=}} f(x-t)$。证明：存在常数 $c$，使得在 $\mathbb R^1$ 上 $f(x)\underset{m}{\overset{\cdot}{=}} c$。

**11.** 设 $f$ 为 $\mathbb R^1$ 上的有界增函数，且在 $\mathbb R^1$ 上可导。记 $\lim_{x\to-\infty} f(x)=A$，$\lim_{x\to+\infty}f(x)=B$。证明：$\int_{\mathbb R^1}f'(x)\,dx=B-A$。

**12.** 设 $f$ 在 $\mathbb R^1$ 上可导，且 $f$ 与 $f'$ 都为 $\mathbb R^1$ 上的 Lebesgue 可积函数。证明：$\int_{\mathbb R^1}f'(x)\,dx=0$。

**13.** 设 $f$ 为 $[a,b]$ 上的单调函数。证明：$f$ 为 $[a,b]$ 上的绝对连续函数当且仅当对 $\forall E\subset[a,b]$，$E\in\mathcal R_\sigma(\mathcal P)=\mathcal R(\mathcal J)=\mathcal B$（Borel 集类），$m(E)=0$，必有 $m(f(E))=m(\{f(x)\mid x\in E\})=0$。

**14.** （1）设 $f:\mathbb R^1\to\mathbb R$ 为 $C^1$ 映射，$E$ 为 Lebesgue 可测集，且 $m(E)=0$，则 $m(f(E))=0$。

（2）若 $f$ 只是可导函数，上述结论仍成立。

**15.** 证明：$[a,b]$ 上导数处处存在且有限的单调函数（或有界变差函数）$f$ 必为绝对连续函数。

**16.** 设 $f\in\mathcal L([0,1])$，$g$ 为定义在 $[0,1]$ 上的单调增函数。如果对 $\forall[a,b]\subset[0,1]$，有

$$
\left|(L)\int_a^b f(x)\,dx\right|^2\le[g(b)-g(a)](b-a).
$$

证明：$f^2$ 为 $[0,1]$ 上的 Lebesgue 可积函数。

**17.** 证明：$f$ 在 $[a,b]$ 上满足 Lipschitz 条件当且仅当存在 $[a,b]$ 上有界的 Lebesgue 可测函数 $g$（此时 $g\in\mathcal L([a,b])$），使 $f(x)=f(a)+\int_a^x g(t)\,dt$。充分性中，有界条件能否删去？$[a,b]$ 上的绝对连续函数是否必满足 Lipschitz 条件？

**18.** 设 $f$ 为 $[a,b]$ 上的凸函数，即对任何 $a\le x_1<x_2\le b$，$\forall\lambda\in(0,1)$，总有 $f(\lambda x_1+(1-\lambda)x_2)\le\lambda f(x_1)+(1-\lambda)f(x_2)$。它等价于：对任何 $a\le x_1<x_2<x_3\le b$，有

$$
\frac{f(x_2)-f(x_1)}{x_2-x_1}\le\frac{f(x_3)-f(x_1)}{x_3-x_1}\le\frac{f(x_3)-f(x_2)}{x_3-x_2}
$$

（参阅 [13] 222 页定理 3.6.1）。证明：凸函数 $f$ 必为 $(a,b)$ 上的连续函数。如果 $f$ 在 $a,b$ 两点连续，则 $f$ 为 $[a,b]$ 上的绝对连续函数。$f'_+$（右导数）在 $[a,b)$ 上处处存在有限，且为单调增函数。

**19.** 构造 $\mathbb R^1$ 上具有连续导数的严格增函数，使其导函数在一个已给定的完全疏朗集 $C$ 上恒为零。

## 复习题 3

教材第 372—379 页

**1.** 设 $\{f_k\}$ 在 $[a,b]$ 上依 Lebesgue 测度收敛于 $f$，$g$ 为 $\mathbb R^1$ 上的连续函数。证明：$\{g(f_k(x))\}$ 在 $[a,b]$ 上依测度收敛于 $g(f(x))$。

**2.** （定理 3.2.10 的逆定理）设 $f$ 为 Lebesgue 可测集 $E\subset\mathbb R^n$ 上的实函数，且对 $\forall\delta>0$，存在 $E$ 中的闭集 $F$，$m(E-F)<\delta$，使 $f$ 在 $F$ 上连续。证明：$f$ 为 $E$ 上的 Lebesgue 可测函数。

**3.** 设 $f:\mathbb R^1\to\mathbb R$ 为有界函数。证明：存在 $\mathbb R^1$ 上几乎处处连续的函数 $g$，使 $f(x)\underset{m}{\overset{\cdot}{=}} g(x)$，当且仅当 $\exists E\subset\mathbb R^1$，使 $m(\mathbb R^1-E)=0$，$f$ 在 $E$ 上连续。

**4.** 设 $\{f_{k,i}\}$ 为 $[0,1]$ 上的 Lebesgue 可测函数列，且满足：

（1）$\lim_{i\to\infty} f_{k,i}(x)\underset{m}{\overset{\cdot}{=}} f_k(x)$；

（2）$\lim_{k\to\infty} f_k(x)\underset{m}{\overset{\cdot}{=}} g(x)$。

证明：存在 $\{k_j\},\{i_j\}$，使 $\lim_{j\to\infty}f_{k_j,i_j}(x)\underset{m}{\overset{\cdot}{=}} g(x)$。

**5.** 设 $E\subset\mathbb R^1$ 为 Lebesgue 可测集，$f$ 为 $E$ 上的 Lebesgue 可测函数。证明：对任一 Borel 可测集 $B$，$f^{-1}(B)=\{x\mid f(x)\in B\}$ 为 Lebesgue 可测集。

**6.** 设 $E\subset\mathbb R^1$ 为 Lebesgue 可测集，$\{f_k\}$ 为 $E$ 上依 Lebesgue 测度的收敛列，且存在常数 $M$，对 $\forall k\in\mathbb N$，有 $|f_k(x_1)-f_k(x_2)|\le M|x_1-x_2|$，$\forall x_1,x_2\in E$。问：$\{f_k\}$ 为 $E$ 上的几乎处处收敛列吗？

**7.** 设 $(X,\mathcal R)$ 为可测空间，$E\in\mathcal R$，$f$ 为 $E$ 上的有界可测函数。证明：必存在可测集的特征函数线性组合构成的函数列 $\{f_n\}$ 在 $E$ 上一致收敛于 $f$，并且 $|f_n(x)|\le\sup_{x\in E}|f(x)|$，$n\in\mathbb N$。

**8.** 设 $f(x)$ 为 $E$ 上的实值 Lebesgue 可测函数，$g(x)$ 为 $\mathbb R^1$ 上的实值 Borel 可测函数。证明：$h(x)=g(f(x))$ 为 $E$ 上的 Lebesgue 可测函数。

**9.** 设 $\{f_n\}$ 为 $\mathbb R^1$ 上的 Lebesgue 可测函数，$\{\lambda_n\}$ 为正数列。如果 $\sum_{n=1}^\infty m(\{x\mid |f_n(x)|/\lambda_n>1\})<+\infty$，证明：$\varlimsup_{n\to\infty}|f_n(x)|/\lambda_n\le1$ 几乎处处成立。

**10.** 设 $f\in\mathcal L((0,+\infty))$，$[a_\lambda,b_\lambda]$ 为 $(0,+\infty)$ 上的与正数 $\lambda$ 有关的区间。证明：$\lim_{\lambda\to+\infty}(L)\int_{a_\lambda}^{b_\lambda}f(t)\cos\lambda t\,dt=0$。

**11.** （1）设 $f$ 为 $[a,b]$ 上的凸函数，$(X,\mathcal R,\mu)$ 为测度空间，$E\in\mathcal R$，$p$ 为 $E$ 上非负可积函数。又设 $\varphi$ 为 $E$ 上的可测函数，且对 $\forall x\in E$，$\varphi(x)\in[a,b]$。证明 Jensen 不等式

$$
f\left(\frac{\int_E\varphi(x)p(x)\,d\mu}{\int_Ep(x)\,d\mu}\right)\le\frac{\int_E f(\varphi(x))p(x)\,d\mu}{\int_Ep(x)\,d\mu}.
$$

它等价于：$\int_Ep(x)\,d\mu=1$ 时，$f(\int_E\varphi(x)p(x)\,d\mu)\le\int_E f(\varphi(x))p(x)\,d\mu$。

（2）设 $\varphi(x),p(x)$ 为 $[0,1]$ 上的正值 Lebesgue 可测函数。如果 $\varphi(x)p(x)\ge1$，$\forall x\in[0,1]$。证明：$(L)\int_0^1\varphi(x)\,dx\cdot(L)\int_0^1p(x)\,dx\ge1$。

**12.** （Riemann–Lebesgue）设 $g$ 为 $\mathbb R^1$ 上的有界 Lebesgue 可测的周期函数，周期为 $T>0$。证明：对 $f\in\mathcal L(\mathbb R^1)$，有

$$
\lim_{|\lambda|\to+\infty}\int_{\mathbb R^1}f(x)g(\lambda x)\,dx=\left(\frac1T\int_0^T g(x)\,dx\right)\left(\int_{\mathbb R^1} f(x)\,dx\right).
$$

**13.** 设 $\{a_n\}$ 为实数列，并令 $E=\{x\in\mathbb R^1\mid\lim_{n\to\infty}e^{ia_nx}\text{ 存在有限}\}$，若 $m(E)>0$。证明：$\{a_n\}$ 为收敛列。

**14.** 设 $E_k\subset[a,b]$，$m(E_k)\ge\delta>0$（$k=1,2,\ldots$），$\{a_k\}$ 为一实数列，且在 $[a,b]$ 上满足 $\sum_{k=1}^\infty|a_k|\chi_{E_k}(x)<+\infty$ 几乎处处成立。证明：$\sum_{k=1}^\infty |a_k|<+\infty$。

**15.** 设 $\{f_n\}$ 为 $[0,1]$ 上的 Lebesgue 可测函数列，且存在实数列 $\{t_n\}$，使 $\sum_{n=1}^\infty |t_n|=+\infty$，而 $\sum_{n=1}^\infty t_nf_n(x)$ 在 $[0,1]$ 上几乎处处绝对收敛。证明：存在 $\{n_k\}$，使 $\{f_{n_k}(x)\}$ 在 $[0,1]$ 上几乎处处收敛于 $0$。

**16.** 设 $\{n_k\}$ 为自然数子列，$n_1<n_2<\cdots<n_k<\cdots$，且令 $E=\{x\in[0,2\pi]\mid\{\sin n_kx\}\text{ 为收敛列}\}$。证明：$m(E)=0$。

**17.** 设 $f,g\in\mathcal L(\mathbb R^1)$，且满足 $(L)\int_{\mathbb R^1}f(x)\,dx=(L)\int_{\mathbb R^1}g(x)\,dx=1$。证明：对 $\forall\lambda\in(0,1)$，$\exists E\subset\mathbb R^1$，使 $(L)\int_E f(x)\,dx=(L)\int_Eg(x)\,dx=\lambda$。

**18.** 证明：不存在 $g\in\mathcal L(\mathbb R^n)$，使对 $\forall f\in\mathcal L(\mathbb R^n)$，在 $\mathbb R^n$ 上有 $(g*f)(x)\underset{m}{\overset{\cdot}{=}} f(x)$，其中 $(g*f)(x)=\int_{\mathbb R^n}g(x-y)f(y)\,dy$。

**19.** 设 $f$ 为 $\mathbb R^1$ 上的 Lebesgue 可测函数，并且它在任何有限区间 $(a,b)$ 上 Lebesgue 可积，而 $h$ 在 $\mathbb R^1$ 上有 $n$ 阶连续导数，在 $[-M,M]$ 外为零。证明：函数 $(f*h)(t)=(L)\int_{\mathbb R^1} f(t-x)h(x)\,dx$ 为对 $t$ 具有 $n$ 阶导数的函数。

**20.** 设 $f(x)$ 为 $E\subset\mathbb R^1$ 上的 Lebesgue 可测函数。对 $\forall\lambda>0$，作点集 $\{x\in E\mid |f(x)|>\lambda\}$，它是 Lebesgue 可测集。显然 $f_*(\lambda)=m(\{x\in E\mid |f(x)|>\lambda\})$ 为 $(0,+\infty)$ 上的单调减函数。我们有

$$
\int_E |f(x)|^p\,dx=p\int_0^{+\infty}\lambda^{p-1} f_*(\lambda)\,d\lambda,
$$

其中 $1\le p<+\infty$。

**21.** 设 $f$ 为 $E\subset\mathbb R^1$ 上的有界 Lebesgue 可测函数，且 $\exists M>0$ 以及 $\alpha<1$，使对 $\forall\lambda>0$，有 $m(\{x\in E\mid |f(x)|>\lambda\})<M/\lambda^\alpha$。证明：$f\in\mathcal L(E)$。

**22.** 设 $f$ 在 $\mathbb R^n$ 中的任一具有有限测度的 Lebesgue 可测集上都是 Lebesgue 可积的。证明：$f$ 可分解为两部分 $f(x)=f_1(x)+f_2(x)$，其中 $f_1\in\mathcal L(\mathbb R^n)$，$f_2$ 在 $\mathbb R^n-B$ 上为有界函数，而 $m(B)=0$。

**23.** 设 $f$ 在 $[a,b+\delta]$（$\delta>0$）上 Lebesgue 可积，则

$$
\lim_{h\to0^+}\int_a^b|f(x+h)-f(x)|\,dx=0,
$$

$$
\lim_{h\to0^+}\int_a^b f(x+h)\,dx=\int_a^b f(x)\,dx.
$$

**24.** 设 $f$ 为 $[a,b+\delta]$（$\delta>0$）上的 Lebesgue 可积函数。$E\subset[a,b]$ 为 Lebesgue 可测集。则

$$
\lim_{h\to0^+}\int_E|f(x+h)-f(x)|\,dx=0,
$$

$$
\lim_{h\to0^+}\int_E f(x+h)\,dx=\int_E f(x)\,dx.
$$

**25.** 设有界的非负 Lebesgue 可测函数 $f$ 在 $\mathbb R^1$ 上具有可任意小的周期。证明：在 $\mathbb R^1$ 上 $f(x)\underset{m}{\overset{\cdot}{=}}\lambda$，其中 $\lambda$ 为常数。试具体给出两个此类函数。

**26.** 设 $f$ 在 $[0,+\infty)$ 上 Lebesgue 可积，并且一致连续。证明：$\lim_{x\to+\infty}f(x)=0$。举例说明“一致连续”条件不可删去。

**27.** 设 $f$ 为 $\mathbb R^1$ 上的 Lebesgue 可积函数。证明：$\sum_{n=-\infty}^{\infty}f(n^2x)$ 在 $\mathbb R^1$ 上关于 Lebesgue 测度几乎处处等于一个 Lebesgue 可积函数。

**28.** 设 $f:[a,b]\to\mathbb R$ 为增函数。

（1）如果 $f$ 具有性质 $(N)$：对 $\forall e\subset[a,b]$，$m(e)=0$，必定有 $m(f(e))=0$。且对 $\forall x\in E\subset[a,b]$，至少有一个导出数 $Df(x)\le p$（$0\le p<+\infty$），则 $m^*(f(E))\le p\,m^*(E)$。

（2）如果对 $\forall x\in E\subset[a,b]$，至少有一个导出数 $Df(x)\ge q$（$q\ge0$），则 $m^*(f(E))\ge q\,m^*(E)$。

**29.** 设 $f\in\mathrm{BV}([a,b])$。证明：$\exists M>0,\delta>0$，使当 $0<|h|<\delta$ 时，有 $|h|^{-1}(L)\int_a^b|f(x+h)-f(x)|\,dx\le M$。

**30.** 设 $f$ 在 $(a,b)$ 上 Lebesgue 可积，且对 $\forall[\alpha,\beta]\subset(a,b)$，$\exists\delta>0$，使当 $|h|<\delta$ 时，有 $(L)\int_\alpha^\beta|f(x+h)-f(x)|\,dx\le M|h|$。证明：在 $(a,b)$ 上 $f(x)\underset{m}{\overset{\cdot}{=}} g(x)$，其中 $g\in\mathrm{BV}([\alpha,\beta])$。

**31.** 设 $f:[a,b]\to[c,d]$ 为连续函数，且对 $\forall y\in[c,d]$，点集 $f^{-1}(y)$ 至多有 20 个点。证明：$\bigvee_a^b(f)\le20(d-c)$。

**32.** 设 $f$ 为 $[a,b]$ 上单调增的函数，且有 $(L)\int_a^b f'(x)\,dx=f(b)-f(a)$。证明：$f$ 为 $[a,b]$ 上的绝对连续函数。

**33.** 设 $f_k$（$k=1,2,\ldots$）为定义在 $[a,b]$ 上的单调增且绝对连续的函数列，级数 $\sum_{k=1}^\infty f_k(x)$ 在 $[a,b]$ 上处处收敛。证明：和函数 $\sum_{k=1}^\infty f_k(x)$ 在 $[a,b]$ 上为绝对连续函数。

**34.** 设 $f(x,y)$ 为定义在 $[a,b]\times[c,d]$ 上的二元函数，且 $\exists y_0\in(c,d)$，使 $f(x,y_0)$ 在 $[a,b]$ 上是 Lebesgue 可积的；又对 $\forall x\in[a,b]$，$f(x,y)$ 是 $[c,d]$ 上关于 $y$ 的绝对连续函数，$f'_y(x,y)$ 在 $[a,b]\times[c,d]$ 上是 Lebesgue 可积的。证明：$F(y)=(L)\int_a^b f(x,y)\,dy$ 是定义在 $[c,d]$ 上的绝对连续函数，且关于 Lebesgue 测度对几乎所有的 $y\in[c,d]$ 有 $F'(y)=(L)\int_a^b f'_y(x,y)\,dx$。

**35.** 设 $f$ 为 $[a,b]$ 上的单调增函数。证明：$f$ 可分解为 $f(x)=g(x)+h(x)$，$x\in[a,b]$，其中 $g$ 为单调增的绝对连续函数，$h$ 为单调增函数，且在 $[a,b]$ 上有 $h'(x)\underset{m}{\overset{\cdot}{=}}0$。

**36.** 设 $f$ 在任一区间 $[a,b]\subset\mathbb R^1$ 上都绝对连续。证明：对 $\forall y\in\mathbb R^1$，有

$$
\frac d{dy}\int_a^b f(x+y)\,dx=\int_a^b\frac d{dy}f(x+y)\,dx.
$$

其中上式左右两端的积分均为 Lebesgue 积分。

**37.** 举例说明绝对连续函数关于 Lebesgue 测度几乎处处可导这个结论一般是不能改进的。

**38.** 设 $\{g_k\}$ 为 $[a,b]$ 上的绝对连续函数列，又在 $[a,b]$ 上，有 $|g'_k(x)|\le F(x)$ 几乎处处成立，$k=1,2,\ldots$，且 $F\in\mathcal L([a,b])$。如果在 $[a,b]$ 上，有 $\lim_{k\to\infty}g_k(x)\underset{m}{\overset{\cdot}{=}} g(x)$，$\lim_{k\to\infty}g'_k(x)\underset{m}{\overset{\cdot}{=}} f(x)$，证明：$g'(x)\underset{m}{\overset{\cdot}{=}} f(x)$，$x\in[a,b]$。

**39.** （1）设 $f$ 为 $[a,b]$ 上的绝对连续函数，则 $|f(x)|$ 在 $[a,b]$ 上也为绝对连续函数。

（2）举例说明：$|f(x)|$ 为 $[a,b]$ 上的绝对连续函数，但 $f(x)$ 却未必为 $[a,b]$ 上的绝对连续函数。

（3）设 $f$ 为 $[a,b]$ 上的连续函数，$|f(x)|$ 为 $[a,b]$ 上的绝对连续函数。问：$f(x)$ 为 $[a,b]$ 上的绝对连续函数吗？

**40.** 设 $f(x)$ 为 $[a,b]$ 上的连续函数。如果 $f(x)$ 为有界变差函数，且具有性质 $(N)$，则 $f(x)$ 为 $[a,b]$ 上的绝对连续函数。

**41.** 设 $f$ 为 $[a,b]$ 上严格增的连续函数，$E=\{x\in[a,b]\mid f'(x)=\infty\}$。证明：$f$ 为 $[a,b]$ 上的绝对连续函数当且仅当 $m(f(E))=0$。

**42.** 试作 $[0,1]$ 上的绝对连续函数 $f(x),g(x)$，使得：

（1）$f(x)$ 严格递增，且 $f'(x)=0$（$x\in E$），$m(E)>0$。

（2）$g(x)$ 不在任一区间上单调。

**43.** 设 $f$ 在 $x_0$ 的开邻域中，存在有限的极限

$$
\lim_{\substack{x_1\ne x_2\\(x_1,x_2)\to(x_0,x_0)}}\frac{f(x_2)-f(x_1)}{x_2-x_1}\overset{\mathrm{def}}{=}\overset{\nabla}{f}(x_0),
$$

则称 $f$ 在点 $x_0$ 处强可导。证明：如果 $f$ 在 $[a,b]$ 中每一点上均强可导，则 $f$ 在 $[a,b]$ 上为绝对连续函数。

**44.** 证明：$f$ 在 $[a,b]$ 上绝对连续当且仅当对 $\forall\varepsilon>0$，$\exists A>0$，使对 $[a,b]$ 中的任何有限个互不相交的子区间 $\{[x_i,y_i]\mid i=1,\ldots,n\}$，有

$$
\sum_{i=1}^n |f(x_i)-f(y_i)|\le A\sum_{i=1}^n |x_i-y_i|+\varepsilon.
$$

**45.** 设 $f$ 为 $\mathbb R^1$ 上非负实值 Lebesgue 可测函数，$\varphi$ 在 $[0,+\infty)$ 上单调增，且在任一区间 $[0,a]$（$a>0$）上绝对连续，又 $\varphi(0)=0$。令 $G_t=\{x\mid f(x)>t\}$，$t>0$。证明：对 $\mathbb R^1$ 中任何 Lebesgue 可测集 $E$，有

$$
(L)\int_E\varphi(f(x))\,dx=(L)\int_0^{+\infty}m(E\cap G_t)\varphi'(t)\,dt.
$$

**46.** 设 $\{f_n\}$ 为支集含于 $(a,b)$ 的连续可导函数列，且满足

$$
\lim_{n\to\infty}(L)\int_a^b|f_n(x)-f(x)|\,dx=0=\lim_{n\to\infty}(L)\int_a^b|f'_n(x)-F(x)|\,dx,
$$

其中 $f$ 在 $[a,b]$ 上连续。证明：$F(x)\underset{m}{\overset{\cdot}{=}} f'(x)$，$x\in[a,b]$。

**47.** 设 $f$ 为 $\mathbb R^1$ 上的函数，在任何有限子区间上 Lebesgue 可积，且满足 $f(x+y)=f(x)f(y)$，$\forall x,y\in\mathbb R^1$。证明：$f(x)=e^{Bx}$，其中 $B$ 为常数。

**48.** 设 $f$ 为 $[a,b]$ 上的单调增函数。令 $E=\{x\in[a,b]\mid f'(x)\text{ 存在有限}\}$。证明：$(L)\int_a^b f'(x)\,dx=m^*(f(E))$。

**49.** 设 $f$ 为定义在 $[a,b]$ 上的连续函数，除一至多可数集外，$f'(x)$ 存在有限，且 $f'$ 在 $[a,b]$ 上为 Lebesgue 可积函数。证明：$f(x)-f(a)=(L)\int_a^x f'(t)\,dt$，$x\in[a,b]$（对照 [13] 374 页定理 6.3.4，本题条件比它弱，因此它是本题之推广）。

**50.** 设 $f$ 为 $[a,b]$ 上单调增的连续函数。如果 $\exists E\subset[a,b]$，使 $m(E)=0$，且 $m(f(E))=f(b)-f(a)$。证明：在 $[a,b]$ 上 $f'(x)\underset{m}{\overset{\cdot}{=}}0$。

**51.** 构造 $[0,1]$ 上的绝对连续函数 $f$，使得 $f$ 不在 $[0,1]$ 的任何子区间上单调。

**52.** 设 $f\in C^0([a,b])$，记 $E=\{x\in[a,b]\mid D^+f(x)\le0\}$。如果 $f(E)$ 无内点，证明：$f(x)$ 单调递增。

**53.** 设 $f\in\mathcal L(\mathbb R^1)$，如果对 $\mathbb R^1$ 上的任一具有紧支集的连续函数 $g(x)$，都有 $(L)\int_{\mathbb R^1}f(x)g(x)\,dx=0$。证明：在 $\mathbb R^1$ 上 $f(x)\underset{m}{\overset{\cdot}{=}}0$。如果“连续”改为“$C^\infty$”，上述结论是否仍成立？

**54.** 设 $f\in\mathcal L((0,1))$，如果对任意支集 $\operatorname{supp}\varphi=\overline{\{x\in(0,1)\mid f(x)\ne0\}}\subset(0,1)$ 的函数 $\varphi\in C^1((0,1))$，有 $(L)\int_0^1f(x)\varphi'(x)\,dx=0$。证明：在 $(0,1)$ 上，$f'(x)\underset{m}{\overset{\cdot}{=}} c$。若将“$\varphi\in C^1((0,1))$”改为“$\varphi\in C^\infty((0,1))$”结论是否仍成立？

**55.** 设 $E\subset[a,b]$。证明：$\lim_{h\to0^+}\dfrac{m^*(E\cap[x-h,x+h])}{2h}\underset{m}{\overset{\cdot}{=}}1$，$x\in E$。

**56.** 设 $\{r_n\}$ 为 $[0,1]$ 中有理数的全体。试用两种不同的方法证明：$\sum_{n=1}^\infty\dfrac{\cos nx}{n^2|x-r_n|^{1/2}}$ 在 $\mathbb R$ 中几乎处处收敛。

**57.** 设 $(L)\int_0^1|f(x)|\,dx<+\infty$，$(L)\int_1^{+\infty}|f(x)|x^{-2}\,dx<+\infty$，证明：

$$
\int_0^{+\infty}\sin ax\,dx\int_0^{+\infty}f(y)e^{-xy}\,dy=a\int_0^{+\infty}\frac{f(y)}{a^2+y^2}\,dy,\qquad a>0.
$$

**58.** 设 $f(x)$ 的所有导出数都满足不等式 $|Df(x)|\le K$。证明：$f(x)$ 满足 Lipschitz 条件。

**59.** （菲赫金哥尔茨）设 $F(x)$ 是 $(-\infty,+\infty)$ 上定义的函数。如果对 $(-\infty,+\infty)$ 上任何绝对连续函数 $f(x)$，$F(f(x))$ 是绝对连续的。证明：$F(x)$ 满足 Lipschitz 条件。

**60.** （菲赫金哥尔茨）设 $f(x)$ 为在 $[a,b]$ 上定义的函数。如果对 $\forall\varepsilon>0$，$\exists\delta>0$，当有限个区间 $\{(a_k,b_k)\mid k=1,2,\ldots,n\}$（可以彼此相交）的全长满足 $\sum_{k=1}^n(b_k-a_k)<\delta$ 时，有 $|\sum_{k=1}^n[f(b_k)-f(a_k)]|<\varepsilon$。证明：$f(x)$ 必满足 Lipschitz 条件。

**61.** 如果 $\exists\delta_0>0$，$\forall x\in(x_0-\delta_0,x_0+\delta_0)$，当 $x<x_0$ 时 $f(x)<f(x_0)$，而当 $x>x_0$ 时 $f(x)>f(x_0)$，则称 $f(x)$ 在点 $x_0$ 处是严格增的。现设 $f(x)$ 在 $[a,b]$ 上每点处均严格增。证明：$f(x)$ 在 $[a,b]$ 上严格增。

**62.** 设 $f(x)$ 是在 $[a,b]$ 上定义的有限函数。

（1）如果 $f(x)$ 在每一点的一切导出数都为正数，则 $f(x)$ 为一个严格增函数。

（2）如果 $f(x)$ 在每一点的一切导出数都大于或等于 $0$，则 $f(x)$ 为一个增函数。

**63.** （1）设 $f(x)$ 在 $[a,b]$ 上绝对连续，且 $|f'(x)|\le M$，a.e. $x\in[a,b]$，则 $|f(y)-f(x)|\le M|y-x|$，$\forall x,y\in[a,b]$，即 $f(x)$ 在 $[a,b]$ 上满足 Lipschitz 条件。

（2）设 $f(x)$ 定义在 $[a,b]$ 上满足 Lipschitz 条件，即 $|f(y)-f(x)|\le M|y-x|$，$x,y\in[a,b]$，则 $|f'(x)|\le M$，a.e. $x\in[a,b]$。

（3）设 $f(x)$ 的所有导出数都满足 $|Df(x)|\le M$，则 $f(x)$ 满足 Lipschitz 条件。

[下载第三章讲义 PDF](/files/notes/real-functions/real-functions-chapter-3.pdf) · [第三章目录](/math/real-functions/#chapter-3)
