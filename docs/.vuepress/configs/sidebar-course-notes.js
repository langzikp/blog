/*
* 高级前端课程笔记侧边栏
* @Autor: niel
* @Date: 2022-05-30
* @Version: 1.0.0
*/
const chapters = [
    // {
    //     name: '0-计算机网络',
    //     sections: [
    //         {
    //             name: '1课程导学',
    //             contents: ['01-课程导学']
    //         },
    //         {
    //             name: '2网络协议',
    //             contents: ['01-OSI七层模型', '02-TCP和IP协议和互联网协议群', '03-DNS和CDN']
    //         },
    //     ]
    // },
    {
        name: '1-JavaScript进阶',
        sections: [
            {
                name: '1-1函数',
                contents: ['01-内存管理', '02-代码性能指标', '03-函数式编程', '04-如何做好函数式编程', '05-compose函数和pipe函数', '06-高阶函数', '07-函数柯里化', '08-防抖和节流', '09-underscore源码分析', '10-深拷贝和浅拷贝']
            },
            {
                name: '1-2异步编程',
                contents: ['01-理解异步', '02-Event Loop事件循环','03-异步编程-发布与订阅','04-深入理解Promise','05-Generator函数及其异步应用', '06-基于Thunk函数的Generator自动执行器', '07-co模块源码分析', '08-深入理解Async和Await', '09-手写Promise上', '10-手写Promise下', '11-WebWorker多线程机制', '12-复杂异步场景下的解决方案Rxjs']
            },
            {
                name: '1-3设计模式',
                contents: ['01-设计模式概论', '02-封装与对象', '03-提高复用', '04-提高代码质量', '05-提高可扩展性']
            }
        ]
    },
    {
        name: '2-Vue框架源码and项目实战',
        sections: [
            {
                name: '2-1课程导学',
                contents: ['01-Vue专题导学']
            },
            {
                name: '2-2初识vue',
                contents: ['01-HelloVue', '02-模板', '03-数据', '04-事件and样式', '05-组件']
            },
            {
                name: '2-3探索vue的组件世界',
                contents: ['01-自定义指令', '02-双向绑定', '03-组件设计', '04-组件通信', '05-插件','06-组件复用']
            },
            {
                name: '2-4深入vue源码设计',
                contents: ['01-响应式源码分析', '02-异步更新队列NextTick源码分析', '03-Diff算法分析', '04-Computed和Watch源码分析']
            }, {
                name: '2-5Vue生态及实践',
                contents: ['01-Vuex', '02-Router']
            }, {
                name: '2-6掘金Top10列表页实践',
                contents: ['01-实践']
            }, {
                name: '2-7配置中心',
                contents: ['01-配置中心']
            }, {
                name: '2-8优化实践',
                contents: ['01-keep-alive实践', '02-长列表优化']
            }, {
                name: '2-9SSR',
                contents: ['01-SSR上', '02-SSR下']
            }, {
                name: '2-10Nuxt',
                contents: ['01-Nuxt上', '02-Nuxt下']
            }
        ]
    },

]

const courses = [];
for (const chapter of chapters) {
    let temp1 = {
        title: chapter.name,   // 必要的
    }

    let sections = []
    for (const section of chapter.sections) {
        let temp2 = {
            title: section.name,
        }
        let contents = []
        for (const item of section.contents) {
            contents.push([`/course-notes/${chapter.name}/${section.name}/${item}.md`, item])
        }
        temp2.children = contents
        sections.push(temp2)
    }
    temp1.children = sections
    courses.push(temp1)
}
module.exports = courses


// module.exports = [
//     {
//         title: '1-JavaScript进阶',   // 必要的
//         children: [
//             {
//                 title: '1-1函数',   
//                 children: [
//                     ['/course-notes/1-Js进阶/1-1函数/01-内存管理.md', '01-内存管理'],
//                     ['/course-notes/1-JavaScript进阶/1-1函数/02-代码性能指标.md', '02-代码性能指标'],

//                 ]
//             },
//             {
//                 title: '1-2异步编程', 
//                 children: [
//                     ['/course-notes/1-JavaScript进阶/1-2异步编程/01-理解异步.md', '01-理解异步'],

//                 ]
//             },
//         ]
//     },
// ]