## 一、数据类型
### 1.一共7种（js红宝书）：
  >简单：Number、String、Boolean、undefined、Null、Symbol
  复杂：Object
  
  ####  Number:常规数字、NaN（和任何值包括自己都不相等）
  > Number()转换字符串：只有数字的转为数字，带其他字符的转为NaN，空字符串转为0
  - 布尔转数字：true：1、false:0
  - null:0
  - **undefined:NaN**
  - 对象：普通对象转为NaN，数组对象：空数组转为0（先基于toString转为字符串然后再转为数字）
  > parseInt/parseFloat([val],[进制])；对于字符串，从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找，并把找到的当数字返回。

  #### String
  > 转换为字符串使用.toString（）；
  - null和undefined禁止直接toString，如果转换，则结果为'null'/'undefined'
  - 对象转换，结果是[object,object] => Object.prototype.toString方法不是转换为字符串的，是用来监测数据类型的
  > 字符串拼接：除加法外，其余都是数学计算，只有加法可能存在字符串拼接（一旦遇到字符串，则不是数学运算，而是字符串拼接）
  - 遇到字符串前都可以做数学运算，一碰到字符串就开始变为拼接
  
  #### boolean
  > 只有0、NaN、''、null、undefined五个转换为false，其余都是true（没有任何特殊情况）
  - ！：取反（先转为布尔，然后取反）
  - ！！ ：转换为布尔值

  #### null/undefined
  > 一般最好用null作为初始的空值，因为0不是空值，在栈内存中有自己的存储空间
  > undefined是没有声明，null是声明了但是没有值

  #### object
  > 普通对象：{[key]:[vlaue]}任何一个对象都是由零到多组键值对组成的，键不能重复
  - 获取属性名对应的属性值：对象.属性名；对象[属性名]（属性名用字符串或数字格式：若属性名是数字，则不能用点的方式获取属性值）
  - 真删除：delete；假删除：设置为空
  > Array、RegExp、Date、Function、String、Number、Boolean、Math
  > 数组：是特殊的对象数据类型

  ##### 谷歌67增加：BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是Javascript中可以用Number表示的最大数字。BigInt可以表示任意大的整数。不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度

### 2.Js中的数据类型检测
  > - typeof：用来监测数据类型的运算符；
  > - instanceof：用来检测当前实例是否属于某个类
  > - constructor：基于构造函数检测数据类型（也是基于类的方式）
  > - Object.prototype.toString.call()：监测数据类型最好的方法

  1. typeof [val]:返回的是字符串；可以检测下面的类型：number,string,function,object,boolean,undefined,symbol；
    - typeof null => 'object' 
    - 无法细分出当前值是普通对象还是数组对象，只要是对象就会返回object
  2. instanceof： 实例 instanceof 类 【属于：true；不属于：false】
    - 要求检测的实例必须是对象数据类型的，不可以检测基本类型。
    - **基本数据类型的特殊性：**1.一定是自己所属类的实例 2.但是不一定是对象数据类型的
  3. constructor：
    - 可以通过constructor来判断数据的类型，但是除了null、undefined，因为他们不是由对象构建。
    - 数字、布尔值、字符串是包装类对象，所以有constructor

### 3.函数
  > 函数就是一个方法或者一个功能体，就是把实现某个功能的代码放到一起进行封装，以后想要操作实现这个功能，只需要把函数执行即可=》“封装”；减少页面中的冗余代码，提高代码重复使用率（低耦合高内聚）

### 4.浏览器内核
  - webkit(chrome,safari,大部分浏览器)
  - gecko(火狐)
  - presto（Opera）
  - trident（IE）
## 二、堆栈内存以及闭包作用域

### 1.JavaScript的堆栈底层机制
  - 基本类型：按值操作（直接操作的是值），所以也叫作值类型
  - 引用类型：操作的是堆内存的地址（按引用地址操作的）

   > **遇到引用类型值（对象和函数）**
    1.开辟一个新的内存（堆内存16道制的内存地址）
    2.把内容存储在堆内存中（对象存储的是键值对，函数存储的是函数体中的代码字符串）
    3.让变量和地址关联在一起

### 2.变量提升机制
  > 当浏览器开辟出供代码执行的栈内存后，代码并没有自上而下立即执行，而是继续做了一些事情：**把当前作用域中所有带var/function关键字的进行提前的声明和定义=>变量提升机制**
  - 带var的只是提前声明‘var a’，如果只声明没有赋值，默认值是undefined
  - 带function的不仅声明，而且还定义了‘a=13’定义其实就是赋值，准确来说就是让变量和某个值进行关联
  - 带var和不带var的区别：
  ```
  /*
   * 不带var的：相当于给全局对象window设置了一个属性
   */
   a = 13;
   console.log(a);// =>window.a

  /*
   *
   * 带var的：是在全局作用域下声明了一个变量（全局变量），但是在全局下声明的变量也相当于给window增加了一个对应的属性（只有全局作用域具备这个特点）
   */
   var b = 14; // =>创建变量b并给window设置了属性b
   console.log(b); //=>14
   console.log(window.b); //=>14
  ```
  > 在全局作用域：不管条件成不成立，var都要进行变量提升。**但是函数有特殊性，在老版本浏览器中（不论条件是否成立，函数也是提前声明或定义），在新版本浏览器中（为了兼容es6的严谨语法规范，条件中的函数在变量提升阶段只能提前声明，不能提前定义），如果条件成立，块级作用域中给fn赋值再执行**

### 3.let/const/var区别
  `1.let和const不存在变量提升机制`
  > 创建变量的六种方式中：var/function有变量提升，而let/const/class/import都不存在这个机制

  `2.var允许重复声明，而let是不允许的`
  > 在相同的作用域中（或执行上下文中），所谓的重复是：不管之前通过什么办法，只要当前栈内存中存在了这个变量，我们是用let/const等重复再声明这个变量就是语法错误
  - 如果使用var/function关键词声明变量并且重复声明，是不会有影响的（声明第一次之后，之后再遇到就不再重复声明了）
  - 但是使用let/const就不行，浏览器会校验当前作用域中是否已经存在这个变量了，如果已经存在了，则再次基于let等重新声明就会报错 
  
  ```
    // 在浏览器开辟栈内存供代码自上而下执行之前，不仅有变量提升操作，还有很多其他的操作=》‘词法解析’或‘词法检测’：就是检测当前即将要执行的代码是否会出现语法错误（SyntaxError），如果出现错误，代码将不会再执行（第一行都不会执行）
    console.log(1); // 这行就不会再执行了
    let a = 12;
    console.log(a);
    let a = 13;
    console.log(a);
    // =>直接报错，什么也不输出
  ```
  `3.let能解决typeof检测时出现的暂时性死区问题（let比var更严谨）`

  `4.let声明的变量允许重新赋值，const不允许`

  **暂时性死区:在代码块内,使用let和const命令声明变量之前,该变量都是不可用的,语法上被称为暂时性死区**
  ```
    // console.log(a); //=>a is not defined

    // console.log(typeof a); //=>本应报错，因为没有a，但是会输出undefined，称为暂时性死区

    console.log(typeof a);
    let a;
    //=>报错
  ```
### 4.自执行函数：前面加的（）或！、-、~、+只是让语法符合
  - (function(n){})(10);
  - ~function(n){}(10);
  - !function(n){}(10);
  - +function(n){}(10);
  - -function(n){}(10);

