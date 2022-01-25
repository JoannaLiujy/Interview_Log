// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums) {
  const res = []
  const used = {}
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for(const num of nums) {
      if (used[num]) {
        continue
      }
      used[num] = true
      dfs([...path, num])
      used[num] = false
    }
  }
  dfs([])
  return res
}