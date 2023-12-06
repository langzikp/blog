# npm包管理器
npm 全称为 node package manager，即 node 包管理器，它运行在 node 环境中，让开发者可以用简单的方式完成包的查找、安装、更新、卸载、上传等操作。  
[npm 官网](https://www.npmjs.com/)        
[npm文档](https://npm.nodejs.cn/about-npm)   
[npm和node版本对照](https://nodejs.org/en/download/releases/)  

## 1、包的安装
因为 npm 的官方 registry 服务器位于国外，所以通常使用淘宝镜像，提高下载速度
```shell
# 设置淘宝镜像
$ npm config set registry https://registry.npm.taobao.org

# 查看源地址
$ npm config get registry
```

### 本地安装
```shell
# 本地安装命令
$ npm install 包名

# 简写
$ npm i 包名
```
本地安装的包出现在**当前目录下**的`node_modules`目录中

> 如果本地安装的包带有 CLI，npm 会将它的 CLI 脚本文件放置到`node_modules/.bin`下，使用命令`npx 命令名`即可调用

### 全局安装
全局安装的包放置在一个特殊的全局目录，该目录可以通过命令npm config get prefix查看
```shell
# 全局安装命令
$ npm install --global 包名

# 简写
$ npm i -g 包名
```
**全局安装的包并非所有工程可用，它仅提供全局的 CLI 工具**

## 2、包的使用

当使用 nodejs 导入模块时，如果模块路径不是以 `./` 或 `../` 开头，则 node 会认为导入的模块来自于 `node_modules` 目录，例如：
```js
var _ = require("lodash");
```
它首先会从当前目录的以下位置寻找文件
```js
node_modules/lodash.js
node_modules/lodash/入口文件
```
若当前目录没有这样的文件，则会回溯到上级目录按照同样的方式查找

如果到顶级目录都无法找到文件，则抛出错误

上面提到的**入口文件**按照以下规则确定

1. 查看导入包的`package.json`文件，读取`main`字段作为入口文件
2. 若不包含`main`字段，则使用`index.js`作为入口文件

> 入口文件的规则同样适用于自己工程中的模块 在 node 中


## 3、包的语义版本

版本号规则：主版本号.次版本号.补丁版本号
- 主版本号：仅当程序发生了重大变化时才会增长，如新增了重要功能、新增了大量的API、技术架构发生了重大变化
- 次版本号：仅当程序发生了一些小变化时才会增长，如新增了一些小功能、新增了一些辅助型的API
- 补丁版本号：仅当解决了一些 bug 或 进行了一些局部优化时更新，如修复了某个函数的 bug、提升了某个函数的运行效率

语义版本的书写规则非常丰富，部分常见的书写方式：
| 符号  |         描述         |     示例      |                            示例描述                             |
| :---: | :------------------: | :-----------: | :-------------------------------------------------------------: |
|   >   |     大于某个版本     |    >1.2.1     |                          大于1.2.1版本                          |
|  >=   |   大于等于某个版本   |    >=1.2.1    |                        大于等于1.2.1版本                        |
|   <   |     小于某个版本     |    <1.2.1     |                          小于1.2.1版本                          |
|  <=   |   小于等于某个版本   |    <=1.2.1    |                        小于等于1.2.1版本                        |
|   -   |   介于两个版本之间   | 1.2.1 - 1.4.5 |                      介于1.2.1和1.4.5之间                       |
|   x   |    不固定的版本号    |     1.3.x     |              只要保证主版本号是1，次版本号是3即可               |
|   ~   |    补丁版本号可增    |    ~1.3.4     |        保证主版本号是1，次版本号是3，补丁版本号大于等于4        |
|   ^   | 此版本和补丁版本可增 |    ^1.3.4     | 保证主版本号是1，次版本号可以大于等于3，补丁版本号可以大于等于4 |
|   *   |       最新版本       |       *       |                        始终安装最新版本                         |

### package-lock.json 文件
npm 在安装包的时候，会自动生成一个 package-lock.json 文件，该文件记录了安装包时的确切依赖关系

当移植工程时，如果移植了 package-lock.json 文件，恢复安装时，会按照 package-lock.json 文件中的确切依赖进行安装，最大限度的避免了差异

### npm的差异版本处理
如果两个包依赖同一个包的不同版本，在 node_modules 目录中，不会使用扁平的目录结构，而会形成嵌套的目录，如下图：

```
├── node_modules
│   ├── a 
│   │   ├── node_modules
│   │   │   ├── c
│   │   │   |   |—— c包的文件
│   │   │── a包的文件     
│   ├── b 
│   │   ├── node_modules
│   │   │   ├── c
│   │   │   |   |—— c包的文件
│   │   │── b包的文件           
```

## 4、npm 脚本（npm scripts）
在开发的过程中，我们可能会反复使用很多的 CLI 命令，例如：

- 启动工程命令（node 或 一些第三方包提供的CLI命令）
- 部署工程命令（一些第三方包提供的CLI命令）
- 测试工程命令（一些第三方包提供的CLI命令）

这些命令纷繁复杂，根据第三方包的不同命令也会不一样，非常难以记忆

于是，npm 非常贴心的支持了脚本，只需要在 package.json 中配置 scripts 字段，即可配置各种脚本名称

之后，我们就可以运行简单的指令来完成各种操作了

运行方式是 ```npm run 脚本名称```

不仅如此，`npm` 还对某些常用的脚本名称进行了简化，下面的脚本名称是不需要使用`run`的：

- start
- stop
- test

一些细节：

- 脚本中可以省略 npx
- start脚本有默认值：node server.js

## 5、运行环境配置
一般有三种运行环境：
1. 开发环境
2. 生产环境
3. 测试环境

有时需要在 node 代码中根据不同的环境做出不同的处理，所以需要让 node 知道处于什么环境。

通常我们使用如下的处理方式：

node 中有一个全局变量 `global` (可以类比浏览器环境的`window`)，该变量是一个对象，有一个属性是`process`，该属性是一个对象，包含了当前运行`node`程序的计算机的很多信息，其中有一个信息是`env`，是一个对象，包含了计算机中所有的系统变量

通常，我们通过系统变量 `NODE_ENV` 的值，来判定`node`程序处于何种环境  
通常使用 `development`表示开发环境，`production`表示生产环境，`test`表示测试环境。
有两种方式设置 `NODE_ENV` 的值

1. 永久设置   
在**操作系统**的环境变量里面配置`NODE_ENV`
```js
// 读取
process.env.NODE_ENV
```
修改比较麻烦，通常使用临时设置。    
2. **临时设置**  
可以配置 scripts 脚本，在设置好了 NODE_ENV 后启动程序
```js
// package.json
"scripts": {
    "dev": "set NODE_ENV=development&&node index.js",
    "build": "set NODE_ENV=production&&node index.js",
    "test": "set NODE_ENV=test&&node index.js"
}
```
以上`set`为windows环境命令，mac 和 linux 有所不同，为了避免不同系统的设置方式的差异，可以使用第三方库 [cross-env](https://www.npmjs.com/package/cross-env) 对环境变量进行设置
>
```js
// package.json
"scripts": {
    "dev": "cross-env NODE_ENV=production node index.js",
    "build": "cross-env NODE_ENV=production node index.js",
    "deploy": "cross-env NODE_ENV=production node index.js"
  }
```
### 在node中读取package.json

有的时候，我们可能在 package.json 中配置一些自定义的字段，这些字段需要在 node 中读取

在 node 中，可以直接导入一个`json`格式的文件，它会自动将其转换为`js`对象
```js
var obj = require('./package.json')
// obj 就直接是一个json对象了，可以直接使用，如obj.scripts
```

## 6、其他npm命令

#### 安装

1. 精确安装最新版本

```shell
npm install --save-exact 包名 
npm install -E 包名
```

2. 安装指定版本

```shell
npm install 包名@版本号
```
3. 安装生产依赖

```shell
npm install --save 包名
npm install -S 包名
```
4. 安装开发依赖

```shell
npm install --save-dev 包名
npm install -D 包名
```

#### 查询

1. 查询包安装路径

```shell
npm root [-g]
```

2. 查看包信息

```shell
npm view 包名 [子信息]
## view aliases：v info show
```

3. 查询安装包

```shell
npm list [-g] [--depth=依赖深度]
## list aliases: ls  la  ll
```

#### 更新

1. 检查有哪些包需要更新

```shell
npm outdated
```

2. 更新包

```shell
npm update [-g] [包名]
## update 别名（aliases）：up、upgrade
```

#### 卸载包

```shell
npm uninstall [-g] 包名
## uninstall aliases: remove, rm, r, un, unlink
```

## 7、npm 配置

npm的配置会对其他命令产生或多或少的影响

安装好npm之后，最终会产生两个配置文件，一个是用户配置，一个是系统配置，当两个文件的配置项有冲突的时候，用户配置会覆盖系统配置

通常，我们不关心具体的配置文件，而只关心最终生效的配置

通过下面的命令可以查询目前生效的各种配置

```shell
npm config ls [-l] [--json]
```

另外，可以通过下面的命令操作配置

1. 获取某个配置项

```shell
npm config get 配置项
```

2. 设置某个配置项

```shell
npm config set 配置项=值
```

3. 移除某个配置项

```shell
npm config delete 配置项
```

## 8、发布包

#### 准备工作

1. 移除淘宝镜像源
2. 到npm官网注册一个账号，并完成邮箱认证
3. 本地使用 npm cli 进行登录
   1. 使用命令```npm login```登录
   2. 使用命令```npm whoami```查看当前登录的账号
   3. 使用命令```npm logout```注销
4. 创建工程根目录
5. 使用npm init进行初始化

#### 发布

1. 开发
2. 确定版本
3. 使用命令```npm publish```完成发布


## 9、开源协议

<img :src="$withBase('/img//license.png')" alt="" width="width: 70%;"/>

可以通过网站 http://choosealicense.online/appendix/ 选择协议，并复制协议内容