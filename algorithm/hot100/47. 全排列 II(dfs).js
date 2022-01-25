// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  nums.sort()
  const res = []
  const used = {}
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for(const index in nums) {
      if (used[index]) {
        continue
      }
      if (index >= 1 && nums[index] === nums[index - 1] && used[index - 1] === false ) {
        continue
      }
      used[index] = true
      dfs([...path, nums[index]])
      used[index] = false
    }
  }
  dfs([])
  return res
}



// 大家发现，去重最为关键的代码为：

// if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
//     continue;
// }
// 如果改成 used[i - 1] == true， 也是正确的!，去重代码如下：

// if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == true) {
//     continue;
// }
// 这是为什么呢，就是上面我刚说的，如果要对树层中前一位去重，就用used[i - 1] == false，如果要对树枝前一位去重用used[i - 1] == true。

// 对于排列问题，树层上去重和树枝上去重，都是可以的，但是树层上去重效率更高！

// 链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/dai-ma-sui-xiang-lu-jian-zhi-offer-38-zi-gwt6/