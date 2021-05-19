//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
/* 
[[1,2,3],[4,5,6],[7,8,9]]
*/
function hourglassSum(arr) {
    // Write your code here
    let MAX = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length - 1; i++) {
        const row = arr[i];
        for (let j = 1; j < row.length - 1; j++) {
            const sum = arr[i][j] + arr[i-1][j] + arr[i-1][j-1] + arr[i-1][j+1] + arr[i+1][j-1]  + arr[i+1][j] + arr[i+1][j+1];
            if(MAX < sum){
                MAX = sum;
            }
        }
    }
    return MAX;
}