/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

let c; // global coins array
let dp;
function f(amount) {
    if(amount < 0) return Number.MAX_SAFE_INTEGER; // if amt is less than 0 then its not possible
    if(amount == 0) return 0; // if amt is 0, give nothing
    if(dp[amount] != -1) return dp[amount];
    let ans = Number.MAX_SAFE_INTEGER;
    let n = c.length; 
    for(let i = 0; i < n; i++) { // i -> [0, n-1]
        if(amount >= c[i]) {
            ans = Math.min(ans, f(amount-c[i]));
        }
    }

    // if ans is still Integer.MAX_VALUE, then this amount is not possible
    if(ans == Number.MAX_SAFE_INTEGER) {
        return dp[amount] = Number.MAX_SAFE_INTEGER;
    }
    return dp[amount] = 1 + ans;

}

var coinChange = function(coins, amount) {
    c = coins;
    dp = Array(10005).fill(-1);
    let ans = f(amount);
    return (ans == Number.MAX_SAFE_INTEGER) ? -1 : ans;
};