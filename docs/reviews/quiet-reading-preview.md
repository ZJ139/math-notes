# 温润阅读界面改版 · 待审阅

日期：2026-11-21（北京时间）。基线提交：`ed9f8b7c96f62f0ed9ea172b3f861fb9f7c30240`。

本改版只供审阅，未合并 main、未发布正式站。用户确认视觉效果后，才进入正式发布流程。

## 实现范围

现站使用 React 19 服务端静态生成、TypeScript 构建脚本及原生浏览器脚本，并非单页应用。沿用现有框架、依赖与生成流程。

| 文件 | 修改 |
| --- | --- |
| `public/quiet-reading.css` | 新增共享屏幕样式；覆盖首页、文章、目录、年份列表及作文练习的颜色、层次、留白、响应式和焦点样式 |
| `src/components.tsx` | 在现有样式之后加载共享样式；更新浏览器主题色 |
| `src/WritingPractice.tsx` | 将已有第一、第二作答区标题显示出来；保留完整无障碍名称、表单 ID 和存储键 |
| `scripts/build.tsx` | 为新增样式生成内容指纹，沿用原有缓存更新机制 |

未修改教材和题解正文、题干、URL、目录层级、搜索脚本、练习脚本、IndexedDB 数据结构、数学渲染器及打印样式。没有新依赖或远程字体。

## 设计变量

| CSS 变量 | 值 / 用途 |
| --- | --- |
| `--paper` | `#FAF9F7` 页面 |
| `--ink` | `#292724` 正文 |
| `--muted` | `#6F6B65` 辅助文字 |
| `--line` | `#E5E1DA` 细分隔线 |
| `--soft` | `#F0EEEA` 次级背景 |
| `--card` | `#FDFCF9` 必要面板背景 |
| `--accent` | `#B66A4A` 小面积装饰、选中指示 |
| `--accent-ink` / `--focus` | `#87492F` 深色强调文字及焦点环 |
| `--control-line` | `#8D877E` 输入与按钮边框 |
| `--error` | `#963A32` 原有真实失败状态 |
| `--on-strong` | `#FFFFFF` 深底按钮文字 |
| `--success` | `#41634D` 预留状态色，目前未用于提示 |
| 原有 `--serif` / `--sans` | `"Study Latin Modern", "Fandol Song", serif`，沿用原站 |
| 原有 `--heading-serif` | `"Study Latin Modern Heading", "Fandol Song", serif`，沿用原站 |
| 原有代码字体 | `Consolas, monospace`，沿用原站 |
| `--reading-size` | `clamp(1.0625rem, 1rem + .25vw, 1.1875rem)` |
| `--content-width` / `--reading-width` | `72rem` / `46rem`（默认 1152px / 736px） |
| `--motion-quick` | `160ms ease-out` |

正文链接有下划线；焦点环为 2px、外偏移 4px。普通文字在所用页面、次级和面板背景上的最低计算对比度为 4.57:1；交互边框最低为 3.07:1。装饰强调色不直接用作小字号正文。`prefers-reduced-motion: reduce` 下关闭过渡、动画及平滑滚动。

按用户本轮反馈恢复原站全部字体族：中文 Fandol 宋体，西文 Study Latin Modern，标题使用原有标题字体；代码使用原有 Consolas / monospace。其余配色、字号、留白、布局和交互保持本次改版方案。

现站未发现深色模式或主题切换。新样式限定为 `screen`，不改变 Fandol 宋体与 Computer Modern 的打印排版。

## 验证结果

### 真实浏览器视口

在云端 Chrome 使用真实 iframe 视口检查以下五类页面，四档宽度均截图检查。表格为 `documentElement.clientWidth / scrollWidth`；差出的 15px 是浏览器纵向滚动条。

