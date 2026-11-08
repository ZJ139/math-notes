# 2007—2016年阅读干扰项专册

资料基准：`3ccbda98a5fa9e6f3553cd7e90493f5e322b42bf`。覆盖40篇、200题、800选项。600个非答案候选项中599项常规多标签编码，2013-T2-Q27-D为U争议项。

## 重建

从仓库根目录运行：

```sh
python3 print/english/build-reading-distractors-2007-2016.py
xelatex -interaction=nonstopmode -halt-on-error -output-directory=print/english print/english/reading-distractors-2007-2016.tex
xelatex -interaction=nonstopmode -halt-on-error -output-directory=print/english print/english/reading-distractors-2007-2016.tex
```

需TeX Live的XeLaTeX、xeCJK、Fandol字体和常规LaTeX宏包。正文11pt、A4、23mm页边距、1.12行距；Fandol Song正文与真粗体标题，Latin Modern Roman英文，标准Computer Modern数学配置。脚本不联网、不写远端、不发布。

`reading-distractors-2007-2016-data.json`保存分类定义、逐项编码、教学例题、短引文、来源哈希。编码每行依次为年份、题号、三个非答案选项的标签，按A—D原顺序跳过题库答案；A—L对应R01—R12，U仅用于上述争议项。脚本校验题目／选项完整性、源文件Git blob、重点例题与长难句的段落原文、每类跨年覆盖，并生成LaTeX与`docs/reviews/reading-distractors-2007-2016.json`核对记录。

更改资料版本时，应重新读取变动原文、复核所有相关题目和编码；不得只删除哈希保护。当前原文中的答案不另称为经独立核定的官方答案。信号频次仅统计原文英文正文的完整词／短语，不区分大小写，允许短语重叠；不作语义消歧。分类数量不是考生错误率。

## 发布门槛

用户已于2026年11月8日明确批准按已审阅版本提交、合并、部署，PDF附件保持获批稿原始字节。发布时先核对最新main的重复与冲突，执行仓库要求的check、test、build、verify，再核验正式页面、附件下载与字节一致性。用户没有另行要求时不制作整站源代码备份。

拟定入口为英语学习→阅读技巧，专题路径`/english/2823a815d786c18f30158999/`；附件`/files/english/reading-types/reading-distractors-2007-2016.pdf`。现有七类题型及2018—2025年专题仅增加互链与更新日期。
