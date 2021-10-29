
/* 
https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionalpage1sortBysubmissionscompany[]Amazon
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
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node)
    {
        //your code here
        if(!node){
            return null;
        }
        let len = 1, count = 1;
        let next = node.next;
        while(next){
            len++;
            next = next.next;
        }
        while(count <= Math.floor(len/2) && node){
            count++;
            node = node.next;
        }
        return node.data;
    }
}