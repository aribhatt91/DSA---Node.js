class Node {
	constructor(){
		this._val = arguments[0] || 0;
		this._next = arguments[1] || null;
		this._prev = arguments[2] || null;
	}
	get val(){
		return this._val;
	}
	set val(val){
		this._val = val;
	}
	get next(){
		return this._next;
	}
	set next(next){
		this._next = next;
	}
	get prev(){
		return this._prev;
	}
	set prev(prev){
		this._prev = prev;
	}
}

export default Node;