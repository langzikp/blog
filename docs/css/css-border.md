# css 边框效果
### 1.边框内圆角
```css
/* 思路如下：为元素设置圆角，外层设置轮廓outline。
    圆角与直角之间的空隙用阴影补齐，阴影的尺寸为圆角半径的一半  */
border-radius:10px;
background: tan;
outline:10px solid #655;
box-shadow:0 0 0 5px #655;
```
<style type="text/css">
    .box1{
        border-radius:10px;
background: tan;
outline:10px solid #655;
box-shadow:0 0 0 5px #655;
    }        
</style>
<div class="box1">边框内圆角</div>

### 2.信封边框
```css
/* 方法一 */
padding:1em;
border: 1em solid transparent;
background: linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0/5em 5em;
/* 方法一 */
padding:1em;
border: 1em solid transparent;
border-image:repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em, #58a 0, #58a 3em, transparent 0, transparent 4em)  16;
```
<style type="text/css">
    .box2-1{
        padding:1em;
        border: 1em solid transparent;
        background: linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0/5em 5em;
    }
     .box2-2{
        padding:1em;
        border: 1em solid transparent;
        border-image:repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em, #58a 0, #58a 3em, transparent 0, transparent 4em)  16;
    }            
</style>
<div class="box2-1">信封边框1</div>
<br>
<div class="box2-2">信封边框2</div>

### 3.蚂蚁线

```css
@keyframes ants{100%{background-position:100%;}}
.box3{
    width:200px;
    height: 70px;
    border: 1px solid transparent;
    background: linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0/.6em .6em; 
    animation:ants 12s linear infinite;
}
```
<style type="text/css">
    @keyframes ants{100%{background-position:100%;}}
.box3{
    width:200px;
    height: 70px;
    border: 1px solid transparent;
    background: linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0/.6em .6em; 
    animation:ants 12s linear infinite;
}
</style>
<div class="box3">蚂蚁线</div>

### 4.弧边

```css
border-radius: 0 0 45% 45%/0 0 35% 35%;
```
<style type="text/css">
.box4{
    width:500px;
    height: 70px;
   border-radius: 0 0 45% 45%/0 0 35% 35%;
   background-color: #ff4444
}
</style>
<div class="box4">弧边</div>

### 5. 鼠标移入下划线动画

<div class="title">
    <span>这是一个标题这是一个标题这是一个标题</span>
</div>

<style type="text/css">
    .title span{
    background: linear-gradient(to right, red, red) no-repeat;
    background-position: right bottom;
    background-size: 0 2px;
    transition: background-size 0.5s;
}
.title span:hover{
    background-position: left bottom;
    background-size: 100% 2px;
    cursor: pointer;
}
</style>
```html
<div class="title">
    <span>这是一个标题</span>
</div>
```
```css
.title span{
    background: linear-gradient(to right, red, red) no-repeat;
    background-position: right bottom;
    background-size: 0 2px;
    transition: background-size 1s;
}
.title span:hover{
    background-position: left bottom;
    background-size: 100% 2px;
    cursor: pointer;
}
```

