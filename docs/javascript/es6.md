# ES6 语法
## let/const和var的区别
在ES6之前，JS的scope只有两种，全局作用域 和 函数作用域，但是在ES6种出现了块级作用域，即使用let/const可以定义块级作用域。
那么在ES6的新特性中，最容易看到TDZ作用的就是使用let/const的使用上面。
let/const与var的主要不同有两个地方:
- let/const是使用区块作用域；var是使用函数作用域 
- 在let/const声明之前就访问对应的变量与常量，会抛出ReferenceError错误；但在var声明之前就访问对应的变量，则会得到undefined (var 存在变量提升)


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