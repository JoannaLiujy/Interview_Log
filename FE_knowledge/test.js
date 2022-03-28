// 数组去重-object键值对去重
// function unique(ary) {
//   let obj = {};
//   for (var i = 0; i < ary.length; i++) {
//     let item = ary[i];
//     if (typeof obj[item] !== 'undefined') {
//       ary[i] = ary[ary.length - 1];
//       ary.length--;
//       i--;
//       continue;
//     }
//     obj[item] = item;
//   }
//   obj = null;
//   return ary;
// }
// let array = [24, 56, 53, 13, 24, 68, 3, 56];
// console.log(unique(array));

// 类型判别
// let a = new Array();
// let s = new String();
// console.log(a instanceof String);
// console.log(isNaN(s));
// console.log(typeof s);
// console.log(Object.prototype.toString.call(s));

// this指向判别
// var a = 11;
// function test2() {
//   this.a = 22;
//   let b = () => {
//     console.log(this.a)
//   }
//   b();
// }
// var x = new test2();

// 千分位分割
// const fenge = function (num) {
//   const numStr = String(num);
//   const size = 3;
//   let index = numStr.length - 3;
//   let res = '';
//   while (index + size > 0) {
//     let curStr = numStr.substring(index, index + size);
//     let temp = res === '' ? res : ',' + res;
//     res = curStr + temp;
//     index -= size;
//   }
//   return res;
// }
// const res = fenge(2038123456789191);
// console.log(res);


// 类继承
// class Parent {
//   constructor() {
//     this.age = 88;
//   }
//   swear() {
//     console.log('还不去做饭！！！想饿死我啊！！');
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//   }
//   reply() {
//     console.log('yes,sir!!');
//   }
// }
// let c = new Child();
// c.swear();


// 反转链表
// const reverseLink = function (head) {
//   let prev = null;
//   let curr = head;
//   let next = null;
//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// }


// 无重复字符的最长子串
// const lengthOfLongestSubstring = function (str) {
//   const o = new Set();
//   let rk = -1;
//   let len = 0;
//   const n = str.length;
//   for (let i = 0; i < n; i++) {
//     if (i !== 0) {
//       o.delete(str.charAt(i - 1));
//     }
//     while (rk + 1 < n && !o.has(str.charAt(rk + 1))) {
//       o.add(str.charAt(rk + 1));
//       rk++;
//     }
//     len = Math.max(len, rk - i + 1);
//   }
//   return len;
// }
// console.log(lengthOfLongestSubstring('pwwkew'));


// 原地删除数组中指定值(快慢指针)
// const deleteTheNum = function (nums, val) {
//   let fast = 0;
//   let slow = 0;
//   while (fast < nums.length) {
//     if (nums[fast] !== val) {
//       nums[slow] = nums[fast];
//       slow++;
//     }
//     fast++;
//   }
//   nums.length = slow;
//   return slow;
// }


// lodash的对象get方法
// var object = {
//   'a': [{
//     'b': {
//       'c': 3
//     }
//   }]
// };
// console.log(_.get(object, 'a[0].b.c')); //3
// console.log(_.get(object, ['a', '0', 'b', 'c']));//3
// console.log(_.get(object, 'a.b.c', 'default')); //default

// 深拷贝
// const deepClone = function (obj) {
//   //过滤特殊情况
//   if (obj === null) return null;
//   if (typeof obj !== "object") return obj;
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   let newObj = obj instanceof Array ? [] : {}
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       newObj[i] = deepClone(obj[i])
//     }
//   }
//   return newObj;
// }
// let obj = {
//   'a': {
//     'name': 'lisa',
//     'age': 19,
//     'language': ['eng', 'chinese', 'de']
//   },
//   'b': 'haha',
// }
// let obj2 = deepClone(obj);
// obj2.a.language.push('franch');
// console.dir(obj);
// console.dir(obj2);


// let arr = [0, 1, 2, [[[3, 4]]]]
// // let res = arr.flat(Infinity);
// let res = arr.toString().split(',').map(item => Number(item));
// console.log(res);

// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Parent.prototype.action = function () {
//   console.log('我是爸爸');
// }
// function Son(charactor) {
//   Parent.call(this);
//   this.charactor = charactor;
//   this.say = function () {
//     console.log(this.name, "是儿子");
//   }
// }
// Son.prototype = Object.create(Parent.prototype);
// Son.prototype.constructor = Son;

// let s = new Son('lj');
// s.name = 'sf';
// s.age = 4;
// s.type = 'bullshit';
// console.log(s);
// s.say();

// function myPromise(constructor) {
//   let self = this;
//   self.status = 'pending';
//   self.value = undefined;
//   self.reason = undefined;
//   function resolve(value) {
//     if (self.status === 'pending') {
//       self.value = value;
//       self.status = 'resolved';
//     }
//   }
//   function reject(reason) {
//     if (self.status === 'pending') {
//       self.reason = reason;
//       self.status = 'rejected';
//     }
//   }
//   try {
//     constructor(resolve, reject);
//   } catch (e) {
//     reject(e);
//   }
// }
// myPromise.prototype.then = function(onFufilled,onRejected){
//   let self = this;
//   switch(self.status){
//     case 'resolved':
//       onFufilled(self.value);
//       break;
//     case 'rejected':
//       onRejected(self.reason);
//       break;
//     default:
//   }
// }


// Promise.prototype.all = function(promises){
//   let results = [];
//   let count = 0;

// }

// const deepClone = function (obj) {
//   if (obj === null) return null;
//   if (typeof obj !== 'object') return obj;
//   if (obj instanceof RegExp) return new RegExp(obj);
//   let newObj = obj instanceof Array ? [] : {};
//   for (let item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       newObj[item] = deepClone(obj[item]);
//     }
//   }
//   return newObj;
// }
// let test = {
//   x: 1,
//   y: 2,
//   z: {
//     a: 4,
//     b: 5
//   }
// }
// let test2 = deepClone(test);
// test2.x = 9;
// console.dir(test);
// console.dir(test2);


let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]);

// 并集
// let unionSet = new Set([...a, ...b]);
// console.log(unionSet);
// let intersectionSet = new Set([...a].filter(x => b.has(x)));
// console.log(intersectionSet);

function jiaoji(...arrs) {
  let result = [];
  console.log(arrs);
  for (let arr in arrs) {
    result = arr.filter()
  }
  return arrs.flat(Infinity);
}
console.log(jiaoji([1, 2, 3], [4, 3, 2]));