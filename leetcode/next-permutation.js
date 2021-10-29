/**
 * https://leetcode.com/problems/next-permutation/submissions/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    var crest = -1;
    function swap(a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    function reverse(arr){
        var i=0, j=arr.length-1;
        while(i<j){
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            i++; j--;
        }
    }
    function sortPartial(arr, i, j){
        var rem = [];
        for(var k=i; k<arr.length; k++){rem.push(arr[k]);}
        rem.sort(function(a, b){return a-b;});
        for(k=i; k<arr.length; k++){arr[k] = rem[k-i];}
    }
    for(var i=nums.length-2; i>=0; i--){
        if(nums[i] < nums[i+1]){
            crest = i;
            break;
        }
    }
    if(crest === -1){
        crest = 0;
        reverse(nums);
    }else {
        var min = crest+1;
        for(i=crest+1; i<nums.length; i++){
            if(nums[i]>nums[crest] && nums[i]<nums[min]){
                min = i;
            }
        }
        swap(nums, crest, min);
        sortPartial(nums, crest+1, nums.length-1);
    }
    
    
};