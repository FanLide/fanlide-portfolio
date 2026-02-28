# fanlide-portfolio — 项目架构概览

> 本文档供 AI（或人类开发者）快速理解项目结构，开发前必读。

---

## 是什么

Petter Fan Studio 的个人/工作室 Portfolio 网站。三语言（EN / JA / ZH），部署在 Cloudflare Workers。

主要功能：
- 展示工作室简介、核心能力、项目案例、技术栈、团队成员
- 多语言切换（`/en` / `/ja` / `/zh`）
- Markdown 驱动的作品集详情页（`/work/[slug]`）
- 旧版 Astro 官方模板风格页（About / Work 列表）— 与主页并存，待整合

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | **Astro 5** (`astro@^5`) |
| UI 组件 | **React 19**（通过 `@astrojs/react` 集成） |
| 样式 | **Tailwind CSS v4**（Vite 插件方式接入，无 config 文件） |
| 语言 | **TypeScript**（`tsconfig.json` 使用 Astro 默认 strict 配置） |
| 部署 | **Cloudflare Workers**（`@astrojs/cloudflare` adapter） |
| 构建 | `astro build` → 产物在 `dist/`，入口为 `dist/_worker.js/index.js` |
| 开发 | `astro dev`（本地热重载） |

---

## 目录结构

```
fanlide-portfolio/
├── src/
│   ├── pages/                  # 路由层（文件即路由）
│   │   ├── index.astro         # 重定向或旧版首页（如需）
│   │   ├── about.astro         # /about（旧版模板风格）
│   │   ├── work.astro          # /work 列表页（旧版模板风格）
│   │   ├── work/
│   │   │   └── [...slug].astro # /work/[slug] 动态详情页
│   │   ├── [lang]/
│   │   │   └── index.astro     # /en /ja /zh 三语言主页（主要页面）
│   │   └── 404.astro           # 404 页
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro    # 旧版 Layout（Nav + Footer + 背景图）
│   │   └── Layout.astro        # 新版 Layout（暗色主题，三语言主页使用）
│   │
│   ├── components/             # 通用组件（全部 .astro，供旧版页面使用）
│   │   ├── Nav.astro           # 旧版导航栏
│   │   ├── Footer.astro        # 旧版 Footer
│   │   ├── Hero.astro          # 首页 Hero
│   │   ├── PortfolioPreview.astro # 作品卡片
│   │   ├── Skills.astro        # 技能展示
│   │   ├── ContactCTA.astro    # 联系号召
│   │   ├── Grid.astro          # 网格布局容器
│   │   ├── Pill.astro          # 标签胶囊组件
│   │   ├── Icon.astro          # SVG 图标
│   │   ├── IconPaths.ts        # 图标路径定义
│   │   ├── ThemeToggle.astro   # 暗/亮主题切换
│   │   ├── CallToAction.astro  # CTA 区块
│   │   └── MainHead.astro      # <head> meta 标签
│   │
│   ├── content/
│   │   ├── work/               # Markdown 作品集内容
│   │   │   ├── aurora.md
│   │   │   ├── bloom-box.md
│   │   │   ├── h20.md
│   │   │   ├── markdown-mystery-tour.md
│   │   │   └── nested/
│   │   │       └── duvet-genius.md
│   │   └── cv.md               # CV 内容（备用）
│   │
│   ├── content.config.ts       # Astro Content Collections 配置
│   │
│   ├── data/
│   │   └── portfolio.ts        # 三语言主页所有数据（翻译、经历、项目、技能、团队）
│   │
│   └── styles/
│       └── global.css          # 全局样式（CSS 变量、基础 reset）
│
├── public/                     # 静态资产（图片、favicon 等）
│   └── assets/
│       ├── backgrounds/        # 背景图（旧版页面使用）
│       ├── portrait.jpg
│       ├── at-work.jpg
│       └── stock-*.jpg
│
├── docs/                       # 项目文档（本文件所在目录）
├── dist/                       # 构建产物（不提交 git）
├── astro.config.mjs            # Astro 配置
├── wrangler.jsonc              # Cloudflare Workers 部署配置
├── package.json
└── tsconfig.json
```

---

## 路由说明

