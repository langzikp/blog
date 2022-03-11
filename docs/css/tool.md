# 高频实用片段

## 解决图片5px间距的方法 
- 方案1：给父元素设置font-size: 0；
- 方案2：给img设置display: block；
- 方案3：给img设置vertical-align: bottom
- 方案4：给父元素设置line-height: 5px;

## 修改input placeholder样式
```html
<input type="text" class="placehoder-custom" placeholder="请输入用户名搜索">
<input type="text" placeholder="请输入用户名搜索">
```
```css
input{
  width: 300px;
  height: 30px;
  outline: none;
  display: block;
  margin: 15px;
  border: solid 1px #dee0e9;
  padding: 0 15px;
  border-radius: 15px;
}
/* 多浏览器兼容： */
.placehoder-custom::-webkit-input-placeholder{ /* WebKit, Blink, Edge */
  color: #909;
}
.placehoder-custom:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #909;
}
.placehoder-custom::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #909;
}
.placehoder-custom:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #909;
}
```

## 改变光标颜色
```css
.input {
  caret-color: #ffd476;
}

```
## input type="number"尾部的箭头
```css
input::-webkit-inner-spin-button { 
  -webkit-appearance: none;
}
```

## 水平垂直居中
```css
.parent{
  display: flex;
  align-items: center;
  justify-content: center;
}
```
## 单行文本溢出显示省略号
```css
.one-line-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
## 多行文本溢出显示省略号
```css
.more-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 设置n行，也包括1 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## 网页哀悼模式
```css
.body {
  -webkit-filter: grayscale(100%); /* webkit */
  -moz-filter: grayscale(100%); /*firefox*/
  -ms-filter: grayscale(100%); /*ie9*/
  -o-filter: grayscale(100%); /*opera*/
  filter: grayscale(100%);
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); 
  filter:gray; /*ie9- */
}
```
## 禁止选择文本
```css
.article{ 
  user-select: none;
}
```

## 自定义文本选中的样式
```css
.article::selection { 
  color: #ffffff; 
  background-color: #ff4c9f;
}
```

## 隐藏滚动条
```html
<div class="box">
  <div>   
    爱情会离开，朋友会离开，快乐会离开，但是考试不会,因为你不会就不会 
  </div>
</div>

<div class="box box-hide-scrollbar"> 
  <div>只是因为在人群中多看了你一眼，你就--问我游泳健身了解一下？</div>
</div>
```
```css
.box { 
  width: 375px; 
  overflow: scroll;
}

/* 关键代码 */
.box-hide-scrollbar::-webkit-scrollbar {  
  display: none; /* Chrome Safari */
}

.box > div { 
  margin-bottom: 15px; 
  padding: 10px; 
  background-color: #f5f6f9;
  border-radius: 6px; 
  font-size: 12px; 
  width: 750px;
}
```