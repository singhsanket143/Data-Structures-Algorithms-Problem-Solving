class ListNode {
    
    int val;
    
     ListNode next;
    
     ListNode() {}

     ListNode(int val) { this.val = val; }

     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
public class removeDuplicatedFromSortedxList {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode curr = head;
        while(curr != null && curr.next != null) {
            if(curr.val == curr.next.val) {
                ListNode toBeRemoved = curr.next;
                curr.next = toBeRemoved.next;
                toBeRemoved.next = null;
            } else {
                curr = curr.next;
            }
        }
        return head;
    }
}
