/*
Given a number and an array of number, is it possible to get the humber from the array of numbers
*/

const canSumRec = (targetSum, numbers) => {
    if(targetSum === 0){
        return true;
    }
    if(targetSum < 0){
        return false;
    }
    for (let index = 0; index < numbers.length; index++) {
        const remainder = targetSum - array[index];
        return canSumRec(remainder, numbers) === true
    }
    return false;
}

const canSum = (targetSum, numbers) => {
    if(targetSum === 0){
        return true;
    }
    if(targetSum < 0){
        return false;
    }
    for (let index = 0; index < numbers.length; index++) {
        const remainder = targetSum - numbers[index];
        if(canSum(remainder, numbers) === true){
            return true;
        }
    }
    return false;
}

export default canSum;