/* 

*/

function countTriplets(arr, r) {
    let count = 0, map = {};
    for (let i = 0; i < arr.length; i++) {
        if(map[arr[i]]){
            map[arr[i]].push(i);
        }else {
            map[arr[i]] = [i];
        }
    }
    //console.log(arr);
    //console.log(map);
    for (let i = 2; i < arr.length; i++) {
        if(map[arr[i]/r] && map[(arr[i]/r)/r]){
            let first_set = map[arr[i]/r], sec_set = map[(arr[i]/r)/r], s1 = 0, s2 = 0, j=0, k= 0;
            let jmax = 0, kmax = 0;
            for (; j < first_set.length; j++) {
                if(first_set[j] < i){
                    s1++;
                    if(first_set[j] > jmax){
                        jmax = first_set[j];
                    }
                }
            }
            for (; k < sec_set.length; k++) {
                if(sec_set[k] < jmax){
                    s2++;
                    if(sec_set[k] > kmax){
                        kmax = sec_set[k];
                    }
                }
            }
            count += (s1*s2);
        }
    }
    return count;
}