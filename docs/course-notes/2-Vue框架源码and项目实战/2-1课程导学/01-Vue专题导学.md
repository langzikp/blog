# vue专题导学

## 导学
- 基础用法
  - 命名规则
  - 模板
  - 单向数据流
  - 事件操作
  - 样式
  - 生命周期
- 高级用法
  - 双向绑定
  - 组件通信
  - 组件复用
  - 组件封装
- 响应式源码分析
  - 响应式源码分析
  - 异步渲染队列源码分析
  - Vue2.0 diff算法
  - Composition Api

- Vue生态以及源码分析
  - Vuex
    - 基础使用
    - 响应式源码分析 & vuex插件机制源码分析

  - Vue-Router
    - Hash Mode 和 H5 Mode 实现源码分析
    - 路由守卫过程源码分析

  - Nuxt
    - 通过思路
    - 性能优化
<img :src="$withBase('/img/course-img.jpg')" alt="图片">


## 补充：LRU算法
LRU是Least Recently Used的缩写，表示**最近最少使用**，是一种常用的页面置换算法，选择内存中最近最久未使用的页面予以淘汰。
介绍：[](https://baike.baidu.com/item/LRU)

- 地址: [LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/)
- 进阶: 你是否可以在O(1)时间复杂度内完成获取和删除数据操作？
- 使用场景
   - `<keep-alive>` 组件
   - Nuxt.js  缓存优化方案

### 实现
- 思路: 维护一个数组，提供 get 和 put 两个方法，并且限制数组元素数量（及缓存数量）
- 要求: 
  1. get 可以标记某个元素是最新使用的，提升到第一项
  2. put 可以加入一个 key-value 元素，但是需要判断是否已存在，是否超出限额

实现1：数组实现
:::details
```js
// 一般解法，维护一个数组，数组元素为key-value键值对对象，每次获取需要遍历数组
// 工厂函数，具有两个属性 capacity 保存限量，cache 保存缓存
let LRUCache = function(capacity){
   this.capacity = capacity;
   this.cache = [];
}

// 实现 get 方法
LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => item.key === key);
  if (index === -1) {
    return -1;
  }
  // 删除此元素后插入到数组第一项
  let value = this.cache[index].value;
  this.cache.splice(index, 1);
  this.cache.unshift({
    key,
    value,
  });
  return value;
};

// 实现 put 方法
LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => item.key === key);
  // 想要插入的数据已经存在了，那么直接提升它就可以
  if (index > -1) {
    this.cache.splice(index, 1);
  } else if (this.cache.length >= this.capacity) {
    // 若已经到达最大限制，先淘汰一个最久没有使用的
    this.cache.pop();
  }
  this.cache.unshift({ key, value });
};

```
:::

实现2：Map实现，时间复杂度 O(1)
:::details
```js
// 上述代码来自 LRU 缓存机制-官方
// 时间复杂度 O(1)，因为 Map 既能保持键值对，还能记住插入顺序。
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // 存在即更新
    let temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 存在即更新（删除后加入）
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // 不存在即加入
    // 缓存超过最大值，则移除最近没有使用的
    // new Map().keys() 返回一个新的 Iterator 对象
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

```
:::

实现3：localStorage
:::details
```js
let LRUStorageCache = function (storageKey, capacity) {
    this.getStorageData = key => {
        let value = localStorage.getItem(key) || "[]";
        let valueJson = JSON.parse(value);
        return valueJson;
    }
    this.setStorageData = (key, value = []) => {
        let valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
    }

    this.storageKey = storageKey;
    this.cache = () => {
        return this.getStorageData(this.storageKey);
    }
    this.capacity = capacity;
};

LRUStorageCache.prototype.get = function (key) {
    let cache = this.cache();
    let index = cache.findIndex((item) => item.key === key);
    if (index === -1) {
        return -1;
    }
    // 删除此元素后插入到数组第一项
    let value = cache[index].value;
    cache.splice(index, 1);
    cache.unshift({
        key,
        value,
    });
    this.setStorageData(this.storageKey, cache);
    return value;
};
LRUStorageCache.prototype.put = function (key, value) {
    let cache = this.cache();
    let index = cache.findIndex((item) => item.key === key);
    // 想要插入的数据已经存在了，那么直接提升它就可以
    if (index > -1) {
        cache.splice(index, 1);
    } else if (cache.length >= this.capacity) {
        // 若已经到达最大限制，先淘汰一个最久没有使用的
        cache.pop();
    }
    cache.unshift({ key, value });
    this.setStorageData(this.storageKey, cache);
};
```
:::

