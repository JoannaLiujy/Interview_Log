// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
      return '0'
  }
  var l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)
  for (var i = l1; i--;) {
      for (var j = l2; j--;) {
          var tmp = num1[i] * num2[j] + p[i + j + 1]
          p[i + j + 1] = tmp % 10
          p[i + j] += 0 | tmp / 10
      } 
  }
  while(p[0] === 0) {
      p.shift()
  }
  return p.join('')
};


// 解题思路
// 0乘以任何数 = 0
// 两数相乘，乘积的长度一定 <= 两数长度之和
// 被乘数的一位 与 乘数的每一位相乘，乘积不会超过 9 x 9 = 81，不超过两位
// 每次只考虑两位，乘积 与 个位 相加
// 个位保留余数
// 十位保留取整，取整直接舍弃小数点，用0 |效率，高于parseInt
// while循环，删除多余的0

// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/multiply-strings/solution/dao-xu-xun-huan-12xing-dai-ma-chao-94-by-mantoufan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。