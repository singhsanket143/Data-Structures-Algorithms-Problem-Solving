/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function calcMid(head, tail) {
    let slow = head;
    let fast = head;
    while(fast != tail && fast.next != tail) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; // midnode
}
function makeBst(head, tail) {
    if(head == null) return null;
    if(head == tail) return null;
    let mid = calcMid(head, tail);
    let root = new TreeNode(mid.val)
    root.left = makeBst(head, mid)
    root.right = makeBst(mid.next, tail);
    return root;
    
}
var sortedListToBST = function(head) {
    return makeBst(head, null);
};