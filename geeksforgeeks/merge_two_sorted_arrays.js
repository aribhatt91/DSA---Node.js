//https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1#

class Solution {
    //Function to merge the arrays.
    merge(arr1, arr2, m,n)
    {
        // Iterate through all elements of ar2[] starting from
        // the last element
        for (let i=n-1; i>=0; i--)
        {
            /* Find the smallest element greater than ar2[i]. Move all
               elements one position ahead till the smallest greater
               element is not found */
            let j, last = arr1[m-1];
            for (j=m-2; j >= 0 && arr1[j] > arr2[i]; j--)
                arr1[j+1] = arr1[j];
      
            // If there was a greater element
            if (j != m-2 || last > arr2[i])
            {
                arr1[j+1] = arr2[i];
                arr2[i] = last;
            }
        }
    }
}