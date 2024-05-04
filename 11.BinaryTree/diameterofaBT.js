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

let ans ;
function f(root) {
    if(root == null) return 0;
    
    let lst = f(root.left);
    let rst = f(root.right);
    
    ans = Math.max(ans, lst + rst + 1);
    
    return 1 + Math.max(lst, rst);
}
var diameterOfBinaryTree = function(root) {
    ans = -1;
    f(root);
    return ans-1;
};
