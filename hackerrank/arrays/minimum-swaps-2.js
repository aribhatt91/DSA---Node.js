function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function minimumSwaps(arr) {
    let map = {}, count = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        map[element] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element !== i+1){
            let j = map[i+1];
            swap(arr, i, j);
            map[element] = j;
            map[i+1] = i;
            count++;
        }
    }

    return count;
}

console.log(minimumSwaps([7,1,3,2,4,5,6]));