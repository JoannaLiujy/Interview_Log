// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
   let ans = [-1, -1]
   const leftIndex = binarySearch(nums, target, true)
   const rightIndex = binarySearch(nums, target, false) - 1
   if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
      ans = [leftIndex, rightIndex]
   }
   return ans
};

function binarySearch(nums, target, lower) {
  let left = 0;
  let right = nums.length - 1
  let ans = nums.length
  while(left <= right) {
    const mid = parseInt((left + right) / 2)
    if (nums[mid] > target || lower && nums[mid] >= target) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}

// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/zai-pai-xu-shu-zu-zhong-cha-zhao-yuan-su-de-di-3-4/