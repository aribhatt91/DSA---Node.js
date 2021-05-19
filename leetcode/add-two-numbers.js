//https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2){return}
    var a1 = [], a2 = [], res;
    while(l1){
        a1.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        a2.push(l2.val);
        l2 = l2.next;
    }
    console.log(a1,a2);
    var add = function(arr1, arr2){
        var res = [], carry = 0, i=0;
        for(; i<arr2.length; i++){
            var sum = arr1[i] + arr2[i] + carry;
            if(sum > 9){
                sum = sum%10;
                carry = 1;
            }else {
                carry = 0;
            }
            res.push(sum);
        }
        for(;i<arr1.length; i++){
            var sum = arr1[i] + carry;
            if(sum > 9){
                sum = sum%10;
                carry = 1;
            }else {
                carry = 0;
            }
            res.push(sum);
        }
        if(carry){
            res.push(carry)
        }
        return res;
    }
    if(a1.length > a2.length){
        res = add(a1, a2);
    }else {
        res = add(a2, a1);
    }
    console.log(res);
    var ln = new ListNode(), next = null;
    for(var i=0; i<res.length; i++){
        if(i==0){
            ln.val = res[i];
            next = ln;
        }else {
            var n = new ListNode(res[i]);
            next.next = n;
            next = next.next;
        }
    }
    console.log(ln);
    return ln;
};