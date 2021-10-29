/**
import Queue from './../data-sructures/Queue';
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 */
 class mQueue {
    constructor(){
        this.q = [];
    }
    enq(node) {
        this.q.push(node);
    }
    dq(){
        if(this.q.length > 0){
            return this.q.splice(0,1)[0];
        }
        return null;
    }
    isEmpty(){
        return this.q.length === 0;
    }
}

var preorder = function(root, queue){
    if(!root){
        return;
    }
    queue.enq(root);
    if(root.left){
        preorder(root.left, queue);
    }
    if(root.right){
        preorder(root.right, queue);
    }
}
 var flatten = function(root) {
    var queue = new mQueue();
    preorder(root, queue); 
    var node = null;
    while(!queue.isEmpty()){
        var dqed = queue.dq();
        if(node){
            node.right = dqed;
            node.left = null;
        }
        node = dqed;
    }
};

/* 
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/1228383/Easy-to-understand-in-C%2B%2B
*/
var flatten = function(root) {
    if(!root || (!root.left && !root.right)){return;}
    if(root.left){
        flatten(root.left);
        var temp = root.right;
        root.right = root.left;
        root.left = null;
        var temp2 = root.right;
        while(temp2.right){
            temp2 = temp2.right;
        }
        temp2.right = temp;
    }
    flatten(root.right);
};