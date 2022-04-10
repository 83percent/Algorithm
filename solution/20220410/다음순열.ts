(() => {
    let input = [
        '5',
        '5 4 3 2 1'
    ];
    const L = parseInt(input[0]);
    const permutations = input[1].split(" ").map(e => parseInt(e));
    let temp = 0;
    let breakPos = -1;
    for(let i = L-1; i >= 0; i--) {
        if(permutations[i] < temp) {
            breakPos = i;
            temp = permutations[i];
            break;
        } else {
            temp = permutations[i];
        }
    }
    if(breakPos < 0) console.log(-1);
    else {
        const result = permutations.slice(0, breakPos);
        const lessArray = permutations.slice(breakPos+1, permutations.length).sort((a,b) => a-b);
        const tempInputPos = result.length;
        
        result.push(-1, ...lessArray);
        result[tempInputPos] = temp;

        console.log(result.join(" "));
        
    }
})();
