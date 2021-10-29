/**
 * https://leetcode.com/problems/permutations/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(arr) {
    var result = [];
    function swap(a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    function helper(arr, index) {
        if(arr.length === index){
            /* Copy array, else the response will be same as input array becasue of pass-by-reference */
            result.push(arr.slice());
            return;
        }

        for (let i = index; i < arr.length; i++) {
            swap(arr, index, i);
            helper(arr, index+1);
            swap(arr, index, i);
        }
    }
    helper(arr, 0);
    return result;
};