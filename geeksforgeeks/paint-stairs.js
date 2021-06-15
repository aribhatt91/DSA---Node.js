/* 
https://www.geeksforgeeks.org/ways-paint-stairs-two-colors-two-adjacent-not-yellow/
Given n stairs and we have 2 colour yellow and green the task is that we have to paint given stairs by given colour with condition is that we cannot paints two yellow steps directly after each other.

*/

const recurse = (n, i, colour) => {
    if(i < 0){
        return 0;
    }
    if(n==1 || (i=== 0 && colour !== 'y')) {
        return 2;
    }
    if(i=== 0 && colour === 'y'){
        return 1;
    }
    if(colour === 'y'){
        return recurse(n, i-1, 'g');
    }
    return recurse(n, i-1, 'y') + recurse(n, i-1, 'g');
}

/* 
We can paint ith stair in 2 ways
1) Painting it Green
    In this case total number of ways we can paint upto i th stair = Number of ways we can paint upto (i-1)th stair
    (because ith stair is Green in colour, the stairs before i th place can have any valid combination of Green and Yellow).
2) Painting it Yellow
    In this case total number of ways we can paint upto ith stair = Number of ways we can paint upto (i-2)th stair
    (because ith stair is yellow , (i-1)th stair cannot be yellow, it must be Green )

This gives us the fibonacci series -
answer[i] = answer[i-1] + answer[i-2]
*/
const recurseFib = (n) => {
    if(n <= 0){
        return 0;
    }
    if(n==1) {
        return 2;
    }
    if(n==2){
        return 3;
    }
    return recurseFib(n-1) + recurseFib(n-2);
}

const main = () => {
    let n = 5;
    console.log(recurse(n, n-1, ''));
}

main();