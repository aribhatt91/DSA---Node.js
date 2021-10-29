/**
 * https://leetcode.com/problems/word-ladder/
 * https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var calculateDistance = (w1, w2) => {
    let count = 0;
    for (let i = 0; i < w1.length; i++) {
        if(w1[i] !== w2[i]){
            count++;
        }
    }
    return count;
}


class MQueue {
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

class Word {
    constructor(word, level){
        this.word = word;
        this.level = level ? level : 0;
    }
}
var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) === -1 || beginWord === endWord){
        return 0;
    }
    let adjList = {};
    let set = new Set(wordList);

    let q = new MQueue();
    let visited = {};
    q.enq(new Word(beginWord, 1));

    while(!q.isEmpty()){

        let word = q.deq(); //stk.pop();
        let level = word.level;
        visited[word.word] = true;
        set.delete(word.word);
        
        if(word.word === endWord){
            return level;
        }

        set.forEach(function(item) {
            if(!visited[item]){
                if(calculateDistance(word.word, item) === 1){
                    q.enq(new Word(item, level+1));  
                }
            }
        });
    }
    
    return 0;
    
};
//console.log(ladderLength("teach", "place", ["peale","wilts","place","fetch","purer","pooch","peace","poach","berra","teach","rheum","peach"]));

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));


