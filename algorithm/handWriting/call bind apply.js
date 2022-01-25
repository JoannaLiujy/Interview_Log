Function.prototype.myCall = function(context){
  if (typeof this !== 'function') {
      throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

// 首先 context 为可选参数，如果不传的话默认上下文为 window
// 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
// 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
// 然后调用函数并将对象上的函数删除


// 实现 bind  fn.bind(obj, ...args)
function myBind(context,...args) {
  const self = this;
  var fn = function(...newArgs){
    return self.apply(this instanceof fn ? this : context, args.concat(newArgs));
  }
  fn.prototype = Object.create(this.prototype)
  // const fNop = function (){};
  // fNop.prototype = this.prototype;
  // fn.prototype = new fNop();
  return fn;
}

// 实现call
function _call(obj, ...args) {
obj.fn = this
const result = obj.fn(...args)
delete obj.fn
return result
}
// 实现apply
function _apply(obj, arr) {
obj.fn = this
return obj.fn(...arr)
}

