//https://leetcode.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	var res;
    var strReverse = function(str){var a = str.split(""); return a.reverse().join("")},
    add = function(arr1, arr2){
        var res = [], carry = 0, i=0;
        for(; i<arr2.length; i++){
            var sum = Number(arr1[i]) + Number(arr2[i]) + carry;
            if(sum > 9){
                sum = sum%10;
                carry = 1;
            }else {
                carry = 0;
            }
            res.push(sum);
        }
        for(;i<arr1.length; i++){
            var sum = Number(arr1[i]) + carry;
            if(sum > 9){
                sum = sum%10;
                carry = 1;
            }else {
                carry = 0;
            }
            res.push(sum);
        }
        if(carry){
            res.push(carry)
        }
        return res.reverse().join("");
    }
    if(num1.length > num2.length){
    	res = add(strReverse(num1), strReverse(num2));
    }else {
    	res = add(strReverse(num2), strReverse(num1));
    }
    return res;
};