| 路径 | 文件 | 说明 |
|------|------|------|
| `/` | `pages/index.astro` | 目前重定向或为旧版首页 |
| `/en` | `pages/[lang]/index.astro` | 英文主页（主要入口） |
| `/ja` | `pages/[lang]/index.astro` | 日文主页 |
| `/zh` | `pages/[lang]/index.astro` | 中文主页 |
| `/about` | `pages/about.astro` | 旧版 About 页 |
| `/work` | `pages/work.astro` | 旧版 Work 列表页 |
| `/work/[slug]` | `pages/work/[...slug].astro` | Markdown 内容详情页 |
| `/404` | `pages/404.astro` | 404 页 |

**静态生成**：三语言路由通过 `getStaticPaths()` 在构建时生成，`lang` 参数为 `'en' | 'ja' | 'zh'`。

---

## 数据层

### `src/data/portfolio.ts`（核心数据文件）

三语言主页 `[lang]/index.astro` 的所有内容从这里读取。包含以下导出：

- **`translations`** — UI 文案（hero、section 标题等），按语言索引
- **`experience`** — 工作/团队经历列表，`description` 字段支持 `string` 或 `{ en, ja, zh }` 多语言对象
- **`projects`** — 项目案例列表，字段同上
- **`skills`** — 技术栈，分 `frontend` / `backend` / `tools` 三类
- **`partners`** — 团队成员列表

**新增内容修改这个文件即可，页面自动渲染。**

### `src/content/work/` — Markdown 作品集（Content Collections）

每个 `.md` 文件对应一个作品详情页，frontmatter schema 定义在 `src/content.config.ts`：

```ts
{
  title: string
  description: string
  publishDate: Date   // 自动 coerce
  tags: string[]
  img: string
  img_alt?: string
}
```

---

## 布局系统

项目现有**两套布局**（历史原因并存）：

### `Layout.astro`（新版，三语言主页使用）
- 极简包装，只传 `title` prop
- 暗色主题硬编码（`bg-[#0a0a0a]`）
- 导航栏和页脚内嵌在 `[lang]/index.astro` 页面内

### `BaseLayout.astro`（旧版，About/Work 页使用）
- 完整的 `Nav + slot + Footer` 结构
- 支持暗/亮主题切换（CSS 变量 + `ThemeToggle`）
- 背景图通过 CSS 变量按屏幕尺寸和主题切换

---

## i18n 实现方式

**无第三方 i18n 库**，完全手动实现：

1. `src/data/portfolio.ts` 的 `translations` 对象按语言存放文案
2. `[lang]/index.astro` 通过 `const t = translations[lang] || translations['en']` 获取当前语言文案
3. 多语言字段（如 `project.description`）：`string` 时所有语言共用，`{ en, ja, zh }` 对象时按语言取值
4. 语言切换导航在页面顶部固定栏（`/en` / `/ja` / `/zh`）

---

## 部署

**Cloudflare Workers（SSR 模式）**

```jsonc
// wrangler.jsonc 关键配置
{
  "name": "fanlide-portfolio",
  "main": "dist/_worker.js/index.js",
  "compatibility_date": "2026-02-21",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": { "binding": "ASSETS", "directory": "./dist" }
}
```

部署流程：
```bash
npm run build          # 生成 dist/
npx wrangler deploy    # 推送到 Cloudflare Workers
```

---

## 常用命令

```bash
npm run dev      # 本地开发（http://localhost:4321）
npm run build    # 构建生产包
npm run preview  # 本地预览构建产物
```

---

## 注意事项（给 AI 开发者）

1. **Tailwind v4 无配置文件** — 不要创建 `tailwind.config.js`，v4 通过 Vite 插件接入，直接在 CSS/class 中使用。
2. **两套布局并存** — 新功能优先使用 `Layout.astro` 和 `[lang]/` 目录下的多语言架构。
3. **数据改动** — 新增项目/团队成员只需修改 `src/data/portfolio.ts`。
4. **类型安全** — `portfolio.ts` 的多语言字段类型是 `string | { en: string; ja: string; zh: string }`，模板里需要做类型判断（参考现有代码）。
5. **无 Supabase / 无后端** — 纯静态站点（SSR by Cloudflare），无数据库依赖。
6. **React 集成** — `@astrojs/react` 已集成，可在 `src/components/` 下创建 `.tsx` 组件，在 `.astro` 页面中 `client:*` 指令挂载。
