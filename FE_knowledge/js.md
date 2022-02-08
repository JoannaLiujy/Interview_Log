## 一、数据类型
### 1.一共7种（js红宝书）：
  >简单：Number、String、Boolean、undefined、Null、Symbol
  复杂：Object
  
  + Number:常规数字、NaN（和任何值包括自己都不相等）
  + Number()转换字符串：只有数字的转为数字，带其他字符的转为NaN，空字符串转为0
  - 布尔转数字：true：1、false:0
  - null:0
  - undefined:NaN
  - 对象：普通对象转为NaN，数组对象：空数组转为0（先基于toString转为字符串然后再转为数字）

  谷歌67增加：BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是Javascript中可以用Number表示的最大数字。BigInt可以表示任意大的整数。不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度

  typeof:number,string,function,object,boolean,undefined,symbol

### 2.JavaScript 的异步与期约


### 3.