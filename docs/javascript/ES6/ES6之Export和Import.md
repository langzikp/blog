
## ES6之 export 和 import
ES6新增模块功能，主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。
- export 
- import
- export default命令
- export 与 import 的复合写法
- 跨模块常量  
- import()

**注意：ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict"。**
### 一. export
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
- 基本语法
```js
// config.js
export var name = '张三';
export var age = 55;
export function multiply(x, y) {
  return x * y;
};
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
虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module模块。也就是说，`import`语句是 `Singleton` 模式。

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

- 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
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
**注意：**写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

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
业务中可能有很多常量，在不同模块使用，可以建一个专门的constants目录，将各种常量写在不同的文件里面，保存在该目录下
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
使用的时候，直接加载index.js就可以了。
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

***参考资料***
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)