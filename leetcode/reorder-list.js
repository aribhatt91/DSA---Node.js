//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var arr = [];
    var node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }

    for (let i = 0, j=arr.length-1; i < j-1; i++, j--) {
        const e1 = arr[i], e2 = arr[j];
        const temp = e1.next;
        e1.next = e2;
        e2.next = temp;
        arr[j-1].next = null;
    }
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
//n2.next = n3;
//n3.next = n4;
//n4.next = n5;
//n5.next = n6;

printList(n1);
reorderList(n1);
//console.log(n1);
printList(n1);
