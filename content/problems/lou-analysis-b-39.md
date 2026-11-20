---
title: "楼红卫《数学分析》B 组习题解答（三十九）：一致收敛、积分计算与算子对偶"
description: "B268—B274：零端点积分不等式，双幂相位积分的全部实参数判别，一致收敛与换元，渐近等价式、两个精确积分及线性算子的对偶不等式。七题完整证明。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "一致收敛", "积分不等式", "算子对偶", "B268-B274"]
created_at: "2026-11-20"
updated_at: "2026-11-20"
---

第三十九批接续 B267，逐题核对下册题册 PDF 第 28、29、31 页（印刷第 26、27、29 页），收录 10.1.B 第 14 题、10.2.B 第 1—2 题与 10.3.B 第 1—4 题。七题均无星号，无另附提示；B268 含推广要求，B269 含两个积分，B270、B274 为开放讨论。B269 原题没有限定 $p,q$ 的符号，以下按全部实参数讨论。

[上一批 B261—B267](/problems/828b0451ccb21ab4009c6025/) · [第十章索引](/problems/collections/lou-analysis/chapters/10/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)

## 题号导航

- [问题 B268：零端点条件与最佳常数（10.1.B-14）](#问题-b268)
- [问题 B269：双幂相位的参数判别（10.2.B-1）](#问题-b269)
- [问题 B270：换元与一致收敛（10.2.B-2）](#问题-b270)
- [问题 B271：周期积分的精确渐近阶（10.3.B-1）](#问题-b271)
- [问题 B272：有理核与反正切积分（10.3.B-2）](#问题-b272)
- [问题 B273：移动对数奇点与周期性（10.3.B-3）](#问题-b273)
- [问题 B274：线性算子不等式及其对偶（10.3.B-4）](#问题-b274)

## 问题 B268

**原题号：** 习题 10.1.B 第 14 题。[原题，PDF 第 28 页（印刷第 26 页）](/files/problems/楼分析习题-v2.pdf#page=28)

**题目**　设 $f\in C^1[0,1]$，$f(0)=f(1)=0$。证明：

$$
\left(\int_0^1f(x)\,dx\right)^2
\le\frac1{12}\int_0^1|f'(x)|^2\,dx.
\qquad\text{(1)}
$$

进一步，如何把条件放宽到 $f\in C^1_0(0,1)$？其中原题定义

$$
C^1_0(0,1)=\{f\in C[0,1]\cap C^1(0,1):f(0)=f(1)=0\}.
\qquad\text{(2)}
$$

**基础知识**　分部积分、Cauchy–Schwarz 不等式及其等号条件；有限区间上平方可积蕴涵绝对可积。这里的 $C^1_0$ 使用原题定义，不解释为紧支函数类。

**思路来源**　由两个零端点得到 $\int_0^1f'=0$，因此分部积分所得的权 $x$ 可以减去常数。令权的平方积分最小，恰应减去其平均值 $1/2$。

**证明**　由分部积分及端点条件，

$$
\begin{aligned}
\int_0^1f(x)\,dx
&=-\int_0^1x f'(x)\,dx
=-\int_0^1\left(x-\frac12\right)f'(x)\,dx,\\
\left|\int_0^1f(x)\,dx\right|^2
&\le\int_0^1\left(x-\frac12\right)^2dx
       \int_0^1|f'(x)|^2dx
=\frac1{12}\int_0^1|f'(x)|^2dx.
\end{aligned}
\qquad\text{(3)}
$$

等号成立当且仅当 $f'(x)$ 与 $x-1/2$ 成比例，即 $f(x)=c x(1-x)$，其中 $c\in\mathbb R$。取 $c\ne0$ 即知 $1/12$ 为最佳常数。

现在只设（2）。非负反常积分 $\int_0^1|f'|^2$ 总有扩充实数值；若它为无穷，（1）作为扩充实数不等式成立，但不能称其右端有限。若要求有限值不等式，须加上 $f'\in L^2(0,1)$。此时 Cauchy–Schwarz 给出 $\int_0^1|f'|<\infty$。固定 $x\in(0,1)$，在 $[\varepsilon,x]$ 上用微积分基本定理，再由 $f(\varepsilon)\to0$ 与绝对收敛令 $\varepsilon\downarrow0$，得到

$$
f(x)=\int_0^x f'(t)\,dt,
\qquad \int_0^1 f'(t)\,dt=f(1)-f(0)=0.
\qquad\text{(4)}
$$

因此 $f$ 在闭区间上绝对连续。也可直接在 $[\varepsilon,1-\eta]$ 分部积分：边界项因 $f$ 在端点连续且为零而消失，$f'$ 的绝对可积性保证加权积分收敛。这样（3）仍成立，等号仍仅为上述二次函数。并未假设 $f'$ 在端点有极限。

**方法总结**　零端点把导数限制在零平均值子空间中；将权减去其平均值便得到最小常数。放宽端点正则性时，先由能量有限恢复绝对连续性，再使用分部积分。

## 问题 B269

**原题号：** 习题 10.2.B 第 1 题。[原题，PDF 第 29 页（印刷第 27 页）](/files/problems/楼分析习题-v2.pdf#page=29)

**题目**　考察使得以下积分收敛的参数 $\alpha,p,q$ 以及积分一致收敛的范围：

$$
\text{(1)}\quad I_0=\int_0^1x^\alpha\sin(x^p+x^{-q})\,dx;
\qquad
\text{(2)}\quad I_\infty=\int_1^\infty x^\alpha\sin(x^p+x^{-q})\,dx.
\qquad\text{(5)}
$$

**基础知识**　反常积分的 Cauchy 条件、振荡积分分部积分、同号半周期下界，以及一致收敛在参数取极限时的 Cauchy 估计。参数均取实数。

**思路来源**　先用倒数换元统一两个端点，再比较相位的两个幂。相位趋于无穷、趋于非零常数、趋于零，分别对应振荡抵消、普通幂积分、小角近似，不能只讨论第一种。

**解**　记 $m=\min(p,-q)$、$M=\max(p,-q)$。全部逐点结论如下；表中不满足严格不等式的参数均发散，包括临界等号。

| 积分 | 相位类型 | 收敛的充要条件 | 绝对收敛的充要条件 |
| --- | --- | --- | --- |
| $I_0$ | $m<0$ | $\alpha>m-1$ | $\alpha>-1$ |
| $I_0$ | $m=0$ | $\alpha>-1$ | $\alpha>-1$ |
| $I_0$ | $m>0$ | $\alpha+m>-1$ | $\alpha+m>-1$ |
| $I_\infty$ | $M>0$ | $\alpha<M-1$ | $\alpha<-1$ |
| $I_\infty$ | $M=0$ | $\alpha<-1$ | $\alpha<-1$ |
| $I_\infty$ | $M<0$ | $\alpha+M<-1$ | $\alpha+M<-1$ |

证明及一致性都归结为

$$
J(A,u,v)=\int_1^\infty t^A\sin\Phi(t)\,dt,
\qquad \Phi(t)=t^u+t^v,\quad r=\max(u,v),\ s=\min(u,v).
\qquad\text{(6)}
$$

对 $I_\infty$ 取 $(A,u,v)=(\alpha,p,-q)$；对 $I_0$ 作 $t=1/x$，取 $(A,u,v)=(-\alpha-2,-p,q)$。这次换元与参数无关。

若 $r<0$，则 $\Phi(t)\to0$，且 $\sin\Phi(t)\sim c t^r$；若 $r=0$，则 $\sin\Phi(t)\to\sin1$ 或 $\sin2$。这里及下文 $c=2$ 当 $u=v$，否则 $c=1$。这些极限的系数均为正，故前一种收敛当且仅当 $A+r<-1$，后一种当且仅当 $A<-1$；收敛时都是绝对收敛。

设 $r>0$。充分大时 $\Phi'>0$，且

$$
\Phi(t)\sim c t^r,\qquad
\Phi'(t)\sim cr t^{r-1},\qquad
\left|\left(\frac{t^A}{\Phi'(t)}\right)'\right|\le C t^{A-r}.
\qquad\text{(7)}
$$

最后一个估计可由商法则及 $|\Phi''(t)|\le C t^{r-2}$ 得到。当 $A<r-1$ 时，对任意充分大的 $T>R$ 分部积分，

$$
\begin{aligned}
\int_R^T t^A\sin\Phi(t)\,dt
&=\left[-\frac{t^A}{\Phi'(t)}\cos\Phi(t)\right]_R^T
+\int_R^T\left(\frac{t^A}{\Phi'(t)}\right)'\cos\Phi(t)\,dt,\\
\left|\int_R^T t^A\sin\Phi(t)\,dt\right|
&\le C R^{A-r+1}\longrightarrow0.
\end{aligned}
\qquad\text{(8)}
$$

反之，以 $y=\Phi(t)$ 换元，令 $t=t(y)$。新振幅满足

$$
w(y)=\frac{t(y)^A}{\Phi'(t(y))}\sim C_0 y^\kappa,
\qquad \kappa=\frac{A-r+1}{r},\quad C_0>0.
\qquad\text{(9)}
$$

在每个 $[2k\pi+\pi/6,2k\pi+5\pi/6]$ 上正弦至少为 $1/2$，积分至少为 $c_0 k^\kappa$。若 $\kappa\ge0$，这些尾区间积分不趋于零，违反 Cauchy 条件，故收敛必有 $A<r-1$。对绝对值积分，把上述互不相交区间的贡献相加，$\kappa\ge-1$ 时发散；若 $\kappa<-1$，由 $w(y)\le C y^\kappa$ 得绝对收敛。这正是 $A<-1$。至此表中全部结论得证。

**一致收敛范围。** 令 $\mathcal C$ 为（6）的逐点收敛参数域，即

$$
\mathcal C=
\{r>0,\ A<r-1\}\ \cup\
\{r\le0,\ A+r<-1\}.
\qquad\text{(10)}
$$

它是开集。对任意非空有界参数集合 $E\subset\mathbb R^3$，有精确判别

$$
\boxed{\ J\text{ 在 }E\text{ 上一致收敛}
\quad\Longleftrightarrow\quad \overline E\subset\mathcal C.\ }
\qquad\text{(11)}
$$

特别地，在全部收敛域内，积分内闭一致收敛。这里内闭一致是指任意紧子集上的一致收敛。

先证明每个收敛参数都有一个一致收敛邻域。若 $r<0$，在小邻域中可保持 $r<0$、$A+r\le-1-\delta$，于是 $|t^A\sin\Phi(t)|\le2t^{-1-\delta}$。若 $r=0$，因 $A<-1$，在小邻域中直接保持 $A\le-1-\delta$，用 $|\sin\Phi|\le1$ 控制。

若 $r>0$，取有界小邻域，使 $r\ge r_0>0$、$A-r+1\le-\delta$，全部指数绝对值有公共上界。较小幂的指数 $s\ge0$ 时，两项导数同号；$s<0$ 时，其负导数相对于 $t^{r-1}$ 至多为 $C t^{-r_0}$。所以从统一的 $R_0$ 开始，

$$
\Phi'(t)\ge\frac{r_0}{2}t^{r-1},\qquad
|\Phi''(t)|\le C t^{r-2},\qquad
\sup_{T>R}\left|\int_R^Tt^A\sin\Phi(t)\,dt\right|\le C R^{-\delta}.
\qquad\text{(12)}
$$

这些常数在邻域中统一。紧集由有限多个此类邻域覆盖，故（11）的充分性成立。

若积分在 $E$ 上一致收敛，则对给定 $\varepsilon>0$，存在统一 $R_0$，使任意 $T>R\ge R_0$ 的尾积分绝对值不超过 $\varepsilon$。固定这样的有限 $R,T$，被积函数关于参数连续且在紧区间上一致连续，故有限区间积分关于参数连续。令 $E$ 中参数趋于任一闭包点，该 Cauchy 估计仍成立，因而闭包点也必须属于 $\mathcal C$。必要性甚至不需要 $E$ 有界。

（11）经（6）给出的线性参数变换，分别就是 $I_0,I_\infty$ 在任意有界三参数集合上的充要判别。绝对一致收敛也有同样形式：将 $\mathcal C$ 换成表中的绝对收敛域即可。充分性由前面的幂函数控制及紧覆盖证明；必要性对绝对值尾积分重复闭包论证。

还有一个不要求 $\alpha$ 有界的精确结论。固定任意 $p,q$，记

$$
a_0=\begin{cases}m-1,&m<0,\\-1-m,&m\ge0,\end{cases}
\qquad
a_\infty=\begin{cases}M-1,&M>0,\\-1-M,&M\le0.\end{cases}
\qquad\text{(13)}
$$

对于非空 $F\subset\mathbb R$，$I_0$ 关于 $\alpha\in F$ 一致收敛当且仅当 $\inf F>a_0$；$I_\infty$ 一致收敛当且仅当 $\sup F<a_\infty$。必要性由边界参数发散及闭包论证得到。证明充分性，只需在（6）固定 $u,v$，选一个收敛指数 $A_*$ 大于或等于所有待考察的 $A$。令

$$
G_R(t)=\int_R^t s^{A_*}\sin\Phi(s)\,ds,
\qquad w_A(t)=t^{A-A_*}.
\qquad\text{(14)}
$$

$w_A$ 非负递减且不超过 $1$。有限区间分部积分给出

$$
\left|\int_R^T w_A(t)\,dG_R(t)\right|
\le\sup_{R\le t\le T}|G_R(t)|
\left(w_A(T)+\int_R^T|w_A'(t)|\,dt\right)
\le\sup_{t\ge R}|G_R(t)|\longrightarrow0.
\qquad\text{(15)}
$$

故整个半无限指数范围也一致收敛。特别地，对固定 $p,q$，完整的开收敛半直线本身并不一致收敛，必须与临界指数留有正间隔。

对无界三参数集合，不能把（11）的充分性照搬。例如

$$
E=\{(A,u,v)=(-1,1/n,-n):n\ge1\}
\qquad\text{(16)}
$$

在有限维空间中没有有限聚点，$\overline E=E\subset\mathcal C$，各积分都收敛；但固定 $R>1$ 后，令 $n\to\infty$，由有限区间上的有界控制，

$$
\int_R^{2R}\frac{\sin(t^{1/n}+t^{-n})}{t}\,dt
\longrightarrow \sin1\log2>0.
\qquad\text{(17)}
$$

所以没有统一尾界。本题已经给出全部实参数逐点分类、全部有界参数集的一致性充要条件，以及固定 $p,q$ 时任意 $\alpha$ 集合的精确范围；对一般无界三参数集合，还需检查如（12）的常数能否统一，不能仅凭各点收敛作结论。

**方法总结**　先分类相位的端点行为，再用同号波段证明必要性、分部积分证明充分性。一致收敛不仅要求每个指数满足严格不等式，还要求尾估计中的衰减间隔和常数可统一；有界参数集可将这件事准确表达为闭包仍落在收敛域内。

## 问题 B270

**原题号：** 习题 10.2.B 第 2 题。[原题，PDF 第 29 页（印刷第 27 页）](/files/problems/楼分析习题-v2.pdf#page=29)

**题目**　试讨论变量代换对于反常积分收敛性与一致收敛性的影响。

**基础知识**　先在有限截断区间换元，再令截断端点趋于瑕点；一致收敛要求截断位置对全部参数同时有效。

**思路来源**　逐参数可逆换元只重标记趋近端点的路径。一致性还要检查：新变量达到统一位置时，所有旧变量是否都已进入足够远的尾部。

**解**　以下以无穷端点为例。设 $f(x,\lambda)$ 对每个参数在 $[a,\infty)$ 局部可积，$x=\phi(t)$ 是 $[c,\infty)$ 到 $[a,\infty)$ 的严格递增 $C^1$ 双射，且 $\phi(c)=a$、$\phi(t)\to\infty$。对有限 $S$，换元公式为

$$
\int_a^{\phi(S)}f(x,\lambda)\,dx
=\int_c^S f(\phi(t),\lambda)\phi'(t)\,dt.
\qquad\text{(18)}
$$

因此原积分与换元后积分逐点同敛散，收敛时值相等；对绝对值使用同一公式，绝对收敛也等价。条件收敛不需要额外假定绝对收敛。这里允许导数在个别点为零；所需的是所述单调双射及有限区间换元公式。

若 $\phi$ 与 $\lambda$ 无关，$S\to\infty$ 与 $\phi(S)\to\infty$ 同步，Cauchy 尾区间一一对应，所以一致收敛等价，绝对一致收敛也等价。B269 的倒数换元正属于这种情形；递减换元要调换积分方向。

若 $\phi=\phi_\lambda$ 依赖参数，每个 $\phi_\lambda$ 仍为上述双射，则逐点结论不变。要从旧变量的一致收敛推出新变量的一致收敛，一个充分条件是

$$
\inf_{\lambda\in E}\phi_\lambda(S)\longrightarrow\infty
\quad(S\to\infty).
\qquad\text{(19)}
$$

事实上，给定旧变量的统一尾起点 $R$，由（19）选统一 $S$，使所有 $\phi_\lambda(S)\ge R$；于是新变量的任意尾区间都映入旧变量的尾区间，直接套用 Cauchy 估计。反方向的充分条件为

$$
\inf_{\lambda\in E}\phi_\lambda^{-1}(R)\longrightarrow\infty
\quad(R\to\infty).
\qquad\text{(20)}
$$

两条件同时满足便保持双向一致性。例如 $\phi_\lambda(t)=a+\lambda t$、$c=0$，若 $0<\lambda_0\le\lambda\le\lambda_1<\infty$，两条件都成立。条件（19）、（20）是便于使用的充分条件，不声称对每个特定被积函数都是必要的。

没有这种统一控制时，一致性可以改变。原积分

$$
\int_0^\infty e^{-x}\,dx=1
\qquad(\lambda>0)
\qquad\text{(21)}
$$

根本不依赖参数，当然一致收敛。令 $x=\lambda t$，变为 $\int_0^\infty\lambda e^{-\lambda t}dt$，其尾积分为 $e^{-\lambda S}$，而 $\sup_{\lambda>0}e^{-\lambda S}=1$，故不一致收敛。反过来对后者令 $t=x/\lambda$，又得到一致收敛的（21）。每个积分值一直是 $1$，改变的是尾部控制。

有限瑕点的论证相同：要求新截断点像的位置对全部参数一致趋近旧瑕点。若有两个瑕端点或内部奇点，必须分开检查各端点的反常积分；普通反常积分要求它们分别收敛，不能把相互抵消的同步截断当作普通收敛。例如 $\int_{-1}^1dx/x$ 的对称主值是零，但两侧反常积分分别发散，不能靠配对换元宣布原积分收敛。

**方法总结**　逐点换元依靠可逆的端点对应；一致换元依靠对所有参数统一的端点对应。先写有限截断等式，再检查截断的统一性，可以避免把点态等式误当作一致极限结论。

## 问题 B271

**原题号：** 习题 10.3.B 第 1 题。[原题，PDF 第 31 页（印刷第 29 页）](/files/problems/楼分析习题-v2.pdf#page=31)

**题目**　设 $\alpha>0$，求 $n\to\infty$ 时

$$
I_n=\int_{n\pi}^{(n+1)\pi}\frac{x}{1+x^\alpha\sin^2x}\,dx
\qquad\text{(22)}
$$

的阶。

**基础知识**　固定长度区间上的一致渐近估计；积分 $\int_0^\pi(1+a\sin^2t)^{-1}dt$ 的正切换元。

**思路来源**　不能处处以 $x^\alpha\sin^2x$ 代替分母，因为每个周期的两个零点附近仍有主要贡献。保留完整分母，只将缓慢变化的 $x$ 冻结在 $n\pi$。

**解**　不仅有阶，还成立渐近等价式

$$
\boxed{\ I_n\sim\pi(n\pi)^{1-\alpha/2}
=\pi^{2-\alpha/2}n^{1-\alpha/2}.\ }
\qquad\text{(23)}
$$

令 $N=n\pi$、$x=N+t$，$0\le t\le\pi$。记 $y=(N+t)/N\in[1,1+1/n]$、$b=N^\alpha\sin^2t\ge0$，则原被积函数与冻结后的被积函数之比为

$$
\frac{(N+t)/(1+(N+t)^\alpha\sin^2t)}{N/(1+N^\alpha\sin^2t)}
=\frac{y(1+b)}{1+y^\alpha b}.
\qquad\text{(24)}
$$

因 $1\le(1+y^\alpha b)/(1+b)\le y^\alpha$，该比值介于 $y^{1-\alpha}$ 与 $y$ 之间，故对整个 $t$ 区间一致为 $1+O_\alpha(1/n)$，包括正弦零点。于是

$$
I_n=\left(1+O_\alpha(n^{-1})\right)N
\int_0^\pi\frac{dt}{1+N^\alpha\sin^2t}.
\qquad\text{(25)}
$$

利用关于 $\pi/2$ 的对称性，在半区间令 $u=\tan t$，得到对 $a\ge0$，

$$
\int_0^\pi\frac{dt}{1+a\sin^2t}
=2\int_0^\infty\frac{du}{1+(1+a)u^2}
=\frac\pi{\sqrt{1+a}}.
\qquad\text{(26)}
$$

代入 $a=N^\alpha$ 即得（23）。因此 $0<\alpha<2$ 时 $I_n\to\infty$，$\alpha=2$ 时 $I_n\to\pi$，$\alpha>2$ 时 $I_n\to0$；各自的幂阶均由（23）精确给出。

**方法总结**　冻结缓变因子时，要证明相对误差在整个区间一致，而不是只在远离零点的部分成立。完整保留小分母结构后，用一个周期积分直接算出主项及常数。

## 问题 B272

**原题号：** 习题 10.3.B 第 2 题。[原题，PDF 第 31 页（印刷第 29 页）](/files/problems/楼分析习题-v2.pdf#page=31)

**题目**　计算

$$
I=\int_0^\infty\frac{(1-x^2)\arctan x^2}{x^4+4x^2+1}\,dx.
\qquad\text{(27)}
$$

**基础知识**　有理函数部分分式、含参积分求导、分部积分。先证明绝对收敛，再作拆分。

**思路来源**　分母关于倒数对称，可以分解为两个互为倒数的二次因子。把反正切留在公共参数积分中，对参数求导后即可消去反正切。

**解**　零点附近被积函数为 $O(x^2)$，无穷远为 $O(x^{-2})$，故绝对收敛。令

$$
a=\sqrt{2+\sqrt3},\quad b=\sqrt{2-\sqrt3},\quad
ab=1,\quad a-b=\sqrt2,\quad a+b=\sqrt6.
\qquad\text{(28)}
$$

直接通分得到

$$
\frac{1-x^2}{x^4+4x^2+1}
=\frac1{\sqrt2}\left(\frac b{x^2+b^2}-\frac a{x^2+a^2}\right).
\qquad\text{(29)}
$$

记 $K(c)=\int_0^\infty c\arctan(x^2)/(x^2+c^2)\,dx$，$c>0$。在任意参数紧区间 $0<c_0\le c\le c_1$，核及其参数导数乘以有界的 $\arctan x^2$，均由 $C/(1+x^2)$ 控制，故可在积分号下求导。又因

$$
\frac{\partial}{\partial c}\frac c{x^2+c^2}
=-\frac d{dx}\frac x{x^2+c^2},
\qquad
K'(c)=2\int_0^\infty\frac{x^2}{(x^2+c^2)(x^4+1)}\,dx.
\qquad\text{(30)}
$$

第二式由有限区间分部积分后取极限得到：边界项 $x\arctan(x^2)/(x^2+c^2)$ 在两端均为零，余项绝对收敛。

为计算右端，先记

$$
Q=\int_0^\infty\frac{dx}{1+x^4}
=\int_0^\infty\frac{x^2\,dx}{1+x^4}
=\frac\pi{2\sqrt2}.
\qquad\text{(31)}
$$

中间等式由 $x=1/t$ 得到；最后一个值可不借助复积分求出。将两积分相加后令 $u=x-1/x$，因 $1+x^4=x^2(u^2+2)$、$du=(1+x^{-2})dx$，便有 $2Q=\int_{-\infty}^\infty du/(u^2+2)=\pi/\sqrt2$。

现在使用恒等式

$$
\frac{x^2}{(x^2+c^2)(x^4+1)}
=\frac1{c^4+1}\left(-\frac{c^2}{x^2+c^2}
+\frac{c^2x^2+1}{x^4+1}\right).
\qquad\text{(32)}
$$

由（30）—（32），

$$
\begin{aligned}
K'(c)&=\frac\pi{c^4+1}\left(\frac{c^2+1}{\sqrt2}-c\right)
=\frac\pi{\sqrt2(c^2+\sqrt2c+1)},\\
K(c)&=\pi\left(\arctan(1+\sqrt2c)-\frac\pi4\right).
\end{aligned}
\qquad\text{(33)}
$$

确定积分常数时，令 $x=ct$，得到 $K(c)=\int_0^\infty\arctan(c^2t^2)/(1+t^2)dt$。当 $c\downarrow0$，由可积控制函数 $\pi/[2(1+t^2)]$ 得 $K(c)\to0$，故（33）没有遗漏常数。

由（29），$I=(K(b)-K(a))/\sqrt2$。令 $\theta=\arctan(1+\sqrt2b)-\arctan(1+\sqrt2a)\in(-\pi/2,0)$，则

$$
\tan\theta
=\frac{\sqrt2(b-a)}{1+(1+\sqrt2b)(1+\sqrt2a)}
=-\frac1{2+\sqrt3}=-\tan\frac\pi{12}.
\qquad\text{(34)}
$$

由角度范围 $\theta=-\pi/12$，所以

$$
\boxed{\ I=-\frac{\pi^2}{12\sqrt2}.\ }
\qquad\text{(35)}
$$

**方法总结**　倒数对称的四次分母提示互为倒数的二次因子；参数应放在有理核中，使求导能够转化为关于积分变量的导数。积分号下求导、分部积分和参数端点极限分别给出合法性依据。

## 问题 B273

**原题号：** 习题 10.3.B 第 3 题。[原题，PDF 第 31 页（印刷第 29 页）](/files/problems/楼分析习题-v2.pdf#page=31)

**题目**　设 $a\in[0,1]$，计算

$$
I(a)=\int_0^{\pi/2}\ln|a^2-\sin^2x|\,dx.
\qquad\text{(36)}
$$

**基础知识**　对数奇点绝对可积、三角积化和差，以及周期可积函数在整周期上的平移不变性。

**思路来源**　令 $a=\sin\theta$，把一个随参数移动的零点拆成两个正弦因子。两个平移后的半周期恰好拼成一个完整周期，参数便消失。

**解**　取唯一的 $\theta\in[0,\pi/2]$，使 $a=\sin\theta$。由

$$
\sin^2\theta-\sin^2x=\sin(\theta+x)\sin(\theta-x),
\qquad L(t)=\ln|\sin t|,
\qquad\text{(37)}
$$

得到 $\ln|a^2-\sin^2x|=L(\theta+x)+L(\theta-x)$，在各零点以外成立。$L$ 在 $k\pi$ 附近等于 $\ln|t-k\pi|+O(1)$，故在每个有限区间绝对可积。这同时处理 $0<a<1$ 的内部奇点和 $a=0,1$ 的端点奇点，所以可以合法拆分与换元：

$$
\begin{aligned}
I(a)
&=\int_\theta^{\theta+\pi/2}L(t)\,dt
+\int_{\theta-\pi/2}^{\theta}L(t)\,dt\\
&=\int_{\theta-\pi/2}^{\theta+\pi/2}L(t)\,dt
=\int_0^\pi\ln\sin t\,dt.
\end{aligned}
\qquad\text{(38)}
$$

最后一步利用 $L$ 的 $\pi$ 周期性；积分区间即使跨越奇点，也因绝对可积而可分段平移。

为算出常数，记 $J=\int_0^{\pi/2}\ln\sin t\,dt$。代换 $t\mapsto\pi/2-t$ 得 $J=\int_0^{\pi/2}\ln\cos t\,dt$，所以

$$
2J=-\frac\pi2\ln2+\int_0^{\pi/2}\ln\sin(2t)\,dt
=-\frac\pi2\ln2+J.
\qquad\text{(39)}
$$

因此 $J=-\pi\ln2/2$，结合（38）得到

$$
\boxed{\ I(a)=-\pi\ln2\quad(0\le a\le1).\ }
\qquad\text{(40)}
$$

**方法总结**　移动奇点并不一定适合直接对参数求导，因为求导后可能失去普通可积性。先把对数拆成平移的周期函数，利用整周期积分不变性，既算出常数，也同时覆盖端点参数。

## 问题 B274

**原题号：** 习题 10.3.B 第 4 题。[原题，PDF 第 31 页（印刷第 29 页）](/files/problems/楼分析习题-v2.pdf#page=31)

**题目**　试寻找一些线性算子的积分不等式，给出与之对偶的不等式。

**基础知识**　Hölder 不等式、$L^p$ 范数的对偶表示、积分换序和算子范数。以下讨论实函数，$X,Y$ 为带 Lebesgue 测度的实轴区间，指数均严格介于 $1$ 与无穷之间；记 $p'=p/(p-1)$。

**思路来源**　将 $Tf$ 与检验函数 $g$ 配对，交换积分次序，把算子从 $f$ 一侧移到 $g$ 一侧。再对单位球取上确界，即能保留原不等式的最佳常数。

**解**　本题为开放编例题。下面先证明统一的对偶原则，再给出 Volterra 积分、卷积和 Schur 核估计三类例子，各自注明适用条件。

**对偶原则。** 对 $1<r<\infty$ 及 $h\in L^r$，

$$
\|h\|_r=\sup_{\|g\|_{r'}\le1}\left|\int hg\right|.
\qquad\text{(41)}
$$

上界由 Hölder 得到；当 $h\ne0$，取 $g=\operatorname{sgn}(h)|h|^{r-1}/\|h\|_r^{r-1}$ 即取等。对于尚不知属于 $L^r$ 的可测 $h$，先在有限测度区域及 $|h|\le N$ 上作同样检验，再由单调收敛，也得到“配对一致有界蕴涵 $h\in L^r$”的版本。

设 $T:L^p(X)\to L^q(Y)$ 为线性算子，且在检验函数上满足

$$
\int_Y(Tf)g=\int_X f(T^*g).
\qquad\text{(42)}
$$

由（41）依次对 $f,g$ 取上确界，得到

$$
\|Tf\|_q\le C\|f\|_p\ \text{ 对所有 }f\text{ 成立}
\quad\Longleftrightarrow\quad
\|T^*g\|_{p'}\le C\|g\|_{q'}\ \text{ 对所有 }g\text{ 成立}.
\qquad\text{(43)}
$$

具体地，前一不等式给 $|\int fT^*g|\le C\|f\|_p\|g\|_{q'}$，再用（41）即得后一不等式；反向完全相同。取最小 $C$，两算子范数相等。若先只在稠密的有界有限支撑函数上定义，所得估计给出唯一连续延拓；不能在尚无绝对可积依据时直接交换任意无界函数的积分。

**例一：Volterra 算子与反向积分，且常数最佳。** 在 $(0,1)$ 上令

$$
(Vf)(x)=\int_0^x f(t)\,dt,
\qquad (V^*g)(t)=\int_t^1g(x)\,dx.
\qquad\text{(44)}
$$

当 $f,g\in L^2(0,1)$，有限区间上的 $L^2\subset L^1$ 保证三角区域内 $|f(t)g(x)|$ 可积，因此换序确实给出（42）。这一对不等式为

$$
\begin{aligned}
\int_0^1\left|\int_0^x f(t)\,dt\right|^2dx
&\le\frac4{\pi^2}\int_0^1|f(t)|^2dt,\\
\int_0^1\left|\int_x^1 g(t)\,dt\right|^2dx
&\le\frac4{\pi^2}\int_0^1|g(t)|^2dt.
\end{aligned}
\qquad\text{(45)}
$$

为完整证明常数，令 $F=Vf$、$w(x)=\sin(\pi x/2)$、$b(x)=w'(x)/w(x)$。$F$ 绝对连续，$F'=f$ 几乎处处；在 $[\varepsilon,1]$ 展开平方并分部积分，由 $b'+b^2=-\pi^2/4$、$b(1)=0$ 得

$$
\int_\varepsilon^1|F'-bF|^2dx
=\int_\varepsilon^1|F'|^2dx
-\frac{\pi^2}{4}\int_\varepsilon^1|F|^2dx
+b(\varepsilon)|F(\varepsilon)|^2.
\qquad\text{(46)}
$$

这里 $F$ 有界，因此右侧各积分有限。又由 Cauchy–Schwarz，

$$
|F(\varepsilon)|^2\le\varepsilon\int_0^\varepsilon|f|^2,
\qquad 0\le\varepsilon b(\varepsilon)\le1,
\qquad b(\varepsilon)|F(\varepsilon)|^2\longrightarrow0.
\qquad\text{(47)}
$$

利用（46）左端非负，再令 $\varepsilon\downarrow0$，即得（45）第一式；第二式由（43）得到，也可作 $x\mapsto1-x$。取 $f(t)=\cos(\pi t/2)$、$g(t)=\sin(\pi t/2)$，分别达到等号，所以 $4/\pi^2$ 是两式的最佳常数。

**例二：卷积与反射核。** 设 $k\in L^1(\mathbb R)$，$Tf(x)=\int_\mathbb R k(t)f(x-t)dt$。记 $K=\|k\|_1$；$K=0$ 时结论平凡，否则由加权 Hölder 与非负积分换序，

$$
\begin{aligned}
|Tf(x)|^p&\le K^{p-1}\int_\mathbb R|k(t)|\,|f(x-t)|^pdt,\\
\|Tf\|_p&\le K\|f\|_p.
\end{aligned}
\qquad\text{(48)}
$$

第一行右端在几乎处处的 $x$ 有限，因其关于 $x$ 的积分为 $K\|f\|_p^p$，从而同时证明卷积几乎处处有定义。又有 $\int|k(t)|\int|f(x-t)g(x)|dxdt\le K\|f\|_p\|g\|_{p'}$，故双重积分绝对可积。换序及平移得到

$$
T^*g(y)=\int_\mathbb R k(t)g(y+t)dt=(\widetilde k*g)(y),
\quad \widetilde k(t)=k(-t),
\quad \|\widetilde k*g\|_{p'}\le K\|g\|_{p'}.
\qquad\text{(49)}
$$

这是（48）的对偶不等式。若 $k\ge0$，常数 $K$ 最佳：取 $f_N=\mathbf1_{[-N,N]}/(2N)^{1/p}$。固定 $M<N$，在 $|x|\le N-M$ 上，$Tf_N(x)\ge(2N)^{-1/p}\int_{-M}^M k$，因而

$$
\|Tf_N\|_p\ge\left(1-\frac MN\right)^{1/p}\int_{-M}^M k.
\qquad\text{(50)}
$$

先令 $N\to\infty$，再令 $M\to\infty$，得到算子范数至少为 $K$，与（48）相合。有符号核时只保证上界 $K$，不在此断言它一定最佳。

**例三：带权 Schur 估计与转置核。** 设 $K(x,t)\ge0$ 为可测核，正可测权 $u(x),v(t)$ 有限且非零，并满足几乎处处

$$
\int K(x,t)v(t)dt\le A u(x),
\qquad \int K(x,t)u(x)dx\le B v(t),
\quad A,B<\infty.
\qquad\text{(51)}
$$

对 $Tf(x)=\int K(x,t)f(t)dt$，加权 Cauchy–Schwarz 给出

$$
|Tf(x)|^2
\le A u(x)\int K(x,t)\frac{|f(t)|^2}{v(t)}dt,
\qquad \|Tf\|_2^2\le AB\|f\|_2^2.
\qquad\text{(52)}
$$

第二式由非负积分换序及（51）第二个条件得到，也保证积分定义几乎处处成立。转置核 $K^*(t,x)=K(x,t)$ 将 $u,v$ 和 $A,B$ 交换，因此对偶式为

$$
\left\|\int K(x,\cdot)g(x)dx\right\|_2
\le\sqrt{AB}\,\|g\|_2.
\qquad\text{(53)}
$$

例如在 $(0,\infty)$ 上取 $K(x,t)=1/(x+t)$、$u(x)=x^{-1/2}$、$v(t)=t^{-1/2}$。由 $t=xs$、再令 $s=z^2$，

$$
\int_0^\infty\frac{t^{-1/2}}{x+t}dt
=x^{-1/2}\int_0^\infty\frac{s^{-1/2}}{1+s}ds
=\pi x^{-1/2}.
\qquad\text{(54)}
$$

另一个方向相同，故得到 Hilbert 核的具体积分不等式

$$
\int_0^\infty\left|\int_0^\infty\frac{f(t)}{x+t}dt\right|^2dx
\le\pi^2\int_0^\infty|f(t)|^2dt.
\qquad\text{(55)}
$$

核对称，所以其对偶恰为同型不等式。这里证明了常数 $\pi$ 的算子范数上界，不另作最佳性断言。

**方法总结**　对偶操作应同时完成三件事：确定配对指数，计算伴随积分核，证明换序合法。Volterra 将前向积分变为后向积分，卷积将核反射，Schur 估计将两侧权及常数互换；经范数对偶得到的两条不等式拥有相同的最佳算子常数。

## 七题方法总结

B268 从零端点得到零平均值约束，通过权的中心化求最佳常数，并在有限能量下补足端点正则性。B269 以相位的三种端点行为统一区分全部实参数，再把有界参数集的一致性准确归结为闭包条件。B270 说明换元保持逐点收敛，却只有统一的端点控制才能保证参数一致性。B271 通过一致相对误差冻结缓变因子，保留零点附近的主贡献。B272 用参数求导消去反正切，B273 用完整周期消去移动对数奇点。B274 则将积分估计组织为算子与伴随算子的成对不等式。

本批 **B268—B274 七题全部完成**；B270、B274 按原题要求完成有证明、有适用条件的开放讨论。两册累计 **269 道已作答、5 道暂跳过**，其中上册 **175** 道、下册 **94** 道。待核仍为 **B116、B148、B180、B247、B261**。第十章当前 **19 道已作答、1 道暂跳过**，已收录至 10.3.B 第 4 题。

下一题为 **B275＝10.3.B 第 5 题**，见[原题 PDF 第 31 页（印刷第 29 页）](/files/problems/楼分析习题-v2.pdf#page=31)；原题要求构造图像在单位正方形中稠密的函数，题面等式左侧带闭包符号，后续须保留。

[上一批 B261—B267](/problems/828b0451ccb21ab4009c6025/) · [第十章索引](/problems/collections/lou-analysis/chapters/10/) · [B 组总目录](/problems/collections/lou-analysis/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)
