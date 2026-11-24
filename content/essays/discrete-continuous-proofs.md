---
title: "数学分析中的离散与连续：性质、联系与差异的完整证明"
description: "依照原知识框架的16节逐项展开，补全条件、证明与反例；涵盖差分与微分、求和与积分、极限交换、不等式、变换与动力系统，附同内容讲义PDF。"
attachment: "essays/discrete-continuous-proofs.pdf"
subject: "数学分析"
tags: [离散与连续, 差分, 求和与积分, 完整证明, 条件辨析]
created_at: "2026-11-25"
updated_at: "2026-11-25"
---

本讲义依据《数学分析_离散与连续_知识框架.pdf》14页、16节编写。原框架中的重复结论在首次出现处证明，后文明确指出对应位置；定义、记号和书目提示与需要证明的数学命题分开。所有无穷求和、极限交换及算子展开均注明意义和充分条件，错误或过强的说法给出修正及反例。

[下载完整讲义 PDF](/files/essays/discrete-continuous-proofs.pdf) · [文章栏目](/essays/)

实数的有序域运算与阿基米德性质作为基础；§3说明完备性各形式的等价性。涉及测度的部分以测度的可数可加性、可测函数与非负积分的定义为基础，所用收敛定理在§16证明。实值情形为默认；复值绝对收敛结论按实部、虚部分别处理。文中“单增”“单减”允许相等。

## 1 总览与记号：类比究竟意味着什么

### 1.1 三个基本对应

数列是定义在整数集上的函数，通常考察 $n\to\infty$；实变量函数还可以沿有限点的左侧、右侧或两侧趋近。定义

$$
\Delta a_n=a_{n+1}-a_n,\qquad Ea_n=a_{n+1},\qquad
S_n=\sum_{k=0}^{n-1}a_k.
$$

于是 $E=I+\Delta$，且 $\Delta S_n=a_n$。这些等式直接由定义相减得到。若 $\Delta A_n=a_n$，则逐项抵消给出

$$
\sum_{k=m}^{n-1}\Delta A_k=A_n-A_m. \qquad\text{(1.1)}
$$

连续情形的累积量为 $F(x)=\int_a^x f(t)\,dt$。当 $f$ 连续时，积分平均夹逼给出 $F'=f$，继而 $\int_a^bF'=F(b)-F(a)$，详见§5.1。所谓“对应”，首先指变化与累积互为逆运算，并不意味着任何连续公式都可原样改写为差分公式。

### 1.2 自然基与后续对应的位置

记下降阶乘幂 $x^{\underline{k}}=x(x-1)\cdots(x-k+1)$，$x^{\underline0}=1$，$\binom{x}{k}=x^{\underline k}/k!$；对 $k\ge1$ 另记 $x^{\underline{-k}}=1/[(x+1)\cdots(x+k)]$。普通幂写作 $x^k$，二者不可混用。记 $H_0=0$，$H_n=\sum_{k=1}^n1/k$。

§4证明 $\Delta n^{\underline k}=k n^{\underline{k-1}}$、$\Delta2^n=2^n$ 与 $\Delta H_n=1/(n+1)$；它们分别对应幂、指数与对数的求导公式。§5的Abel变换对应分部积分，§6的Stolz定理对应L'Hospital法则，§7的Newton展开对应Taylor展开，§9的Cauchy乘积对应卷积，§13的生成函数对应Laplace变换、Fourier级数对应Fourier变换、阶乘对应Gamma函数，§14的递推对应微分方程。每项对应的确切公式与限制均在相应节证明。

## 2 极限：数列与函数

### 2.1 定义与基本性质

$a_n\to A$ 指：对每个 $\varepsilon>0$，存在 $N$，使 $n\ge N$ 时 $|a_n-A|<\varepsilon$。$f(x)\to A$（$x\to x_0$）指：对每个 $\varepsilon>0$，存在 $\delta>0$，使定义域中 $0<|x-x_0|<\delta$ 时 $|f(x)-A|<\varepsilon$，其中 $x_0$ 必须是定义域的聚点。单侧情形限制 $x$ 的方向；$x\to+\infty$ 时把邻域换成 $x>M$。无穷极限把 $|f-A|<\varepsilon$ 换成 $f>K$、$f<-K$ 或 $|f|>K$。趋近方式与极限值的类型是两个维度，不能笼统说只有“六类”。

**命题2.1** 有限极限具有唯一性、最终有界性、保号性、保不等式性、四则运算及夹逼性质。收敛数列全体有界；函数一般仅在所讨论的邻域内有界。

**证明：** 若两个极限 $A\ne B$，分别令误差小于 $|A-B|/3$，三角不等式会给出 $|A-B|<2|A-B|/3$。取误差 $1$ 得最终 $|a_n|\le |A|+1$，把有限个前项并入界即得数列有界；函数远离趋近点的值不受控制。若 $A>0$，取误差 $A/2$ 得最终 $a_n>0$；负值同理。若最终 $a_n\le b_n$ 而极限 $A>B$，把二者误差均压到 $(A-B)/3$ 即矛盾。

加法由 $|(a_n+b_n)-(A+B)|\le|a_n-A|+|b_n-B|$ 得到。乘法用

$$
|a_nb_n-AB|\le |a_n|\,|b_n-B|+|B|\,|a_n-A|,
$$

结合最终有界性。若 $B\ne0$，最终 $|b_n|\ge|B|/2$，故 $|1/b_n-1/B|\le2|b_n-B|/|B|^2$；再用乘法得商法则。若 $a_n\le c_n\le b_n$ 且两端极限同为 $A$，则最终 $A-\varepsilon<c_n<A+\varepsilon$。以上估计把“最终”换成“足够小的去心邻域”即逐字证明函数版本。无穷极限不能作 $\infty-\infty$ 等未定义运算。

### 2.2 单调性、Cauchy准则与上下极限

**命题2.2** 单增有上界数列以其值集的上确界为极限；单减有下界同理。单调函数在区间端点的单侧极限存在于扩充实数中，有相应有界性时极限有限。

**证明：** 设 $s=\sup\{a_n\}$。按确界定义可取 $a_N>s-\varepsilon$，则 $n\ge N$ 时 $s-\varepsilon<a_n\le s$。若无上界，任意 $K$ 后最终有 $a_n>K$。对单增函数在右端点 $b$，用 $s=\sup_{x<b}f(x)$，选 $x_1<b$ 使 $f(x_1)>s-\varepsilon$；$x_1<x<b$ 即有同样夹逼。其他方向由取负或反向参数得到。

**命题2.3** 数列收敛当且仅当它是Cauchy列，即 $\forall\varepsilon>0\ \exists N\ \forall m,n\ge N$ 有 $|a_m-a_n|<\varepsilon$。函数的对应准则为：对任意 $\varepsilon>0$，足够小的同一去心邻域内任意两点的函数值差小于 $\varepsilon$。

**证明：** 必要性均由三角不等式。数列的充分性见§3.1。对函数，取定义域中 $x_n\to x_0$；函数Cauchy条件使 $f(x_n)$ 为Cauchy列，故趋于某 $A$。固定使函数值两两相差小于 $\varepsilon/2$ 的邻域，再取其中一个满足 $|f(x_n)-A|<\varepsilon/2$ 的点，与任意另一点比较即得 $|f(x)-A|<\varepsilon$。无穷远的证明只把邻域换成尾部。

设 $u_N=\sup_{n\ge N}a_n$、$l_N=\inf_{n\ge N}a_n$，允许无穷值。$u_N$ 单减、$l_N$ 单增，故定义 $\limsup a_n=\lim u_N$、$\liminf a_n=\lim l_N$。由 $l_N\le a_n\le u_N$（$n\ge N$）可知两者同为有限 $A$ 时 $a_n\to A$；反之由极限定义两者必同为 $A$。两者同为 $+\infty$ 或 $-\infty$ 时也得到相应无穷极限。函数版本对去心邻域取上下确界，证明完全相同。

### 2.3 子列、归结原则与连续性

**命题2.4** $a_n\to A$ 当且仅当每个子列趋于 $A$；只检验奇、偶两个子列也足够。函数极限 $f(x)\to A$ 当且仅当对每个定义域中的序列 $x_n\ne x_0$、$x_n\to x_0$ 都有 $f(x_n)\to A$。

**证明：** 子列下标趋于无穷，故继承任意尾部估计；反向可选整个数列本身。奇、偶子列分别超过各自阈值后误差均小于 $\varepsilon$，取较大阈值即可。函数极限的正向由定义代入。反向若不成立，存在 $\varepsilon_0>0$，对每个 $n$ 可选 $0<|x_n-x_0|<1/n$ 而 $|f(x_n)-A|\ge\varepsilon_0$，矛盾。其他趋近方向使用相应邻域序列。

把 $A$ 换成 $f(x_0)$ 并允许 $x_n=x_0$，即得连续性的序列刻画。若递推 $x_{n+1}=f(x_n)$ 已知收敛于 $\ell$，且 $f$ 在 $\ell$ 连续，则子列 $x_{n+1}$ 也趋于 $\ell$，所以 $\ell=f(\ell)$。这只给出必要条件，不能用“不动点方程有解”代替收敛证明。

$f(x)\to A$（$x\to\infty$）当然推出 $f(n)\to A$，反向不成立：$f(x)=\sin\pi x$ 在整数点等于零，而 $f(2n+1/2)=1$、$f(2n+3/2)=-1$。整数采样遗漏了整数间的行为。

### 2.4 重要极限与增长阶

取 $\log x=\int_1^xdt/t$，以其反函数定义 $e^x$。由 $1/(1+t)$ 在零点连续，$\log(1+x)/x\to1$，故 $(1+x)^{1/x}\to e$，特别 $(1+1/n)^n\to e$。由单位圆面积比较，对 $0<x<\pi/2$ 有 $\sin x<x<\tan x$，所以 $\cos x<\sin x/x<1$；偶性给出双侧极限 $\sin x/x\to1$，于是 $n\sin(1/n)\to1$。由 $\cos h-1=-2\sin^2(h/2)$ 得 $(\cos h-1)/h\to0$，再对三角加法公式取差商，得到 $(\sin x)'=\cos x$、$(\cos x)'=-\sin x$，从而后文的三角Taylor展开有据。指数函数作为对数的反函数，由§4.5的逆函数公式得 $(e^x)'=e^x$；定义 $x^p=e^{p\log x}$ 后，链式法则给出任意实 $p$ 的 $(x^p)'=px^{p-1}$。

对 $\alpha>0$，令 $t=\log x$。指数级数的正项估计 $e^{\alpha t}\ge(\alpha t)^2/2$ 给出 $\log x/x^\alpha\to0$。同样取整数 $k>\alpha$，$e^{x\log a}\ge(x\log a)^k/k!$，便得 $x^\alpha/a^x\to0$（$a>1$）。指数级数及其等于指数函数见§7.3，不依赖本段增长比较。

$\log x/x\to0$ 推出 $x^{1/x}\to1$，整数取样得 $n^{1/n}\to1$。固定 $a>1$，数列 $a^n/n!$ 的相邻比值为 $a/(n+1)$，最终小于 $1/2$，因而趋零；又

$$
0\le\frac{n!}{n^n}=\prod_{k=1}^n\frac{k}{n}
\le 2^{-\lfloor n/2\rfloor}\longrightarrow0.
$$

这证明 $\log n\ll n^\alpha\ll a^n\ll n!\ll n^n$；连续版本 $a^x\ll\Gamma(x+1)$ 由§13.7的实变量Stirling公式得到。记号 $u=O(v)$ 表示最终 $|u|\le C|v|$，$u=o(v)$ 表示 $u/v\to0$，$u\sim v$ 表示 $u/v\to1$。在乘积与商中可以代换等价量，但相减须保留误差：如 $x+x^2\sim x$，相减后 $x^2$ 并不等价于 $0$。

## 3 完备性与闭区间上的连续函数

### 3.1 完备性的等价形式

原表实际列出八种表述：确界原理、单调有界定理、闭区间套定理、Bolzano–Weierstrass定理、Cauchy完备性、有限覆盖定理、有界无限集的聚点定理、Dedekind分割原理。它们在阿基米德有序域上等价。

**证明：** 确界原理推出单调有界定理已在§2.2证明。若 $[a_n,b_n]$ 递缩且长度趋零，则 $a_n$ 单增有界、$b_n$ 单减有界，极限相同为 $c$，且每个 $a_n\le c\le b_n$，故交集为 $\{c\}$。

由闭区间套证明Bolzano–Weierstrass：把包含有界数列的闭区间二分，保留含无穷多个序列项的一半，反复进行；从第 $k$ 个区间选下标严格递增的 $x_{n_k}$。区间长度趋零且交于 $c$，故 $x_{n_k}\to c$。Cauchy列有界，因为尾部与某一固定项距离小于1，前部有限；取其收敛子列 $x_{n_k}\to c$，再以 $|x_n-c|\le|x_n-x_{n_k}|+|x_{n_k}-c|$ 得全列收敛。

由Cauchy完备性返回确界原理：对非空有上界集合 $A$，先取 $l_0\in A$ 与上界 $r_0$；若 $l_0$ 已为上界则它就是最大值。否则二分区间：中点若为上界就替换右端，否则替换左端。左右端点之差趋零，二者是Cauchy列并趋于同一个 $s$。所有右端为上界，故每个 $a\in A$ 满足 $a\le s$；若 $t<s$，充分后某左端大于 $t$ 且不是上界，故存在 $a\in A$ 大于 $t$。因此 $s=\sup A$。

闭区间的开覆盖若无有限子覆盖，二分后至少一半仍无有限子覆盖。重复得到闭区间套，其交点 $c$ 落入某个覆盖开集 $U$；足够小的整个区间已包含在 $U$，矛盾。反向，递缩非空闭区间若交集空，其补集组成首个区间的开覆盖；有限子覆盖使某个后继区间为空，矛盾。长度趋零再保证交点唯一。这证明有限覆盖形式的等价性。

从无限有界集合选互异点列，收敛子列的极限为其聚点。反向，一个有界数列若某值出现无限次便有常值子列；否则其值集无限，取聚点 $c$，在半径 $1/k$ 邻域中逐次选择更大的下标，即得趋于 $c$ 的子列。

Dedekind分割指 $\mathbb R=L\sqcup U$、两部非空且每个 $l\in L$ 小于每个 $u\in U$。令 $c=\sup L$，若 $c\in L$ 它就是 $L$ 最大值，若 $c\in U$ 它就是 $U$ 最小值。反向给定非空有上界集合 $A$，若无最大值，令 $U$ 为全体上界，$L$ 为非上界；分割点不能是 $L$ 最大值，因为对 $l\in L$ 可取 $a\in A$ 大于 $l$，再取 $l<t<a$，则 $t$ 仍非上界。因此分割点是最小上界。

### 3.2 有界性与最大最小值：两种证明

设 $f$ 在 $[a,b]$ 连续。若无界，选 $|f(x_n)|>n$，由§3.1取 $x_{n_k}\to c\in[a,b]$；连续性使 $f(x_{n_k})\to f(c)$，与无界矛盾。另一证明是：每点连续性给出邻域上 $|f(x)|<|f(c)|+1$，有限个这样的邻域覆盖区间，取有限个界的最大值。

令 $M=\sup f([a,b])$，选 $f(x_n)>M-1/n$。收敛子列与连续性给出 $f(c)=M$；对 $-f$ 同理得最小值。另一证明：若处处 $f<M$，则连续函数 $1/(M-f)$ 在闭区间有界，设界为 $K>0$，得 $f\le M-1/K$，违背 $M$ 是最小上界。

### 3.3 介值性：二分与确界

只需证 $f(a)<0<f(b)$ 时存在零点。二分保留两端异号的半区间；若中点值为零则完成，否则得到区间套，端点趋同一点 $c$。连续性使 $f(c)\le0$ 且 $f(c)\ge0$，所以为零。

确界证法令 $E=\{x\in[a,b]:f(x)<0\}$，$c=\sup E$。由端点连续性知 $a<c<b$。若 $f(c)<0$，则稍右仍负，违背上界性；若 $f(c)>0$，则整个小邻域均正，违背确界的可逼近性。一般介值定理把 $f$ 换成 $f-y$ 即得。

### 3.4 一致连续性：序列与有限覆盖

若不一致连续，存在 $\varepsilon_0>0$ 与 $x_n,y_n\in[a,b]$，使 $|x_n-y_n|<1/n$ 而 $|f(x_n)-f(y_n)|\ge\varepsilon_0$。取 $x_{n_k}\to c$，则 $y_{n_k}\to c$，连续性矛盾。

覆盖证明不必预先引用Lebesgue数引理：对每个 $c$ 取 $r_c>0$，使 $|x-c|<2r_c$ 时 $|f(x)-f(c)|<\varepsilon/2$。由有限覆盖取 $B(c_i,r_i)$ 覆盖区间，令 $\delta=\min r_i$。若 $|x-y|<\delta$，选 $|x-c_i|<r_i$，则 $|y-c_i|<2r_i$；二者分别与 $f(c_i)$ 比较，得 $|f(x)-f(y)|<\varepsilon$。

## 4 差分与微分

### 4.1 运算法则与高阶公式

令 $\nabla a_n=a_n-a_{n-1}$、$\Delta_hf(x)=f(x+h)-f(x)$。直接展开得到

$$
\begin{aligned}
\Delta(a_nb_n)&=a_{n+1}\Delta b_n+b_n\Delta a_n,\\
\Delta(a_n/b_n)&=\frac{b_n\Delta a_n-a_n\Delta b_n}{b_nb_{n+1}},\\
\Delta^ka_n&=\sum_{j=0}^k(-1)^{k-j}\binom{k}{j}a_{n+j}.
\end{aligned}\qquad\text{(4.1)}
$$

商公式要求相邻分母均非零；高阶公式是 $(E-I)^k$ 的二项展开。对乘积反复应用第一式，并用 $E\Delta=\Delta E$ 及Pascal恒等式，归纳得

$$
\Delta^k(u_nv_n)=\sum_{j=0}^k\binom{k}{j}(\Delta^ju_n)(\Delta^{k-j}v_{n+j}).\qquad\text{(4.2)}
$$

具体地，对第 $j$ 项作差时分别把第一因子的差分阶数加一并把第二因子向前移一格，或把第二因子的差分阶数加一；同类项系数相加为 $\binom{k+1}{j}$，即完成归纳。

