class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }   
}
/* 
Find lowest common ancestor in a binary search tree
Time Complexity: O(h).
The Time Complexity of the above solution is O(h), where h is the height of the tree.
https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/?ref=leftbar-rightbar
*/
const lca = (root, node1, node2) => {
    if(root.data === node1.data || root.data === node2.data){
        return root;
    }
    while(!(node1.data < root.data && node2.data > root.data)){
        if(node1.data > root.data){
            root = root.right;
        }else if(node2.data < root.data){
            root = root.left;
        }
    }
    return root;
}

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

/* LCA in a Binary Tree (Not BST) */
const lcat = (root, node1, node2) => {
    let memo = {},//[], 
    q = new mQueue(), n1 = -1, n2 = -1, count = 0;
    q.enq(root);

    while(!q.isEmpty()){
        let node = q.dq();
        
        if(node){
            //memo.push(node);
            memo[count] = node;
            if(node.data === node1.data){
                n1 = memo.length - 1;
            }else if(node.data === node2.data){
                n2 = memo.length - 1;
            }
            if(n1 > -1 && n2 > -1){
                break;
            }
            if(q.left){
                q.enq(q.left);
            }else {
                ++count;
                //memo[count] = null;
                //memo.push(null);
            }
            if(q.right){
                q.enq(q.right);
            }else {
                ++count;
                //memo[count] = null;
                //memo.push(null);
            }
        }
    }

    while(n1 !== n2 && n1 >= 0 && n2 >= 0){
        if(n1 > n2){
            if(n1%2 == 0){
                n1 = (n1-2)/2;
            }else {
                n1 = (n1-1)/2;
            }
        }else if(n2 > n1){
            if(n2%2 == 0){
                n2 = (n2-2)/2;
            }else {
                n2 = (n2-1)/2;
            }
        }
    }
    if(n1 !== n2 && n1 >= 0 && n2 >= 0){
        return memo[n1];
    }
    return null;
}

const main = () => {
    var n1 = new Node(1),
    n8 = new Node(8), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5), n6 = new Node(6), n7 = new Node(7), n10 = new Node(10), n14 = new Node(14), n13 = new Node(13);

    n8.left = n3; n3.left = n1; n3.right = n6; n6.left = n4; n6.right = n7;
    n8.right = n10; n10.right = n14; n14.left = n13;

    var l = lca(n8, n4, n7);
    console.log(l);
}

main();