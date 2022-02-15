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