导数是差商极限。把(4.1)的步长版本除以 $h$ 并取极限，使用可导蕴含连续（$f(x+h)-f(x)=h[(f(x+h)-f(x))/h]\to0$），得乘法与商法则。连续Leibniz公式由普通乘法法则和同一Pascal归纳得到

$$
(uv)^{(k)}=\sum_{j=0}^k\binom{k}{j}u^{(j)}v^{(k-j)}.
$$

### 4.2 下降阶乘、负阶乘与Stirling数

提取公共因子得到

$$
\Delta n^{\underline k}
=[(n+1)-(n-k+1)]n^{\underline{k-1}}
=k n^{\underline{k-1}}.
$$

对 $k\ge1$ 通分得 $\Delta n^{\underline{-k}}=-k n^{\underline{-k-1}}$，要求各分母有定义。这与 $(x^m)'=mx^{m-1}$ 类似，后者对正整数由乘积法则、对负整数由商法则证明。

多项式 $1,n^{\underline1},\ldots,n^{\underline m}$ 的次数依次为 $0,1,\ldots,m$ 且首项系数为1，逐次消去最高项可唯一表示任意次数不超过 $m$ 的多项式。特别

$$
n^m=\sum_{k=0}^m S(m,k)n^{\underline k}.
$$

用 $n\,n^{\underline k}=n^{\underline{k+1}}+k n^{\underline k}$ 比较系数，得 $S(m+1,k)=S(m,k-1)+kS(m,k)$，$S(0,0)=1$。这正是第二类Stirling数递推：把新元素独立成一组或放入已有 $k$ 组之一；因而系数具有所称的组合意义。

指数公式 $\Delta c^n=(c-1)c^n$ 与调和数公式 $\Delta H_n=1/(n+1)$ 直接相减即可。连续指数导数由 $e^{\lambda h}=1+\lambda h+o(h)$ 得到；对数导数由积分基本定理得到。

### 4.3 单调性与凸性

$\Delta a_n\ge0$ 当且仅当数列单增，因为相邻差非负可望远镜相加。可导函数在区间上 $f'\ge0$ 当且仅当单增：充分性由§6的Lagrange定理，必要性由左右差商均非负。

$\Delta^2a_n\ge0$ 当且仅当增量 $d_n=\Delta a_n$ 单增。于是任意 $i<j<k$，左段增量的平均不超过右段增量的平均，即

$$
\frac{a_j-a_i}{j-i}\le\frac{a_k-a_j}{k-j}.\qquad\text{(4.3)}
$$

反取 $j=i+1,k=i+2$ 即回到 $\Delta^2a_i\ge0$。固定 $i$，不断加入不小于旧平均的新增量，得 $(a_n-a_i)/(n-i)$ 随 $n>i$ 单增；若这一性质对每个 $i$ 都成立，取 $n=i+1,i+2$ 又得凸性。只对某一个固定起点成立不足以推出全部二阶差分非负。

函数凸性的割线形式为 $[f(v)-f(u)]/(v-u)\le[f(w)-f(v)]/(w-v)$（$u<v<w$）；整理即通常的弦上方不等式 $f(v)\le[(w-v)f(u)+(v-u)f(w)]/(w-u)$。若可导，令相邻端点趋同，得 $f'(u)\le[f(v)-f(u)]/(v-u)\le f'(v)$，所以 $f'$ 单增；反向用中值定理比较两段割线。若二次可导，再用导数判单调即得与 $f''\ge0$ 等价。

### 4.4 差分中值与算子关系的有效范围

若 $f\in C^k$，反复用积分基本定理得

$$
\Delta_h^kf(x)=\int_0^h\!\cdots\!\int_0^h
f^{(k)}(x+t_1+\cdots+t_k)\,dt_1\cdots dt_k.\qquad\text{(4.4)}
$$

证明从 $k=1$ 的基本定理出发，在 $x$ 上再作一次差，内层差用基本定理表示，依次归纳。令 $t_j=hs_j$，连续性给出 $h^{-k}\Delta_h^kf(x)\to f^{(k)}(x)$。$h>0$ 时积分平均介于导数的最小最大值之间，介值定理给出 $\Delta_h^kf(x)=h^kf^{(k)}(\xi)$。可取 $\xi\in(x,x+kh)$：若平均等于极端值，连续性迫使导数在内部恒等于该值；否则用内部介值性。负 $h$ 改用连接两端的区间。

在多项式空间上 $D=d/dx$ 降低次数，故有限Taylor公式严格给出 $E_h=e^{hD}$、$\Delta_h=e^{hD}-I$，且

$$
hD=\log(I+\Delta_h)
=\Delta_h-\tfrac12\Delta_h^2+\tfrac13\Delta_h^3-\cdots
$$

在每个多项式上均自动截断。这是幂级数形式恒等式作用于幂零算子；对一般光滑函数，不能未经收敛证明便把这些无穷算子级数当成等式，§7.3的平坦函数已经给出反例。

### 4.5 链式法则、反函数与极值的差异

取 $f(t)=t^2$，则 $\Delta f(a_n)=2a_n\Delta a_n+(\Delta a_n)^2$，通常不等于 $f'(a_n)\Delta a_n$。若 $f$ 在连接 $a_n,a_{n+1}$ 的区间连续且内部可导，Lagrange定理只能保证某 $\xi_n$ 处的等式 $\Delta f(a_n)=f'(\xi_n)\Delta a_n$。

连续链式法则可写 $f(y+h)-f(y)=f'(y)h+h\eta(h)$，$\eta(h)\to0$，代入 $h=g(x+t)-g(x)$ 即得 $(f\circ g)'=f'(g)g'$。若 $f$ 连续严格单调且 $f'(x)\ne0$，逆函数连续，其差商是原函数差商的倒数，故 $(f^{-1})'(f(x))=1/f'(x)$。离散采样后的逆映射定义域通常不等距；只能说交换两点所得的割线斜率互为倒数，不能据此写同一步长的反差分法则。

可导函数内点极小值的右差商非负、左差商非正，二者极限相同，故导数为0（Fermat定理）。数列在内点 $n$ 极小时仅有 $\Delta a_{n-1}\le0\le\Delta a_n$；例如 $a_n=|n|$ 在0极小而 $\Delta a_0=1$。极大值符号反向。所谓“变号”应允许相邻差为零，不能断言差分本身为零。

## 5 求和与积分的运算法则

### 5.1 基本定理与基本性质

若 $\Delta A_n=\Delta B_n$，则 $A_{n+1}-B_{n+1}=A_n-B_n$，归纳知两者相差常数。连续情形若 $F'=G'$，中值定理给出 $F-G$ 在每个区间上为常数。离散基本定理已见(1.1)。

若 $f$ 连续，$F(x)=\int_a^xf$，则

$$
\left|\frac{F(x+h)-F(x)}h-f(x)\right|
\le\sup_{t\text{ 在 }x\text{ 与 }x+h\text{ 之间}}|f(t)-f(x)|\to0.
$$

因此 $F'=f$；若 $G'=f$，上段给出 $G-F$ 为常数，故 $\int_a^bf=G(b)-G(a)$。这里假设连续性保证Riemann可积。更一般地，若 $G'$ 存在且Riemann可积，逐段中值定理将 $G(b)-G(a)$ 写成 $G'$ 的Riemann和，网格趋零同样得Newton–Leibniz公式。

有限求和的线性、区间可加性、保序性和 $|\sum a_k|\le\sum|a_k|$ 分别由分配律、指标分解、非负数之和非负和三角不等式得到。对Riemann和逐一应用这些有限性质再取极限，即得积分的四项对应性质。无穷和与反常积分只在有关极限存在时继承线性。

### 5.2 幂、指数与重复累积

由§4.2望远镜求和，对于整数 $m\ge0$，

$$
\sum_{k=0}^{n-1}k^{\underline m}=\frac{n^{\underline{m+1}}}{m+1},
\qquad \sum_{k=0}^{n-1}k^{\underline{-1}}=H_n.
$$

一般整数 $m\ne-1$ 的正确式是 $[n^{\underline{m+1}}-0^{\underline{m+1}}]/(m+1)$；当 $m<-1$ 时不能丢掉下端点项。普通幂 $k^m$ 的和应先用Stirling换基或§8.3，而不能直接套下降阶乘公式。连续幂积分在 $m>-1$ 时为 $\int_0^xt^m dt=x^{m+1}/(m+1)$（$x>0$）；$m\le-1$ 时下端有瑕点，不能写成有限值。对不跨零的正区间，$m\ne-1$ 时反导函数为 $x^{m+1}/(m+1)$，$m=-1$ 时为 $\log x$。

$\sum_{k=0}^{n-1}c^k=(c^n-1)/(c-1)$（$c\ne1$）由乘以 $c-1$ 抵消得到；$c=1$ 时为 $n$。连续对应为 $\int_0^xe^{\lambda t}dt=(e^{\lambda x}-1)/\lambda$（$\lambda\ne0$），$\lambda=0$ 时为 $x$。

令 $(Sa)_n=\sum_{j=0}^{n-1}a_j$。则

$$
(S^pa)_n=\sum_{j=0}^{n-p}\binom{n-1-j}{p-1}a_j\quad(n\ge p),\qquad\text{(5.1)}
$$

$n<p$ 时为零。证明由 $p=1$ 开始，对右式再求和并交换有限和，用 $\sum_{r=p-1}^{N}\binom r{p-1}=\binom{N+1}p$；该恒等式本身由Pascal公式望远镜相加得到。若把上界写到 $n-1$，必须约定非负整数 $r<s$ 时 $\binom rs=0$。

连续的 $p$ 重变上限积分等于

$$
\frac1{(p-1)!}\int_a^x(x-t)^{p-1}f(t)\,dt.\qquad\text{(5.2)}
$$

对 $p$ 归纳：再积分时把 $a\le t\le u\le x$ 上的积分交换次序，内层 $\int_t^x(u-t)^{p-1}du=(x-t)^p/p$，得到下一阶。交换在紧三角形上连续函数可由Riemann和证明，见§11.2。

### 5.3 分部求和、Abel变换与Bonnet定理

将(4.1)求和即得

$$
\sum_{k=m}^{n-1}u_k\Delta v_k
=u_nv_n-u_mv_m-\sum_{k=m}^{n-1}v_{k+1}\Delta u_k.\qquad\text{(5.3)}
$$

令 $A_k=\sum_{j=1}^ka_j$、$A_0=0$，把 $a_k=A_k-A_{k-1}$ 代入，得到

$$
\sum_{k=1}^na_kb_k=A_nb_n+\sum_{k=1}^{n-1}A_k(b_k-b_{k+1}).\qquad\text{(5.4)}
$$

若 $b_1\ge\cdots\ge b_n\ge0$、$m\le A_k\le M$，右侧是 $A_1,\ldots,A_n$ 的非负加权和，权重总和为 $b_1$，故介于 $b_1m,b_1M$ 之间。这就是Abel引理。

连续分部积分由 $(uv)'=u'v+uv'$ 积分得到。记 $F(x)=\int_a^xf$，则

$$
\int_a^bfg=F(b)g(b)-\int_a^bFg'.\qquad\text{(5.5)}
$$

若 $f$ 连续、$g\ge0$ 单减，Bonnet定理为 $\int_a^bfg=g(a)F(\xi)$，某 $\xi\in[a,b]$。先对单减阶梯函数证明：积分按区间分块后，与(5.4)相同，它是若干 $F(t_j)$ 的非负加权和，权重和为 $g(a)$，所以介于 $g(a)\min F$ 与 $g(a)\max F$ 之间。一般单调 $g$ 有界且Riemann可积，可取网格阶梯逼近，$\int|g-g_P|\le\|P\|[g(a)-g(b)]\to0$；因 $f$ 有界，积分也收敛。最后由 $F$ 的连续性与介值定理取到所需值。$g(a)=0$ 时 $g\equiv0$，结论也成立。

### 5.4 加权中值、换元与Stieltjes表示

若 $w_k\ge0$ 且 $\sum w_k>0$，逐项用 $\min a\le a_k\le\max a$ 乘权重再相加，即得加权平均夹逼。若 $f$ 连续、$g$ 可积且不变号，则由保序性有

$$
\min f\le\frac{\int_a^bfg}{\int_a^bg}\le\max f
$$

（分母非零时），再用介值定理写成 $\int fg=f(\xi)\int g$。若 $\int g=0$，不变号性使 $\int|g|=0$，于是 $|\int fg|\le\|f\|_\infty\int|g|=0$。

有限指标双射只改变枚举，不改变每项出现次数，故求和不变。非单射变换也可用，但须计入原像个数，例如 $\sum_{m,n\ge0}f(m+n)=\sum_{k\ge0}(k+1)f(k)$ 在非负或绝对收敛时成立。因而原文“只能用双射”应理解为“不带重数修正的重排需要双射”。

若 $f$ 连续、$\phi\in C^1[\alpha,\beta]$，取 $F'=f$，链式法则与基本定理给出

$$
\int_\alpha^\beta f(\phi(t))\phi'(t)dt
=F(\phi(\beta))-F(\phi(\alpha)).\qquad\text{(5.6)}
$$

无须 $\phi$ 单调，方向已由端点与导数计入；若用于非负测度换元或分支合并，则须使用绝对Jacobi因子并处理重数。

Riemann–Stieltjes和为 $\sum f(\xi_i)[\alpha(x_i)-\alpha(x_{i-1})]$。对连续 $f$ 与有界变差 $\alpha$，细分两和之差至多为 $\omega_f(\delta)\operatorname{Var}(\alpha)$，故积分存在。若 $\alpha$ 在有限个 $t_j\in(a,b]$ 有跳跃 $c_j$ 且其余恒定，每个跳跃所在小区间的贡献趋于 $c_jf(t_j)$，得到 $\int_{(a,b]}f\,d\alpha=\sum c_jf(t_j)$。若 $\alpha\in C^1$，中值定理使增量等于 $\alpha'(\eta_i)\Delta x_i$，一致连续性允许把 $\eta_i$ 换成 $\xi_i$，于是 $\int f\,d\alpha=\int f\alpha' dx$。单有“处处可微”不自动保证所有换写合法；这里的 $C^1$ 条件明确保证。

令 $A(t)=\sum_{1\le n\le t}a_n$，逐区间用分部积分或直接望远镜可得

$$
\sum_{1\le n\le x}a_nf(n)
=A(x)f(x)-\int_1^xA(t)f'(t)dt\quad(x\ge1,\ f\in C^1).\qquad\text{(5.7)}
$$

例如在 $[j,j+1)$ 上 $A=A_j$，积分为 $A_j[f(j+1)-f(j)]$，相加恰为(5.4)的连续写法；上端不足一个单位区间的部分也相同抵消。

## 6 中值定理、Stolz定理与L'Hospital法则

### 6.1 离散中值与连续中值

若 $a_m=a_n$，则 $\sum_{k=m}^{n-1}\Delta a_k=0$，故增量要么全为零，要么既有正项又有负项。增量平均介于其最小最大值之间，因此

$$
\min_{m\le k<n}\Delta a_k\le\frac{a_n-a_m}{n-m}\le\max_{m\le k<n}\Delta a_k.
$$

若 $b_k>0$，$\sum a_k/\sum b_k$ 是 $a_k/b_k$ 以 $b_k$ 为权的平均，故有中项不等式。它不保证等于其中某一项：增量 $0,2$ 的平均为1，而1未出现。

Rolle定理：$f$ 在 $[a,b]$ 连续、内部可导且 $f(a)=f(b)$。若恒定则任意内点适用；否则最大值或最小值至少一个在内部取得，由Fermat定理其导数为0。对 $f(x)-f(a)-[f(b)-f(a)](x-a)/(b-a)$ 应用Rolle，得Lagrange定理。对

$$
H(x)=[f(b)-f(a)](g(x)-g(a))-[g(b)-g(a)](f(x)-f(a))
$$

应用Rolle，得Cauchy中值等式。当 $g'$ 处处非零时，Rolle保证 $g(b)\ne g(a)$，故可写成比值形式。

### 6.2 Stolz定理及上下极限形式

设 $b_n$ 严格递增趋于 $+\infty$。若 $\Delta a_n/\Delta b_n\to L\in\mathbb R$，则 $a_n/b_n\to L$。

**证明：** 给定 $\varepsilon>0$，从 $N$ 起有 $(L-\varepsilon)\Delta b_k\le\Delta a_k\le(L+\varepsilon)\Delta b_k$。相加得

$$
(L-\varepsilon)(b_n-b_N)\le a_n-a_N
\le(L+\varepsilon)(b_n-b_N).
$$

除以最终为正的 $b_n$，令 $n\to\infty$ 再令 $\varepsilon\downarrow0$。若 $L=+\infty$，把 $L-\varepsilon$ 换成任意 $M$，得下极限至少为任意 $M$；负无穷同理。若仅已知增量比的上下极限，分别取严格小于下极限和严格大于上极限的界，再令界趋近，即得

$$
\liminf\frac{\Delta a_n}{\Delta b_n}
\le\liminf\frac{a_n}{b_n}
\le\limsup\frac{a_n}{b_n}
\le\limsup\frac{\Delta a_n}{\Delta b_n}.\qquad\text{(6.1)}
$$

零比零型设 $a_n\to0$、$b_n\downarrow0$ 严格下降，因此 $b_n>0$。对 $k\ge N$ 将 $(a_k-a_{k+1})/(b_k-b_{k+1})$ 夹在 $L\pm\varepsilon$ 间，从 $n$ 累加到 $m$，令 $m\to\infty$，得到 $(L-\varepsilon)b_n\le a_n\le(L+\varepsilon)b_n$。无穷值及上下极限形式同样成立。

### 6.3 L'Hospital法则及不可逆性

设 $f,g$ 在某单侧去心区间可导，$g'\ne0$，且 $f'/g'\to L$。若 $f,g\to0$ 或 $|g|\to\infty$，则 $f/g\to L$，这里 $L$ 可为扩充实数。

