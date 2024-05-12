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
 * @return {number}
 */

let mpTrue;
let mpFalse 

function f(root, isPR) {
    if(root == null) return 0;

    
    if(isPR && mpTrue.get(root)) {
        // if dp has the state stored for (root, true)
        return mpTrue.get(root);
    }
    
    if(!isPR && mpFalse.get(root)) {
        //  if dp has the state stored for (root, false)
        return mpFalse.get(root);
    }
    
    if(!isPR) {
        // if the parent is not robber
        const leave = f(root.left, false) + f(root.right, false); // we can leave curr
        const take = root.val + f(root.left, true) + f(root.right, true); // we can rob curr 
        
        const ans = Math.max(leave, take); // we will take the max choice
        
        mpFalse.set(root, ans); // store (root, false) in dp
        
        return ans;
    } else {
        // parent is robbed
        const leave = f(root.left, false) + f(root.right, false); // leave the curr
        
        const ans = leave; 
        
        mpTrue.set(root, ans);// store (root, true) in dp
        
        return ans;
    }
}

var rob = function(root) {
    mpTrue = new Map();
    mpFalse = new Map();
    
    return f(root, false);
};