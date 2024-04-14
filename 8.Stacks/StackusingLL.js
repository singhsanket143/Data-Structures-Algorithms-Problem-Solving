var Node = function(data) {
    this.data = data;
    this.next = null; // until or unless we attach this new node to a list, the next property should be null
}


var MyLinkedList = function() {
    this.head = null; // because initially everything is empty
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



MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head; // curr head
    this.head = nextHead;
    nodeToBeDelete.next = null; // prev head disconnected
}

class Stack {
    #ll; // private linked list
    constructor() {
        this.#ll = new MyLinkedList();
    }


    push(element) {
        this.#ll.addAtHead(element);
    }
    pop() {
        this.#ll.deleteAtHead();
    }
    top() {
        return this.#ll.head.data;
    }
}



let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.top()); 
s.pop(); // removes 30
console.log(s.top());
s.pop();
console.log(s.top());