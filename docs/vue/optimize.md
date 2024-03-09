# vue常见优化手段

## 使用key

对于通过循环生成的列表，应给每个列表项一个稳定且唯一的key，这有利于在列表变动时，尽量少的删除、新增、改动元素

## 使用冻结的对象

冻结的对象不会被响应化

## 使用函数式组件

参见[函数式组件](https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)

## 使用计算属性

如果模板中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们

## 非实时绑定的表单项

当使用`v-model`绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致`vue`发生重渲染（`rerender`），这会带来一些性能的开销。

我们可以通过使用`lazy`或不使用`v-model`的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。

## 保持对象引用稳定

在绝大部分情况下，`vue`触发`rerender`的时机是其依赖的数据发生**变化**

若数据没有发生变化，哪怕给数据重新赋值了，`vue`也是不会做出任何处理的

下面是`vue`判断数据**没有变化**的源码

```js
function hasChanged(x, y) {
  if (x === y) {
    return x === 0 && 1 / x !== 1 / y
  } else {
    return x === x || y === y
  }
}
```

因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染。

对于原始数据类型，保持其值不变即可

对于对象类型，保持其引用不变即可

从另一方面来说，由于可以通过保持属性引用稳定来避免子组件的重渲染，那么我们应该细分组件来尽量避免多余的渲染

## 使用v-show替代v-if

对于频繁切换显示状态的元素，使用v-show可以保证虚拟dom树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量dom元素的节点，这一点极其重要

关键字：频繁切换显示状态、内部包含大量dom元素

## 使用延迟装载（defer）

JS传输完成后，浏览器开始执行JS构造页面。

但可能一开始要渲染的组件太多，不仅JS执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏

一个可行的办法就是**延迟装载组件**，让组件按照指定的先后顺序依次一个一个渲染出来

> 延迟装载是一个思路，本质上就是利用`requestAnimationFrame`事件分批渲染内容，它的具体实现多种多样

## 使用keep-alive

## 长列表优化
### 页面卡顿的原因
根源：大量DOM元素的 reflow 和 repaint

修改是对当前DOM元素的修改，更新却是所有的DOM都更新

### 优化思路：
1、懒渲染
懒加载，常见的长列表优化方案，常见于移动端  
原理：每次只渲染一部分，等渲染的数据即将滚动完时，再渲染下面部分  
优点：每次渲染一部分数据，速度快   
缺点：数据量大时，页面中依然存在大量DOM节点，占用内存过多，降低浏览器渲染性能，导致页面卡顿  
使用场景：数据量不大的情况下（比如1000条，具体还要看每条数据的复杂程度）    
2、分页渲染
一般是后端给我们数据，我们只需把页码数，每页展示的数据量，给后端，后端给我们数据我们进行展示即可。

3、可视区域渲染
原理： 只渲染页面可视区域的列表项，非可视区域的数据 “完全不渲染”(预加载前面几项和后面几项) ，在滚动列表时动态更新列表项，为了防止白屏，所以实际会多加载几条数据

常用的vue长列表插件： 
[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)

## 打包体积优化
### 分析打包结果

由于`vue-cli`是利用`webpack`进行打包，我们仅需加入一个`webpack`插件`webpack-bundle-analyzer`即可分析打包结果

为了避免在开发环境中启动`webpack-bundle-analyzer`，我们仅需使用以下代码即可
#### 安装
```shell
npm i webpack-bundle-analyzer -D
```
#### 配置
```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// vue.config.js
module.exports = {
  // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
  // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
};
```

### 优化公共库打包体积

#### 1.使用CDN

CDN全称为Content Delivery Network，称之为内容分发网络  

它的基本原理是：架设多台服务器，这些服务器定期从源站拿取资源保存本地，到让不同地域的用户能够通过访问最近的服务器获得资源

![img](http://mdrs.yuanjin.tech/img/20210203133956.png)

我们可以把项目中的所有静态资源都放到CDN上（收费），也可以利用现成免费的CDN获取公共库的资源

<img src="http://mdrs.yuanjin.tech/img/20210203140030.png" alt="image-20210203140029967" style="zoom:50%;" />

首先，我们需要告诉`webpack`不要对公共库进行打包

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    }
  },
};
```

然后，在页面中手动加入`cdn`链接，这里使用[bootcn](https://www.bootcdn.cn/)

```html
<body>
  <div id="app"></div>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.7/vue-router.min.js"></script>
  <!-- built files will be auto injected -->
</body>
```

对于`vuex`和`vue-router`，使用这种传统的方式引入的话会自动成为`Vue`的插件，因此需要去掉`Vue.use(xxx)`

我们可以使用下面的代码来进行兼容

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";

if(!window.Vuex){
  // 没有使用传统的方式引入Vuex
  Vue.use(Vuex);
}

// router.js
import VueRouter from "vue-router";
import Vue from "vue";

if(!window.VueRouter){
  // 没有使用传统的方式引入VueRouter
  Vue.use(VueRouter);
}
```



### 2.启用现代模式

为了兼容各种浏览器，`vue-cli`在内部使用了`@babel/present-env`对代码进行降级，你可以通过`.browserlistrc`配置来设置需要兼容的目标浏览器

这是一种比较*偷懒*的办法，因为对于那些使用现代浏览器的用户，它们也*被迫*使用了降级之后的代码，而降低的代码中包含了大量的`polyfill`，从而提升了包的体积

因此，我们希望提供两种打包结果：

1. 降级后的包（大），提供给旧浏览器用户使用
2. 未降级的包（小），提供给现代浏览器用户使用

除了应用`webpack`进行多次打包外，还可以利用`vue-cli`给我们提供的命令：

```shell
vue-cli-service build --modern
```

### 3.优化项目包体积

这里的项目包是指`src`目录中的打包结果

默认情况下，`vue-cli`会利用`webpack`将`src`目录中的所有代码打包成一个`bundle`

这样就导致访问一个页面时，需要加载所有页面的`js`代码

我们可以利用`webpack`对`动态import`的支持，从而达到把不同页面的代码打包到不同文件中

```js
// routes
export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */"@/views/About"),
  }
];
```

### 优化首屏响应

> 首页白屏受很多因素的影响

`vue`页面需要通过`js`构建，因此在`js`下载到本地之前，页面上什么也没有

一个非常简单有效的办法，即在页面中先渲染一个小的加载中效果，等到`js`下载到本地并运行后，即会自动替换

```html
<div id="app">
  <img src="loading.gif" />
</div>
```