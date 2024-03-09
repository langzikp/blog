
## ES6之 export 和 import
ES6新增模块功能，主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。
- export 
- import
- export default命令
- export 与 import 的复合写法
- 跨模块常量  
- import()
- ES6 模块与 CommonJS 模块的差异
- Node.js 的模块加载方法

**注意：ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict"。**
### 一. export
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量。
- 基本语法
```js
// config.js
export var name = '张三';
export var age = 55;
export function multiply(x, y) {
  return x * y;
}
```
另外一种推荐写法是，使用大括号指定所要输出的一组变量，如下：
```js
// config.js
var name = '张三';
var age = 55;
function multiply(x, y) {
  return x * y;
};
export {name, age, multiply};
```
优先考虑这种写法，这样在尾部一眼就看清楚输出了哪些变量。
- 使用`as`关键字重命名
```js
function fn1() { ... }
function fn1() { ... }

export {
  fn1 as print,
  fn2 as multiply1,
  fn2 as multiply2
};
// 重命名后，fn2 可以用不同的名字输出两次
```
- **注意**
1. `export`命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
```js
// 报错
export 1;

// 报错
var m = 1;
export m;
```
上面的写法是直接输出1，而不是接口。正确的写法如下：
```js
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
2. `export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
```js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
// 上面代码输出变量foo，值为bar，500 毫秒之后变成baz。
```

3. `export`命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错。`import`命令也是如此。
```js
function foo() {
  export default 'bar' // SyntaxError
}
foo()
```

### 二. import
使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。
```js
// config-module.js
var name = '张三';
var age = 55;
function multiply(x, y) {
  return x * y;
};
export {name, age, multiply};
```
- 多种导入方式
1.  从模块中导入单个导出
```js
import { name } from 'config-module';
``` 
2.  从模块中导入多个导出
```js
import { name, age, multiply } from 'config-module';
```  
3. 导入整个模块
整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
```js
import * as config from 'config-module';
console.log(config.name) // '张三'
console.log(config.multiply(5, 9)) // 45
``` 
4. 仅导入用于副作用的模块
不导入模块中的任何内容（接口）。这将运行模块中的全局代码，但实际上不导入任何值。
```js
import './config-module';
```

- 使用`as`关键字，将输入的变量重命名。
```js
import { name as user } from './config.js';
```

- **注意**
1. `import`输入的变量都是只读的，因为它的本质是输入接口。不允许在加载模块的脚本里面，改写接口。
```js
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```
如果输入的是一个对象，可以修改属性
```js
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```
**修改属性后，其他模块将读到改写后的值，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。**  
2. `import`命令具有提升效果，会提升到整个模块的头部，首先执行。
```js
fn();

import { fn } from 'module.js';
```

3. 由于`import`是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
```js
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

4. 使用`import`语句执行所加载的模块
这将运行模块中的全局代码，但实际上不导入任何值。
```js
// 仅执行lodash模块，但是不输入任何值
import 'lodash';
```
5. 多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次
```js
import 'lodash';
import 'lodash';
// 只会执行一次

import { foo } from 'module';
import { bar } from 'module';

// 等同于
import { foo, bar } from 'module';
```
虽然`foo`和`bar`在两个语句中加载，但是它们对应的是同一个`my_module`模块。也就是说，`import`语句是 `Singleton` 模式。

### 三. export default命令
`export default`命令，为模块指定默认输出。
```js
// config.js
export default {
    name: '张三',
    fn(){}
}

// main.js
import config from 'config'

console.log(config.name)
console.log(config.fn())
```
**注意**：这时`import`命令后面，不使用大括号。并且可以指定任意名字。

```export default```命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，`import`命令后面才不用加大括号，因为只可能唯一对应`export default`命令。  

**本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字**
```js
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

- 如果想在一条`import`语句中，同时输入默认方法和其他接口，可以写成下面这样。
```js
import _, { each, forEach } from 'lodash';
```

### 四. export 与 import 的复合写法
如果在一个模块之中，先输入，后输出同一个模块，`import`语句可以与`export`语句写在一起。
```js
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```
**注意：**
 写成一行以后，`foo`和`bar`实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用`foo`和`bar`。

- 接口改名
```js
export { foo as myFoo } from 'my_module';
```
- 整体输出
```js
export * from 'my_module';
```
- 默认接口的输出
```js
export { default } from 'foo';
```
- 具名接口改为默认接口
```js
export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;

```
### 五. 跨模块常量
```js
// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
```
业务中可能有很多常量，在不同模块使用，可以建一个专门的`constants`目录，将各种常量写在不同的文件里面，保存在该目录下
```js
// constants/db.js
export const db = {
  url: 'http://my.couchdbserver.local:5984',
  admin_username: 'admin',
  admin_password: 'admin password'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];
```
然后，将这些文件输出的常量，合并在index.js里面。
```js
// constants/index.js
export {db} from './db';
export {users} from './users';
```
使用的时候，直接加载`index.js`就可以了。
```js
// script.js
import {db, users} from './constants/index';
```

