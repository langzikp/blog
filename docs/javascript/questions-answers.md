# Q&A
## jquery插件中形参undefined的作用
jquery插件写法：
```js
;$(function(window,undefined){
2 
3 　　//插件实现具体代码
4 
5 })(window);
```
简单分析：
- 代码最前面的分号，可以防止多个文件压缩合并而其他文件最后一行代码未添加分号引起的语法错误。
- 一个立即执行的匿名函数，可以形成一个独立的执行作用域，可以避免其函数体内的局部变量污染全局。
- 传入实参window,可以减少作用域链的查询时间，从而提高执行性能。
- 至于在匿名函数中定义一个undefined的形参变量，是未来防止在其他函数中undefined被重写，从而引起内部函数执行出错。  

因为undefined并不是js关键字，这样它可以作为变量名来使用，比如：
```js
function a(){
   var undefined = 5;
   alert(undefined)  
 }
a();
```
运行一下，在IE下，会弹出5，而不是undefined，也就是说全局的undefined有可能被其他函数覆盖的危险。

通过在匿名函数中多定义一个undefined的形参，由于只传入实参window，从而可以保证undefined形参未被赋值，从而最终是我们想要的undefined的值。
