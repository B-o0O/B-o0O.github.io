---
title: html
date: 2025-01-15 22:28:13
---
# HTMLDOM
## DOM Interface Inherit Tree

## Event 接口
{% note info  %}
[接口标准](https://dom.spec.whatwg.org/#interface-event)
{% endnote %}
`event = new Event(type [, eventInitDict])`
{% tabs eventInitDict , [index] %}
<!-- tab bubbles -->
js事件触发机制:捕获阶段=>目标事件阶段=>冒泡阶段
捕获阶段:事件触发顺序从最外层元素documen到目标事件元素
目标事件阶段:目标事件触发
冒泡阶段:事件触发顺序从目标事件元素到最外层元素document
<!-- endtab -->
<!-- tab cancelable -->
默认行为是否可取消,即event.preventDefault()是否可执行;另外当EventTarget的passive=true时候即认为语句event.preventDefault()将不会执行,即默认行为会执行.即伪代码:`event.preventDefault() = cancelable && !passive`
<!-- endtab -->
<!-- tab composed -->
<!-- endtab -->
{% endtabs %}

## EventTarget 接口
{% note info  %}
[接口标准](https://dom.spec.whatwg.org/#eventtarget)
{% endnote %}
`target . addEventListener(type, callback [, options])`
  {% tabs options %}
    <!-- tab caputer -->
    capture控制事件是否在捕获阶段执行
    <!-- endtab  -->
        <!-- tab passive -->
    passive控制event.preventDefault()是否可以执行
    <!-- endtab  -->
        <!-- tab once -->
    控制事件是否执行一次,once=true,则执行一次后销毁该事件
    <!-- endtab  -->
    {% endtabs %}