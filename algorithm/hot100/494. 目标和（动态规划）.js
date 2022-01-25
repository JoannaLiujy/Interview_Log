// 给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 示例 1：

// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// 示例 2：

// 输入：nums = [1], target = 1
// 输出：1

// 链接：https://leetcode-cn.com/problems/target-sum

var findTargetSumWays = function(nums, target) {
  let sum = 0;
  for (const num of nums) {
      sum += num;
  }
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
      return 0;
  }
  const neg = Math.floor(diff / 2);
  const dp = new Array(neg + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
      for (let j = neg; j >= num; j--) {
          dp[j] += dp[j - num];
      }
  }
  return dp[neg];
};

/** 优化前 */
var findTargetSumWays = function(nums, target) {
  let sum = 0;
  for (const num of nums) {
      sum += num;
  }
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
      return 0;
  }
  const n = nums.length, neg = diff / 2;
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
      const num = nums[i - 1];
      for (let j = 0; j <= neg; j++) {
          dp[i][j] = dp[i - 1][j];
          if (j >= num) {
              dp[i][j] += dp[i - 1][j - num];
          }
      }
  }
  return dp[n][neg];
};

// 链接：https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/

// 记数组的元素和为 sum，添加 - 号的元素之和为 neg，则其余添加 + 的元素之和为 sum−neg，得到的表达式的结果为

// (sum - neg) - neg = sum - 2 * neg = target

// 即

// neg = (sum - target) / 2

// 所以 (sum - target) 必须是非负偶数

// 问题转化成在数组 nums 中选取若干元素，使得这些元素之和等于 neg，计算选取元素的方案数。我们可以使用动态规划的方法求解。

// dp[i][j] 表示在数组nums的前i个数中选取元素，使这些元素只和等于j的方案数。假设数组的长度为n，最终答案为dp[n][neg]