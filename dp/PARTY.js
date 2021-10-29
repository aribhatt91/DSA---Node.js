/* 
https://www.spoj.com/problems/PARTY/
*/

const party = (budget, cost, fun, n) => {
    if(budget <= 0 || n<=0){
        return 0;
    }else if(cost[i] > budget) {
        return party(budget, cost, fun, n-1);
    }

    return Math.max((fun[n-1] + party(budget - cost[n-1], cost, fun, n-1), party(budget, cost, fun, n-1)));
}

const partyDP = (budget, cost, fun) => {
    let clen = cost.length, memo = Array(clen + 1), max_ent = 0;

    for (let i = 0; i <= clen; i++) {
        let row = Array(budget+1);
        memo[i].push(row);
    }

    for (let i = 0; i <= clen; i++) {
        for (let j = 0; j <= budget; j++) {
            if(i==0 && j == 0){
                memo[i][j] = 0;
            }else if(cost[i] <= j){
                memo[i][j] = Math.max((fun[i-1] + memo[i][j-cost[i-1]]), memo[i-1][j]);
                max_ent = j;
            }else {//If current item cost is biger than the remaining budget 
                memo[i][j] = memo[i-1][j];
            }
        }
    }
    return memo[i][j] + ' ' + max_ent;
}

console.log(partyDP(20, [5,6,10,7,9], [20, 22, 30, 25, 28]));