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
 * @return {string}
 */

function f(root) {
    if(root == null) return "";
    
    const left = f(root.left);
    const right = f(root.right);
    
    
    if(left == "" && right == "") {
        return `${root.val}`;
    } else if(left == "") {
        return `${root.val}()(${right})`;
    } else if(right == "") {
        return `${root.val}(${left})`;
    } else {
        return `${root.val}(${left})(${right})`;
    }
}
var tree2str = function(root) {
    return f(root);
};

// 2(4)