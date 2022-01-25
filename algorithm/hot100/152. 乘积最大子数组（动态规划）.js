// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
// 示例 1:
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:
// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = (nums) => {
  let res = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    res = Math.max(prevMax, res)
  }
  return res
}

// 链接：https://leetcode-cn.com/problems/maximum-product-subarray/solution/wa-ni-zhe-ti-jie-shi-xie-gei-bu-hui-dai-ma-de-nu-p/

// dp[i] 以i项为末尾项的子数组们中的最大乘积
// dp[i][0] 从第0项到第i项范围内的子数组的最小乘积
// dp[i][1] 从第0项到第i项范围内的子数组的最大乘积

// base case:
// dp[0][0] = nums[0]
// dp[0][1] = nums[0]

// 对于以 nums[i]nums[i] 为末尾的子数组能产生的最小积，它有 3 种情况：
// 1. 不和别人乘，就 nums[i] 自己
// 2. nums[i] 是负数，希望乘上前面的最大积
// 3. nums[i] 是正数，希望乘上前面的最小积

// dp[i][0] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
// dp[i][1] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])

// 降维：
// dp[i][x] 只和 dp[i - 1][x] 有关，与再之前的结果无关
// 用两个变量存每个位置算出的最大积和最小积，在迭代中更新即可
// base case:
// preMin = nums[0]
// prevMax = nums[0]

// 状态转移方程
// prevMin = min(prevMin * nums[i], prevMax * nums[i], nums[i])
// prevMax = max(prevMin * nums[i], prevMax * nums[i], nums[i])

// 等号右边的 prevMin 和 prevMax 属于 dp[i - 1] 的。等号左边的 prevMin 和 prevMax 属于 dp[i] 的

// 错误：第一个等式求出的新 prevMin 用在第二个等式的计算
// 解决：用变量暂存 prevMin * nums[i] 和 prevMax * nums[i]