class Stack {
    constructor(){
      this._min = null;
    }
  
    push(item){
      
    }
  
    pop(){
      var top = this.peek();
      if(this._min === top){
        this.stack.length--;
        if(this.stack.length > 1){
          this._min = this.peek();
          this.stack.length--;
        }
      }else {
        this.stack.length--;
      }
      return top;
    }
  
    peek(){}
  
    min(){}
  }
  