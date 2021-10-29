/* 
https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1
*/
function findLongestConseqSubseq(array){
    arr.sort(function(a,b){return a-b;});
    var max_so_far = 1, max = 0;

    for (let i = 1; i < array.length; i++) {
        if(array[i] === array[i-1] + 1){
            max_so_far++;
        }else {
            if(max_so_far > max){
                max = max_so_far;
            }
            max_so_far = 1;
        }
    }

    return max;
}

function findLongestConseqSubseq(array){
    var map = {};
    var max_so_far = 1, max = 0, s = new Set();

    for (let i = 0; i < array.length; i++) {
        s.add(array[i]);
    }
    
    for (let i = 0; i < array.length; i++) {
        if (!s.has(array[i]-1)){
            max_so_far = 1;
            let j = array[i];
            while(s.has(j)){
                j++;
                max_so_far++;
            }
            if(max_so_far > max){
                max = max_so_far;
            }
        }
    }
    return max;
}