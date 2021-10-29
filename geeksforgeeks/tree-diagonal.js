/*
https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1#
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number[]}
*/
class Solution {
    diagonal(root) {
      function Queue(){
          this.arr = [];
          this.enq = function(item){
              this.arr.push(item);
          };
          this.deq = function(){
              return this.arr.length > 0 ? this.arr.splice(0,1)[0] : null;
          };
          this.isEmpty = function(){
              return this.arr.length === 0;
          };
      }
      var q = new Queue();
      q.enq(root);
      var res = [];
  
      while(!q.isEmpty()) {
          var n = q.deq();
          while (n) {
              res.push(n.key);
              
              if(n.left){
                  q.enq(n.left);
              }
  
              n = n.right;
          }
      }
      return res;
  }
}

class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}

var n1 = new Node(1), n2 = new Node(15), n3 = new Node(2);
n1.left = n2;
n1.right = n3;

console.log(diagonalTraversal(n1));