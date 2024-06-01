## 性能优化
## 为什么要关注性能
- Web性能可以直接影响业务指标，例如 转化率和用户满意度

## 性能分析工具
- 使用Lighthouse分析性能
  - 本地安装lighthouse
  > 先安装 npm install -g lighthouse
  > 执行命令： lighthouse http://www.bilibili.com --locale zh --quiet --chrome-flags="--headless" --only-categories=performance

  - 在Chrome DevTools中使用
- [webpagetest](https://www.webpagetest.org/)  是一个免费的网站性能测试工具，可以测试网站在各种设备上的性能。