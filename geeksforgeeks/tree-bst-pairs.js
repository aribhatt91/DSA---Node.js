/* 
https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1
*/

class Solution
{
    searchTree(root, value){
        if(!root){
            return false;
        }
        if(root.data === value){
            return true;
        }else if(root.data > value){
            return this.searchTree(root.left, value);
        }else if(root.data <= value){
            return this.searchTree(root.right, value);
        }
        return false;
    }
    countPairsUtil(root1,root2,x){
        if(!root1){
            return 0;
        }
        let m = this.searchTree(root2, x-root1.data);
        
        let l = this.countPairsUtil(root1.left,root2, x),
        r = this.countPairsUtil(root1.right, root2, x);
        
        if(m){
            return r + l + 1;
        }
        
        return r + l;
    }
    countPairs(root1,root2,x){
        this.pairs = [];
        
        return this.countPairsUtil(root1,root2,x);
    }
 
}  