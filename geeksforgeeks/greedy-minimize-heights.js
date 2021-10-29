function getMinDiff(arr, N, K) {
    //arr.sort((a,b)=>a-b);
    
    let sum = 0, avg = 0;

    for (let i = 0; i < N; i++) {
        sum += arr[i];    
    }
    avg = sum/N;

    //console.log(sum, avg);

    for (let i = 0; i < N; i++) {
        let element = arr[i];
        if(arr[i] < K || Math.abs(element + K - avg) < Math.abs(element - K - avg)){
            arr[i] += K;
        }else {
            arr[i] -= K;
        }
        
    }
    console.log(arr);
    let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
    for (let i = 0; i < N; i++) {
        const element = arr[i];
        if(element < min){min=element;}
        else if(element > max){max = element;};
    }
    return (max - min);

}
console.log(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5));
//console.log(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 5, 10));