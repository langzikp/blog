# JavaScript

## JavaScript 中什么是基本数据类型什么是引用数据类型？以及各个数据类型是如何存储的？
- 基本数据类型有（7种）：Number； String；Boolean；Null；Undefined；Symbol(ECMAScript 2015 新增)；BigInt（ECMAScript 2020 新增)  

- 引用数据类型统称为 Object 类型，细分的话有Object；Array；Function；Date；RegExp  

> 基本数据类型的数据直接存储在栈中；而引用数据类型的数据存储在堆中，在栈中保存数据的引用地址，这个引用地址指向的是对应的数据，以便快速查找到堆内存中的对象。  

> 顺便提一句，栈内存是自动分配内存的。而堆内存是动态分配内存的，不会自动释放。所以每次使用完对象的时候都要把它设置为 null，从而减少无用内存的消耗

## 在 JS 中为什么 0.2+0.1>0.3?
js中采用的是`IEEE754`规范中64位双精度浮点数编码;其中的 1 位表示符号位，11 位用来表示指数位，剩下的有 52 位表示尾数位。  
0.1和0.2转化为二进制后都是无限循环数，会进行舍入操作(0舍1入)后保留52位  
```js
// 0.1 和 0.2 都转化成二进制后， 再进行运算
0.00011001100110011001100110011001100110011001100110011010 +
0.0011001100110011001100110011001100110011001100110011010 =
0.0100110011001100110011001100110011001100110011001100111

// 转成十进制正好是 0.30000000000000004
```
[小数的十进制转二进制方法](https://jingyan.baidu.com/article/425e69e6e93ca9be15fc1626.html)

**为什么 0.2+0.3=0.5 呢?**  
0.2 和 0.3 都转化为二进制后再进行计算，相加后截取保留52位，转化为十进制刚好就是0.5。

**那既然 0.1 不是 0.1 了，为什么在 console.log(0.1)的时候还是 0.1 呢?**  
在 console.log 的时候会二进制转换为十进制，十进制再会转为字符串的形式，在转
换的过程中发生了取近似值，所以打印出来的是一个近似值的字符串。


**总结**  
计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法  

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差。

**解决方案:**
1. 小数转成整数后再运算
2. 使用第三方库，如`Math.js`、`BigDecimal.js`、`Big.js`


## 判断数据类型的几种方法

- typeof 
主要用于检测基本数据类型，但不能区分null和object  
```js
typeof ''; // string 有效
typeof 1; // number 有效
typeof Symbol(); // symbol 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof new Function(); // function 有效

typeof null; //object 无效
typeof [] ; //object 无效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效

缺点：typeof null，[],new Date(),new RegExp()的值为 均为Object,不能区分是null还是Object,也不能区分object类型的具体类型
```

- instanceof 
主要用于检测引用类型，对于基本数据类型需要实例对应的数据类型

缺点：  
1.只能判断对象是否存在于目标对象的原型链上   
2.原型链可以重构，导致结果不准确
```js
console.log(123 instanceof Object);  //false
console.log(new Number(123) instanceof Number); //true

console.log(new String('123') instanceof String);  //true
console.log('123' instanceof String);  //false

console.log([] instanceof Array);  //true
console.log({} instanceof Object); //true
```

- constructor
constructor 是 Object 类型的原型属性，它能够返回当前对象的构造器（类型函数）。利用该属性，可以检测复合型数据的类型，如对象、数组和函数等。  
缺点： null、undefined不能判断


- Object.prototype.toString.call()
[Object.prototype.toString.call解析](https://blog.csdn.net/hanyanshuo/article/details/104620122)  
缺点：不能细分为谁谁的实例

## 对于isNaN 和 Number.isNaN 函数区别的理解。

isNaN函数 会将参数转换为数值，如果转换后是Number类型则返回true，否则返回false；  

Number.isNaN会严格盘点参数是否为NaN，不会进行类型转换，只有参数是值为NaN的数字是才返回true

## JavaScript中，对于hasOwnProperty函数的理解。
hasOwnProperty函数用于指示对象自身（不包括原型链）是否具有指定名称的属性，有返回true，没有则返回false 

## Object.is()与原来的比较操作符"==="、"==”的区别。
- Object.is() 与 “==” 的区别在于： “==” 会在判断相等前对两边的变量（如果类型不相同）进行强制类型转换（会将 "" == false 判断为true），而Object.is()不会进行强制类型转换。



- Object.is() 与 “===” 的区别在于：它们对有符号的 0 和 NaN 判断不同，“===”将 +0 和 -0视为相等，将NaN===NaN视为不等；而Object.is() 将 +0 和 -0视为不等，将NaN和NaN视为相等
