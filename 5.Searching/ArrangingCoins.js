/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let lo = 1;
    let hi = n;
    let ans = 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let value = Math.floor(((mid)*(mid+1))/2);
        // if(value == n) 
        if(value <= n) {
            ans = mid;
            lo = mid+1;
        } else {
            hi = mid-1;
        }
    }
    return ans;
};