// 递归
const check = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function(root) {
  return check(root, root);
};

// 迭代
const check = (u, v) => {
  const q = [];
  q.push(u),q.push(v);

  while (q.length) {
      u = q.shift();
      v = q.shift();

      if (!u && !v) continue;
      if ((!u || !v) || (u.val !== v.val)) return false;

      q.push(u.left); 
      q.push(v.right);

      q.push(u.right); 
      q.push(v.left);
  }
  return true;
}
var isSymmetric = function(root) {
  return check(root, root);
};

// 链接：https://leetcode-cn.com/problems/symmetric-tree/solution/dui-cheng-er-cha-shu-by-leetcode-solution/