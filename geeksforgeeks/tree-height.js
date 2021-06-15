/* 
Diameter of a tree is the longest path between two leaves in a tree
Dynamic programming problem

Hypotheisis
1. Find height of left and right subtree 
2. The longest path may either be a sum of left, right and the node itself
3. Or it may be the longest of (left and right subtree heights) and the parent -> recursively
*/

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }   
}

/* Time complexity: O(n) */
const height = (root) => {
    if(!root){
        //root.height = 0;
        return 0;
    }

    var lh = height(root.left),
    rh = height(root.right);

    return Math.max(lh, rh) + 1;
}

const main = () => {
    var n1 = new Node(1),
    n2 = new Node(2), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5), n6 = new Node(6), n7 = new Node(7);

    n1.left = n2; n1.right = n3; n2.left = n4; n2.right = n5; n5.left = n6; n3.left = n7;
    var d = height(n1);
    console.log(d);
}

main();