// new 关键字会进行如下的操作：

// 1. 创建一个空的简单JavaScript对象（即{}）；
// 2. 链接该对象（设置该对象的constructor）到另一个对象 ；
// 3. 将步骤1新创建的对象作为this的上下文 ；// 🔥
// 4. 如果该函数没有返回对象，则返回this。

function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('fn must be function')
  }
  myNew.target = fn // 注意
  const obj = Object.create(fn.prototype)
  const ret = fn.apply(obj, args)
  return typeof ret === 'object' ? ret : obj
}

// 1. 创建一个新对象
// 2. 将构造函数的作用域赋给新对象
// 3. 执行构造函数中的代码
// 4. 返回新对象