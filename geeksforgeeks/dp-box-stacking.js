/* 
https://practice.geeksforgeeks.org/problems/box-stacking/1
You are given a set of N types of rectangular 3-D boxes, where the ith box has height h, width w and length l. You task is to create a stack of boxes which is as tall as possible, but you can only stack a box on top of another box if the dimensions of the 2-D base of the lower box are each strictly larger than those of the 2-D base of the higher box. Of course, you can rotate a box so that any side functions as its base.It is also allowable to use multiple instances of the same type of box. You task is to complete the function maxHeight which returns the height of the highest possible stack so formed.

*/


/**
 * @param {number[]} height
 * @param {number[]} width
 * @param {number[]} length
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    
    maxHeight(height, width, length, n)
    {
        //your code here
        //function maxHeightBf(height, width, length, n) {
            let tuples = [],
            ds = [];
            for (let i = 0; i < n; i++) {
                let h = height[i], l = length[i], w = width[i];
                if(l === h && l === w){
                    tuples.push([l*l, l]);
                }else if(l === h){
                    tuples.push([l*w, l]);
                    tuples.push([l*l, w]);
                }else if(w === h){
                    tuples.push([w*w, l]);
                    tuples.push([l*w, w]);
                }else if(l === w){
                    tuples.push([w*w, h]);
                    tuples.push([h*w, w]);
                }else {
                    tuples.push([l*w, h]);
                    tuples.push([l*h, w]);
                    tuples.push([h*w, l]);
                }
            }
            tuples.sort(function(a,b){
                return a[0] === b[0] ? b[1] - a[1] : b[0] - a[0];
            });
            let res = tuples[0][1];
            for (let i = 1; i < tuples.length; i++) {
                if(tuples[i][0] > tuples[i-1][0]){
                    res += tuples[i][1];
                }
                
            }
            return res;
        //}
        

    }
}