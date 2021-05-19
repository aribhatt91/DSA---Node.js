//https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
//https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
        let max_so_far = 0, max = Number.MIN_SAFE_INTEGER;

        for (let index = 0; index < N; index++) {
            max_so_far += arr[index];
            if(max_so_far > max){
                max = max_so_far;
            }
            if(max_so_far < 0){
                max_so_far = 0;
            }
        }
        return max;
    } 
}