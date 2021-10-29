

function solveWordWrap(nums, k) {
    let count = 0, n = nums.length, rem_space = k, cost = 0;

    for (let i = 0; i < n; i++) {
        let chars = nums[i];// + (i === n-1 ? 0 : 1);
        
        console.log('i-', i, count+1, chars, rem_space);
        if(rem_space >= chars+1){
            rem_space -= chars;
            cost = cost + 1;
        }else {
            count++;
            if(i < n-1){
                cost += rem_space;
            }
            
            console.log('adding cost ', rem_space, cost);
            rem_space = k;
        }
        console.log('i-e-cost-', cost);
    }
    return cost;
}

console.log(solveWordWrap([2, 8, 2, 6, 10, 10], 13));