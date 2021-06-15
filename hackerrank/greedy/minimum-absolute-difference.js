
/* 
https://www.hackerrank.com/interview/interview-preparation-kit/greedy-algorithms/challenges
geeksforgeeks.org/sum-minimum-absolute-difference-array-element/#:~:text=For%20an%20element%20x%20present,abs%20is%20the%20absolute%20value.
*/
function minimumAbsoluteDifference(arr) {
    // Write your code here
    var MIN = Number.MAX_SAFE_INTEGER;
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        const el1 = arr[i], el2 = arr[i+1];
        MIN = Math.min(MIN, Math.abs(el1 - el2));
    }
    return MIN;
}

console.log(minimumAbsoluteDifference([1,-3,71,68,17]));