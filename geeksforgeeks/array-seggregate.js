/* 
Seggregate positive and negative numbers
*/

const seggregate = (arr) => {
    let N = arr.length;
    let i = 0, j = N-1;

    while(i<j) {
        if(arr[i] <= 0){
            i++;
        }
        if(arr[j] > 0){
            j--;
        }
        if(arr[i] > 0 && arr[j] <= 0 && i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    console.log(arr, j+1,  i);
}

const main = () => {
    let arr = [1,2,3,4,5,6];
    seggregate(arr);
}
main();