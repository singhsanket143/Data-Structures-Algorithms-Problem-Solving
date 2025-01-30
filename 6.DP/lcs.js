/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function f(s1, s2, i, j) {
    if(i == -1 || j == -1) return 0;
    // TODO: Integrate dp with this recursive solution
    if(s1[i] == s2[j]) {
        return 1 + f(s1, s2, i-1, j-1);
    } else {
        return Math.max(f(s1, s2, i-1, j), f(s1, s2, i, j-1));
    }
}
var longestCommonSubsequence = function(text1, text2) {
    
    return f(text1, text2, text1.length -1, text2.length-1);
};