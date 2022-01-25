// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
// 说明：
// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。 
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

const combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const dfs = (target, combine, idx) => {
    if (target === 0) {
      res.push(combine);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      const num = candidates[i];
      const beforeNum = candidates[i - 1]
      if (i - 1 >= idx && beforeNum === num) {  // 当前选项和左邻选项一样，跳过
        continue
      }
      if (target >= num) {
        dfs(target - num, [...combine, num], i + 1);  // 给子递归传i+1，避免与当前选的i重复
      }
    }
  };
  dfs(target, [], 0);
  return res;
};


// 只需改动三点：

// 1.给定的数组可能有重复的元素，先排序，使得重复的数字相邻，方便去重。

// 2.for 枚举出选项时，加入下面判断，从而忽略掉同一层重复的选项，避免产生重复的组合。比如[1,2,2,2,5]，选了第一个 2，变成 [1,2]，它的下一选项也是 2，跳过它，因为如果选它，就还是 [1,2]。


// if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
//     continue;
// }

// 3.当前选择的数字不能和下一个选择的数字重复，给子递归传i+1，避免与当前选的i重复。


// dfs(i + 1, temp, sum + candidates[i]);

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/combination-sum-ii/solution/man-tan-wo-li-jie-de-hui-su-chang-wen-shou-hua-tu-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。