### 六. import()
`import` 命令会被 JavaScript 引擎静态分析, 先于模块内的其他语句执行,虽然有利于编译器提高效率，但也导致无法在运行时加载模块。  
`ES2020`提案 引入`import()`函数，支持动态加载模块。
- `import()`返回一个 `Promise` 对象
```js
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
```
- `import()`是异步加载，推荐使用`await`命令，使代码更清晰
```js
async function renderWidget() {
  const container = document.getElementById('widget');
  if (container !== null) {
    // 等同于
    // import("./widget").then(widget => {
    //   widget.render(container);
    // });
    const widget = await import('./widget.js');
    widget.render(container);
  }
}

renderWidget();
```
**适用场合**
1. 按需加载
```js
// click事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```
2. 条件加载
```js
// 在if代码块，根据不同的情况，加载不同的模块
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
```
3. 动态的模块路径
```js
// 函数getUrl的返回结果，加载不同的模块
import(getUrl()).then(...);
```

**注意**  
`import()`加载模块成功以后，这个模块会作为一个对象，当作`then`方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口。
```js
import('./myModule.js')
.then(({export1, export2}) => {
  // ...·
});
```

### 七. ES6 模块与 CommonJS 模块的差异
 ES6 模块与 CommonJS 模块完全不同。有三个重大差异：
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的`require()`是同步加载模块，ES6 模块的`import()`命令是异步加载，有一个独立的模块依赖的解析阶段。


第二个差异是因为 CommonJS 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

重点解释一下第一个差异：  
**CommonJS 模块输出的是值的拷贝**，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```
上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的`mod.counter`了。这是因为`mod.counter`是一个原始类型的值，除非写成一个函数，才能得到内部变动后的值。
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
```
如上：`counter`属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量`counter`的变动了

ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。**ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块**。
```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```
**注意**: 
- ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
```js
// lib.js
export let obj = {};

// main.js
import { obj } from './lib';

obj.prop = 123; // OK
obj = {}; // TypeError
```
- export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
```js
// mod.js
function C() {
  this.sum = 0;
  this.add = function () {
    this.sum += 1;
  };
  this.show = function () {
    console.log(this.sum);
  };
}

export let c = new C();

// x.js
import {c} from './mod';
c.add();

// y.js
import {c} from './mod';
c.show(); 

// main.js
import './x';
import './y';

// 输出： 1
```

### 八. Node.js 的模块加载方法
JavaScript 现在有两种模块。一种是 ES6 模块，简称 `ESM`；另一种是 CommonJS 模块，简称 `CJS`。  
CommonJS 模块是 Node.js 专用的，CommonJS 模块使用`require()`和`module.exports`，ES6 模块使用`import`和`export`。

Node加载 ES6 模块会依次寻找以下脚本，与require()的规则一致。
```js
import './foo'
// 依次寻找
//  ./foo.js
//  ./foo/package.json
//  ./foo/index.js

import 'baz'
// 依次寻找
//  ./mode_modules/baz.js
//  ./mode_modules/baz/package.json
//  ./mode_modules/baz/index.js
//  寻找上一级目录
//  ../mode_modules/baz.js
//  ../mode_modules/baz/package.json
//  ../mode_modules/baz/index.js
//  再上一级目录...
```
 ES6 模块之中，顶层的`this`指向`undefined`，`CommonJS` 模块的顶层`this`指向当前模块，这也两者的一个重大差异。

 ### nodejs 中 `module.erports` 和 `exports`的区别
 为了方便开发者便捷的导出，nodejs在初始化完`module.exports`后，有声明了一个变量 `exports = module.exports`
 ```js
(function(module){
  module.exports = {};
  var exports = module.exports;
  // 模块中的代码
  return module.exports
})()

 ```
可以看出，`exports`指向的就是`module.exports`， 但**最终返回的是`module.exports`**,   所以不要直接对`exports`进行赋值操作, 导入后是获取不到的
```js
// index.js
exports = {'a': 1}  
exports = 'a'

module.exports = {a: 2}

// 导入后 获取到的是 {a: 2}
var obj = require('./index.js')
console.log(obj) // {a: 2}
```
--- 

从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。要求 ES6 模块采用`.mjs`后缀文件名，默认启用严格模式，不必在每个模块文件顶部指定`"use strict"`。

如果不希望将后缀名改成`.mjs`，可以在项目的`package.json`文件中，指定`type`字段为`module`。
```js
{
   "type": "module"
}
```
一旦设置了以后，该项目的 JS 脚本，就被解释成 ES6 模块。

如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成`.cjs`。如果没有`type`字段，或者`type`字段为`commonjs`，则`.js`脚本会被解释成 CommonJS 模块。

总结为一句话：`.mjs`文件总是以 ES6 模块加载，`.cjs`文件总是以 CommonJS 模块加载，`.js`文件的加载取决于`package.json`里面type字段的设置。





***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)