const lcsRec = (str1, str2, l1, l2) => {
    if(l1 === 0 || l2 === 0){
        return 0;
    }
    if(str1[l1-1] === str2[l2-1]){
        return 1 + lcsRec(st1, str2, l1-1, l2-1);
    }else {
        return Math.max(lcsRec(str1, str2, l1-1, l2), lcsRec(str1, str2, l1, l2-1));
    }
}

const lcs = (str1, str2, l1, l2) => {
    let memo = [];

    for (let i = 0; i <= l1; i++) {
        let row = [];
        for (let j = 0; j <= l2; j++) {
            if(i === 0 || j === 0){
                row.push(0);
            }else if(str1[i-1] === str2[j-1]){
                row.push(1 + memo[i-1][j-1]);
            }else {
                row.push(Math.max(row[j-1], memo[i-1][j]));
            }
            
        }
        memo.push(row);
    }
    return memo[l1][l2];
}

console.log(lcs("AGGTAB", "GXTXAYB", 6, 7));