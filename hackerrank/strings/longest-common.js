/* 
https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
*/
function commonChild(s1, s2) {
    // Write your code here
    let M = s1.length, N = s2.length;
    let dp = [];

    for (let i = 0; i < M+1; i++) {
        dp.push((new Array(N+1)).fill(0));
    }
    for (let i = 1; i < M+1; i++) {
        for (let j = 1; j < N+1; j++) {
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }   
            
        }
    }

    console.log(dp);
    console.log(dp[M][N]);
    return dp[M][N];
}

commonChild('ABCD', 'ACBD');