---
title: "从 Fourier 级数到丢番图逼近：Weyl 一致分布判别法"
description: "从 Fejér 一致逼近证明 Weyl 判别法，以有限等比求和建立无理旋转的一致分布，讨论幂的首位数字、等差子序列与多维推广，附四道进阶习题详解。"
subject: "数学分析与数论"
tags: ["Fourier 级数", "丢番图逼近", "一致分布", "Weyl 判别法"]
attachment: "essays/weyl-equidistribution.pdf"
math_font: "cm-ams"
page_style: "s"
created_at: "2026-11-28"
updated_at: "2026-11-28"
---

$2^n$ 以前四位 $2026$ 开头，这样的指数有无穷多个。倘若从 $1$ 数到 $N$，命中次数约占多少？取对数会把首位数字化成一个区间。要回答频率问题，就要知道无理旋转在这个区间花了多大比例的时间。

> **定理　无理旋转的一致分布定理**
>
> 设 $\alpha\in\mathbb R\setminus\mathbb Q$，$\beta\in\mathbb R$。对每个 $0\le a<b\le1$，都有
>
> $$
> \lim_{N\to\infty}\frac1N\#\{1\le n\le N:a\le\{n\alpha+\beta\}<b\}=b-a .
>  \qquad\mathrm{(1)}
> $$

**证明**　记 $\mathrm e(t)=\exp(2\pi i t)$。固定 $k\in\mathbb Z\setminus\{0\}$。因 $\alpha$ 无理，$k\alpha\notin\mathbb Z$，故 $z=\mathrm e(k\alpha)\ne1$。又因 $|z|=1$，

$$
\begin{aligned}
 \frac1N\sum_{n=1}^N\mathrm e\bigl(k(n\alpha+\beta)\bigr)
 &=\mathrm e(k\beta)\frac{z(1-z^N)}{N(1-z)},\\[-1pt]
 \left|\frac 1N\sum_{n=1}^N\mathrm e\bigl(k(n\alpha+\beta)\bigr)\right|
 &\le\frac{2}{N\,|1-\mathrm e(k\alpha)|}\longrightarrow0 .\qquad\mathrm{(2)}
\end{aligned}
$$

 固定 $k$ 后，分母中的 $|1-\mathrm e(k\alpha)|$ 是正常数。由 Weyl 判别法（定理 1），对每个 $[a,b)$，命中比例趋于 $b-a$。

为什么这些复指数的平均值能决定区间频率？三角多项式把频率的有限线性组合与连续函数联系起来，端点处的夹逼再把连续函数与区间计数联系起来。

## 目录

