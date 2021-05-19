//https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1
//https://www.geeksforgeeks.org/count-triplets-such-that-one-of-the-numbers-can-be-written-as-sum-of-the-other-two/
class Solution {
    
    countTriplet(arr,n){
       //code here
       let t = 0, freq = {}, max = -1;
       if(n === 1){return 0}
       arr.sort((a,b) => a-b);
       max = arr[n-1];
       
       for(let i=n-1; i>=0; i--){
           
           if(!freq[arr[i]]){
               freq[arr[i]] = 1;
           }else {
               freq[arr[i]]++;
           }
       }
       //console.log('freq', freq);
       let keys = Object.keys(freq);
       //console.log(keys);
       for(let i=0; i<keys.length; i++){
           let k = keys[i];
           if(freq[k*2] && freq[k] > 1){
               t += (freq[k] * (freq[k]-1)/2 * freq[k*2]);
               console.log(k, k, k*2);
           }
       }
       
       for(let i=0; i<keys.length; i++){
           let x = freq[keys[i]]; 
           //console.log(keys[i]);
           for(let j=i+1; j<keys.length; j++){
               //console.log(keys[i], keys[j], Number(keys[i]) + Number(keys[j]));
               let y = freq[keys[j]], z = freq[Number(keys[i]) + Number(keys[j])];
               //console.log(x,y,z);
               if(z){
                   t += x * y * z;
                   //console.log(x,y,z);
               }
               
           } 
       }
       return t;
    }
}