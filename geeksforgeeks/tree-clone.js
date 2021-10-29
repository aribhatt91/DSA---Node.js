
class mQueue {
	constructor(){
		this._que = [];
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enq(){
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	deq(){
		var len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
    isEmpty(){
        return this._que.length === 0;
    }
}

function clone(root) {
    if(!root){
        return null;
    }
    let root2 = new Node(root.data);
    let q = new mQueue(), q2 = new mQueue();
    q.enq(root);
    q2.enq(root2);

    while(!q.isEmpty()){
        let node = q.deq(), node2 = q2.deq();
        if(node.left){
            let l = new Node(node.left.data);
            node2.left = l;
            q2.enq(l);
            q.enq(node.left);
        }
        if(node.right){
            let r = new Node(node.right.data);
            node2.right = r;
            q2.enq(r);
            q.enq(node.right);
        }
    }

    return root2;
}

class Node {
    constructor(data) {
        this.data = data ? data : null;
        this.left = null;
        this.right = null;
    }
}
const main = () => {
    let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5);

    n1.left = n2;
    n1.right = n3;
    /* n2.left = n4;
    n4.left = n5; */

    let c = clone(n1);
    console.log(c);
}

main();