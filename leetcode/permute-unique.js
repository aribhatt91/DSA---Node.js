/**
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(arr){
    var result = [];
    var set = new Set();
    function swap(a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    function helper(arr, index) {
        if(arr.length === index){
            /* Copy array, else the response will be same as input array becasue of pass-by-reference */
            set.add(arr.slice().join('-'));
            return;
        }

        for (let i = index; i < arr.length; i++) {
            swap(arr, index, i);
            helper(arr, index+1);
            swap(arr, index, i);
        }
    }
    helper(arr, 0);
    result = (Array.from(set)).map(function(a) {
        return a.split('-').map(function(el){
            return Number(el);
        });
    });
    return result;    
};

var permuteUnique = function(arr){
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
        var set = new Set();
        for (let i = index; i < arr.length; i++) {
            if(set.has(arr[i])){
                continue;
            }
            set.add(arr[i]);
            swap(arr, index, i);
            helper(arr, index+1);
            swap(arr, index, i);
        }
    }
    helper(arr, 0);
    return result;    
};