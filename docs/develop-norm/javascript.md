# Javascript开发规范
> 软件的长期价值直接源于其编码质量。 在它的整个生命周期里,一个程序可能会被许多人阅读或修改。 如果一个程序可以清晰的展现出它的结构和特征,那就能减少在以后对其进行修改时出错的可能性。

> 编程规范可以帮助程序员们增加程序的健壮性。

> 所有的 javascript 代码都是暴露给公众的，所以我们更应该保证其质量。

## 代码缩进与换行
### 缩进  
  - 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符;
  - switch 下的 case 和 default 必须增加一个缩进层级。
```js
// 推荐
switch (variable) {
    case '1':
        // do...
        break;
    case '2':
        // do...
        break;
    default:
        // do...
}

// 不推荐
switch (variable) {
case '1':
    // do...
    break;
case '2':
    // do...
    break;
default:
    // do...
}
```
### 空格
  - 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格;
```js
var a = !arr.length;
a++;
a = b + c;
```
- 用作代码块起始的左花括号 { 前必须有一个空格。
```js
// 推荐
if (condition) {
}

while (condition) {
}

function funcName() {
}

// 不推荐
if (condition){
}

while (condition){
}

function funcName(){
}
```
- if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格。
```js
// 推荐
if (condition) {
}

while (condition) {
}

(function () {
})();

// 不推荐
if(condition) {
}

while(condition) {
}

(function() {
})();
```

- 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格。
```js
// 推荐
var obj = {
    a: 1,
    b: 2,
    c: 3
};

// 不推荐
var obj = {
    a : 1,
    b:2,
    c :3
};
```
- 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格。
```js
// 推荐
function funcName() {
}

var funcName = function funcName() {
};

funcName();

// 不推荐
function funcName () {
}

var funcName = function funcName () {
};

funcName ();
```
- , 和 ; 前不允许有空格。
```js
// 推荐
callFunc(a, b);

// 不推荐
callFunc(a , b) ;
```
- 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格。
```js
// 推荐

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// 不推荐

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}
```
- 单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格。
  - 声明包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行。元素复杂的情况，还是应该换行书写。
```js
// 推荐
var arr1 = [];
var arr2 = [1, 2, 3];
var obj1 = {};
var obj2 = {name: 'obj'};
var obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// 不推荐
var arr1 = [ ];
var arr2 = [ 1, 2, 3 ];
var obj1 = { };
var obj2 = { name: 'obj' };
var obj3 = {name: 'obj', age: 20, sex: 1};
```
- 行尾不得有多余的空格。

### 换行
- 每个独立语句结束后必须换行。
- 每行不得超过 120 个字符。
- 运算符处换行时，运算符必须在新行的行首。
```js
// 推荐
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

var result = number1 + number2 + number3
    + number4 + number5;


// 不推荐
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

var result = number1 + number2 + number3 +
    number4 + number5;
```
- 在函数声明、函数表达式、函数调用、对象创建、数组创建、for语句等场景中，不允许在 , 或 ; 前换行。
```js
// 推荐
var obj = {
    a: 1,
    b: 2,
    c: 3
};

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);


// 不推荐
var obj = {
    a: 1
    , b: 2
    , c: 3
};

foo(
    aVeryVeryLongArgument
    , anotherVeryLongArgument
    , callback
);
```

- 不同行为或逻辑的语句集，使用空行隔开，更易阅读。
```js
// 仅为按逻辑换行的示例，不代表setStyle的最优实现
function setStyle(element, property, value) {
    if (element == null) {
        return;
    }

    element.style[property] = value;
}
```
-  在语句的行长度超过 120 时，根据逻辑条件合理缩进。
```js
// 较复杂的逻辑条件组合，将每个条件独立一行，逻辑运算符放置在行首进行分隔，或将部分逻辑按逻辑组合进行分隔。
// 建议最终将右括号 ) 与左大括号 { 放在独立一行，保证与 if 内语句块能容易视觉辨识。
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

// 按一定长度截断字符串，并使用 + 运算符进行连接。
// 分隔字符串尽量按语义进行，如不要在一个完整的名词中间断开。
// 特别的，对于HTML片段的拼接，通过缩进，保持和HTML相同的结构。
var html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
    + '<article>'
    +     '<h1>Title here</h1>'
    +     '<p>This is a paragraph</p>'
    +     '<footer>Complete</footer>'
    + '</article>';

// 也可使用数组来进行拼接，相对 + 更容易调整缩进。
var html = [
    '<article>',
        '<h1>Title here</h1>',
        '<p>This is a paragraph</p>',
        '<footer>Complete</footer>',
    '</article>'
];
html = html.join('');

// 当参数过多时，将每个参数独立写在一行上，并将结束的右括号 ) 独立一行。
// 所有参数必须增加一个缩进。
foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);

// 也可以按逻辑对参数进行组合。
// 最经典的是baidu.format函数，调用时将参数分为“模板”和“数据”两块
baidu.format(
    dateFormatTemplate,
    year, month, date, hour, minute, second
);

// 当函数调用时，如果有一个或以上参数跨越多行，应当每一个参数独立一行。
// 这通常出现在匿名函数或者对象初始化等作为参数时，如setTimeout函数等。
setTimeout(
    function () {
        alert('hello');
    },
    200
);

order.data.read(
    'id=' + me.model.id, 
    function (data) {
        me.attchToModel(data.result);
        callback();
    }, 
    300
);

// 链式调用较长时采用缩进进行调整。
$('#items')
    .find('.selected')
    .highlight()
    .end();

// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况。
var result = thisIsAVeryVeryLongCondition
    ? resultA : resultB;

var result = condition
    ? thisIsAVeryVeryLongResult
    : resultB;

// 数组和对象初始化的混用，严格按照每个对象的 { 和结束 } 在独立一行的风格书写。
var array = [
    {
        // ...
    },
    {
        // ...
    }
];
```

### 语句
- 不得省略语句结束的分号。
- 在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}。
```js
// 推荐
if (condition) {
    callFunc();
}

// 不推荐
if (condition) callFunc();
if (condition)
    callFunc();
```

