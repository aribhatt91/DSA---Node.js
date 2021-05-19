//https://www.hackerrank.com/challenges/candies/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

function candies(n, arr) {
    // Write your code here

    if(n == 0 || n === 1){return n;}
    if(n === 2){
        if(arr[0] === arr[1]){
            return 1;
        }
        return 3;
    }
    let candies = [], sum = 0;


    for (let i = 0; i < n; i++) {
        candies.push(1);
        candies[i] = arr[i] > arr[i-1] ? candies[i-1] + 1 : 1;
    }
    for (let i = n-2; i >= 0; i--) {
        candies[i] = arr[i+1] < arr[i] && candies[i+1] >= candies[i] ? candies[i+1] + 1 : candies[i];
        sum += candies[i];
    }
    return sum;
}