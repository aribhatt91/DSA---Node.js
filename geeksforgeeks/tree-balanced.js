/**
 * @param {Node} root
 * @returns {boolean}
 * 
*/
//https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1
//https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    
    //Function to check whether a binary tree is balanced or not.
    isBalancedUtil(root, height) {
        if(!root){
            height.height = 0;
            return true;
        }
        let lheight = {}, rheight = {};
        let leftBalanced = this.isBalancedUtil(root.left, lheight),
        rightBalanced = this.isBalancedUtil(root.right, rheight);
        let lh = lheight.height;
        let rh = rheight.height;

        height.height = (lh > rh ? lh : rh) + 1;
        
        if(Math.abs(lh - rh) >=2) {
            return false;
        }

        return leftBalanced & rightBalanced;
    }

    isBalanced(root) {
        let height = {height: 0};
        let res = this.isBalancedUtil(root, height);
        return res;
    }
}