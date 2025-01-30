public class PartitionList {
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

    public ListNode partition(ListNode head, int x) {
        ListNode d1 = new ListNode(-1);
        ListNode d2 = new ListNode(-1);
        
        ListNode t1 = d1;
        ListNode t2 = d2;
        
        ListNode curr = head;
        while(curr != null) {
            ListNode temp = curr;
            curr = curr.next;
            temp.next = null;
            
            if(temp.val < x) {
                t1.next = temp;
                t1 = t1.next;;
                
            } else {
                t2.next = temp;
                t2 = t2.next;
            }
        }
        
        t1.next = d2.next;
        d2.next = null;
        ListNode result = d1.next;
        d1.next = null;
        return result;
        
        
    }
}
 class ListNode {
    
    int val;
    
     ListNode next;
    
     ListNode() {}

     ListNode(int val) { this.val = val; }

     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }