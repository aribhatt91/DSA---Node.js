/* 
https://www.geeksforgeeks.org/largest-divisible-pairs-subset/?ref=lbp
*/

/* 
Theory
1. Base case - set has no or just one element, return 0;
2. Else maintain 2 pointers, where i < j
3. If (i < j) && arr[j]%arr[i] === 0 OR reverse, return 1
4. Recurse - include current element and proceed, exclude current element & proceed
*/

const largestDivisible = (arr, i, n) => {
    if(i<0 || n<0){
        return -1;
    }
    if((arr[i] < arr[n-1] && arr[n-1]%arr[i] === 0) || (arr[n-1] < arr[i] && arr[i]%arr[n-1] === 0)) {
        console.log(arr[n-1], arr[i]);
        return 0;
    }
    //let count = (arr[i] < arr[n-1] && arr[n-1]%arr[i] === 0) || (arr[n-1] < arr[i] && arr[i]%arr[n-1] === 0) ? 1 : 0;
    return 1 + Math.max(largestDivisible(arr, i-1, n), largestDivisible(arr, i-1, n-1));
}

const largestDivisibleDp = (arr, n) => {
    if(arr.length === 0){
        return;
    }
    arr.sort();
    let dp = new Array(n);
    dp[n-1] = 1;

    for (let i = n-2; i >=0; i--) {
        let max = 0;
        for (let j = i+1; j < n; j++) {
            if(arr[j]%arr[i] === 0 || arr[i]%arr[j] === 0){
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = 1+max;
    }
    console.log(dp);
    return Math.max(...dp);
}

const main = () => {
    let arr = [1, 3, 6, 13, 17, 18], n = arr.length;
    console.log(largestDivisibleDp(arr, n));
}

main();