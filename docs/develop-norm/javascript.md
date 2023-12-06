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
- 变量和方法命名见名知意，使用小驼峰命名，避免使用下划线
```js
// bad
let a1 = 1;  // 坚决杜绝使用让人看了也不知道是啥的字母数字组合
const user_last_login_time = {}; // 不要使用下划线命名变量
list(){}; // 只写一个list

// good
const userLastLoginTime = {}; // 小驼峰可读性更高
getUserList(){}; // 方法名最好使用动词+名词的组合
```

- 常量 使用全部大写，使用下划线连接单词；
```js
// 常量
const MAX_COUNT = 10;
const URL = 'http://www.baidu.com';
```

- 构造函数 使用大驼峰式命名法。
```js
// 构造函数
function Student(name) {
    this.name = name;
}
var st = new Student('tom');
```

- 类的成员包含：
  - 公共属性和方法：跟变量和函数的命名一样；
  - 私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。
```js
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

- 方法名定义加上动词前缀
  - 加载数据使用 `load` 前缀，例如：`loadUserData`
  - 获取数据或值使用 `get` 前缀，例如： `getUserAvatar()`
> `load`与`get`的关系是`load`前缀的方法可以包含多个get前缀的方法，`get`不可以包含`load`前缀的方法，可以理解为要加载的数据由一或多个`get`前缀的方法来获取
```js
loadUserData(){
   this.getUserLocation();
   this.getUserInfo();
   ...
 }
```

- 设置数据或值使用 `set/update` 前缀，例如： `updateUserAvatar()`

- 格式化数据使用 `format` 前缀， 例如： `formatUserList()`

- 判断某种条件使用 `judge` 前缀，例如: `judgeCanShowModal()`; `judgeIsVipUser()`; `judgeHasRecord()`;

> 直接使用`isVipUser()`这种命名方式，也可以，但是我更倾向于函数是一个动作，用 `const isVipUser = true` 可以表示一个值，表示一个判断动作的话还是加上前缀比较好。

- 监听事件或数据变化使用 `on` 前缀，例如 `onFilterChanged()`; `onSubmitSuccess()`;

- 点击事件使用 `click/tap` 前缀，例如 `clickUserAvatar()`;

> 移动端开发建议使用`tap`，PC端建议使用`click`

**命名风格全局要统一，有章可循，别这个文件这样，另一个文件又那样了**

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


## 其他规范
#### 严格控制文件行数，最好保持在500行以下   

该拆分的拆分，文件行数过多，可维护性和可读性都很差

拆分维度根据你的需求不同而不同，但是大体的思路可以是common通用方法、utils工具方法、gateway请求方法，presenter数据处理、models数据模型（TS）等，  
还可以根据你的业务逻辑来拆分，总之维度很多，重点是要拆的清晰，一定要避免拆的多而杂，那样还不如不拆

#### 严格控制代码重复率，不要图方便一味复制粘贴  

代码重复率是一个团队代码质量评测一个很重要的指标，显而易见重复代码会占用更多空间，并且会增加维护的困难度，修改你复用的重复代码时很容易漏掉，要耗费额外精力去验证，所以尽量拆出你的复用逻辑，别偷懒，别给自己留坑。  

#### 迭代时做好重构优化代码的准备  

不要为了一时轻松，写迭代需求时就一直在原代码基础上加加加，或者不敢动以前的代码，怕改出问题，如果迭代的新功能有更好的组织形式，多花一点时间去重构优化绝对是值得的，这将长久利于你后续的功能迭代效率，也会丰富你组织代码的经验，再有类似需求时你就可以预先使用更优的代码组织形式，后续产品想要迭代时你将游刃有余。  

当然，这个看个人，你不难受的话那你就可以不重构，但是不能保证看的人不难受，你有自己的认知程度，但不代表你的认知是对的，是好的，对自己的水平要有个充分且客观的认识，而且永远不要认为你负责一个业务这个业务的需求就永远都只给你做，首先公司是不希望一个业务只有一个人了解的，这个懂吧，没有你业务就崩掉这种事绝对不会允许发生，更别提你请个假啥的，所以你的代码总有机会被别人接触，别人对你技术水平的判断就会在这时开始形成。 

所以，发现不合理的时候**「及时重构优化」**，注意关键词，及时！别等到堆成屎山了之后再给自己找借口说什么重构成本大，风险大，我们管不了别人咋写，但是可以时刻对自己的代码负责。

#### 写注释，随手写注释，刻在骨子里，像条件反射一样

不多说，你自己去看看不爱写注释的那位同事的代码，感受一下，你就明白为啥注释这么重要了，或者简单点，你就看你自己没写注释的代码，一个月前两个月前的，你还能完全捋清楚当时的思路不？

方法最好都写注释，变量名等如果你觉得实习生都可以轻松看懂的部分可以不写

#### 方法、类、组件遵循职责单一原则

内部所做的事情要与名字契合，不要额外写无关的逻辑
```js
// 判断是否新用户
  judgeIsNewUser(user) {
    const isNewUser = true;
    sendMessage(isNewUser); // 该方法的职责仅仅是判断是否新用户，这里调用了发送消息方法，做了额外的事，
    return isNewUser;
  }
```

缺点之一就是有别处想获取是否是新用户时调用该方法，也会调用sendMessage方法，那你说我可以传个参数加个判断，兄弟，咱别把代码写成x好么，你这一层套一层的何必呢，别人看你代码的时候顺着你给的线索捋？说好的只是判断新用户，咋又顺带干了别的活呢，那还能信任你的命名了么，再看你其他代码的时候是不是就心怀顾忌了


#### 不要使用变量拼接会经常被全局搜索的字符串
```js
const str = 'default';
const defaultAvatar = `https://www.aa.com/imgs/${str}-avatar.png`;
```
这样如果你想搜索哪里用到了default-avatar.png这个图片是搜不到的， 类似的还有跳转路径，埋点标识等，要格外注意。

#### 使用ES6+语法，简化代码，提高效率

#### 列表渲染和条件渲染写在标签的第一个属性
```js
// Vue
<div v-if="show" id="" class=""></div>
<div v-else id="" class=""></div>
// 小程序
<view wx:if="{{show}}" id="" class=""></view>
<view wx:else id="" class=""></view>
<view wx:for="{{list}}" wx:key="index" id="" class="" data-index="{{index}}" bindtap="clickBtn" ></view> 
```
这样写可以增加可读性，可以更快速直观地看出来元素之间的关系，以及是否渲染，如何渲染，这些信息比其他属性更主要。其他框架同理。

原则上还是那句话，**有章可循**，不要杂乱无章就好。



***部分内容摘录文章***
- [想成为优秀前端，你需要知道这些！（基本素养、代码规范、开发技巧）](https://mp.weixin.qq.com/s/Ckvk7SFSaHMaHLorsZ5ICg)