### 5.作用域链查找机制（私有栈内存中的变量处理）
  > 知识点：私有栈内存中代码执行的时候，如果遇到一个变量：1.首先看是否为自己家的，是自己的以后操作都用自己的，不是自己的去上级作用域（**一定是个栈，不是堆**）中查找，一直找到全局作用域为止。2.找到就用，找不到就可能报错。
  
  ``` 
    var a = 10,b = 20; // 等价于var a=10;var b=20;
    var a = b = 10; // 等价于var a=10;b=10(b不带var)
  ```

  - 函数执行形成的私有栈内存，会把内存中所有的私有变量保护起来，和外面的没有关系，函数的这种保护机制就是**闭包**
  - 私有变量：在私有作用域中变量存储区存储的变量（1.函数中带var/let/function/const...的变量。2.形参变量）

  > 作用域链查找机制，关键在于如何查找上级作用域：1.从函数创建开始，作用域就已经指定好了。2.当前函数是在哪个作用域N下创建的，那么函数执行形成的作用域M的上级作用域（**一定是个栈，不是堆**）就是N，和函数在哪执行的没关系，只和创建的地方有关系。

### 6.闭包机制
#### 闭包作用域

  `1.创建函数`
  
  - 开辟一个堆内存
  - 把函数体中的代码当做字符串存储进去
  - 把对内存的地址赋值给函数名/变量名
  - **函数在哪创建，那么它执行时候所需要的查找的上级作用域就是谁**
    
  `2.函数执行`

  - 形成一个全新的私有作用域、执行上下文、私有栈内存（执行一次形成一个，多个之间也不会产生影响）
  - 形参赋值&变量提升
  - 代码执行（把所属堆内存中的代码字符串拿出来一行行执行）
  - **遇到一个变量，首先看它是否为私有变量（形参和在私有作用域中声明的变量是私有变量），是私有的就操作自己的变量即可，不是的则向上级作用域中查找，一直找到全局作用域为止=>作用域链查找机制**
  - 私有变量和外界的变量没有必然关系，可以理解为被私有栈内存保护起来了，这种机制就是**闭包的保护机制**

  `3.关于堆栈内存释放问题`

  > 函数执行就会形成栈内存（从内存中分配的一块空间），如果内存都不销毁释放，就很容易会导致栈内存溢出，堆栈内存的释放是js的核心

  `(1)堆内存释放问题`

  ```
    // 创建一个引用类型值，就会产生一个堆内存
    // 如果当前创建的堆内存不被其他东西所占用了（浏览器会在空闲的时候，查找每一个内存的引用状况，不被占用的都会给回收释放掉），则会释放
    let obj = {
      name : 'ailing'
    }
    let oop = obj;
    // 此时的obj和oop都占用这对象的内存，想要释放对内存，需要手动解除变量和值的关联（null：空对象指针）
    obj = null;
    oop = null;
  ```

  `(2)栈内存释放问题`

  ```
    // 打开浏览器形成的全局作用域、手动执行函数形成的私有作用域、基于es6中的let/const形成的块作用域。。。都是栈内存。

    /*
     * 全局栈内存：关掉页面的时候才会销毁
     * 私有栈内存：
     *     1.一般情况下，函数只要执行完成，形成的私有栈内存就会被销毁释放掉(排除死递归、出现死循环的模式)。
     *     2.但是一旦占内存中的某个东西（一般都是堆地址）被私有作用域以外的事物给占用了，则当前私有栈内存不能立即被释放销毁（特点：私有作用域中的私有变量等信息也保留下来了） ==》市面上认为的闭包:函数执行形成的不能被释放的私有栈内存，才是闭包
     */
     function fn(){
       // ...
     }
     fn(); //=>函数执行形成栈内存，执行完成栈内存销毁
  ```
#### 闭包两大作用
  > 1.保护（私有变量和外界没有必然联系）
  > 2.保存（形成不销毁的栈内存，里面的私有变量等信息保存下来了）

  - 从性能角度讲，我们真实项目中应该减少对闭包的使用（因为闭包会产生不释放的栈内存，过多使用容易导致内存溢出或者性能降低）


### 3.函数
#### 任意数求和，函数中的arguments
  > 任意数求和：1.传递的实参个数不定 2.传递的值是否为有效数字不定=》把传递的有效数字进行相加求和
  arguments：函数内置的实参集合
    - 1. 类数组集合，集合中存储着所有函数执行时传递的实参信息
    - 2. 无论是否设置形参，arguments都存在
    - 3. 无论是否传递实参，arguments也都存在
    arguments.callee:存储的是当前函数本身（一般不用的，js严格模式下禁止使用这些属性）

#### 箭头函数
  > 1. 简单：函数体中只有一行return代码时，直接省略return和大括号；形参赋值默认值（当没有给形参传递实参的时候，执行默认值） 
  > 2. 箭头函数没有arguments（类数组），但可以使用剩余运算符获取到实参集合（纯数组）  
  > 3. 箭头函数不存在变量提升的情况，函数只能在创建完成后被执行（也就是创建的代码之后执行）
  ```
  let sum = (...arg) => {
    console.log(arg);
  }
  sum(10, 20, 30, 40);
  //-----------------------
  let sum(arg=0)=>{
    console.log(arg);
  }

  ```
  > 4. this也便于操作：箭头函数没有this，需要向上级作用域中去查找

**面试题：箭头函数和function的区别**
1. 写法不同
2. this的指向不一样
> 使用function定义的函数，this的指向随着调用环境的变化而变化的，而箭头函数没有this，需要向上级作用域中去查找。
3. 变量提升
> 箭头函数不存在变量提升的情况，函数只能在创建完成后被执行（也就是创建的代码之后执行）
4. 构造函数
> function是可以定义构造函数的，而箭头函数是不行的

#### 柯里化函数
> 预先处理的思想：利用闭包的机制

## 三、面向对象（oop）和this处理

### 1.This
> 函数执行的主体（不是上下文）：意思是谁把函数执行的，那么执行主体就是谁
> THIS非常的不好理解，以后遇到THIS，想一句话："你以为你以为的就是你以为的"

1. 给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素本身
2. 如何确定执行主体(this)是谁？当方法执行的时候我们看方法前面是否有点，没有点是window或undefined，有点，点前面的是谁this就是谁
3. 在构造函数模式执行中，函数体中的this是当前类的实例
4. 可以通过call、apply、bind强制改变this的指向
5. 遇到箭头函数，以上四条都是废话
```
var name = 'maus';
function fn(){
  console.log(this.name);
}
var obj = {
  name:'hallo！',
  fn:fn
}
obj.fn();
fn(); // this:window(非严格模式，严格模式下是undefined)

(function(){
  // 自执行函数中的this是window或undefined
})();
```
```
//=>hasOwnProperty方法中的this：ary.__proto__.__proto__
ary.__proto__.__proto__.hasOwnProperty();
//-----------------------------------------
let obj = {
  fn : (function(n){
    // 把自执行函数执行的返回结果赋值给fn
    // this:window
    return function(){
      //=>fn等于这个返回的函数
      // this:obj
    }
  })(10)
}
obj.fn();
//------------------------------------------
function fn(){
  // this:window
  console.log(this);
}
document.body.onclick = function(){
  // this:document.body
  fn();
}
```
##### 练习题
1. 
```
var fullName = 'language';
var obj = {
  fullName : 'javascript',
  prop:{
    getFullName:function(){
      return this.fullName;
    }
  }
}
console.log(obj.prop.getFullName()); // undefined
var test = obj.prop.getFullName; 
console.log(test()); // language
```
2. 
```
// 见图片 imgs\this指针练习题.png 
// 答案：22 23 65 30
```
### 2.面向对象（oop）
> 什么是面向对象:面向对象是一种编程思想，js本身就是基于面向对象构建出来的（例如：js中有很多内置类，像**promise**就是es6中新增的内置类，我们可以基于new Promise来创建一个实例，来管理异步编程，我在项目中Promise也经常用，自己也研究过它的**源码**。。。），我们平时用的**VUE/REACT/JQUERY**也是基于面向对象构建出来的，他们都是类，平时开发的时候都是创建他们的实例来操作的。当然我自己在真实项目中，也**封装过一些组件插件**（dialog、拖拽。。。），也是基于面向对象开发的，这样可以创造不同的实例，来管理私有的属性和共有的方法，很方便。。。
> JS中的面向对象，和其他编程语言略有不同，js中的类和实例是基于原型和原型链机制来处理的，且js中关于类的重载、重写、继承也和其他语言不太一样。。。
#### （1）单例设计模式
> 把描述当前事物特征的信息进行分组归类（减少全局变量的污染）
> 作用：把描述事物的信息放到一个命名空间中进行归组，防止全局变量的污染

