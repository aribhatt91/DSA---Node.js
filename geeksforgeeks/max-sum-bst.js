/* 
https://www.geeksforgeeks.org/maximum-sub-tree-sum-in-a-binary-tree-such-that-the-sub-tree-is-also-a-bst/?ref=rp
*/
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.sum = data;
        this.isBSTNode = false;
        this.currMin = Number.MAX_SAFE_INTEGER;
        this.currMax = Number.MIN_SAFE_INTEGER;
    }   
}
let MAX = Number.MIN_SAFE_INTEGER;
const isBSTNode = (node) => {
    
    let res = !node || ((!node.left || (node.left.data < node.data)) && (!node.right || (node.right.data > node.data)));
    if(res && node.left){
        res = res && node.data > node.left.currMax;
    }
    if(res && node.right){
        res = res && node.data < node.right.currMin;
    }
    if(res){
        node.currMax = node.right ? node.right.currMax : node.data;
        node.currMin = node.left ? node.left.currMin : node.data;
    }
    console.log(node.data, ' currMin - ', node.currMin, ' currMax - ', node.currMax, res);
    return res;
}

const maxSumBST = (node) => {
    if(!node){
        return;
    }
    maxSumBST(node.left);
    maxSumBST(node.right);
    
    if(isBSTNode(node)){
        node.sum = node.data + (node.left ? node.left.sum : 0) + (node.right ? node.right.sum : 0);
        if(node.sum > MAX){
            MAX = node.sum;
        }
    }else {
        node.sum = node.data;
    }
    console.log(node.data, node.sum, MAX);
}

const main = () => {
    let n7 = new Node(7), n12 = new Node(12), n11 = new Node(11), n13 = new Node(13), n2 = new Node(2),
    n21 = new Node(2), n5 = new Node(5), n1 = new Node(1), n38 = new Node(38);

    n7.left = n12; n12.left = n11; n12.right = n13; n11.left =n2;
    n7.right = n21; n21.right = n5; n5.left = n1; n5.right = n38;

    
    maxSumBST(n7);

    console.log(MAX); 
}

console.log(main());