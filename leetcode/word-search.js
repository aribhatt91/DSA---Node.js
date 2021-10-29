/**
 * https://leetcode.com/problems/word-search/
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 
 * 
 */


var exist = function(board, word) {
    var M = board.length, 
    N = board[0].length;

    var s = new Set();

    var isSafe = (M, N, i, j) => {
        return i >=0 && j >= 0 && i < M && j < N;
    };
    var dfs = function(i, j, w) {
        //console.log('dfs',w, board[i][j]);
        if(w >= word.length){
            return true;
        }
        var safe = isSafe(M,N,i,j);
        if(!safe){
            //console.log('c2 - not safe', i, j, w);
            return false;
        }
        if(word[w] !== board[i][j] || s.has((i + '-' + j))){
            //console.log('c3', i, j, word[w], board[i][j]);
            return false;
        }

        //console.log(word[w]);
        s.add((i + '-' + j));
        var x_map = [1, 0, -1, 0],
            y_map = [0, 1, 0, -1];

        var found = dfs(i + x_map[0], j + y_map[0], w+1) || dfs(i + x_map[1], j + y_map[1], w+1) || dfs(i + x_map[2], j + y_map[2], w+1) || dfs(i + x_map[3], j + y_map[3], w+1);

        s.delete((i + '-' + j));
        
        
        return found;
    };
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if(dfs(i, j, 0)){
                return true;
            }
        }
    }
    return false;
};

var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
word = "ABCCED";

var res = exist(board, word);
console.log(res);