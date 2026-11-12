# 丘维声解析几何：第1、2、3、5章定理与结论图解汇总

对应 `content/notes/qiu-analytic-geometry-summary.md` 与同名 PDF。

- `../qiu-analytic-geometry-summary.tex`：标准 LaTeX 排版源文件。
- 本目录中的 47 个 PDF：矢量配图；网站 SVG 位于 `public/figures/analytic-geometry/theorems/`。
- `chapters.json`：160 条结论的结构化正文、原书页码和图像对应关系。

在仓库根目录使用 XeLaTeX 编译两次（TeX Live，需 xeCJK、Fandol、Computer Modern）：

```sh
xelatex -no-shell-escape -interaction=nonstopmode -halt-on-error -output-directory=/tmp print/qiu-analytic-geometry-summary.tex
xelatex -no-shell-escape -interaction=nonstopmode -halt-on-error -output-directory=/tmp print/qiu-analytic-geometry-summary.tex
```

中文使用仓库内 Fandol 宋体，数学使用 Computer Modern / AMS。A4，11pt，23mm 页边距，1.12 倍行距；字体与版式沿用既定数学讲义规范。正文中的“章.节.条”为本册检索号，教材结论编号另列于来源和索引。

原书第四章未收录；直母线使用教材的代数参数，未以三角函数替代。原书 p.105、p.149、p.153 三处印误在正文中有明确校勘说明。
