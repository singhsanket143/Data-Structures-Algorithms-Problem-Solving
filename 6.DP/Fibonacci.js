/**
 * @param {number} n
 * @return {number}
 */

let dp;

function f(n) {
    if(n == 0 || n == 1) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
}

var fib = function(n) {
    dp = Array(100005).fill(-1);
    return f(n);
};