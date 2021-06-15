/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort(function(a, b){return a - b});
    console.log('sorted', nums);
    var res = [], temp = [];
    for(var i=0; i<nums.length-2; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        if(nums[i] > 0){break;}
        var j = i+1, k = nums.length -1;
        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            if(sum > 0){
                k--;
            }else if(sum < 0){
                j++;
            }else {
                temp.push([nums[i], nums[j], nums[k]]);
                j++; 
                k--;
            }
        }
    }
    var isequal = function(arr1, arr2){
        var res = true;
        if(arr1.length === arr2.length){
            for(var i=0; i<arr2.length; i++){
                if(arr2.indexOf(arr1[i]) === -1 || arr1.indexOf(arr2[i]) === -1){
                    res = false;
                }
            }
        }else {
            res = false;
        }
        return res;
    }
    for(var i=0; i< temp.length; i++){
        var present = false;
        for(var j=0; j<res.length; j++){
            if(res[j] && temp[i] && isequal(temp[i], res[j])){
                present = true;
                break;
            }
        }
        if(!present){
            res.push(temp[i])
        }
    }
    return res;
};