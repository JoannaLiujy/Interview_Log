// let namespace = (function () {
//   let fn = function () {
//     // ...
//   };
//   return {
//     name: 'xxx',
//     fun: fn
//   }
// })();
// console.log(namespace.name);
// namespace.fun();

/*
 * 公共模块：util 
 */
let util = (function () {
  let queryElement = function () {
    // ...
  }
  return {
    queryElement
  }
})();
/*
 * 独立某模块：part1 
 */
let part1 = (function () {
  let specialFunc = util.queryElement('box');
  let show = function () {
    // ...
  }

  return {
    init: function () {
      specialFunc();
      show();
    }
  }
})();
part1.init();