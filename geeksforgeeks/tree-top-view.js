/* 
https://www.youtube.com/watch?v=il_t1WVLNxk&list=PLqM7alHXFySGqCvcwfqqMrteqWukz9ZoE

/* 
Method:
Assign a flag 0 to the root. This is the HORIZONTAL DISTANCE FROM ROOT. Imagine the tree being plotted on a graph from above or below on the X-AXIS. (...,-2,-1,0,1,2,...) 
Starting with the root, for every node, add a flag of (root)+1 for the right node and (root)-1 for the left node.
Traverse the tree in LEVEL ORDER and whenever we see a min or max node, update a map. If the key (Horizontal distance is already present, do nothing.). The list of nodes present in our map is our top view.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const topView = (root) => {
    let q = new mQueue();
    root.flag = 0;
    q.enq(root);
    let map = {};
    map[root.flag] = root.data;
    while(!q.isEmpty()){
        let t = q.dq();
        if(t.left){
            t.left.flag = t.flag - 1;
            if(map[t.left.flag] === undefined){
                map[t.left.flag] = t.left.data;
            }
            q.eng(t.left);
        }
        if(t.right){
            t.right.flag = t.flag + 1;
            if(map[t.right.flag] === undefined){
                map[t.right.flag] = t.right.data;
            }
            q.eng(t.right);
        }
    }
    return sum;
};