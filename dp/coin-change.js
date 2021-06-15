/* 
https://www.geeksforgeeks.org/coin-change-dp-7/?ref=lbp
*/

/* 5
{1,2,3}

{3,2}, {3,1,1}
|
2, {1,2}
|
0, {1,2} = 1

2
|
1, {1}
|
0, {1} = 1

{1,1} = 1 + 0 = 1
1+1 = 2

{1,1,1,1,1}


5, {1,2}
{2,2,1}, {2,1,1,1}, {1,1,1,1,1} */
const coinChangeRec = (SUM, bag, n) => {
    if(SUM==0){
        return 1;
    }
    else if(SUM < bag[n-1] || SUM < 0 || (n < 1 && SUM > 0)){
        return 0;
    }
    return coinChangeRec(SUM - bag[n-1], bag, n) + coinChangeRec(SUM, bag, n-1);
}


const coinChange = (bag, SUM) => {
    let memo = (new Array(SUM+1)).fill(0),
    m = bag.length;
    memo[0] = 1;
    for (let i = 0; i < m; i++) {
        /* 
        Each additional coin added increases the number of choice, thus we add to the existing count
        */
        for (let j = bag[i]; j < SUM + 1; j++) {
            memo[j] += memo[j - bag[i]];
        }   
        console.log(memo);
    }
    console.log(memo);
    return memo[SUM];
}

const coinChangeMin = (SUM, bag, n) => {
    if(SUM==0){
        return bag.length - n;
    }
    else if(SUM < bag[n-1] || SUM < 0){
        return;
    }else if(n < 1 && SUM > 0){
        return -1;
    }
    return Math.min(1 + coinChangeMin(SUM - bag[n-1], bag, n), coinChangeMin(SUM, bag, n-1));
}

const coinChangeMinDP = (SUM, bag) => {
    let table = [], m = bag.length;
    for (let i = 0; i <= m; i++) {
        let row = new Array(SUM+1);
        table.push(row);
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= SUM; j++) {
            if(i === 0){
                table[i][j] = Number.MAX_VALUE - 1;
            }else if(j === 0){
                table[i][j] = 0;
            }else {
                if(bag[i-1] > j){
                    table[i][j] = Number.MAX_VALUE - 1;
                }else {
                    table[i][j] = 1 + table[i][j - bag[i-1]];
                }
                table[i][j] = Math.min(table[i][j], table[i-1][j]);
            }
        }
    }

    console.log(table);
    return table[m][SUM];
}

const main = () => {
    console.log(coinChangeMinDP(11, [1,2,5]));
}
main();
