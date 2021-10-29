const findLevel = (root, key, level) => {
    if(!root){
        return -1;
    }
    if(root.data === key){
        return 0;
    }
    let level_left = findLevel(root.left, key, level + 1);
    return level_left > -1 ? level_left : findLevel(root.right, key, level + 1);
}