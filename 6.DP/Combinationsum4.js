/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let arr;
let dp;
function f(target) {
    if(target == 0) return 1;
    if(dp[target] != -1) return dp[target];
    let n = arr.length;

    let result = 0;

    for(let k = 0; k < n; k++) {
        if(target - arr[k] >= 0) {
            result += f(target - arr[k]);
        }
    }

    return  dp[target] = result;
}

var combinationSum4 = function(nums, target) {
    arr = nums;
    dp = Array(1005).fill(-1);
    return f(target);
};