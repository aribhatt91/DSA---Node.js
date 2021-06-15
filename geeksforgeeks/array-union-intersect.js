/* 
https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/
*/

const union = (arr1, arr2) => {
    let map = {}, max = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < max; i++) {
        if(i<arr1.length){
            if(!map[arr1[i]]) {
                map[arr1[i]] = 1;
            }else {
                map[arr1[i]] += 1;
            }
        }
        if(i<arr2.length){
            if(!map[arr2[i]]) {
                map[arr2[i]] = 1;
            }else {
                map[arr2[i]] += 1;
            }
        }
    }
    return Object.keys(map);
}

const intersection = (arr1, arr2) => {
    let map = {}, max = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < max; i++) {
        if(i<arr1.length){
            if(!map[arr1[i]]) {
                map[arr1[i]] = 1;
            }else {
                map[arr1[i]] += 1;
            }
        }
        if(i<arr2.length){
            if(!map[arr2[i]]) {
                map[arr2[i]] = 1;
            }else {
                map[arr2[i]] += 1;
            }
        }
    }
    return Object.keys(map).filter(item => map[item] === 2);
}

console.log(intersection([1, 3, 4, 5, 7], [2, 3, 5, 6]));