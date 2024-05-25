// 1. Structure that should contain array of linked list
// 2. Load factor , at any point of time load factor > 0.5 we rehash
// Java - Hashmap, C++ - unordered_map , python - dict, js - objects
var Node = function(data) {
    this.data = data;
    this.next = null; // until or unless we attach this new node to a list, the next property should be null
}


var MyLinkedList = function() {
    this.head = null; // because initially everything is empty
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i < index && temp != null) {
        i++;
        temp = temp.next;
    }
    if(temp == null) return -1;
    return temp.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        // means the ll is empty, so this node should become the head
        this.head = new Node(val);
    } else {
        // when ll is not. empty
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        // ll is empty
        this.head = new Node(val);
    } else {
        let temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        //. when the loop ends, temp points at the tail node
        let n = new Node(val);
        temp.next = n;
        // that's it
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null && index != 0) return;
    if(this.head == null ) {
       // console.log("hello")
        this.head = new Node(val);
        return;
    }
    if(index == 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0;
    let prev = null;
    let curr = this.head;
    while(i < index && curr != null) {
        i++;
        prev = curr;
        curr = curr.next;
    }
    if(i != index) return;
    let n = new Node(val);
    prev.next = n;
    n.next = curr;
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    if(index == 0) {
        this.deleteAtHead();
        return;
    }
    let i = 0;
    let prev = null;
    let nodeToBeDel = this.head;
    while(i < index && nodeToBeDel != null) {
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    }
    if(i != index) {
        // ll was not having the index
        return;
    }
    if(nodeToBeDel == null) return;
    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null;  // this now will be later garbage collected
    return;
};

MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head; // curr head
    this.head = nextHead;
    nodeToBeDelete.next = null; // prev head disconnected
}
class HashMap {
    constructor() {
        this.lambdaFactor = 0.5; // threshold lambda factor
        this.arr = [];
        this.currSize = 0; // how many key-value pair are inserted
    }

    hashFunction(key) {
        // takes key as a parameter
        // apply the hash function on that key
        // the result of the hashfunction is the bucket index in the given array

        // Suggest any hashfunction for key as a string????

        // "mango": 3,
        // ((ascii(m)*p^0) +  (ascii(a)*p^1) + (ascii(n)*p^2) + (ascii(g)*p^3) .... )%array_size
        // "apple": 5

        // (a + b)%c => (a%c + b%c)%c
        // (a * b)%c => (a%c * b%c)%c

        let ans = 0; // This variable will be the final hashed value
        let p = 101; // prime number to keep
        let pow = 1; // intially power is p^0
        for(let i = 0; i < key.length; i++) {
            // go to each character of given
            let asciiValue = ascii(key, i);
            ans = ((ans%this.currSize) + ((asciiValue%this.currSize)*(pow%this.currSize))%this.currSize) % this.currSize;

            // for next iteration we will incremement the power
            pow = pow * p;
        }
        return ans;
        
    }

    ascii(key, index) {
        return key.charCodeAt(index);
    }
}
