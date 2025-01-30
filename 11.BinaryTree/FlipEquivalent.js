/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function f(root1, root2) {
    if(root1 == null && root2 == null) return true;
    
    if(root1 == null || root2 == null) {
        // one of them is null
        return false;
    }
    if(root1.val != root2.val) {
        return false;
    }
    
    return (f(root1.left, root2.left) && f(root1.right, root2.right)) || (f(root1.left, root2.right) && f(root1.right, root2.left));
}
var flipEquiv = function (root1, root2) {
    return f(root1, root2);
};