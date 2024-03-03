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
        ['question', '面试问答'],

    ],
    '/css/': [
        ['notes', '浏览器是如何渲染页面的'],
        ['weight', 'CSS 特性及权重'],
        ['css-computed', 'CSS 属性计算过程'],
        ['css-box-model', 'CSS 之盒模型'],
        ['css-include-block', 'CSS 之包含块'],
        ['css-visual-formatting-model', 'CSS 之视觉格式化模型'],
        ['css-bfc', 'CSS 之块级格式化上下文'],
        ['css-stack-context', 'CSS 之层叠上下文'],
        ['css-compatibility', 'CSS 之兼容性'],
        {
            title: 'CSS3常用属性',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                ['/css/css3/tools', '常用工具'],
                ['/css/css3/layout', '布局'],
                ['/css/css3/vision', '视觉'],
                ['/css/css3/animation', '过渡和动画'],
                ['/css/css3/modern', '现代css'],
                ['/css/css3/other', '其他'],
            ]
        },
        ['tool', 'CSS 高频实用片段'],
        ['css-border', 'CSS 边框效果'],
        ['css-pixel', '设备像素/设备独立像素/css像素/dpr/ppi的区别'],
        ['other', '其他知识点'],
        ['question', '面试问答'],

       
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
        {
            title: 'JS基础',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                ['/javascript/base/core', '核心概念'],
                ['/javascript/base/library', '标准库'],
                ['/javascript/base/webapi', 'WebAPI'],
            ]
        },
        ['notes', '学习笔记'],
        {
            title: 'ES6',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 2,    // 可选的, 默认值是 1
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
                ['/javascript/ES6/12-ES6之Reflect反射和Proxy代理', '12-ES6之Reflect反射和Proxy代理'],
                ['/javascript/ES6/13-ES6之Promise', '13-ES6之Promise'],
                ['/javascript/ES6/14-EE6之Iterator和for_of循环', '14-EE6之Iterator和for_of循环'],
                ['/javascript/ES6/15-ES6之Generator函数', '15-ES6之Generator函数'],
                ['/javascript/ES6/16-ES6之async函数', '16-ES6之async函数'],
                ['/javascript/ES6/17-ES6之Class类', '17-ES6之Class类'],
                ['/javascript/ES6/18-ES6之Export和Import', '18-ES6之Export和Import'],
            ]
        },
        // ['es6', 'es6'],
        ['utils', '工具函数'],
        ['array', '数组循环总结'],
        ['regexp', '正则表达式'],
        ['questions-answers', '面试问答']
    ],
    '/vue/': [
        ['create', 'vue2项目搭建'],
        ['vue3', 'vue3后台项目搭建'],
        ['optimize', 'vue常见优化手段'],
        ['add-icon', 'vue+element使用第三方icon'],
        ['notes', '学习笔记'],
        ['questions-answers', '面试问答'],
    ],
    '/react/': [
        ['notes', '学习笔记'],
    ],
    '/nodejs/': [
        ['', 'Node.js'],
        ['npm', 'npm包管理器'],
        ['version-management', 'Node.js多版本管理器'],
        ['express', 'Express'],
        ['koa', 'Koa'],
        ['egg', 'Egg'],
    ],
    '/git/': [
        ['', 'git 常用命令'],
        ['manage-branch', 'git 分支管理'],

    ],

    '/optimization/':  [
        ['data-desensitization', '优化之数据脱敏'],
        {
            title: '性能优化',   // 必要的
            // collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            // sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
                ['/optimization/submenu/doc1', '优化1'],
            ]
        },
    ],
    '/web-security/': [
        ['xss', '前端安全之XSS攻击'],
        ['csrf', '前端安全之CSRF攻击'],

    ],
    '/network/': [
        ['01', '网络分层模型和应用协议'],
        ['02', '浏览器的通信能力'],
        ['cookiedoc', 'Cookie'],
        ['encryption', '加密算法'],
        ['jwt', 'JWT'],
        ['03', '跨域问题及解决方案'],
        ['httpcache', 'Http 缓存协议'],
        ['httpversion', 'Http 多版本差异'],
        ['tcp', 'TCP协议'],
        ['https', 'SSL、TLS、HTTPS的关系'],
        ['WebSocket', 'WebSocket'],
        ['question', '面试问答'],

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
    '/algorithm/': [
        ['01-algorithm-datastructure', '算法和数据结构'],
        ['02-timeandspace-complexity.md', '时间复杂度和空间复杂度'],
        ['03-array-linkedlist', '数组和链表'],
        ['04-stack-queue', '栈和队列'],

    ],
    // 渡一
    '/duyi/': ['',],

    // 构建工具
    '/build-tool/': [
        ['webpack', 'webpack'],
        {
            title: 'webpack',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                ['/build-tool/webpack/core', 'webpack核心'],
                ['/build-tool/webpack/extent', '常用扩展'],
                ['/build-tool/webpack/css', 'css工程化'],
                ['/build-tool/webpack/js', 'js兼容性'],
                ['/build-tool/webpack/performance', '性能优化'],
                ['/build-tool/webpack/extend', '扩展'],
            ]
        },
        ['vite', 'vite'],
        ['question', '面试问答'],
    ],
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
            ['/booklist/ceremony', '学习的仪式感'],
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
