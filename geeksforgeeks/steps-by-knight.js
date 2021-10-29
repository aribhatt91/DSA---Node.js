/* 
https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1
Given a square chessboard, the initial position of Knight and position of a target. Find out the minimum steps a Knight will take to reach the target position.

Note:
The initial and the target position co-ordinates of Knight have been given accoring to 1-base indexing.

https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/
*/
// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(" ");
        let N = parseInt(input_line[0]);
        
        input_line = readLine().split(" ");
        let a = parseInt(input_line[0]);
        let b = parseInt(input_line[1]);
        
        input_line = readLine().split(" ");
        let c = parseInt(input_line[0]);
        let d = parseInt(input_line[1]);
    
        let KnightPos = new Array(a,b);
        let TargetPos = new Array(c,d); 

        let obj = new Solution();
        let ans = obj.minStepToReachTarget(KnightPos, TargetPos, N);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} KnightPos
 * @param {number[]} TargetPos
 * @param {number} N
 * @returns {number}
*/
class Queue {
	constructor(){
		this._que = [];
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enq(){
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	deq(){
		var len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
	isEmpty(){
		return this._que.length === 0;
	}
}
const inBound = (N, i, j) => {
    if( i >= N || j >= N || i<0 || j < 0) {
        return false;
    }
    return true;
};

class Cell {
    constructor(x, y, dis){
        this.x = x;
        this.y = y;
        this.dis = dis ? dis : 0;
    }
}
const bfs = (N, X, Y, i, j) => {
    
    let board = new Array(N);

    for (let k = 0; k < N; k++) {
        board[k] = (new Array(N)).fill(0);
    }

    let x_map = [2, 2, -2, -2, 1, 1, -1, -1],
    y_map = [1, -1, 1, -1, 2, -2, 2, -2],
    q = new Queue();

    q.enq(new Cell(i-1,j-1, 0));
    board[i-1][j-1] = 1;

    while(!q.isEmpty()){
        let el = q.deq();
        if(el.x === X-1 && el.y === Y-1){
            return el.dis;
        }
        for (let k = 0; k < 8; k++) {
            let x = el.x + x_map[k],
            y = el.y + y_map[k];
            
            if(inBound(N, x, y) && board[x][y] !== 1){
                board[x][y] = 1;
                q.enq(new Cell(x, y, el.dis + 1));
            }
        }
    }
    return Number.MAX_VALUE;
}
class Solution
{
    //Function to find out minimum steps Knight needs to reach target position.
	minStepToReachTarget(KnightPos, TargetPos, N)
	{
		// code here
		return bfs(N, TargetPos[0], TargetPos[1], KnightPos[0], KnightPos[1]);
	}
}