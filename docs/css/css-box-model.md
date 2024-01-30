# 盒子模型
> [MDN 盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)  

盒子（box）： html每个元素在页面中都会生成一个矩形区域，这个矩形区域就是盒子

## 盒子类型：

- 行盒，display等于inline的元素，在页面中不换行
- 块盒，display等于block的元素，在页面中独占一行


浏览器默认样式表设置的块盒：容器元素、`h1`~`h6`、`p`

常见的行盒：`span`、`a`、`img`、`video`、`audio`

## 盒子的组成部分

无论是行盒、还是块盒，都由下面几个部分组成，从内到外分别是：

- 内容  content

width、height，设置的是盒子内容的宽高

内容部分通常叫做整个盒子的**内容盒 content-box**

- 填充(内边距)  padding

盒子边框到盒子内容的距离

padding-left、padding-right、padding-top、padding-bottom

padding: 简写属性

padding: 上 右 下 左

填充区+内容区 = **填充盒 padding-box**

- 边框  border

边框 = 边框样式 + 边框宽度 + 边框颜色

边框样式：border-style
边框宽度：border-width
边框颜色：border-color

边框+填充区+内容区 = **边框盒 border-box**

- 外边距  margin

边框到其他盒子的距离

margin-top、margin-left、margin-right、margin-bottom

速写属性margin


## 改变宽高范围

默认情况下，width 和 height 设置的是内容盒宽高。


UI设计师的设计稿尺寸，往往使用的是边框盒，但设置width和height，则设置的是内容盒

可以通过[box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)属性，改变width和height设置的宽高范围

## 改变背景覆盖范围

默认情况下，背景覆盖边框盒

可以通过[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)进行修改

## 溢出处理

[overflow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)，控制内容溢出边框盒后的处理方式

## 断词规则

word-break，会影响文字在什么位置被截断换行

- normal：普通。CJK字符（文字位置截断），非CJK字符（单词位置截断）

- break-all：截断所有。所有字符都在文字处截断

- keep-all：保持所有。所有文字都在单词之间截断

## 空白处理

[white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space) : nowrap

## 行盒的盒模型

常见的行盒：包含具体内容的元素

`span`、`strong`、`em`、`i`、`img`、`video`、`audio`

### 显著特点

1. 盒子沿着内容沿伸
2. 行盒不能设置宽高

调整行盒的宽高，应该使用字体大小、行高、字体类型，间接调整。

3. 内边距（填充区）

水平方向有效，垂直方向不会实际占据空间。

4. 边框

水平方向有效，垂直方向不会实际占据空间。

5. 外边距

水平方向有效，垂直方向不会实际占据空间。


## 行块盒

`display：inline-block` 的盒子

1. 不独占一行
2. 盒模型中所有尺寸都有效

## 空白折叠
什么是空白折叠？  
在源代码中的连续空白字符（空格、换行、制表），在页面显示时，会被折叠为一个空格  

空白折叠，发生在行盒（行块盒）内部 或 行盒（行块盒）之间

## 可替换元素 和 非可替换元素

大部分元素，页面上显示的结果，取决于元素内容，称为**非可替换元素**

少部分元素，页面上显示的结果，取决于元素属性，称为**可替换元素**

可替换元素：img、video、audio

绝大部分可替换元素均为行盒。

可替换元素类似于行块盒，盒模型中所有尺寸都有效。