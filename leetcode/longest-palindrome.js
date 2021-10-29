/**
 * https://leetcode.com/problems/longest-palindromic-substring/submissions/
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var low, high, max = 1, n = s.length, START = 0;

    for (let i = 1; i < n; i++) {
        /* Find the max length of even length palindromes */
        low = i-1;
        high = i;
        while(low >= 0 && high < n && s.charAt(low) === s.charAt(high)){
            if(max < high - low + 1){
                max = high - low + 1;
                START = low;
            }
            
            low--;
            high++;
        }

        /* Find the max length of odd length palindromes */
        low = i-1;
        high = i+1;
        while(low >= 0 && high < n && s.charAt(low) === s.charAt(high)){
            if(max < high - low + 1){
                max = high - low + 1;
                START = low;
            }
            low--;
            high++;
        }
    }
    //max = max%2===0 ?  max-1 : max;
    return s.substring(START, START+max);
    //return max;
}

/* 
https://www.youtube.com/watch?v=y2BD4MJqV20
*/