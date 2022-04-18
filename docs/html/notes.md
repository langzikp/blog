# 学习笔记
## HTML5语义化标签
`<article>`、`<section>`、`<nav>`、`<aside>`、`<header>`、`<footer>`、`<time>`等  
优点：
- 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构
- 比`<div>`标签有更加丰富的含义，方便开发与维护
- 方便搜索引擎能识别页面结构，有利于SEO
- 方便其他设备解析（如移动设备、盲人阅读器等）

![这是图片](/img/ct_sem_elements.png)

## HTML5废弃的标签及属性
### 移除的元素
- 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
- 对可用性产生负面影响的元素：frame，frameset，noframes；
- 产生混淆的元素：acronym ，applet，isindex，dir。
### 移除的属性
移除
a，area，button，input，label，legend和textarea元素的accesskey属性；  
link和a元素的rev和charset属性；  
a元素的shape和coords属性；  
img和iframe元素的longdesc属性；  
link元素的target属性；  
area元素的nohref属性；  
head元素的profile属性；  
html元素的version属性；  
map，img，object，form，iframe，a元素的name(use id instead)属性；  
meta元素的scheme属性；  
object元素的archive，classid，codebase，codetype，declare和standby属性；  
param元素的valuetype和type属性；  
script元素的charset和language属性；  
table元素的summary属性；  
td和th元素的headers，axis和abbr属性；  
td元素的scope属性；  
caption，iframe，img，input，object，legend，table，hr，div，h1，h2，h3，h4，h5，h6，p，col，colgroup，tbody，td，tfoot，th，thead，tr和body元素的align属性；  
body元素的alink，link，text和vlink属性；  
body元素的background属性；  
table，tr，td，th和body元素的bgcolor属性；  
table，img和object元素的border属性；  
table元素的cellpadding和cellspacing属性；  
col，colgroup，tbody，td，tfoot，th，thead和tr元素的char和charoff属性；  
br元素的clear属性；  
dl，menu，ol和u元素的compact属性；  
table元素的frame属性；  
iframe元素的frameborder属性；  
iframe，td和th元素的height属性；  
img和object元素的hspace和vspace属性；  
iframe元素的marginheight和marginwidth属性；  
hr元素的noshade属性；  
td和th元素的nowrap属性；  
table元素的rules属性；  
iframe元素的scrolling属性；  
hr，input和select元素的size属性；  
all elements with the exception of font元素的style属性；  
li，ol和ul元素的type属性；  
col，colgroup，tbody，td，tfoot，th，thead和tr元素的valign属性；  
hr，table，td，th，col，colgroup，iframe和pre元素的width属性。  



[HTML5 新元素](https://www.runoob.com/html/html5-new-element.html)