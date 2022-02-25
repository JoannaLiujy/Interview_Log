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
- 块级元素