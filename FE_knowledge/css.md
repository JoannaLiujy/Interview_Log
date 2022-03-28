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
> 块元素：独占一行，其前后都会有换行符，并且有自动填满父元素，可以设置margin和pading以及高度和宽度
- div p h1-h6 ul ol li form table header footer aside section
> 行元素：不会独占一行，前后无换行符，width和height会失效，并且在垂直方向的padding和margin会失效
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

#### 11.隐藏元素
- opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件
- visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
- display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样
- position移到外部
- z-index 涂层遮盖
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
#### 17.css3新特性
1. CSS3边框：
- border-radius：CSS3圆角边框。在CSS2中添加圆角矩形需要技巧，我们必须为每个圆角使用不同的图片，在CSS3中，创建圆角是非常容易的，在CSS3中，border-radius属性用于创建圆角。
- box-shadow：CSS3边框阴影。用于向方框添加阴影。
- border-image：CSS3边框图片。可以使用图片来创建边框。
2. CSS3背景：
- background-size：属性规定背景图片的尺寸。在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。能够以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。
- background-origin：属性规定背景图片的定位区域。背景图片可以放置于content-box、padding-box或border-box区域。
3. CSS3文字效果：
- text-shadow：在 CSS3 中，text-shadow 可向文本应用阴影。
- word-wrap :单词太长的话就可能无法超出某个区域，允许对长单词进行拆分，并换行到下一行：p{word-wrap:break-word;}
4. CSS3 2D转换：
- transform：通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。
  + translate()：元素从其当前位置移动，根据给定的left（x 坐标）和top（y 坐标）位置参数：transform：translate（50px,100px）;
  + rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。transform:rotate(30deg);
  + scale():元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：transform:scale(2,4);值 scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。
5. CSS3 3D转换：
- rotateX()：元素围绕其 X 轴以给定的度数进行旋转。transform：rotateX(120deg);
- rotateY()：元素围绕其 Y 轴以给定的度数进行旋转。transform：rotateY(120deg);
6. CSS3过渡：当元素从一种样式变换为另一种样式时为元素添加效果。
7. CSS3动画：创建动画，这可以在许多网页中取代动画图片、Flash动画以及JavaScript。
8. CSS3多列：
- column-count：属性规定元素应该被分隔的列数。
- column-gap：属性规定列之间的间隔。
- column-rule ：属性设置列之间的宽度、样式和颜色规则。
9. CSS3用户界面：
- resize：属性规定是否可由用户调整元素尺寸。
- box-sizing：属性允许您以确切的方式定义适应某个区域的具体内容。
- outline-offset：属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

#### 18.CSS选择器有哪些，优先级呢
id选择器，class选择器，标签选择器，相邻选择器，子选择器，后代选择器，通配符选择器，属性选择器，伪元素选择器，伪类选择器等
- 同一元素引用了多个样式时，排在后面的样式属性的优先级高；
- 样式选择器的类型不同时，优先级顺序为：id选择器 > class选择器 > 标签选择器； 
- 标签之间存在层级包含关系时，后代元素会继承祖先元素的样式。如果后代元素定义了与祖先元素相同的样式，则祖先元素的相同的样式属性会被覆盖。继承的样式的优先级比较低，至少比标签选择器的优先级低； 
- 带有!important 标记的样式属性的优先级最高；!important>行内样式>id>c类、属性、伪类>标签>通配符>继承 
- 样式表的来源不同时，优先级顺序为：内联样式> 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

#### 19.float的元素，display是什么
block

#### 20.css动画如何实现
创建动画序列，需要使用animation属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由@keyframes规则实现，具体情况参见使用keyframes定义动画序列小节部分。transition也可实现动画。transition强调过渡，是元素的一个或多个属性发生变化时产生的过渡效果，同一个元素通过两个不同的途径获取样式，而第二个途径当某种改变发生（例如 hover）时才能获取样式，这样就会产生过渡动画。

