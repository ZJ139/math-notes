---
title: "每周一题好题选讲（2023年）：核的分解与二次型的构造"
description: "从 2023 年 15 道每周一题中选出 6 题，用 Bézout 恒等式、分块运算、特征向量、合同消元及归纳法串起核分解、Jordan 型、正定性和惯性指数。"
subject: "高等代数"
tags: ["每周一题", "好题选讲", "2023", "多项式", "Jordan标准型", "二次型", "正定矩阵"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

[选讲总目录](/essays/3981869cd6190a33d8e8f2d6/) · [文章栏目](/essays/) · [2022 年](/essays/20ae1d5adda33dfd59dd5c38/)


本篇从 2023 年的 15 道题中选出 6 道。题目集中展示：怎样把多项式恒等式变成子空间分解，怎样用少量不变量确定标准型，以及怎样从二次型条件构造需要的向量与基。

2023S08 重写为分块运算，不使用 Kronecker 积；2023S09 使用矩阵方程和特征向量证明，不依赖积分表示。其他题也围绕高等代数中的基本工具展开。页码均指现有《每周一题解答》合订本。

## 题号导航

- [问题 2023S01：最大公因式与核的交，最小公倍式与核的和](#问题-2023s01)
- [问题 2023S08：用幂零指数和核维数确定 Jordan 型](#问题-2023s08)
- [问题 2023S09：从分母识别矩阵方程](#问题-2023s09)
- [问题 2023S11：二次型恒为零的子空间能有多大](#问题-2023s11)
- [问题 2023S12：加边主子式怎样决定整个矩阵的秩](#问题-2023s12)
- [问题 2023S15：将迹条件变成零对角的正交基](#问题-2023s15)
- [方法之间的联系](#方法之间的联系)

## 问题 2023S01

**原题号：** 2023S01。[原解答 PDF 第 259 页](/files/problems/每周一题解答.pdf#page=259)

**题目：** 设 $V$ 是数域 $K$ 上的 $n$ 维线性空间，$\varphi$ 是 $V$ 上的线性变换。设 $f,g\in K[x]$ 为首一多项式，$d=\gcd(f,g)$、$m=\operatorname{lcm}(f,g)$。证明

$$
\begin{aligned}
\ker d(\varphi)&=\ker f(\varphi)\cap\ker g(\varphi),\\
\ker m(\varphi)&=\ker f(\varphi)+\ker g(\varphi).
\end{aligned}
$$

**入选理由：** 整除关系很容易给出一侧包含；Bézout 恒等式则能给出反向包含，更能直接写出所需的向量分解。这是一条连接多项式与不变子空间的通法。

**证明：** 写 $f=df_1$、$g=dg_1$。则 $f_1,g_1$ 互素，$m=df_1g_1$，并有多项式 $u,v$ 使

$$
uf_1+vg_1=1,\qquad uf+vg=d.
$$

因 $d\mid f,g$，属于 $\ker d(\varphi)$ 的向量必同时属于 $\ker f(\varphi)$ 和 $\ker g(\varphi)$。反之，若 $f(\varphi)\alpha=g(\varphi)\alpha=0$，则

$$
d(\varphi)\alpha=u(\varphi)f(\varphi)\alpha+v(\varphi)g(\varphi)\alpha=0.
$$

这证明第一个等式。

因 $f\mid m$、$g\mid m$，容易得到 $\ker f(\varphi)+\ker g(\varphi)\subseteq\ker m(\varphi)$。任取 $\alpha\in\ker m(\varphi)$，利用另一条 Bézout 等式写成

$$
\alpha=\beta+\gamma,\qquad
\beta=v(\varphi)g_1(\varphi)\alpha,\qquad
\gamma=u(\varphi)f_1(\varphi)\alpha.
$$

代入同一个变换得到的多项式彼此交换，且 $fg_1=gf_1=m$，故

$$
\begin{aligned}
f(\varphi)\beta&=v(\varphi)m(\varphi)\alpha=0,\\
g(\varphi)\gamma&=u(\varphi)m(\varphi)\alpha=0.
\end{aligned}
$$

所以 $\beta\in\ker f(\varphi)$、$\gamma\in\ker g(\varphi)$，反向包含成立。

**方法总结与推广：** 若 $f,g$ 互素且 $f(\varphi)g(\varphi)=0$，上面两个等式立即给出

$$
V=\ker f(\varphi)\oplus\ker g(\varphi).
$$

而且投影可以显式写出：取 $uf+vg=1$，则 $v(\varphi)g(\varphi)$ 在 $\ker f(\varphi)$ 上等于恒等变换，在 $\ker g(\varphi)$ 上为零，正是投向前一分量的投影。对两两互素的多个因子反复使用该结论，就得到相应的直和分解；若不互素，只能先断言子空间的和，不能擅自加上“直”。

[返回题号导航](#题号导航)

## 问题 2023S08

**原题号：** 2023S08。[原解答 PDF 第 267 页](/files/problems/每周一题解答.pdf#page=267)

**题目：** 设

$$
C=\begin{pmatrix}0&-b\\1&a\end{pmatrix}
$$

是实系数多项式 $t^2-at+b$ 的友阵，且

$$
A=\begin{pmatrix}
C&I_2&&\\
&C&\ddots&\\
&&\ddots&I_2\\
&&&C
\end{pmatrix}\in M_{2n}(\mathbb R).
$$

求 $A$ 在复数域上的 Jordan 标准型。

**入选理由：** 不同根与重根会产生截然不同的块结构。重根情形只需确定最大块的阶数和块的个数，就能完成分类，不必计算所有高次幂的秩。

**解：** 设 $t^2-at+b$ 的两根为 $\lambda_1,\lambda_2$。

若 $a^2\ne4b$，则两根互异，存在可逆矩阵 $P$ 使 $P^{-1}CP=\operatorname{diag}(\lambda_1,\lambda_2)$。用分块对角矩阵 $\operatorname{diag}(P,\ldots,P)$ 作相似变换，各个对角块被对角化，上副对角块仍是 $I_2$。再把所有块的第一坐标排在一起，所有第二坐标排在一起，得到

$$
A\sim J_n(\lambda_1)\oplus J_n(\lambda_2),
\qquad \lambda_{1,2}=\frac{a\pm\sqrt{a^2-4b}}2.
$$

若 $a^2=4b$，令 $\lambda=a/2$。因 $C\ne\lambda I_2$，且 $(C-\lambda I_2)^2=0$，故 $C\sim J_2(\lambda)$。作同样的分块换基后，$A-\lambda I_{2n}$ 化为

$$
N=\begin{pmatrix}
J&I_2&&\\
&J&\ddots&\\
&&\ddots&I_2\\
&&&J
\end{pmatrix},\qquad J=J_2(0).
$$

令 $R=\operatorname{diag}(J,\ldots,J)$，$S$ 为上副对角块为 $I_2$、其他块为零的矩阵，则 $N=R+S$，$R^2=0$、$S^n=0$，并且 $RS=SR$。由有限二项式公式，

$$
N^k=S^k+kRS^{k-1}\qquad(k\ge1).
$$

所以 $N^{n+1}=0$，而 $N^n=nRS^{n-1}\ne0$：取只有最后一块为 $(0,1)^{\mathsf T}$ 的向量，$RS^{n-1}$ 将它送到第一块为 $(1,0)^{\mathsf T}$ 的非零向量。因此 $N$ 的最大 Jordan 块大小恰为 $n+1$。

当 $n\ge2$ 时，设 $x=(x_1,\ldots,x_n)^{\mathsf T}$，其中每个 $x_j\in\mathbb C^2$。方程 $Nx=0$ 等价于

$$
x_{j+1}=-Jx_j\quad(1\le j<n),\qquad Jx_n=0.
$$

任意给定 $x_1$，就得到 $x_2=-Jx_1$，其后各块均为零，最后的条件自动成立。因此 $\dim\ker N=2$，即共有两个 Jordan 块。总维数为 $2n$，已知一块大小为 $n+1$，另一块只能为 $n-1$。于是

$$
A\sim J_{n+1}(a/2)\oplus J_{n-1}(a/2)\qquad(n\ge2).
$$

当 $n=1$ 时，$A=C\sim J_2(a/2)$，不另列零阶块。

**方法总结与推广：** 幂零矩阵的每个 Jordan 块对核贡献一维，幂零指数等于最大块的阶数。因此本题的“核维数为二”和“幂零指数为 $n+1$”已足够决定所有块。若块数更多，可继续利用

$$
\dim\ker N^k-\dim\ker N^{k-1}
=\text{大小至少为 }k\text{ 的 Jordan 块数}.
$$

其理由是单个大小为 $r$ 的块满足 $\dim\ker J_r(0)^k=\min\{k,r\}$，作差后恰在 $r\ge k$ 时贡献 $1$。先判断需要多少信息，再决定计算多少个幂，往往能省去大量运算。

[返回题号导航](#题号导航)

## 问题 2023S09

**原题号：** 2023S09。[原解答 PDF 第 268 页](/files/problems/每周一题解答.pdf#page=268)

**题目：** 设 $A=(a_{ij})$ 为 $n$ 阶正定实对称矩阵，$b_1,\ldots,b_n>0$。证明

$$
B=\left(\frac{a_{ij}}{b_i+b_j}\right)_{n\times n}
$$

也是正定矩阵。

**入选理由：** 分母中的“两指标之和”恰好对应左右各乘一次对角矩阵。将逐项公式变成矩阵方程后，沿目标矩阵的特征向量检查正负号，就能避开复杂的行列式和积分。

**证明：** 令 $D=\operatorname{diag}(b_1,\ldots,b_n)$，逐项计算得到

$$
DB+BD=A.
$$

矩阵 $B$ 实对称。取任意实特征对 $Bx=\mu x$，其中 $x\ne0$。利用对称性，有

$$
\begin{aligned}
0<x^{\mathsf T}Ax
&=x^{\mathsf T}(DB+BD)x\\
&=\mu x^{\mathsf T}Dx+(Bx)^{\mathsf T}Dx
=2\mu x^{\mathsf T}Dx.
\end{aligned}
$$

因 $D$ 正定，$x^{\mathsf T}Dx>0$，故 $\mu>0$。实对称矩阵存在标准正交特征向量基，所以所有特征值为正等价于正定，结论得证。

**方法总结与推广：** 对任意正定实对称矩阵 $D$ 和正定实对称矩阵 $A$，方程 $DB+BD=A$ 都有唯一的对称解，而且该解正定。事实上，取正交矩阵 $Q$ 使 $Q^{\mathsf T}DQ=\operatorname{diag}(d_i)$，令 $\widetilde A=Q^{\mathsf T}AQ$，则变换后方程的唯一解为

$$
\widetilde b_{ij}=\frac{\widetilde a_{ij}}{d_i+d_j},\qquad
B=Q\widetilde BQ^{\mathsf T}.
$$

各分母均正，解存在且唯一；正定性沿用上面的特征向量证明。若 $A$ 仅半正定，同样得到 $B$ 半正定。这说明题目背后的对象是一类矩阵方程，而不只是一个特殊的分母形式。

[返回题号导航](#题号导航)

## 问题 2023S11

**原题号：** 2023S11。[原解答 PDF 第 270 页](/files/problems/每周一题解答.pdf#page=270)

**题目：** 设实二次型 $f$ 的正、负惯性指数分别为 $p,q$。令

$$
\mathcal S=\{U\le\mathbb R^n:f(\alpha)=0\text{ 对每个 }\alpha\in U\text{ 成立}\}.
$$

证明

$$
\max_{U\in\mathcal S}\dim U=n-\max\{p,q\}.
$$

**入选理由：** 维数上界来自子空间的交，达到上界则靠正、负方向逐一配对。它将惯性指数的几何含义落实为一个能够明确构造的极值问题。

**证明：** 记 $r=n-p-q$。由二次型的规范形，经可逆线性换元，可设

$$
f(u,v,w)=\|u\|^2-\|v\|^2,
\qquad (u,v,w)\in\mathbb R^p\oplus\mathbb R^q\oplus\mathbb R^r.
$$

可逆换元保持子空间维数及二次型在其上恒为零的性质。令 $V_+$、$V_-$ 分别为正、负坐标子空间。若 $U\in\mathcal S$，则 $U\cap V_+=\{0\}$：交中的向量既使 $f$ 为零，又在正定子空间中，只能为零。同理，$U\cap V_-=\{0\}$。于是

$$
\dim U+p=\dim(U+V_+)\le n,\qquad
\dim U+q=\dim(U+V_-)\le n.
$$

故 $\dim U\le n-\max\{p,q\}$。

为达到上界，记 $s=\min\{p,q\}$。设三个坐标子空间的标准基依次为 $e_i$、$g_j$、$h_k$，取

$$
U_0=\operatorname{span}\{e_1+g_1,\ldots,e_s+g_s,h_1,\ldots,h_r\}.
$$

这些向量线性无关，且对任意系数有

$$
f\left(\sum_{i=1}^st_i(e_i+g_i)+\sum_{k=1}^ra_kh_k\right)
=\sum_{i=1}^st_i^2-\sum_{i=1}^st_i^2=0.
$$

所以 $U_0\in\mathcal S$，并且 $\dim U_0=s+r=n-\max\{p,q\}$。

**方法总结与推广：** 仅检查生成向量各自使二次型为零还不够。例如对 $f(x,y)=x^2-y^2$，$(1,1)$、$(1,-1)$ 各自都是零点，二者之和却不是零点。本题通过正、负坐标一一配对，直接检验了任意线性组合，才得到整个子空间。

若 $f$ 非退化，即 $p+q=n$，最大维数简化为 $\min\{p,q\}$；若 $f$ 半正定，即 $q=0$，它等于 $n-p$，恰为对称矩阵的核维数。这两种边界情形都由同一个构造统一解释。

[返回题号导航](#题号导航)

## 问题 2023S12

**原题号：** 2023S12。[原解答 PDF 第 271 页](/files/problems/每周一题解答.pdf#page=271)

**题目：** 设 $A$ 为 $n$ 阶半正定实对称矩阵。证明：$\operatorname{rank}A=r$ 的充要条件是 $A$ 有一个非零的 $r$ 阶主子式 $\det M$，且所有包含它的 $r+1$ 阶加边主子式均为零。

**入选理由：** 一般矩阵的秩不能只由这一小组主子式决定。半正定性把“剩余对角元全为零”提升成“剩余整个矩阵为零”，这是题设中不可替代的信息。

**证明：** 先设 $1\le r<n$。若 $\operatorname{rank}A=r$，由正交对角化可写 $A=C^{\mathsf T}C$。因为

$$
x^{\mathsf T}Ax=\|Cx\|^2,
$$

有 $\ker A=\ker C$，故 $\operatorname{rank}C=r$。从 $C$ 中选取 $r$ 个线性无关的列，组成矩阵 $C_I$。相应主子矩阵 $M=C_I^{\mathsf T}C_I$ 正定，因而 $\det M>0$。另一方面，秩为 $r$ 保证所有 $r+1$ 阶子式为零，当然包括题述的加边主子式。

反之，同时置换行、列，将指定的主子矩阵放在左上角，写成

$$
A=\begin{pmatrix}M&B\\B^{\mathsf T}&D\end{pmatrix},\qquad
T=\begin{pmatrix}I_r&-M^{-1}B\\0&I_{n-r}\end{pmatrix}.
$$

直接分块相乘得

$$
T^{\mathsf T}AT=\begin{pmatrix}M&0\\0&S\end{pmatrix},
\qquad S=D-B^{\mathsf T}M^{-1}B.
$$

合同变换保持半正定性，故 $S$ 半正定。设 $B$ 第 $j$ 列为 $b_j$，则对应的加边主子式经相同消元后等于

$$
\det\begin{pmatrix}M&b_j\\b_j^{\mathsf T}&d_{jj}\end{pmatrix}
=\det M\,(d_{jj}-b_j^{\mathsf T}M^{-1}b_j)
=\det M\,s_{jj}.
$$

由假设及 $\det M\ne0$，得到所有 $s_{jj}=0$。任取 $i\ne j$ 和实数 $t$，半正定性给出

$$
0\le(e_i+te_j)^{\mathsf T}S(e_i+te_j)=2ts_{ij}.
$$

令 $t$ 分别取正、负值，便得 $s_{ij}=0$。所以 $S=0$，从而 $\operatorname{rank}A=\operatorname{rank}M=r$。

当 $r=n$ 时，条件就是 $\det A\ne0$，不再需要检验加边主子式。当 $r=0$ 时，按零阶主子式为 $1$ 的约定，条件变成全部对角元为零；刚才的二次型论证说明这等价于 $A=0$。

**方法总结与推广：** 一般的可逆分块消元总给出

$$
\operatorname{rank}A=r+\operatorname{rank}(D-B^{\mathsf T}M^{-1}B).
$$

本题中，加边主子式负责检测后一矩阵的对角元，半正定性再检测它的全部元素。若去掉半正定性，结论失败：

$$
A=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}
$$

有非零的一阶主子式 $1$，所有包含它的二阶主子式都为零，但 $\operatorname{rank}A=3$。这也说明，不能把本题的判别条件不加修改地用于任意对称矩阵。

[返回题号导航](#题号导航)

## 问题 2023S15

**原题号：** 2023S15。[原解答 PDF 第 275 页](/files/problems/每周一题解答.pdf#page=275)

**题目：** 设 $A$ 为 $n$ 阶实对称矩阵。证明：$A$ 正交相似于一个主对角元全为零的实对称矩阵，当且仅当 $\operatorname{tr}A=0$。

**入选理由：** 迹是必要的不变量，但充分性要求真正构造一组基。先用一正一负两个特征方向造出一个零对角元，再对剩余主子矩阵归纳，能把整体条件逐个落实。

**证明：** 若 $Q$ 正交且 $Q^{\mathsf T}AQ$ 的对角元全为零，则由迹的相似不变性，$\operatorname{tr}A=0$。

反之，对 $n$ 归纳。$n=1$ 时结论显然。若 $A=0$，也无需变换。设 $A\ne0$ 且 $\operatorname{tr}A=0$。由实对称矩阵的谱分解，特征值全为实数，其和为零，又不全为零，因此至少有一个正特征值 $\lambda$ 和一个负特征值 $\mu$。取相应的单位特征向量 $u,v$，则 $u^{\mathsf T}v=0$。令

$$
w=\sqrt{\frac{-\mu}{\lambda-\mu}}\,u
+\sqrt{\frac{\lambda}{\lambda-\mu}}\,v.
$$

直接计算得 $w^{\mathsf T}w=1$、$w^{\mathsf T}Aw=0$。将 $w$ 扩充为一组标准正交基，以这些向量为列组成正交矩阵 $S$，则

$$
S^{\mathsf T}AS=\begin{pmatrix}0&b^{\mathsf T}\\b&C\end{pmatrix},
\qquad C^{\mathsf T}=C,\qquad\operatorname{tr}C=0.
$$

由归纳假设，存在 $n-1$ 阶正交矩阵 $R$，使 $R^{\mathsf T}CR$ 的对角元全为零。取 $Q=S\operatorname{diag}(1,R)$，便有

$$
Q^{\mathsf T}AQ=
\begin{pmatrix}0&b^{\mathsf T}R\\R^{\mathsf T}b&R^{\mathsf T}CR\end{pmatrix},
$$

其对角元全为零，归纳完成。这里不要求 $w^\perp$ 在 $A$ 下不变，所以非对角块 $b$ 不必为零。

**方法总结与推广：** 对任意实对称矩阵 $A$，令 $c=\operatorname{tr}A/n$，则 $A-cI$ 的迹为零。应用本题，可找到正交矩阵 $Q$，使 $Q^{\mathsf T}AQ$ 的全部对角元均等于 $c$。因此“把对角元均匀化”总能做到；要全部变成某个指定实数 $t$，充要条件就是 $\operatorname{tr}A=nt$。这一推广只需平移纯量矩阵，不需要关于特征值与对角元关系的额外定理。

[返回题号导航](#题号导航)

## 方法之间的联系

- **把关系写成可以作用于向量的恒等式。** 2023S01 将 Bézout 等式作用于向量，产生显式分解；2023S09 将元素公式写成 $DB+BD=A$，再沿特征向量判断符号。
- **只计算足够决定结论的不变量。** 2023S08 使用最大块大小与块数，2023S11 使用正、负惯性指数，2023S12 使用消元后矩阵的秩。这些信息各自对应清楚的几何或代数意义。
- **把存在性变成构造。** 2023S11 配对正、负方向达到维数上界；2023S15 混合两个特征方向，再逐维归纳。构造之后还应检查整个子空间或整组基，而不能只检查某几个向量。
