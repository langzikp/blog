/*
* 高级前端课程笔记侧边栏
* @Autor: niel
* @Date: 2022-05-30
* @Version: 1.0.0
*/
const ROOT_CONTENT = 'course-notes'

const chapters = [
    {
        name: '1-JavaScript进阶',
        sections: [
            {
                name: '1-1函数',
                contents: ['01-内存管理', '02-代码性能指标', '03-函数式编程', '04-如何做好函数式编程', '05-compose函数和pipe函数', '06-高阶函数', '07-函数柯里化', '08-防抖和节流']
            },
            {
                name: '1-2异步编程',
                contents: ['01-理解异步', '02-Event Loop事件循环','03-异步编程-发布与订阅','04-深入理解Promise','05-Generator函数及其异步应用', '06-基于Thunk函数的Generator自动执行器', '07-co模块源码分析', '08-深入理解Async和Await', '09-手写Promise上', '10-手写Promise下', '11-WebWorker多线程机制', '12-复杂异步场景下的解决方案Rxjs']
            },
            {
                name: '1-3设计模式',
                contents: ['01-设计模式', ]
            }
        ]
    },
    {
        name: '2-Vue框架源码&项目实战',
        sections: [
            {
                name: '2-1初识vue',
                contents: ['01']
            },
            {
                name: '2-2探索vue组件世界',
                contents: ['01']
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
            contents.push([`/${ROOT_CONTENT}/${chapter.name}/${section.name}/${item}.md`, item])
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