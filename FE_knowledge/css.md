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
- BFC是页面上的一个独立容器，子元素不会影响到外面
- 计算BFC的高度时，浮动元素也会参与计算
- 哪些元素会生成BFC：
  + 根元素
  + float不为none的元素
  + position为fixed和absolute的元素
  + display为inline-block、table-cell、table-caption，flex，inline-flex的元素 
  + overflow不为visible的元素

#### 7.垂直居中的方法
```
//->定位方式
//1.
.wp {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
//2.
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
//3.
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}

```
```
//->lineheight
<div class="wp">
    <div class="box">123123</div>
</div>
.wp {
    line-height: 300px;
    text-align: center;
    font-size: 0px;
}
.box {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    line-height: initial;
    text-align: left; /* 修正文字 */
}

```
```
//->tble(html代码过分冗余，但是css很简单)
<table>
    <tbody>
        <tr>
            <td class="wp">
                <div class="box">123123</div>
            </td>
        </tr>
    </tbody>
</table>
.wp {
    text-align: center;
}
.box {
    display: inline-block;
}

```
```
//->css-table(兼容性很好)
.wp {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.box {
    display: inline-block;
}

```
```
//->flex(需要考虑兼容性问题)
.wp {
    display: flex;
    justify-content: center;
    align-items: center;
}

```
- PC端有兼容性要求，宽高固定，推荐absolute + 负margin
- PC端有兼容要求，宽高不固定，推荐css-table
- PC端无兼容性要求，推荐flex
- 移动端推荐使用flex


#### 8.关于JS动画和css3动画的差异性
> 渲染线程分为main thread和compositor thread，如果css动画只改变transform和opacity，这时整个CSS动画得以在compositor trhead完成（而JS动画则会在main thread执行，然后出发compositor thread进行下一步操作），特别注意的是如果改变transform和opacity是不会layout或者paint的。
- 区别：
  + css在复合线程上执行的，js动画是首先在主线程上面执行，然后再复合线程上去执行下一步操作。
  + 功能涵盖面，JS比CSS大实现/重构难度不一
  + CSS3比JS更加简单，性能跳优方向固定对帧速表现不好的低版本浏览器，css3可以做到自然降级
  + css动画有天然事件支持
  + css3有兼容性问题

#### 9.说一下块元素和行元素
> 块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度
- div p h1-h6 ul ol li form table header footer aside section
> 行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失效
- span img a b q i button input label 

#### 10.多行元素的文本省略号
```
/* 单行文本溢出显示省略号 */
  .div1 p{
    white-space: nowrap; /* 文本超过容器最大宽度不换行(若文本自动显示在一行则不需要这个属性) */
    overflow: hidden;  /* 本文超出容器最大宽度的部分不显示 */
    text-overflow: ellipsis;  /* 文本超出容器最大宽度时显示三个点 */
  }
 
/* 多行文本溢出显示省略符 */
  .div2 p{
    word-break: break-word; /* 文本默认显示在一行时，需要添加该属性，让超出的文本换行 */
    overflow:hidden;
    display:-webkit-box; /* 让容器变成一个弹性伸缩盒子 */
    -webkit-line-clamp:2;  /* 最大显示的文本行数 */
    -webkit-box-orient:vertical;  /* 设置或检索伸缩盒对象的子元素纵向排列  */
}
```

#### 11.visibility=hidden, opacity=0，display:none
- opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件
- visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
- display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样

#### 12.line-height和height的区别
line-height 一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height 一般是指容器的整体高度。

#### 13.css预处理器有什么
less，sass

#### 14.双边距重叠问题
1. 什么是双边距重叠
多个相邻的（兄弟或者父子关系）标准流中的块元素垂直方向的margin会重叠。
2. 折叠结果
- 两个相邻的外边距都是正数的时候，折叠结果就是它们两者之间较大的值
- 两个相邻的外边距都是负数的时候，折叠结果就是它们两者之间绝对值的较大值
- 两个相邻的外边距一正一负的时候，折叠结果就是它们两者相加的和
3. 如何解决双边距重叠
- 给其中的一个div添加一个父的div，并且为这个div设置边框或者实现overflow：hidden；
- 将块级div设置成行内div（display：inline-block；）

#### 15.position属性比较
- 固定定位fixed：元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。
  + Fixed定位使元素的位置与文档流无关，因此不占据空间。
  + Fixed定位的元素和其他元素重叠。 
- 相对定位relative：是在自己原来的基础上进行偏移。也就是相对于自己定位。使元素偏移，使用top,right,left,bottom进行偏移，用z-index分别层次。
- 绝对定位absolute：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。absolute定位使元素的位置与文档流无关，因此不占据空间。absolute定位的元素和其他元素重叠。
- 粘性定位sticky：元素先按照普通文档流定位，然后相对于该元素在流中的flow root（BFC）和containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。 
- 默认定位Static：默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right或者z-index 声明）。
- inherit: 规定应该从父元素继承position属性的值。

#### 16.浮动清除
1. 方法一：使用带clear属性的空元素在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。亦可使用<br class="clear" />或<hr class="clear"/>来进行清理。--》会出现大量冗余，浪费资源 
2. 方法二：使用CSS的overflow属性给浮动元素的容器添加 overflow:hidden;或 overflow:auto;可以清除浮动，另外在IE6中还需要触发hasLayout，例如为父元素设置容器宽高或设置zoom:1。在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。 
3. 方法三：给浮动的元素的容器添加浮动，给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。 
4. 方法四：使用邻接元素处理什么都不做，给浮动元素后面的元素添加clear属性。 
5. 方法五：使用CSS的:after伪元素结合:after伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和IEhack，可以完美兼容当前主流的各大浏览器，这里的IEhack指的是触发 hasLayout。给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:afte伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。
```
// 给父级元素的类加一个clearfix的class
<body>
  <div class="clearfix">
   <!-- 浮动模块 -->
  </div>
</body>
div span{
  display:inline-block;
  width:25%;
  float:left;
}
.clearfix::after{
  content:'';
  display:block;
  clear:both;
}
```