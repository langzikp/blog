
# ES6 之 Generator 函数
### 一、什么是 Generator 函数
Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。  
  
Generator 函数是一个普通函数，但有两个特征。一是，`function`关键字与函数名之间有一个星号；二是，函数体内部使用`yield`表达式，定义不同的内部状态（`yield`在英语里的意思就是“产出”）。
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next() // { value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
hw.next() // { value: 'ending', done: true }
hw.next() // { value: undefined, done: true }
```
调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象 `hw`（是一个遍历器对象），可以依次遍历 Generator 函数内部的每一个状态。

下一步，必须调用遍历器对象的`next`方法，使得指针移向下一个状态，也就是说，每次调用`next`方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个`yield`表达式（或`return`语句）为止。

上面代码一共调用了四次`next`方法。

第一次调用，Generator 函数开始执行，直到遇到第一个`yield`表达式为止。`next`方法返回一个对象，它的`value`属性就是当前`yield`表达式的值`hello`，`done`属性的值`false`，表示遍历还没有结束。

第二次调用，Generator 函数从上次`yield`表达式停下的地方，一直执行到下一个`yield`表达式。`next`方法返回的对象的`value`属性就是当前`yield`表达式的值`world`，`done`属性的值`false`，表示遍历还没有结束。

第三次调用，Generator 函数从上次`yield`表达式停下的地方，一直执行到`return`语句（如果没有`return`语句，就执行到函数结束）。`next`方法返回的对象的`value`属性，就是紧跟在`return`语句后面的表达式的值（如果没有`return`语句，则`alue`属性的值为`undefined`），`done`属性的值`true`，表示遍历已经结束。

第四次调用，此时 Generator 函数已经运行完毕，next方法返回对象的`value`属性为`undefined`，`done`属性为`true`。以后再调用`next`方法，返回的都是这个值。

总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的`next`方法，就会返回一个有着`value`和`done`两个属性的对象。`value`属性表示当前的内部状态的值，是`yield`表达式后面那个表达式的值；`done`属性是一个布尔值，表示是否遍历结束。

#### yield表达式
由于 Generator 函数返回的遍历器对象，只有调用`next`方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。`yield`表达式就是暂停标志。

遍历器对象的`next`方法的运行逻辑如下：
1. 遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的value属性值。

2. 下一次调用`next`方法时，再继续往下执行，直到遇到下一个`yield`表达式。

3. 如果没有再遇到新的`yield`表达式，就一直运行到函数结束，直到`return`语句为止，并将`return`语句后面的表达式的值，作为返回的对象的`value`属性值。

4. 如果该函数没有`return`语句，则返回的对象的`value`属性值为`undefined`。

需要注意的是，`yield`表达式后面的表达式，只有当调用`next`方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
```js
function* gen() {
  yield  123 + 456;
}
```
上面代码中，`yield`后面的表达式`123 + 456`，不会立即求值，只会在`next`方法将指针移到这一句时，才会求值。

**注意**
1. `yield`表达式只能用在 Generator 函数里面，用在其他地方都会报错。
```js
(function (){
  yield 1;
})()
// SyntaxError: Unexpected number
```

上面代码在一个普通函数中使用`yield`表达式，结果产生一个句法错误。
```js
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  a.forEach(function (item) {
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  });
};

for (var f of flat(arr)){
  console.log(f);
}
```
上面代码也会产生句法错误，因为`forEach`方法的参数是一个普通函数，但是在里面使用了`yield`表达式，可以使用`for`循环来替换`forEach`。
```js
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1, 2, 3, 4, 5, 6
```
  

2. `yield`表达式如果用在另一个表达式之中，必须放在圆括号里面。
```js
function* demo() {
  console.log('Hello' + yield); // SyntaxError
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
```

3. `yield`表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
```js
function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}
```
#### 与 Iterator 接口的关系
任意一个对象的`Symbol.iterator`方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。

由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的`Symbol.iterator`属性，从而使得该对象具有 Iterator 接口。
```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```
上面代码中，Generator 函数赋值给`Symbol.iterator`属性，从而使得`myIterable`对象具有了 Iterator 接口，可以被`...`运算符遍历了。


Generator 函数执行后，返回一个遍历器对象。该对象本身也具有`Symbol.iterator`属性，执行后返回自身。
```js
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g
// true
```
上面代码中，`gen`是一个 Generator 函数，调用它会生成一个遍历器对象`g`。它的`Symbol.iterator`属性，也是一个遍历器对象生成函数，执行后返回它自己。

### 二、 next 方法的参数
**`yield`表达式本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值**。  

这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过`next`方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```
上面代码中，第二次运行`next`方法的时候不带参数，导致 y 的值等于`2 * undefined`（即`NaN`），除以 `3` 以后还是`NaN`，因此返回对象的`value`属性也等于`NaN`。第三次运行`Next`方法的时候不带参数，所以z等于`undefined`，返回对象的`value`属性等于`5 + NaN + undefined`，即`NaN`。

