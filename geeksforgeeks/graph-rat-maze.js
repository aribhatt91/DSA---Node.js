/* 
https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time.
*/


let paths = [];

const maze = (m, N, i, j, curr_path, visited) => {
    //console.log(curr_path);
    if(i<0 || i>N-1 || j<0 || j>N-1){
        return 0;
    }
    if(m[i][j] === 0){
        return ;
    }
    
        
    if(i === N-1 && j === N-1 && curr_path !== ""){
        paths.push(curr_path);
        console.log(curr_path)
        return 1;
    }
    m[i][j] = 0;
    maze(m, N, i+1, j, (curr_path + 'D'));
    maze(m, N, i-1, j, (curr_path + 'U'));
    maze(m, N, i, j+1, (curr_path + 'R'));
    maze(m, N, i, j-1, (curr_path + 'L'));
    m[i][j] = 1;
}

const main = () => {
    let N = 5,
    m = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

    

    maze(m, N, 0, 0, "", []);
    paths.sort();

    console.log(paths);
}
main();