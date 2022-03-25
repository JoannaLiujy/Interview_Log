#### GT（较偏向于框架知识和项目能力）
1. webpack中的plugin和loader
> loader和plugin的区别
- loader用于加载某些资源文件。因为webpack本身只能打包commonjs规范的js文件，这就需要对应的loader将资源转化，加载进来。loader是用于加载的，它作用于一个个文件的加载，并且只作用于打包的过程。
- plugin用于扩展webpack的功能。它直接作用于webpack，扩展了它的功能。当然loader也时变相的扩展了webpack，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载，并且整个编译周期都有用。

public/index.html是一个模板，webpack会把解析好的文件插入模板进行展示

2. hooks
见HHSW的第二题

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
4. **避免不必要的渲染在什么周期处理**
shouldComponentUpdate
5. **类组件生命周期，挂载到完成到卸载**
- 挂载阶段
  + constructor：避免将 props 的值复制给 state
  + componentWillMount
  + render：react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行
  + componentDidMount
- 组件更新阶段
  + componentWillReceiveProps
  + shouldComponentUpdate
  + componentWillUpdate
  + render
  + componentDidUpdate
- 卸载阶段
  + componentWillUnMount


### MTAPP
1. 说一下最近负责的项目
2. 优化方面有没有考虑过把项目进行拆分
3. **从开发到上线的多人协作过程（git）**
- 从远端master拉取最新代码
- 建立本地分支并推到远端
- 进行开发，代码review
- 上线前合并远端最新代码，**解决冲突** （进行冲突文件比对，找到相应的开发人员询问情况后决定保留什么，然后进行保存做merge操作，最后推到远端）
- 流水线作业
4. **react如何把jsx渲染成dom元素（babel的原理）**
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
5. **对虚拟dom的理解**
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
7. **js跨域，及解决办法**
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

### DDRC
1. **HTTP请求是可靠的么？如何确定数据不丢失？**
- HTTP是属于应用层的协议，TCP（传输控制协议）和UDP（用户数据报协议）是属于传输层的协议。我们都知道TCP协议是面向连接的，每次进行连接都要进行三次握手和四次挥手，所以它的连接是可靠的。而HTTP是在TCP上层的协议，所以它也是可靠的。但他是不安全的（明文传输）
- 重传

### CZ
1. **类组件和函数式组件的区别？**

2. 在类组件开发时，构造函数中经常用bind，解决什么问题？
3. **useEffect副作用是什么意思，如何用，参数都是什么，只放一个属性会出现什么？**
- 副作用指的是：在组件中执行过数据获取、订阅或者手动修改 DOM。
- 接收一个回调函数，和一个数组
- 只放一个，则在第一次渲染后和每一次更新后都会执行
- 如果想优化则可以加上第二个参数
4. **重绘和重排**
浏览器下载完页面中的所有组件——HTML标记、JavaScript、CSS、图片之后会解析生成两个内部数据结构——DOM树和渲染树
- 重绘是做了背景颜色、字体等不涉及布局结构的操作时触发的
- 重排是涉及到布局的宽高大小，内容变更等触发的操作
- 重排一定重绘，重绘不一定重排
5. **对闭包的理解，在项目中闭包用的多么**


### FBT
1. **async/await的理解**
> 是基于promise的简化版异步解决方案
async函数之前的关键字有两个作用：
- 使它总是返回一个promise。
- 允许在其中使用await。
await promise之前的关键字使得JavaScript等待，直到这个promise的状态为resolved
如果是reject，则产生异常，需通过try/catch捕获。
否则，它返回结果，所以我们可以将它的值赋值给一个变量。
async/await使我们少写promise.then/catch，但是不要忘记它们是基于promise的。

async 关键字放在函数之前，使得该函数总是返回一个promise对象。如果代码中显式 return 了一个值，那么函数的返回值将会被自动包装成resolved状态下的promise对象

2. **说一下promise**
见ZH第二题
3. **null和undefined**
```
console.log(null==undefined);    //true  因为两者都默认转换成了false
console.log(typeof undefined);    //"undefined"  
console.log(typeof null);       //"object"  
console.log(null===undefined);    //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```
- null表示没有对象，即该处不应该有值
1） 作为函数的参数，表示该函数的参数不是对象
2） 作为对象原型链的终点
- undefined表示缺少值，用let或var声明但没有初始化
1）定义了形参，没有传实参，显示undefined
2）对象属性名不存在时，显示undefined
3）函数没有写返回值，即没有写return，拿到的是undefined
4）写了return，但没有赋值，拿到的是undefined
- null和undefined转换成number数据类型： null 默认转成 0；undefined 默认转成 NaN

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
2. 展开数组
```
function flatDeep(arr) {
  // your code here
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatDeep(item) : item);
  }, []);
  // return arr.toString().split(',').map(item=>{
    // return Number(item);
  // })

}
const array1 = [0, [1, 2], [3], [[4, 5], 6]]
console.log(flatDeep(array1)) // => [0,1,2,3,4,5,6]
```

