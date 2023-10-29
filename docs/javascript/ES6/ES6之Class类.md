
# ES6之Class(类)
`ES6`引入了 Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。

### 一、 基本语法
#### 1. 类的由来
`ES5`中，生成实例对象的传统方法是通过构造函数，如下：
```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
相比传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。 
于是  `ES6` 提供了更接近传统语言的写法，引入了 `Class`（类）这个概念，  
上面的代码用 `ES6` 的`class`改写，就是下面这样
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
const p = new Point(1, 2);
```
其中`constructor()`方法，就是构造方法，而`this`关键字则代表实例对象；`constructor()`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。
 
- 一个类必须有`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加;
- 定义方法的时候，前面不需要加上`function`这个关键字（如`toString`），直接把函数定义放进去了就可以了； 
- 方法与方法之间不需要逗号分隔，加了会报错。
```js
// ES6 的类，完全可以看作构造函数的另一种写法。
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```
上面代码表明，类的数据类型就是函数，类本身就指向构造函数。事实上，类的所有方法都定义在类的`prototype`属性上面。

注意点： 
- 类的内部所有定义的方法，都是不可枚举的
- class 的本质是 function
- 它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法
- 类不可重复声明
- 类定义不会被提升，这意味着必须在访问前对类进行定义，否则就会报错

#### 2. 类的实例
1. 生成类的实例的写法，必须使用`new`命令。
2. 类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在`class`上）。
3. 类的所有实例共享一个原型对象
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false

var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__ === p2.__proto__
```
`ES2022` 为类的实例属性，又规定了一种新写法,  
可以将属性定义在类的最顶层，不需要在实例属性前面加上`this`。
```js
class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    // ...
  }
}
```

#### 3. 取值函数（getter）和存值函数（setter）
与 `ES5` 一样，在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```
#### 4. 属性表达式
```js
// 类的属性名，可以采用表达式
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```
上面代码中，`Square`类的方法名`getArea`，是从表达式得到的。
#### 5. Class 表达式
```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```
需要注意的是，这个类的名字是`Me`，但是`Me`只在 `Class` 的内部可用，指代当前类。在 `Class` 外部，这个类只能用`MyClass`引用。
```js
let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
```
采用 `Class` 表达式，可以写出立即执行的 `Class`。
```js
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
```
#### 6. 静态方法
在方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
注意:
- 如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例
- 静态方法可以与非静态方法重名
```js
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello
```
- 父类的静态方法，可以被子类继承

```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod() // 'hello'
```
#### 7. 静态属性
静态属性指的是 `Class` 本身的属性，即`lass.propName`，而不是定义在实例对象（`this`）上的属性。
```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

#### 8. 私有属性和私有方法
`ES2022`正式为`class`添加了私有属性，方法是在属性名之前使用`#`表示。
```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}

const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错
```
上面代码中，`#count`就是私有属性，**只能在类的内部使用（`this.#count`）**。如果在类的外部使用，就会报错。   

注意:  
- 不管在类的内部或外部，读取一个不存在的私有属性，都会报错
- 私有属性的属性名必须包括`#`，如果不带`#`，会被当作另一个属性  

`#`也用来定义私有方法 和 私有 `getter` 和 `setter` 方法
```js
class Foo {
  #xValue = 0;

  constructor() {
    console.log(this.#x);
  }

  #print() {
    console.log(this.#xValue)
  }

  get #x() { return this.#xValue; }
  set #x(value) {
    this.#xValue = value;
  }
}
```
上面代码允许从实例`foo`上面引用私有属性。

私有属性不限于从`this`引用，只要是在类的内部，实例也可以引用私有属性
```js
lass Foo {
  #privateValue = 42;
  static getPrivateValue(foo) {
    return foo.#privateValue;
  }
}

Foo.getPrivateValue(new Foo()); // 42
```
上面代码允许从实例`foo`上面引用私有属性。

私有属性和私有方法前面，也可以加上`static`关键字，表示这是一个静态的私有属性或私有方法。
```js
class FakeMath {
  static PI = 22 / 7;
  static #totallyRandomNumber = 4;

  static #computeRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }

  static random() {
    console.log('I heard you like random numbers…')
    return FakeMath.#computeRandomNumber();
  }
}

FakeMath.PI // 3.142857142857143
FakeMath.random()
// I heard you like random numbers…
// 4
FakeMath.#totallyRandomNumber // 报错
FakeMath.#computeRandomNumber() // 报错
```
上面代码中，`#totallyRandomNumber`是私有属性，`#computeRandomNumber()`是私有方法，只能在`FakeMath`这个类的内部调用，外部调用就会报错。

