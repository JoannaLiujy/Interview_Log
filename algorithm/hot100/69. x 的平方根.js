// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
// 示例 1:
// 输入: 4
// 输出: 2

const mySqrt = x => {
  let [low, high] = [0, x];
  while (low <= high) {
      const mid = (low + high) >> 1; // 可以实现 parseInt((low + high))
      if (mid * mid > x) {
          high = mid - 1;
      } else if (mid * mid < x) {
          low = mid + 1;
      } else {
          return mid;
      }
  }
  return high;
};
