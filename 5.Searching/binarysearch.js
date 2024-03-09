/**
 * 
 * @param {The given input array inside which we need to find an element} arr 
 * @param {x is the element expected to be found} x 
 */
function binarySearch(arr, x) {
    let n = arr.length;
    // declare the search space
    let lo = 0, hi = n-1;

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] == x) {
            // we found the index at which x is present
            return mid;
        } else if(arr[mid] < x) {
            // we need to discard the left half
            lo = mid + 1;
        } else {
            // we need to discard the right half
            hi = mid - 1;
        }
    }
    // if the loop ends and we never returned in the loop, means element is not present
    return -1;
}

let arr = [-6, 1, 4, 7, 8, 9, 19, 22, 34]
console.log(binarySearch(arr, 21));