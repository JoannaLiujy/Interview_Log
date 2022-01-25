/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if (s.length<2){
      return s
  }
  let res = ''
  for (let i = 0; i < s.length; i++) {
      // 回文子串长度是奇数
      helper(i, i)
      // 回文子串长度是偶数
      helper(i, i + 1) 
  }

  function helper(m, n) {
      while (m >= 0 && n < s.length && s[m] == s[n]) {
          m--
          n++
      }
      // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
      // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
      if (n - m - 1 > res.length) {
          // slice也要取[m+1,n-1]这个区间 
          res = s.slice(m + 1, n)
      }
  }
  return res
};

// https://leetcode-cn.com/problems/longest-palindromic-substring/solution/chao-jian-dan-de-zhong-xin-kuo-san-fa-yi-qini/