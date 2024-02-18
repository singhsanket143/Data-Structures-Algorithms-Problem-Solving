/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = Array(n); // new empty array of length n
    let left = 0, right = n-1;
    for(let i = n-1; i >= 0; i--) {
        if(nums[left]**2 < nums[right]**2) {
            result[i] = nums[right]**2;
            right--;
        } else {
            result[i] = nums[left]**2;
            left++;
        }
    }
    return result;
};