### HHSW
1. **使用的react版本？**
16.8.4 和 17.0.1
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

2. **const如何用var实现**
http://www.javashuo.com/article/p-bhonekue-kz.html

```
使用defineProperty，将data挂载到window下
Object.defineProperty(window,'data',{
  enumerable: false,
    configurable: false,
    get: function () {
      return value
    },
    set: function (data) {
      if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value
      }
    }
}) 
```
3. **es5如何实现块级作用域？**
使用立即执行函数

4. **css优先级顺序**
- ！important > 行内 > id > 类、属性、伪类 > 标签 > 通配符 > 继承
- 位置靠后的声明 > 位置靠前的

5. **常用的es6语法**
> let(变量) 与 const(常量)
 `1.let和const不存在变量提升机制`
  > 创建变量的六种方式中：var/function有变量提升，而let/const/class/import都不存在这个机制
  `2.var允许重复声明，而let是不允许的`
  > 在相同的作用域中（或执行上下文中），所谓的重复是：不管之前通过什么办法，只要当前栈内存中存在了这个变量，我们是用let/const等重复再声明这个变量就是语法错误
  - 如果使用var/function关键词声明变量并且重复声明，是不会有影响的（声明第一次之后，之后再遇到就不再重复声明了）
  - 但是使用let/const就不行，浏览器会校验当前作用域中是否已经存在这个变量了，如果已经存在了，则再次基于let等重新声明就会报错 

  `3.let能解决typeof检测时出现的暂时性死区问题（let比var更严谨）`
  `4.let声明的变量允许重新赋值，const不允许`
> 模板字符串:\`${}`
> 变量的解构赋值(对象和数组)
> 箭头函数(详见ZH第一题)
> 对象扩展（属性相同可以简写，方法可以忽略function关键字）
> 展开运算符（...）
```
let str = '123';
const arr = [...str];
console.log(arr); // ['1','2','3']
const arr2 = ['4','5'];
const arr3 = [...arr,...arr2]; // ['1','2','3','4','5']
```
> 模块化module，import，export
> promise
见ZH第二题
> async/await

2. **了解hooks么？**
> Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React

> 规则：
> 1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
> 2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）（注：在两个组件中使用相同的 Hook 不会共享 state 。自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的）

> Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook

> Hook 使用了 JavaScript 的闭包机制
#### hook包括哪些
> 1. State Hook 
通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
> 2. Effect Hook
- 在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
- 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它
- useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行
- 通过控制第二个参数进行性能优化，放一个空数组，初始化调用一次之后不再执行，相当于componentDidMount；有一个值的数组时，该值有变化就执行；有多个值的数组时，只要有一个值有变化就执行
> 3. useContext
让你不使用组件嵌套就可以订阅 React 的 Context
```
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```
> 4. useReducer
让你通过 reducer 来管理组件本地的复杂 state
```
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...

```
#### 类组件和函数式组件的区别
1. 函数式组件一般用于比较简单的组件定义，类组件用于复杂的组件定义
2. 函数组件中的this是undefined，类组件中的this指向的是当前组件的实例对象
3. 函数组件是一个纯函数，它接收一个props对象返回一个react元素；而类组件需要去继承React.Component并且创建render函数返回react元素。
4. 函数组件没有生命周期和状态state，而类组件有。
5. 你不能在函数组件中使用生命周期钩子，原因和不能使用state一样，所有的生命周期钩子都来自于继承的React.Component中。
6. 函数组件ReactDOM.render的过程：
```
执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
        1.React解析组件标签，找到了MyComponent组件。
        2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
```
类组件中ReactDOM.render的过程：
```
执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
        1.React解析组件标签，找到MyComponent组件。
        2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
        3.将render返回的虚拟DOM转为真实的DOM，随后呈现在页面中
```

#### 生命周期

#### hook的使用
> Hook 在 class 内部是不起作用的。但你可以使用它们来取代 class
1. 

 


### ZH
1. 箭头函数和普通函数
https://blog.csdn.net/m0_37686205/article/details/88776259
> 箭头函数没有this
- 箭头函数的this指向规则
  + 箭头函数没有prototype(原型)，所以箭头函数本身没有this
  + 箭头函数的this指向在定义的时候继承自外层第一个普通函数的this，如果没有继承的作用域，则指向window
  + 不能直接修改箭头函数的this指向
