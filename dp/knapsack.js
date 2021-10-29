const knapsack = (wts, vals, i, max) => {
    if(wts[i] > max || i >= wts.length || max < 0 || wts.length === 0){
        return 0;
    }else {
        return Math.max(knapsack(wts, vals, i+1, max), vals[i] + knapsack(wts, vals, i+1, max-wts[i]));
    }
}

const knapsack = (wts, vals, max) => {
    
}

console.log(knapsack([5,6,10,7,9], [20, 22, 30, 25, 28], 0, 20));