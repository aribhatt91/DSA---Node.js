
/**
 * https://practice.geeksforgeeks.org/problems/269f61832b146dd5e6d89b4ca18cbd2a2654ebbe/1/
 * @param {number[][]} hospital
 * @param {number} r
 * @param {number} c
*/
class MQueue {
	constructor(){
		this._que = [];
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enqueue(){
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	dequeue(){
		var len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
	isEmpty(){
		return this._que.length === 0;
	}
}
class Solution {
    helpaterp(hospital, r, c){
        // code here
        let MAX = 0;
        let time_array = (new Array(r)).fill((new Array(c)).fill(-1));
        
        let q = new MQueue();
        let bfs = (i, j) => {

            while(!q.isEmpty()){
                let coord = q.dequeue(),
                x = coord[0], y = coord[1], hd = coord[2];
                var x_map = [1, 0, -1, 0],
                y_map = [0, 1, 0, -1];

                for (let index = 0; index < 4; index++) {
                    let nx = x+x_map[index], ny = y+y_map[index],
                    isSafe = nx >= 0 && ny >= 0 && nx < r && ny < c; 
                    
                    if(isSafe && hospital[nx][ny] === 1){
                        hospital[nx][ny] = 2;
                        time_array[nx][ny] = hd+1;
                        q.enqueue([nx,ny, hd+1]);
                    }
                }
                //hospital[x][y] = 0;
            }
            //MAX = (temp_max > MAX) ? temp_max : MAX;
        };

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if(hospital[i][j] === 2) {
                    time_array[i][j] = 0;
                    q.enqueue([i,j,0]);
                }
            }
        }
        bfs();

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if(hospital[i][j] === 1) {
                    return -1;
                }
                if(time_array[i][j] > MAX) {
                    MAX = time_array[i][j];
                }
            }
        }

        return MAX;
    }
}

let s = new Solution();
