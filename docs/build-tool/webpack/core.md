
[webpack 官网](https://www.webpackjs.com/concepts/)  
[技能树](http://mdrs.yuanjin.tech/img/20210508151156.png)  
[Webpack 知识图谱-博客](https://tsejx.github.io/webpack-guidebook/)

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
    - [alias](https://www.webpackjs.com/configuration/resolve/#resolvealias)  路径别名
    - [extensions](https://www.webpackjs.com/configuration/resolve/#resolveextensions) 缺省的文件和后缀名
    - [modules](https://www.webpackjs.com/configuration/resolve/#resolveextensions) webpack解析模块时应该搜索的目录
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