#### 21.三栏布局的实现方式，尽可能多写，浮动布局时，三个 div的生成顺序有没有影响
两列定宽一列自适应： 
1、使用 float+margin： 给 div 设置 float：left，left 的 div 添加属性 margin-right：left 和 center 的间隔 px,right 的 div 添加属性 margin-left：left 和 center 的宽度之和加上间隔 
2、使用 float+overflow： 给 div 设置 float：left，再给 right 的 div 设置 overflow:hidden。这样子两个盒子浮动，另 一个盒子触发 bfc 达到自适应 
3、使用 position： 父级 div 设置 position：relative，三个子级 div 设置 position：absolute，这个要计算好盒 子的宽度和间隔去设置位置，兼容性比较好， 
4、使用 table 实现： 父级 div 设置 display：table，设置 border-spacing：10px//设置间距，取值随意,子级 div 设置 display:table-cell，这种方法兼容性好，适用于高度宽度未知的情况，但是 margin 失效，设计间隔比较麻烦， 
5、flex 实现： parent 的 div 设置 display：flex；left 和 center 的 div 设置 margin-right；然后 right 的 div 设置 flex：1；这样子 right 自适应，但是 flex 的兼容性不好 
6、grid 实现： parent 的 div 设置 display：grid，设置 grid-template-columns 属性，固定第一列第二列宽 度，第三列 auto， 
对于两侧定宽中间自适应的布局，对于这种布局需要把 center 放在前面，可以采用双飞 翼布局：圣杯布局，来实现，也可以使用上述方法中的 grid，table，flex，position 实现

#### 22.css布局
六种布局方式总结：圣杯布局、双飞翼布局、Flex 布局、绝对定位布局、表格布局、网 格布局。 圣杯布局是指布局从上到下分为 header、container、footer，然后 container 部分定为三栏 布局。这种布局方式同样分为 header、container、footer。圣杯布局的缺陷在于 center 是 在 container 的 padding 中的，因此宽度小的时候会出现混乱。 双飞翼布局给 center 部分包裹了一个 main 通过设置 margin 主动地把页面撑开。 Flex 布局是由 CSS3 提供的一种方便的布局方式。 绝对定位布局是给 container 设置 position: relative 和 overflow: hidden，因为绝对定位的元 素的参照物为第一个 postion 不为 static 的祖先元素。 left 向左浮动，right 向右浮动。 center 使用绝对定位，通过设置 left 和 right 并把两边撑开。 center 设置 top: 0 和 bottom: 0 使其高度撑开。 表格布局的好处是能使三栏的高度统一。 网格布局可能是最强大的布局方式了，使用起来极其方便，但目前而言，兼容性并不好。 网格布局，可以将页面分割成多个区域，或者用来定义内部元素的大小，位置，图层关 系。

#### 23.overflow 的原理
要讲清楚这个解决方案的原理，首先需要了解块格式化上下文，A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.翻译过来就是块格式化上下文是 CSS 可视化渲染的一部分，它是一块区域，规定了内部块盒 的渲染方式，以及浮动相 互之间的影响关系 当元素设置了 overflow 样式且值部位 visible 时，该元素就构建了一个 BFC，BFC 在计算 高度时，内部浮动元素的高度也要计算在内，也就是说技术 BFC 区域内只有一个浮动 元素，BFC 的高度也不会发生塌缩，所以达到了清除浮动的目的

#### 24.CSS画正方体，三角形

#### 25.用css实现一个硬币旋转的效果

#### 26.z-index的定位方法
z-index 属性设置元素的堆叠顺序，拥有更好堆叠顺序的元素会处于较低顺序元素之前， z-index 可以为负，且 z-index 只能在定位元素上奏效，该属性设置一个定位元素沿 z 轴的位置，如果为正数，离用户越近，为负数，离用户越远，它的属性值有 auto，默认， 堆叠顺序与父元素相等，number，inherit，从父元素继承 z-index 属性的值

#### 27.display：table 和本身的 table 有什么区别
Display:table 和本身 table 是相对应的，区别在于，display：table 的 css 声明能够让一个 html 元素和它的子节点像 table 元素一样，使用基于表格的 css 布局，是我们能够轻松定 义一个单元格的边界，背景等样式，而不会产生因为使用了 table 那样的制表标签导致 的语义化问题。 之所以现在逐渐淘汰了 table 系表格元素，是因为用 div+css 编写出来的文件比用 table 边写出来的文件小，而且 table 必须在页面完全加载后才显示，div 则是逐行显示，table 的嵌套性太多，没有 div 简洁