```
//简单的单例模式，其实就是对象
let girl = {
  name : 'maus',
  sex : 'female',
  age : 18
}
let boy = {
  name : 'bar',
  sex : 'male',
  age :20
}

```
```
// 真实项目中的单例模式:用闭包的模式保护起来
let namespace = (function(){
  let fn = function(){
    // ...
  };
  return {
    name : 'xxx',
    fun : fn
  }
})();
console.log(namespace.name);
namespace.fun();
```

#### （2）工厂设计模式
> 底层思想：封装（即函数）；它的作用就是批量化生产，即把某个功能的代码进行封装，后期在想实现这个功能，直接执行函数即可
> 低耦合：减少页面中冗余的代码  高内聚：提高代码的重复使用率

```
function createPerson(name,age){
  let person = {};
  person.name = name;
  person.age = age;
  return person;
}
let girl = createPerson('a',18);
let boy = createPerson('b',29);
console.log(girl.name);
console.log(boy.age);
```

#### （3）构造函数执行的基础操作
> 浏览器会默认创建一个对象数据类型的值（就是一个堆，这个对数据就是累的一个实例），让函数体中的this指向这个对象。在函数最后，会默认增加return返回值，将这个实例的地址返回给变量。
> new方式可以构建类和实例：类是**函数数据类型**，实例是**对象数据类型**
> new的时候不论是否加小括号，都相当于把Fn执行了，也创建了对应的实例，只不过不加小括号是不能传递实参的，不传又没有默认值，则传undefined
```
function CreatePerson(name,age){
  this.name = name;
  this.age = age;
  // return 100; //=>返回的还是实例
  // return {
   //  xxx:'xxx'
  // }; //=>如果手动去return基本类型，无影响，若return了一个引用类型的值，就会把默认返回的实例给替换掉（所以在构造函数模式执行下，我们一般都不要手动写return）
}
let person1 = new CreatePerson('a',19);
console.log(person1);
/**
 * new CreatePerson()执行和普通函数执行的联系
 *    1．new这种执行方式叫做“构造函数执行模式”，此时的CreatePerson不仅仅是一个函数名，被称为“类”，而返回的结果（赋值给personl的〕是一个对象，我们称之为“实例”，而函数体中出现的this都是这个实例。
 */
```
#### （4）原型链设计模式
1. 每一个函数数据类型的值都有一个天生自带的属性：prototype，这个属性的属性值是一个对象（用来存储实例共用的属性和方法）
  - 普通的函数
  - 类（自定义类和内置类）
2. 在prototype这个对象中，有一个天生自带的属性：constructor，这个属性存储的是当前函数本身
```
Fn.prototype.constructor === Fn
```
3. 每一个对象数据类型的值，也有一个天生自带的属性：**__proto__**，这个属性指向“所属类的原型prototype”
  - 普通对象、数组、正则、Math、日期、类数组等等
  - 实例也是对象数据类型的值
  - 函数的原型prototype属性的值也是对象类型的
  - 函数也是对象类型的值

##### 元素的原型链机制
 > 为什么getElementById的上下文只能是document？

 document的原型链：
 document->HTMLDocument.prototype->Document.prototype（这里面有我们常用的方法：getElementById、createElement[只有document.prototype有这两种方法]...）->Node.prototype（appendChild、cloneNode...）->EventTarget.prototype（addEventListener...）->Object.prototype->null

##### hasOwnProperty
> ‘hasOwnProperty’：检测某一个属性名是否为当前对象的私有属性
> ‘in’：检测这个属性是否属于某个对象（不管是私有属性还是公有属性，只要是他的属性，结果就为true）
```
//=> 自己堆里面有的就是私有属性，需要基于__proto__查找的就是共有属性（__proto__在IE浏览器（EDGE除外）中给保护起来了，不让我们在代码中操作他）
let ary = [10,20,30];
console.log('0' in ary); // true
console.log('push' in ary); // true
console.log(ary.hasOwnProperty('0')); // true
console.log(ary.hasOwnProperty('push')); // false,因为他是共有的属性

console.log(Array.prototype.hasOwnProperty('push')); // true 就是原型对象自己的，就是私有的
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true 
```
> 基于内置类原型扩展方法 hasPubProperty
```
Object.prototype.hasPubProperty = function (property) {
    if (!(['string', 'number', 'boolean'].includes(typeof property))) {
        return false;
    }
    return property in this && !this.hasOwnProperty(property);
}
console.log(Array.prototype.hasPubProperty('push'));
console.log([].hasPubProperty('push'));

```
#### （5）面向对象中有关私有/公有方法中的THIS问题
1. 方法执行，看前面是否有点，点前面是谁，this就是谁
2. 把方法总的this进行替换
3. 再基于原型链查找的方法确定结果即可

```
//=>详见数组去重.js
(function () {
  function myUnique() {
    let obj = {};
    for (let i = 0; i < this.length; i++) {

      let item = this[i];
      if (typeof obj[item] !== 'undefined') {//=》undefined一定是字符串
        this[i] = this[this.length - 1];//=>length一定要加上this，否则就不是该数组的了
        this.length--;
        i--;//=>要在length减完后i相应减一
        continue;
      }
      obj[item] = item;
    }
    obj = null;
    return this;
  }
  Array.prototype.myUnique = myUnique; //=>不能加括号
})();
let ary = [12, 24, 42, 73, 14, 64, 12, 42];
ary.myUnique();
console.log(ary);
```
#### （6）函数封装重载对面向对象的理解

1. 封装：高内聚低耦合
2. 多态：重载和重写
  - 重载：方法名相同，形参个数或者类型不一样（js中不存在真正意义上的重载，js中的重载指的是同一个方法根据传参不同，实现出不同的效果）
  - 重写：在类的继承中，子类可以重写父类中的方法
3. **继承**：子类继承父类中的属性和方法（目的是让子类的实例能够调取父类中的属性和方法）
  - 方案一：原型继承
    > 让父类中的属性和方法在子类实例的原型链上
    > CHILD.prototype = new PARENT();
    > CHILD.prototype.constructor = CHILD;

    > 特点：
    > 1. 不像其他语言中的继承一样（其他语言的继承一般是拷贝继承，也就是子类继承父类，会把父类中的属性和方法拷贝一份到子类中，供子类的实例调用），他是把父类的原型放到子类实例的原型链上，实例想调用这些方法，基于__proto__原型链查找机制完成的
    > 2. 子类可以重写父类上的方法（这样会导致父类其他的实例也受到影响）
    > 3. 父类中私有或者公有的属性方法，最后都会变为子类中公有的属性和方法
  - 方案二：CALL继承
    > 特点：CHILD方法中把PARENT当做普通函数执行，让PARENT中的THIS指向CHILD的实例，相当于给CHILD的实例设置了很多私有的属性或者方法
    > 1. 只能继承父类私有的属性或者方法（因为是把PARENT当做普通函数执行，和其原型上的属性和方法没有关系）
    > 2. 父类私有的变为子类私有的，若想让父类公有变为子类公有，需要使用寄生组合继承
  - 方案三：寄生组合继承（没有es6的情况下）
    > 详情见 寄生组合继承.png
    > CALL继承+类似于原型继承
    > 特点：父类私有和共有的分别是子类实例的私有和共有属性方法
  
  - 方案四：es6中的继承
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

