function isValid(s) {
    // Write your code here
    if(s.length === 0 || s.length === 1){
        return 'YES';
    }
    let map = {}, unequal = 0, temp = null, diff = 0;

    for (let i = 0; i < s.length; i++) {
        if(map[s[i]]){
            map[s[i]] += 1;
        }else {
            map[s[i]] = 1;
        }
    }

    let keys = Object.keys(map);
    console.log(map, keys);
    for (let i = 0; i < keys.length; i++) {
        let val = map[keys[i]];
        if(temp === null){
            temp = val;
        }else {
            if(temp !== val){
                //console.log(temp, map[keys[i]]);
                unequal++;
                var d = Math.abs(val - temp);
                if(d > 1 && ((val > 1 && temp > 1 ) || unequal > 1)){
                    return 'NO';
                }
                if(diff === 0 && d > 0){
                    diff = d;
                }else if(diff !== 0 && diff !== d){
                    return 'NO';
                }
            }
        }
    }
    if(unequal > 1 && unequal < keys.length - 1){
        return 'NO';
    }
    console.log(unequal);
    return 'YES';

}

console.log(isValid("aaaaabc"));