**证明：** 零比零型对邻近端点的两点 $x,t$ 应用Cauchy中值定理，将 $[f(x)-f(t)]/[g(x)-g(t)]$ 夹在导数比的尾部上下界间，令 $t$ 趋端点便得到 $f(x)/g(x)$ 的夹逼。无穷型固定一个充分靠近端点的 $t$，对更靠近端点的 $x$ 作同一估计；因 $|g(x)|\to\infty$，常数 $f(t),g(t)$ 除以 $g(x)$ 后消失。$g'$ 不为零且具有Darboux性质，所以符号固定；也可直接由Rolle知 $g$ 严格单调，因此商的分母不为零。Darboux性质的简证是：若两端导数分别小于、大于 $c$，则 $f(x)-cx$ 在两端均不可能取得最小值，故内部极小点导数为0。反向符号用最大值。无限端点情形仍使用两个有限点，证明相同。用任意上下界代替 $L\pm\varepsilon$ 还得到(6.1)的连续版本。

逆命题均不成立。取 $a_n=n+(-1)^n$、$b_n=n$，则商趋1而差分比在 $-1,3$ 之间交替。取 $f(x)=x+\sin x$、$g(x)=x$，商趋1而导数比 $1+\cos x$ 无极限。

### 6.4 平均定理、Toeplitz与核平均

若 $a_n\to A$，写 $\sum_{k=1}^n(a_k-A)$ 为有限前部加尾部，除以 $n$；前部趋零，尾部绝对值至多 $\varepsilon$。因此算术平均趋于 $A$。若 $f$ 局部可积且 $f(x)\to A$，将 $\int_0^x(f-A)$ 在固定 $T$ 处分开并除以 $x$，证明完全相同。

若 $a_n>0$ 且 $a_n\to A>0$，对 $\log a_n$ 用算术平均定理再指数化，得几何平均趋于 $A$。$A=0$ 时，给定 $\varepsilon>0$，尾部 $a_n\le\varepsilon$，故 $\prod_{k=1}^na_k\le C\varepsilon^{n-N}$，取 $n$ 次方根得上极限不超过 $\varepsilon$。$A=\infty$ 类似。若 $a_{n+1}/a_n\to A$，用 $a_n=a_1\prod_{k=1}^{n-1}(a_{k+1}/a_k)$ 即得 $a_n^{1/n}\to A$。积分几何平均同理，但须假定 $\log f$ 在每个有限区间可积。

Toeplitz定理：若 $t_{nk}\to0$（每个固定 $k$）、$\sum_kt_{nk}\to1$、$\sup_n\sum_k|t_{nk}|=C<\infty$，则对收敛列 $a_k\to A$ 有 $\sum_kt_{nk}a_k\to A$。证明将误差写为 $\sum_{k<K}t_{nk}(a_k-A)+\sum_{k\ge K}t_{nk}(a_k-A)+A(\sum t_{nk}-1)$。三部分依次由有限个系数趋零、尾部上界 $C\varepsilon$、行和趋1控制；每一行的和绝对收敛是因为收敛列有界。

核版本设 $K_x\ge0$，$\int_0^\infty K_x\to1$，对每个 $T$ 有 $\int_0^TK_x\to0$。若 $f$ 有界且趋于 $A$，将 $\int K_x(f-A)$ 在 $T$ 处分开；前部至多 $2\|f\|_\infty\int_0^TK_x$（可把常数改为 $\|f-A\|_\infty$），后部至多 $\varepsilon\int_T^\infty K_x$，所以趋零。

### 6.5 三个渐近应用

$p>-1$ 时令 $a_n=\sum_{k=1}^nk^p$、$b_n=n^{p+1}$。中值定理给出 $b_{n+1}-b_n=(p+1)\xi_n^p$，$n<\xi_n<n+1$，故差分比趋 $1/(p+1)$，Stolz得到 $\sum_{k=1}^nk^p/n^{p+1}\to1/(p+1)$。连续对应由幂积分直接计算。

若 $x_{n+1}=\sin x_n$、$0<x_1<\pi$，第一次之后 $0<x_n\le1$，且严格递减。极限满足 $\ell=\sin\ell$，而 $\sin t<t$（$t>0$），故 $\ell=0$。由Taylor公式

$$
\frac1{x_{n+1}^2}-\frac1{x_n^2}
=\frac{x_n^2-\sin^2x_n}{x_n^2\sin^2x_n}\to\frac13.
$$

用Stolz得 $1/(nx_n^2)\to1/3$，故 $\sqrt n\,x_n\to\sqrt3$。若 $x_{n+1}=\log(1+x_n)$、$x_1>0$，同理单减趋0，且 $1/x_{n+1}-1/x_n\to1/2$，所以 $nx_n\to2$。

## 7 Newton公式与Taylor公式

### 7.1 精确离散展开与余项

由 $E=I+\Delta$，对整数 $n\ge0$ 有

$$
a_{m+n}=\sum_{k=0}^n\binom nk\Delta^ka_m.\qquad\text{(7.1)}
$$

此式对任意数列成立，因为只进行了有限次二项展开。对整数 $0\le p<n$，截断的正确求和余项为

$$
a_n=\sum_{k=0}^p\binom nk\Delta^ka_0
+\sum_{j=0}^{n-p-1}\binom{n-1-j}{p}\Delta^{p+1}a_j.\qquad\text{(7.2)}
$$

**证明：** $p=0$ 是望远镜求和。假定对 $\Delta a$ 已有阶数 $p-1$ 的公式，将其从0累加到 $n-1$，逐个有限和换序，用§5.2的二项求和恒等式，即得(7.2)。也可把右边减左边记为 $r_n$：它们前 $p+1$ 个初值一致，且 $(p+1)$ 阶差分一致，依递推唯一性便相等。余项的权重非负，总和为 $\binom n{p+1}$，所以它等于 $\theta\binom n{p+1}$，其中 $\theta$ 介于实际求和范围内 $\Delta^{p+1}a_j$ 的最小最大值之间；无需某个差分值恰等于 $\theta$。

由(7.1)和(4.1)得到二项式反演：$a_n=\sum_{k=0}^n\binom nk b_k$ 当且仅当 $b_n=\sum_{k=0}^n(-1)^{n-k}\binom nk a_k$。直接验证内层系数为 $\binom nj\sum_{r=0}^{n-j}(-1)^{n-j-r}\binom{n-j}r$，除 $j=n$ 外均为零。

$\Delta^{p+1}a\equiv0$ 当且仅当 $a_n$ 是次数**至多** $p$ 的多项式在整数点的限制，由(7.1)截断及§4.2降次可双向证明；恰为 $p$ 次还须 $\Delta^pa\not\equiv0$。连续情形同样应写“至多”，见下一段。

### 7.2 Taylor余项及插值桥梁

若 $f\in C^{p+1}$，反复积分基本定理或分部积分得到

$$
f(a+x)=\sum_{k=0}^p\frac{f^{(k)}(a)}{k!}x^k
+\frac1{p!}\int_0^x(x-t)^pf^{(p+1)}(a+t)dt.\qquad\text{(7.3)}
$$

证明对余项积分分部：将 $f^{(p+1)}dt$ 积成 $f^{(p)}$，得到负的 $p$ 阶首项加前一阶余项；迭代直至 $\int f'=f(a+x)-f(a)$。积分权重在 $0<x$ 时非负，故余项为 $f^{(p+1)}(a+\theta x)x^{p+1}/(p+1)!$，$0<\theta<1$；负 $x$ 作变量反向。

Cauchy余项也可严格推出。固定终点 $b=a+x$，记 $Q(t)=\sum_{k=0}^pf^{(k)}(t)(b-t)^k/k!$，逐项求导抵消得 $Q'(t)=f^{(p+1)}(t)(b-t)^p/p!$；对 $Q$ 用Lagrange定理，得到 $R_p=f^{(p+1)}(\xi)(b-\xi)^p(b-a)/p!$。若仅用 $f\in C^p$，先写 $p-1$ 阶积分余项，把 $f^{(p)}(a+t)$ 拆成 $f^{(p)}(a)+o(1)$，即得Peano余项 $o(x^p)$。

若 $f^{(p+1)}\equiv0$，(7.3)说明 $f$ 是至多 $p$ 次多项式；反向逐次求导即可。展开系数唯一：若两个幂级数在零点附近相等，逐次在零点求导就得到 $c_k=f^{(k)}(0)/k!$，逐项求导的许可见§10。

对节点 $x_j=x_0+jh$，Newton插值多项式为 $P_n(x_0+th)=\sum_{k=0}^n\binom tk\Delta_h^kf(x_0)$，因为在每个整数 $t=j\le n$ 由(7.1)与原函数吻合。设 $x$ 不是节点，取 $c=[f(x)-P_n(x)]/\prod_{j=0}^n(x-x_j)$，函数 $f-P_n-c\prod(x-x_j)$ 有 $n+2$ 个零点。反复Rolle得某 $\xi$ 处其 $(n+1)$ 阶导数为零，故

$$
f(x_0+th)-P_n(x_0+th)
=\binom t{n+1}h^{n+1}f^{(n+1)}(\xi).\qquad\text{(7.4)}
$$

$\xi$ 位于节点与 $x$ 的最小包围区间。节点处余项为零。固定 $x-x_0=u$、令 $t=u/h$、$h\to0$，由(4.4)知 $\binom tk\Delta_h^kf(x_0)\to u^kf^{(k)}(x_0)/k!$；同时插值余项保持在所述区间内。这解释插值多项式如何趋于Taylor多项式，不声称 $n\to\infty$ 时余项必消失。取 $x=1/n$ 代入Peano公式，即得到常用的数列逆幂渐近展开。

### 7.3 无穷展开为什么需要额外条件

$e^x$ 的Taylor余项绝对值至多 $e^{|x|}|x|^{p+1}/(p+1)!\to0$，因相邻比最终小于 $1/2$，故 $e^x=\sum x^k/k!$。整数 $n$ 时 $(1+h)^n=\sum_{k=0}^n\binom nk h^k$ 是二项定理。

对实 $x$，级数 $\sum_{k\ge0}\binom xk h^k$ 在 $|h|<1$ 由比值判别绝对收敛，逐项求导得到 $(1+h)F'=xF$、$F(0)=1$；解此方程得 $F=(1+h)^x$。当 $x>-1$，在 $h=1$ 时，若不终止，系数最终交错，绝对值相邻比为 $1-(x+1)/(k+1)$，由 $\prod(1-c/k)\to0$（取对数与调和级数比较）知趋零，因此Leibniz判别使级数收敛；§13.2的Abel定理给出 $2^x=\sum\binom xk$。$x\le-1$ 时项不趋零，故原框架此式必须限制范围。

令 $f(0)=0$、$f(x)=e^{-1/x^2}$（$x\ne0$）。归纳求导得每阶导数在非零处等于 $e^{-1/x^2}$ 乘 $1/x$ 的多项式。对任意 $M$，置 $u=1/x^2$，有 $u^Me^{-u}\to0$，所以各阶导数延拓到0均为0。其Taylor级数恒为零，而 $x\ne0$ 时 $f(x)>0$；因此光滑并不意味着等于Taylor级数。

整数数据同样不能唯一决定一般光滑或整函数：$f(x)$ 与 $f(x)+\sin\pi x$ 在所有整数点相同。增长限制确可恢复唯一性，§13.8给出一个Carlson型定理及证明。因此Newton无穷级数不能仅凭有限公式便宣称对所有函数成立。

## 8 求和与积分的桥梁

### 8.1 Riemann和、Darboux准则及数值积分

对有界 $f:[a,b]\to\mathbb R$，分割 $P$ 的上下和为 $U(P)=\sum M_i\Delta x_i$、$L(P)=\sum m_i\Delta x_i$。细分使上和下降、下和上升；任意两分割的共同细分说明 $\sup_PL(P)\le\inf_PU(P)$。两者相等当且仅当对任意 $\varepsilon>0$ 有分割使 $U-L<\varepsilon$。

该条件还等价于所有网格趋零的带标记Riemann和趋同一值。证明充分性时固定一个使上下和差小的分割 $P_0$；新细网格中跨越 $P_0$ 分点的区间总长度至多 $2\#P_0\|P\|$，其误差至多此长度乘 $2\|f\|_\infty$；其他区间夹在 $P_0$ 的上下和之间。必要性则在每个小区间选接近上下确界的标记，若所有Riemann和均趋同一值，上下和差必趋零。连续函数由一致连续性满足 $U-L\le(b-a)\omega_f(\|P\|)\to0$。

特别 $n^{-1}\sum_{k=1}^nf(k/n)\to\int_0^1f$。取 $f(x)=1/(1+x)$ 得 $\sum_{k=1}^n1/(n+k)\to\log2$。对 $\log x$ 在0的瑕点不能直接套有界Riemann和；单调积分比较给出

$$
\int_1^n\log t\,dt\le\log n!\le\int_1^n\log t\,dt+\log n,
$$

所以 $n^{-1}\log n!-\log n\to-1$，从而 $(n!)^{1/n}/n\to e^{-1}$。

矩形规则直接取端点Riemann和。若 $|f'|\le M_1$，每段长度 $h$ 上误差不超过 $M_1h^2/2$，因 $|f(x)-f(a)|\le M_1(x-a)$。梯形规则使用线性插值 $L$；插值余项为 $f''(\xi_x)(x-a)(x-b)/2$，故总误差满足 $|\int_a^bf-T|\le\|f''\|_\infty(b-a)^3/12$。

Simpson规则在长度 $2h$ 的区间上为 $Q=h[f(a)+4f(a+h)+f(a+2h)]/3$，其误差为 $-h^5f^{(4)}(\xi)/90$。为证明常数与符号，在 $[-1,1]$ 写积分余项 $f(x)=P_3(x)+\int_{-1}^1(x-t)_+^3f^{(4)}(t)dt/6$。泛函 $L(f)=\int_{-1}^1f-[f(-1)+4f(0)+f(1)]/3$ 消去三次以下多项式，故 $L(f)=\int_{-1}^1K(t)f^{(4)}(t)dt$。对 $0\le t\le1$，

$$
K(t)=\frac{(1-t)^4}{24}-\frac{(1-t)^3}{18}
=-\frac{(1-t)^3(1+3t)}{72}\le0,
$$

且由对称性 $K(-t)=K(t)$。代入 $f=x^4/24$ 得 $\int K=-1/90$；加权中值定理及尺度变换便给出误差式。复合公式将各段误差相加；网格步长 $h$ 时矩形、梯形、Simpson误差分别为 $O(h),O(h^2),O(h^4)$，对应所需导数有界。

### 8.2 单调比较、积分判别与Euler常数

若 $f\ge0$ 单减，则在 $[k,k+1]$ 上 $f(k+1)\le f(x)\le f(k)$。相加得到

$$
\int_m^{n+1}f\le\sum_{k=m}^nf(k)\le f(m)+\int_m^nf.\qquad\text{(8.1)}
$$

两边的部分累积均单增，因此有界与否相同，即积分判别法。令 $d_n=\sum_{k=1}^nf(k)-\int_1^nf$，则 $d_{n+1}-d_n=f(n+1)-\int_n^{n+1}f\le0$，且由(8.1)知 $0\le d_n\le f(1)$，所以收敛。$f(x)=1/x$ 给出 $\gamma=\lim(H_n-\log n)$。

### 8.3 Euler–Maclaurin公式及其证明

定义Bernoulli多项式：$B_0=1$，$B_j'=jB_{j-1}$，且 $\int_0^1B_j=0$（$j\ge1$）。积分与常数归一化递归唯一确定它们：$B_1=x-1/2$、$B_2=x^2-x+1/6$。令 $B_j=B_j(0)$，$\widetilde B_j(x)=B_j(\{x\})$。形式生成函数由上述导数与归一化满足 $\sum B_j(x)z^j/j!=ze^{xz}/(e^z-1)$；比较系数得 $B_1=-1/2,B_2=1/6,B_4=-1/30,B_6=1/42$。又 $z/(e^z-1)+z/2$ 为偶函数，故奇数 $j>1$ 的 $B_j=0$。积分归一化还给出 $B_j(1)=B_j(0)$（$j\ge2$）。

设整数 $m<n$、$f\in C^p[m,n]$，$p\ge1$。则

$$
\begin{aligned}
\sum_{k=m}^nf(k)
={}&\int_m^nf+\frac{f(m)+f(n)}2\\
&+\sum_{j=1}^{\lfloor p/2\rfloor}\frac{B_{2j}}{(2j)!}
[f^{(2j-1)}(n)-f^{(2j-1)}(m)]+R_p,\\
R_p={}&\frac{(-1)^{p+1}}{p!}\int_m^n\widetilde B_p(x)f^{(p)}(x)dx.
\end{aligned}\qquad\text{(8.2)}
$$

**证明：** 在每个 $[k,k+1]$ 分部积分，$\int_k^{k+1}(x-k-1/2)f'(x)dx=[f(k)+f(k+1)]/2-\int_k^{k+1}f$。求和即得 $p=1$ 形式。对 $\widetilde B_1f'$ 再逐段积分，使用 $B_2'=2B_1$；因 $B_2$ 在端点相合，内部端点项抵消，只剩 $B_2[f'(n)-f'(m)]/2!$。重复此过程，偶数阶留下端点修正，奇数阶大于1的端点系数为零；停止于第 $p$ 阶恰得余项符号。特别

$$
|R_p|\le\frac{\|B_p\|_{\infty,[0,1]}}{p!}\int_m^n|f^{(p)}(x)|dx.
$$

将其用于 $f(x)=x^r$、取 $p>r$，余项为零，得Faulhaber幂和是 $n$ 的 $r+1$ 次多项式。算子写法 $\Delta^{-1}=(e^D-1)^{-1}=D^{-1}-1/2+\sum_{j\ge1}B_{2j}D^{2j-1}/(2j)!$ 是这类多项式恒等式的压缩记法，$D^{-1}$ 必须选择积分常数；在一般函数上须保留(8.2)余项。

对 $f=1/x$ 在 $[n,N]$ 用(8.2)，取 $p=4$ 后令 $N\to\infty$，由 $\int_n^\infty|f^{(4)}|=O(n^{-4})$ 及 $H_N-\log N\to\gamma$，整理得到

$$
H_n=\log n+\gamma+\frac1{2n}-\frac1{12n^2}+O(n^{-4}).\qquad\text{(8.3)}
$$

对 $f=\log x$ 同样取 $p=4$，因 $f^{(4)}=-6/x^4$ 尾部积分为 $O(n^{-3})$，得到 $\log n!=(n+1/2)\log n-n+C+1/(12n)+O(n^{-3})$。常数 $C=\tfrac12\log(2\pi)$ 在§13.7用独立的Gamma积分渐近确定，因而不存在“先用Stirling证明自身常数”的循环。

