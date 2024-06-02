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
        alpha.height = Math.max(alpha.left.height, alpha.right.height) + 1;
        beta.height = Math.max(beta.left.height, beta.right.height) + 1;

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
        alpha.height = Math.max(alpha.left.height, alpha.right.height) + 1;
        beta.height = Math.max(beta.left.height, beta.right.height) + 1;
        // return the new root
        return beta;
    }
}