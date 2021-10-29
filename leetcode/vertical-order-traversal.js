/**
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
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
var verticalTraversal = function(root) {
    var q = new mQueue();
    root.dx = 0;
    root.dy = 0;
    q.enq(root);
    var map = {};
    while (!q.isEmpty()) {
        var node = q.deq();
        var hd = node.dy, vd = node.dx;
        var m = map[vd] || [];
        map[vd] = m.concat([node]);

        if(node.left){
            node.left.dy = hd+1;
            node.left.dx = vd-1;
            q.enq(node.left);
        }
        if(node.right){
            node.right.dy = hd+1;
            node.right.dx = vd+1;
            q.enq(node.right);
        }
    }

    var keys = Object.keys(map);
    keys.sort(function(a,b){
        return Number(a) - Number(b);
    });

    var res = [];

    keys.forEach(function(k){
        var m = map[k].sort(function(a, b){
            if(a.dy !== b.dy){
                return a.dy - b.dy;
            }
            return a.val-b.val;
        });
        res.push(m.map(function(node){
            return node.val;
        }));
    });

    return res;
};