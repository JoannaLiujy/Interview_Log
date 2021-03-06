// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。

var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(m).fill().map(() => Array(n))
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
  }
  return dp[m - 1][n - 1]
};

// 链接：https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode-solution/

/**
 * 优化空间
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(n).fill(0)
  dp[0] = grid[0][0]
  for (let j = 1; j < n; j++) {
      dp[j] = dp[j - 1] + grid[0][j]
  }
  for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (j === 0) {
              dp[j] = dp[j] + grid[i][j]
          } else {
              dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
          }
      }
  }
  return dp[n - 1]
};