> 普通函数this
- 给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素本身
- 当方法执行的时候我们看方法前面是否有点，没有点是window或undefined，有点，点前面的是谁this就是谁
- 在构造函数模式执行中，函数体中的this是当前类的实例
- 可以通过call、apply、bind强制改变this的指向
  + 普通函数的默认绑定规则是：在非严格模式下，默认绑定的this指向全局对象，严格模式下this指向undefined
> 箭头函数为什么不能定义构造函数
- 构造函数执行的基础操作：浏览器会默认创建一个对象数据类型的值（就是一个堆，这个堆数据就是类的一个实例），让函数体中的this指向这个对象。在函数最后，会默认增加return返回值，将这个实例的地址返回给变量。
- 构造函数存在以下特点：
   1、构造函数内的this 指向当前实例对象。
   2、使用new 关键字实例化当前对象。
   3、构造函数首字母大写，区分普通函数。
   4、实例对象都可以继承构造函数中的属性和方法。但是，同一个对象实例之间，无法共享属性。
- 但是箭头函数不能同new一起使用，无法创建实例对象；箭头函数没有prototype，就无法让__proto__指向他的构造函数所属的prototype

2. 说说promise
> 解决回调地狱的异步方案；有三个状态Pending 、Fulfilled、Rejected，状态一旦完成不可逆；有很多实例方法如then,catch,race,all,finally；他的构造函数是同步的，then方法是异步的
> 参考链接：https://blog.csdn.net/qq_34629352/article/details/104180704?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.pc_relevant_default&spm=1001.2101.3001.4242.1&utm_relevant_index=3
```
// 实现Promise/A+
function myPromise(excutor){
  let self = this;
  self.status = 'pending';
  self.value = undefined;
  self.reason = undefined;
  function resolve(value){
    if(self.status === 'pending'){
      self.value = value;
      self.status = 'resolved';
    }
  }
  function reject(reason){
    if(self.status === 'pending'){
      self.reason = reason;
      self.status = 'rejected';
    }
  }
  try{
    excutor(resolve,reject);
  }catch(e){
    reject(e);
  }
}

myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```
- Promise.all
参数：接受一个数组，数组内都是Promise实例

返回值：返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例的状态变化。当参数中所有的实例都处于resolve状态时，返回的Promise实例会变为resolve状态。如果参数中任意一个实例处于reject状态，返回的Promise实例变为reject状态

all 所有Promise的结果都返回resolve才会执行then，返回结果为一个存放所有结果的数组里，如果有任何一个返回reject，则执行catch，如果第一个Promise是有延迟执行的 则会等待执行完才继续
```
const all = function (iterable) {
  return new Promise(function (resolve, reject) {
    let count = 0, ans = new Array(count)
    for (const i in iterable) {
      const v = iterable[i]
      if (typeof v === 'object' && typeof v.then === 'function') {
        v.then(function (res) {
          ans[i] = res
          if (--count === 0) resolve(ans)
        }, reject)
        count++
      } else {
        ans[i] = v
      }
    }
  })
}
```
- Promise.race
参数：接受一个数组，数组内都是Promise实例

返回值：返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例的状态变化。当参数中任何一个实例处于resolve状态时，返回的Promise实例会变为resolve状态。如果参数中任意一个实例处于reject状态，返回的Promise实例变为reject状态。

race的方法执行结果取决于第一个Promise的返回结果(返回快的那个)，reject则执行catch，resolve则执行then，不会等待定时器的执行，会将定时器时间执行时间短的结果返回
```
const race = function (iterable) {
  return new Promise(function (resolve, reject) {
    for (const i in iterable) {
      const v = iterable[i]
      if (typeof v === 'object' && typeof v.then === 'function') {
        v.then(resolve, reject)
      } else {
        resolve(v)
      }
    }
  })
}
```

