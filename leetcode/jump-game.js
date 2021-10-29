/**
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpRec = function(nums, index) {
    if(index === nums.length - 1){
        return true;
    }
    else if(nums[index] === 0){
        return false;
    }

    var res = false;

    for (let i = 1; i <= nums[index]; i++) {
        if(index+i < nums.length){
            if(canJumpRec(nums, index+i)){
                return true;
            }
        }
    }

    return res;

};
var canJump = function(nums) {
    if(nums[0] === 0 && nums.length > 1){
        return false;
    }
    var arr = (new Array(nums.length)).fill(false);
    arr[0] = true;
    for (let i = 0; i < arr.length; i++) {
        const jumps = nums[i];
        for (let j = 1; j <= jumps; j++){
            if(i+j < arr.length){
                arr[i+j] = arr[i+j-1];
            }
        }
    }

    //console.log(arr[nums.length - 1]);
    return arr[nums.length - 1];
};

canJump([1,0,1,0]);