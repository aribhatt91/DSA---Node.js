//https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
//https://www.youtube.com/watch?v=n9F9wQD3Mhc
//https://www.youtube.com/watch?v=6w60Zi1NtL8
function maxSubsetSum(arr) {
    if(arr.length === 0 || arr.length === 1 && arr[0] < 0){return 0;}
    if(arr.length === 1){return arr[0];}

    let max_sum = 0, x = Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if(i == 0){
            x[0] = arr[0];
        }else if(i === 1){
            x[1] = Math.max(x[0], arr[1]);
        }else {
            x[i] = Math.max(arr[i], (arr[i] + x[i-2]), x[i-1]);
        }
    }
    max_sum = x[arr.length - 1];
    return max_sum > 0 ? max_sum : 0;
}