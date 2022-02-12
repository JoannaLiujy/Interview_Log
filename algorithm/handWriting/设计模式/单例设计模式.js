let namespace = (function () {
  let fn = function () {
    // ...
  };
  return {
    name: 'xxx',
    fun: fn
  }
})();
console.log(namespace.name);
namespace.fun();