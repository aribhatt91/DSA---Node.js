/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 * https://www.youtube.com/watch?v=nNGSZdx6F3M&t=829s
 */
var letterMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};
var dfs = function(index, combinations, str, digits) {
    /* 
        1. 
        2. If last we are reading last digit -
            - Check if for the current digit/node we have passed the last digit, if yes - add the string to result combinations
            - Else, visit loop through the possible alphabets for a digit and recurse;
    */
    
    if(index === digits.length){
        combinations.add(str);
        return;
    }
    var options = letterMap[digits[index]];

    for (let i = 0; i < options.length; i++) {
        dfs(index+1, combinations, str + options[i], digits);
    }
}
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return [];
    }
    var combinations = new Set();
    dfs(0, combinations, "", digits);
    //console.log(combinations);
    return Array.from(combinations);
};

letterCombinations("9836592324");