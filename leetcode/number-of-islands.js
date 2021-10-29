/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.com/problems/number-of-islands/
 * https://www.youtube.com/watch?v=nNGSZdx6F3M&t=829s
 */
var dfs = function(grid, i, j) {
    var m = grid.length, n = grid[0].length;
    if(i<0 || i >= m || j<0 || j>=n || grid[i][j] === '0'){
        return;
    }
    grid[i][j] = '0';
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
}
 var numIslands = function(grid) {
    var m = grid.length, n = grid[0].length, count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j] === '1'){
                dfs(grid, i, j);
                count++;
            }
        }
        
    }
    return count;
};

console.log(numIslands([
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["1","1","0","1","0"],
    ["0","0","0","0","1"]
  ]))