## 三、js中的DOM操作
> DOM:document object model 文档对象模型，提供系列的属性和方法，让我们能再js中操作页面中的元素

### 1.获取元素的属性和方法
```
// 方法---------------------------------------
document.getElementById([ID]);
[context].getElementByTagName([TAGNAME]);
[context].getElementByTClassName([CLASS-NAME]); // 在IE6-8中不兼容
document.getElementByName([NAME]); // 在IE 浏览器中支队表单元素的NAME有作用
[context].querySelector([SELECTOR]); // 在IE6-8中不兼容
[context].querySelectorAll([SELECTOR]); // 在IE6-8中不兼容

// 属性--------------------------------------
document
document.documentElement
document.head
document.body
childNodes // 所有子节点
children // 所有元素子节点，IE6-8中会把注释节点当做元素节点获取到
parentNode
firstChild / firstElementChild
lastChild / lastElementChild
previousSibling / previousElementSibling
nextSibling / nextElementSibling
//所有待Element的，在IE6-8都不兼容
```
### 2.DOM的增删改操作
```
document.createElement([TAG-NAME]);
document.createTextNode([TEXT CONTENT])
// 字符串拼接(模板字符串)，然后基于innerHTML/innerText存方到容器中

[PARENT].appendchld([NEW-ELEMENT])
[PARENT].insertBefore([NEw-ELEMENT],[ELEMENT])

[ELEMENT].cloneNode([TRUE/FALSE])
[PARENT].removechild([ELEMENT])

//设置自定义属性
[ELEMENT].xxx([ELEMENT].xxx);
console.log([ELEMENT].xxx);

[ELEMENT].setAttribute('xxx',xxx);
console.log([ELEMENT].getAttribute('xxx'));
[ELEMENT].removeAttribute('xxx');
```
### 3.获取元素样式和操作样式
```
//=>修改元素样式
[ELEMENT].style.xxx = xxx // 修改和设置行内样式
[ELEMENT].className = xxx // 设置样式类

//=>获取元素的样式
console.log([ELEMENT.style.xxx]);// 获取的是当前元素写在行内上的样式，如果有这个样式，但是没有写在行内上，则获取不到
```

### 4.盒子模型属性
#### js盒子模型
> 基于一些属性和方法，让我们能够获取到当前元素的样式信息，例如：clientWidth、offsetWidth等
```
-client
。width / height
。top / left
-offset
。width / height
。top / left
。parent
-scroll
。width / height
。top / left

```
> 方法:window.getComputedStyle（ [ELEMENT],[伪类]） /[ELEMENT].currentStyle
1. client
```
// client
let box = document.getElementByld('box');

//=>获取盒子可视区域的宽高（内容宽度+左右PADDING） 
//1.内容溢出与否对他无影响
//2.获取的结果是没有单位的（其余的盒模型属性也是）
//3. 获取的结果是整数，会自己进行四舍五入（其余的盒模型属性也是）
box.clientWidth
box.clientHeight
box.clientTop //获取上边框大小
box.clientLeft // 获取左边框大小

widthGet = document.documentElement.clientWidth || document.body.clientWidth //获取一屏的宽度，高度同理
```
2. offset
```
// offset
let box = document.getElementByld('box');

//=>获取盒子本身的宽高（client基础上再加上border） 
//1.内容溢出与否对他无影响
//2.获取的结果是没有单位的（其余的盒模型属性也是）
//3. 获取的结果是整数，会自己进行四舍五入（其余的盒模型属性也是）
box.offsetWidth
box.offsetHeight

//=>offsetParent：获取它的父参照物（不一定是父元素）
//父参照物和它的父元素没有必然的联系，父参照物查找：同一个平面中，最外层元素是所有后代元素的父参照物，而基于position: relative/absolute/fixed可以让元素脱离文档流（一个新的平面），从而改变元素的父参照物
//=>offsetTop：距离其父参照物的上偏移
//=>offsetLeft：距离其父参照物的左偏移（当前元素的外边框到父参照物的里边框）

```
**自实现offset**
```
function offset(curEle){
  let par = curEle.offsetParent,
      l = curEle.offsetLeft;
      t = curEle.offsetTop;
  // 存在父参照物，而且还没有找到BODY
  while (par && par.tagName !== "BODY") {
    //在原有偏移的基础上累加：父参照物的边框、父参照物的偏移
    if (!/MSIE 8\.0/.test(navigator.userAgent)) {
      //IE8中偏移值自己就算了边框了，不需要我们在加边框的值navigator.use rAgent获取当前浏览器的版本信息
      l += par.clientLeft;
      t += par.clientTop;
    }
    l += par.offsetLeft;
    t += par.offsetTop;
    //继续获取上级参照物
    par = par.offsetParent;
  }
  return {
    top : t,
    left : l
  }
}

```
3. scroll
> box.scrollTop //竖向滚动条卷曲的高度
> box.scrollLeft // 横向滚动条卷曲的宽度
> **唯一一组可以设置的属性，其他的都是只读的**
```
// scroll
let box = document.getElementByld('box');

//=>在没有溢出的情况下，获取的是可视区的宽高，和client一样 
//=>有溢出的情况下，获取的结果约等于真实内容的宽高（上/左padding+真实内容的高度/宽度）
//1.不同浏览器获取的结果不尽相同
//2.设置overflow属性值对最后结果也有一定影响
box.scrollWidth
box.scrollHeight
//边界值：min=0；max=整个的高度scrollHeight - 一屏高度clientHeight

box.scrollTop //竖向滚动条卷曲的高度
box.scrollLeft // 横向滚动条卷曲的宽度

// 获取整个页面真实的高度
document.documentElement.scrollHeight || document.body.scrollHeight

```
**居中**
```
let widthW = document.documentElement.clientWidth;
let heightH = document.documentElement.clientHeight;
let box = document.getElementById('box');
box.style.position = 'absolute';
box.style.left = (widthW - box.style.width) / 2 + 'px';
box.style.top = (heightH - box.style.height) / 2 + 'px';


<div id='box' class='box'>aaa</div>
```
#### css中的盒子模型
> box-sizing:content-box(传统盒子模型，默认)；border-box(新盒子模型)
> 传统盒子模型宽高= width/height +左右上下padding+左右上下border
> 新盒子模型宽高= 左右border+左右padding+内容 = width/height
**居中**
- 定位方式:缺点是需要知道盒子的宽高
```
.box{
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-150px;
  margin-left:-150px;
}
<div id='box' class='box'>aaa</div>
```
- css3变形属性中的位移，在不知道宽高的情况下也能实现
```
.box{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%，-50%)；
}
<div id='box' class='box'>aaa</div>
```
- 绝对定位的特点，但是这种方法兼容不好
```
.box{
  position:absolute;
  top:0;
	left:0;
	bottom:0;
	right:0;
	margin:auto;
}
<div id='box' class='box'>aaa</div>
```
- flex
```
.box{
  display:flex;
  aligh-items:center;
  justify-content:center;
}
<div id='box' class='box'>aaa</div>
```
### 5.jQuery
> 一款伟大的，用原生JS封装的，'操作DOM”的类库：它里面封装了大量的方法（在原先的版本中vl.xxx ,这些方法兼容所有的浏览器），基于这些方法我们可以快速的进行DOM操作和项目开发。

1. 如何学习JQ
- 看API文档
http://jauery.cuishifeng.cn/
- 看书籍
《锋利的jQuer涕二版》
- 大量做案例
在学习阶段，案例可以用原生JS做一遍，再用JQ做一遍
- 学习JQ源码
  - 更好的掌握JQ的应用，写出高性能可扩展的项目代码
  - 让自己的JS能力，尤其是组件插件等封装的能力直接上一个新台阶
