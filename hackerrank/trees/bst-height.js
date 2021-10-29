/* 
https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
*/
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }   
}

const height = (root) => {
    if(!root){
        return 0;
    }
    
}
