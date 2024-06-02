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
}