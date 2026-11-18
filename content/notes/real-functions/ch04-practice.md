---
title: "第四章习题与复习题"
description: "徐森林、薛春华《实变函数论》第四章全部 24 道节后练习与 33 道复习题原题，保留编号与小问，附条件校注，不附解答。"
subject: "实变函数"
category: "real-functions/chapter-4"
tags: ["实变函数", "函数空间", "复习题"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

本页按教材第 401—403、418—423 页录入。共 16 道练习题 4.1、8 道练习题 4.2、33 道复习题 4，保留原编号及全部小问，不附解答。原书用带点等号、带点不等号表示关于 $m$ 几乎处处成立，下文统一写为“几乎处处”；积分记号中无 $(L)$ 者也按本章约定为 Lebesgue 积分。

[练习题 4.1](#练习题-41) · [练习题 4.2](#练习题-42) · [复习题 4](#复习题-4) · [原题校注](#原题校注) · [第四章 PDF](/files/notes/real-functions/real-functions-chapter-4.pdf)

## 练习题 4.1

**题号跳转**　[1](#问题-411) · [2](#问题-412) · [3](#问题-413) · [4](#问题-414) · [5](#问题-415) · [6](#问题-416) · [7](#问题-417) · [8](#问题-418) · [9](#问题-419) · [10](#问题-4110) · [11](#问题-4111) · [12](#问题-4112) · [13](#问题-4113) · [14](#问题-4114) · [15](#问题-4115) · [16](#问题-4116)

教材第 401—403 页

### 问题 4.1.1

设 $R_1,R_2,\ldots,R_n,\ldots$ 为一列模空间，$x=(x_1,x_2,\ldots,x_n,\ldots)$，其中 $x_n\in R_n$，$n=1,2,\ldots$，而 $\sum_{n=1}^\infty\|x_n\|^p<+\infty$。这种元素的全体记作 $R$。定义加法与数乘：
$$
\begin{aligned}
x+y&=(x_1+y_1,x_2+y_2,\ldots,x_n+y_n,\ldots),\\
\lambda x&=(\lambda x_1,\lambda x_2,\ldots,\lambda x_n,\ldots),\qquad\lambda\in\mathbb R.
\end{aligned}
$$
证明：$(R,+,\text{数乘})$ 为一个线性空间。如果定义模
$$
\|x\|=\left(\sum_{n=1}^\infty\|x_n\|^p\right)^{1/p},\qquad1\le p<+\infty,
$$
则 $(R,\|\cdot\|)$ 为一个模空间。

### 问题 4.1.2

设 $\ell^p=\{x=(x_1,x_2,\ldots,x_n,\ldots):x_n\in\mathbb R,\ n=1,2,\ldots,\ \sum_{n=1}^\infty|x_n|^p<+\infty,\ 1\le p<+\infty\}$。定义加法、数乘为逐坐标加法、逐坐标数乘，即
$$
x+y=(x_1+y_1,x_2+y_2,\ldots),\qquad\lambda x=(\lambda x_1,\lambda x_2,\ldots),\quad\lambda\in\mathbb R.
$$
证明：

（1）$(\ell^p,+,\text{数乘})$ 为一个线性空间。

（2）设 $\|\cdot\|_p:\ell^p\to\mathbb R$，$x\mapsto\|x\|_p=(\sum_{n=1}^\infty|x_n|^p)^{1/p}$，则 $(\ell^p,\|\cdot\|_p)$ 为模空间。

（3）设 $d:\ell^p\times\ell^p\to\mathbb R$，
$$
d(x,y)=\|x-y\|_p=\left(\sum_{n=1}^\infty|x_n-y_n|^p\right)^{1/p},
$$
则 $(\ell^p,d)$ 为完备度量空间。因此 $(\ell^p,\|\cdot\|_p)$ 为 Banach 空间。

### 问题 4.1.3

证明：当 $m(E)<+\infty$，$p'>p$ 时，$\mathcal L^{p'}(E)\subset\mathcal L^p(E)$。并就 $E=(0,1)$ 举例说明 $\mathcal L^{p'}(E)\ne\mathcal L^p(E)$。

### 问题 4.1.4

就 $E=\mathbb R^1$ 举例说明：当 $m(E)=+\infty$ 时，$\mathcal L^p(E)$ 与 $\mathcal L^{p'}(E)$ 互不包含，此处 $p'>p\ge1$。

### 问题 4.1.5

设 $1\le p<r<p'$，$f\in\mathcal L^p(E)\cap\mathcal L^{p'}(E)$。证明：$f\in\mathcal L^r(E)$。

### 问题 4.1.6

设 $1\le p<+\infty$，$g\in\mathcal L^p(E)$，$f_n\in\mathcal L^p(E)$，$|f_n(x)|\le g(x)$，$n=1,2,3,\ldots$。在 $E$ 上，$\lim_{n\to\infty}f_n(x)=f(x)$ 几乎处处成立。证明：$(\mathcal L^p)\lim_{n\to\infty}f_n=f$。

### 问题 4.1.7

设 $f\in\mathcal L^2([0,1])$。令
$$
g(x)=\int_0^1\frac{f(t)}{|x-t|^{1/2}}\,dt,\qquad0<x<1.
$$
证明：
$$
\left[\int_0^1g^2(x)\,dx\right]^{1/2}\le2\sqrt2\left[\int_0^1f^2(x)\,dx\right]^{1/2}.
$$

### 问题 4.1.8

设 $f(x)$ 为 $[a,b]$ 上正值 Lebesgue 可测函数。证明：
$$
\left(\frac1{b-a}\int_a^bf(x)\,dx\right)
\left(\frac1{b-a}\int_a^b\frac{dx}{f(x)}\right)\ge1.
$$

### 问题 4.1.9

设 $f\in\mathcal L^\infty(E)$，$w(x)>0$ 且 $\int_Ew(x)\,dx=1$。证明：
$$
\lim_{p\to+\infty}\left[\int_E|f(x)|^pw(x)\,dx\right]^{1/p}=\|f\|_\infty.
$$

### 问题 4.1.10

设 $f\in\mathcal L^\infty(E)$，$m(E)<+\infty$，且 $\|f\|_\infty>0$。证明：
$$
\lim_{n\to+\infty}\frac{\|f\|_{n+1}^{n+1}}{\|f\|_n^n}=\|f\|_\infty.
$$

### 问题 4.1.11

设 $f\in\mathcal L^2((0,\pi))$。证明：
$$
\text{(1)}\ \int_0^\pi[f(x)-\sin x]^2\,dx\le\frac49;\qquad
\text{(2)}\ \int_0^\pi[f(x)-\cos x]^2\,dx\le\frac19
$$
两式不相容。

### 问题 4.1.12

设 $0<p,q<+\infty$。证明：
$$
\mathcal L^p(E)\cdot\mathcal L^q(E)=\mathcal L^{pq/(p+q)}(E),
$$
其中 $\mathcal L^p(E)\cdot\mathcal L^q(E)=\{f\cdot g:f\in\mathcal L^p(E),\ g\in\mathcal L^q(E)\}$。

### 问题 4.1.13

设 $f(x),g(x)$ 为 $E$ 上非负可测函数，$1\le p<+\infty$，$1\le q<+\infty$，$1\le r<+\infty$，$1/r=1/p+1/q-1$。证明：
$$
\int_Ef(x)g(x)\,dx\le
\|f\|_p^{1-p/r}\|g\|_q^{1-q/r}
\left(\int_Ef^p(x)g^q(x)\,dx\right)^{1/r}.
$$

### 问题 4.1.14

设 $f\in\mathcal L^p(\mathbb R^n)$，$g\in\mathcal L^q(\mathbb R^n)$，$1\le p,q<+\infty$，$1/p+1/q>1$。令 $h(x)=\int_{\mathbb R^n}f(t)g(x-t)\,dt$。证明：
$$
\|h\|_r\le\|f\|_p\|g\|_q,\qquad\frac1r=\frac1p+\frac1q-1.
$$

### 问题 4.1.15

设 $0<p_0<q_0<+\infty$。若 $\mathcal L^{p_0}(E)\subset\mathcal L^{q_0}(E)$，证明：对 $0<p<q$，有 $\mathcal L^p(E)\subset\mathcal L^q(E)$。

### 问题 4.1.16

设 $0<m(E)<+\infty$。令
$$
N_p(f)=\left[\frac1{m(E)}\int_E|f(x)|^p\,dx\right]^{1/p},\qquad1\le p<+\infty.
$$
证明：当 $p_1<p_2$ 时，有 $N_{p_1}(f)\le N_{p_2}(f)$。

## 练习题 4.2

**题号跳转**　[1](#问题-421) · [2](#问题-422) · [3](#问题-423) · [4](#问题-424) · [5](#问题-425) · [6](#问题-426) · [7](#问题-427) · [8](#问题-428)

教材第 418 页

### 问题 4.2.1

在 $\mathcal L^2([-\pi,\pi])$ 中，证明：
$$
\left\{\frac{\cos x}{\sqrt\pi},\frac{\sin x}{\sqrt\pi},\ldots,
\frac{\cos kx}{\sqrt\pi},\frac{\sin kx}{\sqrt\pi},\ldots\right\}
$$
不是完全系。

### 问题 4.2.2

证明：如果 $\{\varphi_i\}_{i=1}^n$ 为 $\mathcal L^2(E)$ 中的规范正交系，则由 $\{\varphi_i\}_{i=1}^n$ 张成的线性子空间 $\mathcal L(\{\varphi_i\}_{i=1}^n)$ 为 $\mathcal L^2(E)$ 中的一个 $n$ 维闭线性子空间。

### 问题 4.2.3

设 $\{\psi_i\}_{i=1}^m\subset\mathcal L^2(E)$，则由 $\{\psi_i\}_{i=1}^m$ 张成的线性子空间 $\mathcal L(\{\psi_i\}_{i=1}^m)$ 为 $\mathcal L^2(E)$ 中的一个 $n$（$n\le m$）维闭线性子空间。

### 问题 4.2.4

证明：在 $\mathcal L^2(E)$ 中，规范正交完全系就是最大的规范正交系。

### 问题 4.2.5

在练习题 4.1 题 2 中，令
$$
\langle\cdot,\cdot\rangle:\ell^2\times\ell^2\to\mathbb R,\qquad
(x,y)\mapsto\langle x,y\rangle=\sum_{i=1}^\infty x_iy_i.
$$
证明：$(\ell^2,\langle\cdot,\cdot\rangle)$ 为 Hilbert 空间。并写出诱导的 $x$ 的模 $\|x\|$、诱导的 $x$ 与 $y$ 间的距离 $d(x,y)$、相应的 Cauchy–Schwarz 不等式。

### 问题 4.2.6

$\ell^2$ 中任何线性基（它的任何有限个元素都线性无关，且 $\ell^2$ 中任一元素可惟一表示为该线性基中有限个元素的线性组合）是不可数的。

### 问题 4.2.7

证明：Chebyshev–Hermite 函数列
$$
\varphi_k(x)=(-1)^k e^{x^2/2}\frac{d^k}{dx^k}e^{-x^2},\qquad k=1,2,3,\ldots,
$$
为 $\mathcal L^2(\mathbb R^1)$ 中的正交系，但不是规范的。

### 问题 4.2.8

证明：Legendre 多项式函数列
$$
P_n(x)=\frac1{2^n n!}\frac{d^n}{dx^n}(x^2-1)^n,\qquad n=0,1,2,\ldots,
$$
为 $\mathcal L^2([-1,1])$ 中的正交系，但不是规范的。

## 复习题 4

**题号跳转**　[1](#问题-复习-41) · [2](#问题-复习-42) · [3](#问题-复习-43) · [4](#问题-复习-44) · [5](#问题-复习-45) · [6](#问题-复习-46) · [7](#问题-复习-47) · [8](#问题-复习-48) · [9](#问题-复习-49) · [10](#问题-复习-410) · [11](#问题-复习-411) · [12](#问题-复习-412) · [13](#问题-复习-413) · [14](#问题-复习-414) · [15](#问题-复习-415) · [16](#问题-复习-416) · [17](#问题-复习-417) · [18](#问题-复习-418) · [19](#问题-复习-419) · [20](#问题-复习-420) · [21](#问题-复习-421) · [22](#问题-复习-422) · [23](#问题-复习-423) · [24](#问题-复习-424) · [25](#问题-复习-425) · [26](#问题-复习-426) · [27](#问题-复习-427) · [28](#问题-复习-428) · [29](#问题-复习-429) · [30](#问题-复习-430) · [31](#问题-复习-431) · [32](#问题-复习-432) · [33](#问题-复习-433)

教材第 418—423 页

### 问题 复习 4.1

设 $\{f_n(x)\}$ 为 $(0,+\infty)$ 上可导函数列，且有
$$
\int_0^{+\infty}|f_n'(x)|^2\,dx\le M,\qquad
|f_n(x)|\le\frac1x,\quad x\in(0,+\infty),\ n=1,2,\ldots.
$$
证明：$\{f_n(x)\}$ 是一致有界的，且对 $\forall\varepsilon>0$，$\exists\delta>0$，当 $|x-y|<\delta$ 时，有
$$
|f_n(x)-f_n(y)|<\varepsilon,\qquad x,y\in(0,+\infty),\ n=1,2,\ldots.
$$

### 问题 复习 4.2

设 $1\le q<p$，$m(E)<+\infty$，$f\in\mathcal L^p(E)$ 且 $f_k\in\mathcal L^p(E)$（$k=1,2,\ldots$）。如果 $\lim_{k\to+\infty}\|f_k-f\|_p=0$，证明：$\lim_{k\to+\infty}\|f_k-f\|_q=0$。

### 问题 复习 4.3

设 $f\in\mathcal L^p([a,b])$，$f_k\in\mathcal L^p([a,b])$（$k=1,2,\ldots$），$1\le p<+\infty$，且有 $\|f_k-f\|_p\to0$（$k\to+\infty$）。证明：
$$
\lim_{k\to+\infty}\int_a^t f_k(x)\,dx=\int_a^t f(x)\,dx,\qquad a\le t\le b.
$$

### 问题 复习 4.4

设 $f_k(x)\to f(x)$（$k\to+\infty$），$x\in[a,b]$，且有
$$
(L)\int_a^b|f_k(x)|^r\,dx\le M,\qquad k=1,2,\ldots,\quad0<r<+\infty.
$$
证明：
$$
\lim_{k\to+\infty}(L)\int_a^b|f_k(x)-f(x)|^p\,dx=0,\qquad0<p<r.
$$

### 问题 复习 4.5

设 $1\le p<+\infty$，$f\in\mathcal L^p(E)$，$f_k\in\mathcal L^p(E)$（$k=1,2,\ldots$），且有 $\lim_{k\to+\infty}f_k(x)=f(x)$ 在 $E$ 上几乎处处成立，$\lim_{k\to+\infty}\|f_k\|_p=\|f\|_p$。证明：$\lim_{k\to+\infty}\|f_k-f\|_p=0$。

### 问题 复习 4.6

设 $1<p<+\infty$，$f_k\in\mathcal L^p(E)$（$k=1,2,\ldots$），且有
$$
\lim_{k\to+\infty}f_k(x)=f(x),\qquad\sup_{1\le k<+\infty}\|f_k\|_p\le M.
$$
证明：$\{f_k\}$ 弱收敛于 $f$，即对 $\forall g\in\mathcal L^{p'}(E)$（$p'$ 为 $p$ 的共轭指标），有
$$
\lim_{k\to+\infty}\int_Ef_k(x)g(x)\,dx=\int_Ef(x)g(x)\,dx.
$$
此时，简记为 $f_k\overset{\mathrm{weakly}}{\longrightarrow}f$ 或 $f_k\overset w\longrightarrow f$（$k\to+\infty$）。

### 问题 复习 4.7

设 $g$ 为 $E$ 上的可测函数，若对 $\forall f\in\mathcal L^2(E)$，有 $\|g\cdot f\|_2\le M\|f\|_2$。证明：$|g(x)|\le M$ 在 $E$ 上几乎处处成立。

### 问题 复习 4.8

设 $f\in\mathcal L^p(\mathbb R^n)$，$p>1$，而且对任意有紧支集的 $\varphi\in C^0(\mathbb R^n)$，有 $\int_{\mathbb R^n}f(x)\varphi(x)\,dx=0$。证明：$f(x)=0$ 在 $\mathbb R^n$ 上几乎处处成立。

### 问题 复习 4.9

试说明在 Riemann 积分意义下平方可积的函数类不是完备空间。

### 问题 复习 4.10

设 $m(E)=1$，且 $\exists r>0$，使 $f\in\mathcal L^r(E)$。证明：
$$
\lim_{p\to0^+}\|f\|_p
=\exp\left(\int_E\ln|f|\,dm\right)
=e^{\int_E\ln|f|\,dm}.
$$

### 问题 复习 4.11

设 $m(E)>0$。

（1）若 $f\in\mathcal L^p(E)$，$1\le p<+\infty$，则 $\exists g\in\mathcal L^{p'}(E)$（$p'$ 为 $p$ 的共轭指标），且 $\|g\|_{p'}=1$，使
$$
\|f\|_p=\int_Ef(x)g(x)\,dx.
$$

（2）若 $f\in\mathcal L^\infty(E)$，则有
$$
\|f\|_\infty=\sup_{\|g\|_1=1}\left\{\left|\int_Ef(x)g(x)\,dx\right|\right\}.
$$

（3）举例说明，对 $f\in C^\infty(E)$，不一定存在 $g\in\mathcal L^1(E)$，且 $\|g\|_1=1$，使
$$
\|f\|_\infty=\int_Ef(x)g(x)\,dx,\qquad
\|f\|_\infty=\left|\int_Ef(x)g(x)\,dx\right|.
$$

### 问题 复习 4.12

设 $f(x)$ 为 $E$ 上的可测函数。若对 $\forall g\in\mathcal L^p(E)$（$1\le p\le+\infty$），必有 $f\cdot g\in\mathcal L(E)$。证明：$f\in\mathcal L^{p'}(E)$（$p'$ 为 $p$ 的共轭指标）。

### 问题 复习 4.13

设 $f\in\mathcal L^p(\mathbb R^n)$（$1\le p<+\infty$）。令 $f_*(\lambda)=m(\{x:|f(x)|>\lambda\})$，$\lambda>0$。证明：
$$
\lim_{\lambda\to+\infty}\lambda^pf_*(\lambda)=0,\qquad
\lim_{\lambda\to0^+}\lambda^pf_*(\lambda)=0.
$$

### 问题 复习 4.14

设 $\{\varphi_k\}$ 为 $\mathcal L^2(\mathbb R^n)$ 中的规范正交系。令
$$
E=\{x:\lim_{k\to+\infty}\varphi_k(x)\text{ 存在}\},\qquad
f(x)=\begin{cases}\lim_{k\to+\infty}\varphi_k(x),&x\in E,\\0,&x\notin E.\end{cases}
$$
证明：$f(x)=0$ 在 $\mathbb R^n$ 上几乎处处成立。

### 问题 复习 4.15

设 $f_k\in\mathcal L^p(E)$，$k=1,2,\ldots$，$1\le p<+\infty$，且有 $\sum_{k=1}^\infty\|f_k\|_p<+\infty$。证明：$\sum_{k=1}^\infty|f_k(x)|<+\infty$ 在 $E$ 上几乎处处成立。若记 $f(x)=\sum_{k=1}^\infty f_k(x)$，则有
$$
\|f\|_p\le\sum_{k=1}^\infty\|f_k\|_p,\qquad
\lim_{N\to+\infty}\left\|\sum_{k=1}^Nf_k-f\right\|_p=0.
$$

### 问题 复习 4.16

设 $f_k\in\mathcal L^1(E)\cap\mathcal L^\infty(E)$，$f\in\mathcal L^1(E)$。若有 $\lim_{k\to+\infty}\|f_k-f\|_1=0$，$\sup_k\|f_k\|_\infty<+\infty$。证明：对 $1<p<+\infty$，有
$$
f\in\mathcal L^p(E)\cap\mathcal L^\infty(E),\qquad
\lim_{k\to+\infty}\|f_k-f\|_p=0.
$$

### 问题 复习 4.17

设 $\{f_n(x)\}$ 为 $\mathcal L^2([0,1])$ 中的绝对连续函数列，且 $f_n'\in\mathcal L^2([0,1])$。又 $f,g\in\mathcal L^2([0,1])$，满足
$$
\lim_{n\to+\infty}\|f_n-f\|_2=0,\qquad
\lim_{n\to+\infty}\|f_n'-g\|_2=0.
$$
证明：$f(x)$ 在 $[0,1]$ 上关于 Lebesgue 测度几乎处处等于一个绝对连续函数。如果 $f$ 在 $[0,1]$ 上几乎处处可导，则 $f'(x)=g(x)$ 在 $[0,1]$ 上几乎处处成立。

### 问题 复习 4.18

设 $\{\varphi_i(x)\}$ 为 $\mathcal L^2(A)$ 上规范正交的完全系，而 $\{\psi_k(y)\}$ 为 $\mathcal L^2(B)$ 上规范正交的完全系。证明：$f_{i,k}(x,y)=\{\varphi_i(x)\cdot\psi_k(y)\}$ 为空间 $\mathcal L^2(A\times B)$ 上的规范正交完全系。

### 问题 复习 4.19

设 $\{\varphi_n\}$ 为 $\mathcal L^2([a,b])$ 上的规范正交完全系。证明：对于 $[a,b]$ 中任一正测子集 $E$，有
$$
\sum_{n=1}^\infty\int_E\varphi_n^2(x)\,dx\ge1.
$$

### 问题 复习 4.20

设 $\{\varphi_n\}$ 为 $\mathcal L^2([a,b])$ 中的规范正交完全系。若 $\{\psi_n\}$ 为 $\mathcal L^2([a,b])$ 中满足
$$
\sum_{n=1}^\infty\int_a^b[\varphi_n(x)-\psi_n(x)]^2\,dx<1
$$
的正交系。证明：$\{\psi_n\}$ 为 $\mathcal L^2([a,b])$ 中的完全系。

### 问题 复习 4.21

证明：$\{\sin kx\}$ 为 $\mathcal L^2([0,\pi])$ 中的正交完全系。

### 问题 复习 4.22

设 $\{\varphi_k\}$ 为 $\mathcal L^2([a,b])$ 中的规范正交完全系，$|\varphi_k(x)|\le M$，$k=1,2,\ldots$。若有数列 $\{a_k\}$，使级数 $\sum_{k=1}^\infty a_k\varphi_k(x)$ 在 $[a,b]$ 上关于 Lebesgue 测度几乎处处收敛。证明：$\lim_{k\to+\infty}a_k=0$。

### 问题 复习 4.23

设 $\{\varphi_k\}$ 为 $\mathcal L^2([a,b])$ 中的规范正交完全系。令
$$
f\in\mathcal L^2([a,b]),\qquad c_k=\langle f,\varphi_k\rangle,\qquad
f(x)\sim\sum_{k=1}^\infty c_k\varphi_k(x).
$$
根据定理 4.2.7 和内积的连续性定理 4.2.2（则为定理 4.2.9 的证法 2），对 $[a,b]$ 中的任何可测子集 $E$，证明：
$$
\int_Ef(x)\,dx=\sum_{k=1}^\infty c_k\int_E\varphi_k(x)\,dx,
$$
即 $f(x)$ 的广义 Fourier 级数可以逐项积分。

### 问题 复习 4.24

设 $X=\{f\in C^\infty([0,1]):f(0)=0,\ \int_0^1f(x)/x\,dx=0\}$。证明：$X$ 在 $\mathcal L^2([0,1])$ 中稠密。

### 问题 复习 4.25

设 $K(x,y)$ 为 $\mathbb R^n\times\mathbb R^n$ 上的可测函数，且存在 $M$，使
$$
\int_{\mathbb R^n}|K(x,y)|\,dy\le M\quad\text{对几乎处处的 }x\in\mathbb R^n,
$$
$$
\int_{\mathbb R^n}|K(x,y)|\,dx\le M\quad\text{对几乎处处的 }y\in\mathbb R^n.
$$
$f\in\mathcal L^p(\mathbb R^n)$，$1<p<+\infty$。令 $Tf(x)=\int_{\mathbb R^n}K(x,y)f(y)\,dy$。证明：$\|Tf\|_p\le M\|f\|_p$。

### 问题 复习 4.26

在 $\mathcal L^2(E)$ 中弱收敛于 $f(x)$ 的函数列 $\{f_n(x)\}$ 未必是度量收敛的。考察 $\mathcal L^2([-\pi,\pi])$ 中的规范正交系组成的函数列：
$$
\left\{\frac1{\sqrt{2\pi}},\frac{\cos x}{\sqrt\pi},\frac{\sin x}{\sqrt\pi},\ldots,
\frac{\cos nx}{\sqrt\pi},\frac{\sin nx}{\sqrt\pi},\ldots\right\}.
$$

### 问题 复习 4.27

设 $\{f_n(x)\}$ 在 $\mathcal L^2([a,b])$ 中弱收敛于 $f(x)$，且 $\|f_n\|\to\|f\|$（$n\to\infty$）。证明：$\{f_n(x)\}$ 平均收敛于 $f(x)$。

将此结论推广到 $\mathcal L^p([a,b])$（$p\ge1$）空间上。

### 问题 复习 4.28

证明：有限函数系在 $\mathcal L^2$ 中不可能是完全的。

### 问题 复习 4.29

（B. 奥尔里奇）设 $\{w_k(x)\}$ 为 $[a,b]$ 上封闭的规范正交系。证明：

（1）在 $[a,b]$ 上，$\sum_{k=1}^\infty w_k^2(x)=+\infty$ 几乎处处成立。

（2）对于任何 Lebesgue 可测集 $e$，其测度 $m(e)>0$，有 $\sum_{k=1}^\infty\int_e w_k^2(x)\,dx=+\infty$。

### 问题 复习 4.30

（I. P. 那汤松）设 $f(x)\in\mathcal L^2([-\pi,\pi])$，$f(x+2\pi)=f(x)$。令
$$
g_n(x)=\int_{1/n}^\pi\frac{f(x+t)-f(x-t)}{t}\,dt.
$$
则函数列 $\{g_n(x)\}$ 在 $\mathcal L^2([-\pi,\pi])$ 中平均收敛于 $g\in\mathcal L^2([-\pi,\pi])$，且
$$
\|g\|_2\le\|f\|_2\int_{-\pi}^{\pi}\frac{\sin t}{t}\,dt,
$$
其中乘数 $\int_{-\pi}^{\pi}(\sin t)/t\,dt$ 不能再减小。

### 问题 复习 4.31

（A. N. 柯尔莫戈洛夫）设 $f\in\mathcal L^2([a,b])$，在 $[a,b]$ 外 $f(x)=0$。令
$$
f_h(x)=\frac1{2h}\int_{x-h}^{x+h}f(t)\,dt.
$$
证明：（1）$\|f_h\|_2\le\|f\|_2$。

（2）$\lim_{h\to0^+}\|f_h-f\|_2=0$，即当 $h\to0^+$ 时，$f_h$ 在 $\mathcal L^2([a,b])$ 中平均收敛于 $f$。

### 问题 复习 4.32

设 $-\infty\le a\le b\le+\infty$，$f(x)$ 为 $(a,b)$ 上关于 Lebesgue 测度几乎处处不为零的可测函数，且满足
$$
|f(x)|\le ce^{-\delta|x|},\qquad\delta>0,\quad x\in(a,b).
$$
证明：若有 $g\in\mathcal L^2((a,b))$，使得
$$
\int_a^bx^nf(x)g(x)\,dx=0,\qquad n=0,1,\ldots,
$$
则 $g(x)=0$ 在 $(a,b)$ 上几乎处处成立。

### 问题 复习 4.33

设 $g\in\mathcal L(\mathbb R^1)$，且 $\lim_{k\to+\infty}\|f_k-f\|_2=0$。证明：
$$
\lim_{k\to+\infty}\int_{-\infty}^{+\infty}f_k(x-y)g(y)\,dy
=\int_{-\infty}^{+\infty}f(x-y)g(y)\,dy.
$$

## 原题校注

以下是原题适用条件的说明，不是习题解答。凡需调整处，上方仍保留原题表述。

- 练习 4.1.7、4.1.14 与复习 4.25 中的积分定义通常先在几乎处处有意义，再作为等价类使用；不应要求任意代表元在每个点都绝对可积。
- 练习 4.1.15 在本章 Lebesgue 测度下，正测度的 $E$ 不满足其包含假设；作为条件命题理解，或在更一般的测度空间讨论其含义。$p,q$ 在该题仍指有限正指数。
- 复习 4.10 按扩充积分解释 $\int\ln|f|$，允许值为 $-\infty$，并约定 $e^{-\infty}=0$；正部可积由 $f\in\mathcal L^r$ 保证。
- 复习 4.11（3）的 $C^\infty(E)$ 按原书录入；举例时可取有界开区间上的光滑有界函数。两条等式分别表达达到积分与绝对积分的上确界。
- 复习 4.23 明确要求完全系，与本章讲义对定理 4.2.9 的条件校注一致。原书第 413 页“证法 2”指向“复习题 25”，实际对应这里的复习题 23。
- 复习 4.27 的推广须改为 $1<p<\infty$；$p=1$ 时弱收敛加范数收敛不足以推出强收敛。
- 复习 4.28 隐含 $m(E)>0$ 的 Lebesgue 空间情形。零测度空间是零空间，一般有限原子测度空间也可以有有限完全系。
- 复习 4.29（2）的可测集 $e$ 应为 $[a,b]$ 的子集。
- 复习 4.33 的原书条件仅为 $g\in\mathcal L^1(\mathbb R)$。这保证卷积在 $\mathcal L^2$ 范数下收敛，不能保证题面逐点极限。若把条件改成 $g\in\mathcal L^2(\mathbb R)$，则该极限对每个 $x$ 成立，且关于 $x$ 一致。两个条件不可混为一谈。

[§4.1 讲义](/notes/c15167148a7e99cbefa5d46f/) · [§4.2 讲义](/notes/a1a665ae4cd9f8c09efae12e/) · [第四章目录](/math/real-functions/#chapter-4)
