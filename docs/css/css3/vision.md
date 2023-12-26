# 视觉

> 所谓视觉类样式，是指不影响盒子位置、尺寸的样式，例如文字颜色、背景颜色、背景图片等

## 阴影

### 盒子阴影

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

通过`box-shadow`属性可以设置整个盒子的阴影

下面是一些示例

<!-- <iframe src="http://mdrs.yuanjin.tech/html/css-manual/box-shadow.html?v=2" style="height:900px;"> -->

### 文字阴影

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)

通过`text-shadow`可以设置文字阴影

下面是一些示例

<!-- <iframe src="http://mdrs.yuanjin.tech/html/css-manual/text-shadow.html?v=3" style="height:500px;"> -->

## 圆角

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

通过设置`border-radius`，可以设置盒子的圆角

![image-20210512131026084](http://mdrs.yuanjin.tech/img/20210512131026.png)

`border-radius`可以有很多灵活的用法，将下面的代码依次粘贴到页面中测试一下

```css
border-radius: 10px; /* 同时设置4个角的圆角，半径为10px */
border-radius: 50%; /* 同时设置4个角的圆角，圆的横向半径为宽度一半，纵向半径为高度一半 */
border-radius: 10px 20px 30px 40px; /* 分别设置左上、右上、右下、左下的圆角 */
```

<!-- <iframe src="http://mdrs.yuanjin.tech/html/css-manual/border-raduis.html?v=5" style="height:550px;"> -->

## 背景渐变

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient())

在设置**背景图片**时，除了可以使用`url()`加载一张背景图，还可以使用`linear-gradient()`函数设置背景渐变

`linear-gradient()`用于创建一张渐变的图片，语法为：

```css
/* 设置渐变背景，方向：从上到下，颜色：从#e66465渐变到#9198e5 */
background: linear-gradient(to bottom, #e66465, #9198e5);
```

![image-20210512135024676](http://mdrs.yuanjin.tech/img/20210512135028.png)

## 变形

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

通过`transform`属性，可以使盒子的形态发生变化

该属性支持多种变形方案，常见的有:

- translate，平移
- scale，缩放
- rotate，旋转

**无论是哪一种transform，都只是视觉效果的变化，不会影响盒子的布局**

**transform不会导致浏览器reflow和rerender，因此效率极高**

### translate 平移

使用`translate`可以让盒子在原来位置上产生位移，类似于相对定位

![image-20210512140622630](http://mdrs.yuanjin.tech/img/20210512140643.png)

### scale 缩放

使用`translate`可以让盒子在基于原来的尺寸发生缩放

![image-20210512141500499](http://mdrs.yuanjin.tech/img/20210512141500.png)

### rotate 旋转

使用`rotate`属性可以在原图基础上进行旋转

```css
/* 在原图的基础上，顺时针旋转45度角 */
transform: rotate(45deg); 
/* 在原图的基础上，顺时针旋转半圈 */
transform: rotate(0.5turn); 
```

可以点击下面的按钮试一下旋转效果

<!-- <iframe src="http://mdrs.yuanjin.tech/html/css-manual/rotate.html" style="height:400px;"> -->



### 改变变形原点

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

变形原点的位置，会影响到具体的变形行为

默认情况下，变形的原点在盒子中心，你可以通过`transform-origin`来改变它

```css
transform-origin: center; /* 设置原点在盒子中心 */
transform-origin: left top; /* 设置原点在盒子左上角 */
transform-origin: right bottom; /* 设置原点在盒子右下角 */
transform-origin: 30px 60px; /* 设置原点在盒子坐标 (30, 60) 位置 */
```

试一试，先点击设置原点的按钮来设置原点(已在图片中使用红色小点标记)，然后点击变形按钮进行变形
<!-- 
<iframe src="http://mdrs.yuanjin.tech/html/css-manual/transform-origin.html?v2" style="height:600px;"> -->

### 多种变形叠加

可以一次性设置多种变形效果

```css
/* 先旋转45度，再平移(100,100) */
transform: rotate(45deg) translate(100px, 100px);
/* 先平移(100, 100)，再旋转45度 */
transform: translate(100px, 100px) rotate(45deg);
```

注意：旋转会导致坐标系也跟着旋转，从而可能影响到后续的变形效果

下面的例子可以很好的说明这一点

http://mdrs.yuanjin.tech/html/css-manual/multi-transform.html

> 本来打算把这个效果嵌入到markdown，但由于嵌入后出现一些未知的bug，因此只能粘贴效果地址了