2. JQ的三大版本
- V1 .XXX第一代版本
  - jQuery-1.11.3.min.js这个是我最常用的
第一代版本的特点：大而全，方法是兼容所有浏览器的（包括IE6 ）,主要应用于需要考虑兼容的PC端项目中
- v2.xxx第二代版本
主要是为移动端的开发准备的，不再兼容低版本浏览器（例如：IE8及以下），配合出现的还有jQuery mobile等UI库。但是，第二代版本在移动端方面的处理不如Zepto.js 
- v3.xxx第三代版本
也不再兼容IE低版本浏览器了，它从性能等方面都要比之前的强，但是生不逢时，此时正好是angular/雉/react这种框架崛起的时代，大家已经不再基于操作DOM的思想开发了，JQ也就慢慢退出舞台了

### 6.DOM事件模型
#### （1）事件和事件绑定
> **事件**：元素天生自带的默认行为。不论我们是否给其绑定了方法，当我们操作的时候，也会把对应的事件触发
> **事件绑定**：给元素的某个行为绑定一个方法。目的是当事件行为触发的时候，可以做一些事情
```
[鼠标事件］
  click点击（移动端click被识别为单击）
  dblclick 双击
  mousedown鼠标按下
  mouseup 鼠标抬起
  mousemove鼠标移动
  mouseover鼠标滑过
  mouseout 鼠标滑出
  mouseenter鼠标进入
  mouseleave鼠标离开
  mousewhell鼠标滚轮滚动
［键盘事件］
  keydown按下某个键
  keyup抬起某个键
  keypress除Shift/Fn/CapsLock键以外，其它键按住（连续触发）
  //...
```
#### （2）DOM0事件绑定 VS DOM2事件绑定
**面试题:DOM0和D0M2区别**
  1. 语法上的区别：
      box.onclick=function(){}
      box.addEventListener('click',function(){})
  2. 底层运行机制上的区别
      DOM0就是给元素的某个属性绑定方法(有效绑定的方法只有一个)
      D0M2是基于事件池机制 总加一个绑定的方法,都会往事件池中存放1个…当事件触发会依次执行事件池中的事情->发布订阅其实就是模拟的事件池机制(可以给同一个元素的某个事件绑定多个不同的方法)
  3. DOM2中可以给一些特殊的事件类型绑定方法，这些事件类型DOM0不支持绑定，例如：DOMContentLoaded、transitionend...
      $(document).ready() => $(function(){})
      VS
      window.onload 
**面试题:D0M2的事件池机制**
  1. addEventListener/attachEvent(IE6-8)向事件池中追加方法:新版本浏览器会根据元素和事件类型对新增的方法做重复校验，但是IE6~8不可以 I
  2. 当事件行为触发，会把事件池中的方法按照增加的顺序依次执行,但是IE6-8中执行的顺序是不固定的

> DOM0事件绑定VS D0M2事件绑定
- [DOM0]元素.on事件行为=function () {}
- [DOM2]元素.addEventListener (事件行为，function (){},true/false);IE6~8中：元素.attachEvent( 'on事件行为',function(){})
1. DOM0
```
/* DOM0事件绑定的原理：给元素的私有属性赋值，当事件触发，浏览器会帮我们把赋的值执行，但是这样也导致“只能给当前元素某一个事件行为绑定一个方法” */

box.onclick = function(){
  console.log('a');
}
box.onclick = function(){
  console.log('b');
}
// 只输出b

// 移除事件绑定：box.onclick = null;
```
2. DOM2
```
 /* D0M2事件绑定的原理：基于原型链查找机制，找到EventTarget.prototype上的方法并且执行，此方法执行，会把给当前元素某个事件行为绑定的所有方法，存放到浏览器默认的事件池中(绑定几个方法，会向事件池存储几个)，当事件行为触发，会把事件池中存储的对应方法，依次按照顺序执行“给当前元素某一个事件行为绑定就个不同方法” */
  box.addEventListener('click', function () {
    console.log('哈哈哈~~');
  }, false);
  box.addEventListener('click', function () {
    console.log('呵呵呵~~ ');
  }, false);

  // 移除事件绑定：从时间池中移除，所以需要指定好事件类型、方法等信息（要和绑定的时候一样才可以移除）
  // 基于addEventListener向事件池增加方法，存在去重的机制，“同一个元素，同一个事件类型，在事件池中只能存储一遍这个方法，不能重复存储”
  box.addEventListener('click',fn,false);
  box.removeEventListener('click',fn,false);
```
> 当DOM0和DOM2混在一起用的时候：执行的顺序以绑定的顺序为主
> DOM0能做的事件绑定，DOM2都支持；DOM2里面一些事件，DOM0不一定能处理，如：transitionend，DOMContentLoaded...

#### （3）事件对象
> 给元素的事件行为绑定方法，当事件行为触发方法会被执行，不仅被执行，而且还会把当前的操作的相关信息传递给这个函数 ===》“事件对象”
> 如果是鼠标操作，获取的是MouseEvent类的实例=》鼠标事件对象（MouseEvent.prototype->UIEvent.prototype->Event.prototype->Object.prototype）
> 如果是键盘操作，获取的是KeyboardEvent类的实例
```
box.onclick = function(event){
  //clientX/clientY：当前鼠标触发点距离当前窗口左上角的X/Y轴坐标
  //pageX/pageY：触发点距离当前页面左上角的X/Y轴坐标
  //type：触发事件的类型
  //target：事件源(操作的是哪个元素，哪个元素就是事件源)，在不兼容的浏览潜中可以使用srcElement获取，也代表的是事件源
  //preventDefault()：用来阻止默认行为的方法，不兼容的浏览器中用ev.returnValue = false也可以阻止默认行为
  //stopPropagation()：：阻止冒泡传播，不兼容的浏览器中用ev.cancelBubble=true也可以阻止默认行为

  console.log(event);
}
```
```
/* 事件对象和函数以及给谁绑定的事件没啥必然关系，它存储的是当前本次操作的相关信息，操作一次只能有一份信息，所以在哪个方法中获取的信息都是一样的；第二次操作，存储的信息会把上一次操作存储的信息替换掉*/

/* 每一次事件触发，浏览器都会这样处理一下
 * 1 .捕获到当前操作的行为（把操作信息获取到），通过创建MouseEvent等类的实例，得到事件对象EV
 * 2.通知所有绑定的方法（符合执行条件的）开始执行，并且把EV当做实参传递给每个方法，所以在每个方法中得到的事件对象其实是一个
 * 3.后面再重新触发这个事件行为，会重新获取本次操作的信息，用新的信息替换老的信息，然后继续之前的步骤...
 */
  box.addEventListener('click', function (ev) {
    console.log(ev);
  });
  box.addEventListener('click', function (ev) {
    console.log(ev);
  });
  document.body.onclick = function (ev) {
    console.log(ev);
  }
```
#### （4）事件的传播机制
> 详见图片 事件传播机制.png
> 1. 捕获阶段：从最外层向最里层事件源依次进行查找（目的：视为冒泡阶段事先计算好传播的层级路径）=>CAPTURING_PHASE:1
> 2. 目标阶段：当前元素的相关事件行为触发=>AT_TARGET:2
> 3. 冒泡传播：触发当前元素的某一个事件行为，不仅他的这个行为被触发了，而且他所有的祖先元素（一直到window）相关的事件行为都会被依次触发（从内到外的顺序）=>BUBBLING_PHASE:3（Event.prototype）
```
.outer {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
  }

  .inner {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: bisque;
  }

  .center {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(141, 45, 231);
  }

<div id="outer" class="outer">
  <div id="inner" class="inner">
    <div id="center" class="center"></div>
  </div>
</div>
//-------js-----------------
  document.body.onclick = function (e) {
    console.log('body');
  }
  outer.addEventListener('click', function (e) {
    console.log('outer');
  }, true);
  inner.addEventListener('click', function (e) {
    console.log('inner');
  }, false);
  center.addEventListener('click', function (e) {
    console.log('center');
  }, false);
//-----------------------------
box.onclick = function(ev){
  ev.stopPropagation(); // 阻止冒泡
}
```
#### （5）事件循环机制
1. js是单线程的，所以会出现复杂的同步问题
2. 因此需要同步任务和异步任务去解决这个问题
3. 在执行时，需要判断任务属于同步任务还是异步任务，同步任务直接放在执行栈中，异步任务挂起放在任务队列中，等待同步任务清空后（js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数），去任务队列将等待的异步任务放入执行栈中执行，这个过程就是事件循环

