/* 
https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen
*/
function maxMin(k, arr) {
    // Write your code here
    arr.sort(function(a,b){return a-b;});
    console.log(arr);
    let min = Number.MAX_VALUE;
    for (let i = 0; i <= arr.length - k; i++) {
        if(arr[i+k-1] - arr[i] < min){
            min = arr[i+k-1] - arr[i];
        }
    }
    return min;
}

console.log(maxMin(3, [100,200,300,350, 400, 401, 402]));