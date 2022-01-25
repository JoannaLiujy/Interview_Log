// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 进阶：
// 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？

var setZeroes = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
          flagCol0 = true;
      }
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = matrix[0][j] = 0;
          }
      }
  }
  for (let i = m - 1; i >= 0; i--) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
      if (flagCol0) {
          matrix[i][0] = 0;
      }
  }
};

// 链接：https://leetcode-cn.com/problems/set-matrix-zeroes/solution/ju-zhen-zhi-ling-by-leetcode-solution-9ll7/