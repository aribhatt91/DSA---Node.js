

/* 
https://leetcode.com/problems/generate-parentheses/submissions/
https://www.youtube.com/watch?v=qBbZ3tS0McI
*/
let arr = [];
const recurse = (open, close, n, str) => {
    if(str.length === 2*n){
        arr.push(str);
        return;
    }
    if(open > 0){
        recurse(open - 1, close, n, str + '(');
    }
    if(open < close){
        //recurse(open, close+1, n, str.substring(0,str.length-1));
        recurse(open, close-1, n, str + ')');
    }
}

var generateParenthesis = function(n) {
    arr = [];
    recurse(n,n,n, "");
    console.log(arr);
    return arr;
};

generateParenthesis(1);