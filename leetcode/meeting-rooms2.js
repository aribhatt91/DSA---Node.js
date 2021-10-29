/* 
http://lixinchengdu.github.io/algorithmbook/leetcode/meeting-rooms-ii.html
*/
var minMeetingRooms = function(intervals) {
    intervals.sort(function(a,b){
        return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
    });

    var startTime = intervals.map(function(item){
        return item[0];
    });
    var endTime = intervals.map(function(item){
        return item[1];
    });
    
    var i = 0, j = 0;
    var activate = 0, max = 0;
    while(i < len && j < len){
        if(startTime[i] < endTime[j]){
            activate++;
            i++;
        }else{
            activate--;
            j++;
        }
        max = Math.max(max, activate);
    }
    return max;
};

var arr = [[0, 30],[5, 10],[15, 20]];