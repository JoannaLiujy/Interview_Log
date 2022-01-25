/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head)
  let first = head
  let second = dummy // 注意
  while(n--) {
   first = first.next
  }
  while(first) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next 
  return dummy.next // 注意
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}