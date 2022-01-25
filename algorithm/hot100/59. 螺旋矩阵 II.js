/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n);
  }
  let num = 1;
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while (num <= n * n) {
      for (let i = left; i <= right; i++) {
         matrix[top][i] = num 
    num++
      }
      top++;
      for (let i = top; i <= bottom; i++) {
    matrix[i][right] = num
          num++;
      }
      right--;
      for (let i = right; i >= left; i--) {
    matrix[bottom][i] = num
          num++;
      }
      bottom--;
      for (let i = bottom; i >= top; i--) {
    matrix[i][left] = num
          num++;
      }
      left++;
  }
  return matrix;
};

// 链接：https://leetcode-cn.com/problems/spiral-matrix-ii/solution/ru-guo-ni-yuan-yi-yi-ceng-yi-ceng-yi-cen-cm9h/