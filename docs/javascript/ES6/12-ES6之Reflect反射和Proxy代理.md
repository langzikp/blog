
# Reflect 和 Proxy


`Reflect`反射与`Proxy`代理，都是 ES6 为了操作对象而提供的新 API。利用 `Proxy` 和 `Reflect` 来实现对于对象的代理劫持操作，类似于 Es 5 中 `Object.defineProperty()`的效果，不过 `Reflect & Proxy` 远远比它强大。
- Reflect
- Proxy
- 观察者模式
- 面试题
## 一. Reflect 反射
### 目的  
1. 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上。也就是说，从`Reflect`对象上可以拿到语言内部的方法。
  
2. 修改某些`Object`方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。

3. 让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为。
```js
// 老写法
'assign' in Object // true

// 新写法
Reflect.has(Object, 'assign') // true
```   

4. `Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法。这就让`Proxy`对象可以方便地调用对应的`Reflect`方法，完成默认行为，作为修改行为的基础。也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。  

### 共有13个静态方法，对应Proxy的13种拦截操作
1. `Reflect.get(target, name, receiver)`
`Reflect.get`方法查找并返回`target`对象的`name`属性，如果没有该属性，则返回`undefined`。

1. `Reflect.set(target, name, value, receiver)`
`Reflect.set`方法设置`target`对象的`name`属性等于`value`。

1. `Reflect.has(target, name)`
`Reflect.has`方法对应`name in obj`里面的`in`运算符。

1. `Reflect.deleteProperty(target, name)`
`Reflect.deleteProperty`方法等同于`delete obj[name]`，用于删除对象的属性。

1. `Reflect.construct(target, args)`
`Reflect.construct`方法等同于`new target(...args)`，这提供了一种不使用`new`，来调用构造函数的方法。

1. `Reflect.getPrototypeOf(target)`
`Reflect.getPrototypeOf`方法用于读取对象的`__proto__`属性，对应`Object.getPrototypeOf(obj)`。

1. `Reflect.setPrototypeOf(target, prototype)`
`Reflect.setPrototypeOf`方法用于设置目标对象的原型（`prototype`），对应`Object.setPrototypeOf(obj, newProto)`方法。它返回一个布尔值，表示是否设置成功。

1. `Reflect.apply(target, thisArg, args)`
`Reflect.apply`方法等同于`Function.prototype.apply.call(func, thisArg, args)`，用于绑定`this`对象后执行给定函数。

1. `Reflect.defineProperty(target, name, desc)`
`Reflect.defineProperty`方法基本等同于`Object.defineProperty`，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用`Reflect.defineProperty`代替它。

1. `Reflect.getOwnPropertyDescriptor(target, name)`
`Reflect.getOwnPropertyDescriptor`基本等同于`Object.getOwnPropertyDescriptor`，用于得到指定属性的描述对象，将来会替代掉后者。

1. `Reflect.isExtensible(target)`
`Reflect.isExtensible`方法对应`Object.isExtensible`，返回一个布尔值，表示当前对象是否可扩展。

1. `Reflect.preventExtensions(target)`
`Reflect.preventExtensions`对应`Object.preventExtensions`方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

1. `Reflect.ownKeys(target)`
`Reflect.ownKeys`方法用于返回对象的所有属性，基本等同于`Object.getOwnPropertyNames`与`Object.getOwnPropertySymbols`之和。

## 二. proxy 代理
Proxy 原意是代理，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
```js
// 语法
var proxy = new Proxy(target, handler);
```
`target`参数表示所要拦截的目标对象。   
`handler`参数也是一个对象，用来定制拦截行为。

```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
// 给一个空对象架设了一层拦截，读写obj的属性，就会得到下面的结果
obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
```
### 13种拦截操作
1. `get(target, propKey, receiver)`：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
**其中:`receiver`是`Proxy` 或者继承 `Proxy` 的对象.**

2. `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。

3. `has(target, propKey)`：拦截`propKey in proxy`的操作，返回一个布尔值。

4. `deleteProperty(target, propKey)`：拦截`delete proxy[propKey]`的操作，返回一个布尔值。

5. `ownKeys(target)`：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。

6. `getOwnPropertyDescriptor(target, propKey)`：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。

7.` defineProperty(target, propKey, propDesc)`：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。

8. `preventExtensions(target)`：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。

9. `getPrototypeOf(target)`：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。

10.`isExtensible(target)`：拦截`Object.isExtensible(proxy)`，返回一个布尔值。

11. `setPrototypeOf(target, proto)`：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

12. `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。

13. `construct(target, args)`：拦截 `Proxy` 实例作为构造函数调用的操作，比如`new proxy(...args)`。

### 三. 应用Reflect和Proxy简易实现观察者模式
```js
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {
    set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(observer => observer());
        return result;
    }
});

const person = observable({
    name: '张三',
    age: 20
});
  
function print() {
    console.log(`${person.name}, ${person.age}`)
}
  
observe(print);
person.name = '李四';
// 输出： 李四, 20
```

### 四. 面试题
应用`Proxy`实现数据倒序访问，如： var arr=[1, 2, 3, 4]; arr[-1] 返回 4，arr[-2] 返回 3
```js
const arr = [1, 2, 3, 4];
const proxy = new Proxy(arr, {
    get(target, propKey, receiver){
        const index = parseInt(propKey)
        if (index < 0) {
            return Math.abs(index) > target.length ? undefined : target[target.length + index];
        }
        return Reflect.get(target, propKey, receiver)
    }
})
console.log(proxy[1]); // 2
console.log(proxy[-1]); // 4
console.log(proxy[-2]); // 3
console.log(proxy[-5]); // undefined 
```



***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/#docs/proxy)