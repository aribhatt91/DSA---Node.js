// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
//https://practice.geeksforgeeks.org/problems/fixed-two-nodes-of-a-bst/1
//https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/
module.exports = { 
    //param A : root node of tree
    //return a array of integers
       recoverTree : function(A){
           let res = [], arr = [];
           var prev, first, middle, last;
           
           
           
           function checkBst(root){
               if(!root){return;}
               
               checkBst(root.left);
               if(prev && root.data < prev.data){
                   if(!first){
                       first = prev;
                       middle = root;
                   }else {
                       last = root;
                   }
               }
               prev = root;
               checkBst(root.right);
           }
           
           checkBst(A);
           if(first && last){
               res.push(first.data);
               res.push(last.data);
           }else if(first && middle){
               res.push(first.data);
               res.push(middle.data);
           }
           /*
           const inorder = (node) => {
               if(!node){return}
               inorder(node.left);
               arr.push(node.data);
               inorder(node.right);
           }
           inorder(A);
           for(let i=1; i<arr.length; i++){
               if(arr[i] < arr[i-1]){
                   res.push(i);
               }
           }
           if(res.length === 1){
               var i = res[0];
               res = [arr[i-1], arr[i]];
           }else {
                var i = res[0];
                res = [arr[i-1], res[1]];
           }
           */
           res.sort((a,b)=>a-b);
           return res;
       }
   };
   