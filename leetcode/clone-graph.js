/* 
https://leetcode.com/problems/clone-graph/
*/
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
class MQueue {
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
var cloneGraph = function(node) {
    console.log(node);
    let q1 = new MQueue(),
    q2 = new MQueue(), visited = new Map();
    var node2 = new Node(node.val);
    q1.enq(node);
    q2.enq(node2);

    while(!q1.isEmpty()){
        let n1 = q1.deq(), 
        n2 = q2.deq();
        if(!visited.has(n1)){
            for (let i = 0; i < n1.neighbors.length; i++) {
                const element = n1.neighbors[i];
                const el2 = new Node(element.val);
                n2.neighbors.push(el2.val);
                //if(!visited.has(element)){
                    q1.enq(element);
                    q2.enq(el2);
                //}
                
            }
        }
        
        visited.set(n1,n2);
    }
    return node2;
};