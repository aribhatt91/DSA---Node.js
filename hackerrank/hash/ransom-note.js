/* 
https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

function checkMagazine(magazine, note) {
    // Write your code here
    let map = {};
    
    for (let i = 0; i < magazine.length; i++) {
        if(map[magazine[i]]){
            map[magazine[i]] += 1;
        }else {
            map[magazine[i]] = 1;
        }
    }

    for (let i = 0; i < note.length; i++) {
        if(!map[note[i]]){
            console.log('No');
            return;
        }else {
            map[note[i]] -= 1;
        }
    }
    console.log('Yes');
    return;
}