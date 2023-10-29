
# ES6之Iterator 和 for...of 循环
### 一、什么是 Iterator（遍历器）
`Javascript` 有数组`Array`、`Object`、`Map`和`Set`四种数据集合，这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（`Iterator`）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 `Iterator` 接口，就可以完成遍历操作。

`Iterator` 的作用：
1. 为各种数据结构，提供一个统一的、简便的访问接口；
2. 使得数据结构的成员能够按某种次序排列；
3. `ES6`新增遍历命令`for...of`循环，`Iterator` 接口主要供`for...of`消费。

`Iterator` 遍历过程：
1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
2. 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的`next`方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的`next`方法，直到它指向数据结构的结束位置。  

每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。

下面是一个模拟`next`方法返回值的例子。
```js
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}
```
上面代码定义了一个`makeIterator`函数，它是一个遍历器生成函数，作用就是返回一个遍历器对象。对数组`['a', 'b']`执行这个函数，就会返回该数组的遍历器对象（即指针对象）`it`。

### 二、默认 Iterator 接口 
`Iterator` 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即`for...of`循环（详见下文）。当使用`for...of`循环遍历某种数据结构时，该循环会自动去寻找 `Iterator` 接口。

一种数据结构只要部署了 `Iterator` 接口，我们就称这种数据结构是“可遍历的”（iterable）。

`ES6` 规定，默认的 `Iterator` 接口部署在数据结构的`Symbol.iterator`属性，或者说，一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”（iterable）。

`Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。

原生具备 `Iterator` 接口的数据结构如下:
- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象  

数组的`Symbol.iterator`属性示例
```js
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```
对于原生部署 `Iterator` 接口的数据结构，不用自己写遍历器生成函数，`for...of`循环会自动遍历它们。除此之外，其他数据结构（主要是对象）的 `Iterator` 接口，都需要自己在`Symbol.iterator`属性上面部署，这样才会被`for...of`循环遍历。

一般来说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作 `Map` 结构使用，`ES5` 没有 `Map` 结构，而 `ES6` 原生提供了。

### 三、 调用 Iterator 接口的场合
以下场合会默认调用 `Iterator` 接口（即`Symbol.iterator`方法）:
1. 解构赋值
对数组和 `Set` 结构进行解构赋值时，会默认调用`Symbol.iterator`方法。
```js
let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
// first='a'; rest=['b','c'];
```
2. 扩展运算符
```js
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']
```
可以看出：只要某个数据结构部署了 `Iterator` 接口，就可以对它使用扩展运算符，将其转为数组。
3. yield*
yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
```js
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```
4. 其他场合
由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。

- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
- Promise.all()
- Promise.race()

### 四、Iterator 接口与 Generator 函数 
`Symbol.iterator()`方法的最简单实现，是使用 `Generator` 函数。

```js
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};
[...myIterable] // [1, 2, 3]

// 或者采用下面的简洁写法

let obj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of obj) {
  console.log(x);
}
// "hello"
// "world"
```

### 五、遍历器对象的 return()，throw() 
遍历器对象除了具有`next()`方法，还可以具有`return()`方法和`throw()`方法。如果你自己写遍历器对象生成函数，那么`next()`方法是必须部署的，`return()`方法和`throw()`方法是否部署是可选的。

`return()`方法的使用场合是，如果`for...of`循环提前退出（通常是因为出错，或者有`break`语句），就会调用`return()`方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署`return()`方法。
```js
function readLinesSync(file) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false };
        },
        return() {
          file.close();
          return { done: true };
        }
      };
    },
  };
}
```
上面代码中，函数`readLinesSync`接受一个文件对象作为参数，返回一个遍历器对象，其中除了`next()`方法，还部署了`return()`方法。下面的两种情况，都会触发执行`return()`方法。
```js
// 情况一
for (let line of readLinesSync(fileName)) {
  console.log(line);
  break;
}

// 情况二
for (let line of readLinesSync(fileName)) {
  console.log(line);
  throw new Error();
}
```
上面代码中，情况一输出文件的第一行以后，就会执行`return()`方法，关闭这个文件；情况二会在执行`return()`方法关闭文件之后，再抛出错误。

**注意**，`return()`方法必须返回一个对象，这是 `Generator` 语法决定的。

`throw()`方法主要是配合 `Generator` 函数使用，一般的遍历器对象用不到这个方法。请参阅《ES6 之 Generator 函数》。

### 六、 for...of 循环
一个数据结构只要部署了`Symbol.iterator`属性，就被视为具有 `iterator` 接口，就可以用`for...of`循环遍历它的成员。也就是说，`for...of`循环内部调用的是数据结构的`Symbol.iterator`方法。

`for...of`循环可以使用的范围包括数组、`Set` 和 `Map` 结构、某些类似数组的对象（比如`arguments`对象、`DOM NodeList` 对象）、后文的 `Generator` 对象，以及字符串。

```js
// 数组
const arr = ['red', 'green', 'blue'];
for(let v of arr) {
  console.log(v); // red green blue
}

// Set 
var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e); // Gecko  Trident Webkit
}

// Map
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
  console.log(pair); //  ['a', 1] ['b', 2]
}

// 字符串
let str = "hello";

for (let s of str) {
  console.log(s); // h e l l o
}

// DOM NodeList对象
let paras = document.querySelectorAll("p");

for (let p of paras) {
  p.classList.add("test");
}

// arguments对象
function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');
// 'a'
// 'b'
```
**注意**
- 数组、`Set` 和 `Map` 遍历的顺序是按照各个成员被添加进数据结构的顺序。
- `Map` 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 `Map` 成员的键名和键值。
- 普通的对象，`for...of`结构不能直接使用，会报错，必须部署了 `Iterator` 接口后才能使用。
- 可以使用`break`命令或`return`命令终止循环。
```js
const arr = [1, 2, 3, 4];
for(let v of arr) {
  if(v > 2){
    break;  // 跳出循环
  }
  console.log(v); // 1 2
}
```



***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/#docs/proxy)