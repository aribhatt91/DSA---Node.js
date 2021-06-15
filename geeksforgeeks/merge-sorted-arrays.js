/* 
https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
*/

class Solution {
    //Function to merge the arrays.
    merge(arr1, arr2, n, m)
    {
        //your code here
        for (let i = m-1; i >= 0; i--) {
            let j, last = arr1[n-1];
            for (j = n-2; j >= 0 && arr1[j] > arr2[i]; j--){
                arr1[j+1] = arr[j];
            }
            if(j !== n-2 || last > arr2[i]) {
                arr1[j+1] = arr2[i];
                arr2[i] = last;
            }
        }
    }
}

/* 
Solution - 2
https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/
*/

    function merge(arr1, arr2, n, m)
    {
        //your code here
        let i = 0, j=0, k = n-1;
        
        while(i<=k && j< m){
            if(arr1[i] < arr2[j]){
                i++;
            }else {
                let temp = arr1[k];
                arr1[k] = arr2[j];
                arr2[j] = temp;
                j++;
                k--;
            }
        }
        arr1.sort((a,b)=>(a-b));
        arr2.sort((a,b)=>(a-b));
    }

    console.log(merge)

