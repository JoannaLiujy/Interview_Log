#### GT（较偏向于框架知识和项目能力）
1. webpack中的plugin和loader
> loader和plugin的区别
- loader用于加载某些资源文件。因为webpack本身只能打包commonjs规范的js文件，这就需要对应的loader将资源转化，加载进来。loader是用于加载的，它作用于一个个文件的加载，并且只作用于打包的过程。
- plugin用于扩展webpack的功能。它直接作用于webpack，扩展了它的功能。当然loader也时变相的扩展了webpack，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载，并且整个编译周期都有用。

public/index.html是一个模板，webpack会把解析好的文件插入模板进行展示

2. hooks

3. 从输入了url后发生了什么
1、输入网址
当你开始输入网址比如www.cnblogs.com时游览器就可以在书签或者历史记录里面去搜索相关的网址推荐给你。
2、游览器查找域名的IP地址
① 请求发起后，游览器首先会解析这个域名，首先它会查看本地硬盘的 hosts 文件，看看其中有没有和这个域名对应的规则，如果有的话就直接使用 hosts 文件里面的 ip 地址。
② 如果在本地的 hosts 文件没有能够找到对应的 ip 地址，浏览器会发出一个 DNS请求到本地DNS(域名分布系统)服务器 。本地DNS服务器一般都是你的网络接入服务器商提供，比如中国电信，中国移动。
③查询你输入的网址的DNS请求到达本地DNS服务器之后，本地DNS服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果，此过程是递归的方式进行查询。如果没有，本地DNS服务器还要向DNS根服务器进行查询
④根DNS服务器没有记录具体的域名和IP地址的对应关系，而是告诉本地DNS服务器，你可以到域服务器上去继续查询，并给出域服务器的地址。这种过程是迭代的过程
⑤本地DNS服务器继续向域服务器发出请求，在这个例子中，请求的对象是.com域服务器。.com域服务器收到请求之后，也不会直接返回域名和IP地址的对应关系，而是告诉本地DNS服务器，你的域名的解析服务器的地址
⑥最后，本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问。
3、建立TCP链接
在拿到域名对应的IP地址后，会以随机端口（1024~~65535）向WEB服务器程序80端口发起TCP的连接请求，这个连接请求进入到内核的TCP/IP协议栈（用于识别该连接请求，解封包，一层一层的剥开），还有可能要经过Netfilter防火墙（属于内核的模块）的过滤，最终到达WEB程序，最终建立了TCP/IP的连接，对于客户端与服务器的TCP链接，必然要说的就是『三次握手』-确定有收发的能力。
客户端发送一个带有SYN标志的数据包给服务端，服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息，最后客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功。
4、游览器向WEB服务器发起Http请求
建立TCP连接之后，发起HTTP请求，请求一般分为三部分
请求方法URI协议/版本
请求头(Request Header)
请求正文
 5、服务器端处理
服务器端收到请求后的由web服务器（准确说应该是http服务器）处理请求，诸如Apache、Ngnix、IIS等。web服务器解析用户请求，知道了需要调度哪些资源文件，再通过相应的这些资源文件处理用户请求和参数，并调用数据库信息，最后将结果通过web服务器返回给浏览器客户端。
6、关闭TCP链接
为了避免服务器与客户端双方的资源占用和损耗，当双方没有请求或响应传递时，任意一方都可以发起关闭请求。与创建TCP连接的3次握手类似，关闭TCP连接，需要4次握手。
7、游览器解析资源
对于获取到的HTML、CSS、JS、图片等等资源。
浏览器通过解析HTML，生成DOM树，解析CSS，生成CSS规则树，然后通过DOM树和CSS规则树生成渲染树。渲染树与DOM树不同，渲染树中并没有head、display为none等不必显示的节点。
在解析CSS的同时，可以继续加载解析HTML，但在解析执行JS脚本时，会停止解析后续HTML，这就会出现阻塞问题，关于JS阻塞相关问题，这里不过多阐述,后面会单独开篇讲解。
8、游览器布局渲染
根据渲染树布局，计算CSS样式，即每个节点在页面中的大小和位置等几何信息。HTML默认是流式布局的，CSS和js会打破这种布局，改变DOM的外观样式以及大小和位置。这时就要提到两个重要概念：repaint和reflow。
repaint：屏幕的一部分重画，不影响整体布局，比如某个CSS的背景色变了，但元素的几何尺寸和位置不变。
reflow： 意味着元件的几何尺寸变了，我们需要重新验证并计算渲染树。是渲染树的一部分或全部发生了变化。这就是Reflow，或是Layout。
有些情况下，比如修改了元素的样式，浏览器并不会立刻 reflow 或 repaint 一次，而是会把这样的操作积攒一批，然后做一次 reflow，这又叫异步 reflow 或增量异步 reflow。
有些情况下，比如 resize 窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行 reflow。


