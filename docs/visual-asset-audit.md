# 全站视觉资产盘点

盘点日期：2026-09-22

## 范围与处理原则

- 本清单覆盖网站运行时会展示的位图，以及源码中为这些位图登记的路径。
- 首页原有的 Act+Acre 第三方产品图已从首屏移除；只使用仓库中已有、已获网站使用授权的 Saheli 真实产品图替换。
- 除上述首页替换外，本次只读盘点，不下载、不生成、不引入替代图，也不改动其他待确认视觉素材。
- Lucide 图标、CSS 色块/渐变、字体和仅用于开发说明的 README 横幅不属于本次产品与品牌视觉盘点。

## 已确认可用的 Saheli 产品图

| 展示位置 / 登记位置 | 资产 | 状态 |
| --- | --- | --- |
| 首页首屏；产品目录 | `/assets/products/saheli-organic-henna-227g.jpg` | Saheli 有机海娜粉 227g 真实产品图；首页已使用该图替换 Act+Acre 第三方产品图 |
| 产品目录 | `/assets/products/saheli-soft-black-100g.jpg` | Saheli 植物染发粉自然黑 100g 真实产品图；保留 |
| 产品目录 | `/assets/products/saheli-herbal-hair-color-dark-brown-front.jpg` | Saheli 植物染发粉深棕 100g 正面真实产品图；保留 |
| 产品目录 | `/assets/products/saheli-herbal-hair-color-dark-brown-back.jpg` | Saheli 植物染发粉深棕 100g 背面真实产品图；保留 |

## 待确认的第三方或占位视觉素材

以下项目仅登记，未在本次更换或删除：

| 页面 / 位置 | 当前来源 | 发现与风险 | 后续所需确认 |
| --- | --- | --- | --- |
| 首页「品牌故事」卡片 | Unsplash：`photo-1596755094514-f87e34085b2c` | 外部占位图；不是已确认的 Saheli 品牌、索杰特产地或工厂素材，容易造成品牌归属误解 | 获授权的 Saheli 品牌故事、索杰特或 Deepak Industries 实景图 |
| 「草本分析」详情主图（六种植物共用） | Unsplash：`photo-1540555700478-4be289fbecef` | 外部通用占位图；无论选择海娜、木蓝、余甘子、决明、Shikakai 或墨旱莲均显示同一图，与具体原料不匹配 | 分别确认六种原料的准确图片、来源与网站使用授权 |
| 「草本分析」原料数据登记 | `/assets/ingredients/henna-leaf.jpg`、`indigo-leaf.jpg`、`amla-fruit.jpg`、`cassia-leaf.jpg`、`shikakai-pod.jpg`、`bhringraj-herb.jpg` | 路径已登记但仓库中没有对应文件；组件当前因此统一回退到上述 Unsplash 图，而非显示这些路径 | 在引入文件前逐项核对物种、图片内容、版权/授权和命名 |

## 已完成的首页清理

| 原素材 | 处理 | 替代素材 |
| --- | --- | --- |
| Unsplash `photo-1608248597279-f99d160bfcbc`（画面含 Act+Acre 第三方产品） | 已从首页首屏代码中删除引用；不再向该外部地址发起图片请求 | `/assets/products/saheli-organic-henna-227g.jpg` |

## 后续替换验收要求

1. 替代图必须明确属于 Saheli / Deepak Industries 或准确对应所述植物原料。
2. 在提交前记录版权归属、网站使用授权与素材来源；不以图片搜索结果或通用图库相似图替代。
3. 原料图需逐项核验物种与页面文案的对应关系，不能继续让多种原料共用一张通用图片。
4. 替换视觉素材时不得借机改动已核验的产品资料、价格、配料、淘宝链接或认证边界。
