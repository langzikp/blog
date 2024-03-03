# 深入理解Promise
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。   
从语法上讲，promise是一个对象，从它可以获取异步操作的消息；  
从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。   
promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。  
创造promise实例后，它会立即执行。

## 传统的回调有五大信任问题
- 调用回调过早
- 调用回调过晚（或没有被调用）
- 调用回调次数过少或过多
- 未能传递所需的环境和参数
- 吞掉可能出现的错误和异常

[promise解决信任问题](https://zhuanlan.zhihu.com/p/29235579)

## `Promise`对象特点
- 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。


## promise 缺点
- 首先，无法取消promise, 一旦新建它就会立即执行，无法中途取消
- 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
- 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

语法参考：[Promise API](https://es6.ruanyifeng.com/#docs/promise)

## 链式调用*

1. then方法必定会返回一个新的Promise

   可理解为`后续处理也是一个任务`

2. 新任务的状态取决于后续处理：

   - **若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据**

   - **若有后续处理但还未执行，新任务挂起。**
   - **若后续处理执行了，则根据后续处理的情况确定新任务的状态**
     - 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
     - 后续处理执行有错，新任务的状态为失败，数据为异常对象
     - 后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 如果then函数中不是一个函数，会被替换成 `(x)=>x` 的形式
// 上面的代码就相当于
Promise.resolve(1).then(function (x) { 
    return x; 
}).then(function (x) { 
    return x; 
}).then(console.log); 
// 就相当于
Promise.resolve(1).then(console.log); 
```

## 并发任务控制
```js
function timeout(time){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve()
        }, time)
    })
}
// 根据以下输出，完成任务调度类
class SuperTask{
    constructor(parallelCount = 2){
        // 最大任务并行数
        this.parallelCount = parallelCount;
        this.tasks = [];
        this.runningCount = 0;
    }
    add(task){
        return new Promise((resolve, reject) =>{
            this.tasks.push({task, resolve, reject});
            this._run();
        })
    }
    _run(){
        while(this.runningCount < this.parallelCount && this.tasks.length){
            const {task, resolve, reject} = this.tasks.shift();
            this.runningCount++;
            Promise.resolve(task()).then(resolve, reject).finally(() =>{
                this.runningCount--;
                this._run();
            });
        }
    }

}

const superTask = new SuperTask();

function addTask(time, name){
    superTask.add(() => timeout(time)).then(() => {
        console.log(`任务${name}完成`);
    })
}

addTask(10000, 1); // 10000ms后输出： 任务1完成
addTask(5000, 2); // 5000ms后输出： 任务2完成
addTask(3000, 3); // 8000ms后输出： 任务3完成
addTask(4000, 4); // 12000ms后输出： 任务4完成
addTask(5000, 5); // 15000ms后输出： 任务5完成
```