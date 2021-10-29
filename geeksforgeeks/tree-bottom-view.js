//User function Template for javascript

/**
 * https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon#
 * https://www.youtube.com/watch?v=fPhgtqKdG5k
 * @param {Node} root
 * @returns {number[]}
*/
class Queue {
	constructor(){
		this._que = [];
		for (let i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enq(){
		for (let i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	deq(){
		let len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
	isEmpty(){
		return this._que.length === 0;
	}
}
class Solution
{
    inorder(root, res){
        if(root){
            this.inorder(root.left, res);
            if(root && !root.left && !root.right){
                res.push(root.data);
            }
            this.inorder(root.right, res);
        }
    }
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
    {
        //your code here
        let res = [], stk = [], hd_map = {};
        root.hd = 0;
        let q = new Queue();
        q.enq(root);
        
        //.push(root);
        while(!q.isEmpty()){
            let node = q.deq();
            hd_map[node.hd] = node.data;
            
            if(node.left){
                node.left.hd = node.hd - 1;
                q.enq(node.left);
            }
            if(node.right){
                node.right.hd = node.hd + 1;
                q.enq(node.right);
            }
            
        }
        //this.inorder(root, res);
        res = [];
        let keys = Object.keys(hd_map);
        keys.sort((a,b)=>Number(a)-Number(b));
        //console.log(hd_map);
        for(let i=0; i< keys.length; i++){
            res.push(hd_map[keys[i]]);
        }
        return res;
    }
}