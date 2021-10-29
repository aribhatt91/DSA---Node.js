/**
 * https://leetcode.com/problems/non-overlapping-intervals/submissions/
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort(function(a,b){
        return a[0] === b[0] ? (a[1] - a[0]) - (b[1] - b[0]) : a[0] - b[0];
    });

    var res = [],
    count = 0;
    res.push(intervals[0]);
    var hold = null;
    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1];
        if(intervals[i][0] >= last[1]) {
            if(hold){
                if(hold[1] <= intervals[0]){
                    res[res.length - 1] = hold;
                    hold = null;
                }
            }
            res.push(intervals[i]);            
        }else {
            if(last[1] > intervals[i][1]){
                res[res.length - 1] = intervals[i];
            }else {
                hold = intervals[i];
            }
            count++;
        }
        
    }
    return count;
};
//[[1,2],[2,3],[3,4],[1,3]]
//[[1,2],[1,2],[1,2]]
//[[1,2],[2,3]]
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));