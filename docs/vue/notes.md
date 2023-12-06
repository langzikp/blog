## 小知识点

## Vue CLI 知识点
### 组件和样式导入
 `<script>`中 导入其他组件，`import '@/common/util.js'` ; 其中 `@/` 是 `src/` 的别名
 `<style>`中 导入其他样式，`@import '~@/styles/base.scss' `; 其中 `~@/` 是 `src/` 的别名

### css module   

- 通过 `<style module>` 以开箱即用的方式在 `*.vue` 文件中使用  [CSS Modules](https://cli.vuejs.org/zh/guide/css.html#css-modules)  
```vue
<template>
  <div id="app" :class="$style.yellow">
    hello world
  </div>
</template>

<script>
export default {
}
</script>

<style module>
  .yellow{
    color: yellow;
  }
</style>
```

- 如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 `.module.(css|less|sass|scss|styl)` 结尾
```js
<template>
  <div :class="styles.box">
    hello world
  </div>
</template>

<script>
import styles from './styles/foo.module.css'
export default {
  data(){
    return {
      styles
    }
  },
}
</script>
```






### 对单个组件测试  
 [快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html)
快速对某个 *.vue 文件进行快速原型开发，可安装一个扩展
```js
npm install -g @vue/cli-service-global
```





