---
title: "楼红卫《数学分析》B 组习题解答（三十一）：振荡平均、紧支原函数与弱导数"
description: "B212—B218：有限指数和的三种证明、线性系统渐近稳定、矩消去与紧支原函数、高阶弱导数、多维均匀分布及采样条件的减弱。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "下册", "振荡平均", "弱导数", "均匀分布", "B212-B218"]
created_at: "2026-11-10"
updated_at: "2026-11-10"
---

本批接续 B211，按原书顺序完成 **B212—B218** 七题，即 **8.8.B 第 1—7 题**。原题全部位于下册 PDF 第 14 页（印刷第 12 页），均无星号；第 1 题要求多种证明，第 7 题为开放推广题。题面保留全部条件与交叉引用，第 5 题保留原式并说明题册脚注指出的维数笔误。

本批完成后，两册累计 **215 道已作答、3 道暂跳过**；上册完成 **175 题**，下册完成 **40 题**。B116、B148、B180 继续保留待核状态，不计入完成数。至此 8.8.B 七题全部完成。

[下册资料页](/problems/149ff60b32b01ff69feab8a4/) · [原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14) · [所引 A 组题第 13 页](/files/problems/楼分析习题-v2.pdf#page=13)

**批次导航：**[B 组解答总目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [上一批 B205—B211](/problems/aeb90646cd67124999a7cba3/)

## 题号导航

- [问题 B212：有限指数和趋零的三种证明（8.8.B-1）](#问题-b212)
- [问题 B213：线性系统全部解趋零的谱判据（8.8.B-2）](#问题-b213)
- [问题 B214：紧支高阶原函数与矩消去（8.8.B-3）](#问题-b214)
- [问题 B215：高阶弱导数与几乎处处代表（8.8.B-4）](#问题-b215)
- [问题 B216：多维均匀分布与 Riemann 可积函数（8.8.B-5）](#问题-b216)
- [问题 B217：仅沿有理数趋零（8.8.B-6）](#问题-b217)
- [问题 B218：平均、小例外集与离散采样（8.8.B-7）](#问题-b218)
- [七题方法总结](#七题方法总结)

## 问题 B212

**原题号：** 习题 8.8.B 第 1 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 设 $\lambda_1,\lambda_2,\ldots,\lambda_m\in\mathbb R$ 两两不同，$\alpha_1,\alpha_2,\ldots,\alpha_m\in\mathbb C$，且 $\lim_{x\to+\infty}\sum_{k=1}^m\alpha_ke^{ix\lambda_k}=0$，试用多种方法证明：$\alpha_1=\alpha_2=\cdots=\alpha_m=0$。

**思路来源：** 不能从和趋零直接断言每项趋零。应当设法分离频率：积分平均会消掉非零频率；平方平均会留下非负的对角项；有限次平移则把问题变成一个可逆线性方程组。

**证明：** 记 $F(x)=\sum_{k=1}^m\alpha_ke^{i\lambda_kx}$，$M=\sum_k|\alpha_k|$，则 $|F(x)|\le M$。

**证法一：逐频率提取系数。** 固定 $j$。由于 $F(x)\to0$，对于每个 $\varepsilon>0$，可取 $R>0$ 使 $x\ge R$ 时 $|F(x)|<\varepsilon$。当 $T>R$ 时，

$$
\left|\frac1T\int_0^T F(x)e^{-i\lambda_jx}\,dx\right|
\le\frac{MR}{T}+\varepsilon.
$$

先令 $T\to\infty$，再令 $\varepsilon\downarrow0$，此平均趋零。另一方面，有限求和可以直接与积分交换，且

$$
\begin{aligned}
\frac1T\int_0^T F(x)e^{-i\lambda_jx}\,dx
&=\alpha_j+\sum_{k\ne j}\alpha_k
\frac{e^{i(\lambda_k-\lambda_j)T}-1}{i(\lambda_k-\lambda_j)T}\\
&\longrightarrow\alpha_j.
\end{aligned}
$$

分母中的频率差均非零，故 $\alpha_j=0$。对所有 $j$ 应用即得结论。

**证法二：平方平均。** 同样分割 $[0,T]$，由 $|F|^2\to0$ 且有界可得 $T^{-1}\int_0^T|F|^2\to0$。展开时须保留复共轭：

$$
\begin{aligned}
\frac1T\int_0^T|F(x)|^2\,dx
&=\sum_{k=1}^m|\alpha_k|^2
+\sum_{k\ne l}\alpha_k\overline{\alpha_l}
\frac{e^{i(\lambda_k-\lambda_l)T}-1}{i(\lambda_k-\lambda_l)T}\\
&\longrightarrow\sum_{k=1}^m|\alpha_k|^2.
\end{aligned}
$$

于是非负数之和为零，各系数均为零。

**证法三：有限平移与 Vandermonde 矩阵。** 当 $m=1$ 时，$|F(x)|=|\alpha_1|$，结论直接成立。以下设 $m\ge2$。令 $D=\max_{k\ne l}|\lambda_k-\lambda_l|$，取 $0<h<2\pi/D$。于是 $z_k=e^{ih\lambda_k}$ 两两不同。对 $r=0,1,\ldots,m-1$，

$$
F(x+rh)=\sum_{k=1}^m z_k^r\,\alpha_ke^{i\lambda_kx}.
$$

系数矩阵 $V=(z_k^r)_{0\le r\le m-1,\,1\le k\le m}$ 的行列式为 $\prod_{k<l}(z_l-z_k)\ne0$，且 $V^{-1}$ 与 $x$ 无关。因此每个 $\alpha_ke^{i\lambda_kx}$ 都是有限个 $F(x+rh)$ 的固定线性组合，也趋于零。取模即得 $|\alpha_k|=0$。证毕。

**方法总结：** 提取系数、平均能量、有限平移分别利用正交消振、正性和有限维可逆性。频率差不为零是前两法的关键，采样后的相位两两不同是第三法的关键；不能未经证明对极限等式求导。

[返回题号导航](#题号导航)

## 问题 B213

**原题号：** 习题 8.8.B 第 2 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 设 $A\in\mathbb R^{n\times n}$，证明：对任何 $x_0\in\mathbb R^n$，方程 $x'(t)=Ax(t)$ 满足初值 $x(0)=x_0$ 的解 $x(\cdot;x_0)$ 均满足 $\lim_{t\to+\infty}x(t;x_0)=0$ 的充要条件是 $A$ 的所有特征值具有负实部。

**思路来源：** 特征向量给出纯指数模式，足以检验必要性；充分性还必须处理不可对角化时出现的多项式因子。指数衰减能够压过任意固定次数的多项式增长。

**证明：** 解为 $x(t;x_0)=e^{tA}x_0$。这里矩阵指数的幂级数在每个有界 $t$ 区间上与其逐项导数级数均绝对一致收敛，故可逐项求导，验证初值与方程；线性常微分方程的唯一性保证这就是所求解。

先证必要性。由假设，$e^{tA}u\to0$ 对每个实向量 $u$ 成立。若 $v=u+iw\in\mathbb C^n$，则

$$
e^{tA}v=e^{tA}u+i e^{tA}w\longrightarrow0.
$$

任取复特征值 $\lambda$ 及其非零特征向量 $v$，由 $A^rv=\lambda^rv$ 得

$$
e^{tA}v=e^{\lambda t}v,\qquad
\|e^{tA}v\|=e^{t\operatorname{Re}\lambda}\|v\|.
$$

右端趋零只能在 $\operatorname{Re}\lambda<0$ 时发生。特别地，零实部也不允许。

再证充分性。在复数域取 Jordan 标准形 $A=SJS^{-1}$。对一个大小为 $d$ 的 Jordan 块 $J_\lambda=\lambda I+N$，$N^d=0$，有

$$
e^{tJ_\lambda}=e^{\lambda t}\sum_{r=0}^{d-1}\frac{t^rN^r}{r!}.
$$

若 $\operatorname{Re}\lambda<0$，则每一项的范数被常数乘以 $t^re^{t\operatorname{Re}\lambda}$ 控制，而此量趋零。因此每个块都趋于零；块的个数有限，故 $e^{tJ}\to0$，进而 $e^{tA}=Se^{tJ}S^{-1}\to0$。于是对每个 $x_0$，

$$
\|x(t;x_0)\|\le\|e^{tA}\|\,\|x_0\|\longrightarrow0.
$$

这还给出了关于有界初值集的一致收敛。证毕。

**方法总结：** 必要性中把“所有实初值”延伸到复初值，避免遗漏非实特征值；充分性中保留 Jordan 块的多项式因子，避免擅自假设可对角化。仅某个初值对应的解趋零不足以推出谱判据，例如 $A=\operatorname{diag}(-1,1)$、$x_0=(1,0)^{\mathsf T}$。

[返回题号导航](#题号导航)

## 问题 B214

**原题号：** 习题 8.8.B 第 3 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 对于 $k\ge2$，仿习题 8.8.A 第 9 题给出 $\varphi\in C_c^\infty(\mathbb R)$ 是某个 $\psi\in C_c^\infty(\mathbb R)$ 的 $k$ 阶导数的充要条件，并计算 $c_0,c_1,\ldots,c_k$ 使得

$$
\varphi-\sum_{j=0}^k\frac{(-1)^j}{j!}c_j\eta^{(j)}
$$

是某个 $\psi\in C_c^\infty(\mathbb R)$ 的 $k$ 阶导数，其中 $\eta\in C_c^\infty(\mathbb R)$ 满足 $\int_{\mathbb R}\eta(t)\,dt=1$。

**思路来源：** 原函数在支集左侧可取零，但右侧一般留下一个多项式尾部。要使原函数仍有紧支集，恰须令这个尾部的各系数消失；这些系数就是前 $k$ 个矩。

**证明：** 记 $M_r(\varphi)=\int_{\mathbb R}t^r\varphi(t)\,dt$。所求充要条件为

$$
M_0(\varphi)=M_1(\varphi)=\cdots=M_{k-1}(\varphi)=0.
$$

若 $\varphi=\psi^{(k)}$ 且 $\psi$ 光滑紧支，则连续分部积分 $k$ 次，边界项全为零。对 $0\le r<k$，多项式 $t^r$ 的 $k$ 阶导数为零，故 $M_r(\varphi)=0$。

反之，取 $[a,b]$ 包含 $\varphi$ 的支集，定义

$$
\psi(x)=\frac1{(k-1)!}\int_{-\infty}^x(x-t)^{k-1}\varphi(t)\,dt.
$$

逐次使用微积分基本定理可得

$$
\psi^{(r)}(x)=\frac1{(k-1-r)!}\int_{-\infty}^x(x-t)^{k-1-r}\varphi(t)\,dt
\quad(0\le r\le k-1),\qquad \psi^{(k)}=\varphi.
$$

所以 $\psi$ 光滑。$x<a$ 时它为零；$x>b$ 时，二项式展开给出

$$
\psi(x)=\frac1{(k-1)!}\sum_{r=0}^{k-1}
\binom{k-1}{r}x^{k-1-r}(-1)^rM_r(\varphi)=0.
$$

于是 $\operatorname{supp}\psi\subset[a,b]$，充分性得证。此证明对 $k=1$ 也成立。

现在求修正系数。记 $a_r=M_r(\varphi)$、$\mu_r=M_r(\eta)$，其中 $\mu_0=1$。分部积分给出

$$
M_r(\eta^{(j)})=
\begin{cases}
(-1)^j\dfrac{r!}{(r-j)!}\mu_{r-j},&j\le r,\\
0,&j>r.
\end{cases}
$$

故修正函数的第 $r$ 个矩为

$$
a_r-\sum_{j=0}^{\min(r,k)}\binom rj c_j\mu_{r-j}.
$$

令前 $k$ 个矩为零，得到对角系数均为一的三角方程组，因而

$$
\begin{aligned}
c_0&=a_0,\\
c_r&=a_r-\sum_{j=0}^{r-1}\binom rj c_j\mu_{r-j},
\qquad 1\le r\le k-1.
\end{aligned}
$$

这唯一确定 $c_0,\ldots,c_{k-1}$，而 **$c_k$ 可任取**，例如取 $c_k=0$。原因是 $\eta^{(k)}$ 本来就是紧支光滑函数 $\eta$ 的 $k$ 阶导数，它的前 $k$ 个矩全为零。题目要求“计算”并不意味着所有系数都由条件唯一决定。

若希望给出统一的规范选取，可将同一递推延伸到 $r=k$。这样多消去第 $k$ 个矩，所得修正函数甚至是某个紧支光滑函数的 $k+1$ 阶导数。相应的前几个系数是

$$
\begin{aligned}
c_0&=a_0,\\
c_1&=a_1-a_0\mu_1,\\
c_2&=a_2-2\mu_1a_1+(2\mu_1^2-\mu_2)a_0.
\end{aligned}
$$

这里第三式用于统一递推；当 $k=2$ 而仅要求二阶原函数时，$c_2$ 仍可任取。把修正函数代入上述积分公式，就得到所需 $\psi$ 的具体表达式。证毕。

**方法总结：** 紧支高阶原函数的障碍是有限个低阶矩；用固定截断函数及其导数构造三角矩阵，逐级消去这些障碍。不要多要求第 $k$ 个矩必须为零，也不要误称 $c_k$ 唯一。

[返回题号导航](#题号导航)

## 问题 B215

**原题号：** 习题 8.8.B 第 4 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 设 $f,g\in L^1_{\mathrm{loc}}(\mathbb R)$，$k\ge1$，且对任何 $\varphi\in C_c^\infty(\mathbb R)$，成立

$$
\int_{\mathbb R}f(x)\varphi^{(k)}(x)\,dx
=(-1)^k\int_{\mathbb R}g(x)\varphi(x)\,dx.
$$

试仿习题 8.8.A 第 4 题和第 10 题给出 $f$ 与 $g$ 的关系并给出证明。

**引用说明：** 所给题册的 8.8.A 第 4 题是周期平均命题，第 10 题是连续 $g$ 对应的二阶情形；这里保留原交叉引用。以下用第 9 题的矩消去思路及本批 B214 给出独立证明，不依赖未提供的正文结论。

**思路来源：** 先对 $g$ 积分 $k$ 次，减去这个明确的原函数，问题就变成：与所有测试函数的 $k$ 阶导数配对为零的局部可积函数是什么？B214 表明，这种配对只能记住前 $k$ 个矩，因此函数本身只能是次数至多 $k-1$ 的多项式。

**结论：** 原条件等价于存在常数 $b_0,\ldots,b_{k-1}$，使

$$
f(x)=\sum_{j=0}^{k-1}b_jx^j+
\frac1{(k-1)!}\int_0^x(x-t)^{k-1}g(t)\,dt
\quad\text{几乎处处}.
$$

当 $x<0$ 时，积分按有向积分解释。换言之，$f$ 几乎处处等于一个 $C^{k-1}$ 函数 $G$，其 $k-1$ 阶导数局部绝对连续，并且 $G^{(k)}=g$ 几乎处处；$k=1$ 时即 $G$ 局部绝对连续。若另有 $g$ 连续，则 $G\in C^k$，等式 $G^{(k)}=g$ 处处成立。

**证明：** 定义

$$
H(x)=\frac1{(k-1)!}\int_0^x(x-t)^{k-1}g(t)\,dt.
$$

局部可积函数的积分是局部绝对连续函数，其导数几乎处处等于被积函数。反复积分（在每个有界区间上由 Fubini 定理合并）得到上述 $H$，并且

$$
H^{(k-1)}(x)=\int_0^xg(t)\,dt,\qquad H^{(k)}=g\quad\text{几乎处处}.
$$

低阶导数连续。对紧支测试函数逐次分部积分，最后一次使用绝对连续函数的分部积分公式，即得 $\int H\varphi^{(k)}=(-1)^k\int g\varphi$。因此 $h=f-H$ 满足

$$
\int_{\mathbb R}h(x)\varphi^{(k)}(x)\,dx=0
\qquad(\varphi\in C_c^\infty(\mathbb R)).
$$

固定积分为一的 $\eta\in C_c^\infty(\mathbb R)$。对任意测试函数 $\theta$，按 B214 选择 $c_0,\ldots,c_{k-1}$，使

$$
\theta-\sum_{j=0}^{k-1}\frac{(-1)^j}{j!}c_j\eta^{(j)}=\psi^{(k)},
\qquad \psi\in C_c^\infty(\mathbb R).
$$

于是

$$
\int h\theta=\sum_{j=0}^{k-1}\frac{(-1)^j}{j!}c_j\int h\eta^{(j)}.
$$

B214 的递推表明 $c_j$ 是 $M_0(\theta),\ldots,M_j(\theta)$ 的固定线性组合。右端因此是前 $k$ 个矩的固定线性组合：存在与 $\theta$ 无关的 $b_0,\ldots,b_{k-1}$，使

$$
\int h\theta=\sum_{r=0}^{k-1}b_rM_r(\theta)
=\int\left(\sum_{r=0}^{k-1}b_rx^r\right)\theta(x)\,dx.
$$

下面补足从测试函数配对到几乎处处相等的环节。若 $u\in L^1_{\mathrm{loc}}$ 且 $\int u\theta=0$ 对所有测试函数成立，任取有限区间 $(a,b)$。取光滑截断 $0\le\theta_n\le1$，支集包含于 $[a,b]$，且在 $(a,b)$ 内逐点趋于一。它们可由端点处的光滑阶跃函数相乘构造。由支配收敛定理，$\int_a^b u=0$。所以局部绝对连续函数 $U(x)=\int_0^xu(t)\,dt$ 恒为零，从而 $u=U'=0$ 几乎处处。复值情形分别用于实部、虚部。

将此结论用于 $u=h-\sum_{r=0}^{k-1}b_rx^r$，得到所述表示式。反过来，若 $f$ 具有该表示，次数小于 $k$ 的多项式经过 $k$ 次分部积分贡献零，而 $H$ 的贡献为 $(-1)^k\int g\varphi$，故原积分恒等式成立。证毕。

**方法总结：** 先构造原函数，再识别零弱导数的核；整个证明只用矩消去、分部积分、局部绝对连续性与支配收敛。不能把“几乎处处等于光滑程度较高的代表”写成原来的逐点函数自动可导：改变一个点的函数值不会改变任何积分恒等式，却可能破坏连续性。仅有 $g\in L^1_{\mathrm{loc}}$ 时，也不能升级为 $G\in C^k$。

[返回题号导航](#题号导航)

## 问题 B216

**原题号：** 习题 8.8.B 第 5 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 推广定理 8.8.6：设 $f$ 在 $[0,1]^m$ 上 Riemann 可积，又对任何不全为零的整数 $n_1,n_2,\ldots,n_m$，$\sum_{j=1}^m n_js_j$ 均为无理数，则

$$
\lim_{n\to+\infty}\frac1n\sum_{k=1}^n
f(\{ks_1\},\{ks_2\},\ldots,\{ks_m\})
=\int_{[0,1]^n}f(x)\,dx.
$$

**原题校勘：** 题册脚注说明：“原书右端积分区域印为 $[0,1]^n$；按题干中 $f$ 的定义域，此处维数应为 $m$。”上式保留原印记号；以下证明该明确校勘后的 $m$ 维等式。此处没有增加假设或改变数学结论，仅纠正不一致的维数记号。$\{t\}=t-\lfloor t\rfloor$ 表示小数部分。为免与维数混淆，证明中用 $N$ 表示取平均的项数。

**思路来源：** 先证明每个非恒定整数频率的平均都消失，再逼近矩形的示性函数，最后用 Darboux 上下和夹逼一般 Riemann 可积函数。最后一环不可省略：一般 $f$ 不连续，也未必能在立方体边界拼接成连续周期函数。

**证明：** 令 $x_k=(\{ks_1\},\ldots,\{ks_m\})$。对 $q=(q_1,\ldots,q_m)\in\mathbb Z^m\setminus\{0\}$，记 $\vartheta=q\cdot s$。由条件，$z=e^{2\pi i\vartheta}\ne1$，故

$$
\begin{aligned}
\frac1N\sum_{k=1}^N e^{2\pi i q\cdot x_k}
&=\frac1N\sum_{k=1}^Nz^k
=\frac{z(1-z^N)}{N(1-z)},\\
\left|\frac1N\sum_{k=1}^N e^{2\pi i q\cdot x_k}\right|
&\le\frac2{N|1-z|}\longrightarrow0.
\end{aligned}
$$

频率 $q=0$ 时平均恒为一。这恰好等于相应指数函数在 $[0,1]^m$ 上的积分，因此结论对每个有限多元三角多项式成立。

下面只需推广到乘积形式的连续周期函数。设每个 $g_j$ 连续、以一为周期，且 $0\le g_j\le1$。由一维 Weierstrass 第二逼近定理，对给定 $\varepsilon>0$ 可取三角多项式 $P_j$，使 $\|P_j-g_j\|_\infty<\varepsilon$。利用乘积差的望远镜展开，

$$
\left\|\prod_{j=1}^mP_j-\prod_{j=1}^mg_j\right\|_\infty
\le m\varepsilon(1+\varepsilon)^{m-1}.
$$

$\prod_jP_j$ 是有限多元三角多项式。经验平均与单位立方体积分各自造成的误差均不超过上述一致误差，先令 $N\to\infty$，再令 $\varepsilon\downarrow0$，得到

$$
\frac1N\sum_{k=1}^N\prod_{j=1}^mg_j(\{ks_j\})
\longrightarrow\int_{[0,1]^m}\prod_{j=1}^mg_j(x_j)\,dx
=\prod_{j=1}^m\int_0^1g_j(t)\,dt.
$$

接着考虑半开矩形 $Q=\prod_{j=1}^m[a_j,b_j)\subset[0,1)^m$，各边长为正。在圆周 $\mathbb T=\mathbb R/\mathbb Z$ 上，对长度小于一的区间 $I_j=[a_j,b_j)$，记其闭弧为 $C_j$、开弧为 $J_j$。令 $d$ 为圆周距离，给定 $\delta>0$，定义

$$
\begin{aligned}
g_j^+(t)&=\max\{0,1-d(t,C_j)/\delta\},\\
g_j^-(t)&=\min\{1,d(t,\mathbb T\setminus J_j)/\delta\}.
\end{aligned}
$$

它们都是连续周期函数，且

$$
0\le g_j^-\le\mathbf1_{I_j}\le g_j^+\le1,\qquad
\int_0^1g_j^-\ge b_j-a_j-2\delta,\qquad
\int_0^1g_j^+\le b_j-a_j+2\delta.
$$

这两个积分估计来自端点两侧总长度至多 $2\delta$ 的过渡区域；在端点处，下函数取零、上函数取一，故不论半开区间如何分配端点，逐点夹逼均成立。若 $I_j=[0,1)$，直接取 $g_j^-=g_j^+=1$。

对各坐标相乘，便有 $\prod_jg_j^-\le\mathbf1_Q\le\prod_jg_j^+$。应用已证的乘积函数极限，得到

$$
\prod_j\int_0^1g_j^-
\le\liminf_{N\to\infty}\frac{\#\{1\le k\le N:x_k\in Q\}}N
\le\limsup_{N\to\infty}\frac{\#\{1\le k\le N:x_k\in Q\}}N
\le\prod_j\int_0^1g_j^+.
$$

令 $\delta\downarrow0$，两端都趋于 $|Q|=\prod_j(b_j-a_j)$，从而矩形出现的频率等于它的体积。

最后设 $f$ 为实值 Riemann 可积函数。任给 $\varepsilon>0$，存在有限矩形网格分割，使 Darboux 上下和满足 $U-L<\varepsilon$。把各小矩形改成互不相交的半开矩形 $Q_\nu$，覆盖 $[0,1)^m$；以其闭包上的上、下确界分别记为 $M_\nu,m_\nu$。所有采样点都在 $[0,1)^m$，所以逐点有

$$
\sum_\nu m_\nu\mathbf1_{Q_\nu}(x_k)
\le f(x_k)\le\sum_\nu M_\nu\mathbf1_{Q_\nu}(x_k).
$$

每个矩形的频率已知，且分割只有有限项，故

$$
L\le\liminf_{N\to\infty}\frac1N\sum_{k=1}^Nf(x_k)
\le\limsup_{N\to\infty}\frac1N\sum_{k=1}^Nf(x_k)\le U.
$$

同时 $L\le\int_{[0,1]^m}f\le U$，而 $U-L<\varepsilon$ 任意，所求极限即为该积分。复值函数分别处理实部与虚部。证毕。

**方法总结：** 指数频率检验、连续函数夹逼矩形、Darboux 和夹逼可积函数构成完整路线。逼近误差先关于采样项数一致控制，再取极限；频率 $q$ 每次固定，未宣称几何级数估计对全部整数频率一致。仅要求各个 $s_j$ 分别无理不够：若 $m=2$ 且 $s_1=s_2$ 为无理数，取 $f(x,y)=(x-y)^2$，所有采样值为零，立方体积分却为 $1/6$。

[返回题号导航](#题号导航)

## 问题 B217

**原题号：** 习题 8.8.B 第 6 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 证明：在第 1 题中，将条件 $\lim_{x\to+\infty}\sum_{k=1}^m\alpha_ke^{ix\lambda_k}=0$ 减弱为

$$
\lim_{\substack{x\to+\infty\\x\in\mathbb Q}}
\sum_{k=1}^m\alpha_ke^{ix\lambda_k}=0,
$$

结论仍然成立。

**思路来源：** “沿全部充分大的有理数趋零”与“沿某一有理数列趋零”不同。前者给出整个稠密尾集上的统一阈值，连续性可以把这个阈值传给全部实数。

**证明：** 仍记 $F(x)=\sum_{k=1}^m\alpha_ke^{i\lambda_kx}$，它在 $\mathbb R$ 上连续。给定 $\varepsilon>0$，由假设存在 $R$，使每个有理数 $q>R$ 均满足 $|F(q)|<\varepsilon/2$。

任取实数 $x>R$，由有理数稠密性可取 $q_l\in\mathbb Q\cap(R,\infty)$ 且 $q_l\to x$。由连续性，

$$
|F(x)|=\lim_{l\to\infty}|F(q_l)|\le\varepsilon/2<\varepsilon.
$$

这里 $R$ 在选择 $x$ 以前已经固定，因此确实得到对所有 $x>R$ 同时成立的估计，即 $F(x)\to0$。应用 B212 得全部系数为零。证毕。

**方法总结：** 稠密性负责把每个实数补进来，尾部统一阈值负责保留“趋于无穷”的极限量词。本题只需连续性，无须额外证明一致连续；若只沿某一有理数列趋零，则不能如此推论，例如 $F(x)=e^{2\pi ix}-1$ 在全部正整数处为零，却不恒为零。

[返回题号导航](#题号导航)

## 问题 B218

**原题号：** 习题 8.8.B 第 7 题（下册）。[原题 PDF 第 14 页（印刷第 12 页）](/files/problems/楼分析习题-v2.pdf#page=14)

**题目：** 试进一步减弱第 1 题或它的一些特例的条件。

**思路来源：** B212 的平方平均法实际只使用了平均能量趋零，并未使用每一点的尾部估计；有限平移法则提示，可以只观察离散采样，但必须避免不同频率在采样后无法区分。下面给出三个有完整证明的推广，并说明不能再随意删去的条件。

**解：** 保留实频率两两不同，记 $F(x)=\sum_{j=1}^m\alpha_je^{i\lambda_jx}$、$S=\sum_j|\alpha_j|^2$、$M=\sum_j|\alpha_j|$。

**推广一：任意移动长区间上的平均小量。** 对任意实函数 $a(T)$，只需存在 $T_l\to\infty$，使

$$
\frac1{T_l}\int_{a(T_l)}^{a(T_l)+T_l}|F(x)|^2\,dx\longrightarrow0,
$$

就有全部 $\alpha_j=0$。特别地，可将第 1 题的条件换成 $\liminf_{T\to\infty}T^{-1}\int_0^T|F|^2=0$。

事实上，对任何 $a\in\mathbb R$、$T>0$，展开平方并积分，

$$
\frac1T\int_a^{a+T}|F(x)|^2\,dx
=S+\sum_{j\ne r}\alpha_j\overline{\alpha_r}
 e^{i(\lambda_j-\lambda_r)a}
\frac{e^{i(\lambda_j-\lambda_r)T}-1}{i(\lambda_j-\lambda_r)T}.
$$

因此有关于起点 $a$ 一致的估计

$$
\left|\frac1T\int_a^{a+T}|F(x)|^2\,dx-S\right|
\le\frac CT,\qquad
C=\sum_{j\ne r}\frac{2|\alpha_j|\,|\alpha_r|}{|\lambda_j-\lambda_r|}.
$$

令 $T=T_l$ 即得 $S=0$。这里允许起点任意移动，甚至不趋于正无穷。也可用一次绝对值平均趋零代替平方平均，因为 $|F|^2\le M|F|$；一般地，任意固定 $p>0$ 的 $|F|^p$ 平均趋零都足够：当 $M>0$ 且 $0<p\le2$ 时用 $|F|^2\le M^{2-p}|F|^p$，当 $p>2$ 时在长度归一化为一的积分平均下用 Hölder 不等式。

**推广二：允许密度为零的例外点。** 只要对每个 $\varepsilon>0$ 都有

$$
\frac{\bigl|\{x\in[0,T]:|F(x)|>\varepsilon\}\bigr|}{T}
\longrightarrow0,
$$

也能推出全部系数为零。这里竖线表示 Lebesgue 测度。记上述集合为 $E_{T,\varepsilon}$，则

$$
\frac1T\int_0^T|F(x)|^2\,dx
\le\varepsilon^2+M^2\frac{|E_{T,\varepsilon}|}{T}.
$$

先令 $T\to\infty$，再令 $\varepsilon\downarrow0$，由推广一得结论。特别地，若存在可测集 $E\subset[0,\infty)$ 满足 $|E\cap[0,T]|/T\to1$，且 $F(x)\to0$ 当 $x\to\infty$、$x\in E$，那么每个 $E_{T,\varepsilon}$ 都包含于一个固定有界区间与 $[0,T]\setminus E$ 的并，故上述密度条件成立。注意这里是密度为一，不能仅凭集合无界便下结论。

**推广三：不混淆频率的等距采样。** 固定 $h>0$，若

$$
h(\lambda_j-\lambda_r)\notin2\pi\mathbb Z\quad(j\ne r),
$$

则只需 $F(nh)\to0$（$n\to\infty$）就能推出所有系数为零，甚至只需

$$
\liminf_{N\to\infty}\frac1N\sum_{n=1}^N|F(nh)|^2=0.
$$

令 $z_j=e^{ih\lambda_j}$，条件保证它们两两不同。有限几何和满足

$$
\frac1N\sum_{n=1}^N(z_j\overline{z_r})^n\longrightarrow0
\quad(j\ne r),
$$

于是

$$
\frac1N\sum_{n=1}^N|F(nh)|^2\longrightarrow S.
$$

下极限为零就迫使 $S=0$；若已知 $F(nh)\to0$，普通数列的 Cesàro 平均给出这一条件。对任意固定有限组不同频率，B212 的选择 $0<h<2\pi/\max_{j\ne r}|\lambda_j-\lambda_r|$ 保证不混淆频率；$m=1$ 时任意 $h>0$ 都可。

若删去这个条件，把相位相等的频率归为一类，则采样只能确定各类的系数和为零，不能逐个确定系数。确切地，设不同相位为 $w_1,\ldots,w_d$，$\beta_l=\sum_{j:z_j=w_l}\alpha_j$，则 $F(nh)=\sum_l\beta_lw_l^n$；以上证明仅推出 $\beta_l=0$。例如

$$
F(x)=e^{2\pi ix/h}-1
$$

在所有 $nh$ 处为零，却有两个非零系数。因而“沿任意一个趋于无穷的点列趋零”一般不够，哪怕该点列是等距的。单频特例 $m=1$ 则不同：$|F(x)|=|\alpha_1|$，只要沿任何一点列有函数值趋零，就足以推出 $\alpha_1=0$。

**方法总结：** 从证明实际使用的量出发减弱条件：把逐点尾部控制换成平均控制，把全体点换成密度为一的集合，或在明确的频率分离条件下换成离散采样。每个推广都保留精确量词与适用范围；用相位混淆反例划清“某个点列”与“足以识别系数的采样”的区别。

[返回题号导航](#题号导航)

## 七题方法总结

| 题号 | 主要方法 | 关键核查 |
| --- | --- | --- |
| B212 | 系数平均、平方平均、有限平移 | 复共轭、非零频率差、固定可逆矩阵；三种独立证明。 |
| B213 | 特征向量与 Jordan 块 | 所有实初值可复化；负实部压过多项式；覆盖零实部及不可对角化情形。 |
| B214 | 高阶积分与三角矩消去 | 恰为前 k 个矩消失；最高修正系数可任取；原函数两侧均紧支。 |
| B215 | 减去原函数、测试函数配对 | 只得几乎处处代表；最高低阶导数局部绝对连续；反向验证完整。 |
| B216 | 几何和、矩形夹逼、Darboux 和 | 先固定频率；一致逼近误差；边界不必周期匹配；维数校勘。 |
| B217 | 稠密尾集与连续性 | 极限阈值对全部有理数统一；不能换成单一有理数列。 |
| B218 | 移动区间能量、密度、离散平均 | 起点一致估计、密度量词与采样频率分离；含失效反例。 |

编号推进至 **B218**；两册累计 **215 道已作答、3 道暂跳过**，其中上册完成 175 题，下册完成 40 题。**8.8.B 七题全部完成**。下一题为下册 **8.9.B 第 1 题**，对应 **B219**，见[原题 PDF 第 15 页（印刷第 13 页）](/files/problems/楼分析习题-v2.pdf#page=15)。

**前后批次：**[上一批 B205—B211](/problems/aeb90646cd67124999a7cba3/) · [B 组章节目录](/problems/collections/lou-analysis/) · [第八章索引](/problems/collections/lou-analysis/chapters/8/) · [下册资料页](/problems/149ff60b32b01ff69feab8a4/)
