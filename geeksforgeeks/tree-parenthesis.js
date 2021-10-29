/* 
https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/
*/

const construct = (str, start, end, map, inorder) => {
    let index = start;
    while(index < end){
        if(str[index] === '('){
            break;
        }
        index++;
    }
    let key = str.substring(start, index);
    if(start === end){
        key = str[start];
    }
    inorder.push(key);
    //console.log(key);
    if(str.charAt(index) !== "("){
        return;
    }
    let open_left = index,
    close_left = -1;

    if(str.charAt(open_left) === "("){
        close_left = map[open_left] || -1;
        close_left = Number(close_left);
    }else{
        open_left = -1;
    }

    let open_right = close_left > -1 ? close_left + 1 : -1,
    close_right = -1;

    if(open_right > -1 && str.charAt(open_right) === "("){
        close_right = map[open_right] || -1;
        close_right = Number(close_right);
    }
    //console.log(open_left, close_left, open_right, close_right);
    if(open_left > -1 && close_left > -1 && open_left < close_left){
        //left child
        construct(str, open_left + 1, close_left - 1, map, inorder);
    }
    if(open_right > -1 && close_right > -1 && open_right < close_right){
        //right child
        construct(str, open_right + 1, close_right -1, map, inorder);
    }
};

const main = () => {
    let str = "4(2(3)(1))(6(5))";

    let stk = [], res = [], map = {};
    for (let index = 0; index < str.length; index++) {
        const element = str.charAt(index);
        if(element === "("){
            stk.push(index);
        }else if(element === ")"){
            let p = stk.pop();
            map[p] = index;
        }
    }
    console.log(map);
    construct(str, 0, str.length, map, res);

    console.log(res);
};

main();