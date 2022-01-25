// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let slow = 0;
  let fast = 0;
  while(fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};