const partition = (arr, left, right) => {
    let pivot = arr[right], i = left;
    
    for (let j = left; j < right; j++) {
        if(arr[j] < pivot){
            /* Swap the element with one at position i */
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }  
    }

    let temp = arr[i];
    arr[i] = arr[right];
    arr[right] = temp;

    return i;
}
const kthSmallest = (arr, left, right, k) => {
    console.log(k, (right-left+1), left, right);
    if(k > 0 && k<= (right-left+1)){
        let pos = partition(arr, left, right);
        if(pos - left === k - 1){
            return arr[pos];
        }else if(pos - left > k - 1) {
            return kthSmallest(arr, left, pos - 1, k);
        }
        return kthSmallest(arr, pos+1, right, k - pos + left - 1);
    }
    console.log(k, (right-left+1), left, right);
    return Number.MAX_SAFE_INTEGER;
}
const array = [5,20,1,3,23,67,34,2,4,12];
console.log('Testing kthSmallest -> ', kthSmallest(array, 0, (array.length - 1), 8));

export default kthSmallest;