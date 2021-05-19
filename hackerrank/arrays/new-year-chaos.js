function minimumBribes(q) {
    let bribes = 0, chaotic = false;
    for (let index = q.length - 1; index >= 0; index--) {
        const element = q[index];
        if(element !== index+1){
            //bribes += (element - (index+1));
            if(index - 1 >= 0 && q[index - 1] === index+1){
                bribes++;
                swap(q, index-1, index);
            }else if(index - 2 >= 0 && q[index - 2] === index+1){
                bribes += 2;
                swap(q, index-2, index-1);
                swap(q, index-1, index);
            }else {
                chaotic = true; 
                break;
            }
        }else if(element < q[index-1]){
            //bribes++;
        }
    }
    
    if(chaotic){
        console.log('Too chaotic');
        //process.stdout.write("Too chaotic\n");
    }else {
        console.log(bribes);
        //process.stdout.write(bribes + '\n');
    }
}

minimumBribes([2,1,5,3,4]);