##### `in` 运算符
前面说过，直接访问某个类不存在的私有属性会报错，但是访问不存在的公开属性不会报错。这个特性可以用来判断，某个对象是否为类的实例。
```js
class C {
  #brand;

  static isC(obj) {
    try {
      obj.#brand;
      return true;
    } catch {
      return false;
    }
  }
}
```
上面示例中，类`C`的静态方法`isC()`就用来判断，某个对象是否为`C`的实例。它采用的方法就是，访问该对象的私有属性`#brand`。如果不报错，就会返回`true`；如果报错，就说明该对象不是当前类的实例，从而`catch`部分返回`false`。  

因此，`try...catch`结构可以用来判断某个私有属性是否存在。但是，这样的写法很麻烦，代码可读性很差，`ES2022` 改进了`in`运算符，使它也可以用来判断私有属性。
```js
class C {
  #brand;

  static isC(obj) {
    if (#brand in obj) {
      // 私有属性 #brand 存在
      return true;
    } else {
      // 私有属性 #foo 不存在
      return false;
    }
  }
}
```
也可以跟`this`一起配合使用
```js
class A {
  #foo = 0;
  m() {
    console.log(#foo in this); // true
  }
}
```
注意，
- 判断私有属性时，`in`只能用在类的内部。
- 判断所针对的私有属性，一定要先声明，否则会报错。
```js
class A {
  m() {
    console.log(#foo in this); 
   // 私有属性#foo没有声明，就直接用于in运算符的判断
  }
}
```
- 子类从父类继承的私有属性，也可以使用`in`运算符来判断。
```js
class A {
  #foo = 0;
  static test(obj) {
    console.log(#foo in obj);
  }
}

class SubA extends A {};

A.test(new SubA()) // true
```
- `in`运算符对于`Object.create()`、`Object.setPrototypeOf`形成的继承，是无效的，因为这种继承不会传递私有属性。
```js
class A {
  #foo = 0;
  static test(obj) {
    console.log(#foo in obj);
  }
}
const a = new A();

const o1 = Object.create(a);
A.test(o1) // false
A.test(o1.__proto__) // true

const o2 = {};
Object.setPrototypeOf(o2, a);
A.test(o2) // false
A.test(o2.__proto__) // true
```
上面示例中，对于修改原型链形成的继承，子类都取不到父类的私有属性，所以`in`运算符无效。

#### 9. 静态块
`ES2022` 引入了静态块（`static block`），允许在类的内部设置一个代码块，在类生成时运行且只运行一次，主要作用是对静态属性进行初始化。以后，新建类的实例时，这个块就不运行了。
```js
class C {
  static x = ...;
  static y;
  static z;

  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = ...;
      this.z = ...;
    }
  }
}
```

注意： 
- 每个类允许有多个静态块
- 每个静态块中只能访问之前声明的静态属性 
- 静态块的内部不能有`return`语句
- 静态块内部可以使用类名或`this`，指代当前类

```js
class C {
  static x = 1;
  static {
    this.x; // 1
    // 或者
    C.x; // 1
  }
}

// this.x和C.x都能获取静态属性x。
```


#### 10. 类的注意点
1. 类和模块的内部，默认就是严格模式
2. 类不存在变量提升
3. 类的方法内部如果含有`this`，它默认指向类的实例
4. 类的`name`属性
由于本质上，`ES6` 的类只是 `ES5` 的构造函数的一层包装，所以函数的许多特性都被`Class`继承，包括`name`属性
```js
class Point {}
Point.name // "Point"

// name属性总是返回紧跟在class关键字后面的类名。
```

#### 11. new.target 属性
`new`是从构造函数生成实例对象的命令。`ES6` 为`new`命令引入了一个new.target属性，该属性一般用在构造函数之中，返回`new`命令作用于的那个构造函数。如果构造函数不是通过`new`命令或`Reflect.construct()`调用的，`new.target`会返回`undefined`.

- 下面面代码确保构造函数只能通过`new`命令调用。
```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错v
```
- Class 内部调用`new.target`，返回当前 `Class`
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

var obj = new Rectangle(3, 4); // 输出 true
```
- 子类继承父类时，`new.target`会返回子类。
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length, width) {
    super(length, width);
  }
}

var obj = new Square(3); // 输出 false
```

