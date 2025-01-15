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
Web Components 作为一组技术于 2012 年提出，旨在通过提供封装、模块化和可重用的组件来改善 Web 开发。在Web Components出现之前，没有自定义（或风格化）组件并且做到可复用的方法，只是提供像jQuery这样的JS库来简化DOM操作，这种方法是通过使用 JavaScript 函数和对象来创建可复用的代码。例如，可以创建构造函数，使用这些构造函数来生成带有特定功能或样式的 DOM 元素，但缺乏一种系统化的方式来创建可重用的组件或封装的功能。W3C和WAHTWG组织将这些需求正式标准化、制定规范后，浏览器厂商根据规范开发相应的接口（API）以供使用，这部分API就叫做Web Components API,Web Components 的核心特性包括custom element、shadow dom、template。
{%tabs WebComponent  %}

<!-- tab HTML DOM Tree   -->
```markdown
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
<!-- endtab -->

<!-- tab custom elements -->

通过继承 `HTMLElement` 类并实现其中的 API。具体包括：
- `customElements.define(name, constructor, options)`：定义一个新的自定义元素。
- `customElements.get(name)`：获取指定名称的自定义元素构造函数。
- 生命周期回调方法：
  - `connectedCallback`：当自定义元素被添加到文档 DOM 中时调用。
  - `disconnectedCallback`：当自定义元素从文档 DOM 中移除时调用。
  - `adoptedCallback`：当自定义元素被移动到新的文档时调用。
  - `attributeChangedCallback(name, oldValue, newValue)`：当自定义元素的属性被添加、移除或更改时调用。
<!--endtab-->

<!-- tab shadowdom -->
通过 Shadow API 封装自定义元素的样式。具体包括：
- `attachShadow(options)`：将 shadow DOM 树附加到元素上。
- `ShadowRoot`：shadow DOM 树的根节点，提供对 shadow DOM 的访问。
- `mode`：指定 shadow DOM 的模式，可以是 `'open'` 或 `'closed'`。
  - `'open'`：表示 shadow DOM 可以通过 JavaScript 访问。
  - `'closed'`：表示 shadow DOM 不能通过 JavaScript 访问。

通过这种方式，可以确保自定义元素的样式不会受到外部文档的影响，同时外部代码也无法直接改变该元素的样式。
<!--endtab-->

<!-- tab template -->
使用模板语法，便于直接编写 HTML 语法，否则需要使用 `innerHTML`、`content` 等语法硬编码。具体包括：
- `<template>`：定义可重用的模板。
- `document.importNode(template.content, true)`：克隆模板内容。
- `template.content.cloneNode(true)`：克隆模板内容（现代浏览器中更推荐使用 `importNode`）。

通过模板语法，可以更清晰地组织和重用 HTML 内容，避免硬编码 HTML 字符串。
<!--endtab-->
<!-- tab example-->
[效果](/assets/html/my-element.html)
```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components 示例</title>
</head>
<body>
    <h1>Web Components 示例</h1>
    <my-element></my-element>

    <template id="myTemplate">
        <style>
            p {
                color: blue;
                font-size: 20px;
            }
        </style>
        <p>这是一个模板内容</p>
    </template>

    <script>
        class MyElement extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });
                const template = document.getElementById('myTemplate');
                const clone = document.importNode(template.content, true);
                shadow.appendChild(clone);
            }
        }
        customElements.define('my-element', MyElement);
    </script>
</body>
</html>

```

<!--endtab -->

{%endtabs%}
我们发现是不是和Vue SFC很像？其实是不一样的，Web Components方式是原生的JS，不依赖任何框架，Vue是通过VDOM方式实现的，现在似乎使用Web Components的越来越多了。[点这里查看他们的区别](https://juejin.cn/post/7135805641943154702)



