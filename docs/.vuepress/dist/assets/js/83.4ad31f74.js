(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{509:function(s,t,a){"use strict";a.r(t);var n=a(56),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),a("h2",{attrs:{id:"javascript-中什么是基本数据类型什么是引用数据类型-以及各个数据类型是如何存储的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中什么是基本数据类型什么是引用数据类型-以及各个数据类型是如何存储的"}},[s._v("#")]),s._v(" JavaScript 中什么是基本数据类型什么是引用数据类型？以及各个数据类型是如何存储的？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("基本数据类型有（7种）：Number； String；Boolean；Null；Undefined；Symbol(ECMAScript 2015 新增)；BigInt（ECMAScript 2020 新增)")])]),s._v(" "),a("li",[a("p",[s._v("引用数据类型统称为 Object 类型，细分的话有Object；Array；Function；Date；RegExp")])])]),s._v(" "),a("blockquote",[a("p",[s._v("基本数据类型的数据直接存储在栈中；而引用数据类型的数据存储在堆中，在栈中保存数据的引用地址，这个引用地址指向的是对应的数据，以便快速查找到堆内存中的对象。")])]),s._v(" "),a("blockquote",[a("p",[s._v("顺便提一句，栈内存是自动分配内存的。而堆内存是动态分配内存的，不会自动释放。所以每次使用完对象的时候都要把它设置为 null，从而减少无用内存的消耗")])]),s._v(" "),a("h2",{attrs:{id:"在-js-中为什么-0-2-0-1-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-js-中为什么-0-2-0-1-0-3"}},[s._v("#")]),s._v(" 在 JS 中为什么 0.2+0.1>0.3?")]),s._v(" "),a("p",[s._v("js中采用的是"),a("code",[s._v("IEEE754")]),s._v("规范中64位双精度浮点数编码;其中的 1 位表示符号位，11 位用来表示指数位，剩下的有 52 位表示尾数位。"),a("br"),s._v("\n0.1和0.2转化为二进制后都是无限循环数，会进行舍入操作(0舍1入)后保留52位")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.1 和 0.2 都转化成二进制后， 再进行运算")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00011001100110011001100110011001100110011001100110011010")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0011001100110011001100110011001100110011001100110011010")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0100110011001100110011001100110011001100110011001100111")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转成十进制正好是 0.30000000000000004")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://jingyan.baidu.com/article/425e69e6e93ca9be15fc1626.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("小数的十进制转二进制方法"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("为什么 0.2+0.3=0.5 呢?")]),a("br"),s._v("\n0.2 和 0.3 都转化为二进制后再进行计算，相加后截取保留52位，转化为十进制刚好就是0.5。")]),s._v(" "),a("p",[a("strong",[s._v("那既然 0.1 不是 0.1 了，为什么在 console.log(0.1)的时候还是 0.1 呢?")]),a("br"),s._v("\n在 console.log 的时候会二进制转换为十进制，十进制再会转为字符串的形式，在转\n换的过程中发生了取近似值，所以打印出来的是一个近似值的字符串。")]),s._v(" "),a("p",[a("strong",[s._v("总结")]),a("br"),s._v("\n计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法")]),s._v(" "),a("p",[s._v("因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差。")]),s._v(" "),a("p",[a("strong",[s._v("解决方案:")])]),s._v(" "),a("ol",[a("li",[s._v("小数转成整数后再运算")]),s._v(" "),a("li",[s._v("使用第三方库，如"),a("code",[s._v("Math.js")]),s._v("、"),a("code",[s._v("BigDecimal.js")]),s._v("、"),a("code",[s._v("Big.js")])])]),s._v(" "),a("h2",{attrs:{id:"判断数据类型的几种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型的几种方法"}},[s._v("#")]),s._v(" 判断数据类型的几种方法")]),s._v(" "),a("ul",[a("li",[s._v("typeof\n主要用于检测基本数据类型，但不能区分null和object")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string 有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number 有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// symbol 有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//boolean 有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//undefined 有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// function 有效")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//object 无效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//object 无效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//object 无效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//object 无效")]),s._v("\n\n缺点："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("的值为 均为Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不能区分是"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("还是Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("也不能区分object类型的具体类型\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("instanceof\n主要用于检测引用类型，对于基本数据类型需要实例对应的数据类型")])]),s._v(" "),a("p",[s._v("缺点："),a("br"),s._v("\n1.只能判断对象是否存在于目标对象的原型链上"),a("br"),s._v("\n2.原型链可以重构，导致结果不准确")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("constructor\nconstructor 是 Object 类型的原型属性，它能够返回当前对象的构造器（类型函数）。利用该属性，可以检测复合型数据的类型，如对象、数组和函数等。"),a("br"),s._v("\n缺点： null、undefined不能判断")])]),s._v(" "),a("li",[a("p",[s._v("Object.prototype.toString.call()\n"),a("a",{attrs:{href:"https://blog.csdn.net/hanyanshuo/article/details/104620122",target:"_blank",rel:"noopener noreferrer"}},[s._v("Object.prototype.toString.call解析"),a("OutboundLink")],1),a("br"),s._v("\n缺点：不能细分为谁谁的实例")])])]),s._v(" "),a("h2",{attrs:{id:"对于isnan-和-number-isnan-函数区别的理解。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于isnan-和-number-isnan-函数区别的理解。"}},[s._v("#")]),s._v(" 对于isNaN 和 Number.isNaN 函数区别的理解。")]),s._v(" "),a("p",[s._v("isNaN函数 会将参数转换为数值，如果转换后是Number类型则返回true，否则返回false；")]),s._v(" "),a("p",[s._v("Number.isNaN会严格盘点参数是否为NaN，不会进行类型转换，只有参数是值为NaN的数字是才返回true")]),s._v(" "),a("h2",{attrs:{id:"javascript中-对于hasownproperty函数的理解。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript中-对于hasownproperty函数的理解。"}},[s._v("#")]),s._v(" JavaScript中，对于hasOwnProperty函数的理解。")]),s._v(" "),a("p",[s._v("hasOwnProperty函数用于指示对象自身（不包括原型链）是否具有指定名称的属性，有返回true，没有则返回false")]),s._v(" "),a("h2",{attrs:{id:"object-is-与原来的比较操作符-、-的区别。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-is-与原来的比较操作符-、-的区别。"}},[s._v("#")]),s._v(' Object.is()与原来的比较操作符"==="、"==”的区别。')]),s._v(" "),a("ul",[a("li",[a("p",[s._v('Object.is() 与 “==” 的区别在于： “==” 会在判断相等前对两边的变量（如果类型不相同）进行强制类型转换（会将 "" == false 判断为true），而Object.is()不会进行强制类型转换。')])]),s._v(" "),a("li",[a("p",[s._v("Object.is() 与 “===” 的区别在于：它们对有符号的 0 和 NaN 判断不同，“===”将 +0 和 -0视为相等，将NaN===NaN视为不等；而Object.is() 将 +0 和 -0视为不等，将NaN和NaN视为相等")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);