/* 
https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
*/
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/


    
function sort012(arr, N)
{
    //your code here
    var swap = function(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (let i = 0, j=N-1; i < N; ) {
        if(i > 0){
            if(arr[i] < arr[i-1]){
                swap(arr,i, i-1);
            }
        }
        i++;
    }
    for (let i = N-2, j=N-1; i >= 0; ) {
        if(i > 0){
            if(arr[i+1] < arr[i]){
                swap(arr,i, i+1);
            }
        }
        i--;
    }
}

var arr = [0,1,0,1,2,0,2];

sort012(arr, arr.length);

console.log(arr);


