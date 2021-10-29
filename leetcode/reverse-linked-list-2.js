
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

    /* 
    Case 1 - start at head - return the right element
    Case 2 - start after head - return head
    */
 var reverseBetween = function(head, left, right) {
    var p1, p2;
    p1 = null;
    p2 = null;
    if(left === right){
        return head;
    }

    var t = head, t_head = null;

    var prev_index = null, next_index = null;
    var count = 1;
    while(t) {
        if(count === left){
            p1 = t;
        }else if(count === left-1){
            prev_index = t;
        }

        if(count === right){
            next_index = t.next;
            break;
        }
        count++;
        t = t.next;
    }
    if(!p1){
        return head;
    }
    t_head = p1;
    p2 = p1.next;
    while(p2){
        var temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
        if(p2 === next_index){
            break;
        }
    }
    if(!prev_index){
        head.next = next_index;
        head = p1;
    }else {
        prev_index.next = p1;
        t_head.next = next_index;
    }
    
    return head;
};

var printList = function(head) {
    var arr = [];
    var node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }

    console.log(arr);
};

var n1 = new ListNode(1),
n2 = new ListNode(2),
n3 = new ListNode(3),
n4 = new ListNode(4),
n5 = new ListNode(5),
n6 = new ListNode(6);

n1.next = n2;
/* n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6; */

printList(n1);

printList(reverseBetween(n1, 1, 2));