如果向`next`方法提供参数，返回结果就完全不一样了。上面代码第一次调用`b`的`next`方法时，返回`x+1`的值`6`；第二次调用`next`方法，将上一次`yield`表达式的值设为`12`，因此`y`等于`24`，返回`y / 3`的值`8`；第三次调用`next`方法，将上一次`yield`表达式的值设为`13`，因此`z`等于`13`，这时`x`等于`5`，`y`等于`24`，所以`return`语句的值等于`42`。

注意，由于`next`方法的参数表示上一个`yield`表达式的返回值，所以在第一次使用`next`方法时，传递参数是无效的。V8 引擎直接忽略第一次使用`next`方法时的参数，只有从第二次使用`next`方法开始，参数才是有效的。从语义上讲，第一个`next`方法用来启动遍历器对象，所以不用带有参数。

如果想要第一次调用`next`方法时，就能够输入值，可以在 Generator 函数外面再包一层。
```js
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});

wrapped().next('hello!')
// First input: hello!

```


### 三、for...of 循环
`for...of`循环可以自动遍历 Generator 函数运行时生成的`Iterator`对象，且此时不再需要调用`next`方法。
```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
上面代码使用`for...of`循环，依次显示 5 个`yield`表达式的值。这里需要注意，一旦`next`方法的返回对象的`done`属性为`true`，`for...of`循环就会中止，且不包含该返回对象，所以上面代码的`return`语句返回的`6`，不包括在`for...of`循环之中。

除了`for...of`循环以外，扩展运算符（`...`）、解构赋值和`Array.from`方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。
```js
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2
```

### 四、Generator.prototype.throw() 
Generator 函数返回的遍历器对象，都有一个`throw`方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
```js
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```
上面代码中，遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的`catch`语句捕获。i第二次抛出错误，由于 Generator 函数内部的`catch`语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的`catch`语句捕获。

`throw`方法可以接受一个参数，该参数会被`catch`语句接收，建议抛出`Error`对象的实例。
```js
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log(e);
  }
};

var i = g();
i.next();
i.throw(new Error('出错了！'));
// Error: 出错了！(…)
```
**注意**
1. 不要混淆遍历器对象的`throw`方法和全局的`throw`命令。上面代码的错误，是用遍历器对象的`throw`方法抛出的，而不是用`throw`命令抛出的。后者只能被函数体外的`catch`语句捕获。
```js
var g = function* () {
  while (true) {
    try {
      yield;
    } catch (e) {
      if (e != 'a') throw e;
      console.log('内部捕获', e);
    }
  }
};

var i = g();
i.next();

try {
  throw new Error('a');
  throw new Error('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 外部捕获 [Error: a]
```

2. 如果 Generator 函数内部没有部署`try...catch`代码块，那么`throw`方法抛出的错误，将被外部`try...catch`代码块捕获。
```js
var g = function* () {
  while (true) {
    yield;
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 外部捕获 a
```
3. 如果 Generator 函数内部和外部，都没有部署`try...catch`代码块，那么程序将报错，直接中断执行。  
```js
var gen = function* gen(){
  yield console.log('hello');
  yield console.log('world');
}

var g = gen();
g.next();
g.throw();
// hello
// Uncaught undefined
```
上面代码中，`g.throw`抛出错误以后，没有任何`try...catch`代码块可以捕获这个错误，导致程序报错，中断执行。

4. `throw`方法抛出的错误要被内部捕获，前提是必须至少执行过一次`next`方法。
```js
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log('内部捕获');
  }
}

var g = gen();
g.throw(1);
// Uncaught 1
```
上面代码中，`g.throw(1)`执行时，`next`方法一次都没有执行过。这时，抛出的错误不会被内部捕获，而是直接在外部抛出，导致程序出错。这种行为其实很好理解，因为第一次执行`next`方法，等同于启动执行 Generator 函数的内部代码，否则 Generator 函数还没有开始执行，这时`throw`方法抛错只可能抛出在函数外部。

5. `throw`方法被内部捕获以后，会附带执行到下一条`yield`表达式，这种情况下等同于执行一次`next`方法。
```js
var gen = function* gen(){
  try {
    yield 1;
  } catch (e) {
    yield 2;
  }
  yield 3;
}

var g = gen();
g.next() // { value:1, done:false }
g.throw() // { value:2, done:false }
g.next() // { value:3, done:false }
g.next() // { value:undefined, done:true }
```
上面代码中，`g.throw`方法被内部捕获以后，等同于执行了一次next方法，所以返回`{ value:2, done:false }`。另外，也可以看到，只要 Generator 函数内部部署了`try...catch`代码块，那么遍历器的`throw`方法抛出的错误，不影响下一次遍历。

6. throw命令与g.throw方法是无关的，两者互不影响。
```js
var gen = function* gen(){
  yield console.log('hello');
  yield console.log('world');
}

var g = gen();
g.next();

try {
  throw new Error();
} catch (e) {
  g.next();
}
// hello
// world
```
上面代码中，`throw`命令抛出的错误不会影响到遍历器的状态，所以两次执行`next`方法，都进行了正确的操作。

### 五、Generator.prototype.return()


`return()`方法，可以返回给定的值，并且终结遍历 Generator 函数。
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
```
上面代码中，遍历器对象`g`调用`return()`方法后，返回值的`value`属性就是`return()`方法的参数`foo`。并且，Generator 函数的遍历就终止了，返回值的`done`属性为`true`，以后再调用`next()`方法，`done`属性总是返回`true`。

- 如果`return()`方法调用时，不提供参数，则返回值的`value`属性为`undefined`。
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next() // { value: 1, done: false }
g.return() // { value: undefined, done: true }
```

- 如果 Generator 函数内部有`try...finally`代码块，且正在执行`try`代码块，那么`return()`方法会导致立刻进入`finally`代码块，执行完以后，整个函数才会结束。
```js
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }
```
上面代码中，调用`return()`方法后，就开始执行`finally`代码块，不执行`try`里面剩下的代码了，然后等到`finally`代码块执行完，再返回`return()`方法指定的返回值。

### 六、 next()、throw()、return()的共同点
`next()`、`throw()`、`return()`这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换`yield`表达式。
- `next()`是将`yield`表达式替换成一个值。
```js
const g = function* (x, y) {
  let result = yield x + y;
  return result;
};

const gen = g(1, 2);
gen.next(); // Object {value: 3, done: false}

gen.next(1); // Object {value: 1, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = 1;
```
上面代码中，第二个`next(1)`方法就相当于将`yield`表达式替换成一个值`1`。如果`next`方法没有参数，就相当于替换成`ndefined`。

- `throw()`是将`yield`表达式替换成一个`throw`语句。
```js
gen.throw(new Error('出错了')); // Uncaught Error: 出错了
// 相当于将 let result = yield x + y
// 替换成 let result = throw(new Error('出错了'));
```

- `return()`是将`yield`表达式替换成一个`return`语句。
```js
gen.return(2); // Object {value: 2, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = return 2;
```

### 七、yield* 表达式
ES6 提供了`yield*`表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
```js
function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}

// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}

for (let v of bar()){
  console.log(v);
}
// "x"
// "a"
// "b"
// "y"
```
从语法角度看，如果`yield`表达式后面跟的是一个遍历器对象，需要在`yield`表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为`yield*`表达式。

`yield*`后面的 Generator 函数（没有`return`语句时），等同于在 Generator 函数内部，部署一个`for...of`循环。
```js
function* concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}

// 等同于

function* concat(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}
```
反之，在有`return`语句时，则需要用`var value = yield* iterator`的形式获取`return`语句的值。  

如果`yield*`后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。
```js
function* gen(){
  yield* ["a", "b", "c"];
}

gen().next() // { value:"a", done:false }
```
上面代码中，`yield`命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象。

实际上，**任何数据结构只要有 Iterator 接口，就可以被`yield*`遍历。**
```js
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();

read.next().value // "hello"
read.next().value // "h"
```

如果被代理的 Generator 函数有`return`语句，那么就可以向代理它的 Generator 函数返回数据。
```js
function* foo() {
  yield 2;
  yield 3;
  return "foo";
}

function* bar() {
  yield 1;
  var v = yield* foo();
  console.log("v: " + v);
  yield 4;
}

var it = bar();

it.next()
// {value: 1, done: false}
it.next()
// {value: 2, done: false}
it.next()
// {value: 3, done: false}
it.next();
// "v: foo"
// {value: 4, done: false}
it.next()
// {value: undefined, done: true}
```
### 八、 作为对象属性的 Generator 函数
如果一个对象的属性是 Generator 函数，可以简写成下面的形式。  
```js
let obj = {
  * myGeneratorMethod() {
    ···
  }
};

// 完整形式
let obj = {
  myGeneratorMethod: function* () {
    // ···
  }
};
```
### 九、Generator 函数的this
Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的`prototype`对象上的方法。
```js
function* g() {}

g.prototype.hello = function () {
  return 'hi!';
};

let obj = g();

obj instanceof g // true
obj.hello() // 'hi!'
```

上面代码表明，Generator 函数`g`返回的遍历器`obj`，是`g`的实例，而且继承了`g.prototype`。但是，如果把`g`当作普通的构造函数，并不会生效，因为`g`返回的总是遍历器对象，而不是`this`对象。
```js
function* g() {
  this.a = 11;
}

let obj = g();
obj.next();
obj.a // undefined
```
上面代码中，Generator 函数`g`在`this`对象上面添加了一个属性`a`，但是`obj`对象拿不到这个属性。

**Generator 函数也不能跟`new`命令一起用，会报错。**
```js
function* F() {
  yield this.x = 2;
  yield this.y = 3;
}

new F()
// TypeError: F is not a constructor
```

以上为 Generator 函数的相关语法，其异步应用见[Generator 函数的异步应用](https://es6.ruanyifeng.com/#docs/generator-async)
***摘录资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/#docs/proxy)