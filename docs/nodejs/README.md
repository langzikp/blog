# Node.js
Node.js 是一个开源和跨平台的 JavaScript 运行时环境。  
Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使得 Node.js 非常高效。

[Node.js 下载](http://nodejs.cn/)  
[Node.js api文档](http://nodejs.cn/api/)

##  全局对象 [global](https://nodejs.cn/api/globals.html)
  - [setTimeout](https://nodejs.cn/api/timers.html#settimeoutcallback-delay-args)
  - [setInterval](https://nodejs.cn/api/timers.html#setintervalcallback-delay-args)
  - [setImmediate](https://nodejs.cn/api/timers.html#setimmediatecallback-args)
  - [console](https://nodejs.cn/api/console.html#%E6%8E%A7%E5%88%B6%E5%8F%B0)
  - [__dirname](https://nodejs.cn/api/modules.html#__dirname) 当前模块的目录名
  - [__filename](https://nodejs.cn/api/modules.html#__filename) 当前模块的文件名（绝对路径）
  - [Buffer](https://nodejs.cn/api/buffer.html#%E7%BC%93%E5%86%B2%E5%8C%BA)
  - [process](https://nodejs.cn/api/process.html#%E8%BF%9B%E7%A8%8B%E4%BA%8B%E4%BB%B6)
    - [process.cwd()](https://nodejs.cn/api/process.html#processcwd) 返回 Node.js 进程的当前工作目录
    - [process.exit([code])](https://nodejs.cn/api/process.html#processexitcode)  指示 Node.js 以 code 的退出状态同步终止进程
    - [process.argv](https://nodejs.cn/api/process.html#processargv)  属性返回数组，其中包含启动 Node.js 进程时传入的命令行参数
    - [process.platform](https://nodejs.cn/api/process.html#processplatform)  返回用于标识编译 Node.js 二进制文件的操作系统平台的字符串
    - [process.kill(pid[, signal])](https://nodejs.cn/api/process.html#processkillpid-signal) 该方法将 signal 发送到由 pid 标识的进程
    - [process.env](https://nodejs.cn/api/process.html#processenv) 该属性返回包含用户环境的对象

## 内置模块 [os](https://nodejs.cn/api/os.html)
- [os.EOL](https://nodejs.cn/api/os.html#oseol)  操作系统特定的行尾标记; Windows 上是 \r\n;  OSIX 上是 \n
- [os.arch()](https://nodejs.cn/api/os.html#osarch) 操作系统 CPU 架构
- [os.cpus()](https://nodejs.cn/api/os.html#oscpus) 返回包含有关每个逻辑 CPU 内核的信息的对象数组
- [os.totalmem()](https://nodejs.cn/api/os.html#ostotalmem)  以整数形式返回系统内存总量（以字节为单位）
- [os.freemem()](https://nodejs.cn/api/os.html#osfreemem)  以整数形式返回空闲的系统内存量（以字节为单位）
- [os.homedir()](https://nodejs.cn/api/os.html#oshomedir) 返回当前用户的主目录的字符串路径
- [os.hostname()](https://nodejs.cn/api/os.html#oshostname) 以字符串形式返回操作系统的主机名。

## 内置模块 [path](https://nodejs.cn/api/path.html)
- [path.dirname(path)](https://nodejs.cn/api/path.html#pathdirnamepath) 返回 path 的目录名
- [path.basename(path[, suffix])](https://nodejs.cn/api/path.html#pathbasenamepath-suffix) 返回 path 的文件名，suffix为要删除的可选后缀
- [path.extname(path)](https://nodejs.cn/api/path.html#pathextnamepath) 返回 path 的扩展名
- [path.resolve([...paths])](https://nodejs.cn/api/path.html#pathresolvepaths) 将路径或路径片段的序列解析为绝对路径
- [path.join([...paths])](https://nodejs.cn/api/path.html#pathjoinpaths) 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径
- [path.sep](https://nodejs.cn/api/path.html#pathsep) 提供特定于平台的路径片段分隔符：Windows 上是 `\`；POSIX 上是 `/`
- [path.delimiter](https://nodejs.cn/api/path.html#pathdelimiter) 提供特定于平台的路径定界符: Windows 上是 `;`；POSIX 上是 `:`
- [path.normalize(path)](https://nodejs.cn/api/path.html#pathnormalizepath) 方法规范化给定的 path，解析 '..' 和 '.' 片段
- [path.relative(from, to)](https://nodejs.cn/api/path.html#pathrelativefrom-to) 方法根据当前工作目录返回从 from 到 to 的相对路径

## 内置模块 [url](https://nodejs.cn/api/url.html)

## 内置模块 [util](https://nodejs.cn/api/util.html)
- [util.isDeepStrictEqual(val1, val2)](https://nodejs.cn/api/util.html#utilisdeepstrictequalval1-val2) 如果 val1 和 val2 之间存在深度严格相等，则返回 true。 否则，返回 false。
- [util.promisify(original)](https://nodejs.cn/api/util.html#utilpromisifyoriginal) 采用遵循常见的错误优先的回调风格的函数（也就是将 (err, value) => ... 回调作为最后一个参数），并返回一个返回 promise 的版本。
- [util.callbackify(original)](https://nodejs.cn/api/util.html#utilcallbackifyoriginal) 采用 `async` 函数（或返回 `Promise` 的函数）并返回遵循错误优先回调风格的函数，即将 `(err, value) => ...` 回调作为最后一个参数。 在回调中，第一个参数将是拒绝原因（如果 `Promise` 已解决，则为 `null`），第二个参数将是已解决的值。
    
## 内置模块 [fs](https://nodejs.cn/api/fs.html)
- [fs.readFile(path[, options], callback)](https://nodejs.cn/api/fs.html#fsreadfilepath-options-callback) 读取一个文件
- [fs.writeFile(file, data[, options], callback)](https://nodejs.cn/api/fs.html#fswritefilefile-data-options-callback) 像文件写入内容 
- [fs.stat(path[, options], callback)](https://nodejs.cn/api/fs.html#fsstatpath-options-callback)  获取文件或目录信息
- [fs.readdir(path[, options], callback)](https://nodejs.cn/api/fs.html#fsreaddirpath-options-callback) 获取目录中的文件和子目录
- [fs.mkdir(path[, options], callback)](https://nodejs.cn/api/fs.html#fsmkdirpath-options-callback) 创建目录
- [fs.rmdir(path[, options], callback)](https://nodejs.cn/api/fs.html#fsrmdirpath-options-callback) 删除目录
- [fs.unlink(path, callback)](https://nodejs.cn/api/fs.html#fsunlinkpath-callback) 删除文件
- [fs.exists(path, callback)](https://nodejs.cn/api/fs.html#fsexistspath-callback) 判断文件或目录是否存在 ；**已废弃**
- [fs.createReadStream(path[, options])](https://nodejs.cn/api/fs.html#fscreatereadstreampath-options) 文件可读流
- [fs.createWriteStream(path[, options])](https://nodejs.cn/api/fs.html#fscreatewritestreampath-options) 文件可写流

## 内置模块 [stream](https://nodejs.cn/api/stream.html)

- [Readable](https://nodejs.cn/api/stream.html#%E5%8F%AF%E8%AF%BB%E6%B5%81)  可读流接口
- [Writable](https://nodejs.cn/api/stream.html#%E5%8F%AF%E5%86%99%E6%B5%81)  可写流接口
- [Duplex](https://nodejs.cn/api/stream.html#%E7%B1%BBstreamduplex)  双工流接口
- [Transform](https://nodejs.cn/api/stream.html#%E7%B1%BBstreamtransform) 转换流接口

## 内置模块 [net](https://nodejs.cn/api/net.html)
- [net.createConnection(options[, connectListener])](https://nodejs.cn/api/net.html#netcreateconnectionoptions-connectlistener)  客户端创建连接
- [net.createServer([options][, connectionListener])](https://nodejs.cn/api/net.html#netcreateserveroptions-connectionlistener)  创建服务端

## 内置模块 [http](https://nodejs.cn/api/http.html)

## 内置模块 [events](https://nodejs.cn/api/events.html)

## 生命周期

<img :src="$withBase('/img/course/node1.png')" alt="生命周期" />

<img :src="$withBase('/img/course/node2.png')" alt="生命周期" />

## node中的ORM
ORM（Object Relational Mapping，对象关系映射）：是一种为了解决面向对象与关系数据库存在的互不匹配的现象的技术，通过描述对象和数据库之间映射的元数据，把程序中的对象自动持久化到关系数据库中。  


- [sequelize](https://www.sequelize.cn/)
- [typeorm](https://typeorm.bootcss.com/)


## node中的日志记录

-  [log4js](https://www.npmjs.com/package/log4js)

## express
express是一个快速、独立、极简的Node.js Web 框架。  
[express](https://express.nodejs.cn/)

## nodemon
[nodemon](https://github.com/remy/nodemon#nodemon) 是一个工具，它通过在检测到目录中的文件更改时自动重新启动节点应用程序来帮助开发基于 node.js 的应用程序。
