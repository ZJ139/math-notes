# 2026-11-06 全站图标统一

使用用户本次上传的 IMG_0054.png。原图 1254 × 1254，SHA-256 为 `6139e2c21aa24401aa39050444199d45f16f7e2cb901f82955ccdbee01061e78`，原始字节保存在 `public/icons/site-icon.png`。

- 全站共享页眉、ICO、16/32 px PNG favicon、SVG favicon、180 px Apple Touch Icon、192/512 px 应用图标和 512 px maskable 图标统一来自原图。
- 普通 PNG 保留透明圆角；Apple Touch 和 maskable 版本将透明角以原图底色 RGB(213, 110, 77) 合成，避免系统显示黑角。图形比例、方向和颜色保持原样。
- 两个原有 SVG 地址均嵌入原始 PNG，兼容仍引用旧地址的书签；页眉使用 192 px PNG。
- HTML 和 manifest 的图标缓存版本统一为 `upload-6139e2c21aa2`。

验证：原始 PNG 字节相同；各普通尺寸逐像素核对；SVG 内嵌 PNG 解码后与原图完全一致；ICO 包含 16/32/48 px；manifest 引用和尺寸均有效。部署流程仍在发布前运行 check、test、build、verify，任一失败即停止部署。

发布后按既定规则保存对应提交的完整源码 ZIP 与核验 JSON；备份名称包含日期和发布 commit SHA。核验记录包含实际部署结果、源码文件数、逐文件 Git blob 核对、ZIP SHA-256 和保存结果。
