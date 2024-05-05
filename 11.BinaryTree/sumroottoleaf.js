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
let ans;
function f(root,num) {
    if(root.left == null && root.right == null) {
        ans += (10*num + root.val);
        return;
    }
    let n = 10*num + root.val;
    if(root.left) {
        f(root.left, n);
    }
    if(root.right) {
        f(root.right, n);
    }
}
var sumNumbers = function(root) {
    ans = 0;
    f(root, 0);
    return ans;
};