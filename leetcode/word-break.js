/**
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreakRec = function(s, wordDict) {
    if(s===""){
        return true;
    }
    var isPresent = false; 
    for(var i=0; i<wordDict.length; i++){
        if(s.indexOf(wordDict[i]) > -1){
            var index = s.indexOf(wordDict[i]);
            console.log(i,s,index, wordDict[i]);
            isPresent = isPresent || (wordBreakRec(s.substring(0, index), wordDict) && wordBreakRec(s.substring((index + wordDict[i].length), s.length), wordDict));
        }
    }
    return isPresent;
};

var wordBreak = function(s, wordDict) {
    let len = s.length, 
    dp = (new Array(len+1)).fill(false);
    dp[len] = true;
    for (let i = len-1; i >= 0; i--) {

        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            if(i+word.length <= len){
                const substr = s.substring(i, i+word.length);
                
                if(substr == word){
                    dp[i] = dp[i+word.length];
                }
                console.log(substr, '--', word, dp[i]);
                
            }
            if(dp[i]){
                break;
            }
        }
    }
    console.log(dp);
    return dp[0];
};


console.log(wordBreak("applepenapple", ["apple","pen"]));