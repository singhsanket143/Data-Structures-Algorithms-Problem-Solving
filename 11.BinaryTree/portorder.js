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
function postorder(root) {
    if(root == null) return null;
    // If the root is not null, that means it has some data
    
    // go to the left sub tree recursively
    postorder(root.left);
    
    // go to the right sub tree recursively    
    postorder(root.right);
    
    // process the root
    result.push(root.val);
}
var postorderTraversal = function(root) {
     
    result = [];
    postorder(root);
    return result;
};