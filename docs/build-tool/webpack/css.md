## css的问题及解决方案
### css的问题
- 类名冲突的问题
- 重复样式
- css文件细分问题: 大型项目中，css也需要更细的拆分，这样有利于css代码的维护

### 解决类名冲突方案： 
- 命名约定
提供一种命名的标准，来解决冲突，常见的标准有：
  - BEM
  - OOCSS
  - AMCSS
  - SMACSS
  - 其他
  
- css in js
直接用js对象来表示样式，然后把样式直接应用到元素的style中  
这样一来，css变成了一个一个的对象，就可以完全利用到js语言的优势，你可以：

  - 通过一个函数返回一个样式对象
  - 把公共的样式提取到公共模块中返回
  - 应用js的各种特性操作对象，比如：混合、提取、拆分
  - 更多的花样

> 这种方案在手机端的React Native中大行其道

- css module

### 解决重复样式的问题：
-  css in js
- 预编译器
有些第三方搞出一套css语言的进化版来解决这个问题，它支持变量、函数等高级语法，然后经过编译器将其编译成为正常的css

这种方案特别像构建工具，不过它仅针对css

常见的预编译器支持的语言有：

  - less
  - sass

### 解决css文件细分问题

这一部分，就要依靠构建工具，例如webpack来解决了

利用一些loader或plugin来打包、合并、压缩css文件


## webpack拆分css
要拆分css，就必须把css当成像js那样的模块；要把css当成模块，就必须有一个构建工具（webpack），它具备合并代码的能力

而webpack本身只能读取css文件的内容、将其当作JS代码进行分析，因此，会导致错误

于是，就必须有一个loader，能够将css代码转换为js代码

### css-loader
- 将css文件的内容作为字符串导出
- 将css中的其他依赖作为require导入，以便webpack分析依赖

例如
```css
@import "./reset.css";
.red{
    color:"#f40";
    background:url("./bg.png")
}
```
会转换为：

```js
var import1 = require("./reset.css");
var import2 = require("./bg.png");
module.exports = `${import1}
.red{
    color:"#f40";
    background:url("${import2}")
}`;
```



### style-loader
由于css-loader仅提供了将css转换为字符串导出的能力，剩余的事情要交给其他loader或plugin来处理

style-loader可以将css-loader转换后的代码进一步处理，**将css-loader导出的字符串加入到页面的style元素中**

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                // test: /\.css$/, use: ["style-loader", {
                //     loader: "css-loader",
                //     options: {
                //         // modules: {
                //         //     localIdentName: "[local]-[hash:5]"
                //         // }
                //         modules:true
                //     }
                // }]
                test: /\.css$/, use:["style-loader", "css-loader?modules"],
            }
        ]
    },
}

```

## 预编译器less
预编译器的原理很简单，即使用一种更加优雅的方式来书写样式代码，通过一个编译器，将其转换为可被浏览器识别的传统css代码  

> [less官网](http://lesscss.org/)   
> [less中文文档1（非官方）](http://lesscss.cn/)  
> [less中文文档2（非官方）](https://less.bootcss.com/)    
> [sass官网](https://sass-lang.com/ )  
> [sass中文文档1（非官方）](https://www.sass.hk/ )  
> [sass中文文档2（非官方）](https://sass.bootcss.com/)  

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] },
        ]
    },
}

```

## PostCSS
PostCSS是一个由两部分组成的Node.js工具，包括PostCSS工具和PostCSS插件。它采用有效的CSS并对其进行增强。即使那些使用Sass、Less或Stylus的人，也经常在初始CSS编译之后运行PostCSS步骤。它是一个解析器，将CSS代码解析为抽象语法树（AST），提供对AST进行操作的API，并把AST转换回CSS。PostCSS插件负责调用API来改变AST。工具和插件协同工作，实现了对CSS代码的转换。
[官网地址](https://postcss.org/)   
[github地址](https://github.com/postcss/postcss)
[postcss的插件市场](https://github.com/postcss/postcss)

### postcss-preset-env

### 自动的厂商前缀


### 未来的CSS语法

### postcss-apply

### postcss-color-function

## stylelint
[官网](https://stylelint.io/)


## 抽离css文件
目前，css代码被css-loader转换后，交给的是style-loader进行处理。

style-loader使用的方式是用一段js代码，将样式加入到style元素中。

而实际的开发中，我们往往希望依赖的样式最终形成一个css文件

此时，就需要用到一个库：mini-css-extract-plugin
该库提供了1个plugin和1个loader

- plugin：负责生成css文件
- loader：负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象

使用方式：

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin() //负责生成css文件
    ]
}
```

**配置生成的文件名**

同`output.filename`的含义一样，即根据chunk生成的样式文件名

配置生成的文件名，例如`[name].[contenthash:5].css`

默认情况下，每个chunk对应一个css文件