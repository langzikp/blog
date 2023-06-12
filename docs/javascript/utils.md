## 1. 多久以前
js计算几天前，几小时前，几分钟前
```js
/**
 * @param {date} time 订单时间（日期格式或者时间戳）
 * @param {number} num 返回几个时间单位，如：1周(num=1)，1周2天(num=2),1周2天1小时(num=3)
 */
function timeFormat (time, num = 1){
    let timeArr = [365*24*60*60*1000, 30*24*60*60*1000, 7*24*60*60*1000, 24*60*60*1000, 60*60*1000,60*1000, 1000];
    let unit = ["年", "个月", "周", "天", "小时", "分钟", "秒钟"];
    let timeDiff = Date.now() - new Date(time).getTime();
    if (timeDiff <= 0) return '刚刚'
    let tip = [];
    for(let i= 0; i< timeArr.length; i++){
        if(timeDiff < timeArr[i]) continue;

        let temp = Math.floor(timeDiff / timeArr[i]);
        timeDiff = timeDiff % timeArr[i];

        if(temp > 0){
            tip.push(temp + unit[i]);
        }

        if(tip.length >= num) break;
    }
    return tip.join("")+"前"
}
console.log(timeFormat ('2023-5-10 17:42:09', 1)); 
// 1小时前
```

## 2. 判断两个对象的值是否一致
```js
/**
 * @description 判断两个对象的值是否一致
 * @param {Object} b
 * @param {Object} a
 */
function isObjectValueEqual(a, b){
   if (a === b) return true;
	let aProps = Object.getOwnPropertyNames(a);
	let bProps = Object.getOwnPropertyNames(b);
	if (aProps.length !== bProps.length) return false;
	for (let prop in a) {
		if (b.hasOwnProperty(prop)) {
			if (typeof a[prop] === 'object') {
				if (!isObjectValueEqual(a[prop], b[prop])) return false;
			} else if (a[prop] !== b[prop]) {
				return false;
			}
		} else {
			return false;
		}
	}
	return true;
}

let a = {a: 1, b: 2}
let b = {b: 2, a: 1}
console.log(isObjectValueEqual(a, b));  // true
```

## 3. JavaScript小数精度计算
```js
/**
 * 数字运算（主要用于小数点精度问题）
 * [see](https://juejin.im/post/6844904066418491406#heading-12)
 * @param {number} a 前面的值
 * @param {"+"|"-"|"*"|"/"} type 计算方式
 * @param {number} b 后面的值
 * @example 
 * ```js
 * // 可链式调用
 * const res = computeNumber(1.3, "-", 1.2).next("+", 1.5).next("*", 2.3).next("/", 0.2).result;
 * console.log(res);
 * ```
 */
function computeNumber(a, type, b) {
  /**
   * 获取数字小数点的长度
   * @param {number} n 数字
   */
  function getDecimalLength(n) {
    const decimal = n.toString().split(".")[1];
    return decimal ? decimal.length : 0;
  }
  /**
   * 修正小数点
   * @description 防止出现 `33.33333*100000 = 3333332.9999999995` && `33.33*10 = 333.29999999999995` 这类情况做的处理
   * @param {number} n
   */
  const amend = (n, precision = 15) => parseFloat(Number(n).toPrecision(precision));
  const power = Math.pow(10, Math.max(getDecimalLength(a), getDecimalLength(b)));
  let result = 0;

  a = amend(a * power);
  b = amend(b * power);

  switch (type) {
    case "+":
      result = (a + b) / power;
      break;
    case "-":
      result = (a - b) / power;
      break;
    case "*":
      result = (a * b) / (power * power);
      break;
    case "/":
      result = a / b;
      break;
  }

  result = amend(result);

  return {
    /** 计算结果 */
    result,
    /**
     * 继续计算
     * @param {"+"|"-"|"*"|"/"} nextType 继续计算方式
     * @param {number} nextValue 继续计算的值
     */
    next(nextType, nextValue) {
      return computeNumber(result, nextType, nextValue);
    }
  }
}

```

## 4.复制功能
```js
/**
 * 复制文本
 * @param {string} text 复制的内容
 * @param {() => void} success 成功回调
 * @param {(error: string) => void} fail 出错回调
 */
function copyText(text, success = null, fail = null) {
  text = text.replace(/(^\s*)|(\s*$)/g, "");
  if (!text) {
    typeof fail === "function" && fail("复制的内容不能为空！");
    return;
  }
  const id = "the-clipboard";
  /**
   * 粘贴板节点
   * @type {HTMLTextAreaElement}
   */
  let clipboard = document.getElementById(id);
  if (!clipboard) {
    clipboard = document.createElement("textarea");
    clipboard.id = id;
    clipboard.readOnly = true;
    clipboard.style.cssText = "font-size: 15px; position: fixed; top: -1000%; left: -1000%;";
    document.body.appendChild(clipboard);
  }
  clipboard.value = text;
  clipboard.select();
  clipboard.setSelectionRange(0, text.length);
  const state = document.execCommand("copy");
  // clipboard.blur(); // 设置readOnly就不需要这行了
  if (state) {
    typeof success === "function" && success();
  } else {
    typeof fail === "function" && fail("复制失败");
  }
}

```


***参考***  

[前端常用功能js-掘金](https://juejin.cn/post/6844904066418491406#heading-3)