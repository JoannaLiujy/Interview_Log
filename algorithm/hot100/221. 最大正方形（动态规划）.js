// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4

var maximalSquare = function (matrix) {
  let maxSideLength = 0 // 相当于纪录保持者
  let dp = new Array(matrix.length) // 构建dp数组
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0) // dp二维数组，每一项初始化0
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) { // base case
          dp[i][j] = 1 // 第一列和第一行的dp值只能为1
        } else { // 递推通式，求出dp[i][j]
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSideLength = Math.max(maxSideLength, dp[i][j]) //挑战纪录保持者，试图更新
      }
    }
  }
  return maxSideLength * maxSideLength // 边长的平方
};

// 链接：https://leetcode-cn.com/problems/maximal-square/solution/jser-by-hyj8/

// 思路：
// dp[i][j] 以i，j为右下顶点所能形成的最大正方形的边长

// base case：
// dp[i][j] 初始值为0
// 第一行和第一列的值最大只能为1

// 归纳通式：
// dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1

// 可以计算出所有dp[i][j]

// 用一个变量存储最大值

// 返回这个最大值