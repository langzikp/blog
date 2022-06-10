# 09-手写Promise 上

## promise 高频面试题

### 1.Promise 解决了什么问题？
- 解决了回调地狱问题，提高了代码的可读性
- promise可以支持多个并发的请求，获取并发请求中的数据(`Promise.all`)
- 解决了信任问题：
[Promise面试问题](https://zhuanlan.zhihu.com/p/29235579)


### 2.手写一个符合Promise/A+ 规范的Promise？

### 3.Promise在事件循环过程中的执行过程是怎样的？

### 4.Promise 有什么缺陷，可以如何解决
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消。

- 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

- 当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。