### 二、 类的继承
`Class` 可以通过`extends`关键字实现继承，让子类继承父类的属性和方法
#### 1. 简介
```js
// 父类
class Point { /* ... */ }
// 子类
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```
其中，`super`在这里表示父类的构造函数，用来新建一个父类的实例对象  
 
`ES6` 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象。

注意点： 
1. 在子类的构造函数中，只有调用`super()`之后，才可以使用`this`关键字
2. 任何一个子类都有`constructor()`方法，如果子类没有定义`constructor()`方法，这个方法会默认添加，并且里面会调用`super()`。

#### 2. 私有属性和私有方法的继承
父类所有的属性和方法，都会被子类继承，除了私有的属性和方法。

子类无法继承父类的私有属性，或者说，私有属性只能在定义它的 `class` 里面使用。
```js
class Foo {
  #p = 1;
  #m() {
    console.log('hello');
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log(this.#p); // 报错
    this.#m(); // 报错
  }
}
```
 如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。
```js
class Foo {
  #p = 1;
  getP() {
    return this.#p;
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log(this.getP()); // 1
  }
}
```
#### 3. 静态属性和静态方法的继承
父类的静态属性和静态方法，也会被子类继承。
```js
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
```

注意：静态属性是通过软拷贝实现继承的
```js
class A { static foo = 100; }
class B extends A {
  constructor() {
    super();
    B.foo--;
  }
}

const b = new B();
B.foo // 99
A.foo // 100
```
示例中，`B` 类继承了 `A`类的静态属性`foo`， `B` 类继承静态属性时，会采用浅拷贝，拷贝父类静态属性的值，因此`A.foo`和`B.foo`是两个彼此独立的属性。如果`foo`是一个对象，则会拷贝其内存地址，那么`B`类对其的修改则会影响到父类`A`，因为它们指向的是同一个对象。
#### 4. Object.getPrototypeOf()
`Object.getPrototypeOf()`方法可以用来从子类上获取父类。
```js
class Point { /*...*/ }

class ColorPoint extends Point { /*...*/ }

Object.getPrototypeOf(ColorPoint) === Point
// true
```
因此，可以使用这个方法判断，一个类是否继承了另一个类。


#### 5. super 关键字
`super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

- `super`作为函数调用时，代表父类的构造函数  

`ES6` 要求，子类的构造函数必须执行一次`super()`函数。  

调用`super()`的作用是形成子类的`this`对象，把父类的实例属性和方法放到这个`this`对象上面。子类在调用`super()`之前，是没有`this`对象的，任何对`this`的操作都要放在`super()`的后面。  

注意，这里的`super`虽然代表了父类的构造函数，但是因为返回的是子类的`this`（即子类的实例对象），所以`super`内部的`this`代表子类的实例，而不是父类的实例，这里的`super()`相当于`A.prototype.constructor.call(this)`（在子类的`this`上运行父类的构造函数）
```js
class A {
  name = 'A';
  constructor() {
    console.log('My name is ' + this.name);
  }
}

class B extends A {
  name = 'B';
  constructor(){
    super()
  }
}

const b = new B(); // My name is A
```
上面示例中，`super()`内部的`this`指向的是`B`，但是这时子类的属性和方法还没有绑定到`this`，所以如果存在同名属性，此时拿到的是父类的属性；
没有同名属性，则是`undefined`。

**注意：作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。**

- `super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```js
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
```
需要注意，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的
```js
class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined
```
如果属性定义在父类的原型对象上，super就可以取到。
```js
class A {}
A.prototype.x = 2;

class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}

let b = new B();
console.log(b.x) // 2
```
- 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
```js
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```
上面代码中，`super.print()`虽然调用的是`A.prototype.print()`，但是`A.prototype.print()`内部的`this`指向子类`B`的实例，导致输出的是`2`，而不是`1`。也就是说，实际上执行的是`super.print.call(this)`。

由于`this`指向子类实例，所以如果通过`super`对某个属性赋值，这时`super`就是`this`，赋值的属性会变成子类实例的属性。
```js
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```
上面代码中，`super.x`赋值为`3`，这时等同于对`this.x`赋值为`3`。而当读取`super.x`的时候，读的是`A.prototype.x`，所以返回`undefined`。

- 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。
```js
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```

- 在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例

```js
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```

注意： 使用`super`的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。
```js
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}
```
由于对象总是继承其他对象的，所以可以在任意一个对象中，使用`super`关键字。
```js
var obj = {
  toString() {
    return "MyObject: " + super.toString();
  }
};

obj.toString(); // MyObject: [object Object]
```


***参考资料***  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/#docs/proxy)