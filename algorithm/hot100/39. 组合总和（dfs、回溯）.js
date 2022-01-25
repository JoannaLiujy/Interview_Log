// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
const combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const dfs = (target, combine, idx) => {
    if (target === 0) {
      res.push(combine);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      const num = candidates[i];
      if (target >= num) {
        dfs(target - num, [...combine, num], i);
      }
    }
  };
  dfs(target, [], 0);
  return res;
};
