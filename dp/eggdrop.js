/* 
f - floors
e - eggs
*/

/* 
Method 1 - check from the middle floor, if it breaks, check another egg from the lower floors using the same method, else from the upper floor. Increment 1 with each recursion.
If only one egg is left, and k floors are left, return k
*/
const eggdropm1 = (f, i, e) => {
    if(f - i <= 1 || e === 1){
        return f - i;
    } 
    else{
        return (1 + Math.max(eggdropm1(f, Math.floor((f+i)/2) + 1, e),  eggdropm1(Math.floor((f+i)/2) - 1, i, e - 1)));
    }
}

/* 
When we drop an egg from a floor x, there can be two cases (1) The egg breaks (2) The egg doesn’t break. 
 
If the egg breaks after dropping from ‘xth’ floor, then we only need to check for floors lower than ‘x’ with remaining eggs as some floor should exist lower than ‘x’ in which egg would not break; so the problem reduces to x-1 floors and n-1 eggs.

If the egg doesn’t break after dropping from the ‘xth’ floor, then we only need to check for floors higher than ‘x’; so the problem reduces to ‘k-x’ floors and n eggs.

Since we need to minimize the number of trials in worst case, we take the maximum of two cases. We consider the max of above two cases for every floor and choose the floor which yields minimum number of trials. 
*/

const eggdropm2 = (f, e) => {
    if(f === 0 || f === 1 || e === 1){
        return f;
    }
    let min = Number.MAX_SAFE_INTEGER, res = 0;
    for (let i = 1; i <= f; i++) {
        res = Math.max(eggdropm2(i-1,e-1), eggdropm2(f-i, e));
        if(res < min){
            min = res;
        }   
    }
    return min+1;
}

const eggdrop = (f, e) => {
    var memo = [];
    for (let i = 0; i <= e; i++) {
        let row = [];
        for (let j = 0; j <= f; j++) {
            if(j === 0 || i === 0){
                row.push(0);
            }else if(i === 1 || j === 1){
                row.push(j);
            }else {
                row.push(0);
            }
        }
        memo.push(row);
    }
    console.log(memo);
    for (let i = 2; i <= e; i++) {
        for (let j = 2; j <= f; j++) {
            memo[i][j] = Math.MAX_SAFE_INTEGER;
            for (let k = 1; k <= j; k++){
                let res = 1 + Math.max(memo[i-1][k-1], memo[i][j-k]);
                console.log(i,j,k,res);
                if(res < memo[i][j]){
                    memo[i][j] = res;
                }          
            }
        }
    }
    console.log(memo);
    return memo[e][f];
}
console.log(eggdrop(9, 3));
//console.log(eggdropm1(10, 0, 2));
//console.log(eggdropm2(10, 2));