> 宏任务和微任务：**宏任务**： setTimeout => setInterval => setImmediate(nodeJS) => I/O => UI Rendering。**微任务**： process.nextTick(nodeJS) => Promise(Promise.then) => mutationObserver

#### （6）事件委托（代理、委派）
我们不需要在每个子节点上单独设置事件监听器，而是将监听器设置在父节点上，然后利用冒泡原理影响设置的每个子节点。他的作用是只操作了一次DOM，提高性能。原理就是让别人去做我们要做的事情

## 四、设计模式
### 发布订阅（publish-subscribe）
> 基于ES6构建属于自己的发布订阅库
```
 let _subscribe = (function () {
  class Sub {
    constructor() {
      this.pond = [];
    }
    add(fn) {
      let flag = this.pond.some((ele) => {
        return ele === fn;
      });
      !flag ? this.pond.push(fn) : null;
    }
    remove(fn) {
      let pond = this.pond;
      for (let i = 0; i < pond.length; i++) {
        let item = pond[i];
        if (item === fn) {
          // 移除（顺序不变的情况下基本上只能使用splice），但是不能这样写，这样会导致数组塌陷问题，我们移除不能真的移除，只能把当前项赋值为null
          // pond.splice(i, 1);
          pond[i] = null;
          break;
        }
      }
    }
    excute(...args) {
      let pond = this.pond;
      for (let i = 0; i < pond.length; i++) {
        let item = pond[i];
        // 真正的移除方法
        if(typeof item !== 'function'){
          pond.splice(i,1);
          i--;
          continue;
        }
        //----------------------
        item.call(this, ...args);
      }
    }
  };
  return function subscribe() {
    return new Sub();
  }
})();
```
**如果我们在某一个方法中移除了一个方法，就会出现数组塌陷的问题，数组塌陷产生的原因详见图片（数组塌陷.png）**

## 五、ES6核心知识
### 1.ES6新增的语法知识
> 1. let/var/const之间的区别
> 2. 箭头函数以及this的指向问题
> 3. ... 剩余运算符
```
// 1.拓展运算符（用在解构赋值中）
let [n,...m] [12,35,94]
// 2.展开运算符（用在传递实参中）
let ary = [12,45,78,34,458,2];
let min = Math.min(...ary);
let cloneArray = [...ary]; //数组克隆（浅克隆）
let obj = {name='a',age:14};
let objClone = {...obj,sex:'f'};//对象克隆（浅克隆）
// 3.剩余运算符（用于接受实参）
let fn = (m,...args)=>{
  console.log(m,args);
}
fn(10,25,174,36);
```
> 4. 解构赋值（对象、数组）
> 5. class创建类
```
class Fn{
  constructor(m,n){
    this.x = m;
  }
  getX(){
    console.log(this.x);
  }
  static queryX(){}
  static z = 300;
}
let f = new Fn(10,20);
//也可以在外面这样的写
Fn.prototype.getY = function(){
  cosole.log(this.y);
}
Fn.queryX();
Fn();//报错，不可以当成普通函数去执行
```
> 6. 模板字符串
> 7. promise,async/await
> 8. 块级作用域

### 2.Promise
> ES6语法规范中新增加的内置类，用来处理js中异步编程的，而我们所谓的promise实际模式，就是基于promise对一步操作进行管理
**异步编程中的“回调地狱”**
- AJAX的串行
> 不停地嵌套异步代码，代码无限的向右扩展。
> 只有第一个请求成功才能执行第二个，第二个成功才可以执行下一个。。。最后一个个请求成功后拿到了每一次请求的所有数据。

- AJAX的并行
> 多个请求可以同时发送，但是需要等到所有的请求都成功后才会做一件事

#### Promise基础知识
1. Executor
```
/**
  * new Promise( [executor]):第一个执行函数必须传递
  * [executor 简称EXE]
  * l.NEW PROMISE的时候就会把EXE执行，创建PROMISE的一个实例(EXE是PROMISE类的一个回调函数，PROMISE内部会把它执行)
  * 2.PROMISE不仅把EXE执行，而且还给EXE传递两个参数(两个参数也是函数类型)：
  *   =>resolve函数：它执行代表PROMISE处理的异步事情是成功的，把PROMISE的状态改为fulfilled
  *   =>reject函数：它执行代表PROMISE处理的异步事情是失败的，把PROMISE的状态改为rejected
  * 3.EXE函数中放的就是当前要处理的异步操作事情
  */

let promiseExamp = new Promise((resolve, reject) =>{
  // 这里一般存放的都是我们即将要处理的异步任务，任务成功我们执行resolve，任务失败我们执行reject
});
```
**PROMISE有三个状态**
- pending :初始状态（NEWPROMIS诟的状态）
- fulfilled :成功状态（在executor函数中把resolve执行,就是告知promise当前异步操作的结果是成功的）
- rejected :失败状态（在executor函数中把reject执行,就是告知promise当前异步操作的结果是失败的）

### 3.ES6新特性
- ES6在变量的声明和定义方面增加了let、const声明变量，有局部变量的概念
- 赋值中有比较吸引人的解构赋值
- ES6对字符串、数组、正则、对象、函数等拓展了一些方法，如字符串方面的模板字符串、函数方面的箭头函数，默认参数、对象方面属性的简洁表达方式
- ES6也引入了新的数据类型symbol，新的数据结构set和map,symbol可以通过typeof检测出来，
- 为解决异步回调问题，引入了promise和generator
- 引人了实现Class和模块，通过Class可以更好的面向对象编程，使用模块加载方便模块化编程，当然考虑到浏览器兼容性，我们在实际开发中需要使用babel进行编译重要的特性：
- 块级作用域：ES5只有全局作用域和函数作用域，块级作用域的好处是不再需要立即执行的函数表达式，循环体中的闭包不再有问题
- rest参数：用于获取函数的多余参数，这样就不需要使用arguments对象了，
- promise:一种异步编程的解决方案，比传统的解决方案回调函数和事件更合理
- 强大模块化：其模块功能主要有两个命令构成，export和 import，export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能

## 六、ajax和http前后端交互
### 1.客户端和服务端交互的基本模型
> 客户端：可以向服务器发请求，并接受返回的内容进行处理
> 服务器端：能够接受客户端的请求，并且把相关资源信息返回给客户端的
> 一共7步。详细见 客户端和服务器端交互模型.png
- request请求阶段
1. URL地址解析
2. DNS域名解析
3. 和服务器建立TCP连接
4. 把客户端信息传递给服务器（发送HTTP请求）
- response阶段
5. 服务器得到并处理请求（HTTP响应内容）
6. 客户端渲染服务器返回的内容
7. 和服务器端断开TCP连接

