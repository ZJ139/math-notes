# 2018—2025 阅读干扰项专册

范围：`content/english/reading-answers/2018-reading-text-1.md` 至 `2025-reading-text-4.md` 的32篇独立解析，160题、640个选项、480个干扰项。采用提交 `5b6ada93f63a25980b3b97ee80a363ebe752b91a` 的内容；源文件哈希见配套核对记录。

## 内容与编码

`reading-distractors-2018-2025-data.json` 保存人工逐项编辑的分类、480个干扰项的多标签编码、24道重点题讲解、词汇与长难句材料。编码行按年份、题号排列，每行的三组标签依照 A—D 顺序跳过正确项；内部 A—L 对应印刷代码 R01—R12。代码不表示重要性或错误概率。

`build-reading-distractors.py` 从32篇原解析提取题干、选项、答案、源行号和链接，再合入人工编码。它同时生成 LaTeX 与 `docs/reviews/reading-distractors-2018-2025.json`。后者保留全部160题、640个选项的可追溯记录及统计口径；PDF只展开24题，避免重印32篇全文。

统计描述的是本版分类，不是考生错误率。未进行第二标注者独立编码或一致性系数测量。词频为英文正文的大小写不敏感字面匹配，不消除多义词或月份 May；其数量不是逻辑功能计数。

## 生成 PDF

在仓库根目录运行，使用完整 TeX Live 中的 XeLaTeX、xeCJK、fontspec、tcolorbox、hyperref、bookmark 等常用宏包。中文字体直接使用仓库内 FandolSong；西文沿用 Latin Modern Roman，数学保留 LaTeX 默认 Computer Modern。

```sh
python3 print/english/build-reading-distractors.py
mkdir -p /tmp/reading-handbook-build
xelatex -halt-on-error -interaction=nonstopmode -output-directory=/tmp/reading-handbook-build print/english/reading-distractors-2018-2025.tex
xelatex -halt-on-error -interaction=nonstopmode -output-directory=/tmp/reading-handbook-build print/english/reading-distractors-2018-2025.tex
xelatex -halt-on-error -interaction=nonstopmode -output-directory=/tmp/reading-handbook-build print/english/reading-distractors-2018-2025.tex
```

编译顺序执行，不得对同一输出目录同时运行多个编译进程。确认交叉引用已稳定、没有缺字或溢出，再将PDF复制到 `content/english/reading-types/reading-distractors-2018-2025.pdf`。构建网站时使用此PDF的原始字节，不再次转码。

版式沿用23 mm页边距、11 pt字号、1.12倍正文行距、Fandol宋体及加粗宋体，证据底色 `#FCE5ED`。目录、分类索引与年份索引均可点击，印刷版保留页码、题号与段号。

## 网站入口与核验

- 内容页：`/english/a648f4cf1d2b91ff2375697c/`，在“英语学习 → 阅读技巧”显示，并关联原有七类题型。
- 下载：`/files/english/reading-types/reading-distractors-2018-2025.pdf`。
- 既有“七类题型”专题增加一条互链，32篇原解析保持原样。
- 发布前运行 `npm run check`、`npm test`、`npm run build`、`npm run verify`。若运行环境禁止 `tsx` CLI 的 IPC 服务，可使用等效的 `node --import tsx --test scripts/*.test.ts` 与 `node --import tsx scripts/build.tsx`。
- 核对PDF的页数、目录目标、160题索引、字体嵌入、引用证据及打印边界；对渲染图逐页检查。

发布必须在用户审阅PDF与明确批准后进行。正式部署成功后，核验内容页和下载PDF字节，再以对应发布提交制作完整源码ZIP，并记录日期、Git SHA、校验值与备份标识。
