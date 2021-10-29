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