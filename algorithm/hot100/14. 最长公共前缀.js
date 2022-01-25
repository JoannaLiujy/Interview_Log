// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const firstStr = strs[0];
  if (strs.length === 1) {
    return firstStr;
  }
  let i = 0;
  while (true) {
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j];
      if (str[i] !== firstStr[i]) {
        return firstStr.slice(0, i);
      }
    }
    if (i === firstStr.length) {
      return firstStr;
    }
    i++;
  }
};