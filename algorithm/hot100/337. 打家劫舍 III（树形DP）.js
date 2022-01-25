// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
// 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
// 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
// 链接：https://leetcode-cn.com/problems/house-robber-iii

const rob = (root) => {

  const helper = (root) => {
    if (root == null) return [0, 0];

    const left = helper(root.left);
    const right = helper(root.right);

    robExcludeRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    robIncludeRoot = root.val + left[0] + right[0];

    return [robExcludeRoot, robIncludeRoot];
  };

  const res = helper(root);

  return Math.max(res[0], res[1]);
};

// 链接：https://leetcode-cn.com/problems/house-robber-iii/solution/si-chong-xie-fa-di-gui-ji-yi-hua-di-gui-shu-xing-d/c

// 递归 思路
// 打不打劫根节点，会影响打劫一棵树的收益：

// 1. 打劫根节点，则不能打劫左右子节点，但是能打劫左右子节点的四个子树（如果有）。
// 2. 不打劫根节点，则能打劫左子节点和右子节点，收益是打劫左右子树的收益之和。