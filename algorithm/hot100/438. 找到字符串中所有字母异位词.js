// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指字母相同，但排列不同的字符串。

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

// 链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
  var len = s.length
  var len2 = p.length
  var count = new Array(26).fill(0)
  for (var i = 0; i < len2; i++) {
    count[p.charCodeAt(i) - 97]--
  }
  ans = []
  var c = 0
  for (var i = 0; i < len; i++) {
    if (count[s.charCodeAt(i) - 97] < 0) {
      c++
    }
    count[s.charCodeAt(i) - 97]++
    if (i - len2 >= 0) {
      if (count[s.charCodeAt(i - len2) - 97] <= 0) {
        c--
      }
      count[s.charCodeAt(i - len2) - 97]--
    }
    if (c === len2) {
      ans.push(i - len2 + 1)
    }
  }
  return ans
}

// 链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/js-hua-dong-chuang-kou-by-i2everent-i3ha-2jnb/