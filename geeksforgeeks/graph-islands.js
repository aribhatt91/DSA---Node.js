/* 
https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1
*/
//User function Template for javascript


/**
 * @param {string[][]} grid
 * @returns {number}
*/
class Solution 
{
    //Function to find the number of islands.
    dfs(N, M, i, j, visited, grid) {
        
        if(i>-1 && j>-1 && i<N && j<M && grid[i][j] === 1){
            console.log(i, '---', j, ' visited', visited[i][j]);
        }
        //if(i>-1 && j>-1 && i<N && j<M && !visited[i][j] && grid[i][j] === 1){
            console.log(i, '----', j);
            visited[i][j] = true;
            let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1 ],
            colNbr = [-1, 0, 1, -1, 1, -1, 0, 1 ];

            for (let index = 0; index < 8; index++) {
                let row = i + rowNbr[index],
                col = j + colNbr[index];
                if(row>-1 && col>-1 && row<N && col<M && !visited[row][col] && grid[row][col]) {
                    this.dfs(N,M,row,col,visited, grid);
                }
                
            }
            //visited[i][j] = true;
        //}
    }
    numIslands(grid)
    {
        // code here
        let N = grid.length, M = grid[0].length;
        let visited = (new Array(N)).fill((new Array(M)).fill(false)),
        count = 0;
        console.log(visited);
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if(!visited[i][j] && grid[i][j]){
                    //visited[i][j] = true;
                    console.log('starting at --', i, j);
                    this.dfs(N,M,i,j,visited,grid);
                    count++;
                }
                
            }
            
        }
        return count;
    }
}

const main = () => {
    let s = new Solution(),
    grid = [[0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 1]];
    console.log(s.numIslands(grid));
};

main();