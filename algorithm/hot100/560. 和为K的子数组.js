// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

// 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k


const subarraySum = (nums, k) => {
  const map = { 0: 1 };
  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map[prefixSum - k]) {  // 边存边查看 map，如果 map 中存在 key 为「当前前缀和 - k」，说明这个之前出现的前缀和，满足「当前前缀和 - 该前缀和 == k」，它出现的次数，累加给 count。
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count;
};

// 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/

// 有几种i、j的组合，使得第到第j项的子数组和等于k

// 转化为

// 有几种i、j的组合，满足prefixSum[j] - prefixSum[i - 1] = k