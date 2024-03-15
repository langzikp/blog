# JS基础

JS是一门 命令式编程语言，和其他命令式编程语言一样，它的本质是处理数据。  
JS 提供了三种方式来表达一个数据：
- 变量 
- 字面量
- 表达式   
**程序中任何需要数据的地方，都可以使用上面任意一种数据表达。**

## 标识符
在JS中所有的我们可以自主命名的都可以称之为 标识符。例如：变量名、函数名、属性名都属于标识符。  

标识符必须符合以下规则：
- 允许数字、字母、下划线、\$符号
- 不得以数字开头，用字母，下划线 _，$开头都没问题
- 不能和保留关键字冲突

## 转义符
JS中的转义字符是反斜杠（`\`）
| 转义符 | 含义       |
|--------|------------|
| `\'`   | 普通英文单引号 |
| `\"`   | 普通英文双引号 |
| `\r`   | 回车 |
| `\n`   | 换行 |
| `\t`   | tab 缩进 |
| `\\`   | 反斜杠 |

> 小技巧：常用`\r\n`表示换行

## 数据类型
原始类型：Number、String、Boolean、Null、Undefined、Symbol（ES6新增）、BigIng（ES6新增）
引用类型：Object（包含普通对象、数组、函数）

## 对象的原始写法
对象的**所有属性名都是字符串**，因此使用单引号或双引号包裹起来

```js
var obj = {
  'name': '张三',
  'age': 30,
  'graduate date': '2007-7-1',
  'home address': {
    'province': '黑龙江',
    'city': 'city'
  }
};
```
为了书写的方便，当对象的属性名是**纯数字**或**符合标识符规范**时，可以**省略引号**


读取对象属性时，使用`[]`，把要读取的属性名传递到中括号中  

```js
obj['name'] // 读取obj的name属性
obj['home address'] // 读取obj的home address属性
obj['home address']['province'] // 这是啥意思？
```

若属性**符合标识符规范**，可以使用`.`符号连接属性名

```js
obj.name // 读取obj的name属性
obj.age // 读取obj的age属性
obj['home address'].province // 请自行脑补
```

数组，用于表达多个同种类的数据，**它的本质就是一个对象**

```js
var arr = ['张一', '张二', '张三']
// 数组的对象结构
console.log(arr)
{
   '0': '张一',
   '1': '张二',
   '2': '张三',
   'length': 3
}

// 读取数组，本质就是读取对象属性
arr[0] === arr['0']
```

## 运算符

#### 算术（数学）运算

支持：加(+)、减(-)、乘(*)、除(/)、求余(%)、 自增(++) 、 自减(--)

值得注意的是，+和-可以放到单个数据的前面，表示正负。

