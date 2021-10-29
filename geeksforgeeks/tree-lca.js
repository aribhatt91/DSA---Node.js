class TreeNode {
    constructor(data) {
        this.data = data ? data : 0;
        this.left = null;
        this.right = null;
    }
}

/* 
This method assumed both the n1 and n2 are present;
*/
const lca = (root, n1, n2) => {
    if(!root) return null;

    if(root.data === n1 || root.data === n2){
        return root;
    }

    let lca_left = lca(root.left, n1, n2),
    lca_right = lca(root.right, n1, n2);

    if(lca_left && lca_right) {
        return root;
    }

    return lca_left ? lca_left : lca_right;
}