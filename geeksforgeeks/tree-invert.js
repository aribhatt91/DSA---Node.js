class Node {
    constructor(data){
        this.data = data ? data : 0;
        this.left = null;
        this.right = null;
    }
}

const invertTree = (root) => {
    if(!root) return;

    invertTree(root.left);
    invertTree(root.right);

    if(root.left && root.right){
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    }else if(root.right){
        root.left = root.right;
        root.right = null;
    }else if(root.left){
        root.right = root.left;
        root.left = null;
    }
}

const main = () => {
    let n4 = new Node(4), n2 = new Node(2), n7 = new Node(7), n1 = new Node(1), n3 = new Node(3), n6 = new Node(6), n9 = new Node(9);

    n4.left = n2; n4.right = n7; n2.left = n1; n2.right = n3; n7.left = n6; n7.right = n9;
    console.log(n4);
    invertTree(n4);
    console.log(n4);
}

main();