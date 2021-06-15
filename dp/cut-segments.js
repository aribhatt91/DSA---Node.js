//User function Template for javascript
https://practice.geeksforgeeks.org/problems/cutted-segments1642/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=5&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage5sortBysubmissionscompany[]Amazon
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
*/

class Solution
{
    maximizeTheCutsUtil(n, x, y, z)
    {
        // code here
        if(n==0){return 0}
        if(n < x && n < y && n < z){return -1}
        
        
        return 1 + Math.max(this.maximizeTheCutsUtil(n-x, x, y, z), this.maximizeTheCutsUtil(n-y, x, y, z), this.maximizeTheCutsUtil(n-z, x, y, z))
        
    }
    //Function to find the maximum number of cuts.
    maximizeTheCuts(n, x, y, z)
    {
        // code here
        let sizes = [x,y,z];
        sizes.sort((a,b)=>a-b);
        let dp = [];
        for (let i = 0; i < 4; i++) {
            dp.push((new Array(n+1)).fill(-1));
        }
        //console.log(dp, sizes);
        for (let i = 0; i < 4; i++) {

            for (let j = 0; j < n+1; j++) {
                if(j === 0){
                    dp[i][j] = 0;
                }else if(i === 0){
                    dp[i][j] = 0;
                }else {
                    if(j >= sizes[i-1]){
                        if(j - sizes[i-1] > 0 && dp[i][j - sizes[i-1]] === 0){
                            dp[i][j] = dp[i-1][j];
                        }else{
                            dp[i][j] = Math.max(1 + dp[i][j - sizes[i-1]], dp[i-1][j]);
                        }
                    }else {
                        dp[i][j] = dp[i-1][j];
                        
                    }
                    
                }
            }
        }
        //console.log(dp);
        return dp[3][n];
    }
}