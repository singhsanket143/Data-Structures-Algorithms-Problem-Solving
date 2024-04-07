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
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */