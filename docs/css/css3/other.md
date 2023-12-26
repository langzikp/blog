# 其他

## box-sizing

一图胜千言

![image-20210514150015660](http://mdrs.yuanjin.tech/img/20210514150015.png)

使用`border-box`控制尺寸更加直观，因此，很多网站都会加入下面的代码

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## 字体图标

> [MDN font-face 指令](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)

css3新增了`font-face`指令，该指令可以让我们加载网络字体

其最常见的应用就是字体图标

**字体图标本质上是文字，即通过`color`设置颜色，通过`font-size`设置尺寸**

国内使用最多的字体图标平台是[阿里巴巴矢量图标库](https://www.iconfont.cn/)

登录平台后即可免费使用其所有字体图标

## 图像内容适应

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

css3属性`object-fit`可以控制**多媒体内容和与元素**的适应方式，通常应用在`img`或`video`元素中

一图胜千言

下图中的所有`img`元素均被固定了宽高，溢出img的部分实际上均不会显示

![image-20210514134908778](http://mdrs.yuanjin.tech/img/20210514134908.png)

## 视口单位

css3支持使用`vw`和`vh`作为单位，分别表示`视口宽度`和`视口高度`

例如`1vh`表示视口高度的`1%`，`100vw`表示视口宽度的`100%`

## 伪元素选择器

通过`::before`和`::after`选择器，可以通过css给元素生成两个子元素

<img src="http://mdrs.yuanjin.tech/img/20210514140049.png" alt="image-20210514140049244" style="zoom:50%;" />

使用伪元素可以避免在HTML中使用过多的空元素

**伪元素必须要有`content`属性，否则不能生效，如果不需要有元素内容，设置`content:''`**

## 平滑滚动

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)

使用`scroll-behavior: smooth`，可以让滚动更加丝滑

参见MDN效果即可