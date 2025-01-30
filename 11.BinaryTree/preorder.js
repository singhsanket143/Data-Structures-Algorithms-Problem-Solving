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
 * @return {number[]}
 */

let result;
function preorder(root) {
    if(root == null) return null;
    // If th›e root is not null, that means it has some data
    // process the root
    result.push(root.val);
    
    // go to the left sub tree recursively
    preorder(root.left);
    
    // go to the right sub tree recursively    
    preorder(root.right);
}


var preorderTraversal = function(root) {
    
    result = [];
    preorder(root);
    return result;
};