# js 兼容性
[官网](https://babeljs.io/)  
[民间中文网](https://www.babeljs.cn/)


## babel的安装和使用

babel可以和构建工具联合使用，也可以独立使用

如果要独立的使用babel，需要安装下面两个库：

- @babel/core：babel核心库，提供了编译所需的所有api
- @babel/cli：提供一个命令行工具，调用核心库的api完成编译

```shell
npm i -D @babel/core @babel/cli
```

## babel的使用

@babel/cli的使用极其简单

它提供了一个命令`babel`

```shell
# 按文件编译
babel 要编译的文件 -o 编辑结果文件

# 按目录编译
babel 要编译的整个目录 -d 编译结果放置的目录
```

## babel的配置

可以看到，babel本身没有做任何事情，真正的编译要依托于**babel插件**和**babel预设**来完成

> babel预设和postcss预设含义一样，是多个插件的集合体，用于解决一系列常见的兼容问题

我们通过一个配置文件`.babelrc`，来告诉babel要使用哪些插件或预设

```json
// .babelrc
{
    "presets": [],
    "plugins": []
}
```

## babel预设

babel有多种预设，最常见的预设是`@babel/preset-env`

`@babel/preset-env`可以让你使用最新的JS语法，而无需针对每种语法转换设置具体的插件

**配置**

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

**兼容的浏览器**

`@babel/preset-env`需要根据兼容的浏览器范围来确定如何编译，和postcss一样，可以使用文件`.browserslistrc`来描述浏览器的兼容范围

```
last 3 version
> 1%
not ie <= 8
```

**自身的配置**

和`postcss-preset-env`一样，`@babel/preset-env`自身也有一些配置

> 具体的配置见：[配置列表](https://www.babeljs.cn/docs/babel-preset-env#options)

配置方式是：

```json
{
    "presets": [
        ["@babel/preset-env", {
            "配置项1": "配置值",
            "配置项2": "配置值",
            "配置项3": "配置值"
        }]
    ]
}
```

其中一个比较常见的配置项是`usebuiltins`，该配置的默认值是false

它有什么用呢？由于该预设仅转换新的语法，并不对新的API进行任何处理

例如：

```js
new Promise(resolve => {
    resolve()
})
```

转换的结果为

```js
new Promise(function (resolve) {
  resolve();
});
```

如果遇到没有Promise构造函数的旧版本浏览器，该代码就会报错

而配置`usebuiltins`可以在编译结果中注入这些新的API，它的值默认为`false`，表示不注入任何新的API，可以将其设置为`usage`，表示根据API的使用情况，按需导入API

```json
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}
```

## babel插件

> @babel/polyfill 已过时，目前被`core-js`和`generator-runtime`所取代

除了预设可以转换代码之外，插件也可以转换代码，它们的顺序是：

- 插件在 Presets 前运行。
- 插件顺序从前往后排列。
- Preset 顺序是颠倒的（从后往前）。

通常情况下，`@babel/preset-env`只转换那些已经形成正式标准的语法，对于某些处于早期阶段、还没有确定的语法不做转换。

如果要转换这些语法，就要单独使用插件

下面随便列举一些插件

### `@babel/plugin-proposal-class-properties`

该插件可以让你在类中书写初始化字段

```js
class A {
    a = 1;
    constructor(){
        this.b = 3;
    }
}
```

### `@babel/plugin-proposal-function-bind`

该插件可以让你轻松的为某个方法绑定this

```js
function Print() {
    console.log(this.loginId);
}

const obj = {
    loginId: "abc"
};

obj::Print(); //相当于：Print.call(obj);
```

> 遗憾的是，目前vscode无法识别该语法，会在代码中报错，虽然并不会有什么实际性的危害，但是影响观感

### `@babel/plugin-proposal-optional-chaining`

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined
```

### `babel-plugin-transform-remove-console`

该插件会移除源码中的控制台输出语句

```js
console.log("foo");
console.error("bar");
```

编译后

```js

```

### `@babel/plugin-transform-runtime`

用于提供一些公共的API，这些API会帮助代码转换


## webpack中使用babel
```js
// webpack.config.js
module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" }
        ]
    }
}
```
`.babelrc`配置
```js
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}
```