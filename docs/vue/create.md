# 搭建Vue项目

## 环境搭建

### 安装Node.js
下载地址 [Node.js](http://nodejs.cn/download/)   
安装后，通过命令行输入 "node -v" 来测试是否成功安装
```shell
$ node -v
v14.16.0
```

### 安装NPM
- 新版的nodejs已经集成了npm，所以之前npm也一并安装好了  
通过输入 "npm -v" 来测试是否成功安装
```shell
$ npm -v
v6.14.11
```
- 国内直接使用 npm 的官方镜像是非常慢的，切换为淘宝 npm 镜像。
```shell
# 查看当前镜像源
$ npm config get registry
https://registry.npmjs.org/

# 设置npm镜像源为淘宝镜像
$ npm config set registry https://registry.npmmirror.com/
```

### 安装yarn
```shell
# 安装yarn
$ npm install -g yarn

# 查看版本
$ yarn -v
1.22.17

# 查看yarn当前镜像源
$ yarn config get registry
https://registry.npmjs.org/

# 设置yarn镜像源为淘宝镜像
$ yarn config set registry https://registry.npmmirror.com/
```

### 安装开发工具 Visual Studio Code
- 安装插件：Vetur  —— 语法高亮、智能感知、Emmet等
- 安装插件：Vue VSCode Snippets   —— 模板快速生成代码片段  
  **VSCode 快速生成vue模板插件**[命令参考官网](https://github.com/sdras/vue-vscode-snippets)

## Vue CLI 搭建项目
Vue CLI官方地址[Vue CLI](https://cli.vuejs.org/zh/)
```shell
# 安装
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli

# 查看版本
$ vue -V
@vue/cli 4.5.15

# 创建项目
$ vue create my-project
# OR
$ vue ui
```

### 组件和样式导入

`<script>`中 导入其他组件，`import '@/common/util.js'` ; 其中 `@/` 是 `src/` 的别名
`<style>`中 导入其他样式，`@import '~@/styles/base.scss' `; 其中 `~@/` 是 `src/` 的别名

### css module

- 通过 `<style module>` 以开箱即用的方式在 `*.vue` 文件中使用 [CSS Modules](https://cli.vuejs.org/zh/guide/css.html#css-modules)

```vue
<template>
  <div id="app" :class="$style.yellow">hello world</div>
</template>

<script>
export default {};
</script>

<style module>
.yellow {
  color: yellow;
}
</style>
```

- 如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 `.module.(css|less|sass|scss|styl)` 结尾

```js
<template>
  <div :class="styles.box">
    hello world
  </div>
</template>

<script>
import styles from './styles/foo.module.css'
export default {
  data(){
    return {
      styles
    }
  },
}
</script>
```

### 对单个组件测试

[快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html)
快速对某个 \*.vue 文件进行快速原型开发，可安装一个扩展

```js
npm install -g @vue/cli-service-global
```


## vue模板项目社区实践
[vue-element-admin ](https://panjiachen.github.io/vue-element-admin-site/zh/guide/)是一个后台前端解决方案，它基于 vue 和 element-ui实现。



