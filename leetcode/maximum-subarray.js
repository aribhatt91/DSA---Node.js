/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var max = 0, max_so_far = 0;
    for(var i=0; i<nums.length; i++){
        max_so_far += nums[i];
        max_so_far = max_so_far < 0 ? 0 : max_so_far;
        max = max_so_far > max ? max_so_far : max;
    }
    /* Edge case - possible all are negative */
    if(max === 0){
        var min_max = Number.MIN_SAFE_INTEGER;
        for(var i=0; i<nums.length; i++){
            if(nums[i] > min_max){
                min_max = nums[i];
            }
        }
        max = min_max;
    }
    return max;
};