### 2.URI/URL/URN
- URL (Uniform Resource Locator)：统一资源定位符，根据这个地址能找到对应的资源
- URN (Uniform Resource Name)：统一资源名称，一般指国际上通用的(标准的)一些名字(例如:国际统一发版的编号)
- URI (Uniform Resource Identifier)：统一资源标识符，URL和URN是URI的子集

#### 一个完整的URL所包含的内容
> http://www.mycompany.cn:80/myfield/index.html?from=sfew&fds=gowehj"

- 协议（http://）：传输协议就是，能够把客户端和服务器端通信的信息，进行传输的工具（类似于快递小哥）
  + http 超文本传输协议，除了传递文本，还可以传递媒体资源文件（或者流文件）及XML格式数据
  + https更加安全的http, 一般涉及支付的网站都要采用https协议（s:ssl加密传输）
  + ftp文件传输协议（一般应用于把本地资源上传到服务器端）:FileZilla

- 域名(www.mycompany.cn)一个让用户方便记忆的名字(不通过域名，直接用服务器的外网IP也能访问到服务器，但是外网IP很难被记住)
  + 顶级域名qq.com
  + 一级域名 www.qq.com
  + 二级域名 sports.qq.com
  + 三级域名 kbs.sports.qq.com
  + .com国际域名
  + .cn中文域名
  + .com.cn
  + .edu 教育
  + .gov 政府
  + .io 博客
  + .org 官方组织
  + .net 系统类

- 端口号(:80): 端口号的取值范围0~65535,用端口号来区分同一台服务器上的不同项目
  + http默认端口号：80
  + https默认端口号：443
  + ftp默认端口号：21
  + 如果项目采用的就是默认端口号，我们在书写地址的时候，不用加端口号，浏览器在发送请求的时候会帮我们默认给加上
  
- 请求资源路径名称(/myfield/index.html)
> 服务器接收到请求后: 1.根据端口号找到对应的项目2.根据清求资源的路径名称找到资源文件3.读取奥源文件中的内容4. 把内容返回
  + 默认的路径或者名称（xxx.com/myfield/不指定资源名，服务器会找默认的资源，一般默认资源名是default.html、index.html. ..当然这些可以在服务器端自己配置）
  + 注意伪URL地址的处理（URL重写技术是为了增加SE0搜索引擎优化的，动态的网址一般不能被搜索引擎收录，所以我们要把动态网址静态化，此时需要的是重写URL）
  https://item.jd.hk/2688449.html => https://item.jd.hk/index.php?id=2688449

