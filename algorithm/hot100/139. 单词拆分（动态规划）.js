// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 说明：
// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] == true) break;
      if (dp[j] == false) continue;
      const suffix = s.slice(j, i);
      if (wordSet.has(suffix) && dp[j] == true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};

// 链接：https://leetcode-cn.com/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/

// dp[i]：长度为i的s[0:i-1]子串是否能拆分成单词。题目求:dp[s.length]

// 状态转移方程
// s[0:i] 子串对应 dp[i+1] ，它是否为 true（s[0:i]能否 break），取决于两点
// 1. 它的前缀子串 s[0:j-1] 的 dp[j]，是否为 true。
// 2. 剩余子串 s[j:i]，是否是单词表的单词。