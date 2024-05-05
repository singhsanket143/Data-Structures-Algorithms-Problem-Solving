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
 * @return {TreeNode[]}
 */
let mp = {};
let result = [];
function f(root) {
    if(root == null) return '#';
    
    const left = f(root.left);
    const right = f(root.right);
    
    const s = "" + root.val + "," + left + "," + right;
    if(!mp[s]) {
        mp[s] = 1
    } else {
        if(mp[s] == 1) {
            // this is the first time we detected a duplicate
            result.push(root);
        }
        mp[s] += 1;
    }
    return s;
}
var findDuplicateSubtrees = function(root) {
    mp = {};
    result = [];
    f(root);
    return result;
};