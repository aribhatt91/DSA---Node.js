/* 
https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1/?company[]=Amazon&company[]=Amazon&difficulty[]=1&page=2&query=company[]Amazondifficulty[]1page2company[]Amazon
https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/
https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
Theory:
There are 3 parts to finding distance between 2 nodes in a Binary tree:
1. Find the lowest Common Ancestor.
2. Find the level of each node with respect to the LCA
3. Return the sum of levels 

Alternate
https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree-set-2-using-parent-pointer/
*/
let v1 = false, v2 = false;
function lca(root, n1, n2) {
    if(!root) return null;

    let temp = null;
    if(root.data === n1){
        v1 = true;
        temp = root;
    }
    if(root.data === n2){
        v2 = true;
        temp = root;
    }

    let lca_left = lca(root.left, n1, n2),
    lca_right = lca(root.right, n1, n2);

    if(temp){
        return temp;
    }

    if(lca_left && lca_right) {
        return root;
    }

    return lca_left ? lca_left : lca_right;
}
function findLCA(root, n1, n2) {
    v1 = false; v2 = false;

    let res = lca(root, n1, n2);
    if(v1&&v2){
        return res;
    }
    return null;
}
function findLevel (root, key, level) {
    if(!root){
        return -1;
    }
    if(root.data === key){
        return level;
    }
    let level_left = findLevel(root.left, key, level + 1);
    return level_left > -1 ? level_left : findLevel(root.right, key, level + 1);
}

function findDist(root,a,b){
    //code here
    let lca = findLCA(root, a,b);
    //console.log('lca', lca);
    if(lca){
        if(lca.data === a){
            return findLevel(lca, b, 0);
        }else if(lca.data === b){
            return findLevel(lca, a, 0);
        }else {
            return findLevel(lca, a, 0) + findLevel(lca, b, 0);
        }
    }
    return 0;
}
class Node {
    constructor(data) {
        this.data = data ? data : 0;
        this.left = null;
        this.right = null;
    }
}
const main = () => {
    let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n4.left = n5;

    let dist = findDist(n1, 2, 3);
    console.log(dist);
};

main();