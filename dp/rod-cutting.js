const rodcut = (prices, n) => {
    if(n<=0){
        return 0;
    }
    let max = Number.MIN_VALUE;

    for (let i = 0; i < n; i++) {
        max = Math.max(prices[i] + rodcut(prices, n-i-1), max);
    }
    return max;
}

const rodcutdp = (prices, n) => {
    let dp = new Array(n+1);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let max = Number.MIN_VALUE;
        for (let j = 0; j < i; j++) {
            max = Math.max(prices[j] + dp[i-j-1], max);
        }
        dp[i] = max;
        
    }
}