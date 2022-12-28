# 02-异步更新队列NextTick源码分析

## Vue为何采用异步渲染
Vue在更新DOM时是异步执行的，只要侦听到数据变化，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更，如果同一个watcher被多次触发，只会被推入到队列中一次，这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的，然后，在下一个的事件循环tick中，Vue刷新队列并执行实际(已去重的)工作，Vue在内部对异步队列尝试使用原生的Promise.then、MutationObserver和setImmediate，如果执行环境不支持，则会采用setTimeout(fn, 0)代替。

## 异步渲染队列
[官网-异步渲染队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)  

:::details
```js
// 简易实现
(function () {
  // let f = n => n * 100 + 200;
  let active;

  let watch = function (cb) {
    active = cb;
    active();
    active = null;
  }
  // 需要有个队列来存储各项任务
  let queue = [];
  // 通过微任务方式去执行队列中的任务
  let nextTick = cb => Promise.resolve().then(cb);
  // 将任务添加到队列
  let queueJob = job => {
    if (!queue.includes(job)) {
      queue.push(job)
      nextTick(flushJobs)
    }
  }

  // 执行队列中的任务
  let flushJobs = () => {
    let job;
    while ((job = queue.shift()) !== undefined) {
      job()
    }
  }


  // 收集更多依赖
  class Dep {
    // 依赖收集，将响应依赖添加到deps中
    constructor() {
      this.deps = new Set();
    }

    depend() {
      if (active) {
        this.deps.add(active)
      }
    }
    // 通知依赖更新
    notify() {
      // 将任务加到队列中
      this.deps.forEach(dep => queueJob(dep))
    }
  }

  let ref = initValue => {
    let value = initValue;
    let dep = new Dep();

    return Object.defineProperty({}, "value", {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        dep.notify()
      }
    })
  }

  let x = ref(1);
  let y = ref(1);
  let z = ref(1);

  watch(() => {
    console.log(`x: ${x.value}, y: ${y.value}, z: ${z.value}`);
  });

  x.value = 2;
  y.value = 3;
  z.value = 4;
})()
```
:::

## nextTick

[官网-Vue.nextTick](https://cn.vuejs.org/v2/api/#Vue-nextTick)  

[官网-vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)


## 参考文献
[异步队列渲染](https://www.cnblogs.com/likme/p/15738163.html)