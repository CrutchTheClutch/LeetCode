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
var mergeTwoLists = function(l1, l2) {
  let parent = new ListNode(0);
  let master = parent;

  while (l1 || l2) {
    if (!l1) {
      parent.next = l1;
      break;
    } else if (!l2) {
      parent.next = l2;
      break;
    }

    if (l1.val < l2.val) {
      parent.next = l1;
      l1 = l1.next;
    } else {
      parent.next = l2;
      l2 = l2.next;
    }

    parent = parent.next;
  }

  l1 != null ? (parent.next = l1) : (parent.next = l2);

  return master.next;
};
