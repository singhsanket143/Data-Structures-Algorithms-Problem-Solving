/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function canEatAllBananasInMidSpeed(piles, h, mid) {
    let totalHoursByKoko = 0;
    for(let i = 0; i < piles.length; i++) {
        totalHoursByKoko += Math.ceil(piles[i] / mid); // total time to finish ith pile
    }

    return totalHoursByKoko <= h;
}

var minEatingSpeed = function(piles, h) {
    let lo = 1;
    let hi = Math.max(...piles); // O(n)
    let ans = 1;

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if(canEatAllBananasInMidSpeed(piles, h, mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }


    }
    return ans;
};