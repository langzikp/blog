# 过渡和动画

使用过渡和动画，可以让css属性变化更加丝滑

**过渡和动画无法对所有的CSS属性产生影响，能够产生影响的只有数值类属性**，例如：颜色、宽高、字体大小等等

## 过渡

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

```css
transition: 过渡属性 持续时间 过渡函数 过渡延迟
```

- **过渡属性**

  针对哪个css属性应用过渡。例如填写`transform`，则表示仅针对**transform**属性应用过渡。

  若填写`all`或不填写，则表示针对所有css属性都应用过渡

- **持续时间**

  css属性变化所持续的时间，需要带上单位。例如`3s`表示3秒，`0.5s`或`500ms`均表示500毫秒

- **过渡函数**

  本质是css属性变化的贝塞尔曲线函数，通常直接使用预设值：

  `ease-in-out`：平滑开始，平滑结束

  `linear`：线性变化

  `ease-in`：仅平滑开始

  `ease-out`：仅平滑结束

- **过渡延迟**

  书写规则和持续时间一样，表示过渡效果延迟多久后触发，不填则无延迟

**在JS中，可以监听元素的`transitionstart`和`transitionend`事件，从而在过渡开始和过渡结束时做一些别的事情**

## 动画

> [MDN详细文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)

**动画的本质是预先定义的一套css变化规则，然后给该规则取个名字**

![image-20210513172902413](http://mdrs.yuanjin.tech/img/20210513172902.png)

然后，其他元素即可使用这样的规则：

```css
animation: 规则名 持续时间;
```

在应用规则时，还可以指定更多的信息

```css
animation: 规则名 持续时间 重复次数 时间函数 动画方向 延迟时间
```

一些细节：

- 定义规则时，`0%`可以书写为`from`
- 定义规则时，`100%`可以书写为`to`
- 重复次数为`infinite`时，表示无限重复
- 动画方向为`alternate`时，表示交替反向，第1次正向，第2次反向，第3次正向，第4次方向，以此类推

**在JS中，可以监听元素的`animationstart`和`animationnend`事件，从而在过渡开始和过渡结束时做一些别的事情**