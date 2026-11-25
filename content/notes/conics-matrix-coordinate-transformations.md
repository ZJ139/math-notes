---
title: "二次曲线的矩阵理论与坐标变换"
description: "保留原稿十节体系与三道例题，补全矩阵变换、不变量、几何元素和焦点秩一判别的证明，附 S 样式 CM ams 讲义。"
subject: "解析几何"
tags: [解析几何, 二次曲线, 二次型, 坐标变换, S样式, CM ams]
attachment: "notes/conics-matrix-coordinate-transformations-cm-ams.pdf"
math_font: "cm-ams"
created_at: "2026-11-26"
updated_at: "2026-11-26"
---

一条二次曲线的方程可以编码为一个三阶实对称矩阵。正交对角化确定新坐标轴，平移确定新原点；标准方程给出半轴、焦点和准线，再用同一个坐标变换把这些对象写回原坐标系。本讲保留原稿的十节结构、分类表、变换对照与三道例题，补充证明、边界情形及两道巩固例题。

[下载 S 样式讲义 PDF（CM ams）](/files/notes/conics-matrix-coordinate-transformations-cm-ams.pdf)

**阅读主线：** 一般方程 → 矩阵与不变量 → 判定类型 → 正交对角化 → 求中心或顶点 → 标准方程 → 几何元素 → 原坐标表达。

**记号约定：** $\boldsymbol{x}=(x,y)^T$，$X=(x,y,1)^T$；矩阵运算中的向量均为列向量。$Q=(\boldsymbol e_1\ \boldsymbol e_2)$ 的列为单位正交方向，约定 $\det Q=1$。为避免原稿中常数项与焦半距都写作 $c$ 的混淆，方程常数项记为 $c_0$，焦半距仍记为 $c$；粗体 $\boldsymbol b$ 是一次项系数列，普通 $b$ 是半短轴或半虚轴。

**目录**

