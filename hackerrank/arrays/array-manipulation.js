//https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
//https://www.youtube.com/watch?v=6dbfeaqRBFU
function arrayManipulation(n, queries) {
    // Write your code here
    let aux = [], max = Number.MIN_SAFE_INTEGER, current = 0;
    for (let index = 1; index <= n; index++) {
        aux.push(0);
    }

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i],
        a = query[0], b = query[1], k = query[2];

        
        aux[a-1] += k;
        
        if(b < n){
            aux[b] -= k;
        }
        
        /* for (let j = a-1; j < b; j++) {
            aux[j] += k;
            if(max < aux[j]){
                max = aux[j];
            }
        }  */ 
    }
    //console.log(aux, aux.length);
    for (let i = 0; i < n; i++) {
        current += aux[i];
        if(current > max){
            max = current;
        }
    }
    return max;
}
console.log(arrayManipulation(10, [[2,6,8], [3,5,7], [1,8,1], [5,9,15]]));

/*  
"Why we add -k to 1st element outside of the region": 
To better understand/feel the solution - let's make a manageable - small example with only one element in 2 not overlapping regions:
For simplicity let's use 0 base index:
a   b   k
0   0   200
1   1   300

0      1
200
        300
Result must be 300.

After 1st cycle we would have:
0: 200 1: -200


-200 is a accumulated "penalty" of not being in the region

After 2nd:
0:200  1: -200+300 =>  0:200 1:100

You can immediately see that the final result: 200 + 100 = 300 

Number at each index is the sum of all overlapped regions k values and penalties of not overlapped ones. Hope it makes sense.
*/