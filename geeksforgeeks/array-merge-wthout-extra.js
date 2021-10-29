/* 
https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1/?track=md-arrays&batchId=144#
*/
//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} N
 * @param {number} M
 * @returns {number[]}
*/

class Solution {
    
    merge(arr1, arr2, N, M)
    {

        
        for (let i = m-1; i > 0; i--) {
            var j;
            var max_el = arr1[n-1];
            for (let j = n-2; j > 0 && arr1[j] > arr2[i]; j--) {
                arr1[j+1] = arr[j];
            }
            if(j !== n-2 && max_el > arr2[i]){
                arr1[j+1] = arr2[i];
                arr2[i] = max_el;
            }
            
        }
        
        return arr1.concat(arr2);
    }
}
/*
i=0;j=0
[1,3,5,7]
[0,2,6,8,9]

[0,3,5,7] 
[1,2,6,8,9]
i=1, j=0

[0,1,5,7] 
[3,2,6,8,9] => [2,3,6,8,9]
i=2; j=0

[0,1,3,7] 
[5,2,6,8,9]
i=2, j=0

[0,1,3,7] 
[5,2,6,8,9]
i=2, j=1

[0,1,2,7] 
[5,3,6,8,9]
i=3, j=1

[0,1,2,3] 
[5,7,6,8,9]
i=3, j=1*/
