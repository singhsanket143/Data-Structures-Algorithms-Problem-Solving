/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head == null;
    }

    addAtHead(data) {
        // 1. Is the ll is empty, create a new node and assign it as head and tail both
        if(this.isEmpty()) {
            // a. Create a new node
            const newNode = new Node(data);
            // b. Assign this node as the head
            this.head = newNode;
            // c. Assign the same node as tail
            this.tail = newNode;
        } else {
            // 2. If the list is not empty, then create a new node and attach it behind the old head
            
            // a. Create a new node
            const newNode = new Node(data);
            // b. attach behind the old head by making next of newNode equal to old head
            newNode.next = this.head;
            // c. Connect the prev of the old head to the newNode
            this.head.prev = newNode;
            // d. Make the newNode as the new head of the list
            this.head = newNode;
        }
    }

    addAtTail(data) {
        if(this.isEmpty()) {
            // 1. If the LL is empty then adding at head is same as adding at tail
            this.addAtHead(data);
        } else {
            // 2. LL is not empty

            // a. Create a new node
            const newNode = new Node(data);
            // b. Setup the conn
            this.tail.next = newNode;
            newNode.prev = this.tail;
            // c. reassign the tail as the new node
            this.tail = newNode;
        }
    }

    removeAtHead() {
        if(this.isEmpty()) {
            // 1. If the ll is empty , we can't do anything
            return;
        } else if (this.head.next == null) {
            // 2. You have a single node, just destroy the node
            this.head = null;
            this.tail = null;
        } else {
            // 3. LL has size more than 1
            
            // a. Remember the new incmoing head
            const newHead = this.head.next;
            // b. break the conn
            this.head.next = null;
            newHead.prev = null;
            // c. assign the new head as the head
            this.head = newHead;

        }
    }

    removeAtTail() {
        if(this.isEmpty()) {
            // 1. If the ll is empty, we can't do anything
            return;
        } else if(this.head.next == null) {
            // 2. If LL is of size 1, then remove the single node
            this.head = null;
            this.tail = null;
        } else {
            // 3. LL with more than 1 size

            // a. remember the newTail
            const newTail = this.tail.prev;
            // b. break the conn
            newTail.next = null;
            this.tail.prev = null;
            // c. reassign the tail
            this.tail = newTail;
        }
    }

    display() {
        // head to tail
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }

        console.log("*******");
        
        // tail to head

        temp = this.tail;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }

}

class Deque {
    constructor() {
        this.dll = new DoublyLinkedList();
    }
    
    isEmpty() {
        return this.dll.isEmpty();
    }

    addAtFront(data) { 
        this.dll.addAtHead(data);
    }

    addAtBack(data) {
        this.dll.addAtTail(data);
    }

    removeAtFront() {
        this.dll.removeAtHead();
    }

    removeAtBack() {
        this.dll.removeAtTail();
    }

    getBack() {
        if(this.dll.tail)
            return this.dll.tail.data;
    }

    getFront() {
        if(this.dll.head)
            return this.dll.head.data;
    }
}
var maxSlidingWindow = function(nums, k) {
    // Time: O(n)
    const dq = new Deque(); // deque of indexes
    
    const result = [];
    
    // 1. Prepare the first window of size k
    for(let i = 0; i < k; i++) {
        if(dq.isEmpty()) {
            // if the deque is empty directly add the element
            dq.addAtBack(i);
        } else {
            while(!dq.isEmpty() && nums[i] > nums[dq.getBack()]) {
                // till the time the incoming element > element at back of deque
                // we will remove the element from back
                dq.removeAtBack();
            }
            dq.addAtBack(i);
        }
    }
    
    result.push(nums[dq.getFront()]);
    
    for(let i = k; i < nums.length; i++) {
        // remove any element that is not in the proximity of  the window
        while(!dq.isEmpty() && dq.getFront() <= i - k) {
            dq.removeAtFront();
        }
        // start adding the element
        if(dq.isEmpty()) {
            dq.addAtBack(i);
        } else {
            while(!dq.isEmpty() && nums[i] > nums[dq.getBack()]) {
                // till the time the incoming element > element at back of deque
                // we will remove the element from back
                dq.removeAtBack();
            }
            dq.addAtBack(i);
        }
        result.push(nums[dq.getFront()]);
    }
    return result;
    
    
};