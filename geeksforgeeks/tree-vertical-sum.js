/* 
https://www.youtube.com/watch?v=il_t1WVLNxk&list=PLqM7alHXFySGqCvcwfqqMrteqWukz9ZoE

/* 
Method:
Assign a flag 0 to the root.
Starting with the root, for every node, add a flag of (root)+1 for the right node and (root)-1 for the left node.
Traverse the tree and store all the nodes in a map
the ones with flag 0 are the ones we need to add up, as they pass right through the center.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const verticalSum = (root) => {
    let q = new mQueue();
    root.flag = 0;
    q.enq(root);
    let sum = root.data;
    while(!q.isEmpty()){
        let t = q.dq();
        if(t.left){
            t.left.flag = t.flag - 1;
            if(t.left.flag === 0){
                sum += t.left.data;
            }
            q.eng(t.left);
        }
        if(t.right){
            t.right.flag = t.flag + 1;
            if(t.right.flag === 0){
                sum += t.right.data;
            }
            q.eng(t.right);
        }
    }
    return sum;
};