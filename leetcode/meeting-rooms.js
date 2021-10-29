var canAttendMeetings = function(intervals) {
    intervals.sort(function(a,b){
        return a[1] - b[1];
    });

    for (let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i-1][1]){
            return false;
        }
    }

    return true;
};

var canAttendMeetings = function(intervals) {
    intervals.sort(function(a,b){
        return a[0] - b[0];
    });

    for (let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i-1][1]){
            return false;
        }
    }

    return true;
};