# 现代css

## 变量
在CSS中，变量是用于存储和重复使用值的一种机制。CSS变量也被称为自定义属性（Custom Properties），其以**--**开头命名。变量的定义和使用如下所示：
命名规范：--开头， 限制较少，不支持$、[、]、^、(、)、%、"等字符，使用需要转义

**自定义属性名区分大小写——--my-color 会被视为与 --My-color 不同的自定义属性。**

### 定义和使用
```css
.box {
    --color: blue;
    --变量: 24px;
    ---: 2px dashed skyblue;
    --23: 20;
    --\]: 20px;

    color: var(--color);
    border: var(---);
    font-size: var(--变量);
    z-index: var(--23);
    margin-left: var(--\]);
    position: relative;
}
```
### 作用域
#### 全局作用域
在`:root`中声明的CSS变量即全局作用域的变量，即可以在CSSOM中任意位置使用。
```css
:root {
  --main-color: #3498db;
  --font-size: 16px;
}
```
在上面的例子中，**:root**选择器表示文档的根元素，通常是HTML文档中的`<html>`元素。在**:root**中定义的变量可以在整个文档中使用。

#### 局部作用域
在其他CSS层级中声明的变量仅对该CSS层级以及它的子级可见

```html
<div class="parent text">
     parent   <!-- text 读取 parent变量的24px和1.8 -->
    <div class="child text">
        child <!-- text读取 child变量的18px和1.6 -->
    </div>
</div>
```
```css
.parent {
  --fontSize: 24px;
  --lineHeight: 1.8;
}

.child {
  --fontSize: 18px;
  --lineHeight: 1.6;
}
.text {
   font-size: var(--fontSize); 
   line-height: var(--lineHeight); 
}
```

**注意**
- 在上面对例子中，可以用相同的命名在不同的CSS块中声明和访问变量。
- 局部作用域总是可以访问**外层作用域**或者**全局作用域**的变量，相反则不可。

#### 变量提升
和JavaScript一样，CSS变量生命可以被提升，即CSS变量可以再声明之前使用他们。在浏览器渲染相应的HTML元素样式前，会将CSS变量的声明提升并移动到CSSOM的最顶部。
```css
body {
    background-color: var(--bgColor);
}

:root {
    --bgColor: pink;
}
```
如上，CSS变量`--bgColor`可以在`:root` 伪类选择器声明之前使用

## var()特性
完整语法：var( `<custom-property-name>` , `<declaration-value>`? ) 

```css
.box {
  --what: 32px;
  color: var(--what, red);
  font-size: var(--what);
}
```
后备CSS属性值只在前面的自定义属性**一定无效**的时候才渲染，如果var()函数的第一个参数值可能有效，则后备CSS自定义属性值是不会渲染
如果第一个参数值是不合法的，则var()函数解析为当前CSS属性的初始值或继承值（如果有继承性），也就是按照unset全局关键字的规则渲染

可以设置多个后备默认值
```css
html {
  font-family: var(--fonts, Helvetica, Arial, sans-serif);
}
```
还可以使用一连串的变量回退，但需要使用var()嵌套起来：
```css
.bigger {
  transform: scale(var(--scale, var(--secondFallbackScale, 1.2));
}
```

## js中使用变量
行间样式也支持设置css变量
通过javaScript设置（获取）css变量

```html
<div class="container" style="--color: red">
      <div class="box" style="color: var(--color)">123</div>
    </div>
    <script>
      const box = document.querySelector(".box");
      const color = box.style.getPropertyValue("--color");
            box.style.setProperty("--color", "green");  
    </script>
```

## css函数
[css更多函数](https://developer.mozilla.org/en-US/docs/Web/CSS/abs)
### attr()
用于访问元素属性的值

```html
<div data-bg="black"> </div>
```

```css
.div{
    width: 100px;
    height: 100px;
    background: attr(data-bg)
}
```

### calc()
calc() 此 CSS 函数允许在声明 CSS 属性值时执行一些计算

```css
width: calc(100% - 80px);
```
**备注**
- `+` 和 `-` 运算符的两边必须要有空白字符
- `*` 和 `/` 这两个运算符前后不需要空白字符，但如果考虑到统一性，仍然推荐加上空白符
- 用 0 作除数会使 HTML 解析器抛出异常
- 涉及自动布局和固定布局的表格中的表列、表列组、表行、表行组和表单元格的宽度和高度百分比的数学表达式，auto 可视为已指定
- calc() 函数支持嵌套，但支持的方式是：把被嵌套的 calc() 函数全当成普通的括号

### max()
max() 这个 CSS 函数让你可以从一个逗号分隔的表达式列表中选择最大（正方向）的值作为属性的值

```css
/* property: max(expression [, expression]) */
width: max(10vw, 4em, 80px);
```

### min()
min() CSS 方法允许你从逗号分隔符表达式中选择一个最小值作为 CSS 的属性值

```css
/* property: min(expression [, expression]) */
width: min(1vw, 4em, 80px);
```

### minmax()
函数 [minmax()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax) 定义了一个长宽范围的闭区间，它通常与CSS 网格布局一起使用。

每个参数分别是`<length>`、`<percentage>`、`<flex>`的一种，或者是max-content、min-content、或auto之一。

### clamp()
`clamp()` 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用。它接收三个参数：最小值、首选值、最大值。

`clamp(MIN, VAL, MAX)` 其实就是表示 `max(MIN, min(VAL, MAX))`

- 当首选值比最小值要小时，则使用最小值。
- 当首选值介于最小值和最大值之间时，用首选值。
- 当首选值比最大值要大时，则使用最大值。

## mask 遮罩
[mask](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask) 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

可实现类似手电筒效果等

## clip-path 剪贴
[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path) CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。  

[剪贴路径生成器](https://www.techbrood.com/tool?p=css-clip-path)


## box-reflect 反射
[-webkit-box-reflect](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-box-reflect) CSS 属性可让你将元素内容在特定方向上进行轴对称反射。



## Houdini API
Houdini 是一组底层 API，它们公开了 CSS 引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展 CSS。Houdini 是一组 API，它们使开发人员可以直接访问 CSS 对象模型（CSSOM），使开发人员可以编写浏览器可以解析为 CSS 的代码，从而创建新的 CSS 功能，而无需等待它们在浏览器中本地实现

[Houdini API](https://developer.mozilla.org/zh-CN/docs/Web/API/Houdini_APIs)

### CSS Typed OM
该 API 将 CSSOM 字符串转化为有类型意义的 JavaScript。这将对后续的一个重要的表现打下基础。CSS Typed OM 将 CSS 值以类型化处理的 JavaScript 对象的形式暴露出来，以使其表现可以被控制。
[CSS Typed OM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API)


### css property
[@property](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@property) CSS at-rule是CSS Houdini API 的一部分，允许开发者显式地定义他们的CSS 自定义属性, 允许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。