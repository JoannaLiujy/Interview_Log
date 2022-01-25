// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
      for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[n - j - 1][i];
          matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
          matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
          matrix[j][n - i - 1] = temp;
      }
  }
};

// 对于矩阵中第 i 行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第 j 个位置。
// matrixNew[col][n - row - 1] = matrix[row][col]