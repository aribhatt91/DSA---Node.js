/* 
https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1#
*/
class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root)
    {
        let q = [],//new Q(), 
        stk = [];
        q.push(root);
        let zig = true, res = [];
    
        while(q.length > 0 || stk.length > 0){
            while(q.length > 0){
                let node = q.pop();
                res.push(node.data);
                if(node.left){
                    stk.push(node.left);
                }
                if(node.right){
                    stk.push(node.right);
                }
            }
            while(stk.length > 0){
                let node = stk.pop();
                res.push(node.data);
                
                if(node.right){
                    q.push(node.right);
                }
                if(node.left){
                    q.push(node.left);
                }
            }
        }
        return res;
    }
}