/* 

*/

/* 
https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
*/
class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root)
    {
        //your code here
        return this.isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE)
        
    }
    isBSTUtil(root, min, max) {
        if(!root){return true}
        //console.log(root.data, min, max);
        if(root.data < min || root.data > max){
            //console.log('ret false', root.data, min, max);
            return false;
        }
        
        return (this.isBSTUtil(root.left, min, (root.data-1)) && this.isBSTUtil(root.right, (root.data+1), max));
    }
}
}
