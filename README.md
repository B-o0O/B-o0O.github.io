<<<<<<< HEAD
+ [hexo官网文档](https://hexo.io/zh-cn/docs/commands)
=======
+ [hexo官网文档](https://hexo.io/zh-cn/docs/commands)
>>>>>>> bc55a233d66aeb5ab88d4525f49a64a3017d7a49
+ [icarus](https://ppoffice.github.io/hexo-theme-icarus/uncategorized/getting-started-with-icarus/)
+ 创建文章
`hexo new [layout] title `生成于默认文件夹`source/_posts`下
`hexo new [layout] -p path/to/title ` 生成于文件夹`source_posts/path/to`下
+ "hexo generate"
功能：生成静态文件。这个命令会将你的 Markdown 博客文章以及其他资源转换成 HTML 格式，并将其放在 public 目录中。你在发布或查看网站时，会用到生成的这些文件。

+  "hexo clean"

功能：清除生成的文件。这个命令会删除 public 目录中的所有文件，以便你可以从干净的状态重新生成内容。通常在发生错误或需要重新生成网站时使用。

+  "hexo deploy"

功能：部署网站。该命令会将生成的静态文件上传到你预设的远程服务器上（如 GitHub Pages、GitLab Pages 等），以便其他人可以访问你的博客。部署后github Page有一定延迟,等待一定时间后刷新

+  "hexo server"

功能：启动一个本地服务器。该命令会在本地启动一个开发服务器，通常默认在 http://localhost:4000 上运行。你可以在此地址预览你的网站，适用于开发和测试阶段。