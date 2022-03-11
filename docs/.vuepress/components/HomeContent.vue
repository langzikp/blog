<template>
    <div class="content">
        <div class="left">
            <Card v-for="(item,index) in infoList" :key="index" :info="item"/>
        </div>
        <div class="right">
            <div class="presentation">
                <img src="/img/head.jpg" alt="">
                <div class="info">
                    <a href="mailto:819750949@qq.com" target="blank"><i class="iconfont icon-a-youjianchakanyoujianfasongyoujianshouyoujian-06"></i></a>
                    <a href="https://github.com/" target="blank"><i class="iconfont icon-github"></i></a>
                    <a href="https://music.163.com/" target="blank"><i class="iconfont icon-erji"></i></a>
                </div>
                <div class="name">Lang Nie</div>
                <div class="tag">前端界的小学徒</div>
            </div>
            <div class="category">
                <h3><i class="iconfont icon-lianjie"></i> 快速链接</h3>
                <div >
                    <a class="color1" href="https://cn.vuejs.org/" target="blank">Vue</a>
                    <a class="color2" href="https://vuepress.vuejs.org/zh/" target="blank">VuePress</a>
                    <a class="color3" href="https://element.eleme.cn/#/zh-CN/component/installation" target="blank">Element UI</a>
                    <a class="color6" href="https://vant-contrib.gitee.io/vant/#/zh-CN" target="blank">Vant UI</a>
                    <a class="color5" href="http://nodejs.cn/learn" target="blank">Node.js</a>
                    <a class="color2" href="https://react.docschina.org/" target="blank">React</a>
                    <a class="color3" href="https://uniapp.dcloud.io/" target="blank">uni-app</a>
                    <a class="color5" href="https://jquery.cuishifeng.cn/" target="blank">jQuery</a>
                    <a class="color1" href="https://www.bookstack.cn/read/es6-3rd/sidebar.md" target="blank">ES6</a>
                    <!-- <a class="color5" href="" target="blank"></a> -->
                    <a class="color4" href="https://markdown.com.cn/basic-syntax/paragraphs.html" target="blank">Markdown</a>
                    <a class="color6" href="https://gitee.com/" target="blank">Gitee</a>
                    <a class="color2" href="https://github.com/" target="blank">GitHub</a>
                    <a class="color5" href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="blank">微信开发文档</a>
                    <a class="color4" href="https://www.iconfont.cn/" target="blank">阿里矢量图标库</a>
                    <a class="color5" href="https://www.runoob.com/" target="blank">菜鸟教程</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                infoList: [
                    {
                        title: "费曼学习法",
                        author: "lang nie",
                        date: "2019-02-01",
                        tag: "booklist",
                        url: "",
                        content: "通过向别人清楚的解说某一件事或是写一篇浅显易懂的教程文章，来确认自己是否真正弄懂了这件事。 可以说是在通过向别讲解过程中来对自身的 查缺补漏。"
                    },
                    {
                        title: "代码规范: 养成良好的编码习惯",
                        author: "lang nie",
                        date: "2022-02-01",
                        tag: "develop-norm",
                        url: "/develop-norm/engineer",
                        content: ""
                    },
                    {
                        title: "别乱提交代码了，看下大厂 Git 提交规范是怎么做的！",
                        author: "lang nie",
                        date: "2021-03-05",
                        tag: "develop-norm",
                        url: "/develop-norm/git",
                    },
                    {
                        title: "记录一些有趣的网站",
                        author: "lang nie",
                        date: "2019-02-01",
                        tag: "develop-norm",
                        url: "/collect/sites.html#有趣",
                    },
                    {
                        title: "你知道的越多，不知道的也就越多",
                        author: "lang nie",
                        date: "2019-01-01",
                        tag: "develop-norm",
                        url: "/collect/sites.html#有趣",
                        content:"不知道大家有没有发现，我们身边经常有这样的人，他们越是有能力的，越是有知识的，越是低调，越是谦逊，因为他们深知，知道的越多，不知道的也就越多。"
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .content{
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: stretch;
        justify-content: space-between;
        max-width: $homePageWidth;
        margin: 0 auto;

        .left{
            flex: 1;
        }
        .right{
            width: 16rem;
            margin-left: 15px;

            .presentation{
                background-color: #fff;
                border-radius: 8px;
                opacity: .9
                img{
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                .info{
                    display: flex;
                    justify-content: space-around;
                    a{
                        
                        color: #000;
                        margin-top: 5px 
                        .iconfont{
                            opacity: .9
                            font-size: 1.3rem;
                        }
                    }
                }
                .name{
                    margin-top: 10px;
                    padding-left: 15px;
                    font-size: 1.3rem;
                }
                .tag{
                    padding: 5px 15px;
                }
            }
            .category{
                background-color: #fff;
                border-radius: 8px;
                margin-top: 10px;
                padding: 10px;
                opacity: .9
                h3{
                    margin: 5px 5px;
                    font-weight: 400;
                    .iconfont{
                        font-size: 1.5rem;
                    }
                }
                a{
                    display: inline-block;
                    text-decoration: none;
                    color: #fff;
                    padding: 0.1rem 0.4rem;
                    border-radius: 3px;
                    margin-left: 10px;
                    margin-top: 10px;
                    font-weight: 500;
                    font-size: 0.8rem;
                    &:hover{
                        opacity: 1;
                        font-weight: 600
                        transform: scale(1.2);
                    }
                }
                
                .color1{
                    background-color: #9daf9f;
                }
                .color2{
                    background-color: #e77c83;
                }
                .color3{
                    background-color: #849b87;
                }
                .color4{
                    background-color: #f8b26a;
                }
                .color5{
                    background-color: #41b9d7;
                }
                .color6{
                    background-color: #f8b26a;
                }
            }
        }
    }
 @media (max-width: $MQMobile) {
  .content {
    flex-direction: column;
    .right {
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .content {
    
  }
}
    
</style>