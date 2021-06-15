/* 
https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon
*/
/* 
You are given a linked list of N nodes. Remove the loop from the linked list, if present. 
Note: X is the position of the node to which the last node is connected to. If it is 0, then there is no loop.
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
    //Function to remove a loop in the linked list.
    removeLoop(head)
    {
        //your code here
        while(head) {
            head.data = -1;
            if(head.next && head.next.data === -1){
                head.next = null;
                return 1;
            }
            head = head.next;
        }
        return 0;
    }
    
}