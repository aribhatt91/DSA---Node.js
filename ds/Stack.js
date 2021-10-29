class Stack {
	constructor(){
		this._stk = [];
		for (var i = 0; i < arguments.length; i++) {
			this._stk.push(arguments[i])
		}
	}
	push(node){
		this._stk.push(node)
	}
	pop(){
		return this._stk.pop();
	}
	peek(){
		var len = this._stk.length;
		return len <= 0 ? null : this._stk[len - 1];
	}

}
export default Stack;