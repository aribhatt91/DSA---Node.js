//https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1

const findLongestConseqSubseq = (arr) => {
    let map = {}, max = 1;

    for (let index = 0; index < arr.length; index++) {
        map[arr[index]] = true;
    }
    let keys = Object.keys(map);
    console.log(map);
    
    let flag = false, max_so_far = 1;
    
    for (let i = 0; i < keys.length; i++) {
        const element = Number(keys[i]);
        //console.log(element, max_so_far);
        if(map[element - 1]){
            flag = true;
            max_so_far++;
            if(max_so_far > max){
                max = max_so_far;
            }
        }else {
            max_so_far = 1;
            flag = false;
        }
        //console.log(max);
        
    }

    return max;
}

console.log(findLongestConseqSubseq([1,9,3,10,4,20,2]));