/* 
https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
*/

function twoStrings(s1, s2) {
    // Write your code here
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = true;
    }
    
    for (let i = 0; i < s2.length; i++) {
        if(map[s2[i]]){
            return 'YES';
        }
    }
    return 'NO';
}