
# ES6之Promise
### 一、 什么是 Promise
`Promise` 是异步编程的一种解决方案，相比传统的解决方案"回调函数和事件"，它更合理和更强大。  

`Promise` 首先是一个对象，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

#### Promise对象有两个特点：
1. 对象的状态不受外界影响
`Promise` 对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果
`Promise` 对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。状态改变后就不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（`Event`）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

#### Promise的缺点
1. 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消
2. 如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部
3. 当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

### 二、基本语法
ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例。
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

- `resolve`函数的作用: 将`Promise`对象的状态从“未完成”变为“成功”（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
- `reject`函数的作用: 将`Promise`对象的状态从“未完成”变为“失败”（即从 `pending` 变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

`Promise`实例生成以后，可以用`then`方法分别指定`resolve`状态和`reject`状态的回调函数。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
`then`方法可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。这两个函数都是可选的，不一定要提供。它们都接受`Promise`对象传出的值作为参数。


`Promise` 新建后就会立即执行。
```js
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```
上面代码中，`Promise` 新建后立即执行，所以首先输出的是Promise。然后，`then`方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

用`Promise`对象实现的 Ajax 操作的示例：
```js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```


如果调用`resolve`函数和`reject`函数时带有参数，那么它们的参数会被传递给回调函数。`reject`函数的参数通常是`Error`对象的实例，表示抛出的错误；`resolve`函数的参数除了正常的值以外，还可能是另一个 `Promise` 实例。
```js
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```
上面代码中，`p1`和`p2`都是 `Promise` 的实例，但是`p2`的`resolve`方法将`p1`作为参数，即一个异步操作的结果是返回另一个异步操作。

**这时`p1`的状态就会传递给`p2`，也就是说，`p1`的状态决定了`p2`的状态。如果`p1`的状态是`pending`，那么`p2`的回调函数就会等待`p1`的状态改变；如果`p1`的状态已经是`resolved`或者`rejected`，那么`p2`的回调函数将会立刻执行**。

注意，调用`resolve`或`reject`并不会终结 `Promise` 的参数函数的执行。
```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```
上面代码中，调用`resolve(1)`以后，后面的`console.log(2)`还是会执行，并且会首先打印出来。这是因为立即 `resolved` 的 `Promise` 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

一般来说，调用`resolve或reject`以后，`Promise` 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。所以，最好在它们前面加上`return`语句，这样就不会有意外。

```js
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```
### 三、Promise.prototype.then()
`Promise` 实例具有`then`方法，也就是说，`then`方法是定义在原型对象`Promise.prototype`上的。它的作用是为 `Promise` 实例添加状态改变时的回调函数。
1. `then`方法的第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数，它们都是可选的。
2. `then`方法返回的是一个新的`Promise`实例, 因此可以采用链式写法
```js
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});
```
上面代码中，第一个`then`方法指定的回调函数，返回的是另一个`Promise`对象。这时，第二个`then`方法指定的回调函数，就会等待这个新的`Promise`对象状态发生变化。如果变为`resolved`，就调用第一个回调函数，如果状态变为`rejected`，就调用第二个回调函数。

### 四、Promise.prototype.catch()
`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。
```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});

```
上面代码中，`getJSON()`方法返回一个 `Promise` 对象，如果该对象状态变为`resolved`，则会调用`then()`方法指定的回调函数；如果异步操作抛出错误，状态就会变为`rejected`，就会调用`catch()`方法指定的回调函数，处理这个错误。另外，`then()`方法指定的回调函数，如果运行中抛出错误，也会被`catch()`方法捕获。

**`Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。**
```js

getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});

```
一般来说，不要在`then()`方法里面定义 `Reject` 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。

```js
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

跟传统的`try/catch`代码块不同的是，如果没有使用`catch()`方法指定错误处理的回调函数，`Promise` 对象抛出的错误不会传递到外层代码，即不会有任何反应。
```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```
上面代码中，`someAsyncThing()`函数产生的 `Promise` 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 `Promise` 外部的代码，通俗的说法就是“`Promise` 会吃掉错误”。  

一般总是建议，`Promise` 对象后面要跟`catch()`方法，这样可以处理 `Promise` 内部发生的错误。

### 五、Promise.prototype.finally()
`finally()`方法用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。
```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
上面代码中，不管`promise`最后的状态，在执行完`then`或`catch`指定的回调函数以后，都会执行`finally`方法指定的回调函数。

**`finally`方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是`fulfilled`还是`rejected`。这表明，`finally`方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。**


### 六、Promise.resolve()
将现有对象转为 `romise` 对象，`Promise.resolve()`方法就起到这个作用。
```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
`Promise.resolve()`方法的参数分成四种情况。
1. 参数是一个 `Promise` 实例 
如果参数是 `Promise` 实例，那么`romise.resolve`将不做任何修改、原封不动地返回这个实例。
2. 参数是一个thenable对象
`thenable`对象指的是具有`then`方法的对象，比如下面这个对象。
```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```
`Promise.resolve()`方法会将这个对象转为 `Promise` 对象，然后就立即执行`thenable`对象的`then()`方法。
```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value);  // 42
});
```
上面代码中，`thenable`对象的`then()`方法执行后，对象`p1`的状态就变为`resolved`，从而立即执行最后那个`then()`方法指定的回调函数，输出42。

3. 参数不是具有`then()`方法的对象，或根本就不是对象
如果参数是一个原始值，或者是一个不具有`then()`方法的对象，则`Promise.resolve()`方法返回一个新的 `Promise` 对象，状态为`resolved`。
```js
const p = Promise.resolve('Hello');

