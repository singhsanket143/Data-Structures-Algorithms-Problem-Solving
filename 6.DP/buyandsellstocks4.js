/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
let p;
let dp;
function f(i, k, on) {
    if(i == p.length) return 0;
    
    if(dp[i][k][on] != -1) return dp[i][k][on];
    
    let ans = Number.MIN_SAFE_INTEGER;
    // ignore 
    ans = Math.max(ans, f(i+1, k, on));
    
    // buy
    if(k > 0 && on == 0) {
        ans = Math.max(ans, -p[i] + f(i+1, k, 1));
    }
    
    // sell
    if(on == 1) {
        ans = Math.max(ans, p[i] + f(i+1, k-1, 0));
    }
    
    return dp[i][k][on] = ans;
}
var maxProfit = function(k, prices) {
    p = prices;
    dp = new Array(1005);
    for(let i = 0; i < 1005; i++) {
        dp[i] = new Array(105);
    }
    for(let i = 0; i < 1005; i++) {
        for(let j = 0; j < 105; j++) {
            dp[i][j] = new Array(2).fill(-1);

        }
    }
    let ans = f(0, k, 0);
    // console.log(dp);
    return ans;
};