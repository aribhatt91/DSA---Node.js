/**
 * https://leetcode.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    var res = 1;
    //console.log(Number.MIN_VALUE);
    /* 
    Edge case
    */
    if(x > 1 && n === -2147483648){
        return 0;
    }
    /* 
    Negative power
    */
    if(n < 0){
        x = 1/x;
        n = -1*n;
    }
    while(n > 0){
        if(n&1){
            res *= x;
        }
        n = n >> 1; //n = n/2
        x = x*x;
    }
    return res;
};