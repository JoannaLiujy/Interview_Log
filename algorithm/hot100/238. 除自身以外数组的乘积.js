// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 示例:
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]

var productExceptSelf = (nums) => {
  const N = nums.length
  const output = []
  output[0] = 1
  for (let i = 1; i < N; i++) { // output[i]是nums[i]的左边积
    output[i] = output[i - 1] * nums[i - 1]
  }
  let right_output = 1 // 保存nums[i]的左边积
  for (let i = N - 1; i >= 0; i--) {
    output[i] *= right_output  // 左边积 乘上 右边积
    right_output *= nums[i] // 更新右边积
  }
  return output
}

/** 优化前 */
var productExceptSelf = (nums) => {
  const N = nums.length
  const left_output = []  // 存放左边积
  const right_output = [] // 存放右边积
  const output = []       // 结果数组
  left_output[0] = 1      // nums数组第一项没有左边项，初始化为1
  right_output[N - 1] = 1 // nums数组最右项没有右边项，初始化为1
  for (let i = 1; i < N; i++) { // 遍历求出每个元素的左边元素之积
    left_output[i] = left_output[i - 1] * nums[i - 1] // 累乘一项即可
  }
  for (let i = N - 2; i >= 0; i--) { // 遍历求出每个元素的右边元素之积
    right_output[i] = right_output[i + 1] * nums[i + 1] // 累乘一项即可
  }
  for (let i = 0; i < N; i++) { // 遍历求出output[i]
    output[i] = left_output[i] * right_output[i]
  }
  return output
}

// 利用好 output 数组空间，并引入变量保存右边积
// 从左遍历 nums ，每个元素的左边积存到 output 数组
// 从右遍历 nums ，一个变量保存了当前元素的右边积，让它和当前 output[i] 相乘（即当前的左边积），结果值覆盖到 output[i]
// 然后更新右边积，在下一次迭代中使用
// 每次迭代，做了两件事：求 左边积x右边积 & 更新右边积

// 链接：https://leetcode-cn.com/problems/product-of-array-except-self/solution/output-shu-zu-cheng-dan-liang-chong-jiao-se-yi-ci-/