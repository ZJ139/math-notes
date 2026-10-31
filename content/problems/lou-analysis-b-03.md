---
title: "楼红卫《数学分析》B 组习题解答（三）：1.4.B 第 2—7 题与 1.5.B 第 1 题"
description: "楼红卫《数学分析》上册 B 组第三批 B15—B21：从有理指数扩充到实指数、指数律、对数存在唯一性和换底公式，再由有理 Cauchy 列构造实数并证明上确界定理与 Cauchy 准则。"
subject: "数学分析"
category: "lou-analysis"
tags: ["楼红卫", "数学分析", "B组", "1.4.B", "1.5.B", "实数指数", "对数", "Cauchy列", "实数构造", "上确界", "完备性", "B15-B21"]
created_at: "2026-10-30"
updated_at: "2026-10-31"
---

承接上一批，本批严格依原书 B 组顺序，完成 **习题 1.4.B 第 2—7 题、习题 1.5.B 第 1 题**，本站连续编号为 **B15—B21**。其中 1.4.B 的六道题依赖上一批 B14 建立的有理指数律与分割值无间隙性质；1.5.B 第 1 题则是相对独立的实数构造与完备性证明。

[楼分析习题-v1（上册）资料页](/problems/41e85e430c9d7f84a0863658/) · [原题 PDF 第 5 页](/files/problems/楼分析习题-v1.pdf#page=5) · [原题 PDF 第 6 页](/files/problems/楼分析习题-v1.pdf#page=6)

**批次导航：**[B 组解答总目录](/problems/41e85e430c9d7f84a0863658/) · [上一批 B08—B14](/problems/eda7c983a174784902028698/) · [下一批 B22—B28](/problems/73fb9e5f1d74f40bed927fb9/)

## 题号导航

- [问题 B15：从有理幂定义实数幂（1.4.B-2）](#问题-b15)
- [问题 B16：实数指数律和严格单调性（1.4.B-3）](#问题-b16)
- [问题 B17：对数的存在性与唯一性（1.4.B-4）](#问题-b17)
- [问题 B18：对数换底公式（1.4.B-5）](#问题-b18)
- [问题 B19：对数函数的单调性（1.4.B-6）](#问题-b19)
- [问题 B20：对数乘法公式（1.4.B-7）](#问题-b20)
- [问题 B21：Cauchy 列构造实数及完备性（1.5.B-1）](#问题-b21)
- [七题方法总结](#七题方法总结)

## 问题 B15

**原题号：** 习题 1.4.B 第 2 题。

**题目：**设 $a\ge 1$，$b$ 为无理数，定义

$$
a^b=\sup\{a^p:p\le b,\ p\in\mathbb Q\}.
$$

证明：当 $b$ 为有理数时，上式也成立。进一步，当 $0<a<1$ 时，定义

$$
a^b=(a^{-1})^{-b}.
$$

**证明：**上一批问题 B14 已从正数的唯一有理次方根出发证明：若 $a>1$，则 $p\mapsto a^p$ 在有理数集上严格递增，且对每个 $c\in\mathbb R$，

$$
\sup_{\substack{p<c\\p\in\mathbb Q}}a^p
=
\inf_{\substack{q>c\\q\in\mathbb Q}}a^q.
\qquad\text{(1)}
$$

先验证题设定义确有意义。固定 $b\in\mathbb R$。由有理数的稠密性，存在有理数 $p_0<b<q_0$。因此集合

$$
S_b=\{a^p:p\le b,\ p\in\mathbb Q\}
$$

非空；而任意 $p\le b$ 都满足 $p<q_0$，从而

$$
0<a^p\le a^{q_0}.
$$

这里使用非严格不等式，以同时覆盖 $a=1$ 的情形。故 $S_b$ 有上界；又因 $a^{p_0}\in S_b$，其上确界至少为 $a^{p_0}>0$。

现在设 $b\in\mathbb Q$。取有理指数 $p=b$，可知 $a^b\in S_b$，且由有理指数的单调性，

$$
p\le b\quad\Longrightarrow\quad a^p\le a^b,
$$

所以 $a^b$ 既是 $S_b$ 的上界，又属于 $S_b$，必有

$$
\boxed{\sup_{\substack{p\le b\\p\in\mathbb Q}}a^p=a^b}.
$$

这证明新定义与已有的有理次幂定义一致。若 $a=1$，全部有理幂都等于 $1$，故上述结论同样成立，并定义 $1^b=1$。

对于 $a>1$，由式 (1) 还可把定义改写为

$$
\boxed{
a^b
=\sup_{\substack{p<b\\p\in\mathbb Q}}a^p
=\inf_{\substack{q>b\\q\in\mathbb Q}}a^q
\quad(b\in\mathbb R).
}
\qquad\text{(2)}
$$

其中当 $b$ 无理时，对有理数 $p$，$p\le b$ 与 $p<b$ 等价；当 $b$ 有理时，有理指数的单调性给出

$$
\sup_{\substack{p<b\\p\in\mathbb Q}}a^p
\le a^b\le
\inf_{\substack{q>b\\q\in\mathbb Q}}a^q.
$$

式 (1) 说明两端相等，因此它们都等于已有的有理幂 $a^b$，从而得到式 (2)。

若 $0<a<1$，则 $a^{-1}>1$，故可利用已经定义好的大于 $1$ 的底数，规定

$$
\boxed{a^b=(a^{-1})^{-b}\quad(b\in\mathbb R)}.
$$

当 $b=p\in\mathbb Q$ 时，上一批已经证明的有理指数律给出

$$
(a^{-1})^{-p}=a^p,
$$

所以这一定义同样与原有有理次幂相容。至此对任意 $a>0$、$b\in\mathbb R$，实数幂 $a^b$ 均有统一且不冲突的定义。

**方法总结：**用有理数的稠密性保证定义集合非空、有上界；用有理指数的单调性证明新旧定义一致；当底数小于 $1$ 时，通过取倒数和反号把问题化归到大于 $1$ 的情形。式 (2) 是后面证明连续性及实指数律的核心，不可直接把待证指数律当作定义。

[返回题号导航](#题号导航)

## 问题 B16

**原题号：** 习题 1.4.B 第 3 题。

**题目：**设 $a,b>0$，$x,y\in\mathbb R$，证明：

$$
\begin{aligned}
&(1)\quad (a^x)^y=a^{xy},\\
&(2)\quad a^xa^y=a^{x+y},\\
&(3)\quad a^xb^x=(ab)^x,\\
&(4)\quad a>1,\ x>0\ \Longrightarrow\ a^x>1,\\
&(5)\quad a>1\ \Longrightarrow\ a^x\text{ 关于 }x\in\mathbb R\text{ 严格单增},\\
&(6)\quad 0<a<1\ \Longrightarrow\ a^x\text{ 关于 }x\in\mathbb R\text{ 严格单减}.
\end{aligned}
$$

**证明：**先建立一条不能省略的过渡引理：**按 B15 的上、下确界定义得到的实指数函数是连续的。**

若 $a>1$，固定 $t\in\mathbb R$。由 B15 的式 (2) 及上、下确界的逼近性质，对任意 $\varepsilon>0$，可取有理数 $p<t<q$，使得

$$
a^t-\varepsilon<a^p\le a^t
\le a^q<a^t+\varepsilon.
$$

由定义，$z\mapsto a^z$ 对实数指数非减：若 $z_1<z_2$，则定义 $a^{z_1}$ 的所有有理指数仍小于 $z_2$，故 $a^{z_1}\le a^{z_2}$。因此只要 $p<z<q$，就有

$$
a^t-\varepsilon<a^p\le a^z\le a^q<a^t+\varepsilon.
$$

取 $\delta=\min\{t-p,q-t\}>0$，便得到

$$
|z-t|<\delta\quad\Longrightarrow\quad
|a^z-a^t|<\varepsilon.
$$

故 $a^z$ 在任意 $t$ 连续。当 $a=1$ 时函数恒为 $1$；当 $0<a<1$ 时，

$$
a^z=(a^{-1})^{-z}
$$

是已经证明连续的函数与 $z\mapsto-z$ 的复合，也连续。特别地，若有理数列 $p_n\to t$，则

$$
\boxed{a^{p_n}\longrightarrow a^t\qquad(a>0)}.
\qquad\text{(3)}
$$

下面逐一证明六问。

**(2) 同底数幂相乘。**取两列有理数 $p_n\to x$、$q_n\to y$。上一批已证明有理指数律

$$
a^{p_n}a^{q_n}=a^{p_n+q_n}.
$$

因 $p_n+q_n\to x+y$，对两侧取极限并利用式 (3)，得到

$$
\boxed{a^xa^y=a^{x+y}}.
\qquad\text{(4)}
$$

这里取极限只用到了已独立证明的连续性，没有预先假设实数指数律。

**(3) 同指数幂相乘。**取有理数列 $p_n\to x$。由有理指数律，

$$
a^{p_n}b^{p_n}=(ab)^{p_n}.
$$

利用底数 $a,b,ab$ 的指数连续性，令 $n\to\infty$，得到

$$
\boxed{a^xb^x=(ab)^x}.
\qquad\text{(5)}
$$

**(1) 幂的幂。**首先固定任意实数 $x$，证明对有理数 $q=m/n$（$m\in\mathbb Z,n\in\mathbb N^+$），有

$$
(a^x)^q=a^{xq}.
\qquad\text{(6)}
$$

由式 (4) 对整数指数反复应用，

$$
(a^x)^m=a^{mx};
$$

对于负整数 $m$，上述等式也由 $a^xa^{-x}=1$ 成立。令 $u=(a^x)^{m/n}$。按照有理次幂定义，$u$ 是 $(a^x)^m$ 的唯一正 $n$ 次根，故

$$
u^n=(a^x)^m=a^{mx}.
$$

另一方面，再由式 (4) 可知

$$
(a^{xm/n})^n=a^{mx}.
$$

正数的正 $n$ 次根唯一，从而得到式 (6)。

现在取有理数列 $q_k\to y$。由式 (6)，

$$
(a^x)^{q_k}=a^{xq_k}.
$$

左侧依底数 $a^x>0$ 的指数连续性趋于 $(a^x)^y$；右侧依底数 $a$ 的指数连续性趋于 $a^{xy}$。因此

$$
\boxed{(a^x)^y=a^{xy}}.
$$

**(4) 正指数的大小。**设 $a>1$ 且 $x>0$。取有理数 $p$ 满足 $0<p<x$。由有理指数的性质 $a^p>1$，以及实数指数的非减性，

$$
a^x\ge a^p>1.
$$

故

$$
\boxed{a>1,\ x>0\Longrightarrow a^x>1}.
$$

**(5) 大于 $1$ 的底数。**若 $x<y$，则 $y-x>0$，由 (4) 和 (2)，

$$
a^y=a^xa^{y-x}>a^x.
$$

因此 $a^x$ 关于 $x$ 严格单增。

**(6) 小于 $1$ 的底数。**若 $0<a<1$，记 $c=a^{-1}>1$。当 $x<y$ 时有 $-x>-y$，由 (5)，

$$
a^x=c^{-x}>c^{-y}=a^y.
$$

因此 $a^x$ 关于 $x$ 严格单减。

六个结论全部得证。

**方法总结：**关键不是形式上把有理指数中的 $p,q$ 改成实数 $x,y$，而是先依据 Dedekind 分割值证明指数连续性，再以有理数稠密性传递代数恒等式。证明顺序宜为“连续性 $\to$ 同底数乘法律 $\to$ 同指数乘法律与幂的幂 $\to$ 正指数与严格单调性”，这样可以避免循环论证。

[返回题号导航](#题号导航)

## 问题 B17

**原题号：** 习题 1.4.B 第 4 题。

**题目：**设 $a>0$ 且 $a\ne1$，$b>0$。证明存在唯一实数 $x$ 满足

$$
a^x=b.
$$

该实数称为以 $a$ 为底、以 $b$ 为真数的对数，记为 $\log_a b$；底数已明确时可简写为 $\log b$。其中 $\log_{10}b$ 记为 $\lg b$，$\log_e b$ 记为 $\ln b$（常数 $e$ 见原书式 (2.4.8)）。

**证明：**先设 $a>1$。由 Bernoulli 不等式，

$$
a^n=(1+(a-1))^n\ge1+n(a-1)
\longrightarrow+\infty.
$$

又由指数律 $a^{-n}=1/a^n$，有

$$
a^{-n}\longrightarrow0.
$$

故对给定的 $b>0$，存在正整数 $N$ 使

$$
a^{-N}<b<a^N.
$$

考虑非空集合

$$
E=\{t\in\mathbb R:a^t\le b\}.
$$

它包含 $-N$，而 $N$ 是它的上界。由实数的上确界存在定理，令

$$
x_0=\sup E.
$$

下面直接用问题 B16 已证明的连续性证 $a^{x_0}=b$，不必预先引用后面章节的介值定理。

若 $a^{x_0}<b$，则由连续性，存在 $\delta>0$，使

$$
a^{x_0+\delta}<b.
$$

于是 $x_0+\delta\in E$，与 $x_0$ 是 $E$ 的上界矛盾。

若 $a^{x_0}>b$，则由连续性，可取 $\delta>0$ 使

$$
a^{x_0-\delta}>b.
$$

由 $a^t$ 的严格单调性，对任意 $t\ge x_0-\delta$ 都有 $a^t>b$，故这些 $t$ 均不属于 $E$。因此 $x_0-\delta$ 已是 $E$ 的一个上界，又与 $x_0=\sup E$ 矛盾。

故只能有

$$
\boxed{a^{x_0}=b}.
$$

若另有 $x_1$ 满足 $a^{x_1}=b$，则由于 $a^x$ 严格递增，$x_1=x_0$，唯一性得证。

再设 $0<a<1$。令 $c=1/a>1$。由已证情形，存在唯一 $u\in\mathbb R$ 使

$$
c^u=b.
$$

而 $a^{-u}=c^u=b$，所以 $x=-u$ 是 $a^x=b$ 的解；严格递减性保证其唯一性。

综上，对任意 $a>0$ 且 $a\ne1$、$b>0$，方程 $a^x=b$ 都有唯一实数解，因此定义

$$
\boxed{\log_a b=x\quad\Longleftrightarrow\quad a^x=b}
$$

是合法的。特别地，

$$
\log_a1=0,\qquad \log_a a=1.
$$

**方法总结：**存在性是主要内容：先由 Bernoulli 不等式证明指数函数在正、负方向的值能够越过任意正数，再对水平集 $\{t:a^t\le b\}$ 取上确界，用连续性排除严格不等。唯一性才是严格单调性的直接结果。

[返回题号导航](#题号导航)

## 问题 B18

**原题号：** 习题 1.4.B 第 5 题。

**题目：**设 $a,b,x>0$，$a\ne1$、$b\ne1$。证明：

$$
\log_a x=\frac{\log_b x}{\log_b a}.
$$

**证明：**记

$$
u=\log_b x,\qquad v=\log_b a.
$$

由对数的定义，

$$
b^u=x,\qquad b^v=a.
$$

若 $v=0$，则 $a=b^v=1$，与题设矛盾，故 $v\ne0$。应用问题 B16 已证明的实数指数律，

$$
a^{u/v}=(b^v)^{u/v}
=b^{v(u/v)}=b^u=x.
$$

而问题 B17 表明方程 $a^t=x$ 有唯一实数解，故

$$
\log_a x=\frac uv
=\boxed{\frac{\log_b x}{\log_b a}}.
$$

**方法总结：**换底公式无需另行使用极限。只需将两个对数还原为指数等式，再用幂的幂法则和唯一性；其中分母不为零由 $a\ne1$ 保证。

[返回题号导航](#题号导航)

## 问题 B19

**原题号：** 习题 1.4.B 第 6 题。

**题目：**证明：当 $a>1$ 时，$\log_a x$ 关于 $x>0$ 严格单增；当 $0<a<1$ 时，$\log_a x$ 关于 $x>0$ 严格单减。

**证明：**任取 $0<x_1<x_2$，记

$$
u_1=\log_a x_1,\qquad u_2=\log_a x_2.
$$

于是

$$
a^{u_1}=x_1<x_2=a^{u_2}.
$$

若 $a>1$，则 $t\mapsto a^t$ 严格单增。假如 $u_1\ge u_2$，便有 $a^{u_1}\ge a^{u_2}$，与上式矛盾，故

$$
\boxed{\log_a x_1<\log_a x_2}.
$$

若 $0<a<1$，则 $t\mapsto a^t$ 严格单减。假如 $u_1\le u_2$，便有 $a^{u_1}\ge a^{u_2}$，同样矛盾，故

$$
\boxed{\log_a x_1>\log_a x_2}.
$$

这分别证明两种底数下的严格单调性。

**方法总结：**对数是指数函数在 $(0,+\infty)$ 上的反函数。严格单调双射的逆映射保留其递增或递减方向；直接还原为指数等式最简洁，也不依赖求导。

[返回题号导航](#题号导航)

## 问题 B20

**原题号：** 习题 1.4.B 第 7 题。

**题目：**设 $a,x,y>0$ 且 $a\ne1$，证明：

$$
\log_a(xy)=\log_a x+\log_a y.
$$

**证明：**令

$$
u=\log_a x,\qquad v=\log_a y.
$$

根据定义，

$$
a^u=x,\qquad a^v=y.
$$

利用问题 B16 的实数指数乘法律，

$$
a^{u+v}=a^ua^v=xy.
$$

又由问题 B17 的存在唯一性，$u+v$ 必是方程 $a^t=xy$ 的唯一解，故

$$
\boxed{\log_a(xy)=\log_a x+\log_a y}.
$$

从而立即得到

$$
\log_a\frac{x}{y}=\log_a x-\log_a y,
\qquad
\log_a(x^r)=r\log_a x
\quad(r\in\mathbb R),
$$

其中第二式由 $x^r=(a^{\log_a x})^r=a^{r\log_a x}$ 推得。

**方法总结：**对数乘法公式是指数乘法律在反函数下的对应形式。先由指数性质推出等式，再用对数的唯一性识别结果，避免直接搬用尚未证明的“对数运算法则”。

[返回题号导航](#题号导航)

## 问题 B21

**原题号：** 习题 1.5.B 第 1 题。

**题目：**在 Cantor 利用 Cauchy 列构造实数的基础上，建立上确界存在定理、Cauchy 准则（参见原书定理 2.4.8）等。

**证明：**本题不是要求在已经假定实数完备的前提下再证明实数完备，而是要求：**从有理数及其 Cauchy 列出发构造一个有序域，然后在这个有序域内部建立完备性。**为避免循环论证，以下仅在有理数范围使用其通常的四则运算、次序与 Archimedes 性。

### 有理 Cauchy 列及等价关系

设 $\mathcal C$ 是所有有理数 Cauchy 列组成的集合，即

$$
\mathcal C=
\left\{(q_n)_{n\ge1}\in\mathbb Q^{\mathbb N}:
\ \forall\varepsilon\in\mathbb Q_{>0},\
\exists N,\
m,n\ge N\Longrightarrow |q_m-q_n|<\varepsilon
\right\}.
$$

在 $\mathcal C$ 上定义

$$
(q_n)\sim(r_n)
\quad\Longleftrightarrow\quad
\lim_{n\to\infty}(q_n-r_n)=0,
$$

这里极限只表示右边的有理数列按有理数中的 $\varepsilon$ 定义趋于 $0$。显然 $\sim$ 自反、对称；若 $q_n-r_n\to0$ 且 $r_n-s_n\to0$，则由三角不等式 $q_n-s_n\to0$，故 $\sim$ 也具有传递性。

把等价类记为 $[q_n]$，定义新集合

$$
\mathbb R_{\mathrm C}=\mathcal C/{\sim}.
$$

每个有理数 $r$ 由常值列 $(r,r,\ldots)$ 嵌入 $\mathbb R_{\mathrm C}$；下文仍记这一等价类为 $r$。

### 四则运算与有序域结构

定义

$$
[q_n]+[r_n]=[q_n+r_n],
\qquad
[q_n]\,[r_n]=[q_nr_n].
\qquad\text{(1)}
$$

任一有理 Cauchy 列都是有界列。若 $(q_n),(r_n)$ 是 Cauchy 列，设 $|q_n|,|r_n|\le M$，则

$$
\begin{aligned}
|q_mr_m-q_nr_n|
&\le |q_m|\,|r_m-r_n|
   +|r_n|\,|q_m-q_n|\\
&\le M\bigl(|r_m-r_n|+|q_m-q_n|\bigr).
\end{aligned}
$$

因此乘积列仍为 Cauchy 列。又若 $(q_n)\sim(q'_n)$、$(r_n)\sim(r'_n)$，由有界性，

$$
|q_nr_n-q'_nr'_n|
\le M|r_n-r'_n|+M|q_n-q'_n|\longrightarrow0,
$$

取足够大的统一有理数界 $M$ 即可。这说明式 (1) 与代表元的选择无关；加法的情形直接由三角不等式得到。

再说明非零元素可逆。若 $[q_n]\ne0$，即 $q_n$ 不趋于 $0$，则存在有理数 $\varepsilon_0>0$，使得无论 $N$ 多大，总存在 $n\ge N$ 满足 $|q_n|\ge\varepsilon_0$。由 Cauchy 性，可取 $N_0$ 使

$$
m,n\ge N_0
\quad\Longrightarrow\quad
|q_m-q_n|<\frac{\varepsilon_0}{2}.
$$

选取 $n_0\ge N_0$ 且 $|q_{n_0}|\ge\varepsilon_0$。于是对所有 $n\ge N_0$，

$$
|q_n|\ge |q_{n_0}|-|q_n-q_{n_0}|
>\frac{\varepsilon_0}{2}.
\qquad\text{(2)}
$$

由 $|q_n-q_{n_0}|<\varepsilon_0/2\le |q_{n_0}|/2$，所有 $n\ge N_0$ 的 $q_n$ 都与 $q_{n_0}$ 同号，故符号最终固定。把前面有限项任意补为非零有理数，所得的 $(1/q_n)$ 是 Cauchy 列，因为对足够大的 $m,n$，

$$
\left|\frac1{q_m}-\frac1{q_n}\right|
=\frac{|q_n-q_m|}{|q_mq_n|}
\le\frac4{\varepsilon_0^2}|q_m-q_n|
\longrightarrow0.
$$

其等价类显然满足 $[q_n][1/q_n]=1$。加法逆元为 $[-q_n]$，交换律、结合律与分配律均由代表列逐项运算继承；在这些运算律下乘法逆元唯一，因此上述逆元也不依赖代表列及有限项的补法。故 $\mathbb R_{\mathrm C}$ 在式 (1) 的运算下构成交换域，其零元、单位元分别是常值列 $0,1$ 的等价类。

规定

$$
[q_n]>0
\quad\Longleftrightarrow\quad
\exists\,\delta\in\mathbb Q_{>0},\
\exists N,\
q_n>\delta\quad(n\ge N).
\qquad\text{(3)}
$$

由式 (2) 所示的最终离零性及最终同号性，非零类必恰好有一个正号或负号。若 $(q_n)\sim(r_n)$ 且最终 $q_n>\delta$，则最终 $|q_n-r_n|<\delta/2$，故 $r_n>\delta/2$；反向同理，因此式 (3) 不依赖代表元。两个正类的和与积仍为正类。定义 $x<y$ 当且仅当 $y-x>0$，于是 $\mathbb R_{\mathrm C}$ 成为全序域，且对有理数的运算和次序与原来的 $\mathbb Q$ 完全一致。

后面还将使用一个直接推论：若有理 Cauchy 列 $(d_k)$ 最终非负，则 $[d_k]\ge0$。否则 $[-d_k]>0$ 会迫使 $d_k$ 最终严格为负，矛盾。因此，代表列最终满足的非严格不等式可以传递到等价类；这只依赖次序定义，不依赖完备性。

### Archimedes 性与有理数稠密性

因为每个代表列 $(q_n)$ 在有理数内有界，存在正整数 $M$ 满足 $q_n<M-1$（所有 $n$），故在新有序域中

$$
[q_n]<M.
$$

因此 $\mathbb R_{\mathrm C}$ 具有 Archimedes 性，即任意元素都小于某个正整数。由此还能证明：对任意 $x<y$，必存在有理数 $r$ 满足 $x<r<y$。

事实上，对正元素 $1/(y-x)$ 使用 Archimedes 性，可选正整数 $N$ 使 $N(y-x)>1$。对任意元素 $z$，先取整数 $K>|z|+1$，再在有限集合 $\{-K,\ldots,K\}$ 中取满足 $m\le z$ 的最大整数 $m$，便有 $m\le z<m+1$；这里仅使用有限集合的最大元。对 $z=Nx$ 取这样的整数 $m$，可得

$$
m\le Nx<m+1\le Nx+1<Ny.
$$

于是 $r=(m+1)/N$ 即为所求。这里在有序域内部证明了有理数稠密性，而没有把目标实数的完备性作为前提。

### 上确界存在定理

设 $S\subset\mathbb R_{\mathrm C}$ 非空，且有上界。由 Archimedes 性与有理数稠密性，可选有理数 $L_0<U_0$，使 $L_0$ **不是** $S$ 的上界，而 $U_0$ **是** $S$ 的上界。

递归地令

$$
m_n=\frac{L_n+U_n}{2},
$$

并规定

$$
(L_{n+1},U_{n+1})=
\begin{cases}
(L_n,m_n),&m_n\text{ 是 }S\text{ 的上界},\\
(m_n,U_n),&m_n\text{ 不是 }S\text{ 的上界}.
\end{cases}
\qquad\text{(4)}
$$

由构造可知，对一切 $n$，$L_n$ 不是 $S$ 的上界、$U_n$ 是 $S$ 的上界，并有

$$
L_n\le L_{n+1}<U_{n+1}\le U_n,\qquad
U_n-L_n=2^{-n}(U_0-L_0).
\qquad\text{(5)}
$$

因此 $(L_n)$、$(U_n)$ 都是有理 Cauchy 列。例如对 $m\ge n$，

$$
0\le L_m-L_n\le U_n-L_n
=2^{-n}(U_0-L_0)\longrightarrow0.
$$

式 (5) 也表明 $L_n-U_n\to0$，故两个 Cauchy 列确定同一个等价类，记为

$$
\sigma=[L_n]=[U_n]\in\mathbb R_{\mathrm C}.
$$

固定 $n$，对所有 $k\ge n$，由式 (5) 有

$$
0\le L_k-L_n\le U_n-L_n,
\qquad
0\le U_n-U_k\le U_n-L_n.
$$

把这些最终成立的不等式传递到等价类，并注意此处 $L_n,U_n$ 表示常值列的类，得到

$$
0\le\sigma-L_n\le 2^{-n}(U_0-L_0),
\qquad
0\le U_n-\sigma\le 2^{-n}(U_0-L_0).
$$

由 $2^n\ge n+1$ 及新有序域的 Archimedes 性，右端最终小于任给的 $\varepsilon\in\mathbb R_{\mathrm C}$、$\varepsilon>0$。因此直接由收敛定义得到 $L_n\to\sigma$、$U_n\to\sigma$，并未预先使用 Cauchy 列必收敛。

现证明 $\sigma=\sup S$。

任取 $s\in S$。倘若 $s>\sigma$，则由 $U_n\to\sigma$，可取 $n$ 使 $U_n<s$，这与 $U_n$ 是上界矛盾。因此

$$
s\le\sigma\qquad(\forall s\in S),
$$

即 $\sigma$ 是 $S$ 的上界。

再任取 $t<\sigma$。因为 $L_n\to\sigma$，可取 $n$ 使 $t<L_n$。而 $L_n$ 不是 $S$ 的上界，故存在 $s\in S$ 满足

$$
t<L_n<s.
$$

所以每个小于 $\sigma$ 的数均不是 $S$ 的上界。这就证明

$$
\boxed{\sigma=\sup S}.
$$

由取负数还立即得到任何非空有下界集合的下确界存在，且

$$
\inf S=-\sup(-S).
$$

上述证明的核心是：对上界与非上界作有理二分，产生两列彼此等价的有理 Cauchy 列；它们共同定义的元素恰是所求上确界。**整个二分过程没有预先使用实数的上确界定理。**

### 单调有界收敛定理

设 $(x_n)\subset\mathbb R_{\mathrm C}$ 单调递增且有上界，取

$$
\ell=\sup\{x_n:n\ge1\}.
$$

按上确界的特征，对任意 $\varepsilon>0$，$\ell-\varepsilon$ 不是此集合的上界，因此存在 $N$ 满足

$$
\ell-\varepsilon<x_N\le\ell.
$$

由单调性，对于 $n\ge N$，

$$
\ell-\varepsilon<x_n\le\ell,
$$

即 $x_n\to\ell$。递减有下界数列则取下确界，得到相同的结论。因此新构造的有序域满足单调有界收敛定理。

### Cauchy 收敛准则

设 $(x_n)$ 是 $\mathbb R_{\mathrm C}$ 中的数列。若 $x_n\to x$，则对任意 $\varepsilon>0$，存在 $N$ 使 $n\ge N$ 时 $|x_n-x|<\varepsilon/2$，从而对 $m,n\ge N$，

$$
|x_m-x_n|
\le|x_m-x|+|x_n-x|
<\varepsilon.
$$

故收敛必为 Cauchy。

反之设 $(x_n)$ 为 Cauchy 列。由定义它有界。对每个正整数 $n$，利用刚证明的上、下确界存在性，定义尾部上下界

$$
M_n=\sup_{k\ge n}x_k,\qquad
m_n=\inf_{k\ge n}x_k.
$$

则 $(M_n)$ 单调递减且有下界，$(m_n)$ 单调递增且有上界，由单调有界收敛定理，存在

$$
M_n\longrightarrow M,\qquad
m_n\longrightarrow m.
$$

又因为 $(x_n)$ 是 Cauchy，对任意 $\varepsilon>0$，存在 $N$ 使所有 $j,k\ge N$ 都有

$$
|x_j-x_k|<\varepsilon.
$$

固定 $n\ge N$。任意两个尾部元素之差均小于 $\varepsilon$，故取上、下确界得到

$$
0\le M_n-m_n\le\varepsilon.
$$

令 $n\to\infty$，得到 $0\le M-m\le\varepsilon$。因 $\varepsilon$ 任意，$M=m=:x$。再由

$$
m_n\le x_n\le M_n
$$

及夹逼定理，得到 $x_n\to x$。因此

$$
\boxed{
(x_n)\text{ 在 }\mathbb R_{\mathrm C}\text{ 中收敛}
\quad\Longleftrightarrow\quad
(x_n)\text{ 是 Cauchy 列}.
}
$$

这正是在构造出的实数系内成立的 Cauchy 准则；其充分性从上确界定理推得，而上确界定理已经由有理 Cauchy 列独立建立。

### 两个完备性推论

**闭区间套定理（区间长度趋于零的形式）。**若一列非空闭区间满足

$$
I_n=[a_n,b_n]\supset I_{n+1},
\qquad b_n-a_n\longrightarrow0,
$$

则 $(a_n)$ 单增、$(b_n)$ 单减，且均有界，故分别收敛于 $a,b$。由 $0\le b_n-a_n\to0$ 得 $a=b$。又对每个固定 $n$，所有后续端点均属于 $I_n$，由不等式取极限知共同极限 $a$ 属于每个 $I_n$。若另有公共点 $c$，则 $a_n\le c\le b_n$，于是 $c=a$。故

$$
\boxed{\bigcap_{n=1}^{\infty}I_n=\{a\}}.
$$

**Bolzano–Weierstrass 定理。**任意有界实数列均有收敛子列。取包含全列的闭区间，将区间对半分，保留一个包含无穷多项的半区间，反复进行，得到长度趋于零的闭区间套。递归地从第 $n$ 个区间内选一个下标严格增加的数列项。上述闭区间套定理说明这些选出项都趋于同一公共点，因而得到收敛子列。

至此已经由有理数 Cauchy 列构造了一个包含 $\mathbb Q$ 的全序域，并从定义出发依次建立了

$$
\boxed{
\begin{gathered}
\text{上确界与下确界存在定理},\\
\text{单调有界收敛定理},\quad
\text{Cauchy 收敛准则},\\
\text{闭区间套定理与 Bolzano--Weierstrass 定理}.
\end{gathered}}
$$

它具备通常实数系所要求的序完备性，可与标准实数域等同看待。

**方法总结：**先构造等价类，后核对域运算及次序，继而由“有理上界／非上界的二分”构造上确界，最后从上确界推出单调有界收敛与 Cauchy 准则。证明结构必须避免“先假定实数完备，再宣称由 Cauchy 列证明了完备”的逻辑循环。

[返回题号导航](#题号导航)

## 七题方法总结

| 连续编号 | 原题号 | 核心结论 | 主要方法 |
| --- | --- | --- | --- |
| B15 | 1.4.B-2 | 用有理幂的上确界定义实数幂，并与旧定义相容 | 有理数稠密性、有理幂单调性、Dedekind 分割 |
| B16 | 1.4.B-3 | 六条实数指数性质 | 先证明连续性，再由有理指数律取极限 |
| B17 | 1.4.B-4 | $a^x=b$ 有唯一实数解 | Bernoulli 不等式、水平集上确界、连续性和单调性 |
| B18 | 1.4.B-5 | $\log_a x=\log_b x/\log_b a$ | 指数还原与唯一性 |
| B19 | 1.4.B-6 | 对数关于真数在 $a>1$ 时严格递增、在 $0<a<1$ 时严格递减 | 反函数与严格单调双射 |
| B20 | 1.4.B-7 | $\log_a(xy)=\log_a x+\log_a y$ | 实数指数乘法律及其逆映射 |
| B21 | 1.5.B-1 | 从有理 Cauchy 列建立实数完备性 | 等价类、有序域、二分构造上确界、尾部上下确界 |

本批可以分为两条相互关联但逻辑层次不同的证明链：

- **B15—B20（函数的构造与运算）：**有理指数的分割值无间隙 $\to$ 实指数定义 $\to$ 指数连续性 $\to$ 实指数律 $\to$ 对数的存在唯一性 $\to$ 对数性质。
- **B21（实数本身的构造）：**有理 Cauchy 列的等价类 $\to$ 全序域 $\to$ 上确界存在 $\to$ 单调有界收敛 $\to$ Cauchy 准则与其他完备性定理。

特别要区分：前六题是在已经建立的实数系上研究指数与对数；最后一题则从有理数出发，解释前六题所用的“实数上确界存在性”为什么可以成立。

**资料来源：**楼红卫《数学分析》上册（2022），习题 1.4.B 第 2—7 题与 1.5.B 第 1 题；本站《楼分析习题-v1.pdf》第 5—6 页。题号与条件据原题核对，证明与方法总结为独立整理。**下一批已完成：**[第四批 B22—B28](/problems/73fb9e5f1d74f40bed927fb9/)，从习题 2.1.B 第 1 题开始，继续每批七题、不穿插 A 组。

**批次导航：**[B 组解答总目录](/problems/41e85e430c9d7f84a0863658/) · [上一批 B08—B14](/problems/eda7c983a174784902028698/) · [下一批 B22—B28](/problems/73fb9e5f1d74f40bed927fb9/)
