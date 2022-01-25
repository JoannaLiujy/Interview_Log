// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   // 奇数返回false
   if (s.length % 2 !== 0) {
     return false
   }
   const pairs = new Map([
     [')', '('],
     ['}', '{'],
     [']', '['],
   ])
   const stack = []
   for(let i = 0; i < s.length; i++) {
     const char = s[i]
     if (pairs.has(char)) {
       if(stack.length > 0 && stack[stack.length - 1] === pairs.get(char)) { // 关键
         stack.pop()
       } else {
         return false
       }
     } else {
       stack.push(char)
     }
   }
   return !stack.length
};