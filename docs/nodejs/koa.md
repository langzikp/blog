# Koa

## 什么是Koa
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 为搭建web服务器提供更轻量、更优雅的方案。
Koa目前的版本是`koa2`  
- [koa官网](https://koajs.com/)
- [koa中文网](https://koa.bootcss.com/index.html)

## 与Express的区别
### 相同点
两个框架都对http进行了封装。相关的api都差不多，同一批人所写。

### 不同点
1. 更轻量 
  - `koa`没有内置的中间件
  - `koa`不提供路由匹配
2. 更合理的对象结构
- `express`的主要操作对象有`app`、`req`、`res`; 
<img :src="$withBase('/img/node/1.png')" alt="图片" width="70%" />
- 在`koa`中，它的主要操作对象有`app`、`context`、`request`、`response`
<img :src="$withBase('/img/node/2.png')" alt="图片"  width="70%"/>



3. 更友好的中间件支持
 - `express`的中间件模型为线型，而`koa`的中间件模型为U型，也可称为**洋葱模型**构造中间件。
```js
// express 的中间件示例
function delay(duration){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve();
    }, duration)
  })
}
// 中间件1
app.use(function(req, res, next){
  console.log(1);
  next();
  console.log(4);
})

// 中间件2
app.use(async function(req, res, next){
  console.log(2);
  await delay(1000);
  console.log(3);
})

// 得到的结果：1 2 4 3
```
<img :src="$withBase('/img/node/3.png')" alt="图片"  width="70%"/>

```js
// koa 的中间件示例
function delay(duration){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve();
    }, duration)
  })
}
// 中间件1
app.use(async function(ctx, next){
  console.log(1);
  await next();
  console.log(4);
})

// 中间件2
app.use(async function(req, res, next){
  console.log(2);
  await delay(1000);
  console.log(3);
})

// 得到的结果：1 2 3 4
```

<img :src="$withBase('/img/node/4.png')" alt="图片"  width="70%"/>

可以看到，对于每个中间件，在完成了一些事情后，可以非常优雅的将控制权传递给下一个中间件，**并能够等待它完成**，当后续的中间件完成处理后，控制权又回到了自己，这种中间件模型称之为洋葱模型

<img :src="$withBase('/img/node/5.png')" alt="图片"  width="70%"/>


## 常用中间件

|                          Koa中间件                           |                             功能                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|        [@koa/router](https://github.com/koajs/router)        | 官方中间件。借鉴了`koa-router`<br />用于处理路由的中间件，用法类似 `express.Router` |
|    [koa-bodyparser](https://github.com/koajs/bodyparser)     | 解析请求体的中间件，支持<br />x-www-form-urlencoded, application/json格式的请求体 |
|      [koa-views](https://github.com/queckezz/koa-views)      |        渲染模板引擎的中间件，一般用于传统的服务端渲染        |
|        [koa-static](https://github.com/koajs/static)         |                用于搭建静态资源服务器的中间件                |
|  [koa-static-cache](https://github.com/koajs/static-cache)   |                实现了http缓存的静态资源中间件                |
|       [koa-session](https://github.com/koajs/session)        |                        session中间件                         |
|           [koa-jwt](https://github.com/koajs/jwt)            |                       支持jwt的中间件                        |
|      [koa-compress](https://github.com/koajs/compress)       |                   支持gzip动态压缩的中间件                   |
|        [koa-logger](https://github.com/koajs/logger)         |                        日志记录中间件                        |
|          [@koa/cors](https://github.com/koajs/cors)          |               官方中间件。支持CORS跨域的中间件               |
|        [@koa/multer](https://github.com/koajs/multer)        | 官方中间件，借鉴了`koa-multer`<br />用户处理文件上传的中间件 |
| [koa-connect](https://github.com/vkurchatkin/koa-connect#readme) |           将express或connect中间件转换为koa中间件            |
| [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) |                          代理中间件                          |
| [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback#readme) |                         单页应用支持                         |
|  [koa-convert](https://github.com/gyson/koa-convert#readme)  |           用于将旧版本的koa中间件转换为koa2中间件            |