- Promise.finally
```
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

### HKD
1. **原型和原型链（object、function和Array联系）**
> 原型：每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值。
> 原型链查找机制：当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。如果没有则去原型的原型中寻找,直到找到Object对象的原型，Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined
> object、function和Array联系
- 所有的引用类型（数组、对象、函数），
  + 都具有对象特性，即可自由扩展属性（null除外）
  + 都有一个__proto__属性，属性值是一个普通的对象
  + __proto__属性值指向它的构造函数的prototype属性值
- 所有的函数，都有一个prototype属性，属性值也是一个普通的对象

**扩展：object、function和Array区别**
typeof object => object
typeof array => object
typeof function => function

==>区分object和array的方法
- Object.prototype.toString.call()
- .isArray()
- a instanceof Array
- constructor

2. **继承的多种方式和相应的特点**
`1.原型链继承`
```
Child.prototype = new Parent();
Child.prototype.constructor = Child;
```
- 缺点：
  + 因为Son.prototype(即原型对象)继承了Parent实例化对象，这就导致了所有Son实例化对象都一样，都共享有原型对象的属性及方法
  + Son构造函数实例化对象无法进行参数的传递
`2.构造函数继承`
```
CHILD方法中把PARENT当做普通函数执行，让PARENT中的THIS指向CHILD的实例
```
- 优点：
  + 实现实例化对象的独立性；
  + 还可以给实例化对象添加参数
- 缺点：
  + 方法都在构造函数中定义，每次实例化对象都得创建一遍方法，基本无法实现函数复用
  + call方法仅仅调用了父级构造函数的属性及方法，没有办法调用父级构造函数原型对象的方法

`3.组合继承`
```
function Son(name){
  Parent.call(this,name);
}
Son.prototype = new Parent();
Son.prototype.constructor = Son;
```
- 优点：
  + 利用原型链继承，实现原型对象方法的继承
  + 利用构造函数继承，实现属性的继承，而且可以传递参数；组合函数基本满足了JS的继承，比较常用
- 缺点：
无论什么情况下，都会调用两次父级构造函数：一次是在创建子级原型的时候，另一次是在子级构造函数内部

`4.寄生组合继承`
```
function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.action = function () {
  console.log('我是爸爸');
}
function Son(charactor) {
  Parent.call(this);
  this.charactor = charactor;
  this.say = function () {
    console.log(this.name, "是儿子");
  }
}
Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;
//==>Object.create()不兼容，可以用下面的方法同步
funtion create(obj){
  function Fn = {};
  Fn.prototype = obj;
  return new Fn();
}
```

`5.es6的继承extend`
```
//=> ES6基于class创造出来的类不能当做普通函数执行
class A{
  constructor(x){
    this.x = x;
  }
  getX(){
    console.log(this.x);
  }
}
//=>ES6中的继承：class CHILD extends PARENT{} 相当于B.prototype.__proto__ = A.prototype
class B extends A{
  constructor(y){
    //=>子类只要继承父类，可以不写constructor，一旦写了，必须在第一句话写上super()
    super(200); //=>相当于A.call(this,200),把弗雷昂做普通方法执行，给方法传递参数，让方法中的this是子类的实例
    // 不写constructor，浏览器回自己默认创建constructor(...args){super(...args)}
    this.y = y;
  }
  getY(){
    console.log(this.y);
  }
}
let b = new B(100);
console.log(B);
```
3. **vite为什么比webpack快**
https://new.qq.com/omn/20211213/20211213A08W2F00.html


### JSXZ
1. **post和get的区别**
GET 和 POST 只是 HTTP 协议中两种请求方式；
https://segmentfault.com/a/1190000018129846
- 标准
  + GET 用于获取信息，是无副作用的，是幂等的，且可缓存
  + POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存
- 安全
  + 在传输层面上，两个都不安全，因为他们都是基于TCP/IP应用层的http协议，是使用明文传输的。
  + 不考虑传输，get没有post安全，get的参数会展示在地址栏，post的参数是存在请求体中的

- 数据类型
  + GET:只允许 ASCII 字符。
  + POST:没有限制。也允许二进制数据。
- 缓存
HTTP缓存通常只适用于idempotent request（可以理解为查询请求，也就是不更新服务端数据的请求），这也就导致了在HTTP的世界里，一般都是对Get请求做缓存，Post请求很少有缓存
  + GET:能被缓存。
  + POST:不能缓存。 

2. **详细说一下CORS**
- 含义： 跨域资源共享
- 配置： 服务器端 Access-Control-Allow-Origin（必含） – 允许的域名，只能填 *（通配符）或者单域名
- CORS 跨域的判定流程：
  + 浏览器先根据同源策略对前端页面和后台交互地址做匹配，若同源，则直接发送数据请求；若不同源，则发送跨域请求
  + 服务器收到浏览器跨域请求后，根据自身配置返回对应文件头。若未配置过任何允许跨域，则文件头里不包含 Access-Control-Allow-origin 字段，若配置过域名，则返回 Access-Control-Allow-origin + 对应配置规则里的域名的方式。
  + 浏览器根据接受到的 响应头里的 Access-Control-Allow-origin 字段做匹配，若无该字段，说明不允许跨域，从而抛出一个错误；若有该字段，则对字段内容和当前域名做比对，如果同源，则说明可以跨域，浏览器接受该响应；若不同源，则说明该域名不可跨域，浏览器不接受该响应，并抛出一个错误
