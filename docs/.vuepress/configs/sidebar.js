/*
* 将侧边栏放置在该文件中,集中进行管理
* @Autor: niel
* @Date: 2020-05-29
* @Version: 1.0.1
*/
module.exports = {
    
    // 开发规范
    '/develop-norm/': [
        ['engineer', '工程师规范'],
        ['html', 'HTML 编码规范'],
        ['css', 'CSS 编码规范'],
        ['javascript', 'Javascript 编码规范'],
        ['vue', 'Vue 编码规范'],
        ['react', 'React 编码规范'],
        ['git', 'Git 提交规范'],
    ],
    '/html/': [
        ['notes', '学习笔记'],

    ],
    '/css/': [
        ['notes', '学习笔记'],
        ['weight', 'CSS 特性及权重'],
        ['tool', 'CSS 高频实用片段'],
        ['css-border', 'CSS 边框效果'],
    ],
    '/javascript/': [
        ['notes', '学习笔记'],
        ['es6', 'ES6 语法'],
        ['array', '数组循环总结'],
        ['questions-answers', 'Q&A']
    ],
    '/vue/': [
        ['create', 'vue项目搭建'],
        ['notes', '学习笔记'],
    ],
    '/react/': [
        ['notes', '学习笔记'],
    ],
    '/git/': [
        ['', 'git 常用命令'],
       
    ],
   
    '/performance-optimization/': [
        ['', 'web 性能优化'],
       
    ],
    '/questions-answers/': [
        ['', 'Q&A'],
       
    ],

    // 后端
    '/backend/': ['',],

    // 我的书单
    '/booklist/': [{
        title: '书单',   // 必要的
        // path: '/booklist/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
            ['/booklist/', '我的书单'],
        ]
      },
      {
        title: '学习方法',
        sidebarDepth: 0,  
        children: [
            ['/booklist/study', '费曼学习法'],
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },{
        title: '语录',
        sidebarDepth: 0,  
        children: [
            ['/booklist/quotations', '语录'],
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },],
    // 收藏
    '/collect/': [
        ['frame', '框架及UI库'],
        ['sites', '其他网站']
    ],

    // 关于
    '/about/': ['']
}
