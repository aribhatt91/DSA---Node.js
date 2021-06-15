

let count = 0;
const isSafe = (arr, col, row, N) => {
    for (let i = 0; i < col; i++) {
        console.log(count++);
        if(arr[row][i] === 1){
            return false;
        }
    }
    for (let i = row, j=col; i < N && j >= 0; i++, j--) {
        if(arr[i][j] === 1){
            return false;
        }
    }
    for (let i = row, j=col; i >= 0 && j >= 0; i--, j--) {
        if(arr[i][j] === 1){
            return false;
        }
    }
    return true;
}

const nqueensUtil = (arr, N, col) => {
    
    if(col >= N){
        //console.log(arr);
        return true;
    }
    for (let row = 0; row < N; row++) {
        if(isSafe(arr, col, row, N)){
            arr[row][col] = 1;
            if(nqueensUtil(arr, N, col+1)){
                return true;
            }
            arr[row][col] = 0;
            
        }        
    }
    return false;
}
const nqueens = (N) => {
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push((new Array(N)).fill(0));
    }
    console.log(arr);
    return nqueensUtil(arr, N, 0);
}

const main = () => {
    const N = 5;
    const canPlace = nqueens(N);
    console.log(canPlace ? 'YES' : 'NO');
}
main();