const sidebar = require('./configs/sidebar')
const nav = require('./configs/nav')

module.exports = {
    title: 'Lang\'s blog',
    description: 'this is my blog',
    base: "/blog/",
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }]
    ],
    host: '192.9.200.119',
    port: '8080',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/logo.png',//导航栏logo
        // navbar: false,//禁用导航栏
        nav, //导航栏配置
        sidebar,// 侧边栏配置

        lastUpdated: 'Last Updated', // git 的最后commit时间
        smoothScroll: true,//启用页面滚动效果
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        // repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',


    },
    plugins: [
        // '@vuepress/back-to-top',//回到顶部插件
    ],
}