/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} s
 * @return {number}
 */

var isNum = function(c){
    return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
};
var checkBoundMin = function(num) {
    console.log('checkBoundMin');
    var MIN = [2,1,4,7,4,8,3,6,4,8];
    if(num.length > MIN.length){
        return MIN;
    }else if(MIN.length === num.length){
        var equal_so_far = -1;
        for (let i = 0; i < num.length; i++) {

            if((equal_so_far > -1 || i == 0) && num[i] > MIN[i]){
                return MIN;
            }else if(num[i] === MIN[i]){
                equal_so_far = i;
            }else if(num[i] < MIN[i]) {
                break;
            }
        }
    }

    return num;
};
var checkBoundMax = function(num) {
    var MAX = [2,1,4,7,4,8,3,6,4,7];
    if(num.length > MAX.length){
        return MAX;
    }else if(MAX.length === num.length){
        var equal_so_far = -1;
        for (let i = 0; i < num.length; i++) {
            if((equal_so_far > -1 || i == 0) && num[i] > MAX[i]){
                return MAX;
            }else if(num[i] === MAX[i]){
                equal_so_far = i;
            }else if(num[i] < MAX[i]) {
                break;
            }
        }
    }

    return num;
};
var myAtoi = function(s) {
    var isNeg = false, num = [], signIndex = -1;

    for (let i = 0; i < s.length; i++) {
        if(signIndex > -1 && i === signIndex+1){
            if(!isNum(s[i])){
                break;
            }
        }
        if(s[i] === ' ' && num.length === 0){
            continue;
        }else if(s[i] === '+' && num.length === 0){
            signIndex = i;
        }else if(s[i] === '-' && num.length === 0) {
            signIndex = i;
            isNeg = true;
        }else if(isNum(s[i])){
            /* if(num.length === 0 && s[i].charCodeAt(0) - 48 === 0){
                continue;
            } */
            num.push(s[i].charCodeAt(0) - 48);
        }else {
            break;
        }
    }
    var temp = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] !== 0){
            break;
        }else{
            temp = i;
        }
    }
    num = num.slice(temp, num.length);

    if(num.length === 0){
        return 0;
    }

    //console.log(num.join(''));


    var res = 0;
    
    if(isNeg){
        num = checkBoundMin(num);
    }else {
        num = checkBoundMax(num);
    }
    for (let i = 0; i < num.length; i++) {
        res = res*10 + num[i];
    }
    if(isNeg){
        res *= -1;
    }

    return res;

};
console.log(myAtoi("-6147483648"));
