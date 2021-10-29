/*
https://practice.geeksforgeeks.org/problems/maximum-path-sum/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
*/

class Solution {
    maxPathSumUtil(root, maxsum){
        //code here
        if(!root){return 0;}
        let max_left = this.maxPathSumUtil(root.left, maxsum),
        max_right = this.maxPathSumUtil(root.right, maxsum);
        let max_single = Math.max(Math.max(max_left, max_right) + root.data, root.data);
        let max_top = Math.max(max_single, max_left + max_right + root.data);

        maxsum.val = Math.max(maxsum.val, max_top);

        return max_single;
    }
    maxPathSum(root){
        //code here
        if(!root){return 0;}
        this.maxsum = {
            val: Number.MIN_VALUE
        }
        let res = this.maxPathSumUtil(root, this.maxsum);
        return res;
    }
}

s = new Solution();