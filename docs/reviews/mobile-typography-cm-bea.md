# 网页排版与 CM bea 全站统一验收

日期：2026-11-22。

## 问题与修复

实变函数-v1 §1.1 的幂集段落与证明在窄屏出现异常大的汉字间距。原因是正文使用 `text-align: justify`，不可拆分的行内公式挪到下一行后，浏览器拉伸前一行的字间距。

- 屏幕正文与摘要改为自然左对齐，字间距、词间距恢复正常；保留正文宋体与既有配色。
- 屏幕一级、二级正文标题的段前距从 1.8em 收紧至 1.15em，段后距从 1em 收紧至 .6em；标题使用均衡换行，保留正常英文词边界。
- 所有 Markdown 数学公式默认采用 CM bea，无须逐篇添加字体元数据；包括讲义、文章、题解、目录中调用 Markdown 的数学内容。
- 公式保留 LaTeX 实测宽、高、depth、辅助 MathML、原始上下标比例和独立横向滚动；字体使用现有 `cm-bea.sty` 对应的 Beamer 默认数学配置。
- 以有界批次合并 TeX 启动，每条公式仍独占裁切页；逐页提取字体与尺寸。失败批次回退到逐条编译，以定位具体公式。禁止命令、禁用 shell escape 和读写范围限制继续有效。

本次范围为网页正文和网页打印中的公式渲染。既有下载附件保持原始字节。

## 已完成验证

- `npm run check`：通过。
- `node --import tsx --test scripts/*.test.ts`：135 项通过，0 失败。此命令执行与 `npm test` 相同的测试文件，避免当前容器中 tsx CLI 的 IPC socket 限制。
- `node --import tsx scripts/precompile-math.ts`：23,094 条不同输入公式完成编译，4 个有界工作进程。
- `node --import tsx scripts/build.tsx`：完整构建成功，828 个已发布资料条目。
- `npm run verify`：1,069 个 HTML 页面、149,547 个本地链接与资源通过检查。
- CM bea 与真实 `beamer` 文档的数学尺寸和嵌入字体对照通过；短变量字形、基线、批量与单条编译的轮廓、字形位置、视口尺寸及每页字体一致性通过。
- Chromium 中使用真实讲义页面，分别置于 390px 与 768px iframe 视口检查。幂集段落自然左对齐，letter-spacing 为 normal；两种宽度的文档 scrollWidth 均等于 clientWidth。
- §1.1 的 456 个公式图像全部加载；390px 预览中的 De Morgan 保持完整词组换行；行间长公式在自身区域横向滚动。

窄屏验证使用 Chromium，不等同于 iOS Safari 真机验收。辅助生成的排版示意图不作为网站验收证据。