- 问号传参信息(?from=sfew&fds=g#owehj)
  + 客户端想把信息传递给服务器，有很多的方式
  + URL地址问号传参
  + 请求报文传输（请求头和请求主体）
  + 也可以不同页面之间的信息交互，例如：从列表到详情

- HASH值(#owehj)
  + 也能充当信息传输的方式
  + 锚点定位
  + 用于HASH实现路由管控（不同的HASH值,展示不同的组件和模块）

### 3.URL编码解析
```
  /**
   * 
   * 请求的地址中如果出现非有效UNICODE编码内容，现代版浏览器会默认的进行编码
   * 1.基于encodeURI编码，我们可以基于decodeURI解码，我们一般用encodeURI编码的是整个URL,这样整个URL中的特殊字符都会自动编译
   * 2. encodeURIComponent/decodeURIComponent它相对于encodeURI来说，不用于给整个URL编码，而是给URL部分信息进行编码（一般都是问号传参的值编码）
   * 客户端和服务器端进行信息传输的时候，如果需要把请求的地址和信息编码，我们则基于以上两种方式处理，服务器端也存在这些方法，这样就可以统一编码解码了
   * 3.客户端还存在一种方式，针对于中文的编码方式escape/unescape,这种方式一般只应用于客户端页面之间自己的处理，例如：从列表跳转到详情，我们可以把传递的中文信息基于这个编码，详情页获取编码后的信息再解码，再比如我们在客户端种的cookie信息，如果信息是中文，我们也基于这种办法编码...
   */
```
### 4.DNS服务器域名解析
> DNS服务器：域看解析服务器，在服务器上存储着 域名<=>服务器外网iP的相关记录
> 而我们发送请求时候所谓的DNS解析，其实就是根据域名，在DNS服务器上查找到对应服务器的外网IP
**DNS优化**
- DNS缓存（一般浏览器会在第一次解析后，默认建立缓存，时间很短，只有一分钟左右）
- 减少DNS解析次数（一个网站中我们需要发送请求的域名和服务器尽可能少即可）
- DNS预获取（dns・prefetch）：在页面加载开始的时候，就把当前页面中需要访问其他域名（服务器）的信息进行提前DNS解析，以后加载到具体内容部分可以不用解析了

### 5.建立TCP连接（三次握手）
> 发生在信息传输前的
- 第一次握手：由浏览器发起，告诉服务器我要发送请求了
- 第二次握手：由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧
- 第三次握手：由浏览器发送，告诉服务器，我马上就发了，准备接受吧

#### HTTP报文
- 请求报文：所有经过传输协议，客户端传递给服务谓的内容，都被成为请求报文
  + 起始行
  + 请求头（请求首部）
  + 请求主体
- 响应报文：所有经过传输协议，服务渊返回给客户端的内容，都被成为响应报文
  + HTTP状态码
  + 响应头
  + 响应主体
- HTTP报文：请求报文+响应报文

谷歌浏览器F12 =>Network （所行客户端和服务器端的交匠信息在这里都可以看到）=>点击某一条信思，在右恻可以看到所有的HTTP报文信息 

#### HTTP状态码
> 1~5开头，三位数字
- 200 0K:成功
- 201 CREATED： 一般应用于告诉服务器创建一个新文件，最后服务器创建成功后返回的状态码
- 204 NO CONTENT:对于某些请求（例如：PUT或者DELETE）,服务器不想处理，可以返回空内容，并且用204状态码告知
- 301 Moved Permanently：永久重定向（永久转移）
- 302 Moved Temporarily：临时转移，很早以前基本上用302来做，但是现在主要用307来处理这个事情，307的意思就是临时重定向Temporary Redirect =>主要用于：服务器的负载均衡等
- 304 Not Modified：设置HTTP&协商缓存
- 400 Bad Request：传递给服务器的参数错误
- 401 Unauthorized：无权限访问
- 404 Not Found：请求地址错误
- 500 未知服务器错误
- 503 服务器超负荷

### 6.浏览器底层渲染原理
> 详见imgs中的图片：浏览器渲染.png、重绘和回流.png

- 遇到link/img/audio/video等是异步去加载资源信息（浏览器分配在一个新的线程去加载，主线程继续向下渲染页面）
- 遇到的是script或者@import，则让主线程去加载资源信息（同步），加载完成信息后，再去继续渲染页面

#### 性能优化
> 详见imgs中的图片：优化重绘和回流.png、优化重绘和回流1.png、优化重绘和回流2.png

1. DOM操作的读写分离
```
//=>现代版浏览器都有“渲染队列”机制：发现某一行要修改元素的样式，不立即渲染，而是看看下一行，如果下一行也会改变样式，则把修改样式的操作放到“渲染队列中”...一直到不在是修改样式的操作后，整体渲染一次，引发一次回流。

box.style.width = ' l00px'; 
box.style.height = ' l00px'; 
box.style.background = 'red' ; 
box.style.margln = '200px auto' ;

console.log(box.offsetWidth);
console.log(box.offsetHeight);
```
2. 样式集中改变

### 7.断开连接（四次挥手）
> 发生在信息传输过程中
- 第一次挥手：由浏览器发起，发送给服务器，我请求报文发送完了，你准备关闭吧；
- 第二次挥手：由服务器发起，告诉浏览器，我接收完请求报文，我准备关闭，你也准备吧；
- 第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完毕，你准备关闭吧；
- 第四次挥手：由浏览器发起，告诉服务器，我响应报文接收完毕，我准备关闭，你也准备吧;

## 七、前端性能优化
### 1.减少HTTP的请求次数和传输资源的大小
- CSS SPRITE(雪碧图、图片精灵)技术
- 使用字体图标(ICON FONT）或者SVG等矢量图
  + 减少HTTP请求次数或者减少请求内容的大小
  + 渲染更快：因为他们是基于代码渲染的，而对于位图（png/jpg/gif)是需要先把图片编码再渲染
  + 不容易失真变形
  + 也可以使用webp格式图片，这种格式要小一些（但是需要服务器支持这种格式的请求处理）
- 图片懒加载（延迟加载）技术
  + 第一次加载页面的时候不去请求真实的图片，提高第一次渲染页面的速度
  + 当页面加载完，把出现在用户视野区域中的图片做真实加载，没有出现的先不加载（节约流量，也能减少对服务器的请求压力）
  + 对于数据我们也金额能分批加载（不要以此请求过多的数据，例如分页技术）
- 音视频文件取消预加载(preload='none')，这样可以增加第一次渲染页面的速度，当需要播放的时候再加载
- 客户端和服务器端的数据传输尽可能基于JSON格式完成，XML格式比JSON格式要大一些（还可以基于二进制编码或者文件流格式，这种格式比文件传输好很多）
- 把页面中的CSS/JS/图片等文件进行合并压缩
  + 合并：争取CSS和JS都只导入一个（webpack可以实现自动合并压缩）
  + 压缩：基于webpack可以压缩、对于图片自己找工具先压缩、还可以使用服务器的GZIP压缩
- 图片地图：对于多次调取使用的图片（尤其是背景图），我们尽可能把他提取称为公共的样式，而不是每一次重新设置background
- 图片BASE64（用BASE64码代表图片，减少HTTP请求，增加浏览器渲染的速度，所以真实项目中，尤其是移动端，如果图片加载缓慢，可能BASE64一下就好了，但是BASE64会导致文件中的代码超级恶心，不利于维护和开发，所以少使用；webpack中可以配置图片的BASE64）
### 2.设置各种缓存、预处理和长连接机制
- 把不经常更改的静态资源做缓存处理（一般做的是304或者ETAG等协商缓存）；建立 Cache-Control 和 Expires HTTP强缓存
- DNS缓存或者预处理（DNS PREFETCH），减少DNS的查找
- 设置本地的离线存储（manifest），或者把一些不经常更改的数据做本地临时存储（webstorage、indexdb）等
- 尽量做CDN（地域分布式服务器），或者加服务器
- 建立Connection：keep-alive TCP长连接
- 使用HTTP2版本协议（现在用的一般都是HTTP1.1）
  + 可以多条TCP通道共存 -> 管道化链接
  + HTTP VS HTTPS
  + HTTP1 VS HTTP2
- 一个项目分为不同的域（不同的服务器），例如：资源WEB服务器、数据服务器、图片服务器、视频服务器等，这样合理利用服务器资源，但是导致过多的DNS解析
### 3. 代码方面的性能优化
- 减少对闭包的使用（因为过多是用闭包会产生很多不销毁的内存，处理不好的话，会导致内存溢出，即栈溢出），减少闭包的嵌套（减少作用域链的查找层级）
```
//=> 栈溢出，死递归
function fn(){
  fn();
}
fn();
//=>解决方案
function fn(){
  setTimeout(fn,0);
}
fn();
//=>相互引用,引用类型之间的相互调用，形成嵌套式内存
let obj1 = {
  name:'obj1'
}
let obj2 = {
  name:'obj2',
  x:obj1
}
obj1.x = obj2;
``` 
- 对于动画来说：能用CSS解决的不用JS，（能用transform处理的，不用传统的css样式，因为transform开启硬件加速，不会引发回流，再或者使用定位的元素也会好很多，因为定位的元素脱离文档流，不会对其他元素的位置造成影响），能用requestAnimationFrame解决的不用定时器
  + requestAnimationFrame另一个好处，当页面处于休眠无访问状态，动画会自己暂停，知道恢复访问才开始，而定时器是不论什么状态，只要页面不管，就一直处理
- 避免使用iframe（因为iframe会嵌入其他页面，这样付页面渲染的时候，还要同时把子页面也渲染了，渲染进度会变慢）
- 减少直接对DOM的操作（原因是减少DOM的回流和重绘。。。），现在项目基本上都是基于mvvm/mvc数据驱动视图渲染的，对DOM的操作框架本身完成，性能要好很多
- 低耦合高内聚（给予封装的方式：方法封装、插件、组件、框架、类库等封装，减少页面中的冗余代码，提高代码使用率）
- 尽可能使用事件委托
- 避免出现死循环或者嵌套循环（嵌套循环会成倍增加循环的次数）
- 项目中尽可能使用异步编程模拟出多线程的效果，避免主线程阻塞（异步操作基于PROMISE设计模式来管理）
- 避免使用css表达式
- 函数的防抖和节流
- 减少使用eval（主要原因是防止压缩代码的时候，由于符号书写不合规，导致的代码混乱）
- 减少filter滤镜的使用
- 尽可能减少选择器的层级（选择器是从右向左解析），.box a{} 和 a{}
- 尽可能减少table布局
- 手动回收堆栈内存（赋值为null）

## 八、知识补充
### 1.说一下什么是virtual dom
用JavaScript对象结构表示DOM树的结构；然后用这个树构建一个真正的DOM树，插到文档当中，当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异，把所记录的差异应用到所构建的真正的DOM树上，视图就更新了。Virtual DOM本质上就是在JS和DOM之间做了一个缓存。

### 2.webpack用来干什么的
webpack是一个现代JavaScript应用程序的静态模块打包器(module bundler)。当webpack处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。

### 3.什么是按需加载
当用户触发了动作时才加载对应的功能。触发的动作，是要看具体的业务场景而言，包括但不限于以下几个情况：鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大小更改等。加载的文件，可以是JS、图片、CSS、HTML等

### 4.有一个游戏叫做Flappy Bird，就是一只小鸟在飞，前面是无尽的沙漠，上下不断有钢管生成，你要躲避钢管。然后小明在玩这个游戏时候老是卡顿 甚至崩溃，说出原因（3-5个）以及解决办法（3-5 个）
> 原因可能是：1.内存溢出问题。 2.资源过大问题。 3.资源加载问题。 4.canvas 绘制频率问题 
- 解决办法： 
1. 针对内存溢出问题，我们应该在钢管离开可视区域后，销毁钢管，让垃圾收集器回收钢管，因为不断生成的钢管不及时清理容易导致内存溢出游戏崩溃。 
2. 针对资源过大问题，我们应该选择图片文件大小更小的图片格式，比如使用webp、png 格式的图片，因为绘制图片需要较大计算量。 
3. 针对资源加载问题，我们应该在可视区域之前就预加载好资源，如果在可视区域生成钢管的话，用户的体验就认为钢管是卡顿后才生成的，不流畅。 
4. 针对canvas绘制频率问题，我们应该需要知道大部分显示器刷新频率为60次/s,因此游戏的每一帧绘制间隔时间需要小于1000/60=16.7ms，才能让用户觉得不卡顿。 （注意因为这是单机游戏，所以回答与网络无关）

### 5.数组常用方法
push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等

### 6.说说前端中的事件流
> HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来绑定事件。 
> 事件流：事件流描述的是从页面中接收事件的顺序,DOM2 级事件流包括下面几个阶段。1.事件捕获阶段2.目标阶段3.事件冒泡阶段 
> addEventListener是DOM2级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最 后这个布尔值参数如果是 true，表示在捕获阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序。 
> IE 只支持事件冒泡。