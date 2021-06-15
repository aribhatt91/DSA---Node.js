/* 
https://leetcode.com/problems/merge-two-sorted-lists/submissions/
https://www.youtube.com/watch?v=XIdigk956u0
*/

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const mergeTwoLists = (l1, l2) => {
    let dummy = ListNode();
    let tail = dummy;

    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            l1 = l1.next;
        }else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if(l1){
        tail.next = l1;
    }else if(l2){
        tail.next = l2;
    }
    return dummy.next;
}