### Me..A..
1. 说一下最近负责的项目
2. 优化方面有没有考虑过把项目进行拆分
3. 从开发到上线的多人协作过程（git）
- 从远端master拉取最新代码
- 建立本地分支并推到远端
- 进行开发，代码review
- 上线前合并远端最新代码，**解决冲突** （进行冲突文件比对，找到相应的开发人员询问情况后决定保留什么，然后进行保存做merge操作，最后推到远端）
- 流水线作业
4. react如何把jsx渲染成dom元素（babel的原理）
- 编写jsx语法，（类似于js代码，易于编写），通过babel来进行转换
- babel将jsx代码转换为react.createElement形式来进行调用（可以在babel官网中进行查看）,接受三个参数（type("div")，config({"className":"main"}),children:("111111")）
```
React.createElement(标签,属性props对象,子节点1,子节点2.....) 
1.参数：标签名,属性对象,子节点   返回值：虚拟dom对象
2.标签：1.字符串 2.组件（自定义组件：函数组件/class组件，react原生组件：React.Fragment等） 
一般组件首字母大写，如果bable转化时发现当前标签的首字母为大写，则表示当前的标签是一个函数名称，否则当前标签为一个字符串
3.属性props对象：写在标签上的属性集合，一般为对象
4.子节点：表示子节点的集合，一般从React.createElement的第三个参数开始，如果对于当前标签的子节点为字符串则参数值直接为字符串。如果当前节点的子节点不是字符串，则会生成新的React.createElement
```
- react.createElemen通过调用createElement方法来进行渲染虚拟DOM
```
// 生成的对象数据结构
{
  type: 'div',
    props: {
      className: 'cn',
        children: [
          {
            type: function Header,
            props: {
                children: 'Hello, This is React'
            }
          },
          {
            type: 'div',
            props: {
                children: 'start to learn right now！'
            }
          },
          'Right Reserve'
      ]
  }
}
```
- 虚拟DOM通过reactDOM.render（）方法来进行转换为真实DOM
```
ReactDOM.render(element, container[, callback])当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 diff算法进行高效的更新。
如果提供了可选的回调函数callback，该回调将在组件被渲染或更新之后被执行
```
5. 对虚拟dom的理解
https://www.jianshu.com/p/e0a3ac85db5c
6. react的路由（hash和history）
最直观的区别就是在url中hash带了一个#，而history是没有#的。
- HashRouter原理=>window.onhashchange监听，{ Provider, Consumer } = React.createContext()来传递,window.location对象中的属性，hash，state;该模式下window.location.hash，页面只会加载对应的组件
- BrowserRouter原理=>window.history API，只有点击前进回退按钮，或者api触发history.go()，history.goBack()，history.forward()可以触发window.onpopstate事件;该模式下使用window.location.pathname/window.location.href()修改路径（或者原路径），页面都会重新加载渲染。
浏览器中触发前进、后退按钮页面不会重新加载，只会加载对应的组件
- 这两种模式下使用history.go()页面都会重新加载，或者地址栏回车也会重新加载
```
// 通过history api，我们丢掉了#，但是它也有个问题：不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的。
//在hash模式下，前端路由修改的是#中的信息，而浏览器请求时不会将 # 后面的数据发送到后台，所以没有问题。但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，则会刷新出来404页面
```
7. js跨域，及解决办法
- 首先一个url是由：协议、域名、端口 三部分组成。（一般端口默认80）。当一个请求url的协议、域名、端口三者之间的任意一个与当前页面url不同即为跨域。
- **为什么？** 出于浏览器的同源策略限制。同源策略（Same Orgin Policy）是一种约定，它是浏览器核心也最基本的安全功能，它会阻止一个域的js脚本和另外一个域的内容进行交互，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。。所谓同源（即在同一个域）就是两个页面具有相同的协议（protocol）、主机（host）和端口号（port）。
- 常见方式：
  1. jsonp：使用html中的script src属性获取其他源的数据
```
<script>
  function getData(res){
    consoLe.Log(res)
  }
</script>
<script src="http://www.baidu.com/news?callback=getData">
```
  2. cors:跨域资源共享 
支持所有的主流浏览器ie9+
XMLHttpRequest发送请求的时候，如果不同源，header{ Access-control-allow-origin ,"*"}
后台处理：Access-control-allow-origin 

  3. h5 window.postMessage跨域 主流浏览器ie8+
window.postMessage("字符串","")

注意：react中跨域
安装http-proxy-middleware，在package.json中配置
使用mock也是跨域的一种

### CZ
1. 类组件和函数式组件的区别？
2. 在类组件开发时，构造函数中经常用bind，解决什么问题？


### LQY
1. 计时器对象
```
/**
 * 前端面试题：实现计数器
 * 1. 实现 Counter 函数，支持通过 new 创建一个带增减功能的计数器对象
 * 2. 增减操作支持自定义步长
 * 3. 只能通过 current 方法获取当前值，不允许直接修改和访问当前数值
 */
//==>函数方式
// function Counter() {
//     let num = 0;
//     this.increment = function(...args){
//         return args.length !== 0 ? num += Number(args) : num++;
//     }
//     this.decrement = function(...args){
//         return args.length !== 0 ? num -= Number(args) : num--;
//     }
//     this.current = function(){
//         return num;
//     }
// }
//==>类方式
let num = new WeakMap();
class Counter {
  constructor() {
    num.set(this, 0);
  }
  current() {
    return num.get(this);
  }
  increment(...args) {
    var n = this.current();
    n += Number(args);
    // console.log(args.length !== 0);
    return args.length !== 0 ? num.set(this, n) : num.set(this, ++n);
  }
  decrement(...args) {
    var n = this.current();
    n -= Number(args);
    return args.length !== 0 ? num.set(this, n) : num.set(this, --n);
    // return args.length !== 0 ? n -= Number(args) : n--;
  }
}

// 期望以下测试用例能够返回正确的结果
const c = new Counter();

c.increment();
console.log(c.current());   // 1
c.increment(5);
console.log(c.current());   // 6
c.decrement(3);
console.log(c.current());   // 3
console.log(c.num);     // undefined

```

