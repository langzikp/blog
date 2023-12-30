# 08-深入理解Async和Await
ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
async 函数是什么？一句话，它就是 Generator 函数的语法糖。

### 注意
 **任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。**


::: details 面试题
```js
async function async1() {
    console.log('1');
    console.log(await async2()); 
    console.log('2');
}
async function async2() {
    console.log('3');
    return '0';
}
setTimeout(function () { 
    console.log('4'); 
    new Promise(function (resolve) {
            console.log('5');
            resolve();
    }).then(function () { 
        console.log('6') 
    }) 
}) 
async1(); 
new Promise(function (resolve) {
        console.log('7');
        resolve();  
}).then(function () { 
    console.log('8'); 
}); 
console.log('9');

//执行流程 1 3 7 9 0 2 8 4 5 6
```
:::

::: details 面试题
```js
var a;
var b = new Promise((resolve, reject) => {
  console.log('promise1');
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(() => {
    console.log('promise2');
  })
  .then(() => {
    console.log('promise3');
  })
  .then(() => {
    console.log('promise4');
  });

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a;
  resolve(true);
  console.log('after2');
});

console.log('end');

```
:::

[语法](https://es6.ruanyifeng.com/#docs/async)