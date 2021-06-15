//User function Template for javascript

/**
 * https://practice.geeksforgeeks.org/problems/clone-a-binary-tree/1/?company[]=Amazon&company[]=Amazon&difficulty[]=1&page=1&category[]=Tree&query=company[]Amazondifficulty[]1page1company[]Amazoncategory[]Tree#
 * @param {Node} root
 * @returns {Node}
 * https://www.geeksforgeeks.org/clone-binary-tree-random-pointers/
*/
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
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.random = null;
    }
}


class Solution {
    
    cloneTree(root) {
        if(!root){
            return 0;
        }
        let root2 = new Node(root.data);
        let q = new mQueue(), q2 = new mQueue();
        q.enq(root);
        q2.enq(root2);
        let map = {};
        map[root2.data] = root2; 
        let res = true;
    
        while(!q.isEmpty()){
            let node = q.deq(), node2 = q2.deq();
            if(node.left){
                let l = new Node(node.left.data);
                
                map[l.data] = l;
                if(node.left.random) {
                    l.random = node.left.random.data;
                }
                node2.left = l;
                q2.enq(l);
                q.enq(node.left);
    
            }
            if(node.right){
                let r = new Node(node.right.data);
                
                
                if(node.right.random) {
                    r.random = node.right.random.data;
                }
                map[r.data] = r;
                node2.right = r;
                q2.enq(r);
                q.enq(node.right);
            }
        }
        q2 = new mQueue();
        
        while(!q2.isEmpty()){
            let node = q2.deq();
            if(node.left){
                if(node.left.random){ 
                    if(map[node.left.random]){
                        node.left.random = map[node.left.random];
                    }else {
                        //console.log('dangling', node.left);
                        res = false;
                    }
                }
                
                q2.enq(node.left);
    
            }
            if(node.right){
                if(node.right.random){ 
                    if(map[node.right.random]){
                        node.right.random = map[node.right.random];
                    }else {
                        //console.log('dangling', node);
                        res = false;
                    }
                }
                q2.enq(node.right);
            }
        }
        
        if(root.random && map[root.random.data]){
            root2.random = map[root.random.data];
        }
        //console.log(res);
        return root2;
    }
}