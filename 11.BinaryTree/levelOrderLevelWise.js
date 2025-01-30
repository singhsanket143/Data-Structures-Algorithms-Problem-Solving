class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the ll
        this.tail = null; // tail of the ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if(this.head == null) return undefined;
        return this.head.data;
    }

    getTail() {
        if(this.tail == null) return undefined;
        return this.tail.data;
    }

    removeAtHead() {
        if(this.head == null) return; // ll is empty
        const newHead = this.head.next; // we will store the new head
        this.head.next = null; // disconnect the old head from the ll
        this.head = newHead; // allocating the brand new head

        // if head beconmes null after removal of the node means ll is empty now
        if(this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if(this.head == null) {
            // ll is empty
            const newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode; // we are attaching the new node after the prev tail
            this.tail = newNode; // we updated the tail property
        }
    }
}

class CustomQueue {
    constructor() {
        this.ll = new LinkedList(); // we will create a brand new empty list
    }
    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    isEmpty() { 
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    const qu = new CustomQueue();
    qu.enqueue(root);
    qu.enqueue(null);
    const result = [];
    let levelArray = new Array();
    while(!qu.isEmpty()) {
        const curr = qu.front();
        qu.dequeue();
        if(curr == null) {
            // this shows end of the last level
            if(!qu.isEmpty()) {
                // if the queue is not empty then in the queue we have all the elements
                // of the next level
                
                // before we refresh our level array it has data of last level
                result.push(levelArray);
                
                qu.enqueue(null); // we can use this null as a marker of end of current level
                levelArray = new Array();
            } else {
                // when queue is empty
                result.push(levelArray);
            }
        } else {
            levelArray.push(curr.val);
            if(curr.left) {
                qu.enqueue(curr.left);
            }
            if(curr.right) {
                qu.enqueue(curr.right);
            }
        }
        
    }
        return result;
    
};
