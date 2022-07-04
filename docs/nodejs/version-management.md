# Node.js多版本管理器

## GNVM
GNVM 是一个简单的 Windows 下 Node.js 多版本管理器，类似的 nvm nvmw nodist 。

## 安装
- 不存在 Node.js 环境

下载并解压缩 gnvm.exe 保存到任意文件夹，并将此文件夹加入到环境变量 Path 。

- 存在 Node.js 环境

下载并解压缩 gnvm.exe 保存到 Node.js 所在的文件夹。

## 验证
在 cmd 下，输入 gnvm version，输出 版本说明 则配置成功。


## 常用命令
**使用管理员权限打开cmd**

### 查看/安装/使用/卸载
```shell
# 查看已安装的版本
$ gnvm ls
Notice: gnvm.exe root is D:\nodejs\\
v10.15.1
v12.9.1
v16.15.0 -- global

# 切换到本地已安装的版本
$ gnvm use 12.9.1
Set success, global Node.js version is 12.9.1.

# 下载/安装任意已知版本的 Node.js
$ gnvm install 18.2.0 
Start download Node.js versions [18.2.0].
18.2.0: 100% [==================================================>] 16s
--------
End download.

# 卸载已安装的版本
$ gnvm uninstall 10.0.0
Node.js version 10.0.0 uninstall success.
```

### 设置/查看
```shell
# 查看本地版本及远程最新版本
$ gnvm node-version
Node.js global version is 12.9.1.
Waring: latest Node.js version is unknown, please use gnvm install latest -g or gnvm update latest. See 'gnvm help node-version'.
Notice: remote Node.js latest version is 18.4.0 from http://nodejs.org/dist/.

# 查看当前的node镜像源
$ gnvm config registry
gnvm config registry is http://nodejs.org/dist/

# 切换node的下载镜像源（内建了 DEFAULT 和 TAOBAO 两个库）
$ gnvm config registry TAOBAO
Set success, registry new value is http://npm.taobao.org/mirrors/node/

# 查询 Node.js 版本
#可以使用关键字 * 或者 正则表达式 /regxp/，例如： gnvm search 5.*.* 或者 gnvm search /.10./ 。
$ gnvm search 5.*.*
```

### 安装npm
```shell
# 安装当前 Node.js 版本对应的 NPM 版本。
$ gnvm npm global
Notice: local    npm version is 8.5.5
Notice: remote   npm version is 6.10.2
Notice: download 6.10.2 version [Y/n]? y
Start download new npm version v6.10.2.zip
v6.10.2.zip: 100% [==================================================>] 3s
Start unzip and install v6.10.2.zip zip file, please wait.
Set success, current npm version is 6.10.2.
```

## 术语
- global 当前使用的 Node.js 。
- latest 稳定版本的 Node.js 

[GNVM 下载/详解](https://github.com/kenshin/gnvm)