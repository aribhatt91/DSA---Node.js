/*
https://practice.geeksforgeeks.org/problems/bst-to-greater-sum-tree/1/?company[]=Amazon&company[]=Amazon&difficulty[]=1&page=1&category[]=Tree&query=company[]Amazondifficulty[]1page1company[]Amazoncategory[]Tree

*/

/**
 * @param {Node} root
*/
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}

let sum = 0;
class Solution {
    transformTree(root){
        //code here
        if(!root){
            return;
        }
        this.transformTree(root.right);
        sum = sum + root.data;
        root.data = sum - root.data;
        this.transformTree(root.left);
    }
}

const main = () => {
    let n1 = new Node(2), 
    n2 = new Node(1), 
    n3 = new Node(6), 
    n4 = new Node(3), 
    n5 = new Node(7);

    n1.left = n2;
    n1.right = n3;
    n3.left = n4;
    n3.right = n5;
    var s = new Solution();
    sum = 0;
    console.log(n1);
    s.transformTree(n1);
    console.log(n1);
}

main();