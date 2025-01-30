let arr = [3,4,1,5,10,9];

/**
 * if the callback of sort function returns a negative value
 *      - the first argument is put first and then the second argument
 * else if the callback of the sort function returns a positive value
 *      - the second argument is put first and then the first argument
 * 
 */


/**
 * 
 * x = 4
 * y = 5
 * (x, y) => x - y
 * 4 - 5 -> -ve
 * 
 * [4, 5]
 * 
 * 
 * x = 7
 * y = 3
 * (x, y) => x - y
 * 7 - 3 -> +ve
 * 
 * [3, 7]
 */

arr.sort((x, y) => x - y); // increasing


console.log(arr);

/**
 * 
 * x = 4
 * y = 5
 * (x, y) => y - x
 * 5 - 4 -> +ve
 * 
 * [5, 4]
 * 
 * 
 * x = 7
 * y = 3
 * (x, y) => y - x
 * 3 - 7 -> -ve
 * 
 * [7, 3]
 */
arr.sort((x, y) => y - x); // decreasing

console.log(arr);