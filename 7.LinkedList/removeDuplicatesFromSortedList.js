/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr != null && curr.next != null) {
        if(curr.val == curr.next.val) {
            let toBeRemoved = curr.next;
            curr.next = toBeRemoved.next;
            toBeRemoved.next = null;
        } else {
            curr = curr.next;
        }
    }
    return head;
};