## 新增Set和Map
### 一. Set
ES6 新增数据结构 `Set`。它的元素是**唯一且有序**的，可以按照插入的顺序迭代它的元素。  
`Set`本身是一个构造函数，用来生成 `Set` 数据结构。
```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```


`Set`函数可以接受一个数组（或者具有 `iterable` 接口的其他数据结构）作为参数，用来初始化。
```js
// 示例1
const items = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 示例2
const items = new Set('ababbc')
[...set]
// ["a", "b", "c"]
```
**注意点**

- 向 `Set` 加入值的时候，不会发生类型转换，所以`5`和`"5"`是两个不同的值
- `NaN`在`Set`中 等于自身，而精确相等符`===`是不等的

#### Set的属性和方法

属性：

- size：返回Set实例的成员总数

方法：
- add(value)：添加某个值，返回 Set 结构本身(可以链式调用)

- delete(value)：删除某个值，删除成功返回true，否则返回false

- has(value)：返回一个布尔值，表示该值是否为Set的成员

- clear()：清除所有成员，没有返回值
```js
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2) // true
s.has(2) // false
```

#### Set遍历方法
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

> Set的遍历顺序就是插入顺序。这个特性非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

由于 `Set` 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。  
而`entries`方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

// 直接遍历set实例，等同于遍历set实例的values方法
for (let i of set) {
  console.log(i)
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "red"]
// ["blue", "blue"]

set.forEach(function(value, key, set) { /* ... */ }, thisArg)
// red: red
// red: red
// blue: blue
```

#### 使用示例
- 使用Set来进行数组去重
```js
// 使用展开运算符
[...new Set(array)]

// 使用Array.from
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```
- 并集，交集，差集
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```
- 利用数组map来修改原来的 Set 结构

```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```


### 二. Map 
ES6 新增数据结构 `Map`来保存键值对，它是**有序**的并且任何值（对象或者基本类型）都可以作为一个键或一个值。  

`Map`本身是一个构造函数，用来生成 `Map` 数据结构。
```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```


`Map`函数可以接受一个数组参数，该数组的成员是一个个表示键值对的数组
```js
const map = new Map([
  ['name', '浪子快跑'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "浪子快跑"
map.has('title') // true
map.get('title') // "Author"
```
**注意点**
- 同一个键多次赋值，后面的值将覆盖前面的值
- 读取一个未知的键，则返回`undefined`
- `NaN`不严格相等于自身，但 `Map` 将其视为同一个键
- `0`和`-0`就是一个键

#### Map的属性和方法

属性：
- size：返回Map实例的成员总数

方法：
- set(key, val): 向Map中添加新元素
- get(key): 通过键值查找特定的数值并返回
- has(key): 判断Map对象中是否有Key所对应的值，有返回true,否则返回false
- delete(key): 通过键值从Map中移除对应的数据
- clear(): 将这个Map中的所有元素删除

```js
const m = new Map([['name', '张三']])
m.get('name') // 张三
m.has('name') // true
m.set('age', 28).set('sex', '男')
m.get('age') // 28
m.delete('age')
m.has('age') // false
m.has('sex') // true
m.clear()
m.has('sex') // false
```

#### Map遍历方法
- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历 Map 的所有成员。

> Map 的遍历顺序就是插入顺序。

```js
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

map.forEach(function(value, key, map) { 
  console.log(value, key);
}, thisArg)
// no F
// yes T
```

#### Map与其他数据结构转换
```js
// 数组转Map
const myMap = new Map([['name', '张三'], ['sex': '男']])

// Map转数组
[...myMap] // map转数组。 [['name', '张三'], ['sex': '男']]
[...map.keys()] // ["name", "sex"]

// Map 转对象
const obj = {}
const map = new Map(['a', 111], ['b', 222])
for(let [key,value] of map) {
  obj[key] = value
}
console.log(obj) // {a:111, b: 222}

// 对象转Map
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
```

### 三. WeakSet和WeakMap
当对象不在被使用，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。  

ES6 引入了 `WeakSet`和`WeakMap` ,它们都是弱引用，里面的引用，都不计入垃圾回收机制，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，避免内存泄漏。  

