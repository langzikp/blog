# Vue + Element UI 项目中使用第三方图标库
在项目开发中，element ui中的字体库不能满足所有场景，所以需要引入第三方库。  
本文使用[阿里图标库](https://www.iconfont.cn/)

## 1. 新建项目
1. 在导航栏 资源管理 》 我的项目 》 新建项目
<img :src="$withBase('/img/vue/aliicon.jpg')" alt="图片" width="500px">
2. 修改 前缀为 `ali-icon-` ,可自定义取名

## 2. 选择图标，添加至项目
根据自己的需要选择图标，需要什么加什么，根据自己的需求来。

选择图标加入购物车后，添加至刚刚新建的项目中。  

因为没有批量添加购物车，如需添加整个库，可在console面板运行以下代码，将自动添加当前页面所有图标到购物车中

```js
var icons = document.querySelectorAll('.icon-gouwuche1');
for (var i = 0; i < icons.length; i++) {
     icons.item(i).click();
}
```

## 3. 下载至本地

<img :src="$withBase('/img/vue/download-icon.jpg')" alt="图片" >

## 4. 项目使用
1. 将下载的文件放在vue项目 /src/assets/font 目录中  
<img :src="$withBase('/img/vue/pro-src.jpg')" alt="图片" >

2. 修改iconfont.css
将以下内容，添加到iconfont.css
```js
// 注意第二个 ali-icon 前有个空格
[class^="ali-icon"], [class*=" ali-icon"]{ 
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

添加后如图：  
<img :src="$withBase('/img/vue/iconfont.jpg')" alt="图片" >


3. 在main.js中引入，重启项目
```js
import "./assets/font/iconfont.css";

```

4. 使用

```js
<i class="ali-icon-chexiao"></i>
<el-button type="primary" icon="ali-icon-chexiao">撤销</el-button>
```

好了，你可以再element ui组件库中像使用自带图标一样使用它了。