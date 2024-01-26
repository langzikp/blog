# 视觉

> 所谓视觉类样式，是指不影响盒子位置、尺寸的样式，例如文字颜色、背景颜色、背景图片等

## 阴影

### 盒子阴影
通过`box-shadow`属性可以设置整个盒子的阴影
> [ MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

### 文字阴影
通过`text-shadow`可以设置文字阴影
> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)



## 圆角

通过设置`border-radius`，可以设置盒子的圆角
> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

## 背景渐变
在设置**背景图片**时，除了可以使用`url()`加载一张背景图，还可以使用`linear-gradient()`函数设置背景渐变 

`linear-gradient()`用于创建一张渐变的图
> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient())

## 滤镜 filter 
`filter` 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。
> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

`backdrop-filter`CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。
> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter#%E8%AF%AD%E6%B3%95)


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

<img :src="$withBase('/img/css/32.jpg')" />

### scale 缩放

使用`translate`可以让盒子在基于原来的尺寸发生缩放

<img :src="$withBase('/img/css/33.jpg')" />

### rotate 旋转

使用`rotate`属性可以在原图基础上进行旋转

```css
/* 在原图的基础上，顺时针旋转45度角 */
transform: rotate(45deg); 
/* 在原图的基础上，顺时针旋转半圈 */
transform: rotate(0.5turn); 
```

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
### 多种变形叠加

可以一次性设置多种变形效果

```css
/* 先旋转45度，再平移(100,100) */
transform: rotate(45deg) translate(100px, 100px);
/* 先平移(100, 100)，再旋转45度 */
transform: translate(100px, 100px) rotate(45deg);
```

注意：旋转会导致坐标系也跟着旋转，从而可能影响到后续的变形效果
