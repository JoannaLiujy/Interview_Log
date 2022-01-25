// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

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
 * @return {number[]}
 */
// 递归
 var inorderTraversal = function(root) {
  const res = [];
  const inorder = (root) => {
      if (!root) {
          return;
      }
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
  }
  inorder(root);
  return res;
};

// 方法一的递归函数我们也可以用迭代的方式实现，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同，具体实现可以看下面的代码。
var inorderTraversal = function(root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
      while (root) {
          stk.push(root);
          root = root.left;
      }
      root = stk.pop();
      res.push(root.val);
      root = root.right;
  }
  return res;
};

// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/