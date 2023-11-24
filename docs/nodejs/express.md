# Express
## 什么是Express
Express是一个快速、独立、极简的 Node.js Web 框架。 
- [express官网](https://expressjs.com/)
- [express中文网](https://express.nodejs.cn/)


## 中间件概念
在 Express 中，中间件是指那些在处理客户端请求和服务器响应之间执行的应用程序逻辑。中间件在 Express 的请求-响应周期中扮演着重要角色，可以用于实现身份验证、日志记录、路由处理等功能。
<img :src="$withBase('/img/node/6.jpg')" alt="图片"  width="90%"/>



## 中间件功能
1. 执行任何代码。
2. 更改请求和响应对象。
3. 结束请求 - 响应周期。
4. 调用堆栈中的下一个中间件函数。

<img :src="$withBase('/img/node/7.jpg')" alt="图片"  width="90%"/>

> 如果当前的中间件函数没有结束请求 - 响应周期，则必须调用next()以将控制传递给下一个中间件函数。否则，请求将被挂起。 

## 中间件类型
- [应用程序级中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.application)
- [路由器级中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.router)
- [错误处理中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.error-handling)
- [内置中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.built-in)
- [第三方中间件](https://express.nodejs.cn/en/resources/middleware.html)



## 常用中间件
|                          express内置中间件                           |                             功能                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|        [express.static](https://express.nodejs.cn/en/4x/api.html#express.static)        | 内置中间件，提供静态资源，如HTML文件，图像等|
|    [express.urlencoded](https://express.nodejs.cn/en/4x/api.html#express.urlencoded)     | 内置中间件，使用 urlencoded 有效负载解析传入的请求，基于 [body-parser](https://express.nodejs.cn/en/resources/middleware/body-parser.html) |
|    [express.json](https://express.nodejs.cn/en/4x/api.html#express.json)     | 内置中间件，使用 JSON 有效负载解析传入请求，基于 [body-parser](https://express.nodejs.cn/en/resources/middleware/body-parser.html) |
|      [express.raw](https://express.nodejs.cn/en/4x/api.html#express.raw)      |  内置中间件，将传入的请求有效负载解析为 Buffer，基于 [body-parser](https://express.nodejs.cn/en/resources/middleware/body-parser.html)        |
|        [express.text](https://express.nodejs.cn/en/4x/api.html#express.text)         |   将传入的请求负载解析为字符串，基于 [body-parser](https://express.nodejs.cn/en/resources/middleware/body-parser.html)                |


|                         express第三方中间件                            |                             功能                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|  [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback)        | 用于处理前端路由的中间件，检查请求的路径是否匹配到静态文件（如HTML、CSS、JS等），如果不匹配，则将请求重定向到前端的入口文件，通常是 index.html |
|  [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)     | 处理图片上传的中间件 |
|  [node-qrcode](https://www.npmjs.com/package/qrcode)   |       生成二维码    |
|   [svg-captcha](https://www.npmjs.com/package/svg-captcha)         |               图片验证码           |
|  [http-proxy-middleware](https://github.com/koajs/static-cachehttps://www.npmjs.com/package/http-proxy-middleware)   |  用于把请求代理转发到其他服务器的中间件  |
|  [CORS中间件](https://www.npmjs.com/package/cors)  |  CORS方案解决跨域问题的中间件  |
|  [cookie-parser](https://www.npmjs.com/package/cookie-parser)  |  处理cookie的中间件  |
