// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

// 示例 1:

// 输入: 2
// 输出: [0,1,1]
// 示例 2:

// 输入: 5
// 输出: [0,1,1,2,1,2]

// 链接：https://leetcode-cn.com/problems/counting-bits

var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
      bits[i] = countOnes(i);
  }
  return bits
};

const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
      x &= (x - 1);
      ones++;
  }
  return ones;
}

// 链接：https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/