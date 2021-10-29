/* 
https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
*/
/* 
Given an array of n distinct elements, find the minimum number of swaps required to sort the array.
Examples: 

Input: {4, 3, 2, 1}
Output: 2
Explanation: Swap index 0 with 3 and 1 with 2 to 
              form the sorted array {1, 2, 3, 4}.

Input: {1, 5, 4, 3, 2}
Output: 2
*/

const minSwaps = (arr) => {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    arr.sort((a,b) => a-b);
    let adjList = {};
    for (let i = 0; i < arr.length; i++) {
        if(map[arr[i]] !== i){
            adjList[i] = map[arr[i]];
        }
    }
    
}