# 数组循环总结及区别
## 前言 
不同的场景使用不同的遍历方法可以提高计算效率，优化代码结构。  

循环结构的执行步骤：
1. 声明循环变量；
2. 判断循环条件;
3. 执行循环体操作；
4. 更新循环变量；
5. 然后循环执行 2-4，直到条件不成立，跳出循环。

## for 循环
```js
const arr = [3, 8, 99, 44, 3]
	for(let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
	// 当循环中数组的长度没有变化时，我们应该将数组的长度存储在一个变量中，这样效率会更高。下面是改进的写法：
	for(let i = 0, len = arr.length; i < len; i++ ) {
		console.log(arr[i])
	}
```

## forEach 
```js 
// 语法
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```
```js 
const arr = [3, 8, 99, 44, 3]
arr.forEach((value, index, array) => {
    // value 数组中当前项的值
    // index 当前项在数组中的索引
    // array 数组对象本身
    console.log(value, index, array);
})
```
**注意**
- forEach 中`continue`,`break` 无效,会出现 SyntaxError 的报错；
- forEach 中 `return` 会结束此次循环，执行下一次循环
```js 

```
## filter
- 返回一个新数组，其值为使得 `callback` 返回 `true` 或等价于 `true` 的值的元素，没有满足条件的值则返回空数组。
```js 
// 语法
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```
```js 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## some
方法测试数组中是不是至少有1个元素通过了被提供的函数测试， 返回一个Boolean类型的值。
> 如果用一个空数组进行测试，在任何情况下它返回的都是`false`。
```js 
// 语法
arr.some(callback(element[, index[, array]])[, thisArg])
```
```js 
[1, 2, 3, 4, 5].some(function (item, index, arr) {
	return (item > 3)
}) // true
```

## every
方法测试数组内的所有元素是否都能通过某个指定函数的测试, 返回一个Boolean类型的值。
> 如果用一个空数组进行测试，在任何情况下它返回的都是`true`。
```js 
// 语法
arr.every(callback(element[, index[, array]])[, thisArg])
```
```js 
[1, 2, 3, 4, 5].every(function (elem, index, arr) {
    return elem >= 3;
}) // false
```

## map
方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
```js 
// 语法
arr.map(callback(element[, index[, array]])[, thisArg])
```
```js 
let arr = ['a', 'b', 'c'];
let newArr =   [1, 2].map(function (item, index, arr) {
    return this[item];
}, arr)
console.log(newArr);  // 返回['b', 'c']
```

## reduce，reduceRight
- reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员
- reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。
```js 
// 语法
array.reduce(function(total, currentValue[, currentIndex[, array]]), initialValue)
array.reduceRight(function(total, currentValue[, currentIndex[, array]]), initialValue)


//函数参数:
// total	必需。初始值, 或者计算结束后的返回值。
// currentValue	必需。当前元素
// currentIndex	可选。当前元素的索引
// arr	可选。当前元素所属的数组对象。
// initialValue	可选。传递给函数的初始值
```
```js 
[1, 2, 3, 4, 5].reduce(function (total, currentValue) {
    return total + currentValue;
}) 
```

## for…in… 循环
for...in语句以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性
```js 
const arr = [3, 8, 99]
let index
for(index in arr) {
    console.log("arr[" + index + "] = " + arr[index])
}
// 一般来说，操作的结果如下：
arr[0] = 3 
arr[1] = 8 
arr[2] = 99
```

::: warning 警告
for...in不应该用于迭代一个关注索引顺序的 Array。它是为遍历对象属性而构建的，不建议与数组一起使用。
:::


## for…of… （ES6引入） 
- for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
```js 
// 语法
for (variable of iterable) {
    //statements
}
```
 for-of 特点
- 与 forEach 不同，它正确响应 break、continue 和 return 语句。
- 它不仅可以遍历数组，还可以遍历类数组对象和其他可迭代对象（String、Map、Set等）。

## 性能比较
测试环境Chrome 100.0.4896.127（正式版本） （64 位）

|              | for         | forEach      | for...of |
| -----------  | ----------- | ----------- | ----------- |
|    1w数据    | 0.343ms       | 0.406ms      | 0.443ms       |
|    10w数据    | 2.630ms        | 2.662ms      | 4.059ms       |
|    100w数据    | 10.204ms        | 19.990ms      | 22.949ms       |
|    1000w数据    | 112.204ms        | 221.990ms      | 223.949ms       |


测试结果：for < forEach < for...of