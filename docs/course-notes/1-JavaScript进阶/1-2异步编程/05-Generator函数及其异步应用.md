# Generator函数及其异步应用
Generator 函数是 ES6 提供的一种异步编程解决方案。  

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。  

形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
```

## 协程
协程是一种基于线程之上，但又比线程更加轻量级的存在，这种由程序员自己写程序来管理的轻量级线程叫做**用户空间线程**，具有对内核来说**不可见**的特性。  

正如一个进程可以拥有多个线程一样，一个线程也可以拥有多个协程。  

[协程](https://es6.ruanyifeng.com/#docs/generator-async#Generator-%E5%87%BD%E6%95%B0)

## 协程的Generator函数实现 
Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。  
整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。
```js
function* gen(x) {
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }
```

[协程的Generator函数实现](https://es6.ruanyifeng.com/#docs/generator-async#%E5%8D%8F%E7%A8%8B%E7%9A%84-Generator-%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0)

## Generator的数据交换和错误处理
Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。  

[Generator的数据交换和错误处理](https://es6.ruanyifeng.com/#docs/generator-async#Generator-%E5%87%BD%E6%95%B0%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E5%92%8C%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86)


语法参考：  
[generator API](https://es6.ruanyifeng.com/#docs/generator)
