/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

 public class ListNode {
    
    int val;
    
     ListNode next;
    
     ListNode() {}

     ListNode(int val) { this.val = val; }

     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
class removeNthFromLast {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast = head;
        int i = 0;
        while(i < n && fast != null) {
            i++;
            fast = fast.next;
        }
        if(fast == null) {
            // remove head
            ListNode newHead = head.next;
            head.next = null;
            return newHead;
        }
        ListNode slow = head;
        while(fast.next != null) {
            // while fast is not at the tail
            fast = fast.next;
            slow= slow.next;
        }
        ListNode tbl = slow.next;
        slow.next = tbl.next;
        tbl.next = null;
        return head;
    }
}