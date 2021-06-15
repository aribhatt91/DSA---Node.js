
//structure of MyStack
class MyStack
{
    constructor(){
        this.arr = new Array(1000);
        this.top=-1;
    }
    push(x){
    }
    pop(){
    
    }
    getMin(){
        
    }
}



/**
 * @param {number} x
*/
/* The method push to push element into the stack */
MyStack.prototype.push = function(x) {
    // code here
    this.top += 1;
    if(this.min){
        let temp = this.min;
        if(this.min > x){
            this.arr[this.top] = temp;
            this.top++;
            this.arr[this.top] = x;
            this.min = x;
        }else {
            this.arr[this.top] = x;
        }
    }else if(!this.min || this.top === -1){
        this.min = x;
        this.arr[this.top] = x;
        this.top++;
        this.arr[this.top] = x;
    }
  }
  
  
  /**
   * @returns {number} 
  */
  /*The method pop which return the element 
    poped out of the stack*/
  MyStack.prototype.pop = function() {
    if(this.top === -1){
        this.min = Number.MAX_VALUE;
        return -1;
    }
    // code here
    let top = this.arr[this.top];
    this.arr[this.top] = undefined;
    this.top--;
    if(top == this.min){
        let newMin = this.arr[this.top];
        this.arr[this.top] = undefined;
        this.top--;
        this.min = newMin;
    }
    console.log(top);
    return top;
  }
  /**
   * @returns {number} 
  */
  /*The method getMin() which return the minimum
  element of the stack*/
  MyStack.prototype.getMin = function() {
    if(this.top === -1){
        return -1;
    }
    // code here
    console.log(this.min);
    return this.min;
  }
  

  let s = new MyStack();
/*   s.push(2);
  s.push(3);
  console.log(s.getMin());
  s.push(1);

  console.log(s.getMin()); */
  s.push(2);
    s.push(3);
    s.pop();
    s.getMin();
    s.push(1);
    s.getMin();