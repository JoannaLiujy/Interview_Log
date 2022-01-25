// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

var plusOne = function(digits) {
  let i = digits.length - 1
  let carry = 1
  while(i >= 0) {
      const sum = digits[i] + carry
      carry = sum >= 10 ? 1 : 0
      digits[i] = sum % 10
      i--
  }
  if (carry) {
      digits.unshift(1)
  }
  return digits
};