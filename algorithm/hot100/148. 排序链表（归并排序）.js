// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

var sortList = function (head) {
  if (!head || !head.next)  return head;
  let slow = head, fast = head;
  let preSlow = null;
  while (fast && fast.next) {
      preSlow = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
  preSlow.next = null;
  const l = sortList(head);
  const r = sortList(slow);
  return merge(l, r);
};

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let prev = dummy;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }
  if (l1) prev.next = l1;
  if (l2) prev.next = l2;
  return dummy.next;
}


// 链接：https://leetcode-cn.com/problems/sort-list/solution/shou-hua-tu-jie-gui-bing-pai-xu-148-lian-biao-pai-/


// 看到时间复杂度的要求，而且是链表，归并排序比较好做。
// 都知道归并排序要先归（二分），再并。两个有序的链表是比较容易合并的。
// 二分到不能再二分，即递归压栈压到链只有一个结点（有序），于是在递归出栈时进行合并。

// 合并两个有序的链表，合并后的结果返回给父调用，一层层向上，最后得出大问题的答案


// 二分，用快慢指针法，快指针走两步，慢指针走一步，快指针越界时，慢指针正好到达中点，只需记录慢指针的前一个指针，就能断成两链。
// merge 函数做的事是合并两个有序的左右链
// 设置虚拟头结点，用 prev 指针去“穿针引线”，prev 初始指向 dummy
// 每次都确定 prev.Next 的指向，并注意 l1，l2指针的推进，和 prev 指针的推进
// 最后返回 dummy.Next ，即合并后的链
