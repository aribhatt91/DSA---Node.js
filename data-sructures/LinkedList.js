import Node from './Node.js';

class LinkedList {
	constructor(){
		this._start = null;
		var _ptr = this._start;
		for (var i = 0; i < arguments.length; i++) {
			if(!_ptr){
				this._start = new Node(arguments[i]);
				_ptr = this._start;
			}else {
				_ptr.next = new Node(arguments[i]);
				_ptr = _ptr.next;
			}
		}
	}
	add(val){
		if(!val){return;}
		var _ptr = this._start
		if(_ptr){
			while(_ptr.next){
				_ptr = _ptr.next;
			}
			_ptr.next = new Node(val);
		}else {
			this._start = new Node(val);
		}
	}
	length(){
		if(this._start){
			var _ptr = this._start, count = 0;
			while(_ptr){
				++count;
				_ptr = _ptr.next;
			}
			return count;
		}
		return 0;
	}
	deleteFirst(){
		if(this._start){
			var temp = this._start.next;
			this._start.next = null;
			this._start = temp;
		}
	}
	deleteLast(){
		if(this._start){
			var _ptr = this._start.next, temp = null;
			while(_ptr.next){
				temp = _ptr;
				_ptr = _ptr.next;
			}
			temp.next = null;
		}
	}
	deleteAt(position){
		if(position < 0 || !this._start){return}
		if(position === 0){
			deleteFirst();
			return;
		}
		var _ptr = this._start, temp_prev = _ptr, temp_next = null, count = 0;
		while(_ptr.next && count < position){
			++count;
			temp_prev = _ptr;
			_ptr = _ptr.next;
			temp_next = _ptr._next;
		}
		if(count === position){
			if(!temp_next) {
				temp_prev.next = null;
			}else {
				temp_prev.next = temp_next;
			}
		}
		
	}
	insertFirst(){}
	insertLast(){}
	insertAt(){}
	reverse(){
		if(!this._start){
			return;
		}
		var _ptr = this._start, temp_prev = null, temp_next = _ptr.next, count = 0;
		while(temp_next){
			++count;
			temp_prev = _ptr;
			_ptr = temp_next;
			temp_next = _ptr.next;
			_ptr.next = temp_prev;
			if(count === 1){
				temp_prev.next = null;
			}
		}
		this._start = _ptr;
		console.log(this._start);
	}
	print(){
		var arr = [],
		_ptr = this._start;
		while(_ptr){
			arr.push(_ptr.val);
			_ptr = _ptr.next;
		}
		console.log(arr.join(' -> '));
	}
}

export default LinkedList;