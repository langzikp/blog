## 性能优化概述
性能优化主要从以下三个维度入手
### 构建性能

这里所说的构建性能，是指在**开发阶段的构建性能**，而不是生产环境的构建性能

优化的目标，**是降低从打包开始，到代码效果呈现所经过的时间**

构建性能会影响开发效率。构建性能越高，开发过程中时间的浪费越少

以下三种方式提高构建性能：
- 减少模块解析
- 优化loader性能
- 热替换

### 传输性能

传输性能是指，打包后的JS代码传输到浏览器经过的时间

在优化传输性能时要考虑到：

1. 总传输量：所有需要传输的JS文件的内容加起来，就是总传输量，重复代码越少，总传输量越少
2. 文件数量：当访问页面时，需要传输的JS文件数量，文件数量越多，http请求越多，响应速度越慢
3. 浏览器缓存：JS文件会被浏览器缓存，被缓存的文件不会再进行传输

### 运行性能

运行性能是指，JS代码在浏览器端的运行速度

它主要取决于我们如何书写高性能的代码

**永远不要过早的关注于性能**，因为你在开发的时候，无法完全预知最终的运行性能，过早的关注性能会极大的降低开发效率
**性能优化没有完美的解决方案，需要具体情况具体分析**

## 1. 减少模块依赖
### 什么叫做模块解析？
<img :src="$withBase('/img/webpack/12.jpg')">

模块解析包括：抽象语法树分析、依赖分析、模块语法替换

### 不做模块解析会怎样？

<img :src="$withBase('/img/webpack/13.jpg')">

如果某个模块不做解析，该模块经过loader处理后的代码就是最终代码。

如果没有loader对该模块进行处理，该模块的源码就是最终打包结果的代码。

如果不对某个模块进行解析，可以缩短构建时间

### 哪些模块不需要解析？

模块中无其他依赖：一些已经打包好的第三方库，比如jquery

**注：如果以后其他依赖则不适用**

## 如何让某个模块不要解析？

配置`module.noParse`，它是一个正则，被正则匹配到的模块不会解析
```js
// webpack.config.js
module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        noParse: /jquery/
    }
}
```

## 2. 优化loader性能

###  进一步限制loader的应用范围

思路是：对于某些库，不使用loader

例如：babel-loader可以转换ES6或更高版本的语法，可是有些库本身就是用ES5语法书写的，不需要转换，使用babel-loader反而会浪费构建时间

lodash就是这样的一个库

> lodash是在ES5之前出现的库，使用的是ES3语法

通过`module.rule.exclude`或`module.rule.include`，排除或仅包含需要应用loader的场景

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /lodash/,
                use: "babel-loader"
            }
        ]
    }
}
```

如果暴力一点，甚至可以排除掉`node_modules`目录中的模块，或仅转换`src`目录的模块

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                //或
                // include: /src/,
                use: "babel-loader"
            }
        ]
    }
}
```

> 这种做法是对loader的范围进行进一步的限制，和noParse不冲突，想想看，为什么不冲突

### 缓存loader的结果

我们可以基于一种假设：如果某个文件内容不变，经过相同的loader解析后，解析后的结果也不变

于是，可以将loader的解析结果保存下来，让后续的解析直接使用保存的结果

`cache-loader`可以实现这样的功能

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['cache-loader', ...loaders]
      },
    ],
  },
};
```

有趣的是，`cache-loader`放到最前面，却能够决定后续的loader是否运行

实际上，loader的运行过程中，还包含一个过程，即`pitch`

<img :src="$withBase('/img/webpack/14.jpg')">

`cache-loader`还可以实现各自自定义的配置，具体方式见文档

### 为loader的运行开启多线程

`thread-loader`会开启一个线程池，线程池中包含适量的线程

它会把后续的loader放到线程池的线程中运行，以提高构建效率

由于后续的loader会放到新的线程中，所以，后续的loader不能：

- 使用 webpack api 生成文件
- 无法使用自定义的 plugin api
- 无法访问 webpack options

> 在实际的开发中，可以进行测试，来决定`thread-loader`放到什么位置

**特别注意**，开启和管理线程需要消耗时间，在小型项目中使用`thread-loader`反而会增加构建时间

## 3. 热替换
> 热替换并不能降低构建时间（可能还会稍微增加），但可以降低代码改动到效果呈现的时间

当使用`webpack-dev-server`时，考虑代码改动到效果呈现的过程

<img :src="$withBase('/img/webpack/15.jpg')">

而使用了热替换后，流程发生了变化

<img :src="$withBase('/img/webpack/16.jpg')">

### 使用和原理

1. 更改配置

```js
module.exports = {
  devServer:{
    hot:true // 开启HMR
  },
  plugins:[ 
    // 可选
    new webpack.HotModuleReplacementPlugin()
  ]
}
```

2. 更改代码

```js
// index.js

if(module.hot){ // 是否开启了热更新
  module.hot.accept() // 接受热更新
}
```

首先，这段代码会参与最终运行！

当开启了热更新后，`webpack-dev-server`会向打包结果中注入`module.hot`属性

默认情况下，`webpack-dev-server`不管是否开启了热更新，当重新打包后，都会调用`location.reload`刷新页面

但如果运行了`module.hot.accept()`，将改变这一行为

`module.hot.accept()`的作用是让`webpack-dev-server`通过`socket`管道，把服务器更新的内容发送到浏览器

<img :src="$withBase('/img/webpack/17.jpg')">

然后，将结果交给插件`HotModuleReplacementPlugin`注入的代码执行

插件`HotModuleReplacementPlugin`会根据覆盖原始代码，然后让代码重新执行

**所以，热替换发生在代码运行期**

### 样式热替换

对于样式也是可以使用热替换的，但需要使用`style-loader`

因为热替换发生时，`HotModuleReplacementPlugin`只会简单的重新运行模块代码

因此`style-loader`的代码一运行，就会重新设置`style`元素中的样式

而`mini-css-extract-plugin`，由于它生成文件是在**构建期间**，运行期间并会也无法改动文件，因此它对于热替换是无效的
