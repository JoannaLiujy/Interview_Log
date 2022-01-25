// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].



var merge = function (intervals) {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) { // 有重合
      prev[1] = Math.max(cur[1], prev[1]); 
    } else {       // 不重合，prev推入res数组 
      res.push(prev);
      prev = cur;  // 更新 prev
    }
  }

  res.push(prev);
  return res;
};


// 迭代可以重复利用同一存储空间，递归占用的空间可能比较大

// 链接：https://leetcode-cn.com/problems/merge-intervals/solution/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu/
// prev 初始为第一个区间，cur 表示当前的区间，res 表示结果数组
// 开启遍历，尝试合并 prev 和 cur，合并后更新到 prev 上
// 因为合并后的新区间还可能和后面的区间重合，继续尝试合并新的 cur，更新给 prev
// 直到不能合并 —— prev[1] < cur[0]，此时将 prev 区间推入 res 数组