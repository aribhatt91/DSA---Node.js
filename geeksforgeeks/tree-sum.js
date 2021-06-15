/*
https://practice.geeksforgeeks.org/problems/sum-tree/1/?company[]=Amazon&company[]=Amazon&difficulty[]=1&page=1&category[]=Tree&query=company[]Amazondifficulty[]1page1company[]Amazoncategory[]Tree

*/
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}

/**
 * @param {Node} root
 * @return {boolean}
*/
class Solution {
	// Should return true if tree is Sum Tree, else false
    sumTreeUtil(root) {
        if(!root){
            return true;
        }

        this.sumTreeUtil(root.left);
        this.sumTreeUtil(root.right);

        this.left_sum = this.left_sum + (root.left ? root.left.data : 0);
        this.right_sum = this.right_sum + (root.right ? root.right.data : 0);

        console.log(root.data, 'left -> ', this.left_sum, 'right -> ', this.right_sum);

        if(root.data === this.right_sum + this.left_sum){
            return true;
        }
        return false;
    }
  	isSumTree(root){
  		//code here
        this.left_sum = 0;
        this.right_sum = 0;
        return this.sumTreeUtil(root);
  	}
}

const main = () => {
    let s = new Solution();
    let n1 = new Node(70), 
    n2 = new Node(20), 
    n3 = new Node(30), 
    n4 = new Node(10), 
    n5 = new Node(10);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    let a = s.isSumTree(n1);
    console.log(a);
}

main();

/* 
int isSumTree(struct node* node)
{
    int ls, rs;

    // If node is NULL or it's a leaf
    // node then return true 
    if (node == NULL ||
       (node->left == NULL && 
        node->right == NULL))
        return 1;

   // Get sum of nodes in left and
   // right subtrees 
   ls = sum(node->left);
   rs = sum(node->right);

   // If the node and both of its 
   // children satisfy the property 
   // return 1 else 0
    if ((node->data == ls + rs) &&
          isSumTree(node->left) &&
          isSumTree(node->right))
        return 1;

   return 0;
}

*/