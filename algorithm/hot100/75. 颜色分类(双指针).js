// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 var sortColors = function(nums) {
  const len = nums.length
  let p0 = 0
  let p2 = len - 1
  for (let i = 0; i < len; i++) {
      while(i <= p2 && nums[i] === 2) {
          [nums[i], nums[p2]] = [nums[p2], nums[i]]
          p2--
      }
      if (nums[i] === 0) {
          [nums[i], nums[p0]] = [nums[p0], nums[i]]
          p0++
      }
  }
  return nums
};
  
  // 链接：https://leetcode-cn.com/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/