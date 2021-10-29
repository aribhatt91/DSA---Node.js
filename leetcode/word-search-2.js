/**
 * https://leetcode.com/problems/word-search-ii/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 */
/* 
BAD BRUTE-FORCE SOLUTION
*/
var findWordsOld = function(board, words) {
    var M = board.length, 
    N = board[0].length;

    var s = new Set(), op = new Set();

    var isSafe = (M, N, i, j) => {
        return i >=0 && j >= 0 && i < M && j < N;
    };
    var dfs = function(i, j, w, word) {
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

        var found = dfs(i + x_map[0], j + y_map[0], w+1, word) || dfs(i + x_map[1], j + y_map[1], w+1, word) || dfs(i + x_map[2], j + y_map[2], w+1, word) || dfs(i + x_map[3], j + y_map[3], w+1, word);

        s.delete((i + '-' + j));
        
        
        return found;
    };
    words.forEach(word => {
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if(dfs(i, j, 0, word)){
                    op.add(word);
                }
            }
        }
    });
    
    return op;
};



class TrieNode {
    constructor(char){
        this.char = char ? char : null;
        this.children = (new Array(26)).fill(null);
        this.isEow = false;
        //Prefix count at any point gives us how many words in the trie have the prefix
        this.prefix_count = 0;
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode();
    }
    getIndex(c){
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    addWord(key){
        let ptr = this.root;
        for (let i = 0; i < key.length; i++) {
            const index = this.getIndex(key[i]);
            if(!ptr.children[index]){
                ptr.children[index] = new TrieNode(key[i]);

            }
            ptr = ptr.children[index];
            ptr.prefix_count++;
        }
        ptr.isEow = true;
    }
    getRoot(){
        return this.root;
    }
}

var findWords = function(board, words) {
    var R = board.length, 
    C = board[0].length;
    var res = new Set();
    var dict = new Trie(), visited = {};
    var isSafe = (i, j) => {
        return i >=0 && j >= 0 && i < R && j < C;
    };

    var getCharCode = (w) => {
        return w.charCodeAt(0) - 'a'.charCodeAt(0);
    };

    for(var w in words) {
        dict.addWord(words[w]);
    }

    var dfs = function(i,j, tnode, word){
        
        if(!isSafe(i,j) || !tnode.children[getCharCode(board[i][j])] || visited[(i + '-' + j)]){
            return;
        }
        
        visited[(i + '-' + j)] = true;
        console.log(tnode.char, word, board[i][j], visited);
        tnode = tnode.children[getCharCode(board[i][j])];
        word += board[i][j];
        if(tnode.isEow){
            res.add(word);
        }

        var x_map = [1, 0, -1, 0],
            y_map = [0, 1, 0, -1];

        dfs(i + x_map[0], j + y_map[0], tnode, word);
        dfs(i + x_map[0], j + y_map[1], tnode, word);
        dfs(i + x_map[0], j + y_map[2], tnode, word);
        dfs(i + x_map[0], j + y_map[3], tnode, word);

        delete visited[(i + '-' + j)];
        
    };
    //console.log(dict);
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            var node = dict.getRoot();
            dfs(i,j,node, "");
        }
    }

    return res;
};

var board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"];

var res = findWords(board, words);
console.log(res);