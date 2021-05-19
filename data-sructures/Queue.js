class Queue {
	constructor(){
		this._que = [];
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enqueue(){
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	dequeue(){
		var len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
	top(){
		var len = this._que.length;
		return len <= 0 ? null : this._que[0];
	}
	peek(){
		var len = this._que.length;
		return len <= 0 ? null : this._que[len - 1];
	}
}

export default Queue;