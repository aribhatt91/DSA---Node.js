/**
 * https://leetcode.com/problems/reorder-data-in-log-files/
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    var isDigit = function(c){
        return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
    };
    var sortFn = function(log1, log2) {
        var i1 = log1.indexOf(' '), i2 = log2.indexOf(' '),
            main1 = log1.substring(i1+1), main2 = log2.substring(i2+1),
            id1 = log1.substring(0, i1), id2 = log2.substring(0, i2);
        
        var isDigit1 = isDigit(main1[0]), 
        isDigit2 = isDigit(main2[0]);
        console.log(main1, main2, isDigit1, isDigit2);
        if(!isDigit1 && !isDigit2){
            var c = main1.localeCompare(main2);
            
            if(c === 0){
                return id1.localeCompare(id2);
            }
            console.log(main1, main2, c);
            return c;
            
        }else {
            return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
        }
    };
    
    logs.sort(sortFn);
    return logs;
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));