/* 
https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1/?track=amazon-arrays&batchId=192
Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

https://www.geeksforgeeks.org/trapping-rain-water/
*/

const trappingWater = (arr, N) => {

    let max_bounds_left = [], max_bounds_right = [];
    max_bounds_left[0] = 0; 
    max_bounds_right[N-1] = arr[N-1];
    let max_left = arr[0];
    let max_right = arr[N-1];


    for (let i = 1; i < N-1; i++) {
        max_bounds_left[i] = max_left;
        if(arr[i] > max_left){
            max_left = arr[i];
        }
    }
    for (let i = N-2; i >= 0; i--) {
        max_bounds_right[i] = max_right;
        if(arr[i] > max_right){
            max_right = arr[i];
        }
    }
    let res = 0;
    console.log(max_bounds_left);
    console.log(max_bounds_right);
    for (let i = 1; i < N-1; i++) {
        if(arr[i] < Math.min(max_bounds_left[i], max_bounds_right[i])){
            res += (Math.min(max_bounds_left[i], max_bounds_right[i]) - arr[i]);
        }
    }
    return res;
}

const main = () => {
    console.log(trappingWater([6,9,9], 3));
}
main();