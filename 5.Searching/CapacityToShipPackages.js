/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function canShipWithMidWeightWithinDdays(weights, mid, d) {
    let daysCount = 0;
    let tw = 0;
    for(let i = 0; i < weights.length; i++) {
        if(tw + weights[i] > mid) {
            daysCount++;
            tw = 0;
        }

        tw += weights[i];
    }
    daysCount++;
    return daysCount <= d;
}

var shipWithinDays = function(weights, days) {
    let totalWeights = 0;
    let maxWeight = -1;

    for(let i = 0; i < weights.length ; i++) {
        totalWeights += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let lo = maxWeight, hi = totalWeights;
    let ans = hi;

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(canShipWithMidWeightWithinDdays(weights, mid, days)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return ans;
};