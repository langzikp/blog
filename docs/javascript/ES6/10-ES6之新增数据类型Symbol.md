### 一. Symbol语法介绍
在ES5中，对象的属性名都是字符串，当我们使用一个他人提供的对象，想要为其加入新的属性或方法，新的属性或方法就可能与对象现有的产生冲突，为了从根本上防止属性名的冲突，ES6新增基本数据类型`Symbol`，用来表示独一无二的值。 使用`Symbol` 函数来返回 `symbol` 类型的值。

```js
const s = Symbol();

console.log(typeof s); // "symbol"
```
`Symbol` 函数可以传入字符串作为参数，用来表示对`Symbol`实例的描述，主要用于调试时在控制台显示，方便区分。
```js
const s1 = Symbol();
const s2 = Symbol('aaa');
const s3 = Symbol('bbb');

console.log(s1); // Symbol()
console.log(s2); // Symbol(aaa)
console.log(s3); // Symbol(bbb)

```
如上示例，加了参数之后，就有了描述，可以分清是哪一个的值，如果参数为对象，则会调用对象的`toString()`转为字符串，再生成`Symbol`值。  

> Symbol函数不能使用new命令，会报错。因为Symbol是一个原始类型的值，不是对象，所以不能使用new命令来调用。
> 基本上，它是一种类似于字符串的数据类型。

**注意：**
- `Symbol` 函数的参数只是描述，相同参数的`Symbol`函数返回值是不相等的。

```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```
- `Symbol` 值不能与其他类型的值进行运算，会报错。

```js
let s = Symbol('World');

"Hello " + s
// TypeError: can't convert symbol to string
`Hello ${s}`
// TypeError: can't convert symbol to string
```

- `Symbol` 值可以显式转为字符串。

```js
let s = Symbol('Hello World');

String(s) // 'Symbol(Hello World)'
s.toString() // 'Symbol(Hello World)'
```
- Symbol 值也可以转为布尔值，但是不能转为数值。

```js
let s = Symbol();
Boolean(s) // true
!s  // false

if (s) {
  // ...
}

Number(s) // TypeError
s + 2 // TypeError
```

### 二. Symbol.prototype.description
ES2019 提供了一个 `Symbol` 值的实例属性description，直接返回 `Symbol` 值的描述。

```js
const s = Symbol('Hello');

s.description // "Hello"
```


### 三. Symbol 用作属性名
`Symbol`作为对象的属性名，需在方括号`[]`中使用。
```
let sym= Symbol();

// 第一种写法
let a = {};
a[sym] = 'Hello!';

// 第二种写法
let a = {
  [sym]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, sym, { value: 'Hello!' });

// 以上写法都得到同样结果
a[sym] // "Hello!"
```
**注意:**
`Symbol` 值作为对象属性名时，不能用点运算符，用点运算符会被当做字符串，而不是`Symbol` 值。
```js
const sym= Symbol();
const a = {};

a.sym = 'Hello!';
a[sym] // undefined
a['sym'] // "Hello!"
```
>由于每一个 Symbol 值都是不相等的，这意味着只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。


### 四. Symbol.for()，Symbol.keyFor()
`Symbol.for()`方法接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 `Symbol` 值。如果有，就返回这个 `Symbol` 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

`Symbol.keyFor()`方法返回一个已登记的 `Symbol` 类型值的`key`。

```js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```
**注意：**
`Symbol.for()`为 `Symbol` 值登记的名字，是全局环境的，不管有没有在全局环境运行。
利用这个特性，可以在不同的 iframe 或 service worker 中取到同一个值。
```js
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
// true
```

**`Symbol`和`Symbol.for`区别**
- 共同点: 都会生成新的Symbol
- 不同点: Symbol.for()会被登记在全局坏境中供搜索,而Symbol()不会,Symbol.for()不会每次调用就返回一个新的Symbol类型的值,而是会先检查给定的key是否已经存在,如果不存在才会新建一个Symbol值。

### 五. 属性名的遍历
`Symbol` 值作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。
```js
var s=Symbol();
var o={test:"test"}
var obj={
    name: "张三",
    [s]: "symbol",
    [o]: 'testObj'
}
for(let key in  obj){
     console.log(key);
}
// name
// [object Object]
```
使用`Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有 `Symbol` 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 `Symbol` 值。
```js
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const arr = Object.getOwnPropertySymbols(obj);

console.log(arr)
// [Symbol(a), Symbol(b)]
```
还有一个API，`Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```js
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```
**由于以 `Symbol` 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。**

### 六. 实例：消除魔术字符串
魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
```js
const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```
其中，字符串Triangle就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。  

常用的消除魔术字符串的方法，就是把它写成一个变量。
```js
const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```
其中`shapeType.triangle`等于哪个值并不重要，只要确保不会跟其他`shapeType`属性的值冲突即可。因此，这里就很适合改用 Symbol 值。
```js
const shapeType = {
  triangle: Symbol()
};
```


> 加上`Symbol`，JavaScript现在共有八种基本数据类型了，分别为：  
> `Undefined`、`Null`、`Boolean`、`String`、`Number`、`Symbol`、`BigInt`和`Object`

**ES6 还提供了 11 个内置的 Symbol 值，很少用到，在此不做记录，若需了解，请见参考资料中**

***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)