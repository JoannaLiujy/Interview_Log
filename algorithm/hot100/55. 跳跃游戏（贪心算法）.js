// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。
// 输入：nums = [2,3,1,1,4]
// 输出：true

var canJump = function(nums) {
  const n = nums.length
  let rightmost = 0
  for(let i = 0; i < n; i++) {
      if (i <= rightmost) {
          rightmost = Math.max(rightmost, i + nums[i])
          if (rightmost >= n - 1) {
              return true
          }
      }
  }
  return false
  
};
// 链接：https://leetcode-cn.com/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode-solution/

// dfs 空间复杂度太高
// var canJump = function(nums) {
//   let ans
//   const dfs = (start) => {
//     if (start + nums[start] >= nums.length) {
//       ans = true
//       return
//     }
//     for (let i = 1; i <= nums[start]; i++) {
//       dfs(start + nums[i])
//     }
//   }
//   return ans
// };

