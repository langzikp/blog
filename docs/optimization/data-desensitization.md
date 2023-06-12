## 优化之数据脱敏
数据脱敏：是指对某些敏感信息（如：手机号、身份证号、卡号、用户地址、邮箱等）通过一定规则进行数据变形处理，实现隐私数据的保护。   



数据脱敏分为 **静态数据脱敏** 和 **动态数据脱敏**。
### 静态数据脱敏
静态脱敏：用于将数据抽取出生产环境脱敏后分发至测试、开发、培训、数据分析等场景。

通常我们在开发中，为了保证数据的真实场景，会将生产环境的数据**拷贝**到测试库，这时为了保证数据的安全，就会对敏感数据进行脱敏。

### 动态数据脱敏
动态脱敏：数据不脱离生产环境，对敏感数据的查询和调用结果进行实时脱敏。


### 前端脱敏
数据通常在后端进行脱敏是更为安全的，毕竟在前后端传输过程中也是可能被截取到。 

但是有时候仍会前端来处理，前端处理通常是将关键信息以`*******`来显示。

#### 姓名脱敏
```js
let handleName = function(name){
    let arr = Array.from(name)
    let result = ''
    if (arr.length === 2) {
        result = arr[0] + '*'
    } else if (arr.length > 2) {
        for (let i = 1; i < arr.length - 1; i++) {
          arr[i] = '*'
        }
        result = arr.join('')
    }else {
        return name
    }
    return result
}

console.log(handleName('张三')) // 张*
console.log(handleName('张三丰'))  // 张*丰
console.log(handleName('张三丰牛')) //  张**牛
```

#### 手机号脱敏
```js
let handlePhone = function(phone) {
    return phone.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2")
}

console.log(handleName('15583585177'))  // 155****5177
```

#### 身份证号脱敏
```js
let handleIdCard = function(id) {
  return id.replace(/^(.{4})(?:\d+)(.{4})$/, "$1**********$2");
}

console.log(handleIdCard('511623199210122518')) // 5116**********2518
```

#### 邮箱脱敏
```js
let handleEmail = function(email) {
    return email.replace(/^(.{0,3}).*@(.*)$/, "$1***@$2")
}

console.log(handleEmail('819759949@qq.com'))  // 819***@qq.com
```

#### 通用脱敏方法
可用于手机号，身份证号，地址等处理
```js
/**
 * 	 str: 待处理字符串
 *   begin：头部保留多少位
 *   end： 尾部保留多少位
 *   max： 最大掩码*的重复数量
 */
let handleCommon = function (str, begin, end = 0, max = 20) {
    if (!str) return '';
    if (begin + end > str.length) return str;

    let leftStr = str.substring(0, begin);
    let rightStr = str.substring(str.length - end, str.length);

    let num = Math.min(max, str.length - begin - end);
    return leftStr + '*'.repeat(num) + rightStr;
}

console.log(handleCommon('13057794096', 3, 4, 4)) 
// 130****4096

console.log(handleCommon('511623199210122518', 4, 4)) 
// 5116**********2518

console.log(handleCommon('四川省成都市成华区建设路66号4栋一单元606', 6, 0, 6)) 
// 四川省成都市******
```