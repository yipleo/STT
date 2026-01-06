# STT 实时翻译 - GitLab Pages 部署指南

本指南将帮助您将技术支持网页部署到 GitLab Pages。

## 1. 准备工作

确保您已经拥有 [GitLab](https://gitlab.com/) 账号。

## 2. 自动化部署配置

我们已经在项目中添加了 `.gitlab-ci.yml` 文件，这是 GitLab CI/CD 的配置文件。当您将代码推送到 GitLab 时，它会自动触发构建流程，并将网站部署到 Pages。

文件内容简述：
- 使用 Node.js 环境
- 安装依赖 (`npm install`)
- 构建项目 (`npm run build`)
- 将构建产物 `dist` 目录重命名为 `public` (GitLab Pages 的要求)
- 将 `public` 目录作为制品上传

## 3. 部署步骤

### 第一步：在 GitLab 创建项目

1. 登录 GitLab。
2. 点击 "New project" -> "Create blank project"。
3. Project name 建议填写 `stt-support`。
4. **Visibility Level**（可见性）：
   - 如果您希望所有人都能访问您的网页，建议选择 **Public**。
   - 如果选择 Private，您需要在 Settings -> Pages 中调整访问权限。

### 第二步：推送代码

在本地项目根目录下运行以下命令：

```bash
# 1. 初始化 git（如果尚未初始化）
git init

# 2. 关联远程仓库
git remote add origin https://gitlab.com/yipleo-group/yipleo-project.git

# 3. 添加并提交更改
git add .
git commit -m "Setup for GitLab Pages"

# 4. 推送到 master 分支
git push -u origin master
```

### 第三步：等待部署

1. 推送成功后，GitLab CI/CD 会自动开始运行。
2. 您可以在 GitLab 项目页面的左侧菜单 **Build** -> **Pipelines** 中查看构建进度。
3. 当 Pipeline 显示 "Passed"（绿色对勾）时，表示部署成功。

## 4. 获取网站链接

部署成功后，您的网站通常可以通过以下 URL 访问：

`https://yipleo-group.gitlab.io/yipleo-project`

您可以去 **Deploy** -> **Pages** 菜单中查看确切的访问链接。

## 5. 常见问题

*   **页面显示 404？**
    *   部署完成后可能需要几分钟时间才能生效，请耐心等待。
    *   检查 Pipeline 是否成功运行。
    *   确保您的 `vite.config.ts` 中 `base` 设置为 `'./'`（我们已默认配置）。

*   **构建失败？**
    *   请检查 Pipeline 的日志输出，查看具体的错误信息。
    *   确保您的项目根目录下存在 `.gitlab-ci.yml` 文件。

## 6. 更新网站

只需修改代码并推送 (`git push`) 到 GitLab 的 `master` 分支，CI/CD 流水线就会自动重新构建并发布更新。
