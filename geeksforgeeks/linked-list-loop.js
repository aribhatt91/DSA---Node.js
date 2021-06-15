/* 
https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon

*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        //your code here
        let next = head.next;
        head.data = -1;
        while(next) {
            if(next.data === -1){
                return 1;
            }
            next.data = -1;
            next = next.next;
        }
        return 0;
    }
    
}