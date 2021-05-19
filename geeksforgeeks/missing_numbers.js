class Solution{
    MissingNumber(array,n){
        //code here
        var map = {};
        for(let i=0; i<n; i++){
            map[array[i]] = true;
        }
        for(let i=1; i<=n; i++){
            if(!map[i]){
                return i;
            }
        }
    }
}