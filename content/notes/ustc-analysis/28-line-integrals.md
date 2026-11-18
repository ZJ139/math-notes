---
title: "曲线积分：弧长、功与定向"
description: "从分割和推导两型曲线积分，区分重参数化、反向与重复经过，并用例题检查积分的几何意义。"
subject: "数学分析"
category: "ustc-analysis/fields"
tags: ["科大数分", "曲线积分", "弧长", "定向"]
created_at: "2026-11-18"
updated_at: "2026-11-18"
---

下册 §§11.1—11.2（教材第 53—59 页）。曲线记作 $\Gamma$，参数表示记作 $\boldsymbol r(t)$，向量场记作 $\boldsymbol F=(P,Q,R)$。本讲的曲线均分段 $C^1$，各光滑段正则；积分按各段相加。

[第一型积分](#第一型积分) · [第二型积分](#第二型积分) · [参数与方向](#参数与方向) · [计算与估计](#计算与估计)

## 第一型积分

把可求长曲线分成小段，段长为 $\Delta s_i$，在第 $i$ 段取点 $\boldsymbol\xi_i$。若分割宽度趋零时，和 $\sum_i f(\boldsymbol\xi_i)\Delta s_i$ 有与分割、取点无关的极限，称其为第一型曲线积分，记作 $\int_\Gamma f\,ds$。它累加的是“密度乘长度”。

**计算公式（定理 11.1.1）** 若 $f$ 连续，$\boldsymbol r:[a,b]\to\Gamma$ 是正则参数表示，则
$$
\int_\Gamma f\,ds=\int_a^b f(\boldsymbol r(t))\|\boldsymbol r'(t)\|\,dt. \qquad(1)
$$
证明：弧长公式给出 $\Delta s_i=\int_{t_{i-1}}^{t_i}\|\boldsymbol r'(t)\|dt$。原和与右端积分的差的绝对值不超过
$$
\sum_i\int_{t_{i-1}}^{t_i}
|f(\boldsymbol\xi_i)-f(\boldsymbol r(t))|\|\boldsymbol r'(t)\|dt
\le \omega_f(\delta)L,
$$
其中 $L$ 是总弧长，$\delta$ 控制各小段直径，$\omega_f$ 是 $f$ 在紧曲线上的连续模。右端趋零，故极限存在且等于 (1)。证毕。

因此线密度 $\rho$ 的质量为 $M=\int_\Gamma\rho\,ds$；若 $M>0$，质心为 $M^{-1}\int_\Gamma\boldsymbol r\rho\,ds$。这里的向量积分逐分量理解。

## 第二型积分

给曲线规定从 $A$ 到 $B$ 的方向，按此方向排列分点 $\boldsymbol r_i$。第二型曲线积分定义为
$$
\int_\Gamma\boldsymbol F\cdot d\boldsymbol r
=\lim\sum_i\boldsymbol F(\boldsymbol\xi_i)\cdot
(\boldsymbol r_i-\boldsymbol r_{i-1})
=\int_\Gamma P\,dx+Q\,dy+R\,dz.
$$
**计算公式（定理 11.2.1）** 对与指定方向一致的参数表示，
$$
\int_\Gamma\boldsymbol F\cdot d\boldsymbol r
=\int_a^b\boldsymbol F(\boldsymbol r(t))\cdot\boldsymbol r'(t)\,dt. \qquad(2)
$$
证明：把位移写成 $\boldsymbol r_i-\boldsymbol r_{i-1}=\int_{t_{i-1}}^{t_i}\boldsymbol r'(t)dt$。原和与 (2) 的差由 $\omega_{\boldsymbol F}(\delta)L$ 控制，故趋零。证毕。

若用沿正向增长的弧长参数，单位切向量 $\boldsymbol t=d\boldsymbol r/ds$ 满足
$$
\int_\Gamma\boldsymbol F\cdot d\boldsymbol r
=\int_\Gamma\boldsymbol F\cdot\boldsymbol t\,ds. \qquad(3)
$$
力场做功只取力沿切线的分量；第一型积分中的 $ds$ 始终非负，第二型积分中的位移有方向。

## 参数与方向

设 $t=\psi(u)$ 是单调 $C^1$ 可逆换元。第一型积分中
$\|d\boldsymbol r/du\|=\|\boldsymbol r'(\psi(u))\||\psi'(u)|$，换元后结果不变。第二型积分中没有绝对值；当 $\psi$ 递减时，参数运动方向反转，积分变号。因此
$$
\int_{-\Gamma}f\,ds=\int_\Gamma f\,ds,\qquad
\int_{-\Gamma}\boldsymbol F\cdot d\boldsymbol r
=-\int_\Gamma\boldsymbol F\cdot d\boldsymbol r.
$$
这是对同一条几何曲线的一次遍历而言。把圆周参数从 $[0,2\pi]$ 改成 $[0,4\pi]$ 是走两遍，两个积分都计入重数；它不是一次可逆重参数化。

## 计算与估计

**例 1　同一螺线上的两种积分。** 设
$\boldsymbol r(t)=(a\cos t,a\sin t,bt)$，$0\le t\le2\pi$，$a>0$。则
$$
\begin{aligned}
\int_\Gamma z\,ds
&=\sqrt{a^2+b^2}\int_0^{2\pi}bt\,dt
=2\pi^2b\sqrt{a^2+b^2},\\
\int_\Gamma(-y\,dx+x\,dy)
&=\int_0^{2\pi}a^2\,dt=2\pi a^2.
\end{aligned}
$$
反向走螺线只改变第二个答案的符号。后一个积分不含 $b$，因为所用一阶形式只记录在 $xy$ 平面上的投影运动。

**例 2　对称性先于参数化。** 球面 $x^2+y^2+z^2=a^2$ 与平面 $x+y+z=0$ 交成大圆 $\Gamma$。坐标置换保弧长，故三个平方积分相等，三个交叉积分也相等。由圆长 $2\pi a$ 及 $x^2+y^2+z^2=a^2$，有 $\int_\Gamma x^2ds=2\pi a^3/3$。再积分恒等式 $(x+y+z)^2=0$，得
$$
\int_\Gamma xy\,ds=-\frac{\pi a^3}{3}.
$$

两类积分都满足线性与分段可加性；由积分三角不等式及 Cauchy 不等式，
$$
\left|\int_\Gamma f\,ds\right|\le L\max_\Gamma|f|,\qquad
\left|\int_\Gamma\boldsymbol F\cdot d\boldsymbol r\right|
\le\int_\Gamma\|\boldsymbol F\|ds\le L\max_\Gamma\|\boldsymbol F\|.
$$
计算时先辨认积分类型，再规定一次遍历的参数和方向，最后代入 $ds$ 或 $dx,dy,dz$。把 $ds$ 换成 $dx$ 会丢掉长度因子及其非负性。

配套原题：[练习 11.1](/files/problems/科大数分习题-v2%282%29.pdf#page=10) · [练习 11.2](/files/problems/科大数分习题-v2%282%29.pdf#page=10)。先做参数计算，再做对称性与方向检验。

[上一讲　专题Ⅴ总览：几何积分与向量场](/notes/ffe9853c61f5c4c136c5bba9/) · [专题Ⅴ目录](/math/ustc-analysis/#fields) · [下一讲　Green 公式、平面势与等周不等式](/notes/d153c04c7b38e36278d815fe/)
