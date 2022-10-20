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
$ npm config set registry https://registry.npm.taobao.org/
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
$ yarn config set registry https://registry.npm.taobao.org/
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

