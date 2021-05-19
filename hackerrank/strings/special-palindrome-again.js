
//https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(n, s) {
    let map = {};

    for (let i = 0; i < n; i++) {
        if(map[s[i]]){
            map[s[i]] += 1;
        }else {
            map[s[i]] = 1;
        }
    }

    if(Object.keys(map).length === 1){
        
    }
}