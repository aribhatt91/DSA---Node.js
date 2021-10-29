/**
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var merge = function(intervals){
    var res = [];
    intervals.sort(function(a,b){
        return a[0] - b[0];
    });
    res.push(intervals[0]);

    var current_interval = res[0];

    for (let i = 1; i < intervals.length; i++) {
        if(current_interval[1] >= intervals[i][0]){
            current_interval[1] = Math.max(current_interval[1], intervals[i][1]);
        }else {
            res.push(intervals[i]);
            current_interval = res[res.length - 1];
        }
    }
    return res;
};
var insert = function(intervals, newInterval) {
    if(intervals.length === 0){
        intervals.push(newInterval);
        return intervals;
    }
    for (let i = 0; i < intervals.length; i++) {
        if(intervals[i][1] < newInterval[0]){
            if(i === intervals.length - 1){
                intervals.push(newInterval);
                break;
            }
            continue;
        }else {
            if(intervals[i][0] <= newInterval[0]){
                intervals[i][1] = Math.max(intervals[i][1], newInterval[1]);
            }else if(intervals[i][0] <= newInterval[1]){
                intervals[i][0] = Math.min(intervals[i][0], newInterval[0]);
                intervals[i][1] = Math.max(intervals[i][1], newInterval[1]);
            }else if(intervals[i][0] > newInterval[1]){
                //insert new element
                intervals.splice(i,0,newInterval);
            }
            break;
        }
        
    }

    return merge(intervals);
};

var arr = [[1,2],[3,5],[6,7],[8,10],[12,16]];
//[[2,3],[4,6],[5,7],[3,4]];
//[[1,4],[4,5]];
//[[1,3],[2,6],[8,10],[15,18]];
//[[2,3],[4,5],[6,7],[8,9],[1,10]];
console.log(insert(arr, [4,8]));