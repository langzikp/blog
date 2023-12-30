# 布局

 <img :src="$withBase('/img/css/25.jpg')" />


**浮动**：做文字环绕效果

**弹性盒**：单行或单列布局

**网格**：多行多列布局

## 弹性盒
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)  
[阮一峰Flex 布局教程](https://ruanyifeng.com/blog/2015/07/flex-grammar.html)  
[弹性盒小游戏](https://flexboxfroggy.com/)  

### 生成弹性容器和弹性项目

<img :src="$withBase('/img/css/18.jpg')" />

**默认情况下弹性项目沿着主轴依次排列，侧轴拉伸**

### 更改方向

通过`flex-direction`可更改主轴方向

<img :src="$withBase('/img/css/19.png')" />

### 主轴排列

通过`justify-content`属性，可以影响主轴的排列方式

<img :src="$withBase('/img/css/20.jpg')" />

### 侧轴排列

通过`align-items`属性，可以影响侧轴的排列方式

<img :src="$withBase('/img/css/21.jpg')" />

### 弹性项目伸缩

所谓伸缩，是指在**主轴方向**上，当**弹性容器**有**额外空间**时，是否需要拉伸，当**空间不足**时，是否需要**压缩**

在**弹性项目**上使用`flex`属性，可设置拉伸和压缩比例：`flex: 拉伸比例 压缩比例 初始尺寸`

拉伸示例：

<img :src="$withBase('/img/css/22.jpg')" />

压缩示例：

<img :src="$withBase('/img/css/23.png')" />

默认情况下，`flex: 0 1 auto`

### 主轴换行

默认情况，当主轴剩余空间不足时，按照压缩比例进行压缩，但如果设置了主轴换行，则不会压缩，直接换行显示

给**弹性容器**设置`flex-wrap: wrap`，即可主轴换行

<img :src="$withBase('/img/css/24.png')" />

## 网格

[MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)  
[阮一峰网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html) 
[网格布局小游戏](https://cssgridgarden.com/)  

**网格布局是多行多列布局的终极解决方案**

### 生成网格布局

<img :src="$withBase('/img/css/26.jpg')" />

容器生成网格布局后，其所有子元素为**网格项目**

### 定义行和列

`grid-template-rows`：定义行

`grid-template-columns`：定义列

**它们的语法是相同的**

<img :src="$withBase('/img/css/27.jpg')" />

### 改变排列方向

使用属性`grid-auto-flow: column`，可使子元素按列排放

<img :src="$withBase('/img/css/28.jpg')" />

### 单元格之间的间隙

```css
row-gap: 10px; /* 行间隙为10px */
column-gap: 20px; /* 列间隙为20px */
gap: 10px 20px; /* 行间隙为10px，列间隙为20px */
```

<img :src="$withBase('/img/css/29.jpg')" />

### 单元格内部的对齐

默认情况下，网格项目在单元格内部水平和垂直拉伸，以撑满单元格

可以使用属性`justify-items`设置**水平方向**的排列方式

可以使用属性`align-items`设置**垂直方向**的排列方式

它们的可取值是相同的：

```css
justify-items: start 左 | end 右 | center 中 | stretch 拉伸;
align-items: start 上 | end 下 | center 中 | stretch 拉伸;
```

<img :src="$withBase('/img/css/30.jpg')" />

可以使用速写属性`place-items: 垂直对齐方式 水平对齐方式`同时设置这两个值

```css
place-items: start center; /* 垂直靠上，水平居中 */
```

### 网格项目定位

默认情况下，网格项目依次排列到单元格中，每个网格占据一个单元格

但可以对网格项目设置`grid-area`属性来改变这一行为

使用方式为：

```css
grid-area: 起始行线编号/起始列线编号/结束行线编号/结束列线编号;
```

<img :src="$withBase('/img/css/31.jpg')" />