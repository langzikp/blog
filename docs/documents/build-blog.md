## 10分钟搭建一个免费个人博客网站
一个程序员怎么能不拥有自己的博客，本文让10分钟快速搭建部署好自己的博客

**准备工作**
- 有Gitee账号   
- 有安装git  
- 会 `markdown` 编写文档  
- `Node.js` 版本 >= 8.6  


博客采用[VuePress](https://vuepress.vuejs.org/zh/)搭建，[Gitee](https://gitee.com/)部署，接下来，5步搞定。


### 1.创建项目
创建项目目录，并初始化项目，安装VuePress
```shell
# 创建项目目录
mkdir myblog && cd myblog

# 初始化项目，本文使用yarn，npm同理
yarn init

# 安装VuePress
yarn add -D vuepress
```

### 2. 创建目录结构
```js
myblog
├── docs
│   ├── .vuepress 
│   │   ├── public        静态资源目录
│   │   │   └── logo.png
│   │   └── config.js     配置文件的入口文件
│   │
│   └── notes             笔记目录
│   │   ├── html.md 
│   │   ├── css.md
│   │   └── js.md
│   ├── aboutme.md        关于我
│   └── README.md         首页
│ 
└── package.json
```

### 3.完成基础配置
- 配置主题，定义自己的导航栏
```js
// 拷贝到myblog/docs/.vuepress/config.js
module.exports = {
    title: "Lang's blog",
    description: 'Just playing around',
    base: "/myblog/",

    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端笔记',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'HTML', link: '/notes/html' },
                  { text: 'CSS', link: '/notes/css' },
                  { text: 'JavaScript', link: '/notes/js' }
                ]
            },
            
            {
                text: '框架',
                items: [
                  { text: 'JS框架', items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/' },
                    { text: 'React', link: 'https://react.docschina.org/' }
                  ]},
                  { text: 'UI框架', items: [
                    { text: 'Element UI', link: 'https://element.eleme.cn/#/zh-CN' },
                    { text: 'Ant Design', link: 'https://ant.design/index-cn' }
                  ] }
                ]
            },
            { text: 'Gitee', link: 'https://gitee.com/' },
            { text: '关于我', link: '/aboutme/' },
          ]
    }
}
```
- 配置首页
```js
// 拷贝到myblog/docs/.vuepress/README.md

---
home: true
heroImage: /logo.png
heroText: Lang's Blog
tagline: 前端进阶之路
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2019-present Lang
---

```
- 在 myblog/package.json 中添加一些 scripts
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
### 4.本地启动服务
```js
yarn docs:dev
```
VuePress 会在 [hthttp://localhost:8080/myblog/](http://localhost:8080/myblog/) 启动一个热重载的开发服务器  

**电脑端效果**

<img :src="$withBase('/img/blog1.png')" alt="">


**移动端效果**

<img :src="$withBase('/img/blog2.png')" alt="">

&nbsp;
<br/>

> 本文使用的VuePress的默认主题首页  
> 如果你具备编程能力，可自定义你的专属页面


### 5. 部署
> 因为GitHub访问慢的原因，没使用GitHub Pages  
> 我使用的是Gitee Pages ,它提供免费的静态网页托管服务

1.在**本地myblog**目录创建本地仓库
```shell
git init

# 创建Git忽略文件.gitignore，内容如下
node_modules/
```
2.打包生成静态文件,
```shell
yarn docs:build
```
生成的静态资源会在myblog\docs\.vuepress\dist 目录

3.Gitee上新建仓库**myblog**,上传代码
```shell
cd myblog
git add .
git commit -m "first commit"
git remote add origin https://gitee.com/langzikp/myblog.git
git push -u origin "master"
```

4.登录[Gitee](https://gitee.com/), 选择**myblog**仓库，服务-Gitee Pages，开通服务（需要实名审核）
<img :src="$withBase('/img/giteepages.jpg')" alt="">

5.在Gitee Page中指定部署目录为 `docs/.vuepress/dist`

**就此，你拥有了自己的博客网站[https://langzikp.gitee.io/myblog/](https://langzikp.gitee.io/myblog/)**  
其中： langzikp 为你Gitee的个人空间地址，myblog为仓库名称
<br/>

> 本文demo的源码地址：[https://gitee.com/langzikp/myblog.git](https://gitee.com/langzikp/myblog.git)

<br/>

#### 下图为我的博客首页 
<br>


<img :src="$withBase('/img/blog3.png')" alt="">

<br>
<br>

> [VuePress官网](https://vuepress.vuejs.org/zh/)  
> 官网还提供了许多实用的功能，也有一些其他样式的主题  
> 快快动手搭建属于你的博客吧~  

<br>
<div style="text-align:center">
<img :src="$withBase('/img/wechat-title.jpg')" alt="">
</div>