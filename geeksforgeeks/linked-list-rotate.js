class Node {
    constructor(data){
        this.data = data || null;
        this.next = null;
    }
}

const printList = (node) => {

    while(node){
        console.log(node.data);
        node = node.next;
    }
}
const rotateFull = (head) => {
    if(!head || !head.next){
        return head;
    }
    let ptr1 = head, ptr2 = head.next;
    ptr1.next = null;
    while(ptr2.next){
        let temp = ptr2;
        ptr2 = ptr2.next;
        temp.next = ptr1;
        ptr1 = temp;
    }
    if(ptr2){
        ptr2.next = ptr1;
    }
    printList(ptr2);
    return ptr2;
}

const rotate = (head, k) => {
    if(!head || !head.next){return head;}
    const findLen = (head) => {
        let len = 0;
        while(head){
            len++;
            head = head.next;
        }
        return len;
    }
    const length = findLen(head), 
    pos = k%length; 
    let ptr = head, count = 0, ptr2 = null;

    while(ptr && count < pos){
        ptr2 = ptr;
        ptr = ptr.next;
        count++;
    }
    ptr2.next = null;
    ptr2 = ptr;
    while(ptr && ptr.next){
        ptr = ptr.next;
    }
    ptr.next = head;

    console.log(ptr.data, ptr2);
    printList(ptr2);
}
const main = () => {
    let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3), n4 = new Node(4), n5 = new Node(5);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    rotate(n1, 5);
}

main();