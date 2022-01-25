// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 示例 1：

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：

// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

// 链接：https://leetcode-cn.com/problems/partition-equal-subset-sum


var canPartition = function(nums) {
  const n = nums.length;
  if (n < 2) {
      return false;
  }
  let sum = 0, maxNum = 0;
  for (const num of nums) {
      sum += num;
      maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
      return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
      return false;
  }
  const dp = new Array(n).fill(0).map(v => new Array(target + 1, false));
  for (let i = 0; i < n; i++) {
      dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
      const num = nums[i];
      for (let j = 1; j <= target; j++) {
          if (j >= num) {
              dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
          } else {
              dp[i][j] = dp[i - 1][j];
          }
      }
  }
  return dp[n - 1][target];
};

// 链接：https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/fen-ge-deng-he-zi-ji-by-leetcode-solution/