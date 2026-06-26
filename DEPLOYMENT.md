# 部署与分享指南

## 方式一：Vercel

适合长期测试，推荐使用。

### 1. 准备 GitHub 仓库

在 GitHub 创建一个新仓库，例如：

```text
readbridge
```

将当前项目上传到该仓库。

### 2. 导入 Vercel

进入 Vercel：

```text
https://vercel.com
```

选择：

```text
Add New Project -> Import Git Repository
```

选择 ReadBridge 仓库。

### 3. 部署配置

Vercel 通常会自动识别 Vite。确认配置如下：

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

项目已经在 `vite.config.js` 中显式配置了 `index.html` 入口，用于保证在包含中文路径的本地目录中也能稳定构建。

### 4. 获取测试链接

部署完成后，Vercel 会生成一个公开链接，例如：

```text
https://readbridge.vercel.app
```

将这个链接发给测试者。

## 方式二：Netlify Drop

适合快速临时测试。

先本地构建：

```bash
npm run build
```

然后打开：

```text
https://app.netlify.com/drop
```

把 `dist/` 文件夹拖进去，即可得到一个公开测试链接。

## 测试前说明文案

可以发给测试者：

```text
这是一个英语兴趣阅读工具的早期原型。
请重点体验：阅读、收藏生词、写 summary、生词复习、音频朗读、记忆画面和 PDF 导入。
其中 AI 修改目前是原型示例，不是真实 AI，请不要评价模型质量，重点告诉我这个流程是否有帮助。
```