1. [§1 二次曲线的矩阵表示](#1-二次曲线的矩阵表示)
2. [§2 坐标变换对方程与矩阵的作用](#2-坐标变换对方程与矩阵的作用)
3. [§3 化标准形与九类曲线](#3-化标准形与九类曲线)
4. [§4 椭圆与双曲线的几何元素](#4-椭圆与双曲线的几何元素)
5. [§5 抛物线的几何元素](#5-抛物线的几何元素)
6. [§6 原曲线与标准曲线的变换关系](#6-原曲线与标准曲线的变换关系)
7. [§7 例题与巩固](#7-例题与巩固)
8. [§8 焦点的秩一判别法](#8-焦点的秩一判别法)
9. [§9 常见易错点与检查清单](#9-常见易错点与检查清单)
10. [§10 知识体系与空间推广](#10-知识体系与空间推广)

## §1 二次曲线的矩阵表示

### §1.1 一般方程与三种写法

> **核心公式：系数与矩阵**
>
> 设 $(a_{11},a_{12},a_{22})\ne(0,0,0)$，一般二次方程为
>
>
> $$
> F(x,y)=a_{11}x^2+2a_{12}xy+a_{22}y^2+2a_{13}x+2a_{23}y+a_{33}=0.
> $$
>
>
> 定义
>
>
> $$
> A=\begin{pmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{pmatrix},\quad \boldsymbol b=\begin{pmatrix}a_{13}\\a_{23}\end{pmatrix},\quad c_0=a_{33},
> $$
>
>
>
> $$
> \widehat A=\begin{pmatrix}A&\boldsymbol b\\\boldsymbol b^T&c_0\end{pmatrix}=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{12}&a_{22}&a_{23}\\a_{13}&a_{23}&a_{33}\end{pmatrix}.
> $$
>
>
> 于是
>
>
> $$
> F(\boldsymbol x)=\boldsymbol x^TA\boldsymbol x+2\boldsymbol b^T\boldsymbol x+c_0=X^T\widehat AX.\qquad\text{(1.1)}
> $$

交叉项和一次项系数须先除以 $2$。例如 $4xy$ 对应 $a_{12}=2$，而 $-32x$ 对应 $a_{13}=-16$。

记 $F_1=a_{11}x+a_{12}y+a_{13}$，$F_2=a_{12}x+a_{22}y+a_{23}$，则


$$
\begin{pmatrix}F_1\\F_2\end{pmatrix}=A\boldsymbol x+\boldsymbol b=\frac12\nabla F,\qquad F(\boldsymbol x)=\boldsymbol x^T(A\boldsymbol x+\boldsymbol b)+\boldsymbol b^T\boldsymbol x+c_0.\qquad\text{(1.2)}
$$


$\widehat A$ 决定所选方程；同一曲线也可由 $\rho\widehat A$ 表示，其中 $\rho\ne0$。因此须区分“固定方程的坐标不变量”和“与方程整体倍乘无关的几何量”。

### §1.2 不变量与特征方程

> **核心公式：三个不变量与半不变量**
>
>
> $$
> \begin{aligned}I_1&=\operatorname{tr}A=a_{11}+a_{22},\\ I_2&=\det A=a_{11}a_{22}-a_{12}^2,\\ I_3&=\det\widehat A,\\ K_1&=\begin{vmatrix}a_{11}&a_{13}\\a_{13}&c_0\end{vmatrix}+\begin{vmatrix}a_{22}&a_{23}\\a_{23}&c_0\end{vmatrix}=I_1c_0-\boldsymbol b^T\boldsymbol b.\end{aligned}\qquad\text{(1.3)}
> $$
>
>
> 特征方程为 $\lambda^2-I_1\lambda+I_2=0$。令
>
>
> $$
> \Delta=\sqrt{I_1^2-4I_2}=\sqrt{(a_{11}-a_{22})^2+4a_{12}^2},\qquad \lambda_\pm=\frac{I_1\pm\Delta}{2}.\qquad\text{(1.4)}
> $$

两特征值恒为实数；$\Delta=0$ 当且仅当 $A$ 为非零数量矩阵。此时是圆型，但还需常数项的条件，才能得到实圆而非空集或一点。

若方程整体乘以 $\rho$，则 $I_1,I_2,I_3,K_1$ 分别乘以 $\rho,\rho^2,\rho^3,\rho^2$。以下分类中使用的零性、$I_2$ 与 $K_1$ 的符号、$I_1I_3$ 的符号均不受影响。

### §1.3 几何对象的矩阵刻画

| 对象 | 矩阵条件或方程 | 适用说明 |
|---|---|---|
| 中心 $\boldsymbol x_0$ | $A\boldsymbol x_0+\boldsymbol b=0$ | 有解即给出方程的中心对称性 |
| 渐近方向 $\boldsymbol v\ne0$ | $\boldsymbol v^TA\boldsymbol v=0$ | 是方向条件，不自动给出渐近线的位置 |
| 主方向 | $A\boldsymbol v=\lambda\boldsymbol v$ | 由实对称矩阵的特征方向给出 |
| 共轭直径 | $\boldsymbol v^T(A\boldsymbol x+\boldsymbol b)=0$ | 对非渐近弦方向，实弦中点落在这一直线上 |
| 主轴 | $\lambda\boldsymbol v^T\boldsymbol x+\boldsymbol v^T\boldsymbol b=0$ | $\lambda\ne0$，$\boldsymbol v$ 是轴的法向量 |
| 正则点切线 | $X_0^T\widehat AX=0$ | $F(\boldsymbol x_0)=0$ 且 $\nabla F(\boldsymbol x_0)\ne0$ |
| 中心形式 | $F=(\boldsymbol x-\boldsymbol x_0)^TA(\boldsymbol x-\boldsymbol x_0)+I_3/I_2$ | $I_2\ne0$ |

**证明：** 将 $\boldsymbol x=\boldsymbol x_0+\boldsymbol h$ 代入，得到


$$
F(\boldsymbol x_0+\boldsymbol h)-F(\boldsymbol x_0-\boldsymbol h)=4\boldsymbol h^T(A\boldsymbol x_0+\boldsymbol b).
$$


右端对所有 $\boldsymbol h$ 为零，恰好等价于中心条件。对非退化实曲线，这也刻画通常的几何中心。

沿方向 $\boldsymbol v$ 的直线可写为 $\boldsymbol m+t\boldsymbol v$。展开得


$$
F(\boldsymbol m+t\boldsymbol v)=F(\boldsymbol m)+2t\boldsymbol v^T(A\boldsymbol m+\boldsymbol b)+t^2\boldsymbol v^TA\boldsymbol v.\qquad\text{(1.5)}
$$


若有两个不同交点，$\boldsymbol m$ 是它们的中点当且仅当两根互为相反数，即一次项为零。由此得到共轭直径方程。反过来，直径上只有使二次方程有两个实根的点才对应实弦中点，例如椭圆的这部分轨迹一般只是直径中的一段。

若 $A\boldsymbol v=\lambda\boldsymbol v$，共轭直径的法向量就是 $\boldsymbol v$。在以 $\boldsymbol v$ 为一条坐标轴的正交系中，平移消去这一坐标的一次项后，方程对该坐标变号不变，故这条直径是对称轴。切线公式则由


$$
\nabla F(\boldsymbol x_0)^T(\boldsymbol x-\boldsymbol x_0)=0
$$


和 $F(\boldsymbol x_0)=0$ 展开得到。奇异点不能直接套用这一公式作为唯一切线。

## §2 坐标变换对方程与矩阵的作用

### §2.1 刚体变换与新轴方向

> **核心公式：正变换与逆变换**
>
>
> $$
> Q=R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}=(\boldsymbol e_1\ \boldsymbol e_2),
> $$
>
>
>
> $$
> \boldsymbol x=Q\boldsymbol x'+\boldsymbol x_0,\qquad \boldsymbol x'=Q^T(\boldsymbol x-\boldsymbol x_0),\qquad T=\begin{pmatrix}Q&\boldsymbol x_0\\0^T&1\end{pmatrix},\quad X=TX'.\qquad\text{(2.1)}
> $$

分量形式为


$$
\begin{aligned}x&=x'\cos\theta-y'\sin\theta+x_0,& x'&=(x-x_0)\cos\theta+(y-y_0)\sin\theta,\\ y&=x'\sin\theta+y'\cos\theta+y_0,& y'&=-(x-x_0)\sin\theta+(y-y_0)\cos\theta.\end{aligned}\qquad\text{(2.2)}
$$


$Q$ 的列是新轴在旧坐标系中的方向，不能把列误读为行。$\det Q=-1$ 时仍保长度和角度，但包含反射；调整一个特征向量的符号即可令 $\det Q=1$。

### §2.2 变换律及不变量的证明

> **定理 2.1：矩阵变换律**
>
> 在式（2.1）下，$F(\boldsymbol x)=F'(\boldsymbol x')$，且
>
>
> $$
> A'=Q^TAQ,\qquad \boldsymbol b'=Q^T(A\boldsymbol x_0+\boldsymbol b),\qquad c_0'=F(\boldsymbol x_0),\qquad \widehat A'=T^T\widehat AT.\qquad\text{(2.3)}
> $$

**证明：** 直接展开：


$$
\begin{aligned}F(Q\boldsymbol x'+\boldsymbol x_0)&=\boldsymbol x'^TQ^TAQ\boldsymbol x'+2(A\boldsymbol x_0+\boldsymbol b)^TQ\boldsymbol x'+F(\boldsymbol x_0).
\end{aligned}
$$


比较二次项、一次项和常数项即得前三式。最后一式也可由 $X^T\widehat AX=X'^T(T^T\widehat AT)X'$ 得到。

$A'=Q^{-1}AQ$，所以 $I_1,I_2$ 与特征值不变；$\det T=1$，所以 $I_3$ 不变。允许反射时 $\det T=-1$，仍因 $(\det T)^2=1$ 而保持 $I_3$。

对纯旋转，$K_1=I_1c_0-\|\boldsymbol b\|^2$ 不变。对平移 $\boldsymbol x=\boldsymbol z+\boldsymbol h$，记新量为 $K_1'$，由 $A^2-I_1A+I_2I=0$ 得


$$
K_1'-K_1=I_2\|\boldsymbol h\|^2+2\boldsymbol h^T(I_1I-A)\boldsymbol b.\qquad\text{(2.4)}
$$


当 $I_2=I_3=0$ 时，$A$ 秩为 $1$。在特征坐标系中 $A=\operatorname{diag}(0,I_1)$，而 $I_3=-I_1\beta_1^2=0$ 迫使 $\beta_1=0$，故 $\boldsymbol b\in\operatorname{im}A$，$(I_1I-A)\boldsymbol b=0$。式（2.4）说明此时 $K_1$ 在平移下也不变，这就是它在退化抛物型分类中的作用。

### §2.3 旋转角的两种求法

非对角元为


$$
a_{12}'=\frac12(a_{22}-a_{11})\sin2\theta+a_{12}\cos2\theta.
$$


若 $a_{12}\ne0$，消去交叉项可用


$$
\cot2\theta=\frac{a_{11}-a_{22}}{2a_{12}}.\qquad\text{(2.5)}
$$


当 $a_{11}=a_{22}$ 且 $a_{12}\ne0$ 时，可取 $\theta=\pi/4$。若 $a_{12}=0$，原方程已无交叉项，不必使用含零分母的公式；若还满足 $a_{11}=a_{22}$，任何旋转都保持二次部分不变。

式（2.5）只确定两条轴，不决定哪一条作为 $x'$ 轴。选定 $x'$ 对应的特征值 $\lambda_1$ 后，更稳妥的方法是求 $A\boldsymbol e_1=\lambda_1\boldsymbol e_1$；在 $a_{12}\ne0$ 时有


$$
\tan\theta=\frac{\lambda_1-a_{11}}{a_{12}}.\qquad\text{(2.6)}
$$


再把 $\boldsymbol e_1$ 逆时针旋转 $90^\circ$ 得到 $\boldsymbol e_2$，便自动有 $\det Q=1$。

### §2.4 主动与被动观点

**被动观点：** 曲线固定，把原点移到 $\boldsymbol x_0$，把坐标轴取为 $\boldsymbol e_1,\boldsymbol e_2$。同一个点的新坐标是 $Q^T(\boldsymbol x-\boldsymbol x_0)$。

**主动观点：** 坐标系固定，把标准位置的曲线 $C_0$ 经 $\varphi(\boldsymbol z)=Q\boldsymbol z+\boldsymbol x_0$ 搬到 $C$。于是 $C=\varphi(C_0)$，两条曲线全等，几何对象也随这一个刚体运动一起变换。

## §3 化标准形与九类曲线

### §3.1 有心型：$I_2\ne0$

> **定理 3.1：中心标准形**
>
> 令 $\boldsymbol x_0=-A^{-1}\boldsymbol b$，并取 $Q^TAQ=\operatorname{diag}(\lambda_1,\lambda_2)$。则
>
>
> $$
> F(\boldsymbol x_0)=\frac{I_3}{I_2},\qquad F(\boldsymbol x)=(\boldsymbol x-\boldsymbol x_0)^TA(\boldsymbol x-\boldsymbol x_0)+\frac{I_3}{I_2},
> $$
>
>
>
> $$
> \lambda_1x'^2+\lambda_2y'^2+\frac{I_3}{I_2}=0.\qquad\text{(3.1)}
> $$

**证明：** 平移到中心使一次项为零。又由分块消元，


$$
\det\widehat A=\det A\,(c_0-\boldsymbol b^TA^{-1}\boldsymbol b)=I_2F(\boldsymbol x_0).
$$


除以 $I_2$ 即得常数项；再用实对称矩阵的正交对角化定理，得到式（3.1）。实际计算中解线性方程 $A\boldsymbol x_0=-\boldsymbol b$ 通常比显式求逆更简洁。

### §3.2 无心型：$I_2=0$、$I_3\ne0$

$A\ne0$ 且秩为 $1$，所以 $I_1\ne0$。取 $\boldsymbol e_1$ 为零特征值的单位特征向量，$\boldsymbol e_2$ 为 $I_1$ 的单位特征向量，先只旋转，记 $\boldsymbol z=Q^T\boldsymbol x$，$\beta_i=\boldsymbol e_i^T\boldsymbol b$。方程变为


$$
I_1z_2^2+2\beta_1z_1+2\beta_2z_2+c_0=0,\qquad I_3=-I_1\beta_1^2.\qquad\text{(3.2)}
$$


于是 $\beta_1\ne0$，中心方程在第一分量要求 $\beta_1=0$，无解。配方得


$$
I_1\left(z_2+\frac{\beta_2}{I_1}\right)^2+2\beta_1\left(z_1-\frac{\beta_2^2/I_1-c_0}{2\beta_1}\right)=0.
$$


> **核心公式：顶点与抛物线标准形**
>
>
> $$
> z_{2,V}=-\frac{\beta_2}{I_1},\qquad z_{1,V}=\frac{\beta_2^2/I_1-c_0}{2\beta_1},\qquad \boldsymbol V=z_{1,V}\boldsymbol e_1+z_{2,V}\boldsymbol e_2.\qquad\text{(3.3)}
> $$
>
>
> 选 $\boldsymbol e_1$ 的符号使 $I_1\beta_1<0$，并令 $x'=z_1-z_{1,V}$、$y'=z_2-z_{2,V}$，则
>
>
> $$
> y'^2=2px',\qquad p=-\frac{\beta_1}{I_1}=\frac{|\beta_1|}{|I_1|}=\sqrt{-\frac{I_3}{I_1^3}}>0.\qquad\text{(3.4)}
> $$

由于 $\boldsymbol e_1^TA=0$，任何平移都不改变 $\boldsymbol e_1^T\boldsymbol b$；因此开口方向的符号判断不依赖原点。

### §3.3 线心型：$I_2=I_3=0$

由式（3.2）有 $\beta_1=0$。沿 $z_2$ 平移后，方程为


$$
I_1y'^2+\frac{K_1}{I_1}=0,\qquad y'^2=-\frac{K_1}{I_1^2}.\qquad\text{(3.5)}
$$


中心方程仅限制 $z_2=-\beta_2/I_1$，中心构成一条直线。$K_1<0$ 时为两条不同的实平行直线；$K_1=0$ 时为重合直线；$K_1>0$ 时无实点，传统上称为一对虚平行直线。

### §3.4 分类总表与圆的条件

表中 $a,b,p>0$，各标准形均在适当正交坐标系中书写。

| 二次部分 | 附加条件 | 曲线 | 标准形 |
|---|---|---|---|
| $I_2>0$ | $I_1I_3<0$ | 实椭圆 | $\dfrac{x'^2}{a^2}+\dfrac{y'^2}{b^2}=1$ |
| $I_2>0$ | $I_1I_3>0$ | 虚椭圆（无实点） | $\dfrac{x'^2}{a^2}+\dfrac{y'^2}{b^2}=-1$ |
| $I_2>0$ | $I_3=0$ | 一点 | $\dfrac{x'^2}{a^2}+\dfrac{y'^2}{b^2}=0$ |
| $I_2<0$ | $I_3\ne0$ | 双曲线 | $\dfrac{x'^2}{a^2}-\dfrac{y'^2}{b^2}=1$ |
| $I_2<0$ | $I_3=0$ | 两条相交直线 | $\dfrac{x'^2}{a^2}-\dfrac{y'^2}{b^2}=0$ |
| $I_2=0$ | $I_3\ne0$ | 抛物线 | $y'^2=2px'$ |
| $I_2=I_3=0$ | $K_1<0$ | 两条平行直线 | $y'^2=a^2$ |
| $I_2=I_3=0$ | $K_1=0$ | 重合直线 | $y'^2=0$ |
| $I_2=I_3=0$ | $K_1>0$ | 虚平行直线（无实点） | $y'^2=-a^2$ |

**分类依据：** $I_2>0$ 时两特征值同号，符号与 $I_1$ 相同；将式（3.1）乘以该符号即可判断右端是正、负还是零。$I_2<0$ 时两特征值异号，常数项非零给出双曲线，为零则二次式分解成两条相交直线。秩为 $1$ 的情况已由式（3.4）、（3.5）穷尽。

实圆的充要条件是 $I_1^2=4I_2$ 且 $I_1I_3<0$。“一点是一对共轭虚直线”是在复数域中分解二次式的说法，不能读成实平面中还有两条直线。

> **辨析：配方法与正交变换**
>
> 一般配方法对应 $\boldsymbol x=M\boldsymbol z+\boldsymbol h$，得到 $A'=M^TAM$。$M$ 可逆便保持惯性，但若 $M$ 不正交，不能直接把新坐标中的长度当成原平面的长度。此时欧氏度量变为 $d\boldsymbol z^TM^TM\,d\boldsymbol z$。
>
> 因此，一般非正交配方适合判型；求焦点、轴长与离心率时应采用正交变换，或者同时正确追踪度量。纯平移配方当然保持长度，不能笼统说“配方法不能求几何元素”。

## §4 椭圆与双曲线的几何元素

### §4.1 焦轴特征值与半轴长

焦点所在的轴称为焦轴。记它对应的特征值为 $\lambda_1$，方向为 $\boldsymbol e_1$；另一个特征值为 $\lambda_2$。椭圆的 $\lambda_1$ 取绝对值较小者；双曲线的 $\lambda_1$ 取与 $I_3$ 同号者。

| 几何量 | 实椭圆 | 双曲线 |
|---|---|---|
| $a^2$ | $-\dfrac{I_3}{I_2\lambda_1}$ | $-\dfrac{I_3}{I_2\lambda_1}$ |
| $b^2$ | $-\dfrac{I_3}{I_2\lambda_2}$ | $\dfrac{I_3}{I_2\lambda_2}$ |
| $c^2$ | $a^2-b^2$ | $a^2+b^2$ |
| 离心率 | $e=c/a$ | $e=c/a$ |

**理由：** 在式（3.1）中将常数项移到右端。椭圆同号系数的绝对值越小，分母越大，故对应长轴。双曲线 $I_2<0$，右端 $-I_3/I_2$ 与 $I_3$ 同号，实轴系数须与右端同号。两种选择都保证 $a^2,b^2>0$。

### §4.2 从标准坐标读出几何元素

> **核心公式：回到原坐标系的字典**
>
>
> $$
> x'=\boldsymbol e_1^T(\boldsymbol x-\boldsymbol x_0),\qquad y'=\boldsymbol e_2^T(\boldsymbol x-\boldsymbol x_0).\qquad\text{(4.1)}
> $$
>
>
> 焦点为 $\boldsymbol x_0\pm c\boldsymbol e_1$；焦轴为 $\boldsymbol e_2^T(\boldsymbol x-\boldsymbol x_0)=0$；另一条主轴为 $\boldsymbol e_1^T(\boldsymbol x-\boldsymbol x_0)=0$。
>
> 焦轴顶点为 $\boldsymbol x_0\pm a\boldsymbol e_1$，椭圆另有短轴顶点 $\boldsymbol x_0\pm b\boldsymbol e_2$。非圆情形的准线为
>
>
> $$
> \boldsymbol e_1^T(\boldsymbol x-\boldsymbol x_0)=\pm\frac{a^2}{c}.\qquad\text{(4.2)}
> $$

正号焦点与正号准线配对，负号同理。若 $\boldsymbol e_1=(\cos\theta,\sin\theta)^T$，焦点的分量就是 $(x_0\pm c\cos\theta,y_0\pm c\sin\theta)$；焦轴为 $-(x-x_0)\sin\theta+(y-y_0)\cos\theta=0$。

双曲线的渐近线可直接由


$$
F(\boldsymbol x)-\frac{I_3}{I_2}=(\boldsymbol x-\boldsymbol x_0)^TA(\boldsymbol x-\boldsymbol x_0)=0\qquad\text{(4.3)}
$$


分解得到；在标准系中就是 $x'/a\pm y'/b=0$。圆的 $c=0$，两焦点重合于圆心，式（4.2）不适用；实圆没有有限的焦点—准线表示。

### §4.3 不必写出完整变换的主轴公式

设 $\boldsymbol v=(l,m)^T$ 是非零特征值 $\lambda$ 的特征向量，则


$$
lF_1+mF_2=0\qquad\text{(4.4)}
$$


是法向量为 $\boldsymbol v$ 的那条主轴，而非方向为 $\boldsymbol v$ 的轴。这里不必单位化；当 $a_{12}\ne0$ 时可取 $(l,m)=(a_{12},\lambda-a_{11})$。它仍需要特征方向，但无需先求完整旋转矩阵、再代换全部坐标。

### §4.4 离心率与椭圆面积

> **定理 4.1：离心率的不变量表达**
>
> 对实椭圆或双曲线，按焦轴选择特征值后，
>
>
> $$
> e^2=1-\frac{\lambda_1}{\lambda_2}=\frac{2\Delta}{\Delta-\operatorname{sgn}(I_3)I_1}.\qquad\text{(4.5)}
> $$
>
>
> 实椭圆面积为
>
>
> $$
> S=\pi ab=\frac{\pi|I_3|}{I_2^{3/2}}.\qquad\text{(4.6)}
> $$

**证明：** 椭圆 $b^2/a^2=\lambda_1/\lambda_2$，故 $e^2=1-b^2/a^2$；双曲线 $b^2/a^2=-\lambda_1/\lambda_2$，故 $e^2=1+b^2/a^2$，都得到第一式。由焦轴选择规则可统一写成


$$
\lambda_1=\frac{I_1+\operatorname{sgn}(I_3)\Delta}{2},\qquad \lambda_2=\frac{I_1-\operatorname{sgn}(I_3)\Delta}{2},
$$


代入即得第二式。对实椭圆，$a^2b^2=I_3^2/(I_2^2\lambda_1\lambda_2)=I_3^2/I_2^3$，于是得到面积公式。

圆对应 $e=0$；非圆实椭圆有 $0<e<1$；双曲线有 $e>1$。抛物线的轴向特征值为零，焦点—准线推导同样给出 $e=1$，但有心型的式（4.5）第二式不用于抛物线。

## §5 抛物线的几何元素

### §5.1 轴、顶点与开口方向

设 $I_2=0$、$I_3\ne0$。取单位向量 $\boldsymbol u$ 使 $A=I_1\boldsymbol u\boldsymbol u^T$；必须说明 $\boldsymbol u$ 已单位化，不能只取任意比例的非零特征向量写此等式。

$A$ 的任一非零列都平行于 $\boldsymbol u$。轴向 $\boldsymbol e_1\perp\boldsymbol u$，按 $I_1\boldsymbol e_1^T\boldsymbol b<0$ 选择符号，则 $\boldsymbol e_1$ 指向开口方向。

> **核心公式：轴方程及其特殊情形**
>
> 轴为 $\boldsymbol u^T(A\boldsymbol x+\boldsymbol b)=0$。若 $(a_{11},a_{12})\ne(0,0)$，可写成
>
>
> $$
> a_{11}F_1+a_{12}F_2=0.\qquad\text{(5.1)}
> $$
>
>
> 若第一列为零，则必须改用第二列：
>
>
> $$
> a_{12}F_1+a_{22}F_2=0.\qquad\text{(5.2)}
> $$

原稿的式（5.1）隐含第一列非零；例如 $y^2-4x=0$ 的第一列为零，用它只能得到恒等式 $0=0$。第二列给出 $y=0$，这才是轴。

轴与曲线的唯一交点就是顶点 $\boldsymbol V$；也可直接用式（3.3）。在标准系中轴是 $y'=0$，代入 $y'^2=2px'$ 得 $x'=0$，所以交点唯一。

### §5.2 焦点、准线与顶点切线

> **定理 5.1：抛物线几何元素**
>
> 令 $p=\sqrt{-I_3/I_1^3}>0$，则
>
>
> $$
> \boldsymbol F=\boldsymbol V+\frac p2\boldsymbol e_1,\qquad \text{准线：}\ \boldsymbol e_1^T(\boldsymbol x-\boldsymbol V)=-\frac p2,
> $$
>
>
>
> $$
> \text{顶点切线：}\ \boldsymbol e_1^T(\boldsymbol x-\boldsymbol V)=0.\qquad\text{(5.3)}
> $$

**证明：** 在标准系 $y'^2=2px'$ 中，点到 $(p/2,0)$ 的距离平方为


$$
\left(x'-\frac p2\right)^2+y'^2=\left(x'+\frac p2\right)^2,
$$


恰等于到直线 $x'=-p/2$ 的距离平方。焦点—准线定义给出焦点和准线，离心率为 $1$；在原点处对 $y'^2-2px'$ 求梯度，切线为 $x'=0$。用式（4.1）的顶点版本拉回，即得结论。

这里采用 $y'^2=2px'$ 的约定，顶点到焦点的距离为 $p/2$；若教材采用 $y'^2=4fx'$，则 $f=p/2$。

## §6 原曲线与标准曲线的变换关系

### §6.1 标准系与原坐标系的对照

| 对象 | 标准系 | 原坐标系 |
|---|---|---|
| 点 | $\boldsymbol P'$ | $\boldsymbol P=Q\boldsymbol P'+\boldsymbol x_0$ |
| 方向 | $\boldsymbol v'$ | $\boldsymbol v=Q\boldsymbol v'$ |
| 直线 | $\boldsymbol n'^T\boldsymbol x'=d$ | $(Q\boldsymbol n')^T(\boldsymbol x-\boldsymbol x_0)=d$ |
| 曲线 | $G(\boldsymbol x')=0$ | $G(Q^T(\boldsymbol x-\boldsymbol x_0))=0$ |
| 齐次矩阵 | $\widehat A'$ | $\widehat A=T^{-T}\widehat A'T^{-1}$ |
| 度量量 | 长度、角度、面积、$a,b,c,e,p$ | 刚体运动下不变 |

**法向量为何也乘 $Q$？** 将逆变换代入直线方程，有 $\boldsymbol n'^TQ^T(\boldsymbol x-\boldsymbol x_0)=d$。一般可逆仿射变换 $\boldsymbol x=M\boldsymbol x'+\boldsymbol h$ 下，法向量按 $M^{-T}\boldsymbol n'$ 变换；只有正交情形 $M^{-T}=M$，才与普通方向向量采用同一公式。

### §6.2 参数方程的搬运

> **核心公式：原坐标中的参数方程**
>
>
> $$
> \begin{aligned}\text{椭圆：}\quad &\boldsymbol x(t)=\boldsymbol x_0+a\cos t\,\boldsymbol e_1+b\sin t\,\boldsymbol e_2,\quad 0\le t<2\pi;\\ \text{双曲线：}\quad &\boldsymbol x(t)=\boldsymbol x_0\pm a\cosh t\,\boldsymbol e_1+b\sinh t\,\boldsymbol e_2,\quad t\in\mathbb R;\\ \text{抛物线：}\quad &\boldsymbol x(t)=\boldsymbol V+\frac{t^2}{2p}\boldsymbol e_1+t\boldsymbol e_2,\quad t\in\mathbb R.\end{aligned}\qquad\text{(6.1)}
> $$

这些是坐标列的简写。例如椭圆第一式就是 $x=x_0+a e_{11}\cos t+b e_{21}\sin t$、$y=y_0+a e_{12}\cos t+b e_{22}\sin t$。双曲线的两个符号分别参数化两支，$\cosh^2t-\sinh^2t=1$ 保证方程成立。

### §6.3 伸缩、旋转与平移的分解

单位圆 $u^2+v^2=1$ 经过伸缩、旋转、平移后得到椭圆：


$$
\boldsymbol x=\boldsymbol x_0+Q\operatorname{diag}(a,b)\begin{pmatrix}u\\v\end{pmatrix},
$$



$$
\begin{pmatrix}Q\operatorname{diag}(a,b)&\boldsymbol x_0\\0^T&1\end{pmatrix}=\begin{pmatrix}I&\boldsymbol x_0\\0^T&1\end{pmatrix}\begin{pmatrix}Q&0\\0^T&1\end{pmatrix}\begin{pmatrix}\operatorname{diag}(a,b)&0\\0^T&1\end{pmatrix}.\qquad\text{(6.2)}
$$


矩阵从右向左作用。次序一般不可交换：先旋转、后平移 $\boldsymbol x_0$，等价于先平移 $Q^T\boldsymbol x_0$、后旋转。双曲线可从 $u^2-v^2=1$ 作同样分解。

![伸缩、旋转和平移将单位圆变成例 1 的椭圆；焦点只在后两步刚体运动中随曲线一起搬运。](/figures/conics-matrix/transport.svg)

抛物线可由 $v^2=u$ 经 $(x',y')=(u/(2p),v)$ 得到 $y'^2=2px'$，但这是非等比伸缩，本身不足以证明所有抛物线相似。要证明相似性，应取等比伸缩 $(x',y')=(2pu,2pv)$，同样得到 $y'^2=2px'$。于是任意两条非退化实抛物线都可由相似变换互相得到。

### §6.4 正交、仿射与射影三个层次

| 变换层次 | 矩阵关系 | 保持的性质与分类 |
|---|---|---|
| 正交与平移 | $A'=Q^TAQ$ | 保持距离、角度及焦点等度量信息；标准形含 $a,b,p$ |
| 一般仿射 | $A'=M^TAM$ | 保持平行、中点、面积比、中心、共轭关系；非退化实曲线分椭圆、双曲线、抛物线三类 |
| 射影 | $\widehat A'=P^T\widehat AP$ | 保持点线关联与交比；有实点的非退化实射影二次曲线只有一类 |

仿射分类的三种代表可取 $x^2+y^2=1$、$x^2-y^2=1$、$y^2=x$。射影变换允许改变无穷远直线，因而打破椭圆、双曲线、抛物线之间的仿射区别。对有实点且 $I_3\ne0$ 的二次曲线，$\widehat A$ 是非退化不定矩阵；由惯性定理并允许方程整体乘以 $-1$，均可化到同一射影标准形。无实点的“虚椭圆”不在这个结论内。

焦点与离心率依赖欧氏度量，不是一般仿射或射影不变量。相似变换仍保持离心率并相应搬运焦点，但会按比例改变长度。

## §7 例题与巩固

### §7.1 例 1：椭圆

> **例 1（原稿）**
>
> 将 $5x^2+4xy+8y^2-32x-56y+80=0$ 化为标准形，求其焦点、主轴、准线、顶点、面积和参数方程。

**解：** 系数矩阵及不变量为


$$
A=\begin{pmatrix}5&2\\2&8\end{pmatrix},\quad \boldsymbol b=\begin{pmatrix}-16\\-28\end{pmatrix},\quad c_0=80,\qquad I_1=13,\ I_2=36,\ I_3=-1296.
$$


$I_2>0$ 且 $I_1I_3<0$，故是椭圆。特征方程 $\lambda^2-13\lambda+36=0$ 给出 $\lambda_1=4$、$\lambda_2=9$；取


$$
\boldsymbol e_1=\frac1{\sqrt5}\begin{pmatrix}2\\-1\end{pmatrix},\quad \boldsymbol e_2=\frac1{\sqrt5}\begin{pmatrix}1\\2\end{pmatrix},\quad Q=\frac1{\sqrt5}\begin{pmatrix}2&1\\-1&2\end{pmatrix}.
$$


$\det Q=1$，旋转角 $\theta=-\arctan(1/2)\approx-26.57^\circ$，且 $\tan2\theta=-4/3$，与式（2.5）相符。解中心方程


$$
5x_0+2y_0=16,\qquad 2x_0+8y_0=28
$$


得 $\boldsymbol x_0=(2,3)^T$，$F(\boldsymbol x_0)=-36=I_3/I_2$。正、逆变换为


$$
\begin{aligned}x&=2+\frac{2x'+y'}{\sqrt5},&x'&=\frac{2(x-2)-(y-3)}{\sqrt5},\\ y&=3+\frac{-x'+2y'}{\sqrt5},&y'&=\frac{(x-2)+2(y-3)}{\sqrt5}.\end{aligned}
$$


代入得到 $4x'^2+9y'^2=36$，即


$$
\frac{x'^2}{9}+\frac{y'^2}{4}=1.\qquad\text{(7.1)}
$$


所以 $a=3$、$b=2$、$c=\sqrt5$、$e=\sqrt5/3$。由不变量公式，$\Delta=5$，$e^2=10/(5+13)=5/9$。

**焦点：** $(2,3)\pm(2,-1)$，即 $F_+(4,2)$、$F_-(0,4)$。

**长轴与短轴：** 长轴为 $x+2y-8=0$，短轴为 $2x-y-1=0$。也可用 $F_1+2F_2=9x+18y-72$ 与 $2F_1-F_2=8x-4y-4$ 验证。

**准线：** $x'=\pm9/\sqrt5$ 给出 $2x-y-10=0$ 与 $2x-y+8=0$，分别对应 $F_+$、$F_-$。

**顶点与面积：** 四顶点为


$$
\left(2\pm\frac6{\sqrt5},3\mp\frac3{\sqrt5}\right),\qquad \left(2\pm\frac2{\sqrt5},3\pm\frac4{\sqrt5}\right),
$$


面积 $S=\pi ab=6\pi=\pi|I_3|/I_2^{3/2}$。

**参数方程：**


$$
x=2+\frac{6\cos t+2\sin t}{\sqrt5},\qquad y=3+\frac{-3\cos t+4\sin t}{\sqrt5},\qquad 0\le t<2\pi.
$$


![例 1 的椭圆及新坐标轴：中心为 (2,3)，焦点为 (4,2)、(0,4)，虚线为准线。](/figures/conics-matrix/ellipse.svg)

### §7.2 例 2：抛物线

> **例 2（原稿）**
>
> 求 $x^2-2xy+y^2-4x-4y+8=0$ 的标准形及几何元素。

**解：**


$$
A=\begin{pmatrix}1&-1\\-1&1\end{pmatrix},\quad\boldsymbol b=\begin{pmatrix}-2\\-2\end{pmatrix},\quad c_0=8,\qquad I_1=2,\ I_2=0,\ I_3=-16.
$$


故是抛物线。取轴向 $\boldsymbol e_1=(1,1)^T/\sqrt2$，并取 $\boldsymbol e_2=(-1,1)^T/\sqrt2$。有 $I_1\boldsymbol e_1^T\boldsymbol b=-4\sqrt2<0$，所以开口朝 $(1,1)$ 方向，旋转角为 $45^\circ$。

由式（5.1），轴为 $F_1-F_2=2(x-y)=0$。令 $x=y$，原方程化为 $-8x+8=0$，顶点为 $V(1,1)$。又


$$
p=\sqrt{\frac{16}{8}}=\sqrt2,\qquad F=V+\frac p2\boldsymbol e_1=\left(\frac32,\frac32\right).
$$


准线为 $x+y-1=0$，顶点切线为 $x+y-2=0$。取


$$
x'=\frac{x+y-2}{\sqrt2},\qquad y'=\frac{-x+y}{\sqrt2},
$$


标准形是 $y'^2=2\sqrt2\,x'$。反代后 $(x-y)^2/2=2(x+y-2)$，乘以 $2$ 恰为原方程，完成检验。

### §7.3 例 3：双曲线

> **例 3（原稿）**
>
> 求 $7x^2+24xy+10x-24y-161=0$ 的标准形、焦点、主轴、准线与渐近线。

**解：**


$$
A=\begin{pmatrix}7&12\\12&0\end{pmatrix},\quad\boldsymbol b=\begin{pmatrix}5\\-12\end{pmatrix},\quad c_0=-161,\qquad I_1=7,\ I_2=-144,\ I_3=20736.
$$


$I_2<0$、$I_3\ne0$，是双曲线。特征值为 $16,-9$；焦轴特征值取与 $I_3$ 同号的 $16$，故取


$$
\boldsymbol e_1=\frac15\begin{pmatrix}4\\3\end{pmatrix},\qquad\boldsymbol e_2=\frac15\begin{pmatrix}-3\\4\end{pmatrix},\qquad\theta=\arctan\frac34\approx36.87^\circ.
$$


此时 $\tan2\theta=24/7$。解 $7x_0+12y_0=-5$、$12x_0=12$，得中心 $(1,-1)$，$I_3/I_2=-144$。坐标变换为


$$
x'=\frac{4(x-1)+3(y+1)}5,\qquad y'=\frac{-3(x-1)+4(y+1)}5.
$$


标准形 $16x'^2-9y'^2=144$，即


$$
\frac{x'^2}{9}-\frac{y'^2}{16}=1.\qquad\text{(7.2)}
$$


于是 $a=3$、$b=4$、$c=5$、$e=5/3$；不变量验算给出 $e^2=2\times25/(25-7)=25/9$。

**焦点与顶点：** 焦点为 $(1,-1)\pm(4,3)$，即 $F_+(5,2)$、$F_-(-3,-4)$；实轴顶点为 $(17/5,4/5)$、$(-7/5,-14/5)$。

**两轴：** 实轴 $3x-4y-7=0$，虚轴 $4x+3y-1=0$。原稿的快速检验 $-3F_1+4F_2=27x-36y-63=0$ 正好给出实轴。

**准线：** $x'=\pm9/5$ 给出 $4x+3y-10=0$ 与 $4x+3y+8=0$。

**渐近线：**


$$
F-\frac{I_3}{I_2}=7(x-1)^2+24(x-1)(y+1)=(x-1)(7x+24y+17).
$$


因此渐近线为 $x=1$ 与 $7x+24y+17=0$。

![左为例 2 的抛物线，右为例 3 的双曲线；绿色为焦轴，红点为焦点，虚线为准线，灰线为双曲线渐近线。](/figures/conics-matrix/parabola-hyperbola.svg)

### §7.4 例 4：退化类型的参数分界

> **例 4（补充）**
>
> 对参数 $\tau\in\mathbb R$，分类 $(x+y)^2-4(x+y)+\tau=0$，并求其中心集合。

**解：** $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$，$\boldsymbol b=(-2,-2)^T$，故 $I_1=2$、$I_2=I_3=0$、$K_1=2\tau-8$。配方为


$$
(x+y-2)^2=4-\tau.
$$


当 $\tau<4$ 时为两条平行直线 $x+y=2\pm\sqrt{4-\tau}$；$\tau=4$ 时为重合直线 $x+y=2$；$\tau>4$ 时无实点。中心方程均为 $x+y=2$。取正交坐标 $y'=(x+y-2)/\sqrt2$，标准形 $y'^2=(4-\tau)/2$，与式（3.5）一致。

空集在集合意义下关于每一点对称；这里的“中心集合”特指保持该二次多项式不变的代数中心条件，不能将两种说法混淆。

### §7.5 例 5：第一列为零时的抛物线

> **例 5（补充）**
>
> 求 $y^2-4x+6y+5=0$ 的轴、顶点、焦点与准线。

**解：** $A=\operatorname{diag}(0,1)$，$\boldsymbol b=(-2,3)^T$，$I_1=1$、$I_2=0$、$I_3=-4$，所以 $p=2$。第一列为零，应使用第二列得到轴 $F_2=y+3=0$。

配方 $(y+3)^2=4(x+1)$ 表明 $V=(-1,-3)$，开口沿正 $x$ 方向。焦点为 $(0,-3)$，准线为 $x=-2$，顶点切线为 $x=-1$。本例同时检验了轴公式的分支和焦参数中的因子 $2$。

## §8 焦点的秩一判别法

### §8.1 从焦点—准线定义到矩阵分解

设 $\widehat A$ 表示一条非退化、非圆的实二次曲线，候选焦点为 $P_0=(p_0,q_0)$。点到 $P_0$ 的距离平方对应矩阵


$$
P_{P_0}=\begin{pmatrix}1&0&-p_0\\0&1&-q_0\\-p_0&-q_0&p_0^2+q_0^2\end{pmatrix},\qquad X^TP_{P_0}X=(x-p_0)^2+(y-q_0)^2.
$$


> **定理 8.1：焦点的秩一判别**
>
> $P_0$ 是该曲线的焦点，当且仅当存在 $\mu\ne0$ 与 $\ell=(\ell_1,\ell_2,\ell_3)^T$，使
>
>
> $$
> P_{P_0}-\mu\widehat A=\ell\ell^T,\qquad (\ell_1,\ell_2)\ne(0,0).\qquad\text{(8.1)}
> $$
>
>
> 此时配对准线为 $\ell_1x+\ell_2y+\ell_3=0$，离心率满足 $e^2=\ell_1^2+\ell_2^2$。右端须为秩 $1$ 的半正定矩阵，仅验证秩 $1$ 不够。

**证明：** 若式（8.1）成立，令 $N=\sqrt{\ell_1^2+\ell_2^2}>0$。在 $F=0$ 上，


$$
|PP_0|^2=(\ell_1x+\ell_2y+\ell_3)^2=N^2d(P,L)^2.
$$


反过来，这一距离等式与 $F=0$ 等价，因为两边相减正好是 $\mu F$。故 $P_0,L$ 给出离心率 $N$ 的焦点—准线表示。

若 $P_0$ 是焦点，将准线写成 $\boldsymbol n^T\boldsymbol x=d$，$\|\boldsymbol n\|=1$，则距离关系给出二次多项式 $G=|PP_0|^2-e^2(\boldsymbol n^T\boldsymbol x-d)^2$。它与 $F$ 有相同的非退化实二次曲线，故 $G=\mu F$。取 $\ell=e(n_1,n_2,-d)^T$ 即得式（8.1）。

这里“相同曲线的两个二次方程成比例”可直接验证，无需额外假设：先作可逆仿射变换将曲线化到三种代表形。圆形代表 $x^2+y^2=1$ 上代入 $(\cos t,\sin t)$，比较 $1,\cos t,\sin t,\cos2t,\sin2t$ 的系数，得到任意消失的二次式都是其倍数；双曲线代表 $uv=1$ 上代入 $(t,1/t)$，乘以 $t^2$ 后比较多项式系数；抛物线代表 $y^2=x$ 上代入 $(t^2,t)$，比较各次幂系数。三种情形都得到所需结论。

### §8.2 离心率公式为何出现特征值之比

取式（8.1）的左上二阶块，有


$$
I-\mu A=\begin{pmatrix}\ell_1\\\ell_2\end{pmatrix}\begin{pmatrix}\ell_1&\ell_2\end{pmatrix}.\qquad\text{(8.2)}
$$


右端是非零秩一半正定矩阵，像空间沿准线法向，即焦轴方向；垂直焦轴的方向是它的零空间。故 $1-\mu\lambda_2=0$，$\mu=1/\lambda_2$，而沿焦轴的特征值为


$$
e^2=1-\mu\lambda_1=1-\frac{\lambda_1}{\lambda_2}.
$$


对于抛物线 $\lambda_1=0$，立即得到 $e=1$。圆的两个特征值相等，左上块若降秩就只能为零，不能得到有限准线所需的非零法向量；因此圆须单独处理，不能不加限制地套用定理 8.1。把准线说成“趋于无穷远”只是一种极限解释，不是实平面中的直线方程。

### §8.3 用例 1 验证秩一分解

对焦点 $F_+(4,2)$，取 $\mu=1/9$。直接相减得到


$$
P_{F_+}-\frac19\widehat A=\frac19\begin{pmatrix}4&-2&-20\\-2&1&10\\-20&10&100\end{pmatrix}=\ell\ell^T,\qquad \ell=\frac13\begin{pmatrix}2\\-1\\-10\end{pmatrix}.
$$


因此准线为 $2x-y-10=0$，$e^2=(4+1)/9=5/9$，与标准形法完全一致。秩一方法揭示焦点的矩阵结构，但实际求完整几何元素时，正交标准形通常更直观。

## §9 常见易错点与检查清单

> **检查清单**
>
> 1. 写矩阵前，先把交叉项和一次项系数除以 $2$；$F_1,F_2$ 是偏导数的一半。
> 2. $Q$ 的列是新轴方向；正变换用 $Q$，逆变换用 $Q^T$。求出矩阵后检查 $Q^TQ=I$、$\det Q=1$。
> 3. 求几何长度时必须将特征向量单位化；只求轴方程时则可用任意非零比例。
> 4. 中心型用 $A\boldsymbol x_0=-\boldsymbol b$；抛物线无中心，应求顶点。线心型的中心不唯一。
> 5. 椭圆长轴取 $|\lambda|$ 较小者；双曲线实轴取与 $I_3$ 同号者。主轴公式 $lF_1+mF_2=0$ 中 $(l,m)$ 是法向量。
> 6. 抛物线开口由 $I_1\boldsymbol e_1^T\boldsymbol b<0$ 确定；第一列为零时须改用第二列求轴。
> 7. $y'^2=2px'$ 的焦距是 $p/2$。圆不能使用含 $a^2/c$ 的有限准线公式。
> 8. 一般非正交配方改变度量；若不追踪 $M^TM$，不能把新坐标中的轴长、焦点照搬回去。
> 9. 不变量针对固定方程的坐标变化；整体倍乘方程会改变它们的数值。离心率等几何量应与这种倍乘无关。
> 10. 正则点才有本讲的唯一切线公式；共轭直径上的所有点未必都是真实弦的中点。
> 11. 焦点秩一判别还要求半正定及非零准线法向量，圆另论。相似性须由等比伸缩证明。
> 12. 最后反代标准方程，检查焦点与轴、准线的配对；图形用作核验，不能代替代数证明。

**解题顺序：** 写矩阵与不变量，先判类型；选焦轴或开口方向，求中心或顶点；写正交变换并反代验证；在标准系读出几何量；用同一逆坐标字典给出原坐标答案。若只要求某个对象，可选用轴方程、中心形式或秩一判别，避免无关计算。

## §10 知识体系与空间推广

### §10.1 六条知识线索

| 线索 | 核心对象 | 需要能够独立重建的结论 |
|---|---|---|
| 矩阵表示 | $A,\boldsymbol b,c_0,\widehat A$ | 系数约定、梯度、中心、直径、切线 |
| 坐标变换 | $Q,T$ | 变换律、正逆变换、旋转角、主动与被动观点 |
| 标准形分类 | $I_1,I_2,I_3,K_1$ | 有心、无心、线心三型及九类表 |
| 几何元素 | 特征方向与 $a,b,c,e,p$ | 焦轴选择、焦点、顶点、轴、准线、渐近线及面积 |
| 变换关系 | 参数方程与矩阵分解 | 法向量变换、伸缩旋转平移、三种分类层次 |
| 进一步推广 | 秩一分解、空间对称矩阵 | 焦点判别及三维二次曲面的标准化思路 |

### §10.2 空间二次曲面的同一方法

空间二次曲面写成


$$
F(\boldsymbol x)=\boldsymbol x^TA\boldsymbol x+2\boldsymbol b^T\boldsymbol x+c_0=0,\qquad A=A^T\in\mathbb R^{3\times3},
$$


其齐次矩阵 $\widehat A$ 为四阶。仍先用三阶正交矩阵将 $A$ 对角化，再沿非零特征方向平移消去一次项。若 $A$ 可逆，中心为 $-A^{-1}\boldsymbol b$，中心值为 $\det\widehat A/\det A$；若 $A$ 奇异，则先检查一次项在 $\ker A$ 上的分量，非零时产生抛物型，零时可能产生柱面或退化曲面。

沿用空间常见编号，可记


$$
I_1=\operatorname{tr}A,\quad I_2=\frac{(\operatorname{tr}A)^2-\operatorname{tr}(A^2)}2,\quad I_3=\det A,\quad I_4=\det\widehat A.
$$


这里的 $I_2,I_3$ 已是三维约定，不能与本讲二维定义直接混用。方法相同，分类需要额外考虑秩、惯性及零特征方向上的一次项；焦点概念也不能仅靠把二维公式增加一个坐标得到。

**编校说明：** 保留原稿十节内容及原三例；新增不变量平移公式的证明、抛物线顶点显式公式、退化参数例与零列例。修正或补明了直径的实弦范围、切线正则性、方程倍乘、圆的有限准线例外、抛物线轴的零列分支和相似性证明。所有句子与段落均不使用前后装饰点；数学中的必要运算符保留其含义。
