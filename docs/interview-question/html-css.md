# HTML/CSS

## 三栏布局方式，两边固定，中间自适应的方法有哪些？
- 弹性盒子flex： 左右固定款，中间flex: 1;
- 自身浮动法：左栏左浮动，右边栏右浮动，**中间栏放最后**
- 绝对定位法：左右两栏采用绝对定位，分别固定于页面的左右两侧，中间的主体栏用左右 margin 值撑开距离
- margin负值法：左右两栏均左浮动，左右两栏采用负的 margin 值。中间栏被宽度为100%的浮动元素包起来  
[margin负值的用法](https://www.html.cn/web/css/17515.html) [margin负值三栏布局](https://blog.csdn.net/Beng_shakalaka/article/details/75308066) 

## css 都有哪些标签选择器?

- id选择器（#box），选择id为box的元素

- 类选择器（.one），选择类名为one的所有元素

- 标签选择器（div），选择标签为div的所有元素

- 全局选择器: （*），选择所有元素

- 后代选择器（#box div），选择id为box元素内部所有的div元素

- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素

- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素

- 群组选择器（div,p），选择div、p的所有元素

- 属性选择器
  - [attribute] 选择带有attribute属性的元素
  - [attribute=value] 选择所有使用attribute=value的元素
  - [attribute~=value] 选择attribute属性包含value的元素
  - [attribute|=value]：选择attribute属性以value开头的元素

- 伪类选择器
  - :link ：选择未被访问的链接
  - :visited：选取已被访问的链接
  - :active：选择活动链接
  - :hover ：鼠标指针浮动在上面的元素
  - :focus ：选择具有焦点的
  - :first-child：父元素的首个子元素
- 伪元素选择器
  - :first-letter ：用于选取指定选择器的首字母
  - :first-line ：选取指定选择器的首行
  - :before : 选择器在被选元素的内容前面插入内容
  - :after : 选择器在被选元素的内容后面插入内容  
  
**CSS3中新增的选择器有如下：**
- 层次选择器（p~ul），选择前面有p元素的每个ul元素

- 伪类选择器
  - :first-of-type 父元素的首个元素
  - :last-of-type 父元素的最后一个元素
  - :only-of-type 父元素的特定类型的唯一子元素
  - :only-child 父元素中唯一子元素
  - :first-of-type 父元素的首个元素
  - :last-of-type 父元素的最后一个元素
  - :only-of-type 父元素的特定类型的唯一子元素
  - :only-child 父元素中唯一子元素
  - :nth-child(n) 选择父元素中第N个子元素
  - :nth-last-of-type(n) 选择父元素中第N个子元素，从后往前
  - :last-child 父元素的最后一个元素
  - :root 设置HTML文档
  - :empty 指定空的元素
  - :enabled 选择被禁用元素
  - :disabled 选择被禁用元素
  - :checked 选择选中的元素
  - :not(selector) 选择非 `<selector>` 元素的所有元素

- 属性选择器
  - [attribute*=value]：选择attribute属性值包含value的所有元素
  - [attribute^=value]：选择attribute属性开头为value的所有元素
  - [attribute$=value]：选择attribute属性结尾为value的所有元素