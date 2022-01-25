// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

function insert(intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是蓝左边的，不重叠的区间
    res.push(intervals[i]);
    i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
    i++;
  }
  res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res

  while (i < len) {                 // 在蓝右边，没重叠的区间
    res.push(intervals[i]);
    i++;
  }
  
  return res;
}

// 链接：https://leetcode-cn.com/problems/insert-interval/solution/shou-hua-tu-jie-57-cha-ru-qu-jian-fen-cheng-3ge-ji/