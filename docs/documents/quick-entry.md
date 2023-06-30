

<template>
    <div class="quick-entry">
        <h2 style="text-align: center"> 快速链接</h2>
        <div class="card">
           <h3> JavaScript</h3>
           <div>
                <a class="item" href="https://cn.vuejs.org/" target="blank">MDN</a>
                <a class="item" href="https://es6.ruanyifeng.com/" target="blank">ES6</a>
                <a class="item" href="https://jquery.cuishifeng.cn/" target="blank">jQuery</a>
                <a class="item" href="https://www.runoob.com/" target="blank">菜鸟教程</a>
           </div>
        </div>
         <div class="card">
           <h3> Vue</h3>
           <div>
                <a class="item" href="https://v2.cn.vuejs.org/" target="blank">Vue2</a>
                <a class="item" href="https://v3.router.vuejs.org/zh/" target="blank">Vue Router3.X</a>
                <a class="item" href="https://vuex.vuejs.org/zh/" target="blank">Vuex</a>
                <a class="item" href="https://cli.vuejs.org/zh/" target="blank">Vue CLI</a>
                <a class="item" href="https://element.eleme.cn/#/zh-CN/component/installation" target="blank">Element UI</a>
           </div>
           <div>
                <a class="item" href="https://cn.vuejs.org/" target="blank">Vue3</a>
                <a class="item" href="https://router.vuejs.org/zh/" target="blank">Vue Router4.X</a>
                <a class="item" href="https://pinia.vuejs.org/zh/" target="blank">Pinia</a>
                <a class="item" href="https://cn.vitejs.dev/" target="blank">Vite</a>&emsp;&nbsp;&nbsp;
                <a class="item" href="https://element-plus.gitee.io/zh-CN/component/button.html" target="blank">Element Plus</a>
           </div>
           <div>
                <a class="item" href="https://vuepress.vuejs.org/zh/" target="blank">vuepress</a>
           </div>
        </div>
        <div class="card">
           <h3>移动端</h3>
           <div>
                <a class="item" href="https://uniapp.dcloud.io/" target="blank">uni-app</a>
                <a class="item" href="https://uniui.dcloud.net.cn/" target="blank">uni-ui</a>
                <a class="item" href="https://v1.uviewui.com/guide/demo.html" target="blank">uView</a>
                <a class="item" href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="blank">微信开发文档</a>
           </div>
        </div>
         <div class="card">
           <h3>其他</h3>
           <div>
                <a class="item" href="https://markdown.com.cn/basic-syntax/paragraphs.html" target="blank">Markdown</a>
                <a class="item" href="https://www.iconfont.cn/" target="blank">阿里矢量图标库</a>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        }
    }
</script>

<style lang="stylus" scoped>
.quick-entry{
    .card{
        padding: 5px 20px 20px 20px; 
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 4px 0px #999;
        margin-top: 20px;
    }
    .item{
        display: inline-block;
        margin-right: 20px;
    }
}
</style>