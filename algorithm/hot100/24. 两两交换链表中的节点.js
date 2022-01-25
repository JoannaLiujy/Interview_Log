// 递归
var swapPairs = function(head) {
  if (head === null|| head.next === null) {
      return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

// 迭代
var swapPairs = function(head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
      const node1 = temp.next;
      const node2 = temp.next.next;
      temp.next = node2;
      node1.next = node2.next;
      node2.next = node1;
      temp = node1;
  }
  return dummyHead.next;
};
