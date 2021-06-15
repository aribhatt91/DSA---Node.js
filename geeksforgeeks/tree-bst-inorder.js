/* 
https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/
*/

class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class ListNode {
    constructor(key) {
        this.key = key ? key : -1;
        this.next = null;
    }
}
const inorder = (root, listnode) => {
    if(!root){
        return;
    }
    inorder(root.left, listnode);
    listnode.left = null;
    listnode.right = root;
    listnode = root;
    console.log(listnode.key);
    inorder(root.right, listnode);
}

const main = () => {
    let n4 = new Node(5), 
    n2 = new Node(3), 
    n7 = new Node(7), 
    n1 = new Node(2), 
    n3 = new Node(4), 
    n6 = new Node(6), 
    n9 = new Node(8),
    n10 = new Node(10),
    n11 = new Node(11);

    n4.left = n2; 
    n4.right = n7; 
    n2.left = n1; 
    n2.right = n3; 
    n7.left = n6; 
    n7.right = n9;

    let dummy = new Node(-1),
    ptr = dummy;

    inorder(n4, dummy);

    console.log(ptr);
}

main();