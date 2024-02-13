# 浏览器兼容性

## 问题产生原因

- 市场竞争
- 标准版本的变化
- 标准仍在讨论中（草案），浏览器厂商希望先支持

## 解决方式1： 厂商前缀

> 比如：box-sizing， 谷歌旧版本浏览器中使用-webkit-box-sizing:border-box

IE： -ms-
Chrome，safari:  -webkit-
opera： -o-
firefox: -moz-

> 浏览器在处理样式或元素时，使用如下的方式：
> 当遇到无法识别的代码时，直接略过。


**示例**
1. 谷歌浏览器的滚动条样式
```css
 div{
            width: 200px;
            height: 200px;
            border: 2px solid;
            overflow: auto;
        }
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-track{
            background: #74c0c0;
        }
        ::-webkit-scrollbar-thumb{
            background: #008c8c;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-button{
            background: red;
        }
```

实际上，在开发中使用自定义的滚动条，往往是使用div+css+JS实现的

2. 多个背景图中选一个作为背景
```css
div{
    width: 500px;
    height: 500px;
    background-image: -webkit-image-set(url("img/small.jpg") 1x, url("img/big.jpg") 2x);
    background-size: 100%;
}
```

## 解决方式2： css hack

根据不同的浏览器（主要针对IE），设置不同的样式和元素

1. 样式

IE中，CSS的特殊符号

- *属性，兼容IE5、IE6、IE7
- _属性，兼容IE5~IE6
- 属性值\9，兼容IE5~IE11
- 属性值\0，兼容IE8~IE11
- 属性值\9\0，兼容IE9~IE10
```css
<style>
    div {
        width: 100px;
        height: 100px;
        background: red;
        *background: blue;
        _background:yellow;
        background: orange\9;
        background: green\0;
        background: black\9\0;
    }
</style>
```

> IE5、6、7的外边距bug，浮动元素的左外边距翻倍

2. 条件判断
```html
<!--[if IE]>    
    <p>
        这是IE浏览器
    </p> 
    <![endif]-->


    <!--[if !(IE)]><-->
    <p>
        这是非IE浏览器
    </p> 
    <!--<![endif]-->
```

## 渐近增强 和 优雅降级

两种解决兼容性问题的思路，会影响代码的书写风格

- 渐近增强：先适应大部分浏览器，然后针对新版本浏览器加入新的样式

书写代码时，先尽量避免书写有兼容性问题的代码，完成之后，再逐步加入新标准中的代码。

- 优雅降级：先制作完整的功能，然后针对低版本浏览器进行特殊处理

书写代码时，先不用特别在意兼容性，完成整个功能之后，再针对低版本浏览器处理样式。

## caniuse

查找css兼容性

[caniuse.com](https://caniuse.com/)