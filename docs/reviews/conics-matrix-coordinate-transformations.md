# 二次曲线的矩阵理论与坐标变换：扩写与发布校审

校审日期：2026-11-26。依据用户上传的《二次曲线的矩阵理论与坐标变换(1).pdf》（12 页）制作；采用指定 S 样式，字体按用户最后指示改为 CM ams。

## 内容核对

- 保留原稿十节主题、矩阵记号体系、分类表、变换字典、三道完整例题、秩一判别、易错检查及知识地图，重新绘制原有三组示意图。
- 保留原椭圆、抛物线、双曲线例题的方程与结论，补全坐标变换、焦点、准线和渐近线的计算。独立核验正交矩阵、特征值、中心、标准方程及不变量。
- 补充正交变换与平移的不变量证明、九类标准形的推导、抛物线顶点构造以及焦点—准线秩一判别的必要性和充分性证明。
- 新增参数退化分类、二次项矩阵首列为零时的抛物线处理两道例题。
- 明确固定方程的坐标不变量与方程整体倍乘的区别；补充弦中点所在直径的范围及非渐近方向条件，切线公式限于正则点。
- 明确秩一分解中的单位向量条件、抛物线轴线首列公式的适用范围、非正交配方后的度量变化、抛物线相似变换的等比条件，以及焦点—准线判别中非零法向量、半正定性和圆的例外。
- 常数项使用 c₀，避免与焦半距 c 混淆；一次项系数列采用粗体 b，区别于半轴 b。
- 全文删除句子前后的装饰性中点，正文与 PDF 文本检查未发现 U+00B7 或 U+2027。数学乘法记号保留原有语义。

## 排版与附件验收

- S 样式：A4、左右 23 mm 页边距、居中黑色标题、藏蓝章节标题、浅底细框与深色标题条；例题使用灰色，辨析和检查框使用赭色。
- PDF 共 18 页，中文 Fandol 宋体，标题加粗宋体；数学严格采用 article 加载 amsmath、amssymb 的默认 Computer Modern，fontspec 使用 no-math。
- PDF 字体全部嵌入；10 个目录书签、20 个内部链接；逐页缩略图和重点页检查通过，无公式裁切、缺字或 overfull 警告。
- 19 个内容框、原稿 3 道例题和新增 2 道例题均逐项与导出 PDF 文本核对，十节正文齐全。
- 网页通过独立 CM ams 渲染器生成 LaTeX SVG，同时保留辅助 MathML、真实 depth 基线和四边 3 pt 出血。其他文章继续使用既定 CM bea。
- 浏览器预览核验：data-math-font 为 cm-ams；10 节、522 处公式、无缺失图片；目录点击成功跳至目标节。

## 发布前验证

- TypeScript check：通过。
- 全部自动化测试：149/149 通过；包含 CM ams 与标准 article/AMS 的字体和尺寸比对、独立缓存及中文标点测试。
- 公式预编译：27636 个唯一表达式，4 个 worker 完成。
- 静态构建：1086 个生成页面、850 条发布内容。
- 静态核验：1096 个 HTML 页面、166034 个本地链接和资源通过。
- 以上记录为本地验收结果；是否正式上线应以合并提交对应的 GitHub Actions 与线上页面、附件响应为准。

## 文件与入口

- 正文：`content/notes/conics-matrix-coordinate-transformations.md`
- PDF：`content/notes/conics-matrix-coordinate-transformations-cm-ams.pdf`
- LaTeX：`print/conics-matrix-coordinate-transformations-cm-ams.tex`
- 构建：`python scripts/build-conics-matrix-pdf.py`（依赖标准 XeLaTeX、Pandoc）
- 图形：`python scripts/draw-conics-matrix.py`（依赖 Matplotlib、NumPy）
- 页面：`/math-notes/notes/07d1827b9239f2dea69e496b/`
- 附件：`/math-notes/files/notes/conics-matrix-coordinate-transformations-cm-ams.pdf`
