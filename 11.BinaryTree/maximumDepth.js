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
function f(root) {
    if(root == null) {
        // empty subtree
        return 0;
    }
    return 1 + Math.max(f(root.left), f(root.right));
}
var maxDepth = function(root) {
    return f(root);
};