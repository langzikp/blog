const courseNotes = require('./sidebar-course-notes')
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
    // '/javascript/': [
    //     ['notes', '学习笔记'],
    //     [
    //         {
    //             title: 'ES6',   // 必要的
    //             // path: '/booklist/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //             collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
    //             sidebarDepth: 0,    // 可选的, 默认值是 1
    //             children: [
    //                 ['/ES6/01-ES6之let及const命令', '测试'],
    //             ]
    //         },
    //     ],
    //     ['array', '数组循环总结'],
    //     ['regexp', '正则表达式'],
    //     ['questions-answers', 'Q&A']
    // ],
    '/javascript/':  [
        ['notes', '学习笔记'],
        {
            title: 'ES6',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
                ['/javascript/ES6/01-ES6之let及const命令', '01-ES6之let及const命令'],
                ['/javascript/ES6/02-ES6之解构赋值', '02-ES6之解构赋值'],
                ['/javascript/ES6/03-ES6之字符串扩展', '03-ES6之字符串扩展'],
                ['/javascript/ES6/04-ES6之数值的扩展', '04-ES6之数值的扩展'],
                ['/javascript/ES6/05-ES6之函数的扩展', '05-ES6之函数的扩展'],
                ['/javascript/ES6/06-ES6之数组的扩展', '06-ES6之数组的扩展'],
                ['/javascript/ES6/07-ES6之对象的扩展', '07-ES6之对象的扩展'],
                ['/javascript/ES6/08-ES6之对象的新增方法', '08-ES6之对象的新增方法'],
                ['/javascript/ES6/09-ES6之运算符的扩展', '09-ES6之运算符的扩展'],
                ['/javascript/ES6/10-ES6之新增数据类型Symbol', '10-ES6之新增数据类型Symbol'],
                ['/javascript/ES6/11-ES6之新增数据结构Map和Set', '11-ES6之新增数据结构Map和Set'],
            ]
        },
        // ['es6', 'es6'],
        ['array', '数组循环总结'],
        ['regexp', '正则表达式'],
        ['questions-answers', 'Q&A']
    ],
    '/vue/': [
        ['create', 'vue项目搭建'],
        ['notes', '学习笔记'],
    ],
    '/react/': [
        ['notes', '学习笔记'],
    ],
    '/nodejs/': [
        ['', 'Node.js'],
        ['npm', 'npm包管理器'],
        ['version-management', 'Node.js多版本管理器'],
    ],
    '/git/': [
        ['', 'git 常用命令'],

    ],

    '/performance-optimization/': [
        ['', 'web 性能优化'],

    ],
    '/web-security/': [
        ['xss', '前端安全之XSS攻击'],
        ['csrf', '前端安全之CSRF攻击'],

    ],
    '/questions-answers/': [
        ['', 'Q&A'],

    ],
    '/interview-question/': [
        ['html-css', 'HTML-CSS'],
        ['javascript', 'JavaScript']
    ],

    // 后端
    '/backend/': ['',],

    // 课程笔记
    '/course-notes/': courseNotes,

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
    }, {
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