p.then(function (s) {
  console.log(s)
});
// Hello
```
4. 不带有任何参数
`Promise.resolve()`方法允许调用时不带参数，直接返回一个`resolved`状态的 `Promise` 对象。
```js
const p = Promise.resolve();

p.then(function (res) {
  console.log(res) // undefined
});
```

### 七、Promise.reject()
`Promise.reject(reason)`方法也会返回一个新的` Promise `实例，该实例的状态为`rejected`。
```js
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```
**`Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。**
```js
let params = '出错了'  
Promise.reject(params)
.catch(e => {
  console.log(e === params)
})
// true
```
此处，无论`params`是字符串、普通对象或者`promise`对象，都会原封不动作为`reject`的理由，变成后续方法的参数


### 八、Promise.all()
`Promise.all()`方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。
```js
const p = Promise.all([p1, p2, p3]);
```
上面代码中，`Promise.all()`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是 `Promise` 实例，如果不是，就会先调用`Promise.resolve`方法，将参数转为 `Promise` 实例，再进一步处理。另外，`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。
1. 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

2. 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给p的回调函数。

```js
let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})
 
let p2 = Promise.resolve('success')
 
let p3 = Promise.reject('失败')

let p4 = Promise.reject('我失败').catch(error => {
    console.log(error)
})
 
Promise.all([p1, p2]).then((result) => {
  console.log(result)  //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})
 
Promise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // '失败' 
})

Promise.all([p1,p4]).then((result) => {
  console.log(result) // ["成功了", undefined]
}).catch((error) => {
  console.log(error)   
})
```
**注意点**：
- `Promise.all`获得的成功结果的数组里面的数据顺序和`Promise.all`接收到的数组顺序是一致的, 不会因为响应的先后而改变
- 如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`ejected`，并不会触发`romise.all()`的`catch`方法。如`p4`有自己的`catch`方法，该方法返回的是一个新的 `Promise` 实例，`p4`指向的实际上是这个实例。该实例执行完`catch`方法后，也会变成`resolved`，



### 九、Promise.race()
`Promise.race()`方法同样是将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。
```js
const p = Promise.race([p1, p2, p3]);
```
上面代码中，只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 `Promise` 实例的返回值，就传递给`p`的回调函数。

`Promise.race()`方法的参数与`Promise.all()`方法一样，如果不是 `Promise `实例，就会先调用`Promise.resolve()`方法，将参数转为 `Promise` 实例，再进一步处理。

下面是一个例子，如果指定时间内没有获得结果，就将 `Promise` 的状态变为`reject`，否则变为`resolve`。
```js
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
```
上面代码中，如果 5 秒之内`fetch`方法无法返回结果，变量p的状态就会变为`rejected`，从而触发`catch`方法指定的回调函数。


### 十、Promise.allSettled()

ES2020 引入了`Promise.allSettled()`方法，用来确定一组异步操作是否都结束了（不管成功或失败）。

`Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 `Promise` 对象，并返回一个新的 `Promise` 对象。
```js
const p1 = Promise.resolve(42);
const p2 = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([p1, p2]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```
注意： 
1. 只有等到参数数组的所有 `Promise` 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 `Promise` 对象才会发生状态变更。
2. 返回的新的 `Promise` 实例，一旦发生状态变更，状态总是`fulfilled`，不会变成`rejected`
3. 状态变成`fulfilled`后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 `Promise` 对象。每个成员是固定的对象格式，对应异步操作的结果。
```js
// 异步操作成功时
{status: 'fulfilled', value: value}

// 异步操作失败时
{status: 'rejected', reason: reason}
```
成员对象的`status`属性的值只可能是字符串`fulfilled`或字符串`rejected`，用来区分异步操作是成功还是失败。如果是成功（`fulfilled`），对象会有`value`属性，如果是失败（`rejected`），会有`reason`属性，对应两种状态时前面异步操作的返回值。


results的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。


### 十一、Promise.any()
ES2021 引入了`Promise.any()`方法，该方法接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例返回。
```js
Promise.any([
  fetch('https://v8.dev/').then(() => 'home'),
  fetch('https://v8.dev/blog').then(() => 'blog'),
  fetch('https://v8.dev/docs').then(() => 'docs')
]).then((first) => {  // 只要有一个 fetch() 请求成功
  console.log(first);
}).catch((error) => { // 所有三个 fetch() 全部请求失败
  console.log(error);
});
```
只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

`Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 `Promise` 变成`rejected`状态而结束，必须等到所有参数 `Promise` 变成`rejected`状态才会结束。

下面是`Promise()`与`await`命令结合使用的例子。

```js
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];

try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}
```
上面代码中，`Promise.any()`方法的参数数组包含三个 `Promise` 操作。其中只要有一个变成`fulfilled`，`Promise.any()`返回的 `Promise` 对象就变成`fulfilled`。如果所有三个操作都变成`rejected`，那么`await`命令就会抛出错误。



### 十二、应用 
#### 加载图片
将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化。

```js
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

#### Generator 函数与 Promise 的结合 
使用 `Generator` 函数管理流程，遇到异步操作的时候，通常返回一个`Promise`对象。
```js
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);
```

上面代码的 `Generator` 函数`g`之中，有一个异步操作`getFoo`，它返回的就是一个`Promise`对象。函数`run`用来处理这个`Promise`对象，并调用下一个`next`方法。


***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/#docs/proxy)