| 页面 | 1440px | 768px | 390px | 320px |
| --- | --- | --- | --- | --- |
| 首页 | 1425 / 1425 | 753 / 753 | 375 / 375 | 305 / 305 |
| Wirtinger 文章 | 1425 / 1425 | 753 / 753 | 375 / 375 | 305 / 305 |
| 作文目录 | 1425 / 1425 | 753 / 753 | 375 / 375 | 305 / 305 |
| 作文练习年份索引 | 1425 / 1425 | 753 / 753 | 375 / 375 | 305 / 305 |
| 2026 作文练习 | 1425 / 1425 | 753 / 753 | 375 / 375 | 305 / 305 |

恢复原站字体后重新执行全部 20 项，均无整页横向溢出；实际检查正文、标题及作答区计算字体与原站一致，311 个公式仍全部加载。全部 20 项无整页横向溢出。320px 文章内宽 273px，超过该宽度的公式在自身容器 `overflow-x: auto` 滚动；实际用右方向键使公式滚动容器获得焦点并从 0 滚到 26px。

### 功能与数据

- 首页主导航、作文年份锚点和文章目录实际点击通过；目标获得焦点并留出顶部距离。
- 搜索 Wirtinger 返回 2 项，清空搜索恢复 811 项。
- 对照正式文章与预览文章：正文文本、27 个锚点、全部链接和 311 个公式 SVG 文件名逐项一致；311 个公式图片均加载成功。
- 四个作文作答区分别输入、保存全部、刷新，内容完整恢复；自动保存等到真实“已保存”后刷新也恢复。
- 2025 / 2026 年份存储隔离通过。
- 图片上传、备份导出、备份导入和图片恢复通过。尝试导入错误年份备份时出现真实错误提示，当前内容没有被覆盖。
- 键盘 Tab 导航及焦点环通过；输入区域及保存、上传、导入按钮保留可访问名称。
- 测试数据只写入预览源站；测试后通过页面控件清空。没有操作正式站的用户存储。

### 构建与测试

- `npm run check`、`git diff --check` 通过。
- 32 项相关测试通过：home、writing-directory、writing-practice、writing-templates、fragment-navigation、math-typography、problem-years、storage。
- 原有标准 LaTeX 渲染测试另行通过（1 项），验证实际 Computer Modern / Fandol SVG 及可访问 MathML。
- 执行测试使用 `node --import tsx --test`，与 CI 的调用方式一致；`npm test` 的 tsx CLI 在当前环境遭遇 `/tmp` IPC 权限限制。
- 使用原构建脚本的临时缩范围副本生成审阅预览：231 个页面、811 项目录元数据及完整 Wirtinger 文章。实际文章包含 246 条唯一公式、311 处公式。缩范围脚本和产物未纳入提交，不能用于正式部署。

复现相关测试：

```sh
node --import tsx --test --test-concurrency=2 scripts/home.test.ts scripts/writing-directory.test.ts scripts/writing-practice.test.ts scripts/writing-templates.test.ts scripts/fragment-navigation.test.ts scripts/math-typography.test.ts scripts/problem-years.test.ts scripts/storage.test.ts
node --import tsx --test --test-name-pattern='standard LaTeX' scripts/math.test.ts
```

## 未验证项与发布前检查

本轮未完成全站 21,520 条唯一公式的全量预编译、全套测试、全量 build / verify 及所有正文页面的链接巡检；预览不能代表全站部署完成。用户确认后，应在正式 CI 环境执行完整检查，再发布正常构建产物。

尚未进行 iOS Safari / iPad 真机检查、操作系统减少动态效果开关实测、浏览器存储额度耗尽与不可用场景实测。减少动态效果规则及原有失败处理经过源码检查，但不将其标记为端到端通过。打印样式未修改，本轮未重新打印全站 PDF。

首页、文章、练习页的同视口前后截图，以及全部 20 项屏宽截图另以自包含审阅报告交付。截图中的“修改前”为正式站，“修改后”为真实源码预览，未制作脱离现站的静态样稿。