在步长 $h$ 的网格上对(8.2)缩放，复合梯形和 $T_h$ 满足

$$
T_h=I+\frac{h^2}{12}[f'(b)-f'(a)]+O(h^4)
$$

（$f\in C^4$），所以 $(4T_{h/2}-T_h)/3=I+O(h^4)$；更高偶次项按同样线性消去，这就是Romberg外推的依据。

### 8.4 分段积分、Wallis公式与三个恒等式

反常积分若收敛，对任意 $A_n\uparrow\infty$，$\sum_n\int_{A_n}^{A_{n+1}}f$ 的部分和是 $\int_{A_0}^{A_{N+1}}f$，故收敛到同一值。反向若对每个这样的分点列都成立，由归结原则得到原积分收敛。只检验某一个分段列不足够；例如 $f(x)=\cos x$ 按 $2\pi n$ 分段时每段积分为零，而任意终点积分 $\sin A$ 无极限。

令 $I_n=\int_0^{\pi/2}\sin^nx\,dx$。分部积分给出 $I_n=(n-1)I_{n-2}/n$，初值 $I_0=\pi/2,I_1=1$，故 $I_{2n}=\frac{(2n-1)!!}{(2n)!!}\frac\pi2$、$I_{2n+1}=\frac{(2n)!!}{(2n+1)!!}$。因 $I_{2n+1}\le I_{2n}\le I_{2n-1}$，又 $I_{2n-1}/I_{2n+1}=(2n+1)/(2n)\to1$，比值趋1，整理得

$$
\frac\pi2=\lim_{n\to\infty}\frac1{2n+1}
\left(\frac{(2n)!!}{(2n-1)!!}\right)^2.\qquad\text{(8.4)}
$$

在 $0<x<1$ 展开 $x^{-x}=e^{-x\log x}$，各项非负，§16的单调收敛允许交换求和积分。由 $x=e^{-t}$ 与反复分部积分，$\int_0^1x^n(-\log x)^n dx=n!/(n+1)^{n+1}$，故

$$
\int_0^1x^{-x}dx=\sum_{m=1}^\infty m^{-m}.\qquad\text{(8.5)}
$$

对 $0\le r<1$，$\log(1+rx)/x=\sum_{n\ge1}(-1)^{n-1}r^nx^{n-1}/n$ 一致收敛，可积分得 $\sum(-1)^{n-1}r^n/n^2$；$r\uparrow1$ 时两侧分别由 $0\le\log(1+rx)/x\le1$ 与绝对收敛取极限。利用§13.5证明的 $\sum1/n^2=\pi^2/6$，分离偶数项得到

$$
\int_0^1\frac{\log(1+x)}x dx=\frac{\pi^2}{12}.
$$

又 $1/(e^x-1)=\sum_{n\ge1}e^{-nx}$（$x>0$），逐项非负积分及 $\int_0^\infty xe^{-nx}dx=1/n^2$ 得 $\int_0^\infty x/(e^x-1)dx=\pi^2/6$。Dirichlet积分的条件收敛与值见§9.4、§10.4；Poisson求和见§13.6。

## 9 级数与反常积分

### 9.1 定义、Cauchy准则与比较判别

$\sum_{n=1}^\infty a_n$ 定义为部分和 $S_N$ 的有限极限。$f$ 在每个有限子区间可积时，$\int_a^\infty f$ 定义为 $F(A)=\int_a^Af$ 在 $A\to\infty$ 的有限极限。把§2的Cauchy准则用于 $S_N,F(A)$，分别得到尾和、任意尾区间积分绝对值趋零的条件。故余项及尾积分趋零，改变有限项或在有限区间作仍保持可积的修改不影响尾部敛散性。

绝对收敛推出收敛，因为 $|\sum_{m<k\le n}a_k|\le\sum_{m<k\le n}|a_k|$，积分同理。不绝对收敛而收敛称条件收敛。对非负项，部分和或变上限积分单增，故收敛当且仅当有界。

若 $0\le a_n\le Cb_n$ 最终成立，$\sum b_n<\infty$ 则 $\sum a_n<\infty$；若 $\sum a_n=\infty$ 则 $\sum b_n=\infty$。积分版本用保序性。若 $a_n/b_n\to\lambda\in(0,\infty)$，最终可双向比较，故同敛散；$\lambda=0$ 只得到从 $b$ 收敛到 $a$ 收敛，不能反向。函数极限比较相同。

直接计算 $\int_1^Rx^{-p}dx$，$p\ne1$ 时为 $(R^{1-p}-1)/(1-p)$，$p=1$ 时为 $\log R$。故收敛当且仅当 $p>1$；(8.1)给出 $p$ 级数结论。令 $t=\log x$，得 $\int_2^\infty dx/[x(\log x)^p]=\int_{\log2}^\infty t^{-p}dt$，同样阈值为 $p>1$，对应级数由最终单调性与积分判别得到。近零瑕积分 $\int_0^1x^{-p}dx$ 的阈值相反，为 $p<1$；换元 $x=1/t$ 后化成 $\int_1^\infty t^{p-2}dt$。

### 9.2 比值、根值、Raabe、Gauss与凝聚

若 $\limsup|a_{n+1}/a_n|<1$（最终分母非零），选 $q<1$ 使最终比值不超过 $q$，迭代得 $|a_n|\le Cq^n$，故绝对收敛；若下极限大于1，则项不趋零。根值判别令 $\rho=\limsup|a_n|^{1/n}$：$\rho<1$ 时最终 $|a_n|\le q^n$；$\rho>1$ 时无穷多项大于 $q^n$（$q>1$），故发散。临界值1不能判断，例如 $1/n$ 与 $1/n^2$。

对正项设 $r_n=n(a_n/a_{n+1}-1)$。若 $\liminf r_n>1$，选 $1<p<\liminf r_n$；因 $(1+1/n)^p=1+p/n+O(n^{-2})$，最终 $a_n/a_{n+1}>(1+1/n)^p$，故 $n^pa_n$ 递减有界，$a_n\le Cn^{-p}$，收敛。若 $\limsup r_n<1$，选 $\limsup r_n<p<1$，相反比较得 $a_n\ge cn^{-p}$，发散。这就是Raabe判别。临界值1仍未定。

一个常用Gauss精细版本是

$$
\frac{a_n}{a_{n+1}}=1+\frac\alpha n+O(n^{-1-\delta}),\qquad\delta>0.
$$

取对数并与 $\alpha\log(1+1/n)$ 相减，误差为 $O(n^{-1-\min(\delta,1)})$，绝对可和。因此 $\log(n^\alpha a_n)$ 的相邻差可和，趋于有限常数，得 $a_n\sim Cn^{-\alpha}$、$C>0$，故当且仅当 $\alpha>1$ 收敛。若只有 $o(1/n)$ 误差，这个临界结论未必成立，例如 $1/[n(\log n)^2]$。

若 $a_n\downarrow0$ 且非负，则

$$
2^ka_{2^{k+1}}\le\sum_{n=2^k}^{2^{k+1}-1}a_n\le2^ka_{2^k}.
$$

按块求和，左边是凝聚和移位后的一半，故 $\sum a_n$ 与 $\sum2^ka_{2^k}$ 同敛散；若项不趋零两边均发散。连续对应是有限区间换元 $x=2^t$ 后取极限：$\int_1^\infty f(x)dx=(\log2)\int_0^\infty2^tf(2^t)dt$。对 $x^pf(x)\to\lambda\in(0,\infty)$ 的所谓Cauchy型积分判别，本质是与 $x^{-p}$ 的极限比较；对数尺度同理。

### 9.3 振荡判别及余项估计

若 $b_n\downarrow0$、$b_n\ge0$，交错级数 $\sum(-1)^{n-1}b_n$ 的偶数部分和单增、奇数部分和单减，二者之差趋零，因此收敛，余项绝对值不超过首个遗漏项。

若 $A_N=\sum_{n=1}^Na_n$ 有界，$b_n$ 单调趋零，由(5.4)对任意尾段应用有 $|\sum_{n=m}^Na_nb_n|\le C(|b_m|+|b_N|+\sum_{n=m}^{N-1}|b_n-b_{n+1}|)\le 2C'|b_m|\to0$，得到Dirichlet判别；其中尾段 $a$ 的部分和至多为原部分和界的两倍。若 $\sum a_n$ 收敛、$b_n$ 单调有界，令 $b=\lim b_n$，把乘积和分成 $b\sum a_n+\sum a_n(b_n-b)$，后者由Dirichlet判别收敛，即Abel判别。

积分版本设 $F(x)=\int_a^xf$ 有界、$g$ 单调趋零。Bonnet估计对尾段给出 $|\int_A^Bfg|\le C|g(A)|\to0$，故收敛。若 $\int_a^\infty f$ 已收敛且 $g$ 单调有界，减去 $g$ 的极限再应用上式，得到积分Abel判别。局部只需各被积函数存在相应积分；连续 $f$ 足够使用§5.3的证明。

### 9.4 条件收敛例子与必要条件差异

有限几何和给出 $\sum_{k=1}^Ne^{ik}=e^i(1-e^{iN})/(1-e^i)$ 有界，故 $\sum\sin n/n$ 由Dirichlet收敛。又 $|\sin n|\ge\sin^2n=(1-\cos2n)/2$，而 $\sum\cos2n/n$ 也由Dirichlet收敛，所以 $\sum|\sin n|/n$ 发散，确为条件收敛。

$\int_1^\infty\sin x/x\,dx$ 因 $\sin x$ 的原函数有界而收敛。其绝对值在 $[k\pi,(k+1)\pi]$ 上积分至少为 $2/[(k+1)\pi]$，故不绝对收敛。按这些零点分段，变号后的每段大小为 $b_k=\int_0^\pi\sin t/(t+k\pi)dt$，它单减趋零；用交错级数可再次证明块端点收敛，块内误差至多 $\pi/(k\pi)$，才进一步得到任意终点的收敛。

级数收敛必有 $a_n=S_n-S_{n-1}\to0$。积分无此一般必要条件：$f(x)=\sin x^2$ 不趋零，而换元 $t=x^2$ 把 $\int_1^\infty f$ 化成 $\frac12\int_1^\infty\sin t/\sqrt t\,dt$，由Dirichlet收敛。

还可构造非负连续尖峰：在每个整数 $n\ge2$ 附近放一个高 $n$、底宽 $2/n^3$ 的三角形，其他地方取0；支撑互不相交。其积分为 $\sum1/n^2<\infty$，但峰值趋无穷；平方积分为 $\sum2/(3n)=\infty$。这同时证明 $f\ge0$、$\int f<\infty$ 不推出 $\int f^2<\infty$。

若 $f$ 单调且反常积分收敛，单调极限存在；非零有限极限或无限极限都会使尾区间积分不满足Cauchy条件，所以极限必须为零。若 $f$ 一致连续而不趋零，存在 $x_n\to\infty$、$|f(x_n)|\ge\varepsilon$。统一取 $\delta>0$ 使 $|f(x)-f(x_n)|<\varepsilon/2$ 当 $|x-x_n|<\delta$，于是 $f$ 在 $[x_n,x_n+\delta/2]$ 同号且绝对值至少 $\varepsilon/2$，区间积分绝对值至少 $\varepsilon\delta/4$，违背Cauchy准则。此论证不需要绝对收敛。

### 9.5 重排、Cauchy乘积与卷积

绝对收敛级数可任意重排：先取有限前项使绝对尾和小于 $\varepsilon$，任何重排在充分后已经包含这些前项，余下遗漏和新增项的总误差由绝对尾和控制。若实级数条件收敛，则正项和为 $+\infty$、负项和为 $-\infty$，否则其中一个有限与原和有限会迫使另一个也有限，从而绝对收敛。给定实数 $S$，按原顺序取正项直到超过 $S$，再取负项直到低于 $S$，反复进行。每次越过的误差至多末项绝对值，而原项趋零；各正负项最终均被取到，所以这是和为 $S$ 的重排。若每轮先加入足够正项越过整数 $j$，再加入一个尚未使用的负项，则负项趋零，得到趋 $+\infty$ 的重排；负无穷类似。交替越过 $+j,-j$ 可使部分和无极限。

令 $c_n=\sum_{k=0}^na_kb_{n-k}$。若两级数绝对收敛，$\sum_{k,l}|a_kb_l|=(\sum|a_k|)(\sum|b_l|)<\infty$，由§11的绝对换序得 $\sum c_n=AB$。Mertens定理只要求一者绝对收敛、另一者收敛：设 $\sum|a_k|<\infty$、$B_n\to B$，则

$$
\sum_{n=0}^Nc_n=\sum_{k=0}^Na_kB_{N-k}\longrightarrow B\sum_{k=0}^\infty a_k.
$$

证明将 $k$ 在固定 $K$ 处分开，有限前部逐项取极限，尾部利用 $B_n$ 统一有界和 $\sum_{k>K}|a_k|$ 任意小。若只假定两个原级数及乘积级数均收敛，对 $0<r<1$ 作绝对收敛的幂级数相乘，再用§13.2的Abel定理令 $r\uparrow1$，仍得乘积和为 $AB$。

若 $f,g\in L^1(0,\infty)$，则 $\int\!\int|f(t)g(s)|dt ds=\|f\|_1\|g\|_1$，Fubini及换元 $x=t+s$ 给出

$$
(f*g)(x)=\int_0^xf(t)g(x-t)dt,\qquad
\int_0^\infty(f*g)=(\int_0^\infty f)(\int_0^\infty g).
$$

卷积几乎处处存在且绝对可积。条件收敛时不能无条件使用Fubini。原文把比值、根值与重排称为“级数特有”，应理解为所列标准表述针对可数项；积分经分段也能采用这些判别，绝对积分同样具有无序累积性质，并非绝对的理论隔离。

## 10 函数项级数与含参量积分

### 10.1 一致收敛与判别法

函数列 $S_n\to S$ 一致，指 $\sup_{x\in X}|S_n(x)-S(x)|\to0$。等价的Cauchy条件是 $\sup_x|S_m-S_n|\to0$（$m,n\to\infty$）：充分性先逐点取实数完备性极限，再在统一不等式中令 $m\to\infty$。含参积分 $I(x)=\int_c^\infty f(x,t)dt$ 的一致收敛同样用任意 $B>A\to\infty$ 时 $\sup_x|\int_A^Bf|\to0$ 刻画。

若 $|u_n(x)|\le M_n$ 且 $\sum M_n<\infty$，尾和由 $\sum_{n>N}M_n$ 统一控制，得到Weierstrass判别。积分若 $|f(x,t)|\le g(t)$、$g\ge0$ 可积，尾积分由 $\int_A^\infty g$ 控制。

一致Dirichlet判别的足够条件是：$\sum_{k=1}^Na_k(x)$ 对 $N,x$ 统一有界；对每个 $x$，$b_n(x)$ 关于 $n$ 单调且 $\sup_x|b_n(x)|\to0$。§9.3的尾部估计取上确界即得一致收敛。一致Abel判别的足够条件是 $\sum a_n(x)$ 一致收敛、$b_n(x)$ 对每个 $x$ 单调且 $\sup_{n,x}|b_n(x)|\le M$；此时尾段 $a$ 的部分和统一小于 $\varepsilon$，Abel变换给出乘积尾和至多 $2M\varepsilon$。对积分把部分和换成 $\int_c^Tf(x,t)dt$，把单调性改为对积分变量 $t$，同一Bonnet估计证明两种一致判别。

**Dini定理：** 若紧区间上连续 $S_n$ 单增趋于连续 $S$，则一致收敛。证明令 $r_n=S-S_n\downarrow0$，对固定 $\varepsilon>0$，开集 $U_n=\{r_n<\varepsilon\}$ 递增覆盖区间。有限子覆盖等于其中一个 $U_N$，故 $\sup r_N\le\varepsilon$；先用 $\varepsilon/2$ 可得严格误差小于 $\varepsilon$。非负连续项级数的部分和符合此条件。若 $f(x,t)\ge0$ 连续、$I(x)$ 有限连续，则 $I_N(x)=\int_c^Nf$ 连续且单增，Dini使整数截断一致；任意截断夹在相邻整数之间，因此也一致。

### 10.2 连续、积分与求导交换

一致极限保持连续：在一点 $x_0$，先取 $N$ 使两端尾误差均小于 $\varepsilon/3$，再利用 $S_N$ 的连续性控制中间 $|S_N(x)-S_N(x_0)|$。有限区间积分可交换，因为 $|\int_a^b(S-S_N)|\le(b-a)\|S-S_N\|_\infty$。若各项Riemann可积，一致极限也可积：用某一 $S_N$ 的上下和差，加上 $2(b-a)\|S-S_N\|_\infty$ 即得Darboux准则。

若 $u_n\in C^1[a,b]$，$\sum u_n'$ 一致收敛为 $g$，且 $\sum u_n(x_0)$ 收敛，那么

$$
S_N(x)=S_N(x_0)+\int_{x_0}^xS_N'(t)dt
\longrightarrow S(x_0)+\int_{x_0}^xg(t)dt
$$

一致成立；$g$ 是连续函数的一致极限，故 $S'=g$。这同时证明原级数的一致收敛与逐项求导。

正常含参积分：若 $f$ 在紧矩形连续，则一致连续性给出 $|\int_c^df(x,t)dt-\int_c^df(x_0,t)dt|\le(d-c)\sup_t|f(x,t)-f(x_0,t)|\to0$。若 $f_x$ 也连续，差商由 $f_x$ 的积分平均表示并一致趋于 $f_x(x,t)$，从而 $I'(x)=\int_c^df_x(x,t)dt$。在紧矩形上积分换序由§11.2证明。

反常含参积分若在参数紧区间一致收敛，有限截断连续性加一致极限给出 $I$ 连续。若 $f,f_x$ 在每个有限矩形连续，$\int_c^\infty f_x(x,t)dt$ 对参数一致收敛，且原积分在某一点 $x_0$ 收敛，把上述函数列求导定理用于 $I_N(x)$，得到积分号下求导；任意实截断可用同样估计处理。对参数积分的交换由有限矩形换序后，使用一致尾界乘参数区间长度取极限。局部一致（每个内闭子区间一致）足以逐点得到连续、可微结论。

### 10.3 两个局部一致例子与分段刻画

