/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitRec = function(prices, start, end) {
    if(end >= prices.length || start >= end){
        return 0;
    }
    if(prices[end] - prices[start] <= 0){
        return Math.max(0, maxProfitRec(prices, start, end+1));
    }else {
        return Math.max((prices[end] - prices[start], maxProfitRec(prices, start, end+1)));
    }
}
 var maxProfit = function(prices) {
     var max = 0, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        //const row = [];
        /* for (let j = i+1; j < prices.length; j++) {
            if(prices[j] - prices[i] <= 0){
                //row.push(0);
            }else {
                //row.push(prices[j] - prices[i]);
                max = prices[j] - prices[i] > max ? prices[j] - prices[i] : max;
            }
        } */
        min = Math.min(prices[i], min);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));