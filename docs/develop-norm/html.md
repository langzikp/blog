# HTML开发规范
> 尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。 

> 需要注意HTML的嵌套层级不要太多，在保证可扩展性的条件下，尽量的少嵌套代码。
## 使用小写文件名
- 文件名全部使用小写字母和连词线（all-lowercase-with-dashes）,不使用大写字母；
- 为了醒目，某些说明文件的文件名，可以使用大写字母，比如README、LICENSE； 

[为什么文件名要小写](http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html)

##  一律使用小写字母
- html 标签及属性（包括自定义属性）都是小写字母，不要使用大写字母。
```html
<!-- 推荐 -->
<img src="google.png" alt="Google">

<!-- 不推荐 -->
<A HREF="/">Home</A>
```
```css
/* 推荐 */
color: #e5e5e5;

/* 不推荐 */
color: #E5E5E5;
```

##  html 引号
- html 属性的引号请使用双引号而不是单引号。
```html
<!-- 推荐 -->
<div class="content">

<!-- 不推荐 -->
<div class='content'>
```
## 绑定数据 
- 如果需要为标签绑定一些数据的话，请使用 html5 的自定义属性 data-* 来绑定相关数据。
```html
<!-- 推荐 -->
<h1 data-age="20">张三</h1>
<!--不推荐 -->
<h1 age="20">张三</h1>
```

## 布尔型属性 
- 布尔型属性可以在声明时不赋值。xhtml 规范要求为其赋值，但是 html5 规范不需要。
```html
<!-- 推荐 -->
<input type="text" disabled>
<!--不推荐 -->
<input type="text" disabled="disabled">
```

## 语法
- 用两个空格来代替制表符（tab） – 这是唯一能保证在所有环境下获得一致展现的方法。 
- 嵌套元素应当缩进一次（即两个空格）。
- 对于属性的定义，确保全部使用双引号，绝不要使用单引号。
- 不要在自闭合（self-closing）元素的尾部添加斜线 –  [HTML5 规范](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag)中明确说明这是可选的。
- 不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <!-- 推荐 -->
    <img src="images/company-logo.png" alt="Company">
    <!-- 不推荐 -->
    <img src="images/company-logo.png" alt="Company"/>

    <!-- 推荐 -->
    <ul>
        <li></li>
    </ul>
    <!-- 不推荐 -->
    <ul>
        <li>
    </ul>
  </body>
</html>
```

## Class 与 ID
- class 应以功能或内容命名，不以表现形式命名； 
- class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；
- 使用唯一的 id 作为 `Javascript hook`, 同时避免创建无样式信息的 class；
```html
<!-- 不推荐 -->
<div class="j-hook left contentWrapper"></div>

<!-- 推荐 -->
<div class="sidebar content-wrapper" id="j-hook"></div>
```

## 语言属性
- 根据 HTML5 规范：强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。  
更多关于 lang 属性的知识可以从 [此规范](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element) 中了解。  
这里列出了[语言代码表](https://www.sitepoint.com/iso-2-letter-language-codes/?spm=a2c6h.12873639.0.0.4c396c4dFNi8Ru)。
```html
<html lang="en">
  <!-- ... -->
</html>
```

## 引入 CSS 和 JavaScript 文件
- 根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。
```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```

## 属性顺序
- HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。
    - **class**
    - **id, name**
    - **data-***
    - **src, for, type, href, value**
    - **title, alt**
    - **role, aria-***
- class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位
```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

## 引号
- 属性的定义，统一使用双引号。
```html
<!-- 不推荐 -->
<span class=text id='j-hook'>Google</span>

<!-- 推荐 -->
<span class="text" id="j-hook">Google</span>
```

## 布尔（boolean）型属性
- 布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。
    - **元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。**
- 如果一定要为其赋值的话，请参考 `WhatWG` 规范：
    - **如果属性存在，其值必须是空字符串或 [...] 属性的规范名称，并且不要在首尾添加空白符。**
**简单来说，就是不用赋值。**
```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

## 减少标签的数量
- 编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。请看下面的案例：
```html
<!-- 推荐 -->
<img class="avatar" src="...">

<!-- 不推荐 -->
<span class="avatar">
  <img src="...">
</span>
```

## JavaScript 生成的标签
- 通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。

## HEAD
### 文档类型
- 为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

### 语言属性
- 使用 lang="zh-cmn-Hans" 而不是我们通常写的 lang="zh-CN"
```html
<!-- 中文 -->
<html lang="zh-Hans">

<!-- 简体中文 -->
<html lang="zh-cmn-Hans">

<!-- 繁体中文 -->
<html lang="zh-cmn-Hant">

<!-- English -->
<html lang="en">
```

### 字符编码
- 通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。
```html
<head>
  <meta charset="UTF-8">
</head>
```

### IE 兼容模式
- 优先使用最新版本的IE 和 Chrome 内核
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

### SEO 优化
```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- SEO -->
    <title>Style Guide</title>
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author,email address">
</head>
```

### viewport
- viewport: 用户网页的可视区域。；
- width: 控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）；
- height 和 width 相对应，指定高度;
- device-width: 设备分辨率宽度，输出设备的屏幕可见宽度；
- initial-scale: 初始缩放比例，也即是当页面第一次 load 的时候缩放比例；
- maximum-scale: 允许用户缩放到的最大比例；
- minimum-scale 允许用户缩放到的最小比例；
- user-scaleabel 用户是否可以手动缩放 'no'或‘yes’ 。

为移动端设备优化，设置可见区域的宽度和初始缩放比例。
```html
<meta name="viewport" content="width=device-width, 
  user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

### iOS 图标
- apple-touch-icon 图片自动处理成圆角和高光等效果;
- apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;
```html
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

<!-- iPad，72x72 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-72x72-precomposed.png" sizes="72x72">

<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-114x114-precomposed.png" sizes="114x114">

<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-144x144-precomposed.png" sizes="144x144">
```

### favicon
在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免404，必须遵循以下两种方法之一：
- 在 Web Server 根目录放置 favicon.ico 文件；
- 使用 link 指定 favicon；
```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```

### HEAD 模板
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- SEO -->
    <title>Style Guide</title>
    <meta name="description" content="不超过150个字符">
    <meta name="keywords" content="">
    <meta name="author" content="name, email@gmail.com">

    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="width=device-width, 
      user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">


    <!-- iOS 图标 -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
    <link rel="shortcut icon" href="path/to/favicon.ico">
</head>
```