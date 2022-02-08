## 一、数据类型
### 1.一共7种（js红宝书）：
  >简单：Number、String、Boolean、undefined、Null、Symbol
  复杂：Object
  
  ####  Number:常规数字、NaN（和任何值包括自己都不相等）
  > Number()转换字符串：只有数字的转为数字，带其他字符的转为NaN，空字符串转为0
  - 布尔转数字：true：1、false:0
  - null:0
  - undefined:NaN
  - 对象：普通对象转为NaN，数组对象：空数组转为0（先基于toString转为字符串然后再转为数字）
  > parseInt/parseFloat([val],[进制])；对于字符串，从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找，并把找到的当数字返回。

  #### string
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

  > 数组：是特殊的对象数据类型

  ##### 谷歌67增加：BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是Javascript中可以用Number表示的最大数字。BigInt可以表示任意大的整数。不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度
 
  typeof:number,string,function,object,boolean,undefined,symbol

### 2.JavaScript的堆栈底层机制



### 3.