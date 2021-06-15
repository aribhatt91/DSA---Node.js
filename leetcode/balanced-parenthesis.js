/* 

*/
let COUNT = 0;
const countBalancedParenthesis = (str, l, r) => {
    console.log('start', str, l, r, COUNT);
    /* if(str === "" && l === 0 && r === 0){
        return 1;
    } else if(str === "" && (l > 0 || r > 0)){
        return 0;
    } else if(str !== "" && l === 0 && r === 0) {
        return 0;
    }*/
    if(l<0 && r < 0){
        return 0;
    }
    if(str.length >= 1 && (str[0] === ")" || r === 0 && str[str.length - 1] === "(" )){
        return 0;
    }
    let len = str.length;
    if(len >=2 ){
        if(str[len - 1] === ")" && str[len - 2] === "(") {
            str = str.substring(0, len - 2);
            l--;
            r--;
            COUNT++;
        }
    }
    console.log(COUNT, str, l, r);

    return COUNT + (l > 0 ? countBalancedParenthesis((str + "("), l-1, r) : 0) + (r > 0 && str.length > 0 ? countBalancedParenthesis((str + ")"), l, r-1) : 0);
}
const main = () => {
    let n = 4, str = [], res = [];
    //countBalancedParenthesis("", n, n)
    

    const backtrack = (open, close) => {
        if(open === close && open === n){
            res.push(str.join(''));
            return;
        }
        if(open < n){
            str.push("(");
            backtrack(open + 1, close);
            res.push(str.pop());
        }
        if(close < open) {
            str.push(")");
            backtrack(open, close + 1);
            res.push(str.pop());
        }
    };
    //backtrack(3,3);
    console.log(countBalancedParenthesis("",3,3));
    //console.log(res, res.length, str);
};

main();