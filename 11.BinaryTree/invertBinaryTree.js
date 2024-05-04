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
 * @return {TreeNode}
 */
function f(root) {
    if(root == null) return;
    // invert the complete tree
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // please go and invert my left sub tree
    f(root.left);
    
    // please go and invert my right subtree
    f(root.right);
    
    
}
var invertTree = function(root) {
    f(root);
    return root;
};