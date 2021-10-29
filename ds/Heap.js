/* 
Resources:
https://www.geeksforgeeks.org/binary-heap/
https://www.geeksforgeeks.org/array-representation-of-binary-heap/
*/
class MinHeap {
    constructor(capacity) {
        this.capacity = capacity || Number.MAX_SAFE_INTEGER;
        this.harr = [];
    }
    insert (num) {
        this.harr.push(num);
        this.heapifyUp();
    }

    /* removes and returns the root/minimum value */
    extractMin(){
        if(this.harr.length <= 0){
            throw new Error('No item in heap!');
        }
        let min = this.harr[0];
        this.harr[0] = this.harr.pop();
        this.heapifyDown(0);
        return min;
    }

    leftChildIndex(index){
        return 2*index + 1;
    }
    getLeftChild(index) {
        return this.harr[this.leftChildIndex(index)];
    }
    getRightChild(index) {
        return this.harr[this.rightChildIndex(index)];
    }

    rightChildIndex(index){
        return 2*index + 2;
    }

    getSize(){
        return this.harr.length;
    }

    getParent(index){
        return this.harr[(index - 1)/2];
    }
    getParentIndex(index){
        return (index - 1)/2;
    }
    hasParent(index){
        return (index - 1)/2 >= 0;
    }
    hasLeftChild(index) {
        return typeof this.harr[2*index + 1] !== 'undefined';
    }
    hasRightChild(index) {
        return typeof this.harr[2*index + 2] !== 'undefined';
    }

    heapifyUp(){
        let index = this.harr.length - 1,
        parentIndex = this.getParentIndex(index);

        while(this.hasParent(index) && this.getParent(index) > this.harr[index]) {
            swap(this.harr, index, parentIndex);
            index = parentIndex;
        }
    }
    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.leftChildIndex(index);
            if(this.hasRightChild(index) && this.harr[this.rightChildIndex(index)] < this.harr[smallerChildIndex]) {
                smallerChildIndex = this.rightChildIndex(index);
            }

            if(this.harr[index] < this.harr[smallerChildIndex]){
                break;
            }else {
                swap(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}