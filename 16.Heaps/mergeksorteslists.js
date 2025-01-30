/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upheapify(idx) {
        // idx represents the index to start upheapify from
        while(idx > 0) {
            // till the time idx doesnt reach the root
            let pi = Math.floor((idx-1)/2);
            if(this.cmp(this.arr[pi] , this.arr[idx])) {
                // parent is smaller than current element

                // swap the parent and child
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;


                idx = pi;
            } else {
                // everything is good, we have a heap
                break;
            }
        }
    }

    insert(data) {
        // 1. Insert this data in your array
        this.arr.push(data);

        // 2. upheapify
        this.upheapify(this.arr.length - 1);
    }
    
    isEmpty() {
        return this.arr.length == 0;
    }

    downheapify(idx) {
        while(idx < this.arr.length) {
            // 1. Calculate the lc and rc index
            let lc = 2*idx + 1; // possible lc index
            let rc = 2*idx + 2; // possible rc index
            let maxEl = idx; // assume root is the max
            if(lc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[lc])) {
                // left child exist and is greater also
                maxEl = lc;
            }

            if(rc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[rc])) {
                // right child exist && is greater also
                maxEl = rc;
            }

            // after the above comparison we klnow the biggest element
            if(idx == maxEl) {
                // root is still the biggest element, dont go further
                break;
            } else {
                // swap the element of root and maxEl
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEl];
                this.arr[maxEl] = temp;

                idx = maxEl;
            }
        }
 


    }

    remove() {
        if(this.arr.length == 0) return;
        // remove the highest priority element

        // 1. swap the root with last element

        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // 2. Remove the last element
        this.arr.pop();

        // 3. downheapify
        this.downheapify(0);

    }

    display() {
        console.log(this.arr)
    }

    get() {
        return this.arr[0]; // return the root
    }
}

var mergeKLists = function(lists) {
    
    let result = new ListNode(123); // 123 is a dummy head
    let temp = result; // temp pointer to move on the resultant list // temp = 123->
    
    let hp = new Heap((n1, n2) => {
        return n1.val > n2.val;
    })
    for(let i = 0; i < lists.length; i++) {
        if(lists[i]!=null)
            hp.insert(lists[i])
    }
    
    // hp -> [1,1,2]
    
    while(!hp.isEmpty()) {
        let root = hp.get(); // 1->4->%
        
        // attacyhed my node to the next opf resultant tail node
        temp.next = root; // 123->1->4->5
        temp = temp.next; // 1->4->5
        
        
        hp.remove(); // remove the node from heap // [1,2]
        let nextNode = root.next; // 4->5
        root.next = null; // break the conn //. 1
        
        if(nextNode != null) hp.insert(nextNode); /// [1,2,4]
        
        
    }
    
    return result.next;
};