在 $s\ge1+\varepsilon$ 上，$n^{-s}\le n^{-1-\varepsilon}$；任意阶导数 $(-\log n)^kn^{-s}$ 在较小闭区间上也可由 $C_kn^{-1-\varepsilon/2}$ 控制，因为对数幂低于任何正幂。故 $\zeta(s)$ 在 $(1,\infty)$ 可任意次逐项求导。

对 $s\in[\alpha,\beta]\subset(0,\infty)$，$t^{s-1}e^{-t}|\log t|^k$ 在 $0<t\le1$ 由 $t^{\alpha-1}|\log t|^k$ 控制，后者经 $t=e^{-u}$ 变成指数衰减积分；$t\ge1$ 时由 $t^{\beta-1}e^{-t}(\log t)^k$ 控制，亦可积。故 $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}dt$ 内闭一致且可任意次求导。

一致反常积分蕴含对每个 $A_n\uparrow\infty$，分块积分级数一致收敛，因为其尾和正是尾区间积分。反向若一致Cauchy条件失败，可选彼此向右分离的区间 $[u_n,v_n]$ 及参数 $x_n$，满足 $|\int_{u_n}^{v_n}f(x_n,t)dt|\ge\varepsilon_0$；把全部 $u_n,v_n$ 按序列为分点，则对应级数的一致Cauchy条件失败。因此原文的“任意分段”确实必要。

### 10.4 Dirichlet积分的值

设 $J(a)=\int_0^\infty e^{-ax}\sin x/x\,dx$，$a>0$。在任意 $a\ge a_0>0$ 上可由指数函数控制导数，故

$$
J'(a)=-\int_0^\infty e^{-ax}\sin x\,dx=-\frac1{1+a^2}.
$$

末个积分由两次分部积分联立得到，边界项由指数衰减消失。又 $|J(a)|\le\int_0^\infty e^{-ax}dx=1/a$，所以 $J(a)\to0$（$a\to\infty$），从而 $J(a)=\int_a^\infty dt/(1+t^2)=\pi/2-\arctan a$。

对 $a\ge0$，$e^{-ax}/x$ 在 $x\ge R$ 单减，且不超过 $1/R$；Bonnet估计给出 $|\int_R^Te^{-ax}\sin x/x\,dx|\le C/R$，对 $a$ 一致。有限区间上令 $a\downarrow0$ 可取极限，因此

$$
\int_0^\infty\frac{\sin x}{x}dx=\frac\pi2.\qquad\text{(10.1)}
$$

这一步的一致尾估计正是从收敛因子返回原反常积分所需的桥梁。

## 11 二重极限、求和与积分

### 11.1 重极限与累次极限

$a_{mn}\to L$（$m,n\to\infty$）指 $\forall\varepsilon>0\ \exists N$，$m,n\ge N$ 时 $|a_{mn}-L|<\varepsilon$。若每个充分大的 $m$ 都存在 $b_m=\lim_na_{mn}$，在此不等式中令 $n\to\infty$ 得 $|b_m-L|\le\varepsilon$，所以 $b_m\to L$。这证明重极限与已存在的累次极限相等。$a_{mn}=m/(m+n)$ 的两累次极限分别为1和0，因此无重极限。函数 $x^2/(x^2+y^2)$ 在 $(0,0)$ 同样如此。

两累次极限相等也不保证重极限：$mn/(m^2+n^2)$ 的两个累次极限均为0，而对角线恒为 $1/2$。重极限存在也不保证每个内层极限存在：$a_{mn}=\sin n/m$ 的重极限为0，但固定 $m$ 时无 $n$ 极限。

Moore–Osgood的一个明确版本是：$a_{mn}\to b_m$ 对 $m$ 一致（$n\to\infty$），且每个 $n$ 的 $c_n=\lim_ma_{mn}$ 存在，则两累次极限和重极限都存在且相等。证明：一致收敛使 $\sup_m|a_{mn}-a_{mn'}|<\varepsilon$，令 $m\to\infty$ 得 $c_n$ 是Cauchy列，趋于 $L$。选充分大固定 $n$，对大 $m$ 有 $|b_m-L|\le|b_m-a_{mn}|+|a_{mn}-c_n|+|c_n-L|<3\varepsilon$。最后 $|a_{mn}-L|\le|a_{mn}-b_m|+|b_m-L|$ 给出重极限。连续参数版本把整数尾部换成去心邻域，三次误差分解不变。

### 11.2 正项换序、Fubini与有限区域

对非负阵列 $a_{mn}$，定义总和为所有有限子集上和的上确界 $S$。任意有限集合包含于某矩形，故 $S=\sup_{M,N}\sum_{m\le M,n\le N}a_{mn}$；逐行取上确界与联合取上确界相同，所以 $S=\sum_m\sum_na_{mn}=\sum_n\sum_ma_{mn}$，允许 $+\infty$。任意枚举的有限前段最终覆盖每个指定有限集，故其和也为 $S$。这就是离散Tonelli。

若 $\sum_{m,n}|a_{mn}|<\infty$，对正负部分分别应用上式，得到任意换序与重排合法。反过来若任意枚举均收敛且不依赖次序，把阵列枚举为单级数，§9.5的重排证明表明它必须绝对收敛。

连续Tonelli与Fubini的测度论证明在§16.3给出。紧矩形上的连续函数也可直接处理：二维Riemann和写成 $\sum_i\sum_jf(\xi_i,\eta_j)\Delta x_i\Delta y_j$，有限和可交换；一致连续性保证内层Riemann和对外层参数一致收敛，继而得两累次积分等于二重积分。

有限三角形指标集可按行或列枚举，所以

$$
\sum_{i=1}^n\sum_{j=1}^ia_{ij}=\sum_{j=1}^n\sum_{i=j}^na_{ij}.
$$

对应区域 $0\le y\le x\le1$，其指示函数除边界外连续，边界可用总面积任意小的矩形覆盖，故连续 $f$ 乘此指示函数Riemann可积；把矩形换序公式应用于它，得到 $\int_0^1dx\int_0^xf(x,y)dy=\int_0^1dy\int_y^1f(x,y)dx$。

### 11.3 三类收敛必须分清

Pringsheim二重级数指矩形部分和 $S_{MN}$ 在 $M,N\to\infty$ 时有极限；这弱于绝对收敛和无序求和。取 $a_{nn}=1,a_{n,n+1}=-1$，其每行和为0，而第一列和为1、其余列和为0，所以两个累次和分别是0与1。此例矩形部分和并不收敛。另取 $a_{1n}=n,a_{2n}=-n$、其余零；$M\ge2$ 时 $S_{MN}=0$，故重极限为0，但前两行的级数各自发散，某一累次和不存在。

连续例子取

$$
f(x,y)=\frac{x^2-y^2}{(x^2+y^2)^2},\qquad 0<x,y<1.
$$

因 $\partial_y[y/(x^2+y^2)]=f$，先对 $y$ 积分得 $1/(1+x^2)$，再对 $x$ 积分为 $\pi/4$。因 $\partial_x[x/(x^2+y^2)]=-f$，反序得 $-\pi/4$。在原点附近取极坐标，$|f|\,dxdy=|\cos2\theta|\,dr\,d\theta/r$，径向积分发散，所以不满足Fubini的绝对可积条件。

“二重反常积分收敛当且仅当绝对收敛”只适用于**任意穷竭、与穷竭方式无关的有限积分**。精确地，设 $f$ 局部绝对可积，把 $\int_Ef$ 看成对所有有界可测集合 $E$ 按包含关系取极限；该极限有限当且仅当 $f\in L^1$。若绝对可积，选大球使外部绝对积分小，任何包含该球的 $E$ 都与总积分相差很小。反向，网的Cauchy条件给出某有界 $E_0$，使任意有界 $B\subset E_0^c$ 有 $|\int_Bf|<1$。分别取 $B=\{f\ge0\}\cap(B_R\setminus E_0)$ 和负集，单调极限说明正负尾积分均有限，加上局部绝对可积性即得结论。若只沿一个指定的矩形、圆盘或曲线族截断，这个证明不适用。

例如 $f(x,y)=\sin x\,e^{-y}/x$（$x\ge1,y\ge0$）的矩形截断积分等于 $(\int_1^A\sin x/x\,dx)(1-e^{-B})$，故矩形重极限存在，而绝对积分发散。一维反常积分也只沿有序区间截断，因此可条件收敛；若一维同样要求任意可测集合的无序累积，则同样必须绝对收敛。差别来自定义，不是维数本身。

### 11.4 换元、径向判别与格点计数

对非负或绝对可积 $f(x+y)$，先在固定 $x$ 时令 $u=x+y$，再用Tonelli/Fubini交换 $0\le x\le u$ 的次序（等价于行列式为1的线性换元），故

$$
\int_0^\infty\!\int_0^\infty f(x+y)dxdy
=\int_0^\infty uf(u)du.
$$

离散对应中，$m+n=k$ 有 $k+1$ 个非负整数解，故因子变为 $k+1$。同一换元用于乘积 $f(x)g(y)$ 就得到卷积公式；离散按对角线分组得到Cauchy乘积。绝对可积或非负性保证方形、圆盘等穷竭给出同一总量。

若 $\varphi(r)\ge0$ 单减，考察原点外格点与积分。对足够大的 $R$，环带 $R\le|k|<2R$ 的整数格点数介于 $c_dR^d$ 与 $C_dR^d$：上界由包含各格点的单位立方体被大球包住；下界可在环带中放入边长为 $cR$ 的长方体，再逐坐标数整数。于是每个二进环带的和介于 $c_d2^{jd}\varphi(2^{j+1})$ 与 $C_d2^{jd}\varphi(2^j)$ 之间；积分也由环带体积得到相同形式。移位一个 $j$ 仅乘固定常数，因此径向格点和与径向积分同敛散。

取 $\varphi(r)=r^{-2p}$，积分径向为常数乘 $\int_1^\infty r^{d-1-2p}dr$，故阈值为 $2p>d$。二维特别为 $p>1$，既适用于 $\sum_{(m,n)\ne(0,0)}(m^2+n^2)^{-p}$，也适用于圆外积分。

设 $N(R)=\#\{k\in\mathbb Z^2:|k|\le R\}$。以每个格点为中心的单位正方形不交叠且面积1，它们的并包含半径 $R-\sqrt2/2$ 的圆盘并包含于半径 $R+\sqrt2/2$ 的圆盘。因此

$$
\pi(R-\sqrt2/2)^2\le N(R)\le\pi(R+\sqrt2/2)^2,
$$

从而 $N(R)=\pi R^2+O(R)$。这是Gauss圆问题的初等误差界，不是更精细误差估计的断言。圆盘面积由极坐标 $\int_0^{2\pi}\int_0^Rr\,drd\theta=\pi R^2$ 得到。

二维Riemann和的证明与§8.1相同，网格面积取代区间长度，连续函数振荡由统一模控制，故 $n^{-2}\sum_{i,j=1}^nf(i/n,j/n)\to\int_{[0,1]^2}f$。最后由非负几何展开与Tonelli，

$$
\int_{[0,1]^2}\frac{dxdy}{1-xy}
=\sum_{n=0}^\infty\left(\int_0^1x^ndx\right)^2
=\sum_{n=1}^\infty\frac1{n^2}=\frac{\pi^2}{6}.
$$

## 12 不等式：离散与连续的共同证明

### 12.1 Schwarz、Hölder与Minkowski

以下 $\int$ 可以是关于计数测度的求和，也可以是普通积分；计数测度解释见§16。对平方可积 $f,g$，$\int(f-tg)^2\ge0$ 的二次式判别式非正，给出 $(\int fg)^2\le\int f^2\int g^2$；$\int g^2=0$ 时 $g=0$ 几乎处处，结论直接成立。复值情形对 $|\int f\overline g|$ 取相位化为实部，或用 $\int|f-tg|^2$ 同理证明。

设 $1<p<\infty$、$q=p/(p-1)$。Young不等式 $uv\le u^p/p+v^q/q$（$u,v\ge0$）由固定 $v$ 后求凸函数 $u^p/p-uv$ 的最小值得到，极小点满足 $u^{p-1}=v$。把 $u=|f|/\|f\|_p,v=|g|/\|g\|_q$ 代入并积分，得到Hölder不等式；任一范数为零时直接成立。端点 $p=1,q=\infty$ 由 $|fg|\le\|g\|_\infty|f|$ 得到。

对 $p>1$，先由 $(u+v)^p\le2^{p-1}(u^p+v^p)$ 保证 $f+g\in L^p$（此不等式来自凸性或Young）。然后

$$
\|f+g\|_p^p\le\int(|f|+|g|)|f+g|^{p-1}
\le(\|f\|_p+\|g\|_p)\|f+g\|_p^{p-1}.
$$

若右侧最后范数非零，除去即得Minkowski；为零则显然。$p=1$ 为积分三角不等式，$p=\infty$ 为本质上确界的三角不等式。有限与无限离散版本由同一证明或有限和后取极限得到。

### 12.2 Jensen、AM–GM与Chebyshev

设 $\mu$ 是概率测度、$f$ 可积、$\varphi$ 在含值域的区间凸，且 $\varphi(f)$ 可积或正部积分允许为无穷。记 $m=\int f$，若 $m$ 在区间内部，凸函数割线斜率的单调性使左右斜率之间存在 $c$，满足 $\varphi(t)\ge\varphi(m)+c(t-m)$。积分得到

$$
\varphi(\int f\,d\mu)\le\int\varphi(f)\,d\mu.\qquad\text{(12.1)}
$$

若 $m$ 为值域区间端点，$f-m$ 不变号且积分为零，故 $f=m$ 几乎处处。离散权重 $\lambda_k\ge0,\sum\lambda_k=1$ 给出通常Jensen；区间取 $d\mu=dx/(b-a)$ 给出积分版本。

$-\log t$ 二阶导数为 $1/t^2>0$，对正 $f$ 应用(12.1)再指数化，得 $\exp(\int\log f\,d\mu)\le\int f\,d\mu$；有限等权即AM–GM。零值由正则化 $f+\varepsilon$ 取极限处理，右侧有限而对数积分为 $-\infty$ 时左侧约定为零。

若数列 $a,b$ 同序，展开恒等式

$$
\frac1n\sum a_kb_k-\left(\frac1n\sum a_k\right)\left(\frac1n\sum b_k\right)
=\frac1{2n^2}\sum_{i,j}(a_i-a_j)(b_i-b_j)\ge0.
$$

若 $f,g$ 在 $[a,b]$ 同单调且相关积分存在，用双积分替换右侧并归一化得到 $(b-a)\int fg\ge(\int f)(\int g)$。两者反序时每个乘积非正，不等号反向。Abel不等式及Bonnet估计已经在§5.3通过非负权重证明。

### 12.3 Hardy不等式及常数

设 $a_n\ge0$、$A_n=\sum_{k=1}^na_k$、$b_n=A_n/n$、$p>1$、$q=p/(p-1)$。则

$$
\sum_{n=1}^\infty b_n^p\le q^p\sum_{n=1}^\infty a_n^p.\qquad\text{(12.2)}
$$

**证明：** $a_n=nb_n-(n-1)b_{n-1}$。由Young，$b_{n-1}b_n^{p-1}\le b_{n-1}^p/p+(p-1)b_n^p/p$，所以对有限 $N$，

$$
\begin{aligned}
\sum_{n=1}^Na_nb_n^{p-1}
&\ge\sum_{n=1}^N\left(\frac{n+p-1}{p}b_n^p-\frac{n-1}{p}b_{n-1}^p\right)\\
&=\frac{p-1}{p}\sum_{n=1}^Nb_n^p+\frac Np b_N^p
\ge q^{-1}\sum_{n=1}^Nb_n^p.
\end{aligned}
$$

再用Hölder并约去 $\left(\sum b_n^p\right)^{(p-1)/p}$，得有限版本；$N\to\infty$ 得(12.2)。

连续版本设 $f\ge0$、$f\in L^p(0,\infty)$、$F(x)=\int_0^xf$，则

$$
\int_0^\infty(F(x)/x)^pdx\le q^p\int_0^\infty f(x)^pdx.\qquad\text{(12.3)}
$$

先对非负有界且在零点附近为零、具有紧支撑的 $f$，分部积分得到

$$
\int_0^R F^px^{-p}dx
=-\frac{F(R)^pR^{1-p}}{p-1}
+q\int_0^R(F/x)^{p-1}f\,dx.
$$

丢去非正端点项并用Hölder即得估计，令 $R\to\infty$。一般 $f$ 用 $f_j=\min(f,j)\mathbf1_{[1/j,j]}\uparrow f$，对两侧用单调收敛完成证明，避免未经控制就在0处分部积分。

常数不能减小：离散取 $a_n=n^{-1/p}$（先截到 $N$），§6.5给出 $A_n\sim qn^{1-1/p}$，故前 $N$ 项左侧与 $q^p\log N$ 等价，右侧与 $\log N$ 等价。连续取 $f=x^{-1/p}\mathbf1_{[1,R]}$，对 $1<x<R$ 有 $F(x)=q(x^{1-1/p}-1)$，积分主项同为 $q^p\log R$，其比值趋 $q^p$。

### 12.4 Hilbert不等式

对非负 $a,b\in\ell^2$，

$$
\sum_{m,n\ge1}\frac{a_mb_n}{m+n}\le\pi\|a\|_2\|b\|_2.\qquad\text{(12.4)}
$$

**证明：** 设 $w_n=n^{-1/2}$。对固定 $m$，函数 $x\mapsto1/[\sqrt{x}(m+x)]$ 单减，因此

$$
\sum_{n=1}^\infty\frac{w_n}{(m+n)w_m}
\le\sqrt m\int_0^\infty\frac{dx}{\sqrt x(m+x)}=\pi,
$$

最后令 $x=mt^2$，化为 $2\int_0^\infty dt/(1+t^2)=\pi$。对有限二重和将每项写为

$$
\left(\frac{a_m}{\sqrt{m+n}}\sqrt{\frac{w_n}{w_m}}\right)
\left(\frac{b_n}{\sqrt{m+n}}\sqrt{\frac{w_m}{w_n}}\right),
$$

应用Cauchy–Schwarz，并对两个平方和分别使用刚才的行和界，得到(12.4)的有限版本。单调极限得无限版本。

连续版本取 $w(x)=x^{-1/2}$，同一计算给出 $\int_0^\infty w(y)/[(x+y)w(x)]dy=\pi$；在乘积空间用Schwarz得

$$
\int_0^\infty\!\int_0^\infty\frac{f(x)g(y)}{x+y}dxdy
\le\pi\|f\|_2\|g\|_2.
$$

一般实或复值用绝对值控制，既证明积分、级数绝对存在，也得到对应模长不等式。此处的权重证明解释了相同常数的来源。

### 12.5 Carleman、Knopp与Grönwall

对非负数列，Carleman不等式为

$$
\sum_{n=1}^\infty(a_1\cdots a_n)^{1/n}\le e\sum_{n=1}^\infty a_n.\qquad\text{(12.5)}
$$

固定 $N$，在有限Hardy不等式中把输入换成 $a_n^{1/p}$，得 $\sum_{n=1}^N[n^{-1}\sum_{k=1}^na_k^{1/p}]^p\le q^p\sum_{n=1}^Na_n$。若前 $N$ 项均正，展开 $a_k^{1/p}=1+(\log a_k)/p+O(p^{-2})$，$p\to\infty$ 时左侧逐项趋于几何平均，右侧常数趋 $e$。含零时先加 $\varepsilon>0$ 再令其趋零。最后 $N\to\infty$。

连续Knopp不等式为

$$
\int_0^\infty\exp\left(\frac1x\int_0^x\log f(t)dt\right)dx
\le e\int_0^\infty f(x)dx.\qquad\text{(12.6)}
$$

先在 $[0,R]$ 上设 $0<c\le f\le C$。把 $f^{1/p}$ 用于截断的(12.3)，$p\to\infty$ 时内部平均的展开与上段相同，Fatou给出(12.6)的截断版本。对正 $f$ 且 $\log f$ 在每个 $[0,R]$ 可积，取 $f_j=\min(\max(f,e^{-j}),e^j)$，截断对数受 $|\log f|$ 控制，且 $f_j\le f+1$，控制收敛及Fatou去掉上下界。再令 $R\to\infty$。允许零值或 $\int_0^x\log f=-\infty$ 时，固定有限 $R$，先应用于 $\min(f,M)+\varepsilon$。让 $M\to\infty$，再让 $\varepsilon\downarrow0$；对数的正部由 $f+1$ 控制，负部按单调极限处理，指数平均随 $\varepsilon$ 下降且其初始积分有限，因此两侧均可取极限。最后让 $R\to\infty$。$\log^+f\le f$ 保证不存在正无穷与负无穷相减的问题。

离散Grönwall设 $u_n\ge0,b_n\ge0,C\ge0$，且 $u_n\le C+\sum_{k<n}b_ku_k$。令右侧为 $v_n$，则 $v_{n+1}=v_n+b_nu_n\le(1+b_n)v_n$，归纳得

$$
u_n\le C\prod_{k<n}(1+b_k)\le C\exp(\sum_{k<n}b_k),
$$

最后用 $1+t\le e^t$。连续情形设 $u,b\ge0$ 连续且 $u(t)\le C+\int_0^tb(s)u(s)ds=v(t)$，则 $v'\le bv$，所以 $[e^{-\int_0^tb}v]'\le0$，得 $u(t)\le Ce^{\int_0^tb}$。局部可积版本以绝对连续导数几乎处处相同证明。

### 12.6 可和性包含关系与双向转化的边界

若 $0<p<q<\infty$、$\sum|a_n|^p<\infty$，则 $a_n\to0$，尾部 $|a_n|\le1$ 时 $|a_n|^q\le|a_n|^p$，故 $\ell^p\subset\ell^q$。反向不成立：取 $a_n=n^{-1/p}$，它不在 $\ell^p$ 而在 $\ell^q$。

若区间长度 $L<\infty$，Hölder给出 $\|f\|_p\le L^{1/p-1/q}\|f\|_q$，故 $L^q\subset L^p$。反向取 $f(x)=x^{-1/q}$ 于 $(0,1)$，其 $p$ 次幂可积而 $q$ 次幂不可积。在整个实轴两向包含通常均不成立：$x^{-1/q}\mathbf1_{(0,1)}\in L^p\setminus L^q$，$x^{-1/p}\mathbf1_{(1,\infty)}\in L^q\setminus L^p$。

有限和不等式可对Riemann和取极限得到连续函数的积分版本，再用可积逼近扩展；无核的积分不等式作用于单位区间阶梯函数可精确回到离散版本。但带 $m+n$、$x+y$ 这类核或带累积平均的形式，阶梯化会改变核，不能仅写“双向转化”而省略比较；§12.3、§12.4已经分别给出精确证明。

## 13 生成函数、积分变换与特殊函数

### 13.1 幂级数与Laplace变换

设 $A(z)=\sum_{n\ge0}a_nz^n$，$\rho=\limsup|a_n|^{1/n}$。由根值判别，$|z|\rho<1$ 时绝对收敛，$|z|\rho>1$ 时项不趋零，故收敛半径 $R=1/\rho$，约定 $1/0=\infty,1/\infty=0$。边界须另判。对 $r<R$ 取 $r<r'<R$，因 $n^k(r/r')^n$ 有界，所有阶导数级数在 $|z|\le r$ 一致收敛，证明幂级数可逐项求导。

在收敛圆内，移位与累积公式由绝对换序得到

$$
\sum_{n\ge0}a_{n+1}z^n=\frac{A(z)-a_0}{z},\qquad
\sum_{n\ge0}S_nz^n=\frac{A(z)}{1-z},\quad S_n=\sum_{k=0}^na_k,\qquad\text{(13.1)}
$$

第二式要求同时 $|z|<1$。第一式在 $z=0$ 取可去延拓。Cauchy乘积对应生成函数相乘已由§9.5证明。

令 $F(s)=\int_0^\infty f(t)e^{-st}dt$，$f$ 局部可积。若在某个复数 $s_0$ 处收敛，则 $H(T)=\int_0^Tf(t)e^{-s_0t}dt$ 有界。对 $\Re(s-s_0)>0$ 分部积分得

$$
F(s)=(s-s_0)\int_0^\infty H(t)e^{-(s-s_0)t}dt,
$$

右侧绝对收敛，因端点 $H(T)e^{-(s-s_0)T}\to0$。因此存在收敛横坐标 $\sigma_c$：$\Re s>\sigma_c$ 收敛，$\Re s<\sigma_c$ 不收敛；边界单独讨论，$\sigma_c$ 可为扩充实数。绝对收敛横坐标另记 $\sigma_a$，两者不能混淆。上述右半平面中，$H$ 有界且指数具有正衰减，任意 $s$ 导数在内闭子集均可用 $t^ke^{-\delta t}$ 控制，所以 $F$ 在其中全纯。

若 $f\in C^1$ 且 $f,f'$ 均至多指数增长，取 $\Re s$ 足够大，分部积分给出 $\mathcal L(f')=sF-f(0)$。同样用Fubini计算

$$
\mathcal L\left(\int_0^tf(u)du\right)(s)=F(s)/s,
\qquad \mathcal L(f*g)=F(s)G(s),\qquad\text{(13.2)}
$$

前式还要求 $\Re s>0$，后式要求指数加权后的 $f,g$ 绝对可积。边界项和绝对可积条件是这些运算成立的实际依据。

令 $z=e^{-s}$，$A(e^{-s})=\sum a_ne^{-ns}$，它是离散原子测度 $\sum a_n\delta_n$ 的Laplace变换。Dirichlet级数 $\sum a_nn^{-s}=\sum a_ne^{-s\log n}$ 则对应在 $\log n$ 处放置原子。Mellin变换 $M_f(s)=\int_0^\infty f(x)x^{s-1}dx$ 经 $x=e^t$ 化为 $\int_{\mathbb R}f(e^t)e^{st}dt$，是双侧Laplace型积分；0与无穷远分别限制两条边界，通常产生收敛带而非单个半平面。

### 13.2 Abel边界定理与Tauber逆定理

若 $\sum a_n=S$，记 $S_n=\sum_{k=0}^na_k$，(13.1)给出 $A(r)=(1-r)\sum_{n\ge0}S_nr^n$（$0<r<1$）。权重非负、总和为1，任意有限前段的权重趋零；§6.4核平均的离散证明给出 $A(r)\to S$。这证明Abel第二定理，无需绝对收敛。

若 $\int_0^\infty f=S$，记 $H(t)=\int_0^tf\to S$，分部积分得 $F(s)=s\int_0^\infty H(t)e^{-st}dt$（实 $s>0$）。核 $se^{-st}$ 满足质量1且有限区间质量趋零，故 $F(s)\to S$（$s\downarrow0$）。

**Tauber定理：** 若 $a_n=o(1/n)$ 且 $A(r)\to S$（$r\uparrow1$），则 $\sum a_n=S$。

**证明：** 令 $r=e^{-1/N}$。对固定 $K$ 后的项有 $|a_n|\le\varepsilon/n$，于是

$$
\begin{aligned}
|S_N-A(e^{-1/N})|
\le{}&\sum_{n\le K}|a_n|(1-e^{-n/N})\\
&+\varepsilon\sum_{K<n\le N}\frac{1-e^{-n/N}}n
+\varepsilon\sum_{n>N}\frac{e^{-n/N}}n.
\end{aligned}
$$

前部趋零，中部用 $1-e^{-u}\le u$ 得不超过 $\varepsilon$，尾部用单调积分比较得不超过 $\varepsilon\int_1^\infty e^{-t}/t\,dt$。故差趋零，结论成立。$a_0$ 不影响差的估计。

连续版本设 $f$ 局部可积、$f(t)=o(1/t)$、$F(s)\to S$（$s\downarrow0$）。令 $s=1/T$，把 $\int_0^Tf-F(1/T)$ 在 $[0,K],[K,T],[T,\infty)$ 分开，依次由控制收敛、$\varepsilon\int_K^T(1-e^{-t/T})/t\,dt\le\varepsilon$、$\varepsilon\int_1^\infty e^{-u}/u\,du$ 控制，得 $\int_0^Tf\to S$。这说明逆定理需要衰减假设，不能把Abel定理无条件反向使用。

### 13.3 Fourier系数、核与Riemann–Lebesgue引理

对 $2\pi$ 周期的 $L^1$ 函数，定义 $c_n=(2\pi)^{-1}\int_{-\pi}^\pi f(x)e^{-inx}dx$。直接积分得到 $(2\pi)^{-1}\int_{-\pi}^\pi e^{i(n-m)x}dx=\delta_{mn}$。有限部分和是

$$
S_Nf(x)=\frac1{2\pi}\int_{-\pi}^{\pi}f(x-t)D_N(t)dt,\qquad
D_N(t)=\sum_{|n|\le N}e^{int}=\frac{\sin((N+1/2)t)}{\sin(t/2)}.\qquad\text{(13.3)}
$$

核公式来自有限几何和；原框架写的是此核的一半，因此对应积分前系数应为 $1/\pi$，不可混用两套归一化。

Riemann–Lebesgue引理：若 $f\in L^1(\mathbb R)$，则 $\widehat f(\omega)=\int f(x)e^{-i\omega x}dx\to0$（$|\omega|\to\infty$）。对区间指示函数，积分为 $(e^{-i\omega a}-e^{-i\omega b})/(i\omega)$，趋零；有限阶梯函数亦然。由§16.4的 $L^1$ 逼近，给定 $\varepsilon$ 可取阶梯函数 $g$ 使 $\|f-g\|_1<\varepsilon$，且 $|\widehat f-\widehat g|\le\varepsilon$，故结论成立。周期情形将函数限制在一周期并延拓为零，便得 $c_n\to0$，从而实系数 $a_n,b_n\to0$。

Fejér平均 $\sigma_N=(S_0+\cdots+S_N)/(N+1)$ 的核为

$$
K_N(t)=\frac1{N+1}\left(\frac{\sin((N+1)t/2)}{\sin(t/2)}\right)^2\ge0.\qquad\text{(13.4)}
$$

证明可把平方展开：$|\sum_{k=0}^Ne^{ikt}|^2/(N+1)$ 中频率 $j$ 的系数为 $1-|j|/(N+1)$，恰是平均核的系数。常数项为1，故 $(2\pi)^{-1}\int K_N=1$；对 $\delta\le|t|\le\pi$，$K_N(t)\le[(N+1)\sin^2(\delta/2)]^{-1}$，故远离零的质量趋零。连续周期 $f$ 一致连续，将 $\sigma_Nf-f$ 在 $|t|<\delta$ 与外部分开，得到一致收敛。

若 $f$ 在 $x$ 两侧有极限且局部各侧 $C^1$，则普通 $S_Nf(x)$ 趋于 $[f(x+)+f(x-)]/2$。证明将(13.3)合并正负 $t$，减去常数平均；分子 $f(x+t)+f(x-t)-f(x+)-f(x-)=O(t)$，除以 $\sin(t/2)$ 后在零附近有界，其余部分可积。乘 $\sin((N+1/2)t)$ 的积分由Riemann–Lebesgue趋零，而常数函数的部分和保持不变。一般 $L^1$ 函数不能无条件写逐点Fourier展开。

### 13.4 Fourier反演、Fejér积分核与Plancherel

固定角频率约定

$$
\widehat f(\omega)=\int_{\mathbb R}f(x)e^{-i\omega x}dx.
$$

高斯积分由平方后极坐标计算得 $\int e^{-x^2}dx=\sqrt\pi$。对 $g(x)=e^{-ax^2}$，在积分号下求导并分部积分得到 $\widehat g'(\omega)=-\omega\widehat g(\omega)/(2a)$；结合 $\widehat g(0)=\sqrt{\pi/a}$，解得 $\widehat g(\omega)=\sqrt{\pi/a}e^{-\omega^2/(4a)}$。

若 $f\in L^1$，Fubini与高斯公式给出

$$
\frac1{2\pi}\int_{\mathbb R}e^{-\varepsilon\omega^2}\widehat f(\omega)e^{i\omega x}d\omega
=(f*G_\varepsilon)(x),\quad
G_\varepsilon(t)=\frac{e^{-t^2/(4\varepsilon)}}{\sqrt{4\pi\varepsilon}}.\qquad\text{(13.5)}
$$

$G_\varepsilon\ge0$、积分为1、远离零的质量趋零。在 $f$ 的连续点 $x$，近处用连续性控制 $|f(x-t)-f(x)|$，远处用 $\sup_{|t|\ge\delta}G_\varepsilon(t)\|f\|_1$ 及核尾质量控制，故右侧趋于 $f(x)$。若再有 $\widehat f\in L^1$，左侧可用控制收敛去掉因子，得到反演公式

$$
f(x)=\frac1{2\pi}\int_{\mathbb R}\widehat f(\omega)e^{i\omega x}d\omega\quad\text{(连续点)}.\qquad\text{(13.6)}
$$

截断频率 $[-R,R]$ 后直接用Fubini，内层指数积分给出Dirichlet积分核 $\sin(Rt)/(\pi t)$。对连续截断参数取Cesàro平均，则得到非负Fejér积分核

$$
\Phi_R(t)=\frac{1-\cos(Rt)}{\pi R t^2},\qquad
\frac1R\int_0^R\frac{\sin(ut)}{\pi t}du=\Phi_R(t).
$$

其积分为1：在正半轴分部积分，$\int_0^\infty(1-\cos Rt)/t^2dt=R\int_0^\infty\sin Rt/t\,dt=R\pi/2$，端点项为零；再乘 $2/(\pi R)$。对 $|t|\ge\delta$ 的尾质量为 $O(1/(R\delta))$。因此它也是逼近恒等核，连续点的Fejér反演按(13.5)同一近远分拆成立。一般 $L^1$ 情形，高斯或Fejér方式的结论与普通无因子反演须区分。

令 $\mathcal S$ 为所有导数乘任意多项式仍有界的光滑函数（Schwartz函数）。在积分下求导及反复分部积分证明 $\widehat f\in\mathcal S$：$\partial_\omega^k\widehat f=\widehat{(-ix)^kf}$，再乘 $\omega^m$ 转为对 $x$ 求 $m$ 次导数的可积函数变换。于是(13.6)适用；将其与 $\overline{g(x)}$ 相乘并积分，Fubini给出

$$
\int f\overline g=\frac1{2\pi}\int\widehat f\,\overline{\widehat g},\qquad
\|\widehat f\|_2^2=2\pi\|f\|_2^2.\qquad\text{(13.7)}
$$

$\mathcal S$ 在 $L^2$ 中稠密且 $L^2$ 完备（§16.4）。对任意 $f\in L^2$ 取 $f_j\in\mathcal S$ 逼近，(13.7)使 $\widehat f_j$ 是Cauchy列，其极限只依赖 $f$，定义 $L^2$ Fourier变换并延续同一范数等式。这就是Plancherel定理。其像闭且包含稠密的 $\mathcal S$（由反演），所以满射；$L^1\cap L^2$ 上同时作两种范数逼近，$L^1$ 保证变换一致收敛，故此延拓与原积分变换几乎处处一致。一般 $L^2$ 的反演应按 $L^2$ 极限理解。

### 13.5 Bessel、Parseval与平方倒数和

在周期 $L^2$ 内积 $\langle f,g\rangle=(2\pi)^{-1}\int f\overline g$ 下，$e^{inx}$ 正交归一。展开平方并用正交性，得

$$
\|f-S_Nf\|_2^2=\|f\|_2^2-\sum_{|n|\le N}|c_n|^2\ge0,
$$

这里范数也按周期平均归一化。这证明Bessel不等式。

对一般周期 $L^2$ 函数，平移在 $L^2$ 范数连续，见§16.4。由Fejér核的概率质量与Schwarz，

$$
\|\sigma_Nf-f\|_2^2
\le\frac1{2\pi}\int_{-\pi}^\pi K_N(t)\|f(\cdot-t)-f\|_2^2dt\to0.
$$

趋零来自近零处平移连续性、远处核质量趋零，且被积范数平方不超过 $4\|f\|_2^2$。$S_N$ 是到频率不超过 $N$ 的空间的正交投影，因误差与该空间正交，勾股恒等式给出 $\|f-S_Nf\|_2\le\|f-\sigma_Nf\|_2$。故 $S_Nf\to f$ 于 $L^2$，上式取极限得到Parseval：

$$
\frac1{2\pi}\int_{-\pi}^\pi|f|^2=\sum_{n\in\mathbb Z}|c_n|^2.
$$

实函数记 $a_0=\pi^{-1}\int f$、$a_n=\pi^{-1}\int f\cos nx$、$b_n=\pi^{-1}\int f\sin nx$，则 $c_0=a_0/2,c_{\pm n}=(a_n\mp ib_n)/2$，因而

$$
\frac1\pi\int_{-\pi}^\pi f^2=\frac{a_0^2}{2}+\sum_{n\ge1}(a_n^2+b_n^2).\qquad\text{(13.8)}
$$

取 $f(x)=x$ 于 $(-\pi,\pi)$，奇性给出 $a_n=0$，分部积分得 $b_n=2(-1)^{n+1}/n$。代入(13.8)，左侧为 $2\pi^2/3$，右侧为 $4\sum1/n^2$，故 $\sum1/n^2=\pi^2/6$。这为§8与§11的积分恒等式提供独立的常数计算。

### 13.6 周期趋无穷与Poisson求和

对 $f\in C_c^\infty(\mathbb R)$，取足够大的 $T$ 使支撑落在 $(-T/2,T/2)$，作周期 $T$ 的延拓。其Fourier系数为 $c_k^{(T)}=\widehat f(2\pi k/T)/T$，多次分部积分保证级数绝对收敛；由Fejér收敛定理它等于原函数。因此

$$
f(x)=\frac1{2\pi}\sum_{k\in\mathbb Z}\widehat f(k\Delta\omega)
 e^{ik\Delta\omega x}\Delta\omega,\qquad \Delta\omega=2\pi/T.
$$

当 $T\to\infty$，固定频率区间上右侧为普通Riemann和；由于 $\widehat f$ 快速衰减，外部和用 $C\sum_{|k\Delta\omega|>R}\Delta\omega/(1+|k\Delta\omega|^2)=O(1/R)$ 统一控制，故趋于反演积分。这是“Fourier积分是大周期级数的极限”的一个有完整条件的版本。

Poisson求和取 $f\in\mathcal S$，令 $P(x)=\sum_{n\in\mathbb Z}f(x+n)$。各阶导数级数在 $[0,1]$ 一致收敛，所以 $P$ 光滑且1周期。其第 $k$ 个系数由绝对换序与 $t=x+n$ 得

$$
\int_0^1P(x)e^{-2\pi ikx}dx
=\int_{\mathbb R}f(t)e^{-2\pi ikt}dt=\widehat f(2\pi k).
$$

该系数快速衰减，Fourier级数绝对一致收敛；其Fejér平均趋于 $P$，而一致收敛级数的Fejér平均与原和相同，故在 $x=0$ 得

$$
\sum_{n\in\mathbb Z}f(n)=\sum_{k\in\mathbb Z}\widehat f(2\pi k).\qquad\text{(13.9)}
$$

若定义归一化频率变换 $\mathcal F_2f(\xi)=\int f(x)e^{-2\pi ix\xi}dx$，右边才写成 $\sum_k\mathcal F_2f(k)$。原框架§8.5与§13.2采用不同约定，必须作此区分。

### 13.7 Gamma、Beta、Gauss极限与Stirling

对 $s>0$，$\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}dt$ 收敛性已在§10.3证明。分部积分的端点项 $t^se^{-t}$ 在0与无穷远均为零，故 $\Gamma(s+1)=s\Gamma(s)$；又 $\Gamma(1)=1$，因此 $\Gamma(n+1)=n!$。

设 $p,q>0$，定义 $B(p,q)=\int_0^1u^{p-1}(1-u)^{q-1}du$，两端幂指数均大于 $-1$，故可积。将 $\Gamma(p)\Gamma(q)$ 写成非负二重积分，先固定 $x$ 令 $r=x+y$，再交换为 $r>0,0<x<r$ 的积分次序，最后在内层令 $x=ru$、$dx=r\,du$。这以两次一维换元直接证明所需Jacobi因子为 $r$，从而

$$
\Gamma(p)\Gamma(q)=\Gamma(p+q)B(p,q),\quad
B(m,n)=\frac{(m-1)!(n-1)!}{(m+n-1)!}.\qquad\text{(13.10)}
$$

反复分部积分亦给出 $B(s,n+1)=n!/[s(s+1)\cdots(s+n)]$。令 $u=nt$，则

$$
n^sB(s,n+1)=\int_0^nu^{s-1}(1-u/n)^n du\longrightarrow\Gamma(s),
$$

因为 $0\le(1-u/n)^n\mathbf1_{u<n}\le e^{-u}$ 且逐点趋 $e^{-u}$，控制收敛适用。这证明Gauss极限公式。

对实 $s>1$，$1/(e^x-1)=\sum_{n\ge1}e^{-nx}$ 非负展开后积分，换元 $u=nx$ 得

$$
\int_0^\infty\frac{x^{s-1}}{e^x-1}dx
=\sum_{n\ge1}n^{-s}\Gamma(s)=\Gamma(s)\zeta(s).\qquad\text{(13.11)}
$$

复数 $\Re s>1$ 时由实部指数对应的绝对可积控制，同样成立。近零被积量约为 $x^{s-2}$，所以 $\Re s>1$ 的条件具有实际意义。

最后独立求Stirling常数。令 $x\to+\infty$ 为实数，在 $\Gamma(x+1)$ 中取 $t=x(1+v)$，再令 $y=\sqrt x\,v$，得到

$$
\Gamma(x+1)=x^{x+1/2}e^{-x}
\int_{-\sqrt x}^\infty
\exp\{x[\log(1+y/\sqrt x)-y/\sqrt x]\}\,dy.\qquad\text{(13.12)}
$$

固定 $y$ 时指数趋 $-y^2/2$。在 $|v|\le1/2$，由二阶导数 $-1/(1+v)^2$ 的上界，存在 $c>0$ 使 $\log(1+v)-v\le-cv^2$，故中部被 $e^{-cy^2}$ 控制。在 $-1<v\le-1/2$，指数括号不超过固定负数，尾积分为 $O(\sqrt x e^{-cx})$。在 $v\ge1/2$，函数 $[v-\log(1+v)]/v$ 有正下界，故右尾至多 $\sqrt x\int_{1/2}^\infty e^{-cxv}dv\to0$。控制收敛使(13.12)的积分趋 $\sqrt{2\pi}$，因此

$$
\Gamma(x+1)\sim\sqrt{2\pi x}(x/e)^x.
$$

整数取样与§8.3的Euler–Maclaurin展开比较，得到

$$
\log n!=\left(n+\frac12\right)\log n-n+\frac12\log(2\pi)
+\frac1{12n}+O(n^{-3}).\qquad\text{(13.13)}
$$

这里用积分渐近确定常数，用Euler–Maclaurin控制余项，两部分各自有证明。

### 13.8 整数采样唯一性：一个Carlson型定理

**定理13.1** 若整函数 $F$ 满足 $|F(z)|\le Ce^{\tau|z|}$，其中 $0\le\tau<\pi$，且 $F(n)=0$ 对所有非负整数成立，则 $F\equiv0$。因此在这一增长类内，非负整数采样唯一确定整函数。这里给出足够覆盖“需要增长条件”的版本，不把它误称为任意光滑函数的插值唯一性。

**证明：** 假设 $F$ 不恒零。其零点孤立，故可选 $0<\delta<1$ 使直线 $\Re z=\delta$ 上无零点，且 $F(\delta)\ne0$。设 $G(z)=F(z+\delta)/F(\delta)$，则 $G(0)=1$，$|G(z)|\le C'e^{\tau|z|}$，并在 $z=n-\delta$（$n\ge1$）为零。

