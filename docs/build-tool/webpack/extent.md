## 常用loader
> loader特点:
> 单一原则, 一个loader只做一件事情
> 多个loader会按照从右至左, 从下至上的顺序执行

- `file-loader` : 普通文件处理，将指定文件发送到输出目录，如图片
  `import/require` 一个文件时，会将该文件生成到输出目录，并且在 JavaScript 代码里返回该文件的地址
- `url-loader` : 可以将指定大小的文件进行图片编码，生成 dataURl
   url-loader 封装了 file-loader，url-loader 不依赖于 file-loader，安装时只要安装url-loader 即可
```js
// webpack.config.js
module.exports = {
     module: {
        rules: [
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // limit: false //不限制任何大小，所有经过loader的文件进行base64编码返回
                        limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
                        name: "imgs/[name].[hash:5].[ext]"
                    }
                }]
            }
        ]
    },
}
```

## 常用plugin
- `html-webpack-plugin` : 会在打包结束之后自动创建一个index.html（可指定模板）, 并将打包好的JS自动引入到这个文件
- `clean-webpack-plugin` :  在打包之前将我们指定的文件夹清空。应用场景每次打包前将目录清空, 然后再存放新打包的内容, 避免新老混淆问题。
- `copy-webpack-plugin` : 打包相关的文档。除了JS/CSS/图片/字体图标等需要打包以外, 可能还有一些相关的文档也需要打包（word等）。文档内容是固定不变的, 我们只需要将对应的文件拷贝到打包目录中即可

```js

// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",//配置模板
            minify: {
                collapseWhitespace: true //是否压缩 html 文件。不设置时，如果 webpack 的 mode 为 production，就会压缩 html，移除多余的空格和注释之类的
            }
            title: '浪子快跑的博客',
            favicon: 'static/favicon.ico',
        }),
        new CopyWebpackPlugin([
            { from: "./public", to: "./" }
        ])
        new CleanWebpackPlugin(["dist"]) // 需放在最后一个
    ],
}

```


## 开发服务器
[webpack-dev-server](https://www.webpackjs.com/configuration/dev-server/) 是webpack官方制作的一个单独的库，用于解决打包、运行、调试繁琐过程。  

```webpack-dev-server```命令几乎支持所有的webpack命令参数，如```--config```、```-env```等等，你可以把它当作webpack命令使用

这个命令是专门为开发阶段服务的，真正部署的时候还是得使用webpack命令

当我们执行```webpack-dev-server```命令后，它做了以下操作：

1. 内部执行webpack命令，传递命令参数
2. 开启watch
3. 注册hooks：类似于plugin，webpack-dev-server会向webpack中注册一些钩子函数，主要功能如下：
   1. 将资源列表（aseets）保存起来
   2. 禁止webpack输出文件
4. 用express开启一个服务器，监听某个端口，当请求到达后，根据请求的路径，给予相应的资源内容

**常见配置**
- port：配置监听端口
- proxy：配置代理，常用于跨域访问

```js

// webpack.config.js
module.exports = {
     devServer: {
        port: 8000,
        open: true,
        proxy: { //代理规则
            "/api": {
                target: "http://open.duyiedu.com",
                changeOrigin: true //更改请求头中的host和origin
            }
        },
    },
}

```

## webpack 内置插件
[webpack 内置插件-官网](https://www.webpackjs.com/plugins/)    
所有的webpack内置插件都作为webpack的静态属性存在的，使用下面的方式即可创建一个插件对象

```js
const webpack = require("webpack")

new webpack.插件名(options)
```

### DefinePlugin

全局常量定义插件，使用该插件通常定义一些常量值，例如：

```js
new webpack.DefinePlugin({
    PI: `Math.PI`, // PI = Math.PI
    VERSION: `"1.0.0"`, // VERSION = "1.0.0"
    DOMAIN: JSON.stringify("duyi.com")
})
```

这样一来，在源码中，我们可以直接使用插件中提供的常量，当webpack编译完成后，会自动替换为常量的值

### BannerPlugin

它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息

```js
new webpack.BannerPlugin({
  banner: `
  hash:[hash]
  chunkhash:[chunkhash]
  name:[name]
  author:yuanjin
  corporation:duyi
  `
})
```

### ProvidePlugin

自动加载模块，而不必到处 import 或 require 

```js
new webpack.ProvidePlugin({
  $: 'jquery',
  _: 'lodash'
})
```

然后在我们任意源码中：

```js
$('#item'); // <= 起作用
_.drop([1, 2, 3], 2); // <= 起作用
```