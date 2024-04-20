/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const ans = []; // this array can work as stack
    let i = 1;
    for(const idx in target) {
        const element = target[idx];
        while(i < element) {
            //console.log(i);
            ans.push("Push");
            ans.push("Pop");
            i++;
        }
        ans.push("Push");
        i++;
    }
    return ans;
};

// [1,2,3]
// [1, 3]
// ["push", "push", "pop", "push"]

// n = 4 , [1..4] , [1,2,3,4]

// ["push", "push"]