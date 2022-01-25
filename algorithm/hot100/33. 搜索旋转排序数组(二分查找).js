/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  const n = nums.length
  if (n === 0) {
    return -1
  }
  if (n === 1) {
    return nums[0] === target ? 0 : -1
  }
  let l = 0
  let r = n -1
  while(l <= r) {
    let mid = parseInt((l + r) /2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
};