/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const num1 = [],
    num2 = [];
  while (l1) {
    num1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    num2.push(l2.val);
    l2 = l2.next;
  }

  let val = 0,
    root = null;
  while (num1.length || num2.length || val > 0) {
    if (num1.length) {
      val += num1.pop();
    }
    if (num2.length) {
      val += num2.pop();
    }
    const current = new ListNode(val % 10);
    current.next = root;
    root = current;
    val = val > 9 ? 1 : 0;
  }

  return root;
};
