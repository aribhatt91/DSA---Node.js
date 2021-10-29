/**
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let map = {}, res = new Set(), n = nums.length;
    if(n<4){
        return [];
    }
    nums.sort((a,b)=>a-b);

    let p1 = null, p2=null, p3 = nums[3], p4 = nums[n-1];

    for (let i = 0; i < n; i++) {
        //if(p1 !== nums[i]){
            //console.log(nums[i]);
            for (let j = i+1; j < n;j++) {
                //if(p2 !== nums[j]){
                    let front = j+1, back = n-1;
                    let rem = target - (nums[i]+nums[j]);
                    while(front < back){
                        if((nums[front] + nums[back]) < rem){
                            front++;
                        }else if((nums[front] + nums[back]) > rem){
                            back--;
                        }else {
                            res.add((nums[i]+','+nums[j]+','+nums[front]+','+nums[back]));
                            front++;
                            back--;
                        }
                        
                    }
                    //p2 = nums[j];
                    //j++;
                //}else {
                    //j++;
                //}
            
            
            }
            //p1 = nums[i];
            //i++;
        //}else {
            //i++;
        //}
    }
    var arr = [];
    res.forEach(item => {
        //console.log(item);
        arr.push(item.split(','));
    });
    return arr;
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3],0));