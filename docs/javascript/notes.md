# 学习笔记

## Object.freeze()

`Object.freeze()` 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；
- 不能向这个对象添加新的属性 
- 不能删除已有属性
- 不能修改该对象已有属性的可枚举性、可配置性、可写性
- 不能修改已有属性的值
- 此外，冻结一个对象后该对象的原型也不能被修改
freeze() 返回和传入的参数相同的对象。

**注意** <Badge text="注意"/>
1. 数据属性的值不可更改，访问器属性（有getter和setter）也同样（但由于是函数调用，给人的错觉是还是可以修改这个属性）。  
2. `如果一个属性的值是个对象，则这个对象中的属性是可以修改的`，除非它也是个冻结对象。
3. 数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。
4. 这个方法返回传递的对象，而不是创建一个被冻结的副本。  
5. const和Object.freeze()并不同，const是防止变量重新分配，而Object.freeze()是使对象具有不可变性。

对比 `Object.seal()` : 用Object.seal()密封的对象可以改变它们现有的属性。使用Object.freeze() 冻结的对象中现有属性是不可变的。  
```js
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode 在严格模式下抛出错误

console.log(obj.prop);
// expected output: 42
``` 
[Object.freeze() 详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)  
[Vue性能提升之Object.freeze()](https://juejin.cn/post/6844903922469961741)


## Object.defineProperty() 
Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```js
/**
 * 语法
 * @param {Object} obj 要定义属性的对象
 * @param {String或Symbol} prop 要定义或修改的属性的名称或 Symbol
 * @param {Object} descriptor 要定义或修改的属性描述符 
 * /
Object.defineProperty(obj, prop, descriptor);
```
| 属性名        | 介绍           | 默认值     |
| ---------    |   ---------   | ---------- |
| configurable | 目标属性是否可以被删除或是否可以再次修改特性    | false       |
| enumerable   | 可枚举的，为 true 时会出现在for in 或者 Object.keys()的遍历中     | false        |
| value        | 设置属性的值，可以是任何有效的 JavaScript 值（数值，对象，函数等）     | undefined。        |
| writable     | 可写的，为 true 时`value`才能被修改     | false        |
| get          | 属性的 getter 函数,当访问该属性时，会调用此函数 | undefined。        |
| set         | 属性的 setter 函数,当属性值被修改时，会调用此函数 | undefined        |

**注意** <Badge text="注意"/>
1. 对象里目前存在的属性描述符有两种主要形式：`数据描述符:value、writable`和
`存取描述符：get、set`。
2. 一个描述符只能是这两者其中之一；不能同时是两者。


[Object.defineProperty() 详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)  


## Object.assign()
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
```js
/**
 * 语法
 * @param {Object} target 目标对象。
 * @param {...Object} sources 源对象。
 * @return {Object} 目标对象。
 * /
Object.assign(target, ...sources);
```
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
**注意** <Badge text="注意"/>
1. 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。
2. `Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。 


[Object.assign() 详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  


## Array.prototype.flat()
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
```js
/**
 * 语法
 * @param {number} depth  指定要提取嵌套数组的结构深度，默认值为 1。
 * @return {Array} 新数组
 * /
var newArray = arr.flat([depth])
```
```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


```
**注意** <Badge text="注意"/>
1. flat() 方法会移除数组中的空项。  
[Array.prototype.flat 详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)  


## apply，call，bind的区别
作用：用于改变this的指向  
区别：  
- 三者都可以改变函数的this对象指向。
- 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
- bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。
[彻底弄懂bind，apply，call三者的区别](https://zhuanlan.zhihu.com/p/82340026)  