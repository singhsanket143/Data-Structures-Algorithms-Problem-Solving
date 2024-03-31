/**
 * @param {number[]} nums
 * @return {number}
 */

let arr;
let dp;
function fbu() {
    let n = arr.length
    dp = Array(n);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = {};
    }
    let ans = 0;
    
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            let diff = arr[i] - arr[j];
            if(dp[j][diff]) {
                // whether mapp of index i has diff as the key
                ans += dp[j][diff];
                if(dp[i][diff]) {
                     dp[i][diff] += 1 + dp[j][diff];
                } else {
                     dp[i][diff] = 1 + dp[j][diff];
                }
               
            } else {
                if(dp[i][diff]) {
                     dp[i][diff] += 1
                } else {
                     dp[i][diff] = 1
                }
            }
        }
    }
    
    // console.log(dp);
    
    return ans;
}


var numberOfArithmeticSlices = function(nums) {
    arr = nums;
    return fbu();
};