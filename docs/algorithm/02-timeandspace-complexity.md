## 什么是时间复杂度
时间复杂度（Time Complexity）是程序在运行时所需要的时间的度量。它是算法复杂度的重要组成部分，用于评估算法在处理数据时所需的时间。


## 表示方法
一般用"**大O符号表示法**"来表示时间复杂度:

> 时间复杂度大小的计算公式是：T(n) = O(f(n))。

> 其中，T(n)表示代码执行的时间，n表示数据规模的大小，f(n)表示每行代码执行次数总和，O表示代码执行时间T(n)与f(n)表达式成正比。根据这个公式，我们可以评估算法在处理不同规模的数据时所需的时间。


#### 场景1
> 一个n寸的面包，每3天吃一寸，需要几天？

答案是3 乘以 n 等于 3n 天， 用一个函数来表示这个相对时间，可以记作 **T(n) = 3n**

#### 场景2
> 一个n寸的面包，每5天吃掉剩余长度的一半，第一次n/2寸，第二次n/4，第三次n/8...... 那么吃得只剩1寸， 需要几天？

答案是 5 X logn = 5logn天，记作 **T(n) = 5logn**

#### 场景3
> 给你一条长n寸的面包和一个鸡腿，你每2天吃掉一个鸡腿。那么吃掉整个鸡腿需要多少天呢？

答案是2天，因为只吃鸡腿，和n寸的面包没关，所以只需要2天，记作 **T(n) = 2**


#### 场景4
> 给你一条长n寸的面包，你吃掉第一个一寸需要1天时间，吃掉第二个一寸需要两天时间，吃掉第三个一寸需要3天时间.....每多吃一寸，所花的时间也多一天。那么你吃掉整个面包需要多少天呢？

根据等差数列求和公式，此时吃掉整个面包需要 (1+n)*n/2 = 0.5n^2 + 0.5n天，记作 **T（n） = 0.5n^2 + 0.5n**


## 如何推导出时间复杂度
有以下三个原则：

1. 如果运行时间是常数量级，用常数1表示；  

2. 只保留时间函数中的最高阶项；

3. 如果最高阶项存在，则省去最高阶项前面的系数


那么场景1 **T(n) = 3n**，最高阶项为3n，省去系数3，转化的时间复杂度是O（n）。  

那么场景2 **T(n) = 5logn**，最高阶项为5logn，省去系数5，转化的时间复杂度是 O（logn）。

那么场景3 **T(n) = 2**，2只是一个常量，转化的时间复杂度是 O（1）。  

那么场景4 **T(n) = 0.5n^2 + 0.5n**，最高阶项为0.5n^2，省去系数0.5，转化的时间复杂度是O（n^2）

这四种时间复杂度究竟谁用时更长，谁节省时间呢？稍微思考一下就可以得出结论：

**O（1）< O（logn）< O（n）< O（n^2）**

### 常见的时间复杂度

|  f(n)      | 阶               | 时间复杂度 |
| ----------- | ----------- |   ----------- |
| 1      | O(1)          | 常数时间复杂度 |
| 2n + 1   | O(n)        | 线性时间复杂度  |
| 2n^2 + 2n + 1   | O(n^2)        | 平方级时间复杂度  |  
| 2log2n + 2 | O(logn)        | 对数时间复杂度  |
| 2nlog2n + 2n + 2  |  O(nlogn)       | N次对数时间复杂度  |
| 2n^3 + 2n + 2  |  O(n^3)       | 立方阶时间复杂度  |
| 2^n |  O(2^n)       | 指数级时间复杂度  |

**O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n)**


## 什么是空间复杂度
如果说时间复杂度是衡量算法执行的时间成本，那么空间复杂度（Space Complexity）就是**对一个算法在运行过程中临时占用存储空间大小的量度**。


在运行一段程序的时候，我们不止要执行各种运算指令，同时也会根据需求，存储一些临时的中间数据，以便后续指令可以更方便地继续执行。  
<img :src="$withBase('/img/algorithm/6.jpg')" alt="" style="width: 30%;"/>  

这些中间数据所占用的空间大小就用**空间复杂度来**来度量。

## 表示方法
一般用"**大O符号表示法**"来表示空间复杂度:

> 计算公式是：S(n) = O(f(n))。

> 其中，S(n)表示算法在运行过程中临时占用存储空间的大小，n表示数据规模的大小，f(n)表示关于输入规模n的函数，O表示大O符号，表示算法的空间复杂度与f(n)成正比

### 常见空间复杂度

#### 1. 常量空间  
当算法的存储空间大小分配固定，和输入规模没有直接关系的情况下，空间复杂度记作O（1）。  
```js
let i = 1;
let j = 2;
++i;
j++;
let m = i + j;
// 代码中的 i、j、m 所分配的空间都不随着处理数据量变化，因此它的空间复杂度 S(n) = O(1)
```

####  2. 线性空间  
当算法分配的空间是一个线性的集合（比如数组），并且集合大小和输入规模n成正比，空间复杂度记作O（n）。
```js
let arr = new Array[n]
for(i=1; i <= n; ++i)
{
   arr[i] = i
}
// 第一行new了一个数组出来，这个数据占用的大小为n，虽然有循环，但没有再分配新的空间，因此，这段代码的空间复杂度主要看第一行即可，即 S(n) = O(n)
```

####  3. 二维空间    
当算法分配的空间是一个二维数组集合，并且集合的长度与宽度都和输入规模n成正比，空间复杂度记作O（n^2）。

####  4. 递归空间    
递归是一种比较特殊的情况，计算机在执行程序的时候，会专门分配一块内存，用来存储“方法调用栈”。 

每当我们执行到更深一层的函数，方法调用栈都会进行入栈操作，当方法返回的时候，方法调用栈执行出栈操作。  

递归操作占用的空间到底有多大呢？它所需要的内存空间和递归的深度成正比。如果递归的深度是n，那么空间复杂度就是O（n）。