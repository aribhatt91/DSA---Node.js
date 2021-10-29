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

/* Counting sort */
    
function sort012(arr, N)
{
    //your code here
    var ones =0, twos=0,zeroes=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            zeroes++;
        }else if(arr[i] === 1){
            ones++;
        }else if(arr[i] === 2){
            twos++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(i<zeroes){
            arr[i] = 0;
        }else if(i < (zeroes + ones)){
            arr[i] = 1;
        }else {
            arr[i] = 2;
        }
        
    }
}

var arr = [0,1,0,1,2,0,2];

sort012(arr, arr.length);

console.log(arr);


