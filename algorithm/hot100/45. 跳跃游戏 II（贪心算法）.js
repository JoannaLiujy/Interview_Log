// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。

// 输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  const length = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for(let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      end = maxPosition
      steps++
    }
  }
  return steps
};

// https://leetcode-cn.com/problems/jump-game-ii/solution/tiao-yue-you-xi-ii-by-leetcode-solution/

// 定义：

// prev：上次跳跃可到达的最远位置，初始化为 0
// next：下次跳跃可到达的最远位置
// i 表示当前到达的位置，当 i === prev 时，需要进行下一次跳跃，来到达更远的地方，而这次跳跃能到达的极端位置就是 next。

// 理解每一步循环中的三个变量：我们不需要知道从哪个点发生跳跃，只需要明白在 [i, prev] 中有一个点可以跳到 next。

var jump = function(nums) {
  const N = nums.length;
  let steps = 0;
  let prev = 0, next = 0;

  for (let i = 0; i < N - 1; i++) {
    next = Math.max(next, i + nums[i]);
    if (i === prev) {
      steps++;
      prev = next;
    }
  }

  return steps;
};