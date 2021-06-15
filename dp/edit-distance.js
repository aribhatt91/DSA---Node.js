/* 
Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.  

    Insert
    Remove
    Replace

All of the above operations are of equal cost. 

Input:   str1 = "geek", str2 = "gesek"
Output:  1
We can convert str1 into str2 by inserting a 's'.

Input:   str1 = "cat", str2 = "cut"
Output:  1
We can convert str1 into str2 by replacing 'a' with 'u'.

Input:   str1 = "sunday", str2 = "saturday"
Output:  3
Last three and first characters are same.  We basically
need to convert "un" to "atur".  This can be done using
below three operations. 
Replace 'n' with 'r', insert t, insert a
*/

const recurse = (str1, str2, m, n) => {
    if(m === 0) return n;
    if(n === 0) return m;

    if(str1[m-1] === str2[n-1]){
        recurse(str1, str2, m-1, n-1);
    }
    return 1 + Math.min(recurse(str1, str2, m, n-1), recurse(str1, str2, m-1, n), recurse(str1, str2, m-1, n-1));
}

const editDistanceDP = (str1, str2) => {
    let dp = [];
    let m = str1.length, n = str2.length;

    if(m==0) return n;
    if(n===0) return m;

    for (let i = 0; i < m+1; i++) {
        dp.push([]);
        for (let j = 0; j < n+1; j++) {
            if(i === 0 && j === 0){
                dp[i][j] = 0;
            }else if(i===0){
                dp[i][j] = j; 
            }else if(j===0){
                dp[i][j] = i;
            }else{
                if(str1[i-1] === str2[j-1]){
                    dp[i][j] = dp[i-1][j-1];
                }else {
                    dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]);
                }
            }
            
        }
    }
    return dp[m][n];
}

console.log(editDistanceDP('home', 'sunday'));