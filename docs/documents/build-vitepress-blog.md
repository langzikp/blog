## 使用vitepress搭建博客
一个程序员怎么能不拥有自己的博客，本文让10分钟快速搭建部署好自己的博客

**准备工作**
- 有Gitee账号   
- 有安装git  
- 会 `markdown` 编写文档  
- `Node.js` 版本 >= 18 


博客采用[VitePress](https://vitepress.dev/zh/)搭建，[Gitee](https://gitee.com/)部署，接下来，5步搞定。


### 1.创建项目
创建项目目录，并初始化项目，安装VitePress
```shell
# 创建项目目录
 mkdir vitepress-blog && cd vitepress-blog

# 初始化项目，本文使用yarn，npm同理
yarn init

# 安装VuePress
yarn add -D vitepress

# 将以下 脚本注入到 package.json 中
{
  ...
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  ...
}
```


### 2. 创建目录结构
```js
vitepress-blog
├── docs
│   ├── .vitepress 文件
│       └── config.js     配置文件的入口文件
├── src
│   ├── public            静态资源目录
│   │      └── logo.png
│   └── notes             笔记目录
│   │   ├── html.md 
│   │   ├── css.md
│   │   └── js.md
│   ├── aboutme.md        关于我
│   └── index.md          首页
│ 
└── package.json
```

### 3.完成基础配置
- 配置主题，定义自己的导航栏
```js
// .vitepress/config.js
export default {
    lang: "en-US",
    title: "VitePress",
    description: "Vite & Vue powered static site generator.",
    srcDir: "../src", // 相对于项目根目录的 markdown 文件所在的文件夹
    outDir: "../dist", // 输出目录
    base: '/vitepress-blog/',

    // 主题相关配置
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "Lang's blog",
        search: {
            provider: 'local',
        },
        nav: [
            { text: "首页", link: "/" },
            {
                text: "前端笔记",
                ariaLabel: "Language Menu",
                items: [
                    { text: "HTML", link: "/notes/html" },
                    { text: "CSS", link: "/notes/css" },
                    { text: "JavaScript", link: "/notes/js" },
                ],
            },

            {
                text: "框架",
                items: [
                    {
                        text: "JS框架",
                        items: [
                            { text: "Vue", link: "https://cn.vuejs.org/" },
                            { text: "React", link: "https://react.docschina.org/" },
                        ],
                    },
                    {
                        text: "UI框架",
                        items: [
                            { text: "Element UI", link: "https://element.eleme.cn/#/zh-CN" },
                            { text: "Ant Design", link: "https://ant.design/index-cn" },
                        ],
                    },
                ],
            },
            { text: "Gitee", link: "https://gitee.com/" },
            { text: "关于我", link: "/aboutme" },
        ],
        sidebar: [
            {
                text: '前端笔记',
                items: [
                    { text: 'HTML', link: '/notes/html' },
                    { text: 'CSS', link: '/notes/css' },
                    { text: 'JS', link: '/notes/js' },

                ]
            }
        ]
    },
};
```
- 配置首页
```js
// 拷贝到vitepress-blog/src/index.md

---
layout: home
hero:
  name: Lang's blog
  text: 个人学习记录的博客
  tagline: Web前端技术博客，积跬步以至千里，致敬每个爱学习的你。
  image:
    src: /study.png
    alt: 博客
  actions:
    - theme: brand
      text: Get Started
      link: /notes/html
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon: 
      src: /study.png
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /study.png
      light: /study.png
    title: Another cool feature
    details: Lorem ipsum...
---
```

### 4.本地启动服务
```js
yarn dev
```
VitePress 会在 [http://localhost:5173/vitepress-blog/](http://localhost:5173/vitepress-blog/) 启动一个热重载的开发服务器  

**电脑端效果**

<img :src="$withBase('/img/blog-vitepress-pc.png')" alt="">


**移动端效果**

<img :src="$withBase('/img/blog-vitepress-mobile.png')" alt="">

&nbsp;
<br/>

> 本文使用的VitePress的默认主题首页  
> 如果你具备编程能力，可自定义你的专属页面


### 5. 部署
> 因为GitHub访问慢的原因，没使用GitHub Pages  
> 我使用的是Gitee Pages ,它提供免费的静态网页托管服务（最新规定，必须是开源的仓库才能使用该功能）

1.在**本地vitepress-blog**目录创建本地仓库
```shell
git init

# 创建Git忽略文件.gitignore，内容如下
node_modules/
docs/.vitepress/cache
```
2.打包生成静态文件,
```shell
yarn build
```
生成的静态资源会在vitepress-blog\dist 目录

3.Gitee上新建仓库**vitepress-blog**,上传代码
```shell
cd vitepress-blog
git add .
git commit -m "project init"
git remote add origin https://gitee.com/langzikp/vitepress-blog.git
git push -u origin "master"
```

4.登录[Gitee](https://gitee.com/), 选择**vitepress-blog**仓库，服务-Gitee Pages，开通服务（需要实名审核）
<img :src="$withBase('/img/giteepages.jpg')" alt="">

5.在Gitee Page中指定部署目录为 `dist`

**就此，你拥有了自己的博客网站[https://langzikp.gitee.io/vitepress-blog/](https://langzikp.gitee.io/vitepress-blog/)**  
其中： langzikp 为你Gitee的个人空间地址，vitepress-blog为仓库名称
<br/>

> 本文demo的源码地址：[https://gitee.com/langzikp/vitepress-blog.git](https://gitee.com/langzikp/vitepress-blog.git)


> [VitePress官网](https://vitepress.dev/zh/)  
> 官网还提供了许多实用的功能，也有一些其他样式的主题  
> 快快动手搭建属于你的博客吧~  

<br>
<div style="text-align:center">
<img :src="$withBase('/img/wechat-title.jpg')" alt="">
</div>