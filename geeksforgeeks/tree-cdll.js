/**
 * @param {Node} root
 * @returns {Node}
*/

/*
https://practice.geeksforgeeks.org/problems/binary-tree-to-cdll/1/?category[]=Tree&category[]=Tree&company[]=Amazon&company[]=Amazon&page=1&query=category[]Treecompany[]Amazonpage1company[]Amazoncategory[]Tree
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution
{
    //Function to convert binary tree into circular doubly linked list.
    inorder(root, list) {
        if(!root){
            return;
        }

    }
    bTreeToCList(root)
    {
        //your code here
        if(!root || (!root.left && !root.right)){
            return;
        }

        this.bTreeToCList(root.left);
        let left = root.left, right = root.right;
        if(left){
            left.left = root;
            root.right = left;
        }
        if(right){
            
        }
        root.left
    }
}