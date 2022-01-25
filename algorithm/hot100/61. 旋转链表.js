// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3]

var rotateRight = function(head, k) {
  if (!k || !head || !head.next) {
      return head
  }
  let n = 1
  let cur = head
  while(cur.next) {
      cur = cur.next
      n++
  }
  let add = n - k % n
  cur.next = head
  while(add) {
      cur = cur.next
      add--
  }
  const ret = cur.next
  cur.next = null
  return ret
};

// 链接：https://leetcode-cn.com/problems/rotate-list/solution/xuan-zhuan-lian-biao-by-leetcode-solutio-woq1/