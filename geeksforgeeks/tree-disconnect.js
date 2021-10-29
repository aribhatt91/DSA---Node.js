

function solve(root) {
    var res = {size: 0}, count = 0;
    function disconnect(root, res){
        if(!root){
            return;
        }
        var lc = {size:0}, rc = {size:0};
        disconnect(root.left, lc);
        disconnect(root.right, rc);

        if(lc.size > 0 && lc.size%2 === 0){
            //console.log(root.key);
            count++;
        }else {
            res.size += lc.size;
        }
        if(rc.size && rc.size%2 === 0){
            //console.log(root.key);
            count++;
        }else {
            res.size += rc.size;
        }
        res.size += 1;
    }

    disconnect(root, res);
    console.log(count);
}

class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}

var n1 = new Node(1), n2 = new Node(2), n3 = new Node(3);
n1.left = n2;
n1.right = n3;
n2.left = new Node(4);
n2.right = new Node(5);
n3.left = new Node(6);
n3.right = new Node(7);
solve(n1);