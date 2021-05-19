class Node {
	constructor(val){
		this.val = val;
		this.right = null;
		this.left == null;
	}

	printInorder(){
		if(this.left){
			this.left.printInorder();
		}
		console.log(this.val);
		if(this.right){
			this.right.printInorder();
		}
	}
	printPreorder(){
		console.log(this.val);
		if(this.left){
			this.left.printInorder();
		}
		if(this.right){
			this.right.printInorder();
		}
	}
	printPostorder(){
		if(this.left){
			this.left.printInorder();
		}
		if(this.right){
			this.right.printInorder();
		}
		console.log(this.val);
	}
	find(val){
		if(this.val === val){
			return true;
		}else if(this.val > val){
			this.left.find(val);
		}else if(this.val < val){
			this.right.find(val);
		}

		return false;
	}
	insert(val){
		if(this.val > val){
			if(this.left){
				this.left.insert(val);
			}else {
				this.left = new Node(val);
			}
		}else if(this.val < val){
			if(this.right){
				this.right.insert(val);
			}else {
				this.right = new Node(val);
			}
		}
	}
}

class BST {
	constructor(){

	}

	checkBST(){

	}
}