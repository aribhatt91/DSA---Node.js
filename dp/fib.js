const fibRec = (n) => {
    if(n === 0 || n === 1){
        return 1;
    }
    return fibRec(n-1) + fibRec(n-2);
}
const fib = (n) => {
    if(n === 0 || n === 1){
        return 1;
    }
    let arr = [];
    arr.push(1);
    arr.push(1);
    for (let index = 2; index <= n; index++) {
        const f = arr[index - 1] + arr[index - 2];
        arr.push(f);
    }
    return arr[n];
}

export default fib;