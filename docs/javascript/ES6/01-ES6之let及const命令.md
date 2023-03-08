ES6 新增了 ***let*** 和 ***const*** 命令，用来声明变量。
### 一. let命令
#### 1. let声明的变量只在它所在的代码块有效
```js
{
  let a = 10;
  var b = 1;
}

console.log(a) // ReferenceError: a is not defined.
console.log(b) // 1
```
#### 2. 同一个作用域不可使用 let 重复声明同一个变量
```js
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```
#### 3. 不存在变量提升
```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
#### 4. 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

// 存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
// 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```

### 二. const 命令
#### 1. const用来声明一个只读的常量。一旦声明，常量的值就不能改变
```js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.

// 这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
const foo;
// SyntaxError: Missing initializer in const declaration
```
#### 2.const的作用域与let命令相同：只在声明所在的块级作用域内有效
#### 3.const命令声明的常量也不存在变量提升，同样存在暂时性死区，只能在声明的位置后面使用

***注意：let和const均不绑定全局作用域***  
var 在全局环境声明变量，会在全局对象里新建一个属性； 
而 let，const 在全局环境声明变量，则不会在全局对象里新建一个属性。
```js
var foo = 'global'
let bar = 'global'

console.log(window.foo) // global
console.log(window.bar) // undefined
```
### 三.优秀实践
#### 1. let 取代 var
ES6 提出了两个新的声明变量的命令：let和const。其中，let完全可以取代var，因为两者语义相同，而且let没有副作用。
#### 2. 建议优先使用const
const优于let有几个原因: 
1. const可以提醒阅读程序的人，这个变量不应该改变；
2. 防止无意间修改变量值所导致的错误；
3. JavaScript 编译器会对const进行优化，有利于提高程序的运行效率。
```js
// bad
var a = 1, b = 2, c = 3;

// good
const a = 1;
const b = 2;
const c = 3;

// best
const [a, b, c] = [1, 2, 3];
```

***参考***  
[阮一峰 ES6](https://es6.ruanyifeng.com/#docs/let)
