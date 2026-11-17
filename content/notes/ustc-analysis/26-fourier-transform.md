---
title: "Fourier 积分、反演与卷积"
description: "用对称频率截断推出 Fourier 积分的局部收敛条件，再按教材的归一化计算变换、反演和卷积。"
subject: "数学分析"
category: "ustc-analysis/series"
tags: ["科大数分", "Fourier 积分", "Fourier 变换", "反演", "卷积"]
created_at: "2026-11-17"
updated_at: "2026-11-17"
---

下册 §17.5（教材第 272—281 页）。周期为 $2l$ 时频率间距为 $\pi/l$。在整条实轴上，离散频率被连续参数 $u$ 取代。可以直接从截断积分证明反演，避免在周期趋于无穷时未经估计地交换极限。

[截断频率产生怎样的核](#截断频率产生怎样的核) · [从 Dirichlet 积分到反演](#从-dirichlet-积分到反演) · [复形式与半轴变换](#复形式与半轴变换) · [微分与卷积](#微分与卷积)

## 截断频率产生怎样的核

设实函数 $f$ 在实轴上绝对可积。依教材置
$$
a(u)=\frac1\pi\int_{\mathbb R}f(t)\cos ut\,dt,\qquad
b(u)=\frac1\pi\int_{\mathbb R}f(t)\sin ut\,dt .
$$
二者均一致连续。例如比较 $u+h$ 与 $u$ 处的值，在 $|t|\le A$ 上三角因子的差至多为 $A|h|$，而 $|t|>A$ 的贡献由绝对可积尾部控制。先定 $A$，再取 $h$ 即可。由 Riemann–Lebesgue 引理，它们在无穷远处都趋零。

给定 $\lambda>0$，置 $S(\lambda,x)=\int_0^\lambda[a(u)\cos ux+b(u)\sin ux]\,du$。此时绝对二重积分由常数乘 $\lambda\int |f|$ 控制，可交换积分次序。对 $u$ 积分、按 $t-x$ 的符号合并，即得
$$
S(\lambda,x)=\frac1\pi\int_0^\infty
  [f(x+t)+f(x-t)]\,\frac{\sin(\lambda t)}t\,dt .
$$
对 $t\ge\delta>0$，去掉振荡因子的函数绝对可积，该段由 Riemann–Lebesgue 引理趋零。和周期情形一样，反演在一点的结果由邻近该点的取值决定。

## 从 Dirichlet 积分到反演

所需的核质量为 $\int_0^\infty\sin v\,dv/v=\pi/2$。一个实分析证法是取 $\eta>0$，在 $\int_0^\infty e^{-\eta v}\sin(bv)\,dv/v$ 中对 $b$ 求导，得 $\eta/(\eta^2+b^2)$。从 $b=0$ 积到 $1$ 得 $\arctan(1/\eta)$。对所有 $\eta\ge0$，分部积分或 Dirichlet 估计将 $[A,\infty)$ 的尾积分绝对值压在 $2/A$ 以下，故可令 $\eta\downarrow0$，得到所述值。

若某个 $s$ 和 $\delta>0$ 满足
$$
\int_0^\delta\frac{|f(x+t)+f(x-t)-2s|}{t}\,dt<\infty,
$$
则 $S(\lambda,x)\to s$（定理 17.5.4）。事实上，近段减去常数 $2s$ 后，余项由 Riemann–Lebesgue 引理趋零；近段中的常数贡献为 $(2s/\pi)\int_0^{\lambda\delta}\sin v\,dv/v\to s$，远段已在上节处理。若点的两侧分别满足正阶 Hölder 条件，则取 $s=[f(x+0)+f(x-0)]/2$。例如 $f$ 为 $[-1,1]$ 的示性函数，则 $b(u)=0$，$a(u)=2\sin u/(\pi u)$（在零点取极限）。因此
$$
\int_0^\infty\frac{\sin u}{u}\cos(ux)\,du=
\begin{cases}\pi/2,& |x|<1,\\ \pi/4,& |x|=1,\\ 0,& |x|>1.\end{cases}
$$
跳点的半值由两侧极限决定。

## 复形式与半轴变换

教材把因子 $1/(2\pi)$ 放在正变换中。按定义 17.5.1，
$$
\widehat f(u)=\frac1{2\pi}\int_{\mathbb R}f(t)e^{-iut}\,dt,\qquad
S(\lambda,x)=\int_{-\lambda}^{\lambda}\widehat f(u)e^{iux}\,du .
$$
第二式由有限区间内交换积分即得。反演取对称截断的极限；若 $\widehat f$ 也绝对可积，则右端是通常的绝对收敛积分。在满足上节条件的连续点，它等于 $f(x)$。对半轴上给定的 $h$，偶延拓与奇延拓分别给出余弦、正弦变换。基本核分别为 $\cos(ut)$ 和 $\sin(ut)$，正、逆变换均用因子 $\sqrt{2/\pi}$。例如余弦变换 $g(u)=\sqrt{2/\pi}\int_0^\infty h(t)\cos(ut)\,dt$ 在反演条件下给出 $h(x)=\sqrt{2/\pi}\int_0^\infty g(u)\cos(ux)\,du$。[练习 17.5 第 1、2 题（正余弦表示与积分方程）](/files/problems/科大数分习题-v2%282%29.pdf#page=44)

取 $f(t)=e^{-\beta|t|}$（$\beta>0$），利用偶性和 $\int_0^\infty e^{-\beta t}\cos(ut)\,dt=\beta/(\beta^2+u^2)$，得
$$
\widehat f(u)=\frac{\beta}{\pi(\beta^2+u^2)},\qquad
\int_0^\infty\frac{\cos(ux)}{\beta^2+u^2}\,du=\frac{\pi}{2\beta}e^{-\beta|x|}.
$$
两侧频域积分绝对收敛，且原函数在零点也满足反演条件。这个变换对可直接检查常数。

## 微分与卷积

若 $f\in C^1(\mathbb R)$，$f,f'$ 绝对可积且 $f(\pm\infty)=0$，分部积分消去边界项，得 $\widehat{f'}(u)=iu\,\widehat f(u)$。若 $t f(t)$ 也绝对可积，则可在变换号内求导，得 $(\widehat f)'(u)=-i\,\widehat{t f(t)}(u)$。两条规则各有自己的可积条件。

教材的卷积与正变换配套，取
$$
(f*g)(t)=\frac1{2\pi}\int_{\mathbb R}f(t-v)g(v)\,dv .
$$
例如对连续、有界且绝对可积的 $f,g$，卷积处处有定义，且 $\int\!\!\int|f(t-v)g(v)|\,dt\,dv=(\int|f|)(\int|g|)<\infty$。故可在变换中交换积分，并以 $w=t-v$ 分离指数 $e^{-iu(w+v)}$，得到 $\widehat{f*g}=\widehat f\,\widehat g$（定理 17.5.7）。

最后算一个反变换。沿用教材记号，若 $F(u)=ue^{-\beta|u|}$，则先算 $\int_{\mathbb R}e^{-\beta|u|}e^{iux}\,du=2\beta/(\beta^2+x^2)$，再对 $x$ 求导。由于 $|u|e^{-\beta|u|}$ 可积，便有
$$
\int_{\mathbb R}ue^{-\beta|u|}e^{iux}\,du
=\frac1i\frac d{dx}\frac{2\beta}{\beta^2+x^2}
=\frac{4i\beta x}{(\beta^2+x^2)^2}.
$$
结果是纯虚奇函数，与原积分的奇偶性相符。[练习 17.5 第 4 题（原题）](/files/problems/科大数分习题-v2%282%29.pdf#page=44)

[上一讲　平方平均逼近、Bessel 不等式与 Parseval 等式](/notes/f774857d9c30a625c19c6cd3/) · [专题Ⅳ目录](/math/ustc-analysis/#series) · [回到本专题首讲](/notes/87807d3579b876affe2d54a0/)
