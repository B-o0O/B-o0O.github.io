---
title: hexo实践
categories:
  - hexo
date: 2024-11-06 23:16:41
tags:
---
# 创建带路径文章

```
hexo new post title -p folder/filename
```
`p`即`path` `title`是文章标题即文章模板中的`title`
# 修改生成文章的模板
编辑`/scaffolds`下的文件模板

# 插件
1. hexo-asset-image图片路径插件
   1. 安装
   ```
   npm install hexo-asset-image --save
   ```
   2. 配置
   `_config.yml`文件``,在生成文章时自动在同级目录创建同名文件夹
   ```
   post_asset_folder: true
   ```
   3. 使用
   使用markdown语法引用图片即可，插件会自动生成可访问的绝对路径。如：
   ```
   title/
      1.img
      subfolder/
        2.img
   title.md
   在title.md中使用![text](1.img)、![text](./subfolder/2.img)
   ```