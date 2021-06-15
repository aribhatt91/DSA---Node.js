/* 
https://leetcode.com/problems/partition-equal-subset-sum/

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canPartition = function(nums) {
    nums.sort();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if(sum%2 !== 0 || nums.length === 1){

        return false;
    }
    sum = sum/2;
    var recurse = (arr, sum, n) => {
        if(n-1 < 0 || sum < 0){
            return false;
        }
        if(sum === arr[n-1]){
            return true;
        }
        return (recurse(arr, sum, n-1) || recurse(arr, sum - arr[n-1], n-1));
    };
    //return recurse(nums, sum, nums.length);
    for (let i = 1; i < nums.length; i++) {
        //nums[i] += nums[i-1];   
    }
    var dp = [];
    for (let i = 0; i <= nums.length; i++) {
        const row = Array(sum+1);
        dp.push(row);
    }

    //console.log(dp);

    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            if(i===0 && j===0){
                dp[i][j] = true;
            }if(i===0 || j===0){
                dp[i][j] = false;
            }else if(i > 0 && j > 0){
                if(nums[i-1] > j){
                    dp[i][j] = false;
                }if(nums[i-1] === j){
                    dp[i][j] = true;
                }else {
                    dp[i][j] = dp[i-1][j-nums[i-1]] || dp[i-1][j];
                }
            }
        }
    }
    //console.log(dp);
    for (let i = 0; i <= nums.length; i++) {
        console.log(nums[i-1],' - ', dp[i]);
    }

    return dp[nums.length][sum];
};

const main = () => {
    console.log(canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97]));
};
main();

//[1,5,11,5]