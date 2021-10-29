/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    intervals.sort(function(o1,o2){
        return o1[0] - o2[0];
    });
    
    var res = [];
    res.push(intervals[0]);
    var current_interval = res[0];

    console.log('sorted',intervals);
    
    for(var i=1; i<intervals.length; i++){
        if(intervals[i][0] <= current_interval[1]){
            current_interval[1] = Math.max(intervals[i][1], current_interval[1]);
        }else {
            res.push(intervals[i]);
            current_interval = res[res.length - 1];
        }
        console.log(res);
    }
    return res;
};


var arr = [[2,3],[4,5],[6,7],[8,9],[1,10]];
//[[2,3],[4,6],[5,7],[3,4]];
//[[1,4],[4,5]];
//[[1,3],[2,6],[8,10],[15,18]];
//[[2,3],[4,5],[6,7],[8,9],[1,10]];
console.log(merge(arr));