// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 

// 链接：https://leetcode-cn.com/problems/3sum-closest


/**
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let ans = Infinity
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      const sumDiff = Math.abs(sum - target)
      const ansDiff = Math.abs(ans - target)
      if (sumDiff < ansDiff) {
        ans = sum
      }
      if (sum < target) {
        l++
      } else if (sum > target) {
        r--
      } else {
        return target
      }
    }
  }
  return ans
};

// 先排序，再双指针