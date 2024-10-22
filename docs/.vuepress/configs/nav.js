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
      { text: '浏览器', link: '/browser/notes' },
      { text: 'HTML', link: '/html/notes' },
      { text: 'CSS', link: '/css/weight' },
      { text: 'Javascript', link: '/javascript/notes' },
      { text: 'Vue', link: '/vue/create' },
      { text: 'React', link: '/react/notes' },
      { text: '构建工具', link: '/build-tool/webpack/core' },
      { text: 'Nodejs', link: '/nodejs/' },
      { text: 'Git', link: '/git/' },
      { text: '技术方案及优化', link: '/optimization/data-desensitization' },
      { text: '前端安全', link: '/web-security/xss' },
      { text: '网络', link: '/network/01' },
    ]
  },
  { text: '后端', link: '/backend/' },
  { text: '算法', link: '/algorithm/01-algorithm-datastructure' },
  // { text: '渡一', link: '/duyi/' },
  {
    text: '笔记',
    ariaLabel: '笔记',
    items: [
      // { text: '0-计算机网络', link: '/course-notes/0-计算机网络/1课程导学/01-课程导学.md' },
      { text: 'JavaScript进阶', link: '/course-notes/1-JavaScript进阶/1-1函数/01-内存管理.md' },
      { text: 'Vue框架源码&项目实战', link: '/course-notes/2-Vue框架源码and项目实战/2-1课程导学/01-Vue专题导学.md' },
      // { text: '3-React框架源码解析', link: '/course-notes/1' },
      // { text: '4-网易特色项目React实战', link: '/course-notes/2' },
      // { text: '5-工程化', link: '/course-notes/3' },
      // { text: '6-Node.js进阶', link: '/course-notes/4' },
      // { text: '7-D3.js实现知识图谱可视化', link: '/course-notes/5' },
      // { text: '8-网易花田移动端综合项目实战', link: '/course-notes/6' },
    ]
    
  },
  {
    text: 'Q&A',
    ariaLabel: 'Q&A',
    items: [
      { text: 'HTMl-CSS', link: '/interview-question/html-css' },
      { text: 'JavaScript', link: '/interview-question/javascript' },
    ]
  },

  {
    text: '记录',
    ariaLabel: '学习 Menu',
    items: [
      { text: '我的书单', link: '/booklist/' },
      { text: '学习', link: '/booklist/study' },
      { text: '语录', link: '/booklist/quotations' },
      { text: '十分钟搭建自己的个人博客', link: '/documents/build-blog' },
      { text: '使用vitepress搭建自己的个人博客', link: '/documents/build-vitepress-blog' },
      { text: '微信公众号H5配置流程', link: '/documents/wechat-h5' },
      { text: '微信小程序客服绑定流程', link: '/documents/mini-program-customer-service' },
      { text: '微信小程序上线准备', link: '/documents/mini-program-online' },
      { text: '前端相关框架', link: '/documents/quick-entry' },
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
          { text: '图片/工具', link: '/collect/sites#工具' },
          { text: '更多...', link: '/collect/sites' },
        ]
      }
    ]
  },
  { text: '关于', link: '/about/' },
]