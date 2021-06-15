/* 
https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

function freqQuery(queries) {
    let map = {}, res = [], fmap = {};

    for (let i = 0; i < queries.length; i++) {
        if(queries[i][0] === 1){
            if(map[queries[i][1]]){
                fmap[map[queries[i][1]]] = (fmap[map[queries[i][1]]] || 0) - 1;
                map[queries[i][1]] += 1;
            }else {
                map[queries[i][1]] = 1;
            }
            fmap[map[queries[i][1]]] = (fmap[map[queries[i][1]]] || 0) + 1;
        }else if(queries[i][0] === 2){
            if(map[queries[i][1]]){
                fmap[map[queries[i][1]]] = (fmap[map[queries[i][1]]] || 0) - 1;
                map[queries[i][1]] -= 1;
                fmap[map[queries[i][1]]] = (fmap[map[queries[i][1]]] || 0) + 1;
                if(map[queries[i][1]] === 0){
                    //delete map[queries[i][1]];
                }
            }
        }else if(queries[i][0] === 3){
            let isPresent = 0;
            //console.log(fmap);
            if(fmap[queries[i][1]] > 0){
                isPresent = 1;
            }
            res.push(isPresent);
        }
    }
    return res;
}