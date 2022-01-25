//  输入：l1 = [1,2,4], l2 = [1,3,4]
//  输出：[1,1,2,3,4,4]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};

/**
 * 递归
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
      return l2;
  } else if (l2 === null) {
      return l1;
  } else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode-solu/