算术运算的表达式一定返回数字，可以利用其特点做类型转换，参考[类型的隐式转换](#类型的隐式转换)

**运算规则**
算数运算符左右两端必须是原始类型，如果不是则先转成原始类型，再按下面规则进行
- 特殊情况：x + y;  x和y有一个是字符串，转换为字符串，然后拼接
- 特殊情况：NaN 和任何类型运算得到的还是NaN
- 其他情况： 转换为数字，然后运算

```js
null + undefined // NaN
[] + {} // '[object Object]'
```


#### 赋值运算

涉及的运算符：`=` `+=` `*=` `/=` `-=` `%=`。

其中，`a += xxx`，等效于`a = a + (xxx)`，其他类似

> 赋值表达式始终返回赋值结果，我们可以利用该特点完成连续赋值
> ```js
> // 将 3 同时赋值给 a、b
> a = b = 3;
> ```

#### 比较运算

涉及的运算符：`==` `===` `!=` `!==` `>` `>=` `<` `<=`

> 在实际开发中，没有任何理由使用`==`和`!=`，你可以当做这两个运算符并不存在。
> 应该始终使用`===`和`!==`来比较相等和不相等

> 比较运算始终返回`boolean`，我们可以利用这一点来完成某些赋值
> ```js
> // 啰嗦的代码
> if(sex === '男'){
>   user.isMale = true;
> }
> else{
>   user.isMale = false;
> }
> 
> // 简洁优雅的代码
> user.isMale = sex === '男'
> ```

**运算规则**
-  `> < >= <=` 左右两端必须是原始类型，如果不是则先转成原始类型，再按下面规则进行
   - 特殊情况：两端全是字符串，比较字典顺序
   - 特殊情况：两端存在`NaN`，则一定是`false`
   - 其他情况：转换为数字，然后比较

- `===`  
  - 类型和值必须都相同
  - 特殊情况： 两端存在NaN，则一定是false

- `==`
  - 两端类型相同，比较值
  - 两端都是原始类型，转换成数字比较
  - 一端是原始类型，一端是对象类型，把对象转换成原始类型后比较
  - 特殊情况：`undefined`和`null`只有与自身比较，或者互相比较时,才会返回`true`，与其他比较返回`false`
  - 特殊情况：两端存在NaN，一定为`false`

- `!= !==` : 对相等取反

#### 逻辑运算

逻辑运算会涉及到[布尔判定](#布尔判定)

运算符：`!`

对后面的数据取反，表达式一定返回boolean。

可以利用其特点做类型转换，参考[类型的隐式转换](#类型的隐式转换)

运算符：`&&`

并且，真真为真，其他为假，具有短路规则。

表达式返回**最后一个判定的数据**

> 在实际的开发中，我们可以利用短路规则简化代码
> ```js
> // 实现功能，如果exp有值（判定为真），就输出ok
> 
> // 啰嗦的代码
> if(exp){
>   console.log(exp);
> }
> 
> // 简洁的代码
> exp && console.log(exp)
> ```

运算符：`||`

或者，假假为假，其他为真，具有短路规则。

表达式返回**最后一个判定的数据**

> 小贴士
> 在实际的开发中，我们可以利用短路规则简化代码
> ```js
> // 实现功能，如果exp有值，就把它的值赋值给n，如果没有值，就给n赋值为默认值 1
> 
> // 啰嗦的代码
> if(exp){
>   n = exp;
> }
> else{
>   n = 1;
> }
> 
> // 简洁的代码
> n = exp || 1;
> ```

运算符：`? :`，格式`a ? b : c`

三目运算，判定a，为真时表达式返回b，否则返回c

> 小贴士
> 三目运算通常用于替代一些简单的if结构
> ```js
> // 如果exp为真，则把1赋值给n，否则，把2赋值给n
> // 啰嗦的代码
> if(exp){
>   n = 1;
> }
> else{
>   n = 2;
> }
> 
> // 更简洁的代码
> n = exp ? 1 : 2;
> ```

**运算规则**
-  `&& || ! ?:` 先转换为boolean，然后按下面规则进行运算
  - x && y:  x 为`false`，返回 x; x为`true`，返回 y
  - x || y:  x 为`false`，返回 y; x为`true`，返回 x
  


## 布尔判定

所有需要判断真假的地方都会使用下面的规则

| 数据 | 判定  |
|------|-------|
|`false` `null` `undefined` `0` `NaN` `''`| false |
|剩余所有数据| true |


## 类型的隐式转换

每个运算符都有自己期望的数据，比如`*`期望两端都是数字

一旦数据不符合运算符的期望，js就会悄悄的对数据进行类型转换，把它转换成期望的值后进行运算。

值得注意的是，这种转换是 _临时_ 的，并不会对原数据造成影响

> 小贴士
> 在实际的开发中，我们可以利用类型的隐式转换完成以下功能：
> ```js
> var n = +a; // 不管a是啥，都会被转换成数字，保存到n中
> var s = a + ''; // 不管a是啥，都会被转换成字符串，保存到s中
> var b = !!a; // 不管a是啥，都会被转换成boolean，保存到b中
> ``` 


### 原始转数字
| 数据 | 转数字  |
|------|-------|
| true |1|
| false |0|
| null |0|
| undefined|NaN|
| string |空字符串（含空白字符）：0 ；去掉引号，不是数字就是NaN|

### 所有转Boolean
| 数据 | 转Boolean  |
|------|-------|
| null |false|
| undefined|false|
|number| 0：false; 其他：true|
| string |空字符串：false ；其他（含空白字符）：true|
|对象|true|

### 原始类型转字符串
| 数据 | 转Boolean  |
|------|-------|
| null |'null'|
| undefined|'undefined'|
|number| '数字'|
|boolean| true =》 'true'；false =》'false'|

### 对象转原始
- 调用`valueOf`方法, 返回的还是对象，重新调用`toString()`方法，得到的还是对象，则报错。
- 对象转换为数字，字符串，布尔，则先按对象转原始，再按上面的相应规则进行转换

### 测试
```js
// 调整a，使得下面的表达式返回true
var a = {}

console.log(a == 1 && a == 2 && a == 3)
```

::: details 答案
```js
var a = {
  n: 0,
  valueOf: function(){
    return ++this.n
  }
}

console.log(a == 1 && a == 2 && a == 3) // true
```
:::



## 执行上下文和执行栈
- JavaScript执行上下文是一个在JavaScript引擎内部的数据结构，它用来定义一个特定代码的执行环境。
- 当 JS 引擎解析到可执行代码片段（通常是函数调用阶段）的时候，就会先做一些执行前的准备工作，这个 “准备工作”，就叫做 "执行上下文(execution context 简称 EC)" 或者也可以叫做执行环境。
- JavaScript代码运行时，它总是在一个执行上下文中运行。执行任意一句代码，都需要一个执行时的环境。

> **执行上下文简单理解** ：就是一个隐形的对象，这个对象上记录了程序当前执行所依赖的环境因素

#### 执行上下文的分类

- **全局执行上下文**  
这是默认或者说是最基础的执行上下文，一个程序中只会存在一个全局上下文，它在整个 javascript脚本的生命周期内都会存在于执行堆栈的最底部不会被栈弹出销毁。全局上下文会生成一个全局对象（以浏览器环境为例，这个全局对象是window，并且将 this 值绑定到这个全局对象上。

- **函数执行上下文** 
每当一个函数被调用时，都会创建一个新的函数执行上下文（不管这个函数是不是被重复调用的）

- eval执行上下文
- 模块执行上下文

> javascript运行时首先会进入全局环境，对应就会生成全局上下文。
>
> 代码中都会存在函数，那么调用函数，就会创建一个新的执行上下文，进入函数执行环境。


#### 执行栈
执行上下文栈（Execution Context Stack）是JavaScript引擎内部的一个数据结构，用于存储当前正在执行的代码的执行上下文。

当JavaScript代码开始执行时，首先会创建一个全局执行上下文并压入执行上下文栈。当函数被调用时，会创建一个新的函数执行上下文，并将其压入执行上下文栈。当eval函数被调用时，也会创建一个新的执行上下文并压入执行上下文栈。

执行上下文栈的作用是确保代码在正确的环境中执行，并且能够访问到正确的变量和函数。当代码执行时，JavaScript引擎会根据当前执行上下文来解析变量和函数，并且根据作用域链来查找变量和函数的定义。

当一个执行上下文完成执行时，它会被从执行上下文栈中弹出，并且控制权会返回到上一个执行上下文。这样，JavaScript引擎就可以在正确的环境中继续执行代码。

总之，**执行上下文栈**是JavaScript引擎内部的一个关键数据结构，用于管理代码的执行环境和作用域链。

```javascript
function fn3(){
  return "hello world"
}
function fn2(){
  fn3()
}
function fn1(){
  fn2();
}
fn1();
```

伪代码：

```javascript
// 创建执行栈
const ECStack = [];

ECStack.push(全局执行上下文)

ECStack.push(fn1执行上下文)

ECStack.push(fn2执行上下文)

// 执行fn3之后，没有其他内容了，开始出栈
ECStack.push(fn3执行上下文)

// fn3出栈
ECStack.pop();

// fn2出栈
ECStack.pop();

// fn1出栈
ECStack.pop();

```

::: details 面试题
**面试题：**

```javascript
// 写法一：
function foo(){
  function bar(){
    return "I am bar";
  }
  return bar();
}

foo();

// 写法二：
function foo(){
  function bar(){
    return "I am bar";
  }
  return bar;
}

foo()();
```

```js
写法一：
ECStack.push(foo的上下文)
ECStack.push(bar的上下文)

ECStack.pop() // bar出栈
ECStack.pop() // foo出栈

写法二：
ECStack.push(foo的上下文)
ECStack.pop() // foo出栈
ECStack.push(bar的上下文)
ECStack.pop() // bar出栈
```
:::

## 执行上下文确定的内容
1. **this指向**
- 直接调用函数，this指向全局对象 
- 在函数外，this指向全局对象 
- 通过对象调用或new一个函数，this指向调用的对象或新对象

2. **VO 变量对象**  

Variable Object：VO 中记录了该环境中所有声明的参数、变量和函数

Global Object: GO，全局执行上下文中的VO

Active Object：AO，当前正在执行的上下文中的VO

- 确定所有形参值以及特殊变量arguments 
- 确定函数中通过var声明的变量，将它们的值设置为undefined，如果VO中已有该名称，则直接忽略。 
- 确定函数中通过字面量声明的函数，将它们的值设置为指向函数对象，如果VO中已存在该名称，则覆盖。

当一个上下文中的代码执行的时候，如果上下文中不存在某个属性，则会从之前的上下文寻找。

**面试题**

```javascript
function foo(a){
  var b = 2;
  function c(){}
  var d = function(){}
  b = 3;
}

foo(1);
```

执行完分析阶段之后，函数foo执行上下文身上AO是什么情况：

```js
AO = {
  arguments:{
    0:1,
    length:1
  }
  a:1
  b:undefined
  c:function c(){}
	d:undefined
}
```

最终当foo函数开始执行的时候，将上面AO对象的初始状态进行处理，然后根据代码的状况发生对象状态的变化


```js
AO = {
  arguments:{
    0:1,
    length:1
  }
  a:1
  b:3
  c:function c(){}
	d:function d(){}
}
```
::: details 面试题

```js
// 面试题1：
function A(a,b){
  /*
  AO = {
    arguments={
      0:1
      1:2
      length:2
    }
    a:1
    b:function b(){}
  }
  */
  console.log(a,b)
  var b = 123;
	console.log(a,b);
	function b(){
		var d = 123;
  }
}

A(1,2)
```

```js
AO = {
  arguments={
  	0:1
  	1:2
  	length:2
	}
	a:1
	b:function b(){}
}
```


```javascript
// 面试题2：
var g = 123;
var a = 2;
function A(a,b){
  console.log(a,b,g);
	var b = 123;
  function b(){}
  var a = function(){}
  console.log(a,b);
}
var g = 456;
A(1,2);
```


```js
// 面试题3：
var foo = 1;
function bar(){
  /*
  AO = {
    argument:{}
    foo:undefined
  }
  */
  console.log(foo);
  if(!foo){
    var foo = 10;
  }
  console.log(foo);
}
bar();
```

```javascript
// 面试题4：
var a = 1;
function b(){
  console.log(a);
  a = 10;
  return;
  function a(){}
}
b();
console.log(a);
```


```js
// 面试题5：
console.log(foo); //function c
var foo = "A";
console.log(foo); // A
var foo = function(){
  console.log("B");
}
console.log(foo); // function B
foo(); // B
function foo(){
  console.log("C")
}
console.log(foo); // function B
foo(); // B

```

```javascript
// 面试题6：
var foo = 1;
function bar(a){
  var a1 = a;
  var a = foo;
  function a(){
    console.log(a);
  }
  a1();
}
bar(3);
```
:::

## 数据的作用域
1. JS有两种作用域：全局作用域和函数作用域。（es6新增了块级作用域）
   - 内部的作用域能访问外部，反之不行。访问时从内向外依次查找。
   - 如果在内部的作用域中访问了外部，则会产生闭包。
   - 内部作用域能访问的外部，**取决于函数定义的位置，和调用无关**
2. 作用域内定义的变量、函数声明会提升到作用域顶部

## 作用域链
1. VO中包含一个额外的属性，该属性指向创建该VO的函数本身，  
2. 每个函数在创建时，会有一个隐藏属性`[[scope]]`，它指向创建该函数时的AO，  
3. 当访问一个变量时，会先查找自身VO中是否存在，如果不存在，则依次查找[[scope]]属性。

```js
<script>
  var g = 0

  function A(){
    var a = 1;

    function B(){
      var b =2;
      var C = function() {
        var c = 3;
        console.log(c, b, a, g)
      }

      C()
    }
    
    B()

  }
  A()

  // 形成的原型链如下图
</scrpt>

```
<img :src="$withBase('/img/js/14.png')">

> 某些浏览器会优化作用域链，函数的[[scope]]中仅保留需要用到的数据。

## 全局对象
无论是浏览器环境，还是node环境，都会提供一个全局对象

- 浏览器环境：window
- node环境：global

全局对象有下面几个特点：

- 全局对象的属性可以被直接访问

- 给未声明的变量赋值，实际就是给全局对象的属性赋值

  > 永远别这么干

- 所有的全局变量、全局函数都会附加到全局对象

  > 这称之为全局污染，又称之为全局暴露，或简称污染、暴露
  >
  > 如果要避免污染，需要使用**立即执行函数**改变其作用域
  >
  > 立即执行函数又称之为IIFE，它的全称是Immediately Invoked Function Expression
  >
  > **IIFE通常用于强行改变作用域**

## this指向
不同的场景，**this** 指代的含义不同：

- 在全局代码中使用this，指代全局对象

  > 在真实的开发中，很少在全局代码使用this

- **在函数中使用this，它的指向完全取决于函数是如何被调用的**

  | 调用方式         | 示例                | 函数中的this指向  |
  | ---------------- | ------------------- | ----------------- |
  | **通过new调用**  | `new method()`      | 新对象            |
  | **直接调用**     | `method()`          | 全局对象          |
  | **通过对象调用** | `obj.method()`      | 前面的对象        |
  | **call**         | `method.call(ctx)`  | call的第一个参数  |
  | **apply**        | `method.apply(ctx)` | apply的第一个参数 |
  |                  |                     |                   |


## 原型

#### 原型要解决的问题

```js
function Person(name, age){
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log('我是' + this.name, this.age + '岁了')
  }
}

var p1 = new Person('张三', 27);
var p2 = new Person('李四', 28);
var p3 = new Person('王五', 29);
```
上示例中，通过构造函数可以创建一个用户对象

这种做法有一个严重的缺陷，就是每个用户对象中都拥有一个`sayHi`方法，对于每个用户而言，`sayHi`方法是完全一样的，没必要为每个用户单独生成一个。

要解决这个问题，必须学习原型

#### 原型是如何解决的

<img :src="$withBase('/img/js/1.jpg')">


1. **原型**

   每个函数都会自动附带一个属性`prototype`，这个属性的值是一个普通对象，称之为原型对象

2. **实例**

   instance，通过`new`产生的对象称之为实例。

   > 由于JS中所有对象都是通过`new`产生的，因此，严格来说，JS中所有对象都称之为实例

3. **隐式原型**

   每个实例都拥有一个特殊的属性`__proto__`，称之为隐式原型，它指向构造函数的原型



这一切有何意义？

**当访问实例成员时，先找自身，如果不存在，会自动从隐式原型中寻找**

**这样一来，我们可以把那些公共成员，放到函数的原型中，即可被所有实例共享**
<img :src="$withBase('/img/js/2.jpg')">

## 原型链

**所有的对象都是通过`new 函数`的方式创建的**

```js
var u1 = new User('张', '三'); // 对象 u1 通过 new User 创建  

var u2 = { // 对象 u2 通过 new Object 创建
  firstName: '李',
  lastName: '四'
}
// 等效于
var u2 = new Object(); 
u2.firstName = '李';
u2.lastName = '四';
```

上面的代码形成的原型图如下

<img :src="$withBase('/img/js/3.jpg')">

原型对象本身也是一个对象，默认情况下，是通过`new Object`创建的，因此，上面的两幅原型图是可以发生关联的

<img :src="$withBase('/img/js/4.jpg')">

> `Object.prototype.__proto__`比较特殊，它固定指向null

可以看出，u1的隐式原型形成了一个链条，称之为**原型链**

当读取对象成员时，会先看对象自身是否有该成员，如果没有，就依次在其原型链上查找

### 完整的链条

<img :src="$withBase('/img/js/5.jpg')">


#### 在原型上更改会产生多大影响

更改构造函数的原型会对所有原型链上有该构造函数的原型的对象产生影响

#### 学会利用原型链判断类型

1. `instanceof`关键字【常用】

   ```js
   object instanceof constructor
   // 判断object的原型链中，是否存在constructor的原型
   ```

2. `Object.getPrototypeOf()`【不常用】

   ```js
   Object.getPrototypeOf(object);
   // 返回object的隐式原型
   ```

#### 创建空原型的对象

1. 利用`Object.create()`

   ```js
   Object.create(target);
   // 返回一个新对象，新对象以target作为隐式原型

    Object.create(null);
   ```

2. 利用`Object.setPrototypeOf()`

   ```js
   Object.setPrototypeOf(obj, prototype);
   // 设置obj的隐式原型为prototype
     Object.setPrototypeOf(obj, null);
   ```

::: details 面试题
```js
// 下面的代码输出什么？
function User() {}
User.prototype.sayHello = function () {};

var u1 = new User();
var u2 = new User();

console.log(u1.sayHello === u2.sayHello);
console.log(User.prototype === Function.prototype);
console.log(User.__proto__ === Function.prototype);
console.log(User.__proto__ === Function.__proto__);
console.log(u1.__proto__ === u2.__proto__);
console.log(u1.__proto__ === User.__proto__);
console.log(Function.__proto__ === Object.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype);

// 下面的代码输出什么？
console.log({} instanceof Object);
console.log({}.toString instanceof Function);
console.log(Object instanceof Function);
console.log(Function instanceof Object);

// 下面的代码输出什么？
Function.prototype.a = 1;
Object.prototype.b = 2;

function A() {}

var a = new A();

console.log(a.a, a.b);
console.log(A.a, A.b);
```
:::

## 继承
继承是面向对象的概念，它描述了两个对象类型（类，构造函数）之间的关系

如果在逻辑上可以描述为：A不一定是B，但B一定是A，则：B继承A、A派生B、A是B的父类、B是A的子类

**子类的实例应该自动拥有父类的所有成员**

继承具有两个特性：

- 单根性：子类最多只有一个父类
- 传递性：间接父类的成员会传递到子类中

#### 如何在JS中封装继承

```js
function inherit(Child, Parent){
  // 在原型链上完成继承 
  Object.setPrototypeOf(Child.prototype, Parent.prototype);
}
```


## 异常

#### 异常的分类

在JS中，异常表现为一个对象，不同的对象表达了不同的异常类型，不同类型的异常对应到不同的错误

| 异常类型           | 含义                                         |
| ------------------ | -------------------------------------------- |
| **SyntaxError**    | 语法错误                                     |
| **ReferenceError** | 引用错误，往往是使用了未定义的变量或函数     |
| **TypeError**      | 类型错误，往往是使用了一个对象中不存在的成员 |

**每个异常都是一个对象，通过对应的构造函数创建**

> 所有的异常构造器都继承自Error，更多信息参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)

当代码运行过程中出现错误时，JS会：

1. 自动创建对应的异常对象，抛出错误
2. 程序终止运行
3. 控制台中会显示异常对象

每个异常对象都至少记录了**两个关键信息**：

1. 错误消息描述：描述异常出现的原因
2. 调用堆栈信息：描述异常出现的位置

#### 捕获异常

捕获异常就是处理错误，当错误发生后，我们对错误进行相应的处理，让程序不至于终止

```js
try{
  // 代码1
}
catch(err){
  // 代码2：当代码1出现异常后，会执行这里的代码，异常对象会传递给err
}
finally{
  // 代码3：可省略。无论是否有异常，都会执行
}

// 无异常的执行顺序：代码1 --> 代码3
// 有异常的执行顺序：代码1 --> 出现异常，中断代码1的执行 --> 代码2 --> 代码3
```

**在绝大部分时候，我们都无须捕获异常，除非满足以下要求：**

1. 我们能够预知某段代码会出现异常
2. 我们知道出现异常后要做什么

上面的条件任意一个不满足，都不应该处理异常

**永远不能为了不报错而捕获异常！**

下面是一段可能使用异常捕获的伪代码

```js
try {
  var heros = network.getHeros(); // 从网络获取王者荣耀英雄数据，得到英雄数组
  createHTML(heros); // 将数组生成HTML
}
catch(err) {
  // 出现网络故障，给用户显示一个提示框
  showErrorDialog('网络故障，请检查您的网络是否连接正常。故障原因：' + err.message);
}
```

#### 手动抛出异常

不仅浏览器会自动给我们抛出异常，我们还可以手动的抛出异常

```js
throw 异常对象; // 当代码运行到这里，会终止执行，抛出异常对象，效果和浏览器抛出的错误完全一样
```

当编写函数时，如果满足下面三个条件，就可以选择抛出异常：

1. 预知执行过程中可能会出现某种错误
2. 浏览器不会抛出这个错误
3. 该函数无法处理这个错误

下面展现了一个需要抛出异常的例子

```js
/**
 * 得到两个数字之和
 * 若传递的不是数字，则会抛出TypeError
 * @param {number} a 数字1
 * @param {number} b 数字2
 * @return {number} 两数之和
 */
function sum(a, b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new TypeError('必须传入两个数字才能求和')
  }
  return a + b;
}
```

**规范：如果某个函数需要抛出异常，一定要在函数的文档注释中阐述清楚**
