
/**
 *https://practice.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1
 *insertHeap
 * @param {number} x
 *
 *getMedian
 * @return {float}
 */

 class Heap {
    constructor(options) {
        this.heap = [];
        if(options && options.max === true){
            this.max = true;
        }else {
            this.max = false;
        }
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i){
        return 2*i + 1;
    }
    right(i){
       return 2*i + 2;
   }
    peek(){
        return this.heap[0];
    }
    add(el){
       this.heap.push(el);
       //this.heapify(0);
       if(this.max){
            this.heapifyUpMax(this.size()-1);
       }else {
            this.heapifyUpMin(this.size()-1);
       }
    }
    pop(){
       let min = this.heap[0],
       max = this.heap[this.size()-1];
       this.heap[0] = max;
       this.heap = this.heap.splice(0, this.size()-1);
       if(this.max){
           this.heapifyMax(0);
       }else {
           this.heapifyMin(0);
       }
       return min;
    }
    size(){
        return this.heap.length;
    }
    heapifyUpMin(index){
       let parent = this.parent(index);
       //console.log(this.heap);
       while(index > 0 && this.heap[index] < this.heap[parent]){
           //console.log(index, parent, this.heap[index], this.heap[parent]);
           this.swap(index, parent);
           index = parent;
           parent = this.parent(index);
       }
    }
    heapifyUpMax(index){
        let parent = this.parent(index);
        //console.log(this.heap);
        while(index > 0 && this.heap[index] > this.heap[parent]){
            //console.log(index, parent, this.heap[index], this.heap[parent]);
            this.swap(index, parent);
            index = parent;
            parent = this.parent(index);
        }
    }
    heapifyMin(index){
       let left = this.left(index),
       right = this.right(index),
       smaller = index;

       if(left < this.size() && this.heap[left] < this.heap[smaller]){
           smaller = left;
       }else if(right && this.heap[right] < this.heap[smaller]){
           smaller = right;
       }

       if(index !== smaller){
           this.swap(index, smaller);
           this.heapify(smaller);
       }
    }
    heapifyMax(index){
        let left = this.left(index),
        right = this.right(index),
        bigger = index;

        if(left < this.size() < this.size() && this.heap[left] > this.heap[bigger]){
            bigger = left;
        }else if(right && this.heap[right] > this.heap[bigger]){
            bigger = right;
        }

        if(index !== bigger){
            this.swap(index, bigger);
            this.heapify(bigger);
        }
    }
    swap(i,j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    print(){
        console.log(this.heap.toString());
    }
}
 class Solution
 {
     // Function to insert heap
     insertHeap(x)
     {
         // add your code here
     }
     
      // Function to balance Heaps
     balanceHeaps()
     {
        // add your code here
     }
     
     // function to getMedian
     getMedian()
     {
         // add your code here
     }
     
 }

let max = new MinHeap();
max.add(3);
max.add(4);
max.add(5);
max.add(7);
max.add(11);
max.add(14);
max.add(1);
max.add(0);
console.log(max.peek());

max.print();