- [§1 从命中区间到计算频率](#1-从命中区间到计算频率)
- [§2 区间、连续函数与 Fourier 频率](#2-区间连续函数与-fourier-频率)
- [§3 怎样从连续函数回到区间](#3-怎样从连续函数回到区间)
- [§4 无理旋转与等差子序列](#4-无理旋转与等差子序列)
- [§5 幂序列以指定数字开头的自然密度](#5-幂序列以指定数字开头的自然密度)
- [§6 多维无理旋转与整数关系](#6-多维无理旋转与整数关系)
- [§7 四道进阶习题及详解](#7-四道进阶习题及详解)

## §1 从命中区间到计算频率

记 $\{t\}=t-\lfloor t\rfloor$。把 $[0,1)$ 的两端接成圆周 $\mathbb T=\mathbb R/\mathbb Z$，赋予它总长为 $1$ 的弧长。给定实数列 $(x_n)$，记 $u_n=\{x_n\}$。对测试函数 $f$，写

$$
A_N(f)=\frac1N\sum_{n=1}^N f(u_n),\qquad L(f)=\int_0^1 f(t)\,dt .
$$

 取 $f=\mathbf 1_I$ 时，$A_N(f)$ 就是前 $N$ 项落入 $I$ 的比例。若对每个半开区间 $I=[a,b)$ 都有 $A_N(\mathbf 1_I)\to |I|$，便称 $(x_n)$ **模 $1$ 一致分布**。正整数集 $E$ 的**自然密度**是极限 $\lim_{N\to\infty}N^{-1}\#(E\cap[1,N])$，若该极限存在。

**为什么一致分布推出稠密？**　每个非空开区间都含有一段长为 $\ell>0$ 的半开区间。由定义，其中的项数为 $\ell N+o(N)$，因而任意尾列都会命中它。

> **辨析　每条尾列都稠密，仍可能把几乎全部时间花在一点**
>
> 把 $[0,1)$ 中的有理数无重复地排成 $r_1,r_2,\ldots$。令 $u_{j^2}=r_j$，其余各项都取 $0$。每个开区间含无穷多个有理数，故每条尾列都稠密。但前 $N$ 项中，落在 $[\tfrac12,1)$ 的至多有 $\lfloor\sqrt N\rfloor$ 项，其比例趋于 $0$。

## §2 区间、连续函数与 Fourier 频率

频率 $k$ 遍历整数时，$\mathrm e(kt)$ 恰好在圆周上取值明确。它的积分在 $k=0$ 时为 $1$，在 $k\ne0$ 时为 $0$。

> **定理 1　Weyl 一致分布判别法**
>
> 对任意实数列 $(x_n)$，以下三个命题等价。
>
> **（I）区间判据**　每个 $I=[a,b)\subset[0,1)$ 都满足 $A_N(\mathbf 1_I)\to b-a$。
>
> **（C）连续函数判据**　每个连续 $1$ 周期复值函数 $f$ 都满足 $A_N(f)\to L(f)$。
>
> **（W）指数和判据**　对每个固定的非零整数 $k$，有
>
> $$
> A_N(\mathrm e(k\,\cdot))=\frac1N\sum_{n=1}^N \mathrm e(kx_n)\longrightarrow0 .
>  \qquad\mathrm{(3)}
> $$

**证明（I）推出（C）**　把 $[0,1)$ 等分为 $J$ 个区间 $I_j=[j/J,(j+1)/J)$，令 $s(t)=f(j/J)$（$t\in I_j$）。由一致连续性，给定 $\varepsilon>0$，可先固定 $J$ 使 $\|f-s\|_\infty<\varepsilon$。由（I）及有限和的线性性，

$$
A_N(s)\longrightarrow \sum_{j=0}^{J-1}\frac{f(j/J)}{J}=L(s).
$$

 样本平均与积分都把一致误差控制在 $\varepsilon$ 内，故 $\limsup_N|A_N(f)-L(f)|\le2\varepsilon$。令 $\varepsilon\downarrow0$ 即得（C）。

**（C）推出（W）**　代入 $f(t)=\mathrm e(kt)$。当 $k\ne0$ 时，$L(f)=[\mathrm e(kt)/(2\pi i k)]_0^1=0$。负频率与对应的正频率互为共轭，实际检验时只需取 $k\ge1$。

**（W）推出（C）**　对三角多项式 $P(t)=\sum_{|k|\le M}c_k\mathrm e(kt)$，（W）逐项给出 $A_N(P)\to c_0=L(P)$。怎样把这个等式传给连续函数？已有 Fourier 讲义的定理 4.1 表明，把周期换成 $1$ 后，Fejér 平均

$$
\sigma_M f(t)=\sum_{|k|\le M}\left(1-\frac{|k|}{M+1}\right)\widehat f(k)\mathrm e(kt),
 \qquad \widehat f(k)=\int_0^1 f(t)\mathrm e(-kt)\,dt
 \qquad\mathrm{(4)}
$$

 一致收敛到 $f$。给定 $\varepsilon>0$，固定 $M$ 使 $P=\sigma_M f$ 满足 $\|f-P\|_\infty<\varepsilon$。则

$$
\begin{aligned}
 |A_N(f)-L(f)|
 &\le |A_N(f-P)|+|A_N(P)-L(P)|+|L(P-f)|\\
 &\le 2\varepsilon+|A_N(P)-L(P)| .\qquad\mathrm{(5)}
\end{aligned}
$$

 先令 $N\to\infty$，再令 $\varepsilon\downarrow0$，即得（C）。此处 $M$ 先固定，故只用到有限个频率的极限。逐点逼近无法直接给出式 （5） 对全部样本点的统一控制。

## §3 怎样从连续函数回到区间

半开区间的示性函数在两个端点跳跃，不能由连续函数一致逼近。只要找到一上一下两个连续函数，使两者的**积分之差**任意小，就能恢复计数。

**证明（C）推出（I）**　设 $I=[a,b)$，$\ell=b-a$。$\ell=1$ 时结论显然。对 $0<\ell<1$，把圆周坐标平移为 $s=\{t-a\}$，于是 $t\in I$ 等价于 $0\le s<\ell$。取 $0<\delta<\tfrac12\min(\ell,1-\ell)$。

下界函数 $g_-$ 在 $[0,\delta]$ 上由 $0$ 线性升至 $1$，在 $[\delta,\ell-\delta]$ 上等于 $1$，在 $[\ell-\delta,\ell]$ 上降至 $0$，其余处为 $0$。上界函数 $g_+$ 在 $[0,\ell]$ 上等于 $1$，在 $[\ell,\ell+\delta]$ 上降至 $0$，在 $[1-\delta,1]$ 上由 $0$ 升至 $1$，其余处为 $0$。以周期 $1$ 延拓，再把坐标移回 $t$，两者在接缝处都连续。

![区间示性函数的连续上下界，两个端点各用宽度为 δ 的线性斜坡过渡。](/figures/weyl/continuous-bounds.png)

每个斜坡所截三角形的底为 $\delta$、高为 $1$。比较梯形与矩形的面积，可得

$$
g_-\le\mathbf 1_I\le g_+,\qquad L(g_-)=\ell-\delta,\quad L(g_+)=\ell+\delta .
  \qquad\mathrm{(6)}
$$

 在 $a$ 处示性函数取 $1$，在 $b$ 处取 $0$，上述夹逼在两处仍成立。于是由（C）得

$$
\ell-\delta\le\liminf_{N\to\infty}A_N(\mathbf 1_I)
 \le\limsup_{N\to\infty}A_N(\mathbf 1_I)\le\ell+\delta .
$$

 令 $\delta\downarrow0$ 即得（I），定理 1 证毕。

> **例 1　只检验从原点出发的区间够不够？**
>
> 足够。令 $F_N(t)=A_N(\mathbf 1_{[0,t)})$。恒等式 $A_N(\mathbf 1_{[a,b)})=F_N(b)-F_N(a)$ 表明，若对每个 $t\in[0,1]$ 都有 $F_N(t)\to t$，则任意半开区间的极限就是 $b-a$。反过来只需取 $a=0$。

**端点的命中频率。** 对任意 $c\in\mathbb T$，单点 $\{c\}$ 可被任意短的圆弧覆盖。跨过 $0$ 的圆弧可拆成两个半开区间，所以（I）给出 $c$ 的命中上密度为 $0$。因此把区间端点改为开或闭，都给出相同极限。

## §4 无理旋转与等差子序列

式 （2） 中起点 $\beta$ 只带来一个模为 $1$ 的因子。因此固定非零频率时，指数平均对起点一致趋于零。若把起始下标从 $1$ 改为 $L+1$，新起点便是 $\beta+L\alpha$；即使 $L$ 随 $N$ 改变，等比和的估计仍然适用。

若 $\alpha=p/q$，其中 $q\ge1$，取 $k=q$，各项都等于 $\mathrm e(q\beta)$，其平均的模恒为 $1$。这也证明，旋转对每个起点都一致分布的充要条件恰是步长无理。

> **推论 2　沿每个固定的剩余类仍一致分布**
>
> 取整数 $h\ge1$、$0\le r<h$。设 $I\subset[0,1)$ 为半开区间。若 $\alpha$ 无理，则在 $n\equiv r\pmod h$ 的正整数中，$\{n\alpha+\beta\}$ 落入 $I$ 的相对频率是 $|I|$。在全体正整数中，同时满足这两个条件的自然密度是 $|I|/h$。

**证明**　写 $n=r+jh$，有 $n\alpha+\beta=j(h\alpha)+(r\alpha+\beta)$。新步长 $h\alpha$ 仍无理，故式 （1） 给出相对频率 $|I|$。设 $M_N=\#\{1\le n\le N:n\equiv r\pmod h\}$，则 $M_N=N/h+O(1)$。同时满足两条件的项数等于 $M_N|I|+o(M_N)$，除以 $N$ 即得结论。

> **例 2　从旋转轨道计算一个平均值**
>
> 设 $\alpha$ 无理。求 $N^{-1}\sum_{j=1}^N|\sin(\pi(6j+5)\alpha)|$ 的极限。

**解**　绝对值使 $f(t)=|\sin(\pi t)|$ 成为连续 $1$ 周期函数。沿 $6j+5$ 的旋转一致分布，故样本平均趋于 $\int_0^1\sin(\pi t)\,dt=2/\pi$。在一个周期 $[0,1]$ 上正弦非负，故积分时可以直接去掉绝对值。

## §5 幂序列以指定数字开头的自然密度

固定进制 $B\ge2$ 和整数 $A\ge2$。令 $D$ 为一个 $m$ 位的 $B$ 进制数字串所表示的整数，首位非零，即 $B^{m-1}\le D<B^m$。写 $\theta=\log_B A$ 及

$$
A^n=B^{k_n}s_n,\qquad k_n=\lfloor n\theta\rfloor,\qquad
 s_n=B^{\{n\theta\}}\in[1,B).
$$

 $s_n$ 是把进制点移到首位之后所得的数。若 $k_n\ge m-1$，$A^n$ 以这 $m$ 位开头，当且仅当

$$
\begin{aligned}
 D B^{k_n-m+1}\le A^n <(D+1)B^{k_n-m+1}
 \quad\Longleftrightarrow\quad
 \{n\theta\}\in I_D
 \qquad\mathrm{(7)}
\end{aligned}
$$

 其中

$$
I_D=\left[\log_B\frac{D}{B^{m-1}},\ \log_B\frac{D+1}{B^{m-1}}\right).
$$

 不足 $m$ 位的项只有有限个。即便 $D=B^m-1$，区间的右端也恰为 $1$，仍适用半开区间判据。

> **定理 3　指定前缀的频率**
>
> 若 $\log_B A$ 无理，则 $A^n$ 以指定前缀 $D$ 开头的指数集具有自然密度
>
> $$
> |I_D|=\log_B\frac{D+1}{D}=\log_B\!\left(1+\frac1D\right).\qquad\mathrm{(8)}
> $$

**证明**　对步长 $\theta$ 应用式 （1），再由 （7） 去掉有限个初始项，即得 （8）。取 $m=1$ 就得到首位数字定律。对全部 $m$ 位前缀求和时，连续的对数差逐项相消，总和为 $\log_B(B^m/B^{m-1})=1$。

### 例 3　二的幂以前四位 2026 开头

**解**　若 $\log_{10}2=p/q$，其中 $p,q$ 为正整数，则 $2^q=10^p$，两边质因子 $5$ 的指数不等。故 $\log_{10}2$ 无理。令 $H(N)$ 表示 $1\le n\le N$ 中满足前缀要求的指数个数。由 （8），

$$
H(N)=N\log_{10}\frac{2027}{2026}+o(N),\qquad
 \log_{10}\frac{2027}{2026}\approx 0.0002143077 .
$$

 也就是说，长期比例约为 $0.02143\%$。若只考察 $n\equiv5\pmod6$ 的指数，在该类内部的比例仍是上式；若分母取全体指数个数，则密度还须除以 $6$。

例如 $10^n$ 的首位总是 $1$。此时 $\log_{10}10=1$，对数的小数部分恒为 $0$。无理性假设正是把首位规律与旋转轨道联系起来的条件。

## §6 多维无理旋转与整数关系

令 $\mathbb T^d=\mathbb R^d/\mathbb Z^d$，向量逐坐标取小数部分。若对每个半开长方体 $R=\prod_{j=1}^d[a_j,b_j)$，前 $N$ 项落入 $R$ 的比例趋于体积 $|R|=\prod_j(b_j-a_j)$，便称序列在 $\mathbb T^d$ 上一致分布。

> **定理 4　多维 Weyl 判别法与旋转定理**
>
> 序列 $(\mathbf x_n)$ 在 $\mathbb T^d$ 上一致分布，等价于对每个 $\mathbf k\in\mathbb Z^d\setminus\{\mathbf0\}$，有
>
> $$
> \frac1N\sum_{n=1}^N\mathrm e(\mathbf k\cdot\mathbf x_n)\longrightarrow0 .\qquad\mathrm{(9)}
> $$
>
>  特别地，$\mathbf x_n=n\boldsymbol\alpha+\boldsymbol\beta$ 一致分布的充要条件是 $1,\alpha_1,\ldots,\alpha_d$ 在 $\mathbb Q$ 上线性无关。

**证明**　若长方体频率趋于体积，在每个坐标上作等分，将任意连续函数按各小长方体的左下角取值作阶梯逼近。一致连续性保证误差一致趋零，与定理 1 同理，样本平均趋于积分。取 $f(\mathbf x)=\mathrm e(\mathbf k\cdot\mathbf x)$；积分分解成 $d$ 个一维积分的乘积，至少一项为零，便得 （9）。

反过来，设 （9） 成立。先取 $G(\mathbf x)=\prod_j g_j(x_j)$，其中 $g_j$ 连续且 $1$ 周期。由 （4），每个因子可用三角多项式一致逼近。因子数有限且各逼近列一致有界，逐个替换因子即知乘积也一致逼近 $G$。展开多项式乘积后每一项都是 $c_{\mathbf k}\mathrm e(\mathbf k\cdot\mathbf x)$，故 （9） 连同 （5） 的估计给出 $A_N(G)\to\int_{\mathbb T^d}G$，此处 $A_N$ 表示向量序列的样本平均。

对 $R$ 的每个边区间取式 （6） 的非负上下界函数 $g_{j,-},g_{j,+}$（整段取常数 $1$）。它们的乘积夹住 $\mathbf 1_R$。两端积分分别等于各一维积分之积，随所有过渡宽度趋零而同趋于 $|R|$。夹逼即得长方体判据。

对旋转轨道，任一 $\mathbf k\ne\mathbf0$ 对应的公比是 $\mathrm e(\mathbf k\cdot\boldsymbol\alpha)$。若 $\mathbf k\cdot\boldsymbol\alpha\notin\mathbb Z$，则 （2） 给出零极限；若等于整数，指数项恒等于 $\mathrm e(\mathbf k\cdot\boldsymbol\beta)$，模为 $1$。在有理关系中清去分母，便知对所有非零 $\mathbf k$ 排除后一种情形，恰等价于所述线性无关性。

> **辨析　每个坐标都一致分布，联合频率却可能为零**
>
> 令 $\boldsymbol\alpha=(\sqrt2,2\sqrt2)$，从原点出发。两个坐标分别一致分布，但 $\mathbf k=(2,-1)$ 满足 $\mathbf k\cdot\boldsymbol\alpha=0$。轨道满足 $y\equiv2x\pmod1$；当 $0\le x<1/8$ 时有 $0\le y<1/4$，故面积为 $1/32$ 的长方形 $[0,1/8)\times[1/2,3/4)$ 从未被命中。

## §7 四道进阶习题及详解

### 问题 1　哪些区间的计数误差有界？

> **题意**
>
> 设 $x_n=\beta+n\alpha$，$\alpha$ 无理。用 $I(c,\ell)$ 表示从 $c$ 沿圆周正向起、长为 $\ell$ 的左闭右开弧，记 $H_N(c,\ell)$ 为前 $N$ 项的命中次数。证明对每个正整数 $m$，
>
> $$
> \big|H_N(c,\{m\alpha\})-N\{m\alpha\}\big|\le m .
> $$
>
>  进一步证明 $\sup_{c,\,0\le\ell\le1}|N^{-1}H_N(c,\ell)-\ell|\to0$。

**解**　式 （1） 对固定区间只给出 $o(N)$ 误差。题中指定了特殊弧长，这提示我们比较相隔 $m$ 步的两个轨道点。取 $\gamma=\{m\alpha\}$。对任意 $0\le u<1$，有恒等式

$$
\mathbf 1_{[0,\gamma)}(u)-\gamma=\{u-\gamma\}-u .\qquad\mathrm{(10)}
$$

 事实上，$u<\gamma$ 时右端为 $1-\gamma$，$u\ge\gamma$ 时为 $-\gamma$。令 $u_n=\{\beta+n\alpha-c\}$，把定义延至一切整数 $n$。则 $\{u_n-\gamma\}=u_{n-m}$，由 （10） 得

$$
\begin{aligned}
 H_N(c,\gamma)-N\gamma
 &=\sum_{n=1}^N(u_{n-m}-u_n)\\
 &=\sum_{j=1-m}^{0}u_j-\sum_{j=N-m+1}^{N}u_j .
\end{aligned}
$$

 右边两和分别介于 $0$ 与 $m$ 之间，故差的绝对值至多为 $m$，与 $c,\beta,N$ 均无关。作为特例，$m=1$ 且 $c=\beta$ 时只剩 $u_0-u_N=-\{N\alpha\}$，于是 $H_N(c,\{\alpha\})=\lfloor N\{\alpha\}\rfloor$。

对后一问，固定 $\varepsilon>0$。由 $\{m\alpha\}$ 的稠密性，可在 $[0,1]$ 中选有限多个这样的弧长，加上 $0,1$ 排为

$$
0=\gamma_0<\gamma_1<\cdots<\gamma_s=1,\qquad
 \max_j(\gamma_{j+1}-\gamma_j)<\varepsilon .
$$

 例如先等分到每段长小于 $\varepsilon/2$，再在每段内部取一个轨道点。对这些有限弧长，取相应下标的最大值为 $M$；两端 $0,1$ 的计数误差恒为零。若 $\gamma_j\le\ell\le\gamma_{j+1}$，同一起点的三条弧按包含关系排列，故

$$
\gamma_j-\frac MN\le\frac{H_N(c,\ell)}{N}\le\gamma_{j+1}+\frac MN .
$$

 于是对所有弧，频率误差同时小于或等于 $\varepsilon+M/N$。先令 $N\to\infty$，再令 $\varepsilon\downarrow0$。这里 $M$ 依赖于 $\varepsilon$，所以该论证并未给出一般弧的固定计数误差界。

### 问题 2　二次相位怎样化为一次相位？

> **题意**
>
> 设 $\alpha$ 无理，$\beta,\eta\in\mathbb R$。证明 $P(n)=\alpha n^2+\beta n+\eta$ 模 $1$ 一致分布，并推出 $2^{n^2}$ 以前四位 $2026$ 开头的指数集的自然密度。

**解**　固定 $k\in\mathbb Z\setminus\{0\}$，写 $z_n=\mathrm e(kP(n))$。相邻两项的比值随 $n$ 改变，无法直接作等比求和。但对每个固定的正整数 $h$，

$$
z_{n+h}\overline{z_n}=\mathrm e\bigl(k(2h\alpha n+h^2\alpha+h\beta)\bigr).\qquad\mathrm{(11)}
$$

 右端为一次相位，其公比 $\mathrm e(2kh\alpha)\ne1$。现在要把这些差分的平均值与原平均值联系起来。

在 $1,\ldots,N$ 之外补 $z_n=0$。任取固定的 $1\le H\le N$，令 $S=\sum_{n=1}^Nz_n$。每个非零项在平移和中恰好出现 $H$ 次，所以

$$
HS=\sum_{m=1}^{N+H-1}\sum_{r=0}^{H-1}z_{m-r}.
$$

 对外和用 Cauchy--Schwarz 不等式，得 $H^2|S|^2\le (N+H-1)\sum_m|\sum_r z_{m-r}|^2$。展开平方：$H$ 条对角线各贡献 $N$；距离为 $h$ 的非对角线在上、下三角各有 $H-h$ 条，每条给出同一相关和或其共轭。取绝对值，除以 $H^2N^2$，得

$$
\left|\frac SN\right|^{2}
 \le\frac{N+H-1}{N}\!
 \left[\frac1H+\frac2H\sum_{h=1}^{H-1}\left(1-\frac hH\right)
 \left|\frac 1N\sum_{n=1}^{N-h}z_{n+h}\overline{z_n}\right|\right].
 \qquad\mathrm{(12)}
$$

 对固定 $H$，右端只有有限个 $h$。由 （11） 和有限等比求和，每个相关和除以 $N$ 都趋于 $0$。因此

$$
\limsup_{N\to\infty}\left|\frac 1N\sum_{n=1}^{N}\mathrm e(kP(n))\right|^2
 \le\frac1H .
$$

 让 $H\to\infty$，Weyl 判别法便给出 $P(n)$ 的一致分布。取 $\alpha=\log_{10}2$、$\beta=\eta=0$，再用式 （7） 的同一个区间，所求自然密度仍为 $\log_{10}(2027/2026)$。

本题的差分估计 （12） 称为 van der Corput 差分法。$n^2$ 在正整数中只选出了密度为零的一族下标；原序列的一致分布本身不足以决定这族下标上的频率。一次差分恰好把二次项的次数降为一，因此可以重新使用无理旋转定理。

### 问题 3　三个幂的首位数字能够同时指定吗？

> **题意**
>
> 求使 $2^n,3^n,5^n$ 的十进制首位数字依次为 $2,1,4$ 的正整数 $n$ 的自然密度。解释三个单独的首位频率为什么不能直接相乘。

**解**　写 $\theta=\log_{10}2$、$\phi=\log_{10}3$。先确定可独立检验的坐标数。若整数 $a,b,c$ 满足 $a+b\theta+c\phi=0$，则

$$
10^a2^b3^c=1,\qquad 2^{a+b}3^c5^a=1 .
$$

 由有理数的素因子指数唯一，先比较 $5$ 的指数得 $a=0$，再比较 $2,3$ 得 $b=c=0$。故 $1,\theta,\phi$ 在 $\mathbb Q$ 上线性无关，$(\{n\theta\},\{n\phi\})$ 在 $\mathbb T^2$ 上一致分布。

第三个坐标受 $\log_{10}5=1-\theta$ 约束。记 $s_A=10^{\{n\log_{10}A\}}$（$A=2,3,5$）。由于 $n\theta$ 永远不是整数，

$$
\{n\log_{10}5\}=1-\{n\theta\},\qquad s_2s_5=10 .
$$

 从而首位约束可逐项改写为

$$
\begin{aligned}
 2^n\text{ 首位为 }2&\quad\Longleftrightarrow\quad 2\le s_2<3,\\
 5^n\text{ 首位为 }4&\quad\Longleftrightarrow\quad 4\le10/s_2<5
          \quad\Longleftrightarrow\quad 2<s_2\le5/2,\\
 3^n\text{ 首位为 }1&\quad\Longleftrightarrow\quad 1\le s_3<2.
\end{aligned}
$$

 前两行取交集，只留下 $2<s_2\le5/2$。取对数后，在两个自由坐标上得到长方形

$$
(\log_{10}2,\log_{10}(5/2)]\times[0,\log_{10}2).
$$

 每条边的命中频率为零，因为它包含在一个坐标取定值的集合中，而该坐标单独一致分布。故端点开闭不影响密度。用多维旋转定理，所求密度为

$$
\boxed{\displaystyle\log_{10}\frac54\;\log_{10}2}.
$$

 如果把三个边际频率相乘，就相当于假定三个对数坐标在立方体内一致分布。实际轨道满足第一、第三坐标之和模 $1$ 为零；对频率向量 $(1,0,1)$，指数平均恒为 $1$。这里的乘积公式只能用于前面证明过线性无关的两个自由坐标。

### 问题 4　沿取整序列抽样

> **题意**
>
> 设 $\beta>1$ 且 $1,\beta,\alpha\beta$ 在 $\mathbb Q$ 上线性无关。证明 $\alpha\lfloor n\beta\rfloor$ 模 $1$ 一致分布。再取无理数 $\beta>1$、$\alpha=1/\beta$，判断结论是否仍成立。

**解**　把取整造成的误差保留下来。令 $u_n=\{n\beta\}$、$v_n=\{n\alpha\beta\}$，则

$$
\alpha\lfloor n\beta\rfloor=n\alpha\beta-\alpha u_n,\qquad
 \mathrm e(k\alpha\lfloor n\beta\rfloor)=\mathrm e(kv_n)\mathrm e(-k\alpha u_n).
$$

 由定理 4，$(u_n,v_n)$ 在单位正方形上一致分布。对 $k\ne0$，如果能把右端的样本平均换成二重积分，就可利用 $v$ 方向的积分为零。然而 $u\mapsto\mathrm e(-k\alpha u)$ 在圆周接缝处未必连续，需论证这一步。

在半开正方形上令 $G(u,v)=\mathrm e(k(v-\alpha u))$。把它所在的坐标公式直接延至**闭正方形**，所得函数连续，因而一致连续。在两轴各作 $J$ 等分，小格上用左下角值定义阶梯函数 $G_J$。由 $|\mathrm e(s)-\mathrm e(t)|\le2\pi|s-t|$ 得

$$
\sup_{[0,1)^2}|G-G_J|\le\frac{2\pi|k|(1+|\alpha|)}{J}.
$$

 固定 $J$，$G_J$ 的轨道平均由各小格的频率决定，故趋于 $\iint G_J$。用式 （5） 同样的两次误差估计，再令 $J\to\infty$，原指数平均的极限就是

$$
\int_0^1\mathrm e(-k\alpha u)\,du\;\int_0^1\mathrm e(kv)\,dv=0 .
$$

 由 Weyl 判别法即得一致分布。具体地，取 $\beta=\sqrt2,\alpha=\sqrt3$ 即符合假设。若 $h\sqrt2+j\sqrt6=m$（$h,j,m\in\mathbb Z$），平方得 $2h^2+6j^2+4hj\sqrt3=m^2$，从而 $hj=0$，进而 $h=j=m=0$。

若 $\alpha=1/\beta$，因 $0<\{n\beta\}<1$，

$$
\left\{\frac{\lfloor n\beta\rfloor}{\beta}\right\}
 =1-\frac{\{n\beta\}}{\beta}\in(1-1/\beta,1).
$$

 此时轨道漏掉一个正长区间。虽 $\alpha,\beta$ 各自无理，关系 $\alpha\beta=1$ 使上述二维论证的假设失效。

**相关讲义**

[《Fourier 级数：从正交展开到恒等式与不等式》§4，定理 4.1（Fejér 一致逼近）。](/notes/c9576d09c21ecf44dcb2314d/)\
[《丢番图逼近的初等方法》§4，定理 4 与例 2（稠密轨道及二的幂的前缀）。](/essays/9cab8eca41ec07e8217eedd4/)
