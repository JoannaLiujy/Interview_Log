// 前五项如下：
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 第一项是数字 1 
// 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
// 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
// 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
// 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
// 输入：n = 4
// 输出："1211"
/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  const lastStr = countAndSay(n - 1)
  const res = generate(lastStr)
  return res

  function generate(str) {
    let ans = ''
    let n = 1
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        n++
      } else {
        ans += `${n}${str[i]}`
        n = 1
      }
    }
    return ans
   }
};
