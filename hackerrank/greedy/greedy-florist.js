/* 
https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen
*/

// Complete the getMinimumCost function below.

function sum(arr, i, j, m) {
    var res = 0;
    for (let index = i; index <= j; index++) {
        res += arr[index] * m;
    }
    return res;
}
function getMinimumCost(k, c) {
    var n = c.length, res = 0;
    c.sort(function(a,b){return b-a;});
    //console.log(c);
    var times = Math.floor(n/k), rem = n%k;

    for (let i = 1; i <= times; i++) {
        res += sum(c, k*(i-1), k*(i-1) + k - 1, i);
        //console.log(c, k*(i-1), k*(i-1) + k - 1, i, res);
    }
    if(rem > 0){
        //console.log('rem', c, rem, n - rem, n-1, times + 1);
        res += sum(c, n - rem, n-1, times + 1);
    }
    
    return res;
}

/* n = 10, k = 3
10 9 8 7 6 5 4 3 2 1
27
36

times = 3, rem = 1  */

console.log(getMinimumCost(6, [2,5,6]));