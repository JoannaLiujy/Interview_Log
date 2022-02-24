#### 1.说一下css盒模型
- 标准盒子模型（content-box）的盒子宽度：左右border + 左右padding + width
- IE 盒子模型（border-box）的盒子宽度：width

#### 2.画一条0.5px的线
采用 transform: scale(0.5,0.5)的方式

#### 3.link标签和import标签的区别
- link属于html标签，而@import是css提供的
- 页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。 
- link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。 
- link方式样式的权重高于@import的。

#### 4.transition和animation的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from....to，而animation可以一帧一帧的。

#### 5.FLEX布局
- 决定主轴的方向（即子 item 的排列方法）flex-direction： row | row-reverse | column | column-reverse; 
- 决定换行规则 flex-wrap：nowrap | wrap | wrap-reverse; 
- flex-flow：<flex-direction> || <flex-wrap>;
- justify-content：对齐方式，水平主轴对齐方式 
- align-items：对齐方式，竖直轴线方向 
- 项目的属性（元素的属性）： 
  + order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为0 
  + flex-grow属性：定义项目的放大比例，即使存在空间，也不会放大
  + flex-shrink属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小
  + flex-basis属性：定义了在分配多余的空间，项目占据的空间。 
  + flex：是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。 
  + align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖 
  + align-items，默认属性为auto，表示继承父元素的align-items比如说，用flex实现圣杯布局

#### 6.BFC（块级格式化上下文，用于清楚浮动，防止margin重叠等）
> 直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。BFC区域不会与float box重叠
- BFC是页面上的一个独立容器，子元素不会影响到外面计算
- BFC的高度时，浮动元素也会参与计算
- 哪些元素会生成BFC：
  + 根元素
  + float不为none的元素
  + position为fixed和absolute的元素
  + display为inline-block、table-cell、table-caption，flex，inline-flex的元素 
  + overflow不为visible的元素

#### 7.垂直居中的方法
