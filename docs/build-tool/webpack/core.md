
[webpack 官网](https://www.webpackjs.com/concepts/)  
[技能树](http://mdrs.yuanjin.tech/img/20210508151156.png)

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
  ```js
    output: {
        // 该配置会为index.html中引入的<script> <link>等标签中的资源路径添加前缀
        publicPath: '/'
    }
  ```

- [loader](https://www.webpackjs.com/concepts/loaders/)   
loader 用于对模块的源代码进行转换。  
loader 可以使你在 import 或"加载"模块时预处理文件。
> webapck的本质是一个模块打包工具, 所以webpack默认只能处理JS文件,不能处理其他文件,
因为其他文件中没有模块的概念, 但是在企业开发中我们除了需要对JS进行打包以外,
还有可能需要对图片/CSS等进行打包, 所以为了能够让webpack能够对其它的文件类型进行打包,
在打包之前就必须将其它类型文件转换为webpack能够识别处理的模块,
注意：loader都是用NodeJS编写的


- [plugin](https://www.webpackjs.com/concepts/plugins/)  插件  
插件（plugin）是 webpack 的支柱功能。用于扩展webpack的功能。当然loader也是变相的扩展了webpack ，但是它只专注于转化文件这一个领域。   
而plugin的功能更加的丰富，而不仅局限于资源的加载。一个插件就是一个类，可以在打包过程中的特定阶段执行。   
从作用角度简单来讲：loader帮助我们加载文件资源，而plugins则是loader的延伸，并不限制于加载文件资源。丰富了loader的功能。

- [devtool](https://www.webpackjs.com/configuration/devtool/#root) 源码视图

- [resolve](https://www.webpackjs.com/configuration/resolve/)   解析相关的配置
    - alias  路径别名
    - extensions 缺省的文件和后缀名
    - modules webpack解析模块时应该搜索的目录
         ```js
            resolve: {
                // 创建 import 或 require 的路径别名
                alias: {
                    "@": path.resolve(__dirname, 'src'),
                    "_": __dirname
                },
                // 使的我们在引入资源时可省略后缀，按此配置顺序查找
                extensions: ['.js', '.json', '.wasm'],  // 默认值
                // webpack 解析模块时应该搜索的目录
                modules: ['node_modules'],  // 默认值
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

### 涉及术语

1. module：模块，分割的代码单元，webpack中的模块可以是任何内容的文件，不仅限于JS
2. chunk：webpack内部构建模块的块，一个chunk中包含多个模块，这些模块是从入口模块通过依赖分析得来的
3. bundle：chunk构建好模块后会生成chunk的资源清单，清单中的每一项就是一个bundle，可以认为bundle就是最终生成的文件
4. hash：最终的资源清单所有内容联合生成的hash值
5. chunkhash：chunk生成的资源清单内容联合生成的hash值
6. chunkname：chunk的名称，如果没有配置则使用main
7. id：通常指chunk的唯一编号，如果在开发环境下构建，和chunkname相同；如果是生产环境下构建，则使用一个从0开始的数字进行编号




#
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
