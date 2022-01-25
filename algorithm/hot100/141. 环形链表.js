// 给定一个链表，判断链表中是否有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head
  let fast = head.next
  while(slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
  }
  return true
};

// https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/