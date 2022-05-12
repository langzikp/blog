# ES6 语法
[[toc]]
## let/const和var的区别
在ES6之前，JS的scope只有两种，全局作用域 和 函数作用域，但是在ES6种出现了块级作用域，即使用let/const可以定义块级作用域。
let/const与var的主要不同有两个地方:
- let/const是使用区块作用域；var是使用函数作用域 
- 在let/const声明之前就访问对应的变量与常量，会抛出ReferenceError错误；但在var声明之前就访问对应的变量，则会得到undefined (var 存在变量提升)
- 与var关键字不同，使用let/const在全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）

## 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

## 箭头函数
语法: 函数名 = (参数...) => {函数体}
```js
// 普通函数
let sum = function(a, b) {
	return a + b;
}

// 箭头函数
let sum1 = (a, b) => {
	return a + b;
}

```
- 参数的简写规则:一个参数，可以不用括号;没有参数，或者多个参数，才需要使用括号。
```js
// 有效
let sum = (x) => {
	return x;
};
// 有效
let sum1 = x => {
	return x;
};
// 没有参数需要括号
let sum2 = () => {
	return 1;
};
// 有多个参数需要括号
let sum3 = (a, b) => {
	return a + b;
};
```
- 函数体的大括号简写规则:一个参数，可以不用括号;没有参数，或者多个参数，才需要使用括号。
 1. 省略大括号箭头后面就只能有一行代码；
 2. 省略大括号会隐式返回这行代码的值；
 3. 省略大括号不能写return。
```js
// 有效
let sum = (a, b) => {
	return a + b;
};
// 有效
let sum1 = (a, b) => a + b; // 相当于 return a + b;
// 返回对象，因`{}`包括会默认为函数体，此时使用`({})`包裹
let sum2 = (a, b) => ({a, b}); // 相当于 return a + b;
// 无效的写法
let sum3 = (a, b) => return a + b;
```
**注意**
- 箭头函数不能使用arguments
- 箭头函数中没`this`,其`this`·`是继承父执行上下文里面的`this`

## promise和async/await
### promise
`promise.then()`返回新的`promise`的结果状态由 `then（）`指定的回调函数执行的结果决定  
- 如果抛出异常，新promise变为rejected，reason为抛出的 异常
- 如果返回值是非promise的任意值，新promise变为resolve，value为返回 的值
- 如果返回的是另一个新的promise，此promise的结果会成为新的promise的结果
  
### async/await
**async** 函数作用就是返回一个`Promise` 对象  
- 如果 async 关键字函数返回的不是promise，会自动用Promise.resolve() 包装
- 如果 async 关键字函数显式的返回 promise，以你返回的promise为准  

以下情况`async函数`状态的被判断失败`reject`  
1. 内部抛出一个错误`throw new Error`，错误对象会被`catch`捕获。
2. 返回`reject`状态`return Promise.reject('执行失败')`，`reject`的参数会被`catch`方法捕获
3. 内部含有直接使用并且未声明的变量或者函数
其余返回结果都是判定`resolved`成功执行。 

***

**await** (async wait，异步等待)作用就是等待一个 `async 函数`/`Promise 对象`/`任意表达式` **结果的返回值**。await只能在async函数中出现。
```js
// 语法
[返回值] = await 表达式;
```
- 表达式是primise，返回值为Promise 对象的结果，如果promise是**reject状态的Promise对象**，
     则reject的参数会被catch方法捕获，且会中断执行整个async函数。
- 表达式不是 Promise 对象，就直接返回对应的值
:::tip
**await**，阻塞的是除**await当前行**之后的代码  
遇到**await**后 等待表达式的结果
- await命令后面是一个 Promise 对象，await 会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果，再执行async后面的代码
- await后面不是 Promise 对象，await也会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果，再执行async后面的代码
:::

**async函数必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变。**

:::details 执行顺序示例
await后，阻塞的是除**await当前行**之后的代码  
```js
    async function async1() {
        console.log( 'async1 start' )
        await async2()
        console.log( 'async1 end' )
    }
    
    async function async2() {
        console.log( 'async2' )
    }
    
    console.log( 'script start' )
    
    setTimeout( function () {
        console.log( 'setTimeout' )
    }, 0 )
    
    async1();
    
    new Promise( function ( resolve ) {
        console.log( 'promise1' )
        resolve();
    } ).then( function () {
        console.log( 'promise2' )
    } )
    
    console.log( 'script end' )

```
执行顺序：

1. 同步代码 console.log( ‘script start’ )
2. 将 setTimeout 放入宏任务队列
3. 执行 async1() 函数 console.log( ‘async1 start’ )
4. 分析下 await async2()  
    1. 先得到 await 右侧表达式的结果. 执行 async2() ，打印同步代码 console.log( ‘async2’ )，并且 return Promise.resolve(undefined)；  
    2. await 后，中断async函数，先执行async外的同步代码
5. 被阻塞后，执行async之外的代码,执行 new Promise()， console.log( ‘promise1’ )
6. promise.then()，发现这个是微任务，所以暂时不打印，只是推入当前宏任务的微任务队列中。
7. 打印同步代码 console.log( ‘script end’ )
8. 执行完同步代码后，执行 await Promise.resolve(undefined) 了，类似于Promise.resolve(undefined) .then((undefined) => { })
9. 微任务队列，先进先出原则：
  - 任务1， console.log( ‘promise2’ )
  - 任务2 ，Promise.resolve(undefined)，语句结束后，后面的代码不再被阻塞，所以打印 console.log( ‘async1 end’ )
10. 宏任务队列，console.log(‘setTimeout’)
:::