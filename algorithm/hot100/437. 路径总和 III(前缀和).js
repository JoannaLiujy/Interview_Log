// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）

// 链接：https://leetcode-cn.com/problems/path-sum-iii

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
  let map = new Map()
  let ans = 0
  dfs(root, 0)
  return ans
 /**
  * 
  * @param {*} root 
  * @param {*} presum 前缀和
  * @returns 
  */
  function dfs(root, presum){
      if(!root){
          return 0
      }
      map.set(presum, (map.get(presum) || 0) + 1)
      let target = presum + root.val
      ans += (map.get(target - targetSum) || 0)
      // 继续找
      dfs(root.left, target)
      dfs(root.right, target)
      // 回溯 撤销
      map.set(presum, map.get(presum) - 1)
  }
};

// 链接：https://leetcode-cn.com/problems/path-sum-iii/solution/tong-su-yi-dong-de-qian-zhui-he-jie-fa-b-t8hl/