/**
 * @param {number[]} nums
 * @return {number}
 */

let arr;
let dp;

function f(i) {
    if(i == 0 || i == 1) return 0;
    if(dp[i] != -1) return dp[i];
    if(arr[i] - arr[i-1] != arr[i-1] - arr[i-2]) {
        return dp[i] = 0;
    } else {
        return dp[i] = 1 + f(i-1);
    }
}

var numberOfArithmeticSlices = function(nums) {
    arr = nums;
    dp = Array(5005).fill(-1);
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        ans += f(i);
    }
    return ans;
};