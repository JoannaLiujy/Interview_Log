// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 示例:
// 输入: [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]


const maxProfit = (prices) => {
  const n = prices.length;   // n天
  if (n == 0) return 0
  let hold = new Array(n);   // 第i天持有股票的最大收益
  let unhold = new Array(n); // 第i天不持有股票的最大收益
  hold[0] = -prices[0];      // 第0天 买了股票的收益
  unhold[0] = 0
  for (let i = 1; i < n; i++) {
    if (i == 1) {            // base case
      hold[i] = Math.max(-prices[0], -prices[1]);
    } else {
      hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
    }
    unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]); 
  }
  return unhold[n - 1];
};


// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/dp-zhuang-tai-de-ding-yi-you-liang-chong-fang-fa-b/
// 状态转移方程

// hold[i] : 第 i 天，手中持有股票，这时的最大收益。
// 有两种可能：
// 1. 昨天就持有股票，今天休息。
// 2. 前天卖了股票，今天买了股票。
// hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i])

// unhold[i] : 第 i 天，手中没有股票，此时的最大收益。
// 有两种可能：今天休息、或卖了股票
// 1. 昨天也没有持有，今天休息。
// 2. 昨天持有股票，今天卖了股票。
// unhold[i] = Math.max(unhold[i -1], hold[i - 1] + prices[i])

// 目标是求 unhold[n-1] ( n：0 1 2 3 ... )