**WeakSet特性**
- 不存储重复的值，成员只能是对象类型
- 不可以进行forEach()遍历、for-of循环等迭代操作
- 没有keys()，alues()，entries()等方法和size属性

**WeakSet方法**
- add(value)：向 WeakSet 实例添加一个新成员
- delete(value)：清除 WeakSet 实例的指定成员
- has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中

```js
const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false

ws.delete(window); // true
ws.has(window); // false

ws.size // undefined
ws.forEach // undefined

// 数组转化为WeakSet，其值必须是对象
const a = [[1, 2], [3, 4]];
const set = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

// 不是对象，报错
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
```
**WeakSet使用场景**
由弱引用的特性可知，`WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。  

比如：存储DOM对象，当我们存储的DOM对象元素被另外一段脚本移除，我们也不想保留这些元素的引用而造成内存泄漏，就可以使用WeakSet来存储。
```js
const set = new WeakSet();
document.querySelectorAll("button").forEach(item => set.add(item));
```


**WeakMap特性**
- 只接受对象作为键名（null除外），值可以是任意类型
- 对键名是弱引用的，键值是正常引
- 不可以进行forEach()遍历、for-of循环等迭代操作
- 没有keys()，alues()，entries()等方法和size属性

**WeakMap方法**
- set(key,value)：向 WeakMap 实例添加一个新成员,返回当前的WeakMap对象
- delete(key)：清除 WeakMap 实例的指定成员，返回true。如果删除失败，返回false
- has(key)：返回一个布尔值，表示某个值是否在 WeakMap 实例之中
- get(key)：读取key对应的键值，如果找不到key，返回undefined

```js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
wm.get(key); //{foo: 1}
wm.has(key); //true
wm.delete(key);//true

// size、forEach、clear 方法都不存在
wm.size // undefined
wm.forEach // undefined
wm.clear // undefined
```
**WeakMap使用场景**
- 场景一：存储dom元素
```js
const map = new WeakMap();
document.querySelectorAll("div").forEach(item => map.set(item, item.innerHTML));
```
- 场景二：存储私有变量
```js
const _info = new WeakMap();
class Person {
  constructor(name) {
    _info.set(this, {name});
  }
  getName () {
    return _info.get(this).name
  }
}

const person = new Person('张三')
person.getName() // '张三'
```
当调用Person构造函数时，实例就会被添加到WeakMap集合中，键是this, 是实例的弱引用，值是私有属性name的对象， 如果删除实例，私有属性也就随之消失，不会造成内存泄漏。

### 四. WeakRef
ES2021 更进一步，提供了 `WeakRef` 对象，用于直接创建对象的弱引用。
```js
let target = {};
let wr = new WeakRef(target);
```
它目前只有一个`deref()`方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回undefined。
```js
let target = {};
let wr = new WeakRef(target);

let obj = wr.deref();
if (obj) { // target 未被垃圾回收机制清除
  // ...
}
```
注意：标准规定，一旦使用`WeakRef()`创建了原始对象的弱引用，那么在本轮事件循环（event loop），原始对象肯定不会被清除，只会在后面的事件循环才会被清除。

### 五. FinalizationRegistry
ES2021 引入了清理器注册表功能 FinalizationRegistry，用来指定目标对象被垃圾回收机制清除以后，所要执行的回调函数。
```js
const registry = new FinalizationRegistry(heldValue => {
  // ....
});

registry.register(theObject, "pramas");
```
其中：`FinalizationRegistry()`是系统提供的构造函数，返回一个清理器注册表实例，里面登记了所要执行的回调函数，可以接收参数heldValue。
`theObject`就是所要观察的目标对象，一旦该对象被垃圾回收机制清除，注册表就会在清除完成后，调用早前注册的回调函数，并将`pramas`作为参数（前面的heldValue）传入回调函数。
  
如果以后还想取消已经注册的回调函数，则要向register()传入第三个参数,作为标记值。这个标记值必须是对象，一般都用原始对象。再调用`unregister`进行取消注册。
```js
registry.register(theObject, "some value", theObject);
// ...其他操作...
registry.unregister(theObject);
```
**更多FinalizationRegistry细节见参考资料，由于无法知道清理器何时会执行，很少使用**  

***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)