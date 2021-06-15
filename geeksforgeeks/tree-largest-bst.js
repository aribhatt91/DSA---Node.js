/* 
https://practice.geeksforgeeks.org/problems/largest-bst/1
*/

class MinMax {
    constructor(){
        this.max = Number.MIN_VALUE;
        this.min = Number.MAX_VALUE;
        this.size = 0;
        this.isBST = true;
    }
}

class Solution {
    maxBSTUtil(root) {
        if(!root){
            return new MinMax();
        }
        
        let leftBST = this.maxBSTUtil(root.left),
        rightBST = this.maxBSTUtil(root.right);
        let m = new MinMax();
        
    
        if(!leftBST.isBST || !rightBST.isBST || (leftBST.max >= root.key) || (rightBST.min <= root.key)){
            m.isBST = false;
            m.size = Math.max(leftBST.size, rightBST.size);
            //m.max = root.right ? rightBST.max : root.key;
            //m.min = root.left ? leftBST.min : root.key;
            //console.log('notBST -> ', root.key);
            return m;
        }
    
        m.max = root.right ? rightBST.max : root.key;
        m.min = root.left ? leftBST.min : root.key;
        m.isBST = true;
        m.size = leftBST.size + rightBST.size + 1;
        //console.log('BST -> ', root.key, leftBST.max, rightBST.min);
    
        return m;
    }
  	largestBst(root){
  		//code here
  		let sum = this.maxBSTUtil(root);
  		return sum.size;
  	}
}