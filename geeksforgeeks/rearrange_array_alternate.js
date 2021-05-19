//https://practice.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1#
//https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form-set-2-o1-extra-space/
//https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/
class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        // code here
        let max_index = n-1, min_index = 0, max_element = arr[n-1] + 1;
        for(let i=0; i<n; i++){
            if(i%2==0){
                arr[i] += (arr[max_index]%max_element * max_element);
                max_index--;
            }else {
                arr[i] += (arr[min_index]%max_element * max_element);
                min_index++;
            }
        }
        
        for (let i = 0; i < n; i++){
            arr[i] = Math.floor(arr[i] / max_element);
        }
    }
}