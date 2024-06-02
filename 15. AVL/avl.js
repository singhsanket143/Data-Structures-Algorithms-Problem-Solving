class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    } 
}

class AVL {
    constructor() {
        this.root = null;
    }

    rightRotate(alpha) {
        // alpha is the unbalanced node
        let beta = alpha.left;
        let sigma = beta.right;
        beta.right = alpha;
        alpha.left = sigma;

        // update heights of alpha and beta
        // Update height of alpha first, because height of beta depends on it
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
        beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;

        // return the new root beta
        return beta;
    }

    leftRotate(alpha) {
        // alpha is the unbalanced node
        let beta = alpha.right;
        let sigma = beta.left;
        beta.left = alpha;
        alpha.right = sigma;

        // update heights of alpha and beta
        // Update height of alpha first, because height of beta depends on it
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
        beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;
        // return the new root
        return beta;
    }

    height(node) {
        if(node == null) return 0;
        return node.height;
    }

    getBF(node) {
        if(node == null) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    insertInAVL(data) {
        this.root = this.insert(this.root, data);
    }

    insert(alpha, data) {
        if(alpha == null) return new Node(data);

        // if alpha is not null, you're on an existing node
        // now decide whether this data should be inserted in lst or rst of the current node
        if(alpha.data > data) {
            // go lst
            alpha.left = this.insert(alpha.left, data);
        } else if(alpha.data < data) {
            // go rst
            alpha.right = this.insert(alpha.right, data);
        } else {
            // duplicates
            return alpha; // as the node is already present
        }

        // update the heiht as new data has been inserted
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;


        // this part is executing while coming back in the recursion
        // start balancing

        const bf = this.getBF(alpha);

        // if the bf is greater than 1 or less than -1, we have root unbalanced
        if(bf > 1) {
            // tree is left heavy
            // how to decide if we need to do right rotation or left right rotation
            let beta = alpha.left;
            if(data < beta.data) {
                // right rotation
                return this.rightRotate(alpha);
            } else {
                // left right roation
                alpha.left = this.leftRotate(alpha.left);
                return this.rightRotate(alpha);
            }
        } else if(bf < -1) {
            // tree is right heavy
            // how to deciode if we need to do left roation or right left roation
            let beta = alpha.right;
            if(data > beta.data) {
                // left rotate
                return this.leftRotate(alpha);
            } else {
                // right left rotate
                alpha.right = this.rightRotate(alpha.right);
                return this.leftRotate(alpha);
            }

        }

        return alpha; // bf is already 1, -1 or 0
    }

    preorder(root, result) {
        if(root == null) return null;
        // If th›e root is not null, that means it has some data
        // process the root
        result.push(root.data);
        
        // go to the left sub tree recursively
        this.preorder(root.left, result);
        
        // go to the right sub tree recursively    
        this.preorder(root.right, result);
    }


    preorderTraversal() {
        
        let result = [];
        this.preorder(this.root, result);
        return result;
    }

    inorder(root, result) {
        if(root == null) return null;
        // If the root is not null, that means it has some data
        
        
        // go to the left sub tree recursively
        this.inorder(root.left, result);
        
        // process the root
        result.push(root.data);
        
        // go to the right sub tree recursively    
        this.inorder(root.right, result);
    }


    inorderTraversal() {
        
        let result = [];
        this.inorder(this.root, result);
        return result;
    };

    postorder(root, result) {
        if(root == null) return null;
        // If the root is not null, that means it has some data
        
        // go to the left sub tree recursively
        this.postorder(root.left, result);
        
        // go to the right sub tree recursively    
        this.postorder(root.right, result);
        
        // process the root
        result.push(root.data);
    }
    postorderTraversal() {
        
        let result = [];
        this.postorder(this.root, result);
        return result;
    }

    levelOrderTraversal() {
        return this.levelOrder(this.root);
    }

    levelOrder(root) {
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
                levelArray.push(curr.data);
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


}


class LLNode {
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
            const newNode = new LLNode(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new LLNode(data);
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

const avl = new AVL();
avl.insertInAVL(1);
avl.insertInAVL(2);
avl.insertInAVL(3);
avl.insertInAVL(4);
avl.insertInAVL(5);
avl.insertInAVL(6);
avl.insertInAVL(8);
avl.insertInAVL(9);


const pre = avl.preorderTraversal();
const post = avl.postorderTraversal();
const ino = avl.inorderTraversal();
console.log(pre, post, ino);
console.log(avl.levelOrderTraversal())


