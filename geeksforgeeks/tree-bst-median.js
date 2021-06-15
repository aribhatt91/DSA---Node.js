class Node {
    constructor(data){
        this.data = data ? data : -1;
        this.left = null;
        this.right = null;
    }
}
const inorder = (root, arr) => {
    if(root){
        inorder(root.left, arr);
        arr.push(root.data);
        inorder(root.right, arr);
    }
}
const bstMedian = (root) => {
    let arr = [];
    inorder(root, arr);
    console.log(arr);
    let len = arr.length, median;
    if(len%2===0){
        median = (arr[Math.floor(len/2) - 1] + arr[Math.floor(len/2)])/2;
    }else {
        median = arr[Math.floor(len/2)];
    }

    console.log(median);
};

const main = () => {
    let n1 = new Node(6), n2 = new Node(3), n3 = new Node(8), n4 = new Node(1), n5 = new Node(4), n6 = new Node(7), n7 = new Node(9);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;
    //n3.right = n7;
    bstMedian(n1);
}

main();
