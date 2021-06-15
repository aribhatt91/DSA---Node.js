/**
 * https://leetcode.com/problems/word-ladder/
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

class Q {
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
var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) === -1){
        return 0;
    }
    let adjList = {};

    wordList.push(beginWord);

    for (let i = 0; i < wordList.length; i++) {
        for (let j = 0; j < wordList.length; j++) {
            if(calculateDistance(wordList[i], wordList[j]) === 1){
                if(adjList[wordList[i]]){
                    adjList[wordList[i]].push(wordList[j]);
                }else {
                    adjList[wordList[i]] = [wordList[j]];
                }
            }
        }
    }
    
    //console.log(wordList, adjList);

    let count = 0, visited = {}, found = false;
    //q.enq(beginWord);
    let stk = [];
    stk.push(beginWord);
    visited[beginWord] = true;
    while(stk.length > 0){
        //console.log('queue', stk);
        let word = stk.pop();
        
        count++;
        console.log(word);
        if(word === endWord){
            return count;
        }
        let adjs = adjList[word] || [];
        for (let i = 0; i < adjs.length; i++) {
            if(!visited[adjs[i]]){
                if(adjs[i] === endWord){
                    console.log(adjs[i]);
                    //console.log(visited);
                    return count + 1;
                }
                visited[adjs[i]] = true;
                stk.push(adjs[i]);
            }
        }

        //console.log(visited);
    }
    return count;
    
};
console.log(ladderLength("teach", "place", ["peale","wilts","place","fetch","purer","pooch","peace","poach","berra","teach","rheum","peach"]));