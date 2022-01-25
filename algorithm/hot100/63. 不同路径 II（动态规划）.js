// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 动态规划 滚动数组
const uniquePathsWithObstacles = (obstacleGrid) => {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  const f = Array(m).fill(0)
  f[0] = obstacleGrid[0][0] === 0 ? 1 : 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j]) {
        f[j] = 0;
      } else if (j - 1 >= 0) {
        f[j] += f[j - 1] // 重点
      }
    }
  }
  return f[m - 1];
};

// 链接：https://leetcode-cn.com/problems/unique-paths-ii/solution/si-chong-shi-xian-xiang-xi-tu-jie-63-bu-0qyz7/