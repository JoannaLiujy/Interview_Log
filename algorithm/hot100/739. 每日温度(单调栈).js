// 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]

// 链接：https://leetcode-cn.com/problems/daily-temperatures

const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
      for (let j = i + 1; j < T.length; j++) {
          if (T[j] > T[i]) {
              res[i] = j - i;
              break;
          }
      }
  }
  return res;
}

// 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/shou-hui-ti-jie-fang-da-guan-cha-dan-diao-zhan-si-/

/** 单调栈 */
const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }
  return res
}

// 什么时候用单调栈
// 通常是一维数组，要寻找任一元素右边（左边）第一个比自己大（小）的元素
// 且要求 O(n) 的时间复杂度