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
var widthOfBinaryTree = function(root) {
    let qu = [];
 
    let ans = 0n;
 
    let left = BigInt(0);
    let right = null;
    let last = null;
 
    qu.push([root, 0n]);
    qu.push(null);
 
    while(qu.length > 0){
 
        let element = qu.shift();
 
        if(element == null){
            right = BigInt(last[1]);
            // ans = Math.max(ans, right - left + 1n);
            if(ans < right - left + 1n) {
                ans = right - left + 1n;
            }
 
            if(qu.length != 0){
                qu.push(null);
                left = BigInt(qu[0][1]);
            }
            // console.log(left, right,right - left + 1n, ans )
        }else{
            last = element;
 
            if(element[0].left){
                qu.push([element[0].left, BigInt(element[1] * 2n + 1n)]);
            }
 
            if(element[0].right){
                qu.push([element[0].right, BigInt(element[1] * 2n + 2n)]);
            }
        }
    }
    return ans;
};