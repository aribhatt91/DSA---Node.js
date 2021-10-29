/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * https://leetcode.com/problems/unique-paths-ii/
 */

var navigate = (grid, m, n, i, j) => {
    if(i === m-1 && j === n-1){
        return 1;
    }else if(i > m-1 || j > n-1 || grid[i][j] === 1){
        return 0;
    }
    return navigate(grid, m, n, i+1, j) + navigate(grid, m, n, i, j+1);
}
var dp = (grid, m, n) => {
    var memo = [];

    for (let i = 0; i < m; i++) {
        var row = [];
        for (let j = 0; j < n; j++) {
            if(grid[i][j] === 1){
                row.push(0);
            }else {
                row.push(1);
            }
        }
        memo.push(row);
    }
    //console.log(memo);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j] === 1){
                memo[i][j] = 0;
            }else {
                if(i === 0 && j > 0){
                    memo[i][j] = memo[i][j-1];
                }else if(j === 0 && i > 0){
                    memo[i][j] = memo[i-1][j];
                }else if(i > 0 && j > 0){
                    memo[i][j] = memo[i-1][j] + memo[i][j-1];
                }
            }
           
            
        }
    }
    //console.log(memo);
    return memo[m-1][n-1];
}
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length, n = obstacleGrid[0].length;
    var res = dp(obstacleGrid, m, n);//navigate(obstacleGrid, m, n, 0, 0);    
    return res;
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));