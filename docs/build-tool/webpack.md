# webpack
[webpack 官网](https://www.webpackjs.com/concepts/)  
[技能树](http://mdrs.yuanjin.tech/img/20210508151156.png)

# 核心

**webpack是用来搭建前端工程的**

它运行在node环境中，它所做的事情，简单来说，就是**打包**


<img :src="$withBase('/img/webpack/1.jpg')">

具体来说，就是以某个模块作为入口，根据入口分析出所有模块的依赖关系，然后对各种模块进行合并、压缩，形成最终的打包结果

**在webpack的世界中，一切皆是模块**


## 配置
- [mode](https://www.webpackjs.com/configuration/mode/)  模式
- [entry和context](https://www.webpackjs.com/configuration/entry-context/) 入口和上下文
- [output](https://www.webpackjs.com/configuration/output/) 输出
  - [publicPath](https://www.webpackjs.com/configuration/output/#outputpublicpath) 在使用file-loader或url-loader时，模块中的路径来自于某个loader或plugin，当产生路径时，loader或plugin只有相对于dist目录的路径，并不知道该路径将在哪个资源中使用，从而无法确定最终正确的路径
- [loader](https://www.webpackjs.com/concepts/loaders/)  
loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。
> webapck的本质是一个模块打包工具, 所以webpack默认只能处理JS文件,不能处理其他文件,
因为其他文件中没有模块的概念, 但是在企业开发中我们除了需要对JS进行打包以外,
还有可能需要对图片/CSS等进行打包, 所以为了能够让webpack能够对其它的文件类型进行打包,
在打包之前就必须将其它类型文件转换为webpack能够识别处理的模块,
注意：loader都是用NodeJS编写的

> loader特点:
> 单一原则, 一个loader只做一件事情
> 多个loader会按照从右至左, 从下至上的顺序执行

- [plugin](https://www.webpackjs.com/concepts/plugins/)  插件  
插件（plugin）是 webpack 的支柱功能。用于扩展webpack的功能。当然loader也是变相的扩展了webpack ，但是它只专注于转化文件这一个领域。   
而plugin的功能更加的丰富，而不仅局限于资源的加载。一个插件就是一个类，可以在打包过程中的特定阶段执行。   
从作用角度简单来讲：loader帮助我们加载文件资源，而plugins则是loader的延伸，并不限制于加载文件资源。丰富了loader的功能。

- [devtool](https://www.webpackjs.com/configuration/devtool/#root) 源码视图

- [resolve](https://www.webpackjs.com/configuration/resolve/)   解析相关的配置
    - alias  路径别名
    ```js
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "_": __dirname
    }
    ```
    - extensions 缺省的文件和后缀名
    ```js
     resolve: {
      extensions: ['.js', '.json', '.wasm'],
    },
    ```
    - modules webpack解析模块时应该搜索的目录
    ```js
    resolve: {
      modules: ['node_modules'],
    },
    ```

## 编译过程

webpack 的作用是将源代码编译（构建、打包）成最终代码

<img :src="$withBase('/img/webpack/2.jpg')">

整个过程大致分为三个步骤

1. 初始化
2. 编译
3. 输出


### 初始化

此阶段，webpack会将**CLI参数**、**配置文件**、**默认配置**进行融合，形成一个最终的配置对象。

对配置的处理过程是依托一个第三方库```yargs```完成的

此阶段相对比较简单，主要是为接下来的编译阶段做必要的准备

目前，可以简单的理解为，初始化阶段主要用于产生一个最终的配置

### 编译

1. **创建chunk**

chunk是webpack在内部构建过程中的一个概念，译为```块```，它表示通过某个入口找到的所有依赖的统称。

根据入口模块（默认为```./src/index.js```）创建一个chunk

<img :src="$withBase('/img/webpack/3.jpg')" width="400">

每个chunk都有至少两个属性：

- name：默认为main
- id：唯一编号，开发环境和name相同，生产环境是一个数字，从0开始

2. **构建所有依赖模块**

<img :src="$withBase('/img/webpack/4.jpg')">

> AST在线测试工具：https://astexplorer.net/

简图
<img :src="$withBase('/img/webpack/5.jpg')">

3. **产生chunk assets**

在第二步完成后，chunk中会产生一个模块列表，列表中包含了**模块id**和**模块转换后的代码**

接下来，webpack会根据配置为chunk生成一个资源列表，即```chunk assets```，资源列表可以理解为是生成到最终文件的文件名和文件内容

<img :src="$withBase('/img/webpack/6.jpg')">

> chunk hash是根据所有chunk assets的内容生成的一个hash字符串  
> hash：一种算法，具体有很多分类，特点是将一个任意长度的字符串转换为一个固定长度的字符串，而且可以保证原始内容不变，产生的hash字符串就不变

简图
<img :src="$withBase('/img/webpack/7.jpg')">

4. **合并chunk assets**

将多个chunk的assets合并到一起，并产生一个总的hash

<img :src="$withBase('/img/webpack/8.jpg')">

### 输出

此步骤非常简单，webpack将利用node中的fs模块（文件处理模块），根据编译产生的总的assets，生成相应的文件。

<img :src="$withBase('/img/webpack/9.jpg')">

### 总过程

<img :src="$withBase('/img/webpack/10.jpg')">

<img :src="$withBase('/img/webpack/11.jpg')">

**涉及术语**

1. module：模块，分割的代码单元，webpack中的模块可以是任何内容的文件，不仅限于JS
2. chunk：webpack内部构建模块的块，一个chunk中包含多个模块，这些模块是从入口模块通过依赖分析得来的
3. bundle：chunk构建好模块后会生成chunk的资源清单，清单中的每一项就是一个bundle，可以认为bundle就是最终生成的文件
4. hash：最终的资源清单所有内容联合生成的hash值
5. chunkhash：chunk生成的资源清单内容联合生成的hash值
6. chunkname：chunk的名称，如果没有配置则使用main
7. id：通常指chunk的唯一编号，如果在开发环境下构建，和chunkname相同；如果是生产环境下构建，则使用一个从0开始的数字进行编号


## 常用loader
- `file-loader` : 普通文件处理，将文件发送到输出目录
- `url-loader` : 将文件作为 data URI 内联到 bundle 中

## 常用插件
- `html-webpack-plugin` : 会在打包结束之后自动创建一个index.html, 并将打包好的JS自动引入到这个文件中
```js
// 默认情况下生成html文件并没有压缩,如果想让html文件压缩可以设置
new HtmlWebpackPlugin({
    template: "index.html",//配置模板
     minify: {
			collapseWhitespace: true//压缩
		}
})

```
- `clean-webpack-plugin` :  在打包之前将我们指定的文件夹清空。应用场景每次打包前将目录清空, 然后再存放新打包的内容, 避免新老混淆问题。
- `copy-webpack-plugin` : 打包相关的文档。除了JS/CSS/图片/字体图标等需要打包以外, 可能还有一些相关的文档也需要打包（word等）。文档内容是固定不变的, 我们只需要将对应的文件拷贝到打包目录中即可


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
- stats：配置控制台输出内容

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

# 页面模板

对于单页应用而言，只有一个空白的页面，所有内容都靠JS代码创建

webpack会自动生成一个页面，并且在页面中会自动加入对js和css的引用

它生成页面时，参考的是`public/index.html`，其称之为页面模板

# public目录

webpack会非常暴力的将public目录中的所有文件（除页面模板外），复制到打包结果中

# 开发服务器

如果每次修改完代码，都要经过`打包->运行`，未免太过麻烦

在开发阶段，我们可以运行`npm run serve`命令获得更好的打包体验

该命令会让`webpack`启动一个**开发服务器**。

在这个阶段，webpack并不会形成打包结果文件，而是把打包的内容放到内存中，当我们请求服务器时，服务器从内存中给予我们打包结果

与此同时，当源码发生变动时，webpack会自动重新打包，同时刷新页面以访问到最新的打包结果

![image-20210508194442940](http://mdrs.yuanjin.tech/img/20210508194443.png)

# 文件缓存

可以看到，除了页面外，其他的资源在打包完成后，文件名多了一些奇奇怪怪的字符

例如：`js/app-9ea93.js`

其中，`9ea93`这样的字符称之为`hash`，它会随着模块内容的变化而变化

**源码内容不变，hash不变；源码内容变化，hash变化**

之所以这样做，是因为生产环境中，浏览器会对除页面外的静态资源进行缓存

如果不设置hash值，一旦代码更新，浏览器还会使用之前缓存的结果，无法使用最新的代码

<img src="http://mdrs.yuanjin.tech/img/20210508183135.png" alt="image-20210508183135487" style="zoom:50%;" />

有了hash值之后，即可解决此问题

![image-20210508183454385](http://mdrs.yuanjin.tech/img/20210508183454.png)

webpack会在打包时自动处理hash值，并不会对我们写代码造成任何影响，但作为一个前端开发者，有必要了解这一点

## 资源路径

**除代码和样式模块外，其他模块被视为资源模块**

值得特别注意的是，**资源模块在源代码中的路径和打包后的路径是不一样的**

- 对于css中的路径，webpack在打包时，会将其自动转换为打包结果的路径

```css
.container{
  /* 背景图使用了源码中的路径 */
  backgroud: url('../assets/1.png'); 
}

 /* 打包后*/
.container{
  /* css中的资源路径会被自动替换，我们无须关心 */
  background: url(/img/1492ea.png);
}
```
- 

但如果我们要通过js动态的使用路径，webpack是无法识别的

```js
// 打包前
const url = './assets/1.png'; // 该路径无法被转换
img.src = url;

// 打包后
const url = './assets/1.png'; // ❌
img.src = url;
```

正确的做法是，通过模块化的方式导入资源，并获取资源路径

```js
// 打包前
import url from './assets/1.png'; // 打包后，url得到的将是真实的路径
img.src = url;

// 打包后
const url = '/img/1492ea.png'; // ✅
img.src = url;
```

## js兼容性

当webpack读取到js代码时，会自动对其进行兼容性处理

具体的处理方案涉及到两个配置文件：

- `babel.config.js`：通过配置该文件，可以设置对哪些js代码进行降级处理
- `.browserslistrc`：通过配置该文件，可以设置在降级时，要兼容哪些浏览器，兼容的范围越光，降级产生的代码就越多，自然，打包后的体积就越大


## 打包压缩

webpack在打包时，会对所有js和css代码进行压缩

对于js，除了压缩之外，还会对其中的各种名称进行混淆

```js
(self.webpackChunkmovie_list=self.webpackChunkmovie_list||[]).push([[587],{3587:(r,t,n)=>{"use strict";n.r(t),n(5666),n(1539),n(8674),n(9600),n(1249),n(2222);var e=n(9755),a=n.n(e);var o;function i(r){o.html(r.map((function(r){return'<li>\n  <a href="'.concat(r.url,'" target="_blank">\n    <img src="').concat(r.cover,'" title="').concat(r.title,'">\n  </a>\n  <a href="').concat(r.url,'" target="_blank" class="').concat("qmUYQv1xlJhGMQKz-kfAp",'">').concat(r.title,'</a>\n  <p class="').concat("_3yV5wC-URYTUP0sPvaE0ZR",'">').concat(r.rate,"</p>\n  </li>")})).join(""))}o=a()("<ul>").addClass("_1fsrc5VinfYHBXCF1s58qS").appendTo("#app");var c=n(8138);const u=
```

混淆的作用一方面是为了进一步压缩包体积，另一方面是为了让我们的代码更难被其他人理解利用

## 源码地图 source map

我们运行的是webpack打包后的结果，而打包后的结果是很难阅读的

但这样一来会带来新的问题，如果代码报错，我们就难以知道到底是那一行代码写的有问题

此时源码地图就发挥了作用

可以发现，js代码打包后都会跟上一个同名的、后缀为`.map`的文件，该文件就保存了原始代码的内容

请放心，这个内容人类是看不懂的，但浏览器可以看懂

当代码报错时，浏览器会定位到源码地图中的对应代码，而不是把真实报错的代码展示给我们

## css工程化

webpack能够识别**所有**的样式代码，包括`css`、`less`、`sass`、`stylus`

在打包时，会将它们转换成纯正的`css`

除此之外，它还具备以下的神奇能力

## 自动厂商前缀

css有很多兼容性问题，解决这些兼容性问题的最常见办法，就是加上厂商前缀。

比如：

```css
/* 兼容性不好的代码 */
.container{
	display: flex;
  transition: 1s;
}

/* 兼容性好的代码 */
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-transition: 1s;
  transition: 1s;
}
```

webpack会根据`.browserlistrc`中指定的浏览器范围，**按需、自动**加上厂商前缀

我们开发无须关心

## css module

css文件多了后，你怎么保证它们里面没有冲突的类样式？

靠层级选择器？就不担心效率？

靠命名规范？就不担心脑袋爆炸？

要靠就靠css module

当样式文件以`xxx.mdoule.xxx`的方式命名时，webpack会将该文件当成一个开启了`css module`的文件

比如：`index.module.less`、`movie.module.css`，都是开启了`css module`的文件

**文件中的所有类名都会被hash化**

```less
// 源码
.container{}
.list{}
.item{}

// 打包结果，绝无可能重名
._2GFVidHvoHtfgtrdifua24{}
._1fsrc5VinfYHBXCF1s58qS{}
.urPUKUukdS_UTSuWRI5-5{}
```

现在就一个问题，我们在使用类名时，如何知道它打包结果的类名呢？

```js
import './index.module.less';
dom.classList.add('container'); // ❌ 最终的类名可不是这个
```

正确的方式如下：

```js
// styles 是一个对象，里面映射了源码类名和打包类名的关系
import styles from './index.module.less';
dom.classList.add(styles.container); // ✅ 属性container中记录的就是container转换后的类名
```



# 真正的webpack没有那么神奇

实际上，webpack没有做这么多事，我们不能把功劳（怨念）全归结于它

它只是站在巨人（其他流氓）肩膀上而已

下图可以看个热闹

![image-20210508203658298](http://mdrs.yuanjin.tech/img/20210508203658.png)

webpack通过插件（plugin）和加载器（loader）将这些技术整合在一起

`上图的技术 + 乱七八糟一大堆其他技术 + 老师的配置 = 呈现给你的工程`

目前，你无须理解这一些，保持敬畏即可

最后，说明一下工程中看不懂的文件：

- `.browserslistrc`，表达适配的浏览器范围，会被工程化中的其他技术所使用
- `babel.config.js`，`babel`的配置文件，做js降级处理
- `postcss.config.js`，`postcss`的配置文件，做css代码转换
- `webpack.config.js`，`webpack`的配置文件，整合其他工程化技术，以及配置打包细节、开发服务器、路径别名等等

# 对我们开发的影响

1. 学会访问开发服务器查看效果

2. 学会动态获取资源文件路径

   ```js
   import url from './assets/1.png'; 
   img.src = url;
   ```

3. 学会省略文件和后缀名

   ```js
   import './home'; // 若存在home.js，可省略js
   import './movie'; // 若movie是一个目录，此次导入的是 ./movie/index.js
   ```

4. 学会使用别名简化导入代码

   ```js
   import '@/b/b1'; // 实际导入： src/b/b1/index.js  (若b1是目录)
   ```

5. 学会使用css module

   ```js
   // styles 是一个对象，里面映射了源码类名和打包类名的关系
   import styles from './index.module.less';
   dom.classList.add(styles.container); 
   ```
