class Node {
    constructor(key, value) {
        this.data = key;
        this.value = value;
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

    addAtHead(key, value) {
        // 1. Is the ll is empty, create a new node and assign it as head and tail both
        if(this.isEmpty()) {
            // a. Create a new node
            const newNode = new Node(key, value);
            // b. Assign this node as the head
            this.head = newNode;
            // c. Assign the same node as tail
            this.tail = newNode;
            return newNode;
        } else {
            // 2. If the list is not empty, then create a new node and attach it behind the old head
            
            // a. Create a new node
            const newNode = new Node(key, value);
            // b. attach behind the old head by making next of newNode equal to old head
            newNode.next = this.head;
            // c. Connect the prev of the old head to the newNode
            this.head.prev = newNode;
            // d. Make the newNode as the new head of the list
            this.head = newNode;
             return newNode;
        }
    }

    addAtTail(key, value) {
        if(this.isEmpty()) {
            // 1. If the LL is empty then adding at head is same as adding at tail
            this.addAtHead(key, value);
        } else {
            // 2. LL is not empty

            // a. Create a new node
            const newNode = new Node(key, value);
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

    removeNode(node) {
        if(node.prev == null) {
            // 1. If the node is a head node call removeAtHead
            this.removeAtHead();
        } else if(node.next == null) {
            // 2. If the node is a tail node call removeAtTail
            this.removeAtTail();
        } else {
            // 3. Some node in between
            const prevNode = node.prev;
            const nextNode = node.next;
            // prevnode - node - nextNode
            // a. Break conn between prevNode and currNode
            prevNode.next = null;
            node.prev = null;

            // b. break the conn between nextnode and currnode
            nextNode.prev = null;
            node.next = null;

            // c. Connect the prev node with nextNode
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
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


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dll = new DoublyLinkedList();
    this.cacheCapacity = capacity;
    this.size = 0; // current cache size
    this.mp = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.mp[key] == undefined) return -1;
    const result = this.mp[key].value;
    const nodeTobeRemoved = this.mp[key];
    this.dll.removeNode(nodeTobeRemoved);
    this.mp[key] = this.dll.addAtHead(key, result);
    return result;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.mp[key] != undefined) {
        // the key we wanted to add already exist
        const nodeTobeRemoved = this.mp[key];
        this.dll.removeNode(nodeTobeRemoved);
        this.mp[key] = this.dll.addAtHead(key, value);
    } else {
        // a new key value pair is being added
        if(this.size == this.cacheCapacity) {
            // the cache is full
            // remove the lru element
            delete this.mp[this.dll.tail.data];
            this.dll.removeAtTail();
            this.size--;
        }
        this.mp[key] = this.dll.addAtHead(key, value);
        this.size++;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */