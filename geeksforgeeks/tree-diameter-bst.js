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
const diameter = (root) => {
    if(!root){
        //root.height = 0;
        return 0;
    }

    var ld = diameter(root.left),
    rd = diameter(root.right);

    var lh = !root.left ? 0 : root.left.height,
    rh = !root.right ? 0 : root.right.height;

    root.height = Math.max(lh, rh) + 1;

    console.log(root.data, root.height);

    return Math.max(lh + rh + 1, Math.max(ld, rd));
}

const main = () => {
    var n1 = new Node(1),
    n2 = new Node(2), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5), n6 = new Node(6), n7 = new Node(7);

    n1.left = n2; n1.right = n3; n2.left = n4; n2.right = n5; n5.left = n6; n3.left = n7;
    var d = diameter(n1);
    console.log(d);
}

main();