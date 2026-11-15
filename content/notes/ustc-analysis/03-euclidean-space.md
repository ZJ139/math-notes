---
title: "欧氏空间：点列、紧致性、连通性与连续映射"
description: "从欧氏距离出发，以点列和开覆盖刻画紧致集，以分离刻画连通集，再推导多变量连续映射的性质。"
subject: "数学分析"
category: "ustc-analysis/limits"
tags: ["科大数分", "欧氏空间", "紧致性", "连通性"]
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

上册第 8 章，原书第 251—280 页。点与向量用黑体小写字母表示，分量用普通小写字母表示。例如 $\boldsymbol{x}=(x_1,\ldots,x_n)\in\mathbf R^n$。

[距离与点列](#距离与点列极限) · [开集与闭集](#开集闭集与边界) · [紧致性](#列紧紧致与有界闭) · [连通性](#连通与道路连通) · [连续映射](#多变量极限与连续映射)

## 距离与点列极限

**Euclid 空间（§8.1）**　$\mathbf R^n$ 的加法、数乘按分量进行。定义
$$
\langle\boldsymbol{x},\boldsymbol{y}\rangle=\sum_{i=1}^n x_i y_i,\qquad
\|\boldsymbol{x}\|=\sqrt{\langle\boldsymbol{x},\boldsymbol{x}\rangle}.
$$
内积正定、对称，对每个变量线性。对 $\boldsymbol y\ne\boldsymbol0$，展开 $\|\boldsymbol x-t\boldsymbol y\|^2\ge0$，取 $t=\langle\boldsymbol x,\boldsymbol y\rangle/\|\boldsymbol y\|^2$，即得 Cauchy–Schwarz 不等式 $|\langle\boldsymbol x,\boldsymbol y\rangle|\le\|\boldsymbol x\|\,\|\boldsymbol y\|$；$\boldsymbol y=\boldsymbol0$ 时也成立。再展开 $\|\boldsymbol x+\boldsymbol y\|^2$，即得三角不等式。两点的距离为 $\|\boldsymbol x-\boldsymbol y\|$。以 $\boldsymbol a$ 为中心、$r>0$ 为半径的开球记作 $B_r(\boldsymbol a)$，去掉中心所得空心球记作 $B_r(\dot{\boldsymbol a})$。

**点列收敛（定理 8.2.2—8.2.4）**　$\boldsymbol x_i\to\boldsymbol a$ 即 $\|\boldsymbol x_i-\boldsymbol a\|\to0$，等价于每个坐标都收敛到相应的 $a_j$。因为
$$
\max_{1\le j\le n}|x_{ij}-a_j|\le\|\boldsymbol x_i-\boldsymbol a\|
\le\sqrt n\max_{1\le j\le n}|x_{ij}-a_j|.
$$
这里坐标只有有限个，可以对各坐标同时选取足够大的下标。同样，点列为基本列当且仅当各坐标列为基本列，实数的 Cauchy 原理遂给出 $\mathbf R^n$ 的 Cauchy 原理。和与数乘的极限也可逐分量计算。

**有界点列有收敛子点列**　先使第一坐标沿某个子列收敛，再从该子列中选出第二坐标也收敛的子列。已收敛的坐标在进一步取子列时保留原极限。经过 $n$ 次选择，最后一个子列的全部坐标同时收敛。

[练习 8.1 第 4 题](/files/problems/科大数分习题-v1.pdf#page=54)：由内积展开证明平行四边形等式。[练习 8.2 第 5 题](/files/problems/科大数分习题-v1.pdf#page=54)：已知 $\sum_{k=1}^\infty\|\boldsymbol x_{k+1}-\boldsymbol x_k\|$ 收敛，证明点列收敛。任意两个尾项的距离可由两下标之间的路径长度控制。

## 开集、闭集与边界

设 $E\subset\mathbf R^n$。以下各条件都只用开球检验（§8.3）。

| 概念 | 用球表述的条件 |
| --- | --- |
| 内点、内部 $E^\circ$ | 某个 $B_r(\boldsymbol a)$ 整个包含于 $E$；所有这样的中心组成内部。 |
| 凝聚点、导集 $E'$ | 对每个 $r>0$，$B_r(\dot{\boldsymbol a})\cap E\ne\varnothing$；所有凝聚点组成导集。$E$ 中不属于导集的点是孤立点。 |
| 闭包 $\overline E=E\cup E'$ | 每个 $B_r(\boldsymbol a)$ 都与 $E$ 相交。中心可属于 $E$。 |
| 边界 $\partial E$ | 每个 $B_r(\boldsymbol a)$ 同时遇到 $E$ 与 $E^c$，故 $\partial E=\overline E\cap\overline{E^c}$。 |

$E$ 开即 $E=E^\circ$，$E$ 闭即 $E^c$ 开。任意并、有限交保持开性；取补得到任意交、有限并保持闭性。有限交时能取有限多个球半径的最小值，说明了「有限」的用途。$E^\circ$ 是包含于 $E$ 的最大开集，$\overline E$ 是包含 $E$ 的最小闭集。

**闭集的点列判据（定理 8.3.4、推论 8.3.1）**　$E$ 闭等价于 $E'\subset E$，也等价于 $E$ 中一切收敛点列的极限都在 $E$ 中。若 $\boldsymbol a\notin E$ 且补集开，其某个球不遇到 $E$，故不可能是 $E$ 中点列的极限。反过来，若 $\boldsymbol a\in\overline E$，在每个 $B_{1/i}(\boldsymbol a)$ 中选一点 $\boldsymbol x_i\in E$，即有 $\boldsymbol x_i\to\boldsymbol a$。点列判据于是迫使 $\overline E\subset E$。

**闭集套（定理 8.3.7）**　若非空闭集 $F_i\supset F_{i+1}$ 且直径 $\operatorname{diam}(F_i)=\sup_{\boldsymbol x,\boldsymbol y\in F_i}\|\boldsymbol x-\boldsymbol y\|\to0$，则交集恰有一点。取 $\boldsymbol x_i\in F_i$。当 $i,j\ge k$ 时，两点距离至多为 $\operatorname{diam}(F_k)$，故为基本列。其极限属于每一个闭集 $F_k$，因为尾列在其中。直径趋零保证唯一性。

[练习 8.3 第 1 题（1）](/files/problems/科大数分习题-v1.pdf#page=55)：对 $A=\{1,1/2,1/3,\ldots\}$ 求 $A^\circ,\overline A,\partial A$。[问题 8.3 第 2 题](/files/problems/科大数分习题-v1.pdf#page=55)：把实轴上的非空有界开集表示为至多可数个两两不交的开区间之并。可先取每一点所在的最大开区间，再给不同区间选不同的有理数。

## 列紧、紧致与有界闭

**定义 8.4.1—8.4.3**　$E$ 列紧，指其中每一点列都有子列收敛于 $E$ 内一点。若 $E\subset\bigcup_\alpha G_\alpha$ 且各 $G_\alpha$ 为开集，则它们构成 $E$ 的开覆盖。$E$ 紧致，指它的每个开覆盖都有有限子覆盖。

**定理 8.4.1、8.4.2**　在 $\mathbf R^n$ 中，列紧、紧致、有界且闭三者等价。

**证明**　有界闭集中的点列可抽出收敛子列，闭性让极限留在集合内。反过来，列紧集必有界，否则可取 $\|\boldsymbol x_i\|>i$；它也必闭，因为其中一个收敛点列抽出的子列仍有同一极限，而列紧性让某个这样的子列在集合内收敛。

现设 $E$ 有界且闭，用一个闭立方体装下它。若某个开覆盖不能有限覆盖 $E$，将立方体各边平分。在所得的 $2^n$ 个闭小立方体中，至少有一个与 $E$ 的交仍不能有限覆盖。如此递推，得到非空闭集套 $E\cap Q_k$，其直径趋于零。公共点属于覆盖中的某个开集，故其某个球包含于该开集。充分靠后的 $E\cap Q_k$ 整个落在此球内，矛盾。

最后设 $E$ 紧致。以 $B_i(\boldsymbol0)$（$i\in\mathbf N^*$）覆盖 $E$，取有限子覆盖即得有界。若 $\boldsymbol a\notin E$，开集 $G_i=\{\boldsymbol x:\|\boldsymbol x-\boldsymbol a\|>1/i\}$ 递增并覆盖 $E$，故已有某个 $G_i$ 包含 $E$。于是 $B_{1/i}(\boldsymbol a)$ 与 $E$ 不交，补集开，$E$ 闭。空集也满足三种条件。

[练习 8.4 第 5 题](/files/problems/科大数分习题-v1.pdf#page=56)：递减的非空闭集列必有公共点吗？改为非空紧致集又如何？前者可试 $[i,+\infty)$；后者在第一个紧致集中抽取子列，再逐个使用闭性。

## 连通与道路连通

**定义 8.5.1—8.5.3**　$E$ 连通，是指每当 $E=A\cup B$，其中 $A,B$ 非空且不交，就有 $A\cap B'\ne\varnothing$ 或 $A'\cap B\ne\varnothing$。两式都为空时称这两部分相互分离。等价地，$E$ 不能分成两个不交的非空相对开集。理由是：若 $A$ 不含 $B$ 的凝聚点且二者不交，则每个 $A$ 中的点都有一个不遇到 $B$ 的球，所以 $A$ 在 $E$ 中相对开；另一部分同理，逆向也成立。连通的开集称为区域，其闭包称为闭区域。

**定理 8.5.2**　实轴上的非空连通集恰为区间（包括单点）。若两点之间漏掉一个数，该数两侧立即给出分离。反过来，若区间分成两个不交的非空相对开集，在不同部分中取两点，将其间的闭区间反复对半分，每次保留端点属于不同部分的一半。公共点必属某一部分，该部分的相对开性使靠后的两个端点都属它，矛盾。

若 $E$ 中任意两点都能用 $E$ 内的连续曲线连接，就称 $E$ 道路连通。道路连通推出连通（定理 8.5.3），因为一旦存在分离，连接两部分的曲线便会用原像分离其参数区间。对于开集，逆向也成立：固定一点，从它可由折线到达的点以及其余点各成开集。事实上，每个点有一个包含在原开集内的球，球内两点可用线段相连；球中只要有一个可达点，全球即均可达。连通性排除了非空的其余部分。

[练习 8.5 第 1 题](/files/problems/科大数分习题-v1.pdf#page=56)：证明区域道路连通。[问题 8.5 第 2 题](/files/problems/科大数分习题-v1.pdf#page=56)：证明曲线 $y=\sin(1/x)$（$0<x\le2/\pi$）的闭包连通，但不道路连通。比较曲线本身和闭包中新添的纵线段。

## 多变量极限与连续映射

**极限与连续（§8.6—§8.8）**　设 $D\subset\mathbf R^n$、$\boldsymbol f:D\to\mathbf R^m$。在 $\boldsymbol a\in D'$ 处极限为 $\boldsymbol p$，指任给 $\varepsilon>0$，存在 $\delta>0$，当 $\boldsymbol x\in D\cap B_\delta(\dot{\boldsymbol a})$ 时有 $\|\boldsymbol f(\boldsymbol x)-\boldsymbol p\|<\varepsilon$。在 $\boldsymbol a\in D$ 处连续，则用整个 $D\cap B_\delta(\boldsymbol a)$，把 $\boldsymbol p$ 换成 $\boldsymbol f(\boldsymbol a)$；孤立点自动是连续点。映射有极限、连续均可逐分量判定，因为坐标最大误差与范数可以互相控制。数列判据和 Cauchy 判据仍成立，将一元证明中的绝对值分别换成定义域、值域的距离即可。

**开集原像判据（定理 8.8.3）**　当 $D$ 开时，$\boldsymbol f$ 连续当且仅当每个开集 $G\subset\mathbf R^m$ 的原像在 $\mathbf R^n$ 中开。一般的 $D$ 只要求原像在 $D$ 中相对开。若连续，在原像的任一点处先取以像点为中心、包含于 $G$ 的球，再由连续性取原像内的相对邻域。反向只须令 $G=B_\varepsilon(\boldsymbol f(\boldsymbol a))$，相对开性恰好给出连续性所需的 $\delta$。

**连续像（定理 8.7.1—8.7.5、8.8.4—8.8.6）**　紧致集的连续像紧致：给像集一个开覆盖，取各成员的原像得到定义域的相对开覆盖，写成 $D$ 与环境开集之交，择出有限个再映回即可。连续映射在紧致集上一致连续，证明与闭区间相同：设存在彼此趋近但像相隔固定正距离的点对，利用列紧性使一列及其配对列沿同一下标收敛到同一点，便与连续性冲突。非空紧致集上的实值连续函数因此有最大与最小值：像是实轴上的非空有界闭集，包含自身的上下确界。

连通集的连续像连通，否则像集的相对开分离取原像就分离了定义域。故实值连续函数在连通集上取遍任意两个函数值之间的一切数；这里无需有界或闭。仅有紧致性不能保证介值，例如两个孤立点可分别映到 $-1,1$。

[练习 8.6 第 5 题（1）](/files/problems/科大数分习题-v1.pdf#page=57)：求 $x^2y/(x^4+y^2)$ 在原点的两个累次极限。再沿 $y=x^2$ 检验二元极限，便能看出先后趋近漏掉了什么。[练习 8.7 第 3 题](/files/problems/科大数分习题-v1.pdf#page=58)：对非空集合 $A$，证明距离函数 $\rho(\boldsymbol p,A)=\inf_{\boldsymbol a\in A}\|\boldsymbol p-\boldsymbol a\|$ 的零点集为 $\overline A$，且两点函数值之差的绝对值不超过两点距离。[问题 8.8 第 1 题](/files/problems/科大数分习题-v1.pdf#page=59)：紧致集上的连续单射，其逆映射在像集上连续。提示：定义域中的闭子集仍紧致，其连续像因此闭。

**小结**　比较点列时看距离或分量，判断闭性时看极限能否留在集合内。抽取子列、取最值与统一连续尺度都用紧致性；中间值的存在只需连续函数的定义域连通。
