# 正则表达式

## 语法
- `\` 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "(" 
- `^` 匹配输入字符串的开始位置  
- `$` 匹配输入字符串的结束位置 
- `+` 号代表前面的字符必须至少出现一次（1次或多次）  
`runoo+b`，可以匹配 runoob、runooob、runoooooob 等

- `*` 号代表前面的字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）  
`runoo*b`，可以匹配 runob、runoob、runoooooob 等
- `?` 问号代表前面的字符最多只可以出现一次（0次或1次）  
`colou?r` 可以匹配 color 或者 colour

- `.` 匹配除换行符（\n、\r）之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像"(.|\n)"的模式。
- `\d` 匹配一个数字字符。等价于 [0-9]。
- `\D` 匹配一个非数字字符。等价于 [^0-9]。
- `{n}` n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
- `{n,}` n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
- `{n,m}` m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
- `x|y` 匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。
- `[xyz]` 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。
- `[^xyz]` 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。
- `[a-z]` 字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。
- `[^a-z]` 负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。
- `( )` 标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。



[正则表达式-语法教程](https://www.runoob.com/regexp/regexp-syntax.html)

## 常用正则表达式

#### 手机号码验证
```js
//1开头的 11位数字 
var pattern = /^[1][0-9]{10}$/;
var pattern = /^1\d{10}$/;

// 1--以1为开头；
// 2--第二位可为3,4,5,6,7,8,9中的任意一位；
// 3--最后以0-9的9个整数结尾。
var pattern = /^[1][3456789][0-9]{9}$/;
```

####  用户名正则
```js

// 4到16位（字母，数字，下划线，减号）
var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
// 输出 true
console.log(pattern.test("caibaojian"));
```

####  密码强度正则
```js
// 1. 密码最少6位
var pattern = /^.{6,}$/；

//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//输出 true
console.log("=="+pattern.test("caibaojian#"));
```


####  整数正则
```js
//正整数正则
var posPattern = /^\d+$/;
//负整数正则
var negPattern = /^-\d+$/;
//整数正则
var intPattern = /^-?\d+$/;
//输出 true
console.log(posPattern.test("42"));
//输出 true
console.log(negPattern.test("-42"));
//输出 true
console.log(intPattern.test("-42"));
```

####  小数正则
```js
// 正浮点数，不限制小数位
var pattern = /^\d+(\.\d+)?$/;
// 正浮点数，2位小数，通常用于金额（）
var pattern = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/;

console.log(pattern.test("50.25"));//输出 true
console.log(pattern.test("050.25"));//输出 false，不能以0开头
```









[菜鸟-正则表达式-教程](https://www.runoob.com/regexp/regexp-intro.html) 