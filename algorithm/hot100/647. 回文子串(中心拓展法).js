// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

// 示例 1：

// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

// 链接：https://leetcode-cn.com/problems/palindromic-substrings

/**
 * 中心拓展法
 */
var countSubstrings = function(s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
      let l = i / 2, r = i / 2 + i % 2;
      while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
          --l;
          ++r;
          ++ans;
      }
  }
  return ans;
};

// 链接：https://leetcode-cn.com/problems/palindromic-substrings/solution/hui-wen-zi-chuan-by-leetcode-solution/