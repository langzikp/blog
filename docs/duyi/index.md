# 学习日志

:::details 知识图谱
<img :src="$withBase('/img/duyi.jpg')" alt="" width="width: 70%;"/>
:::

## 📆 2023-10-28 随谈
#### 📒学习内容： 
- [随谈](https://ke.qq.com/course/2144831/8652044116212287#term_id=102247018)

#### ✏️学习笔记
> **学习 = 理解 + 记忆  + 应用**

> **坚持是你必须重视的事**  
> 凡事开始了第一次，第二次就会变得非常简单容易  
> 让开始的负担降下来  
> 糟糕的坚持也比放弃要强  
> 让别人关注你  


## 📆 2023-10-31 git和网络
#### 📒学习内容： 
- 技术应用阶段： git
- 技术应用阶段： 网络和git学习指导


#### ✏️学习笔记：  

[网络](https://langzikp.gitee.io/blog/network/01.html#%E5%88%86%E5%B1%82%E6%A8%A1%E5%9E%8B)  
[Git](https://langzikp.gitee.io/blog/git/)

## 📆 2023-11-01 模块化
#### 📒学习内容： 
- 技术应用阶段： 模块化详细版  
1. CommonJs规范：NodeJS实现    
2. AMD规范：require.js   (社区实现，已过时)  
3. CMD规范：sea.js   (社区实现，已过时)   
4. ESM：ECMAScript Modules， ES6模块化（官方标准）



#### ✏️学习笔记：
[ES6之模块化，与CommonJS区别](https://langzikp.gitee.io/blog/javascript/ES6/18-ES6%E4%B9%8BExport%E5%92%8CImport.html)  

## 📆 2023-11-02至11-03 包管理器
#### 📒学习内容： 
- 技术应用阶段： 包管理器详细版
1. npm    
2. yarn
3. cnpm 
4. pnpm  
5. bower 已过时

#### ✏️学习笔记：
[npm包管理器](https://langzikp.gitee.io/blog/nodejs/npm.html)


## 📆 2023-11-04至11-06 第三方库
#### 📒学习内容： 
- 技术应用阶段： JS工具库
- 技术应用阶段： 第三方库

#### ✏️学习笔记：
<a class="item" href="https://jquery.cuishifeng.cn/" target="blank">jQuery</a>
<a class="item" href="https://www.jq22.com/" target="blank">jQuery plugins </a>
<a class="item" href="https://www.lodashjs.com/" target="blank">lodash.js</a>
<a class="item" href="http://mockjs.com/" target="blank">mock.js</a>
<a class="item" href="https://momentjs.com/" target="blank">moment.js</a>
<a class="item" href="https://animate.style/" target="blank">animate.css</a>
<a class="item" href="https://echarts.apache.org/handbook/zh/get-started/" target="blank">ECharts.js</a>


## 📆 2023-11-07 node
#### 📒学习内容： 
- 技术应用阶段： node
  - node 核心
    - 全局对象 [global](https://nodejs.cn/api/globals.html)
    - 内置模块 [os](https://nodejs.cn/api/os.html)
    - 内置模块 [path](https://nodejs.cn/api/path.html)
    - 内置模块 [url](https://nodejs.cn/api/url.html)
    - 内置模块 [util](https://nodejs.cn/api/util.html)
    - 内置模块 [fs](https://nodejs.cn/api/fs.html)
    - 内置模块 [stream](https://nodejs.cn/api/stream.html)
    - 内置模块 [net](https://nodejs.cn/api/net.html)
    - 内置模块 [http](https://nodejs.cn/api/http.html)
    - 内置模块 [events](https://nodejs.cn/api/events.html)
    - 生命周期
    
  - Mysql
  - 数据驱动和ORM
    - ORM库 [sequelize](https://www.sequelize.cn/)
    - 日志记录-[log4js](https://www.npmjs.com/package/log4js) 
  
  - [express](https://express.nodejs.cn/)
    - [nodemon](https://github.com/remy/nodemon/) 可在检测到目录中的文件更改时通过自动重新启动 node 应用程序来帮助开发基于 node.js 的应用程序
    - 断点调试
    - [跨域](/network/03.html)
        - JSONP
        - CORS  [CORS中间件](https://www.npmjs.com/package/cors) CORS方案解决跨域问题的中间件
    - [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback) 是一个用于处理前端路由的中间件，它的原理是在服务器接收到请求时，检查请求的路径是否匹配到静态文件（如HTML、CSS、JS等），如果不匹配，则将请求重定向到前端的入口文件，通常是 index.html。这样做的目的是确保在使用前端路由时，刷新页面或直接访问某个路由时，服务器都能正确地返回前端入口文件，并由前端路由来处理路由匹配和页面渲染。
    - [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)  处理图片上传的中间件
    - [Jimp](https://www.npmjs.com/package/jimp) 图片处理/水印/裁剪的中间件
    - [node-qrcode](https://www.npmjs.com/package/qrcode) 生成二维码
    - [svg-captcha](https://www.npmjs.com/package/svg-captcha) 图片验证码

  - websocket
  - CSRF攻击
  - XSS攻击
  - 断点调试
  


#### ✏️学习笔记：
[nodejs](/nodejs/)




