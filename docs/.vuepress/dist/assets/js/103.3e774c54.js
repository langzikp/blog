(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{539:function(v,_,t){"use strict";t.r(_);var a=t(34),i=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"视觉格式化模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视觉格式化模型"}},[v._v("#")]),v._v(" 视觉格式化模型")]),v._v(" "),t("p",[v._v("视觉格式化模型，大体上将页面中盒子的排列分为三种方式：")]),v._v(" "),t("ol",[t("li",[v._v("常规流")]),v._v(" "),t("li",[v._v("浮动")]),v._v(" "),t("li",[v._v("定位")])]),v._v(" "),t("h2",{attrs:{id:"常规流布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常规流布局"}},[v._v("#")]),v._v(" 常规流布局")]),v._v(" "),t("p",[v._v("常规流又称为文档流、普通文档流、常规文档流")]),v._v(" "),t("p",[v._v("所有元素，默认情况下，都属于常规流布局")]),v._v(" "),t("p",[v._v("总体规则：块盒独占一行，行盒水平依次排列")]),v._v(" "),t("p",[v._v("包含块（containing block）：每个盒子都有它的包含块，包含块决定了盒子的排列区域。")]),v._v(" "),t("p",[v._v("绝大部分情况下：盒子的包含块，为其父元素的内容盒")]),v._v(" "),t("h3",{attrs:{id:"块盒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块盒"}},[v._v("#")]),v._v(" 块盒")]),v._v(" "),t("ol",[t("li",[v._v("每个块盒的总宽度，必须刚好等于包含块的宽度")])]),v._v(" "),t("p",[v._v("宽度的默认值是auto")]),v._v(" "),t("p",[v._v("margin的取值也可以是auto，默认值0")]),v._v(" "),t("p",[v._v("auto：将剩余空间吸收掉")]),v._v(" "),t("p",[v._v("width吸收能力强于margin")]),v._v(" "),t("p",[v._v("若宽度、边框、内边距、外边距计算后，仍然有剩余空间，该剩余空间被margin-right全部吸收")]),v._v(" "),t("p",[v._v("在常规流中，块盒在其包含快中居中，可以定宽、然后左右margin设置为auto。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("每个块盒垂直方向上的auto值")])]),v._v(" "),t("p",[v._v("height:auto， 适应内容的高度")]),v._v(" "),t("p",[v._v("margin:auto， 表示0")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("百分比取值")])]),v._v(" "),t("p",[v._v("padding、宽、margin可以取值为百分比")]),v._v(" "),t("p",[v._v("以上的所有百分比相对于"),t("strong",[v._v("包含块的宽度")]),v._v("。")]),v._v(" "),t("p",[v._v("高度的百分比：")]),v._v(" "),t("p",[v._v("1）. 包含块的高度是否取决于子元素的高度，设置百分比无效"),t("br"),v._v("\n2）. 包含块的高度不取决于子元素的高度，百分比相对于父元素高度")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("上下外边距的合并")])]),v._v(" "),t("p",[v._v("两个常规流块盒，上下外边距相邻，会进行合并。")]),v._v(" "),t("p",[v._v("两个外边距取最大值。")]),v._v(" "),t("h2",{attrs:{id:"浮动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[v._v("#")]),v._v(" 浮动")]),v._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[v._v("#")]),v._v(" 应用场景")]),v._v(" "),t("ol",[t("li",[v._v("文字环绕")]),v._v(" "),t("li",[v._v("横向排列")])]),v._v(" "),t("h3",{attrs:{id:"浮动的基本特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮动的基本特点"}},[v._v("#")]),v._v(" 浮动的基本特点")]),v._v(" "),t("p",[v._v("修改float属性值为：")]),v._v(" "),t("ul",[t("li",[v._v("left：左浮动，元素靠上靠左")]),v._v(" "),t("li",[v._v("right：右浮动，元素靠上靠右")])]),v._v(" "),t("p",[v._v("默认值为none")]),v._v(" "),t("ol",[t("li",[v._v("当一个元素浮动后，元素必定为块盒(更改display属性为block)")]),v._v(" "),t("li",[v._v("浮动元素的包含块，和常规流一样，为父元素的内容盒")])]),v._v(" "),t("h3",{attrs:{id:"盒子尺寸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#盒子尺寸"}},[v._v("#")]),v._v(" 盒子尺寸")]),v._v(" "),t("ol",[t("li",[v._v("宽度为auto时，适应内容宽度")]),v._v(" "),t("li",[v._v("高度为auto时，与常规流一致，适应内容的高度")]),v._v(" "),t("li",[v._v("margin为auto，为0.")]),v._v(" "),t("li",[v._v("边框、内边距、百分比设置与常规流一样")])]),v._v(" "),t("h3",{attrs:{id:"盒子排列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#盒子排列"}},[v._v("#")]),v._v(" 盒子排列")]),v._v(" "),t("ol",[t("li",[v._v("左浮动的盒子靠上靠左排列")]),v._v(" "),t("li",[v._v("右浮动的盒子考上靠右排列")]),v._v(" "),t("li",[v._v("浮动盒子在包含块中排列时，会避开常规流块盒")]),v._v(" "),t("li",[v._v("常规流块盒在排列时，无视浮动盒子")]),v._v(" "),t("li",[v._v("行盒在排列时，会避开浮动盒子")]),v._v(" "),t("li",[v._v("外边距合并不会发生")])]),v._v(" "),t("blockquote",[t("p",[v._v("如果文字没有在行盒中，浏览器会自动生成一个行盒包裹文字，该行盒叫做匿名行盒。")])]),v._v(" "),t("h3",{attrs:{id:"高度坍塌"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高度坍塌"}},[v._v("#")]),v._v(" 高度坍塌")]),v._v(" "),t("p",[v._v("高度坍塌的根源：常规流盒子的自动高度，在计算时，不会考虑浮动盒子")]),v._v(" "),t("p",[v._v("清除浮动，涉及css属性：clear")]),v._v(" "),t("ul",[t("li",[v._v("默认值：none")]),v._v(" "),t("li",[v._v("left：清除左浮动，该元素必须出现在前面所有左浮动盒子的下方")]),v._v(" "),t("li",[v._v("right：清除右浮动，该元素必须出现在前面所有右浮动盒子的下方")]),v._v(" "),t("li",[v._v("both：清除左右浮动，该元素必须出现在前面所有浮动盒子的下方")])]),v._v(" "),t("h2",{attrs:{id:"定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[v._v("#")]),v._v(" 定位")]),v._v(" "),t("h3",{attrs:{id:"position属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#position属性"}},[v._v("#")]),v._v(" position属性")]),v._v(" "),t("ul",[t("li",[v._v("默认值：static，静态定位（不定位）")]),v._v(" "),t("li",[v._v("relative：相对定位")]),v._v(" "),t("li",[v._v("absolute：绝对定位")]),v._v(" "),t("li",[v._v("fixed：固定定位")])]),v._v(" "),t("p",[v._v("一个元素，只要position的取值不是static，认为该元素是一个定位元素。")]),v._v(" "),t("p",[v._v("定位元素会脱离文档流（相对定位除外）")]),v._v(" "),t("p",[v._v("一个脱离了文档流的元素：")]),v._v(" "),t("ol",[t("li",[v._v("文档流中的元素摆放时，会忽略脱离了文档流的元素")]),v._v(" "),t("li",[v._v("文档流中元素计算自动高度时，会忽略脱离了文档流的元素")])]),v._v(" "),t("h3",{attrs:{id:"相对定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对定位"}},[v._v("#")]),v._v(" 相对定位")]),v._v(" "),t("p",[v._v("不会导致元素脱离文档流，只是让元素在原来位置上进行偏移。")]),v._v(" "),t("p",[v._v("可以通过四个CSS属性对设置其位置：")]),v._v(" "),t("ul",[t("li",[v._v("left")]),v._v(" "),t("li",[v._v("right")]),v._v(" "),t("li",[v._v("top")]),v._v(" "),t("li",[v._v("bottom")])]),v._v(" "),t("p",[v._v("盒子的偏移不会对其他盒子造成任何影响。")]),v._v(" "),t("h3",{attrs:{id:"绝对定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位"}},[v._v("#")]),v._v(" 绝对定位")]),v._v(" "),t("ol",[t("li",[v._v("宽高为auto，适应内容")]),v._v(" "),t("li",[v._v("包含块变化：找祖先中第一个定位元素，该元素的填充盒为其包含块。若找不到，则它的包含块为整个网页（初始化包含块）")])]),v._v(" "),t("h3",{attrs:{id:"固定定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#固定定位"}},[v._v("#")]),v._v(" 固定定位")]),v._v(" "),t("p",[v._v("其他情况和绝对定位完全一样。")]),v._v(" "),t("p",[v._v("包含块不同：固定为视口（浏览器的可视窗口）")]),v._v(" "),t("h3",{attrs:{id:"定位下的居中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位下的居中"}},[v._v("#")]),v._v(" 定位下的居中")]),v._v(" "),t("p",[v._v("某个方向居中：")]),v._v(" "),t("ol",[t("li",[v._v("定宽（高）")]),v._v(" "),t("li",[v._v("将左右（上下）距离设置为0")]),v._v(" "),t("li",[v._v("将左右（上下）margin设置为auto")])]),v._v(" "),t("p",[v._v("绝对定位和固定定位中，margin为auto时，会自动吸收剩余空间")]),v._v(" "),t("h3",{attrs:{id:"多个定位元素重叠时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多个定位元素重叠时"}},[v._v("#")]),v._v(" 多个定位元素重叠时")]),v._v(" "),t("p",[v._v("堆叠上下文")]),v._v(" "),t("p",[v._v("设置z-index，通常情况下，该值越大，越靠近用户")]),v._v(" "),t("p",[v._v("只有定位元素设置z-index有效")]),v._v(" "),t("p",[v._v("z-index可以是负数，如果是负数，则遇到常规流、浮动元素，则会被其覆盖")]),v._v(" "),t("h3",{attrs:{id:"补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[v._v("#")]),v._v(" 补充")]),v._v(" "),t("ul",[t("li",[v._v("绝对定位、固定定位元素一定是块盒")]),v._v(" "),t("li",[v._v("绝对定位、固定定位元素一定不是浮动")]),v._v(" "),t("li",[v._v("没有外边距合并")])])])}),[],!1,null,null,null);_.default=i.exports}}]);