# 05-compose函数和pipe函数

## 定义
- compose函数指的是对要**嵌套执行**的函数进行平铺，**嵌套执行**指的是一个函数的返回结果作为另一个函数的执行参数。核心思想是专注于函数执行过程，隔离数据的影响。  

- compose函数是从右向左去实现的数据执行流，而从左向右的数据执行流就是pipe函数。

```js
function addTwo(num) {
    return num+2;
}
function multiThree(num) {
    return num*3;
}
function addOne(num) {
    return num+1;
}

// compose 从右向左实现
function compose(){
    var args = Array.prototype.slice.apply(arguments);
    return function (num) {
        return args.reduceRight((res,cb) => cb(res), num);
    }
}
//简写 compose
const compose1 = (...args)=> num => args.reduceRight((res, cb) => cb(res), num);

// pipe 从左向右实现
function pipe(){
    var args = Array.prototype.slice.apply(arguments);
    return function (num) {
        return args.reduce((res,cb)=>cb(res), num);
    }
}
//简写 pipe
const pipe1 = (...args)=> num => args.reduce((res, cb) => cb(res), num);

console.log(compose(addTwo, multiThree, addOne)(5)) // 20
console.log(compose1(addTwo, multiThree, addOne)(5)) // 20
console.log(pipe(addTwo, multiThree, addOne)(5)) // 22
console.log(pipe1(addTwo, multiThree, addOne)(5)) // 22




```

## 链式调用
可以使用promise来组成一个链式调用
```js
Promise.resolve(5).then(addOne).then(multiThree).then(addTwo).then(res=>{
    console.log(res);
});
```
