function upperBound(arr, x) {
    let n = arr.length;
    let lo = 0, hi = n-1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] <= x) {
            lo = mid + 1; // discard the left half
        } else { // arr[mid] > x
            ans = mid; // we got a candidate ans which is >= x and we can find btr on left side
            hi = mid - 1;
        }
    }
    return ans;
}


let arr = [1,1,2,2,2,3,4,4,4,5,7,8,9];

console.log(upperBound(arr, 3));