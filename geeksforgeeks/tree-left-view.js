/* 
https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon
Given a Binary Tree, print Left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from Left side. The task is to complete the function leftView(), which accepts root of the tree as argument.

Left view of following tree is 1 2 4 8.

          1
       /     \
     2        3
   /     \    /    \
  4     5   6    7
   \
     8   
*/

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
    leftView(root)
    {
        //your code here
        let arr_left = [], arr_right = [];
        if(!root || !root.data){
            return [];
        }
        arr_left.push(root.data);
        arr_right.push(root.data);
        let ltree = root.left, rtree = root.right;
        if(ltree){
            while(ltree){
                arr_left.push(ltree.data);
                if(ltree.left){
                    ltree = ltree.left;
                }else {
                    ltree = ltree.right;
                }
            }
        }
        if(rtree){
            while(rtree){
                arr_right.push(rtree.data);
                if(rtree.left){
                    rtree = rtree.left;
                }else {
                    rtree = rtree.right;
                }
            }
        }
        console.log(arr_left, arr_right);
        if(arr_right.length > arr_left.length){
            for (let i = arr_left.length; i < arr_right.length; i++) {
                arr_left.push(arr_right[i]);
            }
        }
        
        return arr_left;
    }
}