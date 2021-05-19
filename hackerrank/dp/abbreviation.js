//https://www.hackerrank.com/challenges/abbr/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

/* function abbreviation(a, b) {
    // Write your code here
    if(a === b){
        //console.log('basecase');
        return 'YES';
    }



    let index = -1;

    for (let i = 0; i < a.length; i++) {
        //console.log(a[i], a.charCodeAt(i), b.indexOf(a[i]));
        if(a.charCodeAt(i) >= 65 && a.charCodeAt(i) <=90 && b.indexOf(a[i]) === -1){
            return 'NO';
        }
        
    }
    if(a.indexOf(b) > -1){
        return 'YES';
    }
    a = a.toLowerCase();
    b = b.toLowerCase();

    for (let i = 0; i < b.length; i++) {
        var ei = a.indexOf(b[i]);
        if(ei > -1 && ei > index){
            index = ei;
        }else {
            return 'NO';
        }
    }
    return 'YES';

} */


let possible = false;
let map = {};
const abbr = (a, b) => {
    /* 
        1. If length of a is less than b 
        2. If there's a mismatch in uppercase letters - since we can neither remove nor modify uppercase letters
    */
    if( possible || !a || a.length < b.length){
        return;
    }

    if(b.length === 0){
        var all_lower = true;
        for (let i = 0; i < a.length; i++) {
            if(isUpperCase(a[i])){
                all_lower = false;
            } 
        }
        possible = all_lower;
    }

    if(map[a] === b){
        return
    }else {
        map[a] === b;
    }
    let fc = a[0] + "";
    a = a.substr(1, a.length);

    if(isLowerCase(fc)){
        abbr(a, b);
    }
    if(fc.toUpperCase() !== b[0]){
        return;
    }
    b = b.substr(1, b.length);
    abbr(a, b);
    return;
}

function abbreviation(a, b) {
    possible = false;
    abbr(a, b);
    return possible ? 'YES' : 'NO';
}

const isUpperCase = (c) => {
    if(c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90){
        return true;
    }
    return false;
}
const isLowerCase = (c) => {
    if(c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122){
        return true;
    }
    return false;
}

//https://www.youtube.com/watch?v=cl1rOsKxZOI
//https://iawale.medium.com/abbreviation-hackerrank-medium-4601219c07d1
function abbreviation(a, b) {
    let memo = [];

    for (let i = 0; i <= a.length + 1; i++) {
        memo.push(Array(b.length + 1));
    }
    memo[0][0] = true;
    for (let i = 1; i < a.length + 1; i++) {
        if(isUpperCase(a[i-1])){
            memo[i][0] = false;
        }else {
            memo[i][0] = true;
        }
    }

    for (let i = 1; i < a.length + 1; i++) {
        for (let j = 1; j < b.length + 1; j++) {
            if(a[i-1] === b[j-1]) {
                memo[i][j] = memo[i-1][j-1];
            }else if(isLowerCase(a[i-1]) && a[i-1].toUpperCase() === b[j-1]) {
                memo[i][j] = memo[i-1][j-1] || memo[i-1][j];
            }else if(isUpperCase(a[i-1])){
                memo[i][j] = false;
            }else {
                memo[i][j] = memo[i-1][j];
            } 
        }
    }

    return memo[a.length][b.length] ? 'YES' : 'NO';
}

console.log(abbreviation("beFgH", "EFH")); 