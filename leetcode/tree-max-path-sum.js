/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var MAX_SO_FAR = Number.MIN_SAFE_INTEGER;
var maxPathSum = function(root) {
    MAX_SO_FAR = Number.MIN_SAFE_INTEGER;
    let max = computeMaxSum(root);
    return Math.max(max, MAX_SO_FAR);
};

var computeMaxSum = function(root) {
    if(!root){
        return 0;
    }
    var lsum = computeMaxSum(root.left),
    rsum = computeMaxSum(root.right);
    lsum = lsum > -1 ? lsum : 0;
    rsum = rsum > -1 ? rsum : 0;
    var sum = root.val + lsum + rsum;
    if(sum > MAX_SO_FAR){
        MAX_SO_FAR = sum;
    }
    return root.val + Math.max(lsum, rsum);
}

class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

const main = () => {
    let n1 = new Node(-10), n2 = new Node(9), n3 = new Node(20), n4 = new Node(15), n5 = new Node(7);

    n1.left = n2; n1.right = n3;
    n3.left = n4; n3.right = n5;

    let max = computeMaxSum(n1);
    console.log(n1, max, MAX_SO_FAR);
}

main();