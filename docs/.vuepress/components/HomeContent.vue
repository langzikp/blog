<template>
  <div class="content">
    <div class="left">
      <Card v-for="(item, index) in infoList" :key="index" :info="item" />
    </div>
    <div class="right">
      <div class="presentation">
        <img :src="$withBase('/img/head.jpg')" alt="头像图片" />
        <div class="info">
          <a href="mailto:819750949@qq.com" target="blank"
            ><i
              class="
                iconfont
                icon-a-youjianchakanyoujianfasongyoujianshouyoujian-06
              "
            ></i
          ></a>
          <a href="https://github.com/" target="blank"
            ><i class="iconfont icon-github"></i
          ></a>
          <a href="https://music.163.com/" target="blank"
            ><i class="iconfont icon-erji"></i
          ></a>
        </div>
        <div class="name">Lang Nie</div>
        <div class="tag">前端攻城狮升级打怪中...</div>
      </div>
      <div class="category">
        <h3><i class="iconfont icon-lianjie"></i> 快速链接</h3>
        <div>
          <a class="color6" href="https://developer.mozilla.org/zh-CN/" target="blank">MDN</a>
          <a class="color1" href="https://v2.cn.vuejs.org/" target="blank">Vue2</a>
          <a class="color7" href="https://cn.vuejs.org/" target="blank">Vue3</a>
          <a class="color2" href="https://vuepress.vuejs.org/zh/" target="blank"
            >VuePress</a
          >
          <a
            class="color3"
            href="https://element.eleme.cn/#/zh-CN/component/installation"
            target="blank"
            >Element UI</a
          >
          <a
            class="color3"
            href="https://element-plus.org/zh-CN/component/overview.html"
            target="blank"
            >Element Plus</a
          >
          <a
            class="color6"
            href="https://cn.vitejs.dev/"
            target="blank"
            >Vite</a
          >
          <a class="color5" href="http://nodejs.cn/learn" target="blank"
            >Node.js</a
          >
          <a class="color2" href="https://react.docschina.org/" target="blank"
            >React</a
          >
          <a class="color8" href="https://uniapp.dcloud.io/" target="blank"
            >uni-app</a
          >
          <!-- <a class="color7" href="https://uniui.dcloud.net.cn/" target="blank"
            >uni-ui</a
          > -->
          
          <a class="color4" href="https://v1.uviewui.com/guide/demo.html" target="blank"
            >uView</a
          >

          <a class="color5" href="https://jquery.cuishifeng.cn/" target="blank"
            >jQuery</a
          >
          <a
            class="color1"
            href="https://es6.ruanyifeng.com/#README"
            target="blank"
            >ES6</a
          >
          <!-- <a class="color5" href="" target="blank"></a> -->
          <a
            class="color4"
            href="https://markdown.com.cn/basic-syntax/paragraphs.html"
            target="blank"
            >Markdown</a
          >
          <a class="color2" href="https://github.com/" target="blank">GitHub</a>
          <a class="color6" href="https://gitee.com/login" target="blank">Gitee</a>
          <a class="color3" :href="$withBase('/git')" target="blank">Git命令</a>
          <a
            class="color5"
            href="https://developers.weixin.qq.com/miniprogram/dev/framework/"
            target="blank"
            >微信开发文档</a
          >
          <a class="color4" href="https://www.iconfont.cn/" target="blank"
            >阿里矢量图标库</a
          >
          <!-- <a class="color5" href="https://hu-snail.github.io/vue3-resource/platform/introduction.html" target="blank"
            >vue3资源</a
          > -->
           <a class="color5" href="https://hu-snail.github.io/vue3-resource/platform/introduction.html" target="blank"
            >D3.js</a
          >
           <a class="color5" href="https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene" target="blank"
            >three.js</a
          >
        </div>
        <div class="more">
          <a :href="$withBase('/documents/quick-entry')"> 更多>> </a>
        </div>
      </div>
      <div class="wechat">
        <h3 class="title">公众号</h3>
        <div>
          <img :src="$withBase('/img/wechat.jpg')" alt="公众号" />
        </div>
        <div>
          关注公众号，回复[<strong>面试题</strong>]，可获取大厂面试题
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoList: [
        {
          title: "费曼学习法",
          author: "lang nie",
          date: "2021-05-10",
          tag: "booklist",
          url: "/booklist/study",
          content:
            "通过向别人清楚的解说某一件事或是写一篇浅显易懂的教程文章，来确认自己是否真正弄懂了这件事。 可以说是在通过向别讲解过程中来对自身的 查缺补漏。",
        },
        {
          title: "代码规范: 养成良好的编码习惯",
          author: "lang nie",
          date: "2021-05-10",
          tag: "develop-norm",
          url: "/develop-norm/engineer",
          content: "",
        },
        {
          title: "别乱提交代码了，看下大厂 Git 提交规范是怎么做的！",
          author: "lang nie",
          date: "2021-03-05",
          tag: "develop-norm",
          url: "/develop-norm/git",
        },
        {
          title: "10分钟搭建一个免费个人博客网站",
          author: "lang nie",
          date: "2022-02-01",
          tag: "documents",
          url: "/documents/build-blog",
          content: "身为一名技术人，怎么能没有一个属于自己的博客网站呢，跟着我10分钟快速搭建。",
        },
        {
          title: "记录一些有趣的网站",
          author: "lang nie",
          date: "2020-02-01",
          tag: "develop-norm",
          url: "/collect/sites.html#有趣",
        },
       
        {
          title: "常用的正则表达式",
          author: "lang nie",
          date: "2022-02-01",
          tag: "documents",
          url: "/javascript/regexp",
          content: "这些正则表达式，工作中你一定会用到，快快收藏。",
        },
        {
          title: "关于我",
          author: "lang nie",
          date: "2020-02-01",
          tag: "booklist",
          url: "/about/",
          content: "一个`Java后端`转`Web前端`的小学徒。",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.content {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  max-width: $homePageWidth;
  margin: 0 auto;

  .left {
    flex: 1;
  }

  .right {
    width: 16rem;
    margin-left: 15px;

    .presentation {
      background-color: #fff;
      border-radius: 8px;
      opacity: 0.9;

      img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        transition: all 1s;

        &:hover{
          transform: rotate(360deg)
        }
      }

      .info {
        display: flex;
        justify-content: space-around;

        a {
          color: #000;
          margin-top: 5px;

          .iconfont {
            opacity: 0.9;
            font-size: 1.3rem;
          }
        }
      }

      .name {
        margin-top: 10px;
        padding-left: 15px;
        font-size: 1.3rem;
      }

      .tag {
        padding: 5px 15px;
      }
    }

    .category {
      background-color: #fff;
      border-radius: 8px;
      margin-top: 10px;
      padding: 10px;
      opacity: 0.9;

      h3 {
        margin: 5px;
        font-weight: 400;

        .iconfont {
          font-size: 1.5rem;
        }
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        padding: 0.1rem 0.4rem;
        border-radius: 3px;
        margin-left: 10px;
        margin-top: 10px;
        font-weight: 500;
        font-size: 0.8rem;

        &:hover {
          opacity: 1;
          font-weight: 600;
          transform: scale(1.2);
        }
      }
      .color1 {
        background-color: #9daf9f;
      }

      .color2 {
        background-color: #e77c83;
      }

      .color3 {
        background-color: #849b87;
      }

      .color4 {
        background-color: #f8b26a;
      }

      .color5 {
        background-color: #41b9d7;
      }

      .color6 {
        background-color: #f8b26a;
      }
      .color7 {
        background-color: #f8b56a;
      }
      .color8 {
        background-color: #f9b26a;
      }
    }
    .more{
      text-align: right;
      font-size: 0.8rem;
      a{
        color: #333;
      }
    }
    .wechat{
        background-color: #fff;
        border-radius: 8px;
        margin-top: 10px;
        padding: 10px;
        opacity: 0.9;
        h3{
          margin: 5px;
          font-weight: 400;
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