- 函数定义结束不允许添加分号。
```js
// 推荐
function funcName() {
}

// 不推荐
function funcName() {
};

// 如果是函数表达式，分号是不允许省略的。
var funcName = function () {
};
```
- IIFE 必须在函数表达式外添加 `(`，非 IIFE 不得在函数表达式外添加 `(`。
IIFE = Immediately-Invoked Function Expression  立即调用的函数表达式 。  

额外的 `(` 能够让代码在阅读的一开始就能判断函数是否立即被调用，进而明白接下来代码的用途。而不是一直拖到底部才恍然大悟。
```js
// 推荐
var task = (function () {
   // Code
   return result;
})();

var func = function () {
};


// 不推荐
var task = function () {
    // Code
    return result;
}();

var func = (function () {
});
```

##  命名规范
- 变量，函数 使用小驼峰式命名法；
- 常量 使用全部大写；
- 构造函数 使用大驼峰式命名法。
- 类的成员包含：
  - 公共属性和方法：跟变量和函数的命名一样；
  - 私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。
```js
// 变量
var firstName  = 10;
// 函数
function getName() {
    return this.name;
}
// 常量
var MAX_COUNT = 10;
var URL = 'http://www.baidu.com';
// 构造函数
function Student(name) {
    this.name = name;
}
var st = new Student('tom');
// 类成员
function Student(name) {
    // 私有属性
    var _name = name; 
 
    // 公共方法
    this.getName = function () {
      return _name;
    }
 
    // 公共方法
    this.setName = function (value) {
      _name = value;
    }
}
var st = new Student('nielang');
```

##  注释规范
- 单行注释
  - 单独一行：//(双斜线)与注释文字之间保留一个空格；
  - 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格；
  - 注释代码：//(双斜线)与代码之间保留一个空格。
```js
// 调用了一个函数；1)单独在一行
setTitle();
 
var maxCount = 10; // 设置最大量；2)在代码后面注释
 
// setName(); // 3)注释代码
```
- 多行注释
  - 若开始(/*)和结束(*/)都在一行，推荐采用单行注释；
  - 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。
```js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```
- 函数(方法)注释
  - 有参数和返回值时，必须有注释标志；
  - 参数和返回值必须包含类型信息和说明；
  - 当函数是内部函数，外部不可以访问时，可以使用@inner来标识。
|  注释名   | 语法  |  含义  |  示例  |      
|  ----   | ----   |  ----   |  ---- |
| @param  | @param {参数类型} 参数名  描述信息 |	描述参数的信息 |	@param {String} name 传入名称
| @return | @return {返回类型} 描述信息 |	描述返回值的信息 |	@return {Boolean} true:可执行;false:不可执行
| @author  | @author 作者信息 [附属信息：如邮箱、日期] |	描述此函数作者的信息 |	@author 聂浪 2020/01/01 
| @version  | @version XX.XX.XX |	描述此函数的版本号 | @version 1.0.0
| @example  | @example 示例代码 |	演示函数的使用 | @example setTitle('测试')
```js
/**
 * 函数描述
 *
 * @param {string} title 参数1的说明
 * @return {string} 返回值描述
 * @author 聂浪 2020/01/01 
 * @version 1.0.0
 * @example {Object} 返回值描述
 
 */
function setTitle(title) {
  // Do Something
}
```

- 文件注释
  - 文件注释用于告诉不熟悉这段代码的读者这个文件中包含哪些东西。
  - 文件注释要标明作者、文件版本、创建/修改时间、重大版本修改记录；
 ```js
  /**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @author nielang@qq.com (Firstname Lastname)
 * Copyright 2020 abacus Inc. All Rights Reserved.
 */
 ```
- 命名空间注释
  - 命名空间使用 @namespace 标识。
```js
/**
 * @namespace 
 */
var util = {};
```

- 细节注释  
对于内部实现、不容易理解的逻辑说明、摘要信息等，我们可能需要编写细节注释。
  - 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。
  - 有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：
    1. TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
    2. FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
    3. HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
    4. XXX: 该处存在陷阱。此时需要对陷阱进行描述
```js
function foo(p1, p2) {
    // 这里对具体内部逻辑进行说明
    // 说明太长需要换行
    for (...) {
        ....
    }
}
```



