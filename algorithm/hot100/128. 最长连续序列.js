// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？
// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9

var longestConsecutive = (nums) => {
  let map = new Map()
  let max = 0
  for (const num of nums) { // 遍历nums数组
    if (!map.has(num)) { // 重复的数字不考察，跳过
      let preLen = map.get(num - 1) || 0  // 获取左邻居所在序列的长度 
      let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度 
      let curLen = preLen + 1 + nextLen   // 新序列的长度
      map.set(num, curLen) // 将自己存入 map
      max = Math.max(max, curLen) // 和 max 比较，试图刷新max
      map.set(num - preLen, curLen)  // 更新新序列的左端数字的value
      map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
    }
  }
  return max
}

// 链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/fang-fa-cong-yi-dao-nan-bing-cha-ji-fang-fa-bu-hui/

/** 暴力法 */
var longestConsecutive = (nums) => {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let max = 1
  let count = 1
  for (let i = 0; i < nums.length - 1; i++) {
    let cur = i, next = i + 1
    if (nums[cur] === nums[next]) continue // 相同就跳过本次循环
    if (nums[cur] + 1 === nums[next]) { // 发现连续项 count++
      count++
    } else { // 否则，count重置1
      count = 1
    }
    max = Math.max(max, count)
  }
  return max
}