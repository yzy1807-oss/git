# ReadBridge

ReadBridge 是一个面向英语兴趣阅读者的网页版学习工具原型。

用户可以阅读英文文章、收藏生词、写 summary、查看原型 AI 修改示例、收藏短语 / 句型、听读文章、导入 PDF，并在生词本中生成原句记忆画面。

## 当前状态

这是一个 React + Vite MVP 测试版本，适合分享给 3-5 个真实用户做早期体验测试。

当前 AI 修改和记忆画面生成功能为原型模拟，用于验证学习流程，不代表已经接入真实 AI 服务。

## 本地运行

```bash
npm install
npm run dev
```

打开：

```text
http://127.0.0.1:5173/
```

## 构建

```bash
npm run build
```

构建结果会输出到 `dist/`。

## 推荐部署

推荐部署到 Vercel：

1. 将项目上传到 GitHub。
2. 在 Vercel 新建项目并选择该 GitHub 仓库。
3. Framework Preset 选择 Vite。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

部署完成后，把 Vercel 生成的公开链接发给测试者。

## 测试重点

测试者不需要评价模型质量，重点观察：

- 是否愿意选择文章并读完。
- 是否会自然收藏生词。
- 是否愿意写 summary。
- 是否觉得 summary 修改示例有帮助。
- 是否会收藏修改稿中的短语 / 句型。
- 生词本是否有复习价值。
- 音频朗读是否提升阅读体验。
- 原句记忆画面是否帮助记忆。
- PDF 导入是否是有价值的入口。
