// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

var uniquePaths = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
      f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
      f[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
  }
  return f[m - 1][n - 1];
};

// C(m+n-2, m-1) => (m+n-2)..n / (m-1)..1
var uniquePaths = function(m, n) {
  let ans = 1;
  for (let x = n, y = 1; y < m; ++x, ++y) {
      ans = Math.floor(ans * x / y);
  }
  return ans;
};

// 链接：https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/


// 优化空间复杂度
var uniquePaths = function(m, n) {
  const dp = new Array(n).fill(1);
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j-1];
    }
  }
  return dp[n-1];
}

// 链接：https://leetcode-cn.com/problems/unique-paths/solution/dong-tai-gui-hua-by-lcina-skns/