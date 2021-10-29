const gridTravellerRec = (m, n) => {
    if(m === 0 || n === 0){
        return 0;
    }
    if(m === 1 || n === 1){
        return 1;
    }
    return gridTravellerRec(m-1, n) + gridTravellerRec(m, n-1);

}

const gridTraveller = (m, n) => {
    if(m === 0 || n === 0){
        return 0;
    }
    if(m === 1 || n === 1){
        return 1;
    }
    let arr = [];
    for (let i = 0; i < m; i++) {
        let col = [];
        for (let j = 0; j < n; j++) {
            if(j === 0 || i === 0){
                col.push(1);
            }else {
                col.push(col[j-1] + arr[i-1][j]);
            }
        }
        arr.push(col);
    }
    return arr[m-1][n-1];

}

export default gridTraveller;