const invert = (root) => {
    if(!root){
        return;
    }
    invert(root.left);
    invert(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}