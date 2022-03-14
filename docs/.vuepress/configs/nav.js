/*
* 将导航栏放置在该文件中,集中进行管理
* @Autor: niel
* @Date: 2020-05-29
* @Version: 1.0.1
*/

module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    ariaLabel: '开发规范 Menu',
    items: [
      { text: '开发规范', link: '/develop-norm/engineer' },
      { text: 'HTML', link: '/html/notes' },
      { text: 'CSS', link: '/css/notes' },
      { text: 'Javascript', link: '/javascript/notes' },
      { text: 'Vue', link: '/vue/notes' },
      { text: 'React', link: '/react/notes' },
      { text: 'Git', link: '/git/' },
      { text: '性能优化', link: '/performance-optimization/' },
      { text: 'Q&A', link: '/questions-answers/' },
    ]
  },
  { text: '后端', link: '/backend/' },
  {
    text: '学习',
    ariaLabel: '学习 Menu',
    items: [
      { text: '我的书单', link: '/booklist/' },
      { text: '学习', link: '/booklist/study' },
    ]
  },
  {
    text: '收藏',
    items: [
      {
        text: '框架及UI库', items: [
          { text: 'Vue及UI组件库', link: '/collect/frame#vue及ui组件库' },
          { text: 'React UI 组件库', link: '/collect/frame#react-ui-组件库' },
          { text: '更多...', link: '/collect/frame' },
        ]
      },
      {
        text: '其他网站', items: [
          { text: '文档', link: '/collect/sites#文档' },
          { text: '社区', link: '/collect/sites#社区' },
          { text: '更多...', link: '/collect/sites' },
        ]
      }
    ]
  },
  { text: '关于', link: '/about/' },
]