// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
// 你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。
// 示例 1：
// 输入：nums = [1,3,4,2,2]
// 输出：2
// 示例 2：
// 输入：nums = [3,1,3,4,2]
// 输出：3
// 示例 3：
// 输入：nums = [1,1]
// 输出：1
// 示例 4：
// 输入：nums = [1,1,2]
// 输出：1

const findDuplicate = (nums) => {
  let lo = 1;
  let hi = nums.length - 1; //题目注明了：nums.length == n + 1
  while (lo < hi) {
      const mid = (lo + hi) >>> 1;  // 求中间索引
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] <= mid) {
              count++;
          }
      }
      if (count > mid) {
          hi = mid;
      } else {
          lo = mid + 1;
      }
  }
  return lo;
};


// 二分查找除了对索引二分，还有值域二分
// 数组元素是 1 - n 中的某一个，出现的位置不确定，但值域是确定的。

// 对索引二分，一般用于有序数组中找元素，因为索引的大小可以反映值的大小，因此对索引二分即可。
// 对值域二分。重复数落在 [1, n] ，可以对 [1, n] 这个值域二分查找。
// mid = (1 + n) / 2，重复数要么落在[1, mid]，要么落在[mid + 1, n]。

// 遍历原数组，统计 <= mid 的元素个数，记为 k。

// 如果k > mid，说明有超过 mid 个数落在[1, mid]，但该区间只有 mid 个“坑”，说明重复的数落在[1, mid]。

// 相反，如果k <= mid，则说明重复数落在[mid + 1, n]。

// 对重复数所在的区间继续二分，直到区间闭合，重复数就找到了。

// 链接：https://leetcode-cn.com/problems/find-the-duplicate-number/solution/zhe-ge-shu-zu-you-dian-te-shu-suo-yi-ke-yi-yong-ku/