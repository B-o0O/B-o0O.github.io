---
title: Hexo博客建站参考
tags: 
    - [Hexo]
categories:
    - [Hexo]
---
# 主题(Theme)
{%note warning%}
本博客使用主题为[NexT](https://theme-next.js.org/)，本节内容为NexT主题专属，其他主题请参考[Hexo Theme](https://hexo.io/themes/)
{%endnote%}
## 菜单配置(Menu)
{%note info%}
[NexT菜单配置](https://theme-next.js.org/docs/theme-settings/index.html?highlight=menu#Configuring-Menu-Items)
{%endnote%}
NexT菜单配置
{%note default no-icon 菜单配置%}
{%code%}
menu:
  Home: / || fa fa-home
  ComputerScience: 
    default: /computer-science/ || fas fa-laptop-code
    Web: 
      default: /web/ || fa-brands fa-node-js"
    ComputerNetwork: 
      default: /computer-network/ || fa-solid fa-globe
    ProgrammingLanguage:  
      default: /programming-language/ || fa-regular fa-file-code
    MissingSemester: 
      default: /missing-semester/ || fa-solid fa-terminal
      Hexo: /hexo/hexo.html
      Git: /git/git.html 
  Science: 
    default: /science/ || fa-solid fa-atom
    TechHistory: 
      default: /tech-history/ || fa-solid fa-timeline
  LAHP: 
    default: /lahp/ || fa fa-book
    Literature: 
      default: /literature/ || fa-solid fa-book-open
    Art: 
      default: /art/ || fa-solid fa-clapperboard
    History: 
      default: /history/ || fa-solid fa-timeline
      Qing Dynasty: /qing.html || fa fa-book
    Philosophy: 
      default: /philosophy/ || fa-solid fa-graduation-cap
  Resource: /resource/ocean.html || fa-solid fa-database
{%endcode%}
{%endnote%}

## 图标（Icon）

{%note warning%}

{%endnote %}
## 标签（Tag）
## 插件(Plugin)
### 博客搜索引擎(Search Engine)
{%note warning %}
本插件为[Next主题](https://theme-next.js.org/)所提供的插件[searchdb](https://github.com/next-theme/hexo-generator-searchdb)
当前使用为[Local-Search](https://theme-next.js.org/docs/third-party-services/search-services.html?highlight=search#Local-Search)
{%endnote %}
# 图片(Image)

# 报错案例
## 使用NexT note语法报错
使用note语法出现语法错误时候可能会产生下面这个报错，修正语法可解决
如
{% tabs note Error %}
<!-- tab 报错信息 -->
{% note danger no-icon 报错信息 %}
{% code %}
INFO  Start processing
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
  unexpected end of file
    at Object._prettifyError (E:\CS\study\blog\node_modules\nunjucks\src\lib.js:32:11)
    at Template.render (E:\CS\study\blog\node_modules\nunjucks\src\environment.js:442:21)
    at Environment.renderString (E:\CS\study\blog\node_modules\nunjucks\src\environment.js:313:17)
    at E:\CS\study\blog\node_modules\hexo\dist\extend\tag.js:206:22
    at tryCatcher (E:\CS\study\blog\node_modules\bluebird\js\release\util.js:16:23)
    at Promise.fromNode.Promise.fromCallback (E:\CS\study\blog\node_modules\bluebird\js\release\promise.js:209:30)
    at Tag.render (E:\CS\study\blog\node_modules\hexo\dist\extend\tag.js:205:35)
    at Object.onRenderEnd (E:\CS\study\blog\node_modules\hexo\dist\hexo\post.js:399:32)
    at E:\CS\study\blog\node_modules\hexo\dist\hexo\render.js:77:29
    at tryCatcher (E:\CS\study\blog\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (E:\CS\study\blog\node_modules\bluebird\js\release\promise.js:547:31)
    at Promise._settlePromise (E:\CS\study\blog\node_modules\bluebird\js\release\promise.js:604:18)
    at Promise._settlePromise0 (E:\CS\study\blog\node_modules\bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (E:\CS\study\blog\node_modules\bluebird\js\release\promise.js:729:18)
    at _drainQueueStep (E:\CS\study\blog\node_modules\bluebird\js\release\async.js:93:12)
    at _drainQueue (E:\CS\study\blog\node_modules\bluebird\js\release\async.js:86:9)
    at Async._drainQueues (E:\CS\study\blog\node_modules\bluebird\js\release\async.js:102:5)
    at Async.drainQueues (E:\CS\study\blog\node_modules\bluebird\js\release\async.js:15:14)
    at process.processImmediate (node:internal/timers:483:21)
{% endcode %}
{% endnote %}

<!-- endtab -->
<!-- tab 错误用法 -->
```
//少结尾%
{% note info } 
{% endnote}
```
<!-- endtab -->
<!-- tab 正确用法 -->
```
{% note info %} 
{% endnote %}
```
<!-- endtab -->

{% endtabs %}






