/*
https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1/?category[]=Tree&category[]=Tree&company[]=Amazon&company[]=Amazon&difficulty[]=1&page=1&query=category[]Treecompany[]Amazondifficulty[]1page1company[]Amazoncategory[]Tree#
https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/
*/
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}


class Solution {
    getLeaves(root) {
        if(!root){return;}
        this.getLeaves(root.left);
        if(!root.left && !root.right){
            this.leaves.push(root.key);
        }
        this.getLeaves(root.right);
    }
    printBoundary(root){
        //code here
        let left = [], right = [], visited = new Map();
        this.leaves = [];

        let lr = root.left, rr = root.right;
        if(!lr){lr = root.right;}
        if(!rr){rr = root.left;}
        while(lr){
            if(!visited.has(lr)){
                left.push(lr.key);
            }
            visited.set(lr, lr.key);
            if(lr.left){
                lr = lr.left;
            }else {
                lr = lr.right;
            }
        }
        while(rr){
            if(!visited.has(rr)){
                right.push(rr.key);
            }
            visited.set(rr, rr.key);
            
            if(rr.right){
                rr = rr.right;
            }
            else{
                rr = rr.left;
            }
        }
        this.getLeaves(root);
        console.log(left, this.leaves, right);

        let res = [].concat([root.key]).concat(left);
        this.leaves = this.leaves.slice(1, this.leaves.length-1);
        res = res.concat(this.leaves);
        for (let i = right.length-1; i >=0 ; i--) {
            res.push(right[i]);
        }
        console.log(res);
        return res;

    }
}

const main = () => {
    let n4 = new Node(4), 
    n2 = new Node(2), 
    n7 = new Node(7), 
    n1 = new Node(1), 
    n3 = new Node(3), 
    n6 = new Node(6), 
    n9 = new Node(9),
    n10 = new Node(10),
    n11 = new Node(11);

    n4.left = n2; 
    n4.right = n7; 
    n2.left = n1; 
    n2.right = n3; 
    n7.left = n6; 
    n7.right = n9;
    n9.left = n10;
    n10.right = n11;
    let s = new Solution();
    s.printBoundary(n4);
}

main();
