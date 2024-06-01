# Node.js多版本管理器

## NVM
nvm 全称为 node version manger，顾名思义就是管理 node 版本的一个工具，通过这个工具，我们可以在一台计算机上安装多个版本的 node，并且随时进行无缝的切换。

在实际的开发中，可能会出现多个项目分别使用的是不同的node版本，在这种场景下，管理不同的node版本就显得尤为重要。


### Windows系统下安装 nvm
**1.  卸载原本的 node.js**

如果之前有安装过 node.js，那么首先我们需要卸载掉之前的安装



**2. 下载安装nvm**  
- 方式一：Github最新版下载地址：[nvm](https://github.com/coreybutler/nvm-windows/releases)  
下载nvm-setup.zip后，直接安装

- 方式二：百度云盘下载:[链接]( https://pan.baidu.com/s/1e3wjTxL3oQpnD6vbinpHeg)  
提取码: lzkp


**3. 修改nvm源**

如果直接用 nvm 命令下载 node 的话，因为源在国外，所以会导致下载失败，所以我们最好修改 nvm 的源

打开 nvm 的下载路径，如果你是一路 next 的，那么一般就在：C:\Users\你现在用的用户名\AppData\Roaming\nvm

打开 setting.txt 文件，在末尾写入：

```shell
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

**4. nvm常用命令**

```shell
# 查看版本，确认是否安装成功
nvm version

# 查看所有可用的 node 版本
 nvm list available

# 查看当前安装和使用的 node 版本
nvm list

# 安装某个 node 版本
nvm install 版本号

# 切换 node 版本
nvm use 版本号

# 设置默认版本
nvm alias v12.22.12
```

**5. 配置 npm 源**

安装 node 之后，一般对应的 npm 也会被安装好，但是默认 npm 的源是指向 npm 官网的，这就导致我们在下载包的时候会很慢。
我们需要修改 npm 的源

```js
npm config set registry=https://registry.npm.taobao.org
npm config get registry
```


### Mac系统下安装nvm
**1.  卸载原本的 node.js（重要）**
[卸载参考](https://blog.csdn.net/huangpb123/article/details/120248002)



**2. 下载安装nvm**

nvm github 地址：[github地址](https://github.com/nvm-sh/nvm)

放入根目录（$HOME）下

之后看你的终端是什么，比如现在 mac 推荐的终端工具是 zsh，我们输入 vi ~/.zshrc 打开 zsh 终端的配置文件，添加如下的代码来对 nvm 进行配置。

> 输入 vi ~/.zshrc 命令之后，会打开 zsh 终端的配置文件，输入 i 进入 insert 编辑模式，我们可以进行编辑操作，编辑完成之后先按 ESC 推出编辑模式，然后输入 :wq 保存刚才的编辑并退出

这里的配置主要包含两个方面，一个是 nvm 路径的配置，另一个是镜像的配置

> 如果你使用的是 bash 终端，那么对应的就是执行 vi ~/.bashrc 打开 bash 终端的配置文件，添加如下的配置代码

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node # 修改镜像
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
```

配置完成后，通过命令 source ~/.zshrc 来使刚才的配置文件生效。

> 同样，如果你使用的是 bash 终端，那么应该输入 source ~/.bashrc 来使刚才的配置生效



**3. nvm常用命令**

```shell
# 查看当前安装和使用的 node 版本
nvm list

# 安装某个 node 版本
nvm install 版本号

# 切换 node 版本
nvm use 版本号

# 设置默认版本
nvm alias default v12.22.12
```



**4. 配置 npm 源**

安装 node 之后，一般对应的 npm 也会被安装好，但是默认 npm 的源是指向 npm 官网的，这就导致我们在下载包的时候会很慢。

我们需要修改 npm 的源

```js
npm config set registry=https://registry.npm.taobao.org
npm config get registry
```


## GNVM
GNVM 也是一个简单的 Windows 下 Node.js 多版本管理器，类似的 nvm nvmw nodist 。

#### 安装
- 不存在 Node.js 环境

下载并解压缩 gnvm.exe 保存到任意文件夹，并将此文件夹加入到环境变量 Path 。

- 存在 Node.js 环境

下载并解压缩 gnvm.exe 保存到 Node.js 所在的文件夹。

#### 验证
在 cmd 下，输入 gnvm version，输出 版本说明 则配置成功。


#### 常用命令
**使用管理员权限打开cmd**

#### 查看/安装/使用/卸载
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

#### 设置/查看
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

#### 安装npm
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

#### 术语
- global 当前使用的 Node.js 。
- latest 稳定版本的 Node.js 

[GNVM 下载/详解](https://github.com/kenshin/gnvm)