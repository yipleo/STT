# STT 实时翻译 - Gitee Pages 部署指南

本指南将帮助您将技术支持网页部署到 Gitee Pages（码云）。

## 1. 准备工作

确保您已经安装了 Node.js 和 Git。

## 2. 构建项目

在项目根目录下运行以下命令进行构建：

```bash
npm run build
```

这将在项目根目录下生成一个 `dist` 文件夹，里面包含了所有需要部署的静态文件。

## 3. 部署到 Gitee

### 方案 A：直接推送源码（推荐）

1.  **在 Gitee 上创建新仓库**：
    *   登录 [Gitee](https://gitee.com/)。
    *   点击右上角的 "+" -> "新建仓库"。
    *   仓库名称建议填写 `stt-support` 或类似名称。
    *   选择“开源”（为了让 Pages 可以被公开访问）。

2.  **推送代码**：
    ```bash
    # 初始化 git（如果尚未初始化）
    git init
    
    # 添加所有文件
    git add .
    
    # 提交更改
    git commit -m "Initial commit"
    
    # 关联远程仓库（请将 URL 替换为您刚才创建的 Gitee 仓库地址）
    git remote add origin https://gitee.com/您的用户名/仓库名.git
    
    # 推送到 master 分支
    git push -u origin master
    ```

3.  **开启 Gitee Pages**：
    *   进入 Gitee 仓库页面。
    *   点击顶部菜单栏的 **"服务"** -> **"Gitee Pages"**。
    *   **部署分支**：选择 `master`。
    *   **部署目录**：填写 `dist`（因为我们的构建产物在 dist 目录下，但 Gitee Pages 免费版通常不支持指定子目录部署，**请看下面的特别说明**）。

    > **⚠️ 特别说明（重要）：**
    > Gitee Pages 免费版通常只能部署仓库根目录。因此，我们需要将构建后的 `dist` 目录内容推送到一个单独的分支（通常叫 `pages`），或者使用专门的部署脚本。
    
    **更推荐的 Gitee 部署步骤（使用 gh-pages 工具）：**

    1. 确保 `package.json` 中有 `deploy` 脚本（我们已经为您配置好了）：
       ```json
       "scripts": {
         "deploy": "gh-pages -d dist"
       }
       ```
    
    2. 运行部署命令：
       ```bash
       # 这一步会自动构建项目并将 dist 目录推送到 gh-pages 分支
       npm run deploy
       ```
       *注意：如果报错提示无法推送到 origin，请确保您已经添加了 gitee 的远程仓库地址。*

    3. 回到 Gitee Pages 设置页面：
       *   **部署分支**：选择 `gh-pages`。
       *   点击 **"启动"** 或 **"更新"** 按钮。

## 4. 获取网站链接

部署成功后，Gitee 会显示您的网站地址，格式通常为：
`https://<您的用户名>.gitee.io/<仓库名>`

请复制这个链接，并填入 App Store Connect 的“技术支持网址”栏中。

## 5. 常见问题

*   **页面显示空白？**
    *   请确保 `vite.config.ts` 中的 `base` 已设置为 `'./'`（我们已经帮您修改好了）。
    *   检查 Gitee Pages 是否已更新到最新版本。每次推送代码后，**必须手动在 Gitee Pages 页面点击“更新”按钮**（Gitee Pro 版才支持自动更新）。
*   **需要实名认证？**
    *   是的，Gitee Pages 目前要求账户必须完成实名认证才能开通服务。

## 6. 更新网站

如果您修改了代码，请重复以下步骤：
1. `npm run deploy`
2. 去 Gitee Pages 页面点击 **"更新"**。
