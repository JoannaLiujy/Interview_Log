// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// dfs 
const maxDepth = (root) => {
  if (root == null) return 0;
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};

// bfs
const maxDepth = (root) => {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    // 当前层的节点个数
    const levelSize = queue.length;          
    // 逐个让当前层的节点出列
    for (let i = 0; i < levelSize; i++) {    
      // 当前出列的节点
      const cur = queue.shift();            
      // 左右子节点入列
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right); 
    }
    // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
    if (queue.length) depth++;
  }
  return depth;
};

// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/