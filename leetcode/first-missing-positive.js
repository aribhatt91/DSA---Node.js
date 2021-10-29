/**
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    var N = nums.length;
    var swap = function(arr, m, n){
        var temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    };
    for(var i=0; i<N; i++){
        while(nums[i] > 0 && nums[i] <= N && nums[i] !== nums[nums[i]-1]){
            console.log(nums[i], i);
            swap(nums, nums[i]-1, i);
        }
    }
    
    for(i=0; i<N; i++){
        if(nums[i] !== i+1){
            return i+1;
        }
    }
    return N+1;
    
};

/* var firstMissingPositive = function(nums) {
    var N = nums.length;
    for(var i=0; i<N; i++){
        if(nums[i] <= 0 || nums[i] > N){
            nums[i] = N+1;
        }else{
            nums[nums[i]-1] *= -1; 
        }
    }
    
    for(var i=0; i<N; i++){
        if(nums[i] !== i+1){
            return i+1;
        }
    }
    return N+1;
    
}; */

console.log(firstMissingPositive([1,1]));