先证明所需半圆Carleman公式。记 $u(z)=\log|G(z)|$，在右半圆 $\Re z>0,|z|<R$ 上，取调和权函数 $w(z)=\Re(1/z-z/R^2)$。避开零点和0的小圆后，对 $u,w$ 使用Green恒等式；该恒等式由两个方向的分部积分相减得到。每个重数 $m$ 的零点附近有 $u=m\log|z-z_j|+$ 调和函数，小圆边界的通量极限为 $2\pi m w(z_j)$。外半圆上 $w=0,\partial_\nu w=-2\cos\theta/R^2$；虚轴上 $w=0,\partial_\nu w=-(1/y^2-1/R^2)$。零点0已不存在，且 $u(0)=0$，展开 $u(z)=\Re(G'(0)z)+O(|z|^2)$，内半圆贡献趋于 $-\pi\Re G'(0)$。除以 $2\pi$ 得

$$
\begin{aligned}
\sum_{\substack{\Re z_j>0\\|z_j|<R}}
\Re\left(\frac1{z_j}-\frac{z_j}{R^2}\right)
={}&\frac1{\pi R}\int_{-\pi/2}^{\pi/2}u(Re^{i\theta})\cos\theta\,d\theta\\
&+\frac1{2\pi}\int_{-R}^{R}\left(\frac1{y^2}-\frac1{R^2}\right)u(iy)dy
-\frac12\Re G'(0).
\end{aligned}\qquad\text{(13.14)}
$$

零点按重数计，$R$ 选为不经过零点的半径；虚轴在0处的积分按对称极限，因 $u(iy)+u(-iy)=O(y^2)$，该极限存在。

右侧半圆项由 $u\le\log C'+\tau R$ 得 $O(1)$。虚轴 $|y|\ge1$ 的项由 $u(iy)\le\log C'+\tau|y|$ 得至多 $(\tau/\pi)\log R+O(1)$，$|y|\le1$ 部分有界。左侧每个零点贡献非负，因为 $\Re z_j>0$ 且 $|z_j|<R$；仅取正实零点 $n-\delta$ 就得到

$$
\sum_{n-\delta<R}\left(\frac1{n-\delta}-\frac{n-\delta}{R^2}\right)
=\log R+O(1).
$$

于是 $\log R\le(\tau/\pi)\log R+O(1)$，与 $\tau<\pi$ 矛盾。证毕。边界 $\tau=\pi$ 不能纳入，因为 $\sin\pi z$ 正是反例。此定理保证增长类内唯一性，但不单独保证某个Newton级数收敛；级数表示还须另验收敛与相同增长条件。

## 14 差分方程与微分方程

### 14.1 一阶线性方程与常数变易

$a_{n+1}=qa_n$ 归纳得 $a_n=a_0q^n$。$y'=\lambda y$ 乘 $e^{-\lambda x}$ 后导数为零，故 $y=y_0e^{\lambda x}$。对变系数递推，反复代入得到

$$
a_n=a_0\prod_{j=0}^{n-1}q_j
+\sum_{k=0}^{n-1}r_k\prod_{j=k+1}^{n-1}q_j.\qquad\text{(14.1)}
$$

空乘积取1；公式也允许某些 $q_j=0$。若所有 $q_j\ne0$，令 $Q_n=\prod_{j<n}q_j$，除以 $Q_{n+1}$ 得 $a_{n+1}/Q_{n+1}-a_n/Q_n=r_n/Q_{n+1}$，这就是累乘因子方法。

对 $y'=p(x)y+r(x)$，设 $P(x)=\int_{x_0}^xp(t)dt$，则

$$
(e^{-P}y)'=e^{-P}r,\qquad
 y(x)=e^{P(x)}\left[y(x_0)+\int_{x_0}^xe^{-P(t)}r(t)dt\right].\qquad\text{(14.2)}
$$

因此用来乘方程的积分因子是 $e^{-P}$；$e^P$ 是齐次解因子，二者的符号作用不同。

### 14.2 常系数高阶方程与特征根

设 $P(z)$ 为 $k$ 次首一多项式。递推写作 $P(E)a=0$，微分方程写作 $P(D)y=0$。若 $r\ne0$ 是 $P$ 的 $m$ 重根，则 $n^jr^n$（$0\le j<m$）是递推解，因为

$$
(E-r)(r^np(n))=r^{n+1}\Delta p(n),
$$

每作用一次降低多项式次数。若 $\lambda$ 是 $m$ 重根，则 $x^je^{\lambda x}$ 为微分方程解，因为 $(D-\lambda)(e^{\lambda x}p)=e^{\lambda x}p'$。

这些解线性无关。对某一特征根，用所有其他根的因子组成的算子作用于假设的线性关系；其余根对应项全部消失，在所保留根的多项式空间上，每个其他根因子是非零常数乘恒等算子加降次算子，因而是可逆的三角算子。所保留根的多项式只得恒零。逐根进行，所有系数均零。递推由前 $k$ 项唯一决定，解空间维数为 $k$；微分方程由初始的 $k$ 个导数唯一决定，局部存在唯一性见§14.4，将其改写为 $k$ 维一阶系统即可。因此共 $k$ 个独立解组成全部解。

若递推特征根为0，不能写 $n^j0^n$。写 $P(z)=z^mQ(z)$、$Q(0)\ne0$，多项式互素使存在 $U,V$ 满足 $U(z)z^m+V(z)Q(z)=1$。代入 $E$ 可将任意解分解为 $\ker E^m$ 与 $\ker Q(E)$ 的直和；前者就是只可能在前 $m$ 项非零的数列，其基是这些位置的单位脉冲。这补齐原框架略去的零根情形。

实系数方程的共轭根配对，取实虚部得 $\rho^n\cos n\theta,\rho^n\sin n\theta$ 或 $e^{\alpha x}\cos\beta x,e^{\alpha x}\sin\beta x$，重根再乘相应次数的多项式。线性算子满足 $L(u-v)=Lu-Lv$，故非齐次解集等于任一特解加齐次解空间。

待定系数法的根据是算子保持“指数乘多项式”这一有限维空间：强迫项为 $r^nQ_d(n)$（$r\ne0$）或 $e^{\lambda x}Q_d(x)$ 时，若特征根重数为 $m$，在多项式因子中乘 $n^m$ 或 $x^m$ 后，$m$ 次差分或微分把次数降低 $m$，其余因子在多项式空间可逆；按次数从高到低解三角线性方程便得到特解。下降阶乘基使差分降次更加直接。

Fibonacci初值 $a_0=0,a_1=1$，特征根 $\phi=(1+\sqrt5)/2,\psi=(1-\sqrt5)/2$，代初值即得 $a_n=(\phi^n-\psi^n)/\sqrt5$。生成函数法把递推乘 $z^{n+2}$ 相加，得 $A(z)=z/(1-z-z^2)$，部分分式展开得到同式。对应微分方程 $y''=y'+y$ 的通解是 $C_1e^{\phi x}+C_2e^{\psi x}$。Laplace法利用 $\mathcal L(y'')=s^2Y-sy(0)-y'(0)$，将方程化为代数式再部分分式，即得到同一解；该二阶变换由(13.2)连续应用两次证明。

### 14.3 不动点、单调性与稳定性

若 $f(x_*)=x_*$ 且 $f\in C^1$、$|f'(x_*)|<1$，选邻域使 $|f'|\le q<1$。中值定理给出 $|f(x)-x_*|\le q|x-x_*|$，所以邻域不变，归纳得 $|x_n-x_*|\le q^n|x_0-x_*|\to0$。这证明局部渐近稳定。

一般压缩映射原理设完备度量空间 $X$ 上 $d(Tx,Ty)\le qd(x,y)$、$q<1$。迭代相邻距离至多 $q^nd(x_1,x_0)$，尾距由几何和控制，故为Cauchy列，趋于 $x_*$；压缩条件使 $T$ 连续，故 $Tx_*=x_*$。若另有不动点，二者距离不超过自身的 $q$ 倍，只能相同。

若 $f$ 单增且映射区间到自身，则初始 $x_1\ge x_0$ 时归纳得全列单增，反之单减。若 $f$ 单减，则 $f\circ f$ 单增，奇偶子列各单调；$f$ 反转次序，所以它们的方向相反（可恒定）。这不自动保证有界或收敛。

自治方程 $y'=g(y)$ 中设 $g\in C^1$、$g(y_*)=0$、$g'(y_*)<0$。在邻域内有 $(y-y_*)g(y)\le-c(y-y_*)^2$，故 $[(y-y_*)^2]'\le-2c(y-y_*)^2$，Grönwall得 $|y(t)-y_*|\le e^{-ct}|y(0)-y_*|$。符号又保证向内指向，不会离开足够小邻域；解可延续，故渐近稳定。

线性离散乘子 $z$ 的 $z^n\to0$ 当且仅当 $|z|<1$；连续 $e^{\lambda t}\to0$ 当且仅当 $\Re\lambda<0$，均直接取模。精确步长 $h>0$ 的采样满足 $z=e^{\lambda h}$，故稳定区对应。显式Euler乘子为 $1+h\lambda$，须另验 $|1+h\lambda|<1$；即使 $\Re\lambda<0$，步长太大也可能数值不稳定。

### 14.4 Picard迭代与Euler法的收敛

设 $g(t,y)$ 在初值附近矩形连续，对 $y$ 一致Lipschitz，常数 $L$，且 $|g|\le M$。取 $T>0$ 使 $LT<1$、$MT$ 不超过矩形的纵向余量。在连续函数空间的闭球上定义

$$
(\mathcal Ty)(t)=y_0+\int_0^tg(s,y(s))ds.
$$

它映入该闭球且 $\|\mathcal Ty-\mathcal Tz\|_\infty\le LT\|y-z\|_\infty$。连续函数空间在一致范数下完备：一致Cauchy列逐点收敛，统一估计使收敛一致，极限连续。因此压缩映射原理给出唯一不动点 $y$，积分基本定理使其满足微分方程；Picard迭代 $y_{n+1}=\mathcal Ty_n$ 一致趋于它。在有限维向量情形取向量范数，证明不变。

对该解存在的一个固定紧时间区间，设 $g$ 还对 $t,y$ 联合Lipschitz。Euler网格为 $t_k=kh$、$y_{k+1}=y_k+hg(t_k,y_k)$。真解满足

$$
y(t_{k+1})=y(t_k)+hg(t_k,y(t_k))+\rho_k,\qquad |\rho_k|\le Ch^2,
$$

因为积分中 $|g(t,y(t))-g(t_k,y(t_k))|\le C'|t-t_k|$，真解由 $|y'|\le M$ 为Lipschitz。误差满足 $e_{k+1}\le(1+Lh)e_k+Ch^2$、$e_0=0$，几何和或离散Grönwall给出 $e_k\le Ch(e^{LT}-1)/L$（$L=0$ 时为 $CT h$）。逐段线性插值再加 $O(h)$ 的段内误差，得到Euler折线一致收敛于解。若只假设连续性可走紧性取子列的Peano存在性路线，但不能无条件声称整列收敛到唯一解；这里已明确采用保证唯一性的条件。

对 $y'=\lambda y$，Euler解为 $y_k=(1+\lambda h)^ky_0$。固定 $t=kh$，利用 $\log(1+\lambda h)=\lambda h+O(h^2)$（实情形足够小时底数为正），得 $(1+\lambda h)^{t/h}\to e^{\lambda t}$；复值在1附近选解析对数亦同。$(1+x/n)^n\to e^x$ 是这一公式的单位时间特例。

### 14.5 一维离散混沌与自治微分方程的差异

对于局部Lipschitz的 $g$，非平衡解不能在有限时间碰到平衡点后继续离开，否则与该平衡常值解违反局部唯一性。故沿任一非平衡解 $g(y(t))$ 符号不变，解严格单调；平衡解恒定。尤其不存在非恒定周期解：周期函数取极值处导数为0，便遇到平衡点，只能是常值解。

离散Logistic映射 $L(x)=4x(1-x)$ 则有非平凡周期轨。例如 $x_\pm=(5\pm\sqrt5)/8$ 直接代入得 $L(x_+)=x_-,L(x_-)=x_+$。更强地，令 $h(t)=\sin^2(\pi t/2)$，它是 $[0,1]$ 上的递增同胚。对帐篷映射 $T(t)=2t$（$t\le1/2$）、$T(t)=2-2t$（$t\ge1/2$），三角恒等式给出 $L\circ h=h\circ T$。

用明确的拓扑意义证明混沌：$T^n$ 在每个长度 $2^{-n}$ 的基本区间上仿射映满 $[0,1]$，斜率为 $\pm2^n$，归纳可证。任意非空开区间包含一个这样的更细基本区间，故某次像就是全区间，之后仍如此，这给出拓扑混合。每个基本区间的逆分支把 $[0,1]$ 压缩到自身，压缩常数 $2^{-n}$，其不动点满足 $T^nt=t$，所以周期点稠密。任意点的任意邻域经某次迭代映满全区间，可选另一点使两像相距至少 $1/2$，因此对初值有敏感依赖。共轭同胚保持混合与周期稠密；在紧区间上同胚及逆映射一致连续，还把固定正距离分离转为另一固定正距离分离，故敏感性也转移给 $L$。这给出了“离散一维可混沌”的具体证明，而非只展示数值图。

## 15 类比失效：逐项核对

本节将原框架的差异逐条归结到已经证明的命题，避免重复证明，也明确哪些原表述需要缩小范围。

| 原框架的比较 | 已证明的准确结论与位置 |
| --- | --- |
| 介值性与离散中值 | 连续函数的介值定理见§3.3；离散增量 $0,2$ 的平均1可以不取到，见§6.1。 |
| Fermat与离散极值 | 可导内点极值导数为0；离散极小仅有相邻差 $\le0,\ge0$，$\lvert n\rvert$ 给出非零差分反例，见§4.5。 |
| 乘法、链式与反函数 | 差分含移位，平方复合含额外二次项；交换采样点只有割线倒数，见§4.1、§4.5。 |
| 收敛必要条件 | 级数项趋零；反常积分的被积函数未必趋零，$\sin x^2$ 与非负尖峰均有完整验证，见§9.4。 |
| 可和性包含关系 | $\ell^p\subset\ell^q$、有限测度区间 $L^q\subset L^p$；实轴上两向均无一般包含，见§12.6。 |
| 瑕点与局部奇性 | 有限实数项的级数只有无穷尾部问题；函数可在有限端点无界，$x^{-p}$ 的阈值见§9.1。若某个数列项本身未定义，首先就不构成该实数项级数。 |
| 比值、根值与重排 | 标准形式针对级数，但积分分块可转用判别；无序积分也对应绝对可积，见§9.2、§9.5、§11.3。 |
| 极限过程 | 普通单下标数列的自然方向是 $n\to\infty$；函数可沿单侧、双侧与无穷远，归结原则连接二者，见§2.1、§2.3。双向数列等其他指标集须另说明方向。 |
| Newton与Taylor | 整数步有限Newton式为恒等式，截断须余项；Taylor级数未必代表光滑函数，Newton无穷级数也须收敛与唯一性条件，见§7、§13.8。 |
| 多维反常积分 | 矩形截断可以条件收敛；任意无序穷竭的有限极限才等价于绝对可积，而且这一点并不依赖维数，见§11.3。 |
| 一维动力学 | 局部Lipschitz自治微分方程无非恒定周期解；Logistic参数4与帐篷映射共轭并具有混合、周期稠密与敏感性，见§14.5。 |

## 16 统一视角与基础收敛定理

### 16.1 计数测度、Stieltjes与求和

在 $\mathbb N$ 的全部子集上定义计数测度 $\mu(A)=\#A$，有限时为基数、无限时为 $+\infty$。不交并的元素分组计数直接证明可数可加性。非负简单函数 $s=\sum_jc_j\mathbf1_{A_j}$ 的积分按定义为 $\sum_jc_j\mu(A_j)$，再取递增简单函数逼近，得到

$$
\int_{\mathbb N}a\,d\mu=\sum_{n\ge0}a_n\quad(a_n\ge0).
$$

有符号的有限Lebesgue积分要求正负部分积分均有限，因而等价于级数绝对收敛。条件收敛级数是有序部分和极限，不能不加说明地称为有限Lebesgue积分。

Stieltjes的阶梯与光滑版本已在§5.4从Riemann–Stieltjes和证明。若以递增右连续函数 $\alpha$ 定义区间测度 $\mu_\alpha((a,b])=\alpha(b)-\alpha(a)$，原子跳跃贡献 $\Delta\alpha(t)f(t)$，$\alpha(x)=x$ 给出长度积分；对连续 $f$，简单函数上下逼近说明其Lebesgue–Stieltjes积分与§5.4的Riemann–Stieltjes积分相同。这从测度的选择解释求和与积分的统一。

### 16.2 单调收敛、Fatou与控制收敛

非负可测函数的积分定义为所有下方非负简单函数积分的上确界。设 $0\le f_n\uparrow f$，由保序性 $\lim\int f_n\le\int f$。取简单函数 $s=\sum_{j=1}^rc_j\mathbf1_{E_j}\le f$，$E_j$ 不交且 $c_j>0$，再固定 $0<\theta<1$。集合 $E_{j,n}=E_j\cap\{f_n\ge\theta c_j\}$ 递增至 $E_j$；可数可加性推出测度的从下连续性（把递增集拆为不交增量）。于是

$$
\lim_n\int f_n\ge\theta\sum_jc_j\lim_n\mu(E_{j,n})
=\theta\int s.
$$

让 $\theta\uparrow1$ 并对所有 $s$ 取上确界，即得单调收敛定理，允许无穷值。

Fatou引理取 $g_n=\inf_{k\ge n}f_k$，则 $g_n\uparrow\liminf f_n$ 且 $\int g_n\le\inf_{k\ge n}\int f_k$。用单调收敛得 $\int\liminf f_n\le\liminf\int f_n$。

控制收敛设 $f_n\to f$ 几乎处处、$|f_n|\le g\in L^1$。先有 $|f|\le g$。将Fatou用于 $2g-|f_n-f|\ge0$，得到

$$
2\int g\le2\int g-\limsup_n\int|f_n-f|,
$$

故 $\int|f_n-f|\to0$，由积分三角不等式即有 $\int f_n\to\int f$。因此同一证明同时覆盖计数测度上的逐项极限与长度测度上的积分极限。

### 16.3 Tonelli与Fubini的测度证明

先在有限测度空间的乘积上证明集合形式。对可测矩形 $A\times B$，截面函数 $x\mapsto\nu((A\times B)_x)=\nu(B)\mathbf1_A(x)$ 可测，且其积分等于乘积测度 $\mu(A)\nu(B)$，反方向也成立。令 $\mathcal D$ 是满足“两种截面函数可测且两种迭代测度均等于乘积测度”的集合类。它包含全空间；对集合差 $E\setminus F$（$F\subset E$）利用有限测度相减封闭；对递增并利用上一节单调收敛封闭。因此它是Dynkin类，且包含矩形这个对有限交封闭的类。

所用的 $\pi$–$\lambda$ 原理可如下证明：令 $\mathcal L$ 为包含矩形类的最小Dynkin类。先固定一个矩形 $A$，考察满足 $A\cap B\in\mathcal L$ 的 $B$，用差与不交并验证它是Dynkin类，因此包含 $\mathcal L$；再固定 $B\in\mathcal L$ 重复一次，得 $\mathcal L$ 对有限交封闭。Dynkin类加有限交封闭便对补集、有限并、可数不交并封闭，再把可数并拆为不交增量，故是 $\sigma$ 代数。于是 $\mathcal D$ 包含乘积 $\sigma$ 代数。

对非负简单函数作线性组合得到Tonelli公式；任意非负可测 $f$ 有简单函数 $s_n\uparrow f$（按 $2^{-n}$ 分级并截于 $n$），对两层积分用单调收敛得

$$
\int f\,d(\mu\times\nu)
=\int\left(\int f(x,y)d\nu(y)\right)d\mu(x)
=\int\left(\int f(x,y)d\mu(x)\right)d\nu(y).\qquad\text{(16.1)}
$$

$\sigma$ 有限空间用递增的有限测度矩形穷竭，再次单调收敛即可。若 $\int|f|<\infty$，(16.1)应用于 $|f|$ 说明几乎每个截面绝对可积，对正负部分分别应用并相减得到Fubini。复值拆实虚部。Lebesgue完成的乘积空间中，零测集的截面由对其可测零测上包应用Tonelli而几乎处处零，因此完成不改变公式。计数测度版本就是§11.2的换序定理。

### 16.4 逼近、平移连续性与L2完备性

为避免Fourier证明暗用密度结论，这里给出所需细节。对 $f\in L^p(\mathbb R)$、$1\le p<\infty$，先截断到 $[-R,R]$ 并截断函数高度，绝对尾积分与控制收敛使 $L^p$ 误差趋零；再将值域按间距 $\eta$ 量化，得有限可测简单函数，误差至多 $\eta(2R)^{1/p}$。

有限测度可测集可用有限区间并在测度上逼近：Lebesgue测度的外测度定义给出可数开区间覆盖，其总长度小于 $m(E)+\varepsilon$，故开并集 $O$ 满足 $m(O\setminus E)<\varepsilon$。有限测度开集是可数不交开区间并（每个连通分支含一个不同有理数），取有限多个分支使遗漏总长度小于 $\varepsilon$，得到有限区间并 $J$ 满足 $m(E\triangle J)<2\varepsilon$。因此 $\|\mathbf1_E-\mathbf1_J\|_p^p=m(E\triangle J)$，阶梯函数在 $L^p$ 稠密。

区间指示函数平移 $h$ 后只在总长度至多 $2|h|$ 的集合上改变，故平移在 $L^p$ 范数连续；有限阶梯函数同理。对一般 $f$，用阶梯函数 $g$ 逼近，再用平移保持范数和三角不等式，得 $\|f(\cdot-h)-f\|_p\le2\|f-g\|_p+\|g(\cdot-h)-g\|_p\to0$。周期版本把区间端点按圆周识别，证明相同。

取非负光滑紧支撑函数 $\rho$、$\int\rho=1$（可把§7.3的平坦函数拼为 $e^{-1/(1-x^2)}\mathbf1_{|x|<1}$ 后归一化），令 $\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon)$。对紧支撑阶梯函数 $g$，$g*\rho_\varepsilon\in C_c^\infty\subset\mathcal S$，而Hölder/Jensen和Fubini给出

$$
\|g*\rho_\varepsilon-g\|_p^p
\le\int\rho_\varepsilon(t)\|g(\cdot-t)-g\|_p^pdt\to0.
$$

所以Schwartz函数在 $L^p$ 稠密；对 $L^1\cap L^2$ 的函数，上述截断、量化、集合逼近、平滑可同时控制两个范数。

最后若 $f_n$ 为 $L^2$ Cauchy列，选子列使 $\|f_{n_{j+1}}-f_{n_j}\|_2\le2^{-j}$。有限和的Minkowski与单调收敛给出 $\|\sum_j|f_{n_{j+1}}-f_{n_j}|\|_2\le\sum_j2^{-j}<\infty$，故级数几乎处处绝对收敛，得到极限 $f$，且 $\|f-f_{n_j}\|_2\le\sum_{k\ge j}2^{-k}\to0$。全列由Cauchy性也趋于 $f$，证明完备性。

### 16.5 时标导数：离散点与稠密点必须分开

时标是非空闭集 $\mathbb T\subset\mathbb R$。定义前跳 $\sigma(t)=\inf\{s\in\mathbb T:s>t\}$（无后继点时采用 $\sigma(t)=t$ 的端点约定），粒度 $\mu(t)=\sigma(t)-t$。删去可能存在的左孤立最大点，得到导数的常用定义域 $\mathbb T^\kappa$。

称 $f^\Delta(t)=A$，若对任意 $\varepsilon>0$，存在 $t$ 的时标邻域，使其中每个 $s$ 都满足

$$
|f(\sigma(t))-f(s)-A(\sigma(t)-s)|\le\varepsilon|\sigma(t)-s|.\qquad\text{(16.2)}
$$

若 $\mu(t)>0$ 且 $f$ 在 $t$ 连续，取 $s=t$ 强制得到 $A=[f(\sigma(t))-f(t)]/\mu(t)$；反向把此值代入，分子变成 $f(t)-f(s)+A(s-t)$，连续性使其趋零，而分母趋正数 $\mu(t)$，故满足定义。若 $\mu(t)=0$，(16.2)正是沿 $\mathbb T$ 的通常差商极限。

因此 $\mathbb T=\mathbb Z$ 时 $f^\Delta(n)=f(n+1)-f(n)$，$\mathbb T=\mathbb R$ 时 $f^\Delta=f'$。原文只写差商除以 $\mu(t)$ 的式子不能直接代入连续时标，因为此时 $\mu=0$；需要上述稠密点定义。对 $h\mathbb Z$ 得 $f^\Delta(t)=[f(t+h)-f(t)]/h$，明确显示离散步长。

### 16.6 q微积分与有限差分视角

对 $q>0,q\ne1,x\ne0$，Jackson导数定义为

$$
D_qf(x)=\frac{f(qx)-f(x)}{(q-1)x}.
$$

若 $f$ 在 $x$ 可导，令 $h=(q-1)x\to0$，即得 $D_qf(x)\to f'(x)$。对正整数 $m$，几何和给出 $D_qx^m=(1+q+\cdots+q^{m-1})x^{m-1}$，系数在 $q\to1$ 时趋 $m$。直接展开得乘积式 $D_q(fg)=f(qx)D_qg+g(x)D_qf$，与§4.1含移位的法则相同。在时标 $\{q^n:n\in\mathbb Z\}\cup\{0\}$、$q>1$ 的正点，$\sigma(t)=qt$、$\mu(t)=(q-1)t$，故两种导数一致；在0处仍须用稠密点极限。

有限差分学与“具体数学”是这些代数结构的研究视角：移位、下降阶乘、二项反演、求和分部与生成函数在§4、§5、§7、§13已经逐一推导。原文中的Boole、Nörlund及Graham–Knuth–Patashnik是书目或学术传统的提示，本身不是待证明的定理，不能用作者姓名代替前文的论证。

## 附录 原框架覆盖与校订索引

| 原PDF位置 | 本讲义对应证明 | 关键校订或条件 |
| --- | --- | --- |
| §1 总览词典 | §1及§4—§14 | “对应”分为精确恒等式、极限关系与有条件类比。 |
| §2 极限及桥梁差异 | §2、§6.4—§6.5 | 保留所有极限性质；增长阶要求 $\alpha>0,a>1$。 |
| §3 完备性及双证法 | §3.1—§3.4 | 原表实际列出八种表述；四类连续函数性质均给两种证法。 |
| §4 差分与微分 | §4.1—§4.5 | 凸性割线条件须对全部起点；算子级数限定意义。 |
| §5 求和与积分 | §5.1—§5.4 | 负阶乘求和保留下端点；从0积分的幂须 $m>-1$；非单射换元计重数。 |
| §6 中值、Stolz、平均 | §6.1—§6.5 | 包含零比零、无穷型、上下极限、逆命题反例和两道递推渐近。 |
| §7 Newton与Taylor | §7.1—§7.3、§13.8 | 余项真实范围与零二项系数约定；“次数至多”；$2^x$ 的Newton级数范围。 |
| §8 四类桥梁与恒等式 | §5.4、§8、§10.4、§13.5—§13.7 | 数值积分误差、Bernoulli、Stirling常数、Wallis、三个积分求和全部给证。 |
| §9 级数与反常积分 | §9.1—§9.5 | Raabe/Gauss条件明确；Mertens及乘积Abel定理；必要条件与尖峰反例。 |
| §10 函数级数与参数积分 | §10.1—§10.4 | 一致判别、Dini、逐项运算、任意分段刻画与Dirichlet积分。 |
| §11 二重极限及积分 | §11.1—§11.4、§16.3 | 矩形、累次与无序积分严格区分；径向判别与格点误差完整证明。 |
| §12 不等式 | §12.1—§12.6 | Hardy、Hilbert、Carleman、Knopp、Grönwall均有独立论证；带核形式不盲目阶梯化。 |
| §13 变换与特殊函数 | §13.1—§13.8 | Abel/Tauber、反演/Plancherel、Poisson归一化、Gamma/Beta/Gauss及增长唯一性。 |
| §14 方程与动力学 | §14.1—§14.5 | 积分因子符号、递推零根、唯一性假设、Euler步长与Logistic混沌。 |
| §15 本质差异 | §15逐项索引 | 更正“维数导致绝对收敛”和“级数特有”的过强表述。 |
| §16 统一视角 | §16.1—§16.6 | 条件收敛不等于计数测度有限积分；补全时标稠密点定义。 |

本讲义以原上传文件为内容清单，正文证明独立写出。以下仅供核对标准名称与约定，不代替文中的证明：[NIST DLMF：Gamma函数渐近展开](https://dlmf.nist.gov/5.11)、[Jonathan Pila：Note on Carlson's theorem](https://people.maths.ox.ac.uk/pila/carlson.pdf)、[Martin Bohner 与 Allan Peterson：The Time Scales Calculus](https://www.math.unl.edu/~apeterson1/pub/bpexp.pdf)。
