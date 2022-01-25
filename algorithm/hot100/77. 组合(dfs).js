// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

var combine = function(n, k) {
  const res = []
  const dfs = (start, path) => {
      if (path.length === k) {
          res.push(path)
          return
      }
      for (let i = start; i <= n; i++) {
          dfs(i + 1, [...path, i])
      }
  }
  dfs(1, [])
  return res
};

// 链接：https://leetcode-cn.com/problems/combinations/solution/shou-hua-tu-jie-jian-zhi-he-hui-su-by-xiao_ben_zhu/