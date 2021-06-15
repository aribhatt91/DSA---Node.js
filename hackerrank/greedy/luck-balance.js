/* 
https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
*/

function luckBalance(k, contests) {
    // Write your code here
    var MAX = 0;
    contests.sort(function(a,b){
        if(a[1] === 0){
            return -1;
        }else if(b[1] === 0){
            return 1;
        }else {
            return b[0] - a[0];
        }
    });

    for (let i = 0; i < contests.length; i++) {
        if(contests[i][1] === 0){
            MAX += contests[i][0]; 
        }
        else if(k > 0){
            MAX += contests[i][0];
            k--;
        }else {
            MAX -= contests[i][0];
        } 
    }

    return MAX;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]));