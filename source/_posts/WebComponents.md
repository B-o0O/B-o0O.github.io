---
title: WebComponents
tags:
  - [Web]
categories:
  - [Web,]
date: 2024-12-11 00:19:34
---
{%note info %}
[理解WebComponents](https://kinsta.com/blog/web-components/#what-are-web-components)
{%endnote%}
Web Components 作为一组技术于 2012 年提出，旨在通过提供封装、模块化和可重用的组件来改善 Web 开发。在Web Components出现之前，没有自定义（或风格化）组件并且做到可复用的方法，只是提供像jQuery这样的JS库来简化DOM操作，
这种方法是通过使用 JavaScript 函数和对象来创建可复用的代码。例如，可以创建构造函数，使用这些构造函数来生成带有特定功能或样式的 DOM 元素，但缺乏一种系统化的方式来创建可重用的组件或封装的功能。W3C和WAHTWG组织将这些需求正式标准化、制定规范后，浏览器厂商根据规范开发相应的接口（API）以供使用，这部分API就叫做Web Components API,Web Components 的核心特性包括：
+ 自定义元素：允许开发者定义新的 HTML 元素及其行为。
+ 阴影 DOM：为组件提供局部 DOM，允许样式和结构的封装。
+ HTML 模板：允许开发者在文档中定义可重用的模板。
对应的API有：


HTML DOM 结构
```
Node
├── Document
│   ├── DocumentFragment
│   ├── DocumentType  (例如: <!DOCTYPE html>)
│   └── ... (其他文档类型)
├── Element
│   ├── HTMLElement
│   │   ├── HTMLAnchorElement           // <a>
│   │   ├── HTMLBodyElement             // <body>
│   │   ├── HTMLDivElement              // <div>
│   │   ├── HTMLHeadingElement           // <h1>, <h2>, ..., <h6>
│   │   ├── HTMLImageElement             // <img>
│   │   ├── HTMLInputElement             // <input>
│   │   ├── HTMLLabelElement             // <label>
│   │   ├── HTMLParagraphElement         // <p>
│   │   ├── HTMLSpanElement              // <span>
│   │   ├── HTMLTableElement             // <table>
│   │   ├── HTMLTableRowElement          // <tr>
│   │   ├── HTMLTableCellElement         // <td>, <th>
│   │   ├── HTMLFormElement              // <form>
│   │   ├── HTMLSelectElement            // <select>
│   │   └── ... (其他 HTML 元素)
│   ├── SVGElement                       // SVG 元素的基础类
│   │   ├── SVGCircleElement             // <circle>
│   │   ├── SVGRectElement               // <rect>
│   │   └── ... (其他 SVG 元素)
│   ├── Text
│   ├── Comment
│   └── ... (其他节点类型，如 ProcessingInstruction)

```