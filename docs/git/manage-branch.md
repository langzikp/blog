# 企业级项目分支管理


## 为何要进行分支管理

- 分支之间互不影响，开发者可以独立开发，提高团队开发效率；  
- 不同功能的分支形成代码隔离，发布时从主分支进行代码发布，测试在测试分支，开发在开发分支，减少出错。



## 分支管理策略

- `master`分支

> 1. 主分支，用于部署生产环境的分支，是所有分支的主干，与当前线上代码保持统一
> 2. 由主开发人员、研发组leader管控
> 3. 不允许开发者在该分支上直接开发

- `dev`分支：
> 1. 开发分支，开发各类功能的合并分支，即当前最新功能的分支
> 2. 项目按功能模块创建dev-xxx分支(xxx 表示**功能**的简单描述)，各人员开发完成后提交到`dev`分支，主开发人员审核后，合并到dev分支
> 3. 一般预发布分支从此分支拉取创建
> 4. 不允许开发者在该分支上直接开发

- `feature`分支
> 1. 功能分支，一般为 开发独立功能/新技术研究尝试 时创建，以feature-xxx命名(xxx 表示**功能**的简单描述)
> 2. 从`master`/`dev`分支上面分出来的，开发完成，合并回去之后，删除该分支
> 3. 开发周期较长时，建议定期拉取代码，避免长时间不更新，提交时冲突过多

- `release`分支
> 1. 预发布分支，发布正式版本之前（即合并到`master`分支之前），用来进行测试，以`release-xxx`命名(xxx 表示**功能**的简单描述)
> 2. 从dev分支拉取代码创建，如出现`bug`，则从`release`分支拉取`fixbug`分支，进行修复
> 3. 很多公司忽略该分支，直接提交到`master`进行发布，可根据公司情况进行选择
> 4. 不允许开发者在该分支上开发

- `fixbug`分支
> 1. `bug`修复分支，修复完成之后，合并到`master`/`release`分支上，并删除该分支
> 2. 常规`bug`，以 `bugfix_xxx` 命名。xxx 表示 bug 的简单描述。
> 3. 紧急`bug`， 以 `hotfix_xxx` 命名。xxx 表示 bug 的简单描述

**tag标签**
> 1. 每次从`master`发布生产环境后，用tag标记一个版本，在master分支上的每个tag都对应历史的一个线上版本
> 2. tag命名：v主版本号.子版本号.阶段版本号.日期版本号_软件阶段（v1.0.0.051021_beta, v1.0.0.061021_release） 
 

**长期存在的分支只有master和dev分支，其他分支都是多个且临时的**  

## 分支权限

|    权限等级  &emsp; &emsp;  | 描述                                                                               | 赋权角色                       |
| :----:      |------------------------------------------------------------------------------------|--------------------------------|
| 创建者    | 拥有项目的最高权限，包括删除项目、管理成员、设置权限，一般由开发组leader来创建项目 | 开发组leader                   |
| 管理员    | 项目管理管理员除了删除项目和清空项目外，拥有其他的全部权限                         | 团队leader、运维管理人员       |
| 开发者    | 项目开发者拥有项目代码拉取、开发、提交等权限                                       | 开发人员                       |
| 观察者    | 项目观察者可以克隆代码，但是不能提交                                               | 品质保证（OA）、产品经理（PM） |
| 报告者    | 报告者只能创建issue、评论，不能读写代码                                            | 访客、测试                     |


## 注意点
- 合并分支时建议使用`–no-ff `，用于禁止快进式合并
- 临时分支合并后，应删除
- 分支合并不建议使用rebase

## 常用命令
- 创建并切换到分支feature-a
```shell
$ git checkout -b feature-a

# 相当于执行下面两条命令
$ git branch feature-a
$ git checkout feature-a
```


- 合并分支
```shell
$ git merge feature-a # 快速合并
$ git merge --no-ff feature-a # 非快速合并（建议使用）
```

- 暂存  
将git工作区的代码更改暂存，之后就可以执行git pull、git merge之类的命令

```shell
# 暂存
$ git stash save "暂存的备注"
# 查看
$ git stash list
# 恢复并移除
$ git stash pop
```

- 选择一个commit，合并进当前分支  
在master分支上修复的bug，想要合并到当前dev分支，把bug提交的修改“复制”到当前分支，避免重复劳动
```shell
$ git cherry-pick <commit> 
```

 
## 总结
**1. 长期存在的分支只有master和dev分支，其他分支都是多个且临时的**   
**2. 根据公司的产品规划及项目大小，制定合理的规范**  

*** 


**参考文档**  
[廖雪峰Git分支管理](https://www.liaoxuefeng.com/wiki/896043488029600/896954848507552)  
[企业级GIT分支管控方案](https://blog.csdn.net/qq_24950043/article/details/126190740)  
[图解如何管理Git分支](https://zhuanlan.zhihu.com/p/539701434)  
[Git代码管理及使用规范](https://blog.csdn.net/weixin_42092278/article/details/90448721)  
[git merge之--no-ff 的作用](https://blog.csdn.net/formylovetm/article/details/103294960)  
[git rebase详解](https://blog.csdn.net/weixin_42310154/article/details/119004977)