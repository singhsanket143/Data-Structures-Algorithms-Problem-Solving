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
function inorder(root) {
    if(root == null) return null;
    // If the root is not null, that means it has some data
    
    
    // go to the left sub tree recursively
    inorder(root.left);
    
    // process the root
    result.push(root.val);
    
    // go to the right sub tree recursively    
    inorder(root.right);
}


var inorderTraversal = function(root) {
    